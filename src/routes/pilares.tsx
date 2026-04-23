import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Heart, Baby, HandHeart, Shield, Briefcase } from "lucide-react";

export const Route = createFileRoute("/pilares")({
  component: PilaresPage,
});

const pilares = [
  {
    icon: Heart,
    name: "Defesa da Mulher",
    tag: "Pilar I",
    narrativa:
      "A mulher de Aparecida e da região é a primeira clientela da Doutora. Acolhimento jurídico, rede de apoio e voz no Legislativo.",
    propostas: [
      "Centro de Acolhimento Jurídico itinerante",
      "Linha direta com a Defensoria via gabinete",
      "Programa Mulher Empreendedora — microcrédito orientado",
    ],
    prova: "Atuação de 14 anos no Pingo de Gente — referência regional em maternidade.",
  },
  {
    icon: Baby,
    name: "Defesa da Criança",
    tag: "Pilar II",
    narrativa:
      "A primeira infância define o resto da vida. O DNA da Doutora — pediatra e fundadora do Pingo de Gente — entra como política pública.",
    propostas: [
      "Creches com padrão Pingo de Gente para a rede pública",
      "Programa estadual de pré-natal humanizado",
      "Combate à fila de pediatras no SUS regional",
    ],
    prova: "Mais de uma geração de crianças atendida na clínica em Aparecida.",
  },
  {
    icon: HandHeart,
    name: "Famílias Vulneráveis",
    tag: "Pilar III",
    narrativa:
      "Famílias em vulnerabilidade precisam de uma porta de entrada única — não de 12 secretarias diferentes.",
    propostas: [
      "Cadastro Único Sarelli — porta única estadual",
      "Bolsa Saúde para famílias com criança em tratamento",
      "Programa de aluguel social de emergência",
    ],
    prova: "Rede de atendimento social construída ao longo de duas décadas em Goiás.",
  },
  {
    icon: Shield,
    name: "Segurança",
    tag: "Pilar IV",
    narrativa:
      "Segurança com inteligência: investimento em prevenção, equipamento para a tropa e escuta ativa do bairro.",
    propostas: [
      "Câmeras + IA em pontos críticos de Aparecida",
      "Auxílio-equipamento para policiais militares",
      "Programa de mediação comunitária pré-conflito",
    ],
    prova: "Diálogo permanente com lideranças de segurança da região metropolitana.",
  },
  {
    icon: Briefcase,
    name: "Empreendedorismo",
    tag: "Pilar V",
    narrativa:
      "O pequeno empreendedor sustenta Aparecida. A Holding entrega menos burocracia e mais crédito direto.",
    propostas: [
      "Sala do Empreendedor 24h online no gabinete",
      "Linha de crédito orientado em parceria com BNDES",
      "Selo Sarelli para fornecedores locais do estado",
    ],
    prova: "Rede de associadas ao Pingo de Gente com mulheres empreendedoras locais.",
  },
];

function PilaresPage() {
  return (
    <PageShell
      eyebrow="Capítulo 03 · Plataforma"
      title={
        <>
          Cinco <span className="text-gradient-pink">pilares</span>, uma só Doutora.
        </>
      }
      intro="A plataforma da Dra. Fernanda Sarelli não é uma lista genérica de bandeiras. Cada pilar nasce de 14 anos de prática real no Pingo de Gente e vira proposta concreta com KPI público."
    >
      <div className="space-y-6">
        {pilares.map((p, i) => {
          const Icon = p.icon;
          return (
            <article
              key={p.name}
              className="group relative grid md:grid-cols-12 gap-8 rounded-2xl border border-border bg-card p-8 lg:p-10 hover:border-pink/40 transition-all"
            >
              <div className="md:col-span-3 flex md:flex-col gap-4 items-start">
                <div className="h-14 w-14 rounded-2xl gradient-pink-gold flex items-center justify-center shadow-pink flex-shrink-0">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-1">
                    {p.tag}
                  </div>
                  <h3 className="font-display text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                    {p.name}
                  </h3>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-3">
                  Narrativa
                </div>
                <p className="text-foreground leading-relaxed">{p.narrativa}</p>

                <div className="mt-6 rounded-xl bg-pink/5 border border-pink/20 p-4">
                  <div className="text-[10px] uppercase tracking-wider text-pink mb-1">
                    Prova viva
                  </div>
                  <p className="text-sm text-foreground">{p.prova}</p>
                </div>
              </div>

              <div className="md:col-span-4">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-3">
                  Propostas concretas
                </div>
                <ul className="space-y-3">
                  {p.propostas.map((prop, j) => (
                    <li key={prop} className="flex gap-3 text-sm text-foreground">
                      <span className="font-mono text-xs text-gold pt-0.5 flex-shrink-0">
                        {String(i + 1).padStart(2, "0")}.{j + 1}
                      </span>
                      {prop}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </PageShell>
  );
}
