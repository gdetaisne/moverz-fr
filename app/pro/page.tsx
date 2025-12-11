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
    <main className="bg-hero min-h-screen">
      <div className="halo" />

      {/* Hero */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop"
            alt="Moverz Pro"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#04163a]/95 via-[#2b7a78]/88 to-[#04163a]/92"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-8">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Moverz Pro", href: "/pro/" },
            ]}
          />
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF] animate-pulse" />
              SaaS pour déménageurs · Moverz Pro
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Widget IA volumétrie en marque blanche pour votre site
            </h1>
            <p className="text-base md:text-lg text-white/85 max-w-2xl">
              Intégrez l&apos;IA Moverz directement sur votre site de déménagement. Vos clients calculent leur volume en 1 minute avec leurs photos, vous recevez des dossiers complets et précis. Widget en marque blanche, intégration en 5 min, 0 dev.
            </p>
          </div>
        </div>
      </section>

      {/* Sections produit */}
      <section className="section section-light">
        <div className="container max-w-5xl space-y-10">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#04163a]">
                L&apos;IA Moverz directement sur votre site
              </h2>
              <p className="text-sm md:text-base text-[#4b5c6b]">
                Vos clients prennent des photos de leur logement, l&apos;IA calcule automatiquement le volume en m³ (précision 90-95%). Vous recevez un dossier complet avec inventaire détaillé, photos des accès, et estimation précise. Plus besoin de visite technique chronophage.
              </p>
              <p className="text-sm md:text-base text-[#4b5c6b]">
                Le widget est en marque blanche : vos couleurs, votre logo, votre domaine. Le client ne voit que votre marque. Intégration en 5 minutes avec un simple script, aucun développement nécessaire.
              </p>
            </div>
            <div className="space-y-4 rounded-2xl border border-[#E3E5E8] bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-[#04163a]">
                Ce que le widget Moverz Pro vous apporte
              </h3>
              <ul className="space-y-2 text-sm text-[#4b5c6b]">
                <li>• Estimation IA du volume en 1 minute (90-95% de précision)</li>
                <li>• Dossier complet : inventaire + photos + accès + contraintes</li>
                <li>• Intégration marque blanche sur votre site (vos couleurs, votre logo)</li>
                <li>• Réduction des litiges (volume documenté avec photos)</li>
                <li>• Gain de 2-3h par dossier (plus de visite technique)</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Intégration en 5 minutes",
                text: "Un simple script à copier-coller sur votre site. Aucune compétence technique requise. Compatible avec tous les CMS (WordPress, Wix, site custom).",
              },
              {
                title: "Marque blanche 100%",
                text: "Vos couleurs, votre logo, votre domaine. Le client ne voit que votre marque. L'IA Moverz est invisible, vous gardez toute la relation client.",
              },
              {
                title: "Réduction des litiges",
                text: "Volume documenté avec photos, inventaire détaillé pièce par pièce. Plus de contestation possible le jour J. Clients satisfaits, moins de stress.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#E3E5E8] bg-white p-5 space-y-2"
              >
                <h3 className="text-sm font-semibold text-[#04163a]">{item.title}</h3>
                <p className="text-sm text-[#4b5c6b]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ressources pour déménageurs */}
      <section className="section section-light">
        <div className="container max-w-5xl space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#04163a]">
              Ressources pour déménageurs professionnels
            </h2>
            <p className="text-sm md:text-base text-[#4b5c6b] max-w-2xl mx-auto">
              Guides pratiques, comparatifs et conseils pour optimiser votre activité de déménagement.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Widget IA volumétrie : comparatif 2025",
                description: "Les 5 solutions pour calculer le volume automatiquement sur votre site. API, widget, ou développement sur-mesure ?",
                href: "/blog/widget-ia-volumetrie-demenagement-comparatif/",
              },
              {
                title: "Marque blanche déménagement : guide complet",
                description: "Comment intégrer un outil tiers sur votre site sans perdre votre identité de marque ? Avantages, pièges à éviter.",
                href: "/blog/marque-blanche-demenagement-guide/",
              },
              {
                title: "Estimer le volume : IA vs visite technique",
                description: "Comparatif précision, temps, coût. L'IA peut-elle vraiment remplacer la visite technique ?",
                href: "/blog/estimer-volume-demenagement-ia-vs-visite/",
              },
              {
                title: "Réduire les litiges volume de 90%",
                description: "Pourquoi 40% des litiges viennent du volume sous-estimé, et comment l'IA + photos règlent le problème.",
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
                className="group rounded-2xl border border-[#E3E5E8] bg-white p-5 space-y-3 hover:border-[#2B7A78] hover:shadow-md transition-all"
              >
                <h3 className="text-base font-semibold text-[#04163a] group-hover:text-[#2B7A78] transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-[#4b5c6b] leading-relaxed">
                  {resource.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-[#2B7A78]">
                  Lire l&apos;article
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA contact */}
      <section className="section section-contrast">
        <div className="container max-w-3xl text-center space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6BCFCF]">
            Discuter de Moverz Pro
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Vous voulez en savoir plus sur la version pro ?
          </h2>
          <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto">
            Dites-nous comment vous travaillez aujourd&apos;hui et ce que vous aimeriez améliorer. On
            voit ensemble si Moverz Pro peut vraiment vous aider, sans bullshit ni engagement.
          </p>
          <a href="/contact/" className="btn-primary">
            Parler à l&apos;équipe Moverz Pro
          </a>
        </div>
      </section>
    </main>
  );
}


