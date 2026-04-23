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
  Trophy,
  Calculator,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { EditableText } from "@/components/EditableText";
import geoData from "@/data/goias-municipios.json";
import centroids from "@/data/goias-centroids.json";
import eleitorado from "@/data/eleitorado-go.json";

export const Route = createFileRoute("/inteligencia-eleitoral")({
  head: () => ({
    meta: [
      { title: "Inteligência Eleitoral GO · Operação Sarelli 2026" },
      {
        name: "description",
        content:
          "Mapa real de Goiás com 246 municípios, 56 zonas eleitorais e projeção de votos para Dra. Fernanda Sarelli — Deputada Estadual pelo NOVO em 2026.",
      },
      { property: "og:title", content: "Inteligência Eleitoral GO · Sarelli 2026" },
      {
        property: "og:description",
        content:
          "Mapa real, 246 municípios, 56 zonas e meta de 45.000 votos para a ALEGO em 2026.",
      },
    ],
  }),
  component: InteligenciaPage,
});

// ============= TIPAGENS =============
type EleitoradoMap = Record<string, number>;
type CentroidMap = Record<string, [number, number]>;
const ELE = eleitorado as EleitoradoMap;
const CENT = centroids as CentroidMap;

// ============= PARÂMETROS DE CAMPANHA =============
// Base histórica TSE 2022 — Dep. Estadual GO (41 cadeiras na ALEGO):
//  - Votação válida total ALEGO 2022: ~3,59 mi
//  - Quociente eleitoral 2022: ~87.451 votos
//  - Última cadeira (com sobras): ~28-32 mil votos
//  - Mais votado (Amilton Filho/PSD): ~110 mil
//  - NOVO sozinho não atinge QE → entra por federação ou meta competitiva
const META_MIN = 30_000; // entrada via sobras (último eleito 2022)
const META_SEGURA = 45_000; // cenário NOVO competitivo (média entre 5º e 30º eleito)
const META_CONFORTAVEL = 60_000; // top 25 eleitos
const QE_2022 = 87_451;

const TOTAL_GO_ELEITORADO = Object.values(ELE).reduce((s, v) => s + v, 0);
const ZONAS_TSE_GO = 56; // total oficial

