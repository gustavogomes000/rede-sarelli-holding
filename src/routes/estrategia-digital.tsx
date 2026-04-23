import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Megaphone,
  Heart,
  Users,
  Target,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  Camera,
  Mic,
  Video,
  FileText,
  Instagram,
  Lightbulb,
  Layers,
  Compass,
} from "lucide-react";

export const Route = createFileRoute("/estrategia-digital")({
  head: () => ({
    meta: [
      { title: "Estratégia Digital · Chama a Doutora — Sarelli 2026" },
      {
        name: "description",
        content:
          "A abordagem digital da pré-campanha de Dra. Fernanda Sarelli: voz autêntica, autoridade técnica e mobilização afetiva para Goiás 2026.",
      },
    ],
  }),
  component: EstrategiaDigital,
});

const pilaresEstrategia = [
  {
    icon: ShieldCheck,
    titulo: "Autoridade Técnica",
    descricao:
      "Posicionar a Doutora como referência jurídica em direito da mulher, da criança e da família — não como política tradicional, mas como advogada que entende e resolve.",
    palavras: ["Advogada Criminalista", "Especialista", "Voz da Lei"],
  },
  {
    icon: Heart,
    titulo: "Conexão Afetiva",
    descricao:
      "Conteúdos que humanizam: bastidores, histórias de mulheres atendidas (com consentimento), causas concretas e o cotidiano de quem 'chama a Doutora' quando precisa.",
    palavras: ["Empatia", "Histórias Reais", "Proximidade"],
  },
  {
    icon: Megaphone,
    titulo: "Mensagem Clara",
    descricao:
      "Uma única promessa, repetida com consistência: defender a mulher, proteger a criança, fortalecer a família. Sem jargão, sem politiquês — linguagem do povo.",
    palavras: ["Simples", "Direto", "Memorável"],
  },
  {
    icon: Users,
    titulo: "Mobilização em Rede",
    descricao:
      "Transformar seguidores em multiplicadores. Cada apoiadora vira voz da campanha — grupos de WhatsApp, lives, embaixadoras locais em municípios estratégicos de Goiás.",
    palavras: ["Comunidade", "Embaixadoras", "Capilaridade"],
  },
];

const porques = [
  {
    n: "01",
    titulo: "Porque o digital é o palanque do nosso tempo",
    texto:
      "Em Goiás, mais de 85% do eleitorado feminino acessa redes sociais diariamente. É no celular que se forma opinião, se cria identificação e se decide o voto.",
  },
  {
    n: "02",
    titulo: "Porque a marca Sarelli já existe",
    texto:
      "Mais de uma década atendendo causas de mulheres e crianças construiu um capital de confiança real. A campanha digital amplifica o que já é verdade.",
  },
  {
    n: "03",
    titulo: "Porque precisamos furar a bolha tradicional",
    texto:
      "A política goiana é dominada por velhos nomes e velhas práticas. O digital é o caminho mais barato, rápido e direto para apresentar uma alternativa nova.",
  },
  {
    n: "04",
    titulo: "Porque mulher fala com mulher",
    texto:
      "A maior parte do nosso público-alvo se reconhece em uma voz feminina, técnica e firme. Isso não se compra com TV — se conquista com presença digital constante.",
  },
];

