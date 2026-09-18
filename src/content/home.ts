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
    sideRight: ["Resultado", "com propósito"],
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

  // [PLACEHOLDER — depoimento fictício: substituir pelo depoimento real de cliente]
  provaSocial: {
    quote:
      "Antes, o WhatsApp ficava dias no silêncio. Hoje chega mensagem de cliente novo toda semana, e a maioria já vem sabendo o que quer.",
    author: "Mariana C.",
    role: "Doces artesanais por encomenda",
  },

  dor: {
    frameLabel: "Confiança em cada etapa",
    eyebrow: "Desafios reais",
    sideRight: ["Do problema", "à oportunidade"],
    title: "Você se reconhece em",
    titleStrong: "alguma dessas situações?",
    subtitle:
      "Antes de comprar, o seu cliente pesquisa, compara e decide. Veja onde você pode estar perdendo oportunidades.",
    items: [
      {
        title: 'Ele pesquisa "perto de mim", e você não aparece.',
        body: "Quando sua empresa não está bem posicionada, o cliente nem chega a considerar o seu negócio.",
      },
      {
        title: "Ele vê seu conteúdo, se interessa… e some.",
        body: "Sem uma jornada clara, um atendimento ágil e um caminho simples para contato, o interesse não vira oportunidade.",
      },
      {
        title: "Seu concorrente chega primeiro.",
        body: "Nem sempre vence o melhor. Às vezes, vence quem aparece antes, se comunica melhor e facilita o contato.",
      },
    ],
    outro: {
      lead: "É exatamente aí que a",
      brand: "BL Swell",
      leadEnd: "entra.",
      body: "Estratégia, tecnologia e presença digital trabalhando juntas para transformar atenção em oportunidades.",
    },
  },

  solucao: {
    frameLabel: "Ideias em movimento",
    eyebrow: "Serviços",
    title: "Não é um site bonito. É o seu melhor vendedor, disponível 24h.",
    intro:
      "O que a BL Swell monta para o seu negócio é o circuito completo: ser encontrado, conversar e agendar.",
    items: [
      {
        icon: "search",
        title: "Seu cliente te acha no Google",
        body: "Site rápido e preparado para a busca local, com Google Business configurado. Quem procura o que você faz, te encontra.",
      },
      {
        icon: "chat",
        title: "A conversa começa em um toque",
        body: "Botão de WhatsApp no lugar certo, com mensagem pronta. Do interesse à conversa, sem formulário e sem fricção.",
      },
      {
        icon: "clock",
        title: "Atendimento que não dorme",
        body: "Automação no WhatsApp que responde na hora, tira dúvidas e encaminha o agendamento, mesmo fora do horário comercial.",
      },
      {
        icon: "calendar",
        title: "Agenda cheia sem depender da recepção",
        body: "Agendamento com lembrete automático: menos esquecimento, menos falta, mais horário preenchido.",
      },
      {
        icon: "target",
        title: "Cliente chegando todo dia, não só quando dá sorte",
        body: "Gestão de tráfego pago (Google e Meta) mirando quem já está pronto para comprar na sua região. Verba controlada, resultado medido.",
      },
    ],
    diferencial: {
      lead: "Site bonito é o mínimo.",
      body: "O que entregamos é o circuito completo:",
      steps: ["ser encontrado", "conversar", "agendar"],
    },
  },

  casos: {
    frameLabel: "Confiança em cada etapa",
    title: "Casos de",
    titleStrong: "sucesso",
    subtitle:
      "Segmentos diferentes, método igual: entender o negócio, remover o atrito e transformar interesse em conversa.",
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
        body: "Uma conversa no WhatsApp para entender o seu negócio e onde você está perdendo cliente hoje. Sem compromisso.",
      },
      {
        title: "Proposta fechada",
        body: "Escopo, prazo e preço por escrito em até 48h. Você sabe exatamente o que vai receber antes de começar.",
      },
      {
        title: "Entrega com acompanhamento",
        body: "Site no ar, automação funcionando, sua equipe treinada, com 30 dias de ajustes inclusos.",
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
      body: "O método se adapta. Me conta o seu caso.",
      message: "Olá! Meu negócio é de outro segmento, quero saber se funciona para mim",
    },
  },

  sobreMim: {
    frameLabel: "Gente por trás do resultado",
    eyebrow: "Quem está por trás",
    title: "Os",
    titleStrong: "sócios",
    lead: "Ser bom não é suficiente",
    leadStrong: "se ninguém te vê.",
    intro:
      "Seu trabalho pode ser excelente. Mas é a sua presença digital que faz o cliente te encontrar, confiar e dar o próximo passo.",
    closing: "Você fala direto com os dois.",
    closingStrong: "Sem intermediários.",
    // Usados pelo bloco final de CTA (CtaFinal.tsx) — não mexer no conteúdo, só reaproveitado ali.
    bullets: [
      "Atendimento direto com quem executa",
      "Explicação em português claro, sem tecniquês",
      "Do Rio Grande do Norte para todo o Brasil",
    ],
    people: [
      {
        name: "Felipe",
        role: "Estratégia e relacionamento",
        body: "Entende o negócio e qualifica cada projeto.",
        photo: "/felipe-bernardo.jpg",
        photoAlt: "Felipe Bernardo, sócio da BL Swell",
      },
      {
        name: "Paulo",
        role: "Tecnologia e operação",
        body: "Sites, automações e tráfego pago.",
        photo: "/paulo-henrique.jpeg",
        photoAlt: "Paulo Henrique, sócio da BL Swell",
      },
    ],
  },

  ctaFinal: {
    frameLabel: "Seu próximo passo começa aqui",
    eyebrow: "Vamos conversar",
    headline: "A busca não para",
    headlineRest: "enquanto",
    headlineStrong: "você decide.",
    body: "Neste momento, o Google está entregando o seu próximo cliente para alguém. Uma mensagem é o que separa esse alguém de você,",
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
