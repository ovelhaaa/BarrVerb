export class AudioSystem {
    private ctx: AudioContext | null = null;
    private workletNode: AudioWorkletNode | null = null;
    private sourceNode: AudioNode | null = null;
    private stream: MediaStream | null = null;
    public isReady: boolean = false;

    // UI Callbacks
    public onReady?: () => void;
    public onError?: (msg: string) => void;
    public onLevels?: (inLevel: number, outLevel: number) => void;

    // Analyzer Nodes
    private analyserIn: AnalyserNode | null = null;
    private analyserOut: AnalyserNode | null = null;
    private rafId: number = 0;

    async initialize() {
        if (this.isReady) return;

        try {
            this.ctx = new AudioContext({ latencyHint: 'interactive' });

            // Register worklet
            // Using absolute path resolved via Vite base URL for robust GitHub Pages deployment
            const workletUrl = `${import.meta.env.BASE_URL}worklets/barrverb-worklet.js`;

            try {
                await this.ctx.audioWorklet.addModule(workletUrl);
            } catch (err: any) {
                console.error(`Failed to load worklet from: ${workletUrl}`, err);

                // Diagnostic fetch to distinguish 404 vs MIME/parse error
                try {
                    const res = await fetch(workletUrl);
                    console.error(`Diagnostic fetch for ${workletUrl} - status: ${res.status} (${res.statusText}), ok: ${res.ok}, type: ${res.headers.get('content-type')}`);
                } catch (fetchErr) {
                    console.error(`Diagnostic fetch also failed:`, fetchErr);
                }

                throw new Error(`Failed to load AudioWorklet module from ${workletUrl}: ${err.message}`);
            }

            this.workletNode = new AudioWorkletNode(this.ctx, 'barrverb-processor', {
                numberOfInputs: 1,
                numberOfOutputs: 1,
                outputChannelCount: [2]
            });

            // Set up Analyzers for level meters
            this.analyserIn = this.ctx.createAnalyser();
            this.analyserOut = this.ctx.createAnalyser();
            this.analyserIn.fftSize = 256;
            this.analyserOut.fftSize = 256;

            // Connect nodes
            this.workletNode.connect(this.analyserOut);
            this.analyserOut.connect(this.ctx.destination);

            this.isReady = true;
            this.startLevelLoop();
            if (this.onReady) this.onReady();

        } catch (e: any) {
            console.error("AudioWorklet initialization failed:", e);
            if (this.onError) this.onError(e.message || "Failed to initialize AudioContext.");
        }
    }

    async loadFile(file: File) {
        if (!this.ctx) return;
        this.stopSource();

        try {
            const buffer = await file.arrayBuffer();
            const audioBuffer = await this.ctx.decodeAudioData(buffer);
            this.playBuffer(audioBuffer);
        } catch (e) {
            if (this.onError) this.onError("Invalid audio file format.");
        }
    }

    async loadUrl(url: string) {
         if (!this.ctx) return;
         this.stopSource();

         try {
             const response = await fetch(url);
             const buffer = await response.arrayBuffer();
             const audioBuffer = await this.ctx.decodeAudioData(buffer);
             this.playBuffer(audioBuffer);
         } catch (e) {
             if (this.onError) this.onError("Failed to load embedded audio test file.");
         }
    }

    private playBuffer(buffer: AudioBuffer) {
        if (!this.ctx || !this.workletNode || !this.analyserIn) return;

        const source = this.ctx.createBufferSource();
        source.buffer = buffer;
        source.loop = true;

        source.connect(this.analyserIn);
        this.analyserIn.connect(this.workletNode);

        source.start();
        this.sourceNode = source;
    }

    async startMic() {
        if (!this.ctx || !this.workletNode || !this.analyserIn) return;
        this.stopSource();

        try {
            this.stream = await navigator.mediaDevices.getUserMedia({
                audio: {
                    echoCancellation: false,
                    noiseSuppression: false,
                    autoGainControl: false
                }
            });
            const source = this.ctx.createMediaStreamSource(this.stream);

            source.connect(this.analyserIn);
            this.analyserIn.connect(this.workletNode);
            this.sourceNode = source;
        } catch (e) {
            if (this.onError) this.onError("Microphone access denied.");
        }
    }

    stopSource() {
        if (this.sourceNode) {
            if (this.sourceNode instanceof AudioBufferSourceNode) {
                this.sourceNode.stop();
            }
            this.sourceNode.disconnect();
            this.sourceNode = null;
        }
        if (this.stream) {
            this.stream.getTracks().forEach(t => t.stop());
            this.stream = null;
        }
    }

    resume() {
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    // Controls
    setProgram(index: number) {
        if (this.workletNode) {
            this.workletNode.port.postMessage({ type: 'setProgram', program: index });
        }
    }

    setMix(mix: number) {
        if (this.workletNode) {
            this.workletNode.port.postMessage({ type: 'setMix', mix });
        }
    }

    setBypass(bypass: boolean) {
        if (this.workletNode) {
            this.workletNode.port.postMessage({ type: 'setBypass', bypass });
        }
    }

    setGain(gain: number) {
        if (this.workletNode) {
            this.workletNode.port.postMessage({ type: 'setGain', gain });
        }
    }

    setModulation(type: number, rate: number, depth: number, mix: number, feedback: number) {
        if (this.workletNode) {
            this.workletNode.port.postMessage({
                type: 'setModulation',
                modType: type,
                modRate: rate,
                modDepth: depth,
                modMix: mix,
                modFeedback: feedback
            });
        }
    }

    private startLevelLoop() {
        const dataIn = new Float32Array(256);
        const dataOut = new Float32Array(256);

        const loop = () => {
            if (this.analyserIn && this.analyserOut) {
                this.analyserIn.getFloatTimeDomainData(dataIn);
                this.analyserOut.getFloatTimeDomainData(dataOut);

                let maxIn = 0;
                let maxOut = 0;
                for (let i = 0; i < 256; i++) {
                    if (Math.abs(dataIn[i]) > maxIn) maxIn = Math.abs(dataIn[i]);
                    if (Math.abs(dataOut[i]) > maxOut) maxOut = Math.abs(dataOut[i]);
                }

                if (this.onLevels) this.onLevels(maxIn, maxOut);
            }
            this.rafId = requestAnimationFrame(loop);
        };
        loop();
    }

    cleanup() {
        cancelAnimationFrame(this.rafId);
        this.stopSource();
        if (this.ctx) this.ctx.close();
    }
}
