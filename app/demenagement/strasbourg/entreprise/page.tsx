import { CityServicePage, generateCityServiceMetadata } from "@/components/templates/CityServicePage";

export const metadata = generateCityServiceMetadata({
  citySlug: "strasbourg",
  serviceSlug: "entreprise",
  title: "Déménagement d’entreprise à Strasbourg : transfert bureaux, devis | Moverz",
  description:
    "Déménagement d’entreprise à Strasbourg : transfert de bureaux, informatique, archives. Méthode, minimisation d’arrêt, assurance + 5+ devis comparables via Moverz.",
});

export default function Page() {
  return (
    <CityServicePage
      citySlug="strasbourg"
      cityName="Strasbourg"
      serviceSlug="entreprise"
      badge="B2B"
      h1="Déménagement d’entreprise à Strasbourg"
      subtitle="Transfert de bureaux, archives, informatique : organiser un déménagement pro sans rupture d’activité. Étapes, points de vigilance et devis comparables."
      sections={[
        {
          title: "Objectif #1 : minimiser l’arrêt d’activité",
          paragraphs: [
            "Un déménagement d’entreprise est un projet logistique : il faut réduire le temps d’indisponibilité et sécuriser le matériel (et parfois les données).",
            "Selon vos contraintes, l’intervention peut se planifier sur des créneaux adaptés (soir, week-end).",
          ],
          bullets: [
            "Planification détaillée (rétro-planning, responsabilités).",
            "Phasage (équipe par équipe) si besoin.",
            "Coordination accès/ascenseurs/stationnement avec l’immeuble.",
          ],
        },
        {
          title: "Ce qui doit être cadré au devis",
          paragraphs: [
            "Les devis B2B doivent préciser le périmètre : mobilier, postes informatiques, archives, équipements spécifiques, gestion des déchets.",
            "La méthode (emballage, repérage) et l’assurance sont aussi importantes que le prix.",
          ],
          bullets: [
            "Inventaire / volume (m³) + zones sensibles (serveur, matériel fragile).",
            "Méthode d’étiquetage (poste → emplacement) pour accélérer la remise en place.",
            "Assurance : valeur déclarée, exclusions, franchise.",
          ],
        },
        {
          title: "Archives et informatique : deux cas fréquents",
          paragraphs: [
            "Les archives demandent confidentialité et classement strict.",
            "L’informatique nécessite une organisation fine (déconnexion, protection, remise en place).",
          ],
          bullets: [
            "Archives : numérotation, cartons adaptés, zones dédiées.",
            "Informatique : emballage antichoc, repérage, tests à l’arrivée.",
            "Stockage temporaire possible (garde-meuble) en phase de transition.",
          ],
        },
        {
          title: "Comparer 5+ devis sur une base identique",
          paragraphs: [
            "La comparaison n’a de valeur que si les offres sont sur le même cahier des charges.",
            "Moverz standardise la demande et vous permet de recevoir des devis comparables, sans spam.",
          ],
          bullets: [
            "Un seul dossier, des devis structurés.",
            "Moins de pression commerciale (dossier anonyme).",
            "Arbitrage plus simple : prix vs méthode vs assurance.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Combien de temps faut-il pour déménager des bureaux ?",
          answer:
            "Ça dépend du volume et de l’organisation. Une petite équipe peut déménager en une journée si tout est préparé. Pour plus grand, on planifie souvent en phases.",
        },
        {
          question: "Peut-on déménager le week-end ou le soir ?",
          answer:
            "Oui, c’est courant en B2B pour limiter l’impact sur l’activité. Mentionnez vos contraintes dès la demande de devis.",
        },
        {
          question: "Comment protéger l’informatique ?",
          answer:
            "Méthode + repérage : emballage adapté, étiquetage, plan de remise en place. Vérifiez au devis ce qui est inclus (déconnexion/reconnexion ou non).",
        },
        {
          question: "Quelles assurances sont importantes ?",
          answer:
            "Responsabilité civile pro + garantie marchandises transportées. Vérifiez valeur déclarée et exclusions (informatique, matériel spécifique).",
        },
        {
          question: "Peut-on inclure du stockage temporaire ?",
          answer:
            "Oui, certains prestataires proposent garde-meuble/stockage. Précisez volume, confidentialité et durée estimée.",
        },
        {
          question: "Puis-je comparer plusieurs devis gratuitement ?",
          answer:
            "Oui. Vous pouvez demander 5+ devis via Moverz avec un seul dossier, sans engagement.",
        },
      ]}
    />
  );
}


