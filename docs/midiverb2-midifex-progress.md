# Progresso de Implementação — MidiVerb II e MidiFex

## 2026-05-04
- **Task concluída:** `- [x] Criar estrutura base do backend decompilado na Web em \`barrverb-web/src/dsp/decompiled/\`.`
- **Arquivos alterados:**
  - `barrverb-web/src/dsp/decompiled/README.md`
  - `barrverb-web/src/dsp/decompiled/types.ts`
  - `barrverb-web/src/dsp/decompiled/index.ts`
  - `docs/midiverb2-midifex-tasks.md`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico:** criada a estrutura base do backend decompilado Web com diretório dedicado, ponto de exportação e tipos iniciais para família, I/O de frame e estado de execução.
- **Pendências/riscos:** tipos e contratos ainda são iniciais e poderão ser refinados quando os adaptadores de MidiVerb II e MidiFex forem integrados.
- **Decisão:** estabelecer `types.ts` e `index.ts` desde o início para centralizar contratos do backend decompilado e reduzir churn nos próximos passos.

## 2026-05-04 (revisão da primeira task concluída)
- **Task revisada:** `- [x] Criar estrutura base do backend decompilado na Web em \`barrverb-web/src/dsp/decompiled/\`.`
- **Arquivos alterados:**
  - `barrverb-web/src/dsp/decompiled/README.md`
  - `barrverb-web/src/dsp/decompiled/types.ts`
  - `barrverb-web/src/dsp/decompiled/index.ts`
  - `barrverb-web/src/dsp/decompiled/registry.ts`
  - `barrverb-web/src/dsp/decompiled/midiverb2.ts`
  - `barrverb-web/src/dsp/decompiled/midifex.ts`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico:** expandido o esqueleto Web do backend decompilado com registries por família e contrato de runner/fallback, preparando pontos de integração sem implementar adaptadores ou dispatch de programas ainda.
- **Pendências/riscos:** os arquivos de família ainda usam fallback neutro; integração real de `decompiled-midiverb2.h`/`decompiled-midifex.h` permanece pendente nas tasks específicas.
- **Decisão:** separar desde já `registry.ts` e módulos por família para reduzir acoplamento quando as tabelas reais de programa forem adicionadas.

## 2026-05-04
- **Task concluída:** `- [x] Criar estrutura base do backend decompilado no embarcado em \`esp32_barrverb/src/decompiled/\`.`
- **Arquivos alterados:**
  - `esp32_barrverb/src/decompiled/README.md`
  - `esp32_barrverb/include/decompiled/DecompiledTypes.h`
  - `esp32_barrverb/include/decompiled/DecompiledRegistry.h`
  - `esp32_barrverb/src/decompiled/DecompiledRegistry.cpp`
  - `docs/midiverb2-midifex-tasks.md`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico:** criada a estrutura base do backend decompilado no embarcado com contratos de tipos (família, estado, I/O por frame), interface de registry e implementação inicial com registries vazios e fallback seguro.
- **Pendências/riscos:** os registries ainda não possuem adaptadores nem dispatch real por programa; integração com `decompiled-midiverb2.h` e `decompiled-midifex.h` permanece para as próximas tasks.
- **Decisão:** inicializar fallback como passthrough estéreo para permitir integração incremental sem quebrar o fluxo de áudio durante a fase de scaffolding.

## 2026-05-04 (ajuste pós-review da task de scaffolding embarcado)
- **Contexto:** ajustes solicitados em review do scaffold do backend decompilado embarcado.
- **Arquivos alterados:**
  - `esp32_barrverb/include/decompiled/DecompiledTypes.h`
  - `esp32_barrverb/src/decompiled/DecompiledRegistry.cpp`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico:** removido `accumulator` de `State` por não representar estado persistente entre chamadas; atualizado tipo de `lfo1`/`lfo2` para `uint32_t` para preservar precisão esperada pelos efeitos decompilados; removido uso de array de tamanho zero e substituído por `nullptr` quando `programCount == 0`.
- **Pendências/riscos:** assinatura dos adaptadores futuros deve manter coerência com `uint32_t` para LFO e com contrato de estado sem acumulador persistente.
- **Decisão:** alinhar o contrato de estado embarcado ao comportamento real dos decompiled headers e evitar extensões não-portáveis de C++ no scaffold.

## 2026-05-04
- **Task concluída:** `- [x] Definir interface comum de execução de efeito (entrada, saída L/R, RAM, ponteiro, LFO1/LFO2).`
- **Arquivos alterados:**
  - `barrverb-web/src/dsp/decompiled/types.ts`
  - `barrverb-web/src/dsp/decompiled/midiverb2.ts`
  - `barrverb-web/src/dsp/decompiled/midifex.ts`
  - `docs/midiverb2-midifex-tasks.md`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico:** o contrato de execução de efeito decompilado na Web foi alinhado ao formato comum de frame (entrada + saídas L/R mutáveis) e estado (RAM, ponteiro, LFO1/LFO2), removendo campo de acumulador persistente e ajustando fallbacks para assinatura in-place.
- **Pendências/riscos:** o lado embarcado já estava aderente ao contrato equivalente, mas a integração dos adaptadores reais ainda precisa validar ranges numéricos e normalização entre `number` (Web) e `int16_t` (embarcado).
- **Decisão:** padronizar `runner` como função com escrita in-place no frame para aproximar o contrato da assinatura de funções decompiladas e reduzir conversões na futura camada de adaptação.

## 2026-05-04 (ajuste pós-review da interface comum Web)
- **Contexto:** revisão solicitou alinhamento estrito do contrato Web com `DecompiledTypes.h` do embarcado e ajuste de fallback para evitar silêncio em efeitos não implementados.
- **Arquivos alterados:**
  - `barrverb-web/src/dsp/decompiled/types.ts`
  - `barrverb-web/src/dsp/decompiled/midiverb2.ts`
  - `barrverb-web/src/dsp/decompiled/midifex.ts`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico:** removida a interface `DecompiledEffectFrame`; a assinatura do runner passou para `(input, output, state)` com `input` escalar e `output` mutável separado; fallbacks de ambas as famílias passaram de silêncio para passthrough estéreo (`L=R=input`).
- **Pendências/riscos:** ainda falta validar o impacto de performance no loop final quando o dispatch real por programa for integrado.
- **Decisão:** priorizar paridade semântica entre Web e embarcado no contrato da função de efeito para simplificar adaptadores e reduzir indireção no processamento por amostra.

## 2026-05-04
- **Task concluída:** `- [x] Criar camada de seleção de engine: \`INTERPRETER\` vs \`DECOMPILED\`.`
- **Arquivos alterados:**
  - `barrverb-web/src/dsp/BarrVerb.ts`
  - `esp32_barrverb/include/BarrVerb.h`
  - `esp32_barrverb/src/BarrVerb.cpp`
  - `docs/midiverb2-midifex-tasks.md`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico:** adicionada seleção de engine em Web e embarcado com enum/tipo explícito, setter dedicado e dispatch no loop de processamento entre caminho `INTERPRETER` existente e caminho `DECOMPILED` inicial (usando fallback seguro do registry).
- **Pendências/riscos:** o caminho `DECOMPILED` ainda usa família fixa (MidiVerb II) e fallback de programa enquanto as tasks de seleção de família e adaptadores reais não forem concluídas.
- **Decisão:** manter `INTERPRETER` como padrão para preservar comportamento atual e introduzir dispatch de engine com impacto mínimo no fluxo existente.
