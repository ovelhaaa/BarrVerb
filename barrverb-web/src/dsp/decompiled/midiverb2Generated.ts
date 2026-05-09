// Generated from decompiled-midiverb2.h
import type { Midiverb2CStyleEffect } from "./midiverb2";

export const midiverb2_effect_0: Midiverb2CStyleEffect = (_input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0;
	out[0] = dram[(pointer + (140) - (135)) & 0x3fff];
	out[1] = dram[(pointer + (140) - (137)) & 0x3fff];
	Acc = 0;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (140)) & 0x3fff] = -Acc;
};

export const midiverb2_effect_1: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (15972) - (12)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (15549) - (234)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (15035) - (252)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (14477) - (378)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (12812) - (169)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (12375) - (199)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (11892) - (423)) & 0x3fff] * 3 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (15972) - (145)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (15549) - (130)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (15035) - (459)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (14477) - (277)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (12812) - (103)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (12375) - (208)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (10744) - (16)) & 0x3fff] * 3 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (16381) - (19)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (0) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16381)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16360) - (45)) & 0x3fff] * 3 / 4) + dram[(pointer + (16381) - (19)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16360)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16313) - (84)) & 0x3fff] * 3 / 4) + dram[(pointer + (16360) - (45)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16313)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16227) - (115)) & 0x3fff] * 3 / 4) + dram[(pointer + (16313) - (84)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16227)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16110) - (136)) & 0x3fff] * 3 / 4) + dram[(pointer + (16227) - (115)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16110)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[(pointer + (16110) - (136)) & 0x3fff] * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_b = Acc;
  tmp_b = (tmp_b << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (15972) - (421)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (13797) - (278)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13797)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (13797) - (278)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15549)) & 0x3fff] = Acc;
	Acc = Math.trunc(-dram[(pointer + (15549) - (512)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (15549) - (513)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (13517) - (212)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13517)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (13517) - (212)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15035)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (15035) - (556)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (13303) - (256)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13303)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (13303) - (256)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14477)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (14477) - (678)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (13045) - (231)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13045)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (13045) - (231)) & 0x3fff] + Math.trunc(dram[(pointer + (9694) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9694)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (9694) - (0)) & 0x3fff] / 2) + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15972)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (12812) - (435)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (10744) - (292)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (10744)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (10744) - (292)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (12375)) & 0x3fff] = Acc;
	Acc = Math.trunc(-dram[(pointer + (12375) - (481)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (12375) - (482)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (10450) - (281)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (10450)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (10450) - (281)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11892)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (11892) - (571)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (10167) - (234)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (10167)) & 0x3fff] = -Acc;
	out[0] = tmp_5;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (10167) - (234)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11319)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (11319) - (573)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (9931) - (232)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9931)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (9931) - (232)) & 0x3fff] + Math.trunc(dram[(pointer + (9691) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9691)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (9691) - (0)) & 0x3fff] / 2) + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (12812)) & 0x3fff] = Acc;
	out[1] = tmp_3;
};

export const midiverb2_effect_2: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (15962) - (120)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (15092) - (334)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (12751) - (252)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (11359) - (478)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (9457) - (369)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (8482) - (499)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (6402) - (723)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (5629) - (214)) & 0x3fff] * 3 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (15962) - (129)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (15092) - (130)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (12751) - (459)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (11359) - (277)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (9457) - (363)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (8482) - (208)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (6402) - (421)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (5629) - (891)) & 0x3fff] * 3 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (16381) - (19)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (0) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16381)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16360) - (45)) & 0x3fff] * 3 / 4) + dram[(pointer + (16381) - (19)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16360)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16313) - (84)) & 0x3fff] * 3 / 4) + dram[(pointer + (16360) - (45)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16313)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16227) - (115)) & 0x3fff] * 3 / 4) + dram[(pointer + (16313) - (84)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16227)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16110) - (146)) & 0x3fff] * 3 / 4) + dram[(pointer + (16227) - (115)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16110)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[(pointer + (16110) - (146)) & 0x3fff] * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_b = Acc;
  tmp_b = (tmp_b << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (15962) - (868)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (13745) - (678)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13745)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (13745) - (678)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15092)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (15092) - (1345)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (13065) - (312)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13065)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (13065) - (312)) & 0x3fff] + Math.trunc(dram[(pointer + (3636) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3636)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (3636) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_b / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15962)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (12751) - (1390)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (10568) - (676)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (10568)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (10568) - (676)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11359)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (11359) - (789)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (9890) - (431)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9890)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (9890) - (431)) & 0x3fff] + Math.trunc(dram[(pointer + (3633) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3633)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (3633) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_b / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (12751)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (9457) - (973)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (7499) - (712)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7499)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (7499) - (712)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (8482)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (8482) - (981)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (6785) - (381)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6785)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (6785) - (381)) & 0x3fff] + Math.trunc(dram[(pointer + (3630) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3630)) & 0x3fff] = Acc;
	out[0] = tmp_5;
	Acc = Math.trunc(dram[(pointer + (3630) - (0)) & 0x3fff] / 2) + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9457)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (6402) - (771)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (4606) - (634)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4606)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (4606) - (634)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5629)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (5629) - (1021)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (3970) - (332)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3970)) & 0x3fff] = -Acc;
	out[1] = tmp_3;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (3970) - (332)) & 0x3fff] + Math.trunc(dram[(pointer + (3627) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3627)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (3627) - (0)) & 0x3fff] / 2) + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6402)) & 0x3fff] = Acc;
};

export const midiverb2_effect_3: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (15962) - (320)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (15092) - (734)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (12551) - (252)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (11159) - (478)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (8857) - (369)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (7621) - (499)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (5441) - (723)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (4468) - (214)) & 0x3fff] * 3 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (15962) - (129)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (15092) - (130)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (12551) - (859)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (11159) - (277)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (8857) - (563)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (7621) - (208)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (5441) - (421)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (4468) - (891)) & 0x3fff] * 3 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (16381) - (19)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (0) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16381)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16360) - (45)) & 0x3fff] * 3 / 4) + dram[(pointer + (16381) - (19)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16360)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16313) - (84)) & 0x3fff] * 3 / 4) + dram[(pointer + (16360) - (45)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16313)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16227) - (115)) & 0x3fff] * 3 / 4) + dram[(pointer + (16313) - (84)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16227)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16110) - (146)) & 0x3fff] * 3 / 4) + dram[(pointer + (16227) - (115)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16110)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[(pointer + (16110) - (146)) & 0x3fff] * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_b = Acc;
  tmp_b = (tmp_b << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (15962) - (868)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (13745) - (678)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13745)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (13745) - (678)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15092)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (15092) - (1345)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (13065) - (512)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13065)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (13065) - (512)) & 0x3fff] + Math.trunc(dram[(pointer + (2475) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2475)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (2475) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_b / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15962)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (12551) - (1390)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (10168) - (676)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (10168)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (10168) - (676)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11159)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (11159) - (989)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (9490) - (631)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9490)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (9490) - (631)) & 0x3fff] + Math.trunc(dram[(pointer + (2472) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2472)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (2472) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_b / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (12551)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (8857) - (1234)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (6638) - (712)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6638)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (6638) - (712)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7621)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (7621) - (981)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (5924) - (481)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5924)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (5924) - (481)) & 0x3fff] + Math.trunc(dram[(pointer + (2469) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2469)) & 0x3fff] = Acc;
	out[0] = tmp_5;
	Acc = Math.trunc(dram[(pointer + (2469) - (0)) & 0x3fff] / 2) + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (8857)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (5441) - (971)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (3445) - (634)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3445)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (3445) - (634)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4468)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (4468) - (1021)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (2809) - (332)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2809)) & 0x3fff] = -Acc;
	out[1] = tmp_3;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2809) - (332)) & 0x3fff] + Math.trunc(dram[(pointer + (2466) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2466)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (2466) - (0)) & 0x3fff] / 2) + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5441)) & 0x3fff] = Acc;
};

export const midiverb2_effect_4: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (14885) - (361)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (11865) - (789)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (7880) - (1703)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (14885) - (576)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (11865) - (390)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (7880) - (671)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (3607) - (1)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3607)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (3607) - (0)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16381) - (36)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16381)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (16381) - (36)) & 0x3fff] + Math.trunc(dram[(pointer + (16343) - (79)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16343)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (16343) - (79)) & 0x3fff] + Math.trunc(dram[(pointer + (16262) - (158)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16262)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (16262) - (158)) & 0x3fff] + Math.trunc(dram[(pointer + (16102) - (269)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16102)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (16102) - (269)) & 0x3fff] + Math.trunc(dram[(pointer + (15831) - (344)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15831)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (15831) - (344)) & 0x3fff] + Math.trunc(dram[(pointer + (15485) - (598)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15485)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (15485) - (598)) & 0x3fff] * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_b = Acc;
  tmp_b = (tmp_b << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (14885) - (1624)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (14885) - (1625)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (13259) - (1392)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13259)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (13259) - (1392)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11865)) & 0x3fff] = Acc;
	Acc = Math.trunc(-dram[(pointer + (11865) - (2410)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (9453) - (1571)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9453)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (9453) - (1571)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7880)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (7880) - (2657)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (5221) - (1612)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5221)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (5221) - (1612)) & 0x3fff] + Math.trunc(dram[(pointer + (3604) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3604)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (3604) - (0)) & 0x3fff] / 2) + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14885)) & 0x3fff] = Acc;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_5: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (15952) - (120)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (15282) - (334)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (14568) - (252)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (13710) - (478)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (11245) - (369)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (10670) - (499)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (9987) - (723)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (9114) - (207)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (15952) - (129)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (15282) - (130)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (14568) - (459)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (13710) - (277)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (11245) - (363)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (10670) - (208)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (9987) - (451)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (8279) - (56)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (6812) - (1)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6812)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (16381) - (19)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (0) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16381)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16360) - (45)) & 0x3fff] * 3 / 4) + dram[(pointer + (16381) - (19)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16360)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16313) - (84)) & 0x3fff] * 3 / 4) + dram[(pointer + (16360) - (45)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16313)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16227) - (115)) & 0x3fff] * 3 / 4) + dram[(pointer + (16313) - (84)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16227)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16110) - (156)) & 0x3fff] * 3 / 4) + dram[(pointer + (16227) - (115)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16110)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + dram[(pointer + (16110) - (156)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_b = Acc;
  tmp_b = (tmp_b << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (15952) - (668)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (12830) - (478)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (12830)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (12830) - (478)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15282)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (15282) - (712)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (12350) - (312)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (12350)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (12350) - (312)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14568)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (14568) - (856)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (12036) - (456)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (12036)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (12036) - (456)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13710)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (13710) - (878)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (11578) - (331)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11578)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (11578) - (331)) & 0x3fff] + Math.trunc(dram[(pointer + (6809) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6809)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (6809) - (0)) & 0x3fff] / 2) + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15952)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (11245) - (573)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (8279) - (412)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (8279)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (8279) - (412)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (10670)) & 0x3fff] = Acc;
	out[0] = tmp_5;
	Acc = Math.trunc(dram[(pointer + (10670) - (681)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (7865) - (381)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7865)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (7865) - (381)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9987)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (9987) - (871)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (7482) - (434)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7482)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (7482) - (434)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9114)) & 0x3fff] = Acc;
	out[1] = tmp_3;
	Acc = Math.trunc(dram[(pointer + (9114) - (833)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (7046) - (232)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7046)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (7046) - (232)) & 0x3fff] + Math.trunc(dram[(pointer + (6806) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6806)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (6806) - (0)) & 0x3fff] / 2) + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11245)) & 0x3fff] = Acc;
};

export const midiverb2_effect_6: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (14666) - (345)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (10834) - (987)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (3735) - (678)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (7372) - (345)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (14666) - (685)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (10834) - (342)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (3735) - (340)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (7372) - (1023)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (16282) - (98)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (0) - (100)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16282)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (16182) - (198)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (16282) - (0)) & 0x3fff] / 2) + dram[(pointer + (16282) - (98)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16182)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (15982) - (367)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (16182) - (0)) & 0x3fff] / 2) + dram[(pointer + (16182) - (198)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15982)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (15613) - (598)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (15982) - (0)) & 0x3fff] / 2) + dram[(pointer + (15982) - (367)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15613)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (15613) - (0)) & 0x3fff] / 2) + dram[(pointer + (15613) - (598)) & 0x3fff] + Math.trunc(dram[(pointer + (15013) - (345)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15013)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (15013) - (345)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_b = Acc;
  tmp_b = (tmp_b << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (14666) - (2203)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (14666) - (2204)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (12461) - (1625)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (12461)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (12461) - (1625)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (10834)) & 0x3fff] = Acc;
	Acc = Math.trunc(-dram[(pointer + (10834) - (1969)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (8863) - (1489)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (8863)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (8863) - (1489)) & 0x3fff] + Math.trunc(dram[(pointer + (160) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (160)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (160) - (0)) & 0x3fff] / 2) + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14666)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (7372) - (1934)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (7372) - (1935)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (5436) - (1699)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5436)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (5436) - (1699)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3735)) & 0x3fff] = Acc;
	Acc = Math.trunc(-dram[(pointer + (3735) - (2183)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (1550) - (1385)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1550)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (1550) - (1385)) & 0x3fff] + Math.trunc(dram[(pointer + (157) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (157)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (157) - (0)) & 0x3fff] / 2) + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7372)) & 0x3fff] = Acc;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_7: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (14666) - (1209)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (10834) - (987)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (3735) - (678)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (7372) - (787)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (14666) - (685)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (10834) - (342)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (3735) - (340)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (7372) - (1023)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (0) - (100)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (163) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (163)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (16282) - (98)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (163) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16282)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (16182) - (198)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (16282) - (0)) & 0x3fff] / 2) + dram[(pointer + (16282) - (98)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16182)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (15982) - (367)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (16182) - (0)) & 0x3fff] / 2) + dram[(pointer + (16182) - (198)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15982)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (15613) - (598)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (15982) - (0)) & 0x3fff] / 2) + dram[(pointer + (15982) - (367)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15613)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (15613) - (0)) & 0x3fff] / 2) + dram[(pointer + (15613) - (598)) & 0x3fff] + Math.trunc(dram[(pointer + (15013) - (345)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15013)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (15013) - (345)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_b = Acc;
  tmp_b = (tmp_b << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (14666) - (2203)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (14666) - (2204)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (12461) - (1625)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (12461)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (12461) - (1625)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (10834)) & 0x3fff] = Acc;
	Acc = Math.trunc(-dram[(pointer + (10834) - (1969)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (8863) - (1489)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (8863)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (8863) - (1489)) & 0x3fff] + Math.trunc(dram[(pointer + (160) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (160)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (160) - (0)) & 0x3fff] / 2) + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14666)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (7372) - (1934)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (7372) - (1935)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (5436) - (1699)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5436)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (5436) - (1699)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3735)) & 0x3fff] = Acc;
	Acc = Math.trunc(-dram[(pointer + (3735) - (2183)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (1550) - (1385)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1550)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (1550) - (1385)) & 0x3fff] + Math.trunc(dram[(pointer + (157) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (157)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (157) - (0)) & 0x3fff] / 2) + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7372)) & 0x3fff] = Acc;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_8: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (15952) - (120)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (15282) - (334)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (14568) - (252)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (13710) - (478)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (11245) - (369)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (10670) - (499)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (9987) - (723)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (9114) - (207)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (15952) - (129)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (15282) - (130)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (14568) - (459)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (13710) - (277)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (11245) - (363)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (10670) - (208)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (9987) - (451)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (8279) - (56)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (6812) - (1)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6812)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (16381) - (19)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (6812) - (0)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16381)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16360) - (45)) & 0x3fff] * 3 / 4) + dram[(pointer + (16381) - (19)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16360)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16313) - (84)) & 0x3fff] * 3 / 4) + dram[(pointer + (16360) - (45)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16313)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16227) - (115)) & 0x3fff] * 3 / 4) + dram[(pointer + (16313) - (84)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16227)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16110) - (156)) & 0x3fff] * 3 / 4) + dram[(pointer + (16227) - (115)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16110)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + dram[(pointer + (16110) - (156)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_b = Acc;
  tmp_b = (tmp_b << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (15952) - (668)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (12830) - (478)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (12830)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (12830) - (478)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15282)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (15282) - (712)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (12350) - (312)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (12350)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (12350) - (312)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14568)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (14568) - (856)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (12036) - (456)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (12036)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (12036) - (456)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13710)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (13710) - (878)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (11578) - (331)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11578)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (11578) - (331)) & 0x3fff] + Math.trunc(dram[(pointer + (6809) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6809)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (6809) - (0)) & 0x3fff] / 2) + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15952)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (11245) - (573)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (8279) - (412)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (8279)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (8279) - (412)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (10670)) & 0x3fff] = Acc;
	out[0] = tmp_5;
	Acc = Math.trunc(dram[(pointer + (10670) - (681)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (7865) - (381)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7865)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (7865) - (381)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9987)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (9987) - (871)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (7482) - (434)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7482)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (7482) - (434)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9114)) & 0x3fff] = Acc;
	out[1] = tmp_3;
	Acc = Math.trunc(dram[(pointer + (9114) - (833)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (7046) - (232)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7046)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (7046) - (232)) & 0x3fff] + Math.trunc(dram[(pointer + (6806) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6806)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (6806) - (0)) & 0x3fff] / 2) + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11245)) & 0x3fff] = Acc;
};

export const midiverb2_effect_9: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (15922) - (120)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (14952) - (334)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (14138) - (252)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (13180) - (478)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (9647) - (369)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (8772) - (499)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (7889) - (323)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_3 = -Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (15922) - (129)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (14952) - (130)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (14138) - (459)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (13180) - (277)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (9647) - (363)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (8772) - (208)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (6916) - (491)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_5 = -Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (0) - (1)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (3037) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3037)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (16381) - (19)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (3037) - (0)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16381)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16360) - (45)) & 0x3fff] * 3 / 4) + dram[(pointer + (16381) - (19)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16360)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16313) - (84)) & 0x3fff] * 3 / 4) + dram[(pointer + (16360) - (45)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16313)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16227) - (125)) & 0x3fff] * 3 / 4) + dram[(pointer + (16313) - (84)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16227)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16100) - (176)) & 0x3fff] * 3 / 4) + dram[(pointer + (16227) - (125)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16100)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + dram[(pointer + (16100) - (176)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_b = -Acc;
  tmp_b = (tmp_b << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (15922) - (968)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (12432) - (678)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (12432)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (12432) - (678)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14952)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (14952) - (812)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (11752) - (512)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11752)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (11752) - (512)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14138)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (14138) - (956)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (11238) - (756)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11238)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (11238) - (756)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13180)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (13180) - (746)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (10480) - (831)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (10480)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (10480) - (831)) & 0x3fff] + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15922)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (9647) - (873)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (5904) - (512)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5904)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (5904) - (512)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (8772)) & 0x3fff] = Acc;
	out[0] = tmp_5;
	Acc = Math.trunc(dram[(pointer + (8772) - (881)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (5390) - (781)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5390)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (5390) - (781)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7889)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (7889) - (971)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (4607) - (634)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4607)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (4607) - (634)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6916)) & 0x3fff] = Acc;
	out[1] = tmp_3;
	Acc = Math.trunc(dram[(pointer + (6916) - (1010)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (3971) - (932)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3971)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (3971) - (932)) & 0x3fff] + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9647)) & 0x3fff] = Acc;
};

export const midiverb2_effect_10: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (15922) - (120)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (14952) - (334)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (14138) - (252)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (13180) - (478)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (9647) - (369)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (8772) - (499)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (7889) - (323)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (15922) - (129)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (14952) - (130)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (14138) - (459)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (13180) - (277)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (9647) - (363)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (8772) - (208)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (6916) - (491)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (16381) - (19)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (0) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16381)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16360) - (45)) & 0x3fff] * 3 / 4) + dram[(pointer + (16381) - (19)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16360)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16313) - (84)) & 0x3fff] * 3 / 4) + dram[(pointer + (16360) - (45)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16313)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16227) - (125)) & 0x3fff] * 3 / 4) + dram[(pointer + (16313) - (84)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16227)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16100) - (176)) & 0x3fff] * 3 / 4) + dram[(pointer + (16227) - (125)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16100)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + dram[(pointer + (16100) - (176)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_b = Acc;
  tmp_b = (tmp_b << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (15922) - (968)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (12432) - (678)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (12432)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (12432) - (678)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14952)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (14952) - (812)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (11752) - (512)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11752)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (11752) - (512)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14138)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (14138) - (956)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (11238) - (756)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11238)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (11238) - (756)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13180)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (13180) - (746)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (10480) - (831)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (10480)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (10480) - (831)) & 0x3fff] + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15922)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (9647) - (873)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (5904) - (512)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5904)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (5904) - (512)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (8772)) & 0x3fff] = Acc;
	out[0] = tmp_5;
	Acc = Math.trunc(dram[(pointer + (8772) - (881)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (5390) - (781)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5390)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (5390) - (781)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7889)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (7889) - (971)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (4607) - (634)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4607)) & 0x3fff] = -Acc;
	out[1] = tmp_3;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (4607) - (634)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6916)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (6916) - (1010)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (3971) - (932)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3971)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (3971) - (932)) & 0x3fff] + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9647)) & 0x3fff] = Acc;
};

