# Projeto Regulariza Amazonas (Frontend)

Este é o repositório do frontend para o projeto "Regulariza Amazonas", desenvolvido com Vue 3, TypeScript e Vite.

## Visão Geral

O projeto consiste em uma landing page informativa sobre o programa Regulariza Amazonas, detalhando quem pode participar, os benefícios da regularização, como o programa funciona, respondendo a dúvidas frequentes e fornecendo informações de contato.

## Tecnologias Utilizadas

*   **Vue 3:** Framework progressivo para construção de interfaces de usuário.
*   **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
*   **Vite:** Ferramenta de build moderna e rápida para desenvolvimento frontend.
*   **Vue Router (Opcional):** Se o projeto evoluir para múltiplas páginas, esta biblioteca será utilizada para roteamento.
*   **Pinia (Opcional):** Para gerenciamento de estado em aplicações maiores.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

*   [Node.js](https://nodejs.org/) (versão LTS recomendada, que inclui npm)
*   [Git](https://git-scm.com/) (para clonar o repositório)

## Configuração do Ambiente de Desenvolvimento

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_REPOSITORIO>
    cd nome-do-diretorio-do-projeto
    ```

2.  **Instale as dependências:**
    Utilizando npm:
    ```bash
    npm install
    ```
    Ou utilizando Yarn (se preferir):
    ```bash
    yarn install
    ```

## Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes scripts:

### `npm run dev`

Executa a aplicação em modo de desenvolvimento.
Abra [http://localhost:5173](http://localhost:5173) (ou a porta indicada no terminal) para visualizá-la no navegador.
A página será recarregada automaticamente se você fizer edições no código.
Você também verá quaisquer erros de lint no console.

### `npm run build`

Compila a aplicação para produção na pasta `dist/`.
Este comando otimiza a aplicação para o melhor desempenho, minificando os arquivos e gerando os assets estáticos.

### `npm run preview`

Inicia um servidor local estático para servir os arquivos da pasta `dist/` (gerados pelo `npm run build`).
Este comando é útil para testar o build de produção localmente antes de fazer o deploy.
Por padrão, ele roda em `http://localhost:4173`.

## Testando com Acesso Externo (Usando ngrok)

Para compartilhar seu ambiente de desenvolvimento local ou o build de preview com alguém externamente (pela internet), você pode usar o `ngrok`.

1.  **Instale o ngrok:**
    *   **Via Chocolatey (Windows):**
        ```powershell
        choco install ngrok
        ```
    *   **Manualmente:** Baixe do [site oficial do ngrok](https://ngrok.com/download), descompacte e, opcionalmente, adicione ao seu PATH.

2.  **Autentique o ngrok (necessário apenas uma vez):**
    Crie uma conta gratuita no [ngrok.com](https://ngrok.com), pegue seu Authtoken no dashboard e execute:
    ```bash
    ngrok config add-authtoken SEU_AUTHTOKEN_AQUI
    ```

3.  **Expondo o servidor de desenvolvimento (`npm run dev`):**
    *   Primeiro, inicie o servidor de desenvolvimento:
        ```bash
        npm run dev -- --host
        ```
        (A flag `--host` permite que o Vite aceite conexões de fora do localhost. Anote a porta, geralmente 5173).
    *   Em **outro terminal**, inicie o ngrok:
        ```bash
        ngrok http PORTA_DO_DEV_SERVER
        ```
        (Exemplo: `ngrok http 5173`)

4.  **Expondo o servidor de preview (`npm run preview`):**
    *   Primeiro, certifique-se de que o script `preview` no seu `package.json` inclua a flag `--host`:
        ```json
        "scripts": {
          // ... outros scripts
          "preview": "vite preview --host"
        }
        ```
    *   Execute o build e o preview:
        ```bash
        npm run build
        npm run preview
        ```
        (Anote a porta do preview, geralmente 4173).
    *   Em **outro terminal**, inicie o ngrok:
        ```bash
        ngrok http PORTA_DO_PREVIEW_SERVER
        ```
        (Exemplo: `ngrok http 4173`)

O ngrok fornecerá um URL público (ex: `https://xxxx-xxxx.ngrok-free.app`). Compartilhe este URL com quem precisa acessar. Lembre-se de manter tanto o servidor local (dev ou preview) quanto o processo do ngrok rodando.

## Estrutura do Projeto (Visão Geral)

```
.
├── public/             # Arquivos estáticos públicos
├── src/
│   ├── assets/         # Imagens, fontes, etc.
│   ├── components/     # Componentes Vue reutilizáveis
│   ├── views/          # (Opcional) Componentes de página/rota
│   ├── router/         # (Opcional) Configuração do Vue Router
│   ├── store/          # (Opcional) Módulos Pinia
│   ├── styles/         # (Opcional) Arquivos de estilo globais/variáveis
│   ├── App.vue         # Componente raiz da aplicação
│   ├── main.ts         # Ponto de entrada da aplicação
│   └── vite-env.d.ts   # Declarações de tipo para Vite
├── .gitignore
├── index.html          # Template HTML principal
├── package.json
├── README.md           # Este arquivo
├── tsconfig.json       # Configuração principal do TypeScript
├── tsconfig.node.json  # Configuração TypeScript para ambiente Node (ex: vite.config.ts)
└── vite.config.ts      # Configuração do Vite
```

## Contribuindo

Detalhes sobre como contribuir para o projeto (convenções de código, processo de pull request, etc.) podem ser adicionados aqui.

## Licença

Este projeto é licenciado sob a Licença MIT (ou outra, se aplicável).
