import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '@/components/Hero';

export default function Story() {
  return (
    <>
      <Helmet>
        <title>Notre histoire – Pourquoi nous avons créé Moverz</title>
      </Helmet>
      <Hero title="Notre histoire" subtitle="Pourquoi nous avons créé Moverz" />

      <section className="section">
        <div className="container grid md:grid-cols-3 gap-6">
          <article className="card"><h3 className="h3 mb-1">Problème</h3><p className="small">Visites techniques longues, devis imprécis.</p></article>
          <article className="card"><h3 className="h3 mb-1">Solution</h3><p className="small">Estimation IA à partir de photos, rapide et précise.</p></article>
          <article className="card"><h3 className="h3 mb-1">Impact</h3><p className="small">Gains de temps, transparence, meilleure satisfaction.</p></article>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container space-y-4">
          <h2 className="h2">Équipe fondatrice</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <article className="card"><div className="flex items-center gap-3 mb-2"><img src="/assets/team/lucie.jpeg" alt="Lucie" className="w-12 h-12 rounded-full object-cover" loading="lazy" /><h3 className="h3">Lucie</h3></div><ul className="small list-disc pl-5 text-gray-600"><li>Produit & Design</li><li>Expérience déménagement</li></ul></article>
            <article className="card"><div className="flex items-center gap-3 mb-2"><img src="/assets/team/guillaume.jpeg" alt="Guillaume" className="w-12 h-12 rounded-full object-cover" loading="lazy" /><h3 className="h3">Guillaume</h3></div><ul className="small list-disc pl-5 text-gray-600"><li>Tech & Data</li><li>IA appliquée</li></ul></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid md:grid-cols-3 gap-6">
          <article className="card"><h3 className="h3 mb-1">Mission</h3><p className="small">Simplifier le déménagement pour tous.</p></article>
          <article className="card"><h3 className="h3 mb-1">Valeurs</h3><p className="small">Transparence, sérénité, efficacité.</p></article>
          <article className="card"><h3 className="h3 mb-1">Chiffres clés</h3><p className="small">95% précision, 30% temps gagné.</p></article>
        </div>
      </section>
    </>
  );
}
