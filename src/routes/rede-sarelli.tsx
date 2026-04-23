import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Smartphone, Map, Phone, DoorOpen, BarChart3, Crown } from "lucide-react";

export const Route = createFileRoute("/rede-sarelli")({
  component: RedePage,
});

const modulos = [
  {
    icon: Smartphone,
    role: "Promotor",
    sub: "App Campo (mobile)",
    feats: ["Cadastro de lead com geolocalização", "Scripts de abordagem versionados", "Meta diária + ranking individual", "Foto + assinatura digital do lead"],
    metric: "Cadastros/dia",
    color: "from-pink to-pink-deep",
  },
  {
    icon: Map,
    role: "Gerente de Expansão",
    sub: "Painel Regional",
    feats: ["Mapa de calor por bairro/zona", "Ranking da tropa em tempo real", "Distribuição de meta por promotor", "Alerta de promotor sem cadastrar"],
    metric: "Cobertura geográfica",
    color: "from-pink to-gold",
  },
  {
    icon: Phone,
    role: "CS Político",
    sub: "Workspace de Atendimento",
    feats: ["Fila de leads quentes priorizada", "Script com bifurcação de objeções", "Status de voto: prospect → comprometido", "Gravação + transcrição opcional"],
    metric: "% compromisso de voto",
    color: "from-gold to-pink",
  },
  {
    icon: DoorOpen,
    role: "Recepção",
    sub: "Check-in do Comitê",
    feats: ["QR code de entrada", "Cadastro express em 30s", "Ficha do visitante puxada do CRM", "Agendamento de retorno"],
    metric: "Visitas registradas",
    color: "from-gold to-gold-soft",
  },
  {
    icon: BarChart3,
    role: "CTO / Dados",
    sub: "Auditoria & BI",
    feats: ["Auditoria diária da hashtag #ChamaADoutora", "Dashboard executivo público", "Detecção de fraude em cadastro", "Export para tribunal/financiador"],
    metric: "Leads auditáveis",
    color: "from-gold to-pink-deep",
  },
  {
    icon: Crown,
    role: "COO / CEO",
    sub: "War Room",
    feats: ["Relatório diário no celular da Doutora", "Decisão executável em 1 clique", "Mapa de risco + alertas", "Comparativo vs. adversários"],
    metric: "Decisões/dia",
    color: "from-pink-deep to-pink",
  },
];

function RedePage() {
  return (
    <PageShell
      eyebrow="Capítulo 07 · Plataforma"
      title={
        <>
          A <span className="text-gradient-pink">Rede Sarelli</span> é o sistema operacional.
        </>
      }
      intro="Um produto, seis perfis, um único banco de leads auditável. Cada usuário vê só o que precisa — mas tudo conversa. Esta página apresenta o produto. A construção real entra na próxima fase."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modulos.map((m) => {
          const Icon = m.icon;
          return (
            <div
              key={m.role}
              className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-pink/40 transition-all hover:-translate-y-1"
            >
              <div className={`h-1 bg-gradient-to-r ${m.color}`} />
              <div className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="h-11 w-11 rounded-xl bg-muted flex items-center justify-center group-hover:gradient-pink-gold transition-all">
                    <Icon className="h-5 w-5 text-foreground group-hover:text-white" />
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-gold font-medium">
                    Módulo
                  </div>
                </div>
                <div className="font-display text-2xl font-bold text-foreground">{m.role}</div>
                <div className="text-xs text-muted-foreground mb-5">{m.sub}</div>
                <ul className="space-y-2 mb-6">
                  {m.feats.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-gold flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                    KPI mestre
                  </div>
                  <div className="font-mono text-sm text-pink">{m.metric}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-16 rounded-3xl glass border border-white/10 p-10 text-center">
        <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">Próxima fase</div>
        <div className="font-display text-3xl sm:text-4xl font-bold text-foreground max-w-2xl mx-auto">
          Quando aprovado, construímos a Rede com{" "}
          <span className="text-gradient-pink">Lovable Cloud</span>: auth por papel, RLS, mapa,
          CRM, integração WhatsApp.
        </div>
      </div>
    </PageShell>
  );
}
