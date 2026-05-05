import type {
  DecompiledEffectRunner,
  DecompiledFamilyRegistry,
  DecompiledFrameOutput,
  DecompiledState,
} from "./types";
import { midiverb2ProgramNames } from "./midiverb2ProgramNames";

type Midiverb2CStyleEffect = (
  input: number,
  outLeft: { value: number },
  outRight: { value: number },
  dram: Int16Array,
  pointer: number,
  lfo1Value: number,
  lfo2Value: number,
) => void;

const DRAM_MASK = 0x3fff;
const MIDIVERB2_POINTER_INCREMENT = 140;
const MIDIVERB2_EFFECT0_WRITE_ADDRESS = 140;
const MIDIVERB2_EFFECT0_LEFT_READ_OFFSET = 135;
const MIDIVERB2_EFFECT0_RIGHT_READ_OFFSET = 137;

const toInt16 = (value: number): number => {
  if (value > 32767) return 32767;
  if (value < -32768) return -32768;
  return value | 0;
};

const adaptMidiverb2Effect = (effect: Midiverb2CStyleEffect): DecompiledEffectRunner => {
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

    state.pointer = (state.pointer + MIDIVERB2_POINTER_INCREMENT) & DRAM_MASK;

    output.left = toInt16(left.value);
    output.right = toInt16(right.value);
  };
};

const notImplemented: DecompiledEffectRunner = (input, output, _state) => {
  output.left = input;
  output.right = input;
};

// Primeira integração de adaptador usando a assinatura de `decompiled-midiverb2.h`.
// A tabela completa de programas será integrada na tarefa específica de dispatch.
const midiverb2Effect0Defeat: Midiverb2CStyleEffect = (
  _input,
  outLeft,
  outRight,
  dram,
  pointer,
  _lfo1Value,
  _lfo2Value,
) => {
  outLeft.value = dram[(pointer + MIDIVERB2_EFFECT0_WRITE_ADDRESS - MIDIVERB2_EFFECT0_LEFT_READ_OFFSET) & DRAM_MASK];
  outRight.value = dram[(pointer + MIDIVERB2_EFFECT0_WRITE_ADDRESS - MIDIVERB2_EFFECT0_RIGHT_READ_OFFSET) & DRAM_MASK];
  dram[(pointer + MIDIVERB2_EFFECT0_WRITE_ADDRESS) & DRAM_MASK] = 0;
};

export const midiverb2Registry: DecompiledFamilyRegistry = {
  family: "MIDIVERB_II",
  programs: [adaptMidiverb2Effect(midiverb2Effect0Defeat)],
  programNames: midiverb2ProgramNames,
  fallback: notImplemented,
};

export { adaptMidiverb2Effect, type Midiverb2CStyleEffect };
