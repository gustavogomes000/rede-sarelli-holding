import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import logoHeader from "@/assets/sarelli-logo-header.png";

const NAV = [
  { to: "/", label: "Capa", n: "01" },
  { to: "/holding", label: "Holding", n: "02" },
  { to: "/pilares", label: "Pilares", n: "03" },
  { to: "/organograma", label: "Organograma", n: "04" },
  { to: "/marca", label: "Marca", n: "05" },
  { to: "/roadmap", label: "Roadmap", n: "06" },
  { to: "/rede-sarelli", label: "Rede Sarelli", n: "07" },
  { to: "/funil", label: "Funil", n: "08" },
  { to: "/promotores", label: "Promotores", n: "09" },
  { to: "/governanca", label: "Governança", n: "10" },
  { to: "/proximos-passos", label: "Próximos Passos", n: "11" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const currentIdx = NAV.findIndex((n) => n.to === location.pathname);
  const progress = currentIdx >= 0 ? ((currentIdx + 1) / NAV.length) * 100 : 0;
  const prev = currentIdx > 0 ? NAV[currentIdx - 1] : null;
  const next = currentIdx >= 0 && currentIdx < NAV.length - 1 ? NAV[currentIdx + 1] : null;

  return (
    <>
      <header
        className={`no-print fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass border-b border-border shadow-sm"
            : "bg-white/60 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* LOGO sozinho */}
          <Link to="/" className="flex items-center group shrink-0">
            <img
              src={logoHeader}
              alt="Doutora Fernanda Sarelli — Chama a Doutora"
              className="h-16 sm:h-20 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* NAV de capítulos (desktop) */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {NAV.map((item) => {
              const active = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`group relative px-2.5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors rounded-md ${
                    active
                      ? "text-primary bg-accent"
                      : "text-foreground/60 hover:text-primary hover:bg-accent/60"
                  }`}
                >
                  <span className="text-primary/50 mr-1 font-mono text-[9px]">
                    {item.n}
                  </span>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CONTROLES: Prev / Next / Menu */}
          <div className="flex items-center gap-2">
            {/* Navegação prev/next — pílula elegante */}
            <div className="flex items-center gap-1 rounded-full border border-primary/20 bg-gradient-to-r from-white via-pink-50/40 to-white backdrop-blur-md px-1.5 py-1 shadow-[0_4px_20px_-8px_rgba(236,72,153,0.35)]">
              {prev ? (
                <Link
                  to={prev.to}
                  className="group h-10 w-10 flex items-center justify-center rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                  aria-label={`Anterior: ${prev.label}`}
                  title={`← ${prev.label}`}
                >
                  <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
                </Link>
              ) : (
                <span className="h-10 w-10 flex items-center justify-center text-foreground/15 cursor-not-allowed">
                  <ChevronLeft className="h-5 w-5" />
                </span>
              )}
              <div className="px-3 min-w-[64px] text-center">
                <div className="text-[10px] font-mono uppercase tracking-wider text-primary/50 leading-none mb-0.5">
                  Cap.
                </div>
                <div className="text-sm font-display font-bold text-primary tabular-nums leading-none">
                  {String(currentIdx + 1).padStart(2, "0")}
                  <span className="text-primary/30 mx-0.5">/</span>
                  <span className="text-primary/60 text-xs">{String(NAV.length).padStart(2, "0")}</span>
                </div>
              </div>
              {next ? (
                <Link
                  to={next.to}
                  className="group h-10 w-10 flex items-center justify-center rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                  aria-label={`Próxima: ${next.label}`}
                  title={`${next.label} →`}
                >
                  <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              ) : (
                <span className="h-10 w-10 flex items-center justify-center text-foreground/15 cursor-not-allowed">
                  <ChevronRight className="h-5 w-5" />
                </span>
              )}
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="xl:hidden h-11 w-11 flex items-center justify-center rounded-full text-foreground hover:bg-accent transition"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div className="h-0.5 bg-border/40">
          <div
            className="h-full gradient-pink transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {open && (
        <div className="no-print fixed inset-0 top-24 z-40 glass xl:hidden overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-8 space-y-1">
            {NAV.map((item) => {
              const active = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-baseline gap-4 px-4 py-3 rounded-lg transition ${
                    active ? "bg-accent text-primary" : "text-foreground/70 hover:bg-accent/60"
                  }`}
                >
                  <span className="text-primary font-mono text-xs">{item.n}</span>
                  <span className="font-display text-2xl font-bold">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
