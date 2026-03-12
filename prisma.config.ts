import { defineConfig } from "prisma/config";
import { readFileSync } from "fs";
import { resolve } from "path";

// Charge .env manuellement car prisma CLI a son propre runtime
function loadEnv(): string {
  const envPath = resolve(process.cwd(), ".env");
  try {
    const content = readFileSync(envPath, "utf-8");
    for (const line of content.split(/\r?\n/)) {
      const idx = line.indexOf("=");
      if (idx === -1 || line.trimStart().startsWith("#")) continue;
      const key = line.slice(0, idx).trim();
      const val = line.slice(idx + 1).trim();
      if (key === "DATABASE_URL" && !process.env.DATABASE_URL) {
        process.env.DATABASE_URL = val;
      }
    }
  } catch {
    // ignore si pas de .env
  }
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL manquant dans .env ou variables d'environnement");
  return url;
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: loadEnv(),
  },
});
