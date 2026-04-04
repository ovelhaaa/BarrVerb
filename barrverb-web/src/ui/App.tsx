import React, { useEffect, useState, useRef } from 'react';
import { AudioSystem } from '../audio/audio';
import { prog_names } from '../dsp/rom';
import './App.css';

const audioSys = new AudioSystem();

function App() {
    const [ready, setReady] = useState(false);
    const [error, setError] = useState('');
    const [program, setProgram] = useState(0);
    const [mix, setMix] = useState(0.5);
    const [gain, setGain] = useState(1.0);
    const [bypass, setBypass] = useState(false);

    // Modulation State
    const [modType, setModType] = useState(0);
    const [modRate, setModRate] = useState(0.8);
    const [modDepth, setModDepth] = useState(5.0);
    const [modMix, setModMix] = useState(0.5);
    const [modFeedback, setModFeedback] = useState(0.5);

    const [inLevel, setInLevel] = useState(0);
    const [outLevel, setOutLevel] = useState(0);
    const [source, setSource] = useState<string>('none'); // 'none', 'mic', 'file', 'test'

    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        audioSys.onReady = () => setReady(true);
        audioSys.onError = (msg) => setError(msg);
        audioSys.onLevels = (inL, outL) => {
            setInLevel(inL);
            setOutLevel(outL);
        };
        return () => {
            audioSys.cleanup();
        };
    }, []);

    const handleInit = async () => {
        setError('');
        await audioSys.initialize();
        audioSys.resume();
    };

    const handleProgramChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const val = parseInt(e.target.value, 10);
        setProgram(val);
        audioSys.setProgram(val);
    };

    const handleMixChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = parseFloat(e.target.value);
        setMix(val);
        audioSys.setMix(val);
    };

    const handleGainChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = parseFloat(e.target.value);
        setGain(val);
        audioSys.setGain(val);
    };

    const handleBypassToggle = () => {
        const val = !bypass;
        setBypass(val);
        audioSys.setBypass(val);
    };

    useEffect(() => {
        if (ready) {
            audioSys.setModulation(modType, modRate, modDepth, modMix, modFeedback);
        }
    }, [modType, modRate, modDepth, modMix, modFeedback, ready]);

    const playTestLoop = () => {
        setSource('test');
        audioSys.resume();
        audioSys.loadUrl(`${import.meta.env.BASE_URL}test-loop.wav`);
    };

    const playMic = () => {
        setSource('mic');
        audioSys.resume();
        audioSys.startMic();
    };

    const stopAudio = () => {
        setSource('none');
        audioSys.stopSource();
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSource('file');
            audioSys.resume();
            audioSys.loadFile(file);
        }
    };

    // Calculate level meter width (0 to 100%)
    const inMeter = Math.min(inLevel * 100, 100);
    const outMeter = Math.min(outLevel * 100, 100);

    return (
        <div className="container midiverb-skin">
            <header>
                <h1 className="brand-logo">MIDIWEB 1986</h1>
                <p className="brand-subtitle">Simulador MIDIVERB baseado no plugin Barrverb</p>
            </header>

            {error && <div className="error-box">{error}</div>}

            {!ready ? (
                <div className="init-box">
                    <button className="pad pad-primary" onClick={handleInit}>Iniciar Engine de Áudio</button>
                    <p className="note">É necessário clicar para permitir o uso da Web Audio API no navegador.</p>
                </div>
            ) : (
                <div className="panel">
                    <div className="program-panel">
                        <div className="controls">
                            <div className="control-group program-group">
                                <div className="program-header">
                                    <label htmlFor="program-select">Program: {prog_names[program]}</label>
                                    <div className="led" aria-hidden="true">
                                        {program.toString().padStart(2, '0')}
                                    </div>
                                </div>
                                <select id="program-select" value={program} onChange={handleProgramChange}>
                                    {prog_names.map((name, i) => (
                                        <option key={i} value={i}>
                                            {i.toString().padStart(2, '0')} - {name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                        <div className="control-group">
                            <label>Dry / Wet: {Math.round(mix * 100)}%</label>
                            <input
                                type="range"
                                min="0" max="1" step="0.01"
                                value={mix} onChange={handleMixChange}
                            />
                        </div>

                        <div className="control-group">
                            <label>Output Gain: {gain.toFixed(2)}x</label>
                            <input
                                type="range"
                                min="0" max="2" step="0.05"
                                value={gain} onChange={handleGainChange}
                            />
                        </div>

                            <div className="control-group switch-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={bypass}
                                        onChange={handleBypassToggle}
                                    />
                                    Bypass Effect
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="modulation-panel">
                        <h3>Modulação (Pós-Reverb)</h3>
                        <div className="controls">
                            <div className="control-group">
                                <label>Mod Effect:</label>
                                <select value={modType} onChange={(e) => setModType(parseInt(e.target.value, 10))}>
                                    <option value={0}>Off</option>
                                    <option value={1}>Chorus / Flanger</option>
                                    <option value={2}>Phaser</option>
                                </select>
                            </div>

                            {modType > 0 && (
                                <>
                                    <div className="control-group">
                                        <label>Rate: {modRate.toFixed(2)} Hz</label>
                                        <input
                                            type="range"
                                            min="0.1" max="10" step="0.1"
                                            value={modRate} onChange={(e) => setModRate(parseFloat(e.target.value))}
                                        />
                                    </div>
                                    <div className="control-group">
                                        <label>Depth: {modType === 1 ? `${modDepth.toFixed(1)} ms` : `${Math.round(modDepth * 100)}%`}</label>
                                        <input
                                            type="range"
                                            min="0.1" max={modType === 1 ? 20 : 1} step="0.1"
                                            value={modDepth} onChange={(e) => setModDepth(parseFloat(e.target.value))}
                                        />
                                    </div>
                                    <div className="control-group">
                                        <label>Mix: {Math.round(modMix * 100)}%</label>
                                        <input
                                            type="range"
                                            min="0" max="1" step="0.05"
                                            value={modMix} onChange={(e) => setModMix(parseFloat(e.target.value))}
                                        />
                                    </div>
                                    {modType === 2 && (
                                        <div className="control-group">
                                            <label>Feedback: {Math.round(modFeedback * 100)}%</label>
                                            <input
                                                type="range"
                                                min="0" max="0.9" step="0.05"
                                                value={modFeedback} onChange={(e) => setModFeedback(parseFloat(e.target.value))}
                                            />
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>

                    <div className="io-section">
                        <h3>Fontes de Áudio</h3>
                        <div className="source-buttons">
                            <button className={`pad pad-primary ${source === 'test' ? 'is-active' : ''}`} onClick={playTestLoop}>
                                Play Test Loop
                            </button>
                            <button className={`pad pad-secondary ${source === 'mic' ? 'is-active' : ''}`} onClick={playMic}>
                                Use Microphone
                            </button>
                            <button className="pad pad-secondary" onClick={() => fileInputRef.current?.click()}>
                                Upload File
                            </button>
                            <input
                                type="file"
                                accept="audio/*"
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                onChange={handleFileUpload}
                            />
                            <button className="pad pad-primary stop-btn" onClick={stopAudio} disabled={source === 'none'}>
                                Stop
                            </button>
                        </div>

                        <div className="meters">
                            <div className="meter-row">
                                <span>In:</span>
                                <div className="meter-bg">
                                    <div className="meter-fill" style={{ width: `${inMeter}%` }}></div>
                                </div>
                            </div>
                            <div className="meter-row">
                                <span>Out:</span>
                                <div className="meter-bg">
                                    <div className="meter-fill" style={{ width: `${outMeter}%` }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
