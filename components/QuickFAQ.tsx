"use client";
import { useState } from "react";

export default function QuickFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "C'est vraiment gratuit ?",
      a: "Oui, 100% gratuit pour vous. Nous sommes rémunérés par les déménageurs seulement si vous en choisissez un. Aucun frais caché, aucun engagement.",
    },
    {
      q: "Je vais recevoir des appels de spam ?",
      a: "Non. Votre dossier reste anonyme. Les déménageurs vous envoient leurs devis par email via notre plateforme. Vous choisissez qui contacter.",
    },
    {
      q: "L'IA est vraiment précise ?",
      a: "Oui. L'IA analyse vos photos et estime le volume avec une grande précision. Si besoin, les déménageurs peuvent affiner lors de la visite technique.",
    },
    {
      q: "Et si je n'aime aucun devis ?",
      a: "Aucun problème, vous n'êtes pas obligé d'en choisir un. Le service est sans engagement. Vous pouvez aussi nous contacter pour voir d'autres options.",
    },
  ];

  return (
    <section className="section section-contrast">
      <div className="container max-w-3xl">
        <div className="text-center mb-12 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
            Questions rapides
          </div>
          <h2 className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl md:text-6xl text-white">
            Dernières questions<br />avant de commencer ?
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:bg-white/10 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-white text-sm md:text-base pr-4">
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 text-xl text-white transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                >
                  ↓
                </span>
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 text-sm md:text-base text-white/70 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="/faq/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#6BCFCF] hover:text-white transition-colors"
          >
            <span>Voir toutes les questions</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

