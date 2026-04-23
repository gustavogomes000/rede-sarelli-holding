import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Baby, HandHeart, Shield, Briefcase } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Capa,
});

const pilaresHero = [
  { icon: Heart, n: "I", t: "Defesa da Mulher", d: "Acolhimento jurídico, voz no Legislativo, rede de apoio." },
  { icon: Baby, n: "II", t: "Defesa da Criança", d: "Padrão Pingo de Gente como política pública estadual." },
  { icon: HandHeart, n: "III", t: "Famílias Vulneráveis", d: "Porta única, bolsa saúde, aluguel social emergencial." },
  { icon: Shield, n: "IV", t: "Segurança", d: "Inteligência preventiva, equipamento e mediação comunitária." },
  { icon: Briefcase, n: "V", t: "Empreendedorismo", d: "Sala 24h, crédito orientado e selo Sarelli para fornecedores." },
];

function Capa() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-cream text-foreground">
      {/* Soft brand background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-soft/40 via-cream to-gold-soft/30" />
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-pink/15 blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gold/20 blur-[120px]" />

      <section className="relative pt-28 pb-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* HERO */}
          <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
            <div className="lg:col-span-7 space-y-8">
              <div className="flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-700">
                <span className="h-px w-12 bg-pink" />
                <span className="text-xs uppercase tracking-[0.4em] text-pink-deep font-semibold">
                  Manual Estratégico · 2026
                </span>
              </div>

              <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.85] tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <span className="block text-foreground">Chama a</span>
                <span className="block text-gradient-pink">Doutora.</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
                A campanha da{" "}
                <span className="text-foreground font-semibold">Dra. Fernanda Sarelli</span> nasce de
                14 anos no Pingo de Gente: <span className="text-pink-deep">acolhimento</span>,{" "}
                <span className="text-pink-deep">eficiência</span> e propostas concretas para
                Aparecida e Goiás.
              </p>

              <div className="flex flex-wrap gap-4 pt-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                <Link
                  to="/pilares"
                  className="group inline-flex items-center gap-2 rounded-full gradient-pink-gold px-7 py-3.5 text-sm font-semibold text-white shadow-pink hover:shadow-gold transition-shadow"
                >
                  Ver os 5 pilares
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/holding"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-white/60 backdrop-blur px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-white transition"
                >
                  Conhecer a tese
                </Link>
              </div>
            </div>

            {/* Bases / atributos card */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-px gradient-pink-gold rounded-3xl opacity-30 blur-xl" />
                <div className="relative rounded-3xl bg-white border border-border p-8 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-pink-deep mb-1 font-semibold">
                        Bases da Doutora
                      </div>
                      <div className="font-display text-2xl font-bold text-foreground">
                        Quem é Fernanda Sarelli
                      </div>
                    </div>
                    <div className="h-12 w-12 rounded-full gradient-pink-gold flex items-center justify-center font-display text-xl font-bold text-white shadow-pink">
                      S
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      ["Pediatra", "Formação técnica e prática clínica de duas décadas."],
                      ["Fundadora do Pingo de Gente", "Referência regional em maternidade e infância."],
                      ["Liderança feminina", "Voz da mulher de Aparecida no Legislativo."],
                      ["Empreendedora", "Construiu uma instituição de saúde do zero."],
                    ].map(([k, v]) => (
                      <div key={k} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-pink flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-foreground text-sm">{k}</div>
                          <div className="text-sm text-muted-foreground">{v}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="gold-line my-6" />

                  <div className="grid grid-cols-3 gap-4 text-center">
                    {[
                      ["14", "Anos de Pingo"],
                      ["5", "Pilares"],
                      ["1", "Doutora"],
                    ].map(([k, v]) => (
                      <div key={v}>
                        <div className="font-display text-3xl font-bold text-gradient-pink">{k}</div>
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                          {v}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pilares strip */}
          <div className="mt-24">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs uppercase tracking-[0.3em] text-pink-deep font-semibold">
                Plataforma · 5 pilares
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {pilaresHero.map((p) => {
                const Icon = p.icon;
                return (
                  <Link
                    key={p.t}
                    to="/pilares"
                    className="group rounded-2xl bg-white/70 backdrop-blur border border-border p-5 hover:border-pink/50 hover:shadow-pink hover:-translate-y-1 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-9 w-9 rounded-xl gradient-pink-gold flex items-center justify-center">
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-mono text-xs text-pink-deep">{p.n}</span>
                    </div>
                    <div className="font-display text-lg font-bold text-foreground leading-tight">
                      {p.t}
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{p.d}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
