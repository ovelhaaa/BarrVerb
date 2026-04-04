export class LFO {
    private phase: number = 0;
    private phaseInc: number = 0;
    private sampleRate: number = 44100;
    private rate: number = 1.0;

    // Simple look-up table (LUT) for a sine wave (256 entries)
    private static sineLUT: Float32Array;

    constructor(sampleRate: number) {
        this.sampleRate = sampleRate;
        this.setRate(1.0);

        if (!LFO.sineLUT) {
            LFO.sineLUT = new Float32Array(256);
            for (let i = 0; i < 256; i++) {
                LFO.sineLUT[i] = Math.sin((i / 256.0) * Math.PI * 2.0);
            }
        }
    }

    setRate(rateHz: number) {
        this.rate = rateHz;
        // Phase goes from 0.0 to 1.0
        this.phaseInc = this.rate / this.sampleRate;
    }

    // Returns a value from -1.0 to 1.0
    process(): number {
        // Read from LUT with linear interpolation
        const pos = this.phase * 256.0;
        const index = Math.floor(pos);
        const frac = pos - index;

        const idx1 = index % 256;
        const idx2 = (index + 1) % 256;

        const val1 = LFO.sineLUT[idx1];
        const val2 = LFO.sineLUT[idx2];

        const out = val1 + frac * (val2 - val1);

        // Advance phase
        this.phase += this.phaseInc;
        if (this.phase >= 1.0) this.phase -= 1.0;

        return out;
    }
}
