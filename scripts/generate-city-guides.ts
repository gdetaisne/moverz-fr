import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { CITIES } from "@/lib/cities";
import type { CityGuideSection, CityLongFormGuide } from "@/lib/city-longform";
import { getCityLongFormGuide } from "@/lib/city-longform";

type CityLongFormOverride = {
  prependBySectionId?: Record<string, string[]>;
  appendBySectionId?: Record<string, string[]>;
  extraSections?: CityGuideSection[];
};

function stripParamTypes(params: string): string {
  return params
    .split(",")
    .map((raw) => {
      const part = raw.trim();
      if (!part) return part;

      const eqIdx = part.indexOf("=");
      const left = eqIdx >= 0 ? part.slice(0, eqIdx).trim() : part;
      const right = eqIdx >= 0 ? part.slice(eqIdx) : "";

      // remove ": type" on the left side only
      const cleanedLeft = left.replace(/:\s*.+$/, "");
      return `${cleanedLeft}${right}`;
    })
    .join(", ");
}

function transpileOverridesTsToJs(tsSource: string): string {
  let s = tsSource;

  // drop type-only import (we don't need it at runtime)
  s = s.replace(/^import\s+type\s+[^;]+;\s*\n/gm, "");

  // drop exported type blocks
  s = s.replace(/export\s+type\s+[A-Za-z0-9_]+\s*=\s*\{[\s\S]*?\};\s*\n/g, "");

  // make the main export a plain const
  s = s.replace(
    /export\s+const\s+CITY_LONGFORM_OVERRIDES\s*:\s*Record<string,\s*CityLongFormOverride>\s*=\s*/,
    "const CITY_LONGFORM_OVERRIDES = "
  );

  // remove return types + param types in `function ...(...)` declarations
  s = s.replace(
    /function\s+([A-Za-z0-9_]+)\s*\(([^)]*)\)\s*(?::\s*[^\{]+)?\s*\{/g,
    (_m, name: string, params: string) => {
      return `function ${name}(${stripParamTypes(params)}) {`;
    }
  );

  // Ensure we return the object
  return `${s}\n;CITY_LONGFORM_OVERRIDES;`;
}

function loadCityLongFormOverridesFull(): Record<string, CityLongFormOverride> {
  const tsPath = path.join(process.cwd(), "scripts", "data", "city-longform-overrides.full.ts");
  const tsSource = fs.readFileSync(tsPath, "utf8");
  const jsSource = transpileOverridesTsToJs(tsSource);

  const sandbox: Record<string, unknown> = {};
  const ctx = vm.createContext(sandbox);

  return vm.runInContext(jsSource, ctx, { timeout: 2000 }) as Record<string, CityLongFormOverride>;
}

const CITY_LONGFORM_OVERRIDES = loadCityLongFormOverridesFull();

function countWords(text?: string): number {
  if (!text) return 0;

  let count = 0;
  let inWord = false;
  let inTag = false;

  for (let i = 0; i < text.length; i++) {
    const c = text.charCodeAt(i);

    // Skip HTML tags fast (treat <...> as separators)
    if (inTag) {
      if (c === 62) inTag = false; // '>'
      continue;
    }
    if (c === 60) {
      inTag = true;
      inWord = false;
      continue;
    }

    // Rough but fast word-char detection (letters/digits, incl. accents)
    const isWordChar =
      (c >= 48 && c <= 57) || // 0-9
      (c >= 65 && c <= 90) || // A-Z
      (c >= 97 && c <= 122) || // a-z
      c >= 192; // most Latin accented letters

    if (isWordChar) {
      if (!inWord) {
        count++;
        inWord = true;
      }
    } else {
      inWord = false;
    }
  }

  return count;
}

function countWordsInGuide(guide: Omit<CityLongFormGuide, "wordCount" | "estimatedReadingMinutes">): number {
  const strings: string[] = [guide.title, guide.subtitle];
  for (const s of guide.sections) {
    strings.push(s.title, ...s.paragraphs);
    if (s.bullets) strings.push(...s.bullets);
    if (s.checklist) strings.push(...s.checklist);
  }
  return strings.map(countWords).reduce((a, b) => a + b, 0);
}

function estimateMinutes(wordCount: number): number {
  return Math.max(6, Math.round(wordCount / 200));
}

function applyOverrides(citySlug: string, sections: CityGuideSection[]): CityGuideSection[] {
  const override = (CITY_LONGFORM_OVERRIDES as Record<string, CityLongFormOverride>)[citySlug];
  if (!override) return sections;

  let next = sections.map((section) => {
    const paragraphs = [...section.paragraphs];
    const prepend = override.prependBySectionId?.[section.id];
    const append = override.appendBySectionId?.[section.id];
    if (prepend?.length) paragraphs.unshift(...prepend);
    if (append?.length) paragraphs.push(...append);
    return { ...section, paragraphs };
  });

  if (override.extraSections?.length) {
    next = [...next, ...override.extraSections];
  }

  return next;
}

function padToMinimumWords(sections: CityGuideSection[], baseTitle: string): CityGuideSection[] {
  const MIN_WORDS = 2000;
  const PAD_BLOCKS = [
    "Si vous voulez un devis fiable, ne cherchez pas la perfection : cherchez la cohérence. La même info envoyée à plusieurs déménageurs (accès, portage, passages, objets lourds) donne des devis comparables.",
    "Le meilleur “anti‑surprise” reste la photo du passage le plus étroit + la photo escalier/palier (ou ascenseur cabine). C’est souvent là que se joue la méthode sur les gros meubles.",
    "Dernier levier simple : la flexibilité. Proposer 2–3 dates possibles augmente la disponibilité et réduit les devis faits “au hasard” faute de créneau réaliste.",
    "Une journée fluide est une journée sans frottements : accès dégagé, zone tampon près de la porte, étiquetage clair. Ce sont des minutes gagnées qui deviennent des heures.",
    "Avant le jour J, faites une mini‑liste “risques” : meuble trop large, couloir étroit, ascenseur petit, portage long. Un risque identifié tôt devient une méthode prévue (et évite les suppléments).",
    "Cartons : mieux vaut 20 cartons moyens bien fermés que 10 énormes surchargés. Les cartons trop lourds sont une source #1 de casse et de temps perdu.",
    "Étiquetage simple et efficace : pièce + priorité (ouvrir d’abord / peut attendre). Ça transforme le déchargement en routine, pas en chasse au trésor.",
    "Gros électroménager : sécurisez portes/tiroirs (scotch), videz et dégivrez le frigo/congélo à l’avance. C’est peu de travail, beaucoup de tranquillité.",
    "Meubles démontés : mettez vis/clé Allen dans un sachet scotché au meuble. Au remontage, c’est le détail qui vous fait gagner 30 minutes.",
    "Si vous hésitez sur un passage, dites‑le. Un devis fiable préfère un “doute” assumé qu’un silence qui finit en improvisation.",
    "Le temps se perd dans les micro‑allers‑retours. Préparez une “zone tampon” près de la porte avec ce qui part en premier.",
    "Jour J : une personne “référent accès” (badges, clés, portes) + une personne “référent cartons”. Moins de quiproquos = journée plus courte.",
    "Protégez le fragile en priorité (verres, écrans, tableaux). L’objectif n’est pas d’emballer tout, mais d’éviter les chocs qui coûtent cher.",
    "Planifiez l’eau et une petite collation. Une équipe qui tourne bien, c’est aussi une équipe qui ne se met pas en difficulté.",
    "Si vous pouvez, évitez les fins de mois et week‑ends. À défaut, compensez par une fenêtre de dates (2–3 options) pour garder de la marge.",
    "Photos utiles : rue + entrée + escalier/ascenseur + passage le plus étroit. C’est la base universelle d’un devis comparable.",
    "Gardez votre dossier “copier‑coller” prêt : mêmes infos, mêmes photos, même prestation. Vous comparez alors des prix, pas des hypothèses.",
    "À l’arrivée, identifiez les pièces (affichette sur la porte ou post‑it). Les cartons arrivent au bon endroit du premier coup.",
    "Pensez “sécurité” : couloir dégagé, animaux/enfants à l’écart des zones de passage. Ça évite les accidents et les arrêts.",
    "Après déchargement, faites un tour rapide (placards, cave, balcon). Les oublis coûtent plus cher qu’un check de 5 minutes.",
  ];

  const draft = { title: baseTitle, subtitle: "", sections };
  const currentWords = countWordsInGuide(draft);
  if (currentWords >= MIN_WORDS) return sections;

  const needed = MIN_WORDS - currentWords;
  const blockWordCounts = PAD_BLOCKS.map((p) => countWords(p));

  const paragraphs: string[] = [];
  let added = 0;
  let i = 0;

  // Add as many short, practical paragraphs as needed to guarantee MIN_WORDS.
  while (added < needed) {
    const idx = i % PAD_BLOCKS.length;
    paragraphs.push(PAD_BLOCKS[idx]);
    added += blockWordCounts[idx];
    i++;

    // safety guard (should never happen)
    if (i > 200) break;
  }

  return [
    ...sections,
    {
      id: "annexe-pratique",
      title: "Annexe pratique : derniers rappels (pour éviter les surprises)",
      paragraphs,
    },
  ];
}


function generateForCity(citySlug: string, cityName: string): CityLongFormGuide {
  const base = getCityLongFormGuide(citySlug, cityName);
  let sections = applyOverrides(citySlug, base.sections);
  sections = padToMinimumWords(sections, base.title);

  const draft = { title: base.title, subtitle: base.subtitle, sections };
  const wordCount = countWordsInGuide(draft);
  const estimatedReadingMinutes = estimateMinutes(wordCount);

  return {
    ...draft,
    wordCount,
    estimatedReadingMinutes,
  };
}


function parseIntEnv(name: string, def: number | undefined): number | undefined {
  const v = process.env[name];
  if (!v) return def;
  const n = Number.parseInt(v, 10);
  return Number.isFinite(n) ? n : def;
}

function main() {
  const outDir = path.join(process.cwd(), "public", "data", "city-guides");
  fs.mkdirSync(outDir, { recursive: true });

  const offset = parseIntEnv("CITY_GUIDES_OFFSET", 0) ?? 0;
  const limit = parseIntEnv("CITY_GUIDES_LIMIT", undefined);

  const cities = CITIES.filter((c) => c.slug !== "ile-de-france");
  const slice = typeof limit === "number" ? cities.slice(offset, offset + limit) : cities.slice(offset);

  // eslint-disable-next-line no-console
  console.log(`[city-guides] batch offset=${offset} limit=${limit ?? "all"} (${slice.length} cities)`);

  for (const city of slice) {
    const guide = generateForCity(city.slug, city.nameCapitalized);
    const outPath = path.join(outDir, `${city.slug}.json`);
    fs.writeFileSync(outPath, JSON.stringify(guide, null, 2) + "\n", "utf8");

    // eslint-disable-next-line no-console
    console.log(`[city-guides] wrote ${city.slug}.json (${guide.wordCount} words)`);
  }

  const marker = {
    generatedAt: new Date().toISOString(),
    offset,
    limit: limit ?? null,
    generated: slice.length,
    totalCities: cities.length,
  };
  fs.writeFileSync(path.join(outDir, "_meta.json"), JSON.stringify(marker, null, 2) + "\n", "utf8");

  // eslint-disable-next-line no-console
  console.log(`[city-guides] done (${marker.generated}/${marker.totalCities}) into ${outDir}`);
}

main();
