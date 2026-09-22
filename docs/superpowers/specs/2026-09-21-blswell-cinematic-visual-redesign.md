# BL Swell — Redesign visual cinematográfico

**Data:** 21 de setembro de 2026

**Status:** Direção visual aprovada; aguardando revisão desta especificação

**Escopo:** Identidade visual e experiência de interface. O conteúdo textual e a ordem das seções permanecem inalterados nesta etapa.

## Objetivo

Transformar o site da BL Swell em uma experiência visual coerente com as referências fornecidas: a fotografia de uma onda negra atravessada por luz laranja e o painel de identidade da marca. O resultado deve comunicar estratégia, tecnologia, movimento e autoridade sem perder clareza ou proximidade.

O site continua tendo uma única conversão principal: iniciar uma conversa no WhatsApp. A revisão de copy será tratada em uma etapa posterior e independente.

## Direção escolhida

A direção aprovada é **cinematográfica escura com respiros claros**. Ela combina:

- fundos preto profundo e grafite;
- laranja incandescente como cor de ação e movimento;
- branco quente em textos e em seções de contraste;
- linhas curvas inspiradas no símbolo da BL Swell;
- brilho e granulação discretos, sem excesso de efeitos;
- tipografia limpa, forte e precisa;
- alternância de densidade para que a página longa não fique visualmente pesada.

O estilo deve parecer premium e técnico. Deve evitar aparência de template genérico, excesso de cartões arredondados, gradientes gratuitos, neon espalhado, animações constantes e efeitos que reduzam a legibilidade.

## Sistema visual

### Cores

- `deep`: `#080808` — fundo principal escuro;
- `graphite`: `#111111` — superfícies e cartões;
- `iron`: `#1B1B1B` — superfícies elevadas e estados interativos;
- `orange`: aproximadamente `#FF5A00` — ação, marca e linhas de movimento;
- `orange-light`: tom derivado usado apenas no núcleo de brilhos;
- `warm-white`: branco levemente aquecido para texto e seções claras;
- `muted`: cinza claro ou médio, conforme a superfície.

Todas as combinações de texto devem atender, no mínimo, ao contraste WCAG AA. A cor laranja não deve ser usada como única forma de comunicar estado ou significado.

### Tipografia

As fontes locais atuais podem ser mantidas para evitar dependências externas e preservar desempenho. Clash Display será usada de forma controlada em títulos; Satoshi será usada em textos, navegação e elementos de interface. O tratamento deve se aproximar da precisão da referência em Inter: títulos fortes, corpo limpo, caixa alta apenas em pequenos rótulos e espaçamento de letras moderado.

### Formas e superfícies

- cantos moderados, não excessivamente arredondados;
- bordas de baixo contraste em grafite ou laranja translúcido;
- sombras escuras e suaves, sem aparência flutuante artificial;
- linhas finas, curvas e pontos de luz derivados do símbolo de onda;
- textura de grão muito sutil, sempre atrás do conteúdo;
- ícones vetoriais lineares com espessura consistente.

## Hero

A imagem `ChatGPT Image 21_09_2026, 22_45_06.png` será copiada para os assets públicos do projeto e exibida como imagem principal do hero, em tela cheia.

- A primeira dobra terá altura mínima próxima à viewport inteira.
- O enquadramento deve preservar a crista, a espuma e o núcleo laranja da onda.
- Gradientes pretos nas bordas criarão área segura para o conteúdo e farão a transição para a seção seguinte.
- O texto atual será mantido, em branco, com destaques pontuais em laranja.
- O CTA continuará direcionando ao WhatsApp e receberá tratamento sólido, contrastante e acessível.
- A navegação ficará transparente no topo e assumirá fundo preto translúcido com desfoque ao rolar.
- No mobile, a posição da imagem será ajustada especificamente para preservar o ponto focal; o desktop não será apenas comprimido.
- A imagem usará o componente de imagem do Next.js com dimensões e prioridade adequadas para evitar mudança de layout e carregamento tardio da primeira dobra.

## Seções

### Dor

Fundo preto, blocos numerados em grafite e uma linha ondulada laranja de baixa intensidade conectando visualmente os problemas. A hierarquia atual de título, subtítulo e três itens será preservada.

### Solução

Seção em branco quente para dar respiro. Os ícones lineares e os elementos de percurso usarão laranja e preto. A composição editorial deve remeter ao painel de identidade, com divisões claras e pouco ruído.

### Casos

Fundo escuro e projetos apresentados como painéis cinematográficos. As imagens permanecem protagonistas, com gradientes sobrepostos para legibilidade. O comportamento horizontal existente pode ser mantido desde que continue natural no desktop e controlável por toque e botões no mobile.

