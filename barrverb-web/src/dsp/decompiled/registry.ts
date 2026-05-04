import { midifexRegistry } from "./midifex";
import { midiverb2Registry } from "./midiverb2";
import type { DecompiledFamily, DecompiledFamilyRegistry } from "./types";

const registries: Record<DecompiledFamily, DecompiledFamilyRegistry> = {
  MIDIVERB_II: midiverb2Registry,
  MIDIFEX: midifexRegistry,
};

export function getDecompiledRegistry(family: DecompiledFamily): DecompiledFamilyRegistry {
  return registries[family];
}
