import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '@/components/Hero';
import { FeatureGrid } from '@/components/FeatureGrid';
import { DemoForm } from '@/components/DemoForm';
import { TestimonialCard } from '@/components/TestimonialCard';

export default function Pro() {
  return (
    <>
      <Helmet>
        <title>Outil IA pour déménageurs – Estimations précises & ROI</title>
      </Helmet>
      <Hero
        title="Professionnels : gagnez du temps, augmentez votre ROI"
        subtitle="Intégrez l’estimation IA dans votre workflow en 48h."
        primaryCta={{ label: 'Demander une démo', to: '#demo' }}
      />

      <section className="section bg-white">
        <div className="container space-y-6">
          <h2 className="h2">L’outil en action</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="h3 mb-2">Exemple de résultat</h3>
              <ul className="small list-disc pl-5 text-gray-700">
                <li>Volume estimé: 22 m³</li>
                <li>Temps: 6h équipe de 3</li>
                <li>Camion: 20 m³</li>
              </ul>
            </div>
            <ol className="space-y-3">
              <li className="card">1. Le client envoie des photos</li>
              <li className="card">2. Votre équipe reçoit l’estimation</li>
              <li className="card">3. Vous envoyez un devis précis</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-6">
          <h2 className="h2">KPIs</h2>
          <FeatureGrid
            items={[
              { title: '+25% taux de conversion', text: 'Des devis plus précis, plus vite.' },
              { title: '-30% déplacements', text: 'Moins de visites techniques.' },
              { title: '95% précision', text: 'IA entraînée sur des milliers de cas.' },
            ]}
            columns={3}
          />
        </div>
      </section>

      <section id="demo" className="section bg-white">
        <div className="container space-y-6">
          <h2 className="h2">Demander une démo</h2>
          <DemoForm />
        </div>
      </section>

      <section className="section">
        <div className="container grid md:grid-cols-3 gap-6">
          <TestimonialCard name="TransMove" role="Opérations" text="Mise en place en deux jours, résultats immédiats." />
          <TestimonialCard name="Déménager Pro" role="Direction" text="Plus de précision, meilleure marge." />
          <TestimonialCard name="SpeedMove" role="Commercial" text="Cycle de vente raccourci de 30%." />
        </div>
      </section>
    </>
  );
}
