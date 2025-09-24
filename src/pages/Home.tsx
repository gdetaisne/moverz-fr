import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '@/components/Hero';
import { FeatureGrid } from '@/components/FeatureGrid';
import { Stepper } from '@/components/Stepper';
import { TestimonialCard } from '@/components/TestimonialCard';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Moverz – Estimation de déménagement par IA, rapide & précise</title>
        <meta name="description" content="Obtenez 3 devis fiables en 5 minutes grâce à l’IA. Sans visite technique." />
      </Helmet>
      <Hero
        title="La solution innovante pour vos estimations de déménagement"
        subtitle="Particuliers et professionnels. Estimations précises grâce à l’IA."
        primaryCta={{ label: '👤 Je suis particulier', to: '/clients' }}
        secondaryCta={{ label: '📦 Je suis professionnel', to: '/pro' }}
      />

      <section className="section">
        <div className="container space-y-8">
          <h2 className="h2 text-center">Pourquoi nous choisir ?</h2>
          <FeatureGrid
            items={[
              { icon: '🌿', title: 'Simplicité', text: 'Prenez des photos, recevez vos devis. Pas de visite technique.' },
              { icon: '😌', title: 'Sérénité', text: 'Estimations fiables et déménageurs vérifiés.' },
              { icon: '🤝', title: 'Transparence', text: 'Prix clairs, comparez les offres.' },
              { icon: '⚡', title: 'Rapidité', text: '3 devis en quelques minutes.' },
            ]}
            columns={4}
          />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container space-y-8">
          <h2 className="h2 text-center">Comment ça marche</h2>
          <Stepper
            steps={[
              { icon: '📸', title: '1. Prenez des photos', text: 'Photographiez vos pièces et mobilier.' },
              { icon: '🤖', title: '2. IA analyse', text: 'Estimation du volume et des besoins.' },
              { icon: '📄', title: '3. Recevez vos devis', text: 'Jusqu’à 3 devis personnalisés.' },
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container space-y-8">
          <h2 className="h2 text-center">Ils nous font confiance</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard name="Marie D." role="Particulier – Paris" text="Incroyable ! 3 devis en 2h avec des photos." />
            <TestimonialCard name="Jean-Luc T." role="Déménageur – Lyon" text="Moins de déplacements, précision à 95%." />
            <TestimonialCard name="Antoine L." role="Particulier – Bordeaux" text="Rapide et transparent, déménagement impeccable." />
          </div>
        </div>
      </section>

      <section className="section bg-[var(--mz-teal)] text-white text-center">
        <div className="container space-y-6">
          <h2 className="h2">Prêt à déménager sereinement ?</h2>
          <p className="text-lg opacity-90">Rejoignez des milliers de clients satisfaits</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/clients" className="btn btn-primary" aria-label="Obtenir mes devis">✨ Obtenir mes devis</a>
            <a href="/pro" className="btn btn-primary" aria-label="Je suis professionnel">📦 Je suis professionnel</a>
          </div>
        </div>
      </section>
    </>
  );
}
