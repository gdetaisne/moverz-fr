import React from 'react';
import CityPage from '@/pages/villes/CityPage';
import { CITIES, faqs, getZones, related } from '@/data/cities';

export default function Paris() {
  const base = CITIES.find(c => c.slug === 'paris')!;
  return (
    <CityPage
      city={{
        name: base.name,
        slug: base.slug,
        region: base.region,
        zones: getZones('paris'),
        faqs,
        related,
        testimonials: [
          { name: 'Camille P.', role: 'Particulier – Marais', text: 'Devis rapides, service impeccable.' },
          { name: 'Omar L.', role: 'Particulier – Boulogne', text: 'Pratique et précis, je recommande.' },
          { name: 'Alice G.', role: 'Particulier – 15e', text: 'Tout s’est déroulé sans stress.' },
        ],
      }}
    />
  );
}
