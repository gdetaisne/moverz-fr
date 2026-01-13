import fs from "node:fs/promises";
import path from "node:path";
import type { CityLongFormGuide } from "@/lib/city-longform";

function getCandidatePaths(citySlug: string): string[] {
  const rel = path.join("public", "data", "city-guides", `${citySlug}.json`);

  // In some deployments (Next standalone), process.cwd() may point to a nested directory.
  // We try a small set of upward fallbacks to reliably find /public.
  return [
    path.resolve(process.cwd(), rel),
    path.resolve(process.cwd(), "..", rel),
    path.resolve(process.cwd(), "..", "..", rel),
  ];
}

export async function getCityGuideFromJson(citySlug: string): Promise<CityLongFormGuide | null> {
  const candidates = getCandidatePaths(citySlug);

  for (const filePath of candidates) {
    try {
      const raw = await fs.readFile(filePath, "utf8");
      return JSON.parse(raw) as CityLongFormGuide;
    } catch (err: any) {
      if (err?.code === "ENOENT") continue;
      throw err;
    }
  }

  return null;
}
