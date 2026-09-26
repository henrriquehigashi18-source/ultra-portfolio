# Three Partners Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Substituir os retratos individuais por uma única fotografia institucional de Neto, Paulo e Felipe e atualizar a seção para apresentar os três sócios e suas responsabilidades.

**Architecture:** A fotografia-fonte será preservada na raiz e copiada para `public/` com um nome adequado para URL. O conteúdo continuará centralizado em `src/content/home.ts`; `SobreMim.tsx` mapeará os três perfis somente na coluna textual e renderizará uma única imagem conjunta na coluna visual, sem criar novos componentes ou dependências.

**Tech Stack:** Next.js 16.2.9 App Router, React 19, TypeScript, Tailwind CSS 4, `next/image`.

---

### Task 1: Incorporar a fotografia conjunta

**Files:**
- Source: `os 3 socios.jpg`
- Create: `public/socios-blswell.jpg`

- [ ] **Step 1: Confirmar a imagem-fonte**

Run:

```powershell
Get-Item -LiteralPath "os 3 socios.jpg" | Select-Object Name, Length
```

Expected: o arquivo `os 3 socios.jpg` existe e possui tamanho maior que zero.

- [ ] **Step 2: Copiar o arquivo para `public/` sem apagar o original**

Run:

```powershell
Copy-Item -LiteralPath "os 3 socios.jpg" -Destination "public/socios-blswell.jpg"
```

Expected: `public/socios-blswell.jpg` é criado e o arquivo original permanece na raiz.

- [ ] **Step 3: Validar dimensões e integridade básica**

Run:

```powershell
Add-Type -AssemblyName System.Drawing
$photo = [System.Drawing.Image]::FromFile((Resolve-Path "public/socios-blswell.jpg"))
[pscustomobject]@{ Width = $photo.Width; Height = $photo.Height; Bytes = (Get-Item "public/socios-blswell.jpg").Length }
$photo.Dispose()
```

Expected: `Width = 1105`, `Height = 1280` e `Bytes` maior que zero.

- [ ] **Step 4: Commitar somente o ativo**

```powershell
git add -- public/socios-blswell.jpg
git commit -m "feat: adiciona retrato conjunto dos socios"
```

### Task 2: Atualizar conteúdo e renderização da seção

**Files:**
- Modify: `src/content/home.ts:219-252`
- Modify: `src/components/sections/SobreMim.tsx:36-80`

- [ ] **Step 1: Confirmar que o estado atual ainda contém referências individuais**

Run:

```powershell
rg -n 'direto com os dois|photo:|photoAlt:' src/content/home.ts
rg -n 'person\.photo|person\.photoAlt|grid-cols-2' src/components/sections/SobreMim.tsx
```

Expected: os dois comandos encontram as referências antigas. Isso confirma que a alteração ainda não foi aplicada.

- [ ] **Step 2: Substituir o objeto `sobreMim` pelo conteúdo aprovado**

Em `src/content/home.ts`, manter os campos anteriores a `intro`, preservar `bullets` e substituir `intro`, `closing`, os dados visuais e `people` pelo bloco abaixo:

```ts
    intro:
      "Cada frente tem um sócio responsável. Estratégia, tecnologia e marketing trabalham juntos do primeiro contato ao crescimento.",
    closing: "Você fala direto com os três.",
    closingStrong: "Sem intermediários.",
    groupPhoto: "/socios-blswell.jpg",
    groupPhotoAlt: "Neto, Paulo e Felipe, sócios da BL Swell",
    // Usados pelo bloco final de CTA (CtaFinal.tsx) — não mexer no conteúdo, só reaproveitado ali.
    bullets: [
      "Atendimento direto com os sócios",
      "Português claro, sem tecniquês",
      "Do Rio Grande do Norte para todo o Brasil",
    ],
    people: [
      {
        name: "Neto",
        role: "Marketing e crescimento",
        body: "Cuida do posicionamento, da comunicação e das ações de crescimento.",
      },
      {
        name: "Paulo",
        role: "Tecnologia e operação",
        body: "Sites, automações e operação técnica.",
      },
      {
        name: "Felipe",
        role: "Estratégia e relacionamento",
        body: "Entende o negócio e qualifica cada projeto.",
      },
    ],
```

Não alterar `frameLabel`, `eyebrow`, `title`, `titleStrong`, `lead` ou `leadStrong`.

- [ ] **Step 3: Trocar a grade de retratos por uma fotografia conjunta**

