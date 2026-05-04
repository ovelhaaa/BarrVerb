export type DecompiledFamily = "MIDIVERB_II" | "MIDIFEX";

export interface DecompiledFrameOutput {
  outputL: number;
  outputR: number;
}

export interface DecompiledState {
  ram: Int16Array;
  pointer: number;
  accumulator: number;
  lfo1: number;
  lfo2: number;
}

export type DecompiledEffectRunner = (input: number, state: DecompiledState) => DecompiledFrameOutput;

export interface DecompiledFamilyRegistry {
  family: DecompiledFamily;
  programs: DecompiledEffectRunner[];
  fallback: DecompiledEffectRunner;
}
