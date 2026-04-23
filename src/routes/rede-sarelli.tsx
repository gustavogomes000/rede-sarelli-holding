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
  Share2,
  CheckCircle2,
  UserPlus,
  Vote,
  ShieldCheck,
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
  defaultCadastra: string;
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
    defaultSubtitulo: "Topo da rede — acesso criado pela coordenação",
    defaultAcesso:
      "Recebe acesso direto criado pela coordenação central. É o primeiro nó da árvore — não depende de convite de ninguém.",
    defaultCadastra:
      "Pode cadastrar: Lideranças, Fiscais e Eleitores. Gera links de convite para liberar novas Lideranças e Fiscais.",
    defaultResponsabilidades:
      "Estruturar a base inicial da sua região, escolhendo lideranças confiáveis que vão multiplicar a rede abaixo dele.",
    defaultEntrega:
      "Montar pelo menos um núcleo ativo de lideranças que cadastrem com constância — e garantir presença nas redes sociais cadastradas no perfil.",
    defaultMedicao:
      "Total de cadastros de TODA a árvore abaixo dele (lideranças, fiscais, eleitores) + frequência de postagens nas redes sociais vinculadas.",
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
      "Recebe link de convite gerado pelo Suplente (ou por outra Liderança). Ao clicar, cria a própria conta e já entra com acesso ativo.",
    defaultCadastra:
      "Pode cadastrar: outras Lideranças e Eleitores. Também pode gerar links para liberar novas Lideranças abaixo de si.",
    defaultResponsabilidades:
      "Expandir a base de apoio na sua região, manter constância semanal de cadastros e formar novas lideranças.",
    defaultEntrega:
      "Cadastros próprios + crescimento da sub-rede + postagens semanais nas redes sociais cadastradas.",
    defaultMedicao:
      "Nº de cadastros próprios + cadastros da sub-rede inteira + frequência de postagens nas redes sociais vinculadas ao perfil.",
  },
  {
    id: "promotor",
    icone: Megaphone,
    cor: "text-blue-700",
    bgCor: "bg-blue-50",
    borderCor: "border-blue-300",
    defaultNome: "Promotor",
    defaultSubtitulo: "Recebe link, cria conta e cadastra eleitores",
    defaultAcesso:
      "Recebe um link de convite, cria a própria conta e entra direto no sistema com perfil de Promotor.",
    defaultCadastra:
      "Pode cadastrar: Eleitores. Foco 100% em volume e qualidade dos cadastros — não monta sub-rede.",
    defaultResponsabilidades:
      "Cadastrar eleitores constantemente e divulgar a campanha nas redes sociais cadastradas no perfil.",
    defaultEntrega:
      "Meta semanal de eleitores cadastrados + postagens/compartilhamentos vinculados ao perfil.",
    defaultMedicao:
      "Nº de eleitores cadastrados + nº de postagens e compartilhamentos detectados nas redes sociais cadastradas.",
  },
  {
    id: "coordenador",
    icone: Target,
    cor: "text-emerald-700",
    bgCor: "bg-emerald-50",
    borderCor: "border-emerald-300",
    defaultNome: "Coordenador de Evento",
    defaultSubtitulo: "Atua nos eventos cadastrando possíveis eleitores",
    defaultAcesso:
      "Acesso criado pela coordenação central, vinculado a um ou mais eventos específicos.",
    defaultCadastra:
      "Pode cadastrar: Possíveis Eleitores no momento do evento, com vínculo automático ao evento que está acontecendo.",
    defaultResponsabilidades:
      "Estar presente nos eventos, abordar pessoas e transformar cada interação em cadastro qualificado no sistema.",
    defaultEntrega:
      "Volume de cadastros por evento + qualidade dos dados (telefone válido, observação útil) + cobertura do evento nas redes sociais.",
    defaultMedicao:
      "Nº de cadastros por evento + taxa de aproveitamento (público presente vs. cadastros) + presença nas redes sociais.",
  },
  {
    id: "cs",
    icone: Headset,
    cor: "text-violet-700",
    bgCor: "bg-violet-50",
    borderCor: "border-violet-300",
    defaultNome: "Time de CS",
    defaultSubtitulo: "Recebe TODOS os cadastros e mantém a base aquecida",
    defaultAcesso:
      "Acesso interno do time central. Vê em tempo real todos os cadastros entrando — não importa de qual papel da rede vieram.",
    defaultCadastra:
      "Não cadastra novos contatos: trabalha em cima da base que chega de Suplentes, Lideranças, Promotores e Coordenadores.",
    defaultResponsabilidades:
      "Entrar em contato com cada novo cadastro, qualificar, segmentar e manter o relacionamento aquecido até o dia da eleição.",
    defaultEntrega:
      "Base ativa, segmentada e relacionada — cada eleitor cadastrado precisa chegar no dia da eleição lembrando da campanha.",
    defaultMedicao:
      "Taxa de contato realizado + taxa de resposta + nível de aquecimento da base ao longo do tempo.",
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
          defaultValue="O caminho de cada pessoa dentro do sistema: quem recebe acesso, quem cadastra quem, o que entrega e como o engajamento é medido. A rede cresce em árvore — quanto mais cada papel multiplica, maior fica a base que chega ao time de CS."
        />
      }
    >
      {/* ============ MAPA DO FLUXO ============ */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-10 bg-primary" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-primary font-bold">
            Mapa do fluxo
          </span>
        </div>

        <div className="rounded-3xl border border-border/60 bg-card p-6 sm:p-10 shadow-sm">
          {/* Nível 1: Quem cadastra */}
          <div className="text-center mb-6">
            <span className="inline-block text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground bg-muted px-3 py-1 rounded-full">
              Nível 1 · Quem capta
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-2">
            <NoFluxo papel={PAPEIS[0]} />
            <NoFluxo papel={PAPEIS[1]} />
            <NoFluxo papel={PAPEIS[2]} />
            <NoFluxo papel={PAPEIS[3]} />
          </div>

          <SetaVertical legenda="Todos os cadastros descem para →" />

          {/* Nível 2: CS recebe tudo */}
          <div className="text-center mb-6">
            <span className="inline-block text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground bg-muted px-3 py-1 rounded-full">
              Nível 2 · Quem aquece a base
            </span>
          </div>

          <div className="flex justify-center mb-8">
            <NoFluxo papel={PAPEIS[4]} destacado />
          </div>

          <SetaVertical legenda="Base aquecida chega no →" />

          {/* Nível 3: Dia da eleição */}
          <div className="flex justify-center">
            <div className="rounded-2xl border-2 border-primary bg-primary/5 px-8 py-5 text-center max-w-sm">
              <Vote className="h-7 w-7 text-primary mx-auto mb-2" />
              <div className="font-display font-extrabold text-lg text-primary">
                Dia da eleição
              </div>
              <p className="text-xs text-foreground/70 mt-1">
                Eleitores lembram da campanha porque foram cadastrados, contatados e mantidos aquecidos.
              </p>
            </div>
          </div>
        </div>

        {/* Legenda do fluxo */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="flex items-start gap-2 rounded-lg border border-border/60 bg-card p-3">
            <UserPlus className="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <span className="text-foreground/80">
              <strong>Suplente, Liderança e Promotor</strong> cadastram a partir de qualquer lugar (rua, casa, WhatsApp).
            </span>
          </div>
          <div className="flex items-start gap-2 rounded-lg border border-border/60 bg-card p-3">
            <Target className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
            <span className="text-foreground/80">
              <strong>Coordenador</strong> só cadastra dentro de eventos — cada cadastro fica vinculado ao evento.
            </span>
          </div>
          <div className="flex items-start gap-2 rounded-lg border border-border/60 bg-card p-3">
            <Headset className="h-4 w-4 text-violet-600 shrink-0 mt-0.5" />
            <span className="text-foreground/80">
              <strong>Time de CS</strong> recebe 100% dos cadastros e trabalha relacionamento até a eleição.
            </span>
          </div>
        </div>
      </section>

      {/* ============ DETALHAMENTO POR PAPEL ============ */}
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

      {/* ============ REDES SOCIAIS + CONTROLE DE ENTREGA ============ */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-10 bg-primary" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-primary font-bold">
            Redes sociais & controle de entrega
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="rounded-2xl border-2 border-border/60 bg-card p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Share2 className="h-6 w-6" />
              </div>
              <EditableText
                id="rede.redes.titulo"
                as="h3"
                defaultValue="Redes sociais vinculadas ao perfil"
                className="font-display text-xl font-extrabold leading-tight"
              />
            </div>
            <EditableText
              id="rede.redes.descricao"
              as="p"
              multiline
              defaultValue="Cada pessoa cadastra suas redes sociais (Instagram, TikTok, Facebook, X) no próprio perfil. O sistema acompanha postagens, stories e compartilhamentos ligados à campanha — isso vira parte da pontuação de engajamento. Não basta cadastrar pessoas: precisa aparecer também."
              className="text-sm text-foreground/80 leading-relaxed"
            />
          </article>

          <article className="rounded-2xl border-2 border-border/60 bg-card p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <EditableText
                id="rede.controle.titulo"
                as="h3"
                defaultValue="Controle de entrega da equipe"
                className="font-display text-xl font-extrabold leading-tight"
              />
            </div>
            <EditableText
              id="rede.controle.descricao"
              as="p"
              multiline
              defaultValue="O sistema mostra em painel: quantos cadastros cada pessoa fez, quantos vieram da sua sub-rede, frequência de postagens e ranking por região. A coordenação acompanha quem está produzindo, quem precisa de suporte e quem está parado — sem depender de planilha solta."
              className="text-sm text-foreground/80 leading-relaxed"
            />
          </article>
        </div>

        {/* Pontos-chave */}
        <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/5 p-6">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <span className="text-sm font-bold text-primary uppercase tracking-wider">
              O que conta como entrega
            </span>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-foreground/85">
            <li className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <EditableText
                id="rede.entrega.item1"
                as="span"
                multiline
                defaultValue="Cadastros próprios feitos no sistema"
              />
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <EditableText
                id="rede.entrega.item2"
                as="span"
                multiline
                defaultValue="Cadastros gerados pela sub-rede (quando aplicável)"
              />
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <EditableText
                id="rede.entrega.item3"
                as="span"
                multiline
                defaultValue="Postagens e stories nas redes cadastradas"
              />
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <EditableText
                id="rede.entrega.item4"
                as="span"
                multiline
                defaultValue="Presença e cobertura dos eventos da campanha"
              />
            </li>
          </ul>
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
            className={`font-display font-extrabold text-base ${papel.cor} leading-tight`}
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
          icone={UserPlus}
          titulo="Quem pode cadastrar"
          id={`rede.detalhe.${papel.id}.cadastra`}
          defaultValue={papel.defaultCadastra}
        />
        <BlocoCampo
          icone={ClipboardList}
          titulo="Função no sistema"
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
