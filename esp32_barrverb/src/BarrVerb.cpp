#include "BarrVerb.h"
#include "rom.h"

void SVF::setFreq(float cutoff, float q, float samplerate) {
    z1 = z2 = 0;
    // Pre-calculate constants
    // w = 2 * tan(pi * cutoff / samplerate)
    // Avoid tan if possible? No, it's init only.
    w = 2.0f * tanf(3.14159f * (cutoff / samplerate));
    a = w / q;
    b = w * w;

    c1 = (a + b) / (1.0f + a * 0.5f + b * 0.25f);
    c2 = b / (a + b);

    d0 = c1 * c2 * 0.25f;
}

float SVF::lpStep(float in) {
    x = in - z1 - z2;
    z2 += c2 * z1;
    z1 += c1 * x;
    return d0 * x + z2;
}

BarrVerb::BarrVerb() {
    // Allocate RAM buffer
    ram = (int16_t*) malloc(sizeof(int16_t) * 16384);
    if (ram) {
        memset(ram, 0, sizeof(int16_t) * 16384);
    }

    // Initialize filters with defaults
    setSampleRate(44100.0f);

    // Default program
    setProgram(0);
}

void BarrVerb::setSampleRate(float sr) {
    sampleRate = sr;
    f1.setFreq(5916.0f, .6572f, sampleRate);
    f2.setFreq(9458.0f, 2.536f, sampleRate);
}

void BarrVerb::setProgram(uint8_t programIndex) {
    program = programIndex;
    if (program > 63) program = 0;
    // Calculate offset in ROM (128 words per program)
    prog_offset = (program & 0x3f) << 7;
}

const char* BarrVerb::getProgramName(uint8_t programIndex) {
    // prog_name is an array of const char* in PROGMEM?
    // In rom.h we defined it as const char* const prog_name[].
    // If the strings themselves are in flash, we might need to handle that,
    // but usually string literals are fine.
    return prog_name[programIndex & 0x3f];
}

void BarrVerb::run(const int16_t *input, int16_t *output, uint32_t frames) {
    if (!ram) return;

    // Load state variables to locals for performance
    int16_t l_acc = acc;
    uint16_t l_ptr = ptr;
    int16_t l_ai = ai;
    int16_t l_li = li;

    // Process 2 frames at a time
    for (uint32_t i = 0; i < frames; i += 2) {
        // --- Input Processing (Sample i) ---
        float inL1 = input[i * 2] / 32768.0f;
        float inR1 = input[i * 2 + 1] / 32768.0f;
        float mono1 = (inL1 + inR1) * 0.5f;
        float lp1 = f2.lpStep(f1.lpStep(mono1));

        // --- Input Processing (Sample i+1) ---
        // We must process the filter for every sample to maintain filter state correctly
        if (i + 1 < frames) {
            float inL2 = input[(i + 1) * 2] / 32768.0f;
            float inR2 = input[(i + 1) * 2 + 1] / 32768.0f;
            float mono2 = (inL2 + inR2) * 0.5f;
            // discard result, just update state.
            // Wait, does the reverb use it? Original code filtered all samples into lowpass[],
            // but then loop for DSP used lowpass[i] where i incremented by 2.
            // So yes, it only used every 2nd filtered sample.
            f2.lpStep(f1.lpStep(mono2));
        }

        // Prepare input for DSP engine
        // Scale factor 2048 matches original code.
        int16_t dsp_in = (int16_t)(lp1 * 2048.0f);

        int16_t out_L = 0;
        int16_t out_R = 0;

        // --- DSP Loop (128 steps) ---
        for (uint8_t step = 0; step < 128; step++) {
            uint16_t opcode = pgm_read_word(&rom[prog_offset + step]);

            switch (opcode & 0xc000) {
                case 0x0000:
                    l_ai = ram[l_ptr];
                    l_li = l_acc + (l_ai >> 1);
                    break;
                case 0x4000:
                    l_ai = ram[l_ptr];
                    l_li = (l_ai >> 1);
                    break;
                case 0x8000:
                    l_ai = l_acc;
                    ram[l_ptr] = l_ai;
                    l_li = l_acc + (l_ai >> 1);
                    break;
                case 0xc000:
                    l_ai = l_acc;
                    ram[l_ptr] = -l_ai;
                    l_li = -(l_ai >> 1);
                    break;
            }

            // Clamp ai to 12-bit range (+/- 2047)
            if (l_ai > 2047) l_ai = 2047;
            else if (l_ai < -2047) l_ai = -2047;

            // Step-specific logic
            if (step == 0x00) {
                // Load RAM with input
                ram[l_ptr] = dsp_in;
            } else if (step == 0x60) {
                // Output Right
                out_R = l_ai;
            } else if (step == 0x70) {
                // Output Left
                out_L = l_ai;
            } else {
                // Latch accumulator
                l_acc = l_li;
            }

            // Update delay pointer
            l_ptr += opcode & 0x3fff;
            l_ptr &= 0x3fff;
        }

        // --- Output Processing ---
        // Scale back up to 16-bit range.
        // Original: (float)ai / 2048. We want int16 (x 32768).
        // 32768 / 2048 = 16.
        int16_t final_L = out_L * 16;
        int16_t final_R = out_R * 16;

        // Write to sample i
        output[i * 2] = final_L;
        output[i * 2 + 1] = final_R;

        // Write to sample i+1 (hold sample)
        if (i + 1 < frames) {
            output[(i + 1) * 2] = final_L;
            output[(i + 1) * 2 + 1] = final_R;
        }
    }

    // Save state variables
    acc = l_acc;
    ptr = l_ptr;
    ai = l_ai;
    li = l_li;
}
