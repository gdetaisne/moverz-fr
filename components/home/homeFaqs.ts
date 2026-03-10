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
    question: "En combien de temps vais-je recevoir mes devis ?",
    answer:
      "Sous 3 à 5 jours ouvrés. Une fois votre dossier soumis, nous contactons les déménageurs disponibles à vos dates. Vous recevez 3 devis comparables directement dans votre espace Moverz. Pas de relance de votre part nécessaire.",
  },
  {
    question: "Je vais recevoir des appels de spam ?",
    answer:
      "Non, zéro harcèlement garanti. Votre dossier reste 100% anonyme. Nous centralisons tous les échanges avec les déménageurs. Votre numéro n'est jamais partagé. Vous choisissez qui peut vous contacter, pas l'inverse.",
  },
  {
    question: "Quelle est la différence avec les autres comparateurs de déménagement ?",
    answer:
      "Les comparateurs classiques (type i-Déménager, DéménagerFacile) revendent vos coordonnées à 10 à 15 déménageurs simultanément — sans vérification. Vous subissez ensuite des appels non stop. Moverz fonctionne à l'inverse : votre dossier est anonyme, les déménageurs sont vérifiés avant d'entrer sur la plateforme, et vous recevez des devis vraiment comparables car standardisés. Zéro démarchage, zéro arnaque.",
  },
  {
    question: "Comment les déménageurs sont-ils vérifiés ?",
    answer:
      "Chaque déménageur reçoit un Score Moverz /100 calculé automatiquement à partir de 3 dimensions : fiabilité légale 25% (santé financière + casier juridique Pappers), satisfaction clients 40% (tous les avis 12 mois analysés par IA), alertes 35% (6 catégories de problèmes détectées). Score < 50/100 = exclusion automatique. Monitoring continu tous les 7 jours.",
  },
  {
    question: "Et si je n'aime aucun devis ?",
    answer:
      "Aucun problème, vous n'êtes pas obligé d'en choisir un. Le service est sans engagement. Vous pouvez aussi nous contacter pour explorer d'autres options.",
  },
];
