# Midiverb Emulator - arquivos copiados para implementação

Esta pasta contém os arquivos de referência necessários para implementar os modos **MidiVerb II** e **MidiFex** no BarrVerb (web e embarcado), conforme o plano em `docs/midiverb2-midifex-implementation-plan.md`.

## Origem

- Repositório: https://github.com/ovelhaaa/midiverb_emulator
- Licença preservada: `third_party/midiverb_emulator/LICENSE`

## Arquivos copiados

- `decompiled-midiverb2.h`
  - Funções de efeitos decompilados do MidiVerb II.
- `decompiled-midifex.h`
  - Funções de efeitos decompilados do MidiFex.
- `names-midiverb2.h`
  - Tabela de nomes/programas do MidiVerb II.
- `names-midifex.h`
  - Tabela de nomes/programas do MidiFex.
- `rom.h`
  - Definições relacionadas à ROM e dados base usados pelo projeto de referência.
- `lfo.h`
  - Definições de LFO utilizadas pelas rotinas de efeito.
- `dasp16.h`
  - Definições auxiliares do processador/simulador DASP16 usado pelo emulador.
- `README.md`
  - Documentação original da referência.
- `LICENSE`
  - Licença original da referência.

## Objetivo no BarrVerb

- Servir como base para criar um backend `DECOMPILED` com adaptadores em:
  - `barrverb-web/src/dsp/decompiled/`
  - `esp32_barrverb/src/decompiled/`
- Evitar dependência de clone externo durante desenvolvimento e CI.
