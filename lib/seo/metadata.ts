import type { Metadata } from "next";
import type { CityInfo } from "@/lib/cities";
import { getFullMetadata } from "@/lib/canonical-helper";
import { SERVICE_DEFINITIONS, type ServiceSlug } from "@/lib/service-pages";
import { getLocalPricesForMeta } from "@/lib/pricing-corridors";

/**
 * Angles SEO uniques par ville — différenciation SERP
 * Chaque ville a un "hook" spécifique (contrainte terrain, marché, positionnement)
 * qui différencie le snippet dans les résultats de recherche.
 */
const CITY_ANGLES: Record<string, { titleSuffix: string; descHook: string }> = {
  paris:       { titleSuffix: "· Parking & accès gérés",     descHook: "Accès difficile, monte-meubles, autorisations : les pros Moverz connaissent Paris." },
  lyon:        { titleSuffix: "· 3 devis comparables",        descHook: "Presqu'île, Confluence, Croix-Rousse : pros vérifiés qui connaissent le terrain." },
  marseille:   { titleSuffix: "· Quartiers & accès",          descHook: "Noailles, Panier, 13e arr. : pros locaux, accès quartiers Nord et Sud gérés." },
  nice:        { titleSuffix: "· Vieux-Nice & Cimiez OK",     descHook: "Vieux-Nice (rues étroites), Cimiez, Mont Boron : pros habitués aux contraintes locales." },
  toulouse:    { titleSuffix: "· Devis sans engagement",      descHook: "Capitole, Minimes, Tournefeuille : comparez jusqu'à 3 pros certifiés, sans appels." },
  bordeaux:    { titleSuffix: "· Chartrons & périph",         descHook: "Chartrons, Bacalan, Mérignac : pros vérifiés, devis réels sans surprise." },
  lille:       { titleSuffix: "· Vieux-Lille & Euralille",    descHook: "Vieux-Lille, Wazemmes, Euralille : comparez les pros sans démarrage commercial." },
  nantes:      { titleSuffix: "· Île de Nantes & quartiers",  descHook: "Île de Nantes, Chantenay, Rezé : comparateur 0 harcèlement, pros assurés." },
  strasbourg:  { titleSuffix: "· Grande Île & frontal.",      descHook: "Grande Île (patrimoine), Neudorf, Hautepierre : accès gérés, devis clairs." },
  montpellier: { titleSuffix: "· Écusson & tramway OK",       descHook: "Écusson, Port Marianne, Castelnau : pros qui connaissent les axes tram et zones piétonnes." },
  rennes:      { titleSuffix: "· Centre & Rennes métropole",  descHook: "Thabor, Villejean, Cesson-Sévigné : 3 devis comparables, pros certifiés." },
  rouen:       { titleSuffix: "· Rive gauche & plateau",      descHook: "Saint-Sever, Sotteville, plateau Est : comparez les pros locaux sans engagement." },
};

/**
 * Génère metadata optimisée et différenciée pour pages villes
 * 
 * Différenciation par ville (mars 2026) :
 * - Prix réels par marché local (pas une distance fixe)
 * - Angle unique par ville (contrainte terrain, quartier emblématique)
 * - USP Moverz : "1 contact", "0 harcèlement", "Note 4.9/5"
 */
export function getCityPageMetadata(city: CityInfo): Metadata {
  const path = `demenagement/${city.slug}`;
  const year = new Date().getFullYear();
  
  const prices = getLocalPricesForMeta(city.slug);
  const angle = CITY_ANGLES[city.slug];
  
  // Title : ≤ 55 chars avant "| Moverz" (ajouté par layout.tsx template)
  const title = angle
    ? `Déménagement ${city.nameCapitalized} dès ${prices.t1} ${angle.titleSuffix}`
    : `Déménagement ${city.nameCapitalized} dès ${prices.t1} · Devis comparés`;
  
  // Description : hook local + USP + prix + année
  const descBase = angle
    ? `${angle.descHook} T1 dès ${prices.t1}, T2 ${prices.t2}, Maison ${prices.house}. Gratuit, 0 harcèlement (${year}).`
    : `✓ 1 contact ✓ 0 harcèlement · ${city.nameCapitalized} : T1 dès ${prices.t1}, T2 ${prices.t2}, Maison ${prices.house} · Pros certifiés · Note 4.9/5 · Gratuit (${year})`;
  
  return getFullMetadata(path, title, descBase);
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


