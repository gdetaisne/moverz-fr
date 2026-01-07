import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityBySlug } from "@/lib/cities";
import { CityServicePage, generateCityServiceMetadata } from "@/components/templates/CityServicePage";
import { SERVICE_DEFINITIONS, SERVICE_SLUGS, type ServiceSlug } from "@/lib/service-pages";

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

  const def = SERVICE_DEFINITIONS[service];
  return generateCityServiceMetadata({
    citySlug: city.slug,
    serviceSlug: service,
    title: def.title(city.nameCapitalized),
    description: def.description(city.nameCapitalized),
  });
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


