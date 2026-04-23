import { createFileRoute } from "@tanstack/react-router";
import {
  CalendarDays,
  Megaphone,
  Crown,
  Flame,
  Trophy,
  Users,
  Camera,
  Mic,
  Video,
  FileText,
  Heart,
  ShieldCheck,
  Target,
  Sparkles,
  Instagram,
  MessageCircle,
  Music2,
  Youtube,
  Radio,
  CheckCircle2,
  Clock,
  TrendingUp,
} from "lucide-react";
import { EditableText } from "@/components/EditableText";


export const Route = createFileRoute("/planejamento")({
  head: () => ({
    meta: [
      { title: "Planejamento Semanal até 04/Out · Operação Sarelli 2026" },
      {
        name: "description",
        content:
          "Roteiro semana a semana de conteúdo, redes sociais e ações de campo da pré-campanha Dra. Fernanda Sarelli até 04 de outubro de 2026.",
      },
    ],
  }),
  component: PlanejamentoPage,
});

// ============= FASES =============
const fases = [
  {
    num: "01",
    nome: "Awareness",
    periodo: "Mai → Jun 2026",
    semanas: "Semanas 1-6",
    cor: "from-pink-500 to-rose-500",
    icon: Sparkles,
    objetivo:
      "Apresentar a Doutora. Construir reconhecimento de marca, voz e rosto. Ainda sem pedido de voto.",
    kpiPrincipal: "Alcance + seguidores",
  },
  {
    num: "02",
    nome: "Autoridade",
    periodo: "Jul → Ago 2026",
    semanas: "Semanas 7-12",
    cor: "from-amber-500 to-orange-500",
    icon: Crown,
    objetivo:
      "Provar competência técnica. Posicionar como advogada criminalista, especialista em direito da mulher, criança e família.",
    kpiPrincipal: "Saves + compartilhamentos",
  },
  {
    num: "03",
    nome: "Movimento",
    periodo: "Ago → Set 2026",
    semanas: "Semanas 13-18",
    cor: "from-fuchsia-500 to-pink-600",
    icon: Users,
    objetivo:
      "Ativar a base. #ChamaADoutora vira hashtag de mobilização. Promotores, lideranças e suplentes começam o trabalho de campo.",
    kpiPrincipal: "Cadastros na Rede Sarelli",
  },
  {
    num: "04",
    nome: "Hard Sell",
    periodo: "Set 2026",
    semanas: "Semanas 19-22",
    cor: "from-red-500 to-pink-600",
    icon: Flame,
    objetivo:
      "Pedido de voto direto. Número, propostas, comparativo. CS Político liga, promotor bate na porta, suplente fecha apoio.",
    kpiPrincipal: "Voto declarado / lead quente",
  },
  {
    num: "05",
    nome: "Grande Dia",
    periodo: "29/Set → 04/Out",
    semanas: "Semanas 23-24",
    cor: "from-yellow-400 via-pink-500 to-fuchsia-600",
    icon: Trophy,
    objetivo:
      "Reta final + Dia D. Boca de urna digital, fiscais nas seções, mobilização total da tropa.",
    kpiPrincipal: "Comparecimento + auditoria de seção",
  },
];

// ============= ROTINA SEMANAL =============
const rotinaSemanal = [
  {
    dia: "SEG",
    tema: "Cápsulas Jurídicas",
    pilar: "Autoridade",
    formato: "Reels 30s + Carrossel",
    canal: "Instagram · TikTok",
    icon: ShieldCheck,
  },
  {
    dia: "TER",
    tema: "Bastidor + Agenda",
    pilar: "Humanização",
    formato: "Stories + Reels POV",
    canal: "Instagram · Kwai",
    icon: Camera,
  },
  {
    dia: "QUA",
    tema: "Causa em Ação",
    pilar: "Causa",
    formato: "Mini-doc 60s",
    canal: "Instagram · YouTube",
    icon: Heart,
  },
  {
    dia: "QUI",
    tema: "Live / Podcast",
    pilar: "Profundidade",
    formato: "Live 30min + cortes",
    canal: "YouTube · Insta · TikTok",
    icon: Mic,
  },
  {
    dia: "SEX",
    tema: "Chamado à Ação",
    pilar: "Conversão",
    formato: "Reels CTA + link Rede",
    canal: "Todas as plataformas",
    icon: Target,
  },
  {
    dia: "SÁB",
    tema: "Comunidade",
    pilar: "Engajamento",
    formato: "Caixinha + responder DMs",
    canal: "Stories Instagram",
    icon: MessageCircle,
  },
  {
    dia: "DOM",
    tema: "Inspiração / Fé",
    pilar: "Conexão",
    formato: "Post leve + frase",
    canal: "Instagram · Facebook",
    icon: Sparkles,
  },
];

