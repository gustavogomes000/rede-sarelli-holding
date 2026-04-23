import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  Scale,
  Eye,
  FileCheck2,
  Users,
  AlertTriangle,
  Lock,
  Gavel,
  ClipboardCheck,
  HeartHandshake,
} from "lucide-react";
import { EditableText } from "@/components/EditableText";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/governanca")({
  head: () => ({
    meta: [
      { title: "Governança — Caderno de Bordo" },
      {
        name: "description",
        content:
          "Princípios, regras e mecanismos de controle que garantem transparência, ética e disciplina dentro da campanha.",
      },
      { property: "og:title", content: "Governança da Campanha" },
      {
        property: "og:description",
        content:
          "Como decisões são tomadas, como a rede é cobrada e como mantemos a campanha íntegra do começo ao fim.",
      },
    ],
  }),
  component: GovernancaPage,
});

type Pilar = {
  id: string;
  icone: typeof ShieldCheck;
  cor: string;
  bgCor: string;
  borderCor: string;
  defaultTitulo: string;
  defaultDescricao: string;
};

const PILARES: Pilar[] = [
  {
    id: "transparencia",
    icone: Eye,
    cor: "text-blue-700",
    bgCor: "bg-blue-50",
    borderCor: "border-blue-300",
    defaultTitulo: "Transparência",
    defaultDescricao:
      "Toda decisão importante é registrada e comunicada. Cadastros, gastos e resultados ficam visíveis para quem precisa acompanhar.",
  },
  {
    id: "etica",
    icone: Scale,
    cor: "text-emerald-700",
    bgCor: "bg-emerald-50",
    borderCor: "border-emerald-300",
    defaultTitulo: "Ética e legalidade",
    defaultDescricao:
      "Tudo dentro da Lei Eleitoral. Nada de promessa indevida, compra de voto ou conteúdo enganoso. A campanha defende o que prega.",
  },
  {
    id: "disciplina",
    icone: ClipboardCheck,
    cor: "text-rose-700",
    bgCor: "bg-rose-50",
    borderCor: "border-rose-300",
    defaultTitulo: "Disciplina de execução",
    defaultDescricao:
      "Quem aceita um papel na rede aceita também as metas. Cadastro e presença nas redes são acompanhados toda semana.",
  },
  {
    id: "protecao",
    icone: Lock,
    cor: "text-violet-700",
    bgCor: "bg-violet-50",
    borderCor: "border-violet-300",
    defaultTitulo: "Proteção de dados",
    defaultDescricao:
      "Os dados dos eleitores cadastrados são tratados com cuidado e usados só para o relacionamento da campanha. LGPD respeitada.",
  },
];

type Regra = {
  id: string;
  defaultTitulo: string;
  defaultDescricao: string;
};

const REGRAS: Regra[] = [
  {
    id: "decisoes",
    defaultTitulo: "Decisões estratégicas",
    defaultDescricao:
      "Decisões de posicionamento, agenda e comunicação passam pela coordenação central. Nada de fala oficial sem alinhamento.",
  },
  {
    id: "financeiro",
    defaultTitulo: "Financeiro",
    defaultDescricao:
      "Toda despesa precisa de motivo, fornecedor identificado e aprovação registrada no sistema antes do pagamento.",
  },
  {
    id: "comunicacao",
    defaultTitulo: "Comunicação externa",
    defaultDescricao:
      "Material gráfico, áudios e vídeos são produzidos ou aprovados pelo time de conteúdo. Nada é publicado em nome da campanha sem checagem.",
  },
  {
    id: "conduta",
    defaultTitulo: "Conduta da rede",
    defaultDescricao:
      "Suplentes, lideranças, promotores e coordenadores assumem um padrão de conduta. Ataque pessoal, fake news e desrespeito desligam a pessoa da rede.",
  },
  {
    id: "crise",
    defaultTitulo: "Gestão de crise",
    defaultDescricao:
      "Qualquer evento sensível é comunicado imediatamente à coordenação. Resposta sai apenas pelo canal oficial, com posicionamento único.",
  },
];

