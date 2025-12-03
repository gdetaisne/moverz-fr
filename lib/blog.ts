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

export const BLOG_POSTS: BlogPostMeta[] = BLOG_DATA;

export function getPostBySlug(slug: string): BlogPostMeta | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}