// ============= REGIÕES =============
const regioesPlanejamento: Record<string, string> = {
  Metropolitana: "Goiânia,Aparecida de Goiânia,Trindade,Senador Canedo,Goianira,Nerópolis,Bonfinópolis,Aragoiânia,Hidrolândia,Bela Vista de Goiás,Goianápolis,Caldazinha,Abadia de Goiás,Brazabrantes,Caturaí,Damolândia,Santo Antônio de Goiás,Inhumas,Guapó,Terezópolis de Goiás",
  "Centro Goiano": "Anápolis,Pirenópolis,Goianésia,Jaraguá,Itaberaí,Itapuranga,Ceres,Rialma,Itapaci,Rubiataba,Carmo do Rio Verde,Nova Glória,Uruana,Morro Agudo de Goiás,São Luíz do Norte,Hidrolina,Barro Alto,São Francisco de Goiás,Petrolina de Goiás,Ouro Verde de Goiás,Araçu,Santa Isabel,Heitoraí,Itaguari,Itaguaru,Itauçu,Jesúpolis,Taquaral de Goiás,Campo Limpo de Goiás",
  "Entorno DF": "Luziânia,Águas Lindas de Goiás,Valparaíso de Goiás,Novo Gama,Cidade Ocidental,Santo Antônio do Descoberto,Planaltina,Cristalina,Formosa,Padre Bernardo,Cocalzinho de Goiás,Alexânia,Abadiânia,Corumbá de Goiás,Cabeceiras,Vila Boa,Mimoso de Goiás,Água Fria de Goiás,Vila Propício",
  "Sul Goiano": "Rio Verde,Catalão,Itumbiara,Caldas Novas,Quirinópolis,Goiatuba,Morrinhos,Pires do Rio,Ipameri,Piracanjuba,Bom Jesus de Goiás,Cachoeira Dourada,São Simão,Paranaiguara,Caçu,Cachoeira Alta,Marzagão,Joviânia,Vicentinópolis,Pontalina,Aloândia,Inaciolândia,Panamá,Buriti Alegre,Edéia,Indiara,Acreúna,Jandaia,Paraúna,Turvelândia,Castelândia,Maurilândia,Porteirão,Santa Helena de Goiás,Rio Quente,Corumbaíba,Nova Aurora,Davinópolis,Goiandira,Ouvidor,Três Ranchos,Cumari,Anhanguera,Campo Alegre de Goiás,Catalão,Urutaí,Orizona,Silvânia,Vianópolis,Santa Cruz de Goiás,Cristianópolis,Palmelo,Mairipotaba,Cromínia,Professor Jamil,Gameleira de Goiás,Água Limpa,Bonópolis",
  Sudoeste: "Jataí,Mineiros,Chapadão do Céu,Caiapônia,Doverlândia,Perolândia,Portelândia,Santa Rita do Araguaia,Aporé,Aparecida do Rio Doce,Itajá,Itarumã,Gouvelândia,Serranópolis,Montividiu,Santo Antônio da Barra,Palestina de Goiás",
  "Norte Goiano": "Porangatu,Niquelândia,Uruaçu,Minaçu,Crixás,Mara Rosa,Pilar de Goiás,Mutunópolis,Estrela do Norte,Trombas,Formoso,Amaralina,Campinaçu,Campinorte,Alto Horizonte,Santa Tereza de Goiás,Santa Terezinha de Goiás,Nova Iguaçu de Goiás,Montividiu do Norte,Novo Planalto,São Miguel do Araguaia,Bonópolis,Mundo Novo,Mozarlândia,Nova Crixás,Aruanã,Britânia,Faina,Itapirapuã,Matrinchã,Guaraíta,Araguapaz,Campos Verdes,Guarinos",
  Nordeste: "Posse,Iaciara,Flores de Goiás,Guarani de Goiás,Alvorada do Norte,Sítio d'Abadia,Mambaí,Damianópolis,Alto Paraíso de Goiás,Cavalcante,São João d'Aliança,Colinas do Sul,Teresina de Goiás,Nova Roma,Monte Alegre de Goiás,Divinópolis de Goiás,Simolândia,Buritinópolis,Campos Belos,São Domingos,Ipiranga de Goiás",
  "Oeste Goiano": "São Luís de Montes Belos,Iporá,Goiás,Sanclerlândia,Mossâmedes,Nova Veneza,Adelândia,Americano do Brasil,Buriti de Goiás,Firminópolis,Aurilândia,Cachoeira de Goiás,Córrego do Ouro,Diorama,Fazenda Nova,Ivolândia,Jaupaci,Moiporá,Montes Claros de Goiás,Novo Brasil,Piranhas,Turvânia,Aragarças,Bom Jardim de Goiás,Baliza,Israelândia,Amorinópolis,Arenópolis,Palminópolis,Cezarina,Edealina,Varjão,Avelinópolis,Campestre de Goiás,Santa Bárbara de Goiás,Santa Rosa de Goiás,Santa Fé de Goiás,Anicuns,Nazário,Palmeiras de Goiás,São João da Paraúna,Maranhão de Goiás,Adelândia,Jussara,Uirapuru,Leopoldo de Bulhões,Rianápolis,São Patrício,São Miguel do Passa Quatro,Lagoa Santa,Uruita",
};

const regiaoPorMun: Record<string, string> = {};
Object.entries(regioesPlanejamento).forEach(([reg, lista]) => {
  lista.split(",").forEach((m) => {
    regiaoPorMun[m.trim()] = reg;
  });
});

const regioesCor: Record<string, string> = {
  Metropolitana: "#ec4899",
  "Centro Goiano": "#f59e0b",
  "Entorno DF": "#8b5cf6",
  "Sul Goiano": "#10b981",
  Sudoeste: "#06b6d4",
  "Norte Goiano": "#f97316",
  Nordeste: "#84cc16",
  "Oeste Goiano": "#3b82f6",
};

