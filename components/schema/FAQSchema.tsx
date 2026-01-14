import { JsonLd } from "@/components/schema/JsonLd";

interface FAQItem {
  question: string
  answer: string
}

interface FAQSchemaProps {
  faqs: FAQItem[]
}

export function buildFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = buildFAQSchema(faqs)

  return (
    <JsonLd id="faq-schema" data={schema} />
  )
}

