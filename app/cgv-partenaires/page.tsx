import type { Metadata } from "next";
import { getCanonicalUrl } from "@/lib/canonical-helper";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "CGV Partenaires : Engagements des déménageurs",
  description:
    "Conditions Générales de Vente Partenaires : engagements contractuels des déménageurs du réseau Moverz (légalité, assurance, qualité, transparence).",
  alternates: {
    canonical: getCanonicalUrl('cgv-partenaires'),
  },
};

export default function CGVPartenairesPage() {
  return (
    <main className="bg-hero min-h-screen">
      <div className="halo" />

      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/détail-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop"
            alt="CGV Partenaires"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#04163a]/95 via-[#2b7a78]/88 to-[#04163a]/92"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "CGV Partenaires", href: "/cgv-partenaires/" }
            ]}
          />
          <h1 className="text-3xl md:text-5xl font-bold mt-6">Conditions Générales de Vente Partenaires</h1>
          <p className="text-white/85 mt-3 max-w-3xl">
            Engagements contractuels des déménageurs du réseau Moverz.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-5xl">
          <div className="space-y-10 text-white/90">
            
            {/* Préambule */}
            <div className="bg-[#6BCFCF]/10 border border-[#6BCFCF]/30 rounded-2xl p-6">
              <p className="text-white">
                En rejoignant le réseau Moverz, vous acceptez les présentes Conditions Générales de Vente Partenaires 
                et vous vous engagez à respecter les critères de qualité, de transparence et de professionnalisme décrits ci-dessous.
              </p>
            </div>

            {/* Article 1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-3">Article 1 : Objet</h2>
              <p>
                Les présentes Conditions Générales de Vente Partenaires (CGV-P) définissent les conditions dans lesquelles 
                les déménageurs partenaires (ci-après "le Partenaire") rejoignent le réseau Moverz (exploité par GSLV EURL) 
                et reçoivent des demandes de devis via la plateforme.
              </p>
              <p className="mt-3 text-white/75">
                Ces CGV-P complètent les Conditions Générales d'Utilisation (CGU) du site moverz.fr.
              </p>
            </div>

            {/* Article 2 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Article 2 : Engagements du Partenaire</h2>
              <p className="mb-4">En rejoignant le réseau Moverz, le Partenaire s'engage contractuellement à :</p>

              <div className="space-y-6">
                {/* 2.1 */}
                <div className="pl-4 border-l-2 border-[#6BCFCF]/50">
                  <h3 className="text-lg font-semibold text-[#6BCFCF] mb-2">2.1 Légalité et conformité</h3>
                  <ul className="list-disc pl-6 mt-3 space-y-2 text-white/80">
                    <li>Être immatriculé au Registre du Commerce et des Sociétés (RCS) ou au Répertoire des Métiers (RM)</li>
                    <li>Disposer d'un numéro SIRET/SIREN actif et en règle avec les obligations fiscales et sociales</li>
                    <li>Détenir les licences, autorisations ou inscriptions requises pour l'activité de déménagement (selon la réglementation en vigueur)</li>
                    <li>Respecter l'ensemble de la réglementation applicable au transport de marchandises et au déménagement</li>
                  </ul>
                </div>

                {/* 2.2 */}
                <div className="pl-4 border-l-2 border-[#6BCFCF]/50">
                  <h3 className="text-lg font-semibold text-[#6BCFCF] mb-2">2.2 Assurance</h3>
                  <ul className="list-disc pl-6 mt-3 space-y-2 text-white/80">
                    <li>Maintenir une assurance Responsabilité Civile Professionnelle (RC Pro) valide et à jour</li>
                    <li>Disposer d'une assurance couvrant les marchandises transportées (assurance déménagement)</li>
                    <li>Être en mesure de fournir une attestation d'assurance à jour sur simple demande du client ou de Moverz</li>
                    <li>Informer le client des conditions de garantie, plafonds et franchises applicables</li>
                  </ul>
                </div>

                {/* 2.3 */}
                <div className="pl-4 border-l-2 border-[#6BCFCF]/50">
                  <h3 className="text-lg font-semibold text-[#6BCFCF] mb-2">2.3 Qualité et transparence du devis</h3>
                  <ul className="list-disc pl-6 mt-3 space-y-2 text-white/80">
                    <li>Établir des devis clairs, détaillés et conformes à la réglementation (prestations incluses, volume estimé, conditions d'accès, options, modalités de paiement)</li>
                    <li>Baser ses estimations sur les informations fournies par Moverz (inventaire, dossier client)</li>
                    <li>Respecter les délais de réponse raisonnables (idéalement sous 24-48h après réception du dossier)</li>
                    <li>Signaler clairement toute sous-traitance prévue avant signature du contrat</li>
                    <li>Ne pas facturer de prestations ou frais non mentionnés au devis initial (sauf circonstances exceptionnelles validées par le client)</li>
                  </ul>
                </div>

                {/* 2.4 */}
                <div className="pl-4 border-l-2 border-[#6BCFCF]/50">
                  <h3 className="text-lg font-semibold text-[#6BCFCF] mb-2">2.4 Qualité de service et respect des engagements</h3>
                  <ul className="list-disc pl-6 mt-3 space-y-2 text-white/80">
                    <li>Respecter les délais annoncés et les conditions convenues avec le client</li>
                    <li>Assurer la prestation de déménagement avec professionnalisme et soin</li>
                    <li>Communiquer de manière transparente et réactive avec le client (avant, pendant et après la prestation)</li>
                    <li>Informer rapidement le client et Moverz en cas d'imprévu ou de difficulté</li>
                    <li>Traiter les réclamations clients de manière constructive et dans des délais raisonnables</li>
                  </ul>
                </div>

                {/* 2.5 */}
                <div className="pl-4 border-l-2 border-[#6BCFCF]/50">
                  <h3 className="text-lg font-semibold text-[#6BCFCF] mb-2">2.5 Tarification et facturation</h3>
                  <ul className="list-disc pl-6 mt-3 space-y-2 text-white/80">
                    <li>Proposer des tarifs cohérents avec le marché et la réalité de la prestation</li>
                    <li>Émettre des factures conformes à la législation française (mentions obligatoires, TVA le cas échéant)</li>
                    <li>Respecter les conditions de paiement convenues avec le client</li>
                  </ul>
                </div>

                {/* 2.6 */}
                <div className="pl-4 border-l-2 border-[#6BCFCF]/50">
                  <h3 className="text-lg font-semibold text-[#6BCFCF] mb-2">2.6 Protection des données personnelles (RGPD)</h3>
                  <ul className="list-disc pl-6 mt-3 space-y-2 text-white/80">
                    <li>Respecter le Règlement Général sur la Protection des Données (RGPD)</li>
                    <li>N'utiliser les données client transmises par Moverz que dans le cadre strict de l'établissement du devis et de la prestation de déménagement</li>
                    <li>Ne pas revendre, transférer ou utiliser les données à d'autres fins (prospection, fichier commercial, etc.)</li>
                    <li>Supprimer les données client dans un délai raisonnable après la fin de la prestation (sauf obligations légales de conservation)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-3">Article 3 : Modalités de rémunération de Moverz</h2>
              <p>
                En contrepartie de la mise en relation et de la fourniture de dossiers qualifiés, le Partenaire s'engage à verser 
                à Moverz une commission selon les modalités suivantes :
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-white/80">
                <li><strong>Taux de commission :</strong> 10% HT sur le montant total du devis signé par le client (montant HT de la prestation de déménagement)</li>
                <li><strong>Déclenchement :</strong> La commission est due après confirmation du choix du client et versement des arrhes ou de l'acompte par le client</li>
                <li><strong>Facturation :</strong> Moverz émet une facture au Partenaire pour le montant de la commission</li>
                <li><strong>Paiement :</strong> Le paiement de la commission doit intervenir dans les 30 jours suivant l'émission de la facture</li>
              </ul>
              <p className="mt-4 text-white/75 text-sm">
                Note : Les modalités de rémunération peuvent faire l'objet d'un contrat commercial spécifique selon le volume ou les conditions négociées.
              </p>
            </div>

            {/* Article 4 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-3">Article 4 : Dossiers et mise en relation</h2>
              <p>Moverz s'engage à :</p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-white/80">
                <li>Transmettre au Partenaire des dossiers de déménagement qualifiés comprenant : inventaire, informations sur le logement (accès, étages, etc.)</li>
                <li>Centraliser les échanges entre le client et les déménageurs jusqu'au choix final du client</li>
                <li>Faciliter la mise en relation directe entre le client et le Partenaire choisi</li>
              </ul>
              <p className="mt-4">Le Partenaire reste libre de :</p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-white/80">
                <li>Accepter ou refuser un dossier sans justification</li>
                <li>Demander des précisions avant d'établir son devis</li>
                <li>Proposer une visite ou une visio si nécessaire pour affiner son estimation</li>
              </ul>
            </div>

            {/* Article 5 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-3">Article 5 : Responsabilité</h2>
              <p>
                <strong>Le Partenaire est seul responsable</strong> de la bonne exécution de la prestation de déménagement, 
                de la qualité du service rendu, et de tout litige ou dommage lié à la prestation.
              </p>
              <p className="mt-3 text-white/80">
                Moverz agit uniquement en qualité d'intermédiaire pour la mise en relation et n'intervient pas dans l'exécution 
                de la prestation de déménagement. Moverz ne saurait être tenu responsable des litiges commerciaux, des dommages 
                causés aux biens du client, ou de la non-exécution de la prestation par le Partenaire.
              </p>
            </div>

            {/* Article 6 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-3">Article 6 : Gestion des litiges clients</h2>
              <p>En cas de litige avec un client, le Partenaire s'engage à :</p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-white/80">
                <li>Répondre rapidement et de manière constructive aux réclamations du client</li>
                <li>Rechercher une solution amiable dans les meilleurs délais</li>
                <li>Tenir Moverz informé de l'évolution du dossier (pour suivi et statistiques qualité)</li>
                <li>Traiter les demandes d'indemnisation conformément aux conditions d'assurance et à la réglementation</li>
              </ul>
              <p className="mt-4 text-white/75 text-sm">
                En cas de litige récurrent ou grave mettant en cause la qualité de service du Partenaire, 
                Moverz se réserve le droit de suspendre temporairement ou définitivement l'accès du Partenaire au réseau.
              </p>
            </div>

            {/* Article 7 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-3">Article 7 : Manquements et sanctions</h2>
              <p>
                En cas de manquement grave ou répété aux présentes CGV-P (notamment : absence d'assurance, pratiques trompeuses, 
                non-respect des engagements clients, litiges récurrents, non-paiement de la commission), Moverz se réserve le droit de :
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-white/80">
                <li>Suspendre temporairement l'accès du Partenaire aux nouveaux dossiers</li>
                <li>Résilier définitivement le partenariat avec effet immédiat</li>
                <li>Engager des poursuites judiciaires en cas de préjudice causé à Moverz ou à ses clients</li>
              </ul>
            </div>

            {/* Article 8 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-3">Article 8 : Durée et résiliation</h2>
              <p>
                Le présent contrat est conclu pour une durée indéterminée. Il peut être résilié à tout moment par l'une ou l'autre 
                des parties, moyennant un préavis de 30 jours par courrier électronique.
              </p>
              <p className="mt-3 text-white/80">
                La résiliation n'affecte pas les dossiers en cours ni les commissions dues pour les prestations déjà réalisées.
              </p>
            </div>

            {/* Article 9 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-3">Article 9 : Modification des CGV-P</h2>
              <p>
                Moverz se réserve le droit de modifier les présentes CGV-P à tout moment. Toute modification sera communiquée 
                au Partenaire par email avec un préavis de 15 jours. La poursuite de l'utilisation de la plateforme après cette 
                date vaudra acceptation des nouvelles CGV-P.
              </p>
            </div>

            {/* Article 10 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-3">Article 10 : Loi applicable et juridiction</h2>
              <p>
                Les présentes CGV-P sont soumises au droit français. En cas de litige, et à défaut de solution amiable, 
                les tribunaux compétents seront ceux du ressort du siège social de GSLV EURL (La Rochelle, France).
              </p>
            </div>

            {/* Contact */}
            <div className="bg-[#6BCFCF]/10 border border-[#6BCFCF]/30 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
              <p className="text-white/90">
                Pour toute question relative aux présentes CGV-P, contactez-nous :
              </p>
              <ul className="mt-3 space-y-1 text-white/80">
                <li>Email : <a href="mailto:lucie@moverz.fr" className="text-[#6BCFCF] hover:underline">lucie@moverz.fr</a></li>
                <li>Calendly : <a href="https://calendly.com/lucie-moverz/30min" className="text-[#6BCFCF] hover:underline" target="_blank" rel="noopener noreferrer">Prendre rendez-vous</a></li>
              </ul>
            </div>

            {/* Mention finale */}
            <div className="text-center text-white/60 text-sm">
              <p>Dernière mise à jour : Janvier 2026</p>
              <p className="mt-2">GSLV EURL – SIREN 914499876 – RCS La Rochelle</p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
