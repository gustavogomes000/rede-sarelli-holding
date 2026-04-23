import { createFileRoute } from "@tanstack/react-router";
import {
  Crown,
  Compass,
  Camera,
  Video,
  Mic,
  PenTool,
  Megaphone,
  BarChart3,
  Users,
  ShieldCheck,
  Sparkles,
  Layers,
  Target,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/organograma")({
  head: () => ({
    meta: [
      { title: "Organograma da Campanha · Chama a Doutora — Sarelli 2026" },
      {
        name: "description",
        content:
          "Estrutura, cargos, responsabilidades e deveres de cada função da pré-campanha digital de Dra. Fernanda Sarelli — Goiás 2026.",
      },
      { property: "og:title", content: "Organograma · Chama a Doutora 2026" },
      {
        property: "og:description",
        content:
          "Quem faz o quê na máquina digital da Doutora: cargos, responsabilidades e entregáveis de cada função da campanha.",
      },
    ],
  }),
  component: OrganogramaPage,
});

type Cargo = {
  icon: typeof Crown;
  cargo: string;
  papel: string;
  reporta: string;
  responsabilidades: string[];
  entregaveis: string[];
  cor: "primary" | "rose" | "violet" | "amber" | "emerald" | "sky" | "slate";
};

const lideranca: Cargo = {
  icon: Crown,
  cargo: "Dra. Fernanda Sarelli",
  papel: "Pré-candidata · A Voz e a Causa",
  reporta: "Eleitorado de Goiás",
  responsabilidades: [
    "Encarnar a mensagem: defesa da mulher, da criança e da família.",
    "Aprovar diretrizes estratégicas e o tom da comunicação.",
    "Cumprir agenda pública, encontros e gravações com pontualidade.",
    "Validar pautas sensíveis (jurídicas, religiosas, partidárias).",
  ],
  entregaveis: [
    "Presença em agendas semanais definidas pela coordenação.",
    "Disponibilidade para gravação de pílulas, lives e podcast.",
    "Aprovação final de peças que envolvam imagem pessoal.",
  ],
  cor: "primary",
};

const estrategia: Cargo[] = [
  {
    icon: Compass,
    cargo: "Coordenação Geral / Estratégia",
    papel: "Cabeça da operação digital",
    reporta: "Dra. Fernanda Sarelli",
    responsabilidades: [
      "Definir o plano estratégico mensal e os objetivos por fase.",
      "Alinhar todas as áreas (conteúdo, mídia, dados, mobilização).",
      "Tomar decisões com base no painel de dados (zonas de calor).",
      "Gerir prazos, orçamento e priorização de pautas.",
    ],
    entregaveis: [
      "Plano editorial mensal aprovado.",
      "Reunião semanal de status com a Doutora e líderes de área.",
      "Relatório quinzenal de performance (alcance, leads, cliques).",
    ],
    cor: "primary",
  },
  {
    icon: ShieldCheck,
    cargo: "Direção de Conteúdo & Narrativa",
    papel: "Guardião do tom e da mensagem",
    reporta: "Coordenação Geral",
    responsabilidades: [
      "Garantir consistência da mensagem nos 4 pilares (autoridade, afeto, clareza, mobilização).",
      "Aprovar roteiros, legendas e copies antes da publicação.",
      "Construir e manter o glossário de bandeiras e frases-âncora.",
      "Mediar pautas sensíveis com a Doutora e o jurídico.",
    ],
    entregaveis: [
      "Manual de tom de voz da campanha.",
      "Calendário editorial validado semanalmente.",
      "Briefings prontos para roteirista, designer e edição.",
    ],
    cor: "rose",
  },
];

