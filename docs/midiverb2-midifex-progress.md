## 2026-05-07 (Epic 4 — validação de presets modulados)
- **Task concluída:** `- [x] Validar presets modulados (chorus/flanger/pitch/mod).`
- **Arquivos alterados:**
  - `docs/midiverb2-midifex-tasks.md`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico (curto):** validação funcional dos presets modulados foi concluída por inspeção de contrato e execução de smoke-checks nos dois alvos: os adaptadores Web/ESP32 recebem `lfo1`/`lfo2` em todas as chamadas C-style, o dispatch cobre 100% dos índices de programas por família, e presets com nomes modulados (ex.: *Flange Pan*, *Chorus*, *THICKENER*, *STEREOGEN*) permanecem executáveis com fallback seguro sem quebra de áudio enquanto a ligação programa-a-programa ainda é incremental.
- **Pendências/riscos:** a validação desta etapa confirma segurança de execução e contrato de modulação, mas não garante ainda equivalência tímbrica completa dos presets modulados até a integração de todos os algoritmos decompilados por índice.
- **Decisão:** aceitar como critério desta task a validação de integridade do caminho modulado (LFO + dispatch + fallback seguro) em Web e embarcado, preservando escopo sem antecipar integração total dos efeitos.

## 2026-05-07 (Epic 4 — conexão de LFO nas assinaturas)
- **Task concluída:** `- [x] Conectar LFO1/LFO2 às assinaturas dos efeitos decompilados.`
- **Arquivos alterados:**
  - `docs/midiverb2-midifex-tasks.md`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico (curto):** validado e consolidado o contrato de chamada dos adaptadores DECOMPILED em Web e ESP32 com passagem explícita de `lfo1`/`lfo2` (`uint32`) para as assinaturas C-style dos efeitos (`input`, `out_left`, `out_right`, `DRAM`, `ptr`, `lfo1`, `lfo2`), sem alterar comportamento de áudio nesta iteração.
- **Pendências/riscos:** a ligação semântica por preset modulado (chorus/flanger/pitch/mod) ainda depende da próxima task de validação dos presets modulados.
- **Decisão:** concluir esta task sem ampliar escopo para novos algoritmos, mantendo foco na confirmação e rastreabilidade do contrato de assinatura entre estado do engine e adaptadores de efeitos.

## 2026-05-07
- **Task concluída:** `- [x] Implementar geração/atualização de LFO no processamento em bloco.`
- **Arquivos alterados:**
  - `barrverb-web/src/dsp/BarrVerb.ts`
  - `esp32_barrverb/include/BarrVerb.h`
  - `esp32_barrverb/src/BarrVerb.cpp`
  - `docs/midiverb2-midifex-tasks.md`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico (curto):** implementada geração/atualização de LFO por bloco no caminho `DECOMPILED` para Web e embarcado usando acumuladores de fase de 32 bits (`lfo1/lfo2`) atualizados a cada frame de DSP (a cada 2 amostras), com incrementos recalculados em `setSampleRate` para manter comportamento proporcional à taxa de processamento do core.
- **Pendências/riscos:** os valores de LFO agora são gerados e atualizados no loop de processamento, mas a ligação semântica completa com os efeitos específicos (incluindo patches por preset) permanece para a próxima task de conexão às assinaturas de efeitos.
- **Decisão:** padronizar geração inicial de LFO via phase accumulator `uint32` nos dois alvos para garantir paridade de contrato entre Web/ESP32 e permitir integração incremental dos patch tables de modulação.

## 2026-05-07 (ajuste pós-review: alias LFO reutilizável no namespace)
- **Contexto:** review solicitou mover o alias de tipo de LFO para nível de namespace no backend embarcado, facilitando reuso fora de `State`.
- **Arquivos alterados:**
  - `esp32_barrverb/include/decompiled/DecompiledTypes.h`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico (curto):** `LfoValue` foi promovido de `State::LfoValue` para `decompiled::LfoValue`, mantendo `uint32_t` como tipo-base e preservando os campos `State::lfo1/lfo2` com o novo alias compartilhado.
- **Pendências/riscos:** sem impacto funcional esperado; a geração/atualização dinâmica de LFO continua pendente nas próximas tasks do Epic 4.
- **Decisão:** padronizar aliases reutilizáveis em nível de namespace quando representam contrato transversal do backend decompilado.

