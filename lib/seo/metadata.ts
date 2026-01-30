import type { Metadata } from "next";
import type { CityInfo } from "@/lib/cities";
import { getFullMetadata } from "@/lib/canonical-helper";
import { getCitySeoVars } from "@/lib/seo/city-variables";
import { SERVICE_DEFINITIONS, type ServiceSlug } from "@/lib/service-pages";

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

export function getCityPageMetadata(city: CityInfo): Metadata {
  const path = `demenagement/${city.slug}`;
  const title = `Comparateur Déménagement ${city.nameCapitalized} | Devis 5–7j | Contrôlés`;
  const description = `Recevez 5+ devis comparés sous 5 à 7 jours pour votre projet depuis ${city.nameCapitalized}. Dossier anonyme, 0 harcèlement. Déménageurs contrôlés et assurés. 100% gratuit.`;
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


