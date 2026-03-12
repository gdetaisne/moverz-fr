#!/usr/bin/env node
/**
 * Génère redirects/gsc-404-redirects.mjs à partir de GSC-404-REPORT.json
 * Chaque URL 404 est redirigée vers une page hub pertinente.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const reportPath = path.join(root, "GSC-404-REPORT.json");
if (!fs.existsSync(reportPath)) {
  console.error("❌ GSC-404-REPORT.json introuvable. Lancez d'abord node scripts/analyze-gsc-404.mjs");
  process.exit(1);
}

const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));

function pathFromUrl(url) {
  return url.replace(/^https?:\/\/moverz\.fr/, "").replace(/\/$/, "") || "/";
}

function toRedirect(source, destination) {
  const src = source.startsWith("/") ? source : `/${source}`;
  const dst = destination.endsWith("/") ? destination : `${destination}/`;
  return { source: src, destination: dst, permanent: true };
}

const redirects = [];

// Blog: rediriger vers hubs
const blogHub = "/blog/conseils-demenagement/";
const prixHub = "/blog/prix-et-devis/";
const demenagementHub = "/blog/demenagement-par-ville/";

for (const url of report.categories.blog.urls) {
  const p = pathFromUrl(url);
  if (!p.startsWith("/blog/")) continue;
  const blogPath = p.replace(/^\//, "").replace(/\/$/, "");
  const slug = blogPath.replace("blog/", "");
  // Nested: blog/parent/child → on garde le path complet pour la source
  const dest = slug.includes("prix") || slug.includes("tarif") || slug.includes("cout")
    ? prixHub
    : demenagementHub;
  redirects.push(toRedirect(p, dest));
  if (!p.endsWith("/")) redirects.push(toRedirect(p + "/", dest));
}

// Dédupliquer (sources identiques)
const seen = new Set();
const unique = redirects.filter((r) => {
  const key = r.source;
  if (seen.has(key)) return false;
  seen.add(key);
  return true;
});

// Villes
for (const url of report.categories.villes.urls) {
  const p = pathFromUrl(url);
  let dest = "/villes/";
  if (p.includes("/demenagement/espagne")) dest = "/blog/demenagement-international-juste-prix-experience/";
  else if (p.includes("/demenagement/allemagne")) dest = "/blog/demenagement-international-juste-prix-experience/";
  else if (p.includes("/demenagement/la-baule")) dest = "/demenagement/nantes/";
  else if (p.includes("/villes/nice")) dest = "/demenagement/nice/";
  redirects.push(toRedirect(p, dest));
  if (!p.endsWith("/") && p !== "/") redirects.push(toRedirect(p + "/", dest));
}

// Autres: ville/quartier, corridors, quartiers-xxx, city roots
for (const url of report.categories.autres.urls) {
  const p = pathFromUrl(url);
  let dest = "/villes/";
  if (p.match(/^\/(lyon|lille|marseille|bordeaux|toulouse|nice|nantes|strasbourg|rennes|rouen|montpellier)\/[a-z0-9-]+\/?$/)) {
    const city = p.split("/")[1];
    dest = `/demenagement/${city}/`;
  } else if (p.startsWith("/ile-de-france-vers-")) {
    dest = "/demenagement/paris/";
  } else if (p.startsWith("/quartiers-")) {
    const city = p.replace("/quartiers-", "").replace("/", "");
    dest = `/quartiers/${city}/`;
  } else if (p === "/marseille" || p === "/lyon" || p === "/lille" || p === "/nantes" || p === "/rennes" || p === "/bordeaux" || p === "/toulouse" || p === "/nice" || p === "/rouen" || p === "/strasbourg" || p === "/montpellier") {
    dest = `/demenagement${p}/`;
  } else if (p === "/corridor/ile-de-france") {
    dest = "/demenagement/paris/";
  } else if (p.includes("/demenagement/ile-de-france")) {
    dest = "/demenagement/paris/";
  } else if (p === "/marseille-vers-espagne") {
    dest = "/marseille-vers-espagne/";
  } else if (p === "/montpellier-vers-espagne") {
    dest = "/montpellier-vers-espagne/";
  } else if (p.includes("rouen-vers-le havre")) {
    dest = "/rouen-vers-le-havre/";
  } else if (p === "/5") {
    dest = "/villes/";
  } else if (p === "/blog.html") {
    dest = "/blog/";
  }
  if (p && p !== "/") {
    redirects.push(toRedirect(p, dest));
    if (!p.endsWith("/")) redirects.push(toRedirect(p + "/", dest));
  }
}

const outPath = path.join(root, "redirects", "gsc-404-redirects.mjs");
const content = `// AUTO-GENERATED - Ne pas éditer à la main
// Généré par scripts/generate-gsc-404-redirects.mjs à partir de GSC-404-REPORT.json
// ${new Date().toISOString()}

export const GSC_404_REDIRECTS = ${JSON.stringify(unique.concat(redirects).filter((r, i, arr) => {
  const prev = arr.slice(0, i);
  return !prev.some((p) => p.source === r.source);
}), null, 2)}
;

`;

fs.writeFileSync(outPath, content, "utf8");
console.log(`✅ ${redirects.length} redirections générées dans ${outPath}`);
