#ifndef LFO_H
#define LFO_H

#include <Arduino.h>

class LFO {
public:
    LFO(float sampleRate);
    void setRate(float rateHz);
    float process();

private:
    float phase;
    float phaseInc;
    float sampleRate;
    float rate;

    // Using a static pre-calculated LUT in RAM to avoid PROGMEM read penalties
    // inside the tight loop if we can afford 256 floats (1KB).
    // Since memory is ok, we'll keep it as a static table.
    static bool lutInitialized;
    static float sineLUT[256];
};

#endif
