import type { DecompiledEffectRunner, DecompiledFamilyRegistry } from "./types";

const notImplemented: DecompiledEffectRunner = (_input, _state) => ({
  outputL: 0,
  outputR: 0,
});

export const midifexRegistry: DecompiledFamilyRegistry = {
  family: "MIDIFEX",
  programs: [],
  fallback: notImplemented,
};
