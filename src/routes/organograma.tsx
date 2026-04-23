import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { useState } from "react";
import { Crown, Cog, Database, Megaphone, Headphones, DoorOpen, Map, Users, UserCheck, Hammer } from "lucide-react";

export const Route = createFileRoute("/organograma")({
  component: OrganogramaPage,
});

type Cargo = {
  id: string;
  nivel: "C-Level" | "HQ" | "Campo";
  titulo: string;
  pessoa: string;
  icon: typeof Crown;
  missao: string;
  kpi: string;
  ferramentas: string[];
  reporta: string;
};

const cargos: Cargo[] = [
  { id: "ceo", nivel: "C-Level", titulo: "CEO Pública", pessoa: "Dra. Fernanda Sarelli", icon: Crown, missao: "Ser a marca, a voz e a face da campanha. Decisão final em narrativa.", kpi: "% intenção de voto · Net favorability", ferramentas: ["Agenda blindada", "Roteiros aprovados", "Dashboard executivo diário"], reporta: "Eleitor" },
  { id: "coo", nivel: "C-Level", titulo: "COO", pessoa: "Deocleciano Máximo", icon: Cog, missao: "Operar a holding. Garantir que tudo que foi planejado acontece no prazo.", kpi: "% entregas no SLA · Burn-rate vs. budget", ferramentas: ["Rede Sarelli admin", "Reuniões semanais", "Mapa de risco"], reporta: "CEO" },
  { id: "cos", nivel: "C-Level", titulo: "Chief of Staff", pessoa: "A definir", icon: UserCheck, missao: "Traduzir decisão da CEO em ação operacional. Guardião da agenda e dos rituais.", kpi: "Taxa de decisão executada · Cadência de rituais", ferramentas: ["Notion master", "Calendário compartilhado"], reporta: "CEO + COO" },
  { id: "cto", nivel: "C-Level", titulo: "CTO / Dados", pessoa: "A definir", icon: Database, missao: "Construir e auditar a Rede Sarelli. Dado é narrativa, dado é prova.", kpi: "Uptime da Rede · Leads auditáveis/dia", ferramentas: ["Lovable Cloud", "Dashboards", "Auditoria de hashtags"], reporta: "COO" },
  { id: "mkt", nivel: "HQ", titulo: "Diretor de Marketing", pessoa: "A definir", icon: Megaphone, missao: "Manter a estética Cimed em tudo. Calendário editorial impecável.", kpi: "Engajamento · Alcance orgânico · CTR", ferramentas: ["Roadmap de conteúdo", "Biblioteca visual", "Studio interno"], reporta: "COO" },
  { id: "cs", nivel: "HQ", titulo: "Head de CS Político", pessoa: "A definir", icon: Headphones, missao: "Converter lead quente em voto comprometido. Atendimento humano e rastreável.", kpi: "% leads qualificados · % compromisso de voto", ferramentas: ["CRM Rede Sarelli", "Scripts versionados", "Discador"], reporta: "COO" },
  { id: "rec", nivel: "HQ", titulo: "Recepção do Comitê", pessoa: "A definir", icon: DoorOpen, missao: "A primeira impressão presencial. Check-in cordial e cadastro impecável.", kpi: "% visitas registradas · Tempo de check-in", ferramentas: ["App Recepção", "QR code de entrada"], reporta: "Chief of Staff" },
  { id: "exp", nivel: "Campo", titulo: "Gerente de Expansão", pessoa: "Múltiplos", icon: Map, missao: "Comandar uma região. Ranking de tropa, mapa de calor, meta semanal.", kpi: "Leads/promotor · Cobertura geográfica", ferramentas: ["Mapa de calor", "Ranking", "Dashboard regional"], reporta: "COO" },
  { id: "sup", nivel: "Campo", titulo: "Suplentes / Lideranças", pessoa: "A formar", icon: Users, missao: "Multiplicar a presença da Doutora em nichos e bairros estratégicos.", kpi: "Eventos/mês · Leads atribuídos", ferramentas: ["App Liderança", "Material de campanha"], reporta: "Gerente de Expansão" },
  { id: "pro", nivel: "Campo", titulo: "Promotor de Campo", pessoa: "120+ pessoas", icon: Hammer, missao: "Cadastrar leads, distribuir material, captar voto na rua. Ponta da operação.", kpi: "Cadastros/dia · Conversão para qualificado", ferramentas: ["App Promotor (mobile)", "Scripts de abordagem"], reporta: "Suplente / Liderança" },
];

function OrganogramaPage() {
  const [active, setActive] = useState<Cargo>(cargos[0]);

  const grupos = ["C-Level", "HQ", "Campo"] as const;

  return (
    <PageShell
      eyebrow="Capítulo 04 · Estrutura"
      title={
        <>
          O <span className="text-gradient-pink">organograma</span> da holding.
        </>
      }
      intro="Toque em qualquer cargo para ver missão, KPI, ferramentas e a quem reporta. Cada caixa é uma cadeira com dono, número e responsabilidade."
    >
      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 space-y-8">
          {grupos.map((g) => (
            <div key={g}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold">{g}</span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {cargos.filter((c) => c.nivel === g).map((c) => {
                  const Icon = c.icon;
                  const isActive = active.id === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setActive(c)}
                      className={`text-left rounded-xl border p-4 transition-all ${
                        isActive
                          ? "border-pink bg-pink/5 shadow-pink"
                          : "border-border bg-card hover:border-gold/50"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          isActive ? "gradient-pink-gold" : "bg-muted"
                        }`}>
                          <Icon className={`h-5 w-5 ${isActive ? "text-white" : "text-foreground"}`} />
                        </div>
                        <div className="min-w-0">
                          <div className="font-display font-semibold text-foreground leading-tight">
                            {c.titulo}
                          </div>
                          <div className="text-xs text-muted-foreground truncate">{c.pessoa}</div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">
              {active.nivel}
            </div>
            <h3 className="font-display text-3xl font-bold text-foreground">{active.titulo}</h3>
            <div className="text-sm text-muted-foreground mt-1">{active.pessoa}</div>

            <div className="gold-line my-6" />

            <div className="space-y-5">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-pink mb-1.5">Missão</div>
                <p className="text-foreground leading-relaxed">{active.missao}</p>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-pink mb-1.5">KPI</div>
                <p className="text-foreground font-mono text-sm">{active.kpi}</p>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-pink mb-1.5">
                  Ferramentas
                </div>
                <ul className="space-y-1.5">
                  {active.ferramentas.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="h-1 w-1 rounded-full bg-gold" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-pink mb-1.5">
                  Reporta a
                </div>
                <p className="text-foreground">{active.reporta}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
