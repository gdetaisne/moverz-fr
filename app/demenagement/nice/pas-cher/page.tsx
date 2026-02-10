import { CityServicePage, generateCityServiceMetadata } from "@/components/templates/CityServicePage";

export const metadata = generateCityServiceMetadata({
  citySlug: "nice",
  serviceSlug: "pas-cher",
  title: "Déménagement pas cher à Nice : astuces + devis comparables",
  description:
    "Déménagement pas cher à Nice : leviers concrets (dates, volume, accès/monte-meuble) + des devis comparables comparables et sans spam. Payez moins sans sacrifier la fiabilité.",
});

export default function Page() {
  return (
    <CityServicePage
      citySlug="nice"
      cityName="Nice"
      serviceSlug="pas-cher"
      badge="Budget"
      h1="Déménagement pas cher à Nice"
      subtitle="Nice a ses particularités (stationnement, rues étroites, étages) : voici comment réduire le prix intelligemment, sans rogner sur la sécurité."
      sections={[
        {
          title: "Ce qui fait vraiment le prix à Nice",
          paragraphs: [
            "Le tarif dépend du volume (m³), des accès (étage, ascenseur, distance de portage) et de la période (été, week-ends, fin de mois).",
            "À Nice, le stationnement et les accès peuvent faire la différence : c’est souvent là que “ça chiffre” si ce n’est pas anticipé.",
          ],
          bullets: [
            "Accès difficiles : portage long, rues étroites, zones piétonnes.",
            "Étages sans ascenseur : plus de temps = plus de main d’œuvre.",
            "Haute saison : plus de demande = prix plus élevés.",
          ],
        },
        {
          title: "Formules économiques : le bon compromis",
          paragraphs: [
            "Pour payer moins, vous pouvez choisir une formule où vous faites une partie (emballage/déballage).",
            "Le meilleur compromis dépend de votre temps, de votre énergie et des contraintes d’accès.",
          ],
          bullets: [
            "Éco : vous emballez, les pros transportent (souvent le plus rentable).",
            "Standard : protection + démontage/remontage + transport.",
            "Confort : tout inclus (utile si contraintes fortes).",
          ],
        },
        {
          title: "Comparer des devis (sans piège) pour économiser",
          paragraphs: [
            "Comparer 2 devis “incomparables” ne sert à rien. Il faut que tout le monde parte des mêmes infos (volume, accès, date).",
            "Moverz standardise le dossier et l’IA aide à fiabiliser le volume pour des devis comparables, sans spam.",
          ],
          bullets: [
            "Même volume + mêmes accès = comparaison objective.",
            "Moins de devis sous-estimés (suppléments le jour J).",
            "Vous gardez le contrôle : dossier anonyme.",
          ],
        },
        {
          title: "Astuces simples pour payer moins à Nice",
          paragraphs: [
            "Les économies viennent souvent de la préparation : moins de volume, moins de temps sur place, meilleure date.",
          ],
          bullets: [
            "Évitez fin de mois et week-end si possible.",
            "Triez avant (m³ en moins = coût en moins).",
            "Préparez tout prêt (cartons fermés, étiquetés).",
            "Anticipez le stationnement : moins de portage = moins d’heures.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Quand déménager moins cher à Nice ?",
          answer:
            "Les jours de semaine et les périodes creuses sont souvent plus abordables. L’été et les fins de mois sont plus demandés, donc plus chers.",
        },
        {
          question: "Pourquoi un devis “trop bas” est risqué ?",
          answer:
            "Souvent parce que le volume ou les accès (portage, stationnement) sont sous-estimés. Cela peut créer des suppléments ou une baisse de qualité le jour J.",
        },
        {
          question: "Le monte-meuble peut-il réduire le prix ?",
          answer:
            "Parfois oui : il peut réduire le temps de manutention sur des accès très compliqués, même s’il a un coût. L’intérêt dépend du cas.",
        },
        {
          question: "Comment éviter les arnaques quand on cherche pas cher ?",
          answer:
            "Exigez un devis détaillé (accès, assurance, conditions) et comparez sur une base identique. Le “pas cher” doit être clair et fiable.",
        },
        {
          question: "Puis-je obtenir plusieurs devis gratuitement ?",
          answer:
            "Oui. Vous pouvez demander des devis comparables via Moverz avec un seul dossier, sans engagement.",
        },
        {
          question: "Et si je n’ai qu’un petit volume ?",
          answer:
            "Regardez aussi “petit déménagement à Nice” : sur petit volume, les accès et le temps sur place font souvent la différence.",
        },
      ]}
    />
  );
}


