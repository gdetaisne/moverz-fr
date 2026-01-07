import { MetadataRoute } from "next";
import { CITIES } from "@/lib/cities";
import { PUBLISHED_BLOG_POSTS } from "@/lib/blog";
import { cityData } from "@/lib/cityData";
import { QUARTIER_HUB_SLUGS } from "@/lib/quartiers";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://moverz.fr";
  const now = new Date();
  const SERVICE_SLUGS = [
    "garde-meuble",
    "location-camion",
    "pas-cher",
    "petit-demenagement",
    "aide-demenagement",
    "entreprise",
    "piano",
    "international",
  ] as const;

  // Pages statiques principales
  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/comment-ca-marche",
    "/villes",
    "/corridor",
    "/choisir-ville",
    "/faq",
    "/contact",
    "/a-propos",
    "/pro",
    "/mentions-legales",
    "/politique-confidentialite",
    "/cgu",
    "/cgv",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  // Pages villes SEO : /demenagement/<ville>/
  const cityPages: MetadataRoute.Sitemap = CITIES.map((city) => ({
    url: `${baseUrl}/demenagement/${city.slug}/`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Hub quartiers : /quartiers-{ville}/ (seulement villes supportées pour éviter du thin content)
  const hubQuartiersPages: MetadataRoute.Sitemap = CITIES.filter((c) => QUARTIER_HUB_SLUGS.includes(c.slug as any)).map(
    (city) => ({
      url: `${baseUrl}/quartiers-${city.slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  // Pages quartiers : /{ville}/{quartier}/
  const quartierPages: MetadataRoute.Sitemap = [];
  for (const [citySlug, city] of Object.entries(cityData)) {
    // Seulement les 7 nouvelles villes
    if (['nice', 'toulouse', 'strasbourg', 'nantes', 'rennes', 'rouen', 'montpellier'].includes(citySlug)) {
      for (const neighborhood of city.neighborhoods) {
        quartierPages.push({
          url: `${baseUrl}/${citySlug}/${neighborhood.slug}/`,
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.6,
        });
      }
    }
  }

  // Pages corridors : /{ville}-vers-{destination}/
  const corridorPages: MetadataRoute.Sitemap = [];
  for (const [citySlug, city] of Object.entries(cityData)) {
    // Seulement les 7 nouvelles villes
    if (['nice', 'toulouse', 'strasbourg', 'nantes', 'rennes', 'rouen', 'montpellier'].includes(citySlug)) {
      for (const corridor of city.corridors) {
        const destSlug = corridor.destination.toLowerCase().replace(/['\s]/g, '-');
        corridorPages.push({
          url: `${baseUrl}/${citySlug}-vers-${destSlug}/`,
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.6,
        });
      }
    }
  }

  // Corridors city → city (LIMITÉ) — éviter l'explosion N² si on scale à 300 villes
  const excludedForCorridors = new Set(["ile-de-france"]);
  const corridorCities = CITIES.filter((c) => !excludedForCorridors.has(c.slug));
  const preferred = [
    "paris",
    "lyon",
    "marseille",
    "toulouse",
    "bordeaux",
    "lille",
    "nantes",
    "strasbourg",
    "nice",
    "montpellier",
    "rennes",
    "rouen",
  ];

  const corridorCityToCity: MetadataRoute.Sitemap = corridorCities.flatMap((from) => {
    const candidates = corridorCities.map((c) => c.slug).filter((s) => s !== from.slug);
    const ordered = [...preferred.filter((s) => candidates.includes(s)), ...candidates]
      .filter((v, i, arr) => arr.indexOf(v) === i)
      .slice(0, 6);

    return ordered.map((toSlug) => ({
      url: `${baseUrl}/${from.slug}-vers-${toSlug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.55,
    }));
  });

  // Hub corridors par ville : /corridor/{from}/
  const corridorHubs: MetadataRoute.Sitemap = corridorCities.map((c) => ({
    url: `${baseUrl}/corridor/${c.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.4,
  }));

  // Articles de blog (dont P1 Prix & guides majeurs)
  const blogPages: MetadataRoute.Sitemap = PUBLISHED_BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Pages "service" (cluster SEO) — scalable sans ajouter du code ville par ville
  const cityServicePages: MetadataRoute.Sitemap = CITIES.flatMap((city) =>
    SERVICE_SLUGS.map((service) => ({
      url: `${baseUrl}/demenagement/${city.slug}/${service}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.65,
    }))
  );

  // Dédoublonnage final (sitemap propre même si certaines URLs existent déjà en dur)
  const all = [
    ...staticPages,
    ...cityPages,
    ...hubQuartiersPages,
    ...quartierPages,
    ...corridorPages,
    ...corridorCityToCity,
    ...corridorHubs,
    ...blogPages,
    ...cityServicePages,
  ];

  const seen = new Set<string>();
  return all.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}
