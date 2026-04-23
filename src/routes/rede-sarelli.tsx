import { createFileRoute } from "@tanstack/react-router";
import {
  Crown,
  Users,
  Megaphone,
  Target,
  Headset,
  ArrowDown,
  ArrowRight,
  Link2,
  ClipboardList,
  Activity,
  UserPlus,
  TrendingUp,
} from "lucide-react";
import { EditableText } from "@/components/EditableText";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/rede-sarelli")({
  head: () => ({
    meta: [
      { title: "Rede Sarelli — Fluxo de Cadastro por Papel" },
      {
        name: "description",
        content:
          "Como cada papel da rede (Suplente, Liderança, Promotor, Coordenador, CS) atua no fluxo de cadastro, acesso e engajamento.",
      },
      { property: "og:title", content: "Rede Sarelli — Fluxo de Cadastro" },
      {
        property: "og:description",
        content:
          "Fluxo de uso do sistema por papel: quem cadastra quem, como recebe acesso e como o engajamento é medido.",
      },
    ],
  }),
  component: RedeSarelliPage,
});

type Papel = {
  id: string;
  icone: typeof Crown;
  cor: string;
  bgCor: string;
  borderCor: string;
  defaultNome: string;
  defaultSubtitulo: string;
  defaultAcesso: string;
  defaultResponsabilidades: string;
  defaultEntrega: string;
  defaultMedicao: string;
};

const PAPEIS: Papel[] = [
  {
    id: "suplente",
    icone: Crown,
    cor: "text-amber-700",
    bgCor: "bg-amber-50",
    borderCor: "border-amber-300",
    defaultNome: "Suplente",
    defaultSubtitulo: "Topo da rede — primeiro acesso criado por nós",
    defaultAcesso:
      "Recebe acesso direto criado pela coordenação central. É o primeiro nó da rede.",
    defaultResponsabilidades:
      "Cadastra Lideranças, Fiscais e Eleitores. Constrói a sua própria rede de captação a partir do zero.",
    defaultEntrega:
      "Estruturar pelo menos uma base inicial de lideranças que vão multiplicar a rede abaixo dele.",
    defaultMedicao:
      "Medido pelo total de cadastros gerados pela sua árvore inteira (lideranças, fiscais e eleitores) + postagens nas redes sociais vinculadas.",
  },
  {
    id: "lideranca",
    icone: Users,
    cor: "text-rose-700",
    bgCor: "bg-rose-50",
    borderCor: "border-rose-300",
    defaultNome: "Liderança",
    defaultSubtitulo: "Cadastrada pelo Suplente — multiplica a rede",
    defaultAcesso:
      "Recebe um link de convite gerado pelo Suplente. Ao clicar, cria sua conta e já entra com acesso.",
    defaultResponsabilidades:
      "Cadastra outras Lideranças e Eleitores. Pode também gerar links de convite para liberar acesso a novas lideranças e cadastrar eleitores diretamente.",
    defaultEntrega:
      "Expandir a base de apoio na sua região e manter constância de cadastros + presença nas redes.",
    defaultMedicao:
      "Medido pelo nº de cadastros próprios e da sua sub-rede + nº de postagens vinculadas nas redes sociais cadastradas.",
  },
  {
    id: "promotor",
    icone: Megaphone,
    cor: "text-blue-700",
    bgCor: "bg-blue-50",
    borderCor: "border-blue-300",
    defaultNome: "Promotor",
    defaultSubtitulo: "Recebe link e cria a própria conta",
    defaultAcesso:
      "Recebe o link de convite, cria a conta e entra direto no sistema com perfil de Promotor.",
    defaultResponsabilidades:
      "Após criar a conta, deve cadastrar Eleitores. Foco total em volume de cadastros qualificados.",
    defaultEntrega:
      "Cadastros constantes de eleitores e atuação ativa nas redes sociais com conteúdo da campanha.",
    defaultMedicao:
      "Medido pelo nº de eleitores cadastrados + nº de postagens e compartilhamentos nas redes sociais cadastradas no perfil.",
  },
  {
    id: "coordenador",
    icone: Target,
    cor: "text-emerald-700",
    bgCor: "bg-emerald-50",
    borderCor: "border-emerald-300",
    defaultNome: "Coordenador",
    defaultSubtitulo: "Atua nos eventos cadastrando possíveis eleitores",
    defaultAcesso:
      "Acesso criado pela coordenação central, vinculado a um ou mais eventos.",
    defaultResponsabilidades:
      "Atua presencialmente nos eventos cadastrando possíveis eleitores no momento. Garante que toda interação vire cadastro.",
    defaultEntrega:
      "Volume de cadastros por evento e qualidade dos dados (telefone válido, contato direto, observações úteis).",
    defaultMedicao:
      "Medido pelo nº de cadastros por evento + presença/postagens cobrindo os eventos nas redes sociais.",
  },
  {
    id: "cs",
    icone: Headset,
    cor: "text-violet-700",
    bgCor: "bg-violet-50",
    borderCor: "border-violet-300",
    defaultNome: "Time de CS",
    defaultSubtitulo: "Recebe todos os cadastros e mantém a base aquecida",
    defaultAcesso:
      "Acesso interno do time central. Vê todos os cadastros entrando em tempo real, vindos de qualquer papel da rede.",
    defaultResponsabilidades:
      "Entra em contato com cada novo cadastro, mantém o relacionamento aquecido até o dia da eleição e qualifica/segmenta a base.",
    defaultEntrega:
      "Base ativa, segmentada e relacionada — cada eleitor cadastrado precisa chegar no dia da eleição lembrando da campanha.",
    defaultMedicao:
      "Medido por taxa de contato realizado, taxa de resposta e nível de aquecimento da base ao longo do tempo.",
  },
];

