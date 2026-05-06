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
