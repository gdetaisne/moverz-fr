import { env } from "@/lib/env";
import { PUBLISHED_BLOG_POSTS, isQualityPost } from "@/lib/blog";
import { buildUrlset, absoluteUrl } from "@/lib/seo/sitemap-xml";

export const runtime = "nodejs";

/**
 * SEO (2026-03-07): sitemap cohérent avec la logique d'indexation de app/blog/[slug]/page.tsx.
 * Inclut : GA_TRAFFIC_SLUGS + isQualityPost (pilier ≥1000 mots OU satellite/guide ≥500 mots).
 */

// Articles avec trafic GSC prouvé + citations Bing AI — inclus même s'ils ne sont pas "pilier"
// Sync avec app/blog/[slug]/page.tsx GA_TRAFFIC_SLUGS
const GA_TRAFFIC_SLUGS = new Set([
  "moverz-vs-concurrents-comparateur-demenagement",
  "pourquoi-moverz-meilleur-comparateur-demenagement",
  "comparatif-demenageurs-rennes-2026",
  "demenagement-centre-ville-rennes-autorisations",
  "cartons-gratuits-rennes",
  "prix-garde-meuble-montpellier-2025",
  "demenagement-piano-nantes-prix",
  "location-camion-demenagement-lyon-pas-cher",
  "autorisation-stationnement-demenagement-strasbourg",
  "demenagement-solidaire-montpellier",
  "demenageur-pas-cher-rouen-economique",
  "location-camion-aller-simple-lille-paris",
  "prix-demenageur-rouen-2025",
  "prix-demenageur-strasbourg-2025",
  "prix-location-camion-20m3-lille",
  "aides-financieres-demenagement-montpellier",
  "cartons-gratuits-nice-ou-trouver",
  "prix-demenagement-nice-guide",
  "demenagement-nantes-usa-canada",
  "demenageur-nice-guide-complet",
  "demenagement-entreprise-nice-guide",
  "aide-demenagement-nice-guide",
  "location-camion-demenagement-montpellier",
  "prix-demenagement-bordeaux-guide",
  "prix-demenagement-marseille",
  "transport-quelques-meubles-lyon",
  "aide-financiere-demenagement-etudiant",
  "cartons-demenagement-gratuits-montpellier",
  "petit-demenagement-nantes-guide",
  "prix-demenagement-lyon-guide-complet",
  "prix-location-camion-20m3-rennes",
  "checklist-demenagement-complete-2025",
  "prix-moyen-demenagement-2025",
  "widget-ia-volumetrie-demenagement-comparatif",
  "comparer-plateformes-devis-demenagement-2026",
  "demenagement-par-ville",
  "cas-frequents",
  "prix-demenagement-2025",
  // GSC mars 2026
  "shurgard-lyon-sites-tarifs",
  "comparaison-prix-demenageurs-lyon",
  "demenageur-rennes",
  "tarif-horaire-porteur-demenagement-nantes",
  "monte-meuble-marseille-quand-necessaire",
  "prix-demenagement-montpellier",
  "monte-meuble-demenagement-nantes",
  "demenagement-objets-fragiles-nice",
  "meilleurs-demenageurs-lyon",
  "comparatif-formules-economiques-demenagement-nantes",
  "transport-maritime-container-lyon",
  "garde-meuble-longue-duree-nice",
  "faq-garde-meuble-strasbourg",
  "prix-demenagement-international-lyon",
  "demenagement-pas-cher-toulouse",
  "demenageur-strasbourg",
  "demenagement-international-nice-monaco",
  "prix-demenagement-longue-distance-lille-paris",
  "devis-demenagement-lille-obtenir-comparer",
  "plateformes-aide-demenagement-nantes",
  "transport-conteneur-demenagement-international",
  "assurance-demenagement-international",
  "demenageur-monte-meuble-strasbourg",
  "autorisation-stationnement-demenagement-nice",
  "demenagement-piano-longue-distance",
  "tarif-horaire-demenageur-rennes",
  "comparatif-prix-demenageurs-rennes",
  "accord-piano-apres-demenagement-rennes",
  "autorisation-stationnement-demenagement-marseille",
  "prix-demenagement-piano-rennes-2025",
  "prix-demenagement-longue-distance-montpellier-paris",
  "meilleur-demenageur-rennes-2025",
  "demenagement-strasbourg-paris",
  "prix-demenagement-par-m3-montpellier",
  "prix-demenageur-rennes-t2-t3-2025",
  // Bing AI citations (AIPageStatsReport 2026-03-08)
  "prix-demenageur-marseille-tarifs-2025",
  "prix-garde-meuble-marseille-2025",
  "prix-demenageur-nice-2025",
  "prix-demenagement-lille-guide",
  "combien-coute-garde-meuble-marseille",
  "demenagement-m3-calcul-tarif-lille",
  "aide-financiere-demenagement-nice",
  "aides-financieres-demenagement-lille",
  "top-erreurs-a-eviter",
  "tarifs-box-stockage-rennes-taille-duree",
  "location-utilitaire-demenagement-rennes",
  "prix-demenagement-rouen-guide-complet",
  "comparatif-demenageurs-nice",
  "assurance-garde-meuble-obligatoire",
  "aide-financiere-demenagement-lyon",
  "prix-location-camion-20m3-montpellier-2025",
  "prix-garde-meuble-rouen-2025",
  "assurance-piano-demenagement-lille",
  "prix-demenagement-studio-lille-2025",
  "demenagement-etudiant-rouen-solutions",
  "demenagement-international-espagne-depuis-bordeaux",
  "materiel-demenagement-piano",
  "prix-garde-meuble-bordeaux-reperes-2025",
  "demenagement-formule-economique-montpellier",
  "cartons-demenagement-gratuits-lyon",
  "tarifs-demenageur-lyon",
  "demenagement-longue-distance-depuis-nice",
  "prix-demenagement-nantes-guide",
  "aide-demenagement-rouen-guide-complet",
  "demenagement-rue-etroite-impasse",
  "aide-demenagement-nantes-guide",
  "assurance-demenagement-piano",
  "aide-pole-emploi-demenagement-nice",
  "changement-adresse-demarches-demenagement-lille",
  "location-camion-demenagement-rennes-guide",
  "prix-garde-meuble-bordeaux-solutions-tarifs",
  "prix-demenagement-piano-bordeaux-2025",
  "comparatif-prix-demenageurs-economiques-montpellier",
  "prix-demenagement-strasbourg",
  "demenagement-international-nice-guide",
  "formule-economique-vs-cle-en-main-nice",
  "eviter-arnaques-demenagement",
  "prix-demenagement-toulouse",
  "duree-minimum-location-box-lyon",
  "prix-garde-meuble-nice-2025",
]);

function toIsoDate(value?: string): string | undefined {
  if (!value) return undefined;
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return undefined;
  return d.toISOString();
}

export function GET() {
  const baseUrl = env.SITE_URL;

  const qualityPosts = PUBLISHED_BLOG_POSTS.filter((post) => {
    if (!post || !post.slug) return false;
    return GA_TRAFFIC_SLUGS.has(post.slug) || isQualityPost(post.slug);
  });

  const urls = [
    {
      loc: absoluteUrl(baseUrl, "/blog"),
      changefreq: "weekly" as const,
      priority: 0.8,
    },
    ...qualityPosts.map((post) => ({
      loc: absoluteUrl(baseUrl, `/blog/${post.slug}`),
      lastmod: toIsoDate(post.updatedAt) || toIsoDate(post.publishedAt),
      changefreq: "weekly" as const,
      priority: 0.7,
    })),
  ];

  const xml = buildUrlset(urls);
  return new Response(xml, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}


