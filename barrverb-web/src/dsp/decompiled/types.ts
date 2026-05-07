export type DecompiledFamily = "MIDIVERB_II" | "MIDIFEX";

export interface DecompiledFrameOutput {
  left: number;
  right: number;
}

export interface DecompiledState {
  ram: Int16Array;
  pointer: number;
  lfo1: DecompiledLfoValue;
  lfo2: DecompiledLfoValue;
  scratchOut?: Int16Array;
}

/**
 * Representação de LFO compatível com os headers decompilados (uint32_t).
 * Mantemos em number no JS, sempre normalizado para faixa uint32 via >>> 0.
 */
export type DecompiledLfoValue = number;

export const DECOMPILED_DRAM_MASK = 0x3fff;
export const DECOMPILED_POINTER_INCREMENT = 140;

export const clampToInt16 = (value: number): number => {
  if (value > 32767) return 32767;
  if (value < -32768) return -32768;
  return value | 0;
};

export type DecompiledCStyleEffect = (
  input: number,
  out: Int16Array,
  dram: Int16Array,
  pointer: number,
  lfo1Value: number,
  lfo2Value: number,
) => void;

export type DecompiledEffectRunner = (input: number, output: DecompiledFrameOutput, state: DecompiledState) => void;

export interface DecompiledFamilyRegistry {
  family: DecompiledFamily;
  programs: DecompiledEffectRunner[];
  programNames: readonly string[];
  fallback: DecompiledEffectRunner;
}
