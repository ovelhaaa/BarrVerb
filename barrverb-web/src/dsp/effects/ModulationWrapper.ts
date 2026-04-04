import { Chorus } from './Chorus.js';
import { Phaser } from './Phaser.js';

export class ModulationWrapper {
    private chorus: Chorus;
    private phaser: Phaser;

    // Type 0: None, 1: Chorus, 2: Phaser
    private type: number = 0;

    constructor(sampleRate: number) {
        this.chorus = new Chorus(sampleRate);
        this.phaser = new Phaser(sampleRate);
    }

    setParameters(type: number, rate: number, depth: number, mix: number, feedback: number) {
        this.type = type;
        if (type === 1) {
            this.chorus.setParameters(rate, depth, mix);
        } else if (type === 2) {
            this.phaser.setParameters(rate, depth, mix, feedback);
        }
    }

    process(inL: number, inR: number): [number, number] {
        if (this.type === 1) {
            return this.chorus.process(inL, inR);
        } else if (this.type === 2) {
            return this.phaser.process(inL, inR);
        }
        return [inL, inR];
    }
}
