import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  MapPin,
  Users,
  Vote,
  Building2,
  TrendingUp,
  Search,
  Flame,
  Target,
  Layers,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { EditableText } from "@/components/EditableText";

export const Route = createFileRoute("/inteligencia-eleitoral")({
  head: () => ({
    meta: [
      { title: "Inteligência Eleitoral GO · Operação Sarelli 2026" },
      {
        name: "description",
        content:
          "Mapa de calor de Goiás, eleitorado por município, zonas eleitorais, colégios e potencial de votos para a campanha Dra. Fernanda Sarelli 2026.",
      },
      {
        property: "og:title",
        content: "Inteligência Eleitoral GO · Sarelli 2026",
      },
      {
        property: "og:description",
        content:
          "Onde estão os votos: mapa de calor, zonas eleitorais e potencial por município de Goiás.",
      },
    ],
  }),
  component: InteligenciaPage,
});

// ============= DADOS GOIÁS (TSE 2024 — Top municípios) =============
// x,y são coordenadas relativas no SVG (0-100) baseadas na geografia real de GO
type Cidade = {
  nome: string;
  eleitorado: number;
  zonas: number;
  secoes: number;
  locais: number;
  x: number;
  y: number;
  regiao: string;
};

const cidades: Cidade[] = [
  // Metropolitana de Goiânia
  { nome: "Goiânia", eleitorado: 1_148_000, zonas: 18, secoes: 3_240, locais: 410, x: 50, y: 62, regiao: "Metropolitana" },
  { nome: "Aparecida de Goiânia", eleitorado: 425_000, zonas: 5, secoes: 1_180, locais: 145, x: 52, y: 65, regiao: "Metropolitana" },
  { nome: "Anápolis", eleitorado: 295_000, zonas: 4, secoes: 820, locais: 105, x: 55, y: 55, regiao: "Centro Goiano" },
  { nome: "Trindade", eleitorado: 110_000, zonas: 1, secoes: 310, locais: 42, x: 47, y: 62, regiao: "Metropolitana" },
  { nome: "Senador Canedo", eleitorado: 95_000, zonas: 1, secoes: 270, locais: 35, x: 53, y: 64, regiao: "Metropolitana" },
  { nome: "Goianésia", eleitorado: 55_000, zonas: 1, secoes: 160, locais: 24, x: 56, y: 49, regiao: "Centro Goiano" },
  { nome: "Inhumas", eleitorado: 45_000, zonas: 1, secoes: 130, locais: 20, x: 49, y: 58, regiao: "Metropolitana" },
  { nome: "Nerópolis", eleitorado: 22_000, zonas: 1, secoes: 65, locais: 12, x: 51, y: 60, regiao: "Metropolitana" },

  // Sul Goiano
  { nome: "Rio Verde", eleitorado: 175_000, zonas: 2, secoes: 490, locais: 68, x: 38, y: 78, regiao: "Sul Goiano" },
  { nome: "Catalão", eleitorado: 92_000, zonas: 1, secoes: 270, locais: 36, x: 70, y: 82, regiao: "Sul Goiano" },
  { nome: "Itumbiara", eleitorado: 85_000, zonas: 1, secoes: 245, locais: 32, x: 60, y: 88, regiao: "Sul Goiano" },
  { nome: "Caldas Novas", eleitorado: 70_000, zonas: 1, secoes: 200, locais: 28, x: 58, y: 78, regiao: "Sul Goiano" },
  { nome: "Jataí", eleitorado: 80_000, zonas: 1, secoes: 230, locais: 30, x: 30, y: 82, regiao: "Sudoeste" },
  { nome: "Mineiros", eleitorado: 50_000, zonas: 1, secoes: 145, locais: 22, x: 24, y: 80, regiao: "Sudoeste" },
  { nome: "Quirinópolis", eleitorado: 40_000, zonas: 1, secoes: 115, locais: 18, x: 48, y: 86, regiao: "Sul Goiano" },

  // Norte Goiano
  { nome: "Porangatu", eleitorado: 38_000, zonas: 1, secoes: 110, locais: 16, x: 52, y: 22, regiao: "Norte Goiano" },
  { nome: "Niquelândia", eleitorado: 35_000, zonas: 1, secoes: 100, locais: 15, x: 60, y: 38, regiao: "Norte Goiano" },
  { nome: "Uruaçu", eleitorado: 32_000, zonas: 1, secoes: 92, locais: 14, x: 56, y: 32, regiao: "Norte Goiano" },

  // Entorno DF
  { nome: "Luziânia", eleitorado: 165_000, zonas: 2, secoes: 460, locais: 62, x: 70, y: 50, regiao: "Entorno DF" },
  { nome: "Águas Lindas", eleitorado: 145_000, zonas: 1, secoes: 405, locais: 54, x: 72, y: 42, regiao: "Entorno DF" },
  { nome: "Valparaíso", eleitorado: 130_000, zonas: 1, secoes: 365, locais: 48, x: 73, y: 47, regiao: "Entorno DF" },
  { nome: "Novo Gama", eleitorado: 78_000, zonas: 1, secoes: 220, locais: 30, x: 71, y: 49, regiao: "Entorno DF" },
  { nome: "Planaltina", eleitorado: 65_000, zonas: 1, secoes: 185, locais: 26, x: 75, y: 44, regiao: "Entorno DF" },
  { nome: "Formosa", eleitorado: 90_000, zonas: 1, secoes: 255, locais: 34, x: 76, y: 38, regiao: "Entorno DF" },
  { nome: "Cristalina", eleitorado: 45_000, zonas: 1, secoes: 130, locais: 20, x: 70, y: 58, regiao: "Entorno DF" },

  // Oeste/Sudoeste
  { nome: "São Luís de M. Belos", eleitorado: 28_000, zonas: 1, secoes: 80, locais: 13, x: 38, y: 68, regiao: "Oeste Goiano" },
  { nome: "Iporá", eleitorado: 26_000, zonas: 1, secoes: 75, locais: 12, x: 30, y: 65, regiao: "Oeste Goiano" },
  { nome: "Goiás (cidade)", eleitorado: 22_000, zonas: 1, secoes: 65, locais: 11, x: 40, y: 55, regiao: "Oeste Goiano" },

  // Leste
  { nome: "Pirenópolis", eleitorado: 21_000, zonas: 1, secoes: 60, locais: 10, x: 60, y: 52, regiao: "Centro Goiano" },
  { nome: "Posse", eleitorado: 28_000, zonas: 1, secoes: 80, locais: 13, x: 80, y: 30, regiao: "Nordeste" },
];

