// Toda a copy da home vive aqui. Páginas de nicho (/clinicas, /advogados)
// reaproveitam os mesmos componentes de seção com um arquivo irmão deste.

export const home = {
  nav: {
    links: [
      { label: "Início", href: "#hero" },
      { label: "Serviços", href: "#servicos" },
      { label: "Projetos", href: "#projetos" },
      { label: "Como funciona", href: "#como-funciona" },
      { label: "Contato", href: "#contato" },
    ],
    cta: "Falar comigo",
  },

  hero: {
    eyebrow: "Estúdio digital · do RN para todo o Brasil",
    headline: ["Presença digital", "que vira conversa."],
    lead:
      "Seu próximo cliente está procurando no Google agora. Eu construo o site que faz ele chamar no seu WhatsApp — com captação e agendamento no automático.",
    cta: "Falar com o Paulo",
    ctaSecondary: "Ver projetos",
    trust: "Resposta em até 24h úteis · Diagnóstico gratuito, sem compromisso",
  },

  // Hero editorial (claro) — estilo referência: figura central, headline nas laterais.
  heroEditorial: {
    pillars: ["Design", "Confiança", "Henrique"],
    // Cada item vira uma linha; `strong: true` recebe peso bold.
    left: [
      { text: "Se você", strong: false },
      { text: "não confia", strong: false },
      { text: "no ", strong: false, partial: "seu" },
      { text: "trabalho,", strong: true },
    ],
    right: [
      { text: "por que", strong: false },
      { text: "o ", strong: false, partial: "cliente" },
      { text: "confiaria?", strong: true },
    ],
    photo: "/hero-paulo.png",
    photoAlt: "Paulo Henrique, fundador da BL Swell",
    scrollCue: "Veja por que confiam em mim",
    // Heading semântica única (sr-only) — a headline visual é dividida/decorativa.
    ariaHeadline:
      "Se você não confia no seu trabalho, por que o cliente confiaria?",
  },

  // [PLACEHOLDER — depoimento fictício: substituir pelo depoimento real de cliente]
  provaSocial: {
    quote:
      "Antes, o WhatsApp ficava dias no silêncio. Hoje chega mensagem de cliente novo toda semana — e a maioria já vem sabendo o que quer.",
    author: "Mariana C.",
    role: "Doces artesanais por encomenda",
  },

  dor: {
    title: "Você se reconhece em alguma dessas situações?",
    items: [
      {
        title: 'O cliente pesquisa "perto de mim" — e você não aparece',
        body: "Quem não te encontra não compara preço nem qualidade. Simplesmente nunca fica sabendo que o seu negócio existe.",
      },
      {
        title: "Ele viu seu Instagram, ficou interessado… e sumiu",
        body: "Sem um lugar profissional para confirmar a confiança e agendar na hora, a maioria não manda mensagem. Volta para o Google — e escolhe outro.",
      },
      {
        title: "O concorrente não é melhor que você. Ele só aparece primeiro",
        body: "Site rápido no topo da busca, botão de WhatsApp visível: quem chega antes fica com o cliente que poderia ser seu.",
      },
    ],
  },

  solucao: {
    title: "Não é um site bonito. É o seu melhor vendedor — de plantão 24h.",
    intro:
      "O que eu monto para o seu negócio é o circuito completo: ser encontrado, conversar e agendar.",
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
        body: "Automação no WhatsApp que responde na hora, tira dúvidas e encaminha o agendamento — mesmo fora do horário comercial.",
      },
      {
        icon: "calendar",
        title: "Agenda cheia sem depender da recepção",
        body: "Agendamento com lembrete automático: menos esquecimento, menos falta, mais horário preenchido.",
      },
    ],
    diferencial: {
      lead: "Site bonito é o mínimo.",
      body: "O que eu entrego é o circuito completo:",
      steps: ["ser encontrado", "conversar", "agendar"],
    },
  },

  casos: {
    title: "Casos de sucesso",
    subtitle:
      "Segmentos diferentes, método igual: entender o negócio, remover o atrito e transformar interesse em conversa.",
    cta: "Quero um resultado assim",
    ctaMessage:
      "Olá, Paulo! Vi os casos de sucesso no seu site e quero um resultado assim para o meu negócio.",
    // [PLACEHOLDER — métricas abaixo são fictícias: substituir pelos números reais de cada cliente]
    items: [
      {
        name: "Vitrine de Relógios",
        segment: "E-commerce · relógios premium",
        image: "/projects/site-relogios.png",
        solucao: "Mais conversas qualificadas — cliente chega decidido",
        resultado:
          'As conversas passaram a chegar com o cliente decidido: em vez de "quanto custa?", "quero esse".',
        metric: "3× mais conversas iniciadas pelo site",
      },
      {
        name: "Zaya Cacau",
        segment: "Doces artesanais",
        image: "/projects/zaya-cacau.png",
        solucao: "Encomendas chegando com o pedido já montado na mensagem",
        resultado:
          "As encomendas de datas passaram a chegar pelo site, com o pedido já montado na mensagem.",
        metric: "2× mais encomendas na primeira data comemorativa",
      },
      {
        name: "Pro Telecom",
        segment: "Portal técnico · telecom",
        image: "/projects/pro-telecom.png",
        solucao: "Horas de planilha que viraram minutos de sistema",
        resultado:
          "O retrabalho de planilha virou minutos, e a equipe voltou a focar no atendimento.",
        metric: "≈10 horas por semana liberadas",
      },
      {
        // [PLACEHOLDER — substituir pelos dados reais do projeto VS Design]
        name: "VS Design",
        segment: "Design · identidade visual",
        image: "/projects/vsdesign.png",
        solucao: "Portfólio digital que transforma visita em contato direto",
        resultado:
          "O portfólio passou a funcionar como vitrine ativa, gerando contatos qualificados direto pelo site.",
        metric: "[PLACEHOLDER — métrica real]",
      },
    ],
  },

  comoFunciona: {
    title: "Como funciona",
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
        body: "Site no ar, automação funcionando, sua equipe treinada — e 30 dias de ajustes inclusos.",
      },
    ],
  },

  paraQuem: {
    title: "Feito para quem vive de agenda e de cliente local",
    items: [
      {
        name: "Clínicas e consultórios",
        note: "agenda cheia e menos faltas",
        featured: true,
      },
      { name: "Advogados", note: "captação com autoridade" },
      { name: "Restaurantes", note: "reserva e pedido sem atrito" },
      { name: "Comércio local", note: "quem procura perto, te acha" },
      { name: "Serviços", note: "orçamento direto no WhatsApp" },
    ],
    outro: {
      title: "Outro segmento?",
      body: "O método se adapta — me conta o seu caso.",
      message: "Olá Paulo, meu negócio é de outro segmento e quero saber se funciona para mim",
    },
  },

  sobreMim: {
    title: "Quem vai cuidar disso",
    paragraphs: [
      "Sou Paulo Henrique, fundador da BL Swell. Minha base é sistemas e automação — e eu uso essa base para um objetivo só: fazer o WhatsApp do seu negócio tocar com gente interessada.",
      "Aqui você fala direto comigo, do diagnóstico à entrega. Sem agência no meio, sem jargão técnico, um projeto por vez.",
    ],
    bullets: [
      "Atendimento direto com quem faz",
      "Explicação em português claro, sem tecniquês",
      "Do Rio Grande do Norte para todo o Brasil",
    ],
    photoAlt: "Paulo Henrique, fundador da BL Swell",
  },

  ctaFinal: {
    headline: "A busca não para enquanto você decide.",
    body: "Neste momento, o Google está entregando o seu próximo cliente para alguém. Uma mensagem é o que separa esse alguém de você — e o diagnóstico é gratuito.",
    cta: "Iniciar conversa no WhatsApp",
    trust: "Resposta em até 24h úteis · Sem compromisso",
  },

  footer: {
    tagline: "Presença digital que vira conversa.",
    whatsappLabel: "WhatsApp",
    instagramHandle: "@paulohenriquebl",
    instagramUrl: "https://instagram.com/paulohenriquebl",
    email: "paulohenriquebl01@gmail.com",
  },
} as const;