// ============= PLATAFORMAS =============
const plataformas = [
  {
    icon: Instagram,
    nome: "Instagram",
    papel: "Vitrine principal · marca de desejo",
    freq: "1 feed + 4 stories + 3 reels / dia",
    cor: "from-pink-500 to-fuchsia-600",
  },
  {
    icon: Music2,
    nome: "TikTok",
    papel: "Viralização + conquista do jovem",
    freq: "1 reel adaptado / dia",
    cor: "from-black to-pink-500",
  },
  {
    icon: Youtube,
    nome: "YouTube",
    papel: "Profundidade · podcast · entrevistas",
    freq: "1 vídeo longo + 3 shorts / sem",
    cor: "from-red-600 to-red-500",
  },
  {
    icon: Radio,
    nome: "Kwai",
    papel: "Interior de Goiás · classes C/D",
    freq: "3 reels / sem",
    cor: "from-orange-500 to-yellow-500",
  },
  {
    icon: MessageCircle,
    nome: "WhatsApp",
    papel: "Conversão direta · grupos de bairro",
    freq: "Diário · CS Político + promotores",
    cor: "from-green-500 to-emerald-600",
  },
];

// ============= 24 SEMANAS =============
type Semana = {
  num: number;
  data: string;
  fase: string;
  tema: string;
  destaques: string[];
  kpi: string;
};

