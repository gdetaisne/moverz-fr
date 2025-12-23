interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Générer le schema BreadcrumbList pour Google Rich Snippets
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://moverz.fr${item.href}`
    }))
  };

  return (
    <>
      {/* Schema BreadcrumbList pour Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className="text-sm">
        <ol className="flex items-center gap-2 flex-wrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {!isLast ? (
                <>
                  <a
                    href={item.href}
                    className="text-[#1E293B]/70 hover:text-[#0F172A] transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                  <span className="text-[#1E293B]/50">/</span>
                </>
              ) : (
                <span className="text-[#0F172A] font-semibold">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
    </>
  );
}

