"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PRO_FAQS } from "./proFaqData";

export default function ProFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = PRO_FAQS;

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-[#6B7280]">
            Tout ce que vous devez savoir sur Moverz Pro
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border-2 border-gray-200 bg-white overflow-hidden hover:border-brand-turquoise/50 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-[#0F172A] text-lg pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-brand-turquoise flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-[#6B7280] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions? */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-[#6B7280] mb-4">
            Vous avez d'autres questions ?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-brand-turquoise font-semibold hover:text-[#5AB0B0] transition-colors"
          >
            <span>Contactez notre équipe</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

