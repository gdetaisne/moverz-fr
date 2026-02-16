import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityBySlug } from "@/lib/cities";
import { CityServicePage } from "@/components/templates/CityServicePage";
import { SERVICE_DEFINITIONS, SERVICE_SLUGS, type ServiceSlug } from "@/lib/service-pages";
import { getCityServiceMetadata } from "@/lib/seo/metadata";

type PageProps = {
  params: {
    slug: string;
    service: string;
  };
};

export function generateMetadata({ params }: PageProps): Metadata {
  const city = getCityBySlug(params.slug);
  const service = params.service as ServiceSlug;
  if (!city) return {};
  if (!SERVICE_SLUGS.includes(service)) return {};

  // SEO (2026-02-16): noindex dynamic service pages — template content with city name swap.
  // The 11 core cities (lyon, marseille, etc.) have their own hardcoded pages
  // in app/demenagement/{city}/{service}/page.tsx which are NOT affected by this.
  // follow=true keeps internal link equity flowing.
  return {
    ...getCityServiceMetadata({ city, service }),
    robots: { index: false, follow: true },
  };
}

export default function CityServiceDynamicPage({ params }: PageProps) {
  const city = getCityBySlug(params.slug);
  const service = params.service as ServiceSlug;

  if (!city) {
    notFound();
    return null;
  }
  if (!SERVICE_SLUGS.includes(service)) {
    notFound();
    return null;
  }

  const def = SERVICE_DEFINITIONS[service];
  return (
    <CityServicePage
      citySlug={city.slug}
      cityName={city.nameCapitalized}
      serviceSlug={service}
      badge={def.badge}
      h1={def.h1(city.nameCapitalized)}
      subtitle={def.subtitle(city.nameCapitalized)}
      sections={def.sections(city.nameCapitalized)}
    />
  );
}