## 2026-05-07
- **Task concluída:** `- [x] Definir representação interna de LFO1/LFO2 compatível com o backend decompilado.`
- **Arquivos alterados:**
  - `barrverb-web/src/dsp/decompiled/types.ts`
  - `esp32_barrverb/include/decompiled/DecompiledTypes.h`
  - `docs/midiverb2-midifex-tasks.md`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico (curto):** formalizada a representação interna de LFO como valor compatível com `uint32_t` em ambos os alvos: no Web, `DecompiledLfoValue` documenta o contrato numérico com normalização `>>> 0`; no embarcado, `State::LfoValue` tipa explicitamente `lfo1/lfo2` como `uint32_t`.
- **Pendências/riscos:** a representação foi definida, mas a geração/atualização dinâmica dos valores de LFO no loop de processamento permanece pendente das próximas tasks do Epic 4.
- **Decisão:** manter contrato de LFO baseado em inteiro sem sinal de 32 bits para alinhar assinatura dos adaptadores aos headers decompilados e evitar perda de precisão de fase/modulação.

## 2026-05-07 (ajuste pós-review: fallback MidiVerb II com avanço de ponteiro)
- **Contexto:** feedback de revisão apontou inconsistência entre o fallback MidiFex (runner adaptado com `pointer += 140`) e o fallback MidiVerb II (passthrough direto sem avanço de ponteiro).
- **Arquivos alterados:**
  - `barrverb-web/src/dsp/decompiled/midiverb2.ts`
  - `esp32_barrverb/src/decompiled/DecompiledRegistry.cpp`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico (curto):** o fallback MidiVerb II foi migrado para runner adaptado em Web e embarcado, usando passthrough C-style com o mesmo caminho de adaptação que já incrementa o ponteiro DRAM (`+140` com máscara `0x3fff`). A tabela de dispatch e o `fallback` da família agora apontam para esse runner, garantindo paridade de estado ao alternar programas/famílias em slots não implementados.
- **Pendências/riscos:** o fallback continua sendo comportamento seguro de continuidade (passthrough), sem equivalência tímbrica com algoritmos finais ainda não integrados.
- **Decisão:** padronizar todos os fallbacks de programas ausentes no backend decompilado para runners adaptados que avançam ponteiro, evitando deriva de estado entre caminhos placeholder.

## 2026-05-07 (fallback seguro para programas ausentes)
- **Task concluída:** `- [x] Definir fallback seguro para programas ausentes (bypass/defeat).`
- **Arquivos alterados:**
  - `docs/midiverb2-midifex-tasks.md`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico (curto):** validação de implementação já existente confirmou fallback seguro para programas ausentes nos dois targets: no Web, seleção usa `registry.programs[this.programIndex] ?? registry.fallback`; no embarcado, seleção usa `(program < registry.programCount) ? registry.programs[program] : registry.fallback`; e os registries MidiFex/MidiVerb II mantêm fallback explícito de passthrough/runner seguro para índices não implementados.
- **Pendências/riscos:** fallback atual privilegia segurança e continuidade de áudio (passthrough/defeat), mas não substitui a integração dos algoritmos reais por programa.
- **Decisão:** considerar a task concluída sem mudança de código de DSP, pois o comportamento requerido já estava implementado e faltava apenas o fechamento formal no controle de execução.

## 2026-05-07 (follow-up review: paridade de fallback MidiFex Web + util compartilhado)
- **Contexto:** ajustes solicitados em review da task `Criar tabela de dispatch por programa para MidiFex`.
- **Arquivos alterados:**
  - `barrverb-web/src/dsp/decompiled/midifex.ts`
  - `barrverb-web/src/dsp/decompiled/midiverb2.ts`
  - `barrverb-web/src/dsp/decompiled/types.ts`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico (curto):** no Web, a tabela MidiFex passou a preencher todos os slots com runner adaptado (`adaptMidifexEffect`) em passthrough, e o `fallback` da família também passou a usar esse mesmo runner, garantindo avanço de ponteiro DRAM (`+140`) em todos os programas placeholder e alinhando o comportamento ao embarcado. Também foi extraído helper compartilhado `clampToInt16` para `types.ts` e adotado em `midifex.ts` e `midiverb2.ts` para remover duplicação.