const semanas: Semana[] = [
  // FASE 01 — AWARENESS (1-6)
  {
    num: 1,
    data: "27/Abr → 03/Mai",
    fase: "Awareness",
    tema: "Quem é a Doutora",
    destaques: [
      "Vídeo manifesto de lançamento (60s)",
      "Série 'Eu sou' — 7 stories sobre origem",
      "Foto profissional + paleta rosa estreia",
    ],
    kpi: "10k novos seguidores",
  },
  {
    num: 2,
    data: "04/Mai → 10/Mai",
    fase: "Awareness",
    tema: "Aparecida de Goiânia, minha cidade",
    destaques: [
      "Reel andando pelos bairros de origem",
      "Carrossel: 'Aparecida em números'",
      "Stories com moradores antigos",
    ],
    kpi: "Engajamento 8%+",
  },
  {
    num: 3,
    data: "11/Mai → 17/Mai",
    fase: "Awareness",
    tema: "14 anos de Pingo de Gente",
    destaques: [
      "Mini-doc 90s do projeto",
      "Depoimentos de mães atendidas",
      "Carrossel histórico com fotos",
    ],
    kpi: "500 saves",
  },
  {
    num: 4,
    data: "18/Mai → 24/Mai",
    fase: "Awareness",
    tema: "Dia das Mães · Mulher que sustenta",
    destaques: [
      "Campanha 'Mãe que defende mãe'",
      "Live com Pingo de Gente",
      "Reels com promotoras de campo",
    ],
    kpi: "1 reel viral (>100k)",
  },
  {
    num: 5,
    data: "25/Mai → 31/Mai",
    fase: "Awareness",
    tema: "Por que advocacia mudou minha vida",
    destaques: [
      "Vídeo storytelling (90s)",
      "Carrossel: casos que marcaram",
      "Início da série 'Cápsulas Jurídicas'",
    ],
    kpi: "Saves > 1k",
  },
  {
    num: 6,
    data: "01/Jun → 07/Jun",
    fase: "Awareness",
    tema: "Apresentação dos 5 Pilares",
    destaques: [
      "Carrossel manifesto (5 pilares)",
      "1 reel por pilar — 5 vídeos na semana",
      "Banner fixo no perfil",
    ],
    kpi: "Reach 500k",
  },

  // FASE 02 — AUTORIDADE (7-12)
  {
    num: 7,
    data: "08/Jun → 14/Jun",
    fase: "Autoridade",
    tema: "Defesa da Mulher",
    destaques: [
      "Cápsula jurídica: Lei Maria da Penha",
      "Live com vítima (anonimato)",
      "Carrossel: 'O que fazer se você sofre violência'",
    ],
    kpi: "Compart. 2k+",
  },
  {
    num: 8,
    data: "15/Jun → 21/Jun",
    fase: "Autoridade",
    tema: "Defesa da Criança",
    destaques: [
      "Cápsula: ECA + abuso infantil",
      "Visita a creche pública",
      "Reels com Pingo de Gente",
    ],
    kpi: "Saves 1.5k",
  },
  {
    num: 9,
    data: "22/Jun → 28/Jun",
    fase: "Autoridade",
    tema: "Famílias Vulneráveis",
    destaques: [
      "Mini-doc em comunidade",
      "Carrossel: cesta básica vs. dignidade",
      "Live com líder comunitário",
    ],
    kpi: "Eng. 9%",
  },
  {
    num: 10,
    data: "29/Jun → 05/Jul",
    fase: "Autoridade",
    tema: "Segurança Pública",
    destaques: [
      "Vídeo na delegacia da mulher",
      "Cápsula: feminicídio em GO",
      "Entrevista com policial",
    ],
    kpi: "Reach 800k",
  },
  {
    num: 11,
    data: "06/Jul → 12/Jul",
    fase: "Autoridade",
    tema: "Empreendedorismo Feminino",
    destaques: [
      "Série 'Mulheres que produzem' — 5 reels",
      "Live com microempreendedora",
      "Carrossel: como abrir MEI",
    ],
    kpi: "1k DMs",
  },
  {
    num: 12,
    data: "13/Jul → 19/Jul",
    fase: "Autoridade",
    tema: "Pré-lançamento Rede Sarelli",
    destaques: [
      "Teaser da plataforma (15s)",
      "'Em breve você vai poder fazer parte'",
      "Captação de e-mails (lista VIP)",
    ],
    kpi: "5k inscritos lista",
  },

  // FASE 03 — MOVIMENTO (13-18)
  {
    num: 13,
    data: "20/Jul → 26/Jul",
    fase: "Movimento",
    tema: "LANÇAMENTO #ChamaADoutora",
    destaques: [
      "Vídeo lançamento da hashtag (90s)",
      "Rede Sarelli no ar — link na bio",
      "Promotores começam captação de leads",
    ],
    kpi: "20k cadastros",
  },
  {
    num: 14,
    data: "27/Jul → 02/Ago",
    fase: "Movimento",
    tema: "Tropa em campo",
    destaques: [
      "Reels com promotores em ação",
      "Mapa de calor inicial (transparência)",
      "Live com primeiros 10 suplentes",
    ],
    kpi: "Tropa 200 ativos",
  },
  {
    num: 15,
    data: "03/Ago → 09/Ago",
    fase: "Movimento",
    tema: "Caravana pelos bairros — Parte 1",
    destaques: [
      "5 bairros visitados na semana",
      "Reels POV de cada visita",
      "Stories com agenda em tempo real",
    ],
    kpi: "Lideranças +50",
  },
  {
    num: 16,
    data: "10/Ago → 16/Ago",
    fase: "Movimento",
    tema: "Lideranças de nicho",
    destaques: [
      "Igrejas, sindicatos, mães autistas",
      "1 reel por liderança fechada",
      "Carrossel: 'Quem está com a Doutora'",
    ],
    kpi: "30 nichos",
  },
  {
    num: 17,
    data: "17/Ago → 23/Ago",
    fase: "Movimento",
    tema: "Caravana — Parte 2 (zona rural)",
    destaques: [
      "Distritos e zona rural de Aparecida",
      "Mini-doc 'O Goiás invisível'",
      "Kwai + Facebook foco interior",
    ],
    kpi: "Reach Kwai 300k",
  },
  {
    num: 18,
    data: "24/Ago → 30/Ago",
    fase: "Movimento",
    tema: "Show de força · 1º grande ato",
    destaques: [
      "Comício / encontro com 2k pessoas",
      "Cobertura ao vivo multiplataforma",
      "Aftermovie 60s no dia seguinte",
    ],
    kpi: "Trending local",
  },

  // FASE 04 — HARD SELL (19-22)
  {
    num: 19,
    data: "31/Ago → 06/Set",
    fase: "Hard Sell",
    tema: "Início oficial da campanha + número",
    destaques: [
      "Revelação do número de urna",
      "Jingle estreia rádio + redes",
      "Carrossel: 'Por que votar 1XX'",
    ],
    kpi: "Recall do número 60%",
  },
  {
    num: 20,
    data: "07/Set → 13/Set",
    fase: "Hard Sell",
    tema: "Propostas concretas — Mulher e Criança",
    destaques: [
      "1 proposta detalhada por dia (7)",
      "Carrosséis com fonte e fonte legal",
      "Comparativo com outros candidatos",
    ],
    kpi: "Saves 5k+",
  },
  {
    num: 21,
    data: "14/Set → 20/Set",
    fase: "Hard Sell",
    tema: "Propostas — Segurança, Família, Trabalho",
    destaques: [
      "Continuação das propostas (5+5)",
      "Debate público se houver",
      "CS Político liga 100% dos leads quentes",
    ],
    kpi: "Voto declarado 40%",
  },
  {
    num: 22,
    data: "21/Set → 27/Set",
    fase: "Hard Sell",
    tema: "Última semana de convencimento",
    destaques: [
      "Depoimentos de eleitores (15 reels)",
      "Lives diárias respondendo dúvidas",
      "Promotor faz 2ª visita aos indecisos",
    ],
    kpi: "Lead → voto 70%",
  },

  // FASE 05 — GRANDE DIA (23-24)
  {
    num: 23,
    data: "28/Set → 03/Out",
    fase: "Grande Dia",
    tema: "Reta final · mobilização total",
    destaques: [
      "Carreata + caminhada bairro a bairro",
      "Boca de urna digital (WhatsApp + status)",
      "Treinamento final dos 1.500 fiscais",
      "Vídeo emocional de fechamento",
    ],
    kpi: "Tropa 100% mobilizada",
  },
  {
    num: 24,
    data: "04/Out · DIA D",
    fase: "Grande Dia",
    tema: "🗳️ ELEIÇÃO",
    destaques: [
      "Fiscais nas seções desde 7h",
      "App de auditoria rodando em tempo real",
      "CS Político liga indecisos até 16h",
      "Apuração ao vivo no canal oficial",
    ],
    kpi: "VITÓRIA",
  },
];