export const midiverb2_effect_11: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (15922) - (120)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (14952) - (334)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (14138) - (252)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (13180) - (478)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (9647) - (369)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (8772) - (499)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (7889) - (323)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (15922) - (129)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (14952) - (130)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (14138) - (459)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (13180) - (277)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (9647) - (363)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (8772) - (208)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (6916) - (491)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (16381) - (19)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (0) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16381)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16360) - (45)) & 0x3fff] * 3 / 4) + dram[(pointer + (16381) - (19)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16360)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16313) - (84)) & 0x3fff] * 3 / 4) + dram[(pointer + (16360) - (45)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16313)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16227) - (125)) & 0x3fff] * 3 / 4) + dram[(pointer + (16313) - (84)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16227)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16100) - (176)) & 0x3fff] * 3 / 4) + dram[(pointer + (16227) - (125)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16100)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + dram[(pointer + (16100) - (176)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_b = Acc;
  tmp_b = (tmp_b << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (15922) - (968)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (12432) - (678)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (12432)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (12432) - (678)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14952)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (14952) - (812)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (11752) - (512)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11752)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (11752) - (512)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14138)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (14138) - (956)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (11238) - (756)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11238)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (11238) - (756)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13180)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (13180) - (746)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (10480) - (831)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (10480)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (10480) - (831)) & 0x3fff] + Math.trunc(dram[(pointer + (3034) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3034)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (3034) - (0)) & 0x3fff] / 2) + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15922)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (9647) - (873)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (5904) - (512)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5904)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (5904) - (512)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (8772)) & 0x3fff] = Acc;
	out[0] = tmp_5;
	Acc = Math.trunc(dram[(pointer + (8772) - (881)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (5390) - (781)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5390)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (5390) - (781)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7889)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (7889) - (971)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (4607) - (634)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4607)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (4607) - (634)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6916)) & 0x3fff] = Acc;
	out[1] = tmp_3;
	Acc = Math.trunc(dram[(pointer + (6916) - (1010)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (3971) - (932)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3971)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (3971) - (932)) & 0x3fff] + Math.trunc(dram[(pointer + (3031) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3031)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (3031) - (0)) & 0x3fff] / 2) + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9647)) & 0x3fff] = Acc;
};

export const midiverb2_effect_12: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (15417) - (37)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (14594) - (336)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (13980) - (454)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (13222) - (478)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (9824) - (569)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (8887) - (499)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (7904) - (723)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (7031) - (391)) & 0x3fff] * 3 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (15417) - (370)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (14594) - (230)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (13980) - (457)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (13222) - (477)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (9824) - (569)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (8887) - (208)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (7904) - (223)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (7031) - (891)) & 0x3fff] * 3 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (3852) - (1)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (451)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3852)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (15931) - (7)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (0) - (451)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15931)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (15922) - (15)) & 0x3fff] * 3 / 4) + dram[(pointer + (15931) - (7)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15922)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (15905) - (34)) & 0x3fff] * 3 / 4) + dram[(pointer + (15922) - (15)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15905)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (15869) - (75)) & 0x3fff] * 3 / 4) + dram[(pointer + (15905) - (34)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15869)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (15792) - (135)) & 0x3fff] * 3 / 4) + dram[(pointer + (15869) - (75)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15792)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (15655) - (236)) & 0x3fff] * 3 / 4) + dram[(pointer + (15792) - (135)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15655)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[(pointer + (15655) - (236)) & 0x3fff] * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_b = Acc;
  tmp_b = (tmp_b << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (15417) - (821)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15417) - (822)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (12242) - (789)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (12242)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (12242) - (789)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14594)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (14594) - (612)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (14594) - (613)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (11451) - (412)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11451)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (11451) - (412)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13980)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (13980) - (756)) & 0x3fff] * -3 / 8) + Math.trunc(dram[(pointer + (13980) - (757)) & 0x3fff] * -3 / 8) + Math.trunc(dram[(pointer + (11037) - (678)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11037)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (11037) - (678)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13222)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (13222) - (978)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (10357) - (531)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (10357)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (10357) - (531)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9824)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (9824) - (935)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (5819) - (612)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5819)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (5819) - (612)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (8887)) & 0x3fff] = Acc;
	out[0] = tmp_5;
	Acc = Math.trunc(dram[(pointer + (8887) - (981)) & 0x3fff] * -3 / 8) + Math.trunc(dram[(pointer + (8887) - (982)) & 0x3fff] * -3 / 8) + Math.trunc(dram[(pointer + (5205) - (381)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5205)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (5205) - (381)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7904)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (7904) - (871)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (4822) - (534)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4822)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (4822) - (534)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7031)) & 0x3fff] = Acc;
	out[1] = tmp_3;
	Acc = Math.trunc(dram[(pointer + (7031) - (1210)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (4286) - (432)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4286)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc / 4) + Math.trunc(-dram[(pointer + (4286) - (432)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (3846) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3846)) & 0x3fff] = Acc;
	Acc = dram[(pointer + (3846) - (0)) & 0x3fff] + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15417)) & 0x3fff] = Acc;
};

export const midiverb2_effect_13: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (15417) - (37)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (14794) - (236)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (14380) - (454)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (13922) - (478)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (10081) - (569)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (9144) - (499)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (8161) - (723)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (7288) - (391)) & 0x3fff] * 3 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (15417) - (37)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (14794) - (230)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (14380) - (457)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (13922) - (477)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (10081) - (569)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (9144) - (508)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (8161) - (223)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (7288) - (891)) & 0x3fff] * 3 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (3509) - (1)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (451)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3509)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (15931) - (7)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (0) - (451)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15931)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (15922) - (15)) & 0x3fff] * 3 / 4) + dram[(pointer + (15931) - (7)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15922)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (15905) - (34)) & 0x3fff] * 3 / 4) + dram[(pointer + (15922) - (15)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15905)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (15869) - (75)) & 0x3fff] * 3 / 4) + dram[(pointer + (15905) - (34)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15869)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (15792) - (135)) & 0x3fff] * 3 / 4) + dram[(pointer + (15869) - (75)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15792)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (15655) - (236)) & 0x3fff] * 3 / 4) + dram[(pointer + (15792) - (135)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15655)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[(pointer + (15655) - (236)) & 0x3fff] * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_b = Acc;
  tmp_b = (tmp_b << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (15417) - (621)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15417) - (622)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (13342) - (789)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13342)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (13342) - (789)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14794)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (14794) - (412)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (14794) - (413)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (12551) - (912)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (12551)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (12551) - (912)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14380)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (14380) - (456)) & 0x3fff] * -3 / 8) + Math.trunc(dram[(pointer + (14380) - (457)) & 0x3fff] * -3 / 8) + Math.trunc(dram[(pointer + (11637) - (1021)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11637)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (11637) - (1021)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13922)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (13922) - (578)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (10614) - (531)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (10614)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (10614) - (531)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (10081)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (10081) - (935)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (6076) - (712)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6076)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (6076) - (712)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9144)) & 0x3fff] = Acc;
	out[0] = tmp_5;
	Acc = Math.trunc(dram[(pointer + (9144) - (981)) & 0x3fff] * -3 / 8) + Math.trunc(dram[(pointer + (9144) - (982)) & 0x3fff] * -3 / 8) + Math.trunc(dram[(pointer + (5362) - (381)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5362)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (5362) - (381)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (8161)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (8161) - (871)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (4979) - (634)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4979)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (4979) - (634)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7288)) & 0x3fff] = Acc;
	out[1] = tmp_3;
	Acc = Math.trunc(dram[(pointer + (7288) - (1210)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (4343) - (832)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4343)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc / 4) + Math.trunc(-dram[(pointer + (4343) - (832)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (3503) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3503)) & 0x3fff] = Acc;
	Acc = dram[(pointer + (3503) - (0)) & 0x3fff] + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15417)) & 0x3fff] = Acc;
};

export const midiverb2_effect_14: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (15922) - (120)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (15252) - (334)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (14438) - (252)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (13480) - (478)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (9683) - (369)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (9008) - (499)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (8125) - (723)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (15922) - (129)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (15252) - (130)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (14438) - (459)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (13480) - (277)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (9683) - (363)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (9008) - (208)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (7152) - (891)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (3073) - (1)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3073)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (16381) - (19)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (3073) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16381)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16360) - (45)) & 0x3fff] * 3 / 4) + dram[(pointer + (16381) - (19)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16360)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16313) - (84)) & 0x3fff] * 3 / 4) + dram[(pointer + (16360) - (45)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16313)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16227) - (125)) & 0x3fff] * 3 / 4) + dram[(pointer + (16313) - (84)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16227)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16100) - (176)) & 0x3fff] * 3 / 4) + dram[(pointer + (16227) - (125)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16100)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + dram[(pointer + (16100) - (176)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_b = Acc;
  tmp_b = (tmp_b << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (15922) - (668)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (12468) - (678)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (12468)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (12468) - (678)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15252)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (15252) - (812)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (11788) - (512)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11788)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (11788) - (512)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14438)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (14438) - (956)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (11274) - (756)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11274)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (11274) - (756)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13480)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (13480) - (1010)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (10516) - (831)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (10516)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (10516) - (831)) & 0x3fff] + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15922)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (9683) - (673)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (5940) - (512)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5940)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (5940) - (512)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9008)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (9008) - (881)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (5426) - (781)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5426)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (5426) - (781)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (8125)) & 0x3fff] = Acc;
	out[0] = tmp_5;
	Acc = Math.trunc(dram[(pointer + (8125) - (971)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (4643) - (634)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4643)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (4643) - (634)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7152)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (7152) - (1210)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (4007) - (932)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4007)) & 0x3fff] = -Acc;
	out[1] = tmp_3;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (4007) - (932)) & 0x3fff] + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9683)) & 0x3fff] = Acc;
};

export const midiverb2_effect_15: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (15922) - (520)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (14952) - (334)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (14138) - (252)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (13180) - (478)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (9183) - (369)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (8408) - (499)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (7525) - (723)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (15922) - (129)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (14952) - (130)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (14138) - (459)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (13180) - (277)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (9183) - (363)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (8408) - (208)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (6552) - (891)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (2473) - (1)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2473)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (16381) - (19)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (0) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16381)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16360) - (45)) & 0x3fff] * 3 / 4) + dram[(pointer + (16381) - (19)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16360)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16313) - (84)) & 0x3fff] * 3 / 4) + dram[(pointer + (16360) - (45)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16313)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16227) - (125)) & 0x3fff] * 3 / 4) + dram[(pointer + (16313) - (84)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16227)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16100) - (176)) & 0x3fff] * 3 / 4) + dram[(pointer + (16227) - (125)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16100)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + dram[(pointer + (16100) - (176)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_b = Acc;
  tmp_b = (tmp_b << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (15922) - (968)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (12068) - (678)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (12068)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (12068) - (678)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14952)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (14952) - (812)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (11388) - (612)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11388)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (11388) - (612)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14138)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (14138) - (956)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (10774) - (756)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (10774)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (10774) - (756)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13180)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (13180) - (1110)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (10016) - (831)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (10016)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (10016) - (831)) & 0x3fff] + Math.trunc(dram[(pointer + (2470) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2470)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (2470) - (0)) & 0x3fff] / 2) + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15922)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (9183) - (773)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (5340) - (512)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5340)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (5340) - (512)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (8408)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (8408) - (881)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (4826) - (781)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4826)) & 0x3fff] = -Acc;
	out[0] = tmp_5;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (4826) - (781)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7525)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (7525) - (971)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (4043) - (634)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4043)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (4043) - (634)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6552)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (6552) - (1210)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (3407) - (932)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3407)) & 0x3fff] = -Acc;
	out[1] = tmp_3;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (3407) - (932)) & 0x3fff] + Math.trunc(dram[(pointer + (2467) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2467)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (2467) - (0)) & 0x3fff] / 2) + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9183)) & 0x3fff] = Acc;
};

export const midiverb2_effect_16: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (15922) - (120)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (15252) - (334)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (14438) - (252)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (13480) - (478)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (9683) - (369)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (9008) - (499)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (8125) - (723)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (15922) - (129)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (15252) - (130)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (14438) - (459)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (13480) - (277)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (9683) - (363)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (9008) - (208)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (7152) - (891)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (3073) - (1)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3073)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (16381) - (19)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (0) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16381)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16360) - (45)) & 0x3fff] * 3 / 4) + dram[(pointer + (16381) - (19)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16360)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16313) - (84)) & 0x3fff] * 3 / 4) + dram[(pointer + (16360) - (45)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16313)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16227) - (125)) & 0x3fff] * 3 / 4) + dram[(pointer + (16313) - (84)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16227)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16100) - (176)) & 0x3fff] * 3 / 4) + dram[(pointer + (16227) - (125)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16100)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + dram[(pointer + (16100) - (176)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_b = Acc;
  tmp_b = (tmp_b << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (15922) - (668)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (12468) - (678)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (12468)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (12468) - (678)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15252)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (15252) - (812)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (11788) - (512)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11788)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (11788) - (512)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14438)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (14438) - (956)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (11274) - (756)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11274)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (11274) - (756)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13480)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (13480) - (1010)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (10516) - (831)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (10516)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (10516) - (831)) & 0x3fff] + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15922)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (9683) - (673)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (5940) - (512)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5940)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (5940) - (512)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9008)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (9008) - (881)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (5426) - (781)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5426)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (5426) - (781)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (8125)) & 0x3fff] = Acc;
	out[0] = tmp_5;
	Acc = Math.trunc(dram[(pointer + (8125) - (971)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (4643) - (634)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4643)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (4643) - (634)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7152)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (7152) - (1210)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (4007) - (932)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4007)) & 0x3fff] = -Acc;
	out[1] = tmp_3;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (4007) - (932)) & 0x3fff] + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9683)) & 0x3fff] = Acc;
};

export const midiverb2_effect_17: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (13337) - (211)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (10417) - (1391)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (6832) - (1403)) & 0x3fff] * 3 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (13337) - (211)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (10417) - (690)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (6832) - (471)) & 0x3fff] * 3 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (0) - (457)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (3759) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3759)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (0) - (457)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15925) - (321)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15925)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (15925) - (321)) & 0x3fff] + Math.trunc(dram[(pointer + (15602) - (431)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15602)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (15602) - (431)) & 0x3fff] + Math.trunc(dram[(pointer + (15169) - (668)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15169)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (15169) - (668)) & 0x3fff] + Math.trunc(dram[(pointer + (14499) - (808)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14499)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (14499) - (808)) & 0x3fff] + Math.trunc(dram[(pointer + (13689) - (204)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13689)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (13689) - (204)) & 0x3fff] + Math.trunc(dram[(pointer + (13483) - (144)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13483)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[(pointer + (13483) - (144)) & 0x3fff] * 9 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_b = Acc;
  tmp_b = (tmp_b << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (13337) - (1724)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (11611) - (1192)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11611)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (11611) - (1192)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (10417)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (10417) - (2510)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (7905) - (1071)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7905)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (7905) - (1071)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6832)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (6832) - (1857)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (4973) - (1212)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4973)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (4973) - (1212)) & 0x3fff] + Math.trunc(dram[(pointer + (3756) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3756)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (3756) - (0)) & 0x3fff] / 2) + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13337)) & 0x3fff] = Acc;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_18: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (13793) - (211)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (10673) - (1391)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (6788) - (1403)) & 0x3fff] * 3 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (13793) - (1101)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (10673) - (690)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (6788) - (471)) & 0x3fff] * 3 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (0) - (1)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (3415) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3415)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (3415) - (0)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16381) - (321)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16381)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (16381) - (321)) & 0x3fff] + Math.trunc(dram[(pointer + (16058) - (431)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16058)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (16058) - (431)) & 0x3fff] + Math.trunc(dram[(pointer + (15625) - (668)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15625)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (15625) - (668)) & 0x3fff] + Math.trunc(dram[(pointer + (14955) - (808)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14955)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (14955) - (808)) & 0x3fff] + Math.trunc(dram[(pointer + (14145) - (204)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14145)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (14145) - (204)) & 0x3fff] + Math.trunc(dram[(pointer + (13939) - (144)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13939)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[(pointer + (13939) - (144)) & 0x3fff] * 9 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_b = Acc;
  tmp_b = (tmp_b << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (13793) - (1724)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (12067) - (1392)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (12067)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (12067) - (1392)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (10673)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (10673) - (2510)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (8161) - (1371)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (8161)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (8161) - (1371)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6788)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (6788) - (1857)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (4929) - (1512)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4929)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (4929) - (1512)) & 0x3fff] + Math.trunc(dram[(pointer + (3412) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3412)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (3412) - (0)) & 0x3fff] / 2) + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13793)) & 0x3fff] = Acc;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_19: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_1 = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (13254) - (64)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (10744) - (696)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (5956) - (539)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (0) - (178)) & 0x3fff] * 3 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (13254) - (503)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (10744) - (167)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (5956) - (151)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (0) - (511)) & 0x3fff] * 3 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (14382) - (58)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (0) - (2000)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14382)) & 0x3fff] = -Acc;
	Acc = Math.trunc(dram[(pointer + (14322) - (89)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (14382) - (0)) & 0x3fff] * 5 / 8) + dram[(pointer + (14382) - (58)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14322)) & 0x3fff] = -Acc;
	Acc = Math.trunc(dram[(pointer + (14231) - (183)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (14322) - (0)) & 0x3fff] * 5 / 8) + dram[(pointer + (14322) - (89)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14231)) & 0x3fff] = -Acc;
	Acc = Math.trunc(dram[(pointer + (14046) - (321)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (14231) - (0)) & 0x3fff] * 5 / 8) + dram[(pointer + (14231) - (183)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14046)) & 0x3fff] = -Acc;
	Acc = Math.trunc(dram[(pointer + (13723) - (467)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (14046) - (0)) & 0x3fff] * 5 / 8) + dram[(pointer + (14046) - (321)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13723)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 16) + Math.trunc(dram[(pointer + (13723) - (0)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (13723) - (467)) & 0x3fff] * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_b = Acc;
  tmp_b = (tmp_b << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (13254) - (1385)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (11867) - (1121)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11867)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (11867) - (1121)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (10744)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (10744) - (1641)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (9101) - (1020)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9101)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (9101) - (1020)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_1 = Acc;
  tmp_1 = (tmp_1 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (3434) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1 / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3434)) & 0x3fff] = Acc;
	Acc = dram[(pointer + (3434) - (1)) & 0x3fff] + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13254)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (8079) - (1211)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (6866) - (908)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6866)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (6866) - (908)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5956)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (5956) - (1417)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (4537) - (1098)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4537)) & 0x3fff] = -Acc;
	out[0] = tmp_5;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (4537) - (1098)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_1 = Acc;
  tmp_1 = (tmp_1 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (3431) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1 / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3431)) & 0x3fff] = Acc;
	Acc = dram[(pointer + (3431) - (1)) & 0x3fff] + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (8079)) & 0x3fff] = Acc;
	out[1] = tmp_3;
};

export const midiverb2_effect_20: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_1 = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (15253) - (64)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (13283) - (696)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (8586) - (539)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (16230) - (24)) & 0x3fff] * 3 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (15253) - (503)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (13283) - (167)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (8586) - (151)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (16045) - (172)) & 0x3fff] * 3 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (16381) - (58)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (0) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16381)) & 0x3fff] = -Acc;
	Acc = Math.trunc(dram[(pointer + (16321) - (89)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (16381) - (0)) & 0x3fff] * 5 / 8) + dram[(pointer + (16381) - (58)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16321)) & 0x3fff] = -Acc;
	Acc = Math.trunc(dram[(pointer + (16230) - (183)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (16321) - (0)) & 0x3fff] * 5 / 8) + dram[(pointer + (16321) - (89)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16230)) & 0x3fff] = -Acc;
	Acc = Math.trunc(dram[(pointer + (16045) - (321)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (16230) - (0)) & 0x3fff] * 5 / 8) + dram[(pointer + (16230) - (183)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16045)) & 0x3fff] = -Acc;
	Acc = Math.trunc(dram[(pointer + (15722) - (467)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (16045) - (0)) & 0x3fff] * 5 / 8) + dram[(pointer + (16045) - (321)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15722)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 16) + Math.trunc(dram[(pointer + (15722) - (0)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (15722) - (467)) & 0x3fff] * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_b = Acc;
  tmp_b = (tmp_b << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (15253) - (845)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (14406) - (1121)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14406)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (14406) - (1121)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13283)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (13283) - (1441)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (11840) - (1320)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11840)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (11840) - (1320)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_1 = Acc;
  tmp_1 = (tmp_1 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (6264) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1 / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6264)) & 0x3fff] = Acc;
	Acc = dram[(pointer + (6264) - (1)) & 0x3fff] + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15253)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (10518) - (912)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (9604) - (1016)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9604)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (9604) - (1016)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (8586)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (8586) - (1017)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (7567) - (1298)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7567)) & 0x3fff] = -Acc;
	out[0] = tmp_5;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (7567) - (1298)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_1 = Acc;
  tmp_1 = (tmp_1 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (6261) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1 / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6261)) & 0x3fff] = Acc;
	Acc = dram[(pointer + (6261) - (1)) & 0x3fff] + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (10518)) & 0x3fff] = Acc;
	out[1] = tmp_3;
};

