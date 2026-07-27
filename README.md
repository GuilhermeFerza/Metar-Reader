# Metar Reader

Um projeto pessoal simples desenvolvido em React para buscar e exibir dados meteorológicos de aeroportos (METAR) em tempo real. Através de uma interface minimalista e em *dark mode*, o usuário pode consultar as condições climáticas informando o código ICAO de qualquer aeroporto do mundo.

## Funcionalidades

* **Busca por ICAO:** Digite o código ICAO (ex: `SBSV`, `SBSP`, `KJFK`) para buscar os dados.
* **Dados Detalhados:** Exibe informações traduzidas da API, como:
  * Categoria de Voo (VFR, IFR, etc.)
  * Temperatura e Ponto de Orvalho (Dewpoint)
  * Pressão Atmosférica (QNH/Barometer)
  * Direção e Velocidade do Vento
  * Visibilidade e Condições de Nuvens (com suporte a CAVOK)
* **Raw METAR:** Exibe a string original do METAR para pilotos e entusiastas que preferem a leitura crua.
* **Design Responsivo e Minimalista:** UI focada na legibilidade, com tratamento seguro contra dados ausentes (Optional Chaining).

## Tecnologias Utilizadas

* **[React 18](https://react.dev/)** com **[Vite](https://vitejs.dev/)**
* **TypeScript**
* **React Router DOM** (Para roteamento)
* **Context API** (Para gerenciamento de estado global da busca)
* **CSS Modules** (Para estilização isolada e sem conflitos)
* **[Lucide React](https://lucide.dev/)** (Para ícones)

## Instalação e Execução local

Siga os passos abaixo para rodar o projeto na sua máquina:

### 1. Clone o repositório
```bash
git clone [https://github.com/GuilhermeFerza/Metar-Reader.git](https://github.com/GuilhermeFerza/Metar-Reader.git)
cd Metar-Reader

2. Instale as dependências

npm install
# ou
yarn install
# ou
pnpm install

3. Configuração das Variáveis de Ambiente
Crie um arquivo chamado .env na raiz do projeto (no mesmo nível do package.json) e adicione as suas credenciais da API de METAR que você está utilizando:

VITE_API_KEY=e79541c3f614462dbde2e0e7351d20d4
VITE_API_URL=http://localhost:8080

4. Rode o projeto
npm run dev
# ou
yarn dev

Acesse http://localhost:5173 no seu navegador para ver o projeto rodando.

Estrutura Base do Projeto
src/
 ├── App/
 │   ├── App.tsx          # Wrapper principal e layout
 │   └── Routes/
 │       └── Home.tsx     # Página principal de exibição dos dados
 ├── Components/
 │   └── Layout/
 │       └── Header.tsx   # Barra de busca e título
 ├── Context/
 │   └── MetarContext.tsx # Contexto para compartilhar o JSON da API
 ├── Router.tsx           # Configuração do React Router (createBrowserRouter)
 └── main.tsx             # Ponto de entrada da aplicação
Desenvolvedor
Desenvolvido por GuilhermeFerza.
Projeto com fins de estudo prático de consumo de APIs, gerenciamento de estado (Context) e roteamento em React.