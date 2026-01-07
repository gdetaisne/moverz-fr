import { CityServicePage, generateCityServiceMetadata } from "@/components/templates/CityServicePage";

export const metadata = generateCityServiceMetadata({
  citySlug: "strasbourg",
  serviceSlug: "location-camion",
  title: "Location camion déménagement Strasbourg : volumes, prix & conseils | Moverz",
  description:
    "Location camion déménagement à Strasbourg : quel volume choisir, prix, conditions (permis, caution), conseils centre-ville/tram + alternative : comparer 5+ devis pros.",
});

export default function Page() {
  return (
    <CityServicePage
      citySlug="strasbourg"
      cityName="Strasbourg"
      serviceSlug="location-camion"
      badge="DIY"
      h1="Location de camion pour déménagement à Strasbourg"
      subtitle="Vous voulez déménager en autonomie ? Choisir le bon utilitaire (volume, permis), éviter les pièges (assurance, caution) et gérer les contraintes du centre-ville."
      sections={[
        {
          title: "Quel volume d’utilitaire choisir ?",
          paragraphs: [
            "Le volume (m³) est le point clé. Trop petit = allers-retours. Trop grand = conduite et stationnement plus difficiles.",
            "On part souvent de la typologie de logement, puis on ajuste selon l’ameublement (canapé, électroménager, cave).",
          ],
          bullets: [
            "Studio / petit T1 : 10–12 m³.",
            "T2 / T3 : 12–20 m³ selon volume réel.",
            "Maison : 20 m³+ (ou 2 véhicules).",
            "Astuce : un seul trajet bien dimensionné est souvent plus simple.",
          ],
        },
        {
          title: "Conduite et accès à Strasbourg : ce qui change la donne",
          paragraphs: [
            "Le centre-ville, les sens uniques et le réseau de tram peuvent rendre certains itinéraires plus complexes avec un utilitaire.",
            "Anticiper l’accès et le stationnement évite de perdre du temps (et de la casse).",
          ],
          bullets: [
            "Repérez l’itinéraire et l’adresse exacte de chargement/déchargement.",
            "Choisissez un créneau hors pointe si possible.",
            "Protégez parties communes (couvertures, coins) avant de commencer.",
          ],
        },
        {
          title: "Prix : ce qui fait varier la facture",
          paragraphs: [
            "Le prix dépend de la durée, du kilométrage, de la période (week-end/été/rentrée) et des options (assurance, diable, sangles).",
            "N’oubliez pas carburant, péages éventuels et dépôt de garantie.",
          ],
          bullets: [
            "Week-end et fin de mois = souvent plus cher.",
            "Aller simple : pratique mais disponibilité variable.",
            "Regardez franchise et garanties, pas seulement le prix affiché.",
          ],
        },
        {
          title: "Alternative : comparer des devis pros (si vous hésitez)",
          paragraphs: [
            "Si vous hésitez entre “tout faire soi-même” et déléguer, demandez des devis pour comparer.",
            "Moverz vous donne une base chiffrée comparable pour décider sereinement.",
          ],
          bullets: [
            "Utile si étages, objets lourds/fragiles ou accès délicat.",
            "Assurance transport + gain de temps = souvent rentable.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Quel permis faut-il pour louer un utilitaire ?",
          answer:
            "Souvent le permis B suffit pour les utilitaires courants. Vérifiez toujours le PTAC et les conditions du loueur.",
        },
        {
          question: "Aller simple : bonne idée ?",
          answer:
            "Oui sur longue distance. Mais le prix et la disponibilité varient : comparez avant de valider.",
        },
        {
          question: "Quelles options sont vraiment utiles ?",
          answer:
            "Diable + sangles aident beaucoup. L’assurance est critique : regardez franchise et exclusions. Les couvertures protègent meubles et parties communes.",
        },
        {
          question: "Quand vaut-il mieux passer par des déménageurs ?",
          answer:
            "Quand l’accès est compliqué, que vous avez des objets lourds/fragiles, ou une longue distance. Les pros peuvent être plus rentables une fois les risques et le temps pris en compte.",
        },
        {
          question: "Le centre-ville peut-il augmenter la difficulté ?",
          answer:
            "Oui : stationnement et portage peuvent augmenter le temps sur place. Anticiper l’accès est un gros levier d’efficacité.",
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


