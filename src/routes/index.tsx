import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Heart,
  Baby,
  HandHeart,
  Scale,
  Shield,
  Stethoscope,
  Instagram,
  Facebook,
  Cross,
  Award,
  Users,
} from "lucide-react";
import portrait from "@/assets/fernanda-portrait.jpg";
import logo from "@/assets/sarelli-logo.png";
import { CountdownEleicao } from "@/components/CountdownEleicao";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Fernanda Sarelli — Pré-candidata a Deputada Estadual · GO 2026" },
      {
        name: "description",
        content:
          "Advogada criminalista, empresária e cristã. Pré-candidata a Deputada Estadual por Goiás pelo Partido NOVO. Defesa da mulher, da criança e das famílias em vulnerabilidade.",
      },
      { property: "og:title", content: "Chama a Doutora — Fernanda Sarelli 2026" },
      {
        property: "og:description",
        content:
          "Mais de 100 mil famílias acolhidas em uma década. Advogada criminalista pré-candidata a Deputada Estadual por Goiás (NOVO).",
      },
    ],
  }),
  component: Capa,
});

const pilares = [
  {
    icon: Heart,
    n: "I",
    t: "Defesa da Mulher",
    d: "Combate à violência doméstica, saúde feminina e igualdade de oportunidades no mercado de trabalho.",
  },
  {
    icon: Baby,
    n: "II",
    t: "Proteção à Criança",
    d: "Direitos da criança e do adolescente, combate ao abuso infantil e acesso pleno à saúde e educação.",
  },
  {
    icon: HandHeart,
    n: "III",
    t: "Família em Vulnerabilidade",
    d: "Assistência social efetiva, geração de renda, moradia digna e apoio a famílias em situação de risco.",
  },
  {
    icon: Scale,
    n: "IV",
    t: "Igualdade & Políticas Públicas",
    d: "Promoção da igualdade, inclusão social e dignidade para toda a população goiana.",
  },
  {
    icon: Shield,
    n: "V",
    t: "Segurança Pública",
    d: "Ações integradas para a segurança pública, proteção das comunidades e bem-estar das famílias goianas.",
  },
  {
    icon: Stethoscope,
    n: "VI",
    t: "Saúde Pública",
    d: "Sistema de saúde acessível e de qualidade para todos os goianos, com foco em prevenção e atendimento humano.",
  },
];

