#include <array>
#include "decompiled/DecompiledRegistry.h"
#include "decompiled/Midiverb2ProgramNames.h"
#include "decompiled/MidifexProgramNames.h"

namespace decompiled {

namespace {

constexpr uint16_t kDramMask = 0x3fff;
constexpr uint16_t kMidiverb2PointerIncrement = 140;
constexpr uint16_t kMidiverb2Effect0WriteAddress = 140;
constexpr uint16_t kMidiverb2Effect0LeftReadOffset = 135;
constexpr uint16_t kMidiverb2Effect0RightReadOffset = 137;

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

using MidifexCStyleEffect = Midiverb2CStyleEffect;

FrameOutput runAdaptedMidiverb2Effect(
    Midiverb2CStyleEffect effect,
    int16_t input,
    State& state) {
    int16_t outLeft = 0;
    int16_t outRight = 0;

    effect(
        input,
        &outLeft,
        &outRight,
        state.ram,
        state.pointer & kDramMask,
        state.lfo1,
        state.lfo2);

    state.pointer = (state.pointer + kMidiverb2PointerIncrement) & kDramMask;

    return {outLeft, outRight};
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

FrameOutput runAdaptedMidifexEffect(
    MidifexCStyleEffect effect,
    int16_t input,
    State& state) {
    return runAdaptedMidiverb2Effect(effect, input, state);
}

void midifexPassthroughEffect(
    int16_t input,
    int16_t* outLeft,
    int16_t* outRight,
    int16_t[0x4000],
    int,
    uint32_t,
    uint32_t) {
    *outLeft = input;
    *outRight = input;
}

FrameOutput runMidifexFallback(int16_t input, State& state) {
    return runAdaptedMidifexEffect(midifexPassthroughEffect, input, state);
}

std::array<EffectRunner, kMidiverb2ProgramNameCount> createMidiverb2DispatchTable() {
    std::array<EffectRunner, kMidiverb2ProgramNameCount> table {};
    table.fill(passthroughFallback);
    table[0] = runMidiverb2Program0;
    return table;
}

const auto kMidiverb2DispatchTable = createMidiverb2DispatchTable();


std::array<EffectRunner, kMidifexProgramNameCount> createMidifexDispatchTable() {
    std::array<EffectRunner, kMidifexProgramNameCount> table {};
    table.fill(runMidifexFallback);
    return table;
}

const auto kMidifexDispatchTable = createMidifexDispatchTable();

const FamilyRegistry kMidiverb2Registry {
    Family::Midiverb2,
    kMidiverb2DispatchTable.data(),
    static_cast<uint16_t>(kMidiverb2DispatchTable.size()),
    kMidiverb2ProgramNames,
    static_cast<uint16_t>(kMidiverb2ProgramNameCount),
    passthroughFallback,
};

const FamilyRegistry kMidifexRegistry {
    Family::Midifex,
    kMidifexDispatchTable.data(),
    static_cast<uint16_t>(kMidifexDispatchTable.size()),
    kMidifexProgramNames,
    static_cast<uint16_t>(kMidifexProgramNameCount),
    runMidifexFallback,
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
