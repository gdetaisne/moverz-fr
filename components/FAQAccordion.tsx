"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

function FAQAccordionItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`group relative overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
        isOpen
          ? "border-brand-turquoise/50 bg-white shadow-xl shadow-[rgba(107,207,207,0.05)]"
          : "border-gray-200 bg-white/80 hover:bg-white hover:border-brand-turquoise/30 hover:shadow-lg"
      }`}
    >
      {/* Gradient accent */}
      <div className={`absolute inset-0 bg-gradient-to-br from-brand-turquoise/5 via-transparent to-[#2B7A78]/5 opacity-0 transition-opacity duration-300 ${isOpen ? "opacity-100" : "group-hover:opacity-100"}`} />
      
      {/* Glow effect on open */}
      {isOpen && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-turquoise/10 rounded-full blur-3xl" />
      )}

      <button
        onClick={onToggle}
        className="relative w-full flex items-start justify-between gap-4 p-5 md:p-6 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-3 flex-1">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
              isOpen
                ? "bg-brand-turquoise text-white shadow-lg shadow-[rgba(107,207,207,0.3)]"
                : "bg-brand-turquoise/10 text-[#2B7A78] group-hover:bg-brand-turquoise/20"
            }`}
          >
            <HelpCircle className="w-4 h-4" />
          </motion.div>
          <h3 className="text-base md:text-lg font-bold text-[#0F172A] leading-tight">
            {item.q}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-shrink-0 mt-0.5"
        >
          <div className={`flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all duration-300 ${
            isOpen
              ? "border-brand-turquoise bg-brand-turquoise/10 text-[#2B7A78]"
              : "border-gray-200 bg-gray-50 text-gray-500 group-hover:border-brand-turquoise/30 group-hover:bg-brand-turquoise/5"
          }`}>
            <ChevronDown className="w-4 h-4" />
          </div>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="relative px-5 md:px-6 pb-5 md:pb-6">
              <div className="pl-11 pr-4">
                {/* Premium separator */}
                <div className="h-px bg-gradient-to-r from-brand-turquoise/40 via-brand-turquoise/60 to-transparent mb-4" />
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="text-sm md:text-base text-gray-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.a }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <FAQAccordionItem
          key={item.q}
          item={item}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}

