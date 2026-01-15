import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import { getFullMetadata } from "@/lib/canonical-helper";
import PageHero from "@/components/PageHero";
import WidgetActionSection from "@/components/WidgetActionSection";
import { JsonLd } from "@/components/schema/JsonLd";

export const metadata: Metadata = getFullMetadata(
  'faq',
  "FAQ Déménagement : Tarifs, Arnaques, Assurances [Réponses 2025] | Moverz",
  "Toutes vos questions sur le déménagement : Combien ça coûte ? Comment éviter les arnaques ? Les pros sont-ils assurés ? C'est vraiment gratuit ? → Réponses claires"
);

const faqCategories = [
  {
    title: "Démarrage",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "from-blue-500/10 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    items: [
      {
        q: "Qu'est-ce que Moverz ?",
        a: "Moverz est un comparateur de devis de déménageurs qui s'appuie sur l'IA pour préparer un dossier ultra précis à partir de quelques questions et de vos photos. L'IA Moverz estime la volumétrie de votre déménagement et structure un inventaire unique, envoyé à des déménageurs contrôlés. Résultat : des devis enfin comparables, 100% gratuits et sans harcèlement téléphonique.",
      },
      {
        q: "Quelle est la différence entre Moverz et les autres comparateurs ?",
        a: "La plupart des comparateurs (45-50% du marché) se contentent de revendre vos coordonnées aux déménageurs. Moverz va beaucoup plus loin : nous créons un dossier standardisé via photos/vidéos WhatsApp, nous vérifions la santé financière de chaque entreprise (score Creditsafe), leur historique de litiges, et leur identité légale. Le prix ne fait pas tout : nous vous aidons à choisir un déménageur fiable, pas juste le moins cher. En savoir plus sur <a href='/pourquoi-moverz/' class='underline text-[#6BCFCF]'>notre approche unique</a>.",
      },
      {
        q: "Combien de devis vais-je recevoir ?",
        a: "Vous recevrez un minimum de 5 devis de déménageurs contrôlés. Ce nombre peut varier en fonction de votre localisation et de la disponibilité des partenaires, mais nous nous engageons à vous fournir plusieurs options comparables.",
      },
      {
        q: "Que se passe-t-il si ma ville n'est pas couverte ?",
        a: "Moverz peut être utilisé partout en France : vous pouvez créer un dossier complet quel que soit votre point de départ ou d'arrivée. Certaines grandes villes ont des pages dédiées, mais si vous ne trouvez pas explicitement votre ville dans nos exemples, vous pouvez quand même utiliser le comparateur et nous indiquer vos adresses précises.",
      }
    ]
  },
  {
    title: "Tarifs & Transparence",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "from-emerald-500/10 to-teal-500/20",
    borderColor: "border-emerald-500/30",
    items: [
      {
        q: "Combien coûte le service Moverz ?",
        a: "Notre service est entièrement gratuit pour vous, sans aucun engagement. Nous sommes rémunérés par les déménageurs partenaires lorsque vous choisissez l'un d'entre eux via notre plateforme. Il n'y a aucun frais caché.",
      },
      {
        q: "Comment Moverz garantit-il des devis comparables ?",
        a: "Vous décrivez votre déménagement, envoyez des photos et laissez l’IA Moverz faire le travail. Elle estime le volume global et crée un dossier standardisé (même volumétrie, mêmes informations) envoyé à tous les déménageurs partenaires. Ils chiffrent ainsi la même base, ce qui rend les devis directement comparables et limite les mauvaises surprises.",
      }
    ]
  },
  {
    title: "Sécurité & Confidentialité",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "from-purple-500/10 to-pink-500/20",
    borderColor: "border-purple-500/30",
    items: [
      {
        q: "Est-ce que je vais être harcelé par téléphone ?",
        a: "Absolument pas. Votre dossier reste anonyme. Les déménageurs reçoivent votre demande et vous envoient leurs devis par email via notre plateforme. Vous décidez vous-même qui vous souhaitez contacter et quand, sans aucune pression ni appel intempestif.",
      },
      {
        q: "Le marché du déménagement est-il risqué ?",
        a: "Oui, malheureusement. Selon une enquête DGCCRF de 2023, 64% des entreprises de déménagement contrôlées présentaient au moins une anomalie. En 2024, 257 entreprises du secteur ont fait faillite sur environ 1 300 établissements. Et 90% des sociétés ont moins de 20 salariés, ce qui rend l'évaluation de leur fiabilité très difficile sans outils spécialisés. Consultez notre guide complet : <a href='/blog/eviter-arnaques-demenagement/' class='underline text-[#6BCFCF]'>Comment éviter les arnaques au déménagement</a>.",
      },
      {
        q: "Comment Moverz vérifie-t-il les déménageurs ?",
        a: "Nous utilisons des outils professionnels (Creditsafe) pour analyser chaque entreprise : score de solvabilité sur 100, évolution de ce score dans le temps, historique des litiges et condamnations, situation financière (bénéficiaire ou en pertes), et vérification de l'identité légale (SIREN, assurances). Cette analyse, normalement réservée aux professionnels B2B, est mise à votre disposition pour vous aider à choisir en toute transparence.",
      },
      {
        q: "Les déménageurs sont-ils fiables ?",
        a: "Les déménageurs partenaires Moverz sont rigoureusement sélectionnés. Nous vérifions leur score Creditsafe (santé financière), leur historique de litiges, leurs assurances RC Pro, et leur identité légale. Seuls les professionnels avec un profil financier solide et sans litiges problématiques sont intégrés à notre réseau. Vous recevez ces informations pour chaque devis.",
      }
    ]
  },
  {
    title: "Couverture géographique",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "from-orange-500/10 to-red-500/20",
    borderColor: "border-orange-500/30",
    items: [
      {
        q: "Puis-je utiliser Moverz pour un déménagement international ?",
        a: "Notre cœur de métier est le déménagement France → France, mais nous pouvons étudier certains projets internationaux au cas par cas (Europe proche, retour en France, etc.). Indiquez simplement votre situation dans le formulaire ou contactez-nous : nous vous dirons clairement si nous pouvons vous accompagner directement ou vous orienter vers la bonne solution.",
      }
    ]
  }
];

