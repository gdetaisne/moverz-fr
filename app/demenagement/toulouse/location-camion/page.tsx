import { CityServicePage, generateCityServiceMetadata } from "@/components/templates/CityServicePage";

export const metadata = generateCityServiceMetadata({
  citySlug: "toulouse",
  serviceSlug: "location-camion",
  title: "Location camion déménagement Toulouse : volumes, prix & conseils | Moverz",
  description:
    "Location camion déménagement à Toulouse : quel volume choisir, prix, conditions (permis, caution), conseils chargement + alternative : comparer 5+ devis pros.",
});

export default function Page() {
  return (
    <CityServicePage
      citySlug="toulouse"
      cityName="Toulouse"
      serviceSlug="location-camion"
      badge="DIY"
      h1="Location de camion pour déménagement à Toulouse"
      subtitle="Vous voulez déménager en autonomie ? Voici comment choisir le bon utilitaire (volume, permis), éviter les pièges (assurance, caution) et garder une alternative simple si besoin."
      sections={[
        {
          title: "Quel volume d’utilitaire choisir ?",
          paragraphs: [
            "Le volume (m³) est le point clé. Trop petit = allers-retours (et coût/risque). Trop grand = conduite plus stressante et parking plus compliqué.",
            "En pratique, on raisonne par typologie de logement, puis on ajuste selon l’ameublement (canapé, électroménager, cave).",
          ],
          bullets: [
            "Studio / petit T1 : 10–12 m³ (souvent suffisant).",
            "T2 / T3 : 12–20 m³ selon volume réel.",
            "Maison : 20 m³+ (ou 2 véhicules).",
            "Astuce : mieux vaut 1 véhicule un peu plus grand que 2 trajets en centre-ville.",
          ],
        },
        {
          title: "Prix : ce qui fait vraiment varier la facture",
          paragraphs: [
            "Le prix dépend surtout de la durée, du kilométrage, de la période (week-end/été) et des options (assurance, diable, sangles).",
            "Pensez aussi au carburant et aux frais annexes : stationnement, péages, dépôt de garantie.",
          ],
          bullets: [
            "Week-end et fin de mois = souvent plus cher (demande plus forte).",
            "Aller simple : pratique mais parfois plus coûteux, et disponibilité variable.",
            "Assurance/franchise : comparez les garanties, pas uniquement le prix.",
          ],
        },
        {
          title: "Stationnement à Toulouse : le point sous-estimé",
          paragraphs: [
            "Le chargement/déchargement coûte du temps, surtout si vous devez vous garer loin. Anticiper le stationnement évite la précipitation et la casse.",
            "Selon le quartier, une autorisation ou une réservation d’emplacement peut être nécessaire (dépend des règles locales et du type de voie).",
          ],
          bullets: [
            "Choisissez un créneau hors heures de pointe si possible.",
            "Préparez un plan : ascenseur, cages d’escaliers, distance camion → porte.",
            "Protégez les parties communes (couvertures, coins).",
          ],
        },
        {
          title: "Alternative sans stress : comparer des devis pros (si vous hésitez)",
          paragraphs: [
            "Si vous hésitez entre “tout faire soi-même” et déléguer, demandez au moins des devis pour comparer.",
            "Avec Moverz, un seul dossier et des devis standardisés : vous décidez ensuite si le gain de temps vaut l’écart de prix.",
          ],
          bullets: [
            "Idéal si vous avez des meubles lourds, un étage sans ascenseur, ou une longue distance.",
            "Utile aussi pour sécuriser vos biens (assurance transport) et gagner une journée complète.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Quel permis faut-il pour louer un utilitaire à Toulouse ?",
          answer:
            "Dans la majorité des cas, le permis B suffit pour les utilitaires courants (jusqu’à 20 m³ selon les modèles). Vérifiez toujours le PTAC du véhicule auprès du loueur.",
        },
        {
          question: "Comment éviter un camion trop petit ?",
          answer:
            "Estimez votre volume en m³ (pas seulement en cartons). Si vous avez un canapé, un frigo et des meubles, prévoyez une marge : un seul trajet est souvent plus simple et moins risqué.",
        },
        {
          question: "Aller simple : bonne idée ?",
          answer:
            "Oui si vous faites une longue distance et ne voulez pas revenir. Mais le prix et la disponibilité varient beaucoup : comparez avant de valider.",
        },
        {
          question: "Quelles options sont vraiment utiles ?",
          answer:
            "Un diable et des sangles aident beaucoup. L’assurance est cruciale : regardez franchise, dommages, et exclusions. Les couvertures évitent la casse et protègent les parties communes.",
        },
        {
          question: "Quand vaut-il mieux passer par des déménageurs ?",
          answer:
            "Si vous avez des accès difficiles, des objets lourds/fragiles, ou une longue distance, les pros peuvent être plus rentables une fois le temps, la fatigue et les risques pris en compte.",
        },
        {
          question: "Puis-je demander des devis même si je pensais louer un camion ?",
          answer:
            "Oui. Comparer ne vous engage à rien : vous aurez une base chiffrée pour décider sereinement.",
        },
      ]}
    />
  );
}