function GovernancaPage() {
  return (
    <PageShell
      eyebrow="Capítulo 06 · Como nos governamos"
      title={
        <EditableText
          id="governanca.hero.titulo"
          as="span"
          defaultValue="Governança."
        />
      }
      intro={
        <EditableText
          id="governanca.hero.intro"
          as="span"
          multiline
          defaultValue="As regras do jogo dentro da campanha. Como decisões são tomadas, como a rede é cobrada, como o dinheiro é controlado e como mantemos a integridade do começo ao fim."
        />
      }
    >
      {/* Pilares */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-10 bg-primary" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-primary font-bold">
            Os 4 pilares
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PILARES.map((p) => {
            const Icone = p.icone;
            return (
              <article
                key={p.id}
                className={`rounded-2xl border-2 ${p.borderCor} ${p.bgCor} p-6 hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white ${p.cor}`}
                  >
                    <Icone className="h-6 w-6" />
                  </div>
                  <EditableText
                    id={`governanca.pilar.${p.id}.titulo`}
                    as="h3"
                    defaultValue={p.defaultTitulo}
                    className={`font-display text-xl font-extrabold ${p.cor}`}
                  />
                </div>
                <EditableText
                  id={`governanca.pilar.${p.id}.descricao`}
                  as="p"
                  multiline
                  defaultValue={p.defaultDescricao}
                  className="text-sm text-foreground/80 leading-relaxed"
                />
              </article>
            );
          })}
        </div>
      </section>

      {/* Regras práticas */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-10 bg-primary" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-primary font-bold">
            Regras práticas
          </span>
        </div>

        <div className="rounded-3xl border border-border/60 bg-card p-6 sm:p-10 shadow-sm divide-y divide-border/60">
          {REGRAS.map((r, i) => (
            <div key={r.id} className="flex gap-5 py-5 first:pt-0 last:pb-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-display font-extrabold shrink-0">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex-1">
                <EditableText
                  id={`governanca.regra.${r.id}.titulo`}
                  as="h4"
                  defaultValue={r.defaultTitulo}
                  className="font-display text-lg font-bold mb-1"
                />
                <EditableText
                  id={`governanca.regra.${r.id}.descricao`}
                  as="p"
                  multiline
                  defaultValue={r.defaultDescricao}
                  className="text-sm text-foreground/80 leading-relaxed"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Linha vermelha */}
      <section className="mb-16">
        <div className="rounded-3xl border-2 border-destructive/40 bg-destructive/5 p-8 sm:p-12">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-destructive font-bold">
              Linha vermelha
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold leading-tight mb-6">
            <EditableText
              id="governanca.linha.titulo"
              as="span"
              defaultValue="O que tira alguém da rede na hora."
            />
          </h2>

          <EditableText
            id="governanca.linha.intro"
            as="p"
            multiline
            className="text-lg leading-relaxed text-foreground/80 mb-6"
            defaultValue="Existem comportamentos que não toleramos. Quem cruza essa linha sai da rede imediatamente, sem aviso prévio."
          />

          <ul className="space-y-3">
            {[
              {
                id: "fakenews",
                v: "Espalhar fake news ou desinformação em nome da campanha.",
              },
              {
                id: "ataque",
                v: "Ataque pessoal, ofensa ou discurso de ódio em qualquer rede.",
              },
              {
                id: "compravoto",
                v: "Oferecer dinheiro, bem ou vantagem em troca de voto.",
              },
              {
                id: "vazamento",
                v: "Vazar dados de eleitores cadastrados ou informações internas.",
              },
              {
                id: "uso-indevido",
                v: "Usar o nome da campanha para benefício pessoal ou comercial.",
              },
            ].map((item) => (
              <li key={item.id} className="flex gap-3">
                <Gavel className="h-4 w-4 text-destructive mt-1 shrink-0" />
                <EditableText
                  id={`governanca.linha.${item.id}`}
                  as="span"
                  multiline
                  defaultValue={item.v}
                  className="text-sm text-foreground/85 leading-relaxed"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Compromisso */}
      <section>
        <div className="rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-rose/10 to-pink-soft/30 p-8 sm:p-12">
          <div className="flex items-center gap-3 mb-6">
            <HeartHandshake className="h-5 w-5 text-primary" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-primary font-bold">
              Compromisso
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold leading-tight mb-6">
            <EditableText
              id="governanca.compromisso.titulo"
              as="span"
              defaultValue="Quem entra, entra sabendo."
            />
          </h2>

          <EditableText
            id="governanca.compromisso.texto"
            as="p"
            multiline
            className="text-lg leading-relaxed text-foreground/80"
            defaultValue="Toda pessoa que recebe acesso ao sistema concorda com essas regras. Governança não é burocracia — é o que garante que a campanha chegue inteira no dia 04 de outubro, com a confiança da rede e do eleitor preservada."
          />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { id: "review", icone: FileCheck2, label: "Revisão semanal" },
              { id: "rede", icone: Users, label: "Cobrança da rede" },
              { id: "selo", icone: ShieldCheck, label: "Selo de integridade" },
            ].map((item) => {
              const Icone = item.icone;
              return (
                <div
                  key={item.id}
                  className="flex items-center gap-3 rounded-2xl bg-white/70 backdrop-blur border border-border/60 px-4 py-3"
                >
                  <Icone className="h-5 w-5 text-primary shrink-0" />
                  <EditableText
                    id={`governanca.compromisso.${item.id}`}
                    as="span"
                    defaultValue={item.label}
                    className="text-sm font-bold text-foreground"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
