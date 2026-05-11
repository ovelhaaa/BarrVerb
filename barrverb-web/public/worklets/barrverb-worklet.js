// src/dsp/decompiled/types.ts
var DECOMPILED_DRAM_MASK = 16383;
var DECOMPILED_POINTER_INCREMENT = 140;
var clampToInt16 = (value) => {
  if (value > 32767) return 32767;
  if (value < -32768) return -32768;
  return value | 0;
};

// src/dsp/decompiled/midifexGenerated.ts
var midifex_effect_1 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 15714 & 16383] + Math.trunc(dram[pointer + 668 - 49 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 668 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 668 - 49 & 16383] + Math.trunc(dram[pointer + 617 - 114 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 617 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 617 - 114 & 16383] + Math.trunc(dram[pointer + 501 - 178 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 501 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 501 - 178 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 3 & 16383] = Acc;
  Acc = dram[pointer + 0 - 15714 & 16383] + Math.trunc(dram[pointer + 321 - 41 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 321 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 321 - 41 & 16383] + Math.trunc(dram[pointer + 278 - 195 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 278 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 278 - 195 & 16383] + Math.trunc(dram[pointer + 81 - 63 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 81 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 81 - 63 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = dram[pointer + 3 - 0 & 16383];
};
var midifex_effect_2 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_d = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 11257 & 16383] + Math.trunc(dram[pointer + 5125 - 87 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5125 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 5125 - 87 & 16383] + Math.trunc(dram[pointer + 5036 - 103 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5036 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 5036 - 103 & 16383] + Math.trunc(dram[pointer + 4931 - 127 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4931 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4931 - 127 & 16383] + Math.trunc(dram[pointer + 4802 - 143 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4802 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4802 - 143 & 16383] + Math.trunc(dram[pointer + 4657 - 174 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4657 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4657 - 174 & 16383] + Math.trunc(dram[pointer + 4481 - 215 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4481 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4481 - 215 & 16383] + Math.trunc(dram[pointer + 4264 - 251 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4264 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4264 - 251 & 16383] + Math.trunc(dram[pointer + 4011 - 300 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4011 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4011 - 300 & 16383] + Math.trunc(dram[pointer + 3709 - 369 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3709 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 3709 - 369 & 16383] + Math.trunc(dram[pointer + 3338 - 4 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3338 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 3338 - 4 & 16383] + Math.trunc(dram[pointer + 3332 - 5 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3332 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 3332 - 5 & 16383] + Math.trunc(dram[pointer + 3325 - 62 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3325 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 3325 - 62 & 16383] + Math.trunc(dram[pointer + 3261 - 75 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3261 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 3261 - 75 & 16383] + Math.trunc(dram[pointer + 3184 - 9 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3184 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 3184 - 9 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_d = Acc;
  tmp_d = tmp_d << 16 >> 16;
  Acc = tmp_d + Math.trunc(dram[pointer + 3173 - 36 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3173 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 3173 - 36 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 6 & 16383] = -Acc;
  Acc = tmp_d + Math.trunc(dram[pointer + 3135 - 30 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3135 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 3135 - 30 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 4 & 16383] = -Acc;
  out[0] = dram[pointer + 6 - 1 & 16383];
  out[1] = dram[pointer + 4 - 1 & 16383];
};
var midifex_effect_3 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_1 = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 6080 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = dram[pointer + 6080 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 6083 - 1 & 16383] * 7 / 8);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 10299 & 16383] / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 6083 & 16383] = Acc;
  Acc = dram[pointer + 6083 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_1 = -Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = dram[pointer + 0 - 10299 & 16383] + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 6074 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 6077 - 1 & 16383] * 7 / 8);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 6074 - 1 & 16383] / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 6077 & 16383] = Acc;
  Acc = dram[pointer + 6077 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_1 = -Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = dram[pointer + 6074 - 1 & 16383] + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 6080 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midifex_effect_4 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_1cd0 = 0, tmp_1 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 7379 - 1 & 16383] * 7 / 8);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 9003 & 16383] / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 7379 & 16383] = Acc;
  Acc = dram[pointer + 7379 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_1 = -Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = dram[pointer + 0 - 9003 & 16383] + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 7355 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 7373 - 1 & 16383] * 7 / 8);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 7355 - 1 & 16383] / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 7373 & 16383] = Acc;
  Acc = dram[pointer + 7373 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_1 = -Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = dram[pointer + 7355 - 1 & 16383] + tmp_1;
  Acc = Acc << 16 >> 16;
  tmp_1cd0 = Acc;
  tmp_1cd0 = tmp_1cd0 << 16 >> 16;
  Acc = tmp_1cd0;
  Acc = Acc << 16 >> 16;
  dram[pointer + 4 & 16383] = Acc;
  Acc = tmp_1cd0;
  Acc = Acc << 16 >> 16;
  dram[pointer + 201 & 16383] = Acc;
  out[0] = dram[pointer + 201 - 196 & 16383];
  out[1] = dram[pointer + 4 - 1 & 16383];
};
var midifex_effect_5 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_1 = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 16381 - 8424 & 16383] + Math.trunc(dram[pointer + 7608 - 41 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7608 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7608 - 41 & 16383] + Math.trunc(dram[pointer + 7565 - 195 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7565 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7565 - 195 & 16383] + Math.trunc(dram[pointer + 7368 - 63 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7368 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7368 - 63 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = dram[pointer + 16381 - 8424 & 16383] + Math.trunc(dram[pointer + 7955 - 49 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7955 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7955 - 49 & 16383] + Math.trunc(dram[pointer + 7904 - 114 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7904 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7904 - 114 & 16383] + Math.trunc(dram[pointer + 7788 - 178 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7788 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7788 - 178 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 7303 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7303 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 7300 - 1 & 16383] * 15 / 16);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(Acc * -3 / 16) + Math.trunc(dram[pointer + 7303 - 1 & 16383] / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 7300 & 16383] = Acc;
  Acc = dram[pointer + 7300 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_1 = -Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 7303 - 1 & 16383] * 3 / 2) + Math.trunc(tmp_1 * 3 / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midifex_effect_6 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_1 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 16381 - 7722 & 16383] * 3 / 2) + Math.trunc(dram[pointer + 8657 - 15 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8657 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8657 - 15 & 16383] + Math.trunc(dram[pointer + 8640 - 22 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8640 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8640 - 22 & 16383] + Math.trunc(dram[pointer + 8616 - 29 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8616 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8616 - 29 & 16383] + Math.trunc(dram[pointer + 8585 - 45 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8585 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8585 - 45 & 16383] + Math.trunc(dram[pointer + 8538 - 61 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8538 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8538 - 61 & 16383] + Math.trunc(dram[pointer + 7565 - 105 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7565 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7565 - 105 & 16383] + Math.trunc(dram[pointer + 7458 - 149 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7458 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7458 - 149 & 16383] + Math.trunc(dram[pointer + 7307 - 213 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7307 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7307 - 213 & 16383] + Math.trunc(dram[pointer + 7092 - 258 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7092 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7092 - 258 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 4 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 16381 - 7722 & 16383] * 3 / 2) + Math.trunc(dram[pointer + 7778 - 17 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7778 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7778 - 17 & 16383] + Math.trunc(dram[pointer + 7759 - 25 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7759 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7759 - 25 & 16383] + Math.trunc(dram[pointer + 7732 - 35 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7732 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7732 - 35 & 16383] + Math.trunc(dram[pointer + 7695 - 52 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7695 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7695 - 52 & 16383] + Math.trunc(dram[pointer + 7641 - 74 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7641 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7641 - 74 & 16383] + Math.trunc(dram[pointer + 8475 - 88 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8475 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8475 - 88 & 16383] + Math.trunc(dram[pointer + 8385 - 123 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8385 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8385 - 123 & 16383] + Math.trunc(dram[pointer + 8260 - 174 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8260 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8260 - 174 & 16383] + Math.trunc(dram[pointer + 8084 - 304 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8084 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8084 - 304 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 601 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 6832 - 1 & 16383] * 3 / 8);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 1 & 16383] * 5 / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 6832 & 16383] = Acc;
  out[0] = dram[pointer + 601 - 596 & 16383];
  Acc = Math.trunc(dram[pointer + 6826 - 1 & 16383] * 5 / 8);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 6832 - 1 & 16383] * 3 / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 6826 & 16383] = Acc;
  Acc = dram[pointer + 6826 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = Acc;
  out[1] = dram[pointer + 4 - 1 & 16383];
};
var midifex_effect_7 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 7385 & 16383] + Math.trunc(dram[pointer + 8997 - 49 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8997 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8997 - 49 & 16383] + Math.trunc(dram[pointer + 8946 - 114 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8946 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8946 - 114 & 16383] + Math.trunc(dram[pointer + 8830 - 178 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8830 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8830 - 178 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 3 & 16383] = Acc;
  Acc = dram[pointer + 0 - 7385 & 16383] + Math.trunc(dram[pointer + 8650 - 41 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8650 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8650 - 41 & 16383] + Math.trunc(dram[pointer + 8607 - 195 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8607 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8607 - 195 & 16383] + Math.trunc(dram[pointer + 8410 - 63 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8410 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8410 - 63 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = dram[pointer + 3 - 0 & 16383];
};
var midifex_effect_8 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 7566 - 600 & 16383] / 8) + Math.trunc(-dram[pointer + 7569 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 7569 - 1 & 16383] / 8) + Math.trunc(-dram[pointer + 7566 - 600 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 6698 & 16383] * 3 / 2) + Math.trunc(dram[pointer + 9394 - 15 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9394 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9394 - 15 & 16383] + Math.trunc(dram[pointer + 9377 - 22 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9377 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9377 - 22 & 16383] + Math.trunc(dram[pointer + 9353 - 29 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9353 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9353 - 29 & 16383] + Math.trunc(dram[pointer + 9322 - 45 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9322 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9322 - 45 & 16383] + Math.trunc(dram[pointer + 9275 - 61 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9275 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9275 - 61 & 16383] + Math.trunc(dram[pointer + 8348 - 105 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8348 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8348 - 105 & 16383] + Math.trunc(dram[pointer + 8241 - 149 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8241 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8241 - 149 & 16383] + Math.trunc(dram[pointer + 8090 - 213 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8090 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8090 - 213 & 16383] + Math.trunc(dram[pointer + 7875 - 304 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7875 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7875 - 304 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 7569 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 0 - 6698 & 16383] * 3 / 2) + Math.trunc(dram[pointer + 8561 - 17 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8561 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8561 - 17 & 16383] + Math.trunc(dram[pointer + 8542 - 25 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8542 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8542 - 25 & 16383] + Math.trunc(dram[pointer + 8515 - 35 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8515 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8515 - 35 & 16383] + Math.trunc(dram[pointer + 8478 - 52 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8478 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8478 - 52 & 16383] + Math.trunc(dram[pointer + 8424 - 74 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8424 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8424 - 74 & 16383] + Math.trunc(dram[pointer + 9212 - 88 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9212 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9212 - 88 & 16383] + Math.trunc(dram[pointer + 9122 - 123 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9122 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9122 - 123 & 16383] + Math.trunc(dram[pointer + 8997 - 174 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8997 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8997 - 174 & 16383] + Math.trunc(dram[pointer + 8821 - 258 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8821 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8821 - 258 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 7566 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midifex_effect_9 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_1 = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 16381 - 6328 & 16383] + Math.trunc(dram[pointer + 9704 - 41 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9704 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9704 - 41 & 16383] + Math.trunc(dram[pointer + 9661 - 195 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9661 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9661 - 195 & 16383] + Math.trunc(dram[pointer + 9464 - 63 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9464 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9464 - 63 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = dram[pointer + 16381 - 6328 & 16383] + Math.trunc(dram[pointer + 10051 - 49 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10051 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10051 - 49 & 16383] + Math.trunc(dram[pointer + 1e4 - 114 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1e4 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 1e4 - 114 & 16383] + Math.trunc(dram[pointer + 9884 - 178 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9884 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9884 - 178 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 9399 - 1 & 16383] * 7 / 8);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 1 & 16383] / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 9399 & 16383] = Acc;
  Acc = dram[pointer + 9399 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_1 = -Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = dram[pointer + 0 - 1 & 16383] + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 9384 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 9393 - 1 & 16383] * 7 / 8);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 9384 - 1 & 16383] / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 9393 & 16383] = Acc;
  Acc = dram[pointer + 9393 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_1 = -Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = dram[pointer + 9384 - 1 & 16383] + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midifex_effect_10 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_1 = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 16381 - 5625 & 16383] + Math.trunc(dram[pointer + 10407 - 41 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10407 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10407 - 41 & 16383] + Math.trunc(dram[pointer + 10364 - 195 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10364 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10364 - 195 & 16383] + Math.trunc(dram[pointer + 10167 - 63 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10167 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10167 - 63 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = dram[pointer + 16381 - 5625 & 16383] + Math.trunc(dram[pointer + 10754 - 49 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10754 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10754 - 49 & 16383] + Math.trunc(dram[pointer + 10703 - 114 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10703 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10703 - 114 & 16383] + Math.trunc(dram[pointer + 10587 - 178 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10587 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10587 - 178 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 10102 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10102 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 10099 - 1 & 16383] * 15 / 16);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(Acc * -3 / 16) + Math.trunc(dram[pointer + 10102 - 1 & 16383] / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 10099 & 16383] = Acc;
  Acc = dram[pointer + 10099 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_1 = -Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = dram[pointer + 10102 - 1 & 16383] + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midifex_effect_11 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_1 = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 16381 - 5156 & 16383] + Math.trunc(dram[pointer + 10876 - 41 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10876 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10876 - 41 & 16383] + Math.trunc(dram[pointer + 10833 - 195 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10833 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10833 - 195 & 16383] + Math.trunc(dram[pointer + 10636 - 63 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10636 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 10636 - 63 & 16383] * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = dram[pointer + 16381 - 5156 & 16383] + Math.trunc(dram[pointer + 11223 - 49 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11223 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11223 - 49 & 16383] + Math.trunc(dram[pointer + 11172 - 114 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11172 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11172 - 114 & 16383] + Math.trunc(dram[pointer + 11056 - 178 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11056 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 11056 - 178 & 16383] * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 10571 - 1 & 16383] * 3 / 8);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 1 & 16383] * 5 / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 10571 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 10568 - 1 & 16383] * 5 / 8);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 10571 - 1 & 16383] * 3 / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 10568 & 16383] = Acc;
  Acc = dram[pointer + 10568 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midifex_effect_12 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_1 = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 9855 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = dram[pointer + 9852 - 600 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 16381 - 4687 & 16383] * 3 / 2) + Math.trunc(dram[pointer + 11692 - 15 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11692 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11692 - 15 & 16383] + Math.trunc(dram[pointer + 11675 - 22 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11675 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11675 - 22 & 16383] + Math.trunc(dram[pointer + 11651 - 29 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11651 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11651 - 29 & 16383] + Math.trunc(dram[pointer + 11620 - 45 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11620 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11620 - 45 & 16383] + Math.trunc(dram[pointer + 11573 - 61 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11573 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11573 - 61 & 16383] + Math.trunc(dram[pointer + 10600 - 105 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10600 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10600 - 105 & 16383] + Math.trunc(dram[pointer + 10493 - 149 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10493 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10493 - 149 & 16383] + Math.trunc(dram[pointer + 10342 - 213 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10342 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10342 - 213 & 16383] + Math.trunc(dram[pointer + 10127 - 258 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10127 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10127 - 258 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 9855 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 16381 - 4687 & 16383] * 3 / 2) + Math.trunc(dram[pointer + 10813 - 17 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10813 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10813 - 17 & 16383] + Math.trunc(dram[pointer + 10794 - 25 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10794 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10794 - 25 & 16383] + Math.trunc(dram[pointer + 10767 - 35 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10767 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10767 - 35 & 16383] + Math.trunc(dram[pointer + 10730 - 52 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10730 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10730 - 52 & 16383] + Math.trunc(dram[pointer + 10676 - 74 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10676 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10676 - 74 & 16383] + Math.trunc(dram[pointer + 11510 - 88 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11510 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11510 - 88 & 16383] + Math.trunc(dram[pointer + 11420 - 123 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11420 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11420 - 123 & 16383] + Math.trunc(dram[pointer + 11295 - 174 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11295 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11295 - 174 & 16383] + Math.trunc(dram[pointer + 11119 - 304 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11119 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11119 - 304 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 9852 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 9867 - 1 & 16383] * 3 / 8);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  out[0] = tmp_5;
  Acc = Math.trunc(dram[pointer + 0 - 1 & 16383] * 5 / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 9867 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 9861 - 1 & 16383] * 5 / 8);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 9867 - 1 & 16383] * 3 / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 9861 & 16383] = Acc;
  out[1] = tmp_3;
  Acc = dram[pointer + 9861 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = Acc;
};
var midifex_effect_13 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_d = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 4224 & 16383] + Math.trunc(dram[pointer + 12158 - 87 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12158 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12158 - 87 & 16383] + Math.trunc(dram[pointer + 12069 - 103 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12069 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12069 - 103 & 16383] + Math.trunc(dram[pointer + 11964 - 127 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11964 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11964 - 127 & 16383] + Math.trunc(dram[pointer + 11835 - 143 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11835 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11835 - 143 & 16383] + Math.trunc(dram[pointer + 11690 - 174 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11690 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11690 - 174 & 16383] + Math.trunc(dram[pointer + 11514 - 215 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11514 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11514 - 215 & 16383] + Math.trunc(dram[pointer + 11297 - 251 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11297 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11297 - 251 & 16383] + Math.trunc(dram[pointer + 11044 - 300 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11044 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11044 - 300 & 16383] + Math.trunc(dram[pointer + 10742 - 369 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10742 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10742 - 369 & 16383] + Math.trunc(dram[pointer + 10371 - 4 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10371 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10371 - 4 & 16383] + Math.trunc(dram[pointer + 10365 - 52 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10365 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10365 - 52 & 16383] + Math.trunc(dram[pointer + 10311 - 62 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10311 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10311 - 62 & 16383] + Math.trunc(dram[pointer + 10247 - 7 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10247 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10247 - 7 & 16383] + Math.trunc(dram[pointer + 10238 - 13 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10238 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10238 - 13 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_d = Acc;
  tmp_d = tmp_d << 16 >> 16;
  Acc = tmp_d + Math.trunc(dram[pointer + 10223 - 36 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10223 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10223 - 36 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 6 & 16383] = -Acc;
  Acc = tmp_d + Math.trunc(dram[pointer + 10185 - 30 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10185 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10185 - 30 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 4 & 16383] = -Acc;
  out[0] = dram[pointer + 6 - 1 & 16383];
  out[1] = dram[pointer + 4 - 1 & 16383];
};
var midifex_effect_14 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 3753 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 3 & 16383] = Acc;
  Acc = dram[pointer + 0 - 3753 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = dram[pointer + 3 - 0 & 16383];
};
var midifex_effect_15 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_1 = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 16381 - 3515 & 16383] + Math.trunc(dram[pointer + 9174 - 41 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9174 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9174 - 41 & 16383] + Math.trunc(dram[pointer + 9131 - 195 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9131 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9131 - 195 & 16383] + Math.trunc(dram[pointer + 8934 - 63 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8934 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 8934 - 63 & 16383] * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = dram[pointer + 16381 - 3515 & 16383] + Math.trunc(dram[pointer + 9521 - 49 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9521 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9521 - 49 & 16383] + Math.trunc(dram[pointer + 9470 - 114 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9470 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9470 - 114 & 16383] + Math.trunc(dram[pointer + 9354 - 178 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9354 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 9354 - 178 & 16383] * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 8869 - 1 & 16383] * 3 / 8);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 1 & 16383] * 5 / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 8869 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 8866 - 1 & 16383] * 5 / 8);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 8869 - 1 & 16383] * 3 / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 8866 & 16383] = Acc;
  Acc = dram[pointer + 8866 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midifex_effect_16 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_1 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 16381 - 3281 & 16383] + Math.trunc(dram[pointer + 12751 - 41 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12751 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12751 - 41 & 16383] + Math.trunc(dram[pointer + 12708 - 195 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12708 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12708 - 195 & 16383] + Math.trunc(dram[pointer + 12511 - 63 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12511 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12511 - 63 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 6 & 16383] = Acc;
  Acc = dram[pointer + 16381 - 3281 & 16383] + Math.trunc(dram[pointer + 13098 - 49 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13098 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13098 - 49 & 16383] + Math.trunc(dram[pointer + 13047 - 114 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13047 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13047 - 114 & 16383] + Math.trunc(dram[pointer + 12931 - 178 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12931 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12931 - 178 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 4 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 12446 - 1 & 16383] * 7 / 8);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 1 & 16383] / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 12446 & 16383] = Acc;
  Acc = dram[pointer + 12446 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_1 = -Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = dram[pointer + 0 - 1 & 16383] + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 12431 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 12443 - 1 & 16383] * 7 / 8);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 12431 - 1 & 16383] / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 12443 & 16383] = Acc;
  Acc = dram[pointer + 12443 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_1 = -Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = dram[pointer + 12431 - 1 & 16383] + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = Acc;
  out[0] = dram[pointer + 6 - 1 & 16383];
  out[1] = dram[pointer + 4 - 1 & 16383];
};
var midifex_effect_17 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_1 = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 16381 - 3046 & 16383] + Math.trunc(dram[pointer + 12986 - 41 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12986 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12986 - 41 & 16383] + Math.trunc(dram[pointer + 12943 - 195 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12943 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12943 - 195 & 16383] + Math.trunc(dram[pointer + 12746 - 63 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12746 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12746 - 63 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = dram[pointer + 16381 - 3046 & 16383] + Math.trunc(dram[pointer + 13333 - 49 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13333 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13333 - 49 & 16383] + Math.trunc(dram[pointer + 13282 - 114 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13282 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13282 - 114 & 16383] + Math.trunc(dram[pointer + 13166 - 178 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13166 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13166 - 178 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 12681 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12681 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 12678 - 1 & 16383] * 15 / 16);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(Acc * -3 / 16) + Math.trunc(dram[pointer + 12681 - 1 & 16383] / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 12678 & 16383] = Acc;
  Acc = dram[pointer + 12678 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_1 = -Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 12681 - 1 & 16383] * 3 / 2) + Math.trunc(tmp_1 * 3 / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midifex_effect_18 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 2815 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 3 & 16383] = Acc;
  Acc = dram[pointer + 0 - 2815 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = dram[pointer + 3 - 0 & 16383];
};
var midifex_effect_19 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(-dram[pointer + 11684 - 1 & 16383] / 4) + dram[pointer + 11687 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(-dram[pointer + 11687 - 1 & 16383] / 4) + dram[pointer + 11684 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = dram[pointer + 0 - 2580 & 16383] + Math.trunc(dram[pointer + 13512 - 15 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13512 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13512 - 15 & 16383] + Math.trunc(dram[pointer + 13495 - 22 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13495 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13495 - 22 & 16383] + Math.trunc(dram[pointer + 13471 - 29 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13471 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13471 - 29 & 16383] + Math.trunc(dram[pointer + 13440 - 45 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13440 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13440 - 45 & 16383] + Math.trunc(dram[pointer + 13393 - 61 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13393 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13393 - 61 & 16383] + Math.trunc(dram[pointer + 12466 - 105 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12466 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12466 - 105 & 16383] + Math.trunc(dram[pointer + 12359 - 149 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12359 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12359 - 149 & 16383] + Math.trunc(dram[pointer + 12208 - 213 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12208 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12208 - 213 & 16383] + Math.trunc(dram[pointer + 11993 - 304 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11993 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11993 - 304 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 11687 & 16383] = Acc;
  Acc = dram[pointer + 0 - 2580 & 16383] + Math.trunc(dram[pointer + 12679 - 17 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12679 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12679 - 17 & 16383] + Math.trunc(dram[pointer + 12660 - 25 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12660 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12660 - 25 & 16383] + Math.trunc(dram[pointer + 12633 - 35 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12633 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12633 - 35 & 16383] + Math.trunc(dram[pointer + 12596 - 52 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12596 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12596 - 52 & 16383] + Math.trunc(dram[pointer + 12542 - 74 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12542 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12542 - 74 & 16383] + Math.trunc(dram[pointer + 13330 - 88 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13330 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13330 - 88 & 16383] + Math.trunc(dram[pointer + 13240 - 123 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13240 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13240 - 123 & 16383] + Math.trunc(dram[pointer + 13115 - 174 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13115 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13115 - 174 & 16383] + Math.trunc(dram[pointer + 12939 - 258 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12939 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12939 - 258 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 11684 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midifex_effect_20 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 2346 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 3 & 16383] = Acc;
  Acc = dram[pointer + 0 - 2346 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = dram[pointer + 3 - 0 & 16383];
};
var midifex_effect_21 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_1 = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(-dram[pointer + 13597 - 1 & 16383] / 4) + dram[pointer + 13600 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(-dram[pointer + 13600 - 1 & 16383] / 4) + dram[pointer + 13597 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 16381 - 2109 & 16383] * 3 / 2) + Math.trunc(dram[pointer + 14229 - 29 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14229 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14229 - 29 & 16383] + Math.trunc(dram[pointer + 14198 - 45 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14198 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14198 - 45 & 16383] + Math.trunc(dram[pointer + 14151 - 61 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14151 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14151 - 61 & 16383] + Math.trunc(dram[pointer + 13756 - 99 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13756 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13756 - 99 & 16383] + Math.trunc(dram[pointer + 13655 - 14 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13655 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13655 - 14 & 16383] + Math.trunc(dram[pointer + 13639 - 21 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13639 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13639 - 21 & 16383] + Math.trunc(dram[pointer + 13616 - 2 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13616 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13616 - 2 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 13600 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 16381 - 2109 & 16383] * 3 / 2) + Math.trunc(dram[pointer + 13923 - 35 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13923 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13923 - 35 & 16383] + Math.trunc(dram[pointer + 13886 - 52 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13886 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13886 - 52 & 16383] + Math.trunc(dram[pointer + 13832 - 74 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13832 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13832 - 74 & 16383] + Math.trunc(dram[pointer + 14088 - 88 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14088 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14088 - 88 & 16383] + Math.trunc(dram[pointer + 13998 - 12 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13998 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13998 - 12 & 16383] + Math.trunc(dram[pointer + 13984 - 8 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13984 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13984 - 8 & 16383] + Math.trunc(dram[pointer + 13974 - 3 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13974 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13974 - 3 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 13597 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 0 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 13612 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13612 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 13609 - 1 & 16383] * 7 / 8);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 13612 - 1 & 16383] / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 13609 & 16383] = Acc;
  Acc = dram[pointer + 13609 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_1 = -Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  out[0] = tmp_5;
  Acc = Math.trunc(dram[pointer + 13612 - 1 & 16383] * 3 / 2) + Math.trunc(tmp_1 * 3 / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = Acc;
  out[1] = tmp_3;
};
var midifex_effect_22 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 0 - 15705 & 16383] / 2) + dram[pointer + 0 - 7853 & 16383] + Math.trunc(dram[pointer + 330 - 41 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 330 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 330 - 41 & 16383] + Math.trunc(dram[pointer + 287 - 195 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 287 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 287 - 195 & 16383] + Math.trunc(dram[pointer + 90 - 63 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 90 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 90 - 63 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 15705 & 16383] / 2) + dram[pointer + 0 - 7853 & 16383] + Math.trunc(dram[pointer + 677 - 49 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 677 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 677 - 49 & 16383] + Math.trunc(dram[pointer + 626 - 114 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 626 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 626 - 114 & 16383] + Math.trunc(dram[pointer + 510 - 178 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 510 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 510 - 178 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 3 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = dram[pointer + 3 - 0 & 16383];
};
var midifex_effect_23 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_1 = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 16381 - 6093 & 16383] / 2) + Math.trunc(dram[pointer + 10286 - 6093 & 16383] / 2) + Math.trunc(dram[pointer + 3844 - 41 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3844 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 3844 - 41 & 16383] + Math.trunc(dram[pointer + 3801 - 195 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3801 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 3801 - 195 & 16383] + Math.trunc(dram[pointer + 3604 - 63 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3604 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 3604 - 63 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(tmp_5 * 21 / 32);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 16381 - 6093 & 16383] / 2) + Math.trunc(dram[pointer + 10286 - 6093 & 16383] / 2) + Math.trunc(dram[pointer + 4191 - 49 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4191 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4191 - 49 & 16383] + Math.trunc(dram[pointer + 4140 - 114 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4140 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4140 - 114 & 16383] + Math.trunc(dram[pointer + 4024 - 178 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4024 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4024 - 178 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(tmp_3 * 21 / 32);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 3539 - 1 & 16383] * 7 / 8);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 1 & 16383] / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 3539 & 16383] = Acc;
  Acc = dram[pointer + 3539 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_1 = -Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 1 & 16383] * 3 / 2) + Math.trunc(tmp_1 * 3 / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 3536 - 1 & 16383] * 13 / 16);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 16381 - 6093 & 16383] * 3 / 16) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 3536 & 16383] = Acc;
  Acc = dram[pointer + 3536 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_1 = -Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 16381 - 6093 & 16383] * 3 / 2) + Math.trunc(tmp_1 * 3 / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10286 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 3533 - 1 & 16383] / 4);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  out[0] = tmp_5;
  Acc = Math.trunc(dram[pointer + 3533 - 7 & 16383] * 3 / 4) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 3533 & 16383] = Acc;
  out[1] = tmp_3;
};
var midifex_effect_24 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_1 = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 16381 - 5390 & 16383] / 2) + Math.trunc(dram[pointer + 10989 - 5390 & 16383] / 2) + Math.trunc(dram[pointer + 5250 - 41 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5250 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 5250 - 41 & 16383] + Math.trunc(dram[pointer + 5207 - 195 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5207 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 5207 - 195 & 16383] + Math.trunc(dram[pointer + 5010 - 63 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5010 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 5010 - 63 & 16383] * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 16381 - 5390 & 16383] / 2) + Math.trunc(dram[pointer + 10989 - 5390 & 16383] / 2) + Math.trunc(dram[pointer + 5597 - 49 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5597 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 5597 - 49 & 16383] + Math.trunc(dram[pointer + 5546 - 114 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5546 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 5546 - 114 & 16383] + Math.trunc(dram[pointer + 5430 - 178 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5430 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 5430 - 178 & 16383] * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 4945 - 1 & 16383] * 3 / 8);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 1 & 16383] * 5 / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 4945 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 4942 - 1 & 16383] * 15 / 16);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(Acc * -3 / 16) + Math.trunc(dram[pointer + 4945 - 1 & 16383] / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 4942 & 16383] = Acc;
  Acc = dram[pointer + 4942 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_1 = -Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = dram[pointer + 4945 - 1 & 16383] + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 16381 - 5390 & 16383] / 2) + Math.trunc(dram[pointer + 4939 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4939 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 4936 - 1 & 16383] * 15 / 16);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(Acc * -3 / 16) + Math.trunc(dram[pointer + 4939 - 1 & 16383] / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 4936 & 16383] = Acc;
  Acc = dram[pointer + 4936 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_1 = -Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 4939 - 1 & 16383] * 3 / 2) + Math.trunc(tmp_1 * 3 / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10989 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midifex_effect_25 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_d = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(-dram[pointer + 0 - 8919 & 16383] / 4) + Math.trunc(dram[pointer + 0 - 4210 & 16383] / 2) + Math.trunc(dram[pointer + 7463 - 87 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7463 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7463 - 87 & 16383] + Math.trunc(dram[pointer + 7374 - 103 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7374 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7374 - 103 & 16383] + Math.trunc(dram[pointer + 7269 - 127 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7269 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7269 - 127 & 16383] + Math.trunc(dram[pointer + 7140 - 143 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7140 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7140 - 143 & 16383] + Math.trunc(dram[pointer + 6995 - 174 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6995 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6995 - 174 & 16383] + Math.trunc(dram[pointer + 6819 - 215 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6819 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6819 - 215 & 16383] + Math.trunc(dram[pointer + 6602 - 251 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6602 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6602 - 251 & 16383] + Math.trunc(dram[pointer + 6349 - 300 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6349 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6349 - 300 & 16383] + Math.trunc(dram[pointer + 6047 - 369 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6047 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6047 - 369 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_d = Acc;
  tmp_d = tmp_d << 16 >> 16;
  Acc = tmp_d + Math.trunc(dram[pointer + 5469 - 175 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5469 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 5469 - 175 & 16383] + Math.trunc(dram[pointer + 5133 - 36 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5133 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 5133 - 36 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 6 & 16383] = -Acc;
  Acc = tmp_d + Math.trunc(dram[pointer + 5292 - 157 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5292 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 5292 - 157 & 16383] + Math.trunc(dram[pointer + 5095 - 30 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5095 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 5095 - 30 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 4 & 16383] = -Acc;
  out[0] = dram[pointer + 6 - 1 & 16383];
  out[1] = dram[pointer + 4 - 1 & 16383];
};
var midifex_effect_26 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 4101 & 16383] + Math.trunc(dram[pointer + 0 - 8204 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = dram[pointer + 0 - 3890 & 16383] + Math.trunc(dram[pointer + 0 - 8626 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = dram[pointer + 3 - 0 & 16383];
};
var midifex_effect_27 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_1 = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 16381 - 3515 & 16383] + Math.trunc(dram[pointer + 9e3 - 41 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9e3 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9e3 - 41 & 16383] + Math.trunc(dram[pointer + 8957 - 195 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8957 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8957 - 195 & 16383] + Math.trunc(dram[pointer + 8760 - 63 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8760 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 8760 - 63 & 16383] * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = dram[pointer + 12864 - 3515 & 16383] + Math.trunc(dram[pointer + 9347 - 49 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9347 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9347 - 49 & 16383] + Math.trunc(dram[pointer + 9296 - 114 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9296 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9296 - 114 & 16383] + Math.trunc(dram[pointer + 9180 - 178 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9180 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 9180 - 178 & 16383] * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(tmp_3 * 21 / 32);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 8695 - 1 & 16383] * 7 / 8);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 1 & 16383] / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 8695 & 16383] = Acc;
  Acc = dram[pointer + 8695 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_1 = -Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = dram[pointer + 0 - 1 & 16383] + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 8692 - 1 & 16383] * 7 / 8);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 16381 - 3515 & 16383] / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 8692 & 16383] = Acc;
  Acc = dram[pointer + 8692 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_1 = -Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = dram[pointer + 16381 - 3515 & 16383] + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 12864 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midifex_effect_28 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_1 = 0, tmp_3 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 16381 - 3046 & 16383] + Math.trunc(dram[pointer + 13333 - 3046 & 16383] / 2) + Math.trunc(dram[pointer + 9938 - 13 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9938 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9938 - 13 & 16383] + Math.trunc(dram[pointer + 9923 - 195 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9923 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9923 - 195 & 16383] + Math.trunc(dram[pointer + 9726 - 63 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9726 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9726 - 63 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 401 & 16383] = Acc;
  Acc = dram[pointer + 16381 - 3046 & 16383] + Math.trunc(dram[pointer + 13333 - 3046 & 16383] / 2) + Math.trunc(dram[pointer + 10285 - 49 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10285 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10285 - 49 & 16383] + Math.trunc(dram[pointer + 10234 - 114 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10234 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10234 - 114 & 16383] + Math.trunc(dram[pointer + 10118 - 178 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10118 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10118 - 178 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 9661 - 1 & 16383] * 3 / 8);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 1 & 16383] * 5 / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 9661 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 9658 - 1 & 16383] * 15 / 16);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 9661 - 1 & 16383] / 16) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 9658 & 16383] = Acc;
  Acc = dram[pointer + 9658 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_1 = -Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = dram[pointer + 9661 - 1 & 16383] + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 16381 - 3046 & 16383] / 2) + Math.trunc(dram[pointer + 9655 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9655 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 9652 - 1 & 16383] * 7 / 8);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 9655 - 1 & 16383] / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 9652 & 16383] = Acc;
  Acc = dram[pointer + 9652 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_1 = -Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 9655 - 1 & 16383] * 3 / 2) + Math.trunc(tmp_1 * 3 / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13333 & 16383] = Acc;
  out[0] = dram[pointer + 401 - 396 & 16383];
  out[1] = tmp_3;
};
var midifex_effect_29 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_1 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 16381 - 2695 & 16383] + dram[pointer + 13684 - 2695 & 16383] + Math.trunc(dram[pointer + 10640 - 41 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10640 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10640 - 41 & 16383] + Math.trunc(dram[pointer + 10597 - 195 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10597 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10597 - 195 & 16383] + Math.trunc(dram[pointer + 10400 - 63 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10400 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10400 - 63 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 6 & 16383] = Acc;
  Acc = dram[pointer + 16381 - 2695 & 16383] + dram[pointer + 13684 - 2695 & 16383] + Math.trunc(dram[pointer + 10987 - 49 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10987 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10987 - 49 & 16383] + Math.trunc(dram[pointer + 10936 - 114 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10936 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10936 - 114 & 16383] + Math.trunc(dram[pointer + 10820 - 178 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10820 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10820 - 178 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 4 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 10335 - 1 & 16383] * 3 / 8);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 1 & 16383] * 5 / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 10335 & 16383] = Acc;
  Acc = dram[pointer + 10335 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 10332 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 16381 - 2695 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10332 & 16383] = Acc;
  Acc = dram[pointer + 10332 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 13684 & 16383] = Acc;
  out[0] = dram[pointer + 6 - 1 & 16383];
  out[1] = dram[pointer + 4 - 1 & 16383];
};
var midifex_effect_30 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 0 - 2343 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 0 - 4688 & 16383] * 3 / 4);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 2343 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 0 - 4688 & 16383] * 3 / 4);
  Acc = Acc << 16 >> 16;
  dram[pointer + 551 & 16383] = Acc;
  out[0] = dram[pointer + 551 - 546 & 16383];
  out[1] = tmp_3;
};
var midifex_effect_31 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 5460 & 16383] + Math.trunc(dram[pointer + 0 - 16378 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(tmp_5 * 21 / 32);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = dram[pointer + 0 - 10919 & 16383] + Math.trunc(dram[pointer + 0 - 16378 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(tmp_3 * 21 / 32);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midifex_effect_32 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 4247 & 16383] + Math.trunc(dram[pointer + 0 - 12739 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(tmp_5 * 21 / 32);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = dram[pointer + 0 - 8493 & 16383] + Math.trunc(dram[pointer + 0 - 12739 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(tmp_3 * 21 / 32);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midifex_effect_33 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_1 = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 16381 - 4244 & 16383] / 2) + Math.trunc(dram[pointer + 12135 - 4244 & 16383] / 2) + Math.trunc(dram[pointer + 7889 - 4244 & 16383] / 2) + Math.trunc(dram[pointer + 3296 - 41 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3296 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 3296 - 41 & 16383] + Math.trunc(dram[pointer + 3253 - 195 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3253 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 3253 - 195 & 16383] + Math.trunc(dram[pointer + 3056 - 63 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3056 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 3056 - 63 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 7889 - 4244 & 16383] / 2) + Math.trunc(dram[pointer + 12135 - 4244 & 16383] / 2) + Math.trunc(dram[pointer + 16381 - 4244 & 16383] / 2) + Math.trunc(dram[pointer + 3643 - 49 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3643 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 3643 - 49 & 16383] + Math.trunc(dram[pointer + 3592 - 114 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3592 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 3592 - 114 & 16383] + Math.trunc(dram[pointer + 3476 - 178 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3476 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 3476 - 178 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 2985 - 1 & 16383] * 3 / 8);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 1 & 16383] * 5 / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 2985 & 16383] = Acc;
  Acc = Math.trunc(Acc * 3 / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7889 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 2988 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 7889 - 4244 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2988 & 16383] = Acc;
  Acc = dram[pointer + 2988 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 12135 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 2991 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 12135 - 4244 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2991 & 16383] = Acc;
  Acc = dram[pointer + 2991 - 0 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midifex_effect_34 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_1 = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 16381 - 3276 & 16383] / 2) + Math.trunc(dram[pointer + 13103 - 3276 & 16383] / 2) + Math.trunc(dram[pointer + 9825 - 3276 & 16383] / 2) + Math.trunc(dram[pointer + 6200 - 41 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6200 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6200 - 41 & 16383] + Math.trunc(dram[pointer + 6157 - 195 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6157 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6157 - 195 & 16383] + Math.trunc(dram[pointer + 5960 - 63 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5960 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 5960 - 63 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 16381 - 3276 & 16383] / 2) + Math.trunc(dram[pointer + 13103 - 3276 & 16383] / 2) + Math.trunc(dram[pointer + 9825 - 3276 & 16383] / 2) + Math.trunc(dram[pointer + 6547 - 49 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6547 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6547 - 49 & 16383] + Math.trunc(dram[pointer + 6496 - 114 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6496 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6496 - 114 & 16383] + Math.trunc(dram[pointer + 6380 - 178 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6380 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6380 - 178 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 5895 - 1 & 16383] * 3 / 8);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 1 & 16383] * 5 / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 5895 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 5892 - 1 & 16383] * 15 / 16);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 5895 - 1 & 16383] / 16) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 5892 & 16383] = Acc;
  Acc = dram[pointer + 5892 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_1 = -Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = dram[pointer + 5895 - 1 & 16383] + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 5889 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 16381 - 3276 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5889 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 5886 - 1 & 16383] * 7 / 8);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 5889 - 1 & 16383] / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 5886 & 16383] = Acc;
  Acc = dram[pointer + 5886 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_1 = -Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 5889 - 1 & 16383] * 9 / 4) + Math.trunc(tmp_1 * 9 / 4);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13103 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 5883 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 13103 - 3276 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5883 & 16383] = Acc;
  out[0] = tmp_5;
  Acc = Math.trunc(dram[pointer + 5880 - 1 & 16383] * 7 / 8);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 5883 - 1 & 16383] / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 5880 & 16383] = Acc;
  Acc = dram[pointer + 5880 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_1 = -Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  out[1] = tmp_3;
  Acc = Math.trunc(dram[pointer + 5883 - 1 & 16383] * 9 / 4) + Math.trunc(tmp_1 * 9 / 4);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9825 & 16383] = Acc;
};
var midifex_effect_35 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_1 = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 10761 - 2808 & 16383] / 2) + Math.trunc(dram[pointer + 13571 - 2808 & 16383] / 2) + Math.trunc(dram[pointer + 16381 - 2808 & 16383] / 2) + Math.trunc(dram[pointer + 7604 - 41 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7604 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7604 - 41 & 16383] + Math.trunc(dram[pointer + 7561 - 195 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7561 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7561 - 195 & 16383] + Math.trunc(dram[pointer + 7364 - 63 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7364 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7364 - 63 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(tmp_5 * 21 / 32);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 16381 - 2808 & 16383] / 2) + Math.trunc(dram[pointer + 13571 - 2808 & 16383] / 2) + Math.trunc(dram[pointer + 10761 - 2808 & 16383] / 2) + Math.trunc(dram[pointer + 7951 - 49 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7951 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7951 - 49 & 16383] + Math.trunc(dram[pointer + 7900 - 114 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7900 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7900 - 114 & 16383] + Math.trunc(dram[pointer + 7784 - 178 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7784 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7784 - 178 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(tmp_3 * 21 / 32);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 7299 - 1 & 16383] * 15 / 16);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 1 & 16383] / 16) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 7299 & 16383] = Acc;
  Acc = dram[pointer + 7299 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_1 = -Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 1 & 16383] * 3 / 2) + Math.trunc(tmp_1 * 3 / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 7296 - 1 & 16383] * 15 / 16);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(Acc * -3 / 16) + Math.trunc(dram[pointer + 16381 - 2808 & 16383] / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 7296 & 16383] = Acc;
  Acc = dram[pointer + 7296 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_1 = -Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = dram[pointer + 16381 - 2808 & 16383] + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 13571 & 16383] = Acc;
  out[0] = tmp_5;
  Acc = Math.trunc(dram[pointer + 7293 - 1 & 16383] * 13 / 16);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 13571 - 2808 & 16383] * 3 / 16) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 7293 & 16383] = Acc;
  Acc = dram[pointer + 7293 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_1 = -Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  out[1] = tmp_3;
  Acc = Math.trunc(dram[pointer + 13571 - 2808 & 16383] * 3 / 2) + Math.trunc(tmp_1 * 3 / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10761 & 16383] = Acc;
};
var midifex_effect_36 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 0 - 7027 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 4685 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 2343 & 16383] / 2) + Math.trunc(dram[pointer + 9008 - 41 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9008 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9008 - 41 & 16383] + Math.trunc(dram[pointer + 8965 - 195 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8965 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8965 - 195 & 16383] + Math.trunc(dram[pointer + 8768 - 63 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8768 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8768 - 63 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(tmp_5 * 21 / 32);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 2343 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 4685 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 7027 & 16383] / 2) + Math.trunc(dram[pointer + 9355 - 49 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9355 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9355 - 49 & 16383] + Math.trunc(dram[pointer + 9304 - 114 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9304 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9304 - 114 & 16383] + Math.trunc(dram[pointer + 9188 - 178 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9188 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9188 - 178 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(tmp_3 * 21 / 32);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midifex_effect_37 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 16380 - 14e3 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 3 & 16383] = Acc;
  Acc = dram[pointer + 16380 - 14e3 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = dram[pointer + 0 - 2 & 16383] + Math.trunc(dram[pointer + 16380 - 14e3 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16380 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = dram[pointer + 3 - 0 & 16383];
};
var midifex_effect_38 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_1 = 0, tmp_3 = 0, tmp_5 = 0, tmp_3ffe = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 16380 - 8171 & 16383] / 2) + Math.trunc(dram[pointer + 8201 - 49 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8201 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8201 - 49 & 16383] + Math.trunc(dram[pointer + 8150 - 114 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8150 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8150 - 114 & 16383] + Math.trunc(dram[pointer + 8034 - 178 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8034 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8034 - 178 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 16380 - 8171 & 16383] / 2) + Math.trunc(dram[pointer + 7854 - 41 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7854 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7854 - 41 & 16383] + Math.trunc(dram[pointer + 7811 - 195 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7811 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7811 - 195 & 16383] + Math.trunc(dram[pointer + 7614 - 63 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7614 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7614 - 63 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 16380 - 8171 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 2 & 16383] * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_3ffe = Acc;
  tmp_3ffe = tmp_3ffe << 16 >> 16;
  Acc = Math.trunc(tmp_3ffe / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8207 & 16383] = Acc;
  Acc = dram[pointer + 8207 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_1 = -Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = tmp_3ffe + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 16380 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 16380 - 0 & 16383] * 3 / 4);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16380 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midifex_effect_39 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_1 = 0, tmp_3 = 0, tmp_5 = 0, tmp_3ffe = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 16380 - 7020 & 16383] / 2) + Math.trunc(dram[pointer + 9352 - 49 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9352 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9352 - 49 & 16383] + Math.trunc(dram[pointer + 9301 - 114 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9301 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9301 - 114 & 16383] + Math.trunc(dram[pointer + 9185 - 178 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9185 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9185 - 178 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 16380 - 7020 & 16383] / 2) + Math.trunc(dram[pointer + 9005 - 41 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9005 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9005 - 41 & 16383] + Math.trunc(dram[pointer + 8962 - 195 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8962 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8962 - 195 & 16383] + Math.trunc(dram[pointer + 8765 - 63 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8765 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8765 - 63 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = -dram[pointer + 0 - 2 & 16383] + Math.trunc(-dram[pointer + 16380 - 7020 & 16383] / 4);
  Acc = Acc << 16 >> 16;
  tmp_3ffe = Acc;
  tmp_3ffe = tmp_3ffe << 16 >> 16;
  Acc = Math.trunc(tmp_3ffe / 2) + Math.trunc(dram[pointer + 9358 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9358 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 9355 - 1 & 16383] * 7 / 8);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 9358 - 1 & 16383] / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 9355 & 16383] = Acc;
  Acc = dram[pointer + 9355 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_1 = -Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 9358 - 1 & 16383] * 3 / 2) + Math.trunc(tmp_1 * 3 / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16380 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 8688 - 6 & 16383] / 2) + Math.trunc(dram[pointer + 8691 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8691 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 8688 - 1 & 16383] * 7 / 8);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 8688 - 7 & 16383] / 8) + tmp_1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 8688 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 16380 - 0 & 16383] * 11 / 8);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16380 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midifex_effect_40 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 16382 - 5002 & 16383] / 2) + Math.trunc(dram[pointer + 11375 - 59 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11375 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11375 - 59 & 16383] + Math.trunc(dram[pointer + 11314 - 117 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11314 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11314 - 117 & 16383] + Math.trunc(dram[pointer + 11195 - 139 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11195 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11195 - 139 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 16382 - 5002 & 16383] / 2) + Math.trunc(dram[pointer + 11054 - 45 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11054 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11054 - 45 & 16383] + Math.trunc(dram[pointer + 11007 - 187 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11007 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11007 - 187 & 16383] + Math.trunc(dram[pointer + 10818 - 121 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10818 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10818 - 121 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 2 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 11378 - 1 & 16383] * 3 / 4);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16382 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 11378 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 16382 - 5002 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11378 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midifex_effect_41 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 16380 - 4500 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 16380 - 4500 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(-dram[pointer + 16380 - 4500 & 16383] / 4) + dram[pointer + 0 - 2 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16380 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midifex_effect_42 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 16380 - 3e3 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 3 & 16383] = Acc;
  Acc = dram[pointer + 16380 - 3e3 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = dram[pointer + 0 - 2 & 16383] + Math.trunc(dram[pointer + 16380 - 3e3 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16380 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = dram[pointer + 3 - 0 & 16383];
};
var midifex_effect_43 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 588 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 3 & 16383] = Acc;
  Acc = dram[pointer + 0 - 588 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = dram[pointer + 3 - 0 & 16383];
};
var midifex_effect_44 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 940 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 3 & 16383] = Acc;
  Acc = dram[pointer + 0 - 940 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = dram[pointer + 3 - 0 & 16383];
};
var midifex_effect_45 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 1409 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 3 & 16383] = Acc;
  Acc = dram[pointer + 0 - 1409 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = dram[pointer + 3 - 0 & 16383];
};
var midifex_effect_46 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 1760 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 3 & 16383] = Acc;
  Acc = dram[pointer + 0 - 1760 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = dram[pointer + 3 - 0 & 16383];
};
var midifex_effect_47 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 2346 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 3 & 16383] = Acc;
  Acc = dram[pointer + 0 - 2346 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = dram[pointer + 3 - 0 & 16383];
};
var midifex_effect_48 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 11 - 2 & 16383] / 2) + Math.trunc(dram[pointer + 2298 - 21 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2298 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2298 - 21 & 16383] + Math.trunc(dram[pointer + 2275 - 153 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2275 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2275 - 153 & 16383] + Math.trunc(dram[pointer + 2120 - 273 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2120 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2120 - 273 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 11 - 2 & 16383] / 2) + Math.trunc(dram[pointer + 1845 - 32 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1845 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 1845 - 32 & 16383] + Math.trunc(dram[pointer + 1811 - 181 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1811 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 1811 - 181 & 16383] + Math.trunc(dram[pointer + 1628 - 233 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1628 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 1628 - 233 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 163 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 233 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 412 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 534 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 761 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 875 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 64 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 118 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 232 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 433 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 554 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 741 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 861 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 1045 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 1148 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 1255 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 1442 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 1578 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 1720 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 1872 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 2035 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 2120 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 2266 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 2450 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 2568 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 2724 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 2888 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 3033 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 3151 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 3256 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 3491 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 3555 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11 & 16383] = Acc;
  out[0] = tmp_5;
  Acc = Math.trunc(-dram[pointer + 15383 - 8094 & 16383] / 16) + Math.trunc(-dram[pointer + 15383 - 7848 & 16383] / 16) + Math.trunc(-dram[pointer + 15383 - 7792 & 16383] / 16) + Math.trunc(-dram[pointer + 15383 - 7514 & 16383] / 16) + Math.trunc(-dram[pointer + 15383 - 7461 & 16383] / 16) + Math.trunc(-dram[pointer + 15383 - 7378 & 16383] / 16) + Math.trunc(-dram[pointer + 15383 - 7138 & 16383] / 16) + Math.trunc(-dram[pointer + 15383 - 7091 & 16383] / 16) + Math.trunc(dram[pointer + 15383 - 6864 & 16383] / 8) + Math.trunc(dram[pointer + 15383 - 6726 & 16383] / 8) + Math.trunc(dram[pointer + 15383 - 6656 & 16383] / 8) + Math.trunc(dram[pointer + 15383 - 6418 & 16383] / 8) + Math.trunc(dram[pointer + 15383 - 6363 & 16383] / 8) + Math.trunc(dram[pointer + 15383 - 6153 & 16383] / 8) + Math.trunc(dram[pointer + 15383 - 6017 & 16383] / 8) + Math.trunc(dram[pointer + 15383 - 5966 & 16383] / 8) + Math.trunc(-dram[pointer + 15383 - 5727 & 16383] / 4) + Math.trunc(-dram[pointer + 15383 - 5656 & 16383] / 4) + Math.trunc(-dram[pointer + 15383 - 5494 & 16383] / 4) + Math.trunc(-dram[pointer + 15383 - 5318 & 16383] / 4) + Math.trunc(-dram[pointer + 15383 - 5260 & 16383] / 4) + Math.trunc(-dram[pointer + 15383 - 5018 & 16383] / 4) + Math.trunc(-dram[pointer + 15383 - 4957 & 16383] / 4) + Math.trunc(-dram[pointer + 15383 - 4733 & 16383] / 4) + Math.trunc(dram[pointer + 15383 - 4626 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 4550 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 4338 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 4209 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 4045 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 3920 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 3799 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 3618 & 16383] / 2) + Math.trunc(dram[pointer + 1393 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1393 & 16383] = Acc;
  Acc = Math.trunc(-dram[pointer + 1393 - 1 & 16383] / 4) + dram[pointer + 11 - 0 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 11 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 0 - 1e3 & 16383] / 2) + Math.trunc(dram[pointer + 1390 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1390 & 16383] = Acc;
  Acc = dram[pointer + 1390 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 15383 & 16383] = Acc;
  out[1] = tmp_3;
};
var midifex_effect_49 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_1 = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 15253 - 64 & 16383] / 2) + Math.trunc(dram[pointer + 13283 - 696 & 16383] / 2) + Math.trunc(dram[pointer + 8586 - 539 & 16383] / 2) + Math.trunc(dram[pointer + 16230 - 24 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 15253 - 503 & 16383] / 2) + Math.trunc(dram[pointer + 13283 - 167 & 16383] / 2) + Math.trunc(dram[pointer + 8586 - 151 & 16383] / 2) + Math.trunc(dram[pointer + 16045 - 172 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 16381 - 58 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 0 - 1 & 16383] * 3 / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = -Acc;
  Acc = Math.trunc(dram[pointer + 16321 - 89 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 16381 - 0 & 16383] * 5 / 8) + dram[pointer + 16381 - 58 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16321 & 16383] = -Acc;
  Acc = Math.trunc(dram[pointer + 16230 - 183 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 16321 - 0 & 16383] * 5 / 8) + dram[pointer + 16321 - 89 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16230 & 16383] = -Acc;
  Acc = Math.trunc(dram[pointer + 16045 - 321 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 16230 - 0 & 16383] * 5 / 8) + dram[pointer + 16230 - 183 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16045 & 16383] = -Acc;
  Acc = Math.trunc(dram[pointer + 15722 - 467 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 16045 - 0 & 16383] * 5 / 8) + dram[pointer + 16045 - 321 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 15722 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 15722 - 0 & 16383] / 2) + dram[pointer + 15722 - 467 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_b = Acc;
  tmp_b = tmp_b << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 15253 - 845 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 14406 - 1121 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14406 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14406 - 1121 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 13283 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 13283 - 1441 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 11840 - 1320 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11840 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11840 - 1320 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 6264 - 1 & 16383] / 2) + Math.trunc(tmp_1 / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6264 & 16383] = Acc;
  Acc = dram[pointer + 6264 - 1 & 16383] + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 15253 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 10518 - 912 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 9604 - 1016 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9604 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9604 - 1016 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 8586 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 8586 - 1017 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 7567 - 1298 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7567 & 16383] = -Acc;
  out[0] = tmp_5;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7567 - 1298 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 6261 - 1 & 16383] / 2) + Math.trunc(tmp_1 / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6261 & 16383] = Acc;
  Acc = dram[pointer + 6261 - 1 & 16383] + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 10518 & 16383] = Acc;
  out[1] = tmp_3;
};
var midifex_effect_50 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 2190 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 2187 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 2193 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2193 & 16383] = Acc;
  Acc = Math.trunc(-dram[pointer + 11 - 1 & 16383] / 4) + Math.trunc(dram[pointer + 2184 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2184 & 16383] = Acc;
  Acc = Math.trunc(Acc * 3 / 2) + dram[pointer + 2193 - 1 & 16383] + Math.trunc(dram[pointer + 16381 - 13 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16381 - 13 & 16383] + Math.trunc(dram[pointer + 16366 - 83 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16366 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16366 - 83 & 16383] + Math.trunc(dram[pointer + 16281 - 116 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16281 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16281 - 116 & 16383] + Math.trunc(dram[pointer + 16163 - 239 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16163 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16163 - 239 & 16383] + Math.trunc(dram[pointer + 15922 - 339 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15922 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15922 - 339 & 16383] + Math.trunc(dram[pointer + 15581 - 481 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15581 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15581 - 481 & 16383] + Math.trunc(dram[pointer + 15098 - 555 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15098 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15098 - 555 & 16383] + Math.trunc(dram[pointer + 14541 - 823 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14541 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14541 - 823 & 16383] + Math.trunc(dram[pointer + 13716 - 999 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13716 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13716 - 999 & 16383] + Math.trunc(dram[pointer + 12715 - 1100 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12715 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12715 - 1100 & 16383] + Math.trunc(dram[pointer + 11613 - 1347 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11613 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11613 - 1347 & 16383] + Math.trunc(dram[pointer + 10264 - 1563 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10264 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10264 - 1563 & 16383] + Math.trunc(dram[pointer + 8699 - 1841 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8699 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8699 - 1841 & 16383] + Math.trunc(dram[pointer + 6856 - 2001 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6856 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6856 - 2001 & 16383] + Math.trunc(dram[pointer + 4853 - 2083 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4853 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4853 - 2083 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 11 & 16383] = Acc;
  Acc = dram[pointer + 11 - 0 & 16383] + Math.trunc(dram[pointer + 2666 - 147 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2666 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2666 - 147 & 16383] + Math.trunc(dram[pointer + 2768 - 43 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2768 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2768 - 43 & 16383] + Math.trunc(dram[pointer + 2723 - 55 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2723 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2723 - 55 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 2190 & 16383] = Acc;
  Acc = dram[pointer + 11 - 0 & 16383] + Math.trunc(dram[pointer + 2444 - 249 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2444 & 16383] = -Acc;
  out[0] = tmp_5;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2444 - 249 & 16383] + Math.trunc(dram[pointer + 2494 - 48 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2494 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2494 - 48 & 16383] + Math.trunc(dram[pointer + 2517 - 21 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2517 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2517 - 21 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 2187 & 16383] = Acc;
  out[1] = tmp_3;
};
var midifex_effect_51 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_1 = 0, tmp_2 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 12641 - 1065 & 16383] * 3 / 64) + Math.trunc(dram[pointer + 12641 - 1233 & 16383] * 3 / 64) + Math.trunc(dram[pointer + 12641 - 1555 & 16383] * 3 / 64) + Math.trunc(dram[pointer + 9021 - 269 & 16383] * 3 / 64) + Math.trunc(dram[pointer + 4536 - 2003 & 16383] * -3 / 32) + Math.trunc(dram[pointer + 9021 - 1891 & 16383] * -3 / 32) + Math.trunc(dram[pointer + 12641 - 21 & 16383] * -3 / 32) + Math.trunc(dram[pointer + 9021 - 532 & 16383] * -3 / 32) + Math.trunc(dram[pointer + 9021 - 872 & 16383] * -3 / 32) + Math.trunc(dram[pointer + 9021 - 1107 & 16383] * -3 / 32) + Math.trunc(dram[pointer + 9021 - 1414 & 16383] * -3 / 32) + Math.trunc(dram[pointer + 9021 - 1615 & 16383] * -3 / 32) + Math.trunc(dram[pointer + 9021 - 1914 & 16383] * -3 / 32) + Math.trunc(dram[pointer + 4536 - 173 & 16383] * -3 / 32) + Math.trunc(dram[pointer + 4536 - 460 & 16383] * -3 / 32) + Math.trunc(dram[pointer + 4536 - 780 & 16383] * 3 / 16) + Math.trunc(dram[pointer + 4536 - 1066 & 16383] * 3 / 16) + Math.trunc(dram[pointer + 4536 - 1344 & 16383] * 3 / 16) + Math.trunc(dram[pointer + 4536 - 1660 & 16383] * 3 / 16) + Math.trunc(dram[pointer + 4536 - 1941 & 16383] * 3 / 16);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4 & 16383] = -Acc;
  Acc = Math.trunc(-dram[pointer + 4536 - 2005 & 16383] / 16) + Math.trunc(-dram[pointer + 4536 - 1762 & 16383] / 16) + Math.trunc(-dram[pointer + 4536 - 1408 & 16383] / 16) + Math.trunc(-dram[pointer + 4536 - 1110 & 16383] / 16) + Math.trunc(dram[pointer + 4536 - 671 & 16383] / 8) + Math.trunc(dram[pointer + 9021 - 890 & 16383] / 8) + Math.trunc(dram[pointer + 12641 - 1010 & 16383] / 8) + Math.trunc(dram[pointer + 4536 - 907 & 16383] / 8) + Math.trunc(dram[pointer + 4536 - 595 & 16383] / 8) + Math.trunc(dram[pointer + 4536 - 342 & 16383] / 8) + Math.trunc(dram[pointer + 4536 - 41 & 16383] / 8) + Math.trunc(dram[pointer + 9021 - 1801 & 16383] / 8) + Math.trunc(dram[pointer + 9021 - 1509 & 16383] / 8) + Math.trunc(dram[pointer + 9021 - 1229 & 16383] / 8) + Math.trunc(dram[pointer + 9021 - 936 & 16383] / 8) + Math.trunc(-dram[pointer + 9021 - 637 & 16383] / 4) + Math.trunc(-dram[pointer + 9021 - 414 & 16383] / 4) + Math.trunc(-dram[pointer + 9021 - 105 & 16383] / 4) + Math.trunc(-dram[pointer + 12641 - 1434 & 16383] / 4) + Math.trunc(-dram[pointer + 12641 - 1119 & 16383] / 4);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6 & 16383] = -Acc;
  Acc = Math.trunc(dram[pointer + 0 - 1 & 16383] * 81 / 32) + Math.trunc(dram[pointer + 16381 - 321 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16381 - 321 & 16383] + Math.trunc(dram[pointer + 16058 - 431 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16058 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16058 - 431 & 16383] + Math.trunc(dram[pointer + 15625 - 968 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15625 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15625 - 968 & 16383] + Math.trunc(dram[pointer + 14655 - 1620 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14655 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14655 - 1620 & 16383] + Math.trunc(dram[pointer + 13033 - 234 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13033 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13033 - 234 & 16383] + Math.trunc(dram[pointer + 12797 - 154 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12797 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12797 - 154 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_2 = Acc;
  tmp_2 = tmp_2 << 16 >> 16;
  Acc = dram[pointer + 12641 - 1624 & 16383] + Math.trunc(dram[pointer + 11015 - 1992 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11015 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11015 - 1992 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 9021 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 9021 - 2110 & 16383] * 15 / 16) + Math.trunc(dram[pointer + 6909 - 2371 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6909 & 16383] = -Acc;
  out[0] = dram[pointer + 6 - 1 & 16383];
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6909 - 2371 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 4536 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 4536 - 2157 & 16383] / 2) + Math.trunc(dram[pointer + 2377 - 2312 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2377 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 2377 - 2312 & 16383] * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 63 - 1 & 16383] / 4) + Math.trunc(tmp_1 / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 63 & 16383] = Acc;
  out[1] = dram[pointer + 4 - 1 & 16383];
  Acc = dram[pointer + 63 - 0 & 16383] + tmp_2;
  Acc = Acc << 16 >> 16;
  dram[pointer + 12641 & 16383] = Acc;
};
var midifex_effect_52 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_1 = 0, tmp_2 = 0, tmp_3 = 0, tmp_5 = 0, tmp_7 = 0, tmp_9 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 12641 - 21 & 16383] / 2) + Math.trunc(dram[pointer + 9121 - 1891 & 16383] / 2) + Math.trunc(dram[pointer + 4636 - 2003 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 12641 - 801 & 16383] / 2) + Math.trunc(dram[pointer + 9121 - 890 & 16383] / 2) + Math.trunc(dram[pointer + 4636 - 671 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = dram[pointer + 0 - 1 & 16383] + Math.trunc(dram[pointer + 16381 - 321 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16381 - 321 & 16383] + Math.trunc(dram[pointer + 16058 - 431 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16058 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16058 - 431 & 16383] + Math.trunc(dram[pointer + 15625 - 968 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15625 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15625 - 968 & 16383] + Math.trunc(dram[pointer + 14655 - 1620 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14655 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14655 - 1620 & 16383] + Math.trunc(dram[pointer + 13033 - 234 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13033 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13033 - 234 & 16383] + Math.trunc(dram[pointer + 12797 - 154 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12797 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12797 - 154 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_2 = Acc;
  tmp_2 = tmp_2 << 16 >> 16;
  Acc = dram[pointer + 12641 - 1624 & 16383] + Math.trunc(dram[pointer + 11015 - 1892 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11015 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11015 - 1892 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 9121 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 9121 - 2110 & 16383] * -27 / 32) + Math.trunc(dram[pointer + 7009 - 2371 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7009 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7009 - 2371 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 4636 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 4636 - 2157 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 2477 - 2312 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2477 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2477 - 2312 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 157 - 1 & 16383] / 2) + Math.trunc(tmp_1 / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 157 & 16383] = Acc;
  Acc = dram[pointer + 157 - 0 & 16383] + tmp_2;
  Acc = Acc << 16 >> 16;
  tmp_7 = Acc;
  tmp_7 = tmp_7 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 163 - 1 & 16383] * 15 / 16);
  Acc = Acc << 16 >> 16;
  tmp_9 = Acc;
  tmp_9 = tmp_9 << 16 >> 16;
  Acc = Math.trunc(tmp_7 / 16) + tmp_9;
  Acc = Acc << 16 >> 16;
  dram[pointer + 163 & 16383] = Acc;
  Acc = dram[pointer + 163 - 0 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_9 = -Acc;
  tmp_9 = tmp_9 << 16 >> 16;
  Acc = tmp_7 + tmp_9;
  Acc = Acc << 16 >> 16;
  dram[pointer + 12641 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midifex_effect_53 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 11 - 2 & 16383] / 2) + Math.trunc(dram[pointer + 2298 - 21 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2298 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2298 - 21 & 16383] + Math.trunc(dram[pointer + 2275 - 153 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2275 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2275 - 153 & 16383] + Math.trunc(dram[pointer + 2120 - 273 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2120 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2120 - 273 & 16383] + dram[pointer + 0 - 14e3 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 11 - 2 & 16383] / 2) + Math.trunc(dram[pointer + 1845 - 32 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1845 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 1845 - 32 & 16383] + Math.trunc(dram[pointer + 1811 - 175 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1811 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 1811 - 175 & 16383] + Math.trunc(dram[pointer + 1634 - 233 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1634 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 1634 - 233 & 16383] + dram[pointer + 0 - 14e3 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = tmp_3;
  Acc = Math.trunc(Acc * 3 / 32) + Math.trunc(dram[pointer + 0 - 1065 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 1119 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 1233 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 1434 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 1555 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 1742 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 1862 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 2046 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 3569 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 2256 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 2443 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 3121 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 2721 & 16383] / 32) + Math.trunc(-dram[pointer + 0 - 2873 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 3036 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 2579 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 3267 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 3451 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 2149 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 3725 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 3889 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 4034 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 4152 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 4257 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 4492 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 4556 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 4727 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 4849 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 6035 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 5129 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 5235 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 6223 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 5534 & 16383] / 16) + Math.trunc(dram[pointer + 0 - 5759 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 5837 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 5034 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 6159 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 5421 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 6446 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 6534 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 6782 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 6859 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 7039 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 7126 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 7221 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 8565 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 7534 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 7736 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 7891 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 9215 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 8146 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 8278 & 16383] / 8) + Math.trunc(-dram[pointer + 0 - 8447 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 7439 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 8700 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 8885 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 9012 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 9171 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 8034 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 9449 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 9513 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 9765 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 9867 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 10046 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 10110 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 10285 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 12074 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 10578 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 10734 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 11715 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 11023 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 11185 & 16383] / 4) + Math.trunc(dram[pointer + 0 - 11254 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 11479 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 11546 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 10815 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 11847 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 10428 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 12112 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 12279 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 12415 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 12516 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 12746 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 12815 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 13046 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 13217 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 13378 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 13534 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11 & 16383] = Acc;
};
var midifex_effect_54 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 11 - 2 & 16383] / 2) + Math.trunc(dram[pointer + 2295 - 21 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2295 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2295 - 21 & 16383] + Math.trunc(dram[pointer + 2272 - 153 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2272 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2272 - 153 & 16383] + Math.trunc(dram[pointer + 2117 - 273 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2117 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2117 - 273 & 16383] + Math.trunc(dram[pointer + 16381 - 12e3 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 11 - 2 & 16383] / 2) + Math.trunc(dram[pointer + 1842 - 32 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1842 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 1842 - 32 & 16383] + Math.trunc(dram[pointer + 1808 - 175 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1808 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 1808 - 175 & 16383] + Math.trunc(dram[pointer + 1631 - 233 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1631 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 1631 - 233 & 16383] + Math.trunc(dram[pointer + 16381 - 12e3 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = tmp_3;
  Acc = Math.trunc(Acc * -3 / 64) + Math.trunc(-dram[pointer + 16381 - 1065 & 16383] / 64) + Math.trunc(-dram[pointer + 16381 - 1119 & 16383] / 64) + Math.trunc(-dram[pointer + 16381 - 1233 & 16383] / 64) + Math.trunc(-dram[pointer + 16381 - 1434 & 16383] / 64) + Math.trunc(-dram[pointer + 16381 - 1555 & 16383] / 64) + Math.trunc(-dram[pointer + 16381 - 1742 & 16383] / 64) + Math.trunc(-dram[pointer + 16381 - 1862 & 16383] / 64) + Math.trunc(-dram[pointer + 16381 - 2046 & 16383] / 64) + Math.trunc(-dram[pointer + 16381 - 3569 & 16383] / 64) + Math.trunc(-dram[pointer + 16381 - 2256 & 16383] / 64) + Math.trunc(-dram[pointer + 16381 - 2443 & 16383] / 64) + Math.trunc(-dram[pointer + 16381 - 3121 & 16383] / 64) + Math.trunc(-dram[pointer + 16381 - 2721 & 16383] / 64) + Math.trunc(dram[pointer + 16381 - 2873 & 16383] / 32) + Math.trunc(dram[pointer + 16381 - 3036 & 16383] / 32) + Math.trunc(dram[pointer + 16381 - 2579 & 16383] / 32) + Math.trunc(dram[pointer + 16381 - 3267 & 16383] / 32) + Math.trunc(dram[pointer + 16381 - 3451 & 16383] / 32) + Math.trunc(dram[pointer + 16381 - 2149 & 16383] / 32) + Math.trunc(dram[pointer + 16381 - 3725 & 16383] / 32) + Math.trunc(dram[pointer + 16381 - 3889 & 16383] / 32) + Math.trunc(dram[pointer + 16381 - 4034 & 16383] / 32) + Math.trunc(dram[pointer + 16381 - 4152 & 16383] / 32) + Math.trunc(-dram[pointer + 16381 - 4257 & 16383] / 16) + Math.trunc(-dram[pointer + 16381 - 4492 & 16383] / 16) + Math.trunc(-dram[pointer + 16381 - 4556 & 16383] / 16) + Math.trunc(-dram[pointer + 16381 - 4727 & 16383] / 16) + Math.trunc(-dram[pointer + 16381 - 4849 & 16383] / 16) + Math.trunc(-dram[pointer + 16381 - 6035 & 16383] / 16) + Math.trunc(-dram[pointer + 16381 - 5129 & 16383] / 16) + Math.trunc(-dram[pointer + 16381 - 5235 & 16383] / 16) + Math.trunc(-dram[pointer + 16381 - 6223 & 16383] / 16) + Math.trunc(-dram[pointer + 16381 - 5534 & 16383] / 16) + Math.trunc(dram[pointer + 16381 - 5759 & 16383] / 8) + Math.trunc(dram[pointer + 16381 - 5837 & 16383] / 8) + Math.trunc(dram[pointer + 16381 - 5034 & 16383] / 8) + Math.trunc(dram[pointer + 16381 - 6159 & 16383] / 8) + Math.trunc(dram[pointer + 16381 - 5421 & 16383] / 8) + Math.trunc(dram[pointer + 16381 - 6446 & 16383] / 8) + Math.trunc(dram[pointer + 16381 - 6534 & 16383] / 8) + Math.trunc(dram[pointer + 16381 - 6782 & 16383] / 8) + Math.trunc(dram[pointer + 16381 - 6859 & 16383] / 8) + Math.trunc(dram[pointer + 16381 - 7039 & 16383] / 8) + Math.trunc(dram[pointer + 16381 - 7126 & 16383] / 8) + Math.trunc(dram[pointer + 16381 - 7221 & 16383] / 8) + Math.trunc(dram[pointer + 16381 - 8565 & 16383] / 8) + Math.trunc(dram[pointer + 16381 - 7534 & 16383] / 8) + Math.trunc(dram[pointer + 16381 - 7736 & 16383] / 8) + Math.trunc(dram[pointer + 16381 - 7891 & 16383] / 8) + Math.trunc(dram[pointer + 16381 - 9215 & 16383] / 8) + Math.trunc(dram[pointer + 16381 - 8146 & 16383] / 8) + Math.trunc(dram[pointer + 16381 - 8278 & 16383] / 8) + Math.trunc(-dram[pointer + 16381 - 8447 & 16383] / 4) + Math.trunc(-dram[pointer + 16381 - 7439 & 16383] / 4) + Math.trunc(-dram[pointer + 16381 - 8700 & 16383] / 4) + Math.trunc(-dram[pointer + 16381 - 8885 & 16383] / 4) + Math.trunc(-dram[pointer + 16381 - 9012 & 16383] / 4) + Math.trunc(-dram[pointer + 16381 - 9171 & 16383] / 4) + Math.trunc(-dram[pointer + 16381 - 8034 & 16383] / 4) + Math.trunc(-dram[pointer + 16381 - 9449 & 16383] / 4) + Math.trunc(-dram[pointer + 16381 - 9513 & 16383] / 4) + Math.trunc(-dram[pointer + 16381 - 9765 & 16383] / 4) + Math.trunc(-dram[pointer + 16381 - 9867 & 16383] / 4) + Math.trunc(-dram[pointer + 16381 - 10046 & 16383] / 4) + Math.trunc(-dram[pointer + 16381 - 10110 & 16383] / 4) + Math.trunc(-dram[pointer + 16381 - 10285 & 16383] / 4) + Math.trunc(-dram[pointer + 16381 - 12074 & 16383] / 4) + Math.trunc(-dram[pointer + 16381 - 10578 & 16383] / 4) + Math.trunc(-dram[pointer + 16381 - 10734 & 16383] / 4) + Math.trunc(-dram[pointer + 16381 - 11715 & 16383] / 4) + Math.trunc(-dram[pointer + 16381 - 11023 & 16383] / 4) + Math.trunc(-dram[pointer + 16381 - 11185 & 16383] / 4) + Math.trunc(dram[pointer + 16381 - 11254 & 16383] / 2) + Math.trunc(dram[pointer + 16381 - 11479 & 16383] / 2) + Math.trunc(dram[pointer + 16381 - 11546 & 16383] / 2) + Math.trunc(dram[pointer + 16381 - 10815 & 16383] / 2) + Math.trunc(dram[pointer + 16381 - 11847 & 16383] / 2) + Math.trunc(dram[pointer + 16381 - 10428 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 16381 - 14084 & 16383] / 2) + dram[pointer + 0 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = Acc;
};
var midifex_effect_55 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(-dram[pointer + 0 - 8922 & 16383] / 4) + Math.trunc(dram[pointer + 0 - 5321 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 4e3 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 2315 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(-dram[pointer + 0 - 9012 & 16383] / 4) + Math.trunc(dram[pointer + 0 - 6352 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 4e3 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 3378 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midifex_effect_56 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 0 - 13998 & 16383] / 128) + Math.trunc(dram[pointer + 0 - 13968 & 16383] / 128) + Math.trunc(dram[pointer + 0 - 13955 & 16383] / 128) + Math.trunc(dram[pointer + 0 - 13957 & 16383] / 128) + Math.trunc(dram[pointer + 0 - 13815 & 16383] / 128) + Math.trunc(-dram[pointer + 0 - 13819 & 16383] / 64) + Math.trunc(-dram[pointer + 0 - 13749 & 16383] / 64) + Math.trunc(-dram[pointer + 0 - 13756 & 16383] / 64) + Math.trunc(-dram[pointer + 0 - 13676 & 16383] / 64) + Math.trunc(dram[pointer + 0 - 13552 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 13319 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 13185 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 12927 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 12656 & 16383] / 32) + Math.trunc(-dram[pointer + 0 - 12338 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 11919 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 11361 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 10683 & 16383] / 16) + Math.trunc(dram[pointer + 0 - 9835 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 8775 & 16383] / 8) + Math.trunc(-dram[pointer + 0 - 9450 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 5194 & 16383] / 4) + Math.trunc(dram[pointer + 0 - 4501 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 2724 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 781 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 13986 & 16383] / 128) + Math.trunc(dram[pointer + 0 - 13919 & 16383] / 128) + Math.trunc(dram[pointer + 0 - 13918 & 16383] / 128) + Math.trunc(dram[pointer + 0 - 13972 & 16383] / 128) + Math.trunc(dram[pointer + 0 - 13807 & 16383] / 128) + Math.trunc(dram[pointer + 0 - 13854 & 16383] / 128) + Math.trunc(-dram[pointer + 0 - 13727 & 16383] / 64) + Math.trunc(-dram[pointer + 0 - 13619 & 16383] / 64) + Math.trunc(-dram[pointer + 0 - 13519 & 16383] / 64) + Math.trunc(dram[pointer + 0 - 13457 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 13289 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 13071 & 16383] / 32) + Math.trunc(-dram[pointer + 0 - 12727 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 12449 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 12016 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 11571 & 16383] / 16) + Math.trunc(dram[pointer + 0 - 10981 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 10160 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 9145 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 8913 & 16383] / 8) + Math.trunc(-dram[pointer + 0 - 6873 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 4048 & 16383] / 4) + Math.trunc(dram[pointer + 0 - 3041 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 1121 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midifex_effect_57 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 12 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 2298 - 67 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2298 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2298 - 67 & 16383] + Math.trunc(dram[pointer + 2229 - 121 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2229 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2229 - 121 & 16383] + dram[pointer + 0 - 14e3 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 10 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 1931 - 45 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1931 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 1931 - 45 & 16383] + Math.trunc(dram[pointer + 1884 - 98 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1884 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 1884 - 98 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 1065 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 1233 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 1555 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 1862 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 3569 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 2443 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 2721 & 16383] / 32) + Math.trunc(-dram[pointer + 0 - 2873 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 2579 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 3451 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 13112 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 3725 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 3889 & 16383] / 16) + Math.trunc(dram[pointer + 0 - 4152 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 4492 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 6035 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 12345 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 11111 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 5235 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 5534 & 16383] / 8) + Math.trunc(-dram[pointer + 0 - 5759 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 5034 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 10211 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 9123 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 12781 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 5421 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 6534 & 16383] / 4) + Math.trunc(dram[pointer + 0 - 6859 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 7126 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 8565 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 7736 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 9215 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 8146 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
  Acc = Math.trunc(dram[pointer + 0 - 5759 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 5837 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 5034 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 6159 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 5421 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 6446 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 6534 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 6782 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 6859 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 7039 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 7126 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 7221 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 8565 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 7534 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 7736 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 7891 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 9215 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 8146 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 8278 & 16383] / 8) + Math.trunc(-dram[pointer + 0 - 8447 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 7439 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 8700 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 8885 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 9012 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 9171 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 8034 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 9449 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 9513 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 9765 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 9867 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 10046 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 10110 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 10285 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 12074 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 10578 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 10734 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 11715 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 11023 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 11185 & 16383] / 4) + Math.trunc(dram[pointer + 0 - 11254 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 11479 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 11546 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 10815 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 11847 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 10428 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 12112 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 12279 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 12415 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 12516 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 12746 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 12815 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 13046 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 13217 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 13378 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 13534 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12 & 16383] = Acc;
};
var midifex_effect_58 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_d = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 7 & 16383] + Math.trunc(dram[pointer + 16375 - 43 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16375 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16375 - 43 & 16383] + Math.trunc(dram[pointer + 16330 - 50 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16330 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16330 - 50 & 16383] + Math.trunc(dram[pointer + 16278 - 63 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16278 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16278 - 63 & 16383] + Math.trunc(dram[pointer + 16213 - 75 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16213 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16213 - 75 & 16383] + Math.trunc(dram[pointer + 16136 - 87 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16136 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16136 - 87 & 16383] + Math.trunc(dram[pointer + 16047 - 102 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16047 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16047 - 102 & 16383] + Math.trunc(dram[pointer + 15943 - 126 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15943 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15943 - 126 & 16383] + Math.trunc(dram[pointer + 15815 - 149 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15815 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15815 - 149 & 16383] + Math.trunc(dram[pointer + 15664 - 179 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15664 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15664 - 179 & 16383] + Math.trunc(dram[pointer + 15483 - 210 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15483 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15483 - 210 & 16383] + Math.trunc(dram[pointer + 15271 - 257 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15271 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15271 - 257 & 16383] + Math.trunc(dram[pointer + 15012 - 308 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15012 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15012 - 308 & 16383] + Math.trunc(dram[pointer + 14702 - 363 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14702 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14702 - 363 & 16383] + Math.trunc(dram[pointer + 14337 - 439 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14337 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14337 - 439 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_d = Acc;
  tmp_d = tmp_d << 16 >> 16;
  Acc = tmp_d + Math.trunc(dram[pointer + 13896 - 35 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13896 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13896 - 35 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 6 & 16383] = -Acc;
  Acc = tmp_d + Math.trunc(dram[pointer + 13859 - 31 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13859 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13859 - 31 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 4 & 16383] = -Acc;
  out[0] = dram[pointer + 6 - 1 & 16383];
  out[1] = dram[pointer + 4 - 1 & 16383];
};
var midifex_effect_59 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 1 & 16383] + Math.trunc(dram[pointer + 5 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 16381 - 34 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16381 - 34 & 16383] + Math.trunc(dram[pointer + 16345 - 45 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16345 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16345 - 45 & 16383] + Math.trunc(dram[pointer + 16298 - 67 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16298 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16298 - 67 & 16383] + Math.trunc(dram[pointer + 16229 - 89 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16229 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16229 - 89 & 16383] + Math.trunc(dram[pointer + 16138 - 101 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16138 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16138 - 101 & 16383] + Math.trunc(dram[pointer + 16035 - 120 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16035 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16035 - 120 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 3 & 16383] = Acc;
  Acc = dram[pointer + 3 - 0 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 5 & 16383] = Acc;
  out[0] = dram[pointer + 5 - 0 & 16383];
  out[1] = dram[pointer + 3 - 0 & 16383];
};
var midifex_effect_60 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_5 = 0;
  tmp_0 = input;
  tmp_0 = tmp_0 << 16 >> 16;
  Acc = tmp_0 + Math.trunc(dram[pointer + 16381 - 187 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16381 - 187 & 16383] + Math.trunc(dram[pointer + 16192 - 337 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16192 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16192 - 337 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 3 & 16383] = Acc;
  Acc = tmp_0 + Math.trunc(dram[pointer + 15853 - 121 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15853 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15853 - 121 & 16383] + Math.trunc(dram[pointer + 15730 - 393 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15730 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15730 - 393 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = dram[pointer + 3 - 0 & 16383];
};
var midifex_effect_61 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_7d1 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 1 & 16383] + Math.trunc(dram[pointer + 16381 - 47 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16381 - 47 & 16383] + Math.trunc(dram[pointer + 16332 - 89 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16332 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16332 - 89 & 16383] + Math.trunc(dram[pointer + 16241 - 215 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16241 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16241 - 215 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_7d1 = Acc;
  tmp_7d1 = tmp_7d1 << 16 >> 16;
  Acc = tmp_7d1;
  Acc = Acc << 16 >> 16;
  dram[pointer + 301 & 16383] = Acc;
  out[0] = dram[pointer + 301 - 296 & 16383];
  out[1] = dram[pointer + 301 - 298 & 16383];
};
var midifex_effect_62 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 150 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 3 & 16383] = Acc;
  Acc = dram[pointer + 0 - 300 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = dram[pointer + 3 - 0 & 16383];
};
var midifex_effect_63 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(-dram[pointer + 14261 - 1 & 16383] / 4) + dram[pointer + 14264 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(-dram[pointer + 14264 - 1 & 16383] / 4) + dram[pointer + 14261 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 3 & 16383] * 3 / 2) + Math.trunc(dram[pointer + 16089 - 15 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16089 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16089 - 15 & 16383] + Math.trunc(dram[pointer + 16072 - 22 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16072 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16072 - 22 & 16383] + Math.trunc(dram[pointer + 16048 - 29 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16048 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16048 - 29 & 16383] + Math.trunc(dram[pointer + 16017 - 45 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16017 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16017 - 45 & 16383] + Math.trunc(dram[pointer + 15970 - 61 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15970 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15970 - 61 & 16383] + Math.trunc(dram[pointer + 14997 - 105 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14997 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14997 - 105 & 16383] + Math.trunc(dram[pointer + 14890 - 149 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14890 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14890 - 149 & 16383] + Math.trunc(dram[pointer + 14739 - 213 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14739 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14739 - 213 & 16383] + Math.trunc(dram[pointer + 14524 - 258 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14524 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14524 - 258 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 14264 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 0 - 3 & 16383] * 3 / 2) + Math.trunc(dram[pointer + 15210 - 17 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15210 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15210 - 17 & 16383] + Math.trunc(dram[pointer + 15191 - 25 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15191 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15191 - 25 & 16383] + Math.trunc(dram[pointer + 15164 - 35 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15164 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15164 - 35 & 16383] + Math.trunc(dram[pointer + 15127 - 52 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15127 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15127 - 52 & 16383] + Math.trunc(dram[pointer + 15073 - 74 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15073 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15073 - 74 & 16383] + Math.trunc(dram[pointer + 15907 - 88 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15907 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15907 - 88 & 16383] + Math.trunc(dram[pointer + 15817 - 123 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15817 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15817 - 123 & 16383] + Math.trunc(dram[pointer + 15692 - 174 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15692 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15692 - 174 & 16383] + Math.trunc(dram[pointer + 15516 - 304 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15516 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15516 - 304 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 14261 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midifex_effect_64 = (_input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0;
  out[0] = dram[pointer + 140 - 135 & 16383];
  out[1] = dram[pointer + 140 - 137 & 16383];
  Acc = 0;
  Acc = Acc << 16 >> 16;
  dram[pointer + 140 & 16383] = -Acc;
};
var midifexGeneratedEffects = [
  null,
  midifex_effect_1,
  midifex_effect_2,
  midifex_effect_3,
  midifex_effect_4,
  midifex_effect_5,
  midifex_effect_6,
  midifex_effect_7,
  midifex_effect_8,
  midifex_effect_9,
  midifex_effect_10,
  midifex_effect_11,
  midifex_effect_12,
  midifex_effect_13,
  midifex_effect_14,
  midifex_effect_15,
  midifex_effect_16,
  midifex_effect_17,
  midifex_effect_18,
  midifex_effect_19,
  midifex_effect_20,
  midifex_effect_21,
  midifex_effect_22,
  midifex_effect_23,
  midifex_effect_24,
  midifex_effect_25,
  midifex_effect_26,
  midifex_effect_27,
  midifex_effect_28,
  midifex_effect_29,
  midifex_effect_30,
  midifex_effect_31,
  midifex_effect_32,
  midifex_effect_33,
  midifex_effect_34,
  midifex_effect_35,
  midifex_effect_36,
  midifex_effect_37,
  midifex_effect_38,
  midifex_effect_39,
  midifex_effect_40,
  midifex_effect_41,
  midifex_effect_42,
  midifex_effect_43,
  midifex_effect_44,
  midifex_effect_45,
  midifex_effect_46,
  midifex_effect_47,
  midifex_effect_48,
  midifex_effect_49,
  midifex_effect_50,
  midifex_effect_51,
  midifex_effect_52,
  midifex_effect_53,
  midifex_effect_54,
  midifex_effect_55,
  midifex_effect_56,
  midifex_effect_57,
  midifex_effect_58,
  midifex_effect_59,
  midifex_effect_60,
  midifex_effect_61,
  midifex_effect_62,
  midifex_effect_63,
  midifex_effect_64
];

// src/dsp/decompiled/midifexProgramNames.ts
var midifexProgramNames = [
  "ECHO LONG FLAT AMBI",
  "ECHO LONG FLAT THICK",
  "ECHO LONG HPF",
  "ECHO LONG HPF WIDE",
  "ECHO LONG BPF AMBI",
  "ECHO LONG LPF WIDE",
  "ECHO MED FLAT AMBI",
  "ECHO MED FLAT WIDE",
  "ECHO MED HPF AMBI",
  "ECHO MED BPF AMBI",
  "ECHO MED LPF AMBI",
  "ECHO MED LPF WIDE",
  "ECHO MED FLAT THICK",
  "ECHO SHORT FLAT AMBI",
  "ECHO SHORT LPF AMBI",
  "ECHO SHORT HPF AMBI",
  "ECHO SHORT BPF AMBI",
  "ECHO SHORT FLAT",
  "ECHO SHORT FLAT WIDE",
  "ECHO XSHORT FLAT",
  "ECHO XSHORT BPF WIDE",
  "2TAP MED FLAT AMBI",
  "2TAP MED HPF AMBI",
  "2TAP MED BPF AMBI",
  "2TAP MED FLAT THICK",
  "2TAP SHORT FLAT WIDE",
  "2TAP SHORT HPF PAN",
  "2TAP SHORT BPF AMBI",
  "2TAP SHORT LPF AMBI",
  "2TAP XSHORT FLAT WIDE",
  "3TAP MED FLAT PAN",
  "3TAP SHORT FLAT PAN",
  "3TAP SHORT LPF AMBI",
  "3TAP SHORT BPF AMBI",
  "3TAP SHORT HPF AMBI",
  "3TAP XSHORT FLAT AMBI",
  "REGEN MED FLAT",
  "REGEN MED HPF AMBI",
  "REGEN MED BPF AMBI",
  "REGEN MED LPF AMBI",
  "REGEN SHORT FLAT",
  "REGEN XSHORT FLAT",
  "SLAP1",
  "SLAP2",
  "SLAP3",
  "SLAP4",
  "SLAP5",
  "REVERB SHORT GATE",
  "REVERB MEDIUM WARM",
  "REVERB MEDIUM BLOOM",
  "REVERB MEDIUM PAN",
  "REVERB LONG HPF",
  "REVERB REVERSE",
  "REVERB REVERSE REGEN",
  "MULTITAP PAN",
  "MULTITAP REVERB",
  "MULTITAP REVERSE PAN",
  "THICKENER",
  "THICKENER DENSE",
  "STEREOGEN AMBIENT",
  "STEREOGEN THICK",
  "STEREOGEN WIDE",
  "STEREOGEN XWIDE",
  "DEFEAT"
];
var MIDIFEX_PROGRAM_COUNT = midifexProgramNames.length;

// src/dsp/decompiled/midifex.ts
var adaptMidifexEffect = (effect) => {
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
      state.lfo2 >>> 0
    );
    state.pointer = state.pointer + DECOMPILED_POINTER_INCREMENT & DECOMPILED_DRAM_MASK;
    output.left = clampToInt16(scratchOut[0]);
    output.right = clampToInt16(scratchOut[1]);
  };
};
var midifexPassthrough = (input, output) => {
  output[0] = input;
  output[1] = input;
};
var midifexFallbackRunner = adaptMidifexEffect(midifexPassthrough);
var createMidifexDispatchTable = () => {
  return Array.from({ length: midifexProgramNames.length }).map((_, i) => {
    const generated = midifexGeneratedEffects[i];
    return generated ? adaptMidifexEffect(generated) : midifexFallbackRunner;
  });
};
var midifexRegistry = {
  family: "MIDIFEX",
  programs: createMidifexDispatchTable(),
  programNames: midifexProgramNames,
  fallback: midifexFallbackRunner
};

// src/dsp/decompiled/midiverb2Generated.ts
var midiverb2_effect_0 = (_input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0;
  out[0] = dram[pointer + 140 - 135 & 16383];
  out[1] = dram[pointer + 140 - 137 & 16383];
  Acc = 0;
  Acc = Acc << 16 >> 16;
  dram[pointer + 140 & 16383] = -Acc;
};
var midiverb2_effect_1 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 15972 - 12 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 15549 - 234 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 15035 - 252 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 14477 - 378 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 12812 - 169 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 12375 - 199 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 11892 - 423 & 16383] * 3 / 4);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 15972 - 145 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 15549 - 130 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 15035 - 459 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 14477 - 277 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 12812 - 103 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 12375 - 208 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 10744 - 16 & 16383] * 3 / 4);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 16381 - 19 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 0 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16360 - 45 & 16383] * 3 / 4) + dram[pointer + 16381 - 19 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16360 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16313 - 84 & 16383] * 3 / 4) + dram[pointer + 16360 - 45 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16313 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16227 - 115 & 16383] * 3 / 4) + dram[pointer + 16313 - 84 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16227 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16110 - 136 & 16383] * 3 / 4) + dram[pointer + 16227 - 115 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16110 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[pointer + 16110 - 136 & 16383] * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_b = Acc;
  tmp_b = tmp_b << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 15972 - 421 & 16383] / 2) + Math.trunc(dram[pointer + 13797 - 278 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13797 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13797 - 278 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 15549 & 16383] = Acc;
  Acc = Math.trunc(-dram[pointer + 15549 - 512 & 16383] / 4) + Math.trunc(-dram[pointer + 15549 - 513 & 16383] / 4) + Math.trunc(dram[pointer + 13517 - 212 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13517 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13517 - 212 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 15035 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 15035 - 556 & 16383] / 2) + Math.trunc(dram[pointer + 13303 - 256 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13303 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13303 - 256 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 14477 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 14477 - 678 & 16383] / 2) + Math.trunc(dram[pointer + 13045 - 231 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13045 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13045 - 231 & 16383] + Math.trunc(dram[pointer + 9694 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9694 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 9694 - 0 & 16383] / 2) + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 15972 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 12812 - 435 & 16383] / 2) + Math.trunc(dram[pointer + 10744 - 292 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10744 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10744 - 292 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 12375 & 16383] = Acc;
  Acc = Math.trunc(-dram[pointer + 12375 - 481 & 16383] / 4) + Math.trunc(-dram[pointer + 12375 - 482 & 16383] / 4) + Math.trunc(dram[pointer + 10450 - 281 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10450 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10450 - 281 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 11892 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 11892 - 571 & 16383] / 2) + Math.trunc(dram[pointer + 10167 - 234 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10167 & 16383] = -Acc;
  out[0] = tmp_5;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10167 - 234 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 11319 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 11319 - 573 & 16383] / 2) + Math.trunc(dram[pointer + 9931 - 232 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9931 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9931 - 232 & 16383] + Math.trunc(dram[pointer + 9691 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9691 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 9691 - 0 & 16383] / 2) + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 12812 & 16383] = Acc;
  out[1] = tmp_3;
};
var midiverb2_effect_2 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 15962 - 120 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 15092 - 334 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 12751 - 252 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 11359 - 478 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 9457 - 369 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 8482 - 499 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 6402 - 723 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 5629 - 214 & 16383] * 3 / 4);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 15962 - 129 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 15092 - 130 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 12751 - 459 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 11359 - 277 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 9457 - 363 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 8482 - 208 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 6402 - 421 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 5629 - 891 & 16383] * 3 / 4);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 16381 - 19 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 0 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16360 - 45 & 16383] * 3 / 4) + dram[pointer + 16381 - 19 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16360 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16313 - 84 & 16383] * 3 / 4) + dram[pointer + 16360 - 45 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16313 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16227 - 115 & 16383] * 3 / 4) + dram[pointer + 16313 - 84 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16227 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16110 - 146 & 16383] * 3 / 4) + dram[pointer + 16227 - 115 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16110 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[pointer + 16110 - 146 & 16383] * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_b = Acc;
  tmp_b = tmp_b << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 15962 - 868 & 16383] / 2) + Math.trunc(dram[pointer + 13745 - 678 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13745 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13745 - 678 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 15092 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 15092 - 1345 & 16383] / 2) + Math.trunc(dram[pointer + 13065 - 312 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13065 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13065 - 312 & 16383] + Math.trunc(dram[pointer + 3636 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3636 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 3636 - 0 & 16383] / 2) + Math.trunc(tmp_b / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15962 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 12751 - 1390 & 16383] / 2) + Math.trunc(dram[pointer + 10568 - 676 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10568 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10568 - 676 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 11359 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 11359 - 789 & 16383] / 2) + Math.trunc(dram[pointer + 9890 - 431 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9890 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9890 - 431 & 16383] + Math.trunc(dram[pointer + 3633 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3633 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 3633 - 0 & 16383] / 2) + Math.trunc(tmp_b / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12751 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 9457 - 973 & 16383] / 2) + Math.trunc(dram[pointer + 7499 - 712 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7499 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7499 - 712 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 8482 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 8482 - 981 & 16383] / 2) + Math.trunc(dram[pointer + 6785 - 381 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6785 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6785 - 381 & 16383] + Math.trunc(dram[pointer + 3630 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3630 & 16383] = Acc;
  out[0] = tmp_5;
  Acc = Math.trunc(dram[pointer + 3630 - 0 & 16383] / 2) + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 9457 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 6402 - 771 & 16383] / 2) + Math.trunc(dram[pointer + 4606 - 634 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4606 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4606 - 634 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 5629 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 5629 - 1021 & 16383] / 2) + Math.trunc(dram[pointer + 3970 - 332 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3970 & 16383] = -Acc;
  out[1] = tmp_3;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 3970 - 332 & 16383] + Math.trunc(dram[pointer + 3627 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3627 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 3627 - 0 & 16383] / 2) + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 6402 & 16383] = Acc;
};
var midiverb2_effect_3 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 15962 - 320 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 15092 - 734 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 12551 - 252 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 11159 - 478 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 8857 - 369 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 7621 - 499 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 5441 - 723 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 4468 - 214 & 16383] * 3 / 4);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 15962 - 129 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 15092 - 130 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 12551 - 859 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 11159 - 277 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 8857 - 563 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 7621 - 208 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 5441 - 421 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 4468 - 891 & 16383] * 3 / 4);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 16381 - 19 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 0 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16360 - 45 & 16383] * 3 / 4) + dram[pointer + 16381 - 19 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16360 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16313 - 84 & 16383] * 3 / 4) + dram[pointer + 16360 - 45 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16313 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16227 - 115 & 16383] * 3 / 4) + dram[pointer + 16313 - 84 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16227 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16110 - 146 & 16383] * 3 / 4) + dram[pointer + 16227 - 115 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16110 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[pointer + 16110 - 146 & 16383] * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_b = Acc;
  tmp_b = tmp_b << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 15962 - 868 & 16383] / 2) + Math.trunc(dram[pointer + 13745 - 678 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13745 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13745 - 678 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 15092 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 15092 - 1345 & 16383] / 2) + Math.trunc(dram[pointer + 13065 - 512 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13065 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13065 - 512 & 16383] + Math.trunc(dram[pointer + 2475 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2475 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 2475 - 0 & 16383] / 2) + Math.trunc(tmp_b / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15962 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 12551 - 1390 & 16383] / 2) + Math.trunc(dram[pointer + 10168 - 676 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10168 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10168 - 676 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 11159 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 11159 - 989 & 16383] / 2) + Math.trunc(dram[pointer + 9490 - 631 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9490 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9490 - 631 & 16383] + Math.trunc(dram[pointer + 2472 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2472 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 2472 - 0 & 16383] / 2) + Math.trunc(tmp_b / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12551 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 8857 - 1234 & 16383] / 2) + Math.trunc(dram[pointer + 6638 - 712 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6638 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6638 - 712 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 7621 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 7621 - 981 & 16383] / 2) + Math.trunc(dram[pointer + 5924 - 481 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5924 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 5924 - 481 & 16383] + Math.trunc(dram[pointer + 2469 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2469 & 16383] = Acc;
  out[0] = tmp_5;
  Acc = Math.trunc(dram[pointer + 2469 - 0 & 16383] / 2) + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 8857 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 5441 - 971 & 16383] / 2) + Math.trunc(dram[pointer + 3445 - 634 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3445 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 3445 - 634 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 4468 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 4468 - 1021 & 16383] / 2) + Math.trunc(dram[pointer + 2809 - 332 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2809 & 16383] = -Acc;
  out[1] = tmp_3;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2809 - 332 & 16383] + Math.trunc(dram[pointer + 2466 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2466 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 2466 - 0 & 16383] / 2) + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 5441 & 16383] = Acc;
};
var midiverb2_effect_4 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 14885 - 361 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 11865 - 789 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 7880 - 1703 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 14885 - 576 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 11865 - 390 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 7880 - 671 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 3607 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3607 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 3607 - 0 & 16383] / 2) + Math.trunc(dram[pointer + 16381 - 36 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16381 - 36 & 16383] + Math.trunc(dram[pointer + 16343 - 79 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16343 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16343 - 79 & 16383] + Math.trunc(dram[pointer + 16262 - 158 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16262 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16262 - 158 & 16383] + Math.trunc(dram[pointer + 16102 - 269 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16102 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16102 - 269 & 16383] + Math.trunc(dram[pointer + 15831 - 344 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15831 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15831 - 344 & 16383] + Math.trunc(dram[pointer + 15485 - 598 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15485 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 15485 - 598 & 16383] * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_b = Acc;
  tmp_b = tmp_b << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 14885 - 1624 & 16383] / 2) + Math.trunc(dram[pointer + 14885 - 1625 & 16383] / 2) + Math.trunc(dram[pointer + 13259 - 1392 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13259 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13259 - 1392 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 11865 & 16383] = Acc;
  Acc = Math.trunc(-dram[pointer + 11865 - 2410 & 16383] / 4) + Math.trunc(dram[pointer + 9453 - 1571 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9453 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9453 - 1571 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 7880 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 7880 - 2657 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 5221 - 1612 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5221 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 5221 - 1612 & 16383] + Math.trunc(dram[pointer + 3604 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3604 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 3604 - 0 & 16383] / 2) + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 14885 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_5 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 15952 - 120 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 15282 - 334 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 14568 - 252 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 13710 - 478 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 11245 - 369 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 10670 - 499 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 9987 - 723 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 9114 - 207 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 15952 - 129 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 15282 - 130 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 14568 - 459 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 13710 - 277 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 11245 - 363 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 10670 - 208 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 9987 - 451 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 8279 - 56 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 6812 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6812 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 16381 - 19 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 0 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16360 - 45 & 16383] * 3 / 4) + dram[pointer + 16381 - 19 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16360 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16313 - 84 & 16383] * 3 / 4) + dram[pointer + 16360 - 45 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16313 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16227 - 115 & 16383] * 3 / 4) + dram[pointer + 16313 - 84 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16227 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16110 - 156 & 16383] * 3 / 4) + dram[pointer + 16227 - 115 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16110 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + dram[pointer + 16110 - 156 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_b = Acc;
  tmp_b = tmp_b << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 15952 - 668 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 12830 - 478 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12830 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12830 - 478 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 15282 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 15282 - 712 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 12350 - 312 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12350 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12350 - 312 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 14568 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 14568 - 856 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 12036 - 456 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12036 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12036 - 456 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 13710 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 13710 - 878 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 11578 - 331 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11578 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11578 - 331 & 16383] + Math.trunc(dram[pointer + 6809 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6809 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 6809 - 0 & 16383] / 2) + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 15952 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 11245 - 573 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 8279 - 412 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8279 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8279 - 412 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 10670 & 16383] = Acc;
  out[0] = tmp_5;
  Acc = Math.trunc(dram[pointer + 10670 - 681 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 7865 - 381 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7865 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7865 - 381 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 9987 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 9987 - 871 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 7482 - 434 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7482 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7482 - 434 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 9114 & 16383] = Acc;
  out[1] = tmp_3;
  Acc = Math.trunc(dram[pointer + 9114 - 833 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 7046 - 232 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7046 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7046 - 232 & 16383] + Math.trunc(dram[pointer + 6806 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6806 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 6806 - 0 & 16383] / 2) + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 11245 & 16383] = Acc;
};
var midiverb2_effect_6 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 14666 - 345 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 10834 - 987 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 3735 - 678 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 7372 - 345 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 14666 - 685 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 10834 - 342 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 3735 - 340 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 7372 - 1023 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 16282 - 98 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 0 - 100 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16282 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 16182 - 198 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 16282 - 0 & 16383] / 2) + dram[pointer + 16282 - 98 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16182 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 15982 - 367 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 16182 - 0 & 16383] / 2) + dram[pointer + 16182 - 198 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 15982 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 15613 - 598 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 15982 - 0 & 16383] / 2) + dram[pointer + 15982 - 367 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 15613 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 15613 - 0 & 16383] / 2) + dram[pointer + 15613 - 598 & 16383] + Math.trunc(dram[pointer + 15013 - 345 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15013 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15013 - 345 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_b = Acc;
  tmp_b = tmp_b << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 14666 - 2203 & 16383] / 2) + Math.trunc(dram[pointer + 14666 - 2204 & 16383] / 2) + Math.trunc(dram[pointer + 12461 - 1625 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12461 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12461 - 1625 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 10834 & 16383] = Acc;
  Acc = Math.trunc(-dram[pointer + 10834 - 1969 & 16383] / 4) + Math.trunc(dram[pointer + 8863 - 1489 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8863 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8863 - 1489 & 16383] + Math.trunc(dram[pointer + 160 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 160 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 160 - 0 & 16383] / 2) + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 14666 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 7372 - 1934 & 16383] / 2) + Math.trunc(dram[pointer + 7372 - 1935 & 16383] / 2) + Math.trunc(dram[pointer + 5436 - 1699 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5436 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 5436 - 1699 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 3735 & 16383] = Acc;
  Acc = Math.trunc(-dram[pointer + 3735 - 2183 & 16383] / 4) + Math.trunc(dram[pointer + 1550 - 1385 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1550 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 1550 - 1385 & 16383] + Math.trunc(dram[pointer + 157 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 157 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 157 - 0 & 16383] / 2) + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 7372 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_7 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 14666 - 1209 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 10834 - 987 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 3735 - 678 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 7372 - 787 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 14666 - 685 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 10834 - 342 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 3735 - 340 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 7372 - 1023 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 100 & 16383] / 2) + Math.trunc(dram[pointer + 163 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 163 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 16282 - 98 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 163 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16282 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 16182 - 198 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 16282 - 0 & 16383] / 2) + dram[pointer + 16282 - 98 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16182 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 15982 - 367 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 16182 - 0 & 16383] / 2) + dram[pointer + 16182 - 198 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 15982 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 15613 - 598 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 15982 - 0 & 16383] / 2) + dram[pointer + 15982 - 367 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 15613 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 15613 - 0 & 16383] / 2) + dram[pointer + 15613 - 598 & 16383] + Math.trunc(dram[pointer + 15013 - 345 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15013 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15013 - 345 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_b = Acc;
  tmp_b = tmp_b << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 14666 - 2203 & 16383] / 2) + Math.trunc(dram[pointer + 14666 - 2204 & 16383] / 2) + Math.trunc(dram[pointer + 12461 - 1625 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12461 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12461 - 1625 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 10834 & 16383] = Acc;
  Acc = Math.trunc(-dram[pointer + 10834 - 1969 & 16383] / 4) + Math.trunc(dram[pointer + 8863 - 1489 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8863 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8863 - 1489 & 16383] + Math.trunc(dram[pointer + 160 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 160 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 160 - 0 & 16383] / 2) + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 14666 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 7372 - 1934 & 16383] / 2) + Math.trunc(dram[pointer + 7372 - 1935 & 16383] / 2) + Math.trunc(dram[pointer + 5436 - 1699 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5436 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 5436 - 1699 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 3735 & 16383] = Acc;
  Acc = Math.trunc(-dram[pointer + 3735 - 2183 & 16383] / 4) + Math.trunc(dram[pointer + 1550 - 1385 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1550 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 1550 - 1385 & 16383] + Math.trunc(dram[pointer + 157 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 157 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 157 - 0 & 16383] / 2) + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 7372 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_8 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 15952 - 120 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 15282 - 334 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 14568 - 252 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 13710 - 478 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 11245 - 369 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 10670 - 499 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 9987 - 723 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 9114 - 207 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 15952 - 129 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 15282 - 130 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 14568 - 459 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 13710 - 277 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 11245 - 363 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 10670 - 208 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 9987 - 451 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 8279 - 56 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 6812 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6812 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 16381 - 19 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 6812 - 0 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16360 - 45 & 16383] * 3 / 4) + dram[pointer + 16381 - 19 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16360 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16313 - 84 & 16383] * 3 / 4) + dram[pointer + 16360 - 45 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16313 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16227 - 115 & 16383] * 3 / 4) + dram[pointer + 16313 - 84 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16227 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16110 - 156 & 16383] * 3 / 4) + dram[pointer + 16227 - 115 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16110 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + dram[pointer + 16110 - 156 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_b = Acc;
  tmp_b = tmp_b << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 15952 - 668 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 12830 - 478 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12830 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12830 - 478 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 15282 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 15282 - 712 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 12350 - 312 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12350 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12350 - 312 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 14568 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 14568 - 856 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 12036 - 456 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12036 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12036 - 456 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 13710 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 13710 - 878 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 11578 - 331 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11578 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11578 - 331 & 16383] + Math.trunc(dram[pointer + 6809 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6809 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 6809 - 0 & 16383] / 2) + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 15952 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 11245 - 573 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 8279 - 412 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8279 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8279 - 412 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 10670 & 16383] = Acc;
  out[0] = tmp_5;
  Acc = Math.trunc(dram[pointer + 10670 - 681 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 7865 - 381 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7865 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7865 - 381 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 9987 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 9987 - 871 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 7482 - 434 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7482 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7482 - 434 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 9114 & 16383] = Acc;
  out[1] = tmp_3;
  Acc = Math.trunc(dram[pointer + 9114 - 833 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 7046 - 232 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7046 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7046 - 232 & 16383] + Math.trunc(dram[pointer + 6806 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6806 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 6806 - 0 & 16383] / 2) + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 11245 & 16383] = Acc;
};
var midiverb2_effect_9 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 15922 - 120 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 14952 - 334 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 14138 - 252 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 13180 - 478 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 9647 - 369 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 8772 - 499 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 7889 - 323 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_3 = -Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 15922 - 129 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 14952 - 130 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 14138 - 459 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 13180 - 277 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 9647 - 363 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 8772 - 208 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 6916 - 491 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_5 = -Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 3037 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3037 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 16381 - 19 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 3037 - 0 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16360 - 45 & 16383] * 3 / 4) + dram[pointer + 16381 - 19 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16360 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16313 - 84 & 16383] * 3 / 4) + dram[pointer + 16360 - 45 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16313 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16227 - 125 & 16383] * 3 / 4) + dram[pointer + 16313 - 84 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16227 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16100 - 176 & 16383] * 3 / 4) + dram[pointer + 16227 - 125 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16100 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + dram[pointer + 16100 - 176 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_b = -Acc;
  tmp_b = tmp_b << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 15922 - 968 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 12432 - 678 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12432 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12432 - 678 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 14952 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 14952 - 812 & 16383] / 2) + Math.trunc(dram[pointer + 11752 - 512 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11752 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11752 - 512 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 14138 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 14138 - 956 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 11238 - 756 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11238 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11238 - 756 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 13180 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 13180 - 746 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 10480 - 831 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10480 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10480 - 831 & 16383] + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 15922 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 9647 - 873 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 5904 - 512 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5904 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 5904 - 512 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 8772 & 16383] = Acc;
  out[0] = tmp_5;
  Acc = Math.trunc(dram[pointer + 8772 - 881 & 16383] / 2) + Math.trunc(dram[pointer + 5390 - 781 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5390 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 5390 - 781 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 7889 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 7889 - 971 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 4607 - 634 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4607 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4607 - 634 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 6916 & 16383] = Acc;
  out[1] = tmp_3;
  Acc = Math.trunc(dram[pointer + 6916 - 1010 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 3971 - 932 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3971 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 3971 - 932 & 16383] + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 9647 & 16383] = Acc;
};
var midiverb2_effect_10 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 15922 - 120 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 14952 - 334 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 14138 - 252 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 13180 - 478 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 9647 - 369 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 8772 - 499 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 7889 - 323 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 15922 - 129 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 14952 - 130 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 14138 - 459 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 13180 - 277 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 9647 - 363 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 8772 - 208 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 6916 - 491 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 16381 - 19 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 0 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16360 - 45 & 16383] * 3 / 4) + dram[pointer + 16381 - 19 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16360 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16313 - 84 & 16383] * 3 / 4) + dram[pointer + 16360 - 45 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16313 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16227 - 125 & 16383] * 3 / 4) + dram[pointer + 16313 - 84 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16227 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16100 - 176 & 16383] * 3 / 4) + dram[pointer + 16227 - 125 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16100 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + dram[pointer + 16100 - 176 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_b = Acc;
  tmp_b = tmp_b << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 15922 - 968 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 12432 - 678 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12432 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12432 - 678 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 14952 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 14952 - 812 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 11752 - 512 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11752 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11752 - 512 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 14138 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 14138 - 956 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 11238 - 756 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11238 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11238 - 756 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 13180 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 13180 - 746 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 10480 - 831 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10480 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10480 - 831 & 16383] + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 15922 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 9647 - 873 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 5904 - 512 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5904 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 5904 - 512 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 8772 & 16383] = Acc;
  out[0] = tmp_5;
  Acc = Math.trunc(dram[pointer + 8772 - 881 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 5390 - 781 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5390 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 5390 - 781 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 7889 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 7889 - 971 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 4607 - 634 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4607 & 16383] = -Acc;
  out[1] = tmp_3;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4607 - 634 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 6916 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 6916 - 1010 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 3971 - 932 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3971 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 3971 - 932 & 16383] + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 9647 & 16383] = Acc;
};
var midiverb2_effect_11 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 15922 - 120 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 14952 - 334 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 14138 - 252 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 13180 - 478 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 9647 - 369 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 8772 - 499 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 7889 - 323 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 15922 - 129 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 14952 - 130 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 14138 - 459 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 13180 - 277 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 9647 - 363 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 8772 - 208 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 6916 - 491 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 16381 - 19 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 0 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16360 - 45 & 16383] * 3 / 4) + dram[pointer + 16381 - 19 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16360 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16313 - 84 & 16383] * 3 / 4) + dram[pointer + 16360 - 45 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16313 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16227 - 125 & 16383] * 3 / 4) + dram[pointer + 16313 - 84 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16227 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16100 - 176 & 16383] * 3 / 4) + dram[pointer + 16227 - 125 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16100 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + dram[pointer + 16100 - 176 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_b = Acc;
  tmp_b = tmp_b << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 15922 - 968 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 12432 - 678 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12432 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12432 - 678 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 14952 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 14952 - 812 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 11752 - 512 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11752 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11752 - 512 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 14138 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 14138 - 956 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 11238 - 756 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11238 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11238 - 756 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 13180 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 13180 - 746 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 10480 - 831 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10480 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10480 - 831 & 16383] + Math.trunc(dram[pointer + 3034 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3034 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 3034 - 0 & 16383] / 2) + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 15922 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 9647 - 873 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 5904 - 512 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5904 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 5904 - 512 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 8772 & 16383] = Acc;
  out[0] = tmp_5;
  Acc = Math.trunc(dram[pointer + 8772 - 881 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 5390 - 781 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5390 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 5390 - 781 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 7889 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 7889 - 971 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 4607 - 634 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4607 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4607 - 634 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 6916 & 16383] = Acc;
  out[1] = tmp_3;
  Acc = Math.trunc(dram[pointer + 6916 - 1010 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 3971 - 932 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3971 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 3971 - 932 & 16383] + Math.trunc(dram[pointer + 3031 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3031 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 3031 - 0 & 16383] / 2) + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 9647 & 16383] = Acc;
};
var midiverb2_effect_12 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 15417 - 37 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 14594 - 336 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 13980 - 454 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 13222 - 478 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 9824 - 569 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 8887 - 499 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 7904 - 723 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 7031 - 391 & 16383] * 3 / 4);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 15417 - 370 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 14594 - 230 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 13980 - 457 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 13222 - 477 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 9824 - 569 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 8887 - 208 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 7904 - 223 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 7031 - 891 & 16383] * 3 / 4);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 3852 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 451 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3852 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 15931 - 7 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 0 - 451 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15931 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 15922 - 15 & 16383] * 3 / 4) + dram[pointer + 15931 - 7 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 15922 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 15905 - 34 & 16383] * 3 / 4) + dram[pointer + 15922 - 15 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 15905 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 15869 - 75 & 16383] * 3 / 4) + dram[pointer + 15905 - 34 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 15869 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 15792 - 135 & 16383] * 3 / 4) + dram[pointer + 15869 - 75 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 15792 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 15655 - 236 & 16383] * 3 / 4) + dram[pointer + 15792 - 135 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 15655 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[pointer + 15655 - 236 & 16383] * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_b = Acc;
  tmp_b = tmp_b << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 15417 - 821 & 16383] / 2) + Math.trunc(dram[pointer + 15417 - 822 & 16383] / 2) + Math.trunc(dram[pointer + 12242 - 789 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12242 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12242 - 789 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 14594 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 14594 - 612 & 16383] / 2) + Math.trunc(dram[pointer + 14594 - 613 & 16383] / 2) + Math.trunc(dram[pointer + 11451 - 412 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11451 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11451 - 412 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 13980 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 13980 - 756 & 16383] * -3 / 8) + Math.trunc(dram[pointer + 13980 - 757 & 16383] * -3 / 8) + Math.trunc(dram[pointer + 11037 - 678 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11037 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11037 - 678 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 13222 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 13222 - 978 & 16383] / 2) + Math.trunc(dram[pointer + 10357 - 531 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10357 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10357 - 531 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 9824 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 9824 - 935 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 5819 - 612 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5819 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 5819 - 612 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 8887 & 16383] = Acc;
  out[0] = tmp_5;
  Acc = Math.trunc(dram[pointer + 8887 - 981 & 16383] * -3 / 8) + Math.trunc(dram[pointer + 8887 - 982 & 16383] * -3 / 8) + Math.trunc(dram[pointer + 5205 - 381 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5205 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 5205 - 381 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 7904 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 7904 - 871 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 4822 - 534 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4822 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4822 - 534 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 7031 & 16383] = Acc;
  out[1] = tmp_3;
  Acc = Math.trunc(dram[pointer + 7031 - 1210 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 4286 - 432 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4286 & 16383] = -Acc;
  Acc = Math.trunc(Acc / 4) + Math.trunc(-dram[pointer + 4286 - 432 & 16383] / 2) + Math.trunc(dram[pointer + 3846 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3846 & 16383] = Acc;
  Acc = dram[pointer + 3846 - 0 & 16383] + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 15417 & 16383] = Acc;
};
var midiverb2_effect_13 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 15417 - 37 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 14794 - 236 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 14380 - 454 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 13922 - 478 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 10081 - 569 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 9144 - 499 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 8161 - 723 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 7288 - 391 & 16383] * 3 / 4);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 15417 - 37 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 14794 - 230 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 14380 - 457 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 13922 - 477 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 10081 - 569 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 9144 - 508 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 8161 - 223 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 7288 - 891 & 16383] * 3 / 4);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 3509 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 451 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3509 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 15931 - 7 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 0 - 451 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15931 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 15922 - 15 & 16383] * 3 / 4) + dram[pointer + 15931 - 7 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 15922 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 15905 - 34 & 16383] * 3 / 4) + dram[pointer + 15922 - 15 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 15905 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 15869 - 75 & 16383] * 3 / 4) + dram[pointer + 15905 - 34 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 15869 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 15792 - 135 & 16383] * 3 / 4) + dram[pointer + 15869 - 75 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 15792 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 15655 - 236 & 16383] * 3 / 4) + dram[pointer + 15792 - 135 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 15655 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[pointer + 15655 - 236 & 16383] * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_b = Acc;
  tmp_b = tmp_b << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 15417 - 621 & 16383] / 2) + Math.trunc(dram[pointer + 15417 - 622 & 16383] / 2) + Math.trunc(dram[pointer + 13342 - 789 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13342 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13342 - 789 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 14794 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 14794 - 412 & 16383] / 2) + Math.trunc(dram[pointer + 14794 - 413 & 16383] / 2) + Math.trunc(dram[pointer + 12551 - 912 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12551 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12551 - 912 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 14380 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 14380 - 456 & 16383] * -3 / 8) + Math.trunc(dram[pointer + 14380 - 457 & 16383] * -3 / 8) + Math.trunc(dram[pointer + 11637 - 1021 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11637 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11637 - 1021 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 13922 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 13922 - 578 & 16383] / 2) + Math.trunc(dram[pointer + 10614 - 531 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10614 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10614 - 531 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 10081 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 10081 - 935 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 6076 - 712 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6076 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6076 - 712 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 9144 & 16383] = Acc;
  out[0] = tmp_5;
  Acc = Math.trunc(dram[pointer + 9144 - 981 & 16383] * -3 / 8) + Math.trunc(dram[pointer + 9144 - 982 & 16383] * -3 / 8) + Math.trunc(dram[pointer + 5362 - 381 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5362 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 5362 - 381 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 8161 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 8161 - 871 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 4979 - 634 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4979 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4979 - 634 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 7288 & 16383] = Acc;
  out[1] = tmp_3;
  Acc = Math.trunc(dram[pointer + 7288 - 1210 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 4343 - 832 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4343 & 16383] = -Acc;
  Acc = Math.trunc(Acc / 4) + Math.trunc(-dram[pointer + 4343 - 832 & 16383] / 2) + Math.trunc(dram[pointer + 3503 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3503 & 16383] = Acc;
  Acc = dram[pointer + 3503 - 0 & 16383] + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 15417 & 16383] = Acc;
};
var midiverb2_effect_14 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 15922 - 120 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 15252 - 334 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 14438 - 252 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 13480 - 478 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 9683 - 369 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 9008 - 499 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 8125 - 723 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 15922 - 129 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 15252 - 130 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 14438 - 459 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 13480 - 277 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 9683 - 363 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 9008 - 208 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 7152 - 891 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 3073 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3073 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 16381 - 19 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 3073 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16360 - 45 & 16383] * 3 / 4) + dram[pointer + 16381 - 19 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16360 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16313 - 84 & 16383] * 3 / 4) + dram[pointer + 16360 - 45 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16313 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16227 - 125 & 16383] * 3 / 4) + dram[pointer + 16313 - 84 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16227 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16100 - 176 & 16383] * 3 / 4) + dram[pointer + 16227 - 125 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16100 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + dram[pointer + 16100 - 176 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_b = Acc;
  tmp_b = tmp_b << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 15922 - 668 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 12468 - 678 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12468 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12468 - 678 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 15252 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 15252 - 812 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 11788 - 512 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11788 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11788 - 512 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 14438 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 14438 - 956 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 11274 - 756 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11274 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11274 - 756 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 13480 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 13480 - 1010 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 10516 - 831 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10516 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10516 - 831 & 16383] + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 15922 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 9683 - 673 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 5940 - 512 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5940 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 5940 - 512 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 9008 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 9008 - 881 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 5426 - 781 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5426 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 5426 - 781 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 8125 & 16383] = Acc;
  out[0] = tmp_5;
  Acc = Math.trunc(dram[pointer + 8125 - 971 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 4643 - 634 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4643 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4643 - 634 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 7152 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 7152 - 1210 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 4007 - 932 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4007 & 16383] = -Acc;
  out[1] = tmp_3;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4007 - 932 & 16383] + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 9683 & 16383] = Acc;
};
var midiverb2_effect_15 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 15922 - 520 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 14952 - 334 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 14138 - 252 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 13180 - 478 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 9183 - 369 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 8408 - 499 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 7525 - 723 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 15922 - 129 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 14952 - 130 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 14138 - 459 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 13180 - 277 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 9183 - 363 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 8408 - 208 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 6552 - 891 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 2473 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2473 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 16381 - 19 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 0 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16360 - 45 & 16383] * 3 / 4) + dram[pointer + 16381 - 19 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16360 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16313 - 84 & 16383] * 3 / 4) + dram[pointer + 16360 - 45 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16313 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16227 - 125 & 16383] * 3 / 4) + dram[pointer + 16313 - 84 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16227 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16100 - 176 & 16383] * 3 / 4) + dram[pointer + 16227 - 125 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16100 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + dram[pointer + 16100 - 176 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_b = Acc;
  tmp_b = tmp_b << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 15922 - 968 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 12068 - 678 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12068 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12068 - 678 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 14952 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 14952 - 812 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 11388 - 612 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11388 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11388 - 612 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 14138 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 14138 - 956 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 10774 - 756 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10774 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10774 - 756 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 13180 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 13180 - 1110 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 10016 - 831 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10016 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10016 - 831 & 16383] + Math.trunc(dram[pointer + 2470 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2470 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 2470 - 0 & 16383] / 2) + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 15922 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 9183 - 773 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 5340 - 512 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5340 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 5340 - 512 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 8408 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 8408 - 881 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 4826 - 781 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4826 & 16383] = -Acc;
  out[0] = tmp_5;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4826 - 781 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 7525 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 7525 - 971 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 4043 - 634 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4043 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4043 - 634 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 6552 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 6552 - 1210 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 3407 - 932 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3407 & 16383] = -Acc;
  out[1] = tmp_3;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 3407 - 932 & 16383] + Math.trunc(dram[pointer + 2467 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2467 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 2467 - 0 & 16383] / 2) + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 9183 & 16383] = Acc;
};
var midiverb2_effect_16 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 15922 - 120 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 15252 - 334 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 14438 - 252 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 13480 - 478 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 9683 - 369 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 9008 - 499 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 8125 - 723 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 15922 - 129 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 15252 - 130 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 14438 - 459 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 13480 - 277 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 9683 - 363 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 9008 - 208 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 7152 - 891 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 3073 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3073 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 16381 - 19 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 0 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16360 - 45 & 16383] * 3 / 4) + dram[pointer + 16381 - 19 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16360 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16313 - 84 & 16383] * 3 / 4) + dram[pointer + 16360 - 45 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16313 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16227 - 125 & 16383] * 3 / 4) + dram[pointer + 16313 - 84 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16227 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16100 - 176 & 16383] * 3 / 4) + dram[pointer + 16227 - 125 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16100 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + dram[pointer + 16100 - 176 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_b = Acc;
  tmp_b = tmp_b << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 15922 - 668 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 12468 - 678 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12468 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12468 - 678 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 15252 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 15252 - 812 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 11788 - 512 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11788 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11788 - 512 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 14438 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 14438 - 956 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 11274 - 756 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11274 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11274 - 756 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 13480 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 13480 - 1010 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 10516 - 831 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10516 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10516 - 831 & 16383] + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 15922 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 9683 - 673 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 5940 - 512 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5940 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 5940 - 512 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 9008 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 9008 - 881 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 5426 - 781 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5426 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 5426 - 781 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 8125 & 16383] = Acc;
  out[0] = tmp_5;
  Acc = Math.trunc(dram[pointer + 8125 - 971 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 4643 - 634 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4643 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4643 - 634 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 7152 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 7152 - 1210 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 4007 - 932 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4007 & 16383] = -Acc;
  out[1] = tmp_3;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4007 - 932 & 16383] + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 9683 & 16383] = Acc;
};
var midiverb2_effect_17 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 13337 - 211 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 10417 - 1391 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 6832 - 1403 & 16383] * 3 / 4);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 13337 - 211 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 10417 - 690 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 6832 - 471 & 16383] * 3 / 4);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 457 & 16383] / 2) + Math.trunc(dram[pointer + 3759 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3759 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 0 - 457 & 16383] / 2) + Math.trunc(dram[pointer + 15925 - 321 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15925 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15925 - 321 & 16383] + Math.trunc(dram[pointer + 15602 - 431 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15602 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15602 - 431 & 16383] + Math.trunc(dram[pointer + 15169 - 668 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15169 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15169 - 668 & 16383] + Math.trunc(dram[pointer + 14499 - 808 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14499 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14499 - 808 & 16383] + Math.trunc(dram[pointer + 13689 - 204 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13689 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13689 - 204 & 16383] + Math.trunc(dram[pointer + 13483 - 144 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13483 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[pointer + 13483 - 144 & 16383] * 9 / 4);
  Acc = Acc << 16 >> 16;
  tmp_b = Acc;
  tmp_b = tmp_b << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 13337 - 1724 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 11611 - 1192 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11611 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11611 - 1192 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 10417 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 10417 - 2510 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 7905 - 1071 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7905 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7905 - 1071 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 6832 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 6832 - 1857 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 4973 - 1212 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4973 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4973 - 1212 & 16383] + Math.trunc(dram[pointer + 3756 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3756 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 3756 - 0 & 16383] / 2) + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 13337 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_18 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 13793 - 211 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 10673 - 1391 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 6788 - 1403 & 16383] * 3 / 4);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 13793 - 1101 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 10673 - 690 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 6788 - 471 & 16383] * 3 / 4);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 3415 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3415 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 3415 - 0 & 16383] / 2) + Math.trunc(dram[pointer + 16381 - 321 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16381 - 321 & 16383] + Math.trunc(dram[pointer + 16058 - 431 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16058 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16058 - 431 & 16383] + Math.trunc(dram[pointer + 15625 - 668 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15625 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15625 - 668 & 16383] + Math.trunc(dram[pointer + 14955 - 808 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14955 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14955 - 808 & 16383] + Math.trunc(dram[pointer + 14145 - 204 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14145 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14145 - 204 & 16383] + Math.trunc(dram[pointer + 13939 - 144 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13939 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[pointer + 13939 - 144 & 16383] * 9 / 4);
  Acc = Acc << 16 >> 16;
  tmp_b = Acc;
  tmp_b = tmp_b << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 13793 - 1724 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 12067 - 1392 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12067 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12067 - 1392 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 10673 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 10673 - 2510 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 8161 - 1371 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8161 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8161 - 1371 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 6788 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 6788 - 1857 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 4929 - 1512 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4929 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4929 - 1512 & 16383] + Math.trunc(dram[pointer + 3412 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3412 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 3412 - 0 & 16383] / 2) + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 13793 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_19 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_1 = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 13254 - 64 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 10744 - 696 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 5956 - 539 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 0 - 178 & 16383] * 3 / 4);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 13254 - 503 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 10744 - 167 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 5956 - 151 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 0 - 511 & 16383] * 3 / 4);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 14382 - 58 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 0 - 2e3 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14382 & 16383] = -Acc;
  Acc = Math.trunc(dram[pointer + 14322 - 89 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 14382 - 0 & 16383] * 5 / 8) + dram[pointer + 14382 - 58 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 14322 & 16383] = -Acc;
  Acc = Math.trunc(dram[pointer + 14231 - 183 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 14322 - 0 & 16383] * 5 / 8) + dram[pointer + 14322 - 89 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 14231 & 16383] = -Acc;
  Acc = Math.trunc(dram[pointer + 14046 - 321 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 14231 - 0 & 16383] * 5 / 8) + dram[pointer + 14231 - 183 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 14046 & 16383] = -Acc;
  Acc = Math.trunc(dram[pointer + 13723 - 467 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 14046 - 0 & 16383] * 5 / 8) + dram[pointer + 14046 - 321 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 13723 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 16) + Math.trunc(dram[pointer + 13723 - 0 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 13723 - 467 & 16383] * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_b = Acc;
  tmp_b = tmp_b << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 13254 - 1385 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 11867 - 1121 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11867 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11867 - 1121 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 10744 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 10744 - 1641 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 9101 - 1020 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9101 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9101 - 1020 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 3434 - 1 & 16383] / 2) + Math.trunc(tmp_1 / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3434 & 16383] = Acc;
  Acc = dram[pointer + 3434 - 1 & 16383] + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 13254 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 8079 - 1211 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 6866 - 908 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6866 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6866 - 908 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 5956 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 5956 - 1417 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 4537 - 1098 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4537 & 16383] = -Acc;
  out[0] = tmp_5;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4537 - 1098 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 3431 - 1 & 16383] / 2) + Math.trunc(tmp_1 / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3431 & 16383] = Acc;
  Acc = dram[pointer + 3431 - 1 & 16383] + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 8079 & 16383] = Acc;
  out[1] = tmp_3;
};
var midiverb2_effect_20 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_1 = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 15253 - 64 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 13283 - 696 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 8586 - 539 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 16230 - 24 & 16383] * 3 / 4);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 15253 - 503 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 13283 - 167 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 8586 - 151 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 16045 - 172 & 16383] * 3 / 4);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 16381 - 58 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 0 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = -Acc;
  Acc = Math.trunc(dram[pointer + 16321 - 89 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 16381 - 0 & 16383] * 5 / 8) + dram[pointer + 16381 - 58 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16321 & 16383] = -Acc;
  Acc = Math.trunc(dram[pointer + 16230 - 183 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 16321 - 0 & 16383] * 5 / 8) + dram[pointer + 16321 - 89 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16230 & 16383] = -Acc;
  Acc = Math.trunc(dram[pointer + 16045 - 321 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 16230 - 0 & 16383] * 5 / 8) + dram[pointer + 16230 - 183 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16045 & 16383] = -Acc;
  Acc = Math.trunc(dram[pointer + 15722 - 467 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 16045 - 0 & 16383] * 5 / 8) + dram[pointer + 16045 - 321 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 15722 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 16) + Math.trunc(dram[pointer + 15722 - 0 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 15722 - 467 & 16383] * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_b = Acc;
  tmp_b = tmp_b << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 15253 - 845 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 14406 - 1121 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14406 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14406 - 1121 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 13283 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 13283 - 1441 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 11840 - 1320 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11840 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11840 - 1320 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 6264 - 1 & 16383] / 2) + Math.trunc(tmp_1 / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6264 & 16383] = Acc;
  Acc = dram[pointer + 6264 - 1 & 16383] + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 15253 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 10518 - 912 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 9604 - 1016 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9604 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9604 - 1016 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 8586 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 8586 - 1017 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 7567 - 1298 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7567 & 16383] = -Acc;
  out[0] = tmp_5;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7567 - 1298 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_1 = Acc;
  tmp_1 = tmp_1 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 6261 - 1 & 16383] / 2) + Math.trunc(tmp_1 / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6261 & 16383] = Acc;
  Acc = dram[pointer + 6261 - 1 & 16383] + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 10518 & 16383] = Acc;
  out[1] = tmp_3;
};
var midiverb2_effect_21 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 15822 - 120 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 14952 - 634 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 13905 - 552 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 12769 - 478 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 8225 - 369 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 7182 - 208 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 6199 - 723 & 16383] * 3 / 4);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 15822 - 129 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 14952 - 130 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 13905 - 359 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 12769 - 277 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 8225 - 363 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 7182 - 499 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 5096 - 891 & 16383] * 3 / 4);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 365 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 365 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 16381 - 19 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 0 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16360 - 45 & 16383] * 3 / 4) + dram[pointer + 16381 - 19 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16360 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16313 - 84 & 16383] * 3 / 4) + dram[pointer + 16360 - 45 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16313 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16227 - 125 & 16383] * 3 / 4) + dram[pointer + 16313 - 84 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16227 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16100 - 276 & 16383] * 3 / 4) + dram[pointer + 16227 - 125 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16100 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + dram[pointer + 16100 - 276 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_b = Acc;
  tmp_b = tmp_b << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 15822 - 868 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 11800 - 878 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11800 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11800 - 878 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 14952 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 14952 - 1045 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 10920 - 712 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10920 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10920 - 712 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 13905 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 13905 - 1134 & 16383] / 2) + Math.trunc(dram[pointer + 13905 - 1135 & 16383] / 2) + Math.trunc(dram[pointer + 10206 - 956 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10206 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10206 - 956 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 12769 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 12769 - 967 & 16383] / 2) + Math.trunc(dram[pointer + 12769 - 968 & 16383] / 2) + Math.trunc(dram[pointer + 9248 - 1021 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9248 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9248 - 1021 & 16383] + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 15822 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 8225 - 1041 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 4084 - 812 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4084 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4084 - 812 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 7182 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 7182 - 981 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 3270 - 981 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3270 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 3270 - 981 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 6199 & 16383] = Acc;
  out[0] = tmp_5;
  Acc = Math.trunc(dram[pointer + 6199 - 1101 & 16383] / 2) + Math.trunc(dram[pointer + 6199 - 1102 & 16383] / 2) + Math.trunc(dram[pointer + 2287 - 934 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2287 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2287 - 934 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 5096 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 5096 - 1010 & 16383] / 2) + Math.trunc(dram[pointer + 5096 - 1011 & 16383] / 2) + Math.trunc(dram[pointer + 1351 - 984 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1351 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 1351 - 984 & 16383] + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 8225 & 16383] = Acc;
  out[1] = tmp_3;
};
var midiverb2_effect_22 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 15822 - 420 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 14617 - 634 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 13570 - 552 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 12434 - 478 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 9099 - 269 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 8056 - 208 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 7073 - 723 & 16383] * 3 / 4);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 15822 - 129 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 14617 - 130 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 13570 - 359 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 12434 - 277 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 9099 - 363 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 8056 - 499 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 5970 - 891 & 16383] * 3 / 4);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 2619 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2619 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 16381 - 19 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 0 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16360 - 45 & 16383] * 3 / 4) + dram[pointer + 16381 - 19 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16360 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16313 - 84 & 16383] * 3 / 4) + dram[pointer + 16360 - 45 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16313 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16227 - 125 & 16383] * 3 / 4) + dram[pointer + 16313 - 84 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16227 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16100 - 276 & 16383] * 3 / 4) + dram[pointer + 16227 - 125 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16100 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + dram[pointer + 16100 - 276 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_b = Acc;
  tmp_b = tmp_b << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 15822 - 1203 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 11465 - 578 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11465 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11465 - 578 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 14617 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 14617 - 1045 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 10885 - 712 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10885 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10885 - 712 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 13570 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 13570 - 1134 & 16383] / 2) + Math.trunc(dram[pointer + 13570 - 1135 & 16383] / 2) + Math.trunc(dram[pointer + 10171 - 756 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10171 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10171 - 756 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 12434 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 12434 - 967 & 16383] / 2) + Math.trunc(dram[pointer + 12434 - 968 & 16383] / 2) + Math.trunc(dram[pointer + 9413 - 312 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9413 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9413 - 312 & 16383] + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 15822 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 9099 - 1041 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 4958 - 612 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4958 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4958 - 612 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 8056 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 8056 - 981 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 4344 - 781 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4344 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4344 - 781 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 7073 & 16383] = Acc;
  out[0] = tmp_5;
  Acc = Math.trunc(dram[pointer + 7073 - 1101 & 16383] / 2) + Math.trunc(dram[pointer + 7073 - 1102 & 16383] / 2) + Math.trunc(dram[pointer + 3561 - 634 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3561 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 3561 - 634 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 5970 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 5970 - 1010 & 16383] / 2) + Math.trunc(dram[pointer + 5970 - 1011 & 16383] / 2) + Math.trunc(dram[pointer + 2925 - 304 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2925 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2925 - 304 & 16383] + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 9099 & 16383] = Acc;
  out[1] = tmp_3;
};
var midiverb2_effect_23 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 13326 - 567 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 9506 - 1891 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 5621 - 2003 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 13326 - 1190 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 9506 - 890 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 5621 - 671 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 1148 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1148 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 0 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 16381 - 321 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16381 - 321 & 16383] + Math.trunc(dram[pointer + 16058 - 431 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16058 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16058 - 431 & 16383] + Math.trunc(dram[pointer + 15625 - 668 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15625 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15625 - 668 & 16383] + Math.trunc(dram[pointer + 14955 - 1235 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14955 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14955 - 1235 & 16383] + Math.trunc(dram[pointer + 13718 - 234 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13718 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13718 - 234 & 16383] + Math.trunc(dram[pointer + 13482 - 154 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13482 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 13482 - 154 & 16383] * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_b = Acc;
  tmp_b = tmp_b << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 13326 - 2224 & 16383] / 2) + Math.trunc(dram[pointer + 11100 - 1592 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11100 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11100 - 1592 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 9506 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 9506 - 2610 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 6894 - 1271 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6894 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6894 - 1271 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 5621 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 5621 - 3357 & 16383] / 2) + Math.trunc(dram[pointer + 2262 - 1112 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2262 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2262 - 1112 & 16383] + Math.trunc(dram[pointer + 1145 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1145 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 1145 - 0 & 16383] / 2) + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 13326 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_24 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 12327 - 567 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 9007 - 1891 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 5159 - 2003 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 12327 - 567 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 9007 - 890 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 5159 - 671 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 1e3 & 16383] / 2) + Math.trunc(dram[pointer + 1012 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1012 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 1012 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 15382 - 321 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15382 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15382 - 321 & 16383] + Math.trunc(dram[pointer + 15059 - 431 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15059 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15059 - 431 & 16383] + Math.trunc(dram[pointer + 14626 - 668 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14626 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14626 - 668 & 16383] + Math.trunc(dram[pointer + 13956 - 1235 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13956 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13956 - 1235 & 16383] + Math.trunc(dram[pointer + 12719 - 234 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12719 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12719 - 234 & 16383] + Math.trunc(dram[pointer + 12483 - 154 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12483 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 12483 - 154 & 16383] * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_b = Acc;
  tmp_b = tmp_b << 16 >> 16;
  Acc = dram[pointer + 12327 - 2224 & 16383] + Math.trunc(dram[pointer + 10101 - 1092 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10101 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10101 - 1092 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 9007 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 9007 - 2610 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 6395 - 1234 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6395 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6395 - 1234 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 5159 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 5159 - 3357 & 16383] / 2) + Math.trunc(dram[pointer + 1800 - 786 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1800 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 1800 - 786 & 16383] + Math.trunc(dram[pointer + 1009 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1009 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 1009 - 0 & 16383] / 2) + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 12327 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_25 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 13326 - 567 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 9506 - 1891 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 5621 - 2003 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 13326 - 1190 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 9506 - 890 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 5621 - 671 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 1148 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1148 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 1148 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 16381 - 321 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16381 - 321 & 16383] + Math.trunc(dram[pointer + 16058 - 431 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16058 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16058 - 431 & 16383] + Math.trunc(dram[pointer + 15625 - 668 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15625 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15625 - 668 & 16383] + Math.trunc(dram[pointer + 14955 - 1235 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14955 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14955 - 1235 & 16383] + Math.trunc(dram[pointer + 13718 - 234 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13718 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13718 - 234 & 16383] + Math.trunc(dram[pointer + 13482 - 154 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13482 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 13482 - 154 & 16383] * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_b = Acc;
  tmp_b = tmp_b << 16 >> 16;
  Acc = dram[pointer + 13326 - 2224 & 16383] + Math.trunc(dram[pointer + 11100 - 1592 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11100 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11100 - 1592 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 9506 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 9506 - 2610 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 6894 - 1271 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6894 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6894 - 1271 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 5621 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 5621 - 3357 & 16383] / 2) + Math.trunc(dram[pointer + 2262 - 1112 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2262 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2262 - 1112 & 16383] + Math.trunc(dram[pointer + 1145 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1145 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 1145 - 0 & 16383] / 2) + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 13326 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_26 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 13526 - 567 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 10206 - 1891 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 6321 - 2003 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 13526 - 567 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 10206 - 890 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 6321 - 671 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 1848 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1848 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 0 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 16381 - 321 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16381 - 321 & 16383] + Math.trunc(dram[pointer + 16058 - 431 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16058 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16058 - 431 & 16383] + Math.trunc(dram[pointer + 15625 - 668 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15625 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15625 - 668 & 16383] + Math.trunc(dram[pointer + 14955 - 1035 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14955 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14955 - 1035 & 16383] + Math.trunc(dram[pointer + 13918 - 234 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13918 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13918 - 234 & 16383] + Math.trunc(dram[pointer + 13682 - 154 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13682 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 13682 - 154 & 16383] * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_b = Acc;
  tmp_b = tmp_b << 16 >> 16;
  Acc = dram[pointer + 13526 - 2224 & 16383] + Math.trunc(dram[pointer + 11300 - 1092 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11300 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11300 - 1092 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 10206 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 10206 - 2610 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 7594 - 1271 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7594 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7594 - 1271 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 6321 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 6321 - 3357 & 16383] / 2) + Math.trunc(dram[pointer + 2962 - 1112 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2962 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2962 - 1112 & 16383] + Math.trunc(dram[pointer + 1845 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1845 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 1845 - 0 & 16383] / 2) + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 13526 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_27 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 15922 - 420 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 14952 - 334 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 13863 - 252 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 12452 - 478 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 8583 - 369 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 7708 - 499 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 6472 - 323 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 15922 - 129 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 14952 - 130 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 13863 - 459 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 12452 - 277 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 8583 - 363 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 7708 - 208 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 5025 - 491 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 16381 - 19 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 0 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16360 - 45 & 16383] * 3 / 4) + dram[pointer + 16381 - 19 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16360 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16313 - 84 & 16383] * 3 / 4) + dram[pointer + 16360 - 45 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16313 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16227 - 125 & 16383] * 3 / 4) + dram[pointer + 16313 - 84 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16227 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 16100 - 176 & 16383] * 3 / 4) + dram[pointer + 16227 - 125 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16100 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + dram[pointer + 16100 - 176 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_b = Acc;
  tmp_b = tmp_b << 16 >> 16;
  Acc = dram[pointer + 15922 - 968 & 16383] + Math.trunc(dram[pointer + 11046 - 1056 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11046 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11046 - 1056 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 14952 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 14952 - 1087 & 16383] / 2) + Math.trunc(dram[pointer + 14952 - 1088 & 16383] / 2) + Math.trunc(dram[pointer + 9988 - 612 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9988 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9988 - 612 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 13863 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 13863 - 1409 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 9374 - 356 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9374 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9374 - 356 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 12452 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 12452 - 1404 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 9016 - 431 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9016 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9016 - 431 & 16383] + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 15922 & 16383] = Acc;
  Acc = dram[pointer + 8583 - 873 & 16383] + Math.trunc(dram[pointer + 3413 - 987 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3413 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 3413 - 987 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 7708 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 7708 - 1235 & 16383] / 2) + Math.trunc(dram[pointer + 2424 - 681 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2424 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2424 - 681 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 6472 & 16383] = Acc;
  out[0] = tmp_5;
  Acc = Math.trunc(dram[pointer + 6472 - 1445 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 1741 - 634 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1741 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 1741 - 634 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 5025 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 5025 - 1610 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 1105 - 432 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1105 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 1105 - 432 & 16383] + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 8583 & 16383] = Acc;
  out[1] = tmp_3;
};
var midiverb2_effect_28 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 13341 - 21 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 9321 - 1891 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 5236 - 2003 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 13341 - 1010 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 9321 - 890 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 5236 - 671 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 16381 - 321 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16381 - 321 & 16383] + Math.trunc(dram[pointer + 16058 - 431 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16058 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16058 - 431 & 16383] + Math.trunc(dram[pointer + 15625 - 968 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15625 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15625 - 968 & 16383] + Math.trunc(dram[pointer + 14363 - 1020 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14363 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14363 - 1020 & 16383] + Math.trunc(dram[pointer + 14655 - 23 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14655 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14655 - 23 & 16383] + Math.trunc(dram[pointer + 14630 - 56 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14630 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14630 - 56 & 16383] + Math.trunc(dram[pointer + 14572 - 78 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14572 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14572 - 78 & 16383] + Math.trunc(dram[pointer + 14492 - 127 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14492 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14492 - 127 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_b = Acc;
  tmp_b = tmp_b << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 13341 - 2624 & 16383] / 2) + Math.trunc(dram[pointer + 13341 - 2625 & 16383] / 2) + Math.trunc(dram[pointer + 10715 - 1392 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10715 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10715 - 1392 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 9321 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 9321 - 2810 & 16383] * 15 / 16) + Math.trunc(dram[pointer + 6509 - 1271 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6509 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6509 - 1271 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 5236 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 5236 - 3857 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 1377 - 1112 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1377 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 1377 - 1112 & 16383] + Math.trunc(dram[pointer + 260 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 260 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 260 - 0 & 16383] / 2) + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 13341 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_29 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 12741 - 21 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 9121 - 1891 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 4636 - 2003 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 12741 - 1010 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 9121 - 890 & 16383] * 9 / 8) + Math.trunc(dram[pointer + 4636 - 671 & 16383] * 9 / 8);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 16381 - 321 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16381 - 321 & 16383] + Math.trunc(dram[pointer + 16058 - 431 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16058 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16058 - 431 & 16383] + Math.trunc(dram[pointer + 15625 - 968 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15625 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15625 - 968 & 16383] + Math.trunc(dram[pointer + 14363 - 1620 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14363 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14363 - 1620 & 16383] + Math.trunc(dram[pointer + 14655 - 23 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14655 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14655 - 23 & 16383] + Math.trunc(dram[pointer + 14630 - 56 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14630 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14630 - 56 & 16383] + Math.trunc(dram[pointer + 14572 - 78 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14572 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14572 - 78 & 16383] + Math.trunc(dram[pointer + 14492 - 127 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14492 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14492 - 127 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_b = Acc;
  tmp_b = tmp_b << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 12741 - 1624 & 16383] / 2) + Math.trunc(dram[pointer + 12741 - 1625 & 16383] / 2) + Math.trunc(dram[pointer + 11115 - 1992 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11115 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11115 - 1992 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 9121 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 9121 - 2110 & 16383] * 15 / 16) + Math.trunc(dram[pointer + 7009 - 2371 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7009 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7009 - 2371 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 4636 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 4636 - 2157 & 16383] * 15 / 16) + Math.trunc(dram[pointer + 2477 - 2212 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2477 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2477 - 2212 & 16383] + Math.trunc(dram[pointer + 260 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 260 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 260 - 0 & 16383] / 2) + tmp_b;
  Acc = Acc << 16 >> 16;
  dram[pointer + 12741 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_30 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0, tmp_b = 0, tmp_15 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 6109 - 5 & 16383] / 2) + Math.trunc(dram[pointer + 5375 - 361 & 16383] / 2) + Math.trunc(dram[pointer + 4072 - 120 & 16383] / 2) + Math.trunc(dram[pointer + 3222 - 861 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 6109 - 126 & 16383] / 2) + Math.trunc(dram[pointer + 5375 - 897 & 16383] / 2) + Math.trunc(dram[pointer + 4072 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 3222 - 356 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 0 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 245 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 523 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 891 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 1200 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 1568 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 1987 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 2567 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 2893 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 3104 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_b = -Acc;
  tmp_b = tmp_b << 16 >> 16;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 7382 - 245 & 16383] * 5 / 8) + Math.trunc(tmp_b / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7382 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 7135 - 189 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 7382 - 0 & 16383] / 2) + dram[pointer + 7382 - 245 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 7135 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 6944 - 145 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 7135 - 0 & 16383] / 2) + dram[pointer + 7135 - 189 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 6944 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 6797 - 123 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 6944 - 0 & 16383] / 2) + dram[pointer + 6944 - 145 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 6797 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 6672 - 198 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 6797 - 0 & 16383] / 2) + dram[pointer + 6797 - 123 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 6672 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 6672 - 0 & 16383] / 2) + dram[pointer + 6672 - 198 & 16383] + Math.trunc(dram[pointer + 6472 - 34 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6472 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6472 - 34 & 16383] + Math.trunc(dram[pointer + 6436 - 69 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6436 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6436 - 69 & 16383] + Math.trunc(dram[pointer + 6365 - 104 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6365 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6365 - 104 & 16383] + Math.trunc(dram[pointer + 6259 - 148 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6259 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6259 - 148 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_15 = -Acc;
  tmp_15 = tmp_15 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 6109 - 497 & 16383] / 2) + Math.trunc(dram[pointer + 5610 - 233 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5610 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 5610 - 233 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 5375 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 5375 - 1010 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 4363 - 289 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4363 & 16383] = -Acc;
  out[0] = tmp_5;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4363 - 289 & 16383] + tmp_15;
  Acc = Acc << 16 >> 16;
  dram[pointer + 4072 & 16383] = -Acc;
  Acc = Math.trunc(dram[pointer + 4072 - 590 & 16383] / 2) + Math.trunc(dram[pointer + 3480 - 256 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3480 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 3480 - 256 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 3222 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 3222 - 1071 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 2149 - 225 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2149 & 16383] = -Acc;
  out[1] = tmp_3;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2149 - 225 & 16383] + tmp_15;
  Acc = Acc << 16 >> 16;
  dram[pointer + 6109 & 16383] = -Acc;
};
var midiverb2_effect_31 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0, tmp_b = 0, tmp_15 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 6109 - 123 & 16383] / 2) + Math.trunc(dram[pointer + 4749 - 361 & 16383] / 2) + Math.trunc(dram[pointer + 3446 - 205 & 16383] / 2) + Math.trunc(dram[pointer + 2196 - 861 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 6109 - 126 & 16383] / 2) + Math.trunc(dram[pointer + 4749 - 897 & 16383] / 2) + Math.trunc(dram[pointer + 3446 - 202 & 16383] / 2) + Math.trunc(dram[pointer + 2196 - 356 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 0 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 245 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 891 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 1568 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 1987 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 2746 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 3245 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_b = -Acc;
  tmp_b = tmp_b << 16 >> 16;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 7382 - 245 & 16383] * 5 / 8) + Math.trunc(tmp_b / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7382 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 7135 - 189 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 7382 - 0 & 16383] / 2) + dram[pointer + 7382 - 245 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 7135 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 6944 - 145 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 7135 - 0 & 16383] / 2) + dram[pointer + 7135 - 189 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 6944 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 6797 - 123 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 6944 - 0 & 16383] / 2) + dram[pointer + 6944 - 145 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 6797 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 6672 - 198 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 6797 - 0 & 16383] / 2) + dram[pointer + 6797 - 123 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 6672 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 6672 - 0 & 16383] / 2) + dram[pointer + 6672 - 198 & 16383] + Math.trunc(dram[pointer + 6472 - 34 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6472 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6472 - 34 & 16383] + Math.trunc(dram[pointer + 6436 - 69 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6436 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6436 - 69 & 16383] + Math.trunc(dram[pointer + 6365 - 104 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6365 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6365 - 104 & 16383] + Math.trunc(dram[pointer + 6259 - 148 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6259 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6259 - 148 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_15 = -Acc;
  tmp_15 = tmp_15 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 6109 - 1123 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 4984 - 233 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4984 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4984 - 233 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 4749 & 16383] = Acc;
  Acc = Math.trunc(-dram[pointer + 4749 - 1010 & 16383] / 4) + Math.trunc(-dram[pointer + 4749 - 1011 & 16383] / 4) + Math.trunc(dram[pointer + 3737 - 289 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3737 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 3737 - 289 & 16383] + tmp_15;
  Acc = Acc << 16 >> 16;
  dram[pointer + 6109 & 16383] = -Acc;
  out[0] = tmp_5;
  Acc = Math.trunc(dram[pointer + 3446 - 990 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 2454 - 256 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2454 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2454 - 256 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 2196 & 16383] = Acc;
  Acc = Math.trunc(-dram[pointer + 2196 - 1371 & 16383] / 4) + Math.trunc(-dram[pointer + 2196 - 1372 & 16383] / 4) + Math.trunc(dram[pointer + 823 - 225 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 823 & 16383] = -Acc;
  out[1] = tmp_3;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 823 - 225 & 16383] + tmp_15;
  Acc = Acc << 16 >> 16;
  dram[pointer + 3446 & 16383] = -Acc;
};
var midiverb2_effect_32 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0, tmp_b = 0, tmp_15 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 8865 - 123 & 16383] / 2) + Math.trunc(dram[pointer + 7228 - 361 & 16383] / 2) + Math.trunc(dram[pointer + 5925 - 505 & 16383] / 2) + Math.trunc(dram[pointer + 4645 - 861 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 8865 - 626 & 16383] / 2) + Math.trunc(dram[pointer + 7228 - 897 & 16383] / 2) + Math.trunc(dram[pointer + 5925 - 56 & 16383] / 2) + Math.trunc(dram[pointer + 4645 - 756 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 1e3 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 999 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15384 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 15384 - 4423 & 16383] / 2) + Math.trunc(dram[pointer + 15384 - 3987 & 16383] / 2) + Math.trunc(dram[pointer + 15384 - 3231 & 16383] / 2) + Math.trunc(dram[pointer + 15384 - 2889 & 16383] / 2) + Math.trunc(dram[pointer + 15384 - 2221 & 16383] / 2) + Math.trunc(dram[pointer + 15384 - 1746 & 16383] / 2) + Math.trunc(dram[pointer + 15384 - 1341 & 16383] / 2) + Math.trunc(dram[pointer + 15384 - 923 & 16383] / 2) + Math.trunc(dram[pointer + 15384 - 523 & 16383] / 2) + Math.trunc(dram[pointer + 15384 - 109 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 876 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 435 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 235 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 0 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_b = -Acc;
  tmp_b = tmp_b << 16 >> 16;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 10382 - 245 & 16383] * 5 / 8) + Math.trunc(tmp_b / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10382 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 10135 - 189 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 10382 - 0 & 16383] / 2) + dram[pointer + 10382 - 245 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 10135 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 9944 - 189 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 10135 - 0 & 16383] / 2) + dram[pointer + 10135 - 189 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 9944 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 9753 - 223 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 9944 - 0 & 16383] / 2) + dram[pointer + 9944 - 189 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 9753 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 9528 - 298 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 9753 - 0 & 16383] / 2) + dram[pointer + 9753 - 223 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 9528 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 9528 - 0 & 16383] / 2) + dram[pointer + 9528 - 298 & 16383] + Math.trunc(dram[pointer + 9228 - 34 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9228 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9228 - 34 & 16383] + Math.trunc(dram[pointer + 9192 - 69 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9192 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9192 - 69 & 16383] + Math.trunc(dram[pointer + 9121 - 104 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9121 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9121 - 104 & 16383] + Math.trunc(dram[pointer + 9015 - 148 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9015 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9015 - 148 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_15 = -Acc;
  tmp_15 = tmp_15 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 8865 - 1310 & 16383] / 2) + Math.trunc(dram[pointer + 7553 - 323 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7553 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 7553 - 323 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 7228 & 16383] = Acc;
  out[0] = tmp_5;
  Acc = Math.trunc(dram[pointer + 7228 - 1010 & 16383] / 2) + Math.trunc(dram[pointer + 6216 - 289 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6216 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6216 - 289 & 16383] + tmp_15;
  Acc = Acc << 16 >> 16;
  dram[pointer + 5925 & 16383] = -Acc;
  Acc = Math.trunc(dram[pointer + 5925 - 1020 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4903 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4903 - 256 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 4645 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 4645 - 1071 & 16383] / 2) + Math.trunc(dram[pointer + 3572 - 125 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3572 & 16383] = -Acc;
  out[1] = tmp_3;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 3572 - 125 & 16383] + tmp_15;
  Acc = Acc << 16 >> 16;
  dram[pointer + 8865 & 16383] = -Acc;
};
var midiverb2_effect_33 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0, tmp_b = 0, tmp_15 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 6259 - 123 & 16383] / 2) + Math.trunc(dram[pointer + 4899 - 361 & 16383] / 2) + Math.trunc(dram[pointer + 3596 - 205 & 16383] / 2) + Math.trunc(dram[pointer + 2346 - 861 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 6259 - 126 & 16383] / 2) + Math.trunc(dram[pointer + 4899 - 897 & 16383] / 2) + Math.trunc(dram[pointer + 3596 - 202 & 16383] / 2) + Math.trunc(dram[pointer + 2346 - 356 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 0 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 245 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 891 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 1568 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 1987 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 2746 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 3245 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 3678 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 4232 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 4980 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 5123 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 5765 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 6345 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 7045 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 7589 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 8245 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 8531 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 8921 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_b = -Acc;
  tmp_b = tmp_b << 16 >> 16;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 7382 - 245 & 16383] * 5 / 8) + Math.trunc(tmp_b / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7382 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 7135 - 189 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 7382 - 0 & 16383] / 2) + dram[pointer + 7382 - 245 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 7135 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 6944 - 145 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 7135 - 0 & 16383] / 2) + dram[pointer + 7135 - 189 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 6944 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 6797 - 123 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 6944 - 0 & 16383] / 2) + dram[pointer + 6944 - 145 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 6797 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 6672 - 198 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 6797 - 0 & 16383] / 2) + dram[pointer + 6797 - 123 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 6672 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 6672 - 0 & 16383] / 2) + dram[pointer + 6672 - 198 & 16383] + Math.trunc(dram[pointer + 6472 - 34 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6472 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6472 - 34 & 16383] + Math.trunc(dram[pointer + 6436 - 69 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6436 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6436 - 69 & 16383] + Math.trunc(dram[pointer + 6365 - 104 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6365 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6365 - 104 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_15 = -Acc;
  tmp_15 = tmp_15 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 6259 - 1123 & 16383] / 2) + Math.trunc(dram[pointer + 5134 - 233 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5134 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 5134 - 233 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 4899 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 4899 - 1010 & 16383] / 2) + Math.trunc(dram[pointer + 3887 - 289 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3887 & 16383] = -Acc;
  out[0] = tmp_5;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 3887 - 289 & 16383] + Math.trunc(dram[pointer + 746 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 746 & 16383] = Acc;
  Acc = Math.trunc(Acc * -3 / 4) + tmp_15;
  Acc = Acc << 16 >> 16;
  dram[pointer + 6259 & 16383] = -Acc;
  Acc = Math.trunc(dram[pointer + 3596 - 990 & 16383] / 2) + Math.trunc(dram[pointer + 2604 - 256 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2604 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2604 - 256 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 2346 & 16383] = Acc;
  out[1] = tmp_3;
  Acc = Math.trunc(dram[pointer + 2346 - 1371 & 16383] / 2) + Math.trunc(dram[pointer + 973 - 225 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 973 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 973 - 225 & 16383] + Math.trunc(dram[pointer + 743 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 743 & 16383] = Acc;
  Acc = Math.trunc(Acc * -3 / 4) + tmp_15;
  Acc = Acc << 16 >> 16;
  dram[pointer + 3596 & 16383] = -Acc;
};
var midiverb2_effect_34 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0, tmp_b = 0, tmp_15 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 6109 - 123 & 16383] / 2) + Math.trunc(dram[pointer + 4749 - 361 & 16383] / 2) + Math.trunc(dram[pointer + 3446 - 205 & 16383] / 2) + Math.trunc(dram[pointer + 2196 - 861 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 6109 - 126 & 16383] / 2) + Math.trunc(dram[pointer + 4749 - 897 & 16383] / 2) + Math.trunc(dram[pointer + 3446 - 202 & 16383] / 2) + Math.trunc(dram[pointer + 2196 - 356 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 0 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 245 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 891 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 1568 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 1987 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 2746 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 3245 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 3678 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 4232 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 4980 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 5123 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 5765 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 6345 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 7045 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 7589 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 8245 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 8531 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 8921 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_b = -Acc;
  tmp_b = tmp_b << 16 >> 16;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 7382 - 245 & 16383] * 5 / 8) + Math.trunc(tmp_b / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 7382 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 7135 - 189 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 7382 - 0 & 16383] / 2) + dram[pointer + 7382 - 245 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 7135 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 6944 - 145 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 7135 - 0 & 16383] / 2) + dram[pointer + 7135 - 189 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 6944 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 6797 - 123 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 6944 - 0 & 16383] / 2) + dram[pointer + 6944 - 145 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 6797 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 6672 - 198 & 16383] * 5 / 8) + Math.trunc(dram[pointer + 6797 - 0 & 16383] / 2) + dram[pointer + 6797 - 123 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 6672 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[pointer + 6672 - 0 & 16383] / 2) + dram[pointer + 6672 - 198 & 16383] + Math.trunc(dram[pointer + 6472 - 34 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6472 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6472 - 34 & 16383] + Math.trunc(dram[pointer + 6436 - 69 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6436 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6436 - 69 & 16383] + Math.trunc(dram[pointer + 6365 - 104 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6365 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6365 - 104 & 16383] + Math.trunc(dram[pointer + 6259 - 148 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6259 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6259 - 148 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_15 = -Acc;
  tmp_15 = tmp_15 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 6109 - 1123 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 4984 - 233 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4984 & 16383] = -Acc;
  out[0] = tmp_5;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4984 - 233 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 4749 & 16383] = Acc;
  Acc = Math.trunc(-dram[pointer + 4749 - 1010 & 16383] / 4) + Math.trunc(-dram[pointer + 4749 - 1011 & 16383] / 4) + Math.trunc(dram[pointer + 3737 - 289 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3737 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 3737 - 289 & 16383] + tmp_15;
  Acc = Acc << 16 >> 16;
  dram[pointer + 3446 & 16383] = -Acc;
  Acc = Math.trunc(dram[pointer + 3446 - 990 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 2454 - 256 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2454 & 16383] = -Acc;
  out[1] = tmp_3;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2454 - 256 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 2196 & 16383] = Acc;
  Acc = Math.trunc(-dram[pointer + 2196 - 1371 & 16383] / 4) + Math.trunc(-dram[pointer + 2196 - 1372 & 16383] / 4) + Math.trunc(dram[pointer + 823 - 225 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 823 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 823 - 225 & 16383] + tmp_15;
  Acc = Acc << 16 >> 16;
  dram[pointer + 6109 & 16383] = -Acc;
};
var midiverb2_effect_35 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 11 - 2 & 16383] + Math.trunc(dram[pointer + 2298 - 31 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2298 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2298 - 31 & 16383] + Math.trunc(dram[pointer + 2265 - 153 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2265 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2265 - 153 & 16383] + Math.trunc(dram[pointer + 2110 - 273 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2110 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[pointer + 2110 - 273 & 16383] * 9 / 4);
  Acc = Acc << 16 >> 16;
  tmp_3 = -Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = dram[pointer + 11 - 2 & 16383] + Math.trunc(dram[pointer + 1835 - 42 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1835 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 1835 - 42 & 16383] + Math.trunc(dram[pointer + 1791 - 181 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1791 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 1791 - 181 & 16383] + Math.trunc(dram[pointer + 1608 - 233 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1608 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[pointer + 1608 - 233 & 16383] * 9 / 4);
  Acc = Acc << 16 >> 16;
  tmp_5 = -Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 0 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 0 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 0 - 10 & 16383] * -3 / 8);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16373 & 16383] = -Acc;
  Acc = Math.trunc(dram[pointer + 16373 - 220 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 401 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 523 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 750 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 864 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 64 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 118 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 232 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 433 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 554 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 741 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 861 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 1045 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 1148 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 1255 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 1442 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 1578 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 1720 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 1872 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 2035 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 2120 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 2266 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 2450 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 2568 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 2724 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 2888 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 3033 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 3151 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 3256 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 3491 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 3555 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11 & 16383] = -Acc;
  out[0] = tmp_5;
  Acc = Math.trunc(-dram[pointer + 15383 - 8094 & 16383] / 16) + Math.trunc(-dram[pointer + 15383 - 7848 & 16383] / 16) + Math.trunc(-dram[pointer + 15383 - 7792 & 16383] / 16) + Math.trunc(-dram[pointer + 15383 - 7514 & 16383] / 16) + Math.trunc(-dram[pointer + 15383 - 7461 & 16383] / 16) + Math.trunc(-dram[pointer + 15383 - 7378 & 16383] / 16) + Math.trunc(-dram[pointer + 15383 - 7138 & 16383] / 16) + Math.trunc(-dram[pointer + 15383 - 7091 & 16383] / 16) + Math.trunc(dram[pointer + 15383 - 6864 & 16383] / 8) + Math.trunc(dram[pointer + 15383 - 6726 & 16383] / 8) + Math.trunc(dram[pointer + 15383 - 6656 & 16383] / 8) + Math.trunc(dram[pointer + 15383 - 6418 & 16383] / 8) + Math.trunc(dram[pointer + 15383 - 6363 & 16383] / 8) + Math.trunc(dram[pointer + 15383 - 6153 & 16383] / 8) + Math.trunc(dram[pointer + 15383 - 6017 & 16383] / 8) + Math.trunc(dram[pointer + 15383 - 5966 & 16383] / 8) + Math.trunc(-dram[pointer + 15383 - 5727 & 16383] / 4) + Math.trunc(-dram[pointer + 15383 - 5656 & 16383] / 4) + Math.trunc(-dram[pointer + 15383 - 5494 & 16383] / 4) + Math.trunc(-dram[pointer + 15383 - 5318 & 16383] / 4) + Math.trunc(-dram[pointer + 15383 - 5260 & 16383] / 4) + Math.trunc(-dram[pointer + 15383 - 5018 & 16383] / 4) + Math.trunc(-dram[pointer + 15383 - 4957 & 16383] / 4) + Math.trunc(-dram[pointer + 15383 - 4733 & 16383] / 4) + Math.trunc(dram[pointer + 15383 - 4626 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 4550 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 4338 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 4209 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 4045 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 3920 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 3799 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 3618 & 16383] / 2) + Math.trunc(dram[pointer + 1373 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1373 & 16383] = Acc;
  out[1] = tmp_3;
  Acc = Math.trunc(-dram[pointer + 1373 - 1 & 16383] / 4) + dram[pointer + 11 - 0 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 11 & 16383] = -Acc;
  Acc = Math.trunc(dram[pointer + 16373 - 989 & 16383] / 2) + Math.trunc(dram[pointer + 1370 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1370 & 16383] = -Acc;
  Acc = dram[pointer + 1370 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 15383 & 16383] = -Acc;
};
var midiverb2_effect_36 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0;
  tmp_0 = input;
  tmp_0 = tmp_0 << 16 >> 16;
  Acc = tmp_0;
  Acc = Acc << 16 >> 16;
  dram[pointer + 1796 & 16383] = Acc;
  Acc = dram[pointer + 1796 - 1500 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16383 & 16383] = -Acc;
  Acc = Math.trunc(dram[pointer + 11 - 2 & 16383] / 2) + Math.trunc(dram[pointer + 2298 - 21 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2298 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2298 - 21 & 16383] + Math.trunc(dram[pointer + 2275 - 53 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2275 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2275 - 53 & 16383] + Math.trunc(dram[pointer + 2220 - 173 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2220 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 2220 - 173 & 16383] * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 11 - 2 & 16383] / 2) + Math.trunc(dram[pointer + 2045 - 32 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2045 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2045 - 32 & 16383] + Math.trunc(dram[pointer + 2011 - 75 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2011 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2011 - 75 & 16383] + Math.trunc(dram[pointer + 1934 - 133 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1934 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 1934 - 133 & 16383] * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 16383 - 4 & 16383] / 2) + Math.trunc(dram[pointer + 16379 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16379 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 16379 - 5 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16373 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 16373 - 152 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 222 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 401 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 523 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 750 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 864 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 1054 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 1108 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 1222 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 1423 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 1544 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 1731 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 1851 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 2035 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 2138 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 2245 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 2432 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 2568 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 2710 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 2862 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 3025 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 3110 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 3256 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 3440 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 3558 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11 & 16383] = -Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_37 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0;
  tmp_0 = input;
  tmp_0 = tmp_0 << 16 >> 16;
  Acc = dram[pointer + 11 - 2 & 16383] + Math.trunc(dram[pointer + 6298 - 31 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6298 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6298 - 31 & 16383] + Math.trunc(dram[pointer + 6265 - 153 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6265 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6265 - 153 & 16383] + Math.trunc(dram[pointer + 6110 - 273 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6110 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[pointer + 6110 - 273 & 16383] * 9 / 4);
  Acc = Acc << 16 >> 16;
  tmp_3 = -Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = dram[pointer + 11 - 2 & 16383] + Math.trunc(dram[pointer + 5835 - 42 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5835 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 5835 - 42 & 16383] + Math.trunc(dram[pointer + 5791 - 181 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5791 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 5791 - 181 & 16383] + Math.trunc(dram[pointer + 5608 - 233 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5608 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[pointer + 5608 - 233 & 16383] * 9 / 4);
  Acc = Acc << 16 >> 16;
  tmp_5 = -Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = tmp_0;
  Acc = Acc << 16 >> 16;
  dram[pointer + 5364 & 16383] = -Acc;
  Acc = dram[pointer + 5364 - 1500 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16382 & 16383] = -Acc;
  Acc = Math.trunc(dram[pointer + 16382 - 2 & 16383] / 2) + Math.trunc(dram[pointer + 16380 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16380 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 16380 - 6 & 16383] * -3 / 8);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16373 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + Math.trunc(dram[pointer + 16373 - 523 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 750 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 864 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 64 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 118 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 232 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 433 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 554 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 741 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 861 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 1045 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 1148 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 1255 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 1442 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 1578 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 1720 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 1872 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 2035 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 2120 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 2266 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 2450 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 2568 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 2724 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 2888 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 3033 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 3151 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 3256 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 3491 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 3555 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11 & 16383] = -Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
  Acc = Math.trunc(-dram[pointer + 15383 - 8094 & 16383] / 16) + Math.trunc(-dram[pointer + 15383 - 7848 & 16383] / 16) + Math.trunc(-dram[pointer + 15383 - 7792 & 16383] / 16) + Math.trunc(-dram[pointer + 15383 - 7514 & 16383] / 16) + Math.trunc(-dram[pointer + 15383 - 7461 & 16383] / 16) + Math.trunc(-dram[pointer + 15383 - 7378 & 16383] / 16) + Math.trunc(-dram[pointer + 15383 - 7138 & 16383] / 16) + Math.trunc(-dram[pointer + 15383 - 7091 & 16383] / 16) + Math.trunc(dram[pointer + 15383 - 6864 & 16383] / 8) + Math.trunc(dram[pointer + 15383 - 6726 & 16383] / 8) + Math.trunc(dram[pointer + 15383 - 6656 & 16383] / 8) + Math.trunc(dram[pointer + 15383 - 6418 & 16383] / 8) + Math.trunc(dram[pointer + 15383 - 6363 & 16383] / 8) + Math.trunc(dram[pointer + 15383 - 6153 & 16383] / 8) + Math.trunc(dram[pointer + 15383 - 6017 & 16383] / 8) + Math.trunc(dram[pointer + 15383 - 5966 & 16383] / 8) + Math.trunc(-dram[pointer + 15383 - 5727 & 16383] / 4) + Math.trunc(-dram[pointer + 15383 - 5656 & 16383] / 4) + Math.trunc(-dram[pointer + 15383 - 5494 & 16383] / 4) + Math.trunc(-dram[pointer + 15383 - 5318 & 16383] / 4) + Math.trunc(-dram[pointer + 15383 - 5260 & 16383] / 4) + Math.trunc(-dram[pointer + 15383 - 5018 & 16383] / 4) + Math.trunc(-dram[pointer + 15383 - 4957 & 16383] / 4) + Math.trunc(-dram[pointer + 15383 - 4733 & 16383] / 4) + Math.trunc(dram[pointer + 15383 - 4626 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 4550 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 4338 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 4209 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 4045 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 3920 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 3799 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 3618 & 16383] / 2) + Math.trunc(dram[pointer + 5373 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5373 & 16383] = Acc;
  Acc = Math.trunc(-dram[pointer + 5373 - 1 & 16383] / 4) + dram[pointer + 11 - 0 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 11 & 16383] = -Acc;
  Acc = Math.trunc(dram[pointer + 16373 - 989 & 16383] / 2) + Math.trunc(dram[pointer + 5370 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 5370 & 16383] = -Acc;
  Acc = dram[pointer + 5370 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 15383 & 16383] = -Acc;
};
var midiverb2_effect_38 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0;
  tmp_0 = input;
  tmp_0 = tmp_0 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 11 - 2 & 16383] / 2) + Math.trunc(dram[pointer + 2298 - 21 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2298 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2298 - 21 & 16383] + Math.trunc(dram[pointer + 2275 - 53 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2275 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2275 - 53 & 16383] + Math.trunc(dram[pointer + 2220 - 173 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2220 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 2220 - 173 & 16383] * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 11 - 2 & 16383] / 2) + Math.trunc(dram[pointer + 2045 - 32 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2045 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2045 - 32 & 16383] + Math.trunc(dram[pointer + 2011 - 75 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2011 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2011 - 75 & 16383] + Math.trunc(dram[pointer + 1934 - 133 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1934 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[pointer + 1934 - 133 & 16383] * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 16382 - 1 & 16383] * 3 / 4) + Math.trunc(tmp_0 / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16382 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 16382 - 8 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16373 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 16373 - 152 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 222 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 401 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 523 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 750 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 864 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 1054 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 1108 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 1222 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 1423 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 1544 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 1731 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 1851 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 2035 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 2138 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 2245 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 2432 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 2568 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 2710 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 2862 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 3025 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 3110 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 3256 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 3440 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 3558 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11 & 16383] = -Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_39 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0;
  tmp_0 = input;
  tmp_0 = tmp_0 << 16 >> 16;
  Acc = dram[pointer + 11 - 2 & 16383] + Math.trunc(dram[pointer + 2298 - 31 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2298 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2298 - 31 & 16383] + Math.trunc(dram[pointer + 2265 - 153 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2265 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2265 - 153 & 16383] + Math.trunc(dram[pointer + 2110 - 273 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2110 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[pointer + 2110 - 273 & 16383] * 9 / 4);
  Acc = Acc << 16 >> 16;
  tmp_3 = -Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = dram[pointer + 11 - 2 & 16383] + Math.trunc(dram[pointer + 1835 - 42 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1835 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 1835 - 42 & 16383] + Math.trunc(dram[pointer + 1791 - 181 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1791 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 1791 - 181 & 16383] + Math.trunc(dram[pointer + 1608 - 233 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1608 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[pointer + 1608 - 233 & 16383] * 9 / 4);
  Acc = Acc << 16 >> 16;
  tmp_5 = -Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 16382 - 1 & 16383] * 3 / 4) + Math.trunc(tmp_0 / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16382 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 16382 - 8 & 16383] * -3 / 8);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16373 & 16383] = -Acc;
  Acc = Math.trunc(dram[pointer + 16373 - 220 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 401 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 523 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 750 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 864 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 64 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 118 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 232 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 433 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 554 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 741 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 861 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 1045 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 1148 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 1255 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 1442 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 1578 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 1720 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 1872 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 2035 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 2120 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 2266 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 2450 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 2568 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 2724 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 2888 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 3033 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 3151 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 3256 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 3491 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 3555 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11 & 16383] = -Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
  Acc = Math.trunc(-dram[pointer + 15383 - 8094 & 16383] / 16) + Math.trunc(-dram[pointer + 15383 - 7848 & 16383] / 16) + Math.trunc(-dram[pointer + 15383 - 7792 & 16383] / 16) + Math.trunc(-dram[pointer + 15383 - 7514 & 16383] / 16) + Math.trunc(-dram[pointer + 15383 - 7461 & 16383] / 16) + Math.trunc(-dram[pointer + 15383 - 7378 & 16383] / 16) + Math.trunc(-dram[pointer + 15383 - 7138 & 16383] / 16) + Math.trunc(-dram[pointer + 15383 - 7091 & 16383] / 16) + Math.trunc(dram[pointer + 15383 - 6864 & 16383] / 8) + Math.trunc(dram[pointer + 15383 - 6726 & 16383] / 8) + Math.trunc(dram[pointer + 15383 - 6656 & 16383] / 8) + Math.trunc(dram[pointer + 15383 - 6418 & 16383] / 8) + Math.trunc(dram[pointer + 15383 - 6363 & 16383] / 8) + Math.trunc(dram[pointer + 15383 - 6153 & 16383] / 8) + Math.trunc(dram[pointer + 15383 - 6017 & 16383] / 8) + Math.trunc(dram[pointer + 15383 - 5966 & 16383] / 8) + Math.trunc(-dram[pointer + 15383 - 5727 & 16383] / 4) + Math.trunc(-dram[pointer + 15383 - 5656 & 16383] / 4) + Math.trunc(-dram[pointer + 15383 - 5494 & 16383] / 4) + Math.trunc(-dram[pointer + 15383 - 5318 & 16383] / 4) + Math.trunc(-dram[pointer + 15383 - 5260 & 16383] / 4) + Math.trunc(-dram[pointer + 15383 - 5018 & 16383] / 4) + Math.trunc(-dram[pointer + 15383 - 4957 & 16383] / 4) + Math.trunc(-dram[pointer + 15383 - 4733 & 16383] / 4) + Math.trunc(dram[pointer + 15383 - 4626 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 4550 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 4338 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 4209 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 4045 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 3920 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 3799 & 16383] / 2) + Math.trunc(dram[pointer + 15383 - 3618 & 16383] / 2) + Math.trunc(dram[pointer + 1373 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1373 & 16383] = Acc;
  Acc = Math.trunc(-dram[pointer + 1373 - 1 & 16383] / 4) + dram[pointer + 11 - 0 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 11 & 16383] = -Acc;
  Acc = Math.trunc(dram[pointer + 16373 - 989 & 16383] / 2) + Math.trunc(dram[pointer + 1370 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1370 & 16383] = -Acc;
  Acc = dram[pointer + 1370 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 15383 & 16383] = -Acc;
};
var midiverb2_effect_40 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0;
  tmp_0 = input;
  tmp_0 = tmp_0 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 11 - 2 & 16383] / 2) + Math.trunc(dram[pointer + 2298 - 51 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2298 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2298 - 51 & 16383] + Math.trunc(dram[pointer + 2245 - 131 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2245 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2245 - 131 & 16383] + Math.trunc(dram[pointer + 2112 - 213 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2112 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[pointer + 2112 - 213 & 16383] * 9 / 4) + Math.trunc(dram[pointer + 16382 - 11316 & 16383] * 9 / 4);
  Acc = Acc << 16 >> 16;
  tmp_3 = -Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 11 - 2 & 16383] / 2) + Math.trunc(dram[pointer + 1897 - 62 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1897 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 1897 - 62 & 16383] + Math.trunc(dram[pointer + 1833 - 105 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1833 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 1833 - 105 & 16383] + Math.trunc(dram[pointer + 1726 - 189 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1726 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[pointer + 1726 - 189 & 16383] * 9 / 4) + Math.trunc(dram[pointer + 16382 - 11316 & 16383] * 9 / 4);
  Acc = Acc << 16 >> 16;
  tmp_5 = -Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(tmp_0 / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16382 & 16383] = Acc;
  Acc = Math.trunc(-dram[pointer + 16382 - 231 & 16383] / 16) + Math.trunc(-dram[pointer + 16382 - 410 & 16383] / 16) + Math.trunc(-dram[pointer + 16382 - 759 & 16383] / 16) + Math.trunc(-dram[pointer + 16382 - 1063 & 16383] / 16) + Math.trunc(dram[pointer + 16382 - 1231 & 16383] / 8) + Math.trunc(dram[pointer + 16382 - 1432 & 16383] / 8) + Math.trunc(dram[pointer + 16382 - 1740 & 16383] / 8) + Math.trunc(dram[pointer + 16382 - 1860 & 16383] / 8) + Math.trunc(dram[pointer + 16382 - 3034 & 16383] / 8) + Math.trunc(dram[pointer + 16382 - 2147 & 16383] / 8) + Math.trunc(-dram[pointer + 16382 - 2254 & 16383] / 4) + Math.trunc(-dram[pointer + 16382 - 2441 & 16383] / 4) + Math.trunc(-dram[pointer + 16382 - 1553 & 16383] / 4) + Math.trunc(-dram[pointer + 16382 - 2719 & 16383] / 4) + Math.trunc(-dram[pointer + 16382 - 2871 & 16383] / 4) + Math.trunc(-dram[pointer + 16382 - 2044 & 16383] / 4) + Math.trunc(dram[pointer + 1535 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1535 & 16383] = Acc;
  Acc = Math.trunc(Acc * 3 / 32) + Math.trunc(dram[pointer + 16382 - 3119 & 16383] / 32) + Math.trunc(dram[pointer + 16382 - 3265 & 16383] / 32) + Math.trunc(dram[pointer + 16382 - 3449 & 16383] / 32) + Math.trunc(dram[pointer + 16382 - 3567 & 16383] / 32) + Math.trunc(dram[pointer + 16382 - 5032 & 16383] / 32) + Math.trunc(dram[pointer + 16382 - 3887 & 16383] / 32) + Math.trunc(dram[pointer + 16382 - 4032 & 16383] / 32) + Math.trunc(-dram[pointer + 16382 - 4725 & 16383] / 16) + Math.trunc(-dram[pointer + 16382 - 4255 & 16383] / 16) + Math.trunc(-dram[pointer + 16382 - 4490 & 16383] / 16) + Math.trunc(-dram[pointer + 16382 - 4554 & 16383] / 16) + Math.trunc(-dram[pointer + 16382 - 4847 & 16383] / 16) + Math.trunc(-dram[pointer + 16382 - 3723 & 16383] / 16) + Math.trunc(dram[pointer + 16382 - 5127 & 16383] / 8) + Math.trunc(dram[pointer + 16382 - 5233 & 16383] / 8) + Math.trunc(dram[pointer + 16382 - 5419 & 16383] / 8) + Math.trunc(dram[pointer + 16382 - 5532 & 16383] / 8) + Math.trunc(dram[pointer + 16382 - 5757 & 16383] / 8) + Math.trunc(dram[pointer + 16382 - 6857 & 16383] / 8) + Math.trunc(-dram[pointer + 16382 - 6033 & 16383] / 4) + Math.trunc(-dram[pointer + 16382 - 6157 & 16383] / 4) + Math.trunc(-dram[pointer + 16382 - 6221 & 16383] / 4) + Math.trunc(-dram[pointer + 16382 - 7124 & 16383] / 4) + Math.trunc(dram[pointer + 1532 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1532 & 16383] = Acc;
  out[0] = tmp_5;
  Acc = Math.trunc(Acc * 3 / 8) + Math.trunc(dram[pointer + 16382 - 6532 & 16383] / 8) + Math.trunc(dram[pointer + 16382 - 6780 & 16383] / 8) + Math.trunc(dram[pointer + 16382 - 5835 & 16383] / 8) + Math.trunc(dram[pointer + 16382 - 7037 & 16383] / 8) + Math.trunc(dram[pointer + 16382 - 6444 & 16383] / 8) + Math.trunc(dram[pointer + 16382 - 7219 & 16383] / 8) + Math.trunc(dram[pointer + 16382 - 7437 & 16383] / 8) + Math.trunc(-dram[pointer + 16382 - 7734 & 16383] / 4) + Math.trunc(-dram[pointer + 16382 - 7889 & 16383] / 4) + Math.trunc(-dram[pointer + 16382 - 8032 & 16383] / 4) + Math.trunc(-dram[pointer + 16382 - 9213 & 16383] / 4) + Math.trunc(-dram[pointer + 16382 - 8445 & 16383] / 4) + Math.trunc(-dram[pointer + 16382 - 8563 & 16383] / 4) + Math.trunc(-dram[pointer + 16382 - 9511 & 16383] / 4) + Math.trunc(dram[pointer + 1529 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1529 & 16383] = Acc;
  out[1] = tmp_3;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(-dram[pointer + 16382 - 8883 & 16383] / 4) + Math.trunc(-dram[pointer + 16382 - 9010 & 16383] / 4) + Math.trunc(-dram[pointer + 16382 - 9169 & 16383] / 4) + Math.trunc(-dram[pointer + 16382 - 8144 & 16383] / 4) + Math.trunc(-dram[pointer + 16382 - 9447 & 16383] / 4) + Math.trunc(-dram[pointer + 16382 - 8698 & 16383] / 4) + Math.trunc(-dram[pointer + 16382 - 9763 & 16383] / 4) + Math.trunc(-dram[pointer + 16382 - 9865 & 16383] / 4) + Math.trunc(-dram[pointer + 16382 - 10044 & 16383] / 4) + Math.trunc(-dram[pointer + 16382 - 10108 & 16383] / 4) + Math.trunc(dram[pointer + 16382 - 10283 & 16383] / 2) + Math.trunc(dram[pointer + 16382 - 10426 & 16383] / 2) + Math.trunc(dram[pointer + 16382 - 10576 & 16383] / 2) + Math.trunc(dram[pointer + 16382 - 10732 & 16383] / 2) + Math.trunc(dram[pointer + 16382 - 10813 & 16383] / 2) + Math.trunc(dram[pointer + 16382 - 11021 & 16383] / 2) + Math.trunc(dram[pointer + 16382 - 11252 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11 & 16383] = Acc;
};
var midiverb2_effect_41 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 11 - 2 & 16383] / 2) + Math.trunc(dram[pointer + 2298 - 21 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2298 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2298 - 21 & 16383] + Math.trunc(dram[pointer + 2275 - 53 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2275 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2275 - 53 & 16383] + Math.trunc(dram[pointer + 2220 - 173 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2220 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2220 - 173 & 16383] + dram[pointer + 0 - 14e3 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 11 - 2 & 16383] / 2) + Math.trunc(dram[pointer + 2045 - 32 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2045 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2045 - 32 & 16383] + Math.trunc(dram[pointer + 2011 - 75 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2011 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2011 - 75 & 16383] + Math.trunc(dram[pointer + 1934 - 133 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1934 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 1934 - 133 & 16383] + dram[pointer + 0 - 14e3 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = tmp_3;
  Acc = Math.trunc(Acc * 3 / 32) + Math.trunc(dram[pointer + 0 - 1065 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 1119 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 1233 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 1434 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 1555 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 1742 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 1862 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 2046 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 3569 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 2256 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 2443 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 3121 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 2721 & 16383] / 32) + Math.trunc(-dram[pointer + 0 - 2873 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 3036 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 2579 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 3267 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 3451 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 2149 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 3725 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 3889 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 4034 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 4152 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 4257 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 4492 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 4556 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 4727 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 4849 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 6035 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 5129 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 5235 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 6223 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 5534 & 16383] / 16) + Math.trunc(dram[pointer + 0 - 5759 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 5837 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 5034 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 6159 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 5421 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 6446 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 6534 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 6782 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 6859 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 7039 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 7126 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 7221 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 8565 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 7534 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 7736 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 7891 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 9215 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 8146 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 8278 & 16383] / 8) + Math.trunc(-dram[pointer + 0 - 8447 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 7439 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 8700 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 8885 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 9012 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 9171 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 8034 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 9449 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 9513 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 9765 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 9867 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 10046 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 10110 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 10285 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 12074 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 10578 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 10734 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 11715 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 11023 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 11185 & 16383] / 4) + Math.trunc(dram[pointer + 0 - 11254 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 11479 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 11546 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 10815 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 11847 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 10428 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 12112 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 12279 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 12415 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 12516 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 12746 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 12815 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 13046 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 13217 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 13378 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 13534 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11 & 16383] = Acc;
};
var midiverb2_effect_42 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 11 - 2 & 16383] / 2) + Math.trunc(dram[pointer + 2298 - 21 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2298 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2298 - 21 & 16383] + Math.trunc(dram[pointer + 2275 - 53 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2275 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2275 - 53 & 16383] + Math.trunc(dram[pointer + 2220 - 173 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2220 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2220 - 173 & 16383] + dram[pointer + 0 - 11718 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 11 - 2 & 16383] / 2) + Math.trunc(dram[pointer + 2045 - 32 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2045 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2045 - 32 & 16383] + Math.trunc(dram[pointer + 2011 - 75 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2011 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2011 - 75 & 16383] + Math.trunc(dram[pointer + 1934 - 133 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1934 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 1934 - 133 & 16383] + dram[pointer + 0 - 11718 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = tmp_3;
  Acc = Math.trunc(dram[pointer + 0 - 163 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 233 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 412 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 534 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 761 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 875 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 1065 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 1119 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 1233 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 1434 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 2579 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 1742 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 1862 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 3036 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 2149 & 16383] / 32) + Math.trunc(-dram[pointer + 0 - 2256 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 2443 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 1555 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 2721 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 2873 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 2046 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 3121 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 3267 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 3451 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 3569 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 5034 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 3889 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 4034 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 4727 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 4257 & 16383] / 16) + Math.trunc(dram[pointer + 0 - 4492 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 4556 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 4152 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 4849 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 3725 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 5129 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 5235 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 5421 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 5534 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 5759 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 6859 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 6035 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 6159 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 6223 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 7126 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 6534 & 16383] / 8) + Math.trunc(-dram[pointer + 0 - 6782 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 5837 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 7039 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 6446 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 7221 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 7439 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 7534 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 7736 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 7891 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 8034 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 9215 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 8278 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 8447 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 8565 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 9513 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 8885 & 16383] / 4) + Math.trunc(dram[pointer + 0 - 9012 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 9171 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 8146 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 9449 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 8700 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 9765 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 9867 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 10046 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 10110 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 10285 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 10428 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 10578 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 10734 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 10815 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 11023 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 11185 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 11254 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11 & 16383] = Acc;
};
var midiverb2_effect_43 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 11 - 2 & 16383] / 2) + Math.trunc(dram[pointer + 2298 - 21 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2298 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2298 - 21 & 16383] + Math.trunc(dram[pointer + 2275 - 53 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2275 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2275 - 53 & 16383] + Math.trunc(dram[pointer + 2220 - 173 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2220 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2220 - 173 & 16383] + dram[pointer + 0 - 9375 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = -Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 11 - 2 & 16383] / 2) + Math.trunc(dram[pointer + 2045 - 32 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2045 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2045 - 32 & 16383] + Math.trunc(dram[pointer + 2011 - 75 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2011 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2011 - 75 & 16383] + Math.trunc(dram[pointer + 1934 - 133 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1934 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 1934 - 133 & 16383] + dram[pointer + 0 - 9375 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = -Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  Acc = Math.trunc(dram[pointer + 0 - 163 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 233 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 412 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 534 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 761 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 875 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 2721 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 1119 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 1233 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 1434 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 2443 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 1742 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 1862 & 16383] / 32) + Math.trunc(-dram[pointer + 0 - 2046 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 2149 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 2256 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 1555 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 2579 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 1065 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 2873 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 3036 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 4152 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 3267 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 3451 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 4492 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 3725 & 16383] / 16) + Math.trunc(dram[pointer + 0 - 3889 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 4034 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 3121 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 4257 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 3569 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 4556 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 4727 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 4849 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 5837 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 5129 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 5235 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 5421 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 6159 & 16383] / 8) + Math.trunc(-dram[pointer + 0 - 5759 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 5034 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 6035 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 5534 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 6223 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 6446 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 6534 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 8034 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 6859 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 7039 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 7736 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 7221 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 7439 & 16383] / 4) + Math.trunc(dram[pointer + 0 - 7534 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 7126 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 7891 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 6782 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 8146 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 8278 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 8447 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 8565 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 8700 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11 & 16383] = -Acc;
  out[1] = tmp_3;
};
var midiverb2_effect_44 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 11 - 2 & 16383] / 2) + Math.trunc(dram[pointer + 2298 - 21 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2298 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2298 - 21 & 16383] + Math.trunc(dram[pointer + 2275 - 53 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2275 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2275 - 53 & 16383] + Math.trunc(dram[pointer + 2220 - 173 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2220 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2220 - 173 & 16383] + dram[pointer + 0 - 7031 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = -Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 11 - 2 & 16383] / 2) + Math.trunc(dram[pointer + 2045 - 32 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2045 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2045 - 32 & 16383] + Math.trunc(dram[pointer + 2011 - 75 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2011 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2011 - 75 & 16383] + Math.trunc(dram[pointer + 1934 - 133 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1934 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 1934 - 133 & 16383] + dram[pointer + 0 - 7031 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = -Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 163 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 233 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 412 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 534 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 761 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 875 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 1434 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 1119 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 1862 & 16383] / 32) + Math.trunc(-dram[pointer + 0 - 1065 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 1555 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 1742 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 1233 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 2046 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 2149 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 2873 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 2443 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 3121 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 2721 & 16383] / 16) + Math.trunc(dram[pointer + 0 - 2256 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 3036 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 2579 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 3267 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 3451 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 3569 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 4492 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 3889 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 4034 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 4152 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 4849 & 16383] / 8) + Math.trunc(-dram[pointer + 0 - 3725 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 4556 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 4727 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 4257 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 5034 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 5837 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 5235 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 5421 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 6159 & 16383] / 4) + Math.trunc(dram[pointer + 0 - 5759 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 5129 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 6035 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 5534 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 6223 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 6446 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11 & 16383] = -Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_45 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 2190 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = -Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = dram[pointer + 2187 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = -Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 2193 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2193 & 16383] = Acc;
  Acc = Math.trunc(-dram[pointer + 11 - 1 & 16383] / 4) + Math.trunc(dram[pointer + 2184 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2184 & 16383] = Acc;
  Acc = Math.trunc(Acc * 3 / 2) + dram[pointer + 2193 - 1 & 16383] + Math.trunc(dram[pointer + 16381 - 13 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16381 - 13 & 16383] + Math.trunc(dram[pointer + 16366 - 83 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16366 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16366 - 83 & 16383] + Math.trunc(dram[pointer + 16281 - 116 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16281 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16281 - 116 & 16383] + Math.trunc(dram[pointer + 16163 - 239 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16163 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16163 - 239 & 16383] + Math.trunc(dram[pointer + 15922 - 339 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15922 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15922 - 339 & 16383] + Math.trunc(dram[pointer + 15581 - 481 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15581 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15581 - 481 & 16383] + Math.trunc(dram[pointer + 15098 - 555 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15098 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15098 - 555 & 16383] + Math.trunc(dram[pointer + 14541 - 823 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14541 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14541 - 823 & 16383] + Math.trunc(dram[pointer + 13716 - 999 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13716 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13716 - 999 & 16383] + Math.trunc(dram[pointer + 12715 - 1100 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12715 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12715 - 1100 & 16383] + Math.trunc(dram[pointer + 11613 - 1347 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11613 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11613 - 1347 & 16383] + Math.trunc(dram[pointer + 10264 - 1563 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10264 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10264 - 1563 & 16383] + Math.trunc(dram[pointer + 8699 - 1841 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8699 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8699 - 1841 & 16383] + Math.trunc(dram[pointer + 6856 - 2001 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6856 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6856 - 2001 & 16383] + Math.trunc(dram[pointer + 4853 - 2083 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4853 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4853 - 2083 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 11 & 16383] = -Acc;
  Acc = dram[pointer + 11 - 0 & 16383] + Math.trunc(dram[pointer + 2666 - 147 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2666 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2666 - 147 & 16383] + Math.trunc(dram[pointer + 2768 - 43 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2768 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2768 - 43 & 16383] + Math.trunc(dram[pointer + 2723 - 55 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2723 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2723 - 55 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 2190 & 16383] = -Acc;
  Acc = dram[pointer + 11 - 0 & 16383] + Math.trunc(dram[pointer + 2444 - 249 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2444 & 16383] = -Acc;
  out[0] = tmp_5;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2444 - 249 & 16383] + Math.trunc(dram[pointer + 2494 - 48 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2494 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2494 - 48 & 16383] + Math.trunc(dram[pointer + 2517 - 21 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2517 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2517 - 21 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 2187 & 16383] = -Acc;
  out[1] = tmp_3;
};
var midiverb2_effect_46 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 0 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 3166 & 16383] = -Acc;
  Acc = dram[pointer + 3166 - 2e3 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 0 & 16383] = -Acc;
  Acc = Math.trunc(dram[pointer + 11 - 2 & 16383] / 2) + Math.trunc(dram[pointer + 4298 - 51 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4298 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4298 - 51 & 16383] + Math.trunc(dram[pointer + 4245 - 231 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4245 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4245 - 231 & 16383] + Math.trunc(dram[pointer + 4012 - 313 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4012 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[pointer + 4012 - 313 & 16383] * 9 / 4) + Math.trunc(dram[pointer + 16373 - 11307 & 16383] * 9 / 4);
  Acc = Acc << 16 >> 16;
  tmp_3 = -Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 11 - 2 & 16383] / 2) + Math.trunc(dram[pointer + 3697 - 62 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3697 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 3697 - 62 & 16383] + Math.trunc(dram[pointer + 3633 - 165 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3633 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 3633 - 165 & 16383] + Math.trunc(dram[pointer + 3466 - 289 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3466 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[pointer + 3466 - 289 & 16383] * 9 / 4) + Math.trunc(dram[pointer + 16373 - 11307 & 16383] * 9 / 4);
  Acc = Acc << 16 >> 16;
  tmp_5 = -Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 10 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16373 & 16383] = Acc;
  Acc = Math.trunc(Acc * -3 / 16) + Math.trunc(-dram[pointer + 16373 - 401 & 16383] / 16) + Math.trunc(-dram[pointer + 16373 - 750 & 16383] / 16) + Math.trunc(-dram[pointer + 16373 - 1054 & 16383] / 16) + Math.trunc(dram[pointer + 16373 - 1222 & 16383] / 8) + Math.trunc(dram[pointer + 16373 - 1423 & 16383] / 8) + Math.trunc(dram[pointer + 16373 - 1731 & 16383] / 8) + Math.trunc(dram[pointer + 16373 - 1851 & 16383] / 8) + Math.trunc(dram[pointer + 16373 - 2138 & 16383] / 8) + Math.trunc(-dram[pointer + 16373 - 2245 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 2432 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 1544 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 2710 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 2862 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 2035 & 16383] / 4) + Math.trunc(dram[pointer + 3175 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3175 & 16383] = Acc;
  Acc = Math.trunc(Acc * 3 / 32) + Math.trunc(dram[pointer + 16373 - 3110 & 16383] / 32) + Math.trunc(dram[pointer + 16373 - 3256 & 16383] / 32) + Math.trunc(dram[pointer + 16373 - 3558 & 16383] / 32) + Math.trunc(dram[pointer + 16373 - 5023 & 16383] / 32) + Math.trunc(dram[pointer + 16373 - 3878 & 16383] / 32) + Math.trunc(dram[pointer + 16373 - 4023 & 16383] / 32) + Math.trunc(-dram[pointer + 16373 - 4716 & 16383] / 16) + Math.trunc(-dram[pointer + 16373 - 4246 & 16383] / 16) + Math.trunc(-dram[pointer + 16373 - 4481 & 16383] / 16) + Math.trunc(-dram[pointer + 16373 - 4838 & 16383] / 16) + Math.trunc(-dram[pointer + 16373 - 3714 & 16383] / 16) + Math.trunc(dram[pointer + 16373 - 5118 & 16383] / 8) + Math.trunc(dram[pointer + 16373 - 5224 & 16383] / 8) + Math.trunc(dram[pointer + 16373 - 5410 & 16383] / 8) + Math.trunc(dram[pointer + 16373 - 5523 & 16383] / 8) + Math.trunc(dram[pointer + 16373 - 5748 & 16383] / 8) + Math.trunc(dram[pointer + 16373 - 6848 & 16383] / 8) + Math.trunc(-dram[pointer + 16373 - 6024 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 6212 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 7115 & 16383] / 4) + Math.trunc(dram[pointer + 3172 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3172 & 16383] = Acc;
  out[0] = tmp_5;
  Acc = Math.trunc(Acc * 3 / 8) + Math.trunc(dram[pointer + 16373 - 6523 & 16383] / 8) + Math.trunc(dram[pointer + 16373 - 5826 & 16383] / 8) + Math.trunc(dram[pointer + 16373 - 7028 & 16383] / 8) + Math.trunc(dram[pointer + 16373 - 6435 & 16383] / 8) + Math.trunc(dram[pointer + 16373 - 7210 & 16383] / 8) + Math.trunc(dram[pointer + 16373 - 7428 & 16383] / 8) + Math.trunc(-dram[pointer + 16373 - 7725 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 7880 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 8023 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 9204 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 8436 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 8554 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 9502 & 16383] / 4) + Math.trunc(dram[pointer + 3169 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 3169 & 16383] = Acc;
  out[1] = tmp_3;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(-dram[pointer + 16373 - 8874 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 9001 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 9160 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 8135 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 9438 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 8689 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 9754 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 9856 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 10035 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 10099 & 16383] / 4) + Math.trunc(dram[pointer + 16373 - 10274 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 10417 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 10567 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 10723 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 10804 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 11012 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 11243 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11 & 16383] = -Acc;
};
var midiverb2_effect_47 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0;
  tmp_0 = input;
  tmp_0 = tmp_0 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 11 - 2 & 16383] / 2) + Math.trunc(dram[pointer + 2298 - 51 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2298 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2298 - 51 & 16383] + Math.trunc(dram[pointer + 2245 - 131 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2245 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2245 - 131 & 16383] + Math.trunc(dram[pointer + 2112 - 213 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2112 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[pointer + 2112 - 213 & 16383] * 9 / 4) + Math.trunc(dram[pointer + 16373 - 11307 & 16383] * 9 / 4);
  Acc = Acc << 16 >> 16;
  tmp_3 = -Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 11 - 2 & 16383] / 2) + Math.trunc(dram[pointer + 1897 - 62 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1897 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 1897 - 62 & 16383] + Math.trunc(dram[pointer + 1833 - 105 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1833 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 1833 - 105 & 16383] + Math.trunc(dram[pointer + 1726 - 189 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1726 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[pointer + 1726 - 189 & 16383] * 9 / 4) + Math.trunc(dram[pointer + 16373 - 11307 & 16383] * 9 / 4);
  Acc = Acc << 16 >> 16;
  tmp_5 = -Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(tmp_0 / 2) + Math.trunc(dram[pointer + 16373 - 11307 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16383 & 16383] = -Acc;
  Acc = Math.trunc(dram[pointer + 16383 - 9 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16373 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + 16373 - 1222 & 16383] / 8) + Math.trunc(dram[pointer + 16373 - 1423 & 16383] / 8) + Math.trunc(dram[pointer + 16373 - 1731 & 16383] / 8) + Math.trunc(dram[pointer + 16373 - 1851 & 16383] / 8) + Math.trunc(dram[pointer + 16373 - 3025 & 16383] / 8) + Math.trunc(dram[pointer + 16373 - 2138 & 16383] / 8) + Math.trunc(-dram[pointer + 16373 - 2245 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 2432 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 1544 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 2710 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 2862 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 2035 & 16383] / 4) + Math.trunc(dram[pointer + 1535 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1535 & 16383] = Acc;
  Acc = Math.trunc(Acc * 3 / 32) + Math.trunc(dram[pointer + 16373 - 3110 & 16383] / 32) + Math.trunc(dram[pointer + 16373 - 3256 & 16383] / 32) + Math.trunc(dram[pointer + 16373 - 3440 & 16383] / 32) + Math.trunc(dram[pointer + 16373 - 3558 & 16383] / 32) + Math.trunc(dram[pointer + 16373 - 5023 & 16383] / 32) + Math.trunc(dram[pointer + 16373 - 3878 & 16383] / 32) + Math.trunc(dram[pointer + 16373 - 4023 & 16383] / 32) + Math.trunc(-dram[pointer + 16373 - 4716 & 16383] / 16) + Math.trunc(-dram[pointer + 16373 - 4246 & 16383] / 16) + Math.trunc(-dram[pointer + 16373 - 4481 & 16383] / 16) + Math.trunc(-dram[pointer + 16373 - 4545 & 16383] / 16) + Math.trunc(-dram[pointer + 16373 - 4838 & 16383] / 16) + Math.trunc(-dram[pointer + 16373 - 3714 & 16383] / 16) + Math.trunc(dram[pointer + 16373 - 5118 & 16383] / 8) + Math.trunc(dram[pointer + 16373 - 5224 & 16383] / 8) + Math.trunc(dram[pointer + 16373 - 5410 & 16383] / 8) + Math.trunc(dram[pointer + 16373 - 5523 & 16383] / 8) + Math.trunc(dram[pointer + 16373 - 5748 & 16383] / 8) + Math.trunc(dram[pointer + 16373 - 6848 & 16383] / 8) + Math.trunc(-dram[pointer + 16373 - 6024 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 6148 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 6212 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 7115 & 16383] / 4) + Math.trunc(dram[pointer + 1532 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1532 & 16383] = Acc;
  out[0] = tmp_5;
  Acc = Math.trunc(Acc * 3 / 8) + Math.trunc(dram[pointer + 16373 - 6523 & 16383] / 8) + Math.trunc(dram[pointer + 16373 - 6771 & 16383] / 8) + Math.trunc(dram[pointer + 16373 - 5826 & 16383] / 8) + Math.trunc(dram[pointer + 16373 - 7028 & 16383] / 8) + Math.trunc(dram[pointer + 16373 - 6435 & 16383] / 8) + Math.trunc(dram[pointer + 16373 - 7210 & 16383] / 8) + Math.trunc(dram[pointer + 16373 - 7428 & 16383] / 8) + Math.trunc(-dram[pointer + 16373 - 7725 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 7880 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 8023 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 9204 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 8436 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 8554 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 9502 & 16383] / 4) + Math.trunc(dram[pointer + 1529 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1529 & 16383] = Acc;
  out[1] = tmp_3;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(-dram[pointer + 16373 - 8874 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 9001 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 9160 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 8135 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 9438 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 8689 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 9754 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 9856 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 10035 & 16383] / 4) + Math.trunc(-dram[pointer + 16373 - 10099 & 16383] / 4) + Math.trunc(dram[pointer + 16373 - 10274 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 10417 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 10567 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 10723 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 10804 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 11012 & 16383] / 2) + Math.trunc(dram[pointer + 16373 - 11243 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11 & 16383] = Acc;
};
var midiverb2_effect_48 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 11 - 2 & 16383] / 2) + Math.trunc(dram[pointer + 2298 - 51 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2298 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2298 - 51 & 16383] + Math.trunc(dram[pointer + 2245 - 131 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2245 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2245 - 131 & 16383] + Math.trunc(dram[pointer + 2112 - 213 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2112 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[pointer + 2112 - 213 & 16383] * 9 / 4) + Math.trunc(dram[pointer + 16364 - 11298 & 16383] * 9 / 4);
  Acc = Acc << 16 >> 16;
  tmp_3 = -Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 11 - 2 & 16383] / 2) + Math.trunc(dram[pointer + 1897 - 62 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1897 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 1897 - 62 & 16383] + Math.trunc(dram[pointer + 1833 - 105 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1833 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 1833 - 105 & 16383] + Math.trunc(dram[pointer + 1726 - 189 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1726 & 16383] = -Acc;
  Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[pointer + 1726 - 189 & 16383] * 9 / 4) + Math.trunc(dram[pointer + 16364 - 11298 & 16383] * 9 / 4);
  Acc = Acc << 16 >> 16;
  tmp_5 = -Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = dram[pointer + 0 - 3 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 1526 & 16383] = -Acc;
  Acc = dram[pointer + 1526 - 1300 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 16380 & 16383] = -Acc;
  Acc = Math.trunc(dram[pointer + 16364 - 11298 & 16383] * 3 / 4) + Math.trunc(dram[pointer + 0 - 0 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16364 & 16383] = -Acc;
  Acc = Math.trunc(dram[pointer + 16364 - 1213 & 16383] / 8) + Math.trunc(dram[pointer + 16364 - 2129 & 16383] / 8) + Math.trunc(-dram[pointer + 16364 - 2236 & 16383] / 4) + Math.trunc(-dram[pointer + 16364 - 2853 & 16383] / 4) + Math.trunc(-dram[pointer + 16364 - 2026 & 16383] / 4) + Math.trunc(dram[pointer + 1535 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1535 & 16383] = Acc;
  Acc = Math.trunc(Acc * 3 / 32) + Math.trunc(dram[pointer + 16364 - 3101 & 16383] / 32) + Math.trunc(dram[pointer + 16364 - 3549 & 16383] / 32) + Math.trunc(dram[pointer + 16364 - 5014 & 16383] / 32) + Math.trunc(dram[pointer + 16364 - 3869 & 16383] / 32) + Math.trunc(dram[pointer + 16364 - 4014 & 16383] / 32) + Math.trunc(-dram[pointer + 16364 - 4707 & 16383] / 16) + Math.trunc(-dram[pointer + 16364 - 4237 & 16383] / 16) + Math.trunc(-dram[pointer + 16364 - 4472 & 16383] / 16) + Math.trunc(-dram[pointer + 16364 - 4536 & 16383] / 16) + Math.trunc(-dram[pointer + 16364 - 4829 & 16383] / 16) + Math.trunc(-dram[pointer + 16364 - 3705 & 16383] / 16) + Math.trunc(dram[pointer + 16364 - 5109 & 16383] / 8) + Math.trunc(dram[pointer + 16364 - 5215 & 16383] / 8) + Math.trunc(dram[pointer + 16364 - 5401 & 16383] / 8) + Math.trunc(dram[pointer + 16364 - 5514 & 16383] / 8) + Math.trunc(dram[pointer + 16364 - 5739 & 16383] / 8) + Math.trunc(dram[pointer + 16364 - 6839 & 16383] / 8) + Math.trunc(-dram[pointer + 16364 - 6015 & 16383] / 4) + Math.trunc(-dram[pointer + 16364 - 6139 & 16383] / 4) + Math.trunc(-dram[pointer + 16364 - 6203 & 16383] / 4) + Math.trunc(-dram[pointer + 16364 - 7106 & 16383] / 4) + Math.trunc(dram[pointer + 1532 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1532 & 16383] = Acc;
  out[0] = tmp_5;
  Acc = Math.trunc(Acc * 3 / 8) + Math.trunc(dram[pointer + 16364 - 6514 & 16383] / 8) + Math.trunc(dram[pointer + 16364 - 6762 & 16383] / 8) + Math.trunc(dram[pointer + 16364 - 5817 & 16383] / 8) + Math.trunc(dram[pointer + 16364 - 7019 & 16383] / 8) + Math.trunc(dram[pointer + 16364 - 6426 & 16383] / 8) + Math.trunc(dram[pointer + 16364 - 7201 & 16383] / 8) + Math.trunc(dram[pointer + 16364 - 7419 & 16383] / 8) + Math.trunc(-dram[pointer + 16364 - 7716 & 16383] / 4) + Math.trunc(-dram[pointer + 16364 - 7871 & 16383] / 4) + Math.trunc(-dram[pointer + 16364 - 8014 & 16383] / 4) + Math.trunc(-dram[pointer + 16364 - 9195 & 16383] / 4) + Math.trunc(-dram[pointer + 16364 - 8427 & 16383] / 4) + Math.trunc(-dram[pointer + 16364 - 8545 & 16383] / 4) + Math.trunc(-dram[pointer + 16364 - 9493 & 16383] / 4) + Math.trunc(dram[pointer + 1529 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1529 & 16383] = Acc;
  out[1] = tmp_3;
  Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(-dram[pointer + 16364 - 8865 & 16383] / 4) + Math.trunc(-dram[pointer + 16364 - 8992 & 16383] / 4) + Math.trunc(-dram[pointer + 16364 - 9151 & 16383] / 4) + Math.trunc(-dram[pointer + 16364 - 8126 & 16383] / 4) + Math.trunc(-dram[pointer + 16364 - 9429 & 16383] / 4) + Math.trunc(-dram[pointer + 16364 - 8680 & 16383] / 4) + Math.trunc(-dram[pointer + 16364 - 9745 & 16383] / 4) + Math.trunc(-dram[pointer + 16364 - 9847 & 16383] / 4) + Math.trunc(-dram[pointer + 16364 - 10026 & 16383] / 4) + Math.trunc(-dram[pointer + 16364 - 10090 & 16383] / 4) + Math.trunc(dram[pointer + 16364 - 10265 & 16383] / 2) + Math.trunc(dram[pointer + 16364 - 10408 & 16383] / 2) + Math.trunc(dram[pointer + 16364 - 10558 & 16383] / 2) + Math.trunc(dram[pointer + 16364 - 10714 & 16383] / 2) + Math.trunc(dram[pointer + 16364 - 10795 & 16383] / 2) + Math.trunc(dram[pointer + 16364 - 11003 & 16383] / 2) + Math.trunc(dram[pointer + 16364 - 11234 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11 & 16383] = Acc;
};
var midiverb2_effect_49 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 191 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = -Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = dram[pointer + 188 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = -Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 194 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 2e3 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 194 & 16383] = Acc;
  Acc = Math.trunc(-dram[pointer + 11 - 1 & 16383] / 4) + Math.trunc(dram[pointer + 185 - 1 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 185 & 16383] = Acc;
  Acc = Math.trunc(Acc * 3 / 2) + dram[pointer + 194 - 1 & 16383] + Math.trunc(dram[pointer + 14382 - 13 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14382 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14382 - 13 & 16383] + Math.trunc(dram[pointer + 14367 - 83 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14367 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14367 - 83 & 16383] + Math.trunc(dram[pointer + 14282 - 116 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14282 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14282 - 116 & 16383] + Math.trunc(dram[pointer + 14164 - 239 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14164 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14164 - 239 & 16383] + Math.trunc(dram[pointer + 13923 - 339 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13923 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13923 - 339 & 16383] + Math.trunc(dram[pointer + 13582 - 481 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13582 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13582 - 481 & 16383] + Math.trunc(dram[pointer + 13099 - 555 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 13099 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 13099 - 555 & 16383] + Math.trunc(dram[pointer + 12542 - 823 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12542 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 12542 - 823 & 16383] + Math.trunc(dram[pointer + 11717 - 999 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 11717 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 11717 - 999 & 16383] + Math.trunc(dram[pointer + 10716 - 1100 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10716 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 10716 - 1100 & 16383] + Math.trunc(dram[pointer + 9614 - 1347 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 9614 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 9614 - 1347 & 16383] + Math.trunc(dram[pointer + 8265 - 1563 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 8265 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 8265 - 1563 & 16383] + Math.trunc(dram[pointer + 6700 - 1841 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 6700 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 6700 - 1841 & 16383] + Math.trunc(dram[pointer + 4857 - 2001 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 4857 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 4857 - 2001 & 16383] + Math.trunc(dram[pointer + 2854 - 2083 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2854 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2854 - 2083 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 11 & 16383] = -Acc;
  Acc = dram[pointer + 11 - 0 & 16383] + Math.trunc(dram[pointer + 667 - 147 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 667 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 667 - 147 & 16383] + Math.trunc(dram[pointer + 769 - 43 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 769 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 769 - 43 & 16383] + Math.trunc(dram[pointer + 724 - 55 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 724 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 724 - 55 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 191 & 16383] = -Acc;
  Acc = dram[pointer + 11 - 0 & 16383] + Math.trunc(dram[pointer + 445 - 249 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 445 & 16383] = -Acc;
  out[0] = tmp_5;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 445 - 249 & 16383] + Math.trunc(dram[pointer + 495 - 48 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 495 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 495 - 48 & 16383] + Math.trunc(dram[pointer + 518 - 21 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 518 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 518 - 21 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 188 & 16383] = -Acc;
  out[1] = tmp_3;
};
var midiverb2_effect_50 = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
  tmp_0 = input;
  tmp_0 = tmp_0 << 16 >> 16;
  Acc = tmp_0;
  Acc = Acc << 16 >> 16;
  dram[pointer + 16282 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 88 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 5 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 89 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 4 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 90 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 3 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 91 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 2 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] * 81 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] * 81 / 128);
  Acc = Acc << 16 >> 16;
  tmp_1f4a = Acc;
  tmp_1f4a = tmp_1f4a << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f48 = Acc;
  tmp_1f48 = tmp_1f48 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4c = Acc;
  tmp_1f4c = tmp_1f4c << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f47 = Acc;
  tmp_1f47 = tmp_1f47 << 16 >> 16;
  Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f49 = Acc;
  tmp_1f49 = tmp_1f49 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4d = Acc;
  tmp_1f4d = tmp_1f4d << 16 >> 16;
  Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4b = Acc;
  tmp_1f4b = tmp_1f4b << 16 >> 16;
  switch (lfo1Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f47 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_1f47;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_1f48;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_1f49;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_1f4a;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_1f4b;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_1f4c;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_1f4d;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_3 = -Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 88 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 5 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 89 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 4 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 90 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 3 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 91 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 2 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] * 27 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] * 27 / 64);
  Acc = Acc << 16 >> 16;
  dram[pointer + (4006 - (lfo2Value >> 8)) & 16383] = Acc;
  Acc = Math.trunc(Acc * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_faa = Acc;
  tmp_faa = tmp_faa << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa8 = Acc;
  tmp_fa8 = tmp_fa8 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fac = Acc;
  tmp_fac = tmp_fac << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa7 = Acc;
  tmp_fa7 = tmp_fa7 << 16 >> 16;
  Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa9 = Acc;
  tmp_fa9 = tmp_fa9 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_fac / 2);
  Acc = Acc << 16 >> 16;
  tmp_fad = Acc;
  tmp_fad = tmp_fad << 16 >> 16;
  Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fab = Acc;
  tmp_fab = tmp_fab << 16 >> 16;
  switch (lfo2Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa7 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_fa7;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_fa8;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_fa9;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_faa;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_fab;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_fac;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_fad;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_5 = -Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  Acc = Math.trunc(-Acc / 32768);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16374 & 16383] = -Acc;
  out[1] = tmp_3;
};
var midiverb2_effect_51 = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
  tmp_0 = input;
  tmp_0 = tmp_0 << 16 >> 16;
  Acc = tmp_0;
  Acc = Acc << 16 >> 16;
  dram[pointer + 16282 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 88 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 5 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 89 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 4 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 90 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 3 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 91 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 2 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] * 81 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] * 81 / 128);
  Acc = Acc << 16 >> 16;
  tmp_1f4a = Acc;
  tmp_1f4a = tmp_1f4a << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f48 = Acc;
  tmp_1f48 = tmp_1f48 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4c = Acc;
  tmp_1f4c = tmp_1f4c << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f47 = Acc;
  tmp_1f47 = tmp_1f47 << 16 >> 16;
  Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f49 = Acc;
  tmp_1f49 = tmp_1f49 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4d = Acc;
  tmp_1f4d = tmp_1f4d << 16 >> 16;
  Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4b = Acc;
  tmp_1f4b = tmp_1f4b << 16 >> 16;
  switch (lfo1Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f47 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_1f47;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_1f48;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_1f49;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_1f4a;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_1f4b;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_1f4c;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_1f4d;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 88 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 5 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 89 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 4 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 90 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 3 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 91 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 2 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] * 27 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] * 27 / 64);
  Acc = Acc << 16 >> 16;
  dram[pointer + (4006 - (lfo2Value >> 8)) & 16383] = Acc;
  Acc = Math.trunc(Acc * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_faa = Acc;
  tmp_faa = tmp_faa << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa8 = Acc;
  tmp_fa8 = tmp_fa8 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fac = Acc;
  tmp_fac = tmp_fac << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa7 = Acc;
  tmp_fa7 = tmp_fa7 << 16 >> 16;
  Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa9 = Acc;
  tmp_fa9 = tmp_fa9 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_fac / 2);
  Acc = Acc << 16 >> 16;
  tmp_fad = Acc;
  tmp_fad = tmp_fad << 16 >> 16;
  Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fab = Acc;
  tmp_fab = tmp_fab << 16 >> 16;
  switch (lfo2Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa7 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_fa7;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_fa8;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_fa9;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_faa;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_fab;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_fac;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_fad;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  Acc = Math.trunc(Acc * 3 / 32768);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16374 & 16383] = -Acc;
  out[1] = tmp_3;
};
var midiverb2_effect_52 = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
  tmp_0 = input;
  tmp_0 = tmp_0 << 16 >> 16;
  Acc = tmp_0;
  Acc = Acc << 16 >> 16;
  dram[pointer + 16282 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 88 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 5 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 89 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 4 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 90 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 3 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 91 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 2 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] * 81 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] * 81 / 128);
  Acc = Acc << 16 >> 16;
  tmp_1f4a = Acc;
  tmp_1f4a = tmp_1f4a << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f48 = Acc;
  tmp_1f48 = tmp_1f48 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4c = Acc;
  tmp_1f4c = tmp_1f4c << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f47 = Acc;
  tmp_1f47 = tmp_1f47 << 16 >> 16;
  Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f49 = Acc;
  tmp_1f49 = tmp_1f49 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4d = Acc;
  tmp_1f4d = tmp_1f4d << 16 >> 16;
  Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4b = Acc;
  tmp_1f4b = tmp_1f4b << 16 >> 16;
  switch (lfo1Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f47 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_1f47;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_1f48;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_1f49;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_1f4a;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_1f4b;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_1f4c;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_1f4d;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_3 = -Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 88 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 5 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 89 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 4 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 90 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 3 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 91 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 2 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] * 27 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] * 27 / 64);
  Acc = Acc << 16 >> 16;
  dram[pointer + (4006 - (lfo2Value >> 8)) & 16383] = Acc;
  Acc = Math.trunc(Acc * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_faa = Acc;
  tmp_faa = tmp_faa << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa8 = Acc;
  tmp_fa8 = tmp_fa8 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fac = Acc;
  tmp_fac = tmp_fac << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa7 = Acc;
  tmp_fa7 = tmp_fa7 << 16 >> 16;
  Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa9 = Acc;
  tmp_fa9 = tmp_fa9 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_fac / 2);
  Acc = Acc << 16 >> 16;
  tmp_fad = Acc;
  tmp_fad = tmp_fad << 16 >> 16;
  Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fab = Acc;
  tmp_fab = tmp_fab << 16 >> 16;
  switch (lfo2Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa7 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_fa7;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_fa8;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_fa9;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_faa;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_fab;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_fac;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_fad;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_5 = -Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  Acc = Math.trunc(-Acc / 32768);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16374 & 16383] = -Acc;
  out[1] = tmp_3;
};
var midiverb2_effect_53 = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
  tmp_0 = input;
  tmp_0 = tmp_0 << 16 >> 16;
  Acc = tmp_0;
  Acc = Acc << 16 >> 16;
  dram[pointer + 16282 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 88 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 5 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 89 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 4 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 90 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 3 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 91 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 2 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] * 81 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] * 81 / 128);
  Acc = Acc << 16 >> 16;
  tmp_1f4a = Acc;
  tmp_1f4a = tmp_1f4a << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f48 = Acc;
  tmp_1f48 = tmp_1f48 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4c = Acc;
  tmp_1f4c = tmp_1f4c << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f47 = Acc;
  tmp_1f47 = tmp_1f47 << 16 >> 16;
  Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f49 = Acc;
  tmp_1f49 = tmp_1f49 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4d = Acc;
  tmp_1f4d = tmp_1f4d << 16 >> 16;
  Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4b = Acc;
  tmp_1f4b = tmp_1f4b << 16 >> 16;
  switch (lfo1Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f47 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_1f47;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_1f48;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_1f49;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_1f4a;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_1f4b;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_1f4c;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_1f4d;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 88 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 5 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 89 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 4 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 90 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 3 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 91 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 2 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] * 27 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] * 27 / 64);
  Acc = Acc << 16 >> 16;
  dram[pointer + (4006 - (lfo2Value >> 8)) & 16383] = Acc;
  Acc = Math.trunc(Acc * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_faa = Acc;
  tmp_faa = tmp_faa << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa8 = Acc;
  tmp_fa8 = tmp_fa8 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fac = Acc;
  tmp_fac = tmp_fac << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa7 = Acc;
  tmp_fa7 = tmp_fa7 << 16 >> 16;
  Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa9 = Acc;
  tmp_fa9 = tmp_fa9 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_fac / 2);
  Acc = Acc << 16 >> 16;
  tmp_fad = Acc;
  tmp_fad = tmp_fad << 16 >> 16;
  Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fab = Acc;
  tmp_fab = tmp_fab << 16 >> 16;
  switch (lfo2Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa7 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_fa7;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_fa8;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_fa9;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_faa;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_fab;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_fac;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_fad;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  Acc = Math.trunc(Acc * 3 / 32768);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16374 & 16383] = -Acc;
  out[1] = tmp_3;
};
var midiverb2_effect_54 = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
  tmp_0 = input;
  tmp_0 = tmp_0 << 16 >> 16;
  Acc = tmp_0;
  Acc = Acc << 16 >> 16;
  dram[pointer + 16282 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 88 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 5 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 89 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 4 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 90 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 3 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 91 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 2 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] * 81 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] * 81 / 128);
  Acc = Acc << 16 >> 16;
  tmp_1f4a = Acc;
  tmp_1f4a = tmp_1f4a << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f48 = Acc;
  tmp_1f48 = tmp_1f48 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4c = Acc;
  tmp_1f4c = tmp_1f4c << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f47 = Acc;
  tmp_1f47 = tmp_1f47 << 16 >> 16;
  Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f49 = Acc;
  tmp_1f49 = tmp_1f49 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4d = Acc;
  tmp_1f4d = tmp_1f4d << 16 >> 16;
  Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4b = Acc;
  tmp_1f4b = tmp_1f4b << 16 >> 16;
  switch (lfo1Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f47 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_1f47;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_1f48;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_1f49;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_1f4a;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_1f4b;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_1f4c;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_1f4d;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_3 = -Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 88 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 5 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 89 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 4 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 90 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 3 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 91 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 2 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] * 27 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] * 27 / 64);
  Acc = Acc << 16 >> 16;
  dram[pointer + (4006 - (lfo2Value >> 8)) & 16383] = Acc;
  Acc = Math.trunc(Acc * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_faa = Acc;
  tmp_faa = tmp_faa << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa8 = Acc;
  tmp_fa8 = tmp_fa8 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fac = Acc;
  tmp_fac = tmp_fac << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa7 = Acc;
  tmp_fa7 = tmp_fa7 << 16 >> 16;
  Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa9 = Acc;
  tmp_fa9 = tmp_fa9 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_fac / 2);
  Acc = Acc << 16 >> 16;
  tmp_fad = Acc;
  tmp_fad = tmp_fad << 16 >> 16;
  Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fab = Acc;
  tmp_fab = tmp_fab << 16 >> 16;
  switch (lfo2Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa7 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_fa7;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_fa8;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_fa9;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_faa;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_fab;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_fac;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_fad;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_5 = -Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  Acc = Math.trunc(-Acc / 32768);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16374 & 16383] = -Acc;
  out[1] = tmp_3;
};
var midiverb2_effect_55 = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
  tmp_0 = input;
  tmp_0 = tmp_0 << 16 >> 16;
  Acc = tmp_0;
  Acc = Acc << 16 >> 16;
  dram[pointer + 16282 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 88 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 5 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 89 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 4 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 90 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 3 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 91 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 2 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] * 81 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] * 81 / 128);
  Acc = Acc << 16 >> 16;
  tmp_1f4a = Acc;
  tmp_1f4a = tmp_1f4a << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f48 = Acc;
  tmp_1f48 = tmp_1f48 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4c = Acc;
  tmp_1f4c = tmp_1f4c << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f47 = Acc;
  tmp_1f47 = tmp_1f47 << 16 >> 16;
  Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f49 = Acc;
  tmp_1f49 = tmp_1f49 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4d = Acc;
  tmp_1f4d = tmp_1f4d << 16 >> 16;
  Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4b = Acc;
  tmp_1f4b = tmp_1f4b << 16 >> 16;
  switch (lfo1Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f47 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_1f47;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_1f48;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_1f49;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_1f4a;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_1f4b;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_1f4c;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_1f4d;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 88 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 5 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 89 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 4 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 90 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 3 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 91 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 2 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] * 27 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] * 27 / 64);
  Acc = Acc << 16 >> 16;
  dram[pointer + (4006 - (lfo2Value >> 8)) & 16383] = Acc;
  Acc = Math.trunc(Acc * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_faa = Acc;
  tmp_faa = tmp_faa << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa8 = Acc;
  tmp_fa8 = tmp_fa8 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fac = Acc;
  tmp_fac = tmp_fac << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa7 = Acc;
  tmp_fa7 = tmp_fa7 << 16 >> 16;
  Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa9 = Acc;
  tmp_fa9 = tmp_fa9 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_fac / 2);
  Acc = Acc << 16 >> 16;
  tmp_fad = Acc;
  tmp_fad = tmp_fad << 16 >> 16;
  Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fab = Acc;
  tmp_fab = tmp_fab << 16 >> 16;
  switch (lfo2Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa7 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_fa7;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_fa8;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_fa9;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_faa;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_fab;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_fac;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_fad;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  Acc = Math.trunc(Acc * 3 / 32768);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16374 & 16383] = -Acc;
  out[1] = tmp_3;
};
var midiverb2_effect_56 = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
  tmp_0 = input;
  tmp_0 = tmp_0 << 16 >> 16;
  Acc = tmp_0;
  Acc = Acc << 16 >> 16;
  dram[pointer + 16282 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 88 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 5 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 89 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 4 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 90 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 3 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 91 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 2 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] * 81 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] * 81 / 128);
  Acc = Acc << 16 >> 16;
  tmp_1f4a = Acc;
  tmp_1f4a = tmp_1f4a << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f48 = Acc;
  tmp_1f48 = tmp_1f48 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4c = Acc;
  tmp_1f4c = tmp_1f4c << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f47 = Acc;
  tmp_1f47 = tmp_1f47 << 16 >> 16;
  Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f49 = Acc;
  tmp_1f49 = tmp_1f49 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4d = Acc;
  tmp_1f4d = tmp_1f4d << 16 >> 16;
  Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4b = Acc;
  tmp_1f4b = tmp_1f4b << 16 >> 16;
  switch (lfo1Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f47 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_1f47;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_1f48;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_1f49;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_1f4a;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_1f4b;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_1f4c;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_1f4d;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_3 = -Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 88 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 5 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 89 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 4 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 90 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 3 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 91 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 2 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] * 27 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] * 27 / 64);
  Acc = Acc << 16 >> 16;
  dram[pointer + (4006 - (lfo2Value >> 8)) & 16383] = Acc;
  Acc = Math.trunc(Acc * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_faa = Acc;
  tmp_faa = tmp_faa << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa8 = Acc;
  tmp_fa8 = tmp_fa8 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fac = Acc;
  tmp_fac = tmp_fac << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa7 = Acc;
  tmp_fa7 = tmp_fa7 << 16 >> 16;
  Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa9 = Acc;
  tmp_fa9 = tmp_fa9 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_fac / 2);
  Acc = Acc << 16 >> 16;
  tmp_fad = Acc;
  tmp_fad = tmp_fad << 16 >> 16;
  Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fab = Acc;
  tmp_fab = tmp_fab << 16 >> 16;
  switch (lfo2Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa7 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_fa7;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_fa8;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_fa9;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_faa;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_fab;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_fac;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_fad;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_5 = -Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  Acc = Math.trunc(-Acc / 32768);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16374 & 16383] = -Acc;
  out[1] = tmp_3;
};
var midiverb2_effect_57 = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
  tmp_0 = input;
  tmp_0 = tmp_0 << 16 >> 16;
  Acc = tmp_0;
  Acc = Acc << 16 >> 16;
  dram[pointer + 16282 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 88 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 5 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 89 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 4 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 90 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 3 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 91 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 2 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] * 81 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] * 81 / 128);
  Acc = Acc << 16 >> 16;
  tmp_1f4a = Acc;
  tmp_1f4a = tmp_1f4a << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f48 = Acc;
  tmp_1f48 = tmp_1f48 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4c = Acc;
  tmp_1f4c = tmp_1f4c << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f47 = Acc;
  tmp_1f47 = tmp_1f47 << 16 >> 16;
  Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f49 = Acc;
  tmp_1f49 = tmp_1f49 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4d = Acc;
  tmp_1f4d = tmp_1f4d << 16 >> 16;
  Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4b = Acc;
  tmp_1f4b = tmp_1f4b << 16 >> 16;
  switch (lfo1Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f47 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_1f47;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_1f48;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_1f49;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_1f4a;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_1f4b;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_1f4c;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_1f4d;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 88 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 5 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 89 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 4 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 90 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 3 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 91 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 2 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] * 27 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] * 27 / 64);
  Acc = Acc << 16 >> 16;
  dram[pointer + (4006 - (lfo2Value >> 8)) & 16383] = Acc;
  Acc = Math.trunc(Acc * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_faa = Acc;
  tmp_faa = tmp_faa << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa8 = Acc;
  tmp_fa8 = tmp_fa8 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fac = Acc;
  tmp_fac = tmp_fac << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa7 = Acc;
  tmp_fa7 = tmp_fa7 << 16 >> 16;
  Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa9 = Acc;
  tmp_fa9 = tmp_fa9 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_fac / 2);
  Acc = Acc << 16 >> 16;
  tmp_fad = Acc;
  tmp_fad = tmp_fad << 16 >> 16;
  Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fab = Acc;
  tmp_fab = tmp_fab << 16 >> 16;
  switch (lfo2Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa7 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_fa7;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_fa8;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_fa9;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_faa;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_fab;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_fac;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_fad;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  Acc = Math.trunc(Acc * 3 / 32768);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16374 & 16383] = -Acc;
  out[1] = tmp_3;
};
var midiverb2_effect_58 = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
  tmp_0 = input;
  tmp_0 = tmp_0 << 16 >> 16;
  Acc = tmp_0;
  Acc = Acc << 16 >> 16;
  dram[pointer + 16282 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 88 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 5 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 89 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 4 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 90 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 3 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 91 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 2 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] * 81 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] * 81 / 128);
  Acc = Acc << 16 >> 16;
  tmp_1f4a = Acc;
  tmp_1f4a = tmp_1f4a << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f48 = Acc;
  tmp_1f48 = tmp_1f48 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4c = Acc;
  tmp_1f4c = tmp_1f4c << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f47 = Acc;
  tmp_1f47 = tmp_1f47 << 16 >> 16;
  Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f49 = Acc;
  tmp_1f49 = tmp_1f49 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4d = Acc;
  tmp_1f4d = tmp_1f4d << 16 >> 16;
  Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4b = Acc;
  tmp_1f4b = tmp_1f4b << 16 >> 16;
  switch (lfo1Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f47 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_1f47;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_1f48;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_1f49;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_1f4a;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_1f4b;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_1f4c;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_1f4d;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_3 = -Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 88 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 5 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 89 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 4 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 90 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 3 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 91 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 2 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] * 27 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] * 27 / 64);
  Acc = Acc << 16 >> 16;
  dram[pointer + (4006 - (lfo2Value >> 8)) & 16383] = Acc;
  Acc = Math.trunc(Acc * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_faa = Acc;
  tmp_faa = tmp_faa << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa8 = Acc;
  tmp_fa8 = tmp_fa8 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fac = Acc;
  tmp_fac = tmp_fac << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa7 = Acc;
  tmp_fa7 = tmp_fa7 << 16 >> 16;
  Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa9 = Acc;
  tmp_fa9 = tmp_fa9 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_fac / 2);
  Acc = Acc << 16 >> 16;
  tmp_fad = Acc;
  tmp_fad = tmp_fad << 16 >> 16;
  Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fab = Acc;
  tmp_fab = tmp_fab << 16 >> 16;
  switch (lfo2Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa7 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_fa7;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_fa8;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_fa9;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_faa;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_fab;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_fac;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_fad;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_5 = -Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  Acc = Math.trunc(-Acc / 32768);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16374 & 16383] = -Acc;
  out[1] = tmp_3;
};
var midiverb2_effect_59 = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
  tmp_0 = input;
  tmp_0 = tmp_0 << 16 >> 16;
  Acc = tmp_0;
  Acc = Acc << 16 >> 16;
  dram[pointer + 16282 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 88 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 5 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 89 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 4 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 90 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 3 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 91 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 2 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] * 81 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] * 81 / 128);
  Acc = Acc << 16 >> 16;
  tmp_1f4a = Acc;
  tmp_1f4a = tmp_1f4a << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f48 = Acc;
  tmp_1f48 = tmp_1f48 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4c = Acc;
  tmp_1f4c = tmp_1f4c << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f47 = Acc;
  tmp_1f47 = tmp_1f47 << 16 >> 16;
  Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f49 = Acc;
  tmp_1f49 = tmp_1f49 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4d = Acc;
  tmp_1f4d = tmp_1f4d << 16 >> 16;
  Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4b = Acc;
  tmp_1f4b = tmp_1f4b << 16 >> 16;
  switch (lfo1Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f47 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_1f47;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_1f48;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_1f49;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_1f4a;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_1f4b;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_1f4c;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_1f4d;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 88 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 5 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 89 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 4 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 90 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 3 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 91 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 2 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] * 27 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] * 27 / 64);
  Acc = Acc << 16 >> 16;
  dram[pointer + (4006 - (lfo2Value >> 8)) & 16383] = Acc;
  Acc = Math.trunc(Acc * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_faa = Acc;
  tmp_faa = tmp_faa << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa8 = Acc;
  tmp_fa8 = tmp_fa8 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fac = Acc;
  tmp_fac = tmp_fac << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa7 = Acc;
  tmp_fa7 = tmp_fa7 << 16 >> 16;
  Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa9 = Acc;
  tmp_fa9 = tmp_fa9 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_fac / 2);
  Acc = Acc << 16 >> 16;
  tmp_fad = Acc;
  tmp_fad = tmp_fad << 16 >> 16;
  Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fab = Acc;
  tmp_fab = tmp_fab << 16 >> 16;
  switch (lfo2Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa7 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_fa7;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_fa8;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_fa9;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_faa;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_fab;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_fac;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_fad;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  Acc = Math.trunc(Acc * 3 / 32768);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16374 & 16383] = -Acc;
  out[1] = tmp_3;
};
var midiverb2_effect_60 = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
  tmp_0 = input;
  tmp_0 = tmp_0 << 16 >> 16;
  Acc = tmp_0;
  Acc = Acc << 16 >> 16;
  dram[pointer + 16282 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 88 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 5 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 89 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 4 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 90 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 3 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 91 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 2 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] * 81 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] * 81 / 128);
  Acc = Acc << 16 >> 16;
  tmp_1f4a = Acc;
  tmp_1f4a = tmp_1f4a << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f48 = Acc;
  tmp_1f48 = tmp_1f48 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4c = Acc;
  tmp_1f4c = tmp_1f4c << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f47 = Acc;
  tmp_1f47 = tmp_1f47 << 16 >> 16;
  Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f49 = Acc;
  tmp_1f49 = tmp_1f49 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4d = Acc;
  tmp_1f4d = tmp_1f4d << 16 >> 16;
  Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4b = Acc;
  tmp_1f4b = tmp_1f4b << 16 >> 16;
  switch (lfo1Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f47 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_1f47;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_1f48;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_1f49;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_1f4a;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_1f4b;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_1f4c;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_1f4d;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 88 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 5 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 89 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 4 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 90 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 3 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 91 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 2 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] * 27 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] * 27 / 64);
  Acc = Acc << 16 >> 16;
  dram[pointer + (4006 - (lfo2Value >> 8)) & 16383] = Acc;
  Acc = Math.trunc(Acc * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_faa = Acc;
  tmp_faa = tmp_faa << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa8 = Acc;
  tmp_fa8 = tmp_fa8 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fac = Acc;
  tmp_fac = tmp_fac << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa7 = Acc;
  tmp_fa7 = tmp_fa7 << 16 >> 16;
  Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa9 = Acc;
  tmp_fa9 = tmp_fa9 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_fac / 2);
  Acc = Acc << 16 >> 16;
  tmp_fad = Acc;
  tmp_fad = tmp_fad << 16 >> 16;
  Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fab = Acc;
  tmp_fab = tmp_fab << 16 >> 16;
  switch (lfo2Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa7 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_fa7;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_fa8;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_fa9;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_faa;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_fab;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_fac;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_fad;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  Acc = Math.trunc(Acc * 3 / 32768);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16374 & 16383] = -Acc;
  out[1] = tmp_3;
};
var midiverb2_effect_61 = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
  tmp_0 = input;
  tmp_0 = tmp_0 << 16 >> 16;
  Acc = tmp_0;
  Acc = Acc << 16 >> 16;
  dram[pointer + 16282 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 88 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 5 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 89 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 4 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 90 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 3 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 91 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 2 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] * 81 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] * 81 / 128);
  Acc = Acc << 16 >> 16;
  tmp_1f4a = Acc;
  tmp_1f4a = tmp_1f4a << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f48 = Acc;
  tmp_1f48 = tmp_1f48 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4c = Acc;
  tmp_1f4c = tmp_1f4c << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f47 = Acc;
  tmp_1f47 = tmp_1f47 << 16 >> 16;
  Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f49 = Acc;
  tmp_1f49 = tmp_1f49 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4d = Acc;
  tmp_1f4d = tmp_1f4d << 16 >> 16;
  Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4b = Acc;
  tmp_1f4b = tmp_1f4b << 16 >> 16;
  switch (lfo1Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f47 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_1f47;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_1f48;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_1f49;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_1f4a;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_1f4b;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_1f4c;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_1f4d;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 88 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 5 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 89 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 4 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 90 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 3 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 91 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 2 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] * 27 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] * 27 / 64);
  Acc = Acc << 16 >> 16;
  dram[pointer + (4006 - (lfo2Value >> 8)) & 16383] = Acc;
  Acc = Math.trunc(Acc * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_faa = Acc;
  tmp_faa = tmp_faa << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa8 = Acc;
  tmp_fa8 = tmp_fa8 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fac = Acc;
  tmp_fac = tmp_fac << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa7 = Acc;
  tmp_fa7 = tmp_fa7 << 16 >> 16;
  Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa9 = Acc;
  tmp_fa9 = tmp_fa9 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_fac / 2);
  Acc = Acc << 16 >> 16;
  tmp_fad = Acc;
  tmp_fad = tmp_fad << 16 >> 16;
  Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fab = Acc;
  tmp_fab = tmp_fab << 16 >> 16;
  switch (lfo2Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa7 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_fa7;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_fa8;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_fa9;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_faa;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_fab;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_fac;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_fad;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  Acc = Math.trunc(Acc * 3 / 32768);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16374 & 16383] = -Acc;
  out[1] = tmp_3;
};
var midiverb2_effect_62 = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
  tmp_0 = input;
  tmp_0 = tmp_0 << 16 >> 16;
  Acc = tmp_0;
  Acc = Acc << 16 >> 16;
  dram[pointer + 16282 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 88 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 5 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 89 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 4 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 90 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 3 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 91 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 2 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] * 81 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] * 81 / 128);
  Acc = Acc << 16 >> 16;
  tmp_1f4a = Acc;
  tmp_1f4a = tmp_1f4a << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f48 = Acc;
  tmp_1f48 = tmp_1f48 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4c = Acc;
  tmp_1f4c = tmp_1f4c << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f47 = Acc;
  tmp_1f47 = tmp_1f47 << 16 >> 16;
  Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f49 = Acc;
  tmp_1f49 = tmp_1f49 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4d = Acc;
  tmp_1f4d = tmp_1f4d << 16 >> 16;
  Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4b = Acc;
  tmp_1f4b = tmp_1f4b << 16 >> 16;
  switch (lfo1Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f47 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_1f47;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_1f48;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_1f49;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_1f4a;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_1f4b;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_1f4c;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_1f4d;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 88 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 5 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 89 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 4 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 90 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 3 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 91 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 2 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] * 27 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] * 27 / 64);
  Acc = Acc << 16 >> 16;
  dram[pointer + (4006 - (lfo2Value >> 8)) & 16383] = Acc;
  Acc = Math.trunc(Acc * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_faa = Acc;
  tmp_faa = tmp_faa << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa8 = Acc;
  tmp_fa8 = tmp_fa8 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fac = Acc;
  tmp_fac = tmp_fac << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa7 = Acc;
  tmp_fa7 = tmp_fa7 << 16 >> 16;
  Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa9 = Acc;
  tmp_fa9 = tmp_fa9 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_fac / 2);
  Acc = Acc << 16 >> 16;
  tmp_fad = Acc;
  tmp_fad = tmp_fad << 16 >> 16;
  Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fab = Acc;
  tmp_fab = tmp_fab << 16 >> 16;
  switch (lfo2Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa7 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_fa7;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_fa8;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_fa9;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_faa;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_fab;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_fac;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_fad;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  Acc = Math.trunc(Acc * 3 / 32768);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16374 & 16383] = -Acc;
  out[1] = tmp_3;
};
var midiverb2_effect_63 = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
  tmp_0 = input;
  tmp_0 = tmp_0 << 16 >> 16;
  Acc = tmp_0;
  Acc = Acc << 16 >> 16;
  dram[pointer + 16282 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 88 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 5 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 89 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 4 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 90 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 3 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 91 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 2 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] * 81 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] * 81 / 128);
  Acc = Acc << 16 >> 16;
  tmp_1f4a = Acc;
  tmp_1f4a = tmp_1f4a << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f48 = Acc;
  tmp_1f48 = tmp_1f48 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4c = Acc;
  tmp_1f4c = tmp_1f4c << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f47 = Acc;
  tmp_1f47 = tmp_1f47 << 16 >> 16;
  Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f49 = Acc;
  tmp_1f49 = tmp_1f49 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4d = Acc;
  tmp_1f4d = tmp_1f4d << 16 >> 16;
  Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4b = Acc;
  tmp_1f4b = tmp_1f4b << 16 >> 16;
  switch (lfo1Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f47 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_1f47;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_1f48;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_1f49;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_1f4a;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_1f4b;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_1f4c;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_1f4d;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 88 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 5 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 89 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 4 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 90 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 3 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 91 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 2 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] * 27 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] * 27 / 64);
  Acc = Acc << 16 >> 16;
  dram[pointer + (4006 - (lfo2Value >> 8)) & 16383] = Acc;
  Acc = Math.trunc(Acc * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_faa = Acc;
  tmp_faa = tmp_faa << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa8 = Acc;
  tmp_fa8 = tmp_fa8 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fac = Acc;
  tmp_fac = tmp_fac << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa7 = Acc;
  tmp_fa7 = tmp_fa7 << 16 >> 16;
  Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa9 = Acc;
  tmp_fa9 = tmp_fa9 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_fac / 2);
  Acc = Acc << 16 >> 16;
  tmp_fad = Acc;
  tmp_fad = tmp_fad << 16 >> 16;
  Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fab = Acc;
  tmp_fab = tmp_fab << 16 >> 16;
  switch (lfo2Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa7 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_fa7;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_fa8;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_fa9;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_faa;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_fab;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_fac;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_fad;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  Acc = Math.trunc(Acc * 3 / 32768);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16374 & 16383] = -Acc;
  out[1] = tmp_3;
};
var midiverb2_effect_64 = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
  tmp_0 = input;
  tmp_0 = tmp_0 << 16 >> 16;
  Acc = tmp_0;
  Acc = Acc << 16 >> 16;
  dram[pointer + 16282 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 88 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 5 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 89 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 4 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 90 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 3 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 91 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 2 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] * 81 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] * 81 / 128);
  Acc = Acc << 16 >> 16;
  tmp_1f4a = Acc;
  tmp_1f4a = tmp_1f4a << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f48 = Acc;
  tmp_1f48 = tmp_1f48 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4c = Acc;
  tmp_1f4c = tmp_1f4c << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f47 = Acc;
  tmp_1f47 = tmp_1f47 << 16 >> 16;
  Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f49 = Acc;
  tmp_1f49 = tmp_1f49 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4d = Acc;
  tmp_1f4d = tmp_1f4d << 16 >> 16;
  Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4b = Acc;
  tmp_1f4b = tmp_1f4b << 16 >> 16;
  switch (lfo1Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f47 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_1f47;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_1f48;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_1f49;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_1f4a;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_1f4b;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_1f4c;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_1f4d;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 88 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 5 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 89 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 4 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 90 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 3 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 91 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 2 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] * 27 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] * 27 / 64);
  Acc = Acc << 16 >> 16;
  dram[pointer + (4006 - (lfo2Value >> 8)) & 16383] = Acc;
  Acc = Math.trunc(Acc * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_faa = Acc;
  tmp_faa = tmp_faa << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa8 = Acc;
  tmp_fa8 = tmp_fa8 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fac = Acc;
  tmp_fac = tmp_fac << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa7 = Acc;
  tmp_fa7 = tmp_fa7 << 16 >> 16;
  Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa9 = Acc;
  tmp_fa9 = tmp_fa9 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_fac / 2);
  Acc = Acc << 16 >> 16;
  tmp_fad = Acc;
  tmp_fad = tmp_fad << 16 >> 16;
  Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fab = Acc;
  tmp_fab = tmp_fab << 16 >> 16;
  switch (lfo2Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa7 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_fa7;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_fa8;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_fa9;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_faa;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_fab;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_fac;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_fad;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  Acc = Math.trunc(Acc * 3 / 32768);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16374 & 16383] = -Acc;
  out[1] = tmp_3;
};
var midiverb2_effect_65 = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
  tmp_0 = input;
  tmp_0 = tmp_0 << 16 >> 16;
  Acc = tmp_0;
  Acc = Acc << 16 >> 16;
  dram[pointer + 16282 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 88 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 5 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 89 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 4 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 90 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 3 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 91 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 2 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] * 81 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] * 81 / 128);
  Acc = Acc << 16 >> 16;
  tmp_1f4a = Acc;
  tmp_1f4a = tmp_1f4a << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f48 = Acc;
  tmp_1f48 = tmp_1f48 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4c = Acc;
  tmp_1f4c = tmp_1f4c << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f47 = Acc;
  tmp_1f47 = tmp_1f47 << 16 >> 16;
  Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f49 = Acc;
  tmp_1f49 = tmp_1f49 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4d = Acc;
  tmp_1f4d = tmp_1f4d << 16 >> 16;
  Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4b = Acc;
  tmp_1f4b = tmp_1f4b << 16 >> 16;
  switch (lfo1Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f47 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_1f47;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_1f48;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_1f49;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_1f4a;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_1f4b;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_1f4c;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_1f4d;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 88 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 5 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 89 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 4 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 90 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 3 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 91 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 2 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] * 27 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] * 27 / 64);
  Acc = Acc << 16 >> 16;
  dram[pointer + (4006 - (lfo2Value >> 8)) & 16383] = Acc;
  Acc = Math.trunc(Acc * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_faa = Acc;
  tmp_faa = tmp_faa << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa8 = Acc;
  tmp_fa8 = tmp_fa8 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fac = Acc;
  tmp_fac = tmp_fac << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa7 = Acc;
  tmp_fa7 = tmp_fa7 << 16 >> 16;
  Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa9 = Acc;
  tmp_fa9 = tmp_fa9 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_fac / 2);
  Acc = Acc << 16 >> 16;
  tmp_fad = Acc;
  tmp_fad = tmp_fad << 16 >> 16;
  Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fab = Acc;
  tmp_fab = tmp_fab << 16 >> 16;
  switch (lfo2Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa7 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_fa7;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_fa8;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_fa9;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_faa;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_fab;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_fac;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_fad;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  Acc = Math.trunc(Acc * 3 / 32768);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16374 & 16383] = -Acc;
  out[1] = tmp_3;
};
var midiverb2_effect_66 = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
  tmp_0 = input;
  tmp_0 = tmp_0 << 16 >> 16;
  Acc = tmp_0;
  Acc = Acc << 16 >> 16;
  dram[pointer + 16282 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 88 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 5 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 89 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 4 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 90 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 3 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 91 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 2 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] * 81 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] * 81 / 128);
  Acc = Acc << 16 >> 16;
  tmp_1f4a = Acc;
  tmp_1f4a = tmp_1f4a << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f48 = Acc;
  tmp_1f48 = tmp_1f48 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4c = Acc;
  tmp_1f4c = tmp_1f4c << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f47 = Acc;
  tmp_1f47 = tmp_1f47 << 16 >> 16;
  Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f49 = Acc;
  tmp_1f49 = tmp_1f49 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4d = Acc;
  tmp_1f4d = tmp_1f4d << 16 >> 16;
  Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4b = Acc;
  tmp_1f4b = tmp_1f4b << 16 >> 16;
  switch (lfo1Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f47 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_1f47;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_1f48;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_1f49;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_1f4a;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_1f4b;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_1f4c;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_1f4d;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 88 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 5 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 89 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 4 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 90 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 3 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 91 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 2 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] * 27 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] * 27 / 64);
  Acc = Acc << 16 >> 16;
  dram[pointer + (4006 - (lfo2Value >> 8)) & 16383] = Acc;
  Acc = Math.trunc(Acc * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_faa = Acc;
  tmp_faa = tmp_faa << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa8 = Acc;
  tmp_fa8 = tmp_fa8 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fac = Acc;
  tmp_fac = tmp_fac << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa7 = Acc;
  tmp_fa7 = tmp_fa7 << 16 >> 16;
  Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa9 = Acc;
  tmp_fa9 = tmp_fa9 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_fac / 2);
  Acc = Acc << 16 >> 16;
  tmp_fad = Acc;
  tmp_fad = tmp_fad << 16 >> 16;
  Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fab = Acc;
  tmp_fab = tmp_fab << 16 >> 16;
  switch (lfo2Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa7 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_fa7;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_fa8;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_fa9;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_faa;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_fab;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_fac;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_fad;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  Acc = Math.trunc(Acc * 3 / 32768);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16374 & 16383] = -Acc;
  out[1] = tmp_3;
};
var midiverb2_effect_67 = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
  tmp_0 = input;
  tmp_0 = tmp_0 << 16 >> 16;
  Acc = tmp_0;
  Acc = Acc << 16 >> 16;
  dram[pointer + 16282 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 88 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 5 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 89 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 4 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 90 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 3 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 91 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 2 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] * 81 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] * 81 / 128);
  Acc = Acc << 16 >> 16;
  tmp_1f4a = Acc;
  tmp_1f4a = tmp_1f4a << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f48 = Acc;
  tmp_1f48 = tmp_1f48 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4c = Acc;
  tmp_1f4c = tmp_1f4c << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f47 = Acc;
  tmp_1f47 = tmp_1f47 << 16 >> 16;
  Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f49 = Acc;
  tmp_1f49 = tmp_1f49 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4d = Acc;
  tmp_1f4d = tmp_1f4d << 16 >> 16;
  Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4b = Acc;
  tmp_1f4b = tmp_1f4b << 16 >> 16;
  switch (lfo1Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f47 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_1f47;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_1f48;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_1f49;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_1f4a;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_1f4b;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_1f4c;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_1f4d;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 88 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 5 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 89 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 4 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 90 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 3 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 91 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 2 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] * 27 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] * 27 / 64);
  Acc = Acc << 16 >> 16;
  dram[pointer + (4006 - (lfo2Value >> 8)) & 16383] = Acc;
  Acc = Math.trunc(Acc * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_faa = Acc;
  tmp_faa = tmp_faa << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa8 = Acc;
  tmp_fa8 = tmp_fa8 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fac = Acc;
  tmp_fac = tmp_fac << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa7 = Acc;
  tmp_fa7 = tmp_fa7 << 16 >> 16;
  Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa9 = Acc;
  tmp_fa9 = tmp_fa9 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_fac / 2);
  Acc = Acc << 16 >> 16;
  tmp_fad = Acc;
  tmp_fad = tmp_fad << 16 >> 16;
  Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fab = Acc;
  tmp_fab = tmp_fab << 16 >> 16;
  switch (lfo2Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa7 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_fa7;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_fa8;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_fa9;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_faa;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_fab;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_fac;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_fad;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  Acc = Math.trunc(Acc * 3 / 32768);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16374 & 16383] = -Acc;
  out[1] = tmp_3;
};
var midiverb2_effect_68 = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
  tmp_0 = input;
  tmp_0 = tmp_0 << 16 >> 16;
  Acc = tmp_0;
  Acc = Acc << 16 >> 16;
  dram[pointer + 16282 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 88 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 5 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 89 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 4 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 90 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 3 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 91 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 2 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] * 81 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] * 81 / 128);
  Acc = Acc << 16 >> 16;
  tmp_1f4a = Acc;
  tmp_1f4a = tmp_1f4a << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f48 = Acc;
  tmp_1f48 = tmp_1f48 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4c = Acc;
  tmp_1f4c = tmp_1f4c << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f47 = Acc;
  tmp_1f47 = tmp_1f47 << 16 >> 16;
  Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f49 = Acc;
  tmp_1f49 = tmp_1f49 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4d = Acc;
  tmp_1f4d = tmp_1f4d << 16 >> 16;
  Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4b = Acc;
  tmp_1f4b = tmp_1f4b << 16 >> 16;
  switch (lfo1Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f47 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_1f47;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_1f48;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_1f49;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_1f4a;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_1f4b;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_1f4c;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_1f4d;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 88 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 5 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 89 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 4 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 90 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 3 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 91 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 2 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] * 27 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] * 27 / 64);
  Acc = Acc << 16 >> 16;
  dram[pointer + (4006 - (lfo2Value >> 8)) & 16383] = Acc;
  Acc = Math.trunc(Acc * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_faa = Acc;
  tmp_faa = tmp_faa << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa8 = Acc;
  tmp_fa8 = tmp_fa8 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fac = Acc;
  tmp_fac = tmp_fac << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa7 = Acc;
  tmp_fa7 = tmp_fa7 << 16 >> 16;
  Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa9 = Acc;
  tmp_fa9 = tmp_fa9 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_fac / 2);
  Acc = Acc << 16 >> 16;
  tmp_fad = Acc;
  tmp_fad = tmp_fad << 16 >> 16;
  Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fab = Acc;
  tmp_fab = tmp_fab << 16 >> 16;
  switch (lfo2Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa7 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_fa7;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_fa8;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_fa9;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_faa;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_fab;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_fac;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_fad;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  Acc = Math.trunc(Acc * 3 / 32768);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16374 & 16383] = -Acc;
  out[1] = tmp_3;
};
var midiverb2_effect_69 = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
  tmp_0 = input;
  tmp_0 = tmp_0 << 16 >> 16;
  Acc = tmp_0;
  Acc = Acc << 16 >> 16;
  dram[pointer + 16282 & 16383] = Acc;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 88 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 5 & 16383] * 27 / 1024) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 89 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 4 & 16383] * -27 / 512) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 90 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 3 & 16383] * 27 / 256) + Math.trunc(dram[pointer + (16374 - (lfo1Value >> 8)) - 91 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 2 & 16383] * -27 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] * 81 / 128) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] * 81 / 128);
  Acc = Acc << 16 >> 16;
  tmp_1f4a = Acc;
  tmp_1f4a = tmp_1f4a << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f48 = Acc;
  tmp_1f48 = tmp_1f48 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4c = Acc;
  tmp_1f4c = tmp_1f4c << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f47 = Acc;
  tmp_1f47 = tmp_1f47 << 16 >> 16;
  Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f49 = Acc;
  tmp_1f49 = tmp_1f49 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4d = Acc;
  tmp_1f4d = tmp_1f4d << 16 >> 16;
  Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = Acc << 16 >> 16;
  tmp_1f4b = Acc;
  tmp_1f4b = tmp_1f4b << 16 >> 16;
  switch (lfo1Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_1f47 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_1f47;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_1f48;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_1f49;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_1f4a;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_1f4b;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_1f4c;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_1f4d;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[pointer + (16282 - (lfo1Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 88 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 5 & 16383] * 9 / 512) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 89 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 4 & 16383] * -9 / 256) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 90 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 3 & 16383] * 9 / 128) + Math.trunc(dram[pointer + (16374 - (lfo2Value >> 8)) - 91 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 2 & 16383] * -9 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] * 27 / 64) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] * 27 / 64);
  Acc = Acc << 16 >> 16;
  dram[pointer + (4006 - (lfo2Value >> 8)) & 16383] = Acc;
  Acc = Math.trunc(Acc * 3 / 2);
  Acc = Acc << 16 >> 16;
  tmp_faa = Acc;
  tmp_faa = tmp_faa << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa8 = Acc;
  tmp_fa8 = tmp_fa8 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fac = Acc;
  tmp_fac = tmp_fac << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa7 = Acc;
  tmp_fa7 = tmp_fa7 << 16 >> 16;
  Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fa9 = Acc;
  tmp_fa9 = tmp_fa9 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2) + Math.trunc(tmp_fac / 2);
  Acc = Acc << 16 >> 16;
  tmp_fad = Acc;
  tmp_fad = tmp_fad << 16 >> 16;
  Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = Acc << 16 >> 16;
  tmp_fab = Acc;
  tmp_fab = tmp_fab << 16 >> 16;
  switch (lfo2Value >> 4 & 15) {
    case 0:
      Acc = dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383];
      Acc = Acc << 16 >> 16;
      break;
    case 1:
      Acc = Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 0 & 16383] / 2) + Math.trunc(tmp_fa7 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 2:
      Acc = tmp_fa7;
      Acc = Acc << 16 >> 16;
      break;
    case 3:
      Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 4:
      Acc = tmp_fa8;
      Acc = Acc << 16 >> 16;
      break;
    case 5:
      Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 6:
      Acc = tmp_fa9;
      Acc = Acc << 16 >> 16;
      break;
    case 7:
      Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 8:
      Acc = tmp_faa;
      Acc = Acc << 16 >> 16;
      break;
    case 9:
      Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 10:
      Acc = tmp_fab;
      Acc = Acc << 16 >> 16;
      break;
    case 11:
      Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 12:
      Acc = tmp_fac;
      Acc = Acc << 16 >> 16;
      break;
    case 13:
      Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
      Acc = Acc << 16 >> 16;
      break;
    case 14:
      Acc = tmp_fad;
      Acc = Acc << 16 >> 16;
      break;
    case 15:
      Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[pointer + (16282 - (lfo2Value >> 8)) - 1 & 16383] / 2);
      Acc = Acc << 16 >> 16;
      break;
  }
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  Acc = Math.trunc(Acc * 3 / 32768);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16374 & 16383] = -Acc;
  out[1] = tmp_3;
};
var midiverb2_effect_70 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 1172 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = dram[pointer + 0 - 1172 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_71 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 1758 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = dram[pointer + 0 - 1758 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_72 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 2344 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = dram[pointer + 0 - 2344 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_73 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 3516 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = dram[pointer + 0 - 3516 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_74 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 4688 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = dram[pointer + 0 - 4688 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_75 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 4922 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = dram[pointer + 0 - 4922 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_76 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 5156 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = dram[pointer + 0 - 5156 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_77 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 5391 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = dram[pointer + 0 - 5391 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_78 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 5625 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = dram[pointer + 0 - 5625 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_79 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 5859 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = dram[pointer + 0 - 5859 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_80 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 6094 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = dram[pointer + 0 - 6094 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_81 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 6328 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = dram[pointer + 0 - 6328 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_82 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 6563 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = dram[pointer + 0 - 6563 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_83 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 6797 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = dram[pointer + 0 - 6797 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_84 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 7031 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = dram[pointer + 0 - 7031 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_85 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 7500 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = dram[pointer + 0 - 7500 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_86 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 7969 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = dram[pointer + 0 - 7969 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_87 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 9141 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = dram[pointer + 0 - 9141 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_88 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 11719 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = dram[pointer + 0 - 11719 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_89 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 14063 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = dram[pointer + 0 - 14063 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_90 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 0 - 15705 & 16383] / 2) + dram[pointer + 0 - 7853 & 16383] + Math.trunc(dram[pointer + 330 - 41 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 330 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 330 - 41 & 16383] + Math.trunc(dram[pointer + 287 - 195 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 287 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 287 - 195 & 16383] + Math.trunc(dram[pointer + 90 - 63 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 90 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 90 - 63 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = -Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 15705 & 16383] / 2) + dram[pointer + 0 - 7853 & 16383] + Math.trunc(dram[pointer + 677 - 49 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 677 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 677 - 49 & 16383] + Math.trunc(dram[pointer + 626 - 114 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 626 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 626 - 114 & 16383] + Math.trunc(dram[pointer + 510 - 178 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 510 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 510 - 178 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = -Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_91 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 5460 & 16383] + Math.trunc(dram[pointer + 0 - 16378 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(tmp_5 * 21 / 32);
  Acc = Acc << 16 >> 16;
  tmp_5 = -Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = dram[pointer + 0 - 10919 & 16383] + Math.trunc(dram[pointer + 0 - 16378 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(tmp_3 * 21 / 32);
  Acc = Acc << 16 >> 16;
  tmp_3 = -Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_92 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 0 - 13998 & 16383] / 128) + Math.trunc(dram[pointer + 0 - 13968 & 16383] / 128) + Math.trunc(dram[pointer + 0 - 13955 & 16383] / 128) + Math.trunc(dram[pointer + 0 - 13957 & 16383] / 128) + Math.trunc(dram[pointer + 0 - 13815 & 16383] / 128) + Math.trunc(-dram[pointer + 0 - 13819 & 16383] / 64) + Math.trunc(-dram[pointer + 0 - 13749 & 16383] / 64) + Math.trunc(-dram[pointer + 0 - 13756 & 16383] / 64) + Math.trunc(-dram[pointer + 0 - 13676 & 16383] / 64) + Math.trunc(dram[pointer + 0 - 13552 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 13319 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 13185 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 12927 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 12656 & 16383] / 32) + Math.trunc(-dram[pointer + 0 - 12338 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 11919 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 11361 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 10683 & 16383] / 16) + Math.trunc(dram[pointer + 0 - 9835 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 8775 & 16383] / 8) + Math.trunc(-dram[pointer + 0 - 9450 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 5194 & 16383] / 4) + Math.trunc(dram[pointer + 0 - 4501 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 2724 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 781 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_3 = -Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 13986 & 16383] / 128) + Math.trunc(dram[pointer + 0 - 13919 & 16383] / 128) + Math.trunc(dram[pointer + 0 - 13918 & 16383] / 128) + Math.trunc(dram[pointer + 0 - 13972 & 16383] / 128) + Math.trunc(dram[pointer + 0 - 13807 & 16383] / 128) + Math.trunc(dram[pointer + 0 - 13854 & 16383] / 128) + Math.trunc(-dram[pointer + 0 - 13727 & 16383] / 64) + Math.trunc(-dram[pointer + 0 - 13619 & 16383] / 64) + Math.trunc(-dram[pointer + 0 - 13519 & 16383] / 64) + Math.trunc(dram[pointer + 0 - 13457 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 13289 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 13071 & 16383] / 32) + Math.trunc(-dram[pointer + 0 - 12727 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 12449 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 12016 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 11571 & 16383] / 16) + Math.trunc(dram[pointer + 0 - 10981 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 10160 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 9145 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 8913 & 16383] / 8) + Math.trunc(-dram[pointer + 0 - 6873 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 4048 & 16383] / 4) + Math.trunc(dram[pointer + 0 - 3041 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 1121 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  tmp_5 = -Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_93 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(dram[pointer + 12 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 2298 - 67 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2298 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2298 - 67 & 16383] + Math.trunc(dram[pointer + 2229 - 121 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 2229 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 2229 - 121 & 16383] + dram[pointer + 0 - 14e3 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = -Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 10 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 1931 - 45 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1931 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 1931 - 45 & 16383] + Math.trunc(dram[pointer + 1884 - 98 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 1884 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 1884 - 98 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = -Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 1065 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 1233 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 1555 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 1862 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 3569 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 2443 & 16383] / 32) + Math.trunc(dram[pointer + 0 - 2721 & 16383] / 32) + Math.trunc(-dram[pointer + 0 - 2873 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 2579 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 3451 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 13112 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 3725 & 16383] / 16) + Math.trunc(-dram[pointer + 0 - 3889 & 16383] / 16) + Math.trunc(dram[pointer + 0 - 4152 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 4492 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 6035 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 12345 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 11111 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 5235 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 5534 & 16383] / 8) + Math.trunc(-dram[pointer + 0 - 5759 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 5034 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 10211 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 9123 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 12781 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 5421 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 6534 & 16383] / 4) + Math.trunc(dram[pointer + 0 - 6859 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 7126 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 8565 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 7736 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 9215 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 8146 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 10 & 16383] = -Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
  Acc = Math.trunc(dram[pointer + 0 - 5759 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 5837 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 5034 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 6159 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 5421 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 6446 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 6534 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 6782 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 6859 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 7039 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 7126 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 7221 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 8565 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 7534 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 7736 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 7891 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 9215 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 8146 & 16383] / 8) + Math.trunc(dram[pointer + 0 - 8278 & 16383] / 8) + Math.trunc(-dram[pointer + 0 - 8447 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 7439 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 8700 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 8885 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 9012 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 9171 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 8034 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 9449 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 9513 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 9765 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 9867 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 10046 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 10110 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 10285 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 12074 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 10578 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 10734 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 11715 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 11023 & 16383] / 4) + Math.trunc(-dram[pointer + 0 - 11185 & 16383] / 4) + Math.trunc(dram[pointer + 0 - 11254 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 11479 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 11546 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 10815 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 11847 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 10428 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 12112 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 12279 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 12415 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 12516 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 12746 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 12815 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 13046 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 13217 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 13378 & 16383] / 2) + Math.trunc(dram[pointer + 0 - 13534 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 12 & 16383] = -Acc;
};
var midiverb2_effect_94 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 1 & 16383] + Math.trunc(dram[pointer + 5 - 1 & 16383] / 2) + Math.trunc(dram[pointer + 16381 - 34 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16381 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16381 - 34 & 16383] + Math.trunc(dram[pointer + 16345 - 45 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16345 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16345 - 45 & 16383] + Math.trunc(dram[pointer + 16298 - 67 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16298 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16298 - 67 & 16383] + Math.trunc(dram[pointer + 16229 - 89 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16229 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16229 - 89 & 16383] + Math.trunc(dram[pointer + 16138 - 101 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16138 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16138 - 101 & 16383] + Math.trunc(dram[pointer + 16035 - 120 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16035 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16035 - 120 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = -Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = tmp_3;
  Acc = Acc << 16 >> 16;
  dram[pointer + 5 & 16383] = -Acc;
  out[0] = dram[pointer + 5 - 0 & 16383];
  out[1] = tmp_3;
};
var midiverb2_effect_95 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 0 - 150 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = dram[pointer + 0 - 300 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_96 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = Math.trunc(-dram[pointer + 14261 - 1 & 16383] / 4) + dram[pointer + 14264 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = -Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = Math.trunc(-dram[pointer + 14264 - 1 & 16383] / 4) + dram[pointer + 14261 - 1 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = -Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = Math.trunc(dram[pointer + 0 - 3 & 16383] * 3 / 2) + Math.trunc(dram[pointer + 16089 - 15 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16089 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16089 - 15 & 16383] + Math.trunc(dram[pointer + 16072 - 22 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16072 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16072 - 22 & 16383] + Math.trunc(dram[pointer + 16048 - 29 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16048 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16048 - 29 & 16383] + Math.trunc(dram[pointer + 16017 - 45 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16017 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 16017 - 45 & 16383] + Math.trunc(dram[pointer + 15970 - 61 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15970 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15970 - 61 & 16383] + Math.trunc(dram[pointer + 14997 - 105 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14997 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14997 - 105 & 16383] + Math.trunc(dram[pointer + 14890 - 149 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14890 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14890 - 149 & 16383] + Math.trunc(dram[pointer + 14739 - 213 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14739 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14739 - 213 & 16383] + Math.trunc(dram[pointer + 14524 - 258 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 14524 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 14524 - 258 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 14264 & 16383] = -Acc;
  Acc = Math.trunc(dram[pointer + 0 - 3 & 16383] * 3 / 2) + Math.trunc(dram[pointer + 15210 - 17 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15210 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15210 - 17 & 16383] + Math.trunc(dram[pointer + 15191 - 25 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15191 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15191 - 25 & 16383] + Math.trunc(dram[pointer + 15164 - 35 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15164 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15164 - 35 & 16383] + Math.trunc(dram[pointer + 15127 - 52 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15127 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15127 - 52 & 16383] + Math.trunc(dram[pointer + 15073 - 74 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15073 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15073 - 74 & 16383] + Math.trunc(dram[pointer + 15907 - 88 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15907 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15907 - 88 & 16383] + Math.trunc(dram[pointer + 15817 - 123 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15817 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15817 - 123 & 16383] + Math.trunc(dram[pointer + 15692 - 174 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15692 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15692 - 174 & 16383] + Math.trunc(dram[pointer + 15516 - 304 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 15516 & 16383] = -Acc;
  Acc = Math.trunc(-Acc / 2) + dram[pointer + 15516 - 304 & 16383];
  Acc = Acc << 16 >> 16;
  dram[pointer + 14261 & 16383] = -Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_97 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 16380 - 5859 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = -Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = dram[pointer + 16380 - 5859 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = -Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = dram[pointer + 0 - 2 & 16383] + Math.trunc(dram[pointer + 16380 - 5859 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16380 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_98 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 16380 - 8789 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = -Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = dram[pointer + 16380 - 8789 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = -Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = dram[pointer + 0 - 2 & 16383] + Math.trunc(dram[pointer + 16380 - 8789 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16380 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2_effect_99 = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
  dram[pointer + 0 & 16383] = input;
  Acc = dram[pointer + 16380 - 11718 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_3 = -Acc;
  tmp_3 = tmp_3 << 16 >> 16;
  Acc = dram[pointer + 16380 - 11718 & 16383];
  Acc = Acc << 16 >> 16;
  tmp_5 = -Acc;
  tmp_5 = tmp_5 << 16 >> 16;
  Acc = dram[pointer + 0 - 2 & 16383] + Math.trunc(dram[pointer + 16380 - 11718 & 16383] / 2);
  Acc = Acc << 16 >> 16;
  dram[pointer + 16380 & 16383] = Acc;
  out[0] = tmp_5;
  out[1] = tmp_3;
};
var midiverb2GeneratedEffects = [
  midiverb2_effect_0,
  midiverb2_effect_1,
  midiverb2_effect_2,
  midiverb2_effect_3,
  midiverb2_effect_4,
  midiverb2_effect_5,
  midiverb2_effect_6,
  midiverb2_effect_7,
  midiverb2_effect_8,
  midiverb2_effect_9,
  midiverb2_effect_10,
  midiverb2_effect_11,
  midiverb2_effect_12,
  midiverb2_effect_13,
  midiverb2_effect_14,
  midiverb2_effect_15,
  midiverb2_effect_16,
  midiverb2_effect_17,
  midiverb2_effect_18,
  midiverb2_effect_19,
  midiverb2_effect_20,
  midiverb2_effect_21,
  midiverb2_effect_22,
  midiverb2_effect_23,
  midiverb2_effect_24,
  midiverb2_effect_25,
  midiverb2_effect_26,
  midiverb2_effect_27,
  midiverb2_effect_28,
  midiverb2_effect_29,
  midiverb2_effect_30,
  midiverb2_effect_31,
  midiverb2_effect_32,
  midiverb2_effect_33,
  midiverb2_effect_34,
  midiverb2_effect_35,
  midiverb2_effect_36,
  midiverb2_effect_37,
  midiverb2_effect_38,
  midiverb2_effect_39,
  midiverb2_effect_40,
  midiverb2_effect_41,
  midiverb2_effect_42,
  midiverb2_effect_43,
  midiverb2_effect_44,
  midiverb2_effect_45,
  midiverb2_effect_46,
  midiverb2_effect_47,
  midiverb2_effect_48,
  midiverb2_effect_49,
  midiverb2_effect_50,
  midiverb2_effect_51,
  midiverb2_effect_52,
  midiverb2_effect_53,
  midiverb2_effect_54,
  midiverb2_effect_55,
  midiverb2_effect_56,
  midiverb2_effect_57,
  midiverb2_effect_58,
  midiverb2_effect_59,
  midiverb2_effect_60,
  midiverb2_effect_61,
  midiverb2_effect_62,
  midiverb2_effect_63,
  midiverb2_effect_64,
  midiverb2_effect_65,
  midiverb2_effect_66,
  midiverb2_effect_67,
  midiverb2_effect_68,
  midiverb2_effect_69,
  midiverb2_effect_70,
  midiverb2_effect_71,
  midiverb2_effect_72,
  midiverb2_effect_73,
  midiverb2_effect_74,
  midiverb2_effect_75,
  midiverb2_effect_76,
  midiverb2_effect_77,
  midiverb2_effect_78,
  midiverb2_effect_79,
  midiverb2_effect_80,
  midiverb2_effect_81,
  midiverb2_effect_82,
  midiverb2_effect_83,
  midiverb2_effect_84,
  midiverb2_effect_85,
  midiverb2_effect_86,
  midiverb2_effect_87,
  midiverb2_effect_88,
  midiverb2_effect_89,
  midiverb2_effect_90,
  midiverb2_effect_91,
  midiverb2_effect_92,
  midiverb2_effect_93,
  midiverb2_effect_94,
  midiverb2_effect_95,
  midiverb2_effect_96,
  midiverb2_effect_97,
  midiverb2_effect_98,
  midiverb2_effect_99
];

// src/dsp/decompiled/midiverb2ProgramNames.ts
var midiverb2ProgramNames = [
  "Defeat",
  "Small Bright .1 Sec",
  "Small Bright .2 Sec",
  "Small Bright .3 Sec",
  "Medium Warm 1.1 Sec",
  "Medium Bright .6 Sec",
  "Large Bright 1.2 Sec",
  "Large Dark 1.0 Sec",
  "Medium Dark .6 Sec",
  "Medium Dark .5 Sec",
  "Medium Bright .6 Sec",
  "Medium Bright .8 Sec",
  "Large Warm 1.0 Sec",
  "Large Warm 1.1 Sec",
  "Medium Dark 1.0 Sec",
  "Medium Bright 1.1 Sec",
  "Medium Bright 1.15 Sec",
  "Large Bright 1.6 Sec",
  "Large Dark 1.7 Sec",
  "Medium Bright 1.65 Sec",
  "Medium Bright 1.9 Sec",
  "Large Warm 2.2 Sec",
  "Large Warm 1.75 Sec",
  "Large Bright 1.45 Sec",
  "Large Dark 2.2 Sec",
  "Large Warm 2.3 Sec",
  "Large Bright 2.4 Sec",
  "Large Bright 2.5 Sec",
  "Xlarge Warm 5.0 Sec",
  "Xlarge Warm 15.0 Sec",
  "Slow Gate 100 Msec",
  "Slow Gate 200 Msec",
  "Slow Gate 250 Msec",
  "Slow Gate 400 Msec",
  "Slow Gate 450 Msec",
  "Fast Gate 150 Msec",
  "Fast Gate 75 Msec",
  "Fast Gate 200 Msec",
  "Fast Gate 100 Msec",
  "Fast Gate 175 Msec",
  "Reverse 400 Msec",
  "Reverse 450 Msec",
  "Reverse 250 Msec",
  "Reverse 200 Msec",
  "Reverse 150 Msec",
  "Bloom 1 8 Sec",
  "Reverse 500 Msec",
  "Reverse Regen. 2 Sec",
  "Reverse Regen. 8 Sec",
  "Bloom 2 7 Sec",
  "Triggered Flange",
  "Flange Pan 1",
  "Flange Pan 2",
  "Triggered Flange 2",
  "Flange Pan 3",
  "Flange Pan 4",
  "Flange Pan 5",
  "Triggered Flange 3",
  "Flange Pan 6",
  "Flange Pan 7",
  "Light Chorus 1",
  "Light Chorus 2",
  "Medium Chorus 1",
  "Medium Chorus 2",
  "Medium Chorus 3",
  "Deep Chorus 1",
  "Deep Chorus 2",
  "Deep Chorus 3",
  "Fast Chorus 1",
  "Fast Chorus 2",
  "35 Msec",
  "55 Msec",
  "75 Msec",
  "115 Msec",
  "140 Msec",
  "155 Msec",
  "160 Msec",
  "170 Msec",
  "175 Msec",
  "180 Msec",
  "185 Msec",
  "195 Msec",
  "205 Msec",
  "210 Msec",
  "220 Msec",
  "240 Msec",
  "250 Msec",
  "275 Msec",
  "375 Msec",
  "460 Msec",
  "2 Tap Ambient",
  "3 Tap Pan",
  "Multitap",
  "Multitap Reverse Pan",
  "Thickener/frozen Flange",
  "Stereo Generation",
  "Stereo Generation Wide",
  "Regenerated Delay 2 Sec",
  "Regenerated Delay 3 Sec",
  "Regenerated Delay 4 Sec"
];
var MIDIVERB2_PROGRAM_COUNT = midiverb2ProgramNames.length;

// src/dsp/decompiled/midiverb2.ts
var MIDIVERB2_EFFECT0_WRITE_ADDRESS = 140;
var MIDIVERB2_EFFECT0_LEFT_READ_OFFSET = 135;
var MIDIVERB2_EFFECT0_RIGHT_READ_OFFSET = 137;
var adaptMidiverb2Effect = (effect) => {
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
      state.lfo2 >>> 0
    );
    state.pointer = state.pointer + DECOMPILED_POINTER_INCREMENT & DECOMPILED_DRAM_MASK;
    output.left = clampToInt16(scratchOut[0]);
    output.right = clampToInt16(scratchOut[1]);
  };
};
var midiverb2Passthrough = (input, out) => {
  out[0] = input;
  out[1] = input;
};
var midiverb2FallbackRunner = adaptMidiverb2Effect(midiverb2Passthrough);
var midiverb2Effect0Defeat = (_input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  out[0] = dram[pointer + MIDIVERB2_EFFECT0_WRITE_ADDRESS - MIDIVERB2_EFFECT0_LEFT_READ_OFFSET & DECOMPILED_DRAM_MASK];
  out[1] = dram[pointer + MIDIVERB2_EFFECT0_WRITE_ADDRESS - MIDIVERB2_EFFECT0_RIGHT_READ_OFFSET & DECOMPILED_DRAM_MASK];
  dram[pointer + MIDIVERB2_EFFECT0_WRITE_ADDRESS & DECOMPILED_DRAM_MASK] = 0;
};
var midiverb2Registry = {
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
  fallback: midiverb2FallbackRunner
};

// src/dsp/decompiled/registry.ts
var registries = {
  MIDIVERB_II: midiverb2Registry,
  MIDIFEX: midifexRegistry
};
function getDecompiledRegistry(family) {
  return registries[family];
}

// src/dsp/BarrVerb.ts
var SVF = class {
  w = 0;
  a = 0;
  b = 0;
  c1 = 0;
  c2 = 0;
  d0 = 0;
  z1 = 0;
  z2 = 0;
  x = 0;
  setFreq(cutoff, q, samplerate) {
    this.z1 = 0;
    this.z2 = 0;
    this.w = 2 * Math.tan(Math.PI * (cutoff / samplerate));
    this.a = this.w / q;
    this.b = this.w * this.w;
    this.c1 = (this.a + this.b) / (1 + this.a * 0.5 + this.b * 0.25);
    this.c2 = this.b / (this.a + this.b);
    this.d0 = this.c1 * this.c2 * 0.25;
  }
  lpStep(inVal) {
    this.x = inVal - this.z1 - this.z2;
    this.z2 += this.c2 * this.z1;
    this.z1 += this.c1 * this.x;
    return this.d0 * this.x + this.z2;
  }
};
var BarrVerb = class _BarrVerb {
  static clampInt16(value) {
    if (value > 32767) return 32767;
    if (value < -32768) return -32768;
    return value | 0;
  }
  f1;
  f2;
  ai = 0;
  li = 0;
  acc = 0;
  ptr = 0;
  // RAM is 16384 int16 (32KB). In JS we use Int16Array for performance
  ram;
  // The active program instructions
  currentProgram;
  sampleRate = 44100;
  engine = "INTERPRETER";
  family = "MIDIVERB_II";
  programIndex = 0;
  decompiledOutput = { left: 0, right: 0 };
  decompiledState;
  lfo1Phase = 0;
  lfo2Phase = 0;
  lfo1Increment = 0;
  lfo2Increment = 0;
  constructor() {
    this.f1 = new SVF();
    this.f2 = new SVF();
    this.ram = new Int16Array(16384);
    this.decompiledState = {
      ram: this.ram,
      pointer: 0,
      lfo1: 0,
      lfo2: 0
    };
    this.currentProgram = new Uint16Array(128);
    this.setSampleRate(44100);
  }
  setSampleRate(sr) {
    this.sampleRate = sr;
    this.f1.setFreq(5916, 0.6572, this.sampleRate);
    this.f2.setFreq(9458, 2.536, this.sampleRate);
    const dspRate = Math.max(1, this.sampleRate * 0.5);
    this.lfo1Increment = 0.35 / dspRate * 4294967296 >>> 0;
    this.lfo2Increment = 0.91 / dspRate * 4294967296 >>> 0;
  }
  setEngine(engine) {
    this.engine = engine;
  }
  setFamily(family) {
    this.family = family;
  }
  /**
   * Loads a 128-word program into the cache.
   * @param rom The full ROM Uint16Array
   * @param programIndex The index of the program (0-63)
   */
  setProgram(rom2, programIndex) {
    this.programIndex = programIndex;
    const safeRomIndex = programIndex & 63;
    const prog_offset = safeRomIndex << 7;
    for (let i = 0; i < 128; i++) {
      this.currentProgram[i] = rom2[prog_offset + i];
    }
  }
  /**
   * Process a stereo block.
   * inputs/outputs are non-interleaved arrays of Float32.
   * Since this is aimed at Web Audio API AudioWorklet,
   * input[0] is Left channel, input[1] is Right channel.
   * output[0] is Left channel, output[1] is Right channel.
   */
  process(inputL, inputR, outputL, outputR) {
    const frames = inputL.length;
    let l_acc = this.acc;
    let l_ptr = this.ptr;
    let l_ai = this.ai;
    let l_li = this.li;
    const l_ram = this.ram;
    const l_prog = this.currentProgram;
    const runDecompiled = this.engine === "DECOMPILED";
    const registry = runDecompiled ? getDecompiledRegistry(this.family) : null;
    const runner = runDecompiled && registry ? registry.programs[this.programIndex] ?? registry.fallback : null;
    const hasDecompiledRunner = runDecompiled && runner !== null;
    const decompiledOutput = this.decompiledOutput;
    const decompiledState = this.decompiledState;
    if (hasDecompiledRunner) {
      decompiledState.pointer = l_ptr;
    }
    let lfo1Phase = this.lfo1Phase >>> 0;
    let lfo2Phase = this.lfo2Phase >>> 0;
    const lfo1Increment = this.lfo1Increment >>> 0;
    const lfo2Increment = this.lfo2Increment >>> 0;
    for (let i = 0; i < frames; i += 2) {
      const mono1 = (inputL[i] + inputR[i]) * 0.5;
      const lp1 = this.f2.lpStep(this.f1.lpStep(mono1));
      if (i + 1 < frames) {
        const mono2 = (inputL[i + 1] + inputR[i + 1]) * 0.5;
        this.f2.lpStep(this.f1.lpStep(mono2));
      }
      const dsp_in = _BarrVerb.clampInt16(lp1 * 2048);
      let out_L = 0;
      let out_R = 0;
      if (hasDecompiledRunner) {
        decompiledOutput.left = 0;
        decompiledOutput.right = 0;
        decompiledState.pointer = l_ptr;
        lfo1Phase = lfo1Phase + lfo1Increment >>> 0;
        lfo2Phase = lfo2Phase + lfo2Increment >>> 0;
        decompiledState.lfo1 = lfo1Phase;
        decompiledState.lfo2 = lfo2Phase;
        runner(dsp_in, decompiledOutput, decompiledState);
        out_L = decompiledOutput.left;
        out_R = decompiledOutput.right;
        l_ptr = decompiledState.pointer & 16383;
      } else {
        for (let step = 0; step < 128; step++) {
          const opcode = l_prog[step];
          const op = opcode & 49152;
          if (op === 0) {
            l_ai = l_ram[l_ptr];
            l_li = l_acc + (l_ai >> 1);
          } else if (op === 16384) {
            l_ai = l_ram[l_ptr];
            l_li = l_ai >> 1;
          } else if (op === 32768) {
            l_ai = l_acc;
            l_ram[l_ptr] = l_ai;
            l_li = l_acc + (l_ai >> 1);
          } else if (op === 49152) {
            l_ai = l_acc;
            l_ram[l_ptr] = -l_ai;
            l_li = -(l_ai >> 1);
          }
          if (l_ai > 2047) l_ai = 2047;
          else if (l_ai < -2047) l_ai = -2047;
          if (step === 0) {
            l_ram[l_ptr] = dsp_in;
          } else if (step === 96) {
            out_R = l_ai;
          } else if (step === 112) {
            out_L = l_ai;
          } else {
            l_acc = l_li;
          }
          l_ptr += opcode & 16383;
          l_ptr &= 16383;
        }
      }
      const final_L = out_L / 2048;
      const final_R = out_R / 2048;
      outputL[i] = final_L;
      outputR[i] = final_R;
      if (i + 1 < frames) {
        outputL[i + 1] = final_L;
        outputR[i + 1] = final_R;
      }
    }
    this.acc = l_acc;
    this.ptr = l_ptr;
    this.ai = l_ai;
    this.li = l_li;
    this.lfo1Phase = lfo1Phase;
    this.lfo2Phase = lfo2Phase;
  }
};

// src/dsp/rom.ts
var rom = new Uint16Array([
  // Program  0, 0x0000
  15928,
  31999,
  15940,
  16186,
  1868,
  32768,
  16388,
  48452,
  32467,
  15899,
  15665,
  2201,
  32768,
  16386,
  49088,
  16446,
  49152,
  65474,
  60,
  16382,
  65387,
  16533,
  4,
  49152,
  65383,
  149,
  16326,
  0,
  16382,
  65332,
  16588,
  64,
  49152,
  65268,
  204,
  16295,
  0,
  16382,
  49152,
  16539,
  49152,
  65381,
  16271,
  0,
  268,
  0,
  49152,
  0,
  0,
  32768,
  32768,
  32778,
  48488,
  32594,
  172,
  65364,
  0,
  16382,
  48889,
  32532,
  234,
  65302,
  0,
  1329,
  46873,
  18663,
  14106,
  49151,
  16384,
  2289,
  0,
  15981,
  47997,
  32629,
  137,
  65399,
  0,
  16382,
  48855,
  32481,
  285,
  65251,
  0,
  2273,
  46870,
  18666,
  14103,
  49151,
  16384,
  2292,
  0,
  15043,
  34099,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program  1, 0x0100
  15928,
  31999,
  15940,
  16186,
  1868,
  32768,
  16388,
  48452,
  32467,
  15899,
  15665,
  2201,
  32768,
  16386,
  46874,
  18658,
  14111,
  34981,
  16446,
  49152,
  65474,
  14170,
  2272,
  65387,
  16533,
  4,
  49152,
  65383,
  149,
  16326,
  0,
  16382,
  65332,
  16588,
  64,
  49152,
  65268,
  204,
  16295,
  0,
  16382,
  49152,
  16539,
  49152,
  65381,
  16271,
  0,
  268,
  0,
  49152,
  0,
  0,
  32768,
  32768,
  32778,
  48488,
  32594,
  172,
  65364,
  0,
  16382,
  48889,
  32532,
  234,
  65302,
  0,
  1329,
  46873,
  18663,
  14106,
  49151,
  16384,
  2289,
  0,
  15981,
  47997,
  32629,
  137,
  65399,
  0,
  16382,
  48855,
  32481,
  285,
  65251,
  0,
  2273,
  46870,
  18666,
  14103,
  49151,
  16384,
  2292,
  0,
  15043,
  34103,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program  2, 0x0200
  15748,
  31599,
  15440,
  15786,
  3348,
  32768,
  16388,
  48272,
  32067,
  15399,
  15265,
  3681,
  32768,
  16386,
  49088,
  16446,
  49152,
  65474,
  60,
  16382,
  65387,
  16533,
  4,
  49152,
  65383,
  149,
  16326,
  0,
  16382,
  65262,
  16658,
  64,
  49152,
  65198,
  274,
  16295,
  0,
  16382,
  49152,
  16539,
  49152,
  65381,
  16201,
  0,
  338,
  0,
  49152,
  0,
  0,
  32768,
  32768,
  32778,
  48108,
  32394,
  372,
  65164,
  0,
  16382,
  48589,
  18357,
  63127,
  434,
  65102,
  0,
  2409,
  44893,
  20643,
  12126,
  49151,
  16384,
  4269,
  0,
  15801,
  46897,
  32429,
  337,
  65199,
  0,
  16382,
  48555,
  20150,
  61283,
  485,
  65051,
  0,
  4253,
  44890,
  20646,
  12123,
  49151,
  16384,
  4272,
  0,
  13963,
  35179,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program  3, 0x0300
  15928,
  31699,
  15740,
  15786,
  2768,
  32768,
  16388,
  48452,
  32167,
  15699,
  15265,
  3101,
  32768,
  16386,
  49088,
  16446,
  49152,
  65474,
  60,
  16382,
  65387,
  16533,
  4,
  49152,
  65383,
  149,
  16326,
  0,
  16382,
  65342,
  16578,
  64,
  49152,
  65278,
  194,
  16295,
  0,
  16382,
  49152,
  16539,
  49152,
  65381,
  16281,
  0,
  258,
  0,
  49152,
  0,
  0,
  32768,
  32768,
  32778,
  48288,
  32494,
  272,
  65264,
  0,
  16382,
  48689,
  32532,
  234,
  65302,
  0,
  1829,
  45773,
  19763,
  13006,
  49151,
  16384,
  3389,
  0,
  15981,
  47297,
  32429,
  337,
  65199,
  0,
  16382,
  48755,
  32381,
  385,
  65151,
  0,
  3373,
  45770,
  19766,
  13003,
  49151,
  16384,
  3392,
  0,
  14543,
  34599,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program  4, 0x0400
  15914,
  31799,
  15440,
  15786,
  2982,
  32768,
  16388,
  48438,
  32067,
  15599,
  15565,
  3015,
  32768,
  16386,
  45460,
  20072,
  12697,
  36395,
  16446,
  49152,
  65474,
  12756,
  3686,
  65387,
  16533,
  4,
  49152,
  65383,
  149,
  16326,
  0,
  16382,
  65342,
  16578,
  64,
  49152,
  65278,
  194,
  16295,
  0,
  16382,
  49152,
  16539,
  49152,
  65381,
  16281,
  0,
  258,
  0,
  49152,
  0,
  0,
  32768,
  32768,
  32778,
  48274,
  32394,
  372,
  65164,
  0,
  16382,
  48789,
  32332,
  434,
  65102,
  0,
  2043,
  45459,
  20077,
  12692,
  49151,
  16384,
  3703,
  0,
  15967,
  47097,
  32429,
  337,
  65199,
  0,
  16382,
  48755,
  32281,
  485,
  65051,
  0,
  3687,
  45456,
  20080,
  12689,
  49151,
  16384,
  3706,
  0,
  14329,
  34817,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program  5, 0x0500
  15748,
  31599,
  15440,
  15786,
  3348,
  32768,
  16388,
  48272,
  32067,
  15399,
  15265,
  3681,
  32768,
  16386,
  49088,
  16446,
  49152,
  65474,
  60,
  16382,
  65387,
  16533,
  4,
  49152,
  65383,
  149,
  16326,
  0,
  16382,
  65262,
  16658,
  64,
  49152,
  65198,
  274,
  16295,
  0,
  16382,
  49152,
  16539,
  49152,
  65381,
  16201,
  0,
  338,
  0,
  49152,
  0,
  0,
  32768,
  32768,
  32778,
  48108,
  32394,
  372,
  65164,
  0,
  16382,
  48589,
  32332,
  434,
  65102,
  0,
  2409,
  44893,
  20643,
  12126,
  49151,
  16384,
  4269,
  0,
  15801,
  46897,
  32429,
  337,
  65199,
  0,
  16382,
  48555,
  32281,
  485,
  65051,
  0,
  4253,
  44890,
  20646,
  12123,
  49151,
  16384,
  4272,
  0,
  13963,
  35179,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program  6, 0x0600
  15748,
  31599,
  15440,
  15786,
  3352,
  49152,
  64656,
  32067,
  15399,
  15265,
  3683,
  49152,
  61278,
  20638,
  12131,
  36961,
  16446,
  49152,
  65474,
  12190,
  4252,
  65387,
  16533,
  4,
  49152,
  65383,
  149,
  16326,
  0,
  16382,
  65262,
  16658,
  64,
  49152,
  65198,
  274,
  16295,
  0,
  16382,
  49152,
  16539,
  49152,
  65381,
  16201,
  0,
  338,
  0,
  49152,
  0,
  0,
  32768,
  32768,
  32778,
  48108,
  32394,
  372,
  65164,
  0,
  16382,
  48589,
  32332,
  434,
  65102,
  0,
  2409,
  44893,
  20643,
  12126,
  49151,
  16384,
  4269,
  0,
  15801,
  46897,
  32429,
  337,
  65199,
  0,
  16382,
  48555,
  32281,
  485,
  65051,
  0,
  4253,
  44890,
  20646,
  12123,
  49151,
  16384,
  4272,
  0,
  13963,
  35179,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program  7, 0x0700
  15581,
  31259,
  13962,
  4556,
  179,
  32768,
  16388,
  48005,
  31927,
  13821,
  4035,
  512,
  32768,
  16386,
  49088,
  16446,
  49152,
  65474,
  60,
  16382,
  65387,
  16533,
  4,
  49152,
  65383,
  149,
  16326,
  0,
  16382,
  65262,
  16658,
  64,
  49152,
  65198,
  274,
  16295,
  0,
  16382,
  49152,
  16539,
  49152,
  65381,
  16201,
  0,
  338,
  0,
  49152,
  0,
  0,
  32768,
  32768,
  32778,
  47801,
  32294,
  472,
  65064,
  0,
  16382,
  48469,
  32132,
  634,
  64902,
  0,
  3136,
  32768,
  43496,
  22046,
  59874,
  5656,
  10729,
  49151,
  16384,
  5666,
  0,
  15634,
  46137,
  32129,
  637,
  64899,
  0,
  16382,
  48555,
  32111,
  655,
  64881,
  0,
  5650,
  32768,
  43493,
  22049,
  59871,
  5659,
  10726,
  49151,
  16384,
  5663,
  6,
  0,
  13236,
  35906,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program  8, 0x0800
  14199,
  29352,
  11537,
  10104,
  349,
  49152,
  62666,
  30677,
  11269,
  9049,
  1025,
  49152,
  52890,
  28927,
  3842,
  45210,
  16585,
  49152,
  65335,
  3941,
  12541,
  65238,
  16682,
  103,
  49152,
  65135,
  298,
  16286,
  0,
  16382,
  64969,
  16951,
  203,
  49152,
  64766,
  567,
  16186,
  0,
  16382,
  49152,
  16787,
  49152,
  65133,
  16017,
  0,
  15093,
  789,
  64747,
  0,
  2061,
  32768,
  32768,
  32778,
  45876,
  19650,
  60923,
  1345,
  64191,
  0,
  16382,
  47783,
  22368,
  58261,
  1289,
  64247,
  0,
  7275,
  32768,
  36505,
  29037,
  52883,
  12647,
  3738,
  49151,
  16384,
  12657,
  0,
  14311,
  42904,
  24695,
  55767,
  1456,
  64080,
  0,
  16382,
  47669,
  27638,
  52895,
  1385,
  64151,
  0,
  12641,
  32768,
  36502,
  29040,
  65534,
  3730,
  12650,
  3735,
  49151,
  16384,
  12660,
  0,
  9097,
  40045,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program  9, 0x0900
  14199,
  29352,
  11537,
  10104,
  349,
  49152,
  62966,
  30377,
  11269,
  9049,
  1025,
  49152,
  52890,
  29028,
  49051,
  3842,
  45210,
  16585,
  49152,
  65335,
  3941,
  12541,
  65238,
  16682,
  103,
  49152,
  65135,
  298,
  16286,
  0,
  16382,
  64969,
  16951,
  203,
  49152,
  64766,
  567,
  16186,
  0,
  16382,
  49152,
  16787,
  49152,
  65133,
  16017,
  0,
  15093,
  789,
  64747,
  0,
  2061,
  32768,
  32768,
  32778,
  45876,
  19650,
  60923,
  1345,
  64191,
  0,
  16382,
  47783,
  22368,
  58261,
  1289,
  64247,
  0,
  7275,
  32768,
  36505,
  29037,
  52883,
  12647,
  3738,
  49151,
  16384,
  12657,
  0,
  14311,
  42904,
  24695,
  55767,
  1456,
  64080,
  0,
  16382,
  47669,
  27638,
  52895,
  1385,
  64151,
  0,
  12641,
  32768,
  36502,
  29038,
  2,
  52880,
  12650,
  3735,
  49151,
  16384,
  12660,
  0,
  9097,
  40045,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 10, 0x0a00
  15581,
  31159,
  13862,
  4756,
  183,
  49152,
  64389,
  31827,
  13721,
  4235,
  514,
  49152,
  65472,
  16446,
  49152,
  65474,
  60,
  16382,
  65387,
  16533,
  4,
  49152,
  65383,
  149,
  16326,
  0,
  16382,
  65262,
  16658,
  64,
  49152,
  65198,
  274,
  16295,
  0,
  16382,
  49152,
  16539,
  49152,
  65381,
  16201,
  0,
  338,
  0,
  49152,
  0,
  0,
  32768,
  32768,
  32778,
  47701,
  17825,
  49152,
  64095,
  15910,
  472,
  65064,
  0,
  16382,
  48369,
  19084,
  49152,
  62836,
  15748,
  634,
  64902,
  0,
  3336,
  32768,
  43326,
  22216,
  59704,
  5826,
  10559,
  49151,
  16384,
  5836,
  0,
  15634,
  45937,
  20339,
  49152,
  61581,
  15745,
  637,
  64899,
  0,
  16382,
  48585,
  21547,
  49152,
  60373,
  15727,
  655,
  64881,
  5824,
  10560,
  5820,
  32768,
  43323,
  22219,
  59701,
  5829,
  10556,
  49151,
  16384,
  5839,
  0,
  13036,
  36106,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 11, 0x0b00
  13220,
  27778,
  12387,
  12152,
  32768,
  16386,
  45205,
  29259,
  12218,
  11620,
  32768,
  16388,
  49146,
  17147,
  1,
  49151,
  32008,
  32768,
  32768,
  32768,
  48826,
  321,
  65215,
  0,
  15951,
  431,
  65105,
  0,
  15514,
  868,
  64668,
  0,
  15262,
  1120,
  64416,
  0,
  16148,
  234,
  65302,
  0,
  16228,
  154,
  65382,
  0,
  3143,
  44583,
  20952,
  58974,
  1992,
  63544,
  0,
  7320,
  1,
  32768,
  16384,
  9061,
  47142,
  24958,
  54589,
  2371,
  63165,
  0,
  16382,
  47095,
  29390,
  49916,
  2612,
  62924,
  0,
  15621,
  0,
  13239,
  35912,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 12, 0x0c00
  15721,
  31459,
  14392,
  3786,
  183,
  49152,
  64529,
  32127,
  14251,
  3265,
  514,
  49152,
  60651,
  21265,
  11504,
  37588,
  16446,
  49152,
  65474,
  11563,
  4879,
  65387,
  16533,
  4,
  49152,
  65383,
  149,
  16326,
  0,
  16382,
  65262,
  16658,
  64,
  49152,
  65198,
  274,
  16295,
  0,
  16382,
  49152,
  16539,
  49152,
  65381,
  16201,
  0,
  338,
  0,
  49152,
  0,
  0,
  32768,
  32768,
  32778,
  48041,
  17485,
  47677,
  372,
  65164,
  0,
  16382,
  48469,
  18544,
  46456,
  534,
  65002,
  0,
  2696,
  32768,
  44266,
  21276,
  60644,
  4886,
  11499,
  49151,
  16384,
  4896,
  0,
  15774,
  46637,
  19499,
  45528,
  507,
  65029,
  0,
  16382,
  48455,
  20707,
  44272,
  555,
  64981,
  0,
  4880,
  32768,
  44263,
  21279,
  65534,
  11491,
  4889,
  11496,
  49151,
  16384,
  4899,
  0,
  13676,
  35466,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 13, 0x0d00
  14113,
  29552,
  11717,
  9810,
  345,
  32768,
  16388,
  46196,
  30877,
  11449,
  8755,
  1023,
  32768,
  16386,
  36600,
  28833,
  3936,
  45116,
  16585,
  49152,
  65335,
  4035,
  12447,
  65238,
  16682,
  103,
  49152,
  65135,
  298,
  16286,
  0,
  16382,
  64969,
  16951,
  203,
  49152,
  64766,
  567,
  16186,
  0,
  16382,
  49152,
  16787,
  49152,
  65133,
  16017,
  0,
  15007,
  875,
  64661,
  0,
  2147,
  32768,
  32768,
  32778,
  45790,
  31621,
  1145,
  64391,
  0,
  16382,
  47583,
  31427,
  1339,
  64197,
  0,
  7411,
  32768,
  36599,
  28943,
  52977,
  12553,
  3832,
  49151,
  16384,
  12563,
  0,
  14225,
  42884,
  31710,
  1056,
  64480,
  0,
  16382,
  47469,
  31381,
  1385,
  64151,
  0,
  12547,
  32768,
  36596,
  28946,
  52974,
  12556,
  4,
  3825,
  49151,
  16384,
  12566,
  0,
  8961,
  40181,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 14, 0x0e00
  13732,
  29352,
  10837,
  11271,
  349,
  49152,
  62199,
  30677,
  10569,
  10216,
  1025,
  49152,
  65333,
  16585,
  49152,
  65335,
  100,
  16382,
  65238,
  16682,
  103,
  49152,
  65135,
  298,
  16286,
  0,
  16382,
  64969,
  16951,
  203,
  49152,
  64766,
  567,
  16186,
  0,
  16382,
  49152,
  16787,
  49152,
  65133,
  16017,
  0,
  14626,
  1256,
  64280,
  0,
  2528,
  32768,
  32768,
  32778,
  45409,
  16384,
  15037,
  1345,
  64191,
  0,
  16382,
  47583,
  23035,
  57094,
  1789,
  63747,
  0,
  8442,
  32768,
  34438,
  31104,
  50816,
  14714,
  1671,
  49151,
  16384,
  14724,
  0,
  13844,
  42204,
  16384,
  14926,
  1456,
  64080,
  0,
  16382,
  47169,
  29305,
  50828,
  1785,
  63751,
  0,
  14708,
  32768,
  34435,
  31107,
  50813,
  14717,
  1668,
  47488,
  1663,
  16384,
  14727,
  0,
  7930,
  41212,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 15, 0x0f00
  14001,
  29352,
  10837,
  11002,
  349,
  49152,
  62468,
  30677,
  10569,
  9947,
  1025,
  49152,
  51092,
  30725,
  2044,
  47008,
  16585,
  49152,
  65335,
  2144,
  14338,
  65238,
  16682,
  103,
  49152,
  65135,
  298,
  16286,
  0,
  16382,
  64969,
  16951,
  203,
  49152,
  64766,
  567,
  16186,
  0,
  16382,
  49152,
  16787,
  49152,
  65133,
  16017,
  0,
  14895,
  987,
  64549,
  0,
  2259,
  32768,
  32768,
  32778,
  45678,
  19848,
  44341,
  1345,
  64191,
  0,
  16382,
  47583,
  30977,
  1789,
  63747,
  0,
  8173,
  32768,
  34707,
  30835,
  51085,
  14445,
  1940,
  49151,
  16384,
  14455,
  0,
  14113,
  42204,
  25593,
  38485,
  1456,
  64080,
  0,
  16382,
  47169,
  30981,
  1785,
  63751,
  0,
  14439,
  32768,
  34704,
  30838,
  51082,
  14448,
  4,
  1933,
  49151,
  16384,
  14458,
  0,
  8199,
  40943,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 16, 0x1000
  15072,
  29946,
  13831,
  14323,
  8753,
  49152,
  63708,
  31102,
  14152,
  13801,
  8307,
  49152,
  55357,
  26460,
  6309,
  42763,
  16565,
  49152,
  65355,
  6388,
  10074,
  65309,
  16611,
  103,
  49152,
  65206,
  227,
  16306,
  0,
  16382,
  65020,
  16900,
  183,
  49152,
  64837,
  516,
  16237,
  0,
  16382,
  49152,
  16716,
  49152,
  65204,
  16017,
  0,
  699,
  32768,
  32768,
  32778,
  47043,
  18483,
  46006,
  1045,
  64491,
  0,
  16382,
  47883,
  20801,
  43444,
  1289,
  64247,
  0,
  5708,
  32768,
  38972,
  26570,
  55350,
  10180,
  6205,
  49151,
  16384,
  10190,
  0,
  15073,
  43709,
  23128,
  41150,
  1256,
  64280,
  0,
  16382,
  47969,
  25571,
  38978,
  985,
  64551,
  0,
  10174,
  32768,
  38969,
  26573,
  55347,
  10183,
  6202,
  49151,
  26571,
  6197,
  10193,
  0,
  10664,
  38478,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 17, 0x1100
  15072,
  29946,
  13831,
  14323,
  8753,
  49152,
  63708,
  31102,
  14152,
  13801,
  8307,
  49152,
  65353,
  16565,
  49152,
  65355,
  80,
  16382,
  65309,
  16611,
  103,
  49152,
  65206,
  227,
  16306,
  0,
  16382,
  65020,
  16900,
  183,
  49152,
  64837,
  516,
  16237,
  0,
  16382,
  49152,
  16716,
  49152,
  65204,
  16017,
  0,
  699,
  32768,
  32768,
  32778,
  47043,
  18483,
  46006,
  1045,
  64491,
  0,
  16382,
  47883,
  20801,
  43444,
  1289,
  64247,
  0,
  5708,
  32768,
  38972,
  26570,
  55350,
  10180,
  6205,
  49151,
  16384,
  10190,
  0,
  15073,
  43709,
  23128,
  41150,
  1256,
  64280,
  0,
  16382,
  47969,
  25571,
  38978,
  985,
  64551,
  0,
  10174,
  32768,
  38969,
  26573,
  55347,
  10183,
  6202,
  49151,
  16384,
  10193,
  0,
  16378,
  10670,
  38478,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 18, 0x1200
  13582,
  28268,
  12387,
  11302,
  49152,
  61841,
  29859,
  12618,
  10372,
  49152,
  65530,
  18799,
  1,
  49151,
  30356,
  32768,
  32768,
  32768,
  48826,
  321,
  65215,
  0,
  15951,
  431,
  65105,
  0,
  15714,
  668,
  64868,
  0,
  15574,
  808,
  64728,
  0,
  16178,
  204,
  65332,
  0,
  16238,
  144,
  65392,
  0,
  2591,
  44835,
  20700,
  43242,
  1592,
  63944,
  0,
  16382,
  47242,
  24206,
  49152,
  57714,
  14311,
  2071,
  63465,
  0,
  16382,
  47295,
  28138,
  49152,
  53782,
  14170,
  2212,
  63324,
  0,
  13968,
  32768,
  35178,
  30358,
  51562,
  13974,
  2411,
  32768,
  16384,
  13974,
  0,
  13791,
  35360,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 19, 0x1300
  12730,
  27668,
  11987,
  13154,
  49152,
  60989,
  29259,
  12018,
  12424,
  49152,
  65530,
  16747,
  1,
  49151,
  32408,
  32768,
  32768,
  32768,
  48826,
  321,
  65215,
  0,
  15951,
  431,
  65105,
  0,
  15514,
  868,
  64668,
  0,
  14962,
  1420,
  64116,
  0,
  16148,
  234,
  65302,
  0,
  16228,
  154,
  65382,
  0,
  3443,
  43783,
  21752,
  41790,
  1992,
  63544,
  0,
  16382,
  47142,
  30395,
  2371,
  63165,
  0,
  16382,
  47495,
  30154,
  2612,
  62924,
  0,
  16020,
  33126,
  32410,
  359,
  32768,
  16384,
  16026,
  0,
  12939,
  36212,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 20, 0x1400
  13285,
  28978,
  12987,
  10287,
  32768,
  16388,
  45193,
  30334,
  13318,
  9455,
  32768,
  16386,
  49148,
  20112,
  1,
  49151,
  29043,
  32768,
  32768,
  32768,
  48896,
  251,
  65285,
  0,
  15951,
  431,
  65105,
  0,
  15614,
  768,
  64768,
  0,
  15062,
  1320,
  64216,
  0,
  16193,
  189,
  65347,
  0,
  16278,
  104,
  65432,
  0,
  3078,
  44948,
  20587,
  43655,
  1292,
  64244,
  0,
  16382,
  47742,
  30895,
  1871,
  63665,
  0,
  16382,
  47495,
  30554,
  2212,
  63324,
  0,
  12655,
  32768,
  36491,
  29051,
  52869,
  12661,
  3724,
  32768,
  16384,
  12661,
  0,
  13304,
  35847,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 21, 0x1500
  14799,
  30272,
  13982,
  6486,
  49152,
  63948,
  30623,
  14296,
  5823,
  49152,
  65530,
  24948,
  1,
  49151,
  24207,
  32768,
  32768,
  32768,
  48987,
  160,
  65376,
  0,
  16167,
  215,
  65321,
  0,
  15948,
  434,
  65102,
  0,
  15825,
  557,
  64979,
  0,
  16265,
  117,
  65419,
  0,
  16306,
  76,
  65460,
  0,
  1574,
  46864,
  18671,
  49152,
  63249,
  15387,
  995,
  64541,
  0,
  16382,
  48147,
  20675,
  43671,
  1188,
  64348,
  0,
  16382,
  48124,
  22895,
  41333,
  1306,
  64230,
  0,
  7819,
  41327,
  24209,
  8560,
  32768,
  16384,
  7825,
  0,
  14808,
  34343,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 22, 0x1600
  13388,
  28278,
  12587,
  11286,
  49152,
  61682,
  30234,
  12518,
  10256,
  49152,
  65530,
  16387,
  32768,
  32768,
  32768,
  48826,
  321,
  65215,
  0,
  15951,
  431,
  65105,
  0,
  15614,
  768,
  64768,
  0,
  15280,
  1102,
  64434,
  0,
  16148,
  234,
  65302,
  0,
  16278,
  104,
  65432,
  0,
  2975,
  44751,
  20784,
  43158,
  1592,
  63944,
  0,
  16382,
  47342,
  24190,
  55957,
  1771,
  63765,
  0,
  16382,
  46895,
  28222,
  35e3,
  2312,
  63224,
  0,
  14152,
  32768,
  34994,
  30548,
  51372,
  14158,
  2227,
  32768,
  16384,
  14158,
  0,
  13407,
  35744,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 23, 0x1700
  12820,
  28278,
  12587,
  11854,
  49152,
  61114,
  29734,
  13018,
  10824,
  49152,
  65530,
  16387,
  32768,
  32768,
  32768,
  48826,
  321,
  65215,
  0,
  15951,
  431,
  65105,
  0,
  15414,
  968,
  64568,
  0,
  14962,
  1420,
  64116,
  0,
  16148,
  234,
  65302,
  0,
  16228,
  154,
  65382,
  0,
  3543,
  44183,
  21352,
  42590,
  1592,
  63944,
  0,
  16382,
  47342,
  24758,
  39005,
  1771,
  63765,
  0,
  16382,
  46895,
  30454,
  2312,
  63224,
  0,
  14720,
  32768,
  34426,
  31116,
  50804,
  14726,
  1659,
  32768,
  16384,
  14726,
  0,
  12839,
  36312,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 24, 0x1800
  12730,
  27668,
  12187,
  12954,
  49152,
  60989,
  29259,
  12218,
  12224,
  49152,
  65530,
  16747,
  1,
  49151,
  32408,
  32768,
  32768,
  32768,
  48826,
  321,
  65215,
  0,
  15951,
  431,
  65105,
  0,
  15514,
  868,
  64668,
  0,
  14962,
  1420,
  64116,
  0,
  16148,
  234,
  65302,
  0,
  16228,
  154,
  65382,
  0,
  3443,
  43783,
  21752,
  41990,
  1792,
  63744,
  0,
  16382,
  47142,
  30395,
  2371,
  63165,
  0,
  16382,
  47295,
  30154,
  2612,
  62924,
  0,
  16020,
  33126,
  32410,
  359,
  32768,
  16384,
  16026,
  0,
  12939,
  36212,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 25, 0x1900
  12730,
  27668,
  12187,
  12954,
  49152,
  60989,
  29259,
  12218,
  12224,
  49152,
  65530,
  16387,
  32768,
  32768,
  32768,
  48826,
  321,
  65215,
  0,
  15951,
  431,
  65105,
  0,
  15514,
  868,
  64668,
  0,
  14962,
  1420,
  64116,
  0,
  16148,
  234,
  65302,
  0,
  16228,
  154,
  65382,
  0,
  3443,
  43783,
  21752,
  41990,
  1792,
  63744,
  0,
  16382,
  47142,
  30395,
  2371,
  63165,
  0,
  16382,
  47295,
  30154,
  2612,
  62924,
  0,
  16020,
  32768,
  33126,
  32416,
  49504,
  16026,
  359,
  32768,
  16384,
  16026,
  0,
  12939,
  36212,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 26, 0x1a00
  12720,
  28178,
  12087,
  12554,
  49152,
  61014,
  29634,
  12518,
  11524,
  49152,
  65530,
  17347,
  1,
  49151,
  31808,
  32768,
  32768,
  32768,
  48826,
  321,
  65215,
  0,
  15951,
  431,
  65105,
  0,
  15414,
  968,
  64568,
  0,
  14862,
  1520,
  64016,
  0,
  16148,
  234,
  65302,
  0,
  16228,
  154,
  65382,
  0,
  3643,
  43883,
  21652,
  42390,
  1492,
  64044,
  0,
  16382,
  47042,
  30795,
  1971,
  63565,
  0,
  16382,
  46895,
  30454,
  2312,
  63224,
  0,
  15420,
  32768,
  33726,
  31816,
  50104,
  15426,
  959,
  32768,
  16384,
  15426,
  0,
  12739,
  36412,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 27, 0x1b00
  12730,
  28168,
  13187,
  11454,
  49152,
  61289,
  29459,
  11655,
  12287,
  49152,
  65530,
  16387,
  32768,
  32768,
  32768,
  48826,
  321,
  65215,
  0,
  15951,
  431,
  65105,
  0,
  15514,
  868,
  64668,
  0,
  14962,
  1420,
  64116,
  0,
  16148,
  234,
  65302,
  0,
  16228,
  154,
  65382,
  0,
  3443,
  44283,
  21252,
  42490,
  1792,
  63744,
  0,
  16382,
  47142,
  30395,
  2371,
  63165,
  0,
  16382,
  46795,
  30154,
  2612,
  62924,
  0,
  16020,
  32768,
  33126,
  32416,
  49504,
  16026,
  359,
  32768,
  16384,
  16026,
  0,
  12939,
  36212,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 28, 0x1c00
  12620,
  27678,
  12587,
  12654,
  49152,
  61001,
  29447,
  12318,
  11924,
  49152,
  65530,
  17047,
  1,
  49151,
  32108,
  32768,
  32768,
  32768,
  48826,
  321,
  65215,
  0,
  15951,
  431,
  65105,
  0,
  15414,
  968,
  64568,
  0,
  14762,
  1620,
  63916,
  0,
  16148,
  234,
  65302,
  0,
  16228,
  154,
  65382,
  0,
  3743,
  43783,
  21752,
  49152,
  60168,
  5368,
  42190,
  1592,
  63944,
  0,
  16382,
  47142,
  25358,
  37905,
  2271,
  63265,
  0,
  16382,
  46995,
  30454,
  2312,
  63224,
  0,
  15720,
  32768,
  33426,
  32116,
  49804,
  15726,
  659,
  32768,
  16384,
  15726,
  0,
  12639,
  36512,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 29, 0x1d00
  13220,
  27778,
  11587,
  12954,
  49152,
  61589,
  29259,
  12218,
  11624,
  49152,
  65530,
  17147,
  1,
  49151,
  32008,
  32768,
  32768,
  32768,
  48826,
  321,
  65215,
  0,
  15951,
  431,
  65105,
  0,
  15514,
  868,
  64668,
  0,
  15262,
  1120,
  64416,
  0,
  16148,
  234,
  65302,
  0,
  16228,
  154,
  65382,
  0,
  3143,
  44583,
  20952,
  42590,
  1992,
  63544,
  0,
  16382,
  47142,
  24958,
  38205,
  2371,
  63165,
  0,
  16382,
  47095,
  29390,
  49152,
  52530,
  13770,
  2612,
  62924,
  0,
  15620,
  32768,
  33526,
  32016,
  49904,
  15626,
  759,
  32768,
  16384,
  15626,
  0,
  13239,
  35912,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 30, 0x1e00
  12620,
  27278,
  11787,
  13854,
  49152,
  60780,
  29268,
  12118,
  12524,
  49152,
  65530,
  16447,
  1,
  49151,
  32708,
  32768,
  32768,
  32768,
  48826,
  321,
  65215,
  0,
  15951,
  431,
  65105,
  0,
  15414,
  968,
  64568,
  0,
  14762,
  1620,
  63916,
  0,
  16148,
  234,
  65302,
  0,
  16228,
  154,
  65382,
  0,
  3743,
  43783,
  21752,
  49152,
  60168,
  5368,
  41790,
  1992,
  63544,
  0,
  16382,
  47042,
  25858,
  37305,
  2371,
  63165,
  0,
  16382,
  46995,
  30454,
  2312,
  63224,
  0,
  16320,
  32768,
  32826,
  32716,
  49204,
  16326,
  59,
  32768,
  16384,
  16326,
  0,
  12639,
  36512,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 31, 0x1f00
  13220,
  27578,
  11387,
  13354,
  49152,
  61589,
  29059,
  12018,
  12024,
  49152,
  65530,
  16387,
  32768,
  32768,
  32768,
  48826,
  321,
  65215,
  0,
  15951,
  431,
  65105,
  0,
  15514,
  868,
  64668,
  0,
  15262,
  1120,
  64416,
  0,
  16148,
  234,
  65302,
  0,
  16228,
  154,
  65382,
  0,
  3143,
  44383,
  16384,
  14390,
  1992,
  63544,
  0,
  16382,
  47042,
  25258,
  37805,
  2471,
  63065,
  0,
  16382,
  46895,
  30154,
  2612,
  62924,
  0,
  16220,
  32768,
  32926,
  32616,
  49304,
  16226,
  159,
  32768,
  16384,
  16226,
  0,
  13239,
  35912,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 32, 0x2000
  13220,
  27778,
  11587,
  12954,
  49152,
  61589,
  29259,
  12218,
  11624,
  49152,
  65530,
  17147,
  1,
  49151,
  32008,
  32768,
  32768,
  32768,
  48826,
  321,
  65215,
  0,
  15951,
  431,
  65105,
  0,
  15514,
  868,
  64668,
  0,
  15262,
  1120,
  64416,
  0,
  16148,
  234,
  65302,
  0,
  16228,
  154,
  65382,
  0,
  3143,
  44583,
  20952,
  49152,
  60968,
  14390,
  1992,
  63544,
  0,
  16382,
  47142,
  24958,
  38205,
  2371,
  63165,
  0,
  16382,
  47095,
  29390,
  33532,
  2612,
  62924,
  0,
  15620,
  33526,
  32010,
  759,
  32768,
  16384,
  15626,
  0,
  13239,
  35912,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 33, 0x2100
  14356,
  29081,
  13304,
  8798,
  49152,
  63025,
  30062,
  13488,
  8115,
  49152,
  65530,
  16387,
  32768,
  32768,
  32768,
  48926,
  221,
  65315,
  0,
  16081,
  301,
  65235,
  0,
  15893,
  489,
  65047,
  0,
  15661,
  721,
  64815,
  0,
  16211,
  171,
  65365,
  0,
  16293,
  89,
  65447,
  0,
  2007,
  46522,
  19013,
  44829,
  1692,
  63844,
  0,
  16382,
  47842,
  22019,
  49152,
  59901,
  5635,
  41714,
  1801,
  63735,
  0,
  16382,
  47695,
  25281,
  49152,
  32768,
  32768,
  38677,
  1576,
  63960,
  0,
  10475,
  32768,
  38671,
  26871,
  55049,
  10481,
  5904,
  32768,
  16384,
  10481,
  0,
  14375,
  34776,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 34, 0x2200
  12620,
  28078,
  12387,
  12454,
  49152,
  60989,
  29659,
  12818,
  11224,
  49152,
  65530,
  16387,
  32768,
  32768,
  32768,
  48826,
  321,
  65215,
  0,
  15951,
  431,
  65105,
  0,
  15414,
  968,
  64568,
  0,
  14762,
  1620,
  63916,
  0,
  16148,
  234,
  65302,
  0,
  16228,
  154,
  65382,
  0,
  3743,
  43983,
  21552,
  42390,
  1592,
  63944,
  0,
  16382,
  47442,
  24858,
  38605,
  2071,
  63465,
  0,
  16382,
  47195,
  28890,
  49152,
  32768,
  32768,
  34332,
  2312,
  63224,
  0,
  14820,
  32768,
  34326,
  31216,
  50704,
  14826,
  1559,
  32768,
  16384,
  14826,
  0,
  12639,
  36512,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 35, 0x2300
  12620,
  27278,
  11787,
  13854,
  49152,
  60780,
  29268,
  12118,
  12524,
  49152,
  65530,
  16387,
  32768,
  32768,
  32768,
  48826,
  321,
  65215,
  0,
  15951,
  431,
  65105,
  0,
  15414,
  968,
  64568,
  0,
  14762,
  1620,
  63916,
  0,
  16148,
  234,
  65302,
  0,
  16228,
  154,
  65382,
  0,
  3743,
  43783,
  16384,
  14390,
  1992,
  63544,
  0,
  16382,
  47042,
  25858,
  49152,
  56062,
  9474,
  37305,
  2371,
  63165,
  0,
  16382,
  46995,
  30454,
  2312,
  63224,
  0,
  16320,
  32768,
  32826,
  32716,
  49204,
  16326,
  59,
  32768,
  16384,
  16326,
  0,
  12639,
  36512,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 36, 0x2400
  12620,
  27278,
  11787,
  13854,
  49152,
  60780,
  29268,
  12118,
  12524,
  49152,
  65530,
  16447,
  1,
  49151,
  32708,
  32768,
  32768,
  32768,
  48826,
  321,
  65215,
  0,
  15951,
  431,
  65105,
  0,
  15414,
  968,
  64568,
  0,
  14762,
  1620,
  63916,
  0,
  16148,
  234,
  65302,
  0,
  16228,
  154,
  65382,
  0,
  3743,
  43783,
  16384,
  14390,
  1992,
  63544,
  0,
  16382,
  47042,
  25858,
  49152,
  56062,
  9474,
  37305,
  2371,
  63165,
  0,
  16382,
  46995,
  30454,
  2312,
  63224,
  0,
  16320,
  32768,
  32826,
  32716,
  49204,
  16326,
  59,
  32768,
  16384,
  16326,
  0,
  12639,
  36512,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 37, 0x2500
  13420,
  27578,
  11887,
  12654,
  49152,
  61789,
  29059,
  12518,
  11324,
  49152,
  65530,
  17147,
  1,
  49151,
  32008,
  32768,
  32768,
  32768,
  48826,
  321,
  65215,
  0,
  15951,
  431,
  65105,
  0,
  15614,
  768,
  64768,
  0,
  15362,
  1020,
  64516,
  0,
  16148,
  234,
  65302,
  0,
  16228,
  154,
  65382,
  0,
  2943,
  44583,
  20952,
  42590,
  1992,
  63544,
  0,
  16382,
  47442,
  24658,
  38505,
  2371,
  63165,
  0,
  16382,
  46795,
  29390,
  49152,
  32768,
  32768,
  33532,
  2612,
  62924,
  0,
  15620,
  33526,
  32010,
  759,
  32768,
  16384,
  15626,
  0,
  13439,
  35712,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 38, 0x2600
  12620,
  27278,
  11787,
  13854,
  49152,
  60989,
  29059,
  12118,
  12524,
  49152,
  65530,
  16387,
  32768,
  32768,
  32768,
  48826,
  321,
  65215,
  0,
  15951,
  431,
  65105,
  0,
  15414,
  968,
  64568,
  0,
  14762,
  1620,
  63916,
  0,
  16148,
  234,
  65302,
  0,
  16228,
  154,
  65382,
  0,
  3743,
  43783,
  21752,
  49152,
  32768,
  32768,
  41790,
  1992,
  63544,
  0,
  16382,
  47042,
  25858,
  49152,
  32768,
  32768,
  37305,
  2371,
  63165,
  0,
  16382,
  46995,
  30390,
  32832,
  2312,
  63224,
  0,
  16320,
  32768,
  32826,
  32716,
  49204,
  16326,
  59,
  32768,
  16384,
  16326,
  0,
  12639,
  36512,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 39, 0x2700
  12620,
  27278,
  12087,
  13554,
  49152,
  60889,
  29059,
  12318,
  12424,
  49152,
  65530,
  16447,
  1,
  49151,
  32708,
  32768,
  32768,
  32768,
  48826,
  321,
  65215,
  0,
  15951,
  431,
  65105,
  0,
  15414,
  968,
  64568,
  0,
  14762,
  1620,
  63916,
  0,
  16148,
  234,
  65302,
  0,
  16228,
  154,
  65382,
  0,
  3743,
  43783,
  21752,
  41790,
  1992,
  63544,
  0,
  16382,
  47042,
  25858,
  37305,
  2371,
  63165,
  0,
  16382,
  46995,
  30390,
  49152,
  32768,
  32768,
  32832,
  2312,
  63224,
  0,
  16320,
  32768,
  32826,
  32716,
  49204,
  16326,
  59,
  32768,
  16384,
  16326,
  0,
  12639,
  36512,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 40, 0x2800
  12620,
  27278,
  11787,
  13854,
  49152,
  60780,
  29268,
  12118,
  12524,
  49152,
  65530,
  16447,
  1,
  49151,
  32708,
  32768,
  32768,
  32768,
  48826,
  321,
  65215,
  0,
  15951,
  431,
  65105,
  0,
  15414,
  968,
  64568,
  0,
  14762,
  1620,
  63916,
  0,
  16148,
  234,
  65302,
  0,
  16228,
  154,
  65382,
  0,
  3743,
  43783,
  21752,
  49152,
  32768,
  32768,
  41790,
  1992,
  63544,
  0,
  16382,
  47042,
  25858,
  49152,
  56062,
  9474,
  37305,
  2371,
  63165,
  0,
  16382,
  46995,
  30390,
  32832,
  2312,
  63224,
  0,
  16320,
  32826,
  32710,
  59,
  32768,
  16384,
  16326,
  0,
  12639,
  36512,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 41, 0x2900
  12620,
  27278,
  11787,
  13854,
  49152,
  60989,
  29059,
  12118,
  12524,
  49152,
  65530,
  16387,
  32768,
  32768,
  32768,
  48826,
  321,
  65215,
  0,
  15951,
  431,
  65105,
  0,
  15414,
  968,
  64568,
  0,
  14762,
  1620,
  63916,
  0,
  16148,
  234,
  65302,
  0,
  16228,
  154,
  65382,
  0,
  3743,
  43783,
  21752,
  41790,
  1992,
  63544,
  0,
  16382,
  47042,
  25858,
  49152,
  56062,
  9474,
  37305,
  2371,
  63165,
  0,
  16382,
  46995,
  30390,
  49152,
  32768,
  32768,
  32832,
  2312,
  63224,
  0,
  16320,
  32768,
  32826,
  32716,
  49204,
  16326,
  59,
  32768,
  16384,
  16326,
  0,
  12639,
  36512,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 42, 0x2a00
  12620,
  27578,
  11787,
  13554,
  49152,
  60780,
  29568,
  12118,
  12224,
  49152,
  65530,
  16447,
  1,
  49151,
  32708,
  32768,
  32768,
  32768,
  48826,
  321,
  65215,
  0,
  15951,
  431,
  65105,
  0,
  15414,
  968,
  64568,
  0,
  14762,
  1620,
  63916,
  0,
  16148,
  234,
  65302,
  0,
  16228,
  154,
  65382,
  0,
  3743,
  44083,
  16384,
  14390,
  1992,
  63544,
  0,
  16382,
  47042,
  25558,
  49152,
  56362,
  9174,
  37605,
  2371,
  63165,
  0,
  16382,
  46895,
  30190,
  32832,
  2512,
  63024,
  0,
  16320,
  32768,
  32826,
  32716,
  49204,
  16326,
  59,
  32768,
  16384,
  16326,
  0,
  12639,
  36512,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 43, 0x2b00
  12620,
  27278,
  12087,
  13554,
  49152,
  60889,
  29059,
  12318,
  12424,
  49152,
  65530,
  16387,
  32768,
  32768,
  32768,
  48826,
  321,
  65215,
  0,
  15951,
  431,
  65105,
  0,
  15414,
  968,
  64568,
  0,
  14762,
  1620,
  63916,
  0,
  16148,
  234,
  65302,
  0,
  16228,
  154,
  65382,
  0,
  3743,
  43783,
  21752,
  49152,
  60168,
  5368,
  41790,
  1992,
  63544,
  0,
  16382,
  47042,
  25858,
  49152,
  56062,
  9474,
  37305,
  2371,
  63165,
  0,
  16382,
  46995,
  30390,
  49152,
  32768,
  32768,
  32832,
  2312,
  63224,
  0,
  16320,
  32768,
  32826,
  32716,
  49204,
  16326,
  59,
  32768,
  16384,
  16326,
  0,
  12639,
  36512,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 44, 0x2c00
  12620,
  27278,
  11787,
  13854,
  49152,
  60780,
  29268,
  12118,
  12524,
  49152,
  65530,
  16447,
  1,
  49151,
  32708,
  32768,
  32768,
  32768,
  48826,
  321,
  65215,
  0,
  15951,
  431,
  65105,
  0,
  15414,
  968,
  64568,
  0,
  14762,
  1620,
  63916,
  0,
  16148,
  234,
  65302,
  0,
  16228,
  154,
  65382,
  0,
  3743,
  43783,
  21752,
  49152,
  60168,
  5368,
  41790,
  1992,
  63544,
  0,
  16382,
  47042,
  25858,
  49152,
  56062,
  9474,
  37305,
  2371,
  63165,
  0,
  16382,
  46995,
  30390,
  49152,
  32768,
  32768,
  32832,
  2312,
  63224,
  0,
  16320,
  32768,
  32826,
  32716,
  49204,
  16326,
  59,
  32768,
  16384,
  16326,
  0,
  12639,
  36512,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 45, 0x2d00
  12620,
  27278,
  11787,
  13854,
  49152,
  60780,
  29268,
  12118,
  12524,
  49152,
  65530,
  16387,
  32768,
  32768,
  32768,
  48826,
  321,
  65215,
  0,
  15951,
  431,
  65105,
  0,
  15414,
  968,
  64568,
  0,
  14762,
  1620,
  63916,
  0,
  16148,
  234,
  65302,
  0,
  16228,
  154,
  65382,
  0,
  3743,
  43783,
  16384,
  14390,
  1992,
  63544,
  0,
  16382,
  47042,
  25858,
  49152,
  56062,
  9474,
  37305,
  2371,
  63165,
  0,
  16382,
  46995,
  30390,
  49152,
  32768,
  32768,
  32832,
  2312,
  63224,
  0,
  16320,
  32768,
  32829,
  32713,
  49207,
  16323,
  62,
  32768,
  16384,
  16323,
  0,
  12639,
  36512,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 46, 0x2e00
  12620,
  27578,
  11387,
  13954,
  49152,
  60978,
  29070,
  11818,
  12824,
  49152,
  65530,
  16477,
  1,
  49151,
  32678,
  32768,
  32768,
  32768,
  48826,
  321,
  65215,
  0,
  15951,
  431,
  65105,
  0,
  15414,
  968,
  64568,
  0,
  14762,
  1620,
  63916,
  0,
  16148,
  234,
  65302,
  0,
  16228,
  154,
  65382,
  0,
  3743,
  43783,
  16384,
  14390,
  1992,
  63544,
  0,
  16382,
  46942,
  25958,
  49152,
  55962,
  9574,
  37205,
  2371,
  63165,
  0,
  16382,
  47025,
  30460,
  49152,
  32768,
  32768,
  32862,
  2212,
  63324,
  0,
  16290,
  32768,
  32856,
  32686,
  49234,
  16296,
  89,
  32768,
  16384,
  16296,
  0,
  12639,
  36512,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 47, 0x2f00
  12644,
  27878,
  12587,
  12430,
  49152,
  60804,
  29568,
  12618,
  11700,
  49152,
  65530,
  17171,
  1,
  49151,
  31984,
  32768,
  32768,
  32768,
  48826,
  321,
  65215,
  0,
  15951,
  431,
  65105,
  0,
  15414,
  968,
  64568,
  0,
  14762,
  1620,
  63916,
  0,
  16139,
  243,
  65293,
  0,
  16261,
  121,
  65415,
  0,
  3719,
  44107,
  16384,
  14390,
  1992,
  63544,
  0,
  16382,
  47542,
  25034,
  49152,
  56886,
  8650,
  38129,
  2371,
  63165,
  0,
  16382,
  47295,
  29266,
  49152,
  52654,
  12882,
  33556,
  2712,
  62824,
  0,
  15596,
  49934,
  1,
  32768,
  16384,
  15602,
  0,
  12663,
  36488,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 48, 0x3000
  13012,
  27278,
  11787,
  13462,
  49152,
  61172,
  29268,
  12118,
  12132,
  49152,
  65530,
  16387,
  32768,
  32768,
  32768,
  48826,
  321,
  65215,
  0,
  15951,
  431,
  65105,
  0,
  15414,
  968,
  64568,
  0,
  14762,
  1620,
  63916,
  0,
  3351,
  44175,
  16384,
  14390,
  1992,
  63544,
  0,
  16382,
  47042,
  25466,
  49152,
  56454,
  9082,
  37697,
  2371,
  63165,
  0,
  16382,
  46995,
  29998,
  49152,
  51922,
  13614,
  32824,
  2712,
  62824,
  0,
  16328,
  32768,
  32821,
  32721,
  49199,
  16331,
  54,
  32768,
  16384,
  16331,
  0,
  13031,
  36120,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 49, 0x3100
  13012,
  27278,
  11787,
  13462,
  49152,
  61172,
  29268,
  12118,
  12132,
  49152,
  65530,
  16439,
  1,
  49151,
  32716,
  32768,
  32768,
  32768,
  48826,
  321,
  65215,
  0,
  15951,
  431,
  65105,
  0,
  15414,
  968,
  64568,
  0,
  14762,
  1620,
  63916,
  0,
  3351,
  44175,
  16384,
  14390,
  1992,
  63544,
  0,
  16382,
  47042,
  25466,
  49152,
  56454,
  9082,
  37697,
  2371,
  63165,
  0,
  16382,
  46995,
  29998,
  49152,
  51922,
  13614,
  32824,
  2712,
  62824,
  0,
  16328,
  49202,
  1,
  32768,
  16384,
  16334,
  0,
  13031,
  36120,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 50, 0x3200
  9,
  18652,
  21,
  65515,
  0,
  16329,
  53,
  65483,
  0,
  16209,
  173,
  65363,
  0,
  14340,
  32774,
  18388,
  32,
  65504,
  0,
  16307,
  75,
  65461,
  0,
  16249,
  133,
  65403,
  0,
  14588,
  48984,
  32698,
  16205,
  16262,
  16157,
  16270,
  16194,
  16330,
  16270,
  16183,
  16263,
  16197,
  16264,
  16200,
  16281,
  16277,
  16197,
  2454,
  49142,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 51, 0x3300
  9,
  18652,
  21,
  65515,
  0,
  16329,
  53,
  65483,
  0,
  16209,
  173,
  65363,
  0,
  14340,
  32774,
  18388,
  32,
  65504,
  0,
  16307,
  75,
  65461,
  0,
  16249,
  133,
  65403,
  0,
  14588,
  48984,
  32698,
  16205,
  16262,
  16157,
  16270,
  16194,
  16330,
  16270,
  16183,
  16263,
  16197,
  16264,
  16200,
  16281,
  16277,
  16197,
  16248,
  16242,
  16232,
  16221,
  16299,
  16238,
  16200,
  16266,
  3580,
  49142,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 52, 0x3400
  9,
  18652,
  21,
  65515,
  0,
  16329,
  53,
  65483,
  0,
  16209,
  173,
  65363,
  0,
  14340,
  32774,
  18388,
  32,
  65504,
  0,
  16307,
  75,
  65461,
  0,
  16249,
  133,
  65403,
  0,
  14588,
  48984,
  32698,
  16205,
  16262,
  16157,
  16270,
  16194,
  16330,
  16270,
  16183,
  16263,
  16197,
  16264,
  16200,
  16281,
  16277,
  16197,
  16248,
  16242,
  16232,
  16221,
  16299,
  16238,
  16200,
  16266,
  16228,
  16220,
  16239,
  16266,
  16279,
  16149,
  16320,
  4567,
  49142,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 53, 0x3500
  9,
  18652,
  21,
  65515,
  0,
  16329,
  53,
  65483,
  0,
  16209,
  173,
  65363,
  0,
  14340,
  32774,
  18388,
  32,
  65504,
  0,
  16307,
  75,
  65461,
  0,
  16249,
  133,
  65403,
  0,
  14588,
  48984,
  32698,
  16205,
  16262,
  16157,
  16270,
  16194,
  16330,
  16270,
  16183,
  16263,
  16197,
  16264,
  16200,
  16281,
  16277,
  16197,
  16248,
  16242,
  16232,
  16221,
  16299,
  16238,
  16200,
  16266,
  16228,
  16220,
  16239,
  16266,
  16279,
  16149,
  16320,
  16213,
  16262,
  16199,
  16289,
  16278,
  16198,
  16271,
  16159,
  16306,
  5848,
  49142,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 54, 0x3600
  9,
  18652,
  21,
  65515,
  0,
  16329,
  53,
  65483,
  0,
  16209,
  173,
  65363,
  0,
  14340,
  32774,
  18388,
  32,
  65504,
  0,
  16307,
  75,
  65461,
  0,
  16249,
  133,
  65403,
  0,
  14588,
  48984,
  32698,
  16205,
  16262,
  16157,
  16270,
  16194,
  16330,
  16270,
  16183,
  16263,
  16197,
  16264,
  16200,
  16281,
  16277,
  16197,
  16248,
  16242,
  16232,
  16221,
  16299,
  16238,
  16200,
  16266,
  16228,
  16220,
  16239,
  16266,
  16279,
  16149,
  16320,
  16213,
  16262,
  16199,
  16289,
  16278,
  16198,
  16271,
  16159,
  16306,
  16186,
  16260,
  16320,
  16161,
  16296,
  16136,
  16307,
  16204,
  7050,
  49142,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 55, 0x3700
  9,
  18652,
  21,
  65515,
  0,
  16329,
  53,
  65483,
  0,
  16209,
  173,
  65363,
  0,
  14340,
  32774,
  18388,
  32,
  65504,
  0,
  16307,
  75,
  65461,
  0,
  16249,
  133,
  65403,
  0,
  14588,
  48984,
  32698,
  16205,
  16262,
  16157,
  16270,
  16194,
  16330,
  16270,
  16183,
  16263,
  16197,
  16264,
  16200,
  16281,
  16277,
  16197,
  16248,
  16242,
  16232,
  16221,
  16299,
  16238,
  16200,
  16266,
  16228,
  16220,
  16239,
  16266,
  16279,
  16149,
  16320,
  16213,
  16262,
  16199,
  16289,
  16278,
  16198,
  16271,
  16159,
  16306,
  16186,
  16260,
  16320,
  16161,
  16296,
  16136,
  16307,
  16204,
  16297,
  16289,
  16166,
  16289,
  16182,
  16229,
  16241,
  16272,
  16252,
  8289,
  49142,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 56, 0x3800
  9,
  18652,
  21,
  65515,
  0,
  16329,
  53,
  65483,
  0,
  16209,
  173,
  65363,
  0,
  14340,
  32774,
  18388,
  32,
  65504,
  0,
  16307,
  75,
  65461,
  0,
  16249,
  133,
  65403,
  0,
  14588,
  48984,
  32698,
  16205,
  16262,
  16157,
  16270,
  16194,
  16330,
  16270,
  16183,
  16263,
  16197,
  16264,
  16200,
  16281,
  16277,
  16197,
  16248,
  16242,
  16232,
  16221,
  16299,
  16238,
  16200,
  16266,
  16228,
  16220,
  16239,
  16266,
  16279,
  16149,
  16320,
  16213,
  16262,
  16199,
  16289,
  16278,
  16198,
  16271,
  16159,
  16306,
  16186,
  16260,
  16320,
  16161,
  16296,
  16136,
  16307,
  16204,
  16297,
  16289,
  16166,
  16289,
  16182,
  16229,
  16241,
  16272,
  16252,
  16215,
  16266,
  16249,
  16199,
  16257,
  16225,
  16340,
  9226,
  49142,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 57, 0x3900
  9,
  18652,
  21,
  65515,
  0,
  16329,
  53,
  65483,
  0,
  16209,
  173,
  65363,
  0,
  14340,
  32774,
  18388,
  32,
  65504,
  0,
  16307,
  75,
  65461,
  0,
  16249,
  133,
  65403,
  0,
  14588,
  48984,
  32698,
  16205,
  16262,
  16157,
  16270,
  16194,
  16330,
  16270,
  16183,
  16263,
  16197,
  16264,
  16200,
  16281,
  16277,
  16197,
  16248,
  16242,
  16232,
  16221,
  16299,
  16238,
  16200,
  16266,
  16228,
  16220,
  16239,
  16266,
  16279,
  16149,
  16320,
  16213,
  16262,
  16199,
  16289,
  16278,
  16198,
  16271,
  16159,
  16306,
  16186,
  16260,
  16320,
  16161,
  16296,
  16136,
  16307,
  16204,
  16297,
  16289,
  16166,
  16289,
  16182,
  16229,
  16241,
  16272,
  16252,
  16215,
  16266,
  16249,
  16199,
  16257,
  16225,
  16340,
  16150,
  16320,
  9518,
  6614,
  16282,
  16205,
  16320,
  16209,
  16241,
  16234,
  16228,
  16303,
  16176,
  16222,
  16315,
  16159,
  11490,
  49142,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 58, 0x3a00
  9,
  18652,
  21,
  65515,
  0,
  16329,
  53,
  65483,
  0,
  16209,
  173,
  65363,
  0,
  14340,
  32774,
  18388,
  32,
  65504,
  0,
  16307,
  75,
  65461,
  0,
  16249,
  133,
  65403,
  0,
  14588,
  48984,
  32698,
  16205,
  16262,
  16157,
  16270,
  16194,
  16330,
  16270,
  16183,
  16263,
  16197,
  16264,
  16200,
  16281,
  16277,
  16197,
  16248,
  16242,
  16232,
  16221,
  16299,
  16238,
  16200,
  16266,
  16228,
  16220,
  16239,
  16266,
  16279,
  16149,
  16320,
  16213,
  16262,
  16199,
  16289,
  16278,
  16198,
  16271,
  16159,
  16306,
  16186,
  16260,
  16320,
  16161,
  16296,
  16136,
  16307,
  16204,
  16297,
  16289,
  16166,
  16289,
  16182,
  16229,
  16241,
  16272,
  16252,
  16215,
  16266,
  16249,
  16199,
  16257,
  16225,
  16340,
  16150,
  16320,
  9518,
  6614,
  16282,
  16205,
  16320,
  16209,
  16241,
  16234,
  16228,
  16303,
  16176,
  16222,
  16315,
  16159,
  16317,
  16215,
  11718,
  4534,
  16157,
  16346,
  16217,
  16248,
  16283,
  16154,
  16315,
  16153,
  13057,
  49142,
  0,
  0,
  0,
  0,
  0,
  // Program 59, 0x3b00
  9,
  18652,
  21,
  65515,
  0,
  16329,
  53,
  65483,
  0,
  16209,
  173,
  65363,
  0,
  7306,
  0,
  7034,
  32774,
  18388,
  32,
  65504,
  0,
  16307,
  75,
  65461,
  0,
  16249,
  133,
  65403,
  0,
  7552,
  0,
  7036,
  48984,
  32698,
  16205,
  16262,
  16157,
  16270,
  15825,
  315,
  15641,
  1863,
  64470,
  15894,
  16197,
  509,
  15571,
  16281,
  15660,
  430,
  15706,
  400,
  2722,
  63279,
  15604,
  457,
  15696,
  16200,
  16266,
  15461,
  603,
  16239,
  16266,
  15687,
  4850,
  61810,
  15553,
  16213,
  470,
  15607,
  15581,
  602,
  16198,
  15646,
  6160,
  59776,
  630,
  15478,
  501,
  15695,
  16161,
  6457,
  49142,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  16380,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 60, 0x3c00
  9,
  18652,
  21,
  65515,
  0,
  16329,
  53,
  65483,
  0,
  16209,
  173,
  65363,
  0,
  4962,
  0,
  9378,
  32774,
  18388,
  32,
  65504,
  0,
  16307,
  75,
  65461,
  0,
  16249,
  133,
  65403,
  0,
  5208,
  0,
  9380,
  48984,
  32698,
  16205,
  16262,
  16157,
  16270,
  14538,
  1602,
  16270,
  16183,
  15375,
  701,
  16264,
  1863,
  63489,
  16281,
  16277,
  701,
  15360,
  1514,
  14576,
  16221,
  15268,
  885,
  16200,
  15343,
  767,
  3726,
  61646,
  16239,
  913,
  15248,
  688,
  15397,
  16213,
  16262,
  15396,
  708,
  16278,
  16198,
  15646,
  6160,
  59776,
  725,
  15383,
  501,
  15695,
  16161,
  16296,
  14884,
  1175,
  16204,
  15687,
  515,
  16166,
  7440,
  58001,
  408,
  15619,
  1109,
  15020,
  16252,
  16215,
  8452,
  7814,
  16249,
  8711,
  49142,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  16382,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 61, 0x3d00
  9,
  18652,
  21,
  65515,
  0,
  16329,
  53,
  65483,
  0,
  16209,
  173,
  65363,
  0,
  2619,
  0,
  11721,
  32774,
  18388,
  32,
  65504,
  0,
  16307,
  75,
  65461,
  0,
  16249,
  133,
  65403,
  0,
  2865,
  0,
  11723,
  48984,
  32698,
  16205,
  16262,
  16157,
  16270,
  16194,
  16330,
  16270,
  16183,
  15239,
  837,
  16264,
  15210,
  887,
  2150,
  63279,
  16197,
  888,
  15218,
  16232,
  827,
  15309,
  16238,
  16200,
  16266,
  14919,
  1145,
  16239,
  15691,
  470,
  4258,
  61043,
  16320,
  404,
  15687,
  1124,
  14980,
  16278,
  16198,
  16271,
  16159,
  15284,
  824,
  16260,
  16320,
  15481,
  592,
  6535,
  58753,
  945,
  15182,
  593,
  15609,
  16166,
  16289,
  16182,
  16229,
  16241,
  15203,
  937,
  16215,
  16266,
  8570,
  6866,
  628,
  8886,
  56523,
  16225,
  1025,
  15081,
  749,
  15319,
  16282,
  16205,
  16320,
  16209,
  16241,
  16234,
  10581,
  5647,
  16303,
  16176,
  16222,
  16315,
  11265,
  49142,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // Program 62, 0x3e00
  9,
  18652,
  21,
  65515,
  0,
  16329,
  53,
  65483,
  0,
  16209,
  173,
  65363,
  0,
  337,
  0,
  14003,
  32774,
  18388,
  32,
  65504,
  0,
  16307,
  75,
  65461,
  0,
  16249,
  133,
  65403,
  0,
  583,
  0,
  14005,
  48082,
  16330,
  16270,
  16183,
  16263,
  16197,
  16264,
  16200,
  14861,
  1313,
  16197,
  15706,
  400,
  2722,
  62662,
  16221,
  457,
  15696,
  16200,
  1302,
  14808,
  16220,
  16239,
  16266,
  16279,
  16149,
  16320,
  16213,
  16262,
  15198,
  906,
  16278,
  15396,
  689,
  5535,
  59776,
  16306,
  803,
  15259,
  738,
  15359,
  16296,
  16136,
  16307,
  16204,
  16297,
  16289,
  15040,
  1031,
  16182,
  16229,
  15060,
  1069,
  16252,
  8279,
  57088,
  1008,
  15123,
  16199,
  16257,
  16225,
  1137,
  14969,
  9454,
  6866,
  16132,
  16282,
  16205,
  16320,
  16209,
  14595,
  1496,
  16228,
  15403,
  692,
  16222,
  11186,
  54281,
  16159,
  11482,
  4835,
  731,
  15352,
  1419,
  14700,
  16217,
  16248,
  16283,
  16154,
  16315,
  16153,
  16213,
  16223,
  16228,
  13545,
  49142,
  // Program 63, 0x3f00
  16128,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  61471,
  3934,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  64705,
  64134,
  1971,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65405,
  65397
]);

// src/dsp/effects/LFO.ts
var LFO = class _LFO {
  phase = 0;
  phaseInc = 0;
  sampleRate = 44100;
  rate = 1;
  // Simple look-up table (LUT) for a sine wave (256 entries)
  static sineLUT;
  constructor(sampleRate2) {
    this.sampleRate = sampleRate2;
    this.setRate(1);
    if (!_LFO.sineLUT) {
      _LFO.sineLUT = new Float32Array(256);
      for (let i = 0; i < 256; i++) {
        _LFO.sineLUT[i] = Math.sin(i / 256 * Math.PI * 2);
      }
    }
  }
  setRate(rateHz) {
    this.rate = rateHz;
    this.phaseInc = this.rate / this.sampleRate;
  }
  // Returns a value from -1.0 to 1.0
  process() {
    const pos = this.phase * 256;
    const index = Math.floor(pos);
    const frac = pos - index;
    const idx1 = index % 256;
    const idx2 = (index + 1) % 256;
    const val1 = _LFO.sineLUT[idx1];
    const val2 = _LFO.sineLUT[idx2];
    const out = val1 + frac * (val2 - val1);
    this.phase += this.phaseInc;
    if (this.phase >= 1) this.phase -= 1;
    return out;
  }
};

// src/dsp/effects/Chorus.ts
var Chorus = class {
  delayLineL;
  delayLineR;
  writeIndex = 0;
  maxDelaySamples;
  lfo;
  // Parameters
  depthMs = 5;
  // Max sweep depth in ms
  baseDelayMs = 10;
  // Base delay in ms
  mix = 0.5;
  // 0.0 to 1.0
  sampleRate = 44100;
  constructor(sampleRate2) {
    this.sampleRate = sampleRate2;
    this.maxDelaySamples = Math.ceil(sampleRate2 * 0.05);
    this.delayLineL = new Float32Array(this.maxDelaySamples);
    this.delayLineR = new Float32Array(this.maxDelaySamples);
    this.lfo = new LFO(sampleRate2);
    this.lfo.setRate(1);
  }
  setParameters(rate, depth, mix) {
    this.lfo.setRate(rate);
    this.depthMs = depth;
    this.mix = mix;
  }
  process(inL, inR) {
    const lfoVal = this.lfo.process();
    const sweepVal = (lfoVal + 1) * 0.5;
    const currentDelayMs = this.baseDelayMs + sweepVal * this.depthMs;
    const currentDelaySamples = currentDelayMs * (this.sampleRate / 1e3);
    let readPos = this.writeIndex - currentDelaySamples;
    if (readPos < 0) readPos += this.maxDelaySamples;
    const readIdx1 = Math.floor(readPos);
    let readIdx2 = readIdx1 + 1;
    if (readIdx2 >= this.maxDelaySamples) readIdx2 -= this.maxDelaySamples;
    const frac = readPos - readIdx1;
    const dl1 = this.delayLineL[readIdx1];
    const dl2 = this.delayLineL[readIdx2];
    const delayOutL = dl1 + frac * (dl2 - dl1);
    const dr1 = this.delayLineR[readIdx1];
    const dr2 = this.delayLineR[readIdx2];
    const delayOutR = dr1 + frac * (dr2 - dr1);
    this.delayLineL[this.writeIndex] = inL;
    this.delayLineR[this.writeIndex] = inR;
    this.writeIndex++;
    if (this.writeIndex >= this.maxDelaySamples) {
      this.writeIndex = 0;
    }
    const outL = inL * (1 - this.mix) + delayOutL * this.mix;
    const outR = inR * (1 - this.mix) + delayOutR * this.mix;
    return [outL, outR];
  }
};

// src/dsp/effects/Phaser.ts
var AllPassFilter = class {
  a1 = 0;
  z1 = 0;
  setGain(a1) {
    this.a1 = a1;
  }
  process(input) {
    const output = this.z1 - this.a1 * input;
    this.z1 = input + this.a1 * output;
    return output;
  }
};
var Phaser = class {
  stagesL = [];
  stagesR = [];
  lfo;
  sampleRate;
  // Parameters
  rate = 0.5;
  depth = 0.8;
  mix = 0.5;
  feedback = 0.4;
  stagesCount = 4;
  z1FeedbackL = 0;
  z1FeedbackR = 0;
  constructor(sampleRate2) {
    this.sampleRate = sampleRate2;
    this.lfo = new LFO(sampleRate2);
    this.lfo.setRate(this.rate);
    for (let i = 0; i < this.stagesCount; i++) {
      this.stagesL.push(new AllPassFilter());
      this.stagesR.push(new AllPassFilter());
    }
  }
  // Instead of static LUT, we'll use an instance LUT since sampleRate might vary.
  a1LUTLocal = new Float32Array(256);
  lutInitialized = false;
  initLUT() {
    for (let i = 0; i < 256; i++) {
      const fc = 400 + 3600 * (i / 255);
      const w = Math.tan(Math.PI * fc / this.sampleRate);
      this.a1LUTLocal[i] = (1 - w) / (1 + w);
    }
    this.lutInitialized = true;
  }
  setParameters(rate, depth, mix, feedback) {
    this.rate = rate;
    this.depth = depth;
    this.mix = mix;
    this.feedback = feedback;
    this.lfo.setRate(this.rate);
    if (!this.lutInitialized) this.initLUT();
  }
  process(inL, inR) {
    if (!this.lutInitialized) this.initLUT();
    const lfoVal = this.lfo.process();
    const sweepVal = (lfoVal + 1) * 0.5 * this.depth;
    const center = 0.5;
    let normVal = center + (sweepVal - this.depth * 0.5);
    if (normVal < 0) normVal = 0;
    if (normVal > 1) normVal = 1;
    const lutPos = normVal * 255;
    const idx1 = Math.floor(lutPos);
    let idx2 = idx1 + 1;
    if (idx2 > 255) idx2 = 255;
    const frac = lutPos - idx1;
    const a1Val1 = this.a1LUTLocal[idx1];
    const a1Val2 = this.a1LUTLocal[idx2];
    const a1 = a1Val1 + frac * (a1Val2 - a1Val1);
    let stageInL = inL + this.z1FeedbackL * this.feedback;
    let stageInR = inR + this.z1FeedbackR * this.feedback;
    for (let i = 0; i < this.stagesCount; i++) {
      this.stagesL[i].setGain(a1);
      this.stagesR[i].setGain(a1);
      stageInL = this.stagesL[i].process(stageInL);
      stageInR = this.stagesR[i].process(stageInR);
    }
    this.z1FeedbackL = stageInL;
    this.z1FeedbackR = stageInR;
    const outL = inL * (1 - this.mix) + stageInL * this.mix;
    const outR = inR * (1 - this.mix) + stageInR * this.mix;
    return [outL, outR];
  }
};

// src/dsp/effects/ModulationWrapper.ts
var ModulationWrapper = class {
  chorus;
  phaser;
  // Type 0: None, 1: Chorus, 2: Phaser
  type = 0;
  constructor(sampleRate2) {
    this.chorus = new Chorus(sampleRate2);
    this.phaser = new Phaser(sampleRate2);
  }
  setParameters(type, rate, depth, mix, feedback) {
    this.type = type;
    if (type === 1) {
      this.chorus.setParameters(rate, depth, mix);
    } else if (type === 2) {
      this.phaser.setParameters(rate, depth, mix, feedback);
    }
  }
  process(inL, inR) {
    if (this.type === 1) {
      return this.chorus.process(inL, inR);
    } else if (this.type === 2) {
      return this.phaser.process(inL, inR);
    }
    return [inL, inR];
  }
};

// src/audio/worklet.ts
var BarrVerbProcessor = class extends AudioWorkletProcessor {
  reverb;
  mod;
  bypass = false;
  wetMix = 0.5;
  outputGain = 1;
  inputGain = 0.35;
  smoothedInputGain = 0.35;
  wetL;
  wetR;
  inputLBuffer;
  inputRBuffer;
  constructor() {
    super();
    this.reverb = new BarrVerb();
    this.wetL = new Float32Array(128);
    this.wetR = new Float32Array(128);
    this.inputLBuffer = new Float32Array(128);
    this.inputRBuffer = new Float32Array(128);
    this.reverb.setSampleRate(sampleRate);
    this.reverb.setProgram(rom, 0);
    this.mod = new ModulationWrapper(sampleRate);
    this.port.onmessage = (event) => {
      const data = event.data;
      if (data.type === "setProgram") {
        this.reverb.setProgram(rom, data.program);
      } else if (data.type === "setMix") {
        this.wetMix = data.mix;
      } else if (data.type === "setBypass") {
        this.bypass = data.bypass;
      } else if (data.type === "setGain") {
        this.outputGain = data.gain;
      } else if (data.type === "setInputGain") {
        this.inputGain = Math.min(1, Math.max(0.1, data.inputGain));
      } else if (data.type === "setModulation") {
        this.mod.setParameters(data.modType, data.modRate, data.modDepth, data.modMix, data.modFeedback);
      } else if (data.type === "setUnit") {
        this.reverb.setEngine(data.engine);
        this.reverb.setFamily(data.family);
      }
    };
  }
  process(inputs, outputs, _parameters) {
    const input = inputs[0];
    const output = outputs[0];
    if (!input || input.length === 0 || !output || output.length === 0) {
      return true;
    }
    const inputL = input[0];
    if (!inputL) return true;
    const inputR = input.length > 1 && input[1] ? input[1] : inputL;
    const outputL = output[0];
    if (!outputL) return true;
    const outputR = output.length > 1 && output[1] ? output[1] : outputL;
    const frames = inputL.length;
    if (this.bypass) {
      for (let i = 0; i < frames; i++) {
        const inGain = this.smoothedInputGain + (this.inputGain - this.smoothedInputGain) * 0.05;
        this.smoothedInputGain = inGain;
        outputL[i] = inputL[i] * inGain * this.outputGain;
        if (output.length > 1) {
          outputR[i] = inputR[i] * inGain * this.outputGain;
        }
      }
      return true;
    }
    if (this.wetL.length < frames) {
      this.wetL = new Float32Array(frames);
      this.wetR = new Float32Array(frames);
      this.inputLBuffer = new Float32Array(frames);
      this.inputRBuffer = new Float32Array(frames);
    }
    const preL = this.inputLBuffer;
    const preR = this.inputRBuffer;
    for (let i = 0; i < frames; i++) {
      const inGain = this.smoothedInputGain + (this.inputGain - this.smoothedInputGain) * 0.05;
      this.smoothedInputGain = inGain;
      preL[i] = inputL[i] * inGain;
      preR[i] = inputR[i] * inGain;
    }
    this.reverb.process(preL, preR, this.wetL, this.wetR);
    const dryLevel = 1 - this.wetMix;
    const wetLevel = this.wetMix;
    for (let i = 0; i < frames; i++) {
      const [modL, modR] = this.mod.process(this.wetL[i], this.wetR[i]);
      outputL[i] = (preL[i] * dryLevel + modL * wetLevel) * this.outputGain;
      if (output.length > 1) {
        outputR[i] = (preR[i] * dryLevel + modR * wetLevel) * this.outputGain;
      }
    }
    return true;
  }
};
registerProcessor("barrverb-processor", BarrVerbProcessor);
