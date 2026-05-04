#pragma once

#include <cstdint>

namespace decompiled {

enum class Family : uint8_t {
    Midiverb2 = 0,
    Midifex = 1,
};

struct FrameOutput {
    int16_t left;
    int16_t right;
};

struct State {
    int16_t* ram;
    uint16_t pointer;
    uint32_t lfo1;
    uint32_t lfo2;
};

using EffectRunner = FrameOutput (*)(int16_t input, State& state);

struct FamilyRegistry {
    Family family;
    const EffectRunner* programs;
    uint16_t programCount;
    EffectRunner fallback;
};

} // namespace decompiled
