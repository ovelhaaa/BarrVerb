import type {
  DecompiledEffectRunner,
  DecompiledFamilyRegistry,
  DecompiledFrameOutput,
  DecompiledState,
} from "./types";

type Midiverb2CStyleEffect = (
  input: number,
  outLeft: { value: number },
  outRight: { value: number },
  dram: Int16Array,
  pointer: number,
  lfo1Value: number,
  lfo2Value: number,
) => void;

const toInt16 = (value: number): number => {
  const truncated = value | 0;
  if (truncated > 32767) return 32767;
  if (truncated < -32768) return -32768;
  return truncated;
};

const adaptMidiverb2Effect = (effect: Midiverb2CStyleEffect): DecompiledEffectRunner => {
  const left = { value: 0 };
  const right = { value: 0 };

  return (input: number, output: DecompiledFrameOutput, state: DecompiledState) => {
    effect(
      toInt16(input),
      left,
      right,
      state.ram,
      state.pointer & 0x3fff,
      state.lfo1 >>> 0,
      state.lfo2 >>> 0,
    );

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
  outLeft.value = dram[(pointer + 140 - 135) & 0x3fff];
  outRight.value = dram[(pointer + 140 - 137) & 0x3fff];
  dram[(pointer + 140) & 0x3fff] = 0;
};

export const midiverb2Registry: DecompiledFamilyRegistry = {
  family: "MIDIVERB_II",
  programs: [adaptMidiverb2Effect(midiverb2Effect0Defeat)],
  fallback: notImplemented,
};

export { adaptMidiverb2Effect, type Midiverb2CStyleEffect };
