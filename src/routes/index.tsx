import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Capa,
});

function useCountdown(target: Date) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { days, hours, minutes, seconds };
}

function Capa() {
  const election = new Date("2026-10-04T08:00:00-03:00");
  const { days, hours, minutes, seconds } = useCountdown(election);

  return (
    <main className="dark relative min-h-screen overflow-hidden bg-background">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-br from-pink/20 via-transparent to-gold/10" />
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-pink/30 blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gold/20 blur-[120px]" />

      <section className="relative pt-28 pb-16 min-h-screen flex flex-col">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-700">
                <span className="h-px w-12 bg-gold" />
                <span className="text-xs uppercase tracking-[0.4em] text-gold font-medium">
                  Manual Estratégico · 2026
                </span>
              </div>

              <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.85] tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <span className="block text-foreground">Chama a</span>
                <span className="block text-gradient-pink">Doutora.</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
                A campanha da{" "}
                <span className="text-foreground font-semibold">Dra. Fernanda Sarelli</span> tratada
                como <span className="text-gold">holding corporativa</span>: marca de desejo,
                operação auditável, eleição vencida no dado.
              </p>

              <div className="flex flex-wrap gap-4 pt-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                <Link
                  to="/holding"
                  className="group inline-flex items-center gap-2 rounded-full gradient-pink-gold px-7 py-3.5 text-sm font-semibold text-white shadow-pink hover:shadow-gold transition-shadow"
                >
                  Começar pelo Capítulo 1
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/proximos-passos"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/5 transition"
                >
                  Plano de ação
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-6 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-gold" />
                  Cimed × João Campos × Tabata Amaral
                </div>
              </div>
            </div>

            {/* Countdown card */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-px gradient-pink-gold rounded-3xl opacity-40 blur-xl" />
                <div className="relative glass border border-white/10 rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-1">
                        Eleição
                      </div>
                      <div className="font-display text-2xl font-bold text-white">
                        4 de Outubro
                      </div>
                    </div>
                    <div className="h-12 w-12 rounded-full gradient-pink-gold flex items-center justify-center font-display text-xl font-bold text-white">
                      S
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-3">
                    {[
                      { v: days, l: "Dias" },
                      { v: hours, l: "Horas" },
                      { v: minutes, l: "Min" },
                      { v: seconds, l: "Seg" },
                    ].map((u) => (
                      <div key={u.l} className="text-center">
                        <div className="font-display text-3xl sm:text-4xl font-bold text-white tabular-nums">
                          {String(u.v).padStart(2, "0")}
                        </div>
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                          {u.l}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="gold-line my-8" />

                  <div className="space-y-3">
                    {[
                      ["DNA da marca", "Cimed"],
                      ["DNA da execução", "João Campos"],
                      ["DNA dos dados", "Tabata Amaral"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{k}</span>
                        <span className="text-white font-medium">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Manifest strip */}
        <div className="relative mt-16 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                ["01", "Marca de desejo", "Estética premium, tom firme, identidade Cimed."],
                ["02", "Operação militar", "HQ corporativa, exército de campo, KPIs por área."],
                ["03", "Voto auditável", "Cada lead rastreado da rua até a urna."],
              ].map(([n, t, d]) => (
                <div key={n} className="flex gap-4">
                  <span className="font-mono text-xs text-gold pt-1">{n}</span>
                  <div>
                    <div className="font-display text-lg font-semibold text-white">{t}</div>
                    <div className="text-sm text-muted-foreground">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
