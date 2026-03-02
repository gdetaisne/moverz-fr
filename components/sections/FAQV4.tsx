"use client";

/**
 * V4 — FAQ section
 * Accordion propre, design system V4, données existantes (homeFaqs)
 * MODE DARK avec accents teal
 * + FAQPage JSON-LD Schema pour Google Rich Snippets
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { HOME_FAQS } from "@/components/home/homeFaqs";
import { FadeUpSection } from "@/components/motion";
import { JsonLd } from "@/components/schema/JsonLd";

export function FAQV4() {
  // FAQPage Schema pour Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <FadeUpSection 
      className="py-12 md:py-28 relative overflow-hidden" 
      style={{ background: "var(--color-surface)" }}
    >
      {/* FAQPage Schema pour Google Rich Snippets */}
      <JsonLd id="faq-schema-home" data={faqSchema} />
      
      <div className="container max-w-5xl relative z-10">
        {/* Titre */}
        <h2
          className="font-heading text-[clamp(28px,5vw,48px)] font-bold tracking-[-0.02em] mb-12 text-left"
          style={{ color: "var(--color-text)" }}
        >
          Zéro doute,{" "}
          <span style={{ color: "#0EA5A6" }}>zéro stress</span>
        </h2>

        {/* Accordéons */}
        <div className="max-w-3xl mx-auto space-y-2">
          {HOME_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border overflow-hidden transition-all duration-200"
                style={{
                  borderColor: isOpen ? "rgba(14,165,166,0.3)" : "rgba(0,0,0,0.08)",
                  background: isOpen ? "white" : "white",
                  boxShadow: isOpen ? "0 4px 20px rgba(14,165,166,0.08), 0 1px 3px rgba(0,0,0,0.06)" : "0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-[15px] font-medium pr-4"
                    style={{ color: isOpen ? "#0EA5A6" : "var(--color-text)" }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className="h-4 w-4 shrink-0 transition-transform duration-200"
                    style={{
                      color: isOpen ? "#0EA5A6" : "var(--color-text-secondary)",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-4 pt-0">
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "var(--color-text-secondary)" }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </FadeUpSection>
  );
}