const TOTAL_GO_ELEITORADO = 4_900_000;
const META_DEPUTADO_FEDERAL = 110_000; // estimativa de quociente p/ federal
const META_DEPUTADO_ESTADUAL = 65_000;

// ============= REGIÕES =============
const regioes = [
  { nome: "Metropolitana", cor: "#ec4899", desc: "Goiânia + cinturão. Maior concentração de eleitorado urbano." },
  { nome: "Centro Goiano", cor: "#f59e0b", desc: "Anápolis e eixo BR-153. Polo logístico e industrial." },
  { nome: "Entorno DF", cor: "#8b5cf6", desc: "Cidades dormitório de Brasília. Eleitor jovem, alta densidade." },
  { nome: "Sul Goiano", cor: "#10b981", desc: "Agronegócio forte. Rio Verde, Catalão, Itumbiara." },
  { nome: "Sudoeste", cor: "#06b6d4", desc: "Jataí, Mineiros. Fronteira agrícola." },
  { nome: "Norte Goiano", cor: "#f97316", desc: "Porangatu, Uruaçu. Pecuária e mineração." },
  { nome: "Nordeste", cor: "#84cc16", desc: "Posse e Chapada dos Veadeiros." },
  { nome: "Oeste Goiano", cor: "#3b82f6", desc: "Iporá, Goiás (cidade histórica)." },
];

