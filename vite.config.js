import { resolve } from "path";

import { ghPages } from "vite-plugin-gh-pages";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

export  default defineConfig({
  base: "/e-agenda-vite/",
  plugins:[ghPages()],
  root: root, 
  build: {
    outDir: outDir,
    empytOutDir: true,
    rollupOptions: {
        input: {
           index: resolve(root, "index.html"),
           tarefaList: resolve(root, "tarefas/tarefa.list.html"),
           tarefaCreate: resolve(root, "tarefas/tarefa.create.html"),
           contatosList: resolve(root, "contatos/contatos.list.html"),
           contatosCreate: resolve(root, "contatos/contatos.create.html"),
        }
    }
  },
  publicDir: "../public"
});