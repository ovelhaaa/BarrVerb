#ifndef CHORUS_H
#define CHORUS_H

#include <Arduino.h>
#include "LFO.h"

class Chorus {
public:
    Chorus(float sampleRate);
    ~Chorus();

    void setParameters(float rate, float depth, float mix);
    void process(float inL, float inR, float* outL, float* outR);

private:
    float* delayLineL;
    float* delayLineR;
    int writeIndex;
    int maxDelaySamples;

    LFO lfo;

    float depthMs;
    float baseDelayMs;
    float mix;
    float sampleRate;
};

#endif
