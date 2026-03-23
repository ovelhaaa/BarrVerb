# BarrVerb Web

Este projeto é um simulador web do efeito de reverberação presente no repositório [BarrVerb](https://github.com/ovelhaaa/BarrVerb). O processamento de áudio em tempo real foi portado da implementação original em C/C++ para TypeScript rodando no navegador, aproveitando a API AudioWorklet para baixa latência.

## Visão Geral

A arquitetura foi estruturada com foco na separação clara entre a lógica pura de DSP, a integração com o engine da Web Audio API e a interface de usuário (UI). O resultado busca preservar a fidelidade matemática do firmware em C++ que processava os dados nativamente no chip do projeto original.

- **`src/dsp/`:** Contém a porta nativa do Interpretador de Instruções (máquina virtual do efeito), simulando os acessos aos buffers de memória e à estrutura original dos registradores do acumulador.
- **`src/audio/`:** Encapsula o ambiente de Web Audio, manipulando nós e canais, roteando fluxos do microfone e arquivos carregados para o thread dedicado do WorkletProcessor.
- **`src/ui/`:** Interface reativa baseada em React (Vite/TypeScript) para oferecer os controles do efeito de maneira simples e funcional.

## Como Rodar Localmente

Certifique-se de que você tem o Node.js e o NPM instalados em sua máquina.

1. Navegue até a pasta do projeto:
   \`\`\`bash
   cd barrverb-web
   \`\`\`

2. Instale as dependências:
   \`\`\`bash
   npm install
   \`\`\`

3. Inicie o servidor de desenvolvimento Vite com o comando `npm run dev`.

## Deploy no GitHub Pages

O projeto está configurado para ser implantado de forma automática no GitHub Pages através do GitHub Actions. O workflow fica em `.github/workflows/deploy-pages.yml`.

### Como Configurar no GitHub

1. Vá até a aba **Settings** do seu repositório no GitHub.
2. Acesse a aba **Pages** no menu à esquerda.
3. Na seção **Build and deployment**, em **Source**, selecione **GitHub Actions**.

A partir deste momento, sempre que houver um \`push\` na branch \`main\`, a action será disparada e construirá a pasta estática utilizando a base correta para o repositório, sem precisar alterar manualmente o \`vite.config.ts\`.

### Observações sobre Base Path

O deploy utiliza automaticamente o nome do repositório como o **Base Path** para o Vite (por exemplo: \`https://seu-usuario.github.io/nome-do-repositorio/\`). Isso acontece ao injetar a variável de ambiente \`VITE_BASE_PATH\` no momento do build.

**Caso precise de um domínio customizado ou Base Path manual:**

A configuração do `VITE_BASE_PATH` no arquivo `.github/workflows/deploy-pages.yml` precisa ser ajustada manualmente para cenários de publicação específicos:

- **Para um domínio customizado na raiz (ex: `https://meu-dominio.com`):** O `VITE_BASE_PATH` deve ser `/`.
- **Para um subcaminho (ex: `https://meu-dominio.com/meu-app/`):** O `VITE_BASE_PATH` deve ser `/meu-app/`.

O exemplo abaixo mostra como alterar o workflow para usar um `VITE_BASE_PATH` de `/` (adequado para um domínio na raiz):

```yaml
      - name: Build with Vite
        run: |
          # Altere de:
          # REPO_NAME=${GITHUB_REPOSITORY#*/}
          # VITE_BASE_PATH=/${REPO_NAME}/ npm run build
          # Para:
          VITE_BASE_PATH=/ npm run build

## Limitações Conhecidas

- **Suporte aos Navegadores:** O uso da Web Audio API com `AudioWorkletProcessor` funciona nas versões modernas do Chrome e Edge. O comportamento e a latência em navegadores baseados em WebKit (Safari) podem sofrer impacto se a implementação de worklets de segundo plano não for robusta ou estiver configurada diferentemente por políticas do sistema operacional.
- **Renderização Offline:** Neste MVP a renderização offline (exportação para WAV/MP3) foi omitida em prol de priorizar um desempenho fiel e com baixa latência para o uso em tempo real e de exploração iterativa do efeito.

## Observações sobre Fidelidade

- **DSP e Máquina Virtual:** A operação lógica bit a bit e as simulações do acumulador e registradores (variáveis locais `l_ai`, `l_acc`, etc.) foram portadas rigorosamente de acordo com o C++ original para manter o processamento com precisão de 12 e 16 bits intacto, apenas adaptado para lidar com as abstrações e arrays tipados oferecidos pela WebAudioAPI.
- **Filtros SVF:** O comportamento de downsampling e state variable filter da entrada do sinal de áudio reflete de maneira estrita os coeficientes passados.

## Observações Importantes sobre ROM / Licenciamento

O projeto original descreve certas questões e limitações de licenciamento relacionados aos binários da ROM. **Os dados hexadecimais de instruções e programas no arquivo `src/dsp/rom.ts` estão sujeitos às mesmas restrições legais mencionadas no repositório de origem.**

Para permitir a publicação deste simulador sem distribuir software restrito, a arquitetura extrai todo o conhecimento dos patches diretamente nesse arquivo. No futuro, você pode facilmente trocar essa tabela de programas de reverb por outro código aberto equivalente ou por programas customizados caso o usuário defina ou o proprietário autorize.

## Próximos Passos Recomendados

1. **Implementar Renderização Offline (`OfflineAudioContext`):** Possibilitar que o usuário submeta um arquivo de áudio para ser processado rapidamente e sem interrupções por um worklet offline para viabilizar downloads em WAV do resultado final.
2. **Design e Temas na UI:** Ampliar o framework visual simplificado em CSS e, dependendo do crescimento do app, migrar o gerenciamento de estilos para soluções modulares como Tailwind.
3. **Modulação de ROM Dinâmica:** Possibilitar o upload dos dumps HEX ou instruções por parte do próprio usuário, desacoplando completamente o simulador de reverberação de qualquer IP de ROM hardcoded.

## Áudio Embutido

O sample embutido (`test-loop.wav`) é um percussivo sintetizado gerado matematicamente que serve apenas para testar a cauda do reverb. É isento de licença e autoria (Domínio Público).
