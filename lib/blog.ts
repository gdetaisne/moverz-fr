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

const PRIORITY_SLUGS: string[] = [
  // Guides prix & devis (nationaux + grandes villes)
  "prix-demenagement-guide-complet-2025",
  "prix-demenagement-longue-distance-france",
  "prix-demenagement-paris",
  "prix-demenagement-marseille",
  "prix-demenagement-lyon",
  "prix-demenagement-nice",
  "prix-demenagement-bordeaux-guide",
  "prix-demenagement-toulouse",
  "prix-demenagement-nantes-guide",
  "prix-demenagement-lille",
  // Checklists & guides majeurs
  "checklist-demenagement-complete-2025",
  "checklist-demarches-administratives-apres-demenagement-2025",
  "preparer-son-demenagement-20-etapes-indispensables",
  // Comparateur & pages business
  "comparateur-demenageurs-choisir-meilleur-devis",
  // Famille
  "demenager-avec-des-enfants-guide-pratique",
  "demenager-avec-bebe-organisation-astuces-0-18-mois",
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

export const BLOG_POSTS: BlogPostMeta[] = sortByPriority(BLOG_DATA);

export function getPostBySlug(slug: string): BlogPostMeta | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}


