# BL Swell Cinematic Visual Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reestilizar a landing page existente com a imagem de onda fornecida e uma identidade cinematográfica preta, laranja e branca, sem alterar a copy nem a ordem das seções.

**Architecture:** Manter a arquitetura atual de Server Components por seção e concentrar decisões compartilhadas em tokens do Tailwind v4 e utilitários globais. Usar `next/image` para o hero, reutilizar os componentes de marca existentes e aplicar a alternância de superfícies diretamente em cada seção, preservando as animações GSAP/Lenis e o fallback de movimento reduzido.

**Tech Stack:** Next.js 16.2.9 App Router, React 19.2.4, TypeScript, Tailwind CSS 4, GSAP 3, Lenis, `next/image`.

---

## Mapa de arquivos

- Criar `public/hero-ocean.png`: ativo visual principal fornecido pelo usuário.
- Modificar `src/app/globals.css`: tokens, fundo global, textura e utilitários.
- Modificar `src/app/layout.tsx`: cor do navegador.
- Modificar `src/components/ui/{WaveBackdrop,Navbar,SiteFrame,WhatsAppButton,FloatingWhatsApp}.tsx`: elementos compartilhados.
- Modificar `src/components/sections/{Hero,Dor,Solucao,Casos,ComoFunciona,ParaQuem,SobreMim,CtaFinal,Footer}.tsx`: composição das seções.
- Preservar `src/content/home.ts`: nenhuma alteração de conteúdo faz parte deste plano.

### Task 1: Registrar baseline e instalar o asset do hero

**Files:**
- Create: `public/hero-ocean.png`
- Inspect: `src/content/home.ts`
- Inspect: `src/components/sections/Hero.tsx`

- [ ] **Step 1: Confirmar alterações preexistentes**

Run:

```powershell
git diff -- src/components/sections/Hero.tsx src/content/home.ts
```

Expected: mostrar a troca do CTA do hero para `WhatsAppIcon` e ajustes de copy já feitos pelo usuário. Preservar ambos; não reverter nem incluir alterações de copy.

- [ ] **Step 2: Copiar o asset fornecido**

Run:

```powershell
Copy-Item -LiteralPath 'C:\Users\Usuario\Downloads\ChatGPT Image 21_09_2026, 22_45_06.png' -Destination 'public\hero-ocean.png'
```

Expected: `public/hero-ocean.png` existe. A otimização de formato e tamanho será feita pelo pipeline de `next/image`, conforme a documentação local do Next.js 16.

- [ ] **Step 3: Verificar o baseline técnico**

Run:

```powershell
npm.cmd run lint
```

Expected: lint termina sem erros, ou qualquer erro preexistente fica registrado antes das mudanças.

### Task 2: Implementar o sistema visual global

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Substituir os tokens de cor**

Definir em `@theme`, mantendo os aliases atuais usados pelos componentes:

```css
--color-mercury: #ff5a00;
--color-ghost: #ff7433;
--color-ember: #ff9a66;
--color-deep: #080808;
--color-night: #0b0b0b;
--color-graphite: #111111;
--color-iron: #1b1b1b;
--color-lead: #747474;
--color-starlight: #f7f5f2;
--color-silver: #b8b5b1;
--color-canvas: #080808;
--color-surface: #f7f5f2;
```

- [ ] **Step 2: Atualizar estilos globais e atmosfera**

Implementar:

```css
html { background: var(--color-deep); }
body {
  background: var(--color-deep);
  color: var(--color-starlight);
  overflow-x: clip;
}
.section-dark { background: var(--color-deep); color: var(--color-starlight); }
.section-light { background: var(--color-starlight); color: var(--color-night); }
.surface-dark {
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(17, 17, 17, 0.88);
}
.eyebrow {
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}
.orange-glow {
  background: radial-gradient(circle, rgba(255, 90, 0, 0.28), transparent 68%);
  filter: blur(44px);
}
```

Manter o grão em opacidade baixa, mudar seu blend para `soft-light`, ajustar seleção/foco para laranja e ampliar `prefers-reduced-motion` para reduzir transições decorativas.

- [ ] **Step 3: Atualizar a cor do navegador**

Em `src/app/layout.tsx`:

```tsx
export const viewport: Viewport = {
  themeColor: "#080808",
};
```

- [ ] **Step 4: Verificar tokens**

Run: `npm.cmd run lint`

Expected: PASS, sem classes ou sintaxe CSS inválida.

### Task 3: Reestilizar componentes compartilhados

**Files:**
- Modify: `src/components/ui/Navbar.tsx`
- Modify: `src/components/ui/WaveBackdrop.tsx`
- Modify: `src/components/ui/SiteFrame.tsx`
- Modify: `src/components/ui/WhatsAppButton.tsx`
- Modify: `src/components/ui/FloatingWhatsApp.tsx`

