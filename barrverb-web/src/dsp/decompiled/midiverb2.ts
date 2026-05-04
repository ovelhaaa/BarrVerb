import type { DecompiledEffectRunner, DecompiledFamilyRegistry } from "./types";

const notImplemented: DecompiledEffectRunner = (input, output, _state) => {
  output.left = input;
  output.right = input;
};

export const midiverb2Registry: DecompiledFamilyRegistry = {
  family: "MIDIVERB_II",
  programs: [],
  fallback: notImplemented,
};
