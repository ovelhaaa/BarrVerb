import { midiverb2GeneratedEffects } from "./midiverb2Generated";
import type {
  DecompiledCStyleEffect,
  DecompiledEffectRunner,
  DecompiledFamilyRegistry,
  DecompiledFrameOutput,
  DecompiledState,
} from "./types";
import { clampToInt16, DECOMPILED_DRAM_MASK, DECOMPILED_POINTER_INCREMENT } from "./types";
import { midiverb2ProgramNames } from "./midiverb2ProgramNames";

type Midiverb2CStyleEffect = DecompiledCStyleEffect;

const MIDIVERB2_EFFECT0_WRITE_ADDRESS = 140;
const MIDIVERB2_EFFECT0_LEFT_READ_OFFSET = 135;
const MIDIVERB2_EFFECT0_RIGHT_READ_OFFSET = 137;

const adaptMidiverb2Effect = (effect: Midiverb2CStyleEffect): DecompiledEffectRunner => {
  return (input: number, output: DecompiledFrameOutput, state: DecompiledState) => {
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

const midiverb2Passthrough: Midiverb2CStyleEffect = (input, out) => {
  out[0] = input;
  out[1] = input;
};

const midiverb2FallbackRunner: DecompiledEffectRunner = adaptMidiverb2Effect(midiverb2Passthrough);

// Adaptador usando a assinatura de `decompiled-midiverb2.h` (programa 0 implementado).
const midiverb2Effect0Defeat: Midiverb2CStyleEffect = (
  _input,
  out,
  dram,
  pointer,
  _lfo1Value,
  _lfo2Value,
) => {
  out[0] = dram[(pointer + MIDIVERB2_EFFECT0_WRITE_ADDRESS - MIDIVERB2_EFFECT0_LEFT_READ_OFFSET) & DECOMPILED_DRAM_MASK];
  out[1] = dram[(pointer + MIDIVERB2_EFFECT0_WRITE_ADDRESS - MIDIVERB2_EFFECT0_RIGHT_READ_OFFSET) & DECOMPILED_DRAM_MASK];
  dram[(pointer + MIDIVERB2_EFFECT0_WRITE_ADDRESS) & DECOMPILED_DRAM_MASK] = 0;
};

export const midiverb2Registry: DecompiledFamilyRegistry = {
  family: "MIDIVERB_II",
  programs: (() => {
    const table = Array.from({ length: midiverb2ProgramNames.length }).map((_, i) => {
      const generated = midiverb2GeneratedEffects[i];
      return generated ? adaptMidiverb2Effect(generated) : midiverb2FallbackRunner;
    });
    table[0] = adaptMidiverb2Effect(midiverb2Effect0Defeat);
    return table;
  })(),
  programNames: midiverb2ProgramNames,
  fallback: midiverb2FallbackRunner,
};

export { adaptMidiverb2Effect, type Midiverb2CStyleEffect };
