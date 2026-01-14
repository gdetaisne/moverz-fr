import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { getFullMetadata } from "@/lib/canonical-helper";
import { FAQ, type FAQItem } from "@/components/FAQ";

export const metadata: Metadata = getFullMetadata(
  "verifications-partenaires",
  "Vérifications partenaires : nos critères de transparence | Moverz",
  "Transparence : ce que nous vérifions chez les déménageurs partenaires (légalité, assurance, capacité/licence, éléments financiers, cohérence des documents) et ce que cela change concrètement pour votre devis."
);

export default function VerificationsPartenairesPage() {
  const faqs: FAQItem[] = [
    {
      question: "Est-ce une garantie “zéro problème” ?",
      answer:
        "Non. Une vérification réduit des risques (légalité, assurance, cohérence) mais ne supprime pas tous les aléas (imprévus logistiques, météo, contraintes d’accès). L’objectif est d’augmenter la transparence avant signature.",
    },
    {
      question: "Vérifiez-vous l’assurance avant chaque devis ?",
      answer:
        "Nous demandons des justificatifs et vérifions la présence d’une assurance valide. Les documents peuvent évoluer ; en cas de doute, il reste utile de demander une attestation à jour avant de signer un devis.",
    },
    {
      question: "Pourquoi la capacité / licence de transport est importante ?",
      answer:
        "Parce qu’elle encadre l’activité de transport de marchandises et clarifie les responsabilités. Une situation floue augmente le risque de litige en cas de problème.",
    },
    {
      question: "Vérifiez-vous la sous-traitance ?",
      answer:
        "Nous cherchons à la rendre transparente : qui exécute la prestation, et qui est responsable au contrat. Une sous-traitance non déclarée est un signal de risque.",
    },
    {
      question: "Que vérifiez-vous côté documents ?",
      answer:
        "La cohérence entre raison sociale, SIREN/SIRET, adresse, devis, RIB et assurance. Les incohérences sont un signal à investiguer avant de s’engager.",
    },
    {
      question: "Pourquoi vérifier des éléments financiers ?",
      answer:
        "Parce que la solidité de l’entreprise influence la capacité à tenir les engagements (matériel, équipes, trésorerie). Une entreprise en difficulté peut multiplier les annulations ou les défaillances.",
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      <PageHero
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Vérifications partenaires", href: "/verifications-partenaires/" },
        ]}
        eyebrow="Transparence"
        title="Vérifications partenaires : nos critères"
        subtitle="On ne vous demande pas de “faire confiance”. On vous explique ce que l’on vérifie, pourquoi, et comment cela réduit les zones floues d’un devis de déménagement."
        primaryCta={{ label: "Voir les critères", href: "#criteres" }}
        secondaryCta={{ label: "Voir la FAQ", href: "#faq" }}
      />

      <section id="criteres" className="section section-light scroll-mt-28">
        <div className="container max-w-4xl space-y-10">
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-8 space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#0F172A]">Pourquoi c’est utile</h2>
            <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
              Beaucoup de problèmes viennent d’un manque de clarté avant signature : identité de l’entreprise, assurance,
              sous-traitance, volume mal estimé, options non cadrées. Des vérifications ne rendent pas un déménagement
              “sans risque”, mais elles réduisent les situations floues.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold text-[#0F172A]">Ce que nous vérifions (et comment)</h2>

            <div className="grid gap-4">
              {[
                {
                  title: "1) Identité légale",
                  desc: "Objectif : s’assurer que l’entreprise existe, est identifiable, et que les documents correspondent.",
                  bullets: [
                    "Raison sociale + SIREN/SIRET",
                    "Adresse et cohérence des informations sur les documents",
                    "Correspondance devis ↔ RIB ↔ assurance",
                  ],
                },
                {
                  title: "2) Capacité / licence de transport (selon activité)",
                  desc: "Objectif : réduire le risque d’une situation non conforme ou d’une responsabilité floue.",
                  bullets: [
                    "Demande de justificatifs liés à l’activité",
                    "Clarification du rôle en cas de sous-traitance",
                  ],
                },
                {
                  title: "3) Assurance",
                  desc: "Objectif : vérifier qu’une couverture existe et qu’elle est pertinente.",
                  bullets: [
                    "Attestation d’assurance (période de validité)",
                    "Périmètre (RC Pro, marchandises transportées), franchise",
                    "Recommandation : demander une attestation à jour avant signature",
                  ],
                },
                {
                  title: "4) Éléments financiers (signal de solidité)",
                  desc: "Objectif : réduire le risque d’annulation, de défaillance ou d’exécution dégradée.",
                  bullets: [
                    "Kbis récent (signal administratif)",
                    "Indicateurs de solidité (quand disponibles) comme aide à la décision",
                  ],
                },
                {
                  title: "5) Qualité opérationnelle (signaux)",
                  desc: "Objectif : éviter les devis irréalistes ou les promesses non tenables.",
                  bullets: [
                    "Clarté du devis (périmètre, options, accès, conditions)",
                    "Capacité à expliquer la méthode d’estimation de volume",
                    "Transparence sur planning et contraintes",
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

          <div className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-6 md:p-8 space-y-3">
            <h2 className="text-lg md:text-xl font-semibold text-[#0F172A]">Ce que cela change concrètement</h2>
            <ul className="grid gap-2 text-sm md:text-base text-[#0F172A]/90">
              {[
                "Moins de zones floues (documents, identité, assurance).",
                "Des devis plus comparables quand la base d’estimation est documentée.",
                "Plus de transparence sur les conditions (options, annulation, paiement).",
              ].map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#2B7A78] shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-[#6B7280]">
              Note : une vérification ne remplace pas la lecture du devis et la clarification des points ambigus avant signature.
            </p>
          </div>
        </div>
      </section>

      <div id="faq" className="scroll-mt-28">
        <FAQ title="FAQ : nos vérifications" faqs={faqs} limit={6} id="faq" />
      </div>

      {/* CTA discret */}
      <section className="section section-light pt-0">
        <div className="container max-w-4xl">
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-[#0F172A]">Envie d’une base d’estimation plus claire ?</p>
              <p className="text-sm text-[#6B7280]">
                Une visite, une visio ou des photos détaillées réduisent les ambiguïtés sur le volume et les accès.
              </p>
            </div>
            <a
              href="/comment-ca-marche/"
              className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#1E293B] transition-colors"
            >
              Comprendre la méthode →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

