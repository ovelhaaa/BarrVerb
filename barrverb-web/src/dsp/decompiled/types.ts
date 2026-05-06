export type DecompiledFamily = "MIDIVERB_II" | "MIDIFEX";

export interface DecompiledFrameOutput {
  left: number;
  right: number;
}

export interface DecompiledState {
  ram: Int16Array;
  pointer: number;
  lfo1: number;
  lfo2: number;
  scratchOut?: Int16Array;
}

export const DECOMPILED_DRAM_MASK = 0x3fff;
export const DECOMPILED_POINTER_INCREMENT = 140;

export type DecompiledEffectRunner = (input: number, output: DecompiledFrameOutput, state: DecompiledState) => void;

export interface DecompiledFamilyRegistry {
  family: DecompiledFamily;
  programs: DecompiledEffectRunner[];
  programNames: readonly string[];
  fallback: DecompiledEffectRunner;
}
