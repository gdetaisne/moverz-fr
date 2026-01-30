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
 * Optimisations SEO (2026-01-30):
 * - Année dans description → fraîcheur
 * - Prix indicatifs T1/T2/Maison → forte différenciation SERP
 * - Format concis : 151-156 car (optimal)
 * 
 * Format: "{Ville} en {Année} : 5+ devis sous 5–7j. Tarifs : T1 dès X€ · T2 dès Y€ · Maison dès Z€. Dossier anonyme, 0 harcèlement. Pros contrôlés. 100% gratuit."
 */
export function getCityPageMetadata(city: CityInfo): Metadata {
  const path = `demenagement/${city.slug}`;
  const year = new Date().getFullYear();
  
  // Calcul prix locaux (déménagement intra-ville)
  const prices = getLocalPricesForMeta(city.slug);
  
  // Title conservateur (pas d'année ni prix pour éviter surcharge)
  const title = `Comparateur Déménagement ${city.nameCapitalized} | Devis 5–7j | Contrôlés`;
  
  // Description optimisée (année + prix indicatifs)
  const description = `${city.nameCapitalized} en ${year} : 5+ devis sous 5–7j. Tarifs : T1 dès ${prices.t1} · T2 dès ${prices.t2} · Maison dès ${prices.house}. Dossier anonyme, 0 harcèlement. Pros contrôlés. 100% gratuit.`;
  
  return getFullMetadata(path, title, description);
}

export function getCityServiceMetadata(args: { city: CityInfo; service: ServiceSlug }): Metadata {
  const { city, service } = args;
  const def = SERVICE_DEFINITIONS[service];
  const path = `demenagement/${city.slug}/${service}`;
  const title = def.title(city.nameCapitalized);
  const description = `Recevez 5+ devis comparés sous 5 à 7 jours pour votre projet depuis ${city.nameCapitalized}. Dossier anonyme, 0 harcèlement. Déménageurs contrôlés et assurés. 100% gratuit.`;
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


