import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/funil")({
  component: FunilPage,
});

const etapas = [
  {
    n: "01",
    nome: "Prospecção",
    width: "100%",
    desc: "Promotor na rua + tráfego pago + orgânico. Lead entra com nome, telefone e geolocalização.",
    sla: "30s para cadastrar",
    metric: "10.000 leads/mês meta",
    owner: "Promotor + Marketing",
  },
  {
    n: "02",
    nome: "Qualificação Digital",
    width: "70%",
    desc: "Lead recebe link com #ChamaADoutora, vê conteúdo, engaja. Lovable rastreia clique, hashtag, retenção.",
    sla: "24h para qualificar",
    metric: "70% de conversão a qualificado",
    owner: "Marketing + CTO",
  },
  {
    n: "03",
    nome: "Retenção CS",
    width: "45%",
    desc: "CS Político liga, conversa, classifica grau de compromisso, registra dúvida e devolve material.",
    sla: "72h para 1ª ligação",
    metric: "45% confirma intenção",
    owner: "Head de CS",
  },
  {
    n: "04",
    nome: "Voto Comprometido",
    width: "30%",
    desc: "Lead diz “voto na Doutora”, registra zona/seção, entra na lista de mobilização do dia 4/10.",
    sla: "Atualização semanal",
    metric: "30% vira voto declarado",
    owner: "CS + Gerente Regional",
  },
  {
    n: "05",
    nome: "Auditoria",
    width: "100%",
    desc: "CTO audita amostra, valida origem, exporta relatório auditável para suplentes, doadores e prestação eleitoral.",
    sla: "Diário",
    metric: "100% rastreável",
    owner: "CTO / Dados",
  },
];

function FunilPage() {
  return (
    <PageShell
      eyebrow="Capítulo 08 · Conversão"
      title={
        <>
          O funil que transforma <span className="text-gradient-pink">lead em voto</span>.
        </>
      }
      intro="Cinco etapas, cada uma com SLA, dono e métrica. Auditável de ponta a ponta — do cadastro na rua até a confirmação da urna."
    >
      <div className="space-y-4">
        {etapas.map((e) => (
          <div
            key={e.n}
            className="relative rounded-2xl border border-border bg-card overflow-hidden"
          >
            {/* visual width bar */}
            <div className="absolute inset-y-0 left-0 gradient-pink-gold opacity-10" style={{ width: e.width }} />
            <div className="relative grid md:grid-cols-12 gap-6 p-6 lg:p-8">
              <div className="md:col-span-3 flex items-start gap-4">
                <div className="font-mono text-xs text-gold pt-1">{e.n}</div>
                <div>
                  <div className="font-display text-2xl font-bold text-foreground">{e.nome}</div>
                  <div className="text-xs text-muted-foreground mt-1">{e.owner}</div>
                </div>
              </div>
              <div className="md:col-span-5 text-sm text-foreground leading-relaxed">
                {e.desc}
              </div>
              <div className="md:col-span-2">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                  SLA
                </div>
                <div className="font-mono text-sm text-foreground">{e.sla}</div>
              </div>
              <div className="md:col-span-2">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                  Meta
                </div>
                <div className="font-mono text-sm text-pink">{e.metric}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {[
          ["10k", "Leads/mês captados"],
          ["3k", "Votos comprometidos meta"],
          ["100%", "Rastreabilidade"],
        ].map(([k, v]) => (
          <div key={v} className="rounded-2xl border border-border bg-card p-8 text-center">
            <div className="font-display text-6xl font-bold text-gradient-pink">{k}</div>
            <div className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">{v}</div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
