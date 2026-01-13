import fs from "node:fs/promises";
import path from "node:path";
import type { CityLongFormGuide } from "@/lib/city-longform";

export async function getCityGuideFromJson(citySlug: string): Promise<CityLongFormGuide | null> {
  const filePath = path.join(process.cwd(), "public", "data", "city-guides", `${citySlug}.json`);

  try {
    const raw = await fs.readFile(filePath, "utf8");
    return JSON.parse(raw) as CityLongFormGuide;
  } catch (err: any) {
    if (err?.code === "ENOENT") return null;
    throw err;
  }
}