// ============= LISTA UNIFICADA DE MUNICÍPIOS =============
type Municipio = {
  nome: string;
  eleitorado: number;
  regiao: string;
  lon: number;
  lat: number;
};

const municipios: Municipio[] = (geoData as any).features.map((f: any) => {
  const nome = f.properties.name as string;
  const c = CENT[nome] || [-49.5, -16];
  return {
    nome,
    eleitorado: ELE[nome] || 1500,
    regiao: regiaoPorMun[nome] || "Centro Goiano",
    lon: c[0],
    lat: c[1],
  };
});

// ============= PROJEÇÃO SVG (lon/lat → x/y) =============
const VIEW_W = 1000;
const VIEW_H = 1100;
const BBOX = { minLon: -53.3, maxLon: -45.9, minLat: -19.6, maxLat: -12.3 };
const project = (lon: number, lat: number): [number, number] => {
  const x = ((lon - BBOX.minLon) / (BBOX.maxLon - BBOX.minLon)) * VIEW_W;
  const y = ((BBOX.maxLat - lat) / (BBOX.maxLat - BBOX.minLat)) * VIEW_H;
  return [x, y];
};

const polygonToPath = (geom: any): string => {
  const rings: number[][][] =
    geom.type === "Polygon" ? geom.coordinates : geom.coordinates.flat();
  return rings
    .map((ring) => {
      return (
        ring
          .map(([lon, lat], i) => {
            const [x, y] = project(lon, lat);
            return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
          })
          .join("") + "Z"
      );
    })
    .join("");
};

