# Thiago Sieg - Portfólio Acadêmico

Um site acadêmico pessoal moderno e responsivo para pesquisador em Inteligência Artificial e Física Computacional.

## 🚀 Funcionalidades

### ✨ Interface Moderna
- **Design Responsivo**: Otimizado para desktop, tablet e mobile
- **Modo Escuro/Claro**: Toggle entre temas com persistência
- **Animações Suaves**: Transições e micro-interações profissionais
- **Tipografia Elegante**: Fonte Inter para máxima legibilidade

### 🌍 Internacionalização
- **Suporte Bilíngue**: Português e Inglês
- **Detecção Automática**: Detecta idioma do navegador
- **Persistência**: Preferências salvas localmente

### 📱 Experiência do Usuário
- **Navegação Intuitiva**: Menu responsivo com indicadores visuais
- **Carregamento Rápido**: Build otimizado com Vite
- **Acessibilidade**: Suporte completo a navegação por teclado
- **SEO Otimizado**: Meta tags e estrutura semântica

## 🛠️ Tecnologias

### Frontend
- **React 19** - Framework principal
- **TypeScript** - Tipagem estática
- **Tailwind CSS v4** - Estilização utilitária
- **Framer Motion** - Animações e transições
- **Lucide React** - Ícones consistentes

### Ferramentas
- **Vite** - Build tool e dev server
- **shadcn/ui** - Componentes reutilizáveis
- **React Router** - Roteamento SPA

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── common/          # Componentes reutilizáveis
│   ├── layout/          # Layout e navegação
│   ├── sections/        # Seções específicas
│   └── ui/              # Componentes base (shadcn/ui)
├── context/             # Contextos React
├── data/                # Dados e traduções
├── pages/               # Páginas principais
├── types/               # Definições TypeScript
└── utils/               # Utilitários e constantes
```

## 🎨 Design System

### Paleta de Cores
- **Modo Claro**: Branco puro com cinza escuro neutro (#1f1f1f)
- **Modo Escuro**: Preto elegante com acentos azuis (#3b82f6)
- **Accent**: Azul navy discreto (#1c2b3a) para links e botões

### Componentes
- **Cards**: Elevação sutil com hover effects
- **Botões**: Estados visuais claros e animações
- **Navegação**: Indicadores de página ativa
- **Formulários**: Estilos consistentes e acessíveis

## 🚀 Como Usar

### Desenvolvimento
```bash
# Instalar dependências
pnpm install

# Servidor de desenvolvimento
pnpm run dev

# Build de produção
pnpm run build

# Preview do build
pnpm run preview
```

### Deploy
O projeto está configurado para deploy estático. A pasta `dist/` contém todos os arquivos necessários.

## 📄 Páginas

### 🏠 Home
- Hero section com apresentação
- Seção sobre com biografia
- Estatísticas de formação
- Projetos e publicações em destaque

### 🔬 Projetos
- Grid responsivo de projetos
- Categorização (featured/outros)
- Links para GitHub e demos
- Tags tecnológicas

### 📚 Publicações
- Lista organizada por ano
- Informações acadêmicas completas
- Links para DOI e PDFs
- Abstracts em PT/EN

### ✍️ Blog
- Estrutura preparada para posts
- Layout otimizado para leitura
- Suporte a conteúdo multilíngue

## 🎯 Características Técnicas

### Performance
- **Bundle Size**: ~477KB JS + ~90KB CSS (gzipped: ~154KB + ~15KB)
- **Lazy Loading**: Componentes carregados sob demanda
- **Tree Shaking**: Código não utilizado removido automaticamente
- **Font Optimization**: Google Fonts com display=swap

### Acessibilidade
- **WCAG 2.1**: Conformidade com diretrizes de acessibilidade
- **Navegação por Teclado**: Suporte completo
- **Screen Readers**: Estrutura semântica adequada
- **Contraste**: Cores com contraste adequado

### SEO
- **Meta Tags**: Título e descrição otimizados
- **Open Graph**: Compartilhamento em redes sociais
- **Structured Data**: Marcação semântica
- **Sitemap**: Estrutura clara para indexação

---

Desenvolvido com ❤️ usando React, TypeScript e Tailwind CSS