const corPorFase: Record<string, string> = {
  Awareness: "from-pink-500 to-rose-500",
  Autoridade: "from-amber-500 to-orange-500",
  Movimento: "from-fuchsia-500 to-pink-600",
  "Hard Sell": "from-red-500 to-pink-600",
  "Grande Dia": "from-yellow-400 via-pink-500 to-fuchsia-600",
};

function PlanejamentoPage() {
  return (
    <main className="bg-background min-h-screen">
      <div className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* HEADER */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-primary" />
              <span className="text-[11px] uppercase tracking-[0.35em] text-primary font-bold">
                Capítulo 04 · Planejamento
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight text-foreground">
              <EditableText id="planejamento.hero.titulo1" as="span" defaultValue="24 semanas até " />
              <EditableText id="planejamento.hero.titulo2" as="span" defaultValue="04 de outubro" className="text-gradient-pink" />
            </h1>
            <EditableText
              id="planejamento.hero.subtitulo"
              as="p"
              multiline
              defaultValue="O calendário-mestre da pré-campanha. Cinco fases, sete dias por semana, uma rotina de conteúdo executável — do awareness ao Dia D."
              className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl"
            />
          </div>

          {/* MÉTRICAS DE TOPO */}
          <section className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: "24", label: "Semanas de execução", icon: CalendarDays },
              { num: "5", label: "Fases estratégicas", icon: TrendingUp },
              { num: "7", label: "Frentes diárias", icon: Clock },
              { num: "168", label: "Peças de conteúdo", icon: Sparkles },
            ].map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/40 transition-colors"
              >
                <m.icon className="h-5 w-5 text-primary mb-3" />
                <div className="font-display text-4xl font-extrabold text-foreground">
                  {m.num}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
              </div>
            ))}
          </section>

          {/* AS 5 FASES */}
          <section className="mt-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[11px] uppercase tracking-[0.35em] text-primary font-bold">
                As 5 Fases
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {fases.map((f) => (
                <div
                  key={f.num}
                  className="group relative rounded-2xl border border-border/60 bg-card p-6 overflow-hidden hover:border-primary/40 transition-all"
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${f.cor}`}
                  />
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${f.cor} text-white shadow-md`}
                    >
                      <f.icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                      Fase {f.num}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-extrabold text-foreground">
                    {f.nome}
                  </h3>
                  <p className="text-[11px] uppercase tracking-wider text-primary font-bold mt-1">
                    {f.periodo}
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{f.semanas}</p>
                  <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                    {f.objetivo}
                  </p>
                  <div className="mt-4 pt-4 border-t border-border/60">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
                      KPI principal
                    </div>
                    <div className="text-sm font-bold text-foreground mt-1">
                      {f.kpiPrincipal}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ROTINA SEMANAL */}
          <section className="mt-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[11px] uppercase tracking-[0.35em] text-primary font-bold">
                Rotina Semanal · Todo Dia uma Frente
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
              {rotinaSemanal.map((dia) => (
                <div
                  key={dia.dia}
                  className="rounded-xl border border-border/60 bg-card p-4 hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-display text-2xl font-extrabold text-primary">
                      {dia.dia}
                    </span>
                    <dia.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="text-sm font-bold text-foreground">{dia.tema}</div>
                  <div className="text-[10px] uppercase tracking-wider text-primary font-bold mt-1">
                    {dia.pilar}
                  </div>
                  <div className="text-xs text-muted-foreground mt-3">{dia.formato}</div>
                  <div className="text-[10px] text-muted-foreground/70 mt-1">{dia.canal}</div>
                </div>
              ))}
            </div>
          </section>

          {/* PLATAFORMAS */}
          <section className="mt-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[11px] uppercase tracking-[0.35em] text-primary font-bold">
                Onde a Doutora está
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {plataformas.map((p) => (
                <div
                  key={p.nome}
                  className="rounded-2xl border border-border/60 bg-card p-5 hover:border-primary/40 transition-colors"
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${p.cor} text-white mb-4`}
                  >
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div className="font-display text-lg font-extrabold text-foreground">
                    {p.nome}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {p.papel}
                  </div>
                  <div className="text-[11px] text-primary font-bold mt-3">{p.freq}</div>
                </div>
              ))}
            </div>
          </section>

          {/* CALENDÁRIO 24 SEMANAS */}
          <section className="mt-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[11px] uppercase tracking-[0.35em] text-primary font-bold">
                Cronograma · Semana a Semana
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>

            <div className="space-y-3">
              {semanas.map((s) => (
                <article
                  key={s.num}
                  className="group relative rounded-2xl border border-border/60 bg-card p-5 sm:p-6 hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <div
                    className={`absolute inset-y-0 left-0 w-1 rounded-l-2xl bg-gradient-to-b ${corPorFase[s.fase]}`}
                  />
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 pl-3">
                    {/* Coluna 1: número e data */}
                    <div className="lg:col-span-2">
                      <div className="font-display text-3xl font-extrabold text-foreground">
                        S{String(s.num).padStart(2, "0")}
                      </div>
                      <div className="text-xs text-muted-foreground font-medium mt-1">
                        {s.data}
                      </div>
                      <span
                        className={`inline-block mt-2 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-gradient-to-r ${corPorFase[s.fase]} text-white`}
                      >
                        {s.fase}
                      </span>
                    </div>

                    {/* Coluna 2: tema e destaques */}
                    <div className="lg:col-span-7">
                      <h3 className="font-display text-xl font-extrabold text-foreground">
                        {s.tema}
                      </h3>
                      <ul className="mt-3 space-y-1.5">
                        {s.destaques.map((d, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-sm text-muted-foreground leading-relaxed"
                          >
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Coluna 3: KPI */}
                    <div className="lg:col-span-3 lg:border-l lg:border-border/60 lg:pl-6">
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
                        Meta da semana
                      </div>
                      <div className="font-display text-lg font-extrabold text-foreground mt-1 leading-tight">
                        {s.kpi}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

        </div>
      </div>

    </main>
  );
}
