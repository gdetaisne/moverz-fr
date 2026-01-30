"use client";
import { useState } from "react";
import Chip from "@/components/ui/Chip";
import Button from "@/components/ui/Button";
import { HOME_FAQS } from "@/components/home/homeFaqs";

export default function QuickFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = HOME_FAQS;

  return (
    <section className="section section-contrast">
      <div className="container max-w-3xl">
        {/* Header minimal */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex justify-center">
            <Chip tone="dark" className="px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-teal)]" />
              Questions fréquentes
            </Chip>
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
              className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-all duration-300 hover:bg-white/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span className="font-semibold text-base md:text-lg pr-4">
                  {faq.question}
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
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="text-center mt-10 space-y-3">
          <Button href="/faq/" variant="ghost" size="sm" className="px-4 py-2.5">
            <span>Voir toutes les questions</span>
            <span>→</span>
          </Button>
          <div>
            <a
              href="/blog/eviter-arnaques-demenagement/"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Guide : Comment éviter les arnaques au déménagement
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
