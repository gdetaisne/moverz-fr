import { CityServicePage, generateCityServiceMetadata } from "@/components/templates/CityServicePage";

export const metadata = generateCityServiceMetadata({
  citySlug: "bordeaux",
  serviceSlug: "pas-cher",
  title: "Déménagement pas cher à Bordeaux : astuces + devis comparables",
  description:
    "Déménagement pas cher à Bordeaux : leviers concrets (dates, volume, formule) + des devis comparables comparables et sans spam. Payez moins sans sacrifier la fiabilité.",
});

export default function Page() {
  return (
    <CityServicePage
      citySlug="bordeaux"
      cityName="Bordeaux"
      serviceSlug="pas-cher"
      badge="Budget"
      h1="Déménagement pas cher à Bordeaux"
      subtitle="Réduire le prix sans se faire avoir : dates, volume, formule et comparaison de devis. Objectif : un déménagement fiable, au bon prix."
      sections={[
        {
          title: "Ce qui fait varier le prix à Bordeaux",
          paragraphs: [
            "Le tarif dépend surtout du volume (m³), des accès (étage, ascenseur, stationnement) et de la période (été, week-ends, fin de mois).",
            "À Bordeaux, le centre et certains immeubles anciens peuvent augmenter le temps de portage : un devis “pas cher” sans détails finit souvent par une surprise.",
          ],
          bullets: [
            "Période : semaine et période creuse = souvent moins cher.",
            "Accès : portage long / absence d’ascenseur = temps + main d’œuvre.",
            "Volume : trier avant de déménager réduit directement le coût.",
          ],
        },
        {
          title: "Formules économiques : le bon compromis",
          paragraphs: [
            "Pour payer moins, vous pouvez choisir une formule où vous faites une partie du travail (emballage/déballage).",
            "Le bon compromis dépend de votre temps, de votre condition physique, et des objets lourds (canapé, électroménager).",
          ],
          bullets: [
            "Éco : vous emballez, les pros transportent (souvent le meilleur compromis).",
            "Standard : protection + démontage/remontage + transport (souvent rentable en effort).",
            "Confort : tout inclus (utile si contraintes fortes).",
          ],
        },
        {
          title: "Comparer des devis (vraiment) pour payer moins",
          paragraphs: [
            "Comparer 2 devis “incomparables” ne sert à rien. Pour bien choisir, il faut que les déménageurs reçoivent exactement les mêmes infos (volume, accès, distance, date).",
            "Moverz standardise le dossier et l’IA aide à fiabiliser le volume pour des devis comparables, sans spam.",
          ],
          bullets: [
            "Même volume + mêmes accès = comparaison objective.",
            "Moins de devis sous-estimés (qui explosent le jour J).",
            "Vous gardez le contrôle : dossier anonyme.",
          ],
        },
        {
          title: "Astuces simples pour économiser",
          paragraphs: [
            "Quelques ajustements concrets font souvent économiser des centaines d’euros, surtout en période tendue.",
          ],
          bullets: [
            "Évitez fin de mois et week-end si possible.",
            "Triez avant : dons, vente, déchetterie (m³ en moins).",
            "Préparez tout prêt (cartons fermés, étiquetés) pour réduire le temps facturé.",
            "Anticipez le stationnement : moins de portage = moins de main d’œuvre.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Quand déménager moins cher à Bordeaux ?",
          answer:
            "Les jours de semaine et les périodes creuses sont souvent plus abordables. Juin–septembre et fin de mois sont plus demandés, donc plus chers.",
        },
        {
          question: "Pourquoi un devis “trop bas” est risqué ?",
          answer:
            "Souvent parce que le volume ou les accès sont sous-estimés. Le jour J, cela se transforme en suppléments ou en baisse de qualité. Exigez un devis clair et comparable.",
        },
        {
          question: "Le stationnement influence vraiment le prix ?",
          answer:
            "Oui. Si le camion ne peut pas se rapprocher, le portage augmente le temps sur place, donc le coût.",
        },
        {
          question: "Comment éviter les arnaques quand on cherche pas cher ?",
          answer:
            "Méfiez-vous des prix sans détails (assurance, conditions, accès). Comparez sur une base identique et vérifiez la transparence du devis.",
        },
        {
          question: "Puis-je obtenir plusieurs devis gratuitement ?",
          answer:
            "Oui. Vous pouvez demander des devis comparables via Moverz avec un seul dossier, sans engagement.",
        },
        {
          question: "Et si je n’ai qu’un petit volume ?",
          answer:
            "Regardez aussi la page “petit déménagement à Bordeaux” : sur petit volume, l’accès et le temps sur place font souvent la différence.",
        },
      ]}
    />
  );
}


