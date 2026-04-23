import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Trophy, Target, Smartphone, Users } from "lucide-react";

export const Route = createFileRoute("/promotores")({
  component: PromotoresPage,
});

const dia = [
  { h: "06h–08h", t: "Briefing", d: "Recebe meta do dia, região, script atualizado e material no app." },
  { h: "08h–11h", t: "Captação rua", d: "Aborda, qualifica, cadastra lead com foto e geo." },
  { h: "11h–13h", t: "Sync regional", d: "Gerente confere ranking, troca território se necessário." },
  { h: "13h–17h", t: "Captação 2", d: "Roda comércio, eventos, igrejas. Hashtag em todo material físico." },
  { h: "17h–18h", t: "Fechamento", d: "Sobe report, recebe XP, vê posição no ranking semanal." },
];

const gamif = [
  { icon: Target, t: "Meta diária", d: "10 cadastros qualificados por dia. Bonificação acima da meta." },
  { icon: Trophy, t: "Ranking público", d: "Top 10 da semana entra na timeline da Holding com selo dourado." },
  { icon: Smartphone, t: "Comissionamento", d: "Pagamento por engajamento real do lead, não só cadastro." },
  { icon: Users, t: "Hierarquia clara", d: "Promotor → Suplente → Gerente → COO. Linha direta para escalar dúvida." },
];

function PromotoresPage() {
  return (
    <PageShell
      tone="light"
      eyebrow="Capítulo 09 · Manual do Promotor"
      title={
        <>
          O <span className="text-gradient-pink">exército de campo</span>.
        </>
      }
      intro="O promotor não é cabo eleitoral antigo. É operador de campo com app, meta, script, KPI e bonificação por performance. Esta é a vida dele na Rede Sarelli."
    >
      <section className="mb-16">
        <h2 className="font-display text-3xl font-bold mb-6">Um dia na vida</h2>
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          {dia.map((d, i) => (
            <div
              key={d.h}
              className={`grid md:grid-cols-12 gap-4 p-6 ${i > 0 ? "border-t border-border" : ""}`}
            >
              <div className="md:col-span-2 font-mono text-sm text-pink">{d.h}</div>
              <div className="md:col-span-3 font-display text-xl font-semibold text-foreground">
                {d.t}
              </div>
              <div className="md:col-span-7 text-muted-foreground">{d.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-3xl font-bold mb-6">Gamificação & comissionamento</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {gamif.map((g) => {
            const Icon = g.icon;
            return (
              <div key={g.t} className="rounded-2xl border border-border bg-card p-6">
                <div className="h-10 w-10 rounded-lg gradient-pink-gold flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="font-display text-lg font-bold text-foreground mb-2">{g.t}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{g.d}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <div className="rounded-3xl gradient-pink-gold p-10 text-white text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-white/80 mb-3">Mantra do promotor</div>
          <div className="font-display text-3xl sm:text-5xl font-bold leading-tight">
            "Cada cadastro é um voto na construção da Doutora."
          </div>
        </div>
      </section>
    </PageShell>
  );
}