export const midiverb2_effect_21: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (15822) - (120)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (14952) - (634)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (13905) - (552)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (12769) - (478)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (8225) - (369)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (7182) - (208)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (6199) - (723)) & 0x3fff] * 3 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (15822) - (129)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (14952) - (130)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (13905) - (359)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (12769) - (277)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (8225) - (363)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (7182) - (499)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (5096) - (891)) & 0x3fff] * 3 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (365) - (1)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (365)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (16381) - (19)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (0) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16381)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16360) - (45)) & 0x3fff] * 3 / 4) + dram[(pointer + (16381) - (19)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16360)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16313) - (84)) & 0x3fff] * 3 / 4) + dram[(pointer + (16360) - (45)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16313)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16227) - (125)) & 0x3fff] * 3 / 4) + dram[(pointer + (16313) - (84)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16227)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16100) - (276)) & 0x3fff] * 3 / 4) + dram[(pointer + (16227) - (125)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16100)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + dram[(pointer + (16100) - (276)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_b = Acc;
  tmp_b = (tmp_b << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (15822) - (868)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (11800) - (878)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11800)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (11800) - (878)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14952)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (14952) - (1045)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (10920) - (712)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (10920)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (10920) - (712)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13905)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (13905) - (1134)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (13905) - (1135)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (10206) - (956)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (10206)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (10206) - (956)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (12769)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (12769) - (967)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (12769) - (968)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (9248) - (1021)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9248)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (9248) - (1021)) & 0x3fff] + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15822)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (8225) - (1041)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (4084) - (812)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4084)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (4084) - (812)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7182)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (7182) - (981)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (3270) - (981)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3270)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (3270) - (981)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6199)) & 0x3fff] = Acc;
	out[0] = tmp_5;
	Acc = Math.trunc(dram[(pointer + (6199) - (1101)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (6199) - (1102)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (2287) - (934)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2287)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2287) - (934)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5096)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (5096) - (1010)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (5096) - (1011)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (1351) - (984)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1351)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (1351) - (984)) & 0x3fff] + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (8225)) & 0x3fff] = Acc;
	out[1] = tmp_3;
};

export const midiverb2_effect_22: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (15822) - (420)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (14617) - (634)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (13570) - (552)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (12434) - (478)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (9099) - (269)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (8056) - (208)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (7073) - (723)) & 0x3fff] * 3 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (15822) - (129)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (14617) - (130)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (13570) - (359)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (12434) - (277)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (9099) - (363)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (8056) - (499)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (5970) - (891)) & 0x3fff] * 3 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (2619) - (1)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2619)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (16381) - (19)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (0) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16381)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16360) - (45)) & 0x3fff] * 3 / 4) + dram[(pointer + (16381) - (19)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16360)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16313) - (84)) & 0x3fff] * 3 / 4) + dram[(pointer + (16360) - (45)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16313)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16227) - (125)) & 0x3fff] * 3 / 4) + dram[(pointer + (16313) - (84)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16227)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16100) - (276)) & 0x3fff] * 3 / 4) + dram[(pointer + (16227) - (125)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16100)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + dram[(pointer + (16100) - (276)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_b = Acc;
  tmp_b = (tmp_b << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (15822) - (1203)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (11465) - (578)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11465)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (11465) - (578)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14617)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (14617) - (1045)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (10885) - (712)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (10885)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (10885) - (712)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13570)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (13570) - (1134)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (13570) - (1135)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (10171) - (756)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (10171)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (10171) - (756)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (12434)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (12434) - (967)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (12434) - (968)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (9413) - (312)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9413)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (9413) - (312)) & 0x3fff] + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15822)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (9099) - (1041)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (4958) - (612)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4958)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (4958) - (612)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (8056)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (8056) - (981)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (4344) - (781)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4344)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (4344) - (781)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7073)) & 0x3fff] = Acc;
	out[0] = tmp_5;
	Acc = Math.trunc(dram[(pointer + (7073) - (1101)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (7073) - (1102)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (3561) - (634)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3561)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (3561) - (634)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5970)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (5970) - (1010)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (5970) - (1011)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (2925) - (304)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2925)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2925) - (304)) & 0x3fff] + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9099)) & 0x3fff] = Acc;
	out[1] = tmp_3;
};

export const midiverb2_effect_23: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (13326) - (567)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (9506) - (1891)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (5621) - (2003)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (13326) - (1190)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (9506) - (890)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (5621) - (671)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (0) - (1)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (1148) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1148)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (0) - (1)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16381) - (321)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16381)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (16381) - (321)) & 0x3fff] + Math.trunc(dram[(pointer + (16058) - (431)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16058)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (16058) - (431)) & 0x3fff] + Math.trunc(dram[(pointer + (15625) - (668)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15625)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (15625) - (668)) & 0x3fff] + Math.trunc(dram[(pointer + (14955) - (1235)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14955)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (14955) - (1235)) & 0x3fff] + Math.trunc(dram[(pointer + (13718) - (234)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13718)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (13718) - (234)) & 0x3fff] + Math.trunc(dram[(pointer + (13482) - (154)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13482)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (13482) - (154)) & 0x3fff] * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_b = Acc;
  tmp_b = (tmp_b << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (13326) - (2224)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (11100) - (1592)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11100)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (11100) - (1592)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9506)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (9506) - (2610)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (6894) - (1271)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6894)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (6894) - (1271)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5621)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (5621) - (3357)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (2262) - (1112)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2262)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2262) - (1112)) & 0x3fff] + Math.trunc(dram[(pointer + (1145) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1145)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (1145) - (0)) & 0x3fff] / 2) + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13326)) & 0x3fff] = Acc;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_24: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (12327) - (567)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (9007) - (1891)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (5159) - (2003)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (12327) - (567)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (9007) - (890)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (5159) - (671)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (0) - (1000)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (1012) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1012)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (1012) - (1)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15382) - (321)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15382)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (15382) - (321)) & 0x3fff] + Math.trunc(dram[(pointer + (15059) - (431)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15059)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (15059) - (431)) & 0x3fff] + Math.trunc(dram[(pointer + (14626) - (668)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14626)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (14626) - (668)) & 0x3fff] + Math.trunc(dram[(pointer + (13956) - (1235)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13956)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (13956) - (1235)) & 0x3fff] + Math.trunc(dram[(pointer + (12719) - (234)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (12719)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (12719) - (234)) & 0x3fff] + Math.trunc(dram[(pointer + (12483) - (154)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (12483)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (12483) - (154)) & 0x3fff] * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_b = Acc;
  tmp_b = (tmp_b << 16) >> 16;
	Acc = dram[(pointer + (12327) - (2224)) & 0x3fff] + Math.trunc(dram[(pointer + (10101) - (1092)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (10101)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (10101) - (1092)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9007)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (9007) - (2610)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (6395) - (1234)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6395)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (6395) - (1234)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5159)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (5159) - (3357)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (1800) - (786)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1800)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (1800) - (786)) & 0x3fff] + Math.trunc(dram[(pointer + (1009) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1009)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (1009) - (0)) & 0x3fff] / 2) + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (12327)) & 0x3fff] = Acc;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_25: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (13326) - (567)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (9506) - (1891)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (5621) - (2003)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (13326) - (1190)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (9506) - (890)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (5621) - (671)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (0) - (1)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (1148) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1148)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (1148) - (1)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16381) - (321)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16381)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (16381) - (321)) & 0x3fff] + Math.trunc(dram[(pointer + (16058) - (431)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16058)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (16058) - (431)) & 0x3fff] + Math.trunc(dram[(pointer + (15625) - (668)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15625)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (15625) - (668)) & 0x3fff] + Math.trunc(dram[(pointer + (14955) - (1235)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14955)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (14955) - (1235)) & 0x3fff] + Math.trunc(dram[(pointer + (13718) - (234)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13718)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (13718) - (234)) & 0x3fff] + Math.trunc(dram[(pointer + (13482) - (154)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13482)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (13482) - (154)) & 0x3fff] * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_b = Acc;
  tmp_b = (tmp_b << 16) >> 16;
	Acc = dram[(pointer + (13326) - (2224)) & 0x3fff] + Math.trunc(dram[(pointer + (11100) - (1592)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11100)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (11100) - (1592)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9506)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (9506) - (2610)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (6894) - (1271)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6894)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (6894) - (1271)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5621)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (5621) - (3357)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (2262) - (1112)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2262)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2262) - (1112)) & 0x3fff] + Math.trunc(dram[(pointer + (1145) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1145)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (1145) - (0)) & 0x3fff] / 2) + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13326)) & 0x3fff] = Acc;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_26: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (13526) - (567)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (10206) - (1891)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (6321) - (2003)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (13526) - (567)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (10206) - (890)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (6321) - (671)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (0) - (1)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (1848) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1848)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (0) - (1)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16381) - (321)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16381)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (16381) - (321)) & 0x3fff] + Math.trunc(dram[(pointer + (16058) - (431)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16058)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (16058) - (431)) & 0x3fff] + Math.trunc(dram[(pointer + (15625) - (668)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15625)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (15625) - (668)) & 0x3fff] + Math.trunc(dram[(pointer + (14955) - (1035)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14955)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (14955) - (1035)) & 0x3fff] + Math.trunc(dram[(pointer + (13918) - (234)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13918)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (13918) - (234)) & 0x3fff] + Math.trunc(dram[(pointer + (13682) - (154)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13682)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (13682) - (154)) & 0x3fff] * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_b = Acc;
  tmp_b = (tmp_b << 16) >> 16;
	Acc = dram[(pointer + (13526) - (2224)) & 0x3fff] + Math.trunc(dram[(pointer + (11300) - (1092)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11300)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (11300) - (1092)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (10206)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (10206) - (2610)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (7594) - (1271)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7594)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (7594) - (1271)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6321)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (6321) - (3357)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (2962) - (1112)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2962)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2962) - (1112)) & 0x3fff] + Math.trunc(dram[(pointer + (1845) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1845)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (1845) - (0)) & 0x3fff] / 2) + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13526)) & 0x3fff] = Acc;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_27: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (15922) - (420)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (14952) - (334)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (13863) - (252)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (12452) - (478)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (8583) - (369)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (7708) - (499)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (6472) - (323)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (15922) - (129)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (14952) - (130)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (13863) - (459)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (12452) - (277)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (8583) - (363)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (7708) - (208)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (5025) - (491)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (16381) - (19)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (0) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16381)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16360) - (45)) & 0x3fff] * 3 / 4) + dram[(pointer + (16381) - (19)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16360)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16313) - (84)) & 0x3fff] * 3 / 4) + dram[(pointer + (16360) - (45)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16313)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16227) - (125)) & 0x3fff] * 3 / 4) + dram[(pointer + (16313) - (84)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16227)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (16100) - (176)) & 0x3fff] * 3 / 4) + dram[(pointer + (16227) - (125)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16100)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + dram[(pointer + (16100) - (176)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_b = Acc;
  tmp_b = (tmp_b << 16) >> 16;
	Acc = dram[(pointer + (15922) - (968)) & 0x3fff] + Math.trunc(dram[(pointer + (11046) - (1056)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11046)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (11046) - (1056)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14952)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (14952) - (1087)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (14952) - (1088)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (9988) - (612)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9988)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (9988) - (612)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13863)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (13863) - (1409)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (9374) - (356)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9374)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (9374) - (356)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (12452)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (12452) - (1404)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (9016) - (431)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9016)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (9016) - (431)) & 0x3fff] + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15922)) & 0x3fff] = Acc;
	Acc = dram[(pointer + (8583) - (873)) & 0x3fff] + Math.trunc(dram[(pointer + (3413) - (987)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3413)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (3413) - (987)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7708)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (7708) - (1235)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (2424) - (681)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2424)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2424) - (681)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6472)) & 0x3fff] = Acc;
	out[0] = tmp_5;
	Acc = Math.trunc(dram[(pointer + (6472) - (1445)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (1741) - (634)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1741)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (1741) - (634)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5025)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (5025) - (1610)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (1105) - (432)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1105)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (1105) - (432)) & 0x3fff] + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (8583)) & 0x3fff] = Acc;
	out[1] = tmp_3;
};

export const midiverb2_effect_28: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (13341) - (21)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (9321) - (1891)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (5236) - (2003)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (13341) - (1010)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (9321) - (890)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (5236) - (671)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (16381) - (321)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16381)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (16381) - (321)) & 0x3fff] + Math.trunc(dram[(pointer + (16058) - (431)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16058)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (16058) - (431)) & 0x3fff] + Math.trunc(dram[(pointer + (15625) - (968)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15625)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (15625) - (968)) & 0x3fff] + Math.trunc(dram[(pointer + (14363) - (1020)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14363)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (14363) - (1020)) & 0x3fff] + Math.trunc(dram[(pointer + (14655) - (23)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14655)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (14655) - (23)) & 0x3fff] + Math.trunc(dram[(pointer + (14630) - (56)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14630)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (14630) - (56)) & 0x3fff] + Math.trunc(dram[(pointer + (14572) - (78)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14572)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (14572) - (78)) & 0x3fff] + Math.trunc(dram[(pointer + (14492) - (127)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14492)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (14492) - (127)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_b = Acc;
  tmp_b = (tmp_b << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (13341) - (2624)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (13341) - (2625)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (10715) - (1392)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (10715)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (10715) - (1392)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9321)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (9321) - (2810)) & 0x3fff] * 15 / 16) + Math.trunc(dram[(pointer + (6509) - (1271)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6509)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (6509) - (1271)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5236)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (5236) - (3857)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (1377) - (1112)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1377)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (1377) - (1112)) & 0x3fff] + Math.trunc(dram[(pointer + (260) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (260)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (260) - (0)) & 0x3fff] / 2) + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13341)) & 0x3fff] = Acc;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_29: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_b = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (12741) - (21)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (9121) - (1891)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (4636) - (2003)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (12741) - (1010)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (9121) - (890)) & 0x3fff] * 9 / 8) + Math.trunc(dram[(pointer + (4636) - (671)) & 0x3fff] * 9 / 8);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (16381) - (321)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16381)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (16381) - (321)) & 0x3fff] + Math.trunc(dram[(pointer + (16058) - (431)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16058)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (16058) - (431)) & 0x3fff] + Math.trunc(dram[(pointer + (15625) - (968)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15625)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (15625) - (968)) & 0x3fff] + Math.trunc(dram[(pointer + (14363) - (1620)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14363)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (14363) - (1620)) & 0x3fff] + Math.trunc(dram[(pointer + (14655) - (23)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14655)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (14655) - (23)) & 0x3fff] + Math.trunc(dram[(pointer + (14630) - (56)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14630)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (14630) - (56)) & 0x3fff] + Math.trunc(dram[(pointer + (14572) - (78)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14572)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (14572) - (78)) & 0x3fff] + Math.trunc(dram[(pointer + (14492) - (127)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14492)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (14492) - (127)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_b = Acc;
  tmp_b = (tmp_b << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (12741) - (1624)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (12741) - (1625)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (11115) - (1992)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11115)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (11115) - (1992)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9121)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (9121) - (2110)) & 0x3fff] * 15 / 16) + Math.trunc(dram[(pointer + (7009) - (2371)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7009)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (7009) - (2371)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4636)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (4636) - (2157)) & 0x3fff] * 15 / 16) + Math.trunc(dram[(pointer + (2477) - (2212)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2477)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2477) - (2212)) & 0x3fff] + Math.trunc(dram[(pointer + (260) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (260)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (260) - (0)) & 0x3fff] / 2) + tmp_b;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (12741)) & 0x3fff] = Acc;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_30: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0, tmp_b = 0, tmp_15 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (6109) - (5)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (5375) - (361)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (4072) - (120)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (3222) - (861)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (6109) - (126)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (5375) - (897)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (4072) - (1)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (3222) - (356)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (0) - (0)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (245)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (523)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (891)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (1200)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (1568)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (1987)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (2567)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (2893)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (3104)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	tmp_b = -Acc;
  tmp_b = (tmp_b << 16) >> 16;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (7382) - (245)) & 0x3fff] * 5 / 8) + Math.trunc(tmp_b / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7382)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (7135) - (189)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (7382) - (0)) & 0x3fff] / 2) + dram[(pointer + (7382) - (245)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7135)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (6944) - (145)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (7135) - (0)) & 0x3fff] / 2) + dram[(pointer + (7135) - (189)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6944)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (6797) - (123)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (6944) - (0)) & 0x3fff] / 2) + dram[(pointer + (6944) - (145)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6797)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (6672) - (198)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (6797) - (0)) & 0x3fff] / 2) + dram[(pointer + (6797) - (123)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6672)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (6672) - (0)) & 0x3fff] / 2) + dram[(pointer + (6672) - (198)) & 0x3fff] + Math.trunc(dram[(pointer + (6472) - (34)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6472)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (6472) - (34)) & 0x3fff] + Math.trunc(dram[(pointer + (6436) - (69)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6436)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (6436) - (69)) & 0x3fff] + Math.trunc(dram[(pointer + (6365) - (104)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6365)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (6365) - (104)) & 0x3fff] + Math.trunc(dram[(pointer + (6259) - (148)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6259)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (6259) - (148)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_15 = -Acc;
  tmp_15 = (tmp_15 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (6109) - (497)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (5610) - (233)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5610)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (5610) - (233)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5375)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (5375) - (1010)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (4363) - (289)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4363)) & 0x3fff] = -Acc;
	out[0] = tmp_5;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (4363) - (289)) & 0x3fff] + tmp_15;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4072)) & 0x3fff] = -Acc;
	Acc = Math.trunc(dram[(pointer + (4072) - (590)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (3480) - (256)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3480)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (3480) - (256)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3222)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (3222) - (1071)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (2149) - (225)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2149)) & 0x3fff] = -Acc;
	out[1] = tmp_3;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2149) - (225)) & 0x3fff] + tmp_15;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6109)) & 0x3fff] = -Acc;
};

export const midiverb2_effect_31: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0, tmp_b = 0, tmp_15 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (6109) - (123)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (4749) - (361)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (3446) - (205)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (2196) - (861)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (6109) - (126)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (4749) - (897)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (3446) - (202)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (2196) - (356)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (0) - (0)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (245)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (891)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (1568)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (1987)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (2746)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (3245)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	tmp_b = -Acc;
  tmp_b = (tmp_b << 16) >> 16;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (7382) - (245)) & 0x3fff] * 5 / 8) + Math.trunc(tmp_b / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7382)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (7135) - (189)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (7382) - (0)) & 0x3fff] / 2) + dram[(pointer + (7382) - (245)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7135)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (6944) - (145)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (7135) - (0)) & 0x3fff] / 2) + dram[(pointer + (7135) - (189)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6944)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (6797) - (123)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (6944) - (0)) & 0x3fff] / 2) + dram[(pointer + (6944) - (145)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6797)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (6672) - (198)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (6797) - (0)) & 0x3fff] / 2) + dram[(pointer + (6797) - (123)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6672)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (6672) - (0)) & 0x3fff] / 2) + dram[(pointer + (6672) - (198)) & 0x3fff] + Math.trunc(dram[(pointer + (6472) - (34)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6472)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (6472) - (34)) & 0x3fff] + Math.trunc(dram[(pointer + (6436) - (69)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6436)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (6436) - (69)) & 0x3fff] + Math.trunc(dram[(pointer + (6365) - (104)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6365)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (6365) - (104)) & 0x3fff] + Math.trunc(dram[(pointer + (6259) - (148)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6259)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (6259) - (148)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_15 = -Acc;
  tmp_15 = (tmp_15 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (6109) - (1123)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (4984) - (233)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4984)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (4984) - (233)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4749)) & 0x3fff] = Acc;
	Acc = Math.trunc(-dram[(pointer + (4749) - (1010)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (4749) - (1011)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (3737) - (289)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3737)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (3737) - (289)) & 0x3fff] + tmp_15;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6109)) & 0x3fff] = -Acc;
	out[0] = tmp_5;
	Acc = Math.trunc(dram[(pointer + (3446) - (990)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (2454) - (256)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2454)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2454) - (256)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2196)) & 0x3fff] = Acc;
	Acc = Math.trunc(-dram[(pointer + (2196) - (1371)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (2196) - (1372)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (823) - (225)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (823)) & 0x3fff] = -Acc;
	out[1] = tmp_3;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (823) - (225)) & 0x3fff] + tmp_15;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3446)) & 0x3fff] = -Acc;
};

export const midiverb2_effect_32: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0, tmp_b = 0, tmp_15 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (8865) - (123)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (7228) - (361)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (5925) - (505)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (4645) - (861)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (8865) - (626)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (7228) - (897)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (5925) - (56)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (4645) - (756)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (0) - (1000)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (999)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15384)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (15384) - (4423)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15384) - (3987)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15384) - (3231)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15384) - (2889)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15384) - (2221)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15384) - (1746)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15384) - (1341)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15384) - (923)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15384) - (523)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15384) - (109)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (876)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (435)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (235)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (0)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	tmp_b = -Acc;
  tmp_b = (tmp_b << 16) >> 16;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (10382) - (245)) & 0x3fff] * 5 / 8) + Math.trunc(tmp_b / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (10382)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (10135) - (189)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (10382) - (0)) & 0x3fff] / 2) + dram[(pointer + (10382) - (245)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (10135)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (9944) - (189)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (10135) - (0)) & 0x3fff] / 2) + dram[(pointer + (10135) - (189)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9944)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (9753) - (223)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (9944) - (0)) & 0x3fff] / 2) + dram[(pointer + (9944) - (189)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9753)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (9528) - (298)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (9753) - (0)) & 0x3fff] / 2) + dram[(pointer + (9753) - (223)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9528)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (9528) - (0)) & 0x3fff] / 2) + dram[(pointer + (9528) - (298)) & 0x3fff] + Math.trunc(dram[(pointer + (9228) - (34)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9228)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (9228) - (34)) & 0x3fff] + Math.trunc(dram[(pointer + (9192) - (69)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9192)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (9192) - (69)) & 0x3fff] + Math.trunc(dram[(pointer + (9121) - (104)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9121)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (9121) - (104)) & 0x3fff] + Math.trunc(dram[(pointer + (9015) - (148)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9015)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (9015) - (148)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_15 = -Acc;
  tmp_15 = (tmp_15 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (8865) - (1310)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (7553) - (323)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7553)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (7553) - (323)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7228)) & 0x3fff] = Acc;
	out[0] = tmp_5;
	Acc = Math.trunc(dram[(pointer + (7228) - (1010)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (6216) - (289)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6216)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (6216) - (289)) & 0x3fff] + tmp_15;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5925)) & 0x3fff] = -Acc;
	Acc = Math.trunc(dram[(pointer + (5925) - (1020)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4903)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (4903) - (256)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4645)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (4645) - (1071)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (3572) - (125)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3572)) & 0x3fff] = -Acc;
	out[1] = tmp_3;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (3572) - (125)) & 0x3fff] + tmp_15;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (8865)) & 0x3fff] = -Acc;
};

