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
  const title = `Déménagement ${city.nameCapitalized} dès 450€ | 3+ Devis 48h | Contrôlés`;
  const description = `Déménager à ${city.nameCapitalized} dès 450€. 3+ devis comparables en 48h. IA calcule volume = 0 écart jour J. Dossier anonyme, 0 spam. ${cityHint(
    city.slug,
    city.nameCapitalized
  )} Gratuit.`;
  return getFullMetadata(path, title, description);
}

export function getCityServiceMetadata(args: { city: CityInfo; service: ServiceSlug }): Metadata {
  const { city, service } = args;
  const def = SERVICE_DEFINITIONS[service];
  const path = `demenagement/${city.slug}/${service}`;
  const title = def.title(city.nameCapitalized);
  const description = `${def.description(city.nameCapitalized)} 3+ devis comparables en 48h. IA = 0 écart prix. ${cityHint(city.slug, city.nameCapitalized)} Gratuit.`;
  return getFullMetadata(path, title, description);
}

export function getHubMetadata(args: { path: string; title: string; description: string }): Metadata {
  return getFullMetadata(args.path, args.title, args.description);
}


