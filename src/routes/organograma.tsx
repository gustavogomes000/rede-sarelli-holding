import { createFileRoute } from "@tanstack/react-router";
import {
  Crown,
  Compass,
  CalendarClock,
  Database,
  Megaphone,
  PhoneCall,
  ClipboardList,
  Users,
  UserCheck,
  Church,
  Footprints,
  ShieldCheck,
  Target,
  CheckCircle2,
  Building2,
  Swords,
  Briefcase,
} from "lucide-react";

export const Route = createFileRoute("/organograma")({
  head: () => ({
    meta: [
      { title: "Organograma · Holding Sarelli 2026" },
      {
        name: "description",
        content:
          "Estrutura corporativa da Holding Sarelli 2026: Diretoria Executiva (C-Level), HQ de Inteligência e Exército de Campo. Cargos, deveres e KPIs.",
      },
      { property: "og:title", content: "Organograma · Holding Sarelli 2026" },
      {
        property: "og:description",
        content:
          "Holding Sarelli 2026 gerida como empresa de tecnologia: CEO, COO, Chief of Staff, HQ de dados e Exército de Campo.",
      },
    ],
  }),
  component: OrganogramaPage,
});

type Cargo = {
  icon: typeof Crown;
  cargo: string;
  ocupante?: string;
  papel: string;
  reporta: string;
  responsabilidades: string[];
  entregaveis: string[];
  cor: "primary" | "rose" | "violet" | "amber" | "emerald" | "sky" | "slate" | "indigo";
};

// ============= C-LEVEL =============
const ceoPublica: Cargo = {
  icon: Crown,
  cargo: "CEO Pública",
  ocupante: "Dra. Fernanda Sarelli",
  papel: "Personificação da marca",
  reporta: "Eleitorado de Goiás",
  responsabilidades: [
    "Encarnar a marca: firmeza (criminalista), acolhimento (mãe/social) e eficiência (gestora).",
    "Foco em rua, alianças políticas e geração de conteúdo.",
    "Cumprir agenda com pontualidade e disponibilidade para gravações.",
    "Validar pautas sensíveis e decisões estratégicas finais.",
  ],
  entregaveis: [
    "Presença em agendas de rua semanais.",
    "Disponibilidade para vlogs, lives, podcast e cortes.",
    "Aprovação de peças que envolvam imagem pessoal.",
  ],
  cor: "primary",
};

const cLevel: Cargo[] = [
  {
    icon: Compass,
    cargo: "COO · Coordenador Geral",
    ocupante: "Deocleciano",
    papel: "Estrategista operacional",
    reporta: "CEO Pública",
    responsabilidades: [
      "Gerir todos os setores da Holding (HQ + Exército de Campo).",
      "Garantir execução do Roadmap Macro até 4 de outubro.",
      "Receber e analisar relatórios diários de produtividade por região.",
      "Tomar decisões com base no painel da Rede Sarelli.",
    ],
    entregaveis: [
      "Reunião semanal de status com todas as áreas.",
      "Relatório consolidado quinzenal de KPIs.",
      "Auditoria contínua de metas das promotoras e lideranças.",
    ],
    cor: "primary",
  },
  {
    icon: CalendarClock,
    cargo: "Chief of Staff · Assessoria 24h",
    papel: "Filtro de acesso e gestão de agenda",
    reporta: "CEO Pública",
    responsabilidades: [
      "Gestão integral da agenda da CEO Pública.",
      "Acompanhamento 24h: deslocamentos, compromissos, gravações.",
      "Filtrar pedidos, convites e contatos antes de chegarem à Doutora.",
      "Articular interface entre CEO e demais áreas da Holding.",
    ],
    entregaveis: [
      "Agenda semanal fechada e validada com 7 dias de antecedência.",
      "Briefing diário pré-agenda para a CEO.",
      "Confirmações e logística operacional de cada compromisso.",
    ],
    cor: "rose",
  },
];