// ============= COMPONENTE =============
function InteligenciaPage() {
  const [filtro, setFiltro] = useState("");
  const [regiaoSel, setRegiaoSel] = useState<string | null>(null);
  const [cidadeSel, setCidadeSel] = useState<Cidade | null>(null);

  const cidadesFiltradas = useMemo(() => {
    return cidades.filter((c) => {
      const matchNome = c.nome.toLowerCase().includes(filtro.toLowerCase());
      const matchRegiao = !regiaoSel || c.regiao === regiaoSel;
      return matchNome && matchRegiao;
    });
  }, [filtro, regiaoSel]);

  const stats = useMemo(() => {
    const totalEleitorado = cidadesFiltradas.reduce((s, c) => s + c.eleitorado, 0);
    const totalZonas = cidadesFiltradas.reduce((s, c) => s + c.zonas, 0);
    const totalSecoes = cidadesFiltradas.reduce((s, c) => s + c.secoes, 0);
    const totalLocais = cidadesFiltradas.reduce((s, c) => s + c.locais, 0);
    return { totalEleitorado, totalZonas, totalSecoes, totalLocais };
  }, [cidadesFiltradas]);

  const maxEleitorado = Math.max(...cidades.map((c) => c.eleitorado));

  // Cor baseada em eleitorado (intensidade do calor)
  const heatColor = (eleitorado: number) => {
    const ratio = eleitorado / maxEleitorado;
    if (ratio > 0.7) return "#dc2626"; // vermelho fogo
    if (ratio > 0.4) return "#f97316"; // laranja
    if (ratio > 0.2) return "#f59e0b"; // amarelo
    if (ratio > 0.08) return "#ec4899"; // rosa
    return "#a78bfa"; // violeta suave
  };

  const heatRadius = (eleitorado: number) => {
    const ratio = eleitorado / maxEleitorado;
    return 1.2 + ratio * 4.5;
  };

  return (
    <PageShell
      eyebrow="Capítulo 05 · Inteligência Eleitoral GO"
      title={
        <EditableText
          settingKey="inteligencia.hero.titulo"
          defaultValue="Onde estão os votos. Onde a Doutora vai brilhar."
          as="span"
          multiline
        />
      }
      intro={
        <EditableText
          settingKey="inteligencia.hero.intro"
          defaultValue="Mapa de calor de Goiás com eleitorado, zonas, seções e locais de votação por município. A base que orienta onde investir tempo, equipe e estrutura."
          as="span"
          multiline
        />
      }
      tone="light"
    >
      {/* ============= KPIs GERAIS ============= */}
      <section className="mb-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard
          icon={Users}
          label="Eleitorado GO"
          value="4,9 mi"
          sub="2º maior eleitorado do Centro-Oeste"
          color="from-rose-500 to-pink-600"
        />
        <KpiCard
          icon={Building2}
          label="Municípios"
          value="246"
          sub="Cobertos pela campanha"
          color="from-amber-500 to-orange-500"
        />
        <KpiCard
          icon={Layers}
          label="Zonas Eleitorais"
          value="118"
          sub="Distribuídas em 8 regiões"
          color="from-violet-500 to-purple-600"
        />
        <KpiCard
          icon={Target}
          label="Meta Federal"
          value="110k votos"
          sub="Quociente eleitoral estimado"
          color="from-emerald-500 to-teal-600"
        />
      </section>

      {/* ============= MAPA + LEGENDA ============= */}
      <section className="mb-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Mapa */}
        <div className="lg:col-span-2 rounded-2xl border border-border/60 bg-gradient-to-br from-slate-50 via-white to-pink-50/40 p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-display text-2xl font-extrabold text-foreground flex items-center gap-2">
                <Flame className="h-6 w-6 text-rose-500" />
                Mapa de Calor — Goiás
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Tamanho e cor do ponto = volume de eleitorado. Passe o mouse para detalhes.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-1 text-[10px] uppercase tracking-wider font-bold">
              <span className="text-muted-foreground">Frio</span>
              <div className="flex h-2 w-32 rounded-full overflow-hidden">
                <div className="flex-1 bg-violet-400" />
                <div className="flex-1 bg-pink-500" />
                <div className="flex-1 bg-amber-500" />
                <div className="flex-1 bg-orange-500" />
                <div className="flex-1 bg-red-600" />
              </div>
              <span className="text-muted-foreground">Quente</span>
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full">
            <svg
              viewBox="0 0 100 110"
              className="w-full h-full"
              style={{ filter: "drop-shadow(0 4px 12px rgba(236,72,153,0.15))" }}
            >
              {/* Contorno simplificado de Goiás */}
              <defs>
                <linearGradient id="goBg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fce7f3" />
                  <stop offset="100%" stopColor="#fed7aa" />
                </linearGradient>
                <radialGradient id="pulseGrad">
                  <stop offset="0%" stopColor="#dc2626" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Forma aproximada de Goiás */}
              <path
                d="M 45 8
                   L 58 10
                   L 68 16
                   L 78 22
                   L 84 32
                   L 82 42
                   L 80 52
                   L 78 60
                   L 76 70
                   L 72 80
                   L 65 90
                   L 55 96
                   L 45 94
                   L 35 88
                   L 28 80
                   L 22 72
                   L 18 62
                   L 16 52
                   L 18 42
                   L 22 32
                   L 28 22
                   L 35 14
                   Z"
                fill="url(#goBg)"
                stroke="#9ca3af"
                strokeWidth="0.4"
                opacity="0.7"
              />

              {/* DF (recorte interno) */}
              <circle cx="78" cy="42" r="2.5" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="0.3" />
              <text x="78" y="43" textAnchor="middle" fontSize="1.5" fill="#6b7280" fontWeight="700">
                DF
              </text>

              {/* Pulse no Goiânia */}
              <circle cx="50" cy="62" r="6" fill="url(#pulseGrad)">
                <animate attributeName="r" values="4;9;4" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0;0.8" dur="2.5s" repeatCount="indefinite" />
              </circle>

              {/* Pontos das cidades */}
              {cidades.map((c, i) => {
                const isHighlighted =
                  !cidadeSel ||
                  cidadeSel.nome === c.nome ||
                  (regiaoSel && c.regiao === regiaoSel);
                const opacity =
                  cidadeSel || regiaoSel ? (isHighlighted ? 1 : 0.15) : 1;
                return (
                  <g
                    key={c.nome}
                    onMouseEnter={() => setCidadeSel(c)}
                    onMouseLeave={() => setCidadeSel(null)}
                    style={{ cursor: "pointer", opacity, transition: "opacity 0.3s" }}
                  >
                    <circle
                      cx={c.x}
                      cy={c.y}
                      r={heatRadius(c.eleitorado) + 1}
                      fill={heatColor(c.eleitorado)}
                      opacity="0.25"
                    >
                      <animate
                        attributeName="r"
                        values={`${heatRadius(c.eleitorado) + 1};${heatRadius(c.eleitorado) + 2.5};${heatRadius(c.eleitorado) + 1}`}
                        dur={`${2 + (i % 4) * 0.3}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      cx={c.x}
                      cy={c.y}
                      r={heatRadius(c.eleitorado)}
                      fill={heatColor(c.eleitorado)}
                      stroke="white"
                      strokeWidth="0.3"
                    />
                  </g>
                );
              })}

              {/* Label cidade selecionada */}
              {cidadeSel && (
                <g style={{ pointerEvents: "none" }}>
                  <rect
                    x={Math.min(cidadeSel.x + 3, 70)}
                    y={cidadeSel.y - 6}
                    width="28"
                    height="9"
                    rx="1.5"
                    fill="#0f172a"
                    opacity="0.95"
                  />
                  <text
                    x={Math.min(cidadeSel.x + 4, 71)}
                    y={cidadeSel.y - 2.5}
                    fontSize="2.4"
                    fill="white"
                    fontWeight="800"
                  >
                    {cidadeSel.nome}
                  </text>
                  <text
                    x={Math.min(cidadeSel.x + 4, 71)}
                    y={cidadeSel.y + 0.5}
                    fontSize="1.8"
                    fill="#fbbf24"
                    fontWeight="700"
                  >
                    {(cidadeSel.eleitorado / 1000).toFixed(0)}k eleitores
                  </text>
                </g>
              )}
            </svg>
          </div>
        </div>

        {/* Legenda Regiões */}
        <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-lg">
          <h3 className="font-display text-lg font-extrabold mb-4 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-rose-500" />
            8 Regiões de GO
          </h3>
          <div className="space-y-2">
            <button
              onClick={() => setRegiaoSel(null)}
              className={`w-full text-left rounded-lg border px-3 py-2 text-xs font-semibold transition-all ${
                !regiaoSel
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border/40 hover:border-primary/50"
              }`}
            >
              Mostrar todas
            </button>
            {regioes.map((r) => (
              <button
                key={r.nome}
                onClick={() => setRegiaoSel(regiaoSel === r.nome ? null : r.nome)}
                className={`w-full text-left rounded-lg border px-3 py-2 transition-all ${
                  regiaoSel === r.nome
                    ? "border-primary bg-primary/5 shadow-md"
                    : "border-border/40 hover:border-primary/50"
                }`}
              >
                <div className="flex items-center gap-2 mb-0.5">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: r.cor }}
                  />
                  <span className="text-xs font-extrabold">{r.nome}</span>
                </div>
                <p className="text-[10px] text-muted-foreground leading-snug pl-4">
                  {r.desc}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============= STATS DA SELEÇÃO ============= */}
      <section className="mb-8 rounded-2xl bg-gradient-to-r from-slate-900 via-rose-900 to-pink-900 p-6 text-white shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <h3 className="font-display text-xl font-extrabold">
            {regiaoSel ? `Região: ${regiaoSel}` : "Visão geral filtrada"}
          </h3>
          <div className="text-xs uppercase tracking-wider opacity-80">
            {cidadesFiltradas.length} município(s)
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <MiniStat label="Eleitorado" value={(stats.totalEleitorado / 1000).toFixed(0) + "k"} />
          <MiniStat label="Zonas" value={String(stats.totalZonas)} />
          <MiniStat label="Seções" value={stats.totalSecoes.toLocaleString("pt-BR")} />
          <MiniStat label="Locais" value={String(stats.totalLocais)} />
        </div>
        <div className="mt-4 text-xs opacity-80">
          Potencial estimado se atingirmos <strong>3% dos votos válidos</strong>:{" "}
          <span className="font-extrabold text-amber-300">
            {Math.round(stats.totalEleitorado * 0.03 * 0.8).toLocaleString("pt-BR")} votos
          </span>{" "}
          (descontada abstenção média de 20%)
        </div>
      </section>

      {/* ============= BUSCA + TABELA ============= */}
      <section className="mb-12 rounded-2xl border border-border/60 bg-card p-6 shadow-lg">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <h3 className="font-display text-xl font-extrabold flex items-center gap-2">
            <Vote className="h-5 w-5 text-primary" />
            Detalhamento por município
          </h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
              placeholder="Buscar cidade..."
              className="pl-9 pr-4 py-2 text-sm rounded-lg border border-border/60 bg-background focus:border-primary focus:outline-none w-64"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/60 text-left text-[11px] uppercase tracking-wider text-muted-foreground">
                <th className="py-3 pr-4 font-bold">Município</th>
                <th className="py-3 pr-4 font-bold">Região</th>
                <th className="py-3 pr-4 font-bold text-right">Eleitorado</th>
                <th className="py-3 pr-4 font-bold text-right">Zonas</th>
                <th className="py-3 pr-4 font-bold text-right">Seções</th>
                <th className="py-3 pr-4 font-bold text-right">Locais</th>
                <th className="py-3 font-bold text-right">Potencial 3%</th>
              </tr>
            </thead>
            <tbody>
              {cidadesFiltradas
                .sort((a, b) => b.eleitorado - a.eleitorado)
                .map((c) => {
                  const regCor = regioes.find((r) => r.nome === c.regiao)?.cor;
                  const potencial = Math.round(c.eleitorado * 0.03 * 0.8);
                  return (
                    <tr
                      key={c.nome}
                      className="border-b border-border/30 hover:bg-pink-soft/20 transition-colors"
                      onMouseEnter={() => setCidadeSel(c)}
                      onMouseLeave={() => setCidadeSel(null)}
                    >
                      <td className="py-3 pr-4 font-bold text-foreground">{c.nome}</td>
                      <td className="py-3 pr-4">
                        <span
                          className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                          style={{
                            background: `${regCor}15`,
                            color: regCor,
                          }}
                        >
                          <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ background: regCor }}
                          />
                          {c.regiao}
                        </span>
                      </td>
                      <td className="py-3 pr-4 text-right font-mono font-bold">
                        {c.eleitorado.toLocaleString("pt-BR")}
                      </td>
                      <td className="py-3 pr-4 text-right font-mono">{c.zonas}</td>
                      <td className="py-3 pr-4 text-right font-mono">
                        {c.secoes.toLocaleString("pt-BR")}
                      </td>
                      <td className="py-3 pr-4 text-right font-mono">{c.locais}</td>
                      <td className="py-3 text-right font-mono font-extrabold text-rose-600">
                        {potencial.toLocaleString("pt-BR")}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          {cidadesFiltradas.length === 0 && (
            <div className="text-center py-12 text-muted-foreground text-sm">
              Nenhum município encontrado.
            </div>
          )}
        </div>
      </section>

      {/* ============= METAS ============= */}
      <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <MetaCard
          icon={Target}
          titulo="Deputado Federal"
          meta={META_DEPUTADO_FEDERAL}
          base="2,2% do eleitorado total"
          desc="Quociente eleitoral estimado para Goiás na próxima eleição."
          cor="from-rose-500 to-pink-600"
        />
        <MetaCard
          icon={TrendingUp}
          titulo="Deputado Estadual"
          meta={META_DEPUTADO_ESTADUAL}
          base="1,3% do eleitorado total"
          desc="Cenário de coligação para Assembleia Legislativa de Goiás."
          cor="from-violet-500 to-purple-600"
        />
      </section>

      {/* ============= NOTA TÉCNICA ============= */}
      <section className="rounded-2xl border-2 border-dashed border-border/60 bg-muted/30 p-6">
        <h4 className="font-display text-sm font-extrabold uppercase tracking-wider text-muted-foreground mb-2">
          Fonte e atualização
        </h4>
        <EditableText
          settingKey="inteligencia.fonte"
          defaultValue="Dados consolidados do TSE — Eleições 2024 (eleitorado, zonas, seções e locais de votação). Para 2026 os números serão atualizados conforme o calendário oficial. As estimativas de potencial de votos consideram cenários conservadores de 3% sobre o eleitorado, com abstenção média de 20%."
          as="p"
          multiline
          className="text-sm text-muted-foreground leading-relaxed"
        />
      </section>
    </PageShell>
  );
}

// ============= SUB-COMPONENTES =============
function KpiCard({
  icon: Icon,
  label,
  value,
  sub,
  color,
}: {
  icon: typeof Users;
  label: string;
  value: string;
  sub: string;
  color: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-5 shadow-sm hover:shadow-xl transition-all">
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${color}`}
      />
      <div
        className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-md mb-3`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
        {label}
      </div>
      <div className="font-display text-3xl font-extrabold text-foreground mt-1">
        {value}
      </div>
      <div className="text-xs text-muted-foreground mt-1">{sub}</div>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white/10 backdrop-blur p-4 border border-white/10">
      <div className="text-[10px] uppercase tracking-wider opacity-80 font-bold">
        {label}
      </div>
      <div className="font-display text-2xl font-extrabold mt-1">{value}</div>
    </div>
  );
}

function MetaCard({
  icon: Icon,
  titulo,
  meta,
  base,
  desc,
  cor,
}: {
  icon: typeof Target;
  titulo: string;
  meta: number;
  base: string;
  desc: string;
  cor: string;
}) {
  return (
    <div className="group rounded-2xl border border-border/60 bg-card p-6 shadow-lg hover:shadow-2xl transition-all relative overflow-hidden">
      <div
        className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${cor} opacity-10 group-hover:opacity-20 transition-opacity`}
      />
      <div
        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${cor} text-white shadow-lg mb-4`}
      >
        <Icon className="h-6 w-6" />
      </div>
      <div className="text-[11px] uppercase tracking-[0.25em] font-bold text-muted-foreground">
        Meta — {titulo}
      </div>
      <div className="font-display text-5xl font-extrabold text-foreground mt-2">
        {(meta / 1000).toFixed(0)}k
      </div>
      <div className="text-xs font-bold text-primary mt-1">{base}</div>
      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{desc}</p>
    </div>
  );
}