export const midiverb2_effect_33: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0, tmp_b = 0, tmp_15 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (6259) - (123)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (4899) - (361)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (3596) - (205)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (2346) - (861)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (6259) - (126)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (4899) - (897)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (3596) - (202)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (2346) - (356)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (0) - (0)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (245)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (891)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (1568)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (1987)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (2746)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (3245)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (3678)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (4232)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (4980)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (5123)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (5765)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (6345)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (7045)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (7589)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (8245)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (8531)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (8921)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	tmp_b = -Acc;
  tmp_b = (tmp_b << 16) >> 16;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (7382) - (245)) & 0x3fff] * 5 / 8) + Math.trunc(tmp_b / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7382)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (7135) - (189)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (7382) - (0)) & 0x3fff] / 2) + dram[(pointer + (7382) - (245)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7135)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (6944) - (145)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (7135) - (0)) & 0x3fff] / 2) + dram[(pointer + (7135) - (189)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6944)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (6797) - (123)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (6944) - (0)) & 0x3fff] / 2) + dram[(pointer + (6944) - (145)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6797)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (6672) - (198)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (6797) - (0)) & 0x3fff] / 2) + dram[(pointer + (6797) - (123)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6672)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (6672) - (0)) & 0x3fff] / 2) + dram[(pointer + (6672) - (198)) & 0x3fff] + Math.trunc(dram[(pointer + (6472) - (34)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6472)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (6472) - (34)) & 0x3fff] + Math.trunc(dram[(pointer + (6436) - (69)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6436)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (6436) - (69)) & 0x3fff] + Math.trunc(dram[(pointer + (6365) - (104)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6365)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (6365) - (104)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_15 = -Acc;
  tmp_15 = (tmp_15 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (6259) - (1123)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (5134) - (233)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5134)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (5134) - (233)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4899)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (4899) - (1010)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (3887) - (289)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3887)) & 0x3fff] = -Acc;
	out[0] = tmp_5;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (3887) - (289)) & 0x3fff] + Math.trunc(dram[(pointer + (746) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (746)) & 0x3fff] = Acc;
	Acc = Math.trunc(Acc * -3 / 4) + tmp_15;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6259)) & 0x3fff] = -Acc;
	Acc = Math.trunc(dram[(pointer + (3596) - (990)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (2604) - (256)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2604)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2604) - (256)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2346)) & 0x3fff] = Acc;
	out[1] = tmp_3;
	Acc = Math.trunc(dram[(pointer + (2346) - (1371)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (973) - (225)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (973)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (973) - (225)) & 0x3fff] + Math.trunc(dram[(pointer + (743) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (743)) & 0x3fff] = Acc;
	Acc = Math.trunc(Acc * -3 / 4) + tmp_15;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3596)) & 0x3fff] = -Acc;
};

export const midiverb2_effect_34: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0, tmp_b = 0, tmp_15 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (6109) - (123)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (4749) - (361)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (3446) - (205)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (2196) - (861)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (6109) - (126)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (4749) - (897)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (3446) - (202)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (2196) - (356)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (0) - (0)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (245)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (891)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (1568)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (1987)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (2746)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (3245)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (3678)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (4232)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (4980)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (5123)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (5765)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (6345)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (7045)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (7589)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (8245)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (8531)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (8921)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	tmp_b = -Acc;
  tmp_b = (tmp_b << 16) >> 16;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (7382) - (245)) & 0x3fff] * 5 / 8) + Math.trunc(tmp_b / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7382)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (7135) - (189)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (7382) - (0)) & 0x3fff] / 2) + dram[(pointer + (7382) - (245)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (7135)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (6944) - (145)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (7135) - (0)) & 0x3fff] / 2) + dram[(pointer + (7135) - (189)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6944)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (6797) - (123)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (6944) - (0)) & 0x3fff] / 2) + dram[(pointer + (6944) - (145)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6797)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (6672) - (198)) & 0x3fff] * 5 / 8) + Math.trunc(dram[(pointer + (6797) - (0)) & 0x3fff] / 2) + dram[(pointer + (6797) - (123)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6672)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 8) + Math.trunc(dram[(pointer + (6672) - (0)) & 0x3fff] / 2) + dram[(pointer + (6672) - (198)) & 0x3fff] + Math.trunc(dram[(pointer + (6472) - (34)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6472)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (6472) - (34)) & 0x3fff] + Math.trunc(dram[(pointer + (6436) - (69)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6436)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (6436) - (69)) & 0x3fff] + Math.trunc(dram[(pointer + (6365) - (104)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6365)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (6365) - (104)) & 0x3fff] + Math.trunc(dram[(pointer + (6259) - (148)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6259)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (6259) - (148)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_15 = -Acc;
  tmp_15 = (tmp_15 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (6109) - (1123)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (4984) - (233)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4984)) & 0x3fff] = -Acc;
	out[0] = tmp_5;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (4984) - (233)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4749)) & 0x3fff] = Acc;
	Acc = Math.trunc(-dram[(pointer + (4749) - (1010)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (4749) - (1011)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (3737) - (289)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3737)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (3737) - (289)) & 0x3fff] + tmp_15;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3446)) & 0x3fff] = -Acc;
	Acc = Math.trunc(dram[(pointer + (3446) - (990)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (2454) - (256)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2454)) & 0x3fff] = -Acc;
	out[1] = tmp_3;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2454) - (256)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2196)) & 0x3fff] = Acc;
	Acc = Math.trunc(-dram[(pointer + (2196) - (1371)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (2196) - (1372)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (823) - (225)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (823)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (823) - (225)) & 0x3fff] + tmp_15;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6109)) & 0x3fff] = -Acc;
};

export const midiverb2_effect_35: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = dram[(pointer + (11) - (2)) & 0x3fff] + Math.trunc(dram[(pointer + (2298) - (31)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2298)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2298) - (31)) & 0x3fff] + Math.trunc(dram[(pointer + (2265) - (153)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2265)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2265) - (153)) & 0x3fff] + Math.trunc(dram[(pointer + (2110) - (273)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2110)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[(pointer + (2110) - (273)) & 0x3fff] * 9 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_3 = -Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = dram[(pointer + (11) - (2)) & 0x3fff] + Math.trunc(dram[(pointer + (1835) - (42)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1835)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (1835) - (42)) & 0x3fff] + Math.trunc(dram[(pointer + (1791) - (181)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1791)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (1791) - (181)) & 0x3fff] + Math.trunc(dram[(pointer + (1608) - (233)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1608)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[(pointer + (1608) - (233)) & 0x3fff] * 9 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_5 = -Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (0) - (0)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (0)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (0) - (10)) & 0x3fff] * -3 / 8);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16373)) & 0x3fff] = -Acc;
	Acc = Math.trunc(dram[(pointer + (16373) - (220)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (401)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (523)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (750)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (864)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (64)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (118)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (232)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (433)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (554)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (741)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (861)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (1045)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (1148)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (1255)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (1442)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (1578)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (1720)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (1872)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (2035)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (2120)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (2266)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (2450)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (2568)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (2724)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (2888)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (3033)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (3151)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (3256)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (3491)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (3555)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11)) & 0x3fff] = -Acc;
	out[0] = tmp_5;
	Acc = Math.trunc(-dram[(pointer + (15383) - (8094)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (15383) - (7848)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (15383) - (7792)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (15383) - (7514)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (15383) - (7461)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (15383) - (7378)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (15383) - (7138)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (15383) - (7091)) & 0x3fff] / 16) + Math.trunc(dram[(pointer + (15383) - (6864)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (15383) - (6726)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (15383) - (6656)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (15383) - (6418)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (15383) - (6363)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (15383) - (6153)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (15383) - (6017)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (15383) - (5966)) & 0x3fff] / 8) + Math.trunc(-dram[(pointer + (15383) - (5727)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (15383) - (5656)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (15383) - (5494)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (15383) - (5318)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (15383) - (5260)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (15383) - (5018)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (15383) - (4957)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (15383) - (4733)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (15383) - (4626)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (4550)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (4338)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (4209)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (4045)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (3920)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (3799)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (3618)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (1373) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1373)) & 0x3fff] = Acc;
	out[1] = tmp_3;
	Acc = Math.trunc(-dram[(pointer + (1373) - (1)) & 0x3fff] / 4) + dram[(pointer + (11) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11)) & 0x3fff] = -Acc;
	Acc = Math.trunc(dram[(pointer + (16373) - (989)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (1370) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1370)) & 0x3fff] = -Acc;
	Acc = dram[(pointer + (1370) - (1)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15383)) & 0x3fff] = -Acc;
};

export const midiverb2_effect_36: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0;
	tmp_0 = input;
  tmp_0 = (tmp_0 << 16) >> 16;
	Acc = tmp_0;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1796)) & 0x3fff] = Acc;
	Acc = dram[(pointer + (1796) - (1500)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16383)) & 0x3fff] = -Acc;
	Acc = Math.trunc(dram[(pointer + (11) - (2)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (2298) - (21)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2298)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2298) - (21)) & 0x3fff] + Math.trunc(dram[(pointer + (2275) - (53)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2275)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2275) - (53)) & 0x3fff] + Math.trunc(dram[(pointer + (2220) - (173)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2220)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (2220) - (173)) & 0x3fff] * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (11) - (2)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (2045) - (32)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2045)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2045) - (32)) & 0x3fff] + Math.trunc(dram[(pointer + (2011) - (75)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2011)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2011) - (75)) & 0x3fff] + Math.trunc(dram[(pointer + (1934) - (133)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1934)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (1934) - (133)) & 0x3fff] * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (16383) - (4)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16379) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16379)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (16379) - (5)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16373)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (16373) - (152)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (222)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (401)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (523)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (750)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (864)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (1054)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (1108)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (1222)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (1423)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (1544)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (1731)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (1851)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (2035)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (2138)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (2245)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (2432)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (2568)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (2710)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (2862)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (3025)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (3110)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (3256)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (3440)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (3558)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11)) & 0x3fff] = -Acc;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_37: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0;
	tmp_0 = input;
  tmp_0 = (tmp_0 << 16) >> 16;
	Acc = dram[(pointer + (11) - (2)) & 0x3fff] + Math.trunc(dram[(pointer + (6298) - (31)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6298)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (6298) - (31)) & 0x3fff] + Math.trunc(dram[(pointer + (6265) - (153)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6265)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (6265) - (153)) & 0x3fff] + Math.trunc(dram[(pointer + (6110) - (273)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6110)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[(pointer + (6110) - (273)) & 0x3fff] * 9 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_3 = -Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = dram[(pointer + (11) - (2)) & 0x3fff] + Math.trunc(dram[(pointer + (5835) - (42)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5835)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (5835) - (42)) & 0x3fff] + Math.trunc(dram[(pointer + (5791) - (181)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5791)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (5791) - (181)) & 0x3fff] + Math.trunc(dram[(pointer + (5608) - (233)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5608)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[(pointer + (5608) - (233)) & 0x3fff] * 9 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_5 = -Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = tmp_0;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5364)) & 0x3fff] = -Acc;
	Acc = dram[(pointer + (5364) - (1500)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16382)) & 0x3fff] = -Acc;
	Acc = Math.trunc(dram[(pointer + (16382) - (2)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16380) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16380)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (16380) - (6)) & 0x3fff] * -3 / 8);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16373)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + Math.trunc(dram[(pointer + (16373) - (523)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (750)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (864)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (64)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (118)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (232)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (433)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (554)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (741)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (861)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (1045)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (1148)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (1255)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (1442)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (1578)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (1720)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (1872)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (2035)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (2120)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (2266)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (2450)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (2568)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (2724)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (2888)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (3033)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (3151)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (3256)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (3491)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (3555)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11)) & 0x3fff] = -Acc;
	out[0] = tmp_5;
	out[1] = tmp_3;
	Acc = Math.trunc(-dram[(pointer + (15383) - (8094)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (15383) - (7848)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (15383) - (7792)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (15383) - (7514)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (15383) - (7461)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (15383) - (7378)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (15383) - (7138)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (15383) - (7091)) & 0x3fff] / 16) + Math.trunc(dram[(pointer + (15383) - (6864)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (15383) - (6726)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (15383) - (6656)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (15383) - (6418)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (15383) - (6363)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (15383) - (6153)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (15383) - (6017)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (15383) - (5966)) & 0x3fff] / 8) + Math.trunc(-dram[(pointer + (15383) - (5727)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (15383) - (5656)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (15383) - (5494)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (15383) - (5318)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (15383) - (5260)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (15383) - (5018)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (15383) - (4957)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (15383) - (4733)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (15383) - (4626)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (4550)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (4338)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (4209)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (4045)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (3920)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (3799)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (3618)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (5373) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5373)) & 0x3fff] = Acc;
	Acc = Math.trunc(-dram[(pointer + (5373) - (1)) & 0x3fff] / 4) + dram[(pointer + (11) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11)) & 0x3fff] = -Acc;
	Acc = Math.trunc(dram[(pointer + (16373) - (989)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (5370) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5370)) & 0x3fff] = -Acc;
	Acc = dram[(pointer + (5370) - (1)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15383)) & 0x3fff] = -Acc;
};

export const midiverb2_effect_38: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0;
	tmp_0 = input;
  tmp_0 = (tmp_0 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (11) - (2)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (2298) - (21)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2298)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2298) - (21)) & 0x3fff] + Math.trunc(dram[(pointer + (2275) - (53)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2275)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2275) - (53)) & 0x3fff] + Math.trunc(dram[(pointer + (2220) - (173)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2220)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (2220) - (173)) & 0x3fff] * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (11) - (2)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (2045) - (32)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2045)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2045) - (32)) & 0x3fff] + Math.trunc(dram[(pointer + (2011) - (75)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2011)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2011) - (75)) & 0x3fff] + Math.trunc(dram[(pointer + (1934) - (133)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1934)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(dram[(pointer + (1934) - (133)) & 0x3fff] * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (16382) - (1)) & 0x3fff] * 3 / 4) + Math.trunc(tmp_0 / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16382)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (16382) - (8)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16373)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (16373) - (152)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (222)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (401)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (523)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (750)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (864)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (1054)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (1108)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (1222)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (1423)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (1544)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (1731)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (1851)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (2035)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (2138)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (2245)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (2432)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (2568)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (2710)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (2862)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (3025)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (3110)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (3256)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (3440)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (3558)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11)) & 0x3fff] = -Acc;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_39: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0;
	tmp_0 = input;
  tmp_0 = (tmp_0 << 16) >> 16;
	Acc = dram[(pointer + (11) - (2)) & 0x3fff] + Math.trunc(dram[(pointer + (2298) - (31)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2298)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2298) - (31)) & 0x3fff] + Math.trunc(dram[(pointer + (2265) - (153)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2265)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2265) - (153)) & 0x3fff] + Math.trunc(dram[(pointer + (2110) - (273)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2110)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[(pointer + (2110) - (273)) & 0x3fff] * 9 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_3 = -Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = dram[(pointer + (11) - (2)) & 0x3fff] + Math.trunc(dram[(pointer + (1835) - (42)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1835)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (1835) - (42)) & 0x3fff] + Math.trunc(dram[(pointer + (1791) - (181)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1791)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (1791) - (181)) & 0x3fff] + Math.trunc(dram[(pointer + (1608) - (233)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1608)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[(pointer + (1608) - (233)) & 0x3fff] * 9 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_5 = -Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (16382) - (1)) & 0x3fff] * 3 / 4) + Math.trunc(tmp_0 / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16382)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (16382) - (8)) & 0x3fff] * -3 / 8);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16373)) & 0x3fff] = -Acc;
	Acc = Math.trunc(dram[(pointer + (16373) - (220)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (401)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (523)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (750)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (864)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (64)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (118)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (232)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (433)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (554)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (741)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (861)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (1045)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (1148)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (1255)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (1442)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (1578)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (1720)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (1872)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (2035)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (2120)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (2266)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (2450)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (2568)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (2724)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (2888)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (3033)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (3151)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (3256)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (3491)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (3555)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11)) & 0x3fff] = -Acc;
	out[0] = tmp_5;
	out[1] = tmp_3;
	Acc = Math.trunc(-dram[(pointer + (15383) - (8094)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (15383) - (7848)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (15383) - (7792)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (15383) - (7514)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (15383) - (7461)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (15383) - (7378)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (15383) - (7138)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (15383) - (7091)) & 0x3fff] / 16) + Math.trunc(dram[(pointer + (15383) - (6864)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (15383) - (6726)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (15383) - (6656)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (15383) - (6418)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (15383) - (6363)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (15383) - (6153)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (15383) - (6017)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (15383) - (5966)) & 0x3fff] / 8) + Math.trunc(-dram[(pointer + (15383) - (5727)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (15383) - (5656)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (15383) - (5494)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (15383) - (5318)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (15383) - (5260)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (15383) - (5018)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (15383) - (4957)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (15383) - (4733)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (15383) - (4626)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (4550)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (4338)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (4209)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (4045)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (3920)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (3799)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (15383) - (3618)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (1373) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1373)) & 0x3fff] = Acc;
	Acc = Math.trunc(-dram[(pointer + (1373) - (1)) & 0x3fff] / 4) + dram[(pointer + (11) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11)) & 0x3fff] = -Acc;
	Acc = Math.trunc(dram[(pointer + (16373) - (989)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (1370) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1370)) & 0x3fff] = -Acc;
	Acc = dram[(pointer + (1370) - (1)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15383)) & 0x3fff] = -Acc;
};

export const midiverb2_effect_40: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0;
	tmp_0 = input;
  tmp_0 = (tmp_0 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (11) - (2)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (2298) - (51)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2298)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2298) - (51)) & 0x3fff] + Math.trunc(dram[(pointer + (2245) - (131)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2245)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2245) - (131)) & 0x3fff] + Math.trunc(dram[(pointer + (2112) - (213)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2112)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[(pointer + (2112) - (213)) & 0x3fff] * 9 / 4) + Math.trunc(dram[(pointer + (16382) - (11316)) & 0x3fff] * 9 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_3 = -Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (11) - (2)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (1897) - (62)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1897)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (1897) - (62)) & 0x3fff] + Math.trunc(dram[(pointer + (1833) - (105)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1833)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (1833) - (105)) & 0x3fff] + Math.trunc(dram[(pointer + (1726) - (189)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1726)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[(pointer + (1726) - (189)) & 0x3fff] * 9 / 4) + Math.trunc(dram[(pointer + (16382) - (11316)) & 0x3fff] * 9 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_5 = -Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(tmp_0 / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16382)) & 0x3fff] = Acc;
	Acc = Math.trunc(-dram[(pointer + (16382) - (231)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (16382) - (410)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (16382) - (759)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (16382) - (1063)) & 0x3fff] / 16) + Math.trunc(dram[(pointer + (16382) - (1231)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16382) - (1432)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16382) - (1740)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16382) - (1860)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16382) - (3034)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16382) - (2147)) & 0x3fff] / 8) + Math.trunc(-dram[(pointer + (16382) - (2254)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16382) - (2441)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16382) - (1553)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16382) - (2719)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16382) - (2871)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16382) - (2044)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (1535) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1535)) & 0x3fff] = Acc;
	Acc = Math.trunc(Acc * 3 / 32) + Math.trunc(dram[(pointer + (16382) - (3119)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (16382) - (3265)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (16382) - (3449)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (16382) - (3567)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (16382) - (5032)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (16382) - (3887)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (16382) - (4032)) & 0x3fff] / 32) + Math.trunc(-dram[(pointer + (16382) - (4725)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (16382) - (4255)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (16382) - (4490)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (16382) - (4554)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (16382) - (4847)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (16382) - (3723)) & 0x3fff] / 16) + Math.trunc(dram[(pointer + (16382) - (5127)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16382) - (5233)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16382) - (5419)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16382) - (5532)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16382) - (5757)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16382) - (6857)) & 0x3fff] / 8) + Math.trunc(-dram[(pointer + (16382) - (6033)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16382) - (6157)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16382) - (6221)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16382) - (7124)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (1532) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1532)) & 0x3fff] = Acc;
	out[0] = tmp_5;
	Acc = Math.trunc(Acc * 3 / 8) + Math.trunc(dram[(pointer + (16382) - (6532)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16382) - (6780)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16382) - (5835)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16382) - (7037)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16382) - (6444)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16382) - (7219)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16382) - (7437)) & 0x3fff] / 8) + Math.trunc(-dram[(pointer + (16382) - (7734)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16382) - (7889)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16382) - (8032)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16382) - (9213)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16382) - (8445)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16382) - (8563)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16382) - (9511)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (1529) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1529)) & 0x3fff] = Acc;
	out[1] = tmp_3;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(-dram[(pointer + (16382) - (8883)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16382) - (9010)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16382) - (9169)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16382) - (8144)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16382) - (9447)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16382) - (8698)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16382) - (9763)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16382) - (9865)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16382) - (10044)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16382) - (10108)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (16382) - (10283)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16382) - (10426)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16382) - (10576)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16382) - (10732)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16382) - (10813)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16382) - (11021)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16382) - (11252)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11)) & 0x3fff] = Acc;
};

