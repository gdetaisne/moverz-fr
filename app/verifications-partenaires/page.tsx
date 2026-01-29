import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { getFullMetadata } from "@/lib/canonical-helper";
import { FAQ, type FAQItem } from "@/components/FAQ";

export const metadata: Metadata = getFullMetadata(
  "verifications-partenaires",
  "Critères de sélection des partenaires Moverz | Déménageurs engagés",
  "Découvrez les critères de sélection et les engagements contractuels des déménageurs partenaires Moverz : légalité, assurance, qualité, transparence."
);

export default function VerificationsPartenairesPage() {
  const faqs: FAQItem[] = [
    {
      question: "Comment garantissez-vous la qualité des partenaires ?",
      answer:
        "Les déménageurs du réseau Moverz s'engagent contractuellement (via les CGV Partenaires) à respecter des critères de légalité, d'assurance, de qualité de service et de transparence. En cas de manquement, nous nous réservons le droit de suspendre ou résilier le partenariat.",
    },
    {
      question: "Les partenaires ont-ils une assurance valide ?",
      answer:
        "Oui. Tous les partenaires s'engagent contractuellement à maintenir une assurance RC Pro et une assurance marchandises valides, et à fournir une attestation à jour sur demande du client.",
    },
    {
      question: "Que se passe-t-il en cas de litige avec un partenaire ?",
      answer:
        "Le partenaire est contractuellement tenu de traiter les réclamations de manière constructive et de rechercher une solution amiable. Moverz suit les dossiers pour garantir la qualité du réseau.",
    },
    {
      question: "Les partenaires peuvent-ils sous-traiter ?",
      answer:
        "Oui, mais ils s'engagent à signaler clairement toute sous-traitance prévue avant signature du contrat avec le client, pour garantir la transparence.",
    },
    {
      question: "Comment Moverz vérifie-t-elle les engagements ?",
      answer:
        "Au moment de rejoindre le réseau, chaque partenaire accepte contractuellement les CGV Partenaires. Nous suivons les retours clients et les litiges pour maintenir un réseau de qualité.",
    },
    {
      question: "Puis-je consulter les CGV Partenaires ?",
      answer:
        "Oui, les CGV Partenaires sont publiques et détaillent tous les engagements contractuels des déménageurs du réseau.",
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      <PageHero
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Critères de sélection", href: "/verifications-partenaires/" },
        ]}
        eyebrow="Transparence"
        title="Critères de sélection des partenaires"
        subtitle="Pour rejoindre le réseau Moverz, les déménageurs s'engagent contractuellement à respecter des critères de qualité, de transparence et de professionnalisme."
        primaryCta={{ label: "Voir les critères", href: "#criteres" }}
        secondaryCta={{ label: "Voir la FAQ", href: "#faq" }}
      />

      <section id="criteres" className="section section-light scroll-mt-28">
        <div className="container max-w-4xl space-y-10">
          
          {/* Pourquoi c'est important */}
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-8 space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#0F172A]">Notre approche : engagement contractuel</h2>
            <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
              Plutôt que de prétendre "vérifier" chaque déménageur en amont, nous avons fait le choix de la 
              <strong className="text-[#0F172A]"> responsabilisation contractuelle</strong>.
            </p>
            <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
              Chaque déménageur qui rejoint le réseau Moverz accepte nos{" "}
              <a href="/cgv-partenaires/" className="text-[#6BCFCF] hover:underline font-semibold">
                CGV Partenaires
              </a>
              {" "}et s'engage contractuellement à respecter des critères stricts de légalité, d'assurance, 
              de qualité et de transparence.
            </p>
          </div>

          {/* Les critères */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold text-[#0F172A]">Les engagements contractuels des partenaires</h2>

            <div className="grid gap-4">
              {[
                {
                  title: "1) Légalité et conformité",
                  desc: "Le partenaire s'engage à être en règle avec toutes les obligations légales.",
                  bullets: [
                    "Immatriculation RCS ou RM active",
                    "SIRET/SIREN valide et en règle",
                    "Licences et autorisations requises pour le déménagement",
                    "Respect de la réglementation transport de marchandises",
                  ],
                },
                {
                  title: "2) Assurance",
                  desc: "Le partenaire s'engage à maintenir des assurances professionnelles valides.",
                  bullets: [
                    "Assurance RC Pro à jour",
                    "Assurance marchandises transportées",
                    "Capacité à fournir une attestation d'assurance sur demande",
                    "Transparence sur les conditions de garantie et franchises",
                  ],
                },
                {
                  title: "3) Qualité et transparence du devis",
                  desc: "Le partenaire s'engage à établir des devis clairs et conformes.",
                  bullets: [
                    "Devis détaillés (prestations, volumes, accès, conditions)",
                    "Délais de réponse raisonnables (24-48h recommandé)",
                    "Signalement clair de toute sous-traitance prévue",
                    "Pas de frais cachés ou non mentionnés au devis",
                  ],
                },
                {
                  title: "4) Qualité de service",
                  desc: "Le partenaire s'engage à respecter ses engagements et à assurer un service professionnel.",
                  bullets: [
                    "Respect des délais et conditions convenus",
                    "Prestation réalisée avec professionnalisme et soin",
                    "Communication transparente et réactive avec le client",
                    "Traitement constructif des réclamations",
                  ],
                },
                {
                  title: "5) Protection des données (RGPD)",
                  desc: "Le partenaire s'engage à respecter la confidentialité des données client.",
                  bullets: [
                    "Respect du RGPD",
                    "Utilisation des données uniquement pour la prestation",
                    "Pas de revente ou transfert des données",
                    "Suppression des données après la prestation (sauf obligations légales)",
                  ],
                },
              ].map((c) => (
                <div key={c.title} className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-7">
                  <h3 className="text-base md:text-lg font-bold text-[#0F172A]">{c.title}</h3>
                  <p className="mt-2 text-sm md:text-base text-[#6B7280] leading-relaxed">{c.desc}</p>
                  <ul className="mt-4 grid gap-2 text-sm md:text-base text-[#0F172A]/90">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#6BCFCF] shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Ce que cela change */}
          <div className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-6 md:p-8 space-y-3">
            <h2 className="text-lg md:text-xl font-semibold text-[#0F172A]">Ce que cela change concrètement</h2>
            <ul className="grid gap-2 text-sm md:text-base text-[#0F172A]/90">
              {[
                "Des partenaires qui s'engagent contractuellement (pas juste une promesse marketing)",
                "Un recours en cas de manquement (suspension ou exclusion du réseau)",
                "Une responsabilité claire du déménageur vis-à-vis du client",
                "Une traçabilité des engagements via les CGV Partenaires",
              ].map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#2B7A78] shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA vers CGV-P */}
          <div className="rounded-2xl border border-[#6BCFCF]/30 bg-gradient-to-br from-[#6BCFCF]/10 to-white p-6 md:p-8 text-center">
            <h3 className="text-lg font-bold text-[#0F172A] mb-3">
              Consultez les engagements complets
            </h3>
            <p className="text-sm md:text-base text-[#6B7280] mb-5 max-w-2xl mx-auto">
              Pour connaître le détail de tous les engagements contractuels des déménageurs du réseau Moverz, 
              consultez les Conditions Générales de Vente Partenaires.
            </p>
            <a
              href="/cgv-partenaires/"
              className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-[#1E293B] hover:shadow-xl transition-all"
            >
              Consulter les CGV Partenaires →
            </a>
          </div>

        </div>
      </section>

      <div id="faq" className="scroll-mt-28">
        <FAQ title="Questions fréquentes" faqs={faqs} limit={6} id="faq" />
      </div>

      {/* CTA discret */}
      <section className="section section-light pt-0">
        <div className="container max-w-4xl space-y-6">
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-[#0F172A]">Envie d'une base d'estimation plus claire ?</p>
              <p className="text-sm text-[#6B7280]">
                Une visite, une visio ou des photos détaillées réduisent les ambiguïtés sur le volume et les accès.
              </p>
            </div>
            <a
              href="/comment-ca-marche/"
              className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#1E293B] transition-colors whitespace-nowrap"
            >
              Comprendre la méthode →
            </a>
          </div>

          {/* CTA Devenir partenaire */}
          <div className="rounded-2xl border border-[#6BCFCF]/30 bg-gradient-to-br from-[#6BCFCF]/5 to-white p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-[#0F172A]">Vous êtes déménageur ?</p>
              <p className="text-sm text-[#6B7280]">
                Rejoignez notre réseau et recevez des dossiers qualifiés. Paiement uniquement au succès.
              </p>
            </div>
            <a
              href="/partenaires/"
              className="inline-flex items-center justify-center rounded-full bg-[#6BCFCF] px-6 py-3 text-sm font-semibold text-[#0F172A] shadow-sm hover:bg-[#2B7A78] hover:text-white transition-all whitespace-nowrap"
            >
              Devenir partenaire →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
