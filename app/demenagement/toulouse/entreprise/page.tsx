import { CityServicePage, generateCityServiceMetadata } from "@/components/templates/CityServicePage";

export const metadata = generateCityServiceMetadata({
  citySlug: "toulouse",
  serviceSlug: "entreprise",
  title: "Déménagement d’entreprise à Toulouse : transfert bureaux, devis",
  description:
    "Déménagement d’entreprise à Toulouse : transfert de bureaux, informatique, archives. Méthode, minimisation d’arrêt, assurance + des devis comparables comparables via Moverz.",
});

export default function Page() {
  return (
    <CityServicePage
      citySlug="toulouse"
      cityName="Toulouse"
      serviceSlug="entreprise"
      badge="B2B"
      h1="Déménagement d’entreprise à Toulouse"
      subtitle="Transfert de bureaux, archives, informatique : organiser un déménagement pro sans rupture d’activité. Étapes, points de vigilance et devis comparables."
      sections={[
        {
          title: "Objectif #1 : minimiser l’arrêt d’activité",
          paragraphs: [
            "Un déménagement d’entreprise n’est pas qu’un transport : c’est un projet logistique. Le bon prestataire doit réduire le temps d’indisponibilité (et sécuriser matériel + données).",
            "Les interventions peuvent être planifiées sur des créneaux adaptés (soir, week-end) selon vos contraintes.",
          ],
          bullets: [
            "Planification détaillée (calendrier, jalons, responsabilités).",
            "Phasage : déménager équipe par équipe si nécessaire.",
            "Coordination avec syndic / immeuble (accès, ascenseurs, stationnement).",
          ],
        },
        {
          title: "Ce qui doit être cadré au devis (sinon : surprises)",
          paragraphs: [
            "Les devis B2B doivent préciser le périmètre exact : mobilier, postes informatiques, archives, équipements spécifiques, et la gestion des déchets.",
            "La sécurité (assurance, responsabilité) et la méthode (emballage, étiquetage, repérage) sont aussi importantes que le prix.",
          ],
          bullets: [
            "Inventaire / volume (m³) et zones sensibles (serveur, matériel fragile).",
            "Méthode d’étiquetage (poste → emplacement) pour gagner du temps à l’arrivée.",
            "Assurance : valeur déclarée, conditions de prise en charge, franchise.",
          ],
        },
        {
          title: "Archives et informatique : deux cas classiques",
          paragraphs: [
            "Les archives demandent souvent une confidentialité renforcée et un classement strict.",
            "L’informatique nécessite une organisation fine (déconnexion, protection, reconnexion) pour limiter les incidents.",
          ],
          bullets: [
            "Archives : numérotation, cartons adaptés, zones de stockage dédiées.",
            "Informatique : emballage antichoc, repérage, remise en place planifiée.",
            "Possibilité d’un stockage temporaire (garde-meuble) en phase de transition.",
          ],
        },
        {
          title: "Comparer des devis comparables sur une base identique",
          paragraphs: [
            "Le vrai risque est de comparer des devis incomplets. Pour décider, il faut des offres sur un même cahier des charges.",
            "Moverz vous aide à standardiser la demande et à recevoir des devis comparables, sans spam.",
          ],
          bullets: [
            "Un seul dossier, des devis standardisés.",
            "Moins de pression commerciale grâce au dossier anonyme.",
            "Plus simple pour arbitrer prix vs méthode vs assurance.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Combien de temps faut-il pour déménager des bureaux à Toulouse ?",
          answer:
            "Ça dépend du volume et de l’organisation. Une petite équipe peut déménager en une journée si tout est préparé. Pour des bureaux plus grands, on planifie souvent sur plusieurs phases pour éviter l’arrêt total.",
        },
        {
          question: "Peut-on déménager le week-end ou le soir ?",
          answer:
            "Oui, c’est courant en B2B pour réduire l’impact sur l’activité. Mentionnez vos contraintes dès la demande de devis.",
        },
        {
          question: "Comment protéger l’informatique et les données ?",
          answer:
            "Le plus important est la méthode : repérage, emballage adapté, et plan de remise en place. Vérifiez au devis ce qui est inclus (déconnexion/reconnexion ou non).",
        },
        {
          question: "Quelles assurances sont importantes ?",
          answer:
            "Assurance responsabilité civile pro + garantie marchandises transportées. Vérifiez la valeur déclarée et les exclusions (informatique, matériel spécifique).",
        },
        {
          question: "Est-ce que l’archivage peut être pris en charge ?",
          answer:
            "Oui, certains prestataires proposent la manutention et le stockage temporaire (garde-meuble). Précisez volume, confidentialité, et durée.",
        },
        {
          question: "Puis-je comparer plusieurs devis gratuitement ?",
          answer:
            "Oui. Vous pouvez demander des devis comparables via Moverz avec un seul dossier, sans engagement.",
        },
      ]}
    />
  );
}


