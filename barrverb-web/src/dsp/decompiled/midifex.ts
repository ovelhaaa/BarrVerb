import type {
  DecompiledCStyleEffect,
  DecompiledEffectRunner,
  DecompiledFamilyRegistry,
} from "./types";
import { DECOMPILED_DRAM_MASK, DECOMPILED_POINTER_INCREMENT } from "./types";
import { midifexProgramNames } from "./midifexProgramNames";

type MidifexCStyleEffect = DecompiledCStyleEffect;

const toInt16 = (value: number): number => {
  if (value > 32767) return 32767;
  if (value < -32768) return -32768;
  return value | 0;
};

const adaptMidifexEffect = (effect: MidifexCStyleEffect): DecompiledEffectRunner => {
  return (input, output, state) => {
    const scratchOut = state.scratchOut ?? (state.scratchOut = new Int16Array(2));
    scratchOut[0] = 0;
    scratchOut[1] = 0;

    effect(
      toInt16(input),
      scratchOut,
      state.ram,
      state.pointer & DECOMPILED_DRAM_MASK,
      state.lfo1 >>> 0,
      state.lfo2 >>> 0,
    );

    state.pointer = (state.pointer + DECOMPILED_POINTER_INCREMENT) & DECOMPILED_DRAM_MASK;

    output.left = toInt16(scratchOut[0]);
    output.right = toInt16(scratchOut[1]);
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const notImplemented: DecompiledEffectRunner = (input, output, _state) => {
  output.left = input;
  output.right = input;
};

export const midifexRegistry: DecompiledFamilyRegistry = {
  family: "MIDIFEX",
  programs: [],
  programNames: midifexProgramNames,
  fallback: notImplemented,
};

export { adaptMidifexEffect, type MidifexCStyleEffect };