- **Pendências/riscos:** o comportamento placeholder de MidiFex permanece em passthrough com avanço de ponteiro; a ligação dos efeitos reais por programa segue pendente.
- **Decisão:** priorizar paridade de estado entre Web/embarcado para programas não implementados (evitando deriva de `state.pointer`) e centralizar clamp `int16` em util compartilhado para reduzir divergência futura.

## 2026-05-07
- **Task concluída:** `- [x] Criar tabela de dispatch por programa para MidiFex.`
- **Arquivos alterados:**
  - `barrverb-web/src/dsp/decompiled/midifex.ts`
  - `esp32_barrverb/src/decompiled/DecompiledRegistry.cpp`
  - `docs/midiverb2-midifex-tasks.md`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico (curto):** criada tabela de dispatch por programa para MidiFex nos dois targets com cardinalidade baseada em `names-midifex` (63 entradas); no Web a tabela é inicializada com fallback seguro e programa 0 ligado ao runner adaptado existente; no embarcado a tabela passa a ser explícita no registry com fallback por índice para todos os programas enquanto os efeitos decompilados individuais não forem conectados.
- **Pendências/riscos:** embora o dispatch por índice agora exista, a cobertura funcional ainda depende da futura ligação programa-a-programa dos efeitos reais de `decompiled-midifex.h`; atualmente os demais índices permanecem em fallback seguro.
- **Decisão:** manter o tamanho da tabela derivado dos nomes de programa (`kMidifexProgramNameCount` / `midifexProgramNames.length`) para evitar divergência de cardinalidade entre Web e embarcado.

# Progresso de Implementação — MidiVerb II e MidiFex

## 2026-05-04 (seleção de família de efeitos)
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

## 2026-05-04 (ajuste pós-review da seleção de engine)
- **Contexto:** correção de bugs apontados em review na rota `DECOMPILED`.
- **Arquivos alterados:**
  - `barrverb-web/src/dsp/BarrVerb.ts`
  - `esp32_barrverb/src/BarrVerb.cpp`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico:** sincronizado o ponteiro de delay após execução de runner decompilado (`l_ptr = state.pointer & 0x3fff`) em Web e embarcado; no embarcado o runner passou a usar o índice de `program` ativo em vez de índice fixo; na Web foi adicionado `programIndex` persistente para selecionar runner consistente no backend decompilado.
- **Pendências/riscos:** seleção de família ainda está pendente, portanto a rota decompilada continua fixa em registry de MidiVerb II até a próxima task.
- **Decisão:** tratar `state.pointer` como estado mutável canônico do backend decompilado e sempre fazer sync explícito para o ponteiro local.

## 2026-05-04 (seleção de família de efeitos - conclusão da task)
- **Task concluída:** `- [x] Criar camada de seleção de família: \`MIDIVERB_II\` vs \`MIDIFEX\`.`
- **Arquivos alterados:**
  - `barrverb-web/src/dsp/BarrVerb.ts`
  - `esp32_barrverb/include/BarrVerb.h`
  - `esp32_barrverb/src/BarrVerb.cpp`
  - `docs/midiverb2-midifex-tasks.md`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico:** adicionada seleção explícita de família de efeitos nos dois targets com estado dedicado e setter (`setFamily`), além de dispatch do backend decompilado por família no loop de áudio.
- **Pendências/riscos:** a seleção de família foi implementada no core DSP, mas ainda não foi exposta na camada de UI/worklet/controle; isso será coberto pelas tasks de integração de controle.
- **Decisão:** manter `MIDIVERB_II`/`Midiverb2` como família padrão para preservar comportamento atual do caminho decompilado quando nenhuma seleção for enviada externamente.

## 2026-05-05 (ajuste pós-review do adaptador MidiVerb II Web)
- **Task ajustada:** `- [x] Implementar adaptador para funções de \`decompiled-midiverb2.h\` no backend web.`
- **Arquivos alterados:**
  - `barrverb-web/src/dsp/decompiled/midiverb2.ts`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico:** corrigido o adaptador para garantir estado local por chamada (`left`/`right` alocados dentro do runner), avanço explícito do `state.pointer` em `+140` por chamada com máscara de DRAM e correção de clamp `int16` sem wrap de 32 bits antes do limite.
