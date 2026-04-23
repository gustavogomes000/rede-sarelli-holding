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
  Wallet,
  Clapperboard,
  Share2,
} from "lucide-react";
import { EditableText } from "@/components/EditableText";

export const Route = createFileRoute("/organograma")({
  head: () => ({
    meta: [
      { title: "Organograma · Operação Sarelli 2026" },
      {
        name: "description",
        content:
          "Organograma corporativo da Operação Sarelli 2026: CEO, COO, CFO, Chief of Staff, HQ de Inteligência e Exército de Campo.",
      },
      { property: "og:title", content: "Organograma · Operação Sarelli 2026" },
      {
        property: "og:description",
        content:
          "Estrutura hierárquica da campanha gerida como operação: cargos, deveres e KPIs claros do C-Level ao Exército de Campo.",
      },
    ],
  }),
  component: OrganogramaPage,
});

type Cor = "primary" | "rose" | "violet" | "amber" | "emerald" | "sky" | "indigo" | "fuchsia";

type Cargo = {
  icon: typeof Crown;
  cargo: string;
  ocupante?: string;
  papel: string;
  reporta: string;
  responsabilidades: string[];
  entregaveis: string[];
  cor: Cor;
};

// ============= TOPO =============
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

// ============= COO ÚNICO (logo abaixo da CEO) — acumula CFO/Admin/Dev =============
const coo: Cargo = {
  icon: Compass,
  cargo: "COO · Coordenador Geral, CFO & Admin",
  ocupante: "Deocleciano",
  papel: "Causa do Exército · Gestão geral, financeiro, administrativo e desenvolvimento sob demanda",
  reporta: "CEO Pública",
  responsabilidades: [
    "Gestão geral de toda a Operação (HQ + Exército de Campo).",
    "Causa e comando do Exército: define metas, territórios e ritmo.",
    "Gestão financeira: caixa, contas a pagar, fornecedores e prestação de contas.",
    "Controle administrativo do comitê, contratos e fornecedores.",
    "Cobrança de resultados e responsabilidade financeira de cada área.",
    "Desenvolve qualquer solução/local digital necessário para qualquer demanda do dia a dia (landing, formulário, integração).",
    "Garantir execução do Roadmap Macro até 4 de outubro.",
    "Tomar decisões com base no painel da Rede Sarelli.",
  ],
  entregaveis: [
    "Reunião semanal de status com todas as áreas.",
    "Relatório consolidado quinzenal de KPIs.",
    "Fluxo de caixa semanal e painel de cobrança de metas por área.",
    "Soluções digitais sob demanda entregues no prazo solicitado.",
    "Auditoria contínua de metas das promotoras e lideranças.",
  ],
  cor: "primary",
};

// ============= CAMADA 2 — CHIEF OF STAFF (sozinha, 24h com a CEO) =============
const chiefOfStaff: Cargo = {
  icon: CalendarClock,
  cargo: "Chief of Staff · Assessoria 24h",
  papel: "Companhia 24h da Doutora · Filtro de acesso e gestão de agenda",
  reporta: "COO · Coordenador Geral",
  responsabilidades: [
    "Acompanhar a CEO 24h: deslocamentos, compromissos, gravações e bastidores.",
    "Gestão integral da agenda da CEO Pública.",
    "Filtrar pedidos, convites e contatos antes de chegarem à Doutora.",
    "Articular interface entre CEO e demais áreas da Operação.",
  ],
  entregaveis: [
    "Agenda semanal fechada e validada com 7 dias de antecedência.",
    "Briefing diário pré-agenda para a CEO.",
    "Confirmações e logística operacional de cada compromisso.",
  ],
  cor: "rose",
};

