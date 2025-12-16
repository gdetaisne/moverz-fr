import { MetadataRoute } from "next";
import { CITIES } from "@/lib/cities";
import { BLOG_POSTS } from "@/lib/blog";
import { cityData } from "@/lib/cityData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://moverz.fr";
  const now = new Date();

  // Pages statiques principales
  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/comment-ca-marche",
    "/villes",
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

  // Hub quartiers : /quartiers-{ville}/ (toutes les villes)
  const hubQuartiersPages: MetadataRoute.Sitemap = CITIES.map((city) => ({
    url: `${baseUrl}/quartiers-${city.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

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

  // Corridors city → city (toutes les villes "réelles" de CITIES, hors région Île-de-France)
  const excludedForCorridors = new Set(["ile-de-france"]);
  const corridorCityToCity: MetadataRoute.Sitemap = [];
  const corridorCities = CITIES.filter((c) => !excludedForCorridors.has(c.slug));
  for (const from of corridorCities) {
    for (const to of corridorCities) {
      if (from.slug === to.slug) continue;
      corridorCityToCity.push({
        url: `${baseUrl}/${from.slug}-vers-${to.slug}/`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.55,
      });
    }
  }

  // Articles de blog (dont P1 Prix & guides majeurs)
  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Dédoublonnage final (sitemap propre même si certaines URLs existent déjà en dur)
  const all = [
    ...staticPages,
    ...cityPages,
    ...hubQuartiersPages,
    ...quartierPages,
    ...corridorPages,
    ...corridorCityToCity,
    ...blogPages,
  ];

  const seen = new Set<string>();
  return all.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}
