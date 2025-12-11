import type { Metadata } from "next";
import { getFullMetadata } from "@/lib/canonical-helper";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = getFullMetadata(
  "pro",
  "Moverz Pro : Widget IA Volumétrie en Marque Blanche pour Déménageurs",
  "Intégrez l'IA Moverz sur votre site de déménagement. Vos clients calculent leur volume en 1 min, vous recevez des dossiers précis avec photos. Widget en marque blanche, API simple, 0 dev."
);

export default function ProPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/20">
      {/* Hero moderne avec gradient */}
      <section className="relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#04163a] via-[#2b7a78] to-[#04163a] opacity-[0.03]" />
        
        {/* Blob animations */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Moverz Pro", href: "/pro/" },
            ]}
          />
          
          <div className="mt-12 space-y-8 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-teal-200 bg-teal-50 px-5 py-2 text-sm font-medium text-teal-700 shadow-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" fill="currentColor" />
              </svg>
              <span>Widget IA pour déménageurs</span>
            </div>

            {/* Hero title */}
            <div className="space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-[#04163a] via-[#2b7a78] to-[#04163a] bg-clip-text text-transparent">
                Vos clients calculent leur volume en 1 min
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Un widget IA qui s'intègre sur votre site en 5 minutes. Vos clients prennent des photos, l'IA calcule le volume, vous recevez des dossiers complets. Simple, précis, en marque blanche.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="/contact/"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#2b7a78] to-[#04163a] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 hover:scale-105 transition-all duration-300"
              >
                <span>Tester gratuitement 30 jours</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-full border-2 border-gray-200 bg-white px-8 py-4 text-base font-semibold text-gray-700 hover:border-teal-500 hover:text-teal-600 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Voir la démo</span>
              </a>
            </div>

            {/* Social proof */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Intégration en 5 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>0 dev requis</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Marque blanche 100%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le problème (storytelling) */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-red-600">
                <span className="text-xl">😓</span>
                <span>Le calvaire actuel</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Les visites techniques, c&apos;est fini
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  <strong className="text-gray-900">3 heures par dossier.</strong> Téléphone, déplacement, visite, retour, saisie. À chaque fois.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-gray-900">40% de litiges.</strong> "Vous aviez dit 25 m³, pas 32 !" Le client conteste, vous perdez du temps et de l'argent.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-gray-900">Clients qui partent.</strong> Ils attendent 5 jours votre visite ? Ils vont chez un concurrent entre-temps.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-br from-red-50 to-orange-50 p-8 shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📞</span>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Appel client</p>
                      <p className="text-sm text-gray-500">10 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🚗</span>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Déplacement</p>
                      <p className="text-sm text-gray-500">1 heure aller-retour</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🏠</span>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Visite sur place</p>
                      <p className="text-sm text-gray-500">45 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💻</span>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Saisie + devis</p>
                      <p className="text-sm text-gray-500">30 minutes</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-red-200">
                    <p className="text-xl font-bold text-red-600">Total : 3h par dossier</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* La solution (vibes modernes) */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="rounded-3xl bg-white p-8 shadow-2xl shadow-teal-500/20">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📸</span>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Client prend 10 photos</p>
                      <p className="text-sm text-gray-500">2 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🤖</span>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">IA calcule le volume</p>
                      <p className="text-sm text-gray-500">30 secondes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📧</span>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Vous recevez le dossier</p>
                      <p className="text-sm text-gray-500">Instantané</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✅</span>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Vous envoyez le devis</p>
                      <p className="text-sm text-gray-500">2 minutes</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-teal-200">
                    <p className="text-xl font-bold text-teal-600">Total : 5 min pour vous</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-600">
                <span className="text-xl">🚀</span>
                <span>La nouvelle façon</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Avec Moverz Pro, c&apos;est 5 minutes
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  <strong className="text-gray-900">1. Votre client prend des photos.</strong> L'app le guide pièce par pièce. Salon, cuisine, chambres, cave. 10 photos en 2 minutes.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-gray-900">2. L'IA analyse et calcule.</strong> Volume en m³, inventaire détaillé, photos des accès. Précision 90-95%.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-gray-900">3. Vous recevez le dossier.</strong> Complet, documenté, prêt à chiffrer. Vous envoyez le devis. Terminé.
                </p>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white shadow-md">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold border-2 border-white">M</div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold border-2 border-white">L</div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center text-white font-bold border-2 border-white">T</div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Déjà 50+ déménageurs français</p>
                  <p className="text-xs text-gray-500">ont économisé 100k+ heures en 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features avec icônes fun */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Pourquoi les déménageurs adorent Moverz Pro
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              On a pensé à tout pour que vous gagnez du temps et de l'argent
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                emoji: "⚡",
                title: "Intégration en 5 minutes",
                description: "Copier-coller un script sur votre site. Aucune compétence technique. Compatible WordPress, Wix, tout.",
              },
              {
                emoji: "🎨",
                title: "Marque blanche 100%",
                description: "Vos couleurs, votre logo, votre domaine. Le client ne voit que votre marque. Moverz est invisible.",
              },
              {
                emoji: "🎯",
                title: "Précision 90-95%",
                description: "L'IA a été entraînée sur 50 000+ déménagements. Aussi précise qu'une visite technique.",
              },
              {
                emoji: "📸",
                title: "Photos = preuve",
                description: "Volume contesté le jour J ? Vous montrez les photos. Le client ne peut plus rien dire. -90% de litiges.",
              },
              {
                emoji: "💸",
                title: "ROI immédiat",
                description: "100€/mois pour économiser 8 000€/mois en visites. Rentable dès 2 estimations/mois.",
              },
              {
                emoji: "🤝",
                title: "Support humain",
                description: "Une vraie personne répond en moins de 2h. Pas de chatbot, pas de ticket. Juste nous.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative rounded-3xl border-2 border-gray-100 bg-white p-8 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{feature.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignage authentique */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="text-center">
              <p className="text-5xl mb-4">💬</p>
              <p className="text-sm font-medium text-teal-400 uppercase tracking-wider">Témoignage</p>
            </div>
            
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-center">
              "Avant Moverz, je passais 3h par dossier en visites. J'étais saturé à 50 dossiers/mois. Maintenant l'IA me fait gagner 2h50 par dossier. Je peux en traiter 100+. J'ai doublé mon CA sans embaucher."
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-2xl font-bold">
                TG
              </div>
              <div>
                <p className="font-semibold text-lg">Thomas Girard</p>
                <p className="text-gray-400">Déménagements Girard, Marseille</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-teal-400">2h50</p>
                <p className="text-sm text-gray-400">économisées/dossier</p>
              </div>
              <div className="w-px h-12 bg-gray-700" />
              <div className="text-center">
                <p className="text-3xl font-bold text-teal-400">×2</p>
                <p className="text-sm text-gray-400">CA en 6 mois</p>
              </div>
              <div className="w-px h-12 bg-gray-700" />
              <div className="text-center">
                <p className="text-3xl font-bold text-teal-400">0</p>
                <p className="text-sm text-gray-400">embauche</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ressources blog */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Guides pour déménageurs
            </h2>
            <p className="text-lg text-gray-600">
              On partage tout ce qu'on sait
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Widget IA volumétrie : comparatif 2025",
                description: "Les 5 solutions pour calculer le volume automatiquement. API, widget, ou développement sur-mesure ?",
                href: "/blog/widget-ia-volumetrie-demenagement-comparatif/",
              },
              {
                title: "Marque blanche : le guide complet",
                description: "Comment intégrer un outil tiers sans perdre votre identité de marque ? Avantages, pièges à éviter.",
                href: "/blog/marque-blanche-demenagement-guide/",
              },
              {
                title: "IA vs visite technique",
                description: "Comparatif précision, temps, coût. L'IA peut-elle vraiment remplacer la visite ?",
                href: "/blog/estimer-volume-demenagement-ia-vs-visite/",
              },
              {
                title: "Réduire les litiges de 90%",
                description: "40% des litiges viennent du volume sous-estimé. Comment l'IA + photos règlent le problème.",
                href: "/blog/demenageur-reduire-litiges-volume/",
              },
              {
                title: "ROI widget volumétrie : calcul 2025",
                description: "Combien économiser en temps commercial avec un widget IA ? Calcul du ROI sur 12 mois.",
                href: "/blog/roi-widget-volumetrie-demenageur/",
              },
            ].map((resource) => (
              <a
                key={resource.href}
                href={resource.href}
                className="group relative rounded-2xl border-2 border-gray-100 bg-white p-6 shadow-md hover:shadow-xl hover:border-teal-500 hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {resource.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600">
                  Lire l'article
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final moderne */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#04163a] via-[#2b7a78] to-[#04163a] p-12 md:p-16 shadow-2xl">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            
            <div className="relative text-center space-y-6">
              <p className="text-6xl">🚀</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Prêt à économiser 3h par dossier ?
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Testez Moverz Pro gratuitement pendant 30 jours. Aucune carte bancaire requise. On vous aide à tout installer.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  href="/contact/"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-gray-900 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <span>Démarrer l'essai gratuit</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="/contact/"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                >
                  <span>Parler à l'équipe</span>
                </a>
              </div>

              <p className="text-sm text-white/70 pt-4">
                30 jours d'essai · Sans engagement · Support français
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
