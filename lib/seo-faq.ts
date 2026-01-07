import { getLocalInsights } from "@/lib/local-insights";

export type FAQItem = { question: string; answer: string };

export function buildCityFaqs(args: {
  citySlug: string;
  cityName: string;
  extra?: FAQItem[];
}): FAQItem[] {
  const { citySlug, cityName, extra } = args;
  const insights = getLocalInsights(citySlug, cityName);

  const base: FAQItem[] = [
    {
      question: `Combien de temps à l'avance pour déménager à ${cityName} ?`,
      answer:
        "Idéalement 4–8 semaines avant, surtout en haute saison (juin–septembre). Si vous êtes flexible sur 2–3 dates, vous augmentez vos chances d’obtenir un bon prix.",
    },
    {
      question: "Les déménageurs font une visite technique ?",
      answer:
        "Pas nécessaire : quelques photos suffisent. L’IA aide à fiabiliser le volume pour des devis comparables, sans pression commerciale.",
    },
    {
      question: "Moverz est vraiment gratuit ?",
      answer:
        "Oui, c’est gratuit pour vous. Moverz est rémunéré par les déménageurs partenaires (commission) — vous ne payez que le déménageur choisi.",
    },
    {
      question: "Puis-je choisir ma date et mon créneau ?",
      answer:
        "Oui. Indiquez vos préférences et recevez des propositions. Les jours de semaine sont souvent plus abordables que le week-end.",
    },
  ];

  const local: FAQItem[] = [
    {
      question: `Quelles infos donnent un devis fiable à ${cityName} ?`,
      answer:
        "Un volume réaliste + les accès (étages, ascenseur, distance camion→porte) + la date (ou une fenêtre de dates). Sans ces infos, un devis “pas cher” peut se transformer en suppléments le jour J.",
    },
    {
      question: `Quelles périodes éviter si je veux payer moins à ${cityName} ?`,
      answer: `En général, évitez : ${insights.avoidPeriods.join(" · ")}.`,
    },
    {
      question: "Quelles photos sont les plus utiles ?",
      answer:
        "2–3 photos suffisent. Priorité : accès (entrée, escalier/ascenseur) et possibilité de stationner. Cela réduit le risque de sous-estimation et de suppléments.",
    },
  ];

  const combined = [...base, ...local, ...(extra || [])];

  // Deduplicate by question (keep first)
  const seen = new Set<string>();
  const unique: FAQItem[] = [];
  for (const item of combined) {
    const key = item.question.trim().toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    unique.push(item);
  }

  return unique.slice(0, 10);
}

export function buildCityServiceFaqs(args: {
  citySlug: string;
  cityName: string;
  serviceLabel: string;
  extra?: FAQItem[];
}): FAQItem[] {
  const { citySlug, cityName, serviceLabel, extra } = args;
  const local = buildCityFaqs({ citySlug, cityName }).slice(0, 6);
  const service: FAQItem[] = [
    {
      question: `Pourquoi une page “${serviceLabel}” dédiée à ${cityName} ?`,
      answer:
        "Parce que l’intention n’est pas la même : certains cherchent un petit volume, d’autres du stockage, ou un transport spécialisé. Une page dédiée permet d’être plus clair et d’obtenir un devis plus juste.",
    },
  ];
  return [...service, ...local, ...(extra || [])].slice(0, 10);
}


