import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/proximos-passos")({
  component: ProximosPage,
});

const checklist = [
  {
    publico: "Para a Doutora",
    items: [
      "Aprovar manual e os 5 pilares oficialmente",
      "Gravar mini-doc de 90s para a Semana 1",
      "Validar lista de suplentes prioritários",
      "Definir CTO/Dados e Chief of Staff",
    ],
  },
  {
    publico: "Para o COO (Deocleciano)",
    items: [
      "Fechar contrato com estúdio/fotógrafo até maio",
      "Abrir vagas de promotor — meta 30 contratados em 30 dias",
      "Setup do comitê físico com identidade visual aprovada",
      "Roteirizar daily de C-Level e weekly de HQ",
    ],
  },
  {
    publico: "Para a equipe digital",
    items: [
      "Implementar #ChamaADoutora em 100% das peças",
      "Publicar biblioteca visual (Notion + Drive)",
      "Lançar landing page institucional com captura de lead",
      "Iniciar build da Rede Sarelli (próxima fase)",
    ],
  },
];

function ProximosPage() {
  return (
    <PageShell
      eyebrow="Capítulo 11 · Ação"
      title={
        <>
          O que <span className="text-gradient-pink">acontece agora</span>.
        </>
      }
      intro="Manual aprovado é só o começo. Aqui fica a lista priorizada do que cada peça da holding precisa entregar nas próximas duas semanas."
    >
      <div className="grid lg:grid-cols-3 gap-6">
        {checklist.map((c) => (
          <div key={c.publico} className="rounded-2xl border border-border bg-card p-8">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">
              {c.publico}
            </div>
            <ul className="space-y-4">
              {c.items.map((it, i) => (
                <li key={it} className="flex items-start gap-3">
                  <span className="mt-1 h-5 w-5 rounded-full border border-pink flex items-center justify-center text-[10px] font-mono text-pink flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm text-foreground leading-relaxed">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-20 relative rounded-3xl overflow-hidden">
        <div className="absolute inset-0 gradient-pink-gold" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative p-12 lg:p-16 text-white">
          <div className="text-xs uppercase tracking-[0.4em] text-white/80 mb-4">
            Próxima entrega
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-bold leading-tight max-w-3xl">
            Construir a Rede Sarelli como produto real.
          </h2>
          <p className="mt-6 max-w-xl text-white/90 text-lg">
            Ao aprovar este manual, partimos para o build com Lovable Cloud: autenticação por papel,
            CRM de leads geolocalizados, dashboard executivo e integração WhatsApp.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-pink-deep hover:bg-white/90 transition"
            >
              Voltar à capa
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/rede-sarelli"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Rever a Rede Sarelli
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
