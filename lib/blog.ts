export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  publishedAt: string; // ISO string
  updatedAt?: string;  // ISO string
  category?: string;
  citySlug?: string;
  readingTimeMinutes?: number;
}

import { BLOG_DATA } from "./blog-data";
import { BLOG_EXTRA } from "./blog-extra";

// P1-SEO-PRIX-TOP20 : 20 articles Prix à mettre en avant en priorité
const PRIORITY_SLUGS: string[] = [
  // Guide national longue distance
  "prix-demenagement-longue-distance-france",
  // Guides prix par grande ville
  "prix-demenagement-marseille",
  "prix-demenagement-lyon-guide-complet",
  "prix-demenagement-nice-guide",
  "prix-demenagement-bordeaux-guide",
  "prix-demenagement-montpellier",
  "prix-demenagement-nantes-guide",
  "prix-demenagement-lille-guide",
  "prix-demenagement-rouen-guide-complet",
  "prix-demenagement-strasbourg",
  "prix-demenagement-toulouse",
  // Longue distance
  "prix-demenagement-longue-distance-bordeaux",
  "prix-demenagement-longue-distance-marseille",
  "prix-demenagement-longue-distance-lille-paris",
  "prix-demenagement-longue-distance-montpellier-paris",
  // Typologies de logements / cas fréquents
  "prix-demenagement-studio-lille-2025",
  "prix-demenagement-studio-lyon",
  "prix-demenagement-t2-marseille-fourchettes-facteurs",
  "prix-demenagement-t2-nice",
  "prix-demenagement-t3-lyon",
  "prix-demenagement-t3-nice",
];

function sortByPriority(data: BlogPostMeta[]): BlogPostMeta[] {
  const priorityIndex = new Map<string, number>();
  PRIORITY_SLUGS.forEach((slug, index) => {
    priorityIndex.set(slug, index);
  });

  return [...data].sort((a, b) => {
    const pa = priorityIndex.has(a.slug) ? priorityIndex.get(a.slug)! : Number.POSITIVE_INFINITY;
    const pb = priorityIndex.has(b.slug) ? priorityIndex.get(b.slug)! : Number.POSITIVE_INFINITY;

    if (pa !== pb) {
      return pa - pb;
    }

    // À priorité égale : trier par date (plus récents en premier si disponible)
    const da = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
    const db = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
    return db - da;
  });
}

function mergeBlogData(base: BlogPostMeta[], extra: BlogPostMeta[]): BlogPostMeta[] {
  const map = new Map<string, BlogPostMeta>();
  base.forEach((post) => {
    map.set(post.slug, post);
  });
  extra.forEach((post) => {
    // les entrées de BLOG_EXTRA écrasent celles de BLOG_DATA pour le même slug
    map.set(post.slug, post);
  });
  return Array.from(map.values());
}

const RAW_BLOG_POSTS: BlogPostMeta[] = mergeBlogData(BLOG_DATA, BLOG_EXTRA);

export const BLOG_POSTS: BlogPostMeta[] = sortByPriority(RAW_BLOG_POSTS);

export function getPostBySlug(slug: string): BlogPostMeta | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

// Trouver l'article Prix associé à une ville donnée
export function getPricePostForCity(citySlug: string): BlogPostMeta | undefined {
  return BLOG_POSTS.find(
    (post) =>
      post.category === "prix-et-devis" &&
      post.citySlug === citySlug &&
      post.slug.startsWith("prix-demenagement")
  );
}


