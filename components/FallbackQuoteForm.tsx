"use client";

import { useState } from "react";

export default function FallbackQuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: brancher sur une API de secours (email, CRM, etc.)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-brand-turquoise/40 bg-gradient-to-br from-[#E6FFFA] to-white p-8 text-center">
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-brand-turquoise text-white text-2xl font-bold">
          ✓
        </div>
        <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">Demande de devis envoyée</h3>
        <p className="text-[var(--color-text-secondary)]">
          Nous avons bien reçu votre demande. Un membre de l&apos;équipe Moverz vous répondra rapidement
          avec les prochaines étapes.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[var(--color-text)] mb-2">
            Nom et prénom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-[var(--color-text)] focus:border-brand-turquoise/60 focus:outline-none focus:ring-2 focus:ring-brand-turquoise/20 transition-all"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[var(--color-text)] mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-[var(--color-text)] focus:border-brand-turquoise/60 focus:outline-none focus:ring-2 focus:ring-brand-turquoise/20 transition-all"
            placeholder="votre@email.com"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="city" className="block text-sm font-semibold text-[var(--color-text)] mb-2">
            Ville de départ / d&apos;arrivée
          </label>
          <input
            type="text"
            id="city"
            name="city"
            required
            className="w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-[var(--color-text)] focus:border-brand-turquoise/60 focus:outline-none focus:ring-2 focus:ring-brand-turquoise/20 transition-all"
            placeholder="Ex : Paris 11e → Lyon 3e"
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-semibold text-[var(--color-text)] mb-2">
            Date souhaitée (approx.)
          </label>
          <input
            type="text"
            id="date"
            name="date"
            required
            className="w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-[var(--color-text)] focus:border-brand-turquoise/60 focus:outline-none focus:ring-2 focus:ring-brand-turquoise/20 transition-all"
            placeholder="Ex : semaine du 15 juin"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="housing" className="block text-sm font-semibold text-[var(--color-text)] mb-2">
            Type de logement
          </label>
          <select
            id="housing"
            name="housing"
            required
            className="w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-[var(--color-text)] focus:border-brand-turquoise/60 focus:outline-none focus:ring-2 focus:ring-brand-turquoise/20 transition-all"
          >
            <option value="">Sélectionnez une option</option>
            <option value="studio">Studio / T1</option>
            <option value="t2">T2</option>
            <option value="t3">T3</option>
            <option value="t4">T4</option>
            <option value="maison">Maison</option>
            <option value="autre">Autre / volume particulier</option>
          </select>
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-[var(--color-text)] mb-2">
            Téléphone (optionnel)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-[var(--color-text)] focus:border-brand-turquoise/60 focus:outline-none focus:ring-2 focus:ring-brand-turquoise/20 transition-all"
            placeholder="Pour vous rappeler si besoin"
          />
        </div>
      </div>

      <div>
        <label htmlFor="details" className="block text-sm font-semibold text-[var(--color-text)] mb-2">
          Détails importants
        </label>
        <textarea
          id="details"
          name="details"
          rows={5}
          className="w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-[var(--color-text)] focus:border-brand-turquoise/60 focus:outline-none focus:ring-2 focus:ring-brand-turquoise/20 transition-all resize-none"
          placeholder="Etages, ascenseur, stationnement, volume approximatif..."
        />
      </div>

      <button
        type="submit"
        className="w-full group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-brand-turquoise via-[#4FB8B8] to-[#3DA5A5] px-8 py-4 text-lg font-semibold text-[#04141f] shadow-[0_8px_30px_rgba(107,207,207,0.35)] hover:shadow-[0_12px_50px_rgba(107,207,207,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
        <span className="relative">Envoyer ma demande de devis</span>
        <span className="relative text-xl leading-none group-hover:translate-x-1 transition-transform duration-300">
          →
        </span>
      </button>
    </form>
  );
}


