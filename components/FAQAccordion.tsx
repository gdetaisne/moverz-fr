"use client";
import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

function FAQAccordionItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="group rounded-3xl border border-[#E3E5E8] bg-gradient-to-b from-white to-[#F8F9FA] shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#6BCFCF]/40 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 p-5 md:p-6 text-left transition-all duration-300"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-3 flex-1">
          <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#E6FFFA] text-sm font-bold text-[#0f766e] transition-all duration-300 group-hover:bg-[#6BCFCF] group-hover:text-white group-hover:scale-110">
            ?
          </span>
          <h3 className="text-base md:text-lg font-bold text-[#04163a] leading-tight">
            {item.q}
          </h3>
        </div>
        <div
          className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#E3E5E8] text-[#04163a] transition-all duration-300 ${
            isOpen ? "rotate-180 border-[#6BCFCF] bg-[#6BCFCF]/10" : "group-hover:border-[#6BCFCF]/40"
          }`}
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          overflow: "hidden",
        }}
      >
        <div className="px-5 md:px-6 pb-5 md:pb-6">
          <div className="pl-10 pr-4">
            <div className="h-px bg-gradient-to-r from-[#6BCFCF]/30 to-transparent mb-4" />
            <p className="text-sm md:text-base text-[#4b5c6b] leading-relaxed">
              {item.a}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
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

