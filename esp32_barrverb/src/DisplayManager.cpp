#include "DisplayManager.h"

// Timings in milliseconds
constexpr unsigned long BLINK_INTERVAL_MS = 250;
constexpr unsigned long PRE_SCROLL_BLINK_INTERVAL_MS = 100;
constexpr unsigned long SCROLL_INTERVAL_MS = 300;
constexpr unsigned long POST_SCROLL_PAUSE_MS = 1000;

DisplayManager::DisplayManager(uint8_t clkPin, uint8_t dioPin)
    : display(clkPin, dioPin) {
    memset(scrollBuffer, 0, sizeof(scrollBuffer));
}

void DisplayManager::begin() {
    display.setBrightness(0x0f); // Max brightness by default
    display.clear();
}

void DisplayManager::setBrightness(uint8_t brightness) {
    display.setBrightness(brightness);
}

void DisplayManager::setBaseText(const char* text) {
    for (int i = 0; i < 4; i++) {
        if (text[i] != '\0') {
            baseSegments[i] = TM1637Chars::charToSegment(text[i]);
        } else {
            baseSegments[i] = 0;
        }
    }

    // Only update immediately if idle or just digit blinking
    if (state == State::IDLE || state == State::BLINKING_DIGIT) {
        updateSegments(baseSegments);
    }
}

void DisplayManager::setBlinkingDigit(int digitIndex) {
    if (state == State::SCROLLING || state == State::PRE_SCROLL_BLINK) return;

    blinkingDigit = digitIndex;
    if (blinkingDigit >= 0 && blinkingDigit < 4) {
        state = State::BLINKING_DIGIT;
        blinkState = true;
        lastUpdateTime = millis();
        updateSegments(baseSegments);
    } else {
        stopBlinking();
    }
}

void DisplayManager::stopBlinking() {
    if (state == State::BLINKING_DIGIT) {
        blinkingDigit = -1;
        state = State::IDLE;
        updateSegments(baseSegments);
    }
}

void DisplayManager::startScroll(const char* scrollText) {
    strncpy(scrollBuffer, scrollText, sizeof(scrollBuffer) - 1);
    scrollBuffer[sizeof(scrollBuffer) - 1] = '\0';
    scrollLength = strlen(scrollBuffer);

    // Add padding spaces for smooth scroll in and out
    char paddedBuffer[64];
    snprintf(paddedBuffer, sizeof(paddedBuffer), "    %s    ", scrollBuffer);
    strncpy(scrollBuffer, paddedBuffer, sizeof(scrollBuffer) - 1);
    scrollBuffer[sizeof(scrollBuffer) - 1] = '\0';
    scrollLength = strlen(scrollBuffer);

    state = State::PRE_SCROLL_BLINK;
    blinkCount = 0;
    blinkState = false; // Start with display off
    scrollPosition = 0;
    lastUpdateTime = millis();
    display.clear();
}

void DisplayManager::update() {
    unsigned long currentMillis = millis();

    switch (state) {
        case State::IDLE:
            // Do nothing, baseText is statically shown
            break;

        case State::BLINKING_DIGIT:
            if (currentMillis - lastUpdateTime >= BLINK_INTERVAL_MS) {
                lastUpdateTime = currentMillis;
                blinkState = !blinkState;

                uint8_t tempSegments[4];
                memcpy(tempSegments, baseSegments, 4);

                if (!blinkState && blinkingDigit >= 0 && blinkingDigit < 4) {
                    tempSegments[blinkingDigit] = 0; // Turn off the blinking digit
                }
                updateSegments(tempSegments);
            }
            break;

        case State::PRE_SCROLL_BLINK:
            if (currentMillis - lastUpdateTime >= PRE_SCROLL_BLINK_INTERVAL_MS) {
                lastUpdateTime = currentMillis;
                blinkState = !blinkState;

                if (blinkState) {
                    updateSegments(baseSegments); // Show base text
                } else {
                    display.clear(); // Hide all
                    blinkCount++;
                }

                // 3 blinks complete (Off-On-Off-On-Off-On)
                if (blinkCount >= 3 && !blinkState) {
                    state = State::SCROLLING;
                    lastUpdateTime = currentMillis;
                }
            }
            break;

        case State::SCROLLING:
            if (currentMillis - lastUpdateTime >= SCROLL_INTERVAL_MS) {
                lastUpdateTime = currentMillis;

                for (int i = 0; i < 4; i++) {
                    if (scrollPosition + i < scrollLength) {
                        scrollSegments[i] = TM1637Chars::charToSegment(scrollBuffer[scrollPosition + i]);
                    } else {
                        scrollSegments[i] = 0;
                    }
                }
                updateSegments(scrollSegments);

                scrollPosition++;
                if (scrollPosition > scrollLength - 4) {
                    state = State::POST_SCROLL;
                    lastUpdateTime = currentMillis;
                }
            }
            break;

        case State::POST_SCROLL:
            if (currentMillis - lastUpdateTime >= POST_SCROLL_PAUSE_MS) {
                state = State::IDLE;
                blinkingDigit = -1; // Reset any previous digit blink
                updateSegments(baseSegments);
            }
            break;
    }
}

void DisplayManager::updateSegments(const uint8_t* segments) {
    display.setSegments(segments);
}
