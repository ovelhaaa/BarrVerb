#pragma once

#include <Arduino.h>
#include "DisplayManager.h"
#include "Joystick.h"
#include "BarrVerb.h"

class UIController {
public:
    enum class Unit {
        MIDIVERB_I = 1,
        MIDIVERB_II = 2,
        MIDIFEX = 3
    };

    UIController(DisplayManager& display, Joystick& joystick, BarrVerb& reverb);

    void begin();
    void update();

private:
    DisplayManager& display;
    Joystick& joystick;
    BarrVerb& reverb;

    Unit currentUnit = Unit::MIDIVERB_II; // Default to MidiVerb II
    Unit activeUnit = Unit::MIDIVERB_II;

    int currentProgram = 0;
    int activeProgram = 0;

    unsigned long lastActivityTime = 0;
    const unsigned long inactivityTimeout = 2000; // 2 seconds

    bool isDirty = false;

    void updateDisplayBase();
    int getMaxProgramForUnit(Unit u);
    void applySettings();
    const char* getProgramName(Unit u, int prog);
};
