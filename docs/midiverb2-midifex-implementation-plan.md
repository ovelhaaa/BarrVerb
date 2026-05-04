# MidiVerb II + MidiFex Implementation Plan (Web + Embedded)

This plan defines a low-risk path to add **MidiVerb II** and **MidiFex** support to BarrVerb in both targets:

- Web (`barrverb-web`)
- Embedded (`esp32_barrverb`)

It assumes reuse of the decompiled effect entry points from the reference implementation (`midiverb_emulator`) as a second execution backend, in parallel with the existing ROM/interpreter backend.

## 1) Scope and goals

### Functional goals
- Add runtime-selectable DSP execution backend:
  - `INTERPRETER` (current BarrVerb flow)
  - `DECOMPILED` (new per-effect compiled functions)
- Add runtime-selectable effect family:
  - `MIDIVERB` (existing behavior)
  - `MIDIVERB2`
  - `MIDIFEX`
- Preserve existing BarrVerb behavior as default (no regression path).
- Allow program selection (`0..63`) independent from family/backend.

### Non-goals (phase 1)
- Exact UI clone of original hardware front panels.
- Preset browser redesign.
- Full parameter automation matrix parity on day one.

---

## 2) Architecture changes

### 2.1 Add unified engine/family abstractions

Introduce shared concepts in both implementations:

- `EngineType`:
  - `INTERPRETER`
  - `DECOMPILED`
- `EffectFamily`:
  - `MIDIVERB`
  - `MIDIVERB2`
  - `MIDIFEX`

Public API additions:

- `setEngine(engine: EngineType)`
- `setFamily(family: EffectFamily)`
- `setProgram(program: number)`

Internally, the process path becomes:

1. Input conditioning (existing path)
2. Dispatch by `engine`
3. Dispatch by `family`
4. Run selected effect function/program
5. Output conditioning/mix (existing path)

### 2.2 Keep a shared state contract

Define a state struct/class used by both backends:

- delay RAM (16k base assumption)
- read/write pointers
- accumulator/scratch registers
- modulation values (`lfo1_value`, `lfo2_value`)
- program/family ids
- sample-rate dependent coefficients

This avoids drift between targets and makes test vectors reusable.

---

## 3) Reference integration strategy

## 3.1 Vendor reference decompiled sources

Create a dedicated folder per target for imported decompiled effect functions (generated/ported code):

- Web: `barrverb-web/src/dsp/decompiled/`
- Embedded: `esp32_barrverb/src/decompiled/`

Keep wrappers thin:

- one translation unit per family (`midiverb2`, `midifex`)
- effect registry table mapping `program -> function`

## 3.2 Adapter layer (important)

Do **not** call decompiled functions directly from UI/audio glue.

Create adapters that translate BarrVerb runtime state into the decompiled signatures:

- map RAM pointers
- apply fixed-point/float conversion if needed
- inject `lfo1_value/lfo2_value`
- normalize wet/dry and output range

This is where most portability bugs are isolated.

---

## 4) Web implementation plan

### 4.1 DSP core changes (`barrverb-web/src/dsp/BarrVerb.ts`)

- Add enums and setters for `EngineType` and `EffectFamily`.
- Add dispatch method:
  - `runInterpreterProgram(...)`
  - `runDecompiledProgram(...)`
- Add family-specific registries for decompiled calls.

### 4.2 Worklet boundary

- Extend worklet message protocol to accept:
  - `engine`
  - `family`
  - `program`
- Keep backward compatibility by defaulting to:
  - `engine=INTERPRETER`
  - `family=MIDIVERB`

### 4.3 UI controls

- Add advanced section to choose family and engine.
- If family changes, keep program index but clamp to available count.

### 4.4 Web validation

- Offline render harness:
  - feed deterministic impulse and sine burst
  - compare output checksums per mode/family/program
- Manual A/B audition page for quick regression checks.

---

## 5) Embedded (ESP32) implementation plan

### 5.1 Core changes (`esp32_barrverb/include/BarrVerb.h`, `esp32_barrverb/src/BarrVerb.cpp`)

- Mirror the same enums and setters from web.
- Introduce unified dispatch in audio callback-safe path.
- Ensure no heap allocations in process loop.

### 5.2 Performance and memory constraints

- Store effect registries in flash/`const` tables.
- Keep RAM footprint bounded (16k delay + existing scratch).
- Benchmark CPU usage by engine/family (worst-case program).

### 5.3 Control path

- Expose engine/family/program via existing control mechanism (serial/MIDI/UI abstraction).
- Guarantee thread-safe parameter handoff to DSP loop.

### 5.4 Embedded validation

- Impulse-response capture over serial/log or DAC loopback.
- Program sweep stress test (rapid program changes).
- Long-run stability test (>30 min) with modulation-heavy presets.

---

## 6) Cross-target parity plan

### 6.1 Golden vectors

Create a small shared fixture set:

- input wav snippets (impulse, pink noise, transient drum, sustained pad)
- mode matrix:
  - engine x family x selected program subset

Expected outputs are generated from one canonical implementation and checked with tolerances.

### 6.2 Program mapping consistency

Define and document mapping tables:

- `MIDIVERB` programs: existing mapping
- `MIDIVERB2` programs: new mapping
- `MIDIFEX` programs: new mapping

Avoid implicit “program number means different algorithm” without explicit family context.

---

## 7) Rollout phases

### Phase 0 — plumbing
- Add enums/setters/dispatch stubs in web + embedded.
- No behavioral change when defaults used.

### Phase 1 — MidiVerb II on web
- Integrate decompiled `midiverb2` functions.
- Validate with golden vectors.

### Phase 2 — MidiVerb II on embedded
- Port same adapter and registry.
- Validate CPU and RAM.

### Phase 3 — MidiFex on web
- Integrate decompiled `midifex` functions.
- Validate with modulation-heavy tests.

### Phase 4 — MidiFex on embedded
- Port and tune for realtime constraints.

### Phase 5 — parity hardening
- Cross-target diff tests, bugfixes, docs, release notes.

---

## 8) Risks and mitigations

1. **Fixed-point mismatch / scaling artifacts**
   - Mitigation: centralized conversion helpers and per-effect gain normalization tests.

2. **Program-table misalignment**
   - Mitigation: explicit mapping tables + unit tests that assert registry completeness.

3. **ESP32 realtime overruns**
   - Mitigation: benchmark each program; optional reduced block size or selective optimization.

4. **State reset edge cases on family/engine switch**
   - Mitigation: deterministic reset contract (`softReset` vs `hardReset`) and tests.

---

## 9) Acceptance criteria

- User can choose `MIDIVERB`, `MIDIVERB2`, `MIDIFEX` and `INTERPRETER`/`DECOMPILED` at runtime.
- Default startup sound remains identical to current release.
- Web and ESP32 produce equivalent behavior for selected parity programs within tolerance.
- No audio glitches under normal program switching.
- Documentation updated with feature matrix and known limitations.

---

## 10) Suggested task breakdown (implementation tickets)

1. Add engine/family enums + setters (web + embedded).
2. Add dispatch layer + default compatibility behavior.
3. Add decompiled adapter interface and registry scaffolding.
4. Integrate MidiVerb II decompiled functions (web).
5. Integrate MidiVerb II decompiled functions (ESP32).
6. Integrate MidiFex decompiled functions (web).
7. Integrate MidiFex decompiled functions (ESP32).
8. Add parity/golden vector test harness.
9. Add UI/control exposure and docs.
10. Final profiling + release QA.
