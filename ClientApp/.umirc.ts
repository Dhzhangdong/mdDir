import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "home", layout: false },
    { path: "/doc/:id/*", component: "index" },
  ],
  npmClient: 'npm',
  copy: [
    { from: "src/doc", to: "dist/doc" }
  ],
  esbuildMinifyIIFE: true,
});
