import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FeatureGrid } from '@/components/FeatureGrid';
import { Stepper } from '@/components/Stepper';
import { TestimonialCard } from '@/components/TestimonialCard';
import { FAQAccordion } from '@/components/FAQAccordion';
import { JsonLd } from '@/components/JsonLd';
import { buildCityDescription, buildCityTitle, PRICING, steps as globalSteps } from '@/data/cities';

export type CityContent = {
  name: string;
  slug: string;
  region: string;
  zones: string[];
  faqs: { q: string; a: string }[];
  related: { href: string; title: string; excerpt: string; meta: string }[];
  testimonials?: { name: string; role: string; text: string }[];
};

export default function CityPage({ city }: { city: CityContent }) {
  const title = buildCityTitle(city.name);
  const description = buildCityDescription(city.name);

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: '/' },
      { '@type': 'ListItem', position: 2, name: 'Villes', item: '/villes' },
      { '@type': 'ListItem', position: 3, name: city.name, item: `/villes/${city.slug}` },
    ],
  };

  const localBusinessLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Déménagement ${city.name} – Moverz`,
    areaServed: city.name,
    url: `/villes/${city.slug}`,
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: city.faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={localBusinessLd} />
      <JsonLd data={faqLd} />

      <section className="section">
        <div className="container">
          <Breadcrumbs items={[{ href: '/', label: 'Accueil' }, { href: '/villes', label: 'Villes' }, { href: `/villes/${city.slug}`, label: city.name }]} />
          <h1 className="h1 mb-2">Déménagement à {city.name}</h1>
          <p className="small text-gray-600">Région: {city.region}</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a className="btn btn-primary" href="/clients" aria-label="Obtenir mes devis gratuits">✨ Obtenir mes devis gratuits</a>
            <a className="btn btn-outline" href="/pro" aria-label="Je suis professionnel">📦 Je suis professionnel</a>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container space-y-6">
          <h2 className="h2">Zones desservies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {city.zones.map((z, i) => (
              <div key={i} className="card small">{z}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-6">
          <h2 className="h2">Tarifs indicatifs</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {PRICING.map((p, i) => (
              <div key={i} className="card">
                <h3 className="h3 mb-2">{p.type}</h3>
                <ul className="small text-gray-700 list-disc pl-5">
                  <li>Local: {p.local}</li>
                  <li>Régional: {p.regional}</li>
                  <li>Longue distance: {p.ld}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container space-y-6">
          <h2 className="h2">Comment ça marche</h2>
          <Stepper steps={globalSteps as any} />
        </div>
      </section>

      {city.testimonials && (
        <section className="section">
          <div className="container grid md:grid-cols-3 gap-6">
            {city.testimonials.map((t, i) => (
              <TestimonialCard key={i} name={t.name} role={t.role} text={t.text} />
            ))}
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <h2 className="h2 mb-4">Questions fréquentes</h2>
          <FAQAccordion faqs={city.faqs} />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container space-y-4">
          <h2 className="h2">Conseils & Guides</h2>
          <FeatureGrid
            items={city.related.map(r => ({ title: r.title, text: r.excerpt, icon: '📝' }))}
            columns={3}
          />
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a className="btn btn-primary" href="/clients" aria-label="Obtenir mes devis gratuits">✨ Obtenir mes devis gratuits</a>
            <a className="btn btn-outline" href="/pro" aria-label="Demander une démo pro">✨ Demander une démo pro</a>
          </div>
        </div>
      </section>
    </>
  );
}