// ============= HQ — INTELIGÊNCIA E SUPORTE INTERNO =============
const hq: Cargo[] = [
  {
    icon: Database,
    cargo: "CTO & Head de Dados",
    papel: "Inteligência da Rede Sarelli",
    reporta: "COO · Coordenador Geral",
    responsabilidades: [
      "Operar o sistema Rede Sarelli (cadastro, qualificação, retenção).",
      "Auditoria de hashtags (#ChamaADoutora) e engajamento digital.",
      "Manter mapa de calor por município, zona e seção.",
      "Cruzar acessos do site, cliques no WhatsApp e base eleitoral.",
    ],
    entregaveis: [
      "Painel em tempo real para a coordenação.",
      "Relatórios diários de produtividade por região.",
      "Mapa de calor mensal para reorientar agendas e mídia.",
    ],
    cor: "violet",
  },
  {
    icon: Megaphone,
    cargo: "Marketing & Branding",
    papel: "Planejamento, conteúdo e tráfego",
    reporta: "COO · Coordenador Geral",
    responsabilidades: [
      "Executar planejamento editorial de 24 semanas.",
      "Coordenar o videomaker 'O Sombra' (vlogs estilo João Campos).",
      "Gerir tráfego pago e impulsionamento por região.",
      "Garantir consistência da marca: Efeito Cimed + Nova Política.",
    ],
    entregaveis: [
      "Calendário editorial por semana, alinhado às fases do Roadmap.",
      "5 a 7 vídeos verticais publicáveis por semana.",
      "Relatório de performance de tráfego pago por município.",
    ],
    cor: "rose",
  },
  {
    icon: PhoneCall,
    cargo: "Customer Success · CS Político",
    papel: "Retenção e validação de voto",
    reporta: "COO · Coordenador Geral",
    responsabilidades: [
      "Ligar para cada lead cadastrado pelos promotores.",
      "Validar o apoio e estreitar o laço com o eleitor.",
      "Atualizar status do eleitor no sistema (frio, morno, quente).",
      "Encaminhar leads quentes para a liderança de nicho correta.",
    ],
    entregaveis: [
      "Meta diária de ligações por operador.",
      "Conversão de leads frios em apoiadores qualificados.",
      "Base de contatos atualizada no painel.",
    ],
    cor: "emerald",
  },
  {
    icon: ClipboardList,
    cargo: "Recepção & Data Entry",
    papel: "Porta de entrada do comitê",
    reporta: "COO · Coordenador Geral",
    responsabilidades: [
      "Cadastrar todas as visitas que entram no comitê.",
      "Registrar métricas de fluxo (horários, motivos, regiões).",
      "Garantir que nenhum apoiador saia sem cadastro.",
      "Atendimento humano e cordial — primeira imagem da Holding.",
    ],
    entregaveis: [
      "100% dos visitantes cadastrados no sistema.",
      "Relatório semanal de fluxo do comitê.",
      "Encaminhamento de cada visitante à área correta.",
    ],
    cor: "amber",
  },
];