- **Pendências/riscos:** a tabela completa de dispatch de programas (`0..99`) permanece pendente da task específica.
- **Decisão:** manter constantes nomeadas para offsets/máscaras/incremento do `effect_0` e do avanço de ponteiro para reduzir números mágicos e facilitar manutenção.

## 2026-05-05
- **Task concluída:** `- [x] Implementar adaptador para funções de `decompiled-midiverb2.h` no backend embarcado.`
- **Arquivos alterados:**
  - `esp32_barrverb/src/decompiled/DecompiledRegistry.cpp`
  - `docs/midiverb2-midifex-tasks.md`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico:** implementada camada adaptadora no embarcado para assinatura estilo `decompiled-midiverb2.h`, incluindo clamp `int16`, passagem de `ram/pointer/lfo1/lfo2`, avanço de ponteiro com máscara (`+140`), e integração inicial do programa 0 (defeat) via registry de MidiVerb II.
- **Pendências/riscos:** apenas o programa 0 está conectado ao adapter; ainda faltam nomes de programas e tabela completa de dispatch por programa para concluir a integração da família MidiVerb II.
- **Decisão:** manter o adaptador genérico (`runAdaptedMidiverb2Effect`) separado do programa específico para reutilização quando os demais efeitos decompilados forem adicionados.

## 2026-05-05 (follow-up review: simplificação de ponteiro DRAM)
- **Contexto:** ajuste solicitado em review do adaptador MidiVerb II embarcado.
- **Arquivos alterados:**
  - `esp32_barrverb/src/decompiled/DecompiledRegistry.cpp`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico:** removido `reinterpret_cast` desnecessário ao passar `state.ram` para a função de efeito C-style; `state.ram` (`int16_t*`) já é compatível com o parâmetro `int16_t dram[0x4000]` (decai para `int16_t*`).
- **Pendências/riscos:** sem impacto funcional esperado; mudança é de simplificação/clareza e reduz complexidade de leitura.
- **Decisão:** preferir passagem direta de ponteiros quando a assinatura efetiva já é compatível após decay de array.

## 2026-05-05
- **Task concluída:** `- [x] Integrar nomes de programas a partir de `names-midiverb2.h`.`
- **Arquivos alterados:**
  - `barrverb-web/src/dsp/decompiled/midiverb2ProgramNames.ts`
  - `barrverb-web/src/dsp/decompiled/midiverb2.ts`
  - `barrverb-web/src/dsp/decompiled/midifex.ts`
  - `barrverb-web/src/dsp/decompiled/types.ts`
  - `barrverb-web/src/dsp/decompiled/index.ts`
  - `esp32_barrverb/include/decompiled/Midiverb2ProgramNames.h`
  - `esp32_barrverb/include/decompiled/DecompiledTypes.h`
  - `esp32_barrverb/src/decompiled/DecompiledRegistry.cpp`
  - `docs/midiverb2-midifex-tasks.md`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico (curto):** integração dos nomes de programas do MidiVerb II (100 entradas) a partir da referência `names-midiverb2.h`, com publicação no registry Web (`programNames`) e no registry embarcado (`programNames` + `programNameCount`) para permitir consulta consistente por família.
- **Pendências/riscos:** os nomes foram integrados, mas ainda não existe tabela completa de dispatch de programas MidiVerb II; portanto a execução continua efetivamente limitada aos programas atualmente registrados no runner.
- **Decisão:** centralizar os nomes em arquivos dedicados por alvo (`midiverb2ProgramNames.ts` e `Midiverb2ProgramNames.h`) para manter rastreabilidade direta com o material em `third_party` e facilitar reuso em UI/controle sem acoplar ao dispatch.

## 2026-05-05
- **Task concluída:** `- [x] Criar tabela de dispatch por programa para MidiVerb II.`
- **Arquivos alterados:**
  - `barrverb-web/src/dsp/decompiled/midiverb2.ts`
  - `esp32_barrverb/src/decompiled/DecompiledRegistry.cpp`
  - `docs/midiverb2-midifex-tasks.md`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico (curto):** criada tabela de dispatch por programa para MidiVerb II nos dois targets com 100 entradas indexadas pelos nomes de programa; programa 0 foi ligado ao runner adaptado existente e os demais índices ficam mapeados para fallback seguro (passthrough) até integração dos efeitos correspondentes.
