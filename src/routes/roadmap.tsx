import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/roadmap")({
  component: RoadmapPage,
});

const fases = [
  { n: "F1", nome: "Awareness", periodo: "Abr–Mai", cor: "from-pink/30 to-pink/10", obj: "Existir no radar. A Doutora aparece, com estética premium, no feed de quem ainda não sabe o nome." },
  { n: "F2", nome: "Autoridade", periodo: "Jun–Jul", cor: "from-pink/40 to-gold/20", obj: "Fixar o que ela entende. Conteúdo técnico, dados, casos do Pingo de Gente, especialistas de apoio." },
  { n: "F3", nome: "Movimento", periodo: "Ago", cor: "from-pink/50 to-gold/30", obj: "Mostrar tropa. Eventos, lideranças, promotores na rua, hashtag explodindo." },
  { n: "F4", nome: "Hard Sell", periodo: "Set", cor: "from-pink/70 to-gold/50", obj: "Pedir o voto. Número, urna, comparativo, depoimento, CS no telefone." },
  { n: "F5", nome: "Grande Dia", periodo: "Out", cor: "gradient-pink-gold", obj: "Mobilização total. Boca de urna digital, fiscais, transporte, celebração." },
];

const semanas = [
  { s: 1, tema: "Quem é a Doutora", peca: "Mini-doc 90s", canal: "IG Reels + YT Shorts", kpi: "200k views" },
  { s: 2, tema: "Por que pediatra vira deputada", peca: "Carrossel 8 cards", canal: "IG Feed", kpi: "10k saves" },
  { s: 3, tema: "Defesa da Mulher", peca: "Live com mulheres atendidas", canal: "IG Live", kpi: "5k espectadores" },
  { s: 4, tema: "Defesa da Criança", peca: "Vídeo Pingo de Gente", canal: "IG/TikTok", kpi: "150k views" },
  { s: 5, tema: "O que é a Holding", peca: "Reel explicando bastidor", canal: "IG Reels", kpi: "300k views" },
  { s: 6, tema: "Famílias Vulneráveis", peca: "Depoimento + dado", canal: "Carrossel", kpi: "8k saves" },
  { s: 7, tema: "Segurança", peca: "Visita PM + roteiro", canal: "Reels", kpi: "200k views" },
  { s: 8, tema: "Empreendedorismo", peca: "Série 3 episódios", canal: "Multi-canal", kpi: "1M alcance" },
];

function RoadmapPage() {
  return (
    <PageShell
      eyebrow="Capítulo 06 · Roadmap"
      title={
        <>
          24 semanas até <span className="text-gradient-pink">4 de outubro</span>.
        </>
      }
      intro="Cinco fases costuradas. Cada semana com tema, peça, canal e KPI. Sem improviso, sem buraco no calendário."
    >
      {/* Phases timeline */}
      <div className="mb-20">
        <div className="grid md:grid-cols-5 gap-3">
          {fases.map((f, i) => (
            <div key={f.n} className="relative">
              <div className={`relative rounded-2xl bg-gradient-to-br ${f.cor} border border-border p-6 h-full`}>
                <div className="font-mono text-xs text-gold mb-2">{f.n} · {f.periodo}</div>
                <div className="font-display text-2xl font-bold text-foreground mb-3">{f.nome}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.obj}</p>
              </div>
              {i < fases.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 w-3 h-px bg-gold/40 z-10" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Weekly content */}
      <div>
        <div className="flex items-end justify-between mb-6">
          <h2 className="font-display text-3xl font-bold text-foreground">
            Planejamento semanal · S1 → S8
          </h2>
          <div className="text-xs text-muted-foreground hidden sm:block">
            Semanas 9–24 detalhadas no doc operacional
          </div>
        </div>
        <div className="rounded-2xl border border-border overflow-hidden bg-card">
          <div className="grid grid-cols-12 bg-muted/40 px-6 py-3 text-[10px] uppercase tracking-wider font-medium text-muted-foreground">
            <div className="col-span-1">Sem</div>
            <div className="col-span-4">Tema</div>
            <div className="col-span-3">Peça</div>
            <div className="col-span-2">Canal</div>
            <div className="col-span-2">KPI</div>
          </div>
          {semanas.map((s) => (
            <div
              key={s.s}
              className="grid grid-cols-12 px-6 py-4 border-t border-border text-sm hover:bg-muted/20 transition"
            >
              <div className="col-span-1 font-mono text-gold">S{s.s}</div>
              <div className="col-span-4 font-medium text-foreground">{s.tema}</div>
              <div className="col-span-3 text-muted-foreground">{s.peca}</div>
              <div className="col-span-2 text-muted-foreground">{s.canal}</div>
              <div className="col-span-2 font-mono text-xs text-pink">{s.kpi}</div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
