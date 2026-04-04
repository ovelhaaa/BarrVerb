#include "Phaser.h"
#include <math.h>

Phaser::Phaser(float sampleRate) : lfo(sampleRate), sampleRate(sampleRate) {
    stagesCount = 4;
    rate = 0.5f;
    depth = 0.8f;
    mix = 0.5f;
    feedback = 0.4f;
    z1FeedbackL = 0.0f;
    z1FeedbackR = 0.0f;

    lutInitialized = false;
    lfo.setRate(rate);
}

void Phaser::initLUT() {
    for (int i = 0; i < 256; i++) {
        float fc = 400.0f + (3600.0f * ((float)i / 255.0f));
        float w = tanf(PI * fc / sampleRate);
        a1LUT[i] = (1.0f - w) / (1.0f + w);
    }
    lutInitialized = true;
}

void Phaser::setParameters(float rateVal, float depthVal, float mixVal, float fbVal) {
    rate = rateVal;
    depth = depthVal;
    mix = mixVal;
    feedback = fbVal;
    lfo.setRate(rate);

    if (!lutInitialized) {
        initLUT();
    }
}

IRAM_ATTR void Phaser::process(float inL, float inR, float* outL, float* outR) {
    if (!lutInitialized) {
        initLUT();
    }

    float lfoVal = lfo.process(); // -1.0 to 1.0

    // Map LFO to a 0.0-1.0 range, scaled by depth
    float sweepVal = ((lfoVal + 1.0f) * 0.5f) * depth;
    // Base value without depth is 0.5 (center)
    float center = 0.5f;
    // Final normalized sweep value (0.0 to 1.0)
    float normVal = center + (sweepVal - (depth * 0.5f));
    if (normVal < 0.0f) normVal = 0.0f;
    if (normVal > 1.0f) normVal = 1.0f;

    // Use normalized sweep to index LUT
    float lutPos = normVal * 255.0f;
    int idx1 = (int)lutPos;
    int idx2 = idx1 + 1;
    if (idx2 > 255) idx2 = 255;
    float frac = lutPos - (float)idx1;

    float a1Val1 = a1LUT[idx1];
    float a1Val2 = a1LUT[idx2];
    float a1 = a1Val1 + frac * (a1Val2 - a1Val1);

    float stageInL = inL + z1FeedbackL * feedback;
    float stageInR = inR + z1FeedbackR * feedback;

    for (int i = 0; i < stagesCount; i++) {
        stagesL[i].setGain(a1);
        stagesR[i].setGain(a1);
        stageInL = stagesL[i].process(stageInL);
        stageInR = stagesR[i].process(stageInR);
    }

    z1FeedbackL = stageInL;
    z1FeedbackR = stageInR;

    *outL = inL * (1.0f - mix) + stageInL * mix;
    *outR = inR * (1.0f - mix) + stageInR * mix;
}
