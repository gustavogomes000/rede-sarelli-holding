import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/governanca")({
  component: GovPage,
});

const rituais = [
  { freq: "Daily", quem: "C-Level", quando: "08h, 15min", obj: "Bloqueios do dia, alertas de risco, decisão de marca." },
  { freq: "Weekly", quem: "HQ + Gerentes", quando: "Seg, 90min", obj: "Resultados da semana, plano da próxima, reposição de meta." },
  { freq: "Monthly", quem: "Doutora + COO + Doadores", quando: "1ª 3ª-feira", obj: "Prestação de contas, ajuste de roadmap, captação." },
  { freq: "Quarterly", quem: "Conselho ampliado", quando: "Trimestral", obj: "Revisão de tese, ajuste de fase, oxigenação." },
];

const kpis = [
  { area: "Marca", kpi: "Net favorability + alcance orgânico" },
  { area: "Operação", kpi: "% entregas no SLA + burn-rate" },
  { area: "Campo", kpi: "Leads/dia + cobertura geográfica" },
  { area: "CS Político", kpi: "% compromisso de voto" },
  { area: "Dados", kpi: "Auditabilidade 100% + uptime" },
  { area: "Financeiro", kpi: "Custo por voto comprometido" },
];

function GovPage() {
  return (
    <PageShell
      eyebrow="Capítulo 10 · Governança"
      title={
        <>
          Cadência, <span className="text-gradient-pink">ritual</span> e prestação de contas.
        </>
      }
      intro="Holding sem ritual vira comitê em uma semana. Aqui ficam os encontros obrigatórios, os KPIs por área e os princípios de compliance que tornam a campanha auditável."
    >
      <section className="mb-16">
        <h2 className="font-display text-3xl font-bold mb-6">Rituais</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {rituais.map((r) => (
            <div key={r.freq} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold">{r.freq}</div>
                <div className="font-mono text-xs text-muted-foreground">{r.quando}</div>
              </div>
              <div className="font-display text-xl font-bold text-foreground mb-2">{r.quem}</div>
              <p className="text-sm text-muted-foreground">{r.obj}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-3xl font-bold mb-6">KPI por área</h2>
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          {kpis.map((k, i) => (
            <div
              key={k.area}
              className={`grid grid-cols-3 gap-4 px-6 py-4 ${i > 0 ? "border-t border-border" : ""}`}
            >
              <div className="font-display font-semibold text-foreground">{k.area}</div>
              <div className="col-span-2 font-mono text-sm text-muted-foreground">{k.kpi}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-3xl font-bold mb-6">Compliance & transparência</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { t: "Origem do recurso", d: "Cada centavo entra com nota fiscal e fonte rastreada na Rede Sarelli." },
            { t: "Lead com origem", d: "Cada lead carrega quem cadastrou, onde e quando — auditoria pronta para o TSE." },
            { t: "Conteúdo aprovado", d: "Nenhuma peça sai sem passar pelo CMO + Chief of Staff. Sem improviso." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-pink/30 bg-pink/5 p-6">
              <div className="font-display text-lg font-bold text-foreground mb-2">{c.t}</div>
              <p className="text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