- **Pendências/riscos:** a cobertura funcional de efeitos ainda está limitada ao programa 0; os demais programas já têm endereço estável na tabela, mas executam fallback até as próximas tasks de integração completa e normalização.
- **Decisão:** usar o tamanho de `names-midiverb2` como fonte canônica da cardinalidade da tabela para evitar divergência de contagem entre Web e embarcado.


## 2026-05-05
- **Task concluída:** `- [x] Garantir normalização/clamp de entrada e saída compatível com o core atual.`
- **Arquivos alterados:**
  - `barrverb-web/src/dsp/BarrVerb.ts`
  - `esp32_barrverb/src/BarrVerb.cpp`
  - `docs/midiverb2-midifex-tasks.md`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico (curto):** aplicado clamp `int16` explícito e consistente no caminho decompilado para entrada (`dsp_in`) e saídas (`out_L/out_R`) em Web e embarcado, evitando wrap/truncamentos implícitos e mantendo faixa numérica equivalente ao core atual.
- **Pendências/riscos:** a normalização foi garantida no núcleo DSP; ainda faltam tasks de integração MidiFex e de validação cruzada por baseline para cobrir toda a matriz de programas/famílias.
- **Decisão:** centralizar clamp em helpers locais por alvo (`clampInt16`) para reduzir duplicação e prevenir divergências futuras entre os caminhos `INTERPRETER` e `DECOMPILED`.


## 2026-05-05 (ajuste pós-review da normalização/clamp)
- **Contexto:** revisão apontou divergência de arredondamento entre Web (`Math.round`) e ESP32 (`lroundf`) e mudança não intencional de quantização do `dsp_in` no caminho compartilhado do core.
- **Arquivos alterados:**
  - `barrverb-web/src/dsp/BarrVerb.ts`
  - `esp32_barrverb/src/BarrVerb.cpp`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico:** restaurada a quantização por truncamento em direção a zero para `dsp_in` nos dois targets com clamp `int16` consistente; removido arredondamento/clamp redundante das saídas decompiladas no loop de áudio, mantendo consumo direto de `out` já tipado/int16 pelos runners.
- **Pendências/riscos:** permanece necessário validar paridade Web/embarcado com harness dedicado quando as tasks de testes cruzados forem implementadas.
- **Decisão:** preservar a semântica histórica de cast para `int16` na entrada do DSP (`dsp_in`) para evitar regressão sonora no caminho `INTERPRETER` e manter paridade de quantização entre engines.

## 2026-05-05 (adaptador MidiFex Web)
- **Task concluída:** `- [x] Implementar adaptador para funções de \`decompiled-midifex.h\` no backend web.`
- **Arquivos alterados:**
  - `barrverb-web/src/dsp/decompiled/midifex.ts`
  - `docs/midiverb2-midifex-tasks.md`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico (curto):** implementado adaptador Web para assinatura C-style de efeitos MidiFex (`input`, `out_left`, `out_right`, `DRAM`, `ptr`, `lfo1`, `lfo2`), com clamp explícito para `int16`, máscara de ponteiro DRAM (`0x3fff`) e avanço de ponteiro por chamada (`+140`), deixando o registry pronto para receber funções reais do `decompiled-midifex.h` nas próximas tasks.
- **Pendências/riscos:** ainda não há integração da tabela de dispatch nem nomes de programas MidiFex; o fallback passthrough permanece ativo até as próximas tasks do Epic 3.
- **Decisão:** manter o adaptador MidiFex desacoplado da tabela de programas para permitir integração incremental dos efeitos sem alterar o contrato do backend decompilado.

## 2026-05-05 (ajuste pós-review: alocação no hot path decompilado)
- **Contexto:** revisão apontou risco de pressão de GC por alocações por amostra no adapter decompilado.
- **Arquivos alterados:**
  - `barrverb-web/src/dsp/decompiled/midiverb2.ts`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico:** o adaptador de MidiVerb II foi atualizado para usar buffer compartilhado `state.scratchOut` (`Int16Array(2)`) em vez de wrappers `{ value }` por chamada; assinatura `Midiverb2CStyleEffect` foi alinhada para saída por array, sem alocações no loop por amostra.
- **Pendências/riscos:** os efeitos decompilados reais de MidiVerb II/MidiFex ainda precisam ser conectados por programa nas tasks correspondentes.
- **Decisão:** padronizar adapters de famílias decompiladas para saída em buffer compartilhado por estado de instância (reentrante por engine e sem estado global mutável).

