import Script from 'next/script'

interface ArticleSchemaProps {
  title: string
  description: string
  slug: string
  publishedAt: string
  updatedAt?: string
  category?: string
  readingTimeMinutes?: number
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
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url: `https://moverz.fr/blog/${slug}/`,
    datePublished: publishedAt,
    dateModified: updatedAt || publishedAt,
    author: {
      '@type': 'Organization',
      name: 'Moverz',
      url: 'https://moverz.fr',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Moverz',
      url: 'https://moverz.fr',
      logo: {
        '@type': 'ImageObject',
        url: 'https://moverz.fr/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://moverz.fr/blog/${slug}/`,
    },
    ...(category && {
      articleSection: category,
    }),
    ...(readingTimeMinutes && {
      timeRequired: `PT${readingTimeMinutes}M`,
    }),
    inLanguage: 'fr-FR',
    about: {
      '@type': 'Thing',
      name: 'Déménagement',
    },
  }

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

