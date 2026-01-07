import { CityServicePage, generateCityServiceMetadata } from "@/components/templates/CityServicePage";

export const metadata = generateCityServiceMetadata({
  citySlug: "rennes",
  serviceSlug: "location-camion",
  title: "Location camion déménagement Rennes : volumes, prix & conseils | Moverz",
  description:
    "Location camion déménagement à Rennes : quel volume choisir, prix, conditions (permis, caution), conseils stationnement + alternative : comparer 5+ devis pros.",
});

export default function Page() {
  return (
    <CityServicePage
      citySlug="rennes"
      cityName="Rennes"
      serviceSlug="location-camion"
      badge="DIY"
      h1="Location de camion pour déménagement à Rennes"
      subtitle="Vous voulez déménager en autonomie ? Choisir le bon utilitaire (volume, permis), éviter les pièges (assurance, caution) et gérer le stationnement."
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
          title: "Stationnement à Rennes : le point sous-estimé",
          paragraphs: [
            "Le chargement/déchargement coûte du temps, surtout si vous devez vous garer loin. Anticiper le stationnement évite la précipitation et la casse.",
            "Selon l’endroit, une autorisation/réservation d’emplacement peut être nécessaire (règles locales variables).",
          ],
          bullets: [
            "Repérez l’accès (porte, ascenseur, distance camion → entrée).",
            "Choisissez un créneau hors pointe si possible.",
            "Protégez les parties communes (couvertures, coins).",
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
          question: "Le stationnement peut-il augmenter la difficulté ?",
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


