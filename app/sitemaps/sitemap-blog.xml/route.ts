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

// Articles avec trafic GA prouvé — inclus même s'ils ne sont pas "pilier"
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


