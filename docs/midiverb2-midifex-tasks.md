# Tarefas de Implementação — MidiVerb II e MidiFex

> Referência obrigatória: **"Midiverb Emulator - arquivos copiados para implementação"**.
>
> Esta lista assume a existência/uso dos arquivos de referência copiados de `midiverb_emulator` (como `decompiled-midiverb2.h`, `decompiled-midifex.h`, `names-midiverb2.h`, `names-midifex.h`, `lfo.h`, `dasp16.h`, `rom.h`, `README.md`, `LICENSE`) .

## Epic 1 — Estrutura de backend DECOMPILED (Web + Embarcado)

- [x] Criar estrutura base do backend decompilado na Web em `barrverb-web/src/dsp/decompiled/`.
- [x] Criar estrutura base do backend decompilado no embarcado em `esp32_barrverb/src/decompiled/`.
- [x] Definir interface comum de execução de efeito (entrada, saída L/R, RAM, ponteiro, LFO1/LFO2).
- [x] Criar camada de seleção de engine: `INTERPRETER` vs `DECOMPILED`.
- [x] Criar camada de seleção de família: `MIDIVERB_II` vs `MIDIFEX`.

## Epic 2 — Integração MidiVerb II (arquivos: decompiled-midiverb2.h + names-midiverb2.h)

- [x] Implementar adaptador para funções de `decompiled-midiverb2.h` no backend web.
- [x] Implementar adaptador para funções de `decompiled-midiverb2.h` no backend embarcado.
- [x] Integrar nomes de programas a partir de `names-midiverb2.h`.
- [x] Criar tabela de dispatch por programa para MidiVerb II.
- [x] Garantir normalização/clamp de entrada e saída compatível com o core atual.

## Epic 3 — Integração MidiFex (arquivos: decompiled-midifex.h + names-midifex.h)

- [x] Implementar adaptador para funções de `decompiled-midifex.h` no backend web.
- [x] Implementar adaptador para funções de `decompiled-midifex.h` no backend embarcado.
- [ ] Integrar nomes de programas a partir de `names-midifex.h`.
- [ ] Criar tabela de dispatch por programa para MidiFex.
- [ ] Definir fallback seguro para programas ausentes (bypass/defeat).

## Epic 4 — LFO e compatibilidade de modulação (arquivos: lfo.h + dasp16.h)

- [ ] Definir representação interna de LFO1/LFO2 compatível com o backend decompilado.
- [ ] Implementar geração/atualização de LFO no processamento em bloco.
- [ ] Conectar LFO1/LFO2 às assinaturas dos efeitos decompilados.
- [ ] Validar presets modulados (chorus/flanger/pitch/mod).

## Epic 5 — Integração de UI/controle e seleção de unidade

- [ ] Web: adicionar seletor de unidade (MidiVerb II / MidiFex).
- [ ] Web: atualizar lista de presets dinamicamente por unidade.
- [ ] Embarcado: mapear controle para troca de unidade e programa.
- [ ] Exibir nome de preset ativo em logs/UI quando disponível.

## Epic 6 — Compliance, documentação e third_party

- [ ] Criar/validar diretório `third_party/midiverb_emulator/` contendo:
  - `decompiled-midiverb2.h`
  - `decompiled-midifex.h`
  - `names-midiverb2.h`
  - `names-midifex.h`
  - `rom.h`
  - `lfo.h`
  - `dasp16.h`
  - `README.md`
  - `LICENSE`
- [ ] Preservar crédito de origem e licença em `third_party/midiverb_emulator/LICENSE`.
- [ ] Documentar no README do projeto que o desenvolvimento/CI não depende de clone externo.

## Epic 7 — Testes e validação cruzada

- [ ] Criar testes de regressão por preset crítico (MV2 e Midifex).
- [ ] Comparar saídas com baseline de referência (RMS/correlação/pico).
- [ ] Validar comportamento em sample rates usados no projeto (incluindo restrições conhecidas).
- [ ] Definir critérios de aceite por família de efeitos antes de merge final.

## Critérios de pronto (Definition of Done)

- [ ] Seleção de engine/família/programa funcional em Web e embarcado.
- [ ] MidiVerb II e MidiFex executando no backend `DECOMPILED`.
- [ ] Presets nomeados corretamente com base em `names-midiverb2.h` e `names-midifex.h`.
- [ ] Licenças e origem dos arquivos third_party documentadas.
- [ ] Testes de regressão verdes para os presets definidos nesta checklist e/ou baseline de referência do projeto.
