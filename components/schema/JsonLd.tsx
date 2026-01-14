import Script from "next/script";

type JsonLdProps = {
  /** Unique script id for Next.js */
  id: string;
  /** JSON-LD object (must be JSON-serializable) */
  data: unknown;
};

export function JsonLd({ id, data }: JsonLdProps) {
  return (
    <Script
      id={id}
      type="application/ld+json"
      // JSON.stringify ensures valid JSON (no trailing commas)
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