- [ ] **Step 1: Tornar a navbar compatível com o hero escuro**

Aplicar:

```tsx
className={`fixed inset-x-0 top-0 z-50 text-starlight transition-[transform,background-color,backdrop-filter,border-color] duration-300 ${
  hidden ? "-translate-y-full" : "translate-y-0"
} ${
  scrolled
    ? "border-b border-white/10 bg-deep/82 backdrop-blur-xl"
    : "border-b border-transparent bg-gradient-to-b from-black/55 to-transparent"
}`}
```

Usar `text-white/70 hover:text-white` nos links, `border-white/25` no CTA e fundo laranja no hover. Logo e tagline herdam branco.

- [ ] **Step 2: Converter `WaveBackdrop` em decoração vetorial**

Remover a fotografia `/onda.webp` das seções internas e renderizar:

```tsx
<svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="h-full w-full">
  <path d="M-40 240 C 260 40, 420 300, 720 130 S 1120 40, 1480 210" fill="none" stroke="currentColor" strokeWidth="1.25" />
  <path d="M-40 270 C 300 80, 470 310, 760 160 S 1130 80, 1480 235" fill="none" stroke="currentColor" strokeWidth="0.65" opacity="0.45" />
</svg>
```

Manter `heightClass`, `opacityClass` e `priority` por compatibilidade, com `text-mercury` e brilho radial.

- [ ] **Step 3: Harmonizar moldura e CTAs**

Em `SiteFrame`, usar textos `text-white/45`, linhas `bg-mercury/55` e valor rotativo `text-white/75`. Em `WhatsAppButton`, usar borda laranja, sombra controlada e foco visível. Em `FloatingWhatsApp`, usar sombra `rgba(255,90,0,.9)` sem alterar a lógica.

- [ ] **Step 4: Validar componentes compartilhados**

Run: `npm.cmd run lint`

Expected: PASS.

### Task 4: Construir o hero cinematográfico

**Files:**
- Modify: `src/components/sections/Hero.tsx`
- Use: `public/hero-ocean.png`

- [ ] **Step 1: Importar e posicionar a imagem**

Adicionar `import Image from "next/image";` e, abaixo de `<Navbar />`, renderizar:

```tsx
<div className="absolute inset-0">
  <Image
    src="/hero-ocean.png"
    alt="Onda escura iluminada por linhas laranja, símbolo de movimento e crescimento"
    fill
    priority
    sizes="100vw"
    className="object-cover object-[62%_center] sm:object-center"
  />
  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.82)_0%,rgba(0,0,0,.48)_44%,rgba(0,0,0,.16)_72%,rgba(0,0,0,.56)_100%)]" />
  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.42)_0%,transparent_28%,rgba(8,8,8,.18)_68%,#080808_100%)]" />
</div>
```

- [ ] **Step 2: Reorganizar a composição sem alterar a copy**

Usar layout alinhado à esquerda com `max-w-[1320px]`, `min-h-svh`, texto até `52rem`, headline branca e destaques laranja. Preservar `HeadlineLines`, `SideNote`, `h.ariaHeadline`, `h.left`, `h.right`, `h.ctaQuestion`, `h.ctaMessage` e o `WhatsAppIcon` preexistente.

Aplicar ao CTA:

```tsx
className="hero-fade inline-flex min-h-12 items-center gap-3 rounded-lg border border-mercury bg-mercury px-7 py-3 text-lg font-[700] text-white shadow-[0_16px_42px_-14px_rgba(255,90,0,.9)] transition-[background-color,box-shadow,transform] duration-200 hover:bg-ghost active:scale-[0.98]"
```

- [ ] **Step 3: Remover decorações incompatíveis**

Remover `WaveBackdrop` e a grande `LogoMark` em marca-d'água do hero. Manter a marca na navbar e os elementos laterais discretos no desktop.

- [ ] **Step 4: Verificar semântica**

Run: `npm.cmd run lint`

Expected: PASS; existe um único `h1` semântico e a imagem possui alt descritivo.

### Task 5: Aplicar ritmo escuro/claro às seções de oferta

**Files:**
- Modify: `src/components/sections/Dor.tsx`
- Modify: `src/components/sections/Solucao.tsx`
- Modify: `src/components/sections/ComoFunciona.tsx`

- [ ] **Step 1: Reestilizar `Dor`**

Usar `bg-deep`, título `text-starlight`, corpo `text-silver`, cartões `surface-dark`, números laranja e curva conectora em `text-mercury/45`. Limitar hover a borda, sombra e deslocamento de no máximo 4 px.