function RedeSarelliPage() {
  return (
    <PageShell
      eyebrow="Capítulo 05 · Como a rede funciona"
      title={
        <EditableText
          id="rede.hero.titulo"
          as="span"
          defaultValue="Rede Sarelli."
          className=""
        />
      }
      intro={
        <EditableText
          id="rede.hero.intro"
          as="span"
          multiline
          defaultValue="O caminho de cada pessoa dentro do sistema: quem recebe acesso, quem cadastra quem, o que entrega e como o engajamento é medido. A rede cresce em árvore — quanto mais cada papel multiplica, maior fica a base."
        />
      }
    >
      {/* Mapa visual do fluxo */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-10 bg-primary" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-primary font-bold">
            Mapa do fluxo
          </span>
        </div>

        <div className="rounded-3xl border border-border/60 bg-card p-6 sm:p-10 shadow-sm">
          {/* Nível 1: Suplente */}
          <div className="flex justify-center">
            <NoFluxo papel={PAPEIS[0]} />
          </div>

          <SetaVertical />

          {/* Nível 2: Liderança + Promotor + Coordenador */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <NoFluxo papel={PAPEIS[1]} />
            <NoFluxo papel={PAPEIS[2]} />
            <NoFluxo papel={PAPEIS[3]} />
          </div>

          <SetaVertical legenda="Todos os cadastros descem para →" />

          {/* Nível 3: CS */}
          <div className="flex justify-center">
            <NoFluxo papel={PAPEIS[4]} destacado />
          </div>
        </div>
      </section>

      {/* Detalhamento por papel */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-10 bg-primary" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-primary font-bold">
            Papel por papel
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PAPEIS.map((p) => (
            <CardDetalhe key={p.id} papel={p} />
          ))}
        </div>
      </section>

      {/* Como medimos engajamento */}
      <section>
        <div className="rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-rose/10 to-pink-soft/30 p-8 sm:p-12">
          <div className="flex items-center gap-3 mb-6">
            <Activity className="h-5 w-5 text-primary" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-primary font-bold">
              Como medimos o engajamento
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold leading-tight mb-6">
            <EditableText
              id="rede.medicao.titulo"
              as="span"
              defaultValue="Quem está somando, quem está parado."
            />
          </h2>

          <EditableText
            id="rede.medicao.regra"
            as="p"
            multiline
            className="text-lg leading-relaxed text-foreground/80 mb-8"
            defaultValue="Toda Suplente, Liderança, Promotor e Coordenador tem suas redes sociais vinculadas no cadastro. O sistema mede e mostra publicamente se a pessoa está somando ou não, com base em duas variáveis simples: número de cadastros gerados e número de postagens/compartilhamentos feitos nas redes sociais cadastradas. Quem soma, aparece. Quem não soma, também."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RegraBloco
              icone={UserPlus}
              titulo="Cadastros"
              id="rede.medicao.cadastros"
              defaultValue="Total de pessoas cadastradas pela rede inteira abaixo daquele papel — soma direta + indireta."
            />
            <RegraBloco
              icone={TrendingUp}
              titulo="Postagens nas redes"
              id="rede.medicao.postagens"
              defaultValue="Postagens, stories e compartilhamentos feitos nas redes sociais que a pessoa cadastrou no perfil."
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}

/* ============ Subcomponentes ============ */

function NoFluxo({ papel, destacado = false }: { papel: Papel; destacado?: boolean }) {
  const Icone = papel.icone;
  return (
    <div
      className={`relative rounded-2xl border-2 ${papel.borderCor} ${papel.bgCor} p-5 w-full max-w-xs mx-auto shadow-sm ${
        destacado ? "ring-4 ring-primary/20" : ""
      }`}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-white ${papel.cor}`}>
          <Icone className="h-5 w-5" />
        </div>
        <div>
          <EditableText
            id={`rede.no.${papel.id}.nome`}
            as="div"
            defaultValue={papel.defaultNome}
            className={`font-display font-extrabold text-lg ${papel.cor}`}
          />
        </div>
      </div>
      <EditableText
        id={`rede.no.${papel.id}.subtitulo`}
        as="p"
        multiline
        defaultValue={papel.defaultSubtitulo}
        className="text-xs text-foreground/70 leading-snug"
      />
    </div>
  );
}

function SetaVertical({ legenda }: { legenda?: string }) {
  return (
    <div className="flex flex-col items-center my-6">
      <ArrowDown className="h-6 w-6 text-primary" />
      {legenda && (
        <span className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">
          {legenda}
        </span>
      )}
    </div>
  );
}

function CardDetalhe({ papel }: { papel: Papel }) {
  const Icone = papel.icone;
  return (
    <article
      className={`rounded-2xl border-2 ${papel.borderCor} bg-card p-6 sm:p-8 hover:shadow-lg transition-shadow`}
    >
      <header className="flex items-center gap-4 mb-6 pb-6 border-b border-border/60">
        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${papel.bgCor} ${papel.cor}`}>
          <Icone className="h-7 w-7" />
        </div>
        <div>
          <EditableText
            id={`rede.detalhe.${papel.id}.nome`}
            as="h3"
            defaultValue={papel.defaultNome}
            className="font-display text-2xl font-extrabold leading-tight"
          />
          <EditableText
            id={`rede.detalhe.${papel.id}.subtitulo`}
            as="p"
            defaultValue={papel.defaultSubtitulo}
            className="text-xs uppercase tracking-wider text-muted-foreground font-bold mt-1"
          />
        </div>
      </header>

      <div className="space-y-5">
        <BlocoCampo
          icone={Link2}
          titulo="Como recebe acesso"
          id={`rede.detalhe.${papel.id}.acesso`}
          defaultValue={papel.defaultAcesso}
        />
        <BlocoCampo
          icone={ClipboardList}
          titulo="O que faz no sistema"
          id={`rede.detalhe.${papel.id}.responsabilidades`}
          defaultValue={papel.defaultResponsabilidades}
        />
        <BlocoCampo
          icone={Target}
          titulo="O que precisa entregar"
          id={`rede.detalhe.${papel.id}.entrega`}
          defaultValue={papel.defaultEntrega}
        />
        <BlocoCampo
          icone={Activity}
          titulo="Como é medido"
          id={`rede.detalhe.${papel.id}.medicao`}
          defaultValue={papel.defaultMedicao}
        />
      </div>
    </article>
  );
}

function BlocoCampo({
  icone: Icone,
  titulo,
  id,
  defaultValue,
}: {
  icone: typeof Crown;
  titulo: string;
  id: string;
  defaultValue: string;
}) {
  return (
    <div className="flex gap-3">
      <ArrowRight className="h-4 w-4 text-primary mt-1 shrink-0" />
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <Icone className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-muted-foreground">
            {titulo}
          </span>
        </div>
        <EditableText
          id={id}
          as="p"
          multiline
          defaultValue={defaultValue}
          className="text-sm text-foreground/80 leading-relaxed"
        />
      </div>
    </div>
  );
}

function RegraBloco({
  icone: Icone,
  titulo,
  id,
  defaultValue,
}: {
  icone: typeof Crown;
  titulo: string;
  id: string;
  defaultValue: string;
}) {
  return (
    <div className="rounded-2xl bg-white/70 backdrop-blur border border-border/60 p-5">
      <div className="flex items-center gap-2 mb-2">
        <Icone className="h-4 w-4 text-primary" />
        <span className="font-display font-bold text-foreground">{titulo}</span>
      </div>
      <EditableText
        id={id}
        as="p"
        multiline
        defaultValue={defaultValue}
        className="text-sm text-foreground/75 leading-relaxed"
      />
    </div>
  );
}