function Capa() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-foreground">
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 top-20 gradient-hero" />
        <div className="absolute top-20 left-0 right-0 h-full">
          <div className="absolute -top-10 -left-10 h-80 w-80 rounded-full bg-white/30 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-pink/30 blur-3xl" />
        </div>

        <div className="relative pt-28 pb-16">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center min-h-[80vh]">
              {/* TEXTO */}
              <div className="lg:col-span-6 space-y-7 text-white">
                <div className="inline-flex items-center gap-2 rounded-full bg-pink px-5 py-2 shadow-pink animate-in fade-in slide-in-from-bottom-2 duration-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  <span className="text-[11px] uppercase tracking-[0.25em] text-white font-bold">
                    Pré-candidata · Deputada Estadual GO · NOVO
                  </span>
                </div>

                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.9] tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
                  <span className="block text-white drop-shadow-sm">Chama a</span>
                  <span className="block text-white drop-shadow-md italic font-display">Doutora.</span>
                </h1>

                <div className="flex gap-1.5 pt-1 animate-in fade-in duration-1000 delay-200">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <span
                      key={i}
                      className="h-1 w-8 rounded-full bg-gold/80"
                      style={{ opacity: 1 - i * 0.12 }}
                    />
                  ))}
                </div>

                <p className="text-base sm:text-lg text-white/95 leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
                  <span className="font-bold">Advogada criminalista</span>, empresária, mãe, esposa
                  e cristã. Pré-candidata a Deputada Estadual por Goiás pelo{" "}
                  <span className="font-bold">Partido NOVO</span>, com compromisso real com a
                  defesa da mulher, da criança e das famílias em vulnerabilidade.
                </p>

                <div className="flex flex-wrap gap-3 pt-3 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                  <Link
                    to="/pilares"
                    className="group inline-flex items-center gap-2 rounded-full bg-white text-pink px-7 py-3.5 text-sm font-bold shadow-xl hover:scale-105 transition-transform"
                  >
                    Conheça as bandeiras
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="flex items-center gap-8 pt-6 animate-in fade-in duration-1000 delay-500">
                  <div>
                    <div className="font-display text-4xl font-extrabold text-white">GO</div>
                    <div className="text-[11px] uppercase tracking-widest text-white/80 mt-0.5">
                      Estado
                    </div>
                  </div>
                  <div className="h-10 w-px bg-white/30" />
                  <div>
                    <div className="font-display text-4xl font-extrabold text-white">2026</div>
                    <div className="text-[11px] uppercase tracking-widest text-white/80 mt-0.5">
                      Eleições
                    </div>
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

              {/* RETRATO + LOGO */}
              <div className="lg:col-span-6 flex flex-col items-center gap-8">
                <div className="relative animate-in fade-in zoom-in duration-1000">
                  <div className="absolute inset-0 rounded-full bg-pink/40 blur-3xl scale-110" />
                  <div className="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px] rounded-full ring-glow-pink overflow-hidden">
                    <img
                      src={portrait}
                      alt="Dra. Fernanda Sarelli — advogada criminalista e pré-candidata a Deputada Estadual por Goiás"
                      className="h-full w-full object-cover"
                      width={840}
                      height={840}
                    />
                  </div>
                </div>

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

      {/* CRONÔMETRO */}
      <CountdownEleicao />

      {/* SOBRE A DOUTORA — biografia oficial */}
      <section className="relative bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-primary" />
                <span className="text-[11px] uppercase tracking-[0.35em] text-primary font-bold">
                  Quem é a Doutora
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground leading-tight">
                Uma década cuidando.<br />
                <span className="text-gradient-pink">Agora, representando.</span>
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Nascida em <strong className="text-foreground">Porangatu</strong> e cidadã
                aparecidense por reconhecimento à sua trajetória, a Dra. Fernanda Sarelli
                construiu uma carreira marcada pela{" "}
                <strong className="text-foreground">defesa da justiça</strong>, pelo
                compromisso social e pelo cuidado com as pessoas.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Em uma década de atuação, projetos e ações apoiados por ela já alcançaram{" "}
                <strong className="text-pink">mais de 100 mil famílias</strong> em situação de
                vulnerabilidade em Goiás e em diversas regiões do Brasil.
              </p>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Scale,
                  k: "Advogada Criminalista",
                  v: "Conhecedora da lei, preparada para fazer valer os direitos de quem mais precisa.",
                },
                {
                  icon: Award,
                  k: "Empresária",
                  v: "Trajetória empreendedora bem-sucedida na advocacia em Goiás.",
                },
                {
                  icon: Users,
                  k: "Mãe, Esposa & Mulher Goiana",
                  v: "Voz da família goiana com vivência prática nas pautas que defende.",
                },
                {
                  icon: Cross,
                  k: "Cristã",
                  v: "Valores cristãos orientando uma caminhada de serviço e responsabilidade.",
                },
              ].map(({ icon: Icon, k, v }) => (
                <div
                  key={k}
                  className="group rounded-2xl border border-border bg-white p-6 hover:border-primary/40 hover:shadow-pink transition-all"
                >
                  <div className="h-10 w-10 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary transition">
                    <Icon className="h-5 w-5 text-primary group-hover:text-white" />
                  </div>
                  <div className="font-display font-bold text-foreground text-lg leading-tight">
                    {k}
                  </div>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BANDEIRAS / PILARES — com descrição completa */}
      <section className="relative bg-gradient-to-br from-pink-soft/40 to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-primary" />
              <span className="text-[11px] uppercase tracking-[0.35em] text-primary font-bold">
                Nossas Bandeiras · 6 Pilares
              </span>
              <span className="h-px w-10 bg-primary" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground">
              Compromissos institucionais por um{" "}
              <span className="text-gradient-pink">Goiás mais justo</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Pilares fundamentais que guiam a atuação da Dra. Fernanda no Legislativo Estadual.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pilares.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.t}
                  className="group relative rounded-2xl bg-white border-2 border-border p-7 hover:border-primary/60 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-pink"
                >
                  <div className="absolute -top-4 left-7 h-9 w-9 rounded-full bg-primary text-white flex items-center justify-center font-mono text-xs font-bold shadow-pink">
                    {p.n}
                  </div>
                  <div className="h-14 w-14 rounded-2xl gradient-pink-pastel flex items-center justify-center mt-2 mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-pink-deep" />
                  </div>
                  <div className="font-display text-xl font-bold text-foreground leading-tight mb-2">
                    {p.t}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
