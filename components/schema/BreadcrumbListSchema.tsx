import { JsonLd } from "./JsonLd";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbListSchemaProps {
  items: BreadcrumbItem[];
}

/**
 * BreadcrumbList JSON-LD schema.
 *
 * Génère un BreadcrumbList structuré pour Google (rich snippets dans SERP).
 * Chaque item est un ListItem avec position, name et url absolue.
 *
 * Usage typique (page ville) :
 * ```
 * <BreadcrumbListSchema items={[
 *   { label: "Accueil", href: "/" },
 *   { label: "Villes", href: "/villes/" },
 *   { label: "Déménagement Lyon", href: "/demenagement/lyon/" },
 * ]} />
 * ```
 */
export function BreadcrumbListSchema({ items }: BreadcrumbListSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: item.href.startsWith("http")
        ? item.href
        : `https://moverz.fr${item.href}`,
    })),
  };

  return <JsonLd id="breadcrumb-schema" data={data} />;
}
