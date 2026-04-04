#ifndef MODULATION_WRAPPER_H
#define MODULATION_WRAPPER_H

#include <Arduino.h>
#include "Chorus.h"
#include "Phaser.h"

class ModulationWrapper {
public:
    ModulationWrapper(float sampleRate);
    ~ModulationWrapper();

    void setParameters(int type, float rate, float depth, float mix, float feedback);
    void process(float inL, float inR, float* outL, float* outR);

private:
    Chorus* chorus;
    Phaser* phaser;
    int type; // 0: None, 1: Chorus, 2: Phaser
};

#endif
