import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Baby, HandHeart, Shield, Briefcase, Instagram, Facebook } from "lucide-react";
import portrait from "@/assets/fernanda-portrait.jpg";
import logo from "@/assets/sarelli-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Holding Sarelli 2026 — Manual Estratégico · Chama a Doutora" },
      {
        name: "description",
        content:
          "Manual interativo da campanha da Dra. Fernanda Sarelli — pré-candidata a Deputada Estadual por Goiás (NOVO). Estratégia, marca, organograma e a plataforma Rede Sarelli.",
      },
      { property: "og:title", content: "Holding Sarelli 2026 — Chama a Doutora" },
      {
        property: "og:description",
        content: "Manual estratégico da campanha 2026 da Dra. Fernanda Sarelli.",
      },
    ],
  }),
  component: Capa,
});

const pilaresHero = [
  { icon: Heart, n: "I", t: "Defesa da Mulher" },
  { icon: Baby, n: "II", t: "Defesa da Criança" },
  { icon: HandHeart, n: "III", t: "Famílias Vulneráveis" },
  { icon: Shield, n: "IV", t: "Segurança" },
  { icon: Briefcase, n: "V", t: "Empreendedorismo" },
];

function Capa() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-foreground">
      {/* HERO — espelha o site oficial: rosa pastel + retrato circular */}
      <section className="relative">
        {/* Faixa rosa pastel (como no site) */}
        <div className="absolute inset-0 top-20 gradient-hero" />
        <div className="absolute top-20 left-0 right-0 h-full">
          <div className="absolute -top-10 -left-10 h-80 w-80 rounded-full bg-white/30 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-pink/30 blur-3xl" />
        </div>

        <div className="relative pt-28 pb-16">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center min-h-[80vh]">
              {/* COLUNA TEXTO */}
              <div className="lg:col-span-6 space-y-7 text-white">
                <div className="inline-flex items-center gap-2 rounded-full bg-pink px-5 py-2 shadow-pink animate-in fade-in slide-in-from-bottom-2 duration-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  <span className="text-[11px] uppercase tracking-[0.25em] text-white font-bold">
                    Pré-candidata 2026
                  </span>
                </div>

                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.9] tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
                  <span className="block text-white drop-shadow-sm">Chama a</span>
                  <span className="block text-white drop-shadow-md italic font-display">Doutora.</span>
                </h1>

                {/* Linha decorativa dourada — referência ao logo */}
                <div className="flex gap-1.5 pt-1 animate-in fade-in duration-1000 delay-200">
                  {[1,2,3,4,5,6].map((i) => (
                    <span key={i} className="h-1 w-8 rounded-full bg-gold/80" style={{ opacity: 1 - i*0.12 }} />
                  ))}
                </div>

                <p className="text-base sm:text-lg text-white/95 leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
                  Pré-candidata a Deputada Estadual por Goiás pelo{" "}
                  <span className="font-bold">Partido NOVO</span>, com compromisso real
                  com a defesa da mulher e da família.
                </p>

                <div className="flex flex-wrap gap-3 pt-3 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                  <Link
                    to="/pilares"
                    className="group inline-flex items-center gap-2 rounded-full bg-white text-pink px-7 py-3.5 text-sm font-bold shadow-xl hover:scale-105 transition-transform"
                  >
                    Ver os 5 pilares
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/holding"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 bg-white/10 backdrop-blur px-7 py-3.5 text-sm font-bold text-white hover:bg-white/20 transition"
                  >
                    Conhecer a tese
                  </Link>
                </div>

                {/* Stats inline (estilo site oficial: GO · 2026) */}
                <div className="flex items-center gap-8 pt-6 animate-in fade-in duration-1000 delay-500">
                  <div>
                    <div className="font-display text-4xl font-extrabold text-white">GO</div>
                    <div className="text-[11px] uppercase tracking-widest text-white/80 mt-0.5">Estado</div>
                  </div>
                  <div className="h-10 w-px bg-white/30" />
                  <div>
                    <div className="font-display text-4xl font-extrabold text-white">2026</div>
                    <div className="text-[11px] uppercase tracking-widest text-white/80 mt-0.5">Eleições</div>
                  </div>
                  <div className="h-10 w-px bg-white/30" />
                  <div className="flex gap-2">
                    <a
                      href="https://www.instagram.com/drafernandasarelli/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full border-2 border-white/60 flex items-center justify-center text-white hover:bg-white hover:text-pink transition"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                    <a
                      href="https://www.facebook.com/people/Dra-Fernanda-Sarelli/61554974150545/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full border-2 border-white/60 flex items-center justify-center text-white hover:bg-white hover:text-pink transition"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* COLUNA RETRATO + LOGO */}
              <div className="lg:col-span-6 flex flex-col items-center gap-8">
                <div className="relative animate-in fade-in zoom-in duration-1000">
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-full bg-pink/40 blur-3xl scale-110" />
                  {/* Anel rosa estilo site oficial */}
                  <div className="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px] rounded-full ring-glow-pink overflow-hidden">
                    <img
                      src={portrait}
                      alt="Dra. Fernanda Sarelli — pré-candidata a Deputada Estadual"
                      className="h-full w-full object-cover"
                      width={840}
                      height={840}
                    />
                  </div>
                </div>

                {/* Logo lockup oficial */}
                <div className="relative w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                  <img
                    src={logo}
                    alt="Logo Doutora Fernanda Sarelli — Chama a Doutora"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE / Bases — fundo branco */}
      <section className="relative bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-primary" />
                <span className="text-[11px] uppercase tracking-[0.35em] text-primary font-bold">
                  Sobre a Doutora
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground leading-tight">
                14 anos cuidando.<br/>
                <span className="text-gradient-pink">Agora, representando.</span>
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                A campanha da Dra. Fernanda Sarelli nasce no Pingo de Gente — instituição
                de referência em maternidade e infância em Aparecida de Goiânia. Acolhimento,
                eficiência e propostas concretas para Goiás.
              </p>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {[
                ["Pediatra", "Formação técnica e prática clínica de duas décadas."],
                ["Fundadora do Pingo de Gente", "Referência regional em maternidade e infância."],
                ["Liderança feminina", "Voz da mulher de Aparecida no Legislativo."],
                ["Empreendedora", "Construiu uma instituição de saúde do zero."],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="group rounded-2xl border border-border bg-white p-6 hover:border-primary/40 hover:shadow-pink transition-all"
                >
                  <div className="h-10 w-10 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition">
                    <span className="font-display text-lg font-bold text-primary group-hover:text-white">
                      ✦
                    </span>
                  </div>
                  <div className="font-display font-bold text-foreground text-lg">{k}</div>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PILARES — cards rosa */}
      <section className="relative bg-gradient-to-br from-pink-soft/40 to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-primary" />
              <span className="text-[11px] uppercase tracking-[0.35em] text-primary font-bold">
                Plataforma · 5 Pilares
              </span>
              <span className="h-px w-10 bg-primary" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground">
              A doutora tem <span className="text-gradient-pink">remédio</span> para cada causa.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {pilaresHero.map((p) => {
              const Icon = p.icon;
              return (
                <Link
                  key={p.t}
                  to="/pilares"
                  className="group relative rounded-2xl bg-white border-2 border-border p-6 hover:border-primary hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-pink"
                >
                  <div className="absolute -top-4 left-6 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-mono text-xs font-bold shadow-pink">
                    {p.n}
                  </div>
                  <div className="h-12 w-12 rounded-2xl gradient-pink-pastel flex items-center justify-center mt-2 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-5 w-5 text-pink-deep" />
                  </div>
                  <div className="font-display text-base font-bold text-foreground leading-tight">
                    {p.t}
                  </div>
                  <ArrowRight className="absolute bottom-4 right-4 h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
