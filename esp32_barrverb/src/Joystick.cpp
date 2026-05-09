#include "Joystick.h"

Joystick::Joystick(uint8_t upPin, uint8_t downPin, uint8_t leftPin, uint8_t rightPin, uint8_t centerPin) {
    buttons[0].pin = upPin; buttons[0].eventType = Event::UP_PRESSED;
    buttons[1].pin = downPin; buttons[1].eventType = Event::DOWN_PRESSED;
    buttons[2].pin = leftPin; buttons[2].eventType = Event::LEFT_PRESSED;
    buttons[3].pin = rightPin; buttons[3].eventType = Event::RIGHT_PRESSED;
    buttons[4].pin = centerPin; buttons[4].eventType = Event::CENTER_PRESSED;

    for(int i = 0; i < 5; i++) {
        buttons[i].lastState = true;
        buttons[i].pressed = false;
        buttons[i].lastDebounceTime = 0;
    }
}

void Joystick::begin() {
    for (int i = 0; i < 5; i++) {
        pinMode(buttons[i].pin, INPUT_PULLUP);
    }
}

Joystick::Event Joystick::update() {
    Event triggerEvent = Event::NONE;
    unsigned long currentMillis = millis();

    for (int i = 0; i < 5; i++) {
        bool reading = digitalRead(buttons[i].pin); // LOW means pressed due to PULLUP

        if (reading != buttons[i].lastState) {
            buttons[i].lastDebounceTime = currentMillis;
        }

        if ((currentMillis - buttons[i].lastDebounceTime) > debounceDelay) {
            if (reading != buttons[i].pressed) {
                buttons[i].pressed = reading;

                // If transitioned to LOW (pressed)
                if (buttons[i].pressed == LOW) {
                    triggerEvent = buttons[i].eventType;
                }
            }
        }

        buttons[i].lastState = reading;
    }

    return triggerEvent;
}
