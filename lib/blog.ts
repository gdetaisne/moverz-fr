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
import { CANONICAL_BLOG_POSTS, type CanonicalBlogPost } from "./blog-canonique";

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

function mergeBlogData(
  base: BlogPostMeta[],
  extra: BlogPostMeta[],
  canonicals: CanonicalBlogPost[]
): BlogPostMeta[] {
  const map = new Map<string, BlogPostMeta>();

  // 1) Base : données issues du CSV auto-généré
  base.forEach((post) => {
    map.set(post.slug, post);
  });

  // 2) Overrides manuels : BLOG_EXTRA écrase BLOG_DATA
  extra.forEach((post) => {
    map.set(post.slug, post);
  });

  // 3) Canoniques : contenus validés dans moverz_main écrasent tout le reste
  canonicals.forEach((canonical) => {
    const existing = map.get(canonical.slug);
    const canonicalMeta: BlogPostMeta = {
      slug: canonical.slug,
      title: canonical.title,
      // Description : on privilégie la description canonique, puis la data existante, puis fallback dans sanitizePost.
      description: (canonical as any).description || existing?.description || "",
      publishedAt: existing?.publishedAt ?? "",
      updatedAt: existing?.updatedAt,
      category: canonical.type ?? existing?.category,
      citySlug: canonical.citySlug ?? existing?.citySlug,
      readingTimeMinutes: existing?.readingTimeMinutes,
    };
    map.set(canonical.slug, canonicalMeta);
  });

  return Array.from(map.values());
}

function humanizeSlug(slug: string): string {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

function sanitizePost(post: BlogPostMeta): BlogPostMeta {
  const bad = (v: string | undefined) => !v || v.trim() === "" || v.trim() === ">-";
  const title = bad(post.title) ? humanizeSlug(post.slug) : post.title;
  const description = bad(post.description)
    ? `${title} – guide complet déménagement Moverz.`
    : post.description;
  return { ...post, title, description };
}

const RAW_BLOG_POSTS: BlogPostMeta[] = mergeBlogData(
  BLOG_DATA,
  BLOG_EXTRA,
  CANONICAL_BLOG_POSTS
).map(sanitizePost);

export const BLOG_POSTS: BlogPostMeta[] = sortByPriority(RAW_BLOG_POSTS);

export function getPostBySlug(slug: string): BlogPostMeta | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

// Récupérer le body markdown canonique pour un slug donné (si disponible)
export function getCanonicalBodyBySlug(slug: string): string | undefined {
  const canonical = CANONICAL_BLOG_POSTS.find((post) => post.slug === slug);
  return canonical?.body;
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


