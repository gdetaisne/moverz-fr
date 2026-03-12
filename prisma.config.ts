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
  // En build Docker (prisma generate), DATABASE_URL peut être absent.
  // La vraie URL est injectée à runtime via les variables d'environnement CapRover.
  return url ?? "postgresql://placeholder:placeholder@localhost:5432/placeholder";
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
