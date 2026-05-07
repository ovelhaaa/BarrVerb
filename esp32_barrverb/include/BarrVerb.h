#ifndef BARRVERB_H
#define BARRVERB_H

#include <Arduino.h>
#include "decompiled/DecompiledTypes.h"

class SVF {
   public:
    void setFreq(float cutoff, float q, float samplerate);
    float lpStep(float in);

   private:
    float w, a, b;
    float c1, c2, d0;
    float z1, z2, x;
};

class BarrVerb {
   public:
    enum class EngineType : uint8_t {
        Interpreter = 0,
        Decompiled = 1,
    };

    enum class EffectFamily : uint8_t {
        Midiverb2 = 0,
        Midifex = 1,
    };

    BarrVerb();
    // Initialize things that might depend on sampling rate
    void setSampleRate(float sr);

    // Process a block of stereo samples.
    // input: interleaved stereo (L, R, L, R...)
    // output: interleaved stereo
    // frames: number of stereo pairs (so buffer length is frames * 2)
    void run(const int16_t *input, int16_t *output, uint32_t frames);

    void setProgram(uint8_t programIndex);
    void setEngine(EngineType engineType);
    void setFamily(EffectFamily familyType);
    const char* getProgramName(uint8_t programIndex);

    // Public access for testing/debugging
    int16_t getRamUsage() { return 16384; }

   private:
    SVF f1, f2;

    int16_t ai = 0, li = 0, acc = 0;
    uint16_t ptr = 0;
    uint16_t prog_offset = 0;

    // RAM buffer - global static is requested, but class member is cleaner if singleton.
    // However, 16384 * 2 = 32KB. ESP32 stack is small, heap is large.
    // I'll use a pointer and allocate in constructor or use a static member.
    // User requested: "allocated as a global static array or dynamically with a check for success".
    int16_t *ram;

    // RAM cache for the current program instructions (128 words)
    // Accessing this in IRAM/RAM is faster than reading from Flash in a tight loop.
    uint16_t currentProgram[128];

    // lowpass buffer for the block processing
    // Original used `new float[getBufferSize()]`.
    // I'll allocate a small fixed buffer or handle per-sample to avoid large allocation if possible.
    // The original `run` loop first processed all filters then all DSP.
    // I can process in small chunks (e.g. 64 frames) to save memory if frames is large.
    // Or just process sample by sample (but original structure implies block processing).
    // I'll use a scratch buffer for filter output if needed, or process sample-by-sample.

    uint8_t program;
    EngineType engine = EngineType::Interpreter;
    EffectFamily family = EffectFamily::Midiverb2;
    float sampleRate = 44100.0f;
    decompiled::LfoValue lfo1Phase = 0;
    decompiled::LfoValue lfo2Phase = 0;
    decompiled::LfoValue lfo1Increment = 0;
    decompiled::LfoValue lfo2Increment = 0;
};

#endif
