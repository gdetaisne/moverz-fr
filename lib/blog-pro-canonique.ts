import type { CanonicalBlogPost } from "./blog-canonique";

/**
 * Blog PRO — contenus canoniques (publiés).
 *
 * IMPORTANT (CapRover):
 * - On ré-exporte depuis `lib/blog-pro.generated.ts`.
 * - Évite les transformations RSC/Flight qui peuvent provoquer des exports dupliqués.
 */
export { CANONICAL_PRO_BLOG_POSTS } from "./blog-pro.generated";
export type { CanonicalBlogPost };

