#include "LFO.h"
#include <math.h>

bool LFO::lutInitialized = false;
float LFO::sineLUT[256];

LFO::LFO(float sampleRate) : phase(0.0f), sampleRate(sampleRate) {
    setRate(1.0f);
    if (!lutInitialized) {
        for (int i = 0; i < 256; i++) {
            sineLUT[i] = sinf((float)i / 256.0f * (float)PI * 2.0f);
        }
        lutInitialized = true;
    }
}

void LFO::setRate(float rateHz) {
    rate = rateHz;
    phaseInc = rate / sampleRate;
}

IRAM_ATTR float LFO::process() {
    float pos = phase * 256.0f;
    int index = (int)pos;
    float frac = pos - (float)index;

    int idx1 = index & 255;
    int idx2 = (index + 1) & 255;

    float val1 = sineLUT[idx1];
    float val2 = sineLUT[idx2];

    float out = val1 + frac * (val2 - val1);

    phase += phaseInc;
    if (phase >= 1.0f) phase -= 1.0f;

    return out;
}
