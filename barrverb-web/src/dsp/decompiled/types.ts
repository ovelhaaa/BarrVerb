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
}

export type DecompiledEffectRunner = (input: number, output: DecompiledFrameOutput, state: DecompiledState) => void;

export interface DecompiledFamilyRegistry {
  family: DecompiledFamily;
  programs: DecompiledEffectRunner[];
  fallback: DecompiledEffectRunner;
}
