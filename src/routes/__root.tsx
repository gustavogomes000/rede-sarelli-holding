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
      { title: "Operação Sarelli 2026 — Manual Estratégico" },
      {
        name: "description",
        content:
          "Manual interativo da campanha Dra. Fernanda Sarelli 2026. Operação política auditável, marca de desejo, eleição vencida no dado.",
      },
      { name: "author", content: "Operação Sarelli" },
      { property: "og:title", content: "Operação Sarelli 2026 — Manual Estratégico" },
      {
        property: "og:description",
        content: "Pitch deck vivo da campanha. Chama a Doutora.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Operação Sarelli 2026 — Manual Estratégico" },
      { name: "description", content: "Plataforma de Growth Hacking Político para campanha eleitoral, unindo branding e eficiência digital." },
      { property: "og:description", content: "Plataforma de Growth Hacking Político para campanha eleitoral, unindo branding e eficiência digital." },
      { name: "twitter:description", content: "Plataforma de Growth Hacking Político para campanha eleitoral, unindo branding e eficiência digital." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/bc3ec415-7b53-4c85-b4ed-89c899425765/id-preview-2c408b59--d0919fb6-42ac-4458-96b9-39740d737127.lovable.app-1776917918541.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/bc3ec415-7b53-4c85-b4ed-89c899425765/id-preview-2c408b59--d0919fb6-42ac-4458-96b9-39740d737127.lovable.app-1776917918541.png" },
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
