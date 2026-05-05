import type {
  DecompiledEffectRunner,
  DecompiledFamilyRegistry,
  DecompiledFrameOutput,
  DecompiledState,
} from "./types";

type MidifexCStyleEffect = (
  input: number,
  outLeft: { value: number },
  outRight: { value: number },
  dram: Int16Array,
  pointer: number,
  lfo1Value: number,
  lfo2Value: number,
) => void;

const DRAM_MASK = 0x3fff;
const MIDIFEX_POINTER_INCREMENT = 140;

const toInt16 = (value: number): number => {
  if (value > 32767) return 32767;
  if (value < -32768) return -32768;
  return value | 0;
};

const adaptMidifexEffect = (effect: MidifexCStyleEffect): DecompiledEffectRunner => {
  return (input: number, output: DecompiledFrameOutput, state: DecompiledState) => {
    const left = { value: 0 };
    const right = { value: 0 };

    effect(
      toInt16(input),
      left,
      right,
      state.ram,
      state.pointer & DRAM_MASK,
      state.lfo1 >>> 0,
      state.lfo2 >>> 0,
    );

    state.pointer = (state.pointer + MIDIFEX_POINTER_INCREMENT) & DRAM_MASK;

    output.left = toInt16(left.value);
    output.right = toInt16(right.value);
  };
};

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

export { adaptMidifexEffect, type MidifexCStyleEffect };
