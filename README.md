# Projeto Regulariza Amazonas (Frontend)

Este é o repositório do frontend para o projeto "Regulariza Amazonas", uma landing page informativa desenvolvida com Vue 3, TypeScript e Vite. O projeto segue boas práticas de desenvolvimento, incluindo código fonte comentado e uma infraestrutura de testes unitários.

## Visão Geral

O projeto consiste em uma landing page informativa sobre o programa Regulariza Amazonas, detalhando quem pode participar, os benefícios da regularização, como o programa funciona, respondendo a dúvidas frequentes e fornecendo informações de contato.

## Tecnologias Utilizadas

*   **Vue 3:** Framework progressivo para construção de interfaces de usuário, utilizando a Composition API.
*   **TypeScript:** Superset do JavaScript que adiciona tipagem estática para maior robustez e manutenibilidade do código.
*   **Vite:** Ferramenta de build moderna e rápida para desenvolvimento frontend, proporcionando um ambiente de desenvolvimento ágil.
*   **Vitest:** Framework de testes unitários rápido e integrado ao ecossistema Vite, utilizado para garantir a qualidade e o comportamento esperado dos componentes.
*   **Vue Test Utils:** Biblioteca oficial para testes de componentes Vue.
*   **Happy DOM:** Ambiente DOM leve para execução de testes unitários.
*   **Vue Router (Opcional):** Se o projeto evoluir para múltiplas páginas, esta biblioteca poderá ser utilizada para roteamento.
*   **Pinia (Opcional):** Para gerenciamento de estado em aplicações maiores.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

*   [Node.js](https://nodejs.org/) (versão LTS recomendada, que inclui npm)
*   [Git](https://git-scm.com/) (para clonar o repositório)

## Configuração do Ambiente de Desenvolvimento

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_REPOSITORIO_AQUI> # Substitua pela URL correta do repositório
    cd regulariza-amazonas-portal # Ou o nome do diretório do projeto
    ```

2.  **Instale as dependências:**
    Utilizando npm:
    ```bash
    npm install
    ```
    Ou utilizando Yarn (se preferir):
    ```bash
    # yarn install
    ```

## Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes scripts definidos no `package.json`:

### `npm run dev`

Executa a aplicação em modo de desenvolvimento com Hot Module Replacement (HMR).
Abra [http://localhost:5173](http://localhost:5173) (ou a porta indicada no terminal) para visualizá-la no navegador.
A página será recarregada automaticamente se você fizer edições no código. Erros de lint e compilação serão exibidos no console.

### `npm run build`

Compila e otimiza a aplicação para produção na pasta `dist/`.
Este comando realiza a verificação de tipos com `vue-tsc` antes do build, garantindo a integridade do código.

### `npm run preview`

Inicia um servidor local estático para servir os arquivos da pasta `dist/` (gerados pelo `npm run build`).
Este comando é útil para testar o build de produção localmente antes de fazer o deploy.
Por padrão, ele roda em `http://localhost:4173` e aceita conexões externas (`--host`).

### `npm test`

Executa a suíte de testes unitários utilizando Vitest.
Os resultados dos testes serão exibidos no console. Vitest também pode ser executado em modo watch para re-executar testes automaticamente ao salvar arquivos.

## Qualidade de Código e Boas Práticas

Este projeto se esforça para seguir boas práticas de desenvolvimento, incluindo:

*   **TypeScript:** Todo o código da aplicação é escrito em TypeScript, aproveitando a tipagem estática para reduzir erros e melhorar a clareza do código.
*   **Código Comentado:** Partes significativas do código fonte, incluindo componentes Vue, configurações e arquivos de teste, foram comentadas para explicar a lógica e facilitar a compreensão pela equipe.
*   **Testes Unitários:**
    *   Uma infraestrutura de testes unitários foi configurada com **Vitest** e **Vue Test Utils**.
    *   Testes iniciais ("smoke tests") foram criados para todos os componentes principais da landing page, localizados em `src/components/tests/`. Estes testes verificam se os componentes podem ser montados corretamente.
    *   O componente `Header.vue` possui um exemplo de teste mais detalhado, validando a renderização da logo e a funcionalidade do menu responsivo.
    *   Os arquivos de teste também são comentados para explicar o propósito de cada suíte e caso de teste.
    *   A equipe é encorajada a expandir a cobertura de testes, adicionando verificações mais específicas para as funcionalidades de cada componente.
*   **Estrutura de Projeto Organizada:** O projeto segue uma estrutura de diretórios lógica para facilitar a navegação e a localização de arquivos.
*   **Configuração Moderna com Vite:** Utilização do Vite para um desenvolvimento rápido e builds otimizados.

## Testando com Acesso Externo (Usando ngrok)

Para compartilhar seu ambiente de desenvolvimento local (`npm run dev`) ou o build de preview (`npm run preview`) com alguém externamente (pela internet), você pode usar o `ngrok`.

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
    *   Primeiro, inicie o servidor de desenvolvimento (o script `dev` já está configurado para aceitar conexões externas por padrão com Vite):
        ```bash
        npm run dev
        ```
        (Anote a porta, geralmente 5173).
    *   Em **outro terminal**, inicie o ngrok:
        ```bash
        ngrok http PORTA_DO_DEV_SERVER
        ```
        (Exemplo: `ngrok http 5173`)

4.  **Expondo o servidor de preview (`npm run preview`):**
    *   O script `preview` no `package.json` já inclui a flag `--host`.
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
├── public/                 # Arquivos estáticos públicos (ex: favicon.ico)
├── src/
│   ├── assets/             # Imagens, fontes e outros assets estáticos da aplicação
│   ├── components/         # Componentes Vue reutilizáveis
│   │   └── tests/          # Testes unitários para os componentes (usando Vitest)
│   ├── App.vue             # Componente raiz da aplicação Vue
│   ├── main.ts             # Ponto de entrada da aplicação (inicialização do Vue)
│   ├── style.css           # Estilos globais da aplicação
│   └── vite-env.d.ts       # Declarações de tipo para variáveis de ambiente do Vite
├── .gitignore
├── index.html              # Template HTML principal da aplicação
├── package.json            # Metadados do projeto, dependências e scripts
├── README.md               # Este arquivo
├── tsconfig.json           # Configuração principal do TypeScript para o projeto
├── tsconfig.node.json      # Configuração TypeScript para ambiente Node (ex: vite.config.ts)
└── vite.config.ts          # Arquivo de configuração do Vite (e Vitest)
```
As seções opcionais como `views/`, `router/`, `store/`, `styles/` (como diretório separado) foram removidas da visualização da estrutura, pois não estão presentes no projeto atual, mas podem ser adicionadas conforme a necessidade.

## Contribuindo

Detalhes sobre como contribuir para o projeto (convenções de código, processo de pull request, etc.) podem ser adicionados aqui. Recomenda-se seguir os padrões de código e testes já estabelecidos.

## Licença

Este projeto é licenciado sob a Licença MIT (ou outra, se aplicável).
