import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { getFullMetadata } from "@/lib/canonical-helper";
import { FAQ, type FAQItem } from "@/components/FAQ";

export const metadata: Metadata = getFullMetadata(
  "faq-arnaque-demenagement",
  "FAQ arnaques déménagement : questions-réponses factuelles",
  "10 questions-réponses factuelles pour éviter les arnaques au déménagement : devis, acomptes, assurance, suppléments, sous-traitance, documents, recours."
);

export default function FaqArnaqueDemenagementPage() {
  const faqs: FAQItem[] = [
    {
      question: "Quels sont les signaux d’alerte les plus fréquents ?",
      answer:
        "Identité légale floue (pas de SIREN/SIRET), devis trop vague, pression pour payer vite, acompte très élevé, refus de fournir assurance/Kbis, incohérences entre devis et RIB, estimation au téléphone sans base, et conditions d’annulation absentes.",
    },
    {
      question: "Un déménageur peut-il exiger un supplément le jour J ?",
      answer:
        "Un ajustement est possible si le devis le prévoit et si le périmètre réel diffère (volume, accès, attentes, prestations ajoutées). Le risque baisse fortement si l’estimation est faite via visite/visio et si le devis décrit clairement les conditions de révision.",
    },
    {
      question: "Quel acompte est raisonnable ?",
      answer:
        "Un acompte existe souvent, mais il doit rester proportionné et être écrit dans le devis (montant, date, conditions). Méfiez-vous d’une demande de 100% avant prestation ou d’un paiement non traçable.",
    },
    {
      question: "Quels documents demander avant de signer ?",
      answer:
        "Un devis écrit détaillé, un extrait Kbis récent (ou équivalent), une attestation d’assurance à jour (périmètre + franchise), et les coordonnées complètes de la société (raison sociale, SIREN/SIRET, adresse).",
    },
    {
      question: "Comment vérifier que l’entreprise existe vraiment ?",
      answer:
        "Vérifiez le SIREN/SIRET dans un annuaire officiel d’entreprises ou via l’extrait Kbis. Assurez-vous que la raison sociale et l’adresse correspondent à celles du devis et du RIB.",
    },
    {
      question: "Que doit contenir un devis de déménagement fiable ?",
      answer:
        "Les prestations incluses vs options, les dates, les accès (étage/ascenseur/portage/stationnement), la méthode d’estimation du volume, les assurances (franchise, plafonds), les conditions de paiement, et les conditions d’annulation.",
    },
    {
      question: "Sous-traitance : est-ce un problème ?",
      answer:
        "Pas forcément, mais cela doit être transparent. Demandez qui exécute la prestation (nom, documents, assurance) et qui porte la responsabilité contractuelle. Une sous-traitance cachée augmente le risque de litige.",
    },
    {
      question: "Quelle assurance couvre réellement mes biens ?",
      answer:
        "Le déménageur a une responsabilité, mais l’indemnisation dépend souvent de la déclaration de valeur, des plafonds et de la franchise. Lisez les conditions, demandez l’attestation d’assurance, et faites une déclaration de valeur réaliste.",
    },
    {
      question: "Puis-je accepter un devis “au téléphone” ?",
      answer:
        "C’est déconseillé : sans visite/visio, le volume et les accès sont souvent mal estimés. Exigez un devis écrit et une base d’estimation documentée avant de vous engager.",
    },
    {
      question: "Que faire en cas de problème (retard, casse, litige) ?",
      answer:
        "Conservez tous les échanges et le devis, notez les réserves par écrit (sur documents de livraison si applicable), documentez l'état, et contactez l’entreprise rapidement. En cas de désaccord, privilégiez une trace écrite et informez-vous sur les voies de recours (médiation, assurance, protection juridique).",
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      <PageHero
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "FAQ arnaques", href: "/faq-arnaque-demenagement/" },
        ]}
        eyebrow="FAQ factuelle"
        title="FAQ arnaques déménagement"
        subtitle="10 questions-réponses factuelles pour reconnaître les signaux d’alerte, demander les bons documents, et réduire le risque de mauvaises surprises."
        primaryCta={{ label: "Aller aux questions", href: "#faq" }}
        secondaryCta={{ label: "Lire le guide long", href: "/blog/eviter-arnaques-demenagement/" }}
      />

      <div id="faq" className="scroll-mt-28">
        <FAQ title="Questions fréquentes (anti-arnaques)" faqs={faqs} limit={10} id="faq" />
      </div>

      {/* CTA discret */}
      <section className="section section-light pt-0">
        <div className="container max-w-4xl">
          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-[var(--color-text)]">Astuce simple (et pas magique)</p>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Une estimation basée sur visite/visio réduit les écarts de volume et les ambiguïtés du devis.
              </p>
            </div>
            <a
              href="/comment-ca-marche/"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-bg-dark)] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[var(--color-bg-dark)] transition-colors"
            >
              Voir une méthode d’estimation plus solide →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

