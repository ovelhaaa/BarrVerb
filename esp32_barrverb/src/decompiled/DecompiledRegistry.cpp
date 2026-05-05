#include "decompiled/DecompiledRegistry.h"

namespace decompiled {

namespace {

constexpr uint16_t kDramMask = 0x3fff;
constexpr uint16_t kMidiverb2PointerIncrement = 140;
constexpr uint16_t kMidiverb2Effect0WriteAddress = 140;
constexpr uint16_t kMidiverb2Effect0LeftReadOffset = 135;
constexpr uint16_t kMidiverb2Effect0RightReadOffset = 137;

inline int16_t clampInt16(int32_t value) {
    if (value > 32767) return 32767;
    if (value < -32768) return -32768;
    return static_cast<int16_t>(value);
}

FrameOutput passthroughFallback(int16_t input, State&) {
    return {input, input};
}

using Midiverb2CStyleEffect = void (*)(
    int16_t input,
    int16_t* outLeft,
    int16_t* outRight,
    int16_t dram[0x4000],
    int pointer,
    uint32_t lfo1Value,
    uint32_t lfo2Value);

FrameOutput runAdaptedMidiverb2Effect(
    Midiverb2CStyleEffect effect,
    int16_t input,
    State& state) {
    int16_t outLeft = 0;
    int16_t outRight = 0;

    effect(
        clampInt16(input),
        &outLeft,
        &outRight,
        state.ram,
        state.pointer & kDramMask,
        state.lfo1,
        state.lfo2);

    state.pointer = (state.pointer + kMidiverb2PointerIncrement) & kDramMask;

    return {clampInt16(outLeft), clampInt16(outRight)};
}

void midiverb2Effect0Defeat(
    int16_t,
    int16_t* outLeft,
    int16_t* outRight,
    int16_t dram[0x4000],
    int pointer,
    uint32_t,
    uint32_t) {
    *outLeft = dram[(pointer + kMidiverb2Effect0WriteAddress - kMidiverb2Effect0LeftReadOffset) & kDramMask];
    *outRight = dram[(pointer + kMidiverb2Effect0WriteAddress - kMidiverb2Effect0RightReadOffset) & kDramMask];
    dram[(pointer + kMidiverb2Effect0WriteAddress) & kDramMask] = 0;
}

FrameOutput runMidiverb2Program0(int16_t input, State& state) {
    return runAdaptedMidiverb2Effect(midiverb2Effect0Defeat, input, state);
}

const EffectRunner kMidiverb2Programs[] = {
    runMidiverb2Program0,
};

const FamilyRegistry kMidiverb2Registry {
    Family::Midiverb2,
    kMidiverb2Programs,
    static_cast<uint16_t>(sizeof(kMidiverb2Programs) / sizeof(kMidiverb2Programs[0])),
    passthroughFallback,
};

const FamilyRegistry kMidifexRegistry {
    Family::Midifex,
    nullptr,
    0,
    passthroughFallback,
};

} // namespace

const FamilyRegistry& getRegistry(Family family) {
    switch (family) {
    case Family::Midifex:
        return kMidifexRegistry;
    case Family::Midiverb2:
    default:
        return kMidiverb2Registry;
    }
}

} // namespace decompiled
