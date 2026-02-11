"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export type FAQItem = { question: string; answer: string };

type PartenairesFAQProps = {
  faqs: FAQItem[];
};

export default function PartenairesFAQ({ faqs }: PartenairesFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#F9FAFB] to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-turquoise/10 px-4 py-2 text-sm font-medium text-[#0F172A] mb-6">
            <span className="h-2 w-2 rounded-full bg-brand-turquoise" />
            FAQ
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A]">
            Questions fréquentes
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`group relative overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
                  isOpen
                    ? "border-brand-turquoise/50 bg-white shadow-lg shadow-[rgba(107,207,207,0.05)]"
                    : "border-gray-200 bg-white/60 hover:bg-white hover:border-gray-300 hover:shadow-md"
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-brand-turquoise/5 to-transparent opacity-0 transition-opacity duration-300 ${isOpen ? "opacity-100" : "group-hover:opacity-50"}`} />
                
                <button
                  onClick={() => handleToggle(index)}
                  className="relative w-full flex items-start justify-between gap-4 p-5 md:p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-base md:text-lg font-bold text-[#0F172A] leading-tight pr-2">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0 mt-0.5"
                  >
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-brand-turquoise/15 text-[#2B7A78]"
                        : "bg-gray-100 text-gray-500 group-hover:bg-brand-turquoise/10 group-hover:text-[#2B7A78]"
                    }`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                  aria-hidden={!isOpen}
                >
                  <div className="relative px-5 md:px-6 pb-5 md:pb-6">
                    <div className="h-px bg-gradient-to-r from-brand-turquoise/20 via-brand-turquoise/40 to-transparent mb-4" />
                    <motion.p
                      initial={false}
                      animate={{ y: isOpen ? 0 : -10, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-sm md:text-base text-gray-600 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
