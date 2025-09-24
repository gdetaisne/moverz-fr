import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '@/components/Hero';
import { Stepper } from '@/components/Stepper';
import { LeadForm } from '@/components/LeadForm';
import { TestimonialCard } from '@/components/TestimonialCard';

export default function Clients() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: 'Comment fonctionne l’estimation ?', a: 'Vous prenez des photos, notre IA estime le volume et les besoins.' },
    { q: 'Combien de temps pour recevoir des devis ?', a: 'Généralement quelques minutes à quelques heures.' },
    { q: 'Les déménageurs sont-ils vérifiés ?', a: 'Oui, nous sélectionnons des partenaires de confiance.' },
  ];

  return (
    <>
      <Helmet>
        <title>Devis déménagement en 5 minutes – Moverz (Particuliers)</title>
      </Helmet>
      <Hero
        title="Particuliers : obtenez 3 devis en 5 minutes"
        subtitle="Fini les visites techniques. Simplicité, sérénité, transparence."
        primaryCta={{ label: 'Commencer', to: '#lead' }}
      />

      <section className="section">
        <div className="container space-y-8">
          <Stepper
            steps={[
              { icon: '📸', title: 'Photos', text: 'Prenez des photos de vos pièces.' },
              { icon: '🤖', title: 'Analyse IA', text: 'Estimation précise du volume.' },
              { icon: '📄', title: 'Devis', text: 'Recevez jusqu’à 3 devis.' },
            ]}
          />
        </div>
      </section>

      <section id="lead" className="section bg-white">
        <div className="container space-y-6">
          <h2 className="h2">Démarrer ma demande</h2>
          <LeadForm />
        </div>
      </section>

      <section className="section">
        <div className="container grid md:grid-cols-3 gap-6">
          <TestimonialCard name="Sophie R." role="Particulier – Lille" text="Ultra simple, devis rapides et fiables." />
          <TestimonialCard name="Nicolas P." role="Particulier – Lyon" text="Zéro stress, tout était clair." />
          <TestimonialCard name="Laura M." role="Particulier – Paris" text="Génial pour comparer les offres." />
        </div>
      </section>

      <section className="section">
        <div className="container space-y-4">
          <h2 className="h2">FAQ</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <article key={i} className="card">
                <button className="w-full text-left h3" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>{f.q}</button>
                {open === i && <p className="mt-2 small">{f.a}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
