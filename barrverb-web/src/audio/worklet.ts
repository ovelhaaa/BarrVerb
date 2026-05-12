import { BarrVerb } from '../dsp/BarrVerb.js';
import { rom } from '../dsp/rom.js';
import { ModulationWrapper } from '../dsp/effects/ModulationWrapper.js';

// @ts-ignore
class BarrVerbProcessor extends AudioWorkletProcessor {
    private reverb: BarrVerb;
    private mod: ModulationWrapper;

    private bypass: boolean = false;
    private wetMix: number = 0.5;
    private outputGain: number = 1.0;
    private inputGain: number = 0.35;
    private smoothedInputGain: number = 0.35;

    private wetL: Float32Array;
    private wetR: Float32Array;
    private inputLBuffer: Float32Array;
    private inputRBuffer: Float32Array;

    constructor() {
        super();
        this.reverb = new BarrVerb();
        this.wetL = new Float32Array(128); // Will resize dynamically
        this.wetR = new Float32Array(128);
        this.inputLBuffer = new Float32Array(128);
        this.inputRBuffer = new Float32Array(128);

        // Access global sampleRate provided by AudioWorkletGlobalScope
        // @ts-ignore
        this.reverb.setSampleRate(sampleRate);
        this.reverb.setProgram(rom, 0);

        // @ts-ignore
        this.mod = new ModulationWrapper(sampleRate);

        // @ts-ignore
        this.port.onmessage = (event: any) => {
            const data = event.data;
            if (data.type === 'setProgram') {
                this.reverb.setProgram(rom, data.program);
            } else if (data.type === 'setMix') {
                this.wetMix = data.mix;
            } else if (data.type === 'setBypass') {
                this.bypass = data.bypass;
            } else if (data.type === 'setGain') {
                this.outputGain = data.gain;
            } else if (data.type === 'setInputGain') {
                this.inputGain = Math.min(2.0, Math.max(0.0, data.inputGain));
            } else if (data.type === 'setModulation') {
                this.mod.setParameters(data.modType, data.modRate, data.modDepth, data.modMix, data.modFeedback);
            } else if (data.type === 'setUnit') {
                this.reverb.setEngine(data.engine);
                this.reverb.setFamily(data.family);
            }
        };
    }

    process(inputs: Float32Array[][], outputs: Float32Array[][], _parameters: Record<string, Float32Array>) {
        const input = inputs[0];
        const output = outputs[0];

        // Ensure we have valid I/O buffers
        if (!input || input.length === 0 || !output || output.length === 0) {
            return true;
        }

        const inputL = input[0];
        if (!inputL) return true; // Silent/empty input

        const rawInputR = (input.length > 1 && input[1]) ? input[1] : undefined;
        const inputR = rawInputR ?? inputL;

        const outputL = output[0];
        if (!outputL) return true;

        const outputR = (output.length > 1 && output[1]) ? output[1] : outputL;

        const frames = inputL.length;

        // Fast path for bypass: pass-through input (only output gain applies)
        if (this.bypass) {
            for (let i = 0; i < frames; i++) {
                const targetInputGain = this.inputGain;
                this.smoothedInputGain += (targetInputGain - this.smoothedInputGain) * 0.05;
                const bypassL = inputL[i] * this.outputGain;
                outputL[i] = Number.isFinite(bypassL) ? Math.max(-1, Math.min(1, bypassL)) : 0;
                if (output.length > 1) {
                    const bypassR = inputR[i] * this.outputGain;
                    outputR[i] = Number.isFinite(bypassR) ? Math.max(-1, Math.min(1, bypassR)) : 0;
                }
            }
            return true;
        }

        // Resize buffers if necessary
        if (this.wetL.length < frames) {
            this.wetL = new Float32Array(frames);
            this.wetR = new Float32Array(frames);
            this.inputLBuffer = new Float32Array(frames);
            this.inputRBuffer = new Float32Array(frames);
        }

        const preL = this.inputLBuffer;
        const preR = this.inputRBuffer;

        const targetInputGain = this.inputGain;
        const gains = new Float32Array(frames).map(() => {
            this.smoothedInputGain += (targetInputGain - this.smoothedInputGain) * 0.05;
            return this.smoothedInputGain;
        });
        preL.set(inputL.map((v, i) => v * gains[i]));
        preR.set(inputR.map((v, i) => v * gains[i]));

        // --- 1. Reverb Processing ---
        this.reverb.process(preL, preR, this.wetL, this.wetR);

        // --- 2. Modulation & Mix Processing ---
        const dryLevel = 1.0 - this.wetMix;
        const wetLevel = this.wetMix;

        for (let i = 0; i < frames; i++) {
            // Apply modulation to the reverb wet signal
            const [modL, modR] = this.mod.process(this.wetL[i], this.wetR[i]);

            // Mix Dry + Modulated Wet
            const mixedL = ((preL[i] * dryLevel) + (modL * wetLevel)) * this.outputGain;
            const mixedR = ((preR[i] * dryLevel) + (modR * wetLevel)) * this.outputGain;

            // Defensive sanitation: avoid NaN/Inf propagating to the output analyser
            // (which can pin the UI meter) and keep signal in WebAudio range.
            outputL[i] = Number.isFinite(mixedL) ? Math.max(-1, Math.min(1, mixedL)) : 0;

            if (output.length > 1) {
                outputR[i] = Number.isFinite(mixedR) ? Math.max(-1, Math.min(1, mixedR)) : 0;
            }
        }

        return true; // Keep processor alive
    }
}

// @ts-ignore
registerProcessor('barrverb-processor', BarrVerbProcessor);
