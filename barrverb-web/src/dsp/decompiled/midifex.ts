import type { DecompiledEffectRunner, DecompiledFamilyRegistry } from "./types";

const notImplemented: DecompiledEffectRunner = (input, output, _state) => {
  output.left = input;
  output.right = input;
};

export const midifexRegistry: DecompiledFamilyRegistry = {
  family: "MIDIFEX",
  programs: [],
  programNames: [],
  fallback: notImplemented,
};
