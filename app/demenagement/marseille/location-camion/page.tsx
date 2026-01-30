import { CityServicePage, generateCityServiceMetadata } from "@/components/templates/CityServicePage";

export const metadata = generateCityServiceMetadata({
  citySlug: "marseille",
  serviceSlug: "location-camion",
  title: "Location camion déménagement Marseille : volumes, prix & conseils",
  description:
    "Location camion déménagement à Marseille : quel volume choisir, prix, conditions (permis, caution), conseils chargement + alternative : comparer 3 devis minimum pros.",
});

export default function Page() {
  return (
    <CityServicePage
      citySlug="marseille"
      cityName="Marseille"
      serviceSlug="location-camion"
      badge="DIY"
      h1="Location de camion pour déménagement à Marseille"
      subtitle="Vous voulez déménager en autonomie ? Voici comment choisir le bon utilitaire (volume, permis), éviter les pièges (assurance, caution) et garder une alternative simple si besoin."
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
            "Astuce : mieux vaut 1 trajet bien dimensionné que 2 trajets stressants.",
          ],
        },
        {
          title: "Prix : ce qui fait varier la facture",
          paragraphs: [
            "Le prix dépend de la durée, du kilométrage, de la période (week-end/été) et des options (assurance, diable, sangles).",
            "N’oubliez pas carburant, péages éventuels et dépôt de garantie.",
          ],
          bullets: [
            "Week-end et fin de mois = souvent plus cher.",
            "Aller simple : pratique mais disponibilité variable.",
            "Regardez franchise et garanties, pas seulement le prix affiché.",
          ],
        },
        {
          title: "Stationnement à Marseille : à anticiper absolument",
          paragraphs: [
            "Le chargement/déchargement coûte du temps, surtout si vous devez vous garer loin. Anticiper le stationnement évite la précipitation et la casse.",
            "Selon l’endroit, une autorisation/réservation d’emplacement peut être nécessaire (règles locales variables).",
          ],
          bullets: [
            "Choisissez un créneau hors heures de pointe si possible.",
            "Préparez un plan : ascenseur, cages d’escaliers, distance camion → porte.",
            "Protégez les parties communes (couvertures, coins).",
          ],
        },
        {
          title: "Alternative : comparer des devis pros (si vous hésitez)",
          paragraphs: [
            "Si vous hésitez entre “tout faire soi-même” et déléguer, demandez au moins des devis pour comparer.",
            "Moverz fournit une base chiffrée comparable pour décider sereinement.",
          ],
          bullets: [
            "Utile si étages, objets lourds/fragiles ou longue distance.",
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
          question: "Le stationnement peut-il augmenter le coût ?",
          answer:
            "Oui : portage plus long = plus de temps, donc plus de coût. Anticiper le stationnement est un gros levier d’efficacité.",
        },
        {
          question: "Puis-je comparer plusieurs devis gratuitement ?",
          answer:
            "Oui. Vous pouvez demander 3 devis minimum via Moverz avec un seul dossier, sans engagement.",
        },
      ]}
    />
  );
}


