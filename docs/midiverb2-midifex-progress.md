# Progresso — MidiVerb II + MidiFex

## 2026-05-05

- **Task concluída:** `Implementar adaptador para funções de decompiled-midiverb2.h no backend web.`
- **Arquivos alterados:**
  - `barrverb-web/src/dsp/decompiled/midiverb2.ts`
  - `docs/midiverb2-midifex-tasks.md`
  - `docs/midiverb2-midifex-progress.md`
- **Resumo técnico:**
  - Implementado adaptador web para assinatura estilo C dos efeitos decompilados do MidiVerb II, convertendo entrada/saída para `int16`, propagando RAM, ponteiro e LFOs.
  - Integrado `effect_0` (Defeat) via adaptador como primeira prova funcional no registry `MIDIVERB_II`.
- **Pendências/riscos:**
  - A tabela completa de dispatch (`0..99`) ainda não foi integrada; os demais programas continuam em fallback até a task de dispatch.

### Decisão

- **Escopo incremental do adaptador:** nesta task foi implementada a infraestrutura de adaptação de assinatura e a ligação de um efeito real (`effect_0`), deixando a expansão da tabela de programas para a task específica de dispatch, evitando sobreposição de escopo entre tasks.
