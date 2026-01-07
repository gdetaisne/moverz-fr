import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.cwd());

function slugifyCityName(name) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/&/g, " et ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function readText(relPath) {
  return fs.readFileSync(path.join(root, relPath), "utf8");
}

function parseExtraCities(tsText) {
  // matches: { nameCapitalized: "X", region: "Y" }
  const re = /\{\s*nameCapitalized:\s*"([^"]+)"\s*,\s*region:\s*"([^"]+)"\s*\}/g;
  const out = [];
  let m;
  while ((m = re.exec(tsText))) {
    out.push({ nameCapitalized: m[1], region: m[2] });
  }
  return out;
}

function parseCoreCities(tsText) {
  // best-effort: find CORE_CITIES block and extract slugs + nameCapitalized
  const coreStart = tsText.indexOf("const CORE_CITIES");
  if (coreStart === -1) return [];
  const slice = tsText.slice(coreStart);
  const blockEnd = slice.indexOf("];");
  const block = blockEnd === -1 ? slice : slice.slice(0, blockEnd);

  const re = /slug:\s*'([^']+)'\s*,[\s\S]*?nameCapitalized:\s*'([^']+)'\s*,[\s\S]*?region:\s*'([^']+)'/g;
  const out = [];
  let m;
  while ((m = re.exec(block))) {
    out.push({ slug: m[1], nameCapitalized: m[2], region: m[3] });
  }
  return out;
}

function uniq(arr) {
  return Array.from(new Set(arr));
}

function main() {
  const extraText = readText("lib/cities-extra.ts");
  const citiesText = readText("lib/cities.ts");

  const extras = parseExtraCities(extraText);
  const core = parseCoreCities(citiesText);

  const extraSlugs = extras.map((c) => ({
    ...c,
    slug: slugifyCityName(c.nameCapitalized),
  }));

  const coreSlugs = core.map((c) => c.slug);

  const extraSlugList = extraSlugs.map((c) => c.slug);
  const collisionsInExtras = [];
  {
    const counts = new Map();
    for (const s of extraSlugList) counts.set(s, (counts.get(s) || 0) + 1);
    for (const [slug, count] of counts.entries()) {
      if (count > 1) {
        collisionsInExtras.push({
          slug,
          count,
          names: extraSlugs.filter((x) => x.slug === slug).map((x) => x.nameCapitalized),
        });
      }
    }
  }

  const overlapWithCore = extraSlugs
    .filter((c) => coreSlugs.includes(c.slug))
    .map((c) => ({ slug: c.slug, nameCapitalized: c.nameCapitalized }));

  const totalUnique = uniq([...coreSlugs, ...extraSlugList]).length;

  console.log("=== Moverz cities report ===");
  console.log(`Core cities (hardcoded): ${core.length}`);
  console.log(`Extra cities (source list): ${extras.length}`);
  console.log(`Extra cities (slugified): ${extraSlugs.length}`);
  console.log(`Total unique slugs (core + extras): ${totalUnique}`);
  console.log("");

  console.log("— Sample of extra cities (first 25):");
  extraSlugs.slice(0, 25).forEach((c) => {
    console.log(`  - ${c.nameCapitalized}  ->  ${c.slug}  (${c.region})`);
  });
  console.log("");

  console.log("— Collisions inside EXTRA_CITIES after slugify:");
  if (collisionsInExtras.length === 0) {
    console.log("  None ✅");
  } else {
    collisionsInExtras.forEach((c) => {
      console.log(`  - ${c.slug} x${c.count}: ${c.names.join(" | ")}`);
    });
  }
  console.log("");

  console.log("— Overlaps with CORE_CITIES (extras that map to an existing slug):");
  if (overlapWithCore.length === 0) {
    console.log("  None ✅");
  } else {
    overlapWithCore.slice(0, 40).forEach((c) => {
      console.log(`  - ${c.nameCapitalized} -> ${c.slug}`);
    });
    if (overlapWithCore.length > 40) console.log(`  ... (+${overlapWithCore.length - 40} more)`);
  }
  console.log("");

  // basic sanity warnings: suspicious slugs (empty or very short)
  const suspicious = extraSlugs.filter((c) => !c.slug || c.slug.length < 3);
  console.log("— Suspicious slugs:");
  if (suspicious.length === 0) console.log("  None ✅");
  else suspicious.forEach((c) => console.log(`  - ${c.nameCapitalized} -> "${c.slug}"`));
}

main();


