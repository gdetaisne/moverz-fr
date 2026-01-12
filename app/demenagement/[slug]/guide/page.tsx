import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CITIES, getCityBySlug } from "@/lib/cities";
import { getCityPageMetadata } from "@/lib/seo/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CityLongFormGuide } from "@/components/city/CityLongFormGuide";

export const dynamic = "force-dynamic";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return CITIES.map((city) => ({ slug: city.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const city = getCityBySlug(params.slug);
  if (!city) return {};
  return getCityPageMetadata(city, "guide");
}

export default function CityGuidePage({ params }: PageProps) {
  const city = getCityBySlug(params.slug);
  if (!city) {
    notFound();
    return null;
  }

  const quoteUrl = `https://devis.moverz.fr/devis-gratuits-v3?city_slug=${city.slug}&source=moverz.fr&from=/demenagement/${city.slug}/guide/`;

  return (
    <main className="bg-white">
      <div className="bg-[#0F172A]">
        <div className="container max-w-4xl pt-6">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Villes", href: "/villes/" },
              { label: `Déménagement ${city.nameCapitalized}`, href: `/demenagement/${city.slug}/` },
              { label: `Guide complet`, href: `/demenagement/${city.slug}/guide/` },
            ]}
          />
        </div>
      </div>

      <CityLongFormGuide citySlug={city.slug} cityName={city.nameCapitalized} quoteUrl={quoteUrl} />
    </main>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityBySlug } from "@/lib/cities";
import { getCityPageMetadata } from "@/lib/seo/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CityHero } from "@/components/city/CityHero";
import { CityLongFormGuide } from "@/components/city/CityLongFormGuide";

export const dynamic = "force-dynamic";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: PageProps): Metadata {
  const city = getCityBySlug(params.slug);
  if (!city) return {};
  const base = getCityPageMetadata(city);
  return {
    ...base,
    title: `Guide complet déménagement ${city.nameCapitalized} (2000+ mots) | Moverz`,
    alternates: {
      ...base.alternates,
      canonical: `/demenagement/${city.slug}/guide/`,
    },
  };
}

export default function CityGuidePage({ params }: PageProps) {
  const city = getCityBySlug(params.slug);
  if (!city) {
    notFound();
    return null;
  }

  const quoteUrl = `https://devis.moverz.fr/devis-gratuits-v3?city_slug=${city.slug}&source=moverz.fr&from=/demenagement/${city.slug}/guide/`;

  return (
    <main className="bg-white">
      <div className="bg-[#0F172A]">
        <div className="container max-w-4xl pt-6">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Villes", href: "/villes/" },
              { label: `Déménagement ${city.nameCapitalized}`, href: `/demenagement/${city.slug}/` },
              { label: "Guide complet", href: `/demenagement/${city.slug}/guide/` },
            ]}
          />
        </div>
      </div>

      <CityHero city={city} quoteUrl={quoteUrl} />

      {/* Full long-form guide rendered on a dedicated page (SEO) */}
      <CityLongFormGuide citySlug={city.slug} cityName={city.nameCapitalized} quoteUrl={quoteUrl} />
    </main>
  );
}


