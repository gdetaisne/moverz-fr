import type { Metadata } from "next";
import type { CityInfo } from "@/lib/cities";
import { getFullMetadata } from "@/lib/canonical-helper";
import { getCitySeoVars } from "@/lib/seo/city-variables";
import { SERVICE_DEFINITIONS, type ServiceSlug } from "@/lib/service-pages";

function cityHint(citySlug: string, cityName: string): string {
  const vars = getCitySeoVars(citySlug);
  if (vars.frictionAcces === "élevée") {
    return `Accès & stationnement: conseils adaptés à ${cityName}.`;
  }
  if (vars.profilUrbain === "pavillonnaire") {
    return `Maison, garage, accès véhicule: conseils adaptés à ${cityName}.`;
  }
  return `Devis comparables, sans spam, à ${cityName}.`;
}

export function getCityPageMetadata(city: CityInfo): Metadata {
  const path = `demenagement/${city.slug}`;
  const title = `Déménagement ${city.nameCapitalized} : 5+ devis en 3 min | Moverz`;
  const description = `3 min · IA fiabilise le volume · 5+ devis comparables · Déménageurs contrôlés à ${city.nameCapitalized} · 0€ · 0 spam. ${cityHint(
    city.slug,
    city.nameCapitalized
  )}`;
  return getFullMetadata(path, title, description);
}

export function getCityServiceMetadata(args: { city: CityInfo; service: ServiceSlug }): Metadata {
  const { city, service } = args;
  const def = SERVICE_DEFINITIONS[service];
  const path = `demenagement/${city.slug}/${service}`;
  const title = def.title(city.nameCapitalized);
  const description = `${def.description(city.nameCapitalized)} ${cityHint(city.slug, city.nameCapitalized)}`;
  return getFullMetadata(path, title, description);
}

export function getHubMetadata(args: { path: string; title: string; description: string }): Metadata {
  return getFullMetadata(args.path, args.title, args.description);
}