### Como funciona

Os três passos serão ligados por uma linha de movimento no desktop e organizados verticalmente no celular. Números, ícones e divisores terão linguagem visual consistente com a marca.

### Para quem

Mosaico de superfícies grafite com um segmento em destaque por contorno e luz laranja. A hierarquia atual entre o card principal, os demais públicos e o convite final será mantida.

### Sobre nós

Composição escura com fotos reais, textos claros e detalhes luminosos discretos. As fotos não receberão filtros que prejudiquem identificação ou autenticidade; o tratamento deve apenas harmonizar contraste e enquadramento.

### CTA final

Bloco de alto impacto que retoma a ideia de movimento sem reutilizar a fotografia principal. Pode usar uma linha de onda ampliada, luz radial e fundo preto. O botão de WhatsApp permanecerá como ação dominante.

### Rodapé

Rodapé compacto em preto profundo, com marca, contatos e links em alto contraste. Todos os links existentes devem permanecer funcionais e possuir estados de foco e interação visíveis.

## Movimento e interação

- entradas suaves por opacidade e deslocamento curto durante o scroll;
- desenho ou deslocamento lento de linhas apenas quando reforçar a narrativa;
- microinterações entre 150 e 300 ms para botões, links e cartões;
- nenhum elemento piscando ou em movimento constante;
- nenhuma animação que altere largura ou altura e cause salto de layout;
- suporte obrigatório a `prefers-reduced-motion`, mantendo todo o conteúdo disponível em estado estático;
- alvos de toque com no mínimo 44 × 44 px e nenhuma informação dependente apenas de hover.

## Responsividade

O projeto será tratado como mobile-first. Serão verificadas, no mínimo, larguras de 375 px, tablet e desktop amplo.

- cartões passam para uma coluna ou carrossel controlável quando necessário;
- textos mantêm medidas legíveis e não encostam nas bordas;
- não haverá overflow horizontal;
- o hero terá recorte próprio para telas estreitas;
- cabeçalho e CTAs respeitarão áreas seguras e não cobrirão conteúdo;
- a navegação móvel continuará simples, sem adicionar menus desnecessários nesta etapa.

## Componentes e limites de implementação

A estrutura atual em componentes será preservada. As alterações se concentram em tokens globais, classes visuais, componentes de marca e decoração e estilos específicos das seções. `home.ts` continuará sendo a fonte do conteúdo; nenhum texto será reescrito como parte deste redesign.

Os componentes reutilizáveis de botão, logo, fundo de onda, navegação, moldura e revelação por scroll devem ser ajustados uma vez e reutilizados, evitando estilos duplicados entre seções.

## Desempenho e qualidade

- otimizar a nova imagem do hero para WebP ou AVIF quando adequado, preservando qualidade visual;
- reservar dimensões de todas as imagens para evitar CLS;
- carregar a imagem do hero com prioridade e manter imagens abaixo da dobra em carregamento tardio;
- evitar bibliotecas novas quando CSS, SVG e os recursos existentes forem suficientes;
- não esconder conteúdo essencial atrás de JavaScript;
- verificar favicon, metadata, imagem de compartilhamento, links, logo clicável, ano do rodapé, WhatsApp e comportamento móvel;
- executar lint e build de produção;
- fazer inspeção visual em desktop e mobile, incluindo reduced motion;
- confirmar ausência de links quebrados, overflow horizontal e controles inacessíveis por teclado.

## Critérios de aceite

1. A imagem fornecida ocupa o hero e mantém seu ponto focal em desktop e mobile.
2. Todo o site segue a mesma identidade preto, laranja, branco e grafite.
3. O conteúdo e a ordem das seções atuais não mudam.
4. A página alterna superfícies escuras e claras de forma intencional, sem perder continuidade.
5. Texto, navegação e CTAs atendem a contraste, foco visível e tamanho de toque adequados.
6. As animações são discretas e desativadas ou reduzidas conforme a preferência do usuário.
7. Não há overflow horizontal nem mudança perceptível de layout causada pelas imagens.
8. Lint e build terminam sem erros.
9. Todos os links de contato e CTAs continuam funcionando.
10. A apresentação final é coerente com as duas referências visuais fornecidas e evita aparência de template genérico.

## Fora de escopo nesta etapa

- reescrita de headline, parágrafos, CTAs ou mensagens do WhatsApp;
- mudança da ordem das seções;
- inclusão de novas páginas, formulários, preços, depoimentos ou FAQs;
- alteração de serviços, posicionamento ou estratégia comercial;
- implantação de analytics, pixels ou novas integrações.

Esses itens poderão ser avaliados na etapa posterior de copy, SEO e conversão.
