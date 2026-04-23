import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

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
  const [dark, setDark] = useState(true);
  const { location } = useRouterState();

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

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

  return (
    <>
      <header
        className={`no-print fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-dark border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative h-9 w-9 rounded-full gradient-pink-gold flex items-center justify-center font-display font-bold text-white shadow-pink">
              S
            </div>
            <div className="leading-tight">
              <div className="font-display text-base font-bold tracking-tight text-white">
                Holding Sarelli
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold">
                Manual 2026
              </div>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-1">
            {NAV.map((item) => {
              const active = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`group relative px-3 py-2 text-xs font-medium uppercase tracking-wider transition-colors ${
                    active ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  <span className="text-gold/70 mr-1.5 font-mono text-[10px]">
                    {item.n}
                  </span>
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-2 right-2 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition"
              aria-label="Alternar tema"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="xl:hidden h-9 w-9 flex items-center justify-center rounded-full text-white hover:bg-white/10"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-px bg-white/5">
          <div
            className="h-full gradient-pink-gold transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="no-print fixed inset-0 top-16 z-40 glass-dark xl:hidden overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-8 space-y-1">
            {NAV.map((item) => {
              const active = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-baseline gap-4 px-4 py-3 rounded-lg transition ${
                    active ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5"
                  }`}
                >
                  <span className="text-gold font-mono text-xs">{item.n}</span>
                  <span className="font-display text-2xl">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
