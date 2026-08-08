import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const dist = resolve("dist");
const indexFile = resolve(dist, "index.html");
const fallbackFile = resolve(dist, "404.html");

if (!existsSync(indexFile)) {
  throw new Error("dist/index.html was not found. Run the Vite build before creating the GitHub Pages fallback.");
}

copyFileSync(indexFile, fallbackFile);
