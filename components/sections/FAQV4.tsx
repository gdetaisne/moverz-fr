"use client";

/**
 * V4 — FAQ section
 * Accordion propre, design system V4, données existantes (homeFaqs)
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { HOME_FAQS } from "@/components/home/homeFaqs";
import { FadeUpSection } from "@/components/motion";

export function FAQV4() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <FadeUpSection className="py-12 md:py-28" style={{ background: "var(--color-bg)" }}>
      <div className="container max-w-2xl">
        <h2
          className="font-heading text-[clamp(28px,5vw,48px)] font-bold tracking-[-0.02em] mb-6 md:mb-10 text-center"
          style={{ color: "var(--color-text)" }}
        >
          On répond à vos questions
        </h2>

        <div className="space-y-2">
          {HOME_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-[var(--radius-md)] border overflow-hidden transition-all duration-300 hover:shadow-sm"
                style={{
                  borderColor: isOpen ? "var(--color-accent)" : "var(--color-border)",
                  background: "var(--color-surface)",
                  boxShadow: isOpen ? "0 2px 8px rgba(14,165,166,0.08)" : "none",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{
                    // @ts-ignore
                    "--tw-ring-color": "var(--color-accent)",
                  }}
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-[15px] font-medium pr-4"
                    style={{ color: "var(--color-text)" }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className="h-4 w-4 shrink-0 transition-transform duration-200"
                    style={{
                      color: "var(--color-text-muted)",
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
                      <div className="px-5 pb-4">
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
