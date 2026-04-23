// @lovable.dev/vite-tanstack-config already includes:
//   tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//   componentTagger (dev-only), VITE_* env injection, @ path alias, etc.
// Para deploy na Vercel adicionamos o plugin nitro(), que substitui o adaptador
// cloudflare em build de produção quando rodando em ambiente Vercel.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

export default defineConfig({
  vite: {
    plugins: [nitro()],
  },
});
