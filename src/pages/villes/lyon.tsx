import React from 'react';
import CityPage from '@/pages/villes/CityPage';
import { CITIES, faqs, getZones, related } from '@/data/cities';

export default function Lyon() {
  const base = CITIES.find(c => c.slug === 'lyon')!;
  return (
    <CityPage
      city={{
        name: base.name,
        slug: base.slug,
        region: base.region,
        zones: getZones('lyon'),
        faqs,
        related,
        testimonials: [
          { name: 'Thomas R.', role: 'Particulier – Croix-Rousse', text: 'Très utile pour chiffrer rapidement.' },
          { name: 'Nadia S.', role: 'Particulier – Villeurbanne', text: 'Simple et efficace.' },
        ],
      }}
    />
  );
}
