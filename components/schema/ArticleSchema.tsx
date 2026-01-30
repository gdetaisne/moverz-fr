import { JsonLd } from "@/components/schema/JsonLd";
import { env } from "@/lib/env";
import { getCanonicalUrl } from "@/lib/canonical-helper";

interface ArticleSchemaProps {
  title: string
  description: string
  slug: string
  publishedAt: string
  updatedAt?: string
  category?: string
  readingTimeMinutes?: number
}

export function buildArticleSchema({
  title,
  description,
  slug,
  publishedAt,
  updatedAt,
  category,
  readingTimeMinutes,
}: ArticleSchemaProps) {
  const baseUrl = env.SITE_URL.replace(/\/$/, "");
  const canonicalUrl = getCanonicalUrl(`blog/${slug}`);
  const organizationId = `${baseUrl}/#organization`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: canonicalUrl,
    datePublished: publishedAt,
    dateModified: updatedAt || publishedAt,
    author: { "@id": organizationId },
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
}: ArticleSchemaProps) {
  const schema = buildArticleSchema({
    title,
    description,
    slug,
    publishedAt,
    updatedAt,
    category,
    readingTimeMinutes,
  });

  return (
    <JsonLd id="article-schema" data={schema} />
  )
}

