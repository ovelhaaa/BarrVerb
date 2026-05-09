#pragma once

#include <Arduino.h>

class Joystick {
public:
    enum class Event {
        NONE,
        UP_PRESSED,
        DOWN_PRESSED,
        LEFT_PRESSED,
        RIGHT_PRESSED,
        CENTER_PRESSED
    };

    Joystick(uint8_t upPin, uint8_t downPin, uint8_t leftPin, uint8_t rightPin, uint8_t centerPin);

    void begin();
    Event update(); // Call in loop. Returns the pressed event once per press with debounce.

private:
    struct ButtonState {
        uint8_t pin;
        bool lastState = true; // true = HIGH (unpressed with INPUT_PULLUP)
        bool pressed = false;
        unsigned long lastDebounceTime = 0;
        Event eventType;
    };

    ButtonState buttons[5];
    const unsigned long debounceDelay = 50; // ms
};