const producao: Cargo[] = [
  {
    icon: Camera,
    cargo: "Fotografia & Cobertura de Agenda",
    papel: "Olhos da campanha em campo",
    reporta: "Direção de Conteúdo",
    responsabilidades: [
      "Cobrir todas as agendas, reuniões, visitas e encontros da Doutora.",
      "Alimentar o Banco de Mídia com fotos catalogadas (data, local, tema).",
      "Capturar bastidores autênticos (não posados) para humanizar.",
      "Garantir consentimento de imagem das pessoas atendidas.",
    ],
    entregaveis: [
      "Mínimo 30 fotos editadas por agenda, entregues em até 24h.",
      "Banco de mídia organizado por evento, mês e bandeira.",
      "Seleção semanal de 'melhores capturas' para o feed.",
    ],
    cor: "amber",
  },
  {
    icon: Video,
    cargo: "Vídeo & Edição (Reels / Shorts / Cortes)",
    papel: "Tradutor da agenda em conteúdo viral",
    reporta: "Direção de Conteúdo",
    responsabilidades: [
      "Filmar e editar vídeos verticais (Reels, TikTok, Shorts).",
      "Cortar lives e podcast em pílulas de 30s a 90s.",
      "Manter padrão visual: legenda, cor, tipografia da campanha.",
      "Otimizar primeiros 3 segundos (gancho) para retenção.",
    ],
    entregaveis: [
      "5 a 7 vídeos verticais publicáveis por semana.",
      "Cortes do podcast prontos em até 48h após gravação.",
      "Banco de B-rolls organizado por tema.",
    ],
    cor: "violet",
  },
  {
    icon: Mic,
    cargo: "Podcast & Áudio",
    papel: "Aprofundamento e autoridade",
    reporta: "Direção de Conteúdo",
    responsabilidades: [
      "Produzir o podcast quinzenal 'Chama a Doutora'.",
      "Captar convidadas (vítimas, mães, juristas, pastoras, lideranças).",
      "Roteirizar blocos, perguntas e ganchos para cortes.",
      "Publicar nas plataformas (Spotify, YouTube, cortes para redes).",
    ],
    entregaveis: [
      "1 episódio publicado a cada 15 dias.",
      "Roteiro e pauta entregues 5 dias antes da gravação.",
      "Mínimo 4 cortes por episódio para reaproveitamento.",
    ],
    cor: "emerald",
  },
  {
    icon: PenTool,
    cargo: "Design & Identidade Visual",
    papel: "Coerência estética da marca",
    reporta: "Direção de Conteúdo",
    responsabilidades: [
      "Criar artes de feed, stories, capas, cards de citação.",
      "Manter o guia visual (cores, fontes, fotos, ícones).",
      "Adaptar materiais para WhatsApp, newsletter e site.",
      "Produzir templates editáveis para apoiadores.",
    ],
    entregaveis: [
      "Pacote semanal de artes para feed e stories.",
      "Templates 'pronto para compartilhar' no kit de apoiador.",
      "Guia visual atualizado e versionado.",
    ],
    cor: "sky",
  },
];

const distribuicao: Cargo[] = [
  {
    icon: Megaphone,
    cargo: "Redes Sociais & Comunidade",
    papel: "Voz pública diária",
    reporta: "Direção de Conteúdo",
    responsabilidades: [
      "Programar e publicar conteúdo no Instagram, TikTok, Facebook.",
      "Responder comentários e DMs com tom da campanha.",
      "Monitorar tendências, hashtags e oportunidades de pauta.",
      "Engajar com perfis aliados, jornalistas e influenciadoras.",
    ],
    entregaveis: [
      "Feed e stories publicados todos os dias úteis.",
      "Resposta a DMs em até 12h (horário comercial).",
      "Relatório semanal de engajamento por formato.",
    ],
    cor: "rose",
  },
  {
    icon: Users,
    cargo: "Comunidade Forte (WhatsApp & Newsletter)",
    papel: "Central de mobilização dos apoiadores",
    reporta: "Coordenação Geral",
    responsabilidades: [
      "Organizar e moderar grupos de WhatsApp por município.",
      "Distribuir kits prontos (artes, vídeos, recados) para compartilhamento.",
      "Convocar apoiadores para curtir, comentar, divulgar nas igrejas.",
      "Cadastrar e segmentar lista de apoiadores por região.",
    ],
    entregaveis: [
      "Kit semanal enviado às terças e sextas.",
      "Grupos de WhatsApp ativos por município estratégico.",
      "Newsletter quinzenal com bastidores e convocações.",
    ],
    cor: "amber",
  },
  {
    icon: BarChart3,
    cargo: "Dados, Painel & Inteligência",
    papel: "Bússola da campanha",
    reporta: "Coordenação Geral",
    responsabilidades: [
      "Operar o painel de dados (acessos, cliques, zonas de calor).",
      "Cruzar dados do site com base eleitoral por município/zona.",
      "Identificar regiões de alta e baixa penetração da mensagem.",
      "Recomendar ajustes de agenda e investimento com base em evidências.",
    ],
    entregaveis: [
      "Painel atualizado em tempo real, acessível à coordenação.",
      "Relatório quinzenal: top municípios, bairros e cliques.",
      "Mapa de calor mensal para reorientar agendas e mídia.",
    ],
    cor: "violet",
  },
];

