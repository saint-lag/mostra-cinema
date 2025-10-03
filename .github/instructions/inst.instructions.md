    
# Instruções do Agente – Mostra Cinema

## Objetivo do Projeto
O site **Mostra Cinema** deve exibir: Catálogo de filmes, Programação do evento e Seção “Sobre” para divulgação. O tom editorial é **casual e amigável**.

## Stack
- **Next.js 15.5.2** com App Router
- **TypeScript** com `strict: true`
- **npm** como gerenciador
- **TailwindCSS** configurado com identidade visual
- Sem bibliotecas externas de UI (ex.: shadcn, Radix)
- Data fetching: RSC + `fetch` com revalidação
- Deploy: Vercel

## Estrutura de Pastas
- **app/**: Contém as rotas da aplicação.
- **components/**: Componentes reutilizáveis da interface.
- **components/ui/**: Componentes de interface do usuário (UI).
- **lib/**: Funções e utilitários auxiliares.
- **styles/**: Estilos globais e temas.
- **content/**: Dados JSON.
- **public/img/**: Imagens do catálogo.


- Aliases: `@/components`, `@/lib`, `@/content`
- Convenções: Componentes em PascalCase, utilitários em kebab-case

---

## Dados e Conteúdo
- Origem: JSON local em `/content`

### Tipos
**Filme (Film):**
- `titulo`, `diretores`, `pais`, `ano`, `duracao`, `sinopse`, `imagem`, `classificacao`, `tags`, `slug`

**Sessão (Session):**
- `data`, `hora`, `sala`, `filmeSlug`, `tipo` (`mostra` | `competicao`), `idioma` (`legendado` | `dublado`)

### Regras
- Idioma inicial: PT-BR
- Slugs: minúsculo, hífenizado, sem acentos, único
- Imagens: `/public/img`, formatos WebP/AVIF, usar `next/image` com `sizes` e `lazy`

---

## Identidade Visual
### Fonte
- **Muro Regular** via `next/font/local`
- Definida como `--font-muro` em `globals.css`
- Usada em `fontFamily.sans` no Tailwind

### Paleta de Cores
- `terra: #bb5b2b`
- `musgo: #425a12`
- `lima:  #afbd8d`
- `cipo:  #7e8e20`
- `bebe:  #e1ffe2`

### Configuração Tailwind
// tailwind.config.ts
content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
],
theme: {
  extend: {
    colors: {
      terra: "#bb5b2b",
      musgo: "#425a12",
      lima:  "#afbd8d",
      cipo:  "#7e8e20",
      bebe:  "#e1ffe2",
    },
    fontFamily: {
      sans: ["var(--font-muro)", "system-ui", "sans-serif"],
    },
  },
}
  
### Tipografia
- Usar `clamp()` para títulos, exemplo: `clamp(1.75rem, 2vw + 1rem, 2.5rem)`

### UI/UX e Acessibilidade
- Breakpoints: padrão do Tailwind
- Container: max-w-7xl
- Navbar colapsável em mobile
- Filtros como acordeão em telas pequenas
- Acessibilidade: WCAG 2.1 AA
- Animações leves com Framer Motion (150–250ms)

### Componentes Base

- Navbar, Footer, Hero
- CardFilme, ListaFilmes, CardSessao
- FiltroChips, BadgeClassificacao
- Hooks: useSlug, useFilters

### SEO e Social

- Metadados padrão do Next (title, description)
- sitemap.xml e robots.txt automáticos
- Open Graph dinâmico por filme
- Todas as páginas indexáveis (exceto rascunhos)
- Qualidade de Código
- ESLint + Prettier (eslint-config-next)

### Regras extras: no-unused-vars, sort-imports

- Husky + lint-staged no pre-commit (eslint --fix, prettier --write, tsc --noEmit)

- Testes: Vitest + React Testing Library (80% core)

- CI no GitHub Actions: type-check, build, lint, tests

### Scripts npm

- npm run dev

- npm run build

- npm run start

- npm run lint

- npm run typecheck

- npm run test

### Git e Fluxo de Trabalho

- Branch inicial: /agente

- Features: agente/feature/* via PR, 1 review mínimo

- Conventional Commits

- PRs pequenos por feature

- Template de PR com checklist (build, lint, test, prints)

### Formato das respostas

- Resumo – o que será feito
- Plano – passos objetivos
- Patch (diff unificado) – arquivos ou trechos (usar arquivos completos se >30 linhas)
- Checklist – como validar (build, lint, tests)
- Notas – trade-offs ou Assumptions quando algo for ambíguo

## Referências Visuais e Inspirações
O design e a experiência do usuário devem se inspirar em referências do setor, mantendo a identidade própria do projeto.

### Sites de referência
- [Festival Scope Pro](https://pro.festivalscope.com/)  
- [Mostra Internacional de Cinema de São Paulo – 48ª edição](https://48.mostra.org/)

### Diretrizes de inspiração
- **Espírito visual e atmosfera**: capturar a sensação de modernidade, sofisticação e foco no cinema, sem copiar a paleta de cores (já definida).
- **Fluxo de usuário**: priorizar clareza na navegação (catálogo → detalhe do filme → programação → compra/participação).
- **Estrutura de conteúdo**: páginas bem segmentadas (catálogo, programação, detalhe de filme, sobre).
- **UI Patterns**: destaque para grades de filmes, cards visuais, programação organizada por datas e filtros acessíveis.
- **Consistência editorial**: seguir tom amigável e casual, mas sempre mantendo a credibilidade e profissionalismo que os sites referência transmitem.

### Refatorações
- Permitidas desde que não quebrem CI nem cobertura de testes.

### Segurança
- Nunca expor chaves/segredos
- Nenhuma variável de ambiente crítica por enquanto

### Convenções de Conteúdo
- Idioma: PT-BR
- Datas/horas: formato 24h, timezone America/Sao_Paulo
- Duração: XX min
- Classificação indicativa: badge com tooltip
- Estilo editorial: casual, amigável


### Quando criar vs editar
- Criar: novos componentes/features
- Editar: ajustes/refatorações em existentes

### Critérios de Aceite de PR

- Build e testes passando
- ESLint/Prettier sem erros
- Tipagem correta (npm run typecheck)
- Acessibilidade básica validada