// ============= COMPONENTE =============
function InteligenciaPage() {
  const [filtro, setFiltro] = useState("");
  const [regiaoSel, setRegiaoSel] = useState<string | null>(null);
  const [hover, setHover] = useState<Municipio | null>(null);
  const [metaCenario, setMetaCenario] = useState<"min" | "segura" | "conf">("segura");

  const metaAtual =
    metaCenario === "min" ? META_MIN : metaCenario === "conf" ? META_CONFORTAVEL : META_SEGURA;

  const municipiosFiltrados = useMemo(() => {
    return municipios.filter((c) => {
      const matchNome = c.nome.toLowerCase().includes(filtro.toLowerCase());
      const matchRegiao = !regiaoSel || c.regiao === regiaoSel;
      return matchNome && matchRegiao;
    });
  }, [filtro, regiaoSel]);

  const stats = useMemo(() => {
    const totalEleitorado = municipiosFiltrados.reduce((s, c) => s + c.eleitorado, 0);
    return {
      totalEleitorado,
      totalMun: municipiosFiltrados.length,
      potencial1pct: Math.round(totalEleitorado * 0.01 * 0.78),
      potencial3pct: Math.round(totalEleitorado * 0.03 * 0.78),
    };
  }, [municipiosFiltrados]);

  const maxEle = Math.max(...municipios.map((m) => m.eleitorado));

  // Cor do polígono baseado em eleitorado (heat)
  const heatColor = (e: number) => {
    const r = e / maxEle;
    if (r > 0.5) return "#dc2626";
    if (r > 0.2) return "#f97316";
    if (r > 0.08) return "#fbbf24";
    if (r > 0.03) return "#fda4af";
    if (r > 0.01) return "#fce7f3";
    return "#fef3c7";
  };

  // Calcular % do voto necessário por município conforme meta
  const fracaoMeta = metaAtual / TOTAL_GO_ELEITORADO; // % de penetração média necessária
  const top10 = [...municipios].sort((a, b) => b.eleitorado - a.eleitorado).slice(0, 10);
  const top10Eleitorado = top10.reduce((s, m) => s + m.eleitorado, 0);
  const concentracaoTop10 = (top10Eleitorado / TOTAL_GO_ELEITORADO) * 100;

  return (
    <PageShell
      eyebrow="Capítulo 05 · Inteligência Eleitoral GO"
      title={
        <EditableText
          id="inteligencia.hero.titulo"
          defaultValue="246 cidades. 56 zonas. 1 missão: 45 mil votos para a ALEGO."
          as="span"
          multiline
        />
      }
      intro={
        <EditableText
          id="inteligencia.hero.intro"
          defaultValue="Mapa real de Goiás com todos os municípios e zonas eleitorais. Projeção construída sobre o histórico TSE 2022 e o cenário do partido NOVO em 2026 para Dra. Fernanda Sarelli — Deputada Estadual."
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
          value={(TOTAL_GO_ELEITORADO / 1_000_000).toFixed(2) + " mi"}
          sub="Base TSE 2024 (246 municípios)"
          color="from-rose-500 to-pink-600"
        />
        <KpiCard
          icon={Building2}
          label="Municípios"
          value="246"
          sub="100% de cobertura GO"
          color="from-amber-500 to-orange-500"
        />
        <KpiCard
          icon={Layers}
          label="Zonas Eleitorais"
          value={String(ZONAS_TSE_GO)}
          sub="Total oficial TRE-GO"
          color="from-violet-500 to-purple-600"
        />
        <KpiCard
          icon={Trophy}
          label="Meta ALEGO"
          value="45k votos"
          sub="Cenário NOVO competitivo"
          color="from-emerald-500 to-teal-600"
        />
      </section>

      {/* ============= MAPA REAL DE GOIÁS ============= */}
      <section className="mb-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-2xl border border-border/60 bg-gradient-to-br from-slate-50 via-white to-pink-50/40 p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-display text-2xl font-extrabold text-foreground flex items-center gap-2">
                <Flame className="h-6 w-6 text-rose-500" />
                Mapa de Goiás — eleitorado por município
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                246 municípios com cores reais por densidade eleitoral. Passe o mouse sobre qualquer cidade.
              </p>
            </div>
          </div>

          <div className="relative w-full overflow-hidden rounded-xl bg-gradient-to-br from-amber-50 to-pink-50">
            <svg
              viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
              className="w-full h-auto"
              style={{ filter: "drop-shadow(0 8px 24px rgba(236,72,153,0.18))" }}
            >
              <defs>
                <radialGradient id="pulseRed">
                  <stop offset="0%" stopColor="#dc2626" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
                </radialGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Polígonos dos 246 municípios */}
              {(geoData as any).features.map((f: any) => {
                const nome = f.properties.name;
                const e = ELE[nome] || 0;
                const reg = regiaoPorMun[nome];
                const isHighlighted = !regiaoSel || reg === regiaoSel;
                const isFiltered =
                  filtro && !nome.toLowerCase().includes(filtro.toLowerCase());
                const fill = regiaoSel
                  ? isHighlighted
                    ? regioesCor[reg] || "#ec4899"
                    : "#e5e7eb"
                  : heatColor(e);
                const opacity = isFiltered ? 0.2 : 1;
                const isHover = hover?.nome === nome;
                return (
                  <path
                    key={nome}
                    d={polygonToPath(f.geometry)}
                    fill={fill}
                    fillOpacity={isHover ? 1 : 0.85}
                    stroke={isHover ? "#0f172a" : "#ffffff"}
                    strokeWidth={isHover ? 1.5 : 0.4}
                    opacity={opacity}
                    style={{ cursor: "pointer", transition: "all 0.2s" }}
                    onMouseEnter={() =>
                      setHover({
                        nome,
                        eleitorado: e,
                        regiao: reg,
                        lon: CENT[nome]?.[0] || 0,
                        lat: CENT[nome]?.[1] || 0,
                      })
                    }
                    onMouseLeave={() => setHover(null)}
                  />
                );
              })}

              {/* Pulsos nos top 5 municípios */}
              {top10.slice(0, 5).map((m) => {
                const [x, y] = project(m.lon, m.lat);
                return (
                  <g key={`pulse-${m.nome}`} style={{ pointerEvents: "none" }}>
                    <circle cx={x} cy={y} r="20" fill="url(#pulseRed)">
                      <animate
                        attributeName="r"
                        values="10;30;10"
                        dur="2.5s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.9;0;0.9"
                        dur="2.5s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle cx={x} cy={y} r="4" fill="#dc2626" filter="url(#glow)" />
                  </g>
                );
              })}

              {/* Tooltip */}
              {hover && (() => {
                const [x, y] = project(hover.lon, hover.lat);
                const w = 240;
                const h = 90;
                const tx = Math.min(Math.max(x - w / 2, 10), VIEW_W - w - 10);
                const ty = y > VIEW_H / 2 ? y - h - 15 : y + 15;
                const votosNec = Math.round(hover.eleitorado * fracaoMeta);
                return (
                  <g style={{ pointerEvents: "none" }}>
                    <rect
                      x={tx}
                      y={ty}
                      width={w}
                      height={h}
                      rx="8"
                      fill="#0f172a"
                      opacity="0.96"
                      filter="url(#glow)"
                    />
                    <text x={tx + 14} y={ty + 24} fontSize="20" fill="white" fontWeight="800">
                      {hover.nome}
                    </text>
                    <text x={tx + 14} y={ty + 46} fontSize="14" fill="#fbbf24" fontWeight="700">
                      {hover.eleitorado.toLocaleString("pt-BR")} eleitores
                    </text>
                    <text x={tx + 14} y={ty + 64} fontSize="12" fill="#a78bfa">
                      {hover.regiao}
                    </text>
                    <text x={tx + 14} y={ty + 80} fontSize="12" fill="#10b981" fontWeight="700">
                      Meta cidade: ~{votosNec.toLocaleString("pt-BR")} votos
                    </text>
                  </g>
                );
              })()}
            </svg>
          </div>

          <div className="mt-3 flex items-center justify-between flex-wrap gap-2 text-[10px] uppercase tracking-wider font-bold">
            <span className="text-muted-foreground">Densidade eleitoral</span>
            <div className="flex items-center gap-1">
              <span className="text-muted-foreground">Baixa</span>
              <div className="flex h-2.5 w-40 rounded-full overflow-hidden border border-border/40">
                <div className="flex-1" style={{ background: "#fef3c7" }} />
                <div className="flex-1" style={{ background: "#fce7f3" }} />
                <div className="flex-1" style={{ background: "#fda4af" }} />
                <div className="flex-1" style={{ background: "#fbbf24" }} />
                <div className="flex-1" style={{ background: "#f97316" }} />
                <div className="flex-1" style={{ background: "#dc2626" }} />
              </div>
              <span className="text-muted-foreground">Alta</span>
            </div>
          </div>
        </div>

        {/* Legenda Regiões */}
        <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-lg">
          <h3 className="font-display text-lg font-extrabold mb-4 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-rose-500" />
            8 Regiões de GO
          </h3>
          <div className="space-y-2 max-h-[600px] overflow-auto pr-1">
            <button
              onClick={() => setRegiaoSel(null)}
              className={`w-full text-left rounded-lg border px-3 py-2 text-xs font-semibold transition-all ${
                !regiaoSel
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border/40 hover:border-primary/50"
              }`}
            >
              Mostrar todas as regiões
            </button>
            {Object.entries(regioesCor).map(([nome, cor]) => {
              const muns = municipios.filter((m) => m.regiao === nome);
              const ele = muns.reduce((s, m) => s + m.eleitorado, 0);
              return (
                <button
                  key={nome}
                  onClick={() => setRegiaoSel(regiaoSel === nome ? null : nome)}
                  className={`w-full text-left rounded-lg border px-3 py-2 transition-all ${
                    regiaoSel === nome
                      ? "border-primary bg-primary/5 shadow-md"
                      : "border-border/40 hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: cor }} />
                    <span className="text-xs font-extrabold">{nome}</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground leading-snug pl-4">
                    {muns.length} municípios · {(ele / 1000).toFixed(0)}k eleitores
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============= CALCULADORA DE META — DEP. ESTADUAL ============= */}
      <section className="mb-12 rounded-3xl bg-gradient-to-br from-slate-900 via-violet-900 to-rose-900 p-8 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-rose-500/20 blur-3xl" />
        <div className="absolute -left-24 -bottom-24 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="relative">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-xl bg-rose-500/20 flex items-center justify-center backdrop-blur">
              <Calculator className="h-6 w-6 text-rose-300" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-rose-300 font-bold">
                Projeção de votos · ALEGO 2026
              </div>
              <h2 className="font-display text-3xl font-extrabold">
                Quantos votos a Doutora precisa?
              </h2>
            </div>
          </div>
          <p className="text-sm text-white/70 max-w-3xl mb-6">
            Base histórica TSE 2022: <strong>3,59 mi votos válidos</strong> para deputado estadual em GO,
            com Quociente Eleitoral de <strong>{QE_2022.toLocaleString("pt-BR")}</strong> votos.
            Como o NOVO sozinho dificilmente atinge o QE, a entrada se dá pelas <strong>sobras</strong> ou
            por <strong>federação partidária</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
            <CenarioBtn
              ativo={metaCenario === "min"}
              onClick={() => setMetaCenario("min")}
              titulo="Mínimo (sobras)"
              valor={META_MIN}
              desc="Última cadeira eleita em 2022"
              cor="from-amber-500 to-orange-600"
            />
            <CenarioBtn
              ativo={metaCenario === "segura"}
              onClick={() => setMetaCenario("segura")}
              titulo="Meta segura"
              valor={META_SEGURA}
              desc="Posição mediana entre eleitos"
              cor="from-rose-500 to-pink-600"
              destaque
            />
            <CenarioBtn
              ativo={metaCenario === "conf"}
              onClick={() => setMetaCenario("conf")}
              titulo="Confortável"
              valor={META_CONFORTAVEL}
              desc="Top 25 mais votados"
              cor="from-violet-500 to-purple-600"
            />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <ProjStat
              label="Meta total"
              value={metaAtual.toLocaleString("pt-BR")}
              sub="votos válidos"
            />
            <ProjStat
              label="% do eleitorado GO"
              value={((metaAtual / TOTAL_GO_ELEITORADO) * 100).toFixed(2) + "%"}
              sub={`de ${(TOTAL_GO_ELEITORADO / 1_000_000).toFixed(1)} mi`}
            />
            <ProjStat
              label="Concentração Top 10"
              value={concentracaoTop10.toFixed(0) + "%"}
              sub="do eleitorado em 10 cidades"
            />
            <ProjStat
              label="Voto médio / cidade"
              value={Math.round(metaAtual / 246).toLocaleString("pt-BR")}
              sub="média se distribuído igual"
            />
          </div>

          <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-white/80 leading-relaxed">
            <strong className="text-amber-300">Estratégia recomendada:</strong> concentrar 60% do
            esforço nos top 10 municípios (Goiânia, Aparecida, Anápolis, Rio Verde, Luziânia, Águas Lindas,
            Valparaíso, Trindade, Senador Canedo, Catalão) — eles representam{" "}
            <strong>{concentracaoTop10.toFixed(0)}%</strong> do eleitorado de GO. Os 30% restantes do esforço
            nas cidades médias (10k-50k eleitores) e 10% para presença simbólica nas cidades pequenas.
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
            {stats.totalMun} de 246 municípios
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <MiniStat label="Eleitorado" value={(stats.totalEleitorado / 1000).toFixed(0) + "k"} />
          <MiniStat
            label="% do total GO"
            value={((stats.totalEleitorado / TOTAL_GO_ELEITORADO) * 100).toFixed(1) + "%"}
          />
          <MiniStat
            label="Potencial 1%"
            value={stats.potencial1pct.toLocaleString("pt-BR")}
          />
          <MiniStat
            label="Potencial 3%"
            value={stats.potencial3pct.toLocaleString("pt-BR")}
          />
        </div>
      </section>

      {/* ============= TABELA — TODOS OS 246 MUNICÍPIOS ============= */}
      <section className="mb-12 rounded-2xl border border-border/60 bg-card p-6 shadow-lg">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <h3 className="font-display text-xl font-extrabold flex items-center gap-2">
            <Vote className="h-5 w-5 text-primary" />
            Detalhamento — todos os {municipios.length} municípios
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

        <div className="text-xs text-muted-foreground mb-3">
          Coluna <strong className="text-rose-600">Meta cidade</strong> = projeção proporcional para atingir{" "}
          <strong>{metaAtual.toLocaleString("pt-BR")}</strong> votos no estado.
        </div>

        <div className="overflow-x-auto max-h-[700px] overflow-y-auto rounded-lg border border-border/30">
          <table className="w-full text-sm">
            <thead className="sticky top-0 bg-card z-10">
              <tr className="border-b border-border/60 text-left text-[11px] uppercase tracking-wider text-muted-foreground">
                <th className="py-3 px-3 font-bold">#</th>
                <th className="py-3 pr-4 font-bold">Município</th>
                <th className="py-3 pr-4 font-bold">Região</th>
                <th className="py-3 pr-4 font-bold text-right">Eleitorado</th>
                <th className="py-3 pr-4 font-bold text-right">% GO</th>
                <th className="py-3 pr-4 font-bold text-right">Pot. 3%</th>
                <th className="py-3 pr-4 font-bold text-right">Meta cidade</th>
              </tr>
            </thead>
            <tbody>
              {municipiosFiltrados
                .sort((a, b) => b.eleitorado - a.eleitorado)
                .map((c, i) => {
                  const cor = regioesCor[c.regiao];
                  const pot3 = Math.round(c.eleitorado * 0.03 * 0.78);
                  const metaCidade = Math.round(c.eleitorado * fracaoMeta);
                  const pctGO = (c.eleitorado / TOTAL_GO_ELEITORADO) * 100;
                  return (
                    <tr
                      key={c.nome}
                      className="border-b border-border/30 hover:bg-pink-soft/20 transition-colors"
                      onMouseEnter={() => setHover(c)}
                      onMouseLeave={() => setHover(null)}
                    >
                      <td className="py-2.5 px-3 text-muted-foreground font-mono text-xs">
                        {i + 1}
                      </td>
                      <td className="py-2.5 pr-4 font-bold text-foreground">{c.nome}</td>
                      <td className="py-2.5 pr-4">
                        <span
                          className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                          style={{ background: `${cor}15`, color: cor }}
                        >
                          <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ background: cor }}
                          />
                          {c.regiao}
                        </span>
                      </td>
                      <td className="py-2.5 pr-4 text-right font-mono font-bold">
                        {c.eleitorado.toLocaleString("pt-BR")}
                      </td>
                      <td className="py-2.5 pr-4 text-right font-mono text-xs text-muted-foreground">
                        {pctGO.toFixed(2)}%
                      </td>
                      <td className="py-2.5 pr-4 text-right font-mono text-amber-600">
                        {pot3.toLocaleString("pt-BR")}
                      </td>
                      <td className="py-2.5 pr-4 text-right font-mono font-extrabold text-rose-600">
                        {metaCidade.toLocaleString("pt-BR")}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          {municipiosFiltrados.length === 0 && (
            <div className="text-center py-12 text-muted-foreground text-sm">
              Nenhum município encontrado.
            </div>
          )}
        </div>
        <div className="mt-3 text-[11px] text-muted-foreground">
          Total filtrado: <strong>{stats.totalMun}</strong> municípios ·{" "}
          <strong>{stats.totalEleitorado.toLocaleString("pt-BR")}</strong> eleitores
        </div>
      </section>

      {/* ============= 56 ZONAS ELEITORAIS ============= */}
      <section className="mb-12 rounded-2xl border border-border/60 bg-card p-6 shadow-lg">
        <h3 className="font-display text-xl font-extrabold flex items-center gap-2 mb-4">
          <Layers className="h-5 w-5 text-violet-600" />
          56 Zonas Eleitorais de Goiás
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Distribuição oficial TRE-GO. Cada zona pode abranger 1 ou mais municípios.
        </p>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-2">
          {Array.from({ length: ZONAS_TSE_GO }, (_, i) => i + 1).map((z) => {
            const corIdx = z % 8;
            const cor = Object.values(regioesCor)[corIdx];
            return (
              <div
                key={z}
                className="aspect-square rounded-lg flex items-center justify-center font-mono font-bold text-xs hover:scale-110 transition-transform cursor-pointer"
                style={{
                  background: `${cor}20`,
                  color: cor,
                  border: `1.5px solid ${cor}40`,
                }}
                title={`Zona ${z}`}
              >
                {String(z).padStart(2, "0")}
              </div>
            );
          })}
        </div>
      </section>

      {/* ============= NOTA TÉCNICA ============= */}
      <section className="rounded-2xl border-2 border-dashed border-border/60 bg-muted/30 p-6">
        <h4 className="font-display text-sm font-extrabold uppercase tracking-wider text-muted-foreground mb-2">
          Fonte e metodologia
        </h4>
        <EditableText
          id="inteligencia.fonte"
          defaultValue="Geometria oficial dos 246 municípios de Goiás (IBGE/TBrugz). Eleitorado e zonas: TSE/TRE-GO 2024. Quociente Eleitoral 2022 ALEGO: 87.451 votos válidos (3,59 mi de votos válidos / 41 cadeiras). Meta de 45.000 votos baseada na média entre 5º e 30º deputado estadual eleito em 2022, considerando que o NOVO entrará por sobras ou federação. Projeção 'Meta cidade' = (eleitorado_municipio × meta_estadual) / eleitorado_total_GO — distribuição proporcional ao tamanho. Ajustes táticos: concentrar 60% do esforço nos top 10 municípios."
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
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${color}`} />
      <div
        className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-md mb-3`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
        {label}
      </div>
      <div className="font-display text-3xl font-extrabold text-foreground mt-1">{value}</div>
      <div className="text-xs text-muted-foreground mt-1">{sub}</div>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white/10 backdrop-blur p-4 border border-white/10">
      <div className="text-[10px] uppercase tracking-wider opacity-80 font-bold">{label}</div>
      <div className="font-display text-2xl font-extrabold mt-1">{value}</div>
    </div>
  );
}

function ProjStat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-xl bg-white/10 backdrop-blur p-4 border border-white/15">
      <div className="text-[10px] uppercase tracking-wider opacity-80 font-bold">{label}</div>
      <div className="font-display text-2xl font-extrabold mt-1 text-amber-300">{value}</div>
      <div className="text-[10px] opacity-70 mt-0.5">{sub}</div>
    </div>
  );
}

function CenarioBtn({
  ativo,
  onClick,
  titulo,
  valor,
  desc,
  cor,
  destaque,
}: {
  ativo: boolean;
  onClick: () => void;
  titulo: string;
  valor: number;
  desc: string;
  cor: string;
  destaque?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-left rounded-xl p-4 border-2 transition-all relative overflow-hidden ${
        ativo
          ? "border-white bg-white/15 scale-[1.02] shadow-2xl"
          : "border-white/20 bg-white/5 hover:bg-white/10"
      }`}
    >
      {destaque && (
        <span className="absolute top-2 right-2 text-[9px] font-extrabold uppercase tracking-wider bg-amber-400 text-slate-900 px-1.5 py-0.5 rounded">
          Recomendado
        </span>
      )}
      <div className={`inline-flex h-1 w-12 rounded-full bg-gradient-to-r ${cor} mb-3`} />
      <div className="text-[10px] uppercase tracking-wider opacity-80 font-bold">{titulo}</div>
      <div className="font-display text-3xl font-extrabold mt-1">
        {(valor / 1000).toFixed(0)}k
      </div>
      <div className="text-[11px] opacity-70 mt-1">{desc}</div>
    </button>
  );
}
