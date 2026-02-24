"use client";

/**
 * V4 — FAQ section
 * Accordion propre, design system V4, données existantes (homeFaqs)
 * MODE DARK avec accents teal
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { HOME_FAQS } from "@/components/home/homeFaqs";
import { FadeUpSection } from "@/components/motion";

export function FAQV4() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <FadeUpSection 
      className="py-12 md:py-28 relative overflow-hidden" 
      style={{ background: "var(--color-bg-dark)" }}
    >
      {/* Glow effect teal subtil */}
      <div 
        className="absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[600px] rounded-full blur-[100px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(14,165,166,0.4), transparent 70%)" }}
      />
      
      <div className="container max-w-5xl relative z-10">
        {/* Titre */}
        <h2
          className="font-heading text-[clamp(28px,5vw,48px)] font-bold tracking-[-0.02em] mb-12 text-left"
          style={{ color: "#FFFFFF" }}
        >
          On répond à vos questions
        </h2>

        {/* Accordéons */}
        <div className="max-w-3xl space-y-3">
          {HOME_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-[var(--radius-md)] border overflow-hidden transition-all duration-300"
                style={{
                  borderColor: isOpen ? "var(--color-accent)" : "rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.05)",
                  boxShadow: isOpen ? "0 0 20px rgba(14,165,166,0.2), 0 4px 16px rgba(0,0,0,0.3)" : "0 2px 8px rgba(0,0,0,0.2)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-dark)]"
                  style={{
                    // @ts-ignore
                    "--tw-ring-color": "var(--color-accent)",
                  }}
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-[15px] font-medium pr-4"
                    style={{ color: isOpen ? "#FFFFFF" : "rgba(255,255,255,0.9)" }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className="h-4 w-4 shrink-0 transition-transform duration-200"
                    style={{
                      color: isOpen ? "var(--color-accent)" : "rgba(255,255,255,0.5)",
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
                      <div className="px-5 pb-4 pt-1">
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "rgba(255,255,255,0.7)" }}
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