function EstrategiaDigital() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-background via-pink-50/20 to-background pt-24 pb-32">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 -left-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-pink-300/20 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-6 lg:px-8 pt-12 pb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs font-bold text-primary tracking-[0.3em]">
              CAPÍTULO 02
            </span>
            <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-primary/60 to-transparent" />
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-foreground leading-[0.95] tracking-tight mb-6">
            A abordagem
            <br />
            <span className="bg-gradient-to-r from-primary via-pink-500 to-rose-500 bg-clip-text text-transparent">
              digital
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-foreground/70 max-w-3xl leading-relaxed font-light">
            Como a pré-campanha de Dra. Fernanda Sarelli vai conquistar Goiás{" "}
            <span className="font-semibold text-foreground">pelas telas</span> —
            antes mesmo de pisar no palanque.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {["Autoridade", "Afeto", "Clareza", "Mobilização"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full border border-primary/20 bg-white/80 backdrop-blur text-sm font-semibold text-primary shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* O PORQUÊ */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 mb-24">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-primary font-bold">
              Por que digital
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-foreground">
            Por que esse é{" "}
            <span className="text-primary">o caminho</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {porques.map((p) => (
            <article
              key={p.n}
              className="group relative bg-white rounded-2xl p-7 border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-6 right-6 font-mono text-5xl font-black text-primary/10 group-hover:text-primary/20 transition">
                {p.n}
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3 pr-16 leading-tight">
                {p.titulo}
              </h3>
              <p className="text-foreground/70 leading-relaxed">{p.texto}</p>
            </article>
          ))}
        </div>
      </section>

      {/* OS 4 PILARES DA ABORDAGEM */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 mb-24">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-4">
            <Target className="h-4 w-4 text-primary" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-primary font-bold">
              4 Pilares
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-foreground mb-3">
            A abordagem em <span className="text-primary">4 movimentos</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Cada peça, cada vídeo, cada post passa por estes quatro filtros.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {pilaresEstrategia.map((pilar, i) => {
            const Icon = pilar.icon;
            return (
              <article
                key={pilar.titulo}
                className="group relative bg-gradient-to-br from-white to-pink-50/30 rounded-3xl p-8 border border-border shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
              >
                <div className="flex items-start gap-5 mb-5">
                  <div className="shrink-0 h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center text-white shadow-lg shadow-primary/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold text-primary tracking-[0.2em]">
                      MOVIMENTO 0{i + 1}
                    </span>
                    <h3 className="font-display text-2xl font-black text-foreground leading-tight">
                      {pilar.titulo}
                    </h3>
                  </div>
                </div>
                <p className="text-foreground/70 leading-relaxed mb-5">
                  {pilar.descricao}
                </p>
                <div className="flex flex-wrap gap-2">
                  {pilar.palavras.map((p) => (
                    <span
                      key={p}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* RESULTADO ESPERADO */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 mb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-pink-500 to-rose-500 p-10 sm:p-14 text-white shadow-2xl shadow-primary/30">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <div className="flex items-center gap-2 mb-5">
              <TrendingUp className="h-5 w-5" />
              <span className="text-[11px] uppercase tracking-[0.35em] font-bold">
                Resultado Esperado
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black leading-tight mb-6">
              Sair da pré-campanha com uma{" "}
              <span className="underline decoration-white/40 decoration-4 underline-offset-4">
                base digital ativa
              </span>{" "}
              em todas as regiões de Goiás.
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 mt-10">
              {[
                { n: "+50k", l: "seguidores qualificados" },
                { n: "+200", l: "embaixadoras locais" },
                { n: "100%", l: "regiões de Goiás cobertas" },
              ].map((m) => (
                <div key={m.l} className="border-l-2 border-white/40 pl-4">
                  <div className="font-display text-4xl font-black">{m.n}</div>
                  <div className="text-sm text-white/80 mt-1">{m.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA PRÓXIMA PÁGINA */}
      <section className="mx-auto max-w-4xl px-6 lg:px-8">
        <Link
          to="/"
          className="group block relative overflow-hidden rounded-2xl border-2 border-dashed border-primary/30 bg-white/60 backdrop-blur p-8 hover:border-primary hover:bg-white transition-all"
        >
          <div className="flex items-center justify-between gap-6">
            <div>
              <span className="font-mono text-xs font-bold text-primary tracking-[0.3em]">
                PRÓXIMO CAPÍTULO · 03
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-foreground mt-2">
                Cronograma digital detalhado
              </h3>
              <p className="text-foreground/60 mt-1">
                As fases, os marcos e o calendário até a eleição.
              </p>
            </div>
            <div className="shrink-0 h-14 w-14 rounded-full bg-primary text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="h-6 w-6" />
            </div>
          </div>
        </Link>
      </section>
    </main>
  );
}
