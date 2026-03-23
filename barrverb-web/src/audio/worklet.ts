import { BarrVerb } from '../dsp/BarrVerb';
import { rom } from '../dsp/rom';

/**
 * AudioWorkletProcessor for BarrVerb.
 * Runs in a separate thread.
 */

// Declare missing AudioWorklet typings for the TS compiler
declare class AudioWorkletProcessor {
    readonly port: MessagePort;
    constructor();
    process(inputs: Float32Array[][], outputs: Float32Array[][], parameters: Record<string, Float32Array>): boolean;
}
declare function registerProcessor(name: string, processorCtor: (new (options?: any) => AudioWorkletProcessor)): void;
declare const sampleRate: number;

class BarrVerbProcessor extends AudioWorkletProcessor {
    private reverb: BarrVerb;
    private bypass: boolean = false;
    private wetMix: number = 0.5;
    private outputGain: number = 1.0;
    private wetL: Float32Array;
    private wetR: Float32Array;

    constructor() {
        super();
        this.reverb = new BarrVerb();

        // Ensure buffers are preallocated for max standard web audio block size (128)
        this.wetL = new Float32Array(128);
        this.wetR = new Float32Array(128);

        this.reverb.setSampleRate(sampleRate);
        this.reverb.setProgram(rom, 0);

        this.port.onmessage = (event: MessageEvent) => {
            const data = event.data;
            if (data.type === 'setProgram') {
                this.reverb.setProgram(rom, data.program);
            } else if (data.type === 'setMix') {
                this.wetMix = data.mix;
            } else if (data.type === 'setBypass') {
                this.bypass = data.bypass;
            } else if (data.type === 'setGain') {
                this.outputGain = data.gain;
            }
        };
    }

    process(inputs: Float32Array[][], outputs: Float32Array[][], _parameters: Record<string, Float32Array>): boolean {
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
                outputL[i] = inputL[i] * this.outputGain;
                if (output.length > 1) {
                    outputR[i] = inputR[i] * this.outputGain;
                }
            }
            return true;
        }

        // Reallocate if block size changes dynamically (rare but possible)
        if (this.wetL.length < frames) {
            this.wetL = new Float32Array(frames);
            this.wetR = new Float32Array(frames);
        }

        // Run Reverb DSP
        this.reverb.process(inputL, inputR, this.wetL, this.wetR);

        // Mix down
        const dryLevel = 1.0 - this.wetMix;
        const wetLevel = this.wetMix;

        for (let i = 0; i < frames; i++) {
            outputL[i] = (inputL[i] * dryLevel + this.wetL[i] * wetLevel) * this.outputGain;
            if (output.length > 1) {
                outputR[i] = (inputR[i] * dryLevel + this.wetR[i] * wetLevel) * this.outputGain;
            }
        }

        return true;
    }
}

registerProcessor('barrverb-processor', BarrVerbProcessor);
