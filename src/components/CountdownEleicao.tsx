import { useEffect, useState } from "react";

const TARGET = new Date("2026-10-04T08:00:00-03:00").getTime();

function diff() {
  const now = Date.now();
  const ms = Math.max(0, TARGET - now);
  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms % 86400000) / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return { days, hours, minutes, seconds };
}

export function CountdownEleicao() {
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setT(diff());
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  const items: [string, number][] = [
    ["Dias", t.days],
    ["Horas", t.hours],
    ["Min", t.minutes],
    ["Seg", t.seconds],
  ];

  return (
    <section className="relative bg-foreground text-white py-14">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_var(--pink)_0%,_transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-10 bg-pink" />
              <span className="text-[11px] uppercase tracking-[0.35em] text-pink font-bold">
                Cronômetro Oficial
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold leading-tight">
              Faltam <span className="text-pink">{mounted ? t.days : "—"} dias</span> para
              o <span className="italic">D-Day</span>.
            </h2>
            <p className="mt-3 text-sm text-white/70 leading-relaxed max-w-md">
              Domingo, <strong className="text-white">04 de outubro de 2026</strong> ·
              1º turno das eleições gerais. Cada hora conta na construção da Holding Sarelli.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-4 gap-3 sm:gap-4">
              {items.map(([label, val]) => (
                <div
                  key={label}
                  className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur p-4 sm:p-6 text-center"
                >
                  <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tabular-nums leading-none">
                    {mounted ? String(val).padStart(2, "0") : "—"}
                  </div>
                  <div className="mt-2 text-[10px] sm:text-xs uppercase tracking-widest text-pink font-bold">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
