import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CITIES, related } from '@/data/cities';

export default function CitiesIndex() {
  const [q, setQ] = useState('');
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return CITIES;
    return CITIES.filter(c => c.name.toLowerCase().includes(s) || c.slug.includes(s));
  }, [q]);

  return (
    <>
      <Helmet>
        <title>Déménagement près de chez vous – Villes | Moverz</title>
        <meta name="description" content="Trouvez votre ville et obtenez 3 devis de déménagement en 5 minutes." />
      </Helmet>
      <section className="section">
        <div className="container space-y-6">
          <h1 className="h1">Villes</h1>
          <div>
            <input
              className="input max-w-md"
              placeholder="Rechercher une ville…"
              value={q}
              onChange={e => setQ(e.target.value)}
              aria-label="Rechercher une ville"
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map(c => (
              <a key={c.slug} href={`/villes/${c.slug}`} className="card hover:-translate-y-0.5">
                <div className="h3">{c.name}</div>
                <div className="small text-gray-600">{c.region}</div>
              </a>
            ))}
          </div>
          <div className="mt-8">
            <h2 className="h2 mb-3">Guides utiles</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {related.map((r, i) => (
                <a key={i} href={r.href} className="card">
                  <div className="h3 line-clamp-2">{r.title}</div>
                  <p className="small text-gray-600">{r.excerpt}</p>
                  <div className="small text-gray-500 mt-2">{r.meta}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