// ============= EXÉRCITO DE CAMPO =============
const exercito: Cargo[] = [
  {
    icon: Briefcase,
    cargo: "Gerentes de Expansão",
    papel: "Controladores da tropa",
    reporta: "COO · Coordenador Geral",
    responsabilidades: [
      "Coordenar e fiscalizar metas das promotoras em campo.",
      "Distribuir territórios e definir rotas de prospecção.",
      "Acompanhar produtividade individual de cada promotora.",
      "Reportar gargalos e oportunidades de expansão à coordenação.",
    ],
    entregaveis: [
      "Mapa territorial atualizado de promotoras ativas.",
      "Reunião semanal de metas com cada promotora.",
      "Relatório de produtividade por região.",
    ],
    cor: "indigo",
  },
  {
    icon: UserCheck,
    cargo: "Suplentes",
    papel: "Captação e blindagem política",
    reporta: "COO · Coordenador Geral",
    responsabilidades: [
      "Captar novas lideranças locais para a Rede Sarelli.",
      "Blindagem política: neutralizar ataques e proteger a marca.",
      "Articular alianças regionais com vereadores e prefeitos.",
      "Representar a Doutora em agendas que ela não puder cumprir.",
    ],
    entregaveis: [
      "Meta mensal de novas lideranças captadas.",
      "Relatório de articulação política regional.",
      "Cobertura de agendas delegadas pela CEO.",
    ],
    cor: "sky",
  },
  {
    icon: Church,
    cargo: "Lideranças de Nicho",
    papel: "Conversão setorial",
    reporta: "Suplentes · Gerentes de Expansão",
    responsabilidades: [
      "Converter setores específicos: igrejas, bairros, grupos profissionais.",
      "Mobilizar suas redes próprias para o movimento Chama a Doutora.",
      "Organizar encontros, cultos e reuniões de apoio.",
      "Reportar leads quentes ao CS Político.",
    ],
    entregaveis: [
      "Meta de votos comprometidos por nicho.",
      "Mínimo 1 encontro mensal mobilizando a base.",
      "Lista atualizada de apoiadores no sistema.",
    ],
    cor: "emerald",
  },
  {
    icon: Footprints,
    cargo: "Promotores · Infantaria",
    papel: "Prospecção ativa de eleitores",
    reporta: "Gerentes de Expansão",
    responsabilidades: [
      "Prospecção ativa: abordar e cadastrar novos eleitores.",
      "Cadastrar cada eleitor no App geolocalizado da Rede Sarelli.",
      "Engajar imediatamente no digital (curtir, comentar, hashtag).",
      "Cumprir metas diárias de cadastros por território.",
    ],
    entregaveis: [
      "Meta diária de cadastros validados no app.",
      "Engajamento digital comprovado de cada lead.",
      "Cobertura territorial conforme rota do Gerente.",
    ],
    cor: "amber",
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
  indigo: { bg: "bg-indigo-500", text: "text-indigo-600", border: "border-indigo-300/40", ring: "shadow-indigo-500/30" },
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
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-lg font-black text-foreground leading-tight">
            {cargo.cargo}
          </h3>
          {cargo.ocupante && (
            <p className={`text-sm font-bold ${c.text} mt-0.5`}>{cargo.ocupante}</p>
          )}
          <p className="text-sm text-foreground/70 mt-0.5 italic">{cargo.papel}</p>
          <p className="text-[10px] font-mono uppercase tracking-wider text-foreground/40 mt-1">
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
              Entregáveis & KPIs
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
              CAPÍTULO 03 · HOLDING SARELLI 2026
            </span>
            <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-primary/60 to-transparent" />
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-foreground leading-[0.95] tracking-tight mb-6">
            Organograma
            <br />
            <span className="bg-gradient-to-r from-primary via-pink-500 to-rose-500 bg-clip-text text-transparent">
              Corporativo
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-foreground/70 max-w-3xl leading-relaxed font-light">
            A campanha gerida como uma{" "}
            <span className="font-semibold text-foreground">empresa de tecnologia e serviços</span>,
            com cargos, KPIs e responsabilidades claras — do C-Level ao Exército de Campo.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {["Diretoria Executiva", "HQ · Inteligência", "Exército de Campo"].map((tag) => (
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

      {/* CEO PÚBLICA */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 mb-12">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-4">
            <Crown className="h-4 w-4 text-primary" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-primary font-bold">
              Topo da Holding
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-foreground">
            A <span className="text-primary">Marca</span> em pessoa
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <CargoCard cargo={ceoPublica} />
        </div>

        <div className="flex justify-center my-6">
          <div className="h-12 w-px bg-gradient-to-b from-primary to-primary/0" />
        </div>
      </section>

      {/* DIRETORIA EXECUTIVA */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 mb-20">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-4">
            <Briefcase className="h-4 w-4 text-primary" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-primary font-bold">
              Camada 01 · Diretoria Executiva (C-Level)
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-foreground mb-2">
            Quem <span className="text-primary">comanda</span> a operação
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            COO operacional e Chief of Staff blindando a CEO Pública 24h por dia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {cLevel.map((c) => (
            <CargoCard key={c.cargo} cargo={c} />
          ))}
        </div>
      </section>

      {/* HQ — INTELIGÊNCIA */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 mb-20">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-4">
            <Building2 className="h-4 w-4 text-primary" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-primary font-bold">
              Camada 02 · HQ · Inteligência e Suporte Interno
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-foreground mb-2">
            O <span className="text-primary">cérebro</span> da Holding
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Dados, marketing, retenção de leads e porta de entrada do comitê.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {hq.map((c) => (
            <CargoCard key={c.cargo} cargo={c} />
          ))}
        </div>
      </section>

      {/* EXÉRCITO DE CAMPO */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 mb-20">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-4">
            <Swords className="h-4 w-4 text-primary" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-primary font-bold">
              Camada 03 · Exército de Campo · Operação de Rua
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-foreground mb-2">
            Quem <span className="text-primary">conquista</span> território
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Da prospecção do promotor à conversão da liderança de nicho.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {exercito.map((c) => (
            <CargoCard key={c.cargo} cargo={c} />
          ))}
        </div>
      </section>

      {/* CICLO OPERACIONAL REDE SARELLI */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 mb-20">
        <div className="relative overflow-hidden rounded-3xl bg-foreground text-background p-10 sm:p-14 shadow-2xl">
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 mb-6">
              <Database className="h-4 w-4 text-primary" />
              <span className="text-[11px] uppercase tracking-[0.35em] font-bold text-primary">
                Ciclo Operacional · Rede Sarelli
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-black leading-[1.05] mb-8 max-w-3xl">
              O funil <span className="bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">auditável</span> de conversão de votos
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  n: "01",
                  t: "Prospecção",
                  d: "O promotor cadastra o eleitor no app geolocalizado da Rede Sarelli.",
                  who: "Promotores · Infantaria",
                },
                {
                  n: "02",
                  t: "Qualificação",
                  d: "O sistema valida o engajamento digital — uso da hashtag #ChamaADoutora.",
                  who: "CTO & Head de Dados",
                },
                {
                  n: "03",
                  t: "Retenção (CS)",
                  d: "O time de Customer Success liga, valida o voto e estreita o laço.",
                  who: "CS Político",
                },
                {
                  n: "04",
                  t: "Auditoria",
                  d: "O Coordenador Geral recebe relatórios diários de produtividade por região.",
                  who: "COO · Coordenador Geral",
                },
              ].map((step) => (
                <div key={step.n} className="border-l-2 border-primary/60 pl-5">
                  <div className="font-mono text-xs font-bold text-primary tracking-[0.3em] mb-1">
                    PASSO {step.n}
                  </div>
                  <div className="font-display font-bold text-background text-xl mb-1">
                    {step.t}
                  </div>
                  <p className="text-background/75 text-sm leading-relaxed mb-2">{step.d}</p>
                  <p className="text-[11px] font-semibold text-primary uppercase tracking-wider">
                    Responsável: {step.who}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRINCÍPIOS DE GOVERNANÇA */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-4">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-primary font-bold">
              Identidade & Governança
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-foreground mb-2">
            Como a Holding <span className="text-primary">opera</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              icon: Users,
              t: "Efeito Cimed",
              d: "Transformar a política em uma marca de desejo e pertencimento. A campanha como produto cobiçado.",
            },
            {
              icon: Database,
              t: "Nova Política",
              d: "Tecnologia, dados e linguagem de 'Creator de Autoridade'. Decisão por evidência, não por intuição.",
            },
            {
              icon: ShieldCheck,
              t: "Atributos da Marca",
              d: "Firmeza (criminalista), Acolhimento (mãe/social) e Eficiência (gestora). Os três sempre juntos.",
            },
          ].map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.t}
                className="bg-white rounded-2xl p-6 border border-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center text-white mb-4 shadow-lg shadow-primary/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-black text-foreground mb-2">{p.t}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{p.d}</p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
