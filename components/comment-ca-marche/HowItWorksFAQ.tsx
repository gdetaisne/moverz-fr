"use client";

import { FAQ, type FAQItem } from "@/components/FAQ";

export default function HowItWorksFAQ() {
  const faqs: FAQItem[] = [
    {
      question: "Combien ça coûte ?",
      answer:
        "Le service Moverz est gratuit pour vous. Vous ne payez que le déménageur que vous choisissez, aux conditions indiquées dans son devis.",
    },
    {
      question: "Comment êtes-vous rémunérés ?",
      answer:
        "Nous sommes rémunérés par les déménageurs partenaires uniquement si vous signez avec l’un d’eux. Pour vous, le service reste sans frais.",
    },
    {
      question: "Vais-je recevoir des appels de spam ?",
      answer:
        "Non. L’objectif est d’éviter le démarchage agressif : vous recevez des devis écrits et comparables, puis vous décidez si/qui vous souhaitez contacter.",
    },
    {
      question: "Et si je ne reçois pas 3 devis ?",
      answer:
        "Notre objectif est de vous obtenir au moins 3 devis rapidement (sous 5 jours, selon disponibilité locale). Si les retours sont insuffisants, nous vous recontactons pour proposer des alternatives (élargir le réseau, ajuster dates/contraintes, etc.).",
    },
    {
      question: "Puis-je annuler ?",
      answer:
        "Oui, tant que vous n’avez pas signé de devis avec un déménageur. Après signature, les conditions d’annulation dépendent du déménageur et figurent sur le devis/contrat.",
    },
    {
      question: "Mes données sont-elles protégées ?",
      answer:
        "Oui. Nous appliquons le RGPD et ne transmettons votre dossier qu’aux déménageurs sollicités pour établir un devis, dans le cadre de votre demande.",
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

