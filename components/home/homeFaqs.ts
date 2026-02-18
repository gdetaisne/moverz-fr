export type HomeFaqItem = {
  question: string;
  answer: string;
};

// Single source of truth:
// - Used by the visible FAQ component (home)
// - Used by JSON-LD FAQPage to guarantee parity with what's rendered
export const HOME_FAQS: HomeFaqItem[] = [
  {
    question: "C'est vraiment gratuit ?",
    answer:
      "Oui, 100% gratuit pour vous. Les déménageurs participent aussi gratuitement à la mise en concurrence. Aucun frais caché, aucun engagement.",
  },
  {
    question: "Je vais recevoir des appels de spam ?",
    answer:
      "Non. Votre dossier reste anonyme. Les déménageurs vous envoient leurs devis par email via notre plateforme. Vous choisissez qui contacter.",
  },
  {
    question: "L'IA est vraiment précise ?",
    answer:
      "Oui. L’IA aide à estimer et à standardiser votre dossier pour comparer des devis cohérents. Si besoin, les déménageurs peuvent affiner lors d’une visite technique.",
  },
  {
    question: "Comment les déménageurs sont-ils vérifiés ?",
    answer:
      "Chaque déménageur est évalué selon 3 analyses de risque notées /100 : expérience client (analyse des avis Google), risque financier (Creditsafe + Pappers + ratio cash/dettes), et risque juridique (décisions de justice via Pappers). Les déménageurs avec alertes financières ou juridiques sont exclus automatiquement.",
  },
  {
    question: "Et si je n'aime aucun devis ?",
    answer:
      "Aucun problème, vous n'êtes pas obligé d'en choisir un. Le service est sans engagement. Vous pouvez aussi nous contacter pour voir d'autres options.",
  },
];

