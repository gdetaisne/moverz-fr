"use client";
import { useState } from "react";
import Chip from "@/components/ui/Chip";
import Button from "@/components/ui/Button";
import { HOME_FAQS } from "@/components/home/homeFaqs";

export default function QuickFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = HOME_FAQS;

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#0F172A] via-[#1a2332] to-[#0F172A] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-turquoise/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-[120px]" />
      
      <div className="relative container max-w-3xl">
        {/* Header premium */}
        <div className="text-center mb-16 space-y-6">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl px-5 py-2.5 text-sm font-semibold text-white shadow-lg">
              <span className="relative inline-flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-turquoise opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-turquoise shadow-[0_0_12px_rgba(107,207,207,0.8)]" />
              </span>
              Questions fréquentes
            </div>
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">
            Une dernière question ?
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur Moverz
          </p>
        </div>

        {/* FAQ items - Premium glassmorphism */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-brand-turquoise/30 hover:shadow-[0_0_30px_rgba(107,207,207,0.15)]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 md:p-7 text-left"
              >
                <span className="font-semibold text-base md:text-lg pr-4 text-white group-hover:text-brand-turquoise transition-colors duration-300">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-white group-hover:bg-brand-turquoise/20 group-hover:border-brand-turquoise/50 transition-all duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 md:px-7 pb-6 md:pb-7 text-sm md:text-base text-white/80 leading-relaxed border-t border-white/5">
                  <div className="pt-4">{faq.answer}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Links premium */}
        <div className="text-center mt-12 space-y-4">
          <a
            href="/faq/"
            className="group inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 backdrop-blur-xl px-6 py-3 text-sm font-semibold text-white hover:bg-white/15 hover:border-brand-turquoise/40 hover:shadow-lg transition-all duration-300"
          >
            <span>Voir toutes les questions</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <div>
            <a
              href="/blog/eviter-arnaques-demenagement/"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-brand-turquoise transition-colors group"
            >
              <span className="w-1 h-1 rounded-full bg-brand-turquoise" />
              <span>Guide : Comment éviter les arnaques au déménagement</span>
              <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
