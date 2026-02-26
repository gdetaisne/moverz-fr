"use client";

import { FAQ, type FAQItem } from "@/components/FAQ";

export default function HowItWorksFAQ() {
  const faqs: FAQItem[] = [
    {
      question: "Combien ça coûte ?",
      answer:
        "Le service Moverz est gratuit pour vous. Vous ne payez que le déménageur que vous choisissez, aux conditions indiquées dans son devis. Pour comprendre les prix moyens, consultez notre guide complet des <a href='/blog/prix-demenagement-2026/' class='text-v4-accent hover:underline'>prix déménagement 2026</a>.",
    },
    {
      question: "Comment choisissez-vous les déménageurs que vous me présentez ?",
      answer:
        "Nous ne transmettons votre dossier qu'à des déménageurs sélectionnés selon 3 critères : (1) <strong>Disponibles à vos dates exactes</strong>, (2) <strong>Vérifiés financièrement et juridiquement</strong> (pas d'alertes), (3) <strong>Expérience sur votre trajet</strong> (Paris-Lyon, T3, etc.). Vous ne perdez pas de temps avec des offres non pertinentes ou des sociétés en difficulté. Voir nos <a href='/verifications-partenaires/' class='text-v4-accent hover:underline'>critères de vérification</a>.",
    },
    {
      question: "Comment êtes-vous rémunérés ?",
      answer:
        "Les déménageurs participent gratuitement à la mise en concurrence. Pour vous, le service est 100% gratuit. Nous sommes rémunérés par un montant fixe par dossier, uniquement en cas de déménagement réalisé.",
    },
    {
      question: "Vais-je recevoir des appels de spam ?",
      answer:
        "Non. L'objectif est d'éviter le démarchage agressif : vous recevez des devis écrits et comparables, puis vous décidez si/qui vous souhaitez contacter.",
    },
    {
      question: "Comment savoir si un déménageur est fiable ?",
      answer:
        "Nous vérifions systématiquement la santé financière de chaque déménageur via Creditsafe avant de les présenter. Découvrez <a href='/blog/comprendre-score-creditsafe-demenageur/' class='text-v4-accent hover:underline'>comment lire un score Creditsafe</a> et nos <a href='/verifications-partenaires/' class='text-v4-accent hover:underline'>critères de vérification</a>.",
    },
    {
      question: "Comment comparer efficacement plusieurs devis ?",
      answer:
        "Notre dossier standardisé garantit que tous les déménageurs ont les mêmes informations (volume, accès, options). Consultez notre <a href='/blog/comparer-devis-demenagement-guide/' class='text-v4-accent hover:underline'>guide complet pour comparer des devis</a> et éviter les pièges.",
    },
    {
      question: "Comment estimer le volume de mon déménagement ?",
      answer:
        "Notre outil estime automatiquement le volume selon votre type de logement et le nombre de pièces. Pour un inventaire détaillé, consultez notre <a href='/blog/estimer-volume-demenagement-guide-complet/' class='text-v4-accent hover:underline'>guide complet d'estimation de volume</a>.",
    },
    {
      question: "Et si je ne reçois pas 5 devis ?",
      answer:
        "Notre engagement est de vous présenter 5 devis comparables sous 5 à 7 jours. Si les retours sont insuffisants, nous vous recontactons pour proposer des alternatives (élargir le réseau, ajuster dates/contraintes, etc.).",
    },
    {
      question: "Puis-je annuler ?",
      answer:
        "Oui, tant que vous n'avez pas signé de devis avec un déménageur. Après signature, les conditions d'annulation dépendent du déménageur et figurent sur le devis/contrat.",
    },
    {
      question: "Mes données sont-elles protégées ?",
      answer:
        "Oui. Nous appliquons le RGPD et ne transmettons votre dossier qu'aux déménageurs sollicités pour établir un devis, dans le cadre de votre demande.",
    },
    {
      question: "Quels sont les meilleurs comparateurs de déménagement en 2026 ?",
      answer:
        "Un bon comparateur doit vérifier ses partenaires, standardiser les devis et protéger vos données. Découvrez notre <a href='/blog/meilleur-comparateur-demenagement-2026/' class='text-v4-accent hover:underline'>analyse des comparateurs de déménagement en 2026</a> et nos critères de différenciation.",
    },
  ];

  return (
    <div className="bg-white">
      <FAQ title="Questions fréquentes" faqs={faqs} id="faq-comment-ca-marche" />

      <div className="pb-16 -mt-8">
        <div className="container max-w-3xl text-center">
          <a
            href="/politique-confidentialite/"
            className="text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-text)] transition-colors"
          >
            Voir notre politique de confidentialité →
          </a>
        </div>
      </div>
    </div>
  );
}

