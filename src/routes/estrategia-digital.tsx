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

      {/* CARD MANIFESTO — POR QUE ESSA ESTRATÉGIA */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 mb-24">
        <div className="relative overflow-hidden rounded-3xl bg-foreground text-background p-10 sm:p-14 shadow-2xl">
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 mb-6">
              <Lightbulb className="h-4 w-4 text-primary" />
              <span className="text-[11px] uppercase tracking-[0.35em] font-bold text-primary">
                Por que justamente essa estratégia
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-black leading-[1.05] mb-8 max-w-3xl">
              Porque a Doutora{" "}
              <span className="bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
                já é conhecida onde importa
              </span>
              {" "}— falta apenas{" "}
              <span className="italic text-primary">amplificar com método</span>.
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <div>
                <div className="font-mono text-[10px] tracking-[0.3em] text-primary mb-2">
                  O DIAGNÓSTICO
                </div>
                <p className="text-background/80 leading-relaxed text-lg">
                  Dra. Fernanda Sarelli tem 10+ anos de atuação real, milhares
                  de famílias atendidas e uma reputação construída na trincheira
                  do dia a dia. O que falta não é substância — é{" "}
                  <span className="font-semibold text-background">
                    sistematização digital
                  </span>
                  .
                </p>
              </div>

              <div>
                <div className="font-mono text-[10px] tracking-[0.3em] text-primary mb-2">
                  A APOSTA
                </div>
                <p className="text-background/80 leading-relaxed text-lg">
                  Em vez de gastar com mídia tradicional cara, vamos construir
                  uma{" "}
                  <span className="font-semibold text-background">
                    máquina digital própria
                  </span>{" "}
                  — barata, mensurável, escalável e que continua trabalhando
                  por ela 24h por dia, todos os dias até a eleição.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-background/10">
              <p className="font-display text-xl sm:text-2xl text-background/90 leading-snug">
                "Não é sobre aparecer mais. É sobre{" "}
                <span className="text-primary font-bold">aparecer certo</span>,
                para a pessoa certa, na hora em que ela está decidindo em quem
                acreditar."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMO VAMOS CONSTRUIR A IMAGEM */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 mb-24">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-4">
            <Compass className="h-4 w-4 text-primary" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-primary font-bold">
              Construção da Imagem
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-foreground mb-3">
            Como vamos <span className="text-primary">construir a imagem</span> dela
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Cinco camadas que se sobrepõem para formar uma persona pública
            coerente, memorável e impossível de copiar.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              n: "01",
              titulo: "A Doutora chega antes da política",
              texto:
                "Ela não pede voto — ela resolve um problema. Cada conteúdo entrega algo útil de verdade: um direito que a mulher não sabia que tinha, um passo prático em caso de violência, uma orientação que economiza meses de sofrimento. Quando o eleitor descobrir que ela é candidata, já vai dever favor — e voto se paga com voto.",
            },
            {
              n: "02",
              titulo: "Transformar clientes em testemunhas",
              texto:
                "Em dez anos, milhares de mulheres saíram do escritório dela com a vida reconstruída. Essa é a maior base de dados afetiva da campanha — e ninguém pode replicar. Vamos ativar essa rede com cuidado cirúrgico: depoimentos com sigilo absoluto, encontros regionais, um pacto silencioso de quem foi salva e agora salva a Doutora de volta.",
            },
            {
              n: "03",
              titulo: "Autoridade que vem do caso real",
              texto:
                "Em vez de discurso, jurisprudência viva: 'esta semana atendemos uma mulher na situação X — a lei diz Y, e foi assim que resolvemos'. Educar enquanto humaniza. A Doutora vira referência prática, não promessa política.",
            },
            {
              n: "04",
              titulo: "Multiplicadoras locais por município",
              texto:
                "Identificar em cada cidade de Goiás 3 a 5 mulheres respeitadas — pastoras, líderes comunitárias, ex-clientes, professoras — e dar a elas conteúdo pronto, formação curta e canal direto. Elas levam a Doutora onde nenhum impulsionamento chega.",
            },
            {
              n: "05",
              titulo: "Sussurrar onde todos gritam",
              texto:
                "A política goiana de 2026 vai ser ensurdecedora — homens berrando promessas, ataques cruzados, ruído. A Doutora faz o oposto: vídeo de um minuto, luz natural, voz baixa, uma única ideia bem dita. Em terreno saturado de barulho, silêncio com substância vira o conteúdo mais compartilhado da timeline. É contraintuitivo — e por isso funciona.",
            },
          ].map((item) => (
            <article
              key={item.n}
              className="group flex gap-6 items-start bg-white rounded-2xl p-6 border border-border hover:border-primary/40 hover:shadow-lg transition-all"
            >
              <div className="shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center text-white font-display text-2xl font-black shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
                {item.n}
              </div>
              <div className="flex-1 pt-1">
                <h3 className="font-display text-xl font-bold text-foreground mb-1">
                  {item.titulo}
                </h3>
                <p className="text-foreground/70 leading-relaxed">{item.texto}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PRODUTOS DIGITAIS QUE VAMOS CRIAR */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 mb-24">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-4">
            <Layers className="h-4 w-4 text-primary" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-primary font-bold">
              Produtos Digitais
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-foreground mb-3">
            O que vamos <span className="text-primary">construir</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Cada produto cumpre um papel claro no funil. Juntos, formam o
            ecossistema digital da pré-campanha.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: Instagram, nome: "Instagram da Doutora", papel: "Vitrine principal", texto: "Feed curado, stories diários, reels de 30s com cortes das lives e respostas jurídicas rápidas." },
            { icon: Video, nome: "Cortes para TikTok & Shorts", papel: "Alcance frio", texto: "Reaproveitar lives e entrevistas em pílulas virais. Tema: justiça, mulher, casos reais comentados." },
            { icon: Mic, nome: "Podcast 'Chama a Doutora'", papel: "Profundidade", texto: "Episódios quinzenais com convidadas: vítimas, mães, juristas, pastoras. Conteúdo longo que vira cortes." },
            { icon: Camera, nome: "Banco de Mídia", papel: "Matéria-prima", texto: "Cobertura fotográfica de reuniões, encontros, visitas e materiais produzidos no dia a dia. Cada agenda vira combustível visual para semanas de conteúdo." },
            { icon: FileText, nome: "Newsletter & WhatsApp", papel: "Comunidade Forte", texto: "Lista de e-mails e grupos de WhatsApp regionalizados — não para falar com seguidores, mas para construir uma comunidade engajada que conversa entre si e amplifica a Doutora." },
            { icon: Megaphone, nome: "Site Oficial", papel: "Evolução do que já existe", texto: "Partir do site atual da Doutora e elevá-lo: identidade renovada, bandeiras destacadas, captação de apoio e SEO para quem busca 'advogada da mulher em Goiás'." },
          ].map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.nome}
                className="group relative bg-white rounded-2xl p-6 border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-pink-500 opacity-0 group-hover:opacity-100 transition" />
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="font-mono text-[10px] tracking-[0.25em] text-primary/70 font-bold mb-1">
                  {p.papel.toUpperCase()}
                </div>
                <h3 className="font-display text-lg font-black text-foreground mb-2 leading-tight">
                  {p.nome}
                </h3>
                <p className="text-sm text-foreground/65 leading-relaxed">
                  {p.texto}
                </p>
              </article>
            );
          })}
        </div>
      </section>

    </main>
  );
}
