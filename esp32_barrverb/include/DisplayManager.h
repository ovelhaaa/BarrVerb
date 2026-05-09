#pragma once

#include <Arduino.h>
#include <TM1637Display.h>
#include "TM1637Chars.h"

class DisplayManager {
public:
    enum class State {
        IDLE,
        BLINKING_DIGIT,
        PRE_SCROLL_BLINK,
        SCROLLING,
        POST_SCROLL
    };

    DisplayManager(uint8_t clkPin, uint8_t dioPin);

    void begin();

    // Call this inside loop() to handle animations non-blocking
    void update();

    // Sets the base text, like "1P05" (mapped internally to 7seg)
    void setBaseText(const char* text);

    // Blink a specific digit index (0 to 3) or -1 for no blink.
    void setBlinkingDigit(int digitIndex);

    // Stop digit blinking and just show the base text.
    void stopBlinking();

    // Start a scroll sequence. Will do the 3x fast blink, then scroll text.
    void startScroll(const char* scrollText);

    // Set brightness (0 to 7)
    void setBrightness(uint8_t brightness);

private:
    TM1637Display display;
    State state = State::IDLE;

    uint8_t baseSegments[4] = {0, 0, 0, 0};
    int blinkingDigit = -1;

    // Scrolling data
    char scrollBuffer[64];
    int scrollLength = 0;
    int scrollPosition = 0;
    uint8_t scrollSegments[4] = {0, 0, 0, 0};

    // Timing and blinking state
    unsigned long lastUpdateTime = 0;
    bool blinkState = true;
    int blinkCount = 0;

    void updateSegments(const uint8_t* segments);
};
