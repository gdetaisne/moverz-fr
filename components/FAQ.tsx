"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQSchema } from "@/components/schema/FAQSchema";

export type FAQItem = { question: string; answer: string };

type FAQProps = {
  title: string;
  faqs: FAQItem[];
  id?: string;
  /** Max items rendered + included in JSON-LD */
  limit?: number;
};

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`group relative overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
        isOpen
          ? "border-[#6BCFCF]/50 bg-white shadow-lg shadow-[#6BCFCF]/5"
          : "border-gray-200 bg-white/60 hover:bg-white hover:border-gray-300 hover:shadow-md"
      }`}
    >
      {/* Gradient accent on hover/open */}
      <div className={`absolute inset-0 bg-gradient-to-r from-[#6BCFCF]/5 to-transparent opacity-0 transition-opacity duration-300 ${isOpen ? "opacity-100" : "group-hover:opacity-50"}`} />
      
      <button
        onClick={onToggle}
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
              ? "bg-[#6BCFCF]/15 text-[#2B7A78]"
              : "bg-gray-100 text-gray-500 group-hover:bg-[#6BCFCF]/10 group-hover:text-[#2B7A78]"
          }`}>
            <ChevronDown className="w-5 h-5" />
          </div>
        </motion.div>
      </button>

      {/* Keep answer in DOM for SEO + test parity; animate visibility instead of conditional rendering */}
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
          {/* Separator line */}
          <div className="h-px bg-gradient-to-r from-[#6BCFCF]/20 via-[#6BCFCF]/40 to-transparent mb-4" />
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
}

export function FAQ({ title, faqs, id = "faq", limit = 8 }: FAQProps) {
  const limited = faqs.slice(0, limit);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id={id} className="section section-light">
      <FAQSchema faqs={limited} />
      <div className="container max-w-3xl">
        <div className="text-center mb-12 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6BCFCF]/10 to-[#2B7A78]/10 border border-[#6BCFCF]/20 px-4 py-2 text-sm font-semibold text-[#2B7A78]"
          >
            <span className="h-2 w-2 rounded-full bg-[#6BCFCF] animate-pulse" />
            Questions fréquentes
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-[#0F172A]"
          >
            {title}
          </motion.h2>
        </div>

        <div className="space-y-3">
          {limited.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


