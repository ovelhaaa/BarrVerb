#include <Arduino.h>
#include <driver/i2s.h>
#include "BarrVerb.h"
#include "ModulationWrapper.h"

// I2S Configuration
#define I2S_NUM         I2S_NUM_0
#define I2S_SAMPLE_RATE 44100
#define I2S_BUFF_SIZE   128  // Frames per buffer

// Lolin32 Lite + PCM5102 I2S Pins
// These are the pins confirmed for the Lolin32 Lite board
#define I2S_BCLK_PIN    26  // Bit Clock
#define I2S_LRCK_PIN    25  // Word Select / Left-Right Clock
#define I2S_DOUT_PIN    22  // Data Out
#define I2S_DIN_PIN     35  // Data In (Not used for DAC output, input-only pin on ESP32)

BarrVerb reverb;
ModulationWrapper* modWrapper = nullptr;

int16_t inputBuffer[I2S_BUFF_SIZE * 2];
int16_t reverbBuffer[I2S_BUFF_SIZE * 2];
int16_t modBuffer[I2S_BUFF_SIZE * 2];
int16_t outputBuffer[I2S_BUFF_SIZE * 2];

// Modulation Routing State
enum ModRouting {
    ROUTE_WET_POST, // Modulate Reverb Output
    ROUTE_WET_PRE,  // Modulate Reverb Input
    ROUTE_DRY,      // Modulate Dry Output
    ROUTE_MIX       // Modulate Mixed Output
};
ModRouting currentRouting = ROUTE_WET_POST;
const char* routingNames[] = {"Wet (Post-Rev)", "Wet (Pre-Rev)", "Dry", "Mix"};

// Signal Generator State
enum SourceType {
    SRC_SILENCE,
    SRC_IMPULSE,
    SRC_SAWTOOTH,
    SRC_SINE
};

SourceType currentSource = SRC_IMPULSE;
uint32_t phase = 0;
bool impulseTriggered = false;
uint32_t impulseTimer = 0;

void setupI2S() {
    i2s_config_t i2s_config = {
        .mode = (i2s_mode_t)(I2S_MODE_MASTER | I2S_MODE_TX), // Transmit only
        .sample_rate = I2S_SAMPLE_RATE,
        .bits_per_sample = I2S_BITS_PER_SAMPLE_16BIT,
        .channel_format = I2S_CHANNEL_FMT_RIGHT_LEFT,
        .communication_format = I2S_COMM_FORMAT_I2S_MSB,
        .intr_alloc_flags = ESP_INTR_FLAG_LEVEL1,
        .dma_buf_count = 8,
        .dma_buf_len = I2S_BUFF_SIZE,
        .use_apll = false,
        .tx_desc_auto_clear = true,
        .fixed_mclk = 0
    };

    i2s_pin_config_t pin_config = {
        .bck_io_num = I2S_BCLK_PIN,
        .ws_io_num = I2S_LRCK_PIN,
        .data_out_num = I2S_DOUT_PIN,
        .data_in_num = I2S_DIN_PIN // Not used
    };

    i2s_driver_install(I2S_NUM, &i2s_config, 0, NULL);
    i2s_set_pin(I2S_NUM, &pin_config);
    i2s_set_clk(I2S_NUM, I2S_SAMPLE_RATE, I2S_BITS_PER_SAMPLE_16BIT, I2S_CHANNEL_STEREO);
}

void generateSignal(int16_t *buffer, uint32_t frames) {
    for (uint32_t i = 0; i < frames; i++) {
        int16_t sample = 0;

        switch (currentSource) {
            case SRC_SILENCE:
                sample = 0;
                break;
            case SRC_IMPULSE:
                // Trigger impulse every ~1 sec (44100 samples)
                if (impulseTimer == 0) {
                    sample = 32000;
                    impulseTimer = 44100;
                } else {
                    sample = 0;
                    impulseTimer--;
                }
                break;
            case SRC_SAWTOOTH:
                // Simple saw
                sample = (int16_t)(phase & 0xFFFF) - 32768;
                phase += 200; // Pitch control
                break;
            case SRC_SINE:
                 sample = (int16_t)(sin(phase * 0.01) * 30000);
                 phase++;
                 break;
        }

        // Write to stereo buffer
        buffer[i * 2] = sample;
        buffer[i * 2 + 1] = sample;
    }
}

inline int16_t clamp16(int32_t val) {
    if (val > 32767) return 32767;
    if (val < -32768) return -32768;
    return (int16_t)val;
}

void applyModulation(int16_t* inBuf, int16_t* outBuf, uint32_t frames) {
    for (uint32_t i = 0; i < frames; i++) {
        float inL = (float)inBuf[i * 2] / 32768.0f;
        float inR = (float)inBuf[i * 2 + 1] / 32768.0f;
        float outL, outR;
        if (modWrapper) {
            modWrapper->process(inL, inR, &outL, &outR);
        } else {
            outL = inL; outR = inR;
        }
        outBuf[i * 2] = clamp16((int32_t)(outL * 32768.0f));
        outBuf[i * 2 + 1] = clamp16((int32_t)(outR * 32768.0f));
    }
}

