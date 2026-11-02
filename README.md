# Desafio 05 - Blog Pessoal Dinâmico com Next.js e Supabase

Projeto desenvolvido como parte da **Formação React Developer** na plataforma da **Digital Innovation One (DIO)** no módulo de **Next.js e Integração em Nuvem**.

Neste projeto foi construído um blog moderno e dinâmico utilizando **Next.js** com renderização híbrida (**SSR / Server-Side Rendering**), rotas dinâmicas (`/posts/[id]`), estilização com **Tailwind CSS**, suporte a temas e integração a banco de dados na nuvem com **Supabase** (PostgreSQL Serverless via REST API).

---

## 🚀 Funcionalidades

- **Renderização no Servidor (SSR):**
  - Carregamento de dados em tempo de execução via `getServerSideProps`.
  - Página inicial listando os posts publicados com título, resumo, data formatada e indicador visual de navegação.
- **Rotas Dinâmicas de Postagens (`/posts/[id]`):**
  - Implementação da consulta de posts individuais por slug/id (`getPostBySlug`).
  - Consulta ao endpoint Supabase com filtro de query (`/posts?id=eq.${id}`).
  - Fallback resiliente com posts de demonstração caso a instância remota de teste esteja temporariamente pausada ou sem conexão.
  - Página 404 automática (`notFound: true`) quando o post solicitado não for localizado.
- **Design Responsivo e Moderno:**
  - Estilização completa com **Tailwind CSS** e tipografia fluida.
  - Gradientes dinâmicos de fundo e compatibilidade com modo escuro (*Dark Mode*).
- **SEO & Metadados:**
  - Componente `<SEO />` configurando títulos dinâmicos por página e descrições para mecanismos de busca.

---

## 🛠️ Tecnologias Utilizadas

- **Next.js** (Framework Fullstack React)
- **React 18**
- **JavaScript (ES6+)**
- **Tailwind CSS** (utilitários CSS modernos)
- **Supabase** (PostgreSQL na nuvem e PostgREST API)
- **Axios** (cliente HTTP)
- **Cypress** (testes end-to-end)

---

## 📂 Estrutura do Projeto

```
trilha-react-desafio-5/
├── components/             # Componentes reutilizáveis (Header, Footer, SEO, Layout)
├── pages/
│   ├── _app.js             # Inicialização de estilos globais
│   ├── _document.js        # Estrutura HTML base e fontes
│   ├── index.js            # Página inicial com SSR (listagem de posts)
│   └── posts/
│       └── [id].js         # Rota dinâmica para leitura do post completo
├── services/
│   └── api.js              # Configuração do cliente Axios com credenciais do Supabase
├── styles/
│   └── globals.css         # Diretivas do Tailwind CSS e estilos globais
├── utils/
│   ├── global-data.js      # Variáveis de ambiente e metadados globais
│   └── mdx-utils.js        # Métodos getPosts e getPostBySlug integrados ao Supabase
├── package.json
└── README.md
```

---

## ⚙️ Como Executar

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 16+)
- npm ou yarn

### 1. Clonar o repositório
```bash
git clone https://github.com/MuriloBGodoy/trilha-react-desafio-5.git
cd trilha-react-desafio-5
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

### 4. Build de Produção
```bash
npm run build
npm start
```

---

## 🧪 Estrutura de Rotas e Páginas

| Rota | Tipo | Descrição |
|------|------|-----------|
| `/` | SSR | Listagem de artigos do blog consumidos da API |
| `/posts/[id]` | SSR Dinâmica | Leitura do artigo individual com filtro por ID |
| `/404` | Estática | Página exibida caso o post não exista |