- [ ] **Step 2: Reestilizar `Solucao` como respiro claro**

Usar `bg-starlight text-night`, cartões brancos com `border-night/10`, ícones laranja e linha de percurso preta translúcida. Manter `WaveBackdrop` em baixa opacidade atrás do conteúdo.

- [ ] **Step 3: Reestilizar `ComoFunciona`**

Usar fundo branco quente, três painéis com bordas discretas e trilho laranja no desktop. No mobile, manter leitura vertical independente da linha e números `01`, `02`, `03` visíveis.

- [ ] **Step 4: Validar contraste e estrutura**

Run: `npm.cmd run lint`

Expected: PASS; títulos claros aparecem sobre superfícies escuras e textos escuros sobre superfícies claras.

### Task 6: Reestilizar prova, público e equipe

**Files:**
- Modify: `src/components/sections/Casos.tsx`
- Modify: `src/components/sections/ParaQuem.tsx`
- Modify: `src/components/sections/SobreMim.tsx`

- [ ] **Step 1: Refinar `Casos`**

Usar `bg-deep`, cabeçalho branco, subtítulo cinza, cartões com `border border-white/10`, gradiente inferior forte e moldura laranja discreta no hover/foco. Trocar caracteres de setas por SVGs lineares nos botões mobile, preservando `aria-label`, scroll nativo e GSAP no desktop.

- [ ] **Step 2: Converter `ParaQuem` em mosaico escuro**

Usar fundo `bg-graphite`, cartões `bg-deep/80 border-white/10`, texto branco/cinza e card principal com `border-mercury/45` e glow localizado. O link final mantém foco, hover e seta visíveis.

- [ ] **Step 3: Integrar fotos em `SobreMim`**

Usar fundo `bg-deep`, títulos brancos, corpo `text-silver`, imagens com `border-white/10` e overlay escuro leve. Manter nomes, funções, descrições, alt text e ordem dos sócios.

- [ ] **Step 4: Executar lint**

Run: `npm.cmd run lint`

Expected: PASS.

### Task 7: Finalizar conversão e rodapé

**Files:**
- Modify: `src/components/sections/CtaFinal.tsx`
- Modify: `src/components/sections/Footer.tsx`

- [ ] **Step 1: Construir o CTA final**

Usar `bg-deep`, `WaveBackdrop` ampliado, brilho radial laranja, título branco e palavra forte em laranja. Manter bullets, mensagem de confiança, `Magnetic`, `WhatsAppButton` e conteúdo atual.

- [ ] **Step 2: Reestilizar o rodapé**

Usar `bg-[#050505]`, bordas brancas translúcidas, marca branca, ícones laranja e links cinza que ficam brancos no hover/foco. Manter WhatsApp, Instagram, e-mail e ano dinâmico.

- [ ] **Step 3: Executar lint**

Run: `npm.cmd run lint`

Expected: PASS.

### Task 8: Validação completa e correções finais

**Files:**
- Verify: all modified files
- Verify: `src/app/opengraph-image.tsx`
- Verify: `src/app/icon.svg`

- [ ] **Step 1: Executar o UX validation pass**

Run:

```powershell
python 'C:\Users\Usuario\.codex\skills\ui-ux-pro-max\scripts\search.py' "animation accessibility z-index loading" --domain ux
```

Expected: recomendações confrontadas com foco, contraste, reduced motion, performance e empilhamento implementados.

- [ ] **Step 2: Executar verificações de produção**

Run:

```powershell
npm.cmd run lint
npm.cmd run build
```

Expected: ambos terminam com exit code 0.

- [ ] **Step 3: Inspecionar breakpoints**

Iniciar o servidor e verificar 375 × 812, 768 × 1024, 1024 × 768 e 1440 × 900. Confirmar:

```text
- foco da onda preservado no hero;
- navbar e CTA legíveis;
- nenhuma rolagem horizontal;
- textos sem corte ou sobreposição;
- botões e links com alvo mínimo de 44 px;
- carrossel de casos controlável no mobile;
- imagens carregam sem salto de layout;
- conteúdo completo com prefers-reduced-motion: reduce;
- WhatsApp, Instagram, e-mail, logo e âncoras válidos.
```

- [ ] **Step 4: Revisar o diff sem absorver mudanças externas**

Run:

```powershell
git diff --check
git status --short
git diff --stat
```

Expected: nenhum erro de whitespace; `src/content/home.ts` continua apenas com mudanças preexistentes. Não criar commit de implementação automaticamente, pois `Hero.tsx` contém uma alteração preexistente do usuário que precisa permanecer distinguível no handoff.
