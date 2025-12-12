#include <Arduino.h>
#include <driver/i2s.h>
#include "BarrVerb.h"
#include <math.h>

// I2S Configuration
#define I2S_NUM         I2S_NUM_0
#define I2S_SAMPLE_RATE 44100
#define I2S_BUFF_SIZE   128  // Frames per buffer

// Generic I2S Pins (suitable for PCM5102 or generic DAC)
#define I2S_BCLK_PIN    26
#define I2S_LRCK_PIN    25
#define I2S_DOUT_PIN    22
#define I2S_DIN_PIN     35 // Not used in generator mode

BarrVerb reverb;
int16_t inputBuffer[I2S_BUFF_SIZE * 2];
int16_t outputBuffer[I2S_BUFF_SIZE * 2];

enum WaveformType {
    SINE,
    SAWTOOTH,
    TRIANGLE,
    SQUARE
};

WaveformType currentWaveform = SINE;

class MelodyGen {
private:
    float phase;
    float frequency;
    int noteIndex;
    int timer;
    const float notes[16] = { 130.81, 164.81, 196.00, 246.94, 261.63, 329.63, 392.00, 493.88, 523.25, 392.00, 329.63, 261.63, 246.94, 196.00, 164.81, 130.81 };

public:
    MelodyGen() {
        phase = 0;
        frequency = 440.0;
        noteIndex = 0;
        timer = 0;
    }

    float next() {
        if (++timer > 12000) {
            timer = 0;
            noteIndex = esp_random() % 16;
            frequency = notes[noteIndex];
        }

        phase += (2.0f * M_PI * frequency) / I2S_SAMPLE_RATE;
        if (phase >= 2.0f * M_PI) phase -= 2.0f * M_PI;

        float out = 0.0f;
        switch(currentWaveform) {
            case SINE:
                out = sinf(phase);
                break;
            case SAWTOOTH:
                out = ((phase / M_PI) - 1.0f) * 0.4f;
                break;
            case TRIANGLE:
                out = 2.0f * fabsf(phase / M_PI - 1.0f) - 1.0f;
                break;
            case SQUARE:
                out = (phase < M_PI) ? 1.0f : -1.0f;
                break;
        }
        return out * 0.5f;
    }
};

MelodyGen melodyGen;

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
        float sampleFloat = melodyGen.next();
        int16_t sample = (int16_t)(sampleFloat * 32000.0f);

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

    Serial.println("Type 'list' to see current parameters.");
}

String serialBuffer = "";

void processCommand(String command) {
    command.trim();
    if (command == "list") {
        Serial.printf("Program: %d - %s\n", 0 /* we need to track program index */, reverb.getProgramName(0)); // Wait, I need to track program globally
        Serial.print("Waveform: ");
        switch (currentWaveform) {
            case SINE: Serial.println("SINE"); break;
            case SAWTOOTH: Serial.println("SAWTOOTH"); break;
            case TRIANGLE: Serial.println("TRIANGLE"); break;
            case SQUARE: Serial.println("SQUARE"); break;
        }
    }
}

// Track program index globally
int currentProgramIndex = 0;

void loop() {
    size_t bytes_written;

    // 1. Generate Input Signal
    generateSignal(inputBuffer, I2S_BUFF_SIZE);

    // 2. Process Reverb
    reverb.run(inputBuffer, outputBuffer, I2S_BUFF_SIZE);

    // 3. Output to I2S
    i2s_write(I2S_NUM, outputBuffer, sizeof(outputBuffer), &bytes_written, portMAX_DELAY);

    // Serial control
    while (Serial.available()) {
        char c = Serial.read();

        // Handle single-char commands immediately if not building a command string
        // But the requirement asks for "list" command.
        // Let's support both single chars (+, -, s) and line-buffered commands.

        if (c == '\n' || c == '\r') {
            if (serialBuffer.length() > 0) {
                if (serialBuffer == "list") {
                     Serial.printf("Program: %d - %s\n", currentProgramIndex, reverb.getProgramName(currentProgramIndex));
                     Serial.print("Waveform: ");
                     switch (currentWaveform) {
                         case SINE: Serial.println("SINE"); break;
                         case SAWTOOTH: Serial.println("SAWTOOTH"); break;
                         case TRIANGLE: Serial.println("TRIANGLE"); break;
                         case SQUARE: Serial.println("SQUARE"); break;
                     }
                }
                serialBuffer = "";
            }
        } else {
            serialBuffer += c;
        }

        // Keep direct control for compatibility or ease
        if (c == '+') {
            currentProgramIndex++;
            if (currentProgramIndex > 63) currentProgramIndex = 0;
            reverb.setProgram(currentProgramIndex);
            Serial.printf("Program: %d - %s\n", currentProgramIndex, reverb.getProgramName(currentProgramIndex));
        } else if (c == '-') {
            currentProgramIndex--;
            if (currentProgramIndex < 0) currentProgramIndex = 63;
            reverb.setProgram(currentProgramIndex);
            Serial.printf("Program: %d - %s\n", currentProgramIndex, reverb.getProgramName(currentProgramIndex));
        } else if (c == 's') {
            int wf = (int)currentWaveform;
            wf++;
            if (wf > 3) wf = 0;
            currentWaveform = (WaveformType)wf;
            Serial.print("Waveform changed to ");
            switch (currentWaveform) {
                case SINE: Serial.println("SINE"); break;
                case SAWTOOTH: Serial.println("SAWTOOTH"); break;
                case TRIANGLE: Serial.println("TRIANGLE"); break;
                case SQUARE: Serial.println("SQUARE"); break;
            }
        }
    }
}