export default function FAQPage() {
  // Générer le schema FAQPage pour Google Rich Snippets
  const allFaqItems = faqCategories.flatMap(cat => cat.items);
  const stripHtml = (html: string) =>
    html
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqItems.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        // JSON-LD must be plain text (no HTML)
        "text": stripHtml(item.a)
      }
    }))
  };

  return (
    <main className="bg-white min-h-screen">
      {/* Schema FAQPage pour Rich Snippets Google */}
      <JsonLd id="faq-page-schema" data={faqSchema} />
      
      <PageHero
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "FAQ", href: "/faq/" },
        ]}
        eyebrow="Toutes vos réponses ici"
        title="Questions fréquentes"
        subtitle="Découvrez comment l’IA Moverz estime votre volume, standardise votre dossier et vous aide à comparer des devis vraiment comparables, sans spam."
        primaryCta={{
          label: "Comparer 3 devis minimum gratuitement",
          href: "https://devis.moverz.fr/devis-gratuits-v3?source=moverz.fr&from=/faq/",
        }}
        secondaryCta={{ label: "Comment ça marche", href: "/comment-ca-marche/" }}
      />

      {/* Maillage interne (SEO) */}
      <section className="section section-light pt-8 pb-0">
        <div className="container max-w-5xl">
          <div className="rounded-2xl border border-[#E3E5E8] bg-white p-6 md:p-8">
            <div className="text-center space-y-3 mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6BCFCF]">À lire aussi</p>
              <h2 className="text-xl md:text-2xl font-bold text-[#0F172A]">Guides utiles (sans blabla)</h2>
              <p className="text-sm text-[#6B7280] max-w-2xl mx-auto">
                Des pages courtes et actionnables pour vérifier un déménageur et éviter les zones floues.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {[
                {
                  href: "/faq-arnaque-demenagement/",
                  title: "FAQ arnaques déménagement",
                  desc: "10 questions factuelles : acomptes, devis, assurance, suppléments, sous-traitance…",
                },
                {
                  href: "/criteres-choisir-demenageur/",
                  title: "Critères pour choisir un déménageur",
                  desc: "Les 7 critères indispensables + checklist imprimable.",
                },
                {
                  href: "/verifications-partenaires/",
                  title: "Vérifications partenaires (transparence)",
                  desc: "Ce qui est vérifié, pourquoi, et ce que ça change concrètement.",
                },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group rounded-2xl border border-[#E5E7EB] bg-white p-5 hover:border-[#6BCFCF]/50 hover:shadow-sm transition-all"
                >
                  <p className="text-sm font-semibold text-[#0F172A] group-hover:text-[#2B7A78]">{item.title}</p>
                  <p className="mt-1 text-xs text-[#6B7280] leading-relaxed">{item.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats rapides - Premium Tech */}
      <section className="section section-light pt-8 pb-4">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { 
                icon: <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                stat: "< 3 min", 
                label: "Pour créer son dossier complet",
                gradient: "from-blue-500 to-cyan-500"
              },
              { 
                icon: <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>,
                stat: "100%", 
                label: "Gratuit & sans engagement",
                gradient: "from-emerald-500 to-teal-500"
              },
              { 
                icon: <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                stat: "Sans démarchage", 
                label: "Aucun appel intempestif",
                gradient: "from-purple-500 to-pink-500"
              },
              { 
                icon: <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
                stat: "5+", 
                label: "Devis comparables",
                gradient: "from-orange-500 to-red-500"
              }
            ].map((item, i) => (
              <div 
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#6BCFCF]/30 transition-all duration-300"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative text-center space-y-2.5">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} bg-opacity-10 text-[#2B7A78] group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-[#0F172A] to-[#2B7A78] bg-clip-text text-transparent">
                    {item.stat}
                  </div>
                  <div className="text-xs text-gray-600 font-medium leading-tight">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ par catégories - Premium Tech */}
      <section className="section section-light pt-4">
        <div className="container max-w-4xl">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6BCFCF]/10 to-[#2B7A78]/10 border border-[#6BCFCF]/20 px-4 py-2 text-sm font-semibold text-[#2B7A78]">
              <span className="h-2 w-2 rounded-full bg-[#6BCFCF] animate-pulse" />
              Questions & Réponses
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
              Tout ce que vous voulez savoir
            </h2>
          </div>

          <div className="space-y-10">
            {faqCategories.map((category, idx) => (
              <div key={idx} className="relative">
                {/* Premium category header */}
                <div className="mb-6 flex items-center gap-4 group">
                  <div className="relative">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} border ${category.borderColor} text-[#2B7A78] shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300`}>
                      {category.icon}
                    </div>
                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300 -z-10`} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] group-hover:text-[#2B7A78] transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium">
                      {category.items.length} question{category.items.length > 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
                
                {/* Questions de la catégorie */}
                <div className="ml-0 md:ml-18">
                  <FAQAccordion items={category.items} />
                </div>
              </div>
            ))}
          </div>

          {/* Encore une question ? - Premium Tech */}
          <div className="mt-16 relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-white p-8 md:p-12 text-center shadow-xl">
            {/* Gradient overlays */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#6BCFCF]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2B7A78]/10 rounded-full blur-3xl" />
            
            <div className="relative space-y-6">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-[#6BCFCF]/20 to-[#2B7A78]/20 border border-[#6BCFCF]/30 mx-auto text-[#2B7A78] shadow-lg hover:scale-110 transition-transform duration-300">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A]">
                Encore une question ?
              </h3>
              <p className="text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
                Pas de soucis ! Notre équipe adore discuter déménagement (oui, vraiment). On vous répond en mode humain, pas en mode robot.
              </p>
              <a
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0F172A] px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span>Posez votre question</span>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <WidgetActionSection
        title="Comparez 3 devis minimum maintenant"
        subtitle="Décrivez votre déménagement en quelques minutes. L'IA fiabilise le volume pour des devis vraiment comparables, sans spam."
        source="moverz.fr"
        from="/faq/"
      />
    </main>
  );
}
