export type DecompiledFamily = "MIDIVERB_II" | "MIDIFEX";

export interface DecompiledFrameIO {
  input: number;
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
