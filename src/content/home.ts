// Toda a copy da home vive aqui. Páginas de nicho (/clinicas, /advogados)
// reaproveitam os mesmos componentes de seção com um arquivo irmão deste.

export const home = {
  nav: {
    links: [
      { label: "Início", href: "#hero" },
      { label: "Serviços", href: "#servicos" },
      { label: "Contato", href: "#contato" },
    ],
    cta: "Falar com a gente",
    logoTagline: "Soluções que impulsionam o seu negócio",
  },

  // Moldura fixa da página: listas decorativas nos cantos. O rótulo inferior
  // direito troca conforme a seção visível (data-frame-label em cada <section>).
  frame: {
    pillars: ["Estratégia", "Tecnologia", "Resultados"],
    ticker: {
      prefix: "Presença digital que vira",
      words: ["conversa", "cliente", "agenda", "venda", "faturamento", "lucro"],
    },
    defaultLabel: "Confiança em cada etapa",
  },

  // Hero editorial (claro): manchete central sobre a onda da marca.
  heroEditorial: {
    frameLabel: "Veja por que confiam na gente ↓",
    sideLeft: ["Design", "Automação", "Tráfego", "Tecnologia"],
    sideRight: ["Do Google", "ao WhatsApp"],
    // Cada item vira uma linha; `strong: true` recebe peso bold.
    left: [
      { text: "Seu trabalho", strong: false },
      { text: "é ", strong: false, partial: "excelente," },
    ],
    right: [
      { text: "mas quem te", strong: false },
      { text: "procura na internet", strong: false },
      { text: "não vê isso.", strong: true },
    ],
    // Mini-solução + CTA: quem clica aqui já entendeu tudo que precisa.
    ctaQuestion: "Vamos mudar isso?",
    ctaLabel: "Falar com a gente",
    ctaMessage:
      "Olá! Vi o site da BL Swell e quero saber mais sobre os serviços.",
    // Heading semântica única (sr-only) — a headline visual é dividida/decorativa.
    ariaHeadline:
      "Seu trabalho é excelente, mas quem te procura na internet não vê isso. Vamos mudar isso?",
  },

  dor: {
    frameLabel: "Onde o cliente escapa",
    eyebrow: "Desafios reais",
    sideRight: ["Do problema", "à oportunidade"],
    title: "Você se reconhece em",
    titleStrong: "alguma dessas situações?",
    subtitle:
      "Seu cliente pesquisa, compara e decide antes de te procurar. Veja onde ele desiste.",
    items: [
      {
        title: 'Ele pesquisa "perto de mim", e você não aparece.',
        body: "Quem não aparece na busca não é comparado. É ignorado.",
      },
      {
        title: "Ele vê seu conteúdo, se interessa… e some.",
        body: "Interesse sem caminho para o contato evapora em minutos.",
      },
      {
        title: "Seu concorrente chega primeiro.",
        body: "Não vence o melhor. Vence quem aparece antes e responde primeiro.",
      },
    ],
    outro: {
      lead: "É exatamente aí que a",
      brand: "BL Swell",
      leadEnd: "entra.",
      body: "Estratégia, tecnologia e presença digital para transformar atenção em cliente.",
    },
  },

  solucao: {
    frameLabel: "O circuito completo",
    eyebrow: "Serviços",
    title: "Não é um site bonito. É o seu melhor vendedor, disponível 24h.",
    intro:
      "Cada peça fecha um ponto de fuga: da busca no Google ao horário marcado na agenda.",
    items: [
      {
        icon: "search",
        title: "Seu cliente te acha no Google",
        body: "Site rápido, busca local configurada, Google Business no ar. Quem procura, te acha.",
      },
      {
        icon: "chat",
        title: "A conversa começa em um toque",
        body: "Botão de WhatsApp no lugar certo, com mensagem pronta. Sem formulário, sem fricção.",
      },
      {
        icon: "clock",
        title: "Atendimento que não dorme",
        body: "Automação que responde na hora, tira dúvida e encaminha o agendamento. Inclusive às 23h de domingo.",
      },
      {
        icon: "calendar",
        title: "Agenda cheia sem depender da recepção",
        body: "Agendamento com lembrete automático. Menos falta, mais horário preenchido.",
      },
      {
        icon: "target",
        title: "Cliente chegando todo dia, não só quando dá sorte",
        body: "Anúncios no Google e no Meta para quem já está pronto para comprar perto de você. Verba controlada, resultado medido.",
      },
    ],
    diferencial: {
      lead: "Site bonito é o mínimo.",
      body: "O que entregamos é o circuito completo:",
      steps: ["ser encontrado", "conversar", "agendar"],
    },
  },

  casos: {
    frameLabel: "Resultado que dá pra medir",
    title: "Casos de",
    titleStrong: "sucesso",
    subtitle:
      "Segmentos diferentes, mesmo método: entender o negócio, remover o atrito e transformar interesse em conversa.",
    dragHint: "Role para ver mais casos",
    cta: "Quero um resultado assim",
    ctaMessage:
      "Olá! Vi os casos de sucesso da BL Swell e quero um resultado assim para o meu negócio.",
    // [PLACEHOLDER — métricas abaixo são fictícias: substituir pelos números reais de cada cliente]
    items: [
      {
        name: "Vitrine de Relógios",
        segment: "E-commerce · relógios premium",
        image: "/projects/site-relogios.png",
        solucao: "Mais conversas qualificadas e aumento nas vendas.",
        resultado:
          'As conversas passaram a chegar com o cliente decidido: em vez de "quanto custa?", "quero esse".',
        metric: "3× mais conversas",
      },
      {
        name: "Zaya Cacau",
        segment: "Doces artesanais",
        image: "/projects/zaya-cacau.png",
        solucao: "Mais visibilidade, pedidos e fortalecimento da marca.",
        resultado:
          "As encomendas de datas passaram a chegar pelo site, com o pedido já montado na mensagem.",
        metric: "2× mais encomendas",
      },
      {
        name: "Pro Telecom",
        segment: "Portal técnico · telecom",
        image: "/projects/pro-telecom.png",
        solucao: "Mais leads e agendamentos sem esforço manual.",
        resultado:
          "O retrabalho de planilha virou minutos, e a equipe voltou a focar no atendimento.",
        metric: "+10 horas por semana",
      },
      {
        name: "VS Design",
        segment: "Design · identidade visual",
        image: "/projects/vsdesign.png",
        solucao: "Posicionamento digital que gera oportunidades.",
        resultado:
          "O portfólio passou a funcionar como vitrine ativa, gerando contatos qualificados direto pelo site.",
        metric: "Aumento de clientes",
      },
    ],
  },

  comoFunciona: {
    frameLabel: "Confiança em cada etapa",
    eyebrow: "Processo",
    title: "Como",
    titleStrong: "funciona",
    subtitle:
      "Do primeiro contato à entrega, você sabe exatamente o que esperar.",
    steps: [
      {
        title: "Diagnóstico gratuito",
        body: "Uma conversa no WhatsApp para achar onde você perde cliente hoje. Sem compromisso.",
      },
      {
        title: "Proposta fechada",
        body: "Escopo, prazo e preço por escrito em até 48h. Você aprova antes de começar.",
      },
      {
        title: "Entrega com acompanhamento",
        body: "Site no ar, automação rodando, equipe treinada. 30 dias de ajustes inclusos.",
      },
    ],
  },

  paraQuem: {
    frameLabel: "Soluções para o seu negócio",
    eyebrow: "Para quem é",
    title: "Feito para quem vive de agenda e de",
    titleStrong: "cliente local",
    items: [
      {
        name: "Clínicas e consultórios",
        note: "Agenda cheia e menos faltas",
        icon: "calendar",
        featured: true,
      },
      { name: "Advogados", note: "Captação com autoridade", icon: "scale" },
      { name: "Restaurantes", note: "Reserva e pedido sem atrito", icon: "cutlery" },
      { name: "Comércio local", note: "Quem procura perto, te acha", icon: "store" },
      { name: "Serviços", note: "Orçamento direto no WhatsApp", icon: "gear" },
    ],
    outro: {
      title: "Outro segmento?",
      body: "O método se adapta. Conta pra gente.",
      message: "Olá! Meu negócio é de outro segmento, quero saber se funciona para mim",
    },
  },

  sobreMim: {
    frameLabel: "Gente por trás do resultado",
    eyebrow: "Quem está por trás",
    title: "Os",
    titleStrong: "sócios",
    lead: "Agência pequena",
    leadStrong: "por escolha.",
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
  },

  ctaFinal: {
    frameLabel: "Seu próximo passo começa aqui",
    eyebrow: "Vamos conversar",
    headline: "A busca não para",
    headlineRest: "enquanto",
    headlineStrong: "você decide.",
    body: "Agora mesmo, o Google está entregando o seu próximo cliente para o seu concorrente. Uma mensagem muda isso,",
    bodyStrong: "e o diagnóstico é gratuito.",
    cta: "Iniciar conversa no WhatsApp",
    trust: "Resposta em até 24h úteis · Sem compromisso",
  },

  footer: {
    tagline: "Presença digital que vira conversa.",
    whatsappLabel: "WhatsApp",
    instagramHandle: "@b.l_Swell",
    instagramUrl: "https://instagram.com/b.l_Swell",
    email: "agenciablswell@gmail.com",
  },
} as const;
