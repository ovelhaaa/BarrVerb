#include "ModulationWrapper.h"

ModulationWrapper::ModulationWrapper(float sampleRate) {
    chorus = new Chorus(sampleRate);
    phaser = new Phaser(sampleRate);
    type = 0;
}

ModulationWrapper::~ModulationWrapper() {
    if (chorus) delete chorus;
    if (phaser) delete phaser;
}

void ModulationWrapper::setParameters(int typeVal, float rate, float depth, float mix, float feedback) {
    type = typeVal;
    if (type == 1 && chorus) {
        chorus->setParameters(rate, depth, mix);
    } else if (type == 2 && phaser) {
        phaser->setParameters(rate, depth, mix, feedback);
    }
}

IRAM_ATTR void ModulationWrapper::process(float inL, float inR, float* outL, float* outR) {
    if (type == 1 && chorus) {
        chorus->process(inL, inR, outL, outR);
    } else if (type == 2 && phaser) {
        phaser->process(inL, inR, outL, outR);
    } else {
        *outL = inL;
        *outR = inR;
    }
}
