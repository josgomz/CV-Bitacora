// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  output: "static",
  site: "https://josgomz.github.io", // Tu URL de GitHub Pages
  base: "/CV-Bitacora", // El nombre de tu repositorio
});