Em `src/components/sections/SobreMim.tsx`, substituir todo o bloco atual `{/* Fotos + fecho */}` por:

```tsx
          {/* Foto conjunta + fecho */}
          <ScrollReveal>
            <div className="relative aspect-[1105/1280] overflow-hidden rounded-2xl border border-white/10 bg-graphite">
              <Image
                src={sobreMim.groupPhoto}
                alt={sobreMim.groupPhotoAlt}
                fill
                sizes="(min-width: 1200px) 667px, (min-width: 1024px) 55vw, calc(100vw - 2.5rem)"
                className="object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/[0.04]" />
            </div>
            <p className="font-display mt-8 text-2xl font-[400] leading-snug tracking-[-0.01em] text-starlight sm:text-3xl">
              {sobreMim.closing}{" "}
              <span className="block font-[700] text-mercury">
                {sobreMim.closingStrong}
              </span>
            </p>
          </ScrollReveal>
```

- [ ] **Step 4: Verificar que dados novos e renderização única estão conectados**

Run:

```powershell
rg -n 'groupPhoto|groupPhotoAlt|Neto|Marketing e crescimento|direto com os três' src/content/home.ts src/components/sections/SobreMim.tsx
```

Expected: o conteúdo encontra Neto e a nova copy; o componente encontra `groupPhoto` e `groupPhotoAlt`.

Run:

```powershell
rg -n 'person\.photo|person\.photoAlt|grid-cols-2' src/components/sections/SobreMim.tsx
```

Expected: nenhuma ocorrência e exit code `1`.

- [ ] **Step 5: Executar validações estáticas e de produção**

Run:

```powershell
npm.cmd run lint
```

Expected: exit code `0`, sem erros do ESLint.

Run:

```powershell
npm.cmd run build
```

Expected: exit code `0`; o Next.js compila TypeScript e gera a rota `/`.

- [ ] **Step 6: Revisar o diff e commitar conteúdo e componente juntos**

Run:

```powershell
git diff --check
git diff -- src/content/home.ts src/components/sections/SobreMim.tsx
```

Expected: nenhum erro de whitespace; o diff fica restrito à nova copy, ao terceiro perfil e à imagem conjunta.

```powershell
git add -- src/content/home.ts src/components/sections/SobreMim.tsx
git commit -m "feat: apresenta os tres socios da BL Swell"
```

### Task 3: Validar responsividade, enquadramento e acessibilidade

**Files:**
- Verify: `public/socios-blswell.jpg`
- Verify: `src/content/home.ts`
- Verify: `src/components/sections/SobreMim.tsx`

- [ ] **Step 1: Iniciar o site localmente**

Run:

```powershell
npm.cmd run dev
```

Expected: servidor acessível em `http://localhost:3000`.

- [ ] **Step 2: Validar a seção em desktop**

Com o browser harness, abrir `http://localhost:3000`, localizar `[data-frame-label="Gente por trás do resultado"]`, executar `scrollIntoView()` e capturar em `1440 × 900`.

Confirmar visualmente:

- os três rostos aparecem sem corte;
- Neto, Paulo e Felipe aparecem na ordem da fotografia;
- a foto conjunta ocupa somente a coluna direita;
- a borda, o gradiente, o fundo grafite e o laranja seguem a identidade atual;
- o fechamento diz “Você fala direto com os três. Sem intermediários.”

- [ ] **Step 3: Validar a seção em celular**

Repetir a inspeção em `375 × 812` e confirmar:

- os três blocos textuais aparecem antes da fotografia;
- a fotografia ocupa a largura disponível e mantém os três rostos visíveis;
- não existe overflow horizontal;
- nomes, funções e descrições permanecem legíveis;
- o fechamento não se sobrepõe à imagem.

- [ ] **Step 4: Verificar acessibilidade sem depender da fotografia**

Run:

```powershell
rg -n 'alt=\{sobreMim\.groupPhotoAlt\}|Neto, Paulo e Felipe, sócios da BL Swell' src/components/sections/SobreMim.tsx src/content/home.ts
```

Expected: o componente usa o texto alternativo e o conteúdo identifica os três sócios.

- [ ] **Step 5: Fazer a verificação final do repositório**

Run:

```powershell
git status --short
git log -3 --oneline
```

Expected: os dois commits de implementação aparecem no histórico. Permanecem fora dos commits somente arquivos locais já existentes, incluindo a imagem-fonte na raiz e diretórios de referência.
