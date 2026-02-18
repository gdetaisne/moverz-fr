"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Combien de devis vais-je recevoir ?",
    answer:
      "Vous recevrez entre 3 et 5 devis de déménageurs vérifiés, selon la disponibilité dans votre zone et vos dates. Tous les devis sont comparables (mêmes lignes de prix, mêmes unités).",
  },
  {
    question: "Combien de temps pour recevoir les devis ?",
    answer:
      "Sous 5 à 7 jours ouvrés en moyenne. Vous recevrez une notification par email dès qu'un nouveau devis est disponible.",
  },
  {
    question: "Mon numéro sera-t-il vraiment masqué ?",
    answer:
      "Oui. Votre numéro de téléphone reste masqué jusqu'à ce que vous choisissiez un déménageur. Vous ne serez jamais démarché par appel ou SMS. Les échanges se font uniquement via votre espace client sécurisé.",
  },
  {
    question: "Comment vérifiez-vous les déménageurs ?",
    answer:
      "Chaque partenaire est évalué selon 3 analyses de risque /100 : risque financier (Creditsafe + Pappers + ratio cash/dettes), risque juridique (Pappers Décisions — litiges passés et en cours), risque expérience client (20 derniers avis Google, patterns dans les mauvais avis). Nous vérifions aussi assurance RC Pro, licence de transport et conformité légale. Les déménageurs avec alertes financières ou juridiques sont exclus. Mises à jour tous les 3 mois.",
  },
  {
    question: "Le service est-il vraiment gratuit ?",
    answer:
      "Oui, 100% gratuit pour vous. Aucun frais caché. Les déménageurs participent aussi gratuitement à la mise en concurrence.",
  },
];

function FAQItem({ item, isOpen, onClick }: { item: FAQItem; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-[rgb(var(--border))]">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-[rgb(var(--accent-2))]"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-[rgb(var(--text))]">{item.question}</span>
        <ChevronDown
          className={clsx(
            "h-5 w-5 shrink-0 text-[rgb(var(--muted))] transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[rgb(var(--text-2))] leading-relaxed">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[rgb(var(--border))]">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          item={faq}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