// ============= CAMADA 3 — DIRETORIA OPERACIONAL (HQ) =============
const diretoria: Cargo[] = [
  {
    icon: Database,
    cargo: "CTO & Head de Dados",
    papel: "Inteligência da Rede Sarelli e desenvolvimento de sistemas",
    reporta: "COO · Coordenador Geral",
    responsabilidades: [
      "Operar o sistema Rede Sarelli (cadastro, qualificação, retenção).",
      "Desenvolver todos os sistemas necessários para a operação: app de campo, painéis, integrações, automações e ferramentas internas.",
      "Construir e manter landings, formulários, bots e fluxos digitais sob demanda das áreas.",
      "Auditoria de hashtags (#ChamaADoutora) e engajamento digital.",
      "Manter mapa de calor por município, zona e seção.",
      "Cruzar acessos do site, cliques no WhatsApp e base eleitoral.",
    ],
    entregaveis: [
      "Sistemas e ferramentas internas entregues conforme demanda das áreas.",
      "Painel em tempo real para a coordenação.",
      "Relatórios diários de produtividade por região.",
      "Mapa de calor mensal para reorientar agendas e mídia.",
    ],
    cor: "violet",
  },
  {
    icon: Clapperboard,
    cargo: "CMO · Conteúdo & Produção",
    papel: "Criação de conteúdo, campo, filmagem, edição e criação dos conteúdos",
    reporta: "COO · Coordenador Geral",
    responsabilidades: [
      "Executar planejamento editorial de 24 semanas (criação dos conteúdos).",
      "Ir a campo com a Doutora: filmar agendas, ruas, bastidores e gravações.",
      "Coordenar o videomaker 'O Sombra' (vlogs estilo João Campos).",
      "Edição de vídeos, cortes, reels, podcasts e peças gráficas.",
      "Garantir consistência da marca: Efeito Cimed + Nova Política.",
    ],
    entregaveis: [
      "Calendário editorial por semana, alinhado às fases do Roadmap.",
      "5 a 7 vídeos verticais publicáveis por semana.",
      "Cobertura completa de cada agenda da Doutora em campo.",
      "Banco de cortes e peças prontas entregues ao CMO de Redes.",
    ],
    cor: "rose",
  },
  {
    icon: Share2,
    cargo: "CMO · Redes Sociais & Tráfego",
    papel: "Cuidar de todas as redes sociais e impulsionamento",
    reporta: "COO · Coordenador Geral",
    responsabilidades: [
      "Cuidar de todas as redes sociais da Doutora: Instagram, TikTok, Facebook, YouTube, Kwai e WhatsApp.",
      "Publicar, agendar, responder comentários e direct, gerir tom de voz.",
      "Gerir tráfego pago e impulsionamento por região.",
      "Conversar diretamente com o Head do Exército para alinhar o exército de campo às pautas e campanhas das redes sociais.",
      "Monitorar métricas, hashtags e tendências em tempo real.",
    ],
    entregaveis: [
      "Todas as redes ativas diariamente (feed + stories + shorts).",
      "Relatório semanal de engajamento e crescimento por rede.",
      "Briefing semanal entregue ao Head do Exército com pautas para o campo.",
      "Relatório de performance de tráfego pago por município.",
    ],
    cor: "fuchsia",
  },
  {
    icon: Swords,
    cargo: "Head do Exército · Controle de Campo",
    papel: "Responsável direto pelo Exército de Campo",
    reporta: "COO · Coordenador Geral",
    responsabilidades: [
      "Comandar Suplentes, Lideranças e Promotores no dia a dia.",
      "Distribuir territórios, definir rotas e fiscalizar metas em campo.",
      "Reportar gargalos, bloqueios e oportunidades à COO.",
      "Garantir que cada lead capturado em rua entre na Rede Sarelli.",
    ],
    entregaveis: [
      "Mapa territorial atualizado de promotoras e lideranças ativas.",
      "Reunião semanal de metas com cada Suplente.",
      "Relatório diário de produtividade por região.",
    ],
    cor: "indigo",
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
      "Atendimento humano e cordial — primeira imagem da Operação.",
    ],
    entregaveis: [
      "100% dos visitantes cadastrados no sistema.",
      "Relatório semanal de fluxo do comitê.",
      "Encaminhamento de cada visitante à área correta.",
    ],
    cor: "fuchsia",
  },
];

