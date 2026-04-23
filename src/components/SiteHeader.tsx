import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
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
  const [dark, setDark] = useState(false);
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
          scrolled
            ? "glass border-b border-border shadow-sm"
            : "bg-white/60 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logoHeader}
              alt="Doutora Fernanda Sarelli — Chama a Doutora"
              className="h-12 w-auto object-contain"
            />
            <div className="hidden md:block leading-tight border-l border-border pl-3 ml-1">
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">
                Manual Estratégico
              </div>
              <div className="font-display text-sm font-bold text-foreground">
                Holding Sarelli 2026
              </div>
            </div>
          </Link>

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

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full text-foreground/70 hover:text-primary hover:bg-accent transition"
              aria-label="Alternar tema"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="xl:hidden h-10 w-10 flex items-center justify-center rounded-full text-foreground hover:bg-accent"
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
        <div className="no-print fixed inset-0 top-20 z-40 glass xl:hidden overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
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
