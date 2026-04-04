#ifndef PHASER_H
#define PHASER_H

#include <Arduino.h>
#include "LFO.h"

class AllPassFilter {
public:
    AllPassFilter() : a1(0.0f), z1(0.0f) {}

    void setGain(float a1Val) { a1 = a1Val; }

    IRAM_ATTR float process(float input) {
        float output = z1 - a1 * input;
        z1 = input + a1 * output;
        return output;
    }
private:
    float a1;
    float z1;
};

class Phaser {
public:
    Phaser(float sampleRate);

    void setParameters(float rate, float depth, float mix, float feedback);
    void process(float inL, float inR, float* outL, float* outR);

private:
    void initLUT();

    AllPassFilter stagesL[4];
    AllPassFilter stagesR[4];
    LFO lfo;

    float sampleRate;
    float rate;
    float depth;
    float mix;
    float feedback;
    int stagesCount;
    float z1FeedbackL;
    float z1FeedbackR;

    bool lutInitialized;
    float a1LUT[256];
};

#endif
