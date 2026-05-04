# Backend decompilado (base) — Embarcado

Estrutura inicial do backend decompilado para o alvo embarcado (`esp32_barrverb`).

Arquivos nesta estrutura:
- `include/decompiled/DecompiledTypes.h`: contratos base de estado, I/O e assinatura de runner.
- `include/decompiled/DecompiledRegistry.h`: interface para seleção de registry por família.
- `src/decompiled/DecompiledRegistry.cpp`: implementação inicial de registries vazios com fallback seguro.

Esta etapa cria apenas o esqueleto para os próximos tickets de integração dos adaptadores e tabelas de dispatch de programas para MidiVerb II e MidiFex.
