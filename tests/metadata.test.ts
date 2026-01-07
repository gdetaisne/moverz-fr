import { describe, it, expect } from "vitest";
import { CITIES } from "@/lib/cities";
import { getCityPageMetadata } from "@/lib/seo/metadata";

function norm(s: string): string {
  return String(s || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[0-9]+/g, "#")
    .trim();
}

describe("Metadata", () => {
  it("city titles/descriptions are non-empty for Top 100 cities", () => {
    const top100 = CITIES.slice(0, 100);
    for (const city of top100) {
      const m = getCityPageMetadata(city);
      expect(String(m.title || "").trim().length).toBeGreaterThan(0);
      expect(String(m.description || "").trim().length).toBeGreaterThan(0);
    }
  });

  it("city titles are unique (normalized) for Top 100 cities", () => {
    const top100 = CITIES.slice(0, 100);
    const seen = new Set<string>();
    for (const city of top100) {
      const m = getCityPageMetadata(city);
      const key = norm(String(m.title || ""));
      expect(seen.has(key)).toBe(false);
      seen.add(key);
    }
  });
});


