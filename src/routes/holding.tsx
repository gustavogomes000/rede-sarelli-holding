import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Building2, Rocket, BarChart3 } from "lucide-react";

export const Route = createFileRoute("/holding")({
  component: HoldingPage,
});

const dnas = [
  {
    icon: Building2,
    name: "Cimed",
    role: "DNA da Marca",
    person: "João Adibe",
    desc: "Marca de desejo, mascote forte, presença de varejo. A política tratada como produto premium que o eleitor quer ter.",
    bullets: ["Identidade visual obsessiva", "Tom de marca consistente", "Brand love acima do branding"],
  },
  {
    icon: Rocket,
    name: "João Campos",
    role: "DNA da Execução",
    person: "Recife / PSB",
    desc: "Operação digital limpa, presença diária, estética millennial-jovem que conversa com a base e com a elite ao mesmo tempo.",
    bullets: ["Conteúdo diário com ritmo", "Equipe digital profissional", "Nada amador chega ao público"],
  },
  {
    icon: BarChart3,
    name: "Tabata Amaral",
    role: "DNA dos Dados",
    person: "São Paulo / PSB",
    desc: "Política baseada em evidência. Números grandes, transparência radical, narrativa construída sobre fato auditável.",
    bullets: ["Dashboard como marketing", "KPI público por pilar", "Auditoria como diferencial"],
  },
];

function HoldingPage() {
  return (
    <PageShell
      eyebrow="Capítulo 02 · Tese"
      title={
        <>
          A campanha é uma <span className="text-gradient-pink">holding</span>, não um comitê.
        </>
      }
      intro="Tratamos cada voto como receita, cada promotor como funcionário com KPI, cada conteúdo como peça de marca. Três DNAs costurados num único organismo — bonito por fora, brutal por dentro."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {dnas.map((d) => {
          const Icon = d.icon;
          return (
            <div
              key={d.name}
              className="group relative rounded-2xl border border-border bg-card p-8 hover:border-gold/40 transition-all hover:-translate-y-1"
            >
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
              <div className="h-12 w-12 rounded-xl gradient-pink-gold flex items-center justify-center mb-6 shadow-pink">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">{d.role}</div>
              <h3 className="font-display text-3xl font-bold text-foreground mb-1">{d.name}</h3>
              <div className="text-xs text-muted-foreground mb-4">{d.person}</div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{d.desc}</p>
              <ul className="space-y-2">
                {d.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-gold flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">
            Por que <span className="text-gradient-gold">holding</span>?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Comitês de campanha tradicionais funcionam como ONGs improvisadas: amigos, favores,
            planilhas perdidas. A Holding Sarelli rejeita esse modelo. Adotamos governança
            corporativa real — C-level, cadência semanal, dashboard executivo, prestação de contas
            por área — porque é a única forma de escalar sem perder controle e de transformar
            engajamento em voto comprovado.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8">
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">
            A equação Sarelli
          </div>
          <div className="font-display text-2xl font-semibold text-foreground leading-tight">
            Marca de desejo
            <span className="text-gold mx-2">×</span>
            Operação auditável
            <span className="text-gold mx-2">=</span>
            <span className="text-gradient-pink">cadeira no Legislativo</span>
          </div>
          <div className="gold-line my-6" />
          <div className="grid grid-cols-2 gap-6">
            {[
              ["18", "C-level"],
              ["120+", "Promotores meta"],
              ["24", "Semanas de roadmap"],
              ["5", "Pilares de propostas"],
            ].map(([k, v]) => (
              <div key={v}>
                <div className="font-display text-3xl font-bold text-foreground">{k}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
