import { CityServicePage, generateCityServiceMetadata } from "@/components/templates/CityServicePage";

export const metadata = generateCityServiceMetadata({
  citySlug: "nice",
  serviceSlug: "petit-demenagement",
  title: "Petit déménagement à Nice : transport petit volume & devis",
  description:
    "Petit déménagement à Nice (petit volume) : options, fourchettes de prix, accès, timing. comparez des devis comparables pros pour transporter quelques meubles/cartons.",
});

export default function Page() {
  return (
    <CityServicePage
      citySlug="nice"
      cityName="Nice"
      serviceSlug="petit-demenagement"
      badge="Petit volume"
      h1="Petit déménagement à Nice"
      subtitle="Quelques meubles, un studio, une colocation ? Les meilleures options pour un petit volume : rapide, économique, et sans mauvaise surprise."
      sections={[
        {
          title: "Qu’appelle-t-on “petit déménagement” ?",
          paragraphs: [
            "On parle de petit déménagement quand le volume est limité : quelques meubles, des cartons, un petit électroménager, ou un studio.",
            "Le piège : penser “petit volume = petit prix”. En réalité, les accès et le temps de manutention comptent énormément (étage, distance camion, stationnement).",
          ],
          bullets: [
            "Idéal pour studio/colocation ou transport ponctuel de meubles.",
            "Souvent compatible avec des créneaux plus flexibles.",
            "Bonne alternative à la location d’utilitaire + stress logistique.",
          ],
        },
        {
          title: "Les options les plus efficaces à Nice",
          paragraphs: [
            "Pour un petit volume, l’objectif est d’éviter de payer “comme un gros déménagement”, tout en gardant un service fiable.",
            "Comparer plusieurs devis aide à trouver un bon créneau et un prix juste, surtout si vous êtes flexible sur la date.",
          ],
          bullets: [
            "Formule économique : vous emballez, les pros transportent.",
            "Déménagement optimisé/groupé (selon période et prestataire).",
            "Main d’œuvre + transport : utile si l’accès est compliqué (escaliers).",
          ],
        },
        {
          title: "Comment payer moins sur un petit volume",
          paragraphs: [
            "Sur un petit déménagement, ce qui fait exploser le budget, c’est le temps perdu : stationnement compliqué, portage long, meubles pas prêts, démontage non anticipé.",
            "Un dossier clair et des infos complètes permettent d’éviter les suppléments “sur place”.",
          ],
          bullets: [
            "Emballez et étiquetez tout avant l’arrivée de l’équipe.",
            "Démontez les meubles simples (si possible) et regroupez la visserie.",
            "Anticipez le stationnement : moins de portage = moins d’heures facturées.",
            "Choisissez un jour de semaine si possible.",
          ],
        },
        {
          title: "Devis : quelles infos donner",
          paragraphs: [
            "Pour obtenir un prix juste, il faut un volume réaliste et une description des accès.",
            "Moverz standardise votre dossier et l’IA aide à estimer le volume pour des devis comparables.",
          ],
          bullets: [
            "Nombre de pièces + liste des meubles principaux (salon/chambre).",
            "Étages, ascenseur, distance camion → porte, contraintes de stationnement.",
            "Adresse départ/arrivée et date souhaitée (ou fourchette).",
          ],
        },
      ]}
      faqs={[
        {
          question: "Un petit déménagement peut-il être fait en 2–3 heures ?",
          answer:
            "Oui si le volume est faible et l’accès simple. Avec un étage sans ascenseur ou un stationnement difficile, le temps peut vite augmenter.",
        },
        {
          question: "Est-ce moins cher que louer un camion ?",
          answer:
            "Parfois oui, surtout si vous valorisez votre temps et évitez les imprévus (caution, assurance, fatigue). Demander des devis permet de trancher objectivement.",
        },
        {
          question: "Je transporte seulement 2–3 meubles : ça vaut le coup ?",
          answer:
            "Oui, surtout si les meubles sont lourds/fragiles ou si l’accès est compliqué. Le prix dépendra surtout du temps de manutention.",
        },
        {
          question: "Comment éviter les suppléments le jour J ?",
          answer:
            "Donnez un volume réaliste, décrivez précisément les accès et préparez tout en amont. Les surprises viennent souvent d’un volume sous-estimé ou d’un accès non mentionné.",
        },
        {
          question: "Puis-je comparer plusieurs devis gratuitement ?",
          answer:
            "Oui. Avec Moverz, vous remplissez un seul dossier et Comparez des devis comparables standardisés, sans engagement.",
        },
        {
          question: "Et si j’ai surtout besoin de portage ?",
          answer:
            "Regardez aussi “aide au déménagement à Nice” : main d’œuvre, matériel et options à la carte.",
        },
      ]}
    />
  );
}


