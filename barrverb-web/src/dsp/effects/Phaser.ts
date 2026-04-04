import { LFO } from './LFO.js';

class AllPassFilter {
    private a1: number = 0.0;
    private z1: number = 0.0;

    setGain(a1: number) {
        this.a1 = a1;
    }

    process(input: number): number {
        const output = this.z1 - this.a1 * input;
        this.z1 = input + this.a1 * output;
        return output;
    }
}

export class Phaser {
    private stagesL: AllPassFilter[] = [];
    private stagesR: AllPassFilter[] = [];
    private lfo: LFO;
    private sampleRate: number;

    // Parameters
    private rate: number = 0.5;
    private depth: number = 0.8;
    private mix: number = 0.5;
    private feedback: number = 0.4;
    private stagesCount: number = 4;
    private z1FeedbackL: number = 0.0;
    private z1FeedbackR: number = 0.0;

    constructor(sampleRate: number) {
        this.sampleRate = sampleRate;
        this.lfo = new LFO(sampleRate);
        this.lfo.setRate(this.rate);

        for (let i = 0; i < this.stagesCount; i++) {
            this.stagesL.push(new AllPassFilter());
            this.stagesR.push(new AllPassFilter());
        }

    }

    // Instead of static LUT, we'll use an instance LUT since sampleRate might vary.
    private a1LUTLocal: Float32Array = new Float32Array(256);
    private lutInitialized = false;

    private initLUT() {
        for (let i = 0; i < 256; i++) {
            const fc = 400.0 + (3600.0 * (i / 255.0));
            const w = Math.tan(Math.PI * fc / this.sampleRate);
            this.a1LUTLocal[i] = (1.0 - w) / (1.0 + w);
        }
        this.lutInitialized = true;
    }

    setParameters(rate: number, depth: number, mix: number, feedback: number) {
        this.rate = rate;
        this.depth = depth; // depth controls the sweep range (0.0 to 1.0)
        this.mix = mix;
        this.feedback = feedback;
        this.lfo.setRate(this.rate);

        if (!this.lutInitialized) this.initLUT();
    }

    process(inL: number, inR: number): [number, number] {
        if (!this.lutInitialized) this.initLUT();

        const lfoVal = this.lfo.process(); // -1.0 to +1.0

        // Map LFO to a 0.0-1.0 range, scaled by depth
        const sweepVal = ((lfoVal + 1.0) * 0.5) * this.depth;
        // Base value without depth is 0.5 (center)
        const center = 0.5;
        // Final normalized sweep value (0.0 to 1.0)
        let normVal = center + (sweepVal - (this.depth * 0.5));
        if (normVal < 0.0) normVal = 0.0;
        if (normVal > 1.0) normVal = 1.0;

        // Use normalized sweep to index LUT
        const lutPos = normVal * 255.0;
        const idx1 = Math.floor(lutPos);
        let idx2 = idx1 + 1;
        if (idx2 > 255) idx2 = 255;
        const frac = lutPos - idx1;

        const a1Val1 = this.a1LUTLocal[idx1];
        const a1Val2 = this.a1LUTLocal[idx2];
        const a1 = a1Val1 + frac * (a1Val2 - a1Val1);

        // Calculate All-pass filter outputs
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

        // Mix
        const outL = inL * (1.0 - this.mix) + stageInL * this.mix;
        const outR = inR * (1.0 - this.mix) + stageInR * this.mix;

        return [outL, outR];
    }
}
