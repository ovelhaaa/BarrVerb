import type { DecompiledEffectRunner, DecompiledFamilyRegistry } from "./types";

const notImplemented: DecompiledEffectRunner = (frame, _state) => {
  frame.output.left = 0;
  frame.output.right = 0;
};

export const midiverb2Registry: DecompiledFamilyRegistry = {
  family: "MIDIVERB_II",
  programs: [],
  fallback: notImplemented,
};
