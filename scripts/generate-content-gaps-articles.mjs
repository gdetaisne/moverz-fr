#!/usr/bin/env node
/**
 * Génère lib/blog-content-gaps-404.ts à partir de CONTENT-GAPS-404.json
 * Ton Moverz : fun, personnel, E-E-A-T, SEO compliant.
 * Exclut guide, guide-complet.
 */

import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const EXCLUDED_SLUGS = new Set(["guide", "guide-complet"]);
const CITIES = ["lyon", "lille", "nice", "strasbourg", "rennes"];
const CITY_NAMES = { lyon: "Lyon", lille: "Lille", nice: "Nice", strasbourg: "Strasbourg", rennes: "Rennes" };
const PRIX_SLUGS = {
  lyon: "prix-demenagement-lyon-guide-complet",
  lille: "prix-demenagement-lille-guide",
  nice: "prix-demenagement-nice-guide",
  strasbourg: "prix-demenagement-strasbourg",
  rennes: "prix-demenagement-rennes",
};

function normalizeSlug(rawSlug) {
  return rawSlug
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[éèê]/g, "e")
    .replace(/[àâ]/g, "a")
    .replace(/ç/g, "c");
}

function extractCitySlug(slug) {
  const lower = slug.toLowerCase();
  for (const city of CITIES) {
    if (lower.includes(city)) return city;
  }
  return undefined;
}

function detectTopic(slug) {
  const s = slug.toLowerCase();
  if (s.includes("prix") || s.includes("tarif") || s.includes("cout") || s.includes("moyen") || s.includes("economiser")) return "prix";
  if (s.includes("garde-meuble") || s.includes("self-stockage") || s.includes("stockage")) return "garde-meuble";
  if (s.includes("piano") || s.includes("accordage")) return "piano";
  if (s.includes("entreprise") || s.includes("bureaux") || s.includes("bail-commercial") || s.includes("rbpd") || s.includes("formalites")) return "entreprise";
  if (s.includes("etudiant") || s.includes("camion-etudiant")) return "etudiant";
  if (s.includes("cartons") || s.includes("checklist") || s.includes("emballage")) return "conseils";
  if (s.includes("frais-caches") || s.includes("estimation") || s.includes("comparatif-prix")) return "prix";
  if (s.includes("demenageur") || s.includes("choisir") || s.includes("guide-choisir")) return "choisir";
  if (s.includes("location-camion") || s.includes("agences") || s.includes("europcar")) return "location";
  if (s.includes("enfant") || s.includes("bebe")) return "conseils";
  return "general";
}

function slugToTitle(slug) {
  const citySlug = extractCitySlug(slug);
  const cityName = citySlug ? CITY_NAMES[citySlug] : null;
  const parts = slug
    .split("-")
    .filter((p) => !CITIES.includes(p) && !["guide", "complet", "2025", "2026"].includes(p) && !/^\d+$/.test(p))
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1));
  let base = parts.join(" ");
  if (cityName && !base.includes(cityName)) base += " " + cityName;
  return `${base} : Guide 2026`;
}