const COR_CLASSES: Record<Cargo["cor"], { bg: string; text: string; border: string; ring: string }> = {
  primary: { bg: "bg-primary", text: "text-primary", border: "border-primary/30", ring: "shadow-primary/30" },
  rose: { bg: "bg-rose-500", text: "text-rose-600", border: "border-rose-300/40", ring: "shadow-rose-500/30" },
  violet: { bg: "bg-violet-500", text: "text-violet-600", border: "border-violet-300/40", ring: "shadow-violet-500/30" },
  amber: { bg: "bg-amber-500", text: "text-amber-600", border: "border-amber-300/40", ring: "shadow-amber-500/30" },
  emerald: { bg: "bg-emerald-500", text: "text-emerald-600", border: "border-emerald-300/40", ring: "shadow-emerald-500/30" },
  sky: { bg: "bg-sky-500", text: "text-sky-600", border: "border-sky-300/40", ring: "shadow-sky-500/30" },
  slate: { bg: "bg-slate-500", text: "text-slate-600", border: "border-slate-300/40", ring: "shadow-slate-500/30" },
};

function CargoCard({ cargo }: { cargo: Cargo }) {
  const Icon = cargo.icon;
  const c = COR_CLASSES[cargo.cor];
  return (
    <article
      className={`group relative bg-white rounded-2xl border ${c.border} p-6 hover:shadow-2xl ${c.ring} hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
    >
      <div className={`absolute top-0 left-0 right-0 h-1 ${c.bg}`} />
      <div className="flex items-start gap-4 mb-5">
        <div
          className={`shrink-0 h-12 w-12 rounded-xl ${c.bg} flex items-center justify-center text-white shadow-lg ${c.ring} group-hover:scale-110 transition-transform`}
        >
          <Icon className="h-6 w-6" />
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-lg font-black text-foreground leading-tight">
            {cargo.cargo}
          </h3>
          <p className={`text-sm font-semibold ${c.text} mt-0.5`}>{cargo.papel}</p>
          <p className="text-[11px] font-mono uppercase tracking-wider text-foreground/40 mt-1">
            Reporta a: {cargo.reporta}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Target className={`h-3.5 w-3.5 ${c.text}`} />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/60">
              Responsabilidades
            </span>
          </div>
          <ul className="space-y-1.5">
            {cargo.responsabilidades.map((r) => (
              <li key={r} className="flex gap-2 text-sm text-foreground/75 leading-snug">
                <span className={`mt-1.5 shrink-0 h-1 w-1 rounded-full ${c.bg}`} />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-3 border-t border-border/60">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className={`h-3.5 w-3.5 ${c.text}`} />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/60">
              Entregáveis
            </span>
          </div>
          <ul className="space-y-1.5">
            {cargo.entregaveis.map((e) => (
              <li key={e} className="flex gap-2 text-sm text-foreground/75 leading-snug">
                <CheckCircle2 className={`mt-0.5 shrink-0 h-3.5 w-3.5 ${c.text}`} />
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function OrganogramaPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-background via-pink-50/20 to-background pt-24 pb-32">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 -left-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-pink-300/20 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-6 lg:px-8 pt-12 pb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs font-bold text-primary tracking-[0.3em]">
              CAPÍTULO 03
            </span>
            <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-primary/60 to-transparent" />
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-foreground leading-[0.95] tracking-tight mb-6">
            O time que faz a
            <br />
            <span className="bg-gradient-to-r from-primary via-pink-500 to-rose-500 bg-clip-text text-transparent">
              campanha acontecer
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-foreground/70 max-w-3xl leading-relaxed font-light">
            Cada cargo com{" "}
            <span className="font-semibold text-foreground">papel claro</span>,
            responsabilidades definidas e entregáveis mensuráveis. Sem sobreposição,
            sem ponto cego.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {["Estratégia", "Produção", "Distribuição", "Dados"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full border border-primary/20 bg-white/80 backdrop-blur text-sm font-semibold text-primary shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TOPO DO ORGANOGRAMA — A DOUTORA */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 mb-20">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-4">
            <Crown className="h-4 w-4 text-primary" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-primary font-bold">
              Topo da Estrutura
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-foreground">
            A <span className="text-primary">Voz</span> e a <span className="text-primary">Causa</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <CargoCard cargo={lideranca} />
        </div>

        {/* Conector visual */}
        <div className="flex justify-center my-8">
          <div className="h-12 w-px bg-gradient-to-b from-primary to-primary/0" />
        </div>
      </section>

      {/* CAMADA 1 — ESTRATÉGIA */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 mb-20">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-4">
            <Compass className="h-4 w-4 text-primary" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-primary font-bold">
              Camada 01 · Comando
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-foreground mb-2">
            Estratégia & <span className="text-primary">Direção</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Quem pensa, decide e protege a mensagem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {estrategia.map((c) => (
            <CargoCard key={c.cargo} cargo={c} />
          ))}
        </div>
      </section>

      {/* CAMADA 2 — PRODUÇÃO */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 mb-20">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-4">
            <Layers className="h-4 w-4 text-primary" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-primary font-bold">
              Camada 02 · Produção
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-foreground mb-2">
            Quem <span className="text-primary">cria</span> o conteúdo
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Foto, vídeo, áudio e design — a matéria-prima da campanha.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {producao.map((c) => (
            <CargoCard key={c.cargo} cargo={c} />
          ))}
        </div>
      </section>

      {/* CAMADA 3 — DISTRIBUIÇÃO & DADOS */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 mb-20">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-primary font-bold">
              Camada 03 · Distribuição & Dados
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-foreground mb-2">
            Quem <span className="text-primary">leva ao público</span> e mede
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Publicação, mobilização da comunidade e leitura dos dados.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {distribuicao.map((c) => (
            <CargoCard key={c.cargo} cargo={c} />
          ))}
        </div>
      </section>

      {/* PRINCÍPIOS DE GOVERNANÇA */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-foreground text-background p-10 sm:p-14 shadow-2xl">
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 mb-6">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span className="text-[11px] uppercase tracking-[0.35em] font-bold text-primary">
                Princípios de Governança
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-black leading-[1.05] mb-8 max-w-3xl">
              Como esse time{" "}
              <span className="bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
                opera no dia a dia
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  t: "Reuniões fixas",
                  d: "Status semanal (segunda) e revisão de dados (sexta) com toda a coordenação.",
                },
                {
                  t: "Decisão por dado",
                  d: "Pautas, agendas e investimento são guiados pelo painel de zonas de calor.",
                },
                {
                  t: "Aprovação em camadas",
                  d: "Conteúdo sensível passa por Direção de Conteúdo antes de chegar à Doutora.",
                },
                {
                  t: "Entregáveis mensuráveis",
                  d: "Cada cargo tem metas semanais visíveis a todos. Sem zona cinzenta.",
                },
              ].map((p) => (
                <div key={p.t} className="border-l-2 border-primary/60 pl-4">
                  <div className="font-display font-bold text-background text-lg mb-1">
                    {p.t}
                  </div>
                  <p className="text-background/75 text-sm leading-relaxed">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
