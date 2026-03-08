import { env } from "@/lib/env";
import { PUBLISHED_BLOG_POSTS, isQualityPost } from "@/lib/blog";
import { buildUrlset, absoluteUrl } from "@/lib/seo/sitemap-xml";

export const runtime = "nodejs";

/**
 * SEO (2026-03-07): sitemap cohérent avec la logique d'indexation de app/blog/[slug]/page.tsx.
 * Inclut : articles GA trafic prouvé + piliers qualité (≥ 1000 mots, type="pilier", body présent).
 *
 * Before: ~750 posts (filtre 500 mots)
 * After:  articles piliers qualité + liste GA trafic (~100-150 URLs estimées)
 */

// Articles avec trafic GSC prouvé — inclus même s'ils ne sont pas "pilier"
const GA_TRAFFIC_SLUGS = new Set([
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
  // Groupe A — ≥1000 mots, impressions GSC >200
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
  // Groupe B — enrichis 750-1000 mots
  "assurance-demenagement-international",
  "demenageur-monte-meuble-strasbourg",
  "autorisation-stationnement-demenagement-nice",
  // Groupe C — réécritures complètes
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