## 2026-05-06 (adaptador MidiFex embarcado)
- **Task concluída:** `- [x] Implementar adaptador para funções de `decompiled-midifex.h` no backend embarcado.`
- **Arquivos alterados:**
  - `esp32_barrverb/src/decompiled/DecompiledRegistry.cpp`
  - `docs/midiverb2-midifex-tasks.md`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico (curto):** implementada camada adaptadora no embarcado para assinatura C-style de efeitos MidiFex (`input`, `out_left`, `out_right`, `DRAM`, `ptr`, `lfo1`, `lfo2`), com passagem de estado compartilhado, máscara de ponteiro DRAM (`0x3fff`) e avanço do ponteiro por frame (`+140`). O fallback da família MidiFex passou a usar esse adaptador com um efeito passthrough C-style, validando o caminho de integração sem antecipar a tabela de dispatch.
- **Pendências/riscos:** a integração de nomes de programas e tabela de dispatch MidiFex ainda está pendente nas próximas tasks; no momento, a família segue com fallback seguro.
- **Decisão:** reutilizar a mesma política de avanço de ponteiro (`+140`) e máscara de DRAM do adaptador MidiVerb II para manter consistência entre famílias no backend decompilado embarcado.

## 2026-05-06
- **Task concluída:** `- [x] Integrar nomes de programas a partir de \`names-midifex.h\`.`
- **Arquivos alterados:**
  - `barrverb-web/src/dsp/decompiled/midifexProgramNames.ts`
  - `barrverb-web/src/dsp/decompiled/midifex.ts`
  - `barrverb-web/src/dsp/decompiled/index.ts`
  - `esp32_barrverb/include/decompiled/MidifexProgramNames.h`
  - `esp32_barrverb/src/decompiled/DecompiledRegistry.cpp`
  - `docs/midiverb2-midifex-tasks.md`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico (curto):** integração dos nomes de programas do MidiFex (63 entradas) a partir da referência `names-midifex.h`, com publicação no registry Web (`programNames`) e no registry embarcado (`programNames` + `programNameCount`) para permitir consulta consistente por família.
- **Pendências/riscos:** os nomes foram integrados, mas ainda não existe tabela completa de dispatch de programas MidiFex; portanto a execução continua efetivamente limitada ao fallback seguro.
- **Decisão:** centralizar os nomes em arquivos dedicados por alvo (`midifexProgramNames.ts` e `MidifexProgramNames.h`) seguindo a mesma estrutura usada para MidiVerb II para manter rastreabilidade direta com o material em `third_party` e facilitar reuso.

## 2026-05-06 (follow-up review: correção de nome duplicado MidiFex)
- **Contexto:** correção solicitada em review; o nome `"ECHO SHORT FLAT"` estava duplicado nos índices 13 e 17 originais de `names-midifex.h`.
- **Arquivos alterados:**
  - `third_party/midiverb_emulator/names-midifex.h`
  - `barrverb-web/src/dsp/decompiled/midifexProgramNames.ts`
  - `esp32_barrverb/include/decompiled/MidifexProgramNames.h`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico (curto):** corrigido o nome do programa no índice 13 (14 na listagem, patch anterior em `names-midifex.h`) de `"ECHO SHORT FLAT"` para `"ECHO SHORT FLAT AMBI"`, corrigindo a inconsistência de dados herdada da referência third-party, que deixava dois programas com o mesmo nome na série `ECHO SHORT`.
- **Pendências/riscos:** como alteramos um arquivo da referência (`third_party`), ele diverge pontualmente do projeto original, mas em benefício da corretude na UI do projeto atual.
- **Decisão:** aplicar a correção nas fontes (web e embarcado) e no próprio arquivo de referência local para manter consistência interna, seguindo a lógica deduzida a partir das sequências de programas (`LONG`, `MED`, `SHORT`).

## 2026-05-07
- **Task concluída:** `- [x] Web: adicionar seletor de unidade (MidiVerb II / MidiFex).` e `- [x] Web: atualizar lista de presets dinamicamente por unidade.`
- **Arquivos alterados:**
  - `barrverb-web/src/audio/worklet.ts`
  - `barrverb-web/src/audio/audio.ts`
  - `barrverb-web/src/ui/App.tsx`
  - `docs/midiverb2-midifex-tasks.md`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico (curto):** Adicionado seletor de unidade na interface Web com atualização automática da família de efeitos e engine subjacente (`INTERPRETER` para MidiVerb II e `DECOMPILED` para MidiFex). A lista de nomes de programas foi conectada para trocar dinamicamente dependendo da unidade selecionada.
