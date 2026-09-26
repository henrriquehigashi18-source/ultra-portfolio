# Seção dos três sócios — design aprovado

**Data:** 26 de setembro de 2026
**Status:** Aprovado para planejamento e implementação

## Objetivo

Atualizar a seção “Quem está por trás” para apresentar os três sócios da BL Swell em uma única fotografia institucional. A seção deve incluir Neto como responsável por Marketing e crescimento, substituir as duas fotografias individuais na interface e corrigir os textos que ainda descrevem uma operação com apenas dois sócios.

## Fotografia e identificação

A imagem-fonte adicionada ao projeto é `os 3 socios.jpg`. Na implementação, ela será copiada para `public/socios-blswell.jpg`, usando um nome adequado para URL e manutenção.

A ordem das pessoas na fotografia, da esquerda para a direita, é:

1. Neto;
2. Paulo;
3. Felipe, identificado pelo relógio no pulso.

O texto alternativo será: “Neto, Paulo e Felipe, sócios da BL Swell”.

## Layout aprovado

Foi aprovada a opção A, “Retrato dominante”. A seção preservará a composição de duas colunas já usada no site:

- a coluna esquerda apresentará o título, a introdução e os três blocos de nome, função e descrição;
- a coluna direita exibirá uma única fotografia conjunta, seguida pelo fechamento da seção;
- os blocos textuais seguirão a ordem visual da fotografia: Neto, Paulo e Felipe;
- a fotografia usará sua proporção original aproximada, sem cortes nos rostos e sem distorção;
- a moldura manterá o fundo grafite, cantos arredondados, borda discreta e o tratamento preto, branco e laranja da identidade BL Swell.

Em telas móveis, a coluna textual aparecerá primeiro e a fotografia ocupará toda a largura disponível abaixo dela. O enquadramento deve conservar os três integrantes visíveis e não criar rolagem horizontal.

## Conteúdo aprovado

### Introdução

> Cada frente tem um sócio responsável. Estratégia, tecnologia e marketing trabalham juntos do primeiro contato ao crescimento.

### Sócios

**Neto**

Marketing e crescimento

Cuida do posicionamento, da comunicação e das ações de crescimento.

**Paulo**

Tecnologia e operação

Sites, automações e operação técnica.

**Felipe**

Estratégia e relacionamento

Entende o negócio e qualifica cada projeto.

### Fechamento

> Você fala direto com os três.
>
> Sem intermediários.

O título “Os sócios”, o eyebrow “Quem está por trás” e a frase “Agência pequena por escolha.” permanecem inalterados.

## Estrutura de dados

O objeto `sobreMim` em `src/content/home.ts` passará a ter propriedades próprias para a fotografia conjunta:

- `groupPhoto: "/socios-blswell.jpg"`;
- `groupPhotoAlt: "Neto, Paulo e Felipe, sócios da BL Swell"`.

Os campos individuais `photo` e `photoAlt` deixarão de fazer parte dos itens de `people`, pois a interface não exibirá mais retratos separados. O array receberá Neto e será reordenado para corresponder à imagem.

## Componente

`src/components/sections/SobreMim.tsx` continuará sendo o único componente responsável pela seção. O mapeamento de `people` permanecerá apenas na coluna textual. O painel visual passará a renderizar um único componente `Image`, usando `groupPhoto` e `groupPhotoAlt`.

Não haverá novo componente, dependência ou comportamento interativo. As fotografias individuais existentes em `public/` não precisam ser removidas nesta alteração, evitando uma limpeza sem relação direta com o resultado visual.

## Responsividade e acessibilidade

- Usar `next/image` para dimensionamento e otimização.
- Preservar a proporção da imagem e manter as três pessoas visíveis.
- Fornecer texto alternativo com os nomes na ordem da fotografia.
- Manter contraste, hierarquia tipográfica e estados de movimento existentes.
- Garantir leitura confortável e ausência de overflow em 375 px.

## Arquivos previstos

- Adicionar: `public/socios-blswell.jpg`;
- Modificar: `src/content/home.ts`;
- Modificar: `src/components/sections/SobreMim.tsx`.

## Critérios de aceite

1. A seção exibe uma única fotografia com Neto, Paulo e Felipe.
2. Neto aparece como responsável por “Marketing e crescimento”.
3. Nenhum texto da seção afirma que existem apenas dois sócios.
4. Os nomes aparecem na ordem Neto, Paulo e Felipe.
5. A fotografia não corta nenhum rosto em desktop ou celular.
6. A seção mantém a identidade visual preta, branca e laranja aprovada.
7. O texto alternativo identifica os três sócios.
8. `npm run lint` e `npm run build` terminam sem erros.

## Fora de escopo

- Alterar outras seções da página;
- reescrever cargos ou responsabilidades além do conteúdo aprovado;
- apagar as fotografias individuais existentes;
- adicionar animações ou dependências novas;
- modificar o hero ou a identidade visual global.
