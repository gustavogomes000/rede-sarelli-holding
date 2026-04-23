import { ReactNode } from "react";

interface PageShellProps {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  tone?: "dark" | "light";
}

export function PageShell({ eyebrow, title, intro, children, tone = "dark" }: PageShellProps) {
  const isDark = tone === "dark";
  return (
    <main className={isDark ? "dark bg-background min-h-screen" : "bg-cream min-h-screen"}>
      <div className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
                {eyebrow}
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-foreground">
              {title}
            </h1>
            {intro && (
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                {intro}
              </p>
            )}
          </div>
          <div className="mt-16">{children}</div>
        </div>
      </div>
    </main>
  );
}
