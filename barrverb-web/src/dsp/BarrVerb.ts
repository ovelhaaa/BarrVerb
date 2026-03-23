/**
 * BarrVerb DSP Core
 *
 * Ported from https://github.com/ovelhaaa/BarrVerb
 * This implements the SVF and the Instruction Interpreter exactly as in the C++ code.
 */

class SVF {
    private w: number = 0;
    private a: number = 0;
    private b: number = 0;
    private c1: number = 0;
    private c2: number = 0;
    private d0: number = 0;
    private z1: number = 0;
    private z2: number = 0;
    private x: number = 0;

    setFreq(cutoff: number, q: number, samplerate: number) {
        this.z1 = 0;
        this.z2 = 0;
        this.w = 2.0 * Math.tan(Math.PI * (cutoff / samplerate));
        this.a = this.w / q;
        this.b = this.w * this.w;
        this.c1 = (this.a + this.b) / (1.0 + this.a * 0.5 + this.b * 0.25);
        this.c2 = this.b / (this.a + this.b);
        this.d0 = this.c1 * this.c2 * 0.25;
    }

    lpStep(inVal: number): number {
        this.x = inVal - this.z1 - this.z2;
        this.z2 += this.c2 * this.z1;
        this.z1 += this.c1 * this.x;
        return this.d0 * this.x + this.z2;
    }
}

export class BarrVerb {
    private f1: SVF;
    private f2: SVF;

    private ai: number = 0;
    private li: number = 0;
    private acc: number = 0;
    private ptr: number = 0;

    // RAM is 16384 int16 (32KB). In JS we use Int16Array for performance
    private ram: Int16Array;

    // The active program instructions
    private currentProgram: Uint16Array;

    private sampleRate: number = 44100;

    constructor() {
        this.f1 = new SVF();
        this.f2 = new SVF();
        this.ram = new Int16Array(16384);
        this.currentProgram = new Uint16Array(128);
        this.setSampleRate(44100.0);
    }

    setSampleRate(sr: number) {
        this.sampleRate = sr;
        this.f1.setFreq(5916.0, 0.6572, this.sampleRate);
        this.f2.setFreq(9458.0, 2.536, this.sampleRate);
    }

    /**
     * Loads a 128-word program into the cache.
     * @param rom The full ROM Uint16Array
     * @param programIndex The index of the program (0-63)
     */
    setProgram(rom: Uint16Array, programIndex: number) {
        let prog = programIndex;
        if (prog > 63) prog = 0;
        const prog_offset = (prog & 0x3f) << 7; // * 128

        for (let i = 0; i < 128; i++) {
            this.currentProgram[i] = rom[prog_offset + i];
        }
    }

    /**
     * Process a stereo block.
     * inputs/outputs are non-interleaved arrays of Float32.
     * Since this is aimed at Web Audio API AudioWorklet,
     * input[0] is Left channel, input[1] is Right channel.
     * output[0] is Left channel, output[1] is Right channel.
     */
    process(inputL: Float32Array, inputR: Float32Array, outputL: Float32Array, outputR: Float32Array) {
        const frames = inputL.length;

        // Load state to local variables to hint V8 optimizer
        let l_acc = this.acc;
        let l_ptr = this.ptr;
        let l_ai = this.ai;
        let l_li = this.li;
        const l_ram = this.ram;
        const l_prog = this.currentProgram;

        // Original code processes 2 samples at a time in the block:
        // Filter is run every sample, but DSP engine runs every *other* sample.
        // The output of the DSP is written to both sample i and sample i+1.

        for (let i = 0; i < frames; i += 2) {
            // --- Sample i ---
            const mono1 = (inputL[i] + inputR[i]) * 0.5;
            const lp1 = this.f2.lpStep(this.f1.lpStep(mono1));

            // --- Sample i+1 ---
            if (i + 1 < frames) {
                const mono2 = (inputL[i + 1] + inputR[i + 1]) * 0.5;
                // Run filter to update state, but discard output as original does
                this.f2.lpStep(this.f1.lpStep(mono2));
            }

            // Prepare DSP input.
            // Original: dsp_in = (int16_t)(lp1 * 2048.0f)
            let dsp_in = Math.round(lp1 * 2048.0);

            // Clamp strictly to 16-bit integer bounds
            if (dsp_in > 32767) dsp_in = 32767;
            else if (dsp_in < -32768) dsp_in = -32768;

            let out_L = 0;
            let out_R = 0;

            // --- DSP Loop (128 steps) ---
            for (let step = 0; step < 128; step++) {
                const opcode = l_prog[step];

                // Check opcode top 2 bits
                const op = opcode & 0xc000;

                if (op === 0x0000) {
                    l_ai = l_ram[l_ptr];
                    // Using bitwise arithmetic for integer behavior
                    // In JS, >> is a 32-bit signed shift
                    l_li = l_acc + (l_ai >> 1);
                } else if (op === 0x4000) {
                    l_ai = l_ram[l_ptr];
                    l_li = (l_ai >> 1);
                } else if (op === 0x8000) {
                    l_ai = l_acc;
                    l_ram[l_ptr] = l_ai;
                    l_li = l_acc + (l_ai >> 1);
                } else if (op === 0xc000) {
                    l_ai = l_acc;
                    l_ram[l_ptr] = -l_ai;
                    l_li = -(l_ai >> 1);
                }

                // Clamp ai to 12-bit signed range (+/- 2047)
                if (l_ai > 2047) l_ai = 2047;
                else if (l_ai < -2047) l_ai = -2047;

                // Step-specific logic
                if (step === 0x00) {
                    l_ram[l_ptr] = dsp_in;
                } else if (step === 0x60) {
                    out_R = l_ai;
                } else if (step === 0x70) {
                    out_L = l_ai;
                } else {
                    l_acc = l_li;
                }

                // Update delay pointer
                l_ptr += opcode & 0x3fff;
                l_ptr &= 0x3fff;
            }

            // Output scaling
            // Original code: int16_t final_L = out_L * 16;
            // Float output in WebAudio is -1 to 1.
            // 32768 is full 16-bit float scale
            // (out_L * 16) / 32768 = out_L / 2048.0

            const final_L = out_L / 2048.0;
            const final_R = out_R / 2048.0;

            outputL[i] = final_L;
            outputR[i] = final_R;

            if (i + 1 < frames) {
                outputL[i + 1] = final_L;
                outputR[i + 1] = final_R;
            }
        }

        // Save state variables
        this.acc = l_acc;
        this.ptr = l_ptr;
        this.ai = l_ai;
        this.li = l_li;
    }
}
