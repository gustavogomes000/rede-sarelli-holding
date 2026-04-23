import { ReactNode } from "react";
import { ChapterNav } from "./ChapterNav";

interface PageShellProps {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  tone?: "light" | "soft" | "dark";
}

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
  tone = "light",
}: PageShellProps) {
  const bg =
    tone === "dark"
      ? "dark bg-background"
      : tone === "soft"
        ? "bg-gradient-to-br from-pink-soft/40 via-white to-rose/30"
        : "bg-background";

  return (
    <main className={`${bg} min-h-screen`}>
      <div className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-primary" />
              <span className="text-[11px] uppercase tracking-[0.35em] text-primary font-bold">
                {eyebrow}
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight text-foreground">
              {title}
            </h1>
            {intro && (
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                {intro}
              </p>
            )}
          </div>
          <div className="mt-14">{children}</div>
          <ChapterNav />
        </div>
      </div>
    </main>
  );
}
