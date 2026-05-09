import { midifexGeneratedEffects } from "./midifexGenerated";
import type {
  DecompiledCStyleEffect,
  DecompiledEffectRunner,
  DecompiledFamilyRegistry,
} from "./types";
import {
  clampToInt16,
  DECOMPILED_DRAM_MASK,
  DECOMPILED_POINTER_INCREMENT,
} from "./types";
import { midifexProgramNames } from "./midifexProgramNames";

type MidifexCStyleEffect = DecompiledCStyleEffect;

const adaptMidifexEffect = (effect: MidifexCStyleEffect): DecompiledEffectRunner => {
  return (input, output, state) => {
    const scratchOut = state.scratchOut ?? (state.scratchOut = new Int16Array(2));
    scratchOut[0] = 0;
    scratchOut[1] = 0;

    effect(
      clampToInt16(input),
      scratchOut,
      state.ram,
      state.pointer & DECOMPILED_DRAM_MASK,
      state.lfo1 >>> 0,
      state.lfo2 >>> 0,
    );

    state.pointer = (state.pointer + DECOMPILED_POINTER_INCREMENT) & DECOMPILED_DRAM_MASK;

    output.left = clampToInt16(scratchOut[0]);
    output.right = clampToInt16(scratchOut[1]);
  };
};


const midifexPassthrough: MidifexCStyleEffect = (input, output) => {
  output[0] = input;
  output[1] = input;
};

const midifexFallbackRunner: DecompiledEffectRunner = adaptMidifexEffect(midifexPassthrough);

const createMidifexDispatchTable = (): DecompiledEffectRunner[] => {
  const table: DecompiledEffectRunner[] = [];
  for (let i = 0; i < midifexProgramNames.length; i++) {
    const generated = midifexGeneratedEffects[i];
    table.push(generated ? adaptMidifexEffect(generated) : midifexFallbackRunner);
  }
  return table;
};

export const midifexRegistry: DecompiledFamilyRegistry = {
  family: "MIDIFEX",
  programs: createMidifexDispatchTable(),
  programNames: midifexProgramNames,
  fallback: midifexFallbackRunner,
};

export { adaptMidifexEffect, type MidifexCStyleEffect };
