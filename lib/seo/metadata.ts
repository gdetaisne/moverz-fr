import type { Metadata } from "next";
import type { CityInfo } from "@/lib/cities";
import { getFullMetadata } from "@/lib/canonical-helper";
import { getCitySeoVars } from "@/lib/seo/city-variables";
import { SERVICE_DEFINITIONS, type ServiceSlug } from "@/lib/service-pages";
import { getLocalPricesForMeta } from "@/lib/pricing-corridors";

function cityHint(citySlug: string, cityName: string): string {
  const vars = getCitySeoVars(citySlug);
  if (vars.frictionAcces === "élevée") {
    return `Accès & parking ${cityName} inclus.`;
  }
  if (vars.profilUrbain === "pavillonnaire") {
    return `Maisons & garages ${cityName}.`;
  }
  return `Pros contrôlés ${cityName}.`;
}

/**
 * Génère metadata optimisée pour pages villes
 * 
 * Optimisations SEO (2026-02-27):
 * - Prix MIN dans title → Visibilité SERP maximale (+20-30% CTR estimé)
 * - USP homepage alignés : "1 contact" + "Note 4.9/5" + checkmarks ✓
 * - "Déménagement {Ville}" vs "Comparateur" → Action-oriented, meilleur intent match
 * - Prix indicatifs T1/T2/Maison → Forte différenciation
 * - Année en fin → Fraîcheur SEO sans alourdir début
 * 
 * Format title: "Déménagement {Ville} dès {PrixMin}€ · Devis 5-7j | Moverz"
 * Format desc: "✓ 1 contact ✓ 0 harcèlement · {Ville} : T1 dès X€, T2 Y€, Maison Z€ · Pros certifiés · Note 4.9/5 · Gratuit ({Année})"
 */
export function getCityPageMetadata(city: CityInfo): Metadata {
  const path = `demenagement/${city.slug}`;
  const year = new Date().getFullYear();
  
  // Calcul prix locaux (déménagement intra-ville)
  const prices = getLocalPricesForMeta(city.slug);
  
  // Title optimisé: ≤ 51 chars avant "| Moverz" (ajouté par layout.tsx template)
  const title = `Déménagement ${city.nameCapitalized} dès ${prices.t1} · Devis 5–7j`;
  
  // Description optimisée : USP homepage (1 contact, 0 harcèlement, Note 4.9/5) + prix détaillés
  // Format compact avec checkmarks ✓ pour impact visuel maximal en SERP
  const description = `✓ 1 contact ✓ 0 harcèlement · ${city.nameCapitalized} : T1 dès ${prices.t1}, T2 ${prices.t2}, Maison ${prices.house} · Pros certifiés · Note 4.9/5 · Gratuit (${year})`;
  
  return getFullMetadata(path, title, description);
}

export function getCityServiceMetadata(args: { city: CityInfo; service: ServiceSlug }): Metadata {
  const { city, service } = args;
  const def = SERVICE_DEFINITIONS[service];
  const path = `demenagement/${city.slug}/${service}`;
  const title = def.title(city.nameCapitalized);
  const description = `Comparez des devis comparables sous 5 à 7 jours pour votre projet depuis ${city.nameCapitalized}. Dossier anonyme, 0 harcèlement. Déménageurs contrôlés et assurés. 100% gratuit.`;
  return getFullMetadata(path, title, description);
}

export function getHubMetadata(args: { path: string; title: string; description: string }): Metadata {
  return getFullMetadata(args.path, args.title, args.description);
}

// Back-compat: some pages still import `generateMetadata` from `@/lib/metadata`.
// Keep a single implementation source of truth here.
export function generateMetadata(path: string, title: string, description: string): Metadata {
  return getFullMetadata(path, title, description);
}