function generateDescription(slug, title) {
  const citySlug = extractCitySlug(slug);
  const topic = detectTopic(slug);
  const cityName = citySlug ? CITY_NAMES[citySlug] : null;
  const locale = cityName ? ` à ${cityName}` : "";

  // Descriptions étoffées par thème (cible 155–165 caractères pour SEO)
  const DESCRIPTIONS = {
    prix: cityName
      ? `Prix déménagement${locale} : fourchettes 2026, facteurs de coût, pièges à éviter. Comparez des devis sur la même base. Label Moverz pour vérifier les pros.`
      : `Prix déménagement : fourchettes 2026 par type de logement, facteurs de coût et pièges à éviter. Devis comparables et Label Moverz pour vérifier.`,
    "garde-meuble": cityName
      ? `Garde-meuble${locale} : où stocker, combien ça coûte, self-stockage vs traditionnel. Durée minimum, assurance, pièges à éviter. Guide Moverz 2026.`
      : `Garde-meuble et stockage : types d'offres, fourchettes de prix, self-stockage vs traditionnel. Comparer sereinement avec notre guide 2026.`,
    piano: cityName
      ? `Déménagement piano${locale} : spécialiste ou pas, tarifs réalistes, assurance ad valorem. Ce qu'il faut vérifier avant de signer. Guide Moverz 2026.`
      : `Déménager un piano : spécialiste, tarifs, assurance ad valorem. Droit vs queue, étage sans ascenseur. Ce qu'il faut savoir — Moverz 2026.`,
    entreprise: cityName
      ? `Déménagement entreprise${locale} : checklist, formalités, RGPD, bail commercial. Comment choisir sans se faire avoir. Guide pratique 2026.`
      : `Déménagement d'entreprise : checklist, formalités, RGPD, destruction d'archives. Choisir un pro fiable — conseils Moverz 2026.`,
    etudiant: `Déménagement étudiant : camion ou pros, stockage été, budget serré. Formules éco, garde-meuble entre deux années. Guide Moverz 2026.`,
    conseils: `Checklist déménagement : cartons gratuits, emballage fragile, enfants ou animaux. Ordre des étapes et astuces pour éviter les oublis.`,
    choisir: cityName
      ? `Choisir un déménageur fiable${locale} : 5 critères concrets, Label Moverz pour vérifier. Devis comparables, pas de harcèlement. Guide 2026.`
      : `Comment choisir un déménageur fiable : critères concrets, Label Moverz pour vérifier. Devis comparables, 0 harcèlement — Moverz 2026.`,
    location: cityName
      ? `Location camion${locale} : agences, tarifs, permis B. Camion vs déménageur pro selon votre volume. Comparer les options — Moverz 2026.`
      : `Location camion déménagement : agences, tarifs, permis B. Quand faire soi-même, quand passer par un pro. Guide comparatif 2026.`,
    general: cityName
      ? `Déménagement${locale} : conseils, fourchettes de prix, points de vigilance. Comparez des devis sur la même base. Label Moverz pour vérifier.`
      : `Déménagement : conseils pratiques, fourchettes de prix, points de vigilance. Devis comparables et Label Moverz pour vérifier les pros.`,
  };

  let desc = DESCRIPTIONS[topic] || DESCRIPTIONS.general;
  if (desc.length > 165) desc = desc.slice(0, 162) + "...";
  if (desc.length < 140) desc = desc + " Devis gratuit sur devis.moverz.fr.";
  return desc;
}