export const midiverb2_effect_41: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (11) - (2)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (2298) - (21)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2298)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2298) - (21)) & 0x3fff] + Math.trunc(dram[(pointer + (2275) - (53)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2275)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2275) - (53)) & 0x3fff] + Math.trunc(dram[(pointer + (2220) - (173)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2220)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2220) - (173)) & 0x3fff] + dram[(pointer + (0) - (14000)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (11) - (2)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (2045) - (32)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2045)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2045) - (32)) & 0x3fff] + Math.trunc(dram[(pointer + (2011) - (75)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2011)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2011) - (75)) & 0x3fff] + Math.trunc(dram[(pointer + (1934) - (133)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1934)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (1934) - (133)) & 0x3fff] + dram[(pointer + (0) - (14000)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	out[1] = tmp_3;
	Acc = Math.trunc(Acc * 3 / 32) + Math.trunc(dram[(pointer + (0) - (1065)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (1119)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (1233)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (1434)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (1555)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (1742)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (1862)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (2046)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (3569)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (2256)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (2443)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (3121)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (2721)) & 0x3fff] / 32) + Math.trunc(-dram[(pointer + (0) - (2873)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (3036)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (2579)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (3267)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (3451)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (2149)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (3725)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (3889)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (4034)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (4152)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (4257)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (4492)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (4556)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (4727)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (4849)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (6035)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (5129)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (5235)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (6223)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (5534)) & 0x3fff] / 16) + Math.trunc(dram[(pointer + (0) - (5759)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (5837)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (5034)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (6159)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (5421)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (6446)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (6534)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (6782)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (6859)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (7039)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (7126)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (7221)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (8565)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (7534)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (7736)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (7891)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (9215)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (8146)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (8278)) & 0x3fff] / 8) + Math.trunc(-dram[(pointer + (0) - (8447)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (7439)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (8700)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (8885)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (9012)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (9171)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (8034)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (9449)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (9513)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (9765)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (9867)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (10046)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (10110)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (10285)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (12074)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (10578)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (10734)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (11715)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (11023)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (11185)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (0) - (11254)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (11479)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (11546)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (10815)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (11847)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (10428)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (12112)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (12279)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (12415)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (12516)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (12746)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (12815)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (13046)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (13217)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (13378)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (13534)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11)) & 0x3fff] = Acc;
};

export const midiverb2_effect_42: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (11) - (2)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (2298) - (21)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2298)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2298) - (21)) & 0x3fff] + Math.trunc(dram[(pointer + (2275) - (53)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2275)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2275) - (53)) & 0x3fff] + Math.trunc(dram[(pointer + (2220) - (173)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2220)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2220) - (173)) & 0x3fff] + dram[(pointer + (0) - (11718)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (11) - (2)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (2045) - (32)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2045)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2045) - (32)) & 0x3fff] + Math.trunc(dram[(pointer + (2011) - (75)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2011)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2011) - (75)) & 0x3fff] + Math.trunc(dram[(pointer + (1934) - (133)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1934)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (1934) - (133)) & 0x3fff] + dram[(pointer + (0) - (11718)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	out[1] = tmp_3;
	Acc = Math.trunc(dram[(pointer + (0) - (163)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (233)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (412)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (534)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (761)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (875)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (1065)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (1119)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (1233)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (1434)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (2579)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (1742)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (1862)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (3036)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (2149)) & 0x3fff] / 32) + Math.trunc(-dram[(pointer + (0) - (2256)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (2443)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (1555)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (2721)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (2873)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (2046)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (3121)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (3267)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (3451)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (3569)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (5034)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (3889)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (4034)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (4727)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (4257)) & 0x3fff] / 16) + Math.trunc(dram[(pointer + (0) - (4492)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (4556)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (4152)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (4849)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (3725)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (5129)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (5235)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (5421)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (5534)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (5759)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (6859)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (6035)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (6159)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (6223)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (7126)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (6534)) & 0x3fff] / 8) + Math.trunc(-dram[(pointer + (0) - (6782)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (5837)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (7039)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (6446)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (7221)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (7439)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (7534)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (7736)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (7891)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (8034)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (9215)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (8278)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (8447)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (8565)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (9513)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (8885)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (0) - (9012)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (9171)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (8146)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (9449)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (8700)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (9765)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (9867)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (10046)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (10110)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (10285)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (10428)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (10578)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (10734)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (10815)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (11023)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (11185)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (11254)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11)) & 0x3fff] = Acc;
};

export const midiverb2_effect_43: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (11) - (2)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (2298) - (21)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2298)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2298) - (21)) & 0x3fff] + Math.trunc(dram[(pointer + (2275) - (53)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2275)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2275) - (53)) & 0x3fff] + Math.trunc(dram[(pointer + (2220) - (173)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2220)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2220) - (173)) & 0x3fff] + dram[(pointer + (0) - (9375)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_3 = -Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (11) - (2)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (2045) - (32)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2045)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2045) - (32)) & 0x3fff] + Math.trunc(dram[(pointer + (2011) - (75)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2011)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2011) - (75)) & 0x3fff] + Math.trunc(dram[(pointer + (1934) - (133)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1934)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (1934) - (133)) & 0x3fff] + dram[(pointer + (0) - (9375)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_5 = -Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	Acc = Math.trunc(dram[(pointer + (0) - (163)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (233)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (412)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (534)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (761)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (875)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (2721)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (1119)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (1233)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (1434)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (2443)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (1742)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (1862)) & 0x3fff] / 32) + Math.trunc(-dram[(pointer + (0) - (2046)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (2149)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (2256)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (1555)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (2579)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (1065)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (2873)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (3036)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (4152)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (3267)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (3451)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (4492)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (3725)) & 0x3fff] / 16) + Math.trunc(dram[(pointer + (0) - (3889)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (4034)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (3121)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (4257)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (3569)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (4556)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (4727)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (4849)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (5837)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (5129)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (5235)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (5421)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (6159)) & 0x3fff] / 8) + Math.trunc(-dram[(pointer + (0) - (5759)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (5034)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (6035)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (5534)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (6223)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (6446)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (6534)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (8034)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (6859)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (7039)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (7736)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (7221)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (7439)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (0) - (7534)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (7126)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (7891)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (6782)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (8146)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (8278)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (8447)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (8565)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (8700)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11)) & 0x3fff] = -Acc;
	out[1] = tmp_3;
};

export const midiverb2_effect_44: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (11) - (2)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (2298) - (21)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2298)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2298) - (21)) & 0x3fff] + Math.trunc(dram[(pointer + (2275) - (53)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2275)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2275) - (53)) & 0x3fff] + Math.trunc(dram[(pointer + (2220) - (173)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2220)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2220) - (173)) & 0x3fff] + dram[(pointer + (0) - (7031)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_3 = -Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (11) - (2)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (2045) - (32)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2045)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2045) - (32)) & 0x3fff] + Math.trunc(dram[(pointer + (2011) - (75)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2011)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2011) - (75)) & 0x3fff] + Math.trunc(dram[(pointer + (1934) - (133)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1934)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (1934) - (133)) & 0x3fff] + dram[(pointer + (0) - (7031)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_5 = -Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (0) - (163)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (233)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (412)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (534)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (761)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (875)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (1434)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (1119)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (1862)) & 0x3fff] / 32) + Math.trunc(-dram[(pointer + (0) - (1065)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (1555)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (1742)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (1233)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (2046)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (2149)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (2873)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (2443)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (3121)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (2721)) & 0x3fff] / 16) + Math.trunc(dram[(pointer + (0) - (2256)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (3036)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (2579)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (3267)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (3451)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (3569)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (4492)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (3889)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (4034)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (4152)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (4849)) & 0x3fff] / 8) + Math.trunc(-dram[(pointer + (0) - (3725)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (4556)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (4727)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (4257)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (5034)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (5837)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (5235)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (5421)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (6159)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (0) - (5759)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (5129)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (6035)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (5534)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (6223)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (6446)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11)) & 0x3fff] = -Acc;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_45: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = dram[(pointer + (2190) - (1)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_3 = -Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = dram[(pointer + (2187) - (1)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_5 = -Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (2193) - (1)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2193)) & 0x3fff] = Acc;
	Acc = Math.trunc(-dram[(pointer + (11) - (1)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (2184) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2184)) & 0x3fff] = Acc;
	Acc = Math.trunc(Acc * 3 / 2) + dram[(pointer + (2193) - (1)) & 0x3fff] + Math.trunc(dram[(pointer + (16381) - (13)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16381)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (16381) - (13)) & 0x3fff] + Math.trunc(dram[(pointer + (16366) - (83)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16366)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (16366) - (83)) & 0x3fff] + Math.trunc(dram[(pointer + (16281) - (116)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16281)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (16281) - (116)) & 0x3fff] + Math.trunc(dram[(pointer + (16163) - (239)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16163)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (16163) - (239)) & 0x3fff] + Math.trunc(dram[(pointer + (15922) - (339)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15922)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (15922) - (339)) & 0x3fff] + Math.trunc(dram[(pointer + (15581) - (481)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15581)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (15581) - (481)) & 0x3fff] + Math.trunc(dram[(pointer + (15098) - (555)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15098)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (15098) - (555)) & 0x3fff] + Math.trunc(dram[(pointer + (14541) - (823)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14541)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (14541) - (823)) & 0x3fff] + Math.trunc(dram[(pointer + (13716) - (999)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13716)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (13716) - (999)) & 0x3fff] + Math.trunc(dram[(pointer + (12715) - (1100)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (12715)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (12715) - (1100)) & 0x3fff] + Math.trunc(dram[(pointer + (11613) - (1347)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11613)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (11613) - (1347)) & 0x3fff] + Math.trunc(dram[(pointer + (10264) - (1563)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (10264)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (10264) - (1563)) & 0x3fff] + Math.trunc(dram[(pointer + (8699) - (1841)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (8699)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (8699) - (1841)) & 0x3fff] + Math.trunc(dram[(pointer + (6856) - (2001)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6856)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (6856) - (2001)) & 0x3fff] + Math.trunc(dram[(pointer + (4853) - (2083)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4853)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (4853) - (2083)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11)) & 0x3fff] = -Acc;
	Acc = dram[(pointer + (11) - (0)) & 0x3fff] + Math.trunc(dram[(pointer + (2666) - (147)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2666)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2666) - (147)) & 0x3fff] + Math.trunc(dram[(pointer + (2768) - (43)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2768)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2768) - (43)) & 0x3fff] + Math.trunc(dram[(pointer + (2723) - (55)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2723)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2723) - (55)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2190)) & 0x3fff] = -Acc;
	Acc = dram[(pointer + (11) - (0)) & 0x3fff] + Math.trunc(dram[(pointer + (2444) - (249)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2444)) & 0x3fff] = -Acc;
	out[0] = tmp_5;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2444) - (249)) & 0x3fff] + Math.trunc(dram[(pointer + (2494) - (48)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2494)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2494) - (48)) & 0x3fff] + Math.trunc(dram[(pointer + (2517) - (21)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2517)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2517) - (21)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2187)) & 0x3fff] = -Acc;
	out[1] = tmp_3;
};

export const midiverb2_effect_46: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = dram[(pointer + (0) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3166)) & 0x3fff] = -Acc;
	Acc = dram[(pointer + (3166) - (2000)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (0)) & 0x3fff] = -Acc;
	Acc = Math.trunc(dram[(pointer + (11) - (2)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (4298) - (51)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4298)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (4298) - (51)) & 0x3fff] + Math.trunc(dram[(pointer + (4245) - (231)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4245)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (4245) - (231)) & 0x3fff] + Math.trunc(dram[(pointer + (4012) - (313)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4012)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[(pointer + (4012) - (313)) & 0x3fff] * 9 / 4) + Math.trunc(dram[(pointer + (16373) - (11307)) & 0x3fff] * 9 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_3 = -Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (11) - (2)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (3697) - (62)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3697)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (3697) - (62)) & 0x3fff] + Math.trunc(dram[(pointer + (3633) - (165)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3633)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (3633) - (165)) & 0x3fff] + Math.trunc(dram[(pointer + (3466) - (289)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3466)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[(pointer + (3466) - (289)) & 0x3fff] * 9 / 4) + Math.trunc(dram[(pointer + (16373) - (11307)) & 0x3fff] * 9 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_5 = -Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (0) - (10)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16373)) & 0x3fff] = Acc;
	Acc = Math.trunc(Acc * -3 / 16) + Math.trunc(-dram[(pointer + (16373) - (401)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (16373) - (750)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (16373) - (1054)) & 0x3fff] / 16) + Math.trunc(dram[(pointer + (16373) - (1222)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16373) - (1423)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16373) - (1731)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16373) - (1851)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16373) - (2138)) & 0x3fff] / 8) + Math.trunc(-dram[(pointer + (16373) - (2245)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (2432)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (1544)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (2710)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (2862)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (2035)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (3175) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3175)) & 0x3fff] = Acc;
	Acc = Math.trunc(Acc * 3 / 32) + Math.trunc(dram[(pointer + (16373) - (3110)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (16373) - (3256)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (16373) - (3558)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (16373) - (5023)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (16373) - (3878)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (16373) - (4023)) & 0x3fff] / 32) + Math.trunc(-dram[(pointer + (16373) - (4716)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (16373) - (4246)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (16373) - (4481)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (16373) - (4838)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (16373) - (3714)) & 0x3fff] / 16) + Math.trunc(dram[(pointer + (16373) - (5118)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16373) - (5224)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16373) - (5410)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16373) - (5523)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16373) - (5748)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16373) - (6848)) & 0x3fff] / 8) + Math.trunc(-dram[(pointer + (16373) - (6024)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (6212)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (7115)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (3172) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3172)) & 0x3fff] = Acc;
	out[0] = tmp_5;
	Acc = Math.trunc(Acc * 3 / 8) + Math.trunc(dram[(pointer + (16373) - (6523)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16373) - (5826)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16373) - (7028)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16373) - (6435)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16373) - (7210)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16373) - (7428)) & 0x3fff] / 8) + Math.trunc(-dram[(pointer + (16373) - (7725)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (7880)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (8023)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (9204)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (8436)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (8554)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (9502)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (3169) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (3169)) & 0x3fff] = Acc;
	out[1] = tmp_3;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(-dram[(pointer + (16373) - (8874)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (9001)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (9160)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (8135)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (9438)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (8689)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (9754)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (9856)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (10035)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (10099)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (16373) - (10274)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (10417)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (10567)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (10723)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (10804)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (11012)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (11243)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11)) & 0x3fff] = -Acc;
};

export const midiverb2_effect_47: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0;
	tmp_0 = input;
  tmp_0 = (tmp_0 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (11) - (2)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (2298) - (51)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2298)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2298) - (51)) & 0x3fff] + Math.trunc(dram[(pointer + (2245) - (131)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2245)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2245) - (131)) & 0x3fff] + Math.trunc(dram[(pointer + (2112) - (213)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2112)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[(pointer + (2112) - (213)) & 0x3fff] * 9 / 4) + Math.trunc(dram[(pointer + (16373) - (11307)) & 0x3fff] * 9 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_3 = -Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (11) - (2)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (1897) - (62)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1897)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (1897) - (62)) & 0x3fff] + Math.trunc(dram[(pointer + (1833) - (105)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1833)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (1833) - (105)) & 0x3fff] + Math.trunc(dram[(pointer + (1726) - (189)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1726)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[(pointer + (1726) - (189)) & 0x3fff] * 9 / 4) + Math.trunc(dram[(pointer + (16373) - (11307)) & 0x3fff] * 9 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_5 = -Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(tmp_0 / 2) + Math.trunc(dram[(pointer + (16373) - (11307)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16383)) & 0x3fff] = -Acc;
	Acc = Math.trunc(dram[(pointer + (16383) - (9)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16373)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + (16373) - (1222)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16373) - (1423)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16373) - (1731)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16373) - (1851)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16373) - (3025)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16373) - (2138)) & 0x3fff] / 8) + Math.trunc(-dram[(pointer + (16373) - (2245)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (2432)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (1544)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (2710)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (2862)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (2035)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (1535) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1535)) & 0x3fff] = Acc;
	Acc = Math.trunc(Acc * 3 / 32) + Math.trunc(dram[(pointer + (16373) - (3110)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (16373) - (3256)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (16373) - (3440)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (16373) - (3558)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (16373) - (5023)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (16373) - (3878)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (16373) - (4023)) & 0x3fff] / 32) + Math.trunc(-dram[(pointer + (16373) - (4716)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (16373) - (4246)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (16373) - (4481)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (16373) - (4545)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (16373) - (4838)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (16373) - (3714)) & 0x3fff] / 16) + Math.trunc(dram[(pointer + (16373) - (5118)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16373) - (5224)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16373) - (5410)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16373) - (5523)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16373) - (5748)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16373) - (6848)) & 0x3fff] / 8) + Math.trunc(-dram[(pointer + (16373) - (6024)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (6148)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (6212)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (7115)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (1532) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1532)) & 0x3fff] = Acc;
	out[0] = tmp_5;
	Acc = Math.trunc(Acc * 3 / 8) + Math.trunc(dram[(pointer + (16373) - (6523)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16373) - (6771)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16373) - (5826)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16373) - (7028)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16373) - (6435)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16373) - (7210)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16373) - (7428)) & 0x3fff] / 8) + Math.trunc(-dram[(pointer + (16373) - (7725)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (7880)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (8023)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (9204)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (8436)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (8554)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (9502)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (1529) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1529)) & 0x3fff] = Acc;
	out[1] = tmp_3;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(-dram[(pointer + (16373) - (8874)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (9001)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (9160)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (8135)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (9438)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (8689)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (9754)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (9856)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (10035)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16373) - (10099)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (16373) - (10274)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (10417)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (10567)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (10723)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (10804)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (11012)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16373) - (11243)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11)) & 0x3fff] = Acc;
};

export const midiverb2_effect_48: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (11) - (2)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (2298) - (51)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2298)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2298) - (51)) & 0x3fff] + Math.trunc(dram[(pointer + (2245) - (131)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2245)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2245) - (131)) & 0x3fff] + Math.trunc(dram[(pointer + (2112) - (213)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2112)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[(pointer + (2112) - (213)) & 0x3fff] * 9 / 4) + Math.trunc(dram[(pointer + (16364) - (11298)) & 0x3fff] * 9 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_3 = -Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (11) - (2)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (1897) - (62)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1897)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (1897) - (62)) & 0x3fff] + Math.trunc(dram[(pointer + (1833) - (105)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1833)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (1833) - (105)) & 0x3fff] + Math.trunc(dram[(pointer + (1726) - (189)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1726)) & 0x3fff] = -Acc;
	Acc = Math.trunc(Acc * -9 / 8) + Math.trunc(dram[(pointer + (1726) - (189)) & 0x3fff] * 9 / 4) + Math.trunc(dram[(pointer + (16364) - (11298)) & 0x3fff] * 9 / 4);
  Acc = (Acc << 16) >> 16;
	tmp_5 = -Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = dram[(pointer + (0) - (3)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1526)) & 0x3fff] = -Acc;
	Acc = dram[(pointer + (1526) - (1300)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16380)) & 0x3fff] = -Acc;
	Acc = Math.trunc(dram[(pointer + (16364) - (11298)) & 0x3fff] * 3 / 4) + Math.trunc(dram[(pointer + (0) - (0)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16364)) & 0x3fff] = -Acc;
	Acc = Math.trunc(dram[(pointer + (16364) - (1213)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16364) - (2129)) & 0x3fff] / 8) + Math.trunc(-dram[(pointer + (16364) - (2236)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16364) - (2853)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16364) - (2026)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (1535) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1535)) & 0x3fff] = Acc;
	Acc = Math.trunc(Acc * 3 / 32) + Math.trunc(dram[(pointer + (16364) - (3101)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (16364) - (3549)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (16364) - (5014)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (16364) - (3869)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (16364) - (4014)) & 0x3fff] / 32) + Math.trunc(-dram[(pointer + (16364) - (4707)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (16364) - (4237)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (16364) - (4472)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (16364) - (4536)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (16364) - (4829)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (16364) - (3705)) & 0x3fff] / 16) + Math.trunc(dram[(pointer + (16364) - (5109)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16364) - (5215)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16364) - (5401)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16364) - (5514)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16364) - (5739)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16364) - (6839)) & 0x3fff] / 8) + Math.trunc(-dram[(pointer + (16364) - (6015)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16364) - (6139)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16364) - (6203)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16364) - (7106)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (1532) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1532)) & 0x3fff] = Acc;
	out[0] = tmp_5;
	Acc = Math.trunc(Acc * 3 / 8) + Math.trunc(dram[(pointer + (16364) - (6514)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16364) - (6762)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16364) - (5817)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16364) - (7019)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16364) - (6426)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16364) - (7201)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (16364) - (7419)) & 0x3fff] / 8) + Math.trunc(-dram[(pointer + (16364) - (7716)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16364) - (7871)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16364) - (8014)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16364) - (9195)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16364) - (8427)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16364) - (8545)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16364) - (9493)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (1529) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1529)) & 0x3fff] = Acc;
	out[1] = tmp_3;
	Acc = Math.trunc(Acc * -3 / 4) + Math.trunc(-dram[(pointer + (16364) - (8865)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16364) - (8992)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16364) - (9151)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16364) - (8126)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16364) - (9429)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16364) - (8680)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16364) - (9745)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16364) - (9847)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16364) - (10026)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (16364) - (10090)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (16364) - (10265)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16364) - (10408)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16364) - (10558)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16364) - (10714)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16364) - (10795)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16364) - (11003)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16364) - (11234)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11)) & 0x3fff] = Acc;
};

