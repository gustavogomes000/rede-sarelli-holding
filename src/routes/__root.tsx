import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl font-extrabold text-gradient-pink">404</h1>
        <h2 className="mt-4 font-display text-2xl text-foreground font-bold">Capítulo não encontrado</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Esta página do manual ainda não foi escrita.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full gradient-pink px-6 py-2.5 text-sm font-bold text-white shadow-pink"
          >
            Voltar à capa
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Holding Sarelli 2026 — Manual Estratégico" },
      {
        name: "description",
        content:
          "Manual interativo da campanha Dra. Fernanda Sarelli 2026. Holding política auditável, marca de desejo, eleição vencida no dado.",
      },
      { name: "author", content: "Holding Sarelli" },
      { property: "og:title", content: "Holding Sarelli 2026 — Manual Estratégico" },
      {
        property: "og:description",
        content: "Pitch deck vivo da campanha. Chama a Doutora.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,600;1,700;1,800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body className="bg-background text-foreground antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <SiteHeader />
      <Outlet />
    </>
  );
}