function generateBody(slug, citySlug) {
  const cityName = citySlug ? CITY_NAMES[citySlug] : null;
  const topic = detectTopic(slug);
  const fromParam = slug.slice(0, 35).replace(/[^a-z0-9-]/g, "");

  // --- CTA bloc (Moverz voice)
  const ctaCity = cityName
    ? `[Moverz](https://devis.moverz.fr/devis-gratuits?source=moverz.fr&from=blog-404-${fromParam}) compare des pros vérifiés à ${cityName}. Un seul dossier, jusqu'à 5 devis, 0 harcèlement.`
    : `[Moverz](https://devis.moverz.fr/devis-gratuits?source=moverz.fr&from=blog-404-${fromParam}) compare des pros vérifiés partout en France. Un seul dossier, jusqu'à 5 devis, 0 harcèlement.`;

  // --- E-E-A-T bloc (toujours inclus)
  const eeatBlock = `Avant de valider un devis, vérifiez que le déménageur tient la route. En 2024, **257 entreprises** de déménagement ont fait faillite en France — la DGCCRF a trouvé **64 % d'anomalies** dans le secteur en 2023. On a construit notre **petit outil gratuit** pour ça : [Label Moverz](/label-moverz/) — SIREN ou nom, Score /100 en 30 secondes. Utilisable pour n'importe quel déménageur, même hors Moverz.`;

  // --- Intros par topic (ton fun, "on")
  const INTROS = {
    prix: `Vous voulez des **vrais prix**${cityName ? ` à ${cityName}` : ""}, pas des promesses marketing ? On vous donne les fourchettes qu'on voit sur le terrain, les facteurs qui font varier la note, et comment éviter les mauvaises surprises le jour J.

**En bref** : les devis comparables passent par un **dossier standardisé** (même volume, même accès pour tous). Sinon, vous comparez des pommes et des oranges.`,

    "garde-meuble": `Garde-meuble${cityName ? ` à ${cityName}` : ""} : **où trouver**, **combien ça coûte**, et **comment éviter les pièges** ? On a fait le tri pour vous.

**En bref** : self-stockage vs traditionnel, durée minimum, assurance incluse ou pas — on vous donne les clés pour comparer les offres sereinement.`,

    piano: `Déménager un piano${cityName ? ` à ${cityName}` : ""} : **spécialiste ou pas**, **prix réalistes**, et **ce qu'il faut vérifier** avant de signer. On vous explique.

**En bref** : piano droit ou queue, étage sans ascenseur, assurance ad valorem — les bons pros adaptent leur devis. Méfiance sur les tarifs "trop bas".`,

    entreprise: `Déménagement d'entreprise${cityName ? ` à ${cityName}` : ""} : **checklist**, **formalités**, et **comment choisir** sans se faire avoir. On a listé ce que les pros font bien — et les pièges à éviter.

**En bref** : bail commercial, RGPD, destruction d'archives, modification KBIS — chaque étape a ses règles.`,

    etudiant: `Déménagement étudiant : **camion ou pros**, **stockage été**, **budget serré** — on vous donne les options qu'on voit fonctionner.

**En bref** : petit volume = formules éco possibles. Stockage entre deux années = garde-meuble ou self-stockage. Comparez 3 devis minimum.`,

    conseils: `On vous donne une **checklist pratique** : ce qu'il faut faire, dans quel ordre, et comment éviter les oublis qui coûtent cher le jour J.

**En bref** : cartons gratuits, emballage fragile, enfants ou animaux — chaque situation a ses astuces.`,

    choisir: `Comment **choisir un déménageur fiable**${cityName ? ` à ${cityName}` : ""} ? On vous donne les **critères concrets** : pas du flan marketing, des vrais points de vigilance.

**En bref** : Score /100 (Label Moverz), avis Google récents, assurance RC Pro, devis comparables — la checklist qu'on utilise nous-mêmes.`,

    location: `Location de camion${cityName ? ` à ${cityName}` : ""} : **agences**, **tarifs**, **permis B ou pas** — on vous donne les infos qu'on voit sur le terrain.

**En bref** : Kangoo vs Sprinter vs 20 m³, aller simple ou aller-retour, avec ou sans chauffeur — les options et les prix.`,

    general: `Vous cherchez des **infos fiables**${cityName ? ` sur le déménagement à ${cityName}` : " sur le déménagement"} ? On vous donne ce qu'on sait : fourchettes de prix, points de vigilance, et comment comparer sereinement.

**En bref** : un bon devis = dossier précis (volume, accès, contraintes). Comparez au moins 3 offres. Vérifiez le déménageur avant de signer.`,
  };

  const intro = INTROS[topic] || INTROS.general;

  // --- Section "Ce qu'on recommande" (E-E-A-T)
  const sectionRecommandations = `## Ce qu'on recommande

${eeatBlock}

**En pratique** : Avant de signer, collez le SIREN du déménageur sur [label-moverz.fr](/label-moverz/). Score < 50/100 ou alertes critiques → méfiance.`;

  // --- Section vigilances (commune)
  const sectionVigilance = `## Points de vigilance

- **Suppléments cachés** : portage long, étage sans ascenseur, jour férié — à préciser dans le devis
- **Devis flou** : exigez un détail ligne par ligne (volume m³, options, assurance)
- **Urgence** : moins de 48h = surcoût important, peu de disponibilités
- **Acompte > 30 %** : la DGCCRF déconseille — méfiance au-delà`;

  // --- Section fourchettes (si prix)
  const sectionPrix = topic === "prix" ? `
## Fourchettes indicatives

| Logement | Volume | Intra-ville | Longue distance |
|----------|--------|-------------|-----------------|
| Studio | 10-15 m³ | 350-600€ | 800-1600€ |
| T2 | 20-30 m³ | 500-950€ | 1200-2400€ |
| T3 | 35-45 m³ | 700-1300€ | 1800-3500€ |

*Variation selon étage, ascenseur, période (juillet-août +15-25 %).*` : "";

  // --- Ressources
  const ressourcePrix = cityName
    ? `[Prix déménagement ${cityName}](/blog/${PRIX_SLUGS[citySlug] || "prix-et-devis"})`
    : "[Prix déménagement 2026](/blog/prix-et-devis)";
  const ressourceLabel = "[Vérifier un déménageur (Label Moverz)](/label-moverz/)";
  const ressourceChecklist = "[Checklist déménagement](/blog/checklist-demenagement-complet)";

  const sectionRessources = `## Ressources utiles

| Action | Lien |
|--------|------|
| Obtenir des devis${cityName ? ` ${cityName}` : ""} | [devis.moverz.fr](https://devis.moverz.fr/devis-gratuits) |
| ${ressourceLabel} | Score /100 gratuit |
| ${ressourceChecklist} | Tout cocher avant le jour J |`;

  // --- FAQ (E-E-A-T, ton direct)
  const faq = `## FAQ

**Combien de devis demander ?** Au minimum 3, idéalement 5 pour un volume > 20 m³. Plus vous comparez, moins vous avez de risque de mauvaise surprise.

**Quand réserver ?** 4 à 6 semaines avant en haute saison (juillet-août). Hors saison, 2-3 semaines peuvent suffire.

**Devis gratuit = engagement ?** Non. Moverz transmet votre dossier à des pros vérifiés. Vous recevez les devis par email. Aucun appel non sollicité avant votre choix.

**Comment vérifier un déménageur ?** [Label Moverz](/label-moverz/) — SIREN ou nom, Score /100 en 30 secondes. Santé financière (Pappers), BODACC, avis Google. Gratuit et public.`;

  // --- CTA final
  const ctaFinal = cityName
    ? `> **Prêt à comparer à ${cityName} ?**  
> ${ctaCity}
>
> [Créer mon dossier gratuit →](https://devis.moverz.fr/devis-gratuits?source=moverz.fr&from=blog-404-${fromParam})`
    : `> **Prêt à comparer ?**  
> ${ctaCity}
>
> [Créer mon dossier gratuit →](https://devis.moverz.fr/devis-gratuits?source=moverz.fr&from=blog-404-${fromParam})`;

  // --- À lire aussi
  const lireAussi = cityName
    ? `**À lire aussi :** ${ressourcePrix} · [Comparer pros ${cityName}](https://devis.moverz.fr/devis-gratuits)`
    : `**À lire aussi :** ${ressourceChecklist} · [Comparer des devis](https://devis.moverz.fr/devis-gratuits)`;

  const parts = [
    intro,
    "",
    "---",
    "",
    ctaFinal,
    "",
    "---",
    "",
    sectionRecommandations,
    "",
    "---",
    "",
    sectionVigilance,
    sectionPrix,
    "",
    "---",
    "",
    sectionRessources,
    "",
    "---",
    "",
    faq,
    "",
    lireAussi,
  ];

  return parts.join("\n");
}

