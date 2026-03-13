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
      question: "Quels sont les signaux d'alerte les plus frequents ?",
      answer:
        "Identite legale floue (pas de SIREN/SIRET), devis trop vague, pression pour payer vite, acompte tres eleve, refus de fournir assurance/Kbis, incoherences entre devis et RIB, estimation au telephone sans base, et conditions d'annulation absentes.",
    },
    {
      question: "Un demenageur peut-il exiger un supplement le jour J ?",
      answer:
        "Un ajustement est possible si le devis le prevoit et si le perimetre reel differe (volume, acces, attentes, prestations ajoutees). Le risque baisse fortement si l'estimation est faite via visite/visio et si le devis decrit clairement les conditions de revision.",
    },
    {
      question: "Quel acompte est raisonnable ?",
      answer:
        "Un acompte existe souvent, mais il doit rester proportionne et etre ecrit dans le devis (montant, date, conditions). Mefiez-vous d'une demande de 100% avant prestation ou d'un paiement non tracable.",
    },
    {
      question: "Quels documents demander avant de signer ?",
      answer:
        "Un devis ecrit detaille, un extrait Kbis recent (ou equivalent), une attestation d'assurance a jour (perimetre + franchise), et les coordonnees completes de la societe (raison sociale, SIREN/SIRET, adresse).",
    },
    {
      question: "Comment verifier qu'un demenageur est fiable ?",
      answer:
        "Verifiez le SIREN/SIRET (annuaire officiel ou Kbis). Pour aller plus loin, Moverz evalue chaque demenageur selon un score /100 automatique (sante financiere Pappers, casier judiciaire BODACC, avis clients analyses). Gratuit et instantane : consultez le <a href='/label-moverz/' class='underline' style='color: var(--color-accent)'>Label Moverz - verifier un demenageur</a>. Les demenageurs avec alertes financieres ou juridiques sont exclus automatiquement.",
    },
    {
      question: "Que doit contenir un devis de demenagement fiable ?",
      answer:
        "Les prestations incluses vs options, les dates, les acces (etage/ascenseur/portage/stationnement), la methode d'estimation du volume, les assurances (franchise, plafonds), les conditions de paiement, et les conditions d'annulation.",
    },
    {
      question: "Sous-traitance : est-ce un probleme ?",
      answer:
        "Pas necessairement, mais cela doit etre transparent. Demandez qui execute la prestation (nom, documents, assurance) et qui porte la responsabilite contractuelle. Une sous-traitance cachee augmente le risque de litige.",
    },
    {
      question: "Quelle assurance couvre reellement mes biens ?",
      answer:
        "Le demenageur a une responsabilite, mais l'indemnisation depend souvent de la declaration de valeur, des plafonds et de la franchise. Lisez les conditions, demandez l'attestation d'assurance, et faites une declaration de valeur realiste.",
    },
    {
      question: "Puis-je accepter un devis au telephone ?",
      answer:
        "C'est deconseille : sans visite/visio, le volume et les acces sont souvent mal estimes. Exigez un devis ecrit et une base d'estimation documentee avant de vous engager.",
    },
    {
      question: "Que faire en cas de probleme (retard, casse, litige) ?",
      answer:
        "Conservez tous les echanges et le devis, notez les reserves par ecrit (sur documents de livraison si applicable), documentez l'etat, et contactez l'entreprise rapidement. En cas de desaccord, privilegiez une trace ecrite et informez-vous sur les voies de recours (mediation, assurance, protection juridique).",
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
        subtitle="10 questions-réponses factuelles pour reconnaître les signaux d'alerte, demander les bons documents, et réduire le risque de mauvaises surprises."
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
            <div className="flex flex-wrap gap-3">
              <a
                href="/label-moverz/"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              >
                Vérifier un déménageur →
              </a>
              <a
                href="/comment-ca-marche/"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-bg-dark)] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[var(--color-bg-dark)] transition-colors"
              >
                Voir une méthode d'estimation plus solide →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
