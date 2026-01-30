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
      "Oui, 100% gratuit pour vous. Nous sommes rémunérés par les déménageurs seulement si vous en choisissez un. Aucun frais caché, aucun engagement.",
  },
  {
    question: "Je vais recevoir des appels de spam ?",
    answer:
      "Non. Votre dossier reste anonyme. Les déménageurs vous envoient leurs devis par email via notre plateforme. Vous choisissez qui contacter.",
  },
  {
    question: "L'IA est vraiment précise ?",
    answer:
      "Oui. L'IA analyse vos photos et estime le volume avec une grande précision. Si besoin, les déménageurs peuvent affiner lors de la visite technique.",
  },
  {
    question: "Et si je n'aime aucun devis ?",
    answer:
      "Aucun problème, vous n'êtes pas obligé d'en choisir un. Le service est sans engagement. Vous pouvez aussi nous contacter pour voir d'autres options.",
  },
];

