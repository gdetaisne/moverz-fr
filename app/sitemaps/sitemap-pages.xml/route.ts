import { env } from "@/lib/env";
import { CITIES } from "@/lib/cities";
import { QUARTIER_HUB_SLUGS } from "@/lib/quartiers";
import { buildUrlset, absoluteUrl } from "@/lib/seo/sitemap-xml";

export const runtime = "nodejs";

export function GET() {
  const baseUrl = env.SITE_URL;
  const lastmod = new Date().toISOString().split("T")[0];
  const supportedQuartiers = new Set<string>(QUARTIER_HUB_SLUGS as unknown as string[]);

  const staticPaths = [
    "/",
    "/comment-ca-marche",
    "/criteres-choisir-demenageur",
    "/faq-arnaque-demenagement",
    "/verifications-partenaires",
    "/villes",
    "/corridor",
    "/choisir-ville",
    "/faq",
    "/contact",
    "/a-propos",
    "/partenaires",
    "/mentions-legales",
    "/politique-confidentialite",
    "/cgu",
    "/cgv",
    "/glossaire-demenagement",
    "/chiffres-cles",
  ];

  const urls = [
    ...staticPaths.map((p) => ({
      loc: absoluteUrl(baseUrl, p),
      lastmod,
      changefreq: "monthly" as const,
      priority: p === "/" ? 1.0 : 0.8,
    })),
    // Hubs quartiers (only supported)
    ...CITIES.filter((c) => c && c.slug && supportedQuartiers.has(c.slug)).map((c) => ({
      loc: absoluteUrl(baseUrl, `/quartiers-${c.slug}`),
      lastmod,
      changefreq: "monthly" as const,
      priority: 0.6,
    })),
    // SEO (2026-02-16): corridor hubs removed from sitemap.
    // 300 hub pages were feeding Google 60 destinations each → ~18 000 crawlable corridors.
    // Hubs are now noindex'd; the /corridor/ index page remains as the single entry point.
  ];

  const xml = buildUrlset(urls);
  return new Response(xml, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}