- **Pendências/riscos:** A seleção na web está funcional. Falta implementar comportamento equivalente para hardware embarcado (ESP32) mapeando o botão/encoder de controle.
- **Decisão:** Unir a task de atualizar lista de presets à do seletor, pois uma interface com seletor de hardware mas mantendo as listagens incorretas dos programas da outra unidade tornaria a experiência de uso/debugging confusa. O MidiVerb II foi mantido no motor INTERPRETER por default e o MidiFex no DECOMPILED para garantir a fidelidade de MV2 enquanto o fallback atua.

## 2026-05-07 (Embarcado: Controle de Unidade e Programa)
- **Task concluída:** `- [x] Embarcado: mapear controle para troca de unidade e programa.`
- **Arquivos alterados:**
  - `esp32_barrverb/src/main.cpp`
  - `docs/midiverb2-midifex-tasks.md`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico (curto):** Mapeado o controle de unidade (`u`) via Serial, alternando a família (`Midiverb2` / `Midifex`) e as engines correspondentes (`Interpreter` / `Decompiled`) na inicialização e loop da ESP32. Além disso, o limite máximo de programas foi dinamicamente ajustado com base na família selecionada, garantindo comportamento semelhante à web na UI via console serial.
- **Pendências/riscos:** Sem riscos imediatos identificados. A integração no firmware foi bem sucedida.
- **Decisão:** Reutilizada a lógica do adaptador `Decompiled` recém-implementado na engine esp32_barrverb durante o roteamento (`MidiFex`), e clamp seguro do programa atual com base na variação máxima respectiva.

## 2026-05-07 (Embarcado: Correção de Limites de Programa)
- **Task concluída:** Correção/Follow-up de `- [x] Embarcado: mapear controle para troca de unidade e programa.`
- **Arquivos alterados:**
  - `esp32_barrverb/src/main.cpp`
  - `esp32_barrverb/src/BarrVerb.cpp`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico (curto):** Ajustado o limite máximo para programas da MidiFex de 62 para 63 na interface Serial e atualizado o limite de clamp de entrada na engine subjacente (`BarrVerb::setProgram()`) para suportar corretamente 99 (`MidiVerb2`) ou 63 (`MidiFex`), em vez do antigo hardcode truncado em 63 para todos os casos.
- **Pendências/riscos:** Sem riscos imediatos identificados. Evita problemas de programas fantasmas ao selecionar além do limite.
- **Decisão:** Aumentar o suporte no clamp `BarrVerb::setProgram` dependendo de `family`, alinhando os índices entre os limites da unidade externa e da lógica de processamento interna.

## 2026-05-09 (Validação do diretório third_party)
- **Task concluída:** `- [x] Criar/validar diretório \`third_party/midiverb_emulator/\` contendo:` (e seus arquivos).
- **Arquivos alterados:**
  - `docs/midiverb2-midifex-tasks.md`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico (curto):** Verificado que o diretório e os arquivos essenciais de referência (como `decompiled-*.h`, `names-*.h`, `rom.h`, `lfo.h`, `dasp16.h`, `README.md`, e `LICENSE`) já existem no repositório. Nenhuma modificação no código ou nos arquivos de referência foi necessária, marcando assim a task como validada e concluída.
- **Pendências/riscos:** Nenhum risco. Os arquivos já foram copiados e integram a codebase.
- **Decisão:** Validar manualmente a existência via inspeção do workspace no processo, consolidando o critério da task de documentar o fato de estarem localmente resolvidos.

## 2026-05-09 (Correção de status da task Exibir nome de preset)
- **Task concluída:** `- [x] Exibir nome de preset ativo em logs/UI quando disponível.`
- **Arquivos alterados:**
  - `docs/midiverb2-midifex-tasks.md`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico (curto):** A task foi marcada como concluída conforme instrução anterior do usuário para passá-la adiante, corrigindo a omissão ocorrida no commit de documentação.
- **Pendências/riscos:** Nenhum.
- **Decisão:** Refletir o status exato das check lists em conformidade com as revisões de PR.
