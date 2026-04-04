import { LFO } from './LFO.js';

export class Chorus {
    private delayLineL: Float32Array;
    private delayLineR: Float32Array;
    private writeIndex: number = 0;

    private maxDelaySamples: number;
    private lfo: LFO;

    // Parameters
    private depthMs: number = 5.0; // Max sweep depth in ms
    private baseDelayMs: number = 10.0; // Base delay in ms
    private mix: number = 0.5; // 0.0 to 1.0
    private sampleRate: number = 44100;

    constructor(sampleRate: number) {
        this.sampleRate = sampleRate;
        // Max delay 50ms is plenty for chorus (44.1kHz * 0.05 = 2205 samples)
        this.maxDelaySamples = Math.ceil(sampleRate * 0.05);
        this.delayLineL = new Float32Array(this.maxDelaySamples);
        this.delayLineR = new Float32Array(this.maxDelaySamples);

        this.lfo = new LFO(sampleRate);
        this.lfo.setRate(1.0); // 1 Hz sweep
    }

    setParameters(rate: number, depth: number, mix: number) {
        this.lfo.setRate(rate);
        this.depthMs = depth;
        this.mix = mix;
    }

    process(inL: number, inR: number): [number, number] {
        // Calculate current delay based on LFO (-1 to 1) -> (0 to 1) sweep
        const lfoVal = this.lfo.process(); // -1.0 to 1.0
        const sweepVal = (lfoVal + 1.0) * 0.5; // 0.0 to 1.0

        const currentDelayMs = this.baseDelayMs + (sweepVal * this.depthMs);
        const currentDelaySamples = currentDelayMs * (this.sampleRate / 1000.0);

        // Calculate read index with linear interpolation
        let readPos = this.writeIndex - currentDelaySamples;
        if (readPos < 0) readPos += this.maxDelaySamples;

        const readIdx1 = Math.floor(readPos);
        let readIdx2 = readIdx1 + 1;
        if (readIdx2 >= this.maxDelaySamples) readIdx2 -= this.maxDelaySamples;
        const frac = readPos - readIdx1;

        // Left channel
        const dl1 = this.delayLineL[readIdx1];
        const dl2 = this.delayLineL[readIdx2];
        const delayOutL = dl1 + frac * (dl2 - dl1);

        // Right channel
        const dr1 = this.delayLineR[readIdx1];
        const dr2 = this.delayLineR[readIdx2];
        const delayOutR = dr1 + frac * (dr2 - dr1);

        // Write to delay line
        this.delayLineL[this.writeIndex] = inL;
        this.delayLineR[this.writeIndex] = inR;

        this.writeIndex++;
        if (this.writeIndex >= this.maxDelaySamples) {
            this.writeIndex = 0;
        }

        // Mix
        const outL = inL * (1.0 - this.mix) + delayOutL * this.mix;
        const outR = inR * (1.0 - this.mix) + delayOutR * this.mix;

        return [outL, outR];
    }
}
