import { JsonLd } from "@/components/schema/JsonLd";
import { env } from "@/lib/env";
import { getCanonicalUrl } from "@/lib/canonical-helper";
import { getAuthor } from "@/lib/authors";

interface ArticleSchemaProps {
  title: string
  description: string
  slug: string
  publishedAt: string
  updatedAt?: string
  category?: string
  readingTimeMinutes?: number
  imageUrl?: string
  imageWidth?: number
  imageHeight?: number
  authorSlug?: string
}

export function buildArticleSchema({
  title,
  description,
  slug,
  publishedAt,
  updatedAt,
  category,
  readingTimeMinutes,
  imageUrl,
  imageWidth,
  imageHeight,
  authorSlug,
}: ArticleSchemaProps) {
  const baseUrl = env.SITE_URL.replace(/\/$/, "");
  const canonicalUrl = getCanonicalUrl(`blog/${slug}`);
  const organizationId = `${baseUrl}/#organization`;

  const author = authorSlug ? getAuthor(authorSlug) : undefined;
  const authorValue = author
    ? {
        "@type": "Person",
        "@id": `${baseUrl}/auteurs/${author.slug}/`,
        name: author.name,
        jobTitle: author.role,
        url: `${baseUrl}/auteurs/${author.slug}/`,
        sameAs: author.linkedin,
      }
    : { "@id": organizationId };

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: canonicalUrl,
    datePublished: publishedAt,
    dateModified: updatedAt || publishedAt,
    author: authorValue,
    publisher: { "@id": organizationId },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    ...(category && {
      articleSection: category,
    }),
    ...(readingTimeMinutes && {
      timeRequired: `PT${readingTimeMinutes}M`,
    }),
    ...(imageUrl && {
      image: {
        "@type": "ImageObject",
        url: imageUrl,
        width: imageWidth || 1200,
        height: imageHeight || 630,
      },
    }),
    inLanguage: "fr-FR",
    about: {
      "@type": "Thing",
      name: "Déménagement",
    },
  };
}

export function ArticleSchema({
  title,
  description,
  slug,
  publishedAt,
  updatedAt,
  category,
  readingTimeMinutes,
  imageUrl,
  imageWidth,
  imageHeight,
  authorSlug,
}: ArticleSchemaProps) {
  const schema = buildArticleSchema({
    title,
    description,
    slug,
    publishedAt,
    updatedAt,
    category,
    readingTimeMinutes,
    imageUrl,
    imageWidth,
    imageHeight,
    authorSlug,
  });

  return (
    <JsonLd id="article-schema" data={schema} />
  );
}
