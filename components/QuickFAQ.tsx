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
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white">
      <div className="container max-w-3xl">
        {/* Header minimal */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF] animate-pulse" />
            Questions fréquentes
          </div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Une dernière question ?
          </h2>
        </div>

        {/* FAQ items - Clean accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:bg-white/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span className="font-semibold text-base md:text-lg pr-4">
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 text-xl transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                >
                  ↓
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-sm md:text-base text-white/70 leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Link to full FAQ */}
        <div className="text-center mt-10">
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
