import { CITIES } from "@/lib/cities";
import { getCityLongFormGuide } from "@/lib/city-longform";

function toCsvRow(fields: Array<string | number>): string {
  return fields
    .map((v) => {
      const s = String(v ?? "");
      // naive CSV escaping
      if (s.includes(",") || s.includes('"') || s.includes("\n")) return `"${s.replace(/"/g, '""')}"`;
      return s;
    })
    .join(",");
}

const MIN_WORDS = 2000;

const rows: string[] = [];
rows.push(toCsvRow(["slug", "city_name", "region", "guide_word_count", "estimated_minutes", "ok_2000plus"]));

let failing = 0;

for (const c of CITIES) {
  const guide = getCityLongFormGuide(c.slug, c.nameCapitalized);
  const ok = guide.wordCount >= MIN_WORDS;
  if (!ok) failing++;
  rows.push(toCsvRow([c.slug, c.nameCapitalized, c.region, guide.wordCount, guide.estimatedReadingMinutes, ok ? "YES" : "NO"]));
}

process.stdout.write(rows.join("\n") + "\n");

// Non-zero exit if any city doesn't hit the threshold (useful in CI / manual checks)
if (failing) {
  // eslint-disable-next-line no-console
  console.error(`\n❌ ${failing} villes sous ${MIN_WORDS} mots (guide long-form)\n`);
  process.exit(2);
}


