import { createFileRoute } from "@tanstack/react-router";
import {
  Target,
  Users,
  Crown,
  ShieldCheck,
  Heart,
  TrendingUp,
  ArrowDown,
  CheckCircle2,
  Trophy,
  Zap,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { EditableText } from "@/components/EditableText";

export const Route = createFileRoute("/funil-metas")({
  head: () => ({
    meta: [
      { title: "Funil & Metas · Operação Sarelli 2026" },
      {
        name: "description",
        content:
          "Funil de conversão da Rede Sarelli — do suplente ao voto confirmado. Metas por tier, taxa de conversão e previsibilidade eleitoral.",
      },
      {
        property: "og:title",
        content: "Funil & Metas · Sarelli 2026",
      },
      {
        property: "og:description",
        content:
          "Quantos suplentes, lideranças, fiscais e eleitores precisamos para chegar à meta de 110k votos.",
      },
    ],
  }),
  component: FunilPage,
});

// ============= TIERS DO FUNIL =============
const tiers = [
  {
    nivel: "01",
    titulo: "Suplentes",
    icon: Crown,
    meta: 80,
    multiplicador: "Cada suplente comanda 1 célula regional",
    desc: "Núcleo de comando. Recebem treinamento, materiais e budget.",
    cor: "from-purple-600 to-fuchsia-600",
    corHex: "#a855f7",
  },
  {
    nivel: "02",
    titulo: "Lideranças",
    icon: ShieldCheck,
    meta: 800,
    multiplicador: "10 lideranças por suplente",
    desc: "Articuladores locais. Cada um cobre bairro, comunidade ou categoria.",
    cor: "from-fuchsia-500 to-pink-600",
    corHex: "#d946ef",
  },
  {
    nivel: "03",
    titulo: "Fiscais",
    icon: Users,
    meta: 1_500,
    multiplicador: "1 fiscal por seção prioritária",
    desc: "Olhos da campanha no dia D. Defendem o voto na urna.",
    cor: "from-rose-500 to-red-500",
    corHex: "#ef4444",
  },
  {
    nivel: "04",
    titulo: "Promotores",
    icon: Zap,
    meta: 5_000,
    multiplicador: "Voluntários ativos pelo link único",
    desc: "Recebem link próprio, cadastram eleitores e ganham ranking.",
    cor: "from-orange-500 to-amber-500",
    corHex: "#f97316",
  },
  {
    nivel: "05",
    titulo: "Eleitores Cadastrados",
    icon: Heart,
    meta: 180_000,
    multiplicador: "Base total de leads qualificados",
    desc: "Pessoas que demonstraram intenção e estão no CRM.",
    cor: "from-pink-500 to-rose-600",
    corHex: "#ec4899",
  },
  {
    nivel: "06",
    titulo: "Voto Confirmado",
    icon: Trophy,
    meta: 110_000,
    multiplicador: "61% dos cadastrados convertem",
    desc: "Meta para o quociente eleitoral de Deputado Federal.",
    cor: "from-amber-500 to-yellow-500",
    corHex: "#eab308",
  },
];

const taxasConversao = [
  { de: "Cadastro → Contato CS", taxa: 95, cor: "#a855f7" },
  { de: "Contato → Engajamento", taxa: 75, cor: "#d946ef" },
  { de: "Engajamento → Compromisso", taxa: 80, cor: "#ec4899" },
  { de: "Compromisso → Voto", taxa: 85, cor: "#eab308" },
];

const formulas = [
  {
    titulo: "Custo por Voto (CAC)",
    formula: "Investimento total ÷ Votos confirmados",
    exemplo: "R$ 3,5mi ÷ 110k = R$ 32 por voto",
    icon: Target,
  },
  {
    titulo: "Velocidade do Funil",
    formula: "Cadastros novos por semana × 26 semanas",
    exemplo: "Meta: 7.000 cadastros/semana até out/26",
    icon: TrendingUp,
  },
  {
    titulo: "Cobertura Territorial",
    formula: "Municípios com pelo menos 1 liderança ativa",
    exemplo: "Meta: 200 dos 246 municípios de GO (81%)",
    icon: CheckCircle2,
  },
];

function FunilPage() {
  return (
    <PageShell
      eyebrow="Capítulo 06 · Funil & Metas"
      title={
        <EditableText
          id="funil.hero.titulo"
          defaultValue="Do suplente ao voto. Cada número que importa."
          as="span"
          multiline
        />
      }
      intro={
        <EditableText
          id="funil.hero.intro"
          defaultValue="O funil que transforma a Rede Sarelli em previsibilidade eleitoral. Metas por tier, taxas de conversão e fórmulas que orientam decisões diárias da campanha."
          as="span"
          multiline
        />
      }
      tone="light"
    >
      {/* ============= FUNIL VISUAL ============= */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <span className="inline-block text-[11px] uppercase tracking-[0.3em] font-bold text-primary">
            Pirâmide de Conversão
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold mt-2 text-foreground">
            6 níveis. 1 destino: a urna.
          </h2>
        </div>

        <div className="space-y-3 max-w-4xl mx-auto">
          {tiers.map((t, i) => {
            const Icon = t.icon;
            const widthPct = 100 - i * 11;
            return (
              <div key={t.nivel} className="flex flex-col items-center">
                <div
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-r ${t.cor} text-white shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] cursor-default`}
                  style={{ width: `${widthPct}%` }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_60%)]" />
                  <div className="relative flex items-center gap-4 p-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm shrink-0">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-80">
                          Nível {t.nivel}
                        </span>
                        <span className="text-xs opacity-80">·</span>
                        <span className="text-[11px] font-semibold opacity-90">
                          {t.multiplicador}
                        </span>
                      </div>
                      <div className="font-display text-xl sm:text-2xl font-extrabold mt-0.5 leading-tight">
                        {t.titulo}
                      </div>
                      <div className="text-xs opacity-90 mt-1 hidden sm:block">
                        {t.desc}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-display text-3xl sm:text-4xl font-extrabold tabular-nums">
                        {t.meta >= 1000
                          ? `${(t.meta / 1000).toFixed(t.meta >= 10000 ? 0 : 1)}k`
                          : t.meta}
                        {t.nivel === "06" && (
                          <span className="text-amber-200 ml-1">★</span>
                        )}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider opacity-80 font-bold">
                        {t.nivel === "06" ? "Meta de votos" : "Pessoas"}
                      </div>
                    </div>
                  </div>
                </div>
                {i < tiers.length - 1 && (
                  <ArrowDown
                    className="h-5 w-5 my-1 text-muted-foreground/50 animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ============= TAXAS DE CONVERSÃO ============= */}
      <section className="mb-16 rounded-2xl border border-border/60 bg-gradient-to-br from-slate-50 via-white to-pink-50/40 p-6 lg:p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-md">
            <TrendingUp className="h-5 w-5" />
          </div>
          <div>
            <h2 className="font-display text-2xl font-extrabold text-foreground">
              Taxas de Conversão Esperadas
            </h2>
            <p className="text-sm text-muted-foreground">
              Da entrada no CRM até o voto na urna. Benchmarks de campanhas estaduais.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {taxasConversao.map((t) => (
            <div
              key={t.de}
              className="rounded-xl border border-border/60 bg-card p-5 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                {t.de}
              </div>
              <div
                className="font-display text-4xl font-extrabold tabular-nums"
                style={{ color: t.cor }}
              >
                {t.taxa}%
              </div>
              <div className="mt-3 h-1.5 w-full bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${t.taxa}%`,
                    background: t.cor,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200">
          <p className="text-sm text-amber-900">
            <strong>Cálculo final:</strong> 180.000 cadastros × 95% × 75% × 80% × 85% ={" "}
            <span className="font-extrabold text-base">87.210 votos diretos</span> +
            efeito multiplicador da rede orgânica = meta de{" "}
            <span className="font-extrabold text-base">110.000 votos</span>.
          </p>
        </div>
      </section>

      {/* ============= FÓRMULAS / KPIs ============= */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <span className="inline-block text-[11px] uppercase tracking-[0.3em] font-bold text-primary">
            Fórmulas que guiam a operação
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold mt-2 text-foreground">
            KPIs que medimos toda semana
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {formulas.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.titulo}
                className="group rounded-2xl border border-border/60 bg-card p-6 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-rose-500 text-primary-foreground shadow-md mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="font-display text-lg font-extrabold text-foreground">
                  {f.titulo}
                </div>
                <div className="mt-3 text-xs font-mono text-muted-foreground bg-muted/60 rounded-lg px-3 py-2 leading-relaxed">
                  {f.formula}
                </div>
                <div className="mt-3 text-sm font-bold text-primary">
                  {f.exemplo}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============= CRONOGRAMA DE BUILD ============= */}
      <section className="mb-12 rounded-2xl bg-gradient-to-br from-slate-900 via-rose-900 to-pink-900 p-8 text-white shadow-2xl">
        <div className="max-w-3xl">
          <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-amber-300">
            Linha do Tempo
          </span>
          <h2 className="font-display text-3xl font-extrabold mt-2">
            Como o funil se enche até 04/Out
          </h2>
          <p className="text-sm opacity-90 mt-2">
            6 marcos para garantir previsibilidade. Cada quinzena tem entregáveis.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { m: "Mai", t: "Suplentes 50%" },
            { m: "Jun", t: "Lideranças 30%" },
            { m: "Jul", t: "Eleitores 25%" },
            { m: "Ago", t: "Fiscais 80%" },
            { m: "Set", t: "Eleitores 90%" },
            { m: "Out", t: "Confirmação 100%" },
          ].map((p, i) => (
            <div
              key={p.m}
              className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-4 hover:bg-white/15 transition-colors"
            >
              <div className="text-[10px] uppercase tracking-wider opacity-70 font-bold">
                Marco {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-display text-2xl font-extrabold mt-1">
                {p.m}
              </div>
              <div className="text-xs opacity-90 mt-1 font-semibold">{p.t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ============= NOTA ============= */}
      <section className="rounded-2xl border-2 border-dashed border-border/60 bg-muted/30 p-6">
        <h4 className="font-display text-sm font-extrabold uppercase tracking-wider text-muted-foreground mb-2">
          Como esses números são calculados
        </h4>
        <EditableText
          id="funil.metodologia"
          defaultValue="As metas por tier seguem a lógica de multiplicação da Rede Sarelli (1 suplente → 10 lideranças → 1.875 eleitores cadastrados). As taxas de conversão são benchmarks de campanhas estaduais bem-sucedidas em GO. O CAC e a velocidade do funil são revisados mensalmente pelo time de CS junto à coordenação financeira."
          as="p"
          multiline
          className="text-sm text-muted-foreground leading-relaxed"
        />
      </section>
    </PageShell>
  );
}
