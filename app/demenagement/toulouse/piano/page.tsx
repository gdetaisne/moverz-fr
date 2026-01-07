import { CityServicePage, generateCityServiceMetadata } from "@/components/templates/CityServicePage";

export const metadata = generateCityServiceMetadata({
  citySlug: "toulouse",
  serviceSlug: "piano",
  title: "Déménagement piano Toulouse : transport sécurisé, devis | Moverz",
  description:
    "Déménagement piano à Toulouse : piano droit ou à queue, accès, protections, assurance. Conseils + 5+ devis de pros pour un transport sécurisé.",
});

export default function Page() {
  return (
    <CityServicePage
      citySlug="toulouse"
      cityName="Toulouse"
      serviceSlug="piano"
      badge="Objet lourd"
      h1="Déménagement de piano à Toulouse"
      subtitle="Un piano est lourd, fragile et coûteux : mieux vaut une méthode et du matériel adaptés. Voici les points à vérifier pour un transport sécurisé (et des devis comparables)."
      sections={[
        {
          title: "Pourquoi un piano nécessite un spécialiste",
          paragraphs: [
            "Le risque n’est pas seulement la casse : c’est aussi l’impact sur le mécanisme, la finition, et les parties communes (escaliers, murs).",
            "Le bon prestataire prévoit l’accès, le matériel, et une protection adaptée au type de piano.",
          ],
          bullets: [
            "Poids élevé + centre de gravité délicat = risque de bascule.",
            "Accès (escaliers, portes étroites) = besoin d’une étude rapide.",
            "Assurance : vérifiez la valeur déclarée et les exclusions.",
          ],
        },
        {
          title: "Matériel et méthode : ce qui doit être prévu",
          paragraphs: [
            "Le transport se joue sur le matériel (sangles, chariot, protections) et sur l’organisation (itinéraire, stationnement, équipe).",
            "Pour un piano à queue, le démontage partiel et l’emballage sur mesure sont souvent nécessaires.",
          ],
          bullets: [
            "Housse/protection matelassée, sangles, chariot adapté.",
            "Monte-meuble possible si l’accès intérieur est trop risqué.",
            "Fixation sécurisée dans le véhicule (antichoc).",
          ],
        },
        {
          title: "Devis : les infos indispensables",
          paragraphs: [
            "Pour obtenir un devis fiable, décrivez le type de piano, les accès, et les contraintes (étage, ascenseur, stationnement).",
            "Avec Moverz, vous standardisez les infos et comparez des devis sur une base identique.",
          ],
          bullets: [
            "Piano droit / à queue / numérique lourd (précisez).",
            "Étages, largeur d’escalier/porte si particulier, distance camion → entrée.",
            "Date souhaitée et contraintes horaires.",
          ],
        },
        {
          title: "Après le transport : accordage et précautions",
          paragraphs: [
            "Après un déménagement, un accordage est souvent recommandé (le piano a subi vibrations et variations d’humidité).",
            "Prévoyez une période d’acclimatation avant accordage si votre logement est très différent (chauffage, humidité).",
          ],
          bullets: [
            "Attendre quelques jours avant accordage en général.",
            "Éviter de poser le piano contre une source de chaleur directe.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Combien coûte un déménagement de piano à Toulouse ?",
          answer:
            "Le prix dépend du type de piano, des étages et de l’accès. Un accès simple coûte moins cher qu’un transport avec escalier étroit ou monte-meuble. Le plus fiable est de demander plusieurs devis sur les mêmes infos.",
        },
        {
          question: "Faut-il un monte-meuble pour un piano ?",
          answer:
            "Pas toujours. Il est utile quand l’escalier ou les couloirs rendent le passage risqué. Le monte-meuble peut réduire la casse et gagner du temps.",
        },
        {
          question: "Dois-je faire accorder mon piano après le déménagement ?",
          answer:
            "Souvent oui. Un accordage après une phase d’acclimatation est recommandé, surtout si le piano a subi vibrations et variations d’humidité.",
        },
        {
          question: "Comment protéger un piano à queue ?",
          answer:
            "On démonte souvent certaines parties (selon modèle), puis on utilise une protection renforcée et un calage antichoc. La fixation dans le camion est essentielle.",
        },
        {
          question: "Est-ce assuré ?",
          answer:
            "Vérifiez au devis la valeur déclarée, la couverture pendant manutention et transport, et les exclusions. Ne vous contentez pas d’un prix bas sans détails.",
        },
        {
          question: "Puis-je comparer plusieurs devis gratuitement ?",
          answer:
            "Oui. Avec Moverz, vous pouvez recevoir 5+ devis standardisés et décider ensuite, sans engagement.",
        },
      ]}
    />
  );
}


