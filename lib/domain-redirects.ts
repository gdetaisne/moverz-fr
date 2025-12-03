/**
 * Mapping des redirections domaine → page ville moverz.fr
 *
 * ⚠️ IMPORTANT :
 * - Ce fichier définit la "source de vérité" métier pour les futures 301.
 * - Les redirections elles‑mêmes seront implémentées côté infra / Next.js
 *   (nginx, CapRover, next.config.mjs…) en s'appuyant sur ce mapping.
 * - Ne pas modifier les URLs existantes sans valider l'impact SEO.
 */

export interface DomainRedirect {
  /** Domaine source (avec https, toujours en trailing slash) */
  from: string;
  /** URL de destination finale sur moverz.fr (avec trailing slash) */
  to: string;
}

export const DOMAIN_REDIRECTS: DomainRedirect[] = [
  // Villes historiques
  {
    from: "https://devis-demenageur-nice.fr/",
    to: "https://moverz.fr/demenagement/nice/",
  },
  {
    from: "https://devis-demenageur-lyon.fr/",
    to: "https://moverz.fr/demenagement/lyon/",
  },
  {
    from: "https://devis-demenageur-marseille.fr/",
    to: "https://moverz.fr/demenagement/marseille/",
  },
  {
    from: "https://devis-demenageur-toulousain.fr/",
    to: "https://moverz.fr/demenagement/toulouse/",
  },
  {
    from: "https://www.bordeaux-demenageur.fr/",
    to: "https://moverz.fr/demenagement/bordeaux/",
  },
  {
    from: "https://devis-demenageur-lille.fr/",
    to: "https://moverz.fr/demenagement/lille/",
  },
  {
    from: "https://devis-demenageur-strasbourg.fr/",
    to: "https://moverz.fr/demenagement/strasbourg/",
  },
  {
    from: "https://devis-demenageur-nantes.fr/",
    to: "https://moverz.fr/demenagement/nantes/",
  },
  {
    from: "https://devis-demenageur-rennes.fr/",
    to: "https://moverz.fr/demenagement/rennes/",
  },
  {
    from: "https://devis-demenageur-rouen.fr/",
    to: "https://moverz.fr/demenagement/rouen/",
  },
  {
    from: "https://devis-demenageur-montpellier.fr/",
    to: "https://moverz.fr/demenagement/montpellier/",
  },

  // Nouveaux domaines qui seront migrés
  {
    from: "https://devis-demenageur-parisien.fr/",
    to: "https://moverz.fr/demenagement/paris/",
  },
  {
    from: "https://devis-demenageur-ile-de-france.fr/",
    to: "https://moverz.fr/demenagement/ile-de-france/",
  },
  {
    from: "https://devis-demenageur-grenoble.fr/",
    to: "https://moverz.fr/demenagement/grenoble/",
  },
  {
    from: "https://devis-demenageur-toulon.fr/",
    to: "https://moverz.fr/demenagement/toulon/",
  },
  {
    from: "https://devis-demenageur-dijon.fr/",
    to: "https://moverz.fr/demenagement/dijon/",
  },
  {
    from: "https://devis-demenageur-angers.fr/",
    to: "https://moverz.fr/demenagement/angers/",
  },
  {
    from: "https://devis-demenageur-clermont-ferrand.fr/",
    to: "https://moverz.fr/demenagement/clermont-ferrand/",
  },
  {
    from: "https://devis-demenageur-tours.fr/",
    to: "https://moverz.fr/demenagement/tours/",
  },
  {
    from: "https://devis-demenageur-reims.fr/",
    to: "https://moverz.fr/demenagement/reims/",
  },
  {
    from: "https://devis-demenageur-le-havre.fr/",
    to: "https://moverz.fr/demenagement/le-havre/",
  },
];

/**
 * Permettra plus tard de retrouver facilement la destination
 * à partir d'un host ou d'une URL complète.
 */
export function findDomainRedirect(source: string): DomainRedirect | undefined {
  return DOMAIN_REDIRECTS.find((r) => r.from === source);
}


