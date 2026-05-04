import type { DecompiledEffectRunner, DecompiledFamilyRegistry } from "./types";

const notImplemented: DecompiledEffectRunner = (_input, _state) => ({
  outputL: 0,
  outputR: 0,
});

export const midiverb2Registry: DecompiledFamilyRegistry = {
  family: "MIDIVERB_II",
  programs: [],
  fallback: notImplemented,
};
