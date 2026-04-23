import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Check, X } from "lucide-react";

export const Route = createFileRoute("/marca")({
  component: MarcaPage,
});

const atributos = [
  { n: "01", nome: "Firmeza", desc: "Autoridade técnica de pediatra. Posicionamento sem hesitação." },
  { n: "02", nome: "Acolhimento", desc: "Calor humano de quem fundou o Pingo de Gente. Próxima, acessível." },
  { n: "03", nome: "Eficiência", desc: "Operação que entrega. Cada promessa vira indicador público." },
];

const dosDonts = [
  { do: "Falar como pediatra que vira deputada", dont: "Falar como político genérico" },
  { do: "Mostrar dados, mapa, KPI", dont: "Promessa solta sem prova" },
  { do: "Estética Cimed: rosa, dourado, premium", dont: "Cartaz amador, fonte impressa em Word" },
  { do: "Hashtag #ChamaADoutora em todo conteúdo", dont: "Slogans diferentes a cada peça" },
  { do: "Vídeo curto, vertical, legendado", dont: "Live de 1h sem roteiro" },
];

const paralelos = [
  { ref: "Cimed (João Adibe)", lic: "Marca de desejo. Mascote forte. Política pop." },
  { ref: "João Campos", lic: "Cadência diária. Estética jovem-executiva. Família como prova." },
  { ref: "Tabata Amaral", lic: "Números grandes. Transparência radical. Discurso técnico." },
];

function MarcaPage() {
  return (
    <PageShell
      tone="light"
      eyebrow="Capítulo 05 · Identidade"
      title={
        <>
          A <span className="text-gradient-pink">CEO de Aparecida</span>.
        </>
      }
      intro="A Doutora Sarelli não é candidata. É marca. Marca tem arquétipo, paleta, tom de voz, biblioteca visual e regras inegociáveis. Aqui está o playbook."
    >
      {/* Atributos */}
      <section className="mb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {atributos.map((a) => (
            <div key={a.n} className="rounded-2xl bg-card border border-border p-8 hover:shadow-pink transition">
              <div className="font-mono text-xs text-gold mb-4">{a.n}</div>
              <div className="font-display text-4xl font-bold text-foreground mb-3">{a.nome}</div>
              <p className="text-muted-foreground leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Paleta */}
      <section className="mb-20">
        <h2 className="font-display text-3xl font-bold mb-8">Paleta oficial</h2>
        <div className="grid sm:grid-cols-4 gap-4">
          {[
            { c: "#E91E63", l: "Rosa Sarelli", t: "Primária. CTAs, destaques, brand." , bg: "bg-[oklch(0.62_0.24_0)]"},
            { c: "Champagne", l: "Dourado", t: "Acento, linhas, métricas hero.", bg: "bg-[oklch(0.82_0.13_85)]" },
            { c: "#0A0A0F", l: "Preto Profundo", t: "Backgrounds operacionais.", bg: "bg-[oklch(0.14_0.01_280)]" },
            { c: "#FAF8F2", l: "Off-white quente", t: "Backgrounds humanos.", bg: "bg-[oklch(0.985_0.008_80)]" },
          ].map((p) => (
            <div key={p.l} className="rounded-2xl overflow-hidden border border-border">
              <div className={`h-32 ${p.bg}`} />
              <div className="p-4 bg-card">
                <div className="font-display font-bold text-foreground">{p.l}</div>
                <div className="font-mono text-xs text-muted-foreground">{p.c}</div>
                <div className="text-xs text-muted-foreground mt-2">{p.t}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tipografia */}
      <section className="mb-20 grid md:grid-cols-2 gap-8">
        <div className="rounded-2xl bg-card border border-border p-8">
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">Display</div>
          <div className="font-display text-6xl font-bold text-foreground mb-2">Fraunces</div>
          <p className="text-muted-foreground">Headlines, manchetes, números grandes. Sofisticada, levemente serifada — sensação de marca premium.</p>
        </div>
        <div className="rounded-2xl bg-card border border-border p-8">
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">Body</div>
          <div className="text-5xl font-semibold text-foreground mb-2">Inter</div>
          <p className="text-muted-foreground">Texto técnico, dados, dashboards. Limpa, legível, contemporânea.</p>
        </div>
      </section>

      {/* Hashtag */}
      <section className="mb-20">
        <div className="relative rounded-3xl overflow-hidden gradient-pink-gold p-12 text-center text-white">
          <div className="text-xs uppercase tracking-[0.4em] mb-4 text-white/80">Hashtag mestre</div>
          <div className="font-display text-6xl sm:text-8xl font-bold">#ChamaADoutora</div>
          <p className="mt-6 max-w-xl mx-auto text-white/90">
            Inegociável em todo conteúdo. Vira gatilho de busca, prova de movimento e KPI auditável
            do funil digital.
          </p>
        </div>
      </section>

      {/* Do's & Don'ts */}
      <section className="mb-20">
        <h2 className="font-display text-3xl font-bold mb-8">Do · Don't</h2>
        <div className="rounded-2xl border border-border overflow-hidden bg-card">
          <div className="grid grid-cols-2 bg-muted/50 px-6 py-3 text-xs uppercase tracking-wider font-medium">
            <div className="text-pink">Faça</div>
            <div className="text-muted-foreground">Não faça</div>
          </div>
          {dosDonts.map((row, i) => (
            <div key={i} className="grid grid-cols-2 px-6 py-4 border-t border-border text-sm">
              <div className="flex items-start gap-2 pr-4">
                <Check className="h-4 w-4 text-pink mt-0.5 flex-shrink-0" />
                {row.do}
              </div>
              <div className="flex items-start gap-2 pr-4 text-muted-foreground">
                <X className="h-4 w-4 mt-0.5 flex-shrink-0" />
                {row.dont}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Paralelos */}
      <section>
        <h2 className="font-display text-3xl font-bold mb-8">Referências de marca</h2>
        <div className="space-y-4">
          {paralelos.map((p) => (
            <div key={p.ref} className="grid md:grid-cols-3 gap-4 rounded-xl border border-border bg-card p-6">
              <div className="font-display text-xl font-bold text-foreground">{p.ref}</div>
              <div className="md:col-span-2 text-muted-foreground">{p.lic}</div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
