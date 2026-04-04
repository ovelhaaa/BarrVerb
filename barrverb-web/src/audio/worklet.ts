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

    private wetL: Float32Array;
    private wetR: Float32Array;

    constructor() {
        super();
        this.reverb = new BarrVerb();
        this.wetL = new Float32Array(128); // Will resize dynamically
        this.wetR = new Float32Array(128);

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
            } else if (data.type === 'setModulation') {
                this.mod.setParameters(data.modType, data.modRate, data.modDepth, data.modMix, data.modFeedback);
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

        const inputR = (input.length > 1 && input[1]) ? input[1] : inputL;

        const outputL = output[0];
        if (!outputL) return true;

        const outputR = (output.length > 1 && output[1]) ? output[1] : outputL;

        const frames = inputL.length;

        // Fast path for bypass
        if (this.bypass) {
            for (let i = 0; i < frames; i++) {
                outputL[i] = inputL[i] * this.outputGain;
                if (output.length > 1) {
                    outputR[i] = inputR[i] * this.outputGain;
                }
            }
            return true;
        }

        // Resize buffers if necessary
        if (this.wetL.length < frames) {
            this.wetL = new Float32Array(frames);
            this.wetR = new Float32Array(frames);
        }

        // --- 1. Reverb Processing ---
        this.reverb.process(inputL, inputR, this.wetL, this.wetR);

        // --- 2. Modulation & Mix Processing ---
        const dryLevel = 1.0 - this.wetMix;
        const wetLevel = this.wetMix;

        for (let i = 0; i < frames; i++) {
            // Apply modulation to the reverb wet signal
            const [modL, modR] = this.mod.process(this.wetL[i], this.wetR[i]);

            // Mix Dry + Modulated Wet
            outputL[i] = ((inputL[i] * dryLevel) + (modL * wetLevel)) * this.outputGain;

            if (output.length > 1) {
                outputR[i] = ((inputR[i] * dryLevel) + (modR * wetLevel)) * this.outputGain;
            }
        }

        return true; // Keep processor alive
    }
}

// @ts-ignore
registerProcessor('barrverb-processor', BarrVerbProcessor);
