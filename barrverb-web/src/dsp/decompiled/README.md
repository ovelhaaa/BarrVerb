# Backend decompilado (base)

Estrutura inicial do backend decompilado para a versão Web.

Arquivos nesta pasta:
- `index.ts`: exportações públicas do backend decompilado.
- `types.ts`: tipos base compartilhados para integração futura.
- `registry.ts`: seleção de registry por família (`MIDIVERB_II` / `MIDIFEX`).
- `midiverb2.ts`: registry base do MidiVerb II (programas ainda não integrados).
- `midifex.ts`: registry base do MidiFex (programas ainda não integrados).

Esta etapa mantém apenas o esqueleto do backend decompilado, com pontos explícitos para os próximos tickets de integração dos adaptadores e tabelas de dispatch por programa.