// ============= CAMADA 4 — EXÉRCITO DE CAMPO =============
const exercito: Cargo[] = [
  {
    icon: UserCheck,
    cargo: "Suplentes · Conquista Territorial",
    papel: "Captação, blindagem política e articulação regional",
    reporta: "Head do Exército",
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
    papel: "Trazer votos, pessoas e peso para o projeto",
    reporta: "Suplentes",
    responsabilidades: [
      "Responsáveis por trazer pessoas para o projeto e ajudar a conquistar votos.",
      "Cadastrar essas pessoas no app Rede Sarelli (pipeline de leads rastreável).",
      "Promover reuniões para apresentar e divulgar a Dra. Sarelli em sua rede.",
      "Mobilizar suas redes próprias (igrejas, bairros, grupos profissionais) para o movimento Chama a Doutora.",
      "Engajar nas redes sociais conforme o playbook digital (compartilhar, comentar, marcar, replicar conteúdo).",
      "Reportar leads quentes ao CS Político.",
    ],
    entregaveis: [
      "KPI de divulgação: publicações replicadas e alcance gerado nas redes.",
      "Meta mensal de cadastros no app Rede Sarelli.",
      "Volume de novas pessoas trazidas para o projeto.",
      "Mínimo 1 reunião / encontro mensal mobilizando a base.",
    ],
    cor: "emerald",
  },
  {
    icon: ShieldCheck,
    cargo: "Fiscais · Dia da Eleição",
    papel: "Lisura da votação e recepção de votos na escola",
    reporta: "Head do Exército",
    responsabilidades: [
      "Atuar no dia da eleição como fiscais — dentro e fora da escola — garantindo lisura da votação.",
      "Recepcionar conhecidos, amigos e familiares na porta da escola.",
      "Trazer o máximo de votos possíveis para a Doutora na hora da votação.",
      "Reportar irregularidades e ocorrências em tempo real ao Head do Exército.",
    ],
    entregaveis: [
      "Escala completa de fiscais por escola/zona/seção entregue até 30 dias antes da eleição.",
      "Relatório de votos recepcionados/conduzidos na porta da escola no dia da eleição.",
      "Registro de ocorrências por seção em tempo real.",
    ],
    cor: "indigo",
  },
  {
    icon: Footprints,
    cargo: "Promotores · Infantaria",
    papel: "Prospecção ativa de eleitores",
    reporta: "Lideranças · Head do Exército",
    responsabilidades: [
      "Prospecção ativa: abordar e cadastrar novos eleitores.",
      "Cadastrar cada eleitor no App geolocalizado da Rede Sarelli.",
      "Engajar imediatamente no digital (curtir, comentar, hashtag).",
      "Cumprir metas diárias de cadastros por território.",
    ],
    entregaveis: [
      "Meta diária de cadastros validados no app.",
      "Engajamento digital comprovado de cada lead.",
      "Cobertura territorial conforme rota do Head do Exército.",
    ],
    cor: "amber",
  },
];

const COR_CLASSES: Record<Cor, { bg: string; text: string; border: string; ring: string; line: string }> = {
  primary: { bg: "bg-primary", text: "text-primary", border: "border-primary/30", ring: "shadow-primary/30", line: "bg-primary" },
  rose: { bg: "bg-rose-500", text: "text-rose-600", border: "border-rose-300/40", ring: "shadow-rose-500/30", line: "bg-rose-400" },
  violet: { bg: "bg-violet-500", text: "text-violet-600", border: "border-violet-300/40", ring: "shadow-violet-500/30", line: "bg-violet-400" },
  amber: { bg: "bg-amber-500", text: "text-amber-600", border: "border-amber-300/40", ring: "shadow-amber-500/30", line: "bg-amber-400" },
  emerald: { bg: "bg-emerald-500", text: "text-emerald-600", border: "border-emerald-300/40", ring: "shadow-emerald-500/30", line: "bg-emerald-400" },
  sky: { bg: "bg-sky-500", text: "text-sky-600", border: "border-sky-300/40", ring: "shadow-sky-500/30", line: "bg-sky-400" },
  indigo: { bg: "bg-indigo-500", text: "text-indigo-600", border: "border-indigo-300/40", ring: "shadow-indigo-500/30", line: "bg-indigo-400" },
  fuchsia: { bg: "bg-fuchsia-500", text: "text-fuchsia-600", border: "border-fuchsia-300/40", ring: "shadow-fuchsia-500/30", line: "bg-fuchsia-400" },
};

