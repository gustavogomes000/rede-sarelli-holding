import { Link, useLocation } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";

export const chapters = [
  { path: "/", label: "Capa", num: "00" },
  { path: "/organograma", label: "Organograma", num: "01" },
  { path: "/estrategia-digital", label: "Estratégia Digital", num: "02" },
  { path: "/planejamento", label: "Planejamento até 04/Out", num: "03" },
  { path: "/rede-sarelli", label: "Rede Sarelli", num: "04" },
  { path: "/governanca", label: "Governança", num: "05" },
] as const;

export function ChapterNav() {
  const { pathname } = useLocation();
  const idx = chapters.findIndex((c) => c.path === pathname);
  if (idx === -1) return null;

  const prev = idx > 0 ? chapters[idx - 1] : null;
  const next = idx < chapters.length - 1 ? chapters[idx + 1] : null;

  return (
    <nav className="mt-20 border-t border-border/60 pt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
        {/* Anterior */}
        <div>
          {prev ? (
            <Link
              to={prev.path}
              className="group flex items-center gap-4 rounded-xl border border-border/60 bg-card p-5 hover:border-primary hover:shadow-lg transition-all h-full"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                <ArrowLeft className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">
                  ← Anterior · Cap. {prev.num}
                </div>
                <div className="font-display font-bold text-foreground truncate">
                  {prev.label}
                </div>
              </div>
            </Link>
          ) : (
            <div className="rounded-xl border border-dashed border-border/40 p-5 h-full" />
          )}
        </div>

        {/* Índice */}
        <Link
          to="/"
          className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-primary/10 to-rose/20 border border-primary/30 p-5 hover:from-primary hover:to-rose hover:text-primary-foreground transition-all"
        >
          <BookOpen className="h-4 w-4" />
          <span className="text-sm font-bold uppercase tracking-wider">
            {String(idx).padStart(2, "0")} / {String(chapters.length - 1).padStart(2, "0")} · Índice
          </span>
        </Link>

        {/* Próximo */}
        <div>
          {next ? (
            <Link
              to={next.path}
              className="group flex items-center gap-4 rounded-xl border border-border/60 bg-card p-5 hover:border-primary hover:shadow-lg transition-all text-right h-full"
            >
              <div className="min-w-0 ml-auto">
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">
                  Próximo · Cap. {next.num} →
                </div>
                <div className="font-display font-bold text-foreground truncate">
                  {next.label}
                </div>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ) : (
            <div className="rounded-xl border border-dashed border-border/40 p-5 h-full" />
          )}
        </div>
      </div>
    </nav>
  );
}
