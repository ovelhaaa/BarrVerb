#include "Chorus.h"

Chorus::Chorus(float sampleRate) : lfo(sampleRate), sampleRate(sampleRate) {
    maxDelaySamples = (int)ceilf(sampleRate * 0.05f); // 50ms max delay = ~2205 frames

    delayLineL = (float*)malloc(maxDelaySamples * sizeof(float));
    delayLineR = (float*)malloc(maxDelaySamples * sizeof(float));

    if (delayLineL) memset(delayLineL, 0, maxDelaySamples * sizeof(float));
    if (delayLineR) memset(delayLineR, 0, maxDelaySamples * sizeof(float));

    writeIndex = 0;
    baseDelayMs = 10.0f;
    depthMs = 5.0f;
    mix = 0.5f;

    lfo.setRate(1.0f);
}

Chorus::~Chorus() {
    if (delayLineL) free(delayLineL);
    if (delayLineR) free(delayLineR);
}

void Chorus::setParameters(float rate, float depth, float mixVal) {
    lfo.setRate(rate);
    depthMs = depth;
    mix = mixVal;
}

IRAM_ATTR void Chorus::process(float inL, float inR, float* outL, float* outR) {
    if (!delayLineL || !delayLineR) {
        *outL = inL;
        *outR = inR;
        return;
    }

    float lfoVal = lfo.process(); // -1.0 to 1.0
    float sweepVal = (lfoVal + 1.0f) * 0.5f; // 0 to 1

    float currentDelayMs = baseDelayMs + (sweepVal * depthMs);
    float currentDelaySamples = currentDelayMs * (sampleRate / 1000.0f);

    float readPos = (float)writeIndex - currentDelaySamples;
    if (readPos < 0.0f) readPos += (float)maxDelaySamples;

    int readIdx1 = (int)readPos;
    int readIdx2 = readIdx1 + 1;
    if (readIdx2 >= maxDelaySamples) readIdx2 -= maxDelaySamples;

    float frac = readPos - (float)readIdx1;

    float dl1 = delayLineL[readIdx1];
    float dl2 = delayLineL[readIdx2];
    float delayOutL = dl1 + frac * (dl2 - dl1);

    float dr1 = delayLineR[readIdx1];
    float dr2 = delayLineR[readIdx2];
    float delayOutR = dr1 + frac * (dr2 - dr1);

    delayLineL[writeIndex] = inL;
    delayLineR[writeIndex] = inR;

    writeIndex++;
    if (writeIndex >= maxDelaySamples) writeIndex = 0;

    *outL = inL * (1.0f - mix) + delayOutL * mix;
    *outR = inR * (1.0f - mix) + delayOutR * mix;
}
