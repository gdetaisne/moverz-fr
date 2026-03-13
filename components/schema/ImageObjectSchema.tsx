/**
 * ImageObject Schema pour améliorer le SEO des images dans Google Images
 * Aide Google à comprendre le contexte et le contenu des images
 */

type ImageObjectSchemaProps = {
  images: {
    url: string;
    name: string;
    description: string;
    caption: string;
  }[];
};

export function ImageObjectSchema({ images }: ImageObjectSchemaProps) {
  // Si une seule image, schema simple
  if (images.length === 1) {
    const image = images[0];
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageObject",
            contentUrl: image.url,
            name: image.name,
            description: image.description,
            caption: image.caption,
            author: {
              "@type": "Organization",
              name: "Moverz",
              url: "https://moverz.fr",
            },
          }),
        }}
      />
    );
  }

  // Si plusieurs images, ItemList d'ImageObjects
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: images.map((image, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "ImageObject",
              contentUrl: image.url,
              name: image.name,
              description: image.description,
              caption: image.caption,
              author: {
                "@type": "Organization",
                name: "Moverz",
                url: "https://moverz.fr",
              },
            },
          })),
        }),
      }}
    />
  );
}
