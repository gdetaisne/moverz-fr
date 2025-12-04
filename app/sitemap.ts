import { MetadataRoute } from "next";
import { CITIES } from "@/lib/cities";
import { BLOG_POSTS } from "@/lib/blog";

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

  // Articles de blog (dont P1 Prix & guides majeurs)
  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticPages, ...cityPages, ...blogPages];
}
