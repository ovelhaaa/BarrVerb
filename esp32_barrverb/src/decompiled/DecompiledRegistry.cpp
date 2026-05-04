#include "decompiled/DecompiledRegistry.h"

namespace decompiled {

namespace {

FrameOutput passthroughFallback(int16_t input, State&) {
    return {input, input};
}

constexpr EffectRunner kNoPrograms[] = {};

const FamilyRegistry kMidiverb2Registry {
    Family::Midiverb2,
    kNoPrograms,
    0,
    passthroughFallback,
};

const FamilyRegistry kMidifexRegistry {
    Family::Midifex,
    kNoPrograms,
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