function CargoCard({ cargo }: { cargo: Cargo }) {
  const Icon = cargo.icon;
  const c = COR_CLASSES[cargo.cor];
  return (
    <article
      className={`group relative bg-white rounded-2xl border ${c.border} p-6 hover:shadow-2xl ${c.ring} hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full`}
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

/** Conector vertical entre níveis */
function VerticalConnector({ height = "h-12" }: { height?: string }) {
  return (
    <div className="flex justify-center">
      <div className={`${height} w-px bg-gradient-to-b from-primary/70 via-primary/40 to-primary/0`} />
    </div>
  );
}

/** Barra horizontal que conecta um pai a múltiplos filhos */
function HorizontalBracket() {
  return (
    <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
      <div className="flex justify-center">
        <div className="h-8 w-px bg-primary/50" />
      </div>
      <div className="mx-auto h-px w-[85%] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </div>
  );
}

function NivelHeader({
  capitulo,
  titulo,
  destaque,
  subtitulo,
  Icon,
}: {
  capitulo: string;
  titulo: string;
  destaque: string;
  subtitulo?: string;
  Icon: typeof Crown;
}) {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-4">
        <Icon className="h-4 w-4 text-primary" />
        <span className="text-[11px] uppercase tracking-[0.35em] text-primary font-bold">
          {capitulo}
        </span>
      </div>
      <h2 className="font-display text-3xl sm:text-4xl font-black text-foreground mb-2">
        {titulo} <span className="text-primary">{destaque}</span>
      </h2>
      {subtitulo && (
        <p className="text-foreground/60 max-w-2xl mx-auto">{subtitulo}</p>
      )}
    </div>
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
              CAPÍTULO 03 · OPERAÇÃO SARELLI 2026
            </span>
            <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-primary/60 to-transparent" />
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-foreground leading-[0.95] tracking-tight mb-6">
            <EditableText id="organograma.hero.titulo1" as="span" defaultValue="Organograma" />
            <br />
            <EditableText
              id="organograma.hero.titulo2"
              as="span"
              defaultValue="Corporativo"
              className="bg-gradient-to-r from-primary via-pink-500 to-rose-500 bg-clip-text text-transparent"
            />
          </h1>

          <EditableText
            id="organograma.hero.subtitulo"
            as="p"
            multiline
            defaultValue="A campanha gerida como uma empresa de tecnologia e serviços, com hierarquia clara — da CEO Pública ao último promotor em campo."
            className="text-xl sm:text-2xl text-foreground/70 max-w-3xl leading-relaxed font-light"
          />

          <div className="mt-10 flex flex-wrap gap-3">
            {["CEO Pública", "COO · CFO · Admin", "Chief of Staff 24h", "Diretoria HQ", "Exército de Campo"].map((tag) => (
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

      {/* ====== ORGANOGRAMA HIERÁRQUICO ====== */}

      {/* NÍVEL 1 — CEO */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8">
        <NivelHeader
          capitulo="Nível 01 · Topo da Operação"
          titulo="A"
          destaque="Marca em pessoa"
          Icon={Crown}
        />
        <div className="max-w-2xl mx-auto">
          <CargoCard cargo={ceoPublica} />
        </div>
      </section>

      <VerticalConnector />

      {/* NÍVEL 2 — COO ÚNICO (Deocleciano sozinho) */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8">
        <NivelHeader
          capitulo="Nível 02 · Coordenação Geral"
          titulo="Quem"
          destaque="comanda toda a operação"
          subtitulo="Único elo entre a CEO Pública e toda a estrutura. Causa do Exército e gestor da Operação."
          Icon={Compass}
        />
        <div className="max-w-2xl mx-auto">
          <CargoCard cargo={coo} />
        </div>
      </section>

      <HorizontalBracket />

      {/* NÍVEL 3 — CHIEF OF STAFF (sozinha) */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 mt-6">
        <NivelHeader
          capitulo="Nível 03 · Sombra da CEO"
          titulo="Quem está com a Doutora"
          destaque="24 horas por dia"
          subtitulo="Chief of Staff: companhia, agenda e filtro de acesso. A pessoa que blinda a CEO o tempo inteiro."
          Icon={Briefcase}
        />
        <div className="max-w-2xl mx-auto">
          <CargoCard cargo={chiefOfStaff} />
        </div>
      </section>

      <HorizontalBracket />

      {/* NÍVEL 4 — DIRETORIA OPERACIONAL (HQ) */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 mt-6">
        <NivelHeader
          capitulo="Nível 04 · Diretoria Operacional · HQ"
          titulo="O"
          destaque="cérebro da Operação"
          subtitulo="CTO, CMOs (Conteúdo + Redes), Head do Exército, CS Político e Recepção. Cada um responde diretamente ao COO."
          Icon={Building2}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {diretoria.map((c) => (
            <CargoCard key={c.cargo} cargo={c} />
          ))}
        </div>
      </section>

      <HorizontalBracket />

      {/* NÍVEL 5 — EXÉRCITO DE CAMPO */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 mt-6 mb-20">
        <NivelHeader
          capitulo="Nível 05 · Exército de Campo · Operação de Rua"
          titulo="Quem"
          destaque="conquista território"
          subtitulo="Comandado pelo Head do Exército: Suplentes articulam, Fiscais defendem a urna, Lideranças convertem, Promotores prospectam."
          Icon={Swords}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {exercito.map((c) => (
            <CargoCard key={c.cargo} cargo={c} />
          ))}
        </div>
      </section>
    </main>
  );
}
