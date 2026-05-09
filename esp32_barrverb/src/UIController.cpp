#include "UIController.h"
#include <stdio.h>

UIController::UIController(DisplayManager& disp, Joystick& joy, BarrVerb& rev)
    : display(disp), joystick(joy), reverb(rev) {}

void UIController::begin() {
    display.begin();
    joystick.begin();

    // Set initial display
    updateDisplayBase();
}

int UIController::getMaxProgramForUnit(Unit u) {
    if (u == Unit::MIDIVERB_I) return 63; // 64 presets (0-63)
    if (u == Unit::MIDIVERB_II) return 99; // 100 presets (0-99)
    if (u == Unit::MIDIFEX) return 63; // 64 presets (0-63)
    return 0;
}

const char* UIController::getProgramName(Unit u, int prog) {
    // For now we rely on the BarrVerb logic to return the name
    // based on its internal state when active. If not active,
    // we would need to manually ask the registries.
    // To simplify, we only show the name of the *active* program when clicked.
    return reverb.getProgramName(prog);
}

void UIController::updateDisplayBase() {
    char buf[5];
    char unitChar = '2';
    if (currentUnit == Unit::MIDIVERB_I) unitChar = '1';
    else if (currentUnit == Unit::MIDIVERB_II) unitChar = '2';
    else if (currentUnit == Unit::MIDIFEX) unitChar = '3';

    snprintf(buf, sizeof(buf), "P%c%02d", unitChar, currentProgram);
    display.setBaseText(buf);
}

void UIController::applySettings() {
    activeUnit = currentUnit;
    activeProgram = currentProgram;

    if (activeUnit == Unit::MIDIVERB_I) {
        reverb.setEngine(BarrVerb::EngineType::Interpreter);
        reverb.setFamily(BarrVerb::EffectFamily::Midiverb2); // Interprets original ROM
    } else if (activeUnit == Unit::MIDIVERB_II) {
        reverb.setEngine(BarrVerb::EngineType::Decompiled);
        reverb.setFamily(BarrVerb::EffectFamily::Midiverb2);
    } else if (activeUnit == Unit::MIDIFEX) {
        reverb.setEngine(BarrVerb::EngineType::Decompiled);
        reverb.setFamily(BarrVerb::EffectFamily::Midifex);
    }

    reverb.setProgram(activeProgram);

    // Get name of the newly activated program and scroll it
    const char* name = reverb.getProgramName(activeProgram);
    display.startScroll(name);
}

void UIController::update() {
    display.update();
    Joystick::Event event = joystick.update();

    if (event != Joystick::Event::NONE) {
        lastActivityTime = millis();
        isDirty = true;
    }

    if (event == Joystick::Event::LEFT_PRESSED) {
        if (currentUnit == Unit::MIDIVERB_I) currentUnit = Unit::MIDIFEX;
        else if (currentUnit == Unit::MIDIVERB_II) currentUnit = Unit::MIDIVERB_I;
        else if (currentUnit == Unit::MIDIFEX) currentUnit = Unit::MIDIVERB_II;

        // Clamp program
        int maxProg = getMaxProgramForUnit(currentUnit);
        if (currentProgram > maxProg) currentProgram = maxProg;

        updateDisplayBase();
        display.setBlinkingDigit(0); // Blink unit character
    }
    else if (event == Joystick::Event::RIGHT_PRESSED) {
        if (currentUnit == Unit::MIDIVERB_I) currentUnit = Unit::MIDIVERB_II;
        else if (currentUnit == Unit::MIDIVERB_II) currentUnit = Unit::MIDIFEX;
        else if (currentUnit == Unit::MIDIFEX) currentUnit = Unit::MIDIVERB_I;

        // Clamp program
        int maxProg = getMaxProgramForUnit(currentUnit);
        if (currentProgram > maxProg) currentProgram = maxProg;

        updateDisplayBase();
        display.setBlinkingDigit(0); // Blink unit character
    }
    else if (event == Joystick::Event::UP_PRESSED) {
        currentProgram++;
        int maxProg = getMaxProgramForUnit(currentUnit);
        if (currentProgram > maxProg) currentProgram = 0;

        updateDisplayBase();
        display.setBlinkingDigit(2); // Blink program tens or ones
    }
    else if (event == Joystick::Event::DOWN_PRESSED) {
        currentProgram--;
        int maxProg = getMaxProgramForUnit(currentUnit);
        if (currentProgram < 0) currentProgram = maxProg;

        updateDisplayBase();
        display.setBlinkingDigit(2); // Blink program tens or ones
    }
    else if (event == Joystick::Event::CENTER_PRESSED) {
        isDirty = false;
        display.stopBlinking();
        applySettings();
    }

    // Handle inactivity timeout
    if (isDirty && (millis() - lastActivityTime > inactivityTimeout)) {
        isDirty = false;
        display.stopBlinking();

        // Optional: Revert to active settings if not confirmed
        // currentUnit = activeUnit;
        // currentProgram = activeProgram;
        // updateDisplayBase();
    }
}