void setup() {
    Serial.begin(115200);
    Serial.println("BarrVerb ESP32 Starting...");

    setupI2S();

    reverb.setSampleRate(I2S_SAMPLE_RATE);
    reverb.setProgram(0); // Start with first program

    modWrapper = new ModulationWrapper(I2S_SAMPLE_RATE);

    Serial.println("Program: 0");
    Serial.println(reverb.getProgramName(0));
    Serial.println("Commands:");
    Serial.println("  + / - : Change Program");
    Serial.println("  s     : Change Input Source");
    Serial.println("  r     : Change Mod Routing");
    Serial.println("  c     : Toggle Chorus");
    Serial.println("  p     : Toggle Phaser");
    Serial.println("  0     : FX Off");
}

void loop() {
    size_t bytes_written;

    // 1. Generate Input Signal
    generateSignal(inputBuffer, I2S_BUFF_SIZE);

    // 2. Process Audio Graph based on Routing
    if (currentRouting == ROUTE_WET_POST) {
        // Dry -> Reverb -> Mod -> Output
        reverb.run(inputBuffer, reverbBuffer, I2S_BUFF_SIZE);
        applyModulation(reverbBuffer, modBuffer, I2S_BUFF_SIZE);

        for (uint32_t i = 0; i < I2S_BUFF_SIZE * 2; i++) {
            outputBuffer[i] = clamp16((inputBuffer[i] + modBuffer[i]) / 2);
        }
    } else if (currentRouting == ROUTE_WET_PRE) {
        // Dry -> Mod -> Reverb -> Output
        applyModulation(inputBuffer, modBuffer, I2S_BUFF_SIZE);
        reverb.run(modBuffer, reverbBuffer, I2S_BUFF_SIZE);

        for (uint32_t i = 0; i < I2S_BUFF_SIZE * 2; i++) {
            // Mix original dry with reverb (which has modulated input)
            outputBuffer[i] = clamp16((inputBuffer[i] + reverbBuffer[i]) / 2);
        }
    } else if (currentRouting == ROUTE_DRY) {
        // Dry -> Mod -> Output (Dry)  AND  Dry -> Reverb -> Output (Wet)
        reverb.run(inputBuffer, reverbBuffer, I2S_BUFF_SIZE);
        applyModulation(inputBuffer, modBuffer, I2S_BUFF_SIZE);

        for (uint32_t i = 0; i < I2S_BUFF_SIZE * 2; i++) {
            // Mix modulated dry with unmodulated reverb
            outputBuffer[i] = clamp16((modBuffer[i] + reverbBuffer[i]) / 2);
        }
    } else if (currentRouting == ROUTE_MIX) {
        // Dry -> Reverb -> Mix -> Mod -> Output
        reverb.run(inputBuffer, reverbBuffer, I2S_BUFF_SIZE);

        for (uint32_t i = 0; i < I2S_BUFF_SIZE * 2; i++) {
            modBuffer[i] = clamp16((inputBuffer[i] + reverbBuffer[i]) / 2);
        }

        applyModulation(modBuffer, outputBuffer, I2S_BUFF_SIZE);
    }

    // 3. Output to I2S
    i2s_write(I2S_NUM, outputBuffer, sizeof(outputBuffer), &bytes_written, portMAX_DELAY);

    // Simple Serial control to change programs
    if (Serial.available()) {
        char c = Serial.read();
        static int prog = 0;
        static int src = 1;

        if (c == '+') {
            prog++;
            if (prog > 63) prog = 0;
            reverb.setProgram(prog);
            Serial.printf("Program: %d - %s\n", prog, reverb.getProgramName(prog));
        } else if (c == '-') {
            prog--;
            if (prog < 0) prog = 63;
            reverb.setProgram(prog);
            Serial.printf("Program: %d - %s\n", prog, reverb.getProgramName(prog));
        } else if (c == 's') {
            src++;
            if (src > 3) src = 0;
            currentSource = (SourceType)src;
            Serial.printf("Source changed to %d\n", src);
        } else if (c == 'r') {
            currentRouting = (ModRouting)((currentRouting + 1) % 4);
            Serial.printf("Routing changed to: %s\n", routingNames[currentRouting]);
        } else if (c == 'c') {
            if (modWrapper) modWrapper->setParameters(1, 0.8f, 10.0f, 0.5f, 0.0f);
            Serial.println("Chorus ON");
        } else if (c == 'p') {
            if (modWrapper) modWrapper->setParameters(2, 0.4f, 0.8f, 0.5f, 0.5f);
            Serial.println("Phaser ON");
        } else if (c == '0') {
            if (modWrapper) modWrapper->setParameters(0, 0.0f, 0.0f, 0.0f, 0.0f);
            Serial.println("FX OFF");
        }
    }
}
