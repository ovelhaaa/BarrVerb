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

    const playTestLoop = () => {
        setSource('test');
        audioSys.resume();
        audioSys.loadUrl('/test-loop.wav');
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
        <div className="container">
            <header>
                <h1>BarrVerb Web</h1>
                <p>Simulador Web Audio do DSP do BarrVerb</p>
            </header>

            {error && <div className="error-box">{error}</div>}

            {!ready ? (
                <div className="init-box">
                    <button className="primary-btn" onClick={handleInit}>Iniciar Engine de Áudio</button>
                    <p className="note">É necessário clicar para permitir o uso da Web Audio API no navegador.</p>
                </div>
            ) : (
                <div className="panel">
                    <div className="controls">
                        <div className="control-group">
                            <label>Program: {prog_names[program]}</label>
                            <select value={program} onChange={handleProgramChange}>
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

                    <div className="io-section">
                        <h3>Fontes de Áudio</h3>
                        <div className="source-buttons">
                            <button className={source === 'test' ? 'active' : ''} onClick={playTestLoop}>
                                Play Test Loop
                            </button>
                            <button className={source === 'mic' ? 'active' : ''} onClick={playMic}>
                                Use Microphone
                            </button>
                            <button onClick={() => fileInputRef.current?.click()}>
                                Upload File
                            </button>
                            <input
                                type="file"
                                accept="audio/*"
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                onChange={handleFileUpload}
                            />
                            <button className="stop-btn" onClick={stopAudio} disabled={source === 'none'}>
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