function loadContentGapSlugs() {
  // Source : GSC-404-REPORT (pas CONTENT-GAPS-404 car il exclut déjà nos articles)
  const reportPath = join(ROOT, "GSC-404-REPORT.json");
  if (!readFileSync(reportPath, "utf-8")) throw new Error("GSC-404-REPORT.json introuvable");
  const report = JSON.parse(readFileSync(reportPath, "utf-8"));

  // Fichiers avec BODY (pas blog-extra qui a que metadata)
  const canonicalFiles = [
    "lib/blog-nouveaux-2026.ts",
    "lib/blog-canonique.ts",
    "lib/blog-markdown-posts.ts",
    "lib/blog-longtail.ts",
    "lib/blog-longtail-pack2.ts",
    "lib/blog-longtail-links.ts",
    "lib/blog-arnaques.ts",
  ];
  const slugs = new Set();
  const slugRe = /slug:\s*["']([^"']+)["']/g;
  for (const rel of canonicalFiles) {
    const fp = join(ROOT, rel);
    try {
      const content = readFileSync(fp, "utf8");
      let m;
      while ((m = slugRe.exec(content)) !== null) slugs.add(m[1]);
    } catch (_) {}
  }

  const gaps = new Set();
  for (const url of report.categories?.blog?.urls || []) {
    const p = url.replace(/^https?:\/\/moverz\.fr/, "").replace(/\/$/, "") || "/";
    if (!p.startsWith("/blog/")) continue;
    const blogPath = p.replace(/^\//, "").replace(/\/$/, "");
    const slug = blogPath.replace("blog/", "");
    const effectiveSlug = slug.includes("/") ? slug.split("/").pop() : slug;
    if (effectiveSlug.startsWith("$") || effectiveSlug.length < 4) continue;
    if (slugs.has(effectiveSlug)) continue;
    gaps.add(effectiveSlug);
  }
  return Array.from(gaps);
}

function main() {
  const slugsToCreate = loadContentGapSlugs();

  const posts = slugsToCreate
    .filter((slug) => !EXCLUDED_SLUGS.has(slug))
    .map((rawSlug) => {
      const slug = normalizeSlug(rawSlug);
      const citySlug = extractCitySlug(slug);
      const title = slugToTitle(slug);
      const description = generateDescription(slug, title);
      const body = generateBody(slug, citySlug);

      return {
        slug,
        title,
        description,
        type: "satellite",
        citySlug: citySlug || undefined,
        body,
      };
    });

  const output = posts
    .map(
      (p) =>
        `  {
    slug: ${JSON.stringify(p.slug)},
    title: ${JSON.stringify(p.title)},
    description: ${JSON.stringify(p.description)},
    type: "satellite",
    citySlug: ${p.citySlug ? JSON.stringify(p.citySlug) : "undefined"},
    body: \`${p.body.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${")}\`
  }`
    )
    .join(",\n");

  const finalTs = `// Auto-généré par scripts/generate-content-gaps-articles.mjs
// Ton Moverz : fun, personnel, E-E-A-T, SEO compliant.
// Ne pas éditer manuellement — relancer le script pour régénérer

import type { CanonicalBlogPost } from "./blog-canonique";

export const BLOG_CONTENT_GAPS_404: CanonicalBlogPost[] = [
${output}
];

export type { CanonicalBlogPost };
`;

  const outPath = join(ROOT, "lib", "blog-content-gaps-404.ts");
  writeFileSync(outPath, finalTs, "utf-8");
  console.log(`✅ ${posts.length} articles générés (ton Moverz, E-E-A-T) → ${outPath}`);
}

main();