export const midiverb2_effect_49: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = dram[(pointer + (191) - (1)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_3 = -Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = dram[(pointer + (188) - (1)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_5 = -Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (194) - (1)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (2000)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (194)) & 0x3fff] = Acc;
	Acc = Math.trunc(-dram[(pointer + (11) - (1)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (185) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (185)) & 0x3fff] = Acc;
	Acc = Math.trunc(Acc * 3 / 2) + dram[(pointer + (194) - (1)) & 0x3fff] + Math.trunc(dram[(pointer + (14382) - (13)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14382)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (14382) - (13)) & 0x3fff] + Math.trunc(dram[(pointer + (14367) - (83)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14367)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (14367) - (83)) & 0x3fff] + Math.trunc(dram[(pointer + (14282) - (116)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14282)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (14282) - (116)) & 0x3fff] + Math.trunc(dram[(pointer + (14164) - (239)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14164)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (14164) - (239)) & 0x3fff] + Math.trunc(dram[(pointer + (13923) - (339)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13923)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (13923) - (339)) & 0x3fff] + Math.trunc(dram[(pointer + (13582) - (481)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13582)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (13582) - (481)) & 0x3fff] + Math.trunc(dram[(pointer + (13099) - (555)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (13099)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (13099) - (555)) & 0x3fff] + Math.trunc(dram[(pointer + (12542) - (823)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (12542)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (12542) - (823)) & 0x3fff] + Math.trunc(dram[(pointer + (11717) - (999)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11717)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (11717) - (999)) & 0x3fff] + Math.trunc(dram[(pointer + (10716) - (1100)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (10716)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (10716) - (1100)) & 0x3fff] + Math.trunc(dram[(pointer + (9614) - (1347)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (9614)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (9614) - (1347)) & 0x3fff] + Math.trunc(dram[(pointer + (8265) - (1563)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (8265)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (8265) - (1563)) & 0x3fff] + Math.trunc(dram[(pointer + (6700) - (1841)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (6700)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (6700) - (1841)) & 0x3fff] + Math.trunc(dram[(pointer + (4857) - (2001)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (4857)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (4857) - (2001)) & 0x3fff] + Math.trunc(dram[(pointer + (2854) - (2083)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2854)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2854) - (2083)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (11)) & 0x3fff] = -Acc;
	Acc = dram[(pointer + (11) - (0)) & 0x3fff] + Math.trunc(dram[(pointer + (667) - (147)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (667)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (667) - (147)) & 0x3fff] + Math.trunc(dram[(pointer + (769) - (43)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (769)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (769) - (43)) & 0x3fff] + Math.trunc(dram[(pointer + (724) - (55)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (724)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (724) - (55)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (191)) & 0x3fff] = -Acc;
	Acc = dram[(pointer + (11) - (0)) & 0x3fff] + Math.trunc(dram[(pointer + (445) - (249)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (445)) & 0x3fff] = -Acc;
	out[0] = tmp_5;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (445) - (249)) & 0x3fff] + Math.trunc(dram[(pointer + (495) - (48)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (495)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (495) - (48)) & 0x3fff] + Math.trunc(dram[(pointer + (518) - (21)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (518)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (518) - (21)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (188)) & 0x3fff] = -Acc;
	out[1] = tmp_3;
};

export const midiverb2_effect_50: Midiverb2CStyleEffect = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
	tmp_0 = input;
  tmp_0 = (tmp_0 << 16) >> 16;
	Acc = tmp_0;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16282)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (88)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (5)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (89)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (4)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (90)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (3)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (91)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (2)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] * 81 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] * 81 / 128);
  Acc = (Acc << 16) >> 16;
	tmp_1f4a = Acc;
  tmp_1f4a = (tmp_1f4a << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f48 = Acc;
  tmp_1f48 = (tmp_1f48 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4c = Acc;
  tmp_1f4c = (tmp_1f4c << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f47 = Acc;
  tmp_1f47 = (tmp_1f47 << 16) >> 16;
	Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f49 = Acc;
  tmp_1f49 = (tmp_1f49 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4d = Acc;
  tmp_1f4d = (tmp_1f4d << 16) >> 16;
	Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4b = Acc;
  tmp_1f4b = (tmp_1f4b << 16) >> 16;
	switch ((lfo1Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f47 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_1f47;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_1f48;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_1f49;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_1f4a;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_1f4b;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_1f4c;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_1f4d;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_3 = -Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (88)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (5)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (89)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (4)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (90)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (3)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (91)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (2)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] * 27 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] * 27 / 64);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + ((4006 - (lfo2Value >> 8)))) & 0x3fff] = Acc;
	Acc = Math.trunc(Acc * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_faa = Acc;
  tmp_faa = (tmp_faa << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa8 = Acc;
  tmp_fa8 = (tmp_fa8 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fac = Acc;
  tmp_fac = (tmp_fac << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa7 = Acc;
  tmp_fa7 = (tmp_fa7 << 16) >> 16;
	Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa9 = Acc;
  tmp_fa9 = (tmp_fa9 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fad = Acc;
  tmp_fad = (tmp_fad << 16) >> 16;
	Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fab = Acc;
  tmp_fab = (tmp_fab << 16) >> 16;
	switch ((lfo2Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa7 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_fa7;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_fa8;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_fa9;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_faa;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_fab;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_fac;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_fad;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_5 = -Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	Acc = Math.trunc(-Acc / 32768);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16374)) & 0x3fff] = -Acc;
	out[1] = tmp_3;
};

export const midiverb2_effect_51: Midiverb2CStyleEffect = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
	tmp_0 = input;
  tmp_0 = (tmp_0 << 16) >> 16;
	Acc = tmp_0;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16282)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (88)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (5)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (89)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (4)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (90)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (3)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (91)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (2)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] * 81 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] * 81 / 128);
  Acc = (Acc << 16) >> 16;
	tmp_1f4a = Acc;
  tmp_1f4a = (tmp_1f4a << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f48 = Acc;
  tmp_1f48 = (tmp_1f48 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4c = Acc;
  tmp_1f4c = (tmp_1f4c << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f47 = Acc;
  tmp_1f47 = (tmp_1f47 << 16) >> 16;
	Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f49 = Acc;
  tmp_1f49 = (tmp_1f49 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4d = Acc;
  tmp_1f4d = (tmp_1f4d << 16) >> 16;
	Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4b = Acc;
  tmp_1f4b = (tmp_1f4b << 16) >> 16;
	switch ((lfo1Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f47 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_1f47;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_1f48;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_1f49;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_1f4a;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_1f4b;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_1f4c;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_1f4d;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (88)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (5)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (89)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (4)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (90)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (3)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (91)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (2)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] * 27 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] * 27 / 64);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + ((4006 - (lfo2Value >> 8)))) & 0x3fff] = Acc;
	Acc = Math.trunc(Acc * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_faa = Acc;
  tmp_faa = (tmp_faa << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa8 = Acc;
  tmp_fa8 = (tmp_fa8 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fac = Acc;
  tmp_fac = (tmp_fac << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa7 = Acc;
  tmp_fa7 = (tmp_fa7 << 16) >> 16;
	Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa9 = Acc;
  tmp_fa9 = (tmp_fa9 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fad = Acc;
  tmp_fad = (tmp_fad << 16) >> 16;
	Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fab = Acc;
  tmp_fab = (tmp_fab << 16) >> 16;
	switch ((lfo2Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa7 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_fa7;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_fa8;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_fa9;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_faa;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_fab;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_fac;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_fad;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	Acc = Math.trunc(Acc * 3 / 32768);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16374)) & 0x3fff] = -Acc;
	out[1] = tmp_3;
};

export const midiverb2_effect_52: Midiverb2CStyleEffect = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
	tmp_0 = input;
  tmp_0 = (tmp_0 << 16) >> 16;
	Acc = tmp_0;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16282)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (88)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (5)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (89)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (4)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (90)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (3)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (91)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (2)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] * 81 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] * 81 / 128);
  Acc = (Acc << 16) >> 16;
	tmp_1f4a = Acc;
  tmp_1f4a = (tmp_1f4a << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f48 = Acc;
  tmp_1f48 = (tmp_1f48 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4c = Acc;
  tmp_1f4c = (tmp_1f4c << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f47 = Acc;
  tmp_1f47 = (tmp_1f47 << 16) >> 16;
	Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f49 = Acc;
  tmp_1f49 = (tmp_1f49 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4d = Acc;
  tmp_1f4d = (tmp_1f4d << 16) >> 16;
	Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4b = Acc;
  tmp_1f4b = (tmp_1f4b << 16) >> 16;
	switch ((lfo1Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f47 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_1f47;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_1f48;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_1f49;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_1f4a;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_1f4b;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_1f4c;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_1f4d;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_3 = -Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (88)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (5)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (89)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (4)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (90)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (3)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (91)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (2)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] * 27 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] * 27 / 64);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + ((4006 - (lfo2Value >> 8)))) & 0x3fff] = Acc;
	Acc = Math.trunc(Acc * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_faa = Acc;
  tmp_faa = (tmp_faa << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa8 = Acc;
  tmp_fa8 = (tmp_fa8 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fac = Acc;
  tmp_fac = (tmp_fac << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa7 = Acc;
  tmp_fa7 = (tmp_fa7 << 16) >> 16;
	Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa9 = Acc;
  tmp_fa9 = (tmp_fa9 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fad = Acc;
  tmp_fad = (tmp_fad << 16) >> 16;
	Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fab = Acc;
  tmp_fab = (tmp_fab << 16) >> 16;
	switch ((lfo2Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa7 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_fa7;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_fa8;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_fa9;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_faa;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_fab;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_fac;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_fad;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_5 = -Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	Acc = Math.trunc(-Acc / 32768);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16374)) & 0x3fff] = -Acc;
	out[1] = tmp_3;
};

export const midiverb2_effect_53: Midiverb2CStyleEffect = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
	tmp_0 = input;
  tmp_0 = (tmp_0 << 16) >> 16;
	Acc = tmp_0;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16282)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (88)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (5)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (89)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (4)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (90)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (3)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (91)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (2)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] * 81 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] * 81 / 128);
  Acc = (Acc << 16) >> 16;
	tmp_1f4a = Acc;
  tmp_1f4a = (tmp_1f4a << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f48 = Acc;
  tmp_1f48 = (tmp_1f48 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4c = Acc;
  tmp_1f4c = (tmp_1f4c << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f47 = Acc;
  tmp_1f47 = (tmp_1f47 << 16) >> 16;
	Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f49 = Acc;
  tmp_1f49 = (tmp_1f49 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4d = Acc;
  tmp_1f4d = (tmp_1f4d << 16) >> 16;
	Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4b = Acc;
  tmp_1f4b = (tmp_1f4b << 16) >> 16;
	switch ((lfo1Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f47 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_1f47;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_1f48;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_1f49;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_1f4a;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_1f4b;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_1f4c;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_1f4d;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (88)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (5)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (89)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (4)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (90)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (3)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (91)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (2)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] * 27 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] * 27 / 64);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + ((4006 - (lfo2Value >> 8)))) & 0x3fff] = Acc;
	Acc = Math.trunc(Acc * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_faa = Acc;
  tmp_faa = (tmp_faa << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa8 = Acc;
  tmp_fa8 = (tmp_fa8 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fac = Acc;
  tmp_fac = (tmp_fac << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa7 = Acc;
  tmp_fa7 = (tmp_fa7 << 16) >> 16;
	Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa9 = Acc;
  tmp_fa9 = (tmp_fa9 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fad = Acc;
  tmp_fad = (tmp_fad << 16) >> 16;
	Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fab = Acc;
  tmp_fab = (tmp_fab << 16) >> 16;
	switch ((lfo2Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa7 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_fa7;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_fa8;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_fa9;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_faa;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_fab;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_fac;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_fad;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	Acc = Math.trunc(Acc * 3 / 32768);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16374)) & 0x3fff] = -Acc;
	out[1] = tmp_3;
};

export const midiverb2_effect_54: Midiverb2CStyleEffect = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
	tmp_0 = input;
  tmp_0 = (tmp_0 << 16) >> 16;
	Acc = tmp_0;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16282)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (88)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (5)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (89)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (4)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (90)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (3)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (91)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (2)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] * 81 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] * 81 / 128);
  Acc = (Acc << 16) >> 16;
	tmp_1f4a = Acc;
  tmp_1f4a = (tmp_1f4a << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f48 = Acc;
  tmp_1f48 = (tmp_1f48 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4c = Acc;
  tmp_1f4c = (tmp_1f4c << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f47 = Acc;
  tmp_1f47 = (tmp_1f47 << 16) >> 16;
	Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f49 = Acc;
  tmp_1f49 = (tmp_1f49 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4d = Acc;
  tmp_1f4d = (tmp_1f4d << 16) >> 16;
	Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4b = Acc;
  tmp_1f4b = (tmp_1f4b << 16) >> 16;
	switch ((lfo1Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f47 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_1f47;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_1f48;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_1f49;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_1f4a;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_1f4b;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_1f4c;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_1f4d;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_3 = -Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (88)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (5)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (89)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (4)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (90)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (3)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (91)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (2)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] * 27 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] * 27 / 64);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + ((4006 - (lfo2Value >> 8)))) & 0x3fff] = Acc;
	Acc = Math.trunc(Acc * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_faa = Acc;
  tmp_faa = (tmp_faa << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa8 = Acc;
  tmp_fa8 = (tmp_fa8 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fac = Acc;
  tmp_fac = (tmp_fac << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa7 = Acc;
  tmp_fa7 = (tmp_fa7 << 16) >> 16;
	Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa9 = Acc;
  tmp_fa9 = (tmp_fa9 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fad = Acc;
  tmp_fad = (tmp_fad << 16) >> 16;
	Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fab = Acc;
  tmp_fab = (tmp_fab << 16) >> 16;
	switch ((lfo2Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa7 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_fa7;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_fa8;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_fa9;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_faa;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_fab;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_fac;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_fad;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_5 = -Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	Acc = Math.trunc(-Acc / 32768);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16374)) & 0x3fff] = -Acc;
	out[1] = tmp_3;
};

export const midiverb2_effect_55: Midiverb2CStyleEffect = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
	tmp_0 = input;
  tmp_0 = (tmp_0 << 16) >> 16;
	Acc = tmp_0;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16282)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (88)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (5)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (89)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (4)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (90)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (3)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (91)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (2)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] * 81 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] * 81 / 128);
  Acc = (Acc << 16) >> 16;
	tmp_1f4a = Acc;
  tmp_1f4a = (tmp_1f4a << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f48 = Acc;
  tmp_1f48 = (tmp_1f48 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4c = Acc;
  tmp_1f4c = (tmp_1f4c << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f47 = Acc;
  tmp_1f47 = (tmp_1f47 << 16) >> 16;
	Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f49 = Acc;
  tmp_1f49 = (tmp_1f49 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4d = Acc;
  tmp_1f4d = (tmp_1f4d << 16) >> 16;
	Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4b = Acc;
  tmp_1f4b = (tmp_1f4b << 16) >> 16;
	switch ((lfo1Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f47 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_1f47;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_1f48;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_1f49;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_1f4a;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_1f4b;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_1f4c;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_1f4d;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (88)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (5)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (89)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (4)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (90)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (3)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (91)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (2)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] * 27 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] * 27 / 64);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + ((4006 - (lfo2Value >> 8)))) & 0x3fff] = Acc;
	Acc = Math.trunc(Acc * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_faa = Acc;
  tmp_faa = (tmp_faa << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa8 = Acc;
  tmp_fa8 = (tmp_fa8 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fac = Acc;
  tmp_fac = (tmp_fac << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa7 = Acc;
  tmp_fa7 = (tmp_fa7 << 16) >> 16;
	Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa9 = Acc;
  tmp_fa9 = (tmp_fa9 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fad = Acc;
  tmp_fad = (tmp_fad << 16) >> 16;
	Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fab = Acc;
  tmp_fab = (tmp_fab << 16) >> 16;
	switch ((lfo2Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa7 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_fa7;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_fa8;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_fa9;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_faa;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_fab;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_fac;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_fad;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	Acc = Math.trunc(Acc * 3 / 32768);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16374)) & 0x3fff] = -Acc;
	out[1] = tmp_3;
};

export const midiverb2_effect_56: Midiverb2CStyleEffect = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
	tmp_0 = input;
  tmp_0 = (tmp_0 << 16) >> 16;
	Acc = tmp_0;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16282)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (88)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (5)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (89)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (4)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (90)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (3)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (91)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (2)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] * 81 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] * 81 / 128);
  Acc = (Acc << 16) >> 16;
	tmp_1f4a = Acc;
  tmp_1f4a = (tmp_1f4a << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f48 = Acc;
  tmp_1f48 = (tmp_1f48 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4c = Acc;
  tmp_1f4c = (tmp_1f4c << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f47 = Acc;
  tmp_1f47 = (tmp_1f47 << 16) >> 16;
	Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f49 = Acc;
  tmp_1f49 = (tmp_1f49 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4d = Acc;
  tmp_1f4d = (tmp_1f4d << 16) >> 16;
	Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4b = Acc;
  tmp_1f4b = (tmp_1f4b << 16) >> 16;
	switch ((lfo1Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f47 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_1f47;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_1f48;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_1f49;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_1f4a;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_1f4b;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_1f4c;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_1f4d;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_3 = -Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (88)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (5)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (89)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (4)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (90)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (3)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (91)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (2)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] * 27 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] * 27 / 64);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + ((4006 - (lfo2Value >> 8)))) & 0x3fff] = Acc;
	Acc = Math.trunc(Acc * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_faa = Acc;
  tmp_faa = (tmp_faa << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa8 = Acc;
  tmp_fa8 = (tmp_fa8 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fac = Acc;
  tmp_fac = (tmp_fac << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa7 = Acc;
  tmp_fa7 = (tmp_fa7 << 16) >> 16;
	Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa9 = Acc;
  tmp_fa9 = (tmp_fa9 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fad = Acc;
  tmp_fad = (tmp_fad << 16) >> 16;
	Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fab = Acc;
  tmp_fab = (tmp_fab << 16) >> 16;
	switch ((lfo2Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa7 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_fa7;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_fa8;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_fa9;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_faa;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_fab;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_fac;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_fad;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_5 = -Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	Acc = Math.trunc(-Acc / 32768);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16374)) & 0x3fff] = -Acc;
	out[1] = tmp_3;
};

export const midiverb2_effect_57: Midiverb2CStyleEffect = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
	tmp_0 = input;
  tmp_0 = (tmp_0 << 16) >> 16;
	Acc = tmp_0;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16282)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (88)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (5)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (89)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (4)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (90)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (3)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (91)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (2)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] * 81 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] * 81 / 128);
  Acc = (Acc << 16) >> 16;
	tmp_1f4a = Acc;
  tmp_1f4a = (tmp_1f4a << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f48 = Acc;
  tmp_1f48 = (tmp_1f48 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4c = Acc;
  tmp_1f4c = (tmp_1f4c << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f47 = Acc;
  tmp_1f47 = (tmp_1f47 << 16) >> 16;
	Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f49 = Acc;
  tmp_1f49 = (tmp_1f49 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4d = Acc;
  tmp_1f4d = (tmp_1f4d << 16) >> 16;
	Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4b = Acc;
  tmp_1f4b = (tmp_1f4b << 16) >> 16;
	switch ((lfo1Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f47 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_1f47;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_1f48;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_1f49;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_1f4a;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_1f4b;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_1f4c;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_1f4d;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (88)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (5)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (89)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (4)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (90)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (3)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (91)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (2)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] * 27 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] * 27 / 64);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + ((4006 - (lfo2Value >> 8)))) & 0x3fff] = Acc;
	Acc = Math.trunc(Acc * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_faa = Acc;
  tmp_faa = (tmp_faa << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa8 = Acc;
  tmp_fa8 = (tmp_fa8 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fac = Acc;
  tmp_fac = (tmp_fac << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa7 = Acc;
  tmp_fa7 = (tmp_fa7 << 16) >> 16;
	Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa9 = Acc;
  tmp_fa9 = (tmp_fa9 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fad = Acc;
  tmp_fad = (tmp_fad << 16) >> 16;
	Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fab = Acc;
  tmp_fab = (tmp_fab << 16) >> 16;
	switch ((lfo2Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa7 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_fa7;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_fa8;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_fa9;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_faa;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_fab;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_fac;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_fad;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	Acc = Math.trunc(Acc * 3 / 32768);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16374)) & 0x3fff] = -Acc;
	out[1] = tmp_3;
};

export const midiverb2_effect_58: Midiverb2CStyleEffect = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
	tmp_0 = input;
  tmp_0 = (tmp_0 << 16) >> 16;
	Acc = tmp_0;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16282)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (88)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (5)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (89)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (4)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (90)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (3)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (91)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (2)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] * 81 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] * 81 / 128);
  Acc = (Acc << 16) >> 16;
	tmp_1f4a = Acc;
  tmp_1f4a = (tmp_1f4a << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f48 = Acc;
  tmp_1f48 = (tmp_1f48 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4c = Acc;
  tmp_1f4c = (tmp_1f4c << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f47 = Acc;
  tmp_1f47 = (tmp_1f47 << 16) >> 16;
	Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f49 = Acc;
  tmp_1f49 = (tmp_1f49 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4d = Acc;
  tmp_1f4d = (tmp_1f4d << 16) >> 16;
	Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4b = Acc;
  tmp_1f4b = (tmp_1f4b << 16) >> 16;
	switch ((lfo1Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f47 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_1f47;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_1f48;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_1f49;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_1f4a;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_1f4b;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_1f4c;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_1f4d;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_3 = -Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (88)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (5)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (89)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (4)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (90)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (3)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (91)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (2)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] * 27 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] * 27 / 64);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + ((4006 - (lfo2Value >> 8)))) & 0x3fff] = Acc;
	Acc = Math.trunc(Acc * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_faa = Acc;
  tmp_faa = (tmp_faa << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa8 = Acc;
  tmp_fa8 = (tmp_fa8 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fac = Acc;
  tmp_fac = (tmp_fac << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa7 = Acc;
  tmp_fa7 = (tmp_fa7 << 16) >> 16;
	Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa9 = Acc;
  tmp_fa9 = (tmp_fa9 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fad = Acc;
  tmp_fad = (tmp_fad << 16) >> 16;
	Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fab = Acc;
  tmp_fab = (tmp_fab << 16) >> 16;
	switch ((lfo2Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa7 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_fa7;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_fa8;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_fa9;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_faa;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_fab;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_fac;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_fad;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_5 = -Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	Acc = Math.trunc(-Acc / 32768);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16374)) & 0x3fff] = -Acc;
	out[1] = tmp_3;
};

export const midiverb2_effect_59: Midiverb2CStyleEffect = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
	tmp_0 = input;
  tmp_0 = (tmp_0 << 16) >> 16;
	Acc = tmp_0;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16282)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (88)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (5)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (89)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (4)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (90)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (3)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (91)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (2)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] * 81 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] * 81 / 128);
  Acc = (Acc << 16) >> 16;
	tmp_1f4a = Acc;
  tmp_1f4a = (tmp_1f4a << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f48 = Acc;
  tmp_1f48 = (tmp_1f48 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4c = Acc;
  tmp_1f4c = (tmp_1f4c << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f47 = Acc;
  tmp_1f47 = (tmp_1f47 << 16) >> 16;
	Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f49 = Acc;
  tmp_1f49 = (tmp_1f49 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4d = Acc;
  tmp_1f4d = (tmp_1f4d << 16) >> 16;
	Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4b = Acc;
  tmp_1f4b = (tmp_1f4b << 16) >> 16;
	switch ((lfo1Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f47 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_1f47;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_1f48;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_1f49;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_1f4a;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_1f4b;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_1f4c;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_1f4d;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (88)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (5)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (89)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (4)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (90)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (3)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (91)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (2)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] * 27 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] * 27 / 64);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + ((4006 - (lfo2Value >> 8)))) & 0x3fff] = Acc;
	Acc = Math.trunc(Acc * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_faa = Acc;
  tmp_faa = (tmp_faa << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa8 = Acc;
  tmp_fa8 = (tmp_fa8 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fac = Acc;
  tmp_fac = (tmp_fac << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa7 = Acc;
  tmp_fa7 = (tmp_fa7 << 16) >> 16;
	Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa9 = Acc;
  tmp_fa9 = (tmp_fa9 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fad = Acc;
  tmp_fad = (tmp_fad << 16) >> 16;
	Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fab = Acc;
  tmp_fab = (tmp_fab << 16) >> 16;
	switch ((lfo2Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa7 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_fa7;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_fa8;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_fa9;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_faa;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_fab;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_fac;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_fad;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	Acc = Math.trunc(Acc * 3 / 32768);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16374)) & 0x3fff] = -Acc;
	out[1] = tmp_3;
};

export const midiverb2_effect_60: Midiverb2CStyleEffect = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
	tmp_0 = input;
  tmp_0 = (tmp_0 << 16) >> 16;
	Acc = tmp_0;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16282)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (88)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (5)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (89)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (4)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (90)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (3)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (91)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (2)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] * 81 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] * 81 / 128);
  Acc = (Acc << 16) >> 16;
	tmp_1f4a = Acc;
  tmp_1f4a = (tmp_1f4a << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f48 = Acc;
  tmp_1f48 = (tmp_1f48 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4c = Acc;
  tmp_1f4c = (tmp_1f4c << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f47 = Acc;
  tmp_1f47 = (tmp_1f47 << 16) >> 16;
	Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f49 = Acc;
  tmp_1f49 = (tmp_1f49 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4d = Acc;
  tmp_1f4d = (tmp_1f4d << 16) >> 16;
	Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4b = Acc;
  tmp_1f4b = (tmp_1f4b << 16) >> 16;
	switch ((lfo1Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f47 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_1f47;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_1f48;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_1f49;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_1f4a;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_1f4b;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_1f4c;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_1f4d;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (88)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (5)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (89)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (4)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (90)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (3)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (91)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (2)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] * 27 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] * 27 / 64);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + ((4006 - (lfo2Value >> 8)))) & 0x3fff] = Acc;
	Acc = Math.trunc(Acc * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_faa = Acc;
  tmp_faa = (tmp_faa << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa8 = Acc;
  tmp_fa8 = (tmp_fa8 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fac = Acc;
  tmp_fac = (tmp_fac << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa7 = Acc;
  tmp_fa7 = (tmp_fa7 << 16) >> 16;
	Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa9 = Acc;
  tmp_fa9 = (tmp_fa9 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fad = Acc;
  tmp_fad = (tmp_fad << 16) >> 16;
	Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fab = Acc;
  tmp_fab = (tmp_fab << 16) >> 16;
	switch ((lfo2Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa7 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_fa7;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_fa8;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_fa9;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_faa;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_fab;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_fac;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_fad;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	Acc = Math.trunc(Acc * 3 / 32768);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16374)) & 0x3fff] = -Acc;
	out[1] = tmp_3;
};

export const midiverb2_effect_61: Midiverb2CStyleEffect = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
	tmp_0 = input;
  tmp_0 = (tmp_0 << 16) >> 16;
	Acc = tmp_0;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16282)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (88)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (5)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (89)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (4)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (90)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (3)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (91)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (2)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] * 81 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] * 81 / 128);
  Acc = (Acc << 16) >> 16;
	tmp_1f4a = Acc;
  tmp_1f4a = (tmp_1f4a << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f48 = Acc;
  tmp_1f48 = (tmp_1f48 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4c = Acc;
  tmp_1f4c = (tmp_1f4c << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f47 = Acc;
  tmp_1f47 = (tmp_1f47 << 16) >> 16;
	Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f49 = Acc;
  tmp_1f49 = (tmp_1f49 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4d = Acc;
  tmp_1f4d = (tmp_1f4d << 16) >> 16;
	Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4b = Acc;
  tmp_1f4b = (tmp_1f4b << 16) >> 16;
	switch ((lfo1Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f47 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_1f47;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_1f48;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_1f49;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_1f4a;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_1f4b;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_1f4c;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_1f4d;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (88)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (5)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (89)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (4)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (90)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (3)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (91)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (2)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] * 27 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] * 27 / 64);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + ((4006 - (lfo2Value >> 8)))) & 0x3fff] = Acc;
	Acc = Math.trunc(Acc * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_faa = Acc;
  tmp_faa = (tmp_faa << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa8 = Acc;
  tmp_fa8 = (tmp_fa8 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fac = Acc;
  tmp_fac = (tmp_fac << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa7 = Acc;
  tmp_fa7 = (tmp_fa7 << 16) >> 16;
	Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa9 = Acc;
  tmp_fa9 = (tmp_fa9 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fad = Acc;
  tmp_fad = (tmp_fad << 16) >> 16;
	Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fab = Acc;
  tmp_fab = (tmp_fab << 16) >> 16;
	switch ((lfo2Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa7 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_fa7;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_fa8;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_fa9;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_faa;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_fab;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_fac;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_fad;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	Acc = Math.trunc(Acc * 3 / 32768);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16374)) & 0x3fff] = -Acc;
	out[1] = tmp_3;
};

export const midiverb2_effect_62: Midiverb2CStyleEffect = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
	tmp_0 = input;
  tmp_0 = (tmp_0 << 16) >> 16;
	Acc = tmp_0;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16282)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (88)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (5)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (89)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (4)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (90)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (3)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (91)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (2)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] * 81 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] * 81 / 128);
  Acc = (Acc << 16) >> 16;
	tmp_1f4a = Acc;
  tmp_1f4a = (tmp_1f4a << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f48 = Acc;
  tmp_1f48 = (tmp_1f48 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4c = Acc;
  tmp_1f4c = (tmp_1f4c << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f47 = Acc;
  tmp_1f47 = (tmp_1f47 << 16) >> 16;
	Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f49 = Acc;
  tmp_1f49 = (tmp_1f49 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4d = Acc;
  tmp_1f4d = (tmp_1f4d << 16) >> 16;
	Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4b = Acc;
  tmp_1f4b = (tmp_1f4b << 16) >> 16;
	switch ((lfo1Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f47 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_1f47;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_1f48;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_1f49;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_1f4a;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_1f4b;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_1f4c;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_1f4d;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (88)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (5)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (89)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (4)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (90)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (3)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (91)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (2)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] * 27 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] * 27 / 64);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + ((4006 - (lfo2Value >> 8)))) & 0x3fff] = Acc;
	Acc = Math.trunc(Acc * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_faa = Acc;
  tmp_faa = (tmp_faa << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa8 = Acc;
  tmp_fa8 = (tmp_fa8 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fac = Acc;
  tmp_fac = (tmp_fac << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa7 = Acc;
  tmp_fa7 = (tmp_fa7 << 16) >> 16;
	Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa9 = Acc;
  tmp_fa9 = (tmp_fa9 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fad = Acc;
  tmp_fad = (tmp_fad << 16) >> 16;
	Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fab = Acc;
  tmp_fab = (tmp_fab << 16) >> 16;
	switch ((lfo2Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa7 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_fa7;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_fa8;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_fa9;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_faa;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_fab;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_fac;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_fad;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	Acc = Math.trunc(Acc * 3 / 32768);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16374)) & 0x3fff] = -Acc;
	out[1] = tmp_3;
};

export const midiverb2_effect_63: Midiverb2CStyleEffect = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
	tmp_0 = input;
  tmp_0 = (tmp_0 << 16) >> 16;
	Acc = tmp_0;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16282)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (88)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (5)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (89)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (4)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (90)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (3)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (91)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (2)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] * 81 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] * 81 / 128);
  Acc = (Acc << 16) >> 16;
	tmp_1f4a = Acc;
  tmp_1f4a = (tmp_1f4a << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f48 = Acc;
  tmp_1f48 = (tmp_1f48 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4c = Acc;
  tmp_1f4c = (tmp_1f4c << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f47 = Acc;
  tmp_1f47 = (tmp_1f47 << 16) >> 16;
	Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f49 = Acc;
  tmp_1f49 = (tmp_1f49 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4d = Acc;
  tmp_1f4d = (tmp_1f4d << 16) >> 16;
	Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4b = Acc;
  tmp_1f4b = (tmp_1f4b << 16) >> 16;
	switch ((lfo1Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f47 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_1f47;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_1f48;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_1f49;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_1f4a;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_1f4b;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_1f4c;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_1f4d;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (88)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (5)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (89)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (4)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (90)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (3)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (91)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (2)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] * 27 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] * 27 / 64);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + ((4006 - (lfo2Value >> 8)))) & 0x3fff] = Acc;
	Acc = Math.trunc(Acc * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_faa = Acc;
  tmp_faa = (tmp_faa << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa8 = Acc;
  tmp_fa8 = (tmp_fa8 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fac = Acc;
  tmp_fac = (tmp_fac << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa7 = Acc;
  tmp_fa7 = (tmp_fa7 << 16) >> 16;
	Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa9 = Acc;
  tmp_fa9 = (tmp_fa9 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fad = Acc;
  tmp_fad = (tmp_fad << 16) >> 16;
	Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fab = Acc;
  tmp_fab = (tmp_fab << 16) >> 16;
	switch ((lfo2Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa7 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_fa7;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_fa8;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_fa9;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_faa;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_fab;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_fac;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_fad;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	Acc = Math.trunc(Acc * 3 / 32768);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16374)) & 0x3fff] = -Acc;
	out[1] = tmp_3;
};

export const midiverb2_effect_64: Midiverb2CStyleEffect = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
	tmp_0 = input;
  tmp_0 = (tmp_0 << 16) >> 16;
	Acc = tmp_0;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16282)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (88)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (5)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (89)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (4)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (90)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (3)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (91)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (2)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] * 81 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] * 81 / 128);
  Acc = (Acc << 16) >> 16;
	tmp_1f4a = Acc;
  tmp_1f4a = (tmp_1f4a << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f48 = Acc;
  tmp_1f48 = (tmp_1f48 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4c = Acc;
  tmp_1f4c = (tmp_1f4c << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f47 = Acc;
  tmp_1f47 = (tmp_1f47 << 16) >> 16;
	Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f49 = Acc;
  tmp_1f49 = (tmp_1f49 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4d = Acc;
  tmp_1f4d = (tmp_1f4d << 16) >> 16;
	Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4b = Acc;
  tmp_1f4b = (tmp_1f4b << 16) >> 16;
	switch ((lfo1Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f47 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_1f47;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_1f48;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_1f49;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_1f4a;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_1f4b;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_1f4c;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_1f4d;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (88)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (5)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (89)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (4)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (90)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (3)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (91)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (2)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] * 27 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] * 27 / 64);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + ((4006 - (lfo2Value >> 8)))) & 0x3fff] = Acc;
	Acc = Math.trunc(Acc * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_faa = Acc;
  tmp_faa = (tmp_faa << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa8 = Acc;
  tmp_fa8 = (tmp_fa8 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fac = Acc;
  tmp_fac = (tmp_fac << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa7 = Acc;
  tmp_fa7 = (tmp_fa7 << 16) >> 16;
	Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa9 = Acc;
  tmp_fa9 = (tmp_fa9 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fad = Acc;
  tmp_fad = (tmp_fad << 16) >> 16;
	Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fab = Acc;
  tmp_fab = (tmp_fab << 16) >> 16;
	switch ((lfo2Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa7 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_fa7;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_fa8;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_fa9;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_faa;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_fab;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_fac;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_fad;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	Acc = Math.trunc(Acc * 3 / 32768);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16374)) & 0x3fff] = -Acc;
	out[1] = tmp_3;
};

export const midiverb2_effect_65: Midiverb2CStyleEffect = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
	tmp_0 = input;
  tmp_0 = (tmp_0 << 16) >> 16;
	Acc = tmp_0;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16282)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (88)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (5)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (89)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (4)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (90)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (3)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (91)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (2)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] * 81 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] * 81 / 128);
  Acc = (Acc << 16) >> 16;
	tmp_1f4a = Acc;
  tmp_1f4a = (tmp_1f4a << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f48 = Acc;
  tmp_1f48 = (tmp_1f48 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4c = Acc;
  tmp_1f4c = (tmp_1f4c << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f47 = Acc;
  tmp_1f47 = (tmp_1f47 << 16) >> 16;
	Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f49 = Acc;
  tmp_1f49 = (tmp_1f49 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4d = Acc;
  tmp_1f4d = (tmp_1f4d << 16) >> 16;
	Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4b = Acc;
  tmp_1f4b = (tmp_1f4b << 16) >> 16;
	switch ((lfo1Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f47 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_1f47;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_1f48;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_1f49;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_1f4a;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_1f4b;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_1f4c;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_1f4d;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (88)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (5)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (89)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (4)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (90)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (3)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (91)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (2)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] * 27 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] * 27 / 64);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + ((4006 - (lfo2Value >> 8)))) & 0x3fff] = Acc;
	Acc = Math.trunc(Acc * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_faa = Acc;
  tmp_faa = (tmp_faa << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa8 = Acc;
  tmp_fa8 = (tmp_fa8 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fac = Acc;
  tmp_fac = (tmp_fac << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa7 = Acc;
  tmp_fa7 = (tmp_fa7 << 16) >> 16;
	Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa9 = Acc;
  tmp_fa9 = (tmp_fa9 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fad = Acc;
  tmp_fad = (tmp_fad << 16) >> 16;
	Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fab = Acc;
  tmp_fab = (tmp_fab << 16) >> 16;
	switch ((lfo2Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa7 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_fa7;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_fa8;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_fa9;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_faa;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_fab;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_fac;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_fad;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	Acc = Math.trunc(Acc * 3 / 32768);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16374)) & 0x3fff] = -Acc;
	out[1] = tmp_3;
};

export const midiverb2_effect_66: Midiverb2CStyleEffect = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
	tmp_0 = input;
  tmp_0 = (tmp_0 << 16) >> 16;
	Acc = tmp_0;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16282)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (88)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (5)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (89)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (4)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (90)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (3)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (91)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (2)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] * 81 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] * 81 / 128);
  Acc = (Acc << 16) >> 16;
	tmp_1f4a = Acc;
  tmp_1f4a = (tmp_1f4a << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f48 = Acc;
  tmp_1f48 = (tmp_1f48 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4c = Acc;
  tmp_1f4c = (tmp_1f4c << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f47 = Acc;
  tmp_1f47 = (tmp_1f47 << 16) >> 16;
	Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f49 = Acc;
  tmp_1f49 = (tmp_1f49 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4d = Acc;
  tmp_1f4d = (tmp_1f4d << 16) >> 16;
	Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4b = Acc;
  tmp_1f4b = (tmp_1f4b << 16) >> 16;
	switch ((lfo1Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f47 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_1f47;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_1f48;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_1f49;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_1f4a;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_1f4b;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_1f4c;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_1f4d;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (88)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (5)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (89)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (4)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (90)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (3)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (91)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (2)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] * 27 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] * 27 / 64);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + ((4006 - (lfo2Value >> 8)))) & 0x3fff] = Acc;
	Acc = Math.trunc(Acc * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_faa = Acc;
  tmp_faa = (tmp_faa << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa8 = Acc;
  tmp_fa8 = (tmp_fa8 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fac = Acc;
  tmp_fac = (tmp_fac << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa7 = Acc;
  tmp_fa7 = (tmp_fa7 << 16) >> 16;
	Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa9 = Acc;
  tmp_fa9 = (tmp_fa9 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fad = Acc;
  tmp_fad = (tmp_fad << 16) >> 16;
	Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fab = Acc;
  tmp_fab = (tmp_fab << 16) >> 16;
	switch ((lfo2Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa7 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_fa7;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_fa8;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_fa9;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_faa;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_fab;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_fac;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_fad;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	Acc = Math.trunc(Acc * 3 / 32768);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16374)) & 0x3fff] = -Acc;
	out[1] = tmp_3;
};

export const midiverb2_effect_67: Midiverb2CStyleEffect = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
	tmp_0 = input;
  tmp_0 = (tmp_0 << 16) >> 16;
	Acc = tmp_0;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16282)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (88)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (5)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (89)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (4)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (90)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (3)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (91)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (2)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] * 81 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] * 81 / 128);
  Acc = (Acc << 16) >> 16;
	tmp_1f4a = Acc;
  tmp_1f4a = (tmp_1f4a << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f48 = Acc;
  tmp_1f48 = (tmp_1f48 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4c = Acc;
  tmp_1f4c = (tmp_1f4c << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f47 = Acc;
  tmp_1f47 = (tmp_1f47 << 16) >> 16;
	Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f49 = Acc;
  tmp_1f49 = (tmp_1f49 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4d = Acc;
  tmp_1f4d = (tmp_1f4d << 16) >> 16;
	Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4b = Acc;
  tmp_1f4b = (tmp_1f4b << 16) >> 16;
	switch ((lfo1Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f47 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_1f47;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_1f48;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_1f49;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_1f4a;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_1f4b;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_1f4c;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_1f4d;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (88)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (5)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (89)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (4)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (90)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (3)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (91)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (2)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] * 27 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] * 27 / 64);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + ((4006 - (lfo2Value >> 8)))) & 0x3fff] = Acc;
	Acc = Math.trunc(Acc * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_faa = Acc;
  tmp_faa = (tmp_faa << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa8 = Acc;
  tmp_fa8 = (tmp_fa8 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fac = Acc;
  tmp_fac = (tmp_fac << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa7 = Acc;
  tmp_fa7 = (tmp_fa7 << 16) >> 16;
	Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa9 = Acc;
  tmp_fa9 = (tmp_fa9 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fad = Acc;
  tmp_fad = (tmp_fad << 16) >> 16;
	Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fab = Acc;
  tmp_fab = (tmp_fab << 16) >> 16;
	switch ((lfo2Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa7 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_fa7;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_fa8;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_fa9;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_faa;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_fab;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_fac;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_fad;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	Acc = Math.trunc(Acc * 3 / 32768);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16374)) & 0x3fff] = -Acc;
	out[1] = tmp_3;
};

export const midiverb2_effect_68: Midiverb2CStyleEffect = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
	tmp_0 = input;
  tmp_0 = (tmp_0 << 16) >> 16;
	Acc = tmp_0;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16282)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (88)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (5)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (89)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (4)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (90)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (3)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (91)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (2)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] * 81 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] * 81 / 128);
  Acc = (Acc << 16) >> 16;
	tmp_1f4a = Acc;
  tmp_1f4a = (tmp_1f4a << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f48 = Acc;
  tmp_1f48 = (tmp_1f48 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4c = Acc;
  tmp_1f4c = (tmp_1f4c << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f47 = Acc;
  tmp_1f47 = (tmp_1f47 << 16) >> 16;
	Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f49 = Acc;
  tmp_1f49 = (tmp_1f49 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4d = Acc;
  tmp_1f4d = (tmp_1f4d << 16) >> 16;
	Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4b = Acc;
  tmp_1f4b = (tmp_1f4b << 16) >> 16;
	switch ((lfo1Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f47 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_1f47;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_1f48;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_1f49;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_1f4a;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_1f4b;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_1f4c;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_1f4d;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (88)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (5)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (89)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (4)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (90)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (3)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (91)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (2)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] * 27 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] * 27 / 64);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + ((4006 - (lfo2Value >> 8)))) & 0x3fff] = Acc;
	Acc = Math.trunc(Acc * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_faa = Acc;
  tmp_faa = (tmp_faa << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa8 = Acc;
  tmp_fa8 = (tmp_fa8 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fac = Acc;
  tmp_fac = (tmp_fac << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa7 = Acc;
  tmp_fa7 = (tmp_fa7 << 16) >> 16;
	Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa9 = Acc;
  tmp_fa9 = (tmp_fa9 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fad = Acc;
  tmp_fad = (tmp_fad << 16) >> 16;
	Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fab = Acc;
  tmp_fab = (tmp_fab << 16) >> 16;
	switch ((lfo2Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa7 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_fa7;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_fa8;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_fa9;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_faa;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_fab;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_fac;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_fad;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	Acc = Math.trunc(Acc * 3 / 32768);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16374)) & 0x3fff] = -Acc;
	out[1] = tmp_3;
};

export const midiverb2_effect_69: Midiverb2CStyleEffect = (input, out, dram, pointer, lfo1Value, lfo2Value) => {
  let Acc = 0, tmp_0 = 0, tmp_3 = 0, tmp_5 = 0, tmp_fa7 = 0, tmp_fa8 = 0, tmp_fa9 = 0, tmp_faa = 0, tmp_fab = 0, tmp_fac = 0, tmp_fad = 0, tmp_1f47 = 0, tmp_1f48 = 0, tmp_1f49 = 0, tmp_1f4a = 0, tmp_1f4b = 0, tmp_1f4c = 0, tmp_1f4d = 0;
	tmp_0 = input;
  tmp_0 = (tmp_0 << 16) >> 16;
	Acc = tmp_0;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16282)) & 0x3fff] = Acc;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (88)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (5)) & 0x3fff] * 27 / 1024) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (89)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (4)) & 0x3fff] * -27 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (90)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (3)) & 0x3fff] * 27 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo1Value >> 8))) - (91)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (2)) & 0x3fff] * -27 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] * 81 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] * 81 / 128);
  Acc = (Acc << 16) >> 16;
	tmp_1f4a = Acc;
  tmp_1f4a = (tmp_1f4a << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f48 = Acc;
  tmp_1f48 = (tmp_1f48 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4c = Acc;
  tmp_1f4c = (tmp_1f4c << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f47 = Acc;
  tmp_1f47 = (tmp_1f47 << 16) >> 16;
	Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f49 = Acc;
  tmp_1f49 = (tmp_1f49 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4d = Acc;
  tmp_1f4d = (tmp_1f4d << 16) >> 16;
	Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
	tmp_1f4b = Acc;
  tmp_1f4b = (tmp_1f4b << 16) >> 16;
	switch ((lfo1Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_1f47 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_1f47;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_1f47 / 2) + Math.trunc(tmp_1f48 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_1f48;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_1f48 / 2) + Math.trunc(tmp_1f49 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_1f49;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_1f49 / 2) + Math.trunc(tmp_1f4a / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_1f4a;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_1f4a / 2) + Math.trunc(tmp_1f4b / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_1f4b;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_1f4b / 2) + Math.trunc(tmp_1f4c / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_1f4c;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_1f4c / 2) + Math.trunc(tmp_1f4d / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_1f4d;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_1f4d / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo1Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (88)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (5)) & 0x3fff] * 9 / 512) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (89)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (4)) & 0x3fff] * -9 / 256) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (90)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (3)) & 0x3fff] * 9 / 128) + Math.trunc(dram[(pointer + ((16374 - (lfo2Value >> 8))) - (91)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (2)) & 0x3fff] * -9 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] * 27 / 64) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] * 27 / 64);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + ((4006 - (lfo2Value >> 8)))) & 0x3fff] = Acc;
	Acc = Math.trunc(Acc * 3 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_faa = Acc;
  tmp_faa = (tmp_faa << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa8 = Acc;
  tmp_fa8 = (tmp_fa8 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fac = Acc;
  tmp_fac = (tmp_fac << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa7 = Acc;
  tmp_fa7 = (tmp_fa7 << 16) >> 16;
	Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fa9 = Acc;
  tmp_fa9 = (tmp_fa9 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fad = Acc;
  tmp_fad = (tmp_fad << 16) >> 16;
	Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
	tmp_fab = Acc;
  tmp_fab = (tmp_fab << 16) >> 16;
	switch ((lfo2Value >> 4) & 15) {
	case 0:
		Acc = dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
		break;
	case 1:
		Acc = Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (0)) & 0x3fff] / 2) + Math.trunc(tmp_fa7 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 2:
		Acc = tmp_fa7;
  Acc = (Acc << 16) >> 16;
		break;
	case 3:
		Acc = Math.trunc(tmp_fa7 / 2) + Math.trunc(tmp_fa8 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 4:
		Acc = tmp_fa8;
  Acc = (Acc << 16) >> 16;
		break;
	case 5:
		Acc = Math.trunc(tmp_fa8 / 2) + Math.trunc(tmp_fa9 / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 6:
		Acc = tmp_fa9;
  Acc = (Acc << 16) >> 16;
		break;
	case 7:
		Acc = Math.trunc(tmp_fa9 / 2) + Math.trunc(tmp_faa / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 8:
		Acc = tmp_faa;
  Acc = (Acc << 16) >> 16;
		break;
	case 9:
		Acc = Math.trunc(tmp_faa / 2) + Math.trunc(tmp_fab / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 10:
		Acc = tmp_fab;
  Acc = (Acc << 16) >> 16;
		break;
	case 11:
		Acc = Math.trunc(tmp_fab / 2) + Math.trunc(tmp_fac / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 12:
		Acc = tmp_fac;
  Acc = (Acc << 16) >> 16;
		break;
	case 13:
		Acc = Math.trunc(tmp_fac / 2) + Math.trunc(tmp_fad / 2);
  Acc = (Acc << 16) >> 16;
		break;
	case 14:
		Acc = tmp_fad;
  Acc = (Acc << 16) >> 16;
		break;
	case 15:
		Acc = Math.trunc(tmp_fad / 2) + Math.trunc(dram[(pointer + ((16282 - (lfo2Value >> 8))) - (1)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
		break;
	}
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	Acc = Math.trunc(Acc * 3 / 32768);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16374)) & 0x3fff] = -Acc;
	out[1] = tmp_3;
};

export const midiverb2_effect_70: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = dram[(pointer + (0) - (1172)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = dram[(pointer + (0) - (1172)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_71: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = dram[(pointer + (0) - (1758)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = dram[(pointer + (0) - (1758)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_72: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = dram[(pointer + (0) - (2344)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = dram[(pointer + (0) - (2344)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_73: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = dram[(pointer + (0) - (3516)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = dram[(pointer + (0) - (3516)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_74: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = dram[(pointer + (0) - (4688)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = dram[(pointer + (0) - (4688)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_75: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = dram[(pointer + (0) - (4922)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = dram[(pointer + (0) - (4922)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_76: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = dram[(pointer + (0) - (5156)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = dram[(pointer + (0) - (5156)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_77: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = dram[(pointer + (0) - (5391)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = dram[(pointer + (0) - (5391)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_78: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = dram[(pointer + (0) - (5625)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = dram[(pointer + (0) - (5625)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_79: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = dram[(pointer + (0) - (5859)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = dram[(pointer + (0) - (5859)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_80: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = dram[(pointer + (0) - (6094)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = dram[(pointer + (0) - (6094)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_81: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = dram[(pointer + (0) - (6328)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = dram[(pointer + (0) - (6328)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_82: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = dram[(pointer + (0) - (6563)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = dram[(pointer + (0) - (6563)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_83: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = dram[(pointer + (0) - (6797)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = dram[(pointer + (0) - (6797)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_84: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = dram[(pointer + (0) - (7031)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = dram[(pointer + (0) - (7031)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_85: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = dram[(pointer + (0) - (7500)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = dram[(pointer + (0) - (7500)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_86: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = dram[(pointer + (0) - (7969)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = dram[(pointer + (0) - (7969)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_87: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = dram[(pointer + (0) - (9141)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = dram[(pointer + (0) - (9141)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_88: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = dram[(pointer + (0) - (11719)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = dram[(pointer + (0) - (11719)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_89: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = dram[(pointer + (0) - (14063)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = dram[(pointer + (0) - (14063)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_90: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (0) - (15705)) & 0x3fff] / 2) + dram[(pointer + (0) - (7853)) & 0x3fff] + Math.trunc(dram[(pointer + (330) - (41)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (330)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (330) - (41)) & 0x3fff] + Math.trunc(dram[(pointer + (287) - (195)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (287)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (287) - (195)) & 0x3fff] + Math.trunc(dram[(pointer + (90) - (63)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (90)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (90) - (63)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_5 = -Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (0) - (15705)) & 0x3fff] / 2) + dram[(pointer + (0) - (7853)) & 0x3fff] + Math.trunc(dram[(pointer + (677) - (49)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (677)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (677) - (49)) & 0x3fff] + Math.trunc(dram[(pointer + (626) - (114)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (626)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (626) - (114)) & 0x3fff] + Math.trunc(dram[(pointer + (510) - (178)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (510)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (510) - (178)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_3 = -Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_91: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = dram[(pointer + (0) - (5460)) & 0x3fff] + Math.trunc(dram[(pointer + (0) - (16378)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(tmp_5 * 21 / 32);
  Acc = (Acc << 16) >> 16;
	tmp_5 = -Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = dram[(pointer + (0) - (10919)) & 0x3fff] + Math.trunc(dram[(pointer + (0) - (16378)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(tmp_3 * 21 / 32);
  Acc = (Acc << 16) >> 16;
	tmp_3 = -Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_92: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (0) - (13998)) & 0x3fff] / 128) + Math.trunc(dram[(pointer + (0) - (13968)) & 0x3fff] / 128) + Math.trunc(dram[(pointer + (0) - (13955)) & 0x3fff] / 128) + Math.trunc(dram[(pointer + (0) - (13957)) & 0x3fff] / 128) + Math.trunc(dram[(pointer + (0) - (13815)) & 0x3fff] / 128) + Math.trunc(-dram[(pointer + (0) - (13819)) & 0x3fff] / 64) + Math.trunc(-dram[(pointer + (0) - (13749)) & 0x3fff] / 64) + Math.trunc(-dram[(pointer + (0) - (13756)) & 0x3fff] / 64) + Math.trunc(-dram[(pointer + (0) - (13676)) & 0x3fff] / 64) + Math.trunc(dram[(pointer + (0) - (13552)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (13319)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (13185)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (12927)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (12656)) & 0x3fff] / 32) + Math.trunc(-dram[(pointer + (0) - (12338)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (11919)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (11361)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (10683)) & 0x3fff] / 16) + Math.trunc(dram[(pointer + (0) - (9835)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (8775)) & 0x3fff] / 8) + Math.trunc(-dram[(pointer + (0) - (9450)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (5194)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (0) - (4501)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (2724)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (781)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	tmp_3 = -Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (0) - (13986)) & 0x3fff] / 128) + Math.trunc(dram[(pointer + (0) - (13919)) & 0x3fff] / 128) + Math.trunc(dram[(pointer + (0) - (13918)) & 0x3fff] / 128) + Math.trunc(dram[(pointer + (0) - (13972)) & 0x3fff] / 128) + Math.trunc(dram[(pointer + (0) - (13807)) & 0x3fff] / 128) + Math.trunc(dram[(pointer + (0) - (13854)) & 0x3fff] / 128) + Math.trunc(-dram[(pointer + (0) - (13727)) & 0x3fff] / 64) + Math.trunc(-dram[(pointer + (0) - (13619)) & 0x3fff] / 64) + Math.trunc(-dram[(pointer + (0) - (13519)) & 0x3fff] / 64) + Math.trunc(dram[(pointer + (0) - (13457)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (13289)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (13071)) & 0x3fff] / 32) + Math.trunc(-dram[(pointer + (0) - (12727)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (12449)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (12016)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (11571)) & 0x3fff] / 16) + Math.trunc(dram[(pointer + (0) - (10981)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (10160)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (9145)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (8913)) & 0x3fff] / 8) + Math.trunc(-dram[(pointer + (0) - (6873)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (4048)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (0) - (3041)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (1121)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	tmp_5 = -Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_93: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(dram[(pointer + (12) - (1)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (2298) - (67)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2298)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2298) - (67)) & 0x3fff] + Math.trunc(dram[(pointer + (2229) - (121)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (2229)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (2229) - (121)) & 0x3fff] + dram[(pointer + (0) - (14000)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_3 = -Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (10) - (1)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (1931) - (45)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1931)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (1931) - (45)) & 0x3fff] + Math.trunc(dram[(pointer + (1884) - (98)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (1884)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (1884) - (98)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_5 = -Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (0) - (1065)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (1233)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (1555)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (1862)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (3569)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (2443)) & 0x3fff] / 32) + Math.trunc(dram[(pointer + (0) - (2721)) & 0x3fff] / 32) + Math.trunc(-dram[(pointer + (0) - (2873)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (2579)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (3451)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (13112)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (3725)) & 0x3fff] / 16) + Math.trunc(-dram[(pointer + (0) - (3889)) & 0x3fff] / 16) + Math.trunc(dram[(pointer + (0) - (4152)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (4492)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (6035)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (12345)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (11111)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (5235)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (5534)) & 0x3fff] / 8) + Math.trunc(-dram[(pointer + (0) - (5759)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (5034)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (10211)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (9123)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (12781)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (5421)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (6534)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (0) - (6859)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (7126)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (8565)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (7736)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (9215)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (8146)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (10)) & 0x3fff] = -Acc;
	out[0] = tmp_5;
	out[1] = tmp_3;
	Acc = Math.trunc(dram[(pointer + (0) - (5759)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (5837)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (5034)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (6159)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (5421)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (6446)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (6534)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (6782)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (6859)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (7039)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (7126)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (7221)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (8565)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (7534)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (7736)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (7891)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (9215)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (8146)) & 0x3fff] / 8) + Math.trunc(dram[(pointer + (0) - (8278)) & 0x3fff] / 8) + Math.trunc(-dram[(pointer + (0) - (8447)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (7439)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (8700)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (8885)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (9012)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (9171)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (8034)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (9449)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (9513)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (9765)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (9867)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (10046)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (10110)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (10285)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (12074)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (10578)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (10734)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (11715)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (11023)) & 0x3fff] / 4) + Math.trunc(-dram[(pointer + (0) - (11185)) & 0x3fff] / 4) + Math.trunc(dram[(pointer + (0) - (11254)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (11479)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (11546)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (10815)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (11847)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (10428)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (12112)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (12279)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (12415)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (12516)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (12746)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (12815)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (13046)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (13217)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (13378)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (0) - (13534)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (12)) & 0x3fff] = -Acc;
};

export const midiverb2_effect_94: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = dram[(pointer + (0) - (1)) & 0x3fff] + Math.trunc(dram[(pointer + (5) - (1)) & 0x3fff] / 2) + Math.trunc(dram[(pointer + (16381) - (34)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16381)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (16381) - (34)) & 0x3fff] + Math.trunc(dram[(pointer + (16345) - (45)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16345)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (16345) - (45)) & 0x3fff] + Math.trunc(dram[(pointer + (16298) - (67)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16298)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (16298) - (67)) & 0x3fff] + Math.trunc(dram[(pointer + (16229) - (89)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16229)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (16229) - (89)) & 0x3fff] + Math.trunc(dram[(pointer + (16138) - (101)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16138)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (16138) - (101)) & 0x3fff] + Math.trunc(dram[(pointer + (16035) - (120)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16035)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (16035) - (120)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_3 = -Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = tmp_3;
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (5)) & 0x3fff] = -Acc;
	out[0] = dram[(pointer + (5) - (0)) & 0x3fff];
	out[1] = tmp_3;
};

export const midiverb2_effect_95: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = dram[(pointer + (0) - (150)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_3 = Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = dram[(pointer + (0) - (300)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_5 = Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_96: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = Math.trunc(-dram[(pointer + (14261) - (1)) & 0x3fff] / 4) + dram[(pointer + (14264) - (1)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_3 = -Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = Math.trunc(-dram[(pointer + (14264) - (1)) & 0x3fff] / 4) + dram[(pointer + (14261) - (1)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_5 = -Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = Math.trunc(dram[(pointer + (0) - (3)) & 0x3fff] * 3 / 2) + Math.trunc(dram[(pointer + (16089) - (15)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16089)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (16089) - (15)) & 0x3fff] + Math.trunc(dram[(pointer + (16072) - (22)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16072)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (16072) - (22)) & 0x3fff] + Math.trunc(dram[(pointer + (16048) - (29)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16048)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (16048) - (29)) & 0x3fff] + Math.trunc(dram[(pointer + (16017) - (45)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16017)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (16017) - (45)) & 0x3fff] + Math.trunc(dram[(pointer + (15970) - (61)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15970)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (15970) - (61)) & 0x3fff] + Math.trunc(dram[(pointer + (14997) - (105)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14997)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (14997) - (105)) & 0x3fff] + Math.trunc(dram[(pointer + (14890) - (149)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14890)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (14890) - (149)) & 0x3fff] + Math.trunc(dram[(pointer + (14739) - (213)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14739)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (14739) - (213)) & 0x3fff] + Math.trunc(dram[(pointer + (14524) - (258)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14524)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (14524) - (258)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14264)) & 0x3fff] = -Acc;
	Acc = Math.trunc(dram[(pointer + (0) - (3)) & 0x3fff] * 3 / 2) + Math.trunc(dram[(pointer + (15210) - (17)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15210)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (15210) - (17)) & 0x3fff] + Math.trunc(dram[(pointer + (15191) - (25)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15191)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (15191) - (25)) & 0x3fff] + Math.trunc(dram[(pointer + (15164) - (35)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15164)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (15164) - (35)) & 0x3fff] + Math.trunc(dram[(pointer + (15127) - (52)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15127)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (15127) - (52)) & 0x3fff] + Math.trunc(dram[(pointer + (15073) - (74)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15073)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (15073) - (74)) & 0x3fff] + Math.trunc(dram[(pointer + (15907) - (88)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15907)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (15907) - (88)) & 0x3fff] + Math.trunc(dram[(pointer + (15817) - (123)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15817)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (15817) - (123)) & 0x3fff] + Math.trunc(dram[(pointer + (15692) - (174)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15692)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (15692) - (174)) & 0x3fff] + Math.trunc(dram[(pointer + (15516) - (304)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (15516)) & 0x3fff] = -Acc;
	Acc = Math.trunc(-Acc / 2) + dram[(pointer + (15516) - (304)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (14261)) & 0x3fff] = -Acc;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_97: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = dram[(pointer + (16380) - (5859)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_3 = -Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = dram[(pointer + (16380) - (5859)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_5 = -Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = dram[(pointer + (0) - (2)) & 0x3fff] + Math.trunc(dram[(pointer + (16380) - (5859)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16380)) & 0x3fff] = Acc;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_98: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = dram[(pointer + (16380) - (8789)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_3 = -Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = dram[(pointer + (16380) - (8789)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_5 = -Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = dram[(pointer + (0) - (2)) & 0x3fff] + Math.trunc(dram[(pointer + (16380) - (8789)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16380)) & 0x3fff] = Acc;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2_effect_99: Midiverb2CStyleEffect = (input, out, dram, pointer, _lfo1Value, _lfo2Value) => {
  let Acc = 0, tmp_3 = 0, tmp_5 = 0;
	dram[(pointer + (0)) & 0x3fff] = input;
	Acc = dram[(pointer + (16380) - (11718)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_3 = -Acc;
  tmp_3 = (tmp_3 << 16) >> 16;
	Acc = dram[(pointer + (16380) - (11718)) & 0x3fff];
  Acc = (Acc << 16) >> 16;
	tmp_5 = -Acc;
  tmp_5 = (tmp_5 << 16) >> 16;
	Acc = dram[(pointer + (0) - (2)) & 0x3fff] + Math.trunc(dram[(pointer + (16380) - (11718)) & 0x3fff] / 2);
  Acc = (Acc << 16) >> 16;
	dram[(pointer + (16380)) & 0x3fff] = Acc;
	out[0] = tmp_5;
	out[1] = tmp_3;
};

export const midiverb2GeneratedEffects: (Midiverb2CStyleEffect | null)[] = [
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
  midiverb2_effect_99,
];
