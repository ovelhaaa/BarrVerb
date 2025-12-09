#include <Arduino.h>
#include <driver/i2s.h>
#include "BarrVerb.h"

// I2S Configuration
#define I2S_NUM         I2S_NUM_0
#define I2S_SAMPLE_RATE 44100
#define I2S_BUFF_SIZE   128  // Frames per buffer

// Generic I2S Pins (suitable for PCM5102 or generic DAC)
// Change these for specific board if needed.
// Lolin32 Lite usually has no specific I2S pins, but these are common defaults.
#define I2S_BCLK_PIN    26
#define I2S_LRCK_PIN    25
#define I2S_DOUT_PIN    22
#define I2S_DIN_PIN     35 // Not used in generator mode

BarrVerb reverb;
int16_t inputBuffer[I2S_BUFF_SIZE * 2];
int16_t outputBuffer[I2S_BUFF_SIZE * 2];

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

void setup() {
    Serial.begin(115200);
    Serial.println("BarrVerb ESP32 Starting...");

    setupI2S();

    reverb.setSampleRate(I2S_SAMPLE_RATE);
    reverb.setProgram(0); // Start with first program

    Serial.println("Program: 0");
    Serial.println(reverb.getProgramName(0));
}

void loop() {
    size_t bytes_written;

    // 1. Generate Input Signal
    generateSignal(inputBuffer, I2S_BUFF_SIZE);

    // 2. Process Reverb
    reverb.run(inputBuffer, outputBuffer, I2S_BUFF_SIZE);

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
        }
    }
}
