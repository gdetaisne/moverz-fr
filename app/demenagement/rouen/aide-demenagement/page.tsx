import { CityServicePage, generateCityServiceMetadata } from "@/components/templates/CityServicePage";

export const metadata = generateCityServiceMetadata({
  citySlug: "rouen",
  serviceSlug: "aide-demenagement",
  title: "Aide au déménagement à Rouen : main d’œuvre, matériel, devis | Moverz",
  description:
    "Aide au déménagement à Rouen : porteurs, manutention, monte-meuble, matériel. Conseils + 3 à 5 devis comparables pour une aide à la carte, sans spam.",
});

export default function Page() {
  return (
    <CityServicePage
      citySlug="rouen"
      cityName="Rouen"
      serviceSlug="aide-demenagement"
      badge="À la carte"
      h1="Aide au déménagement à Rouen"
      subtitle="Besoin d’un coup de main plutôt qu’un déménagement complet ? Main d’œuvre, manutention, monte-meuble, matériel : comment choisir et obtenir un devis clair."
      sections={[
        {
          title: "Les 3 types d’aide les plus demandés",
          paragraphs: [
            "Beaucoup de personnes cherchent une aide ponctuelle : porter, charger/décharger, ou gérer un accès compliqué.",
            "À Rouen, les accès (rues étroites, stationnement) peuvent rendre un renfort utile même pour un petit volume.",
          ],
          bullets: [
            "Main d’œuvre (porteurs) : chargement/déchargement, portage, protection des meubles.",
            "Matériel : diable, sangles, couvertures, chariots.",
            "Accès difficiles : monte-meuble, planification, stationnement.",
          ],
        },
        {
          title: "Monte-meuble : quand c’est pertinent",
          paragraphs: [
            "Le monte-meuble est utile dès que l’escalier devient le goulot d’étranglement (meubles volumineux, étages élevés, couloirs étroits).",
            "C’est souvent moins risqué (casse, blessure) et plus rapide que de forcer le passage à l’intérieur.",
          ],
          bullets: [
            "Meubles impossibles à tourner dans la cage d’escalier.",
            "Objets lourds/fragiles (électroménager, piano, vitrines).",
            "Gain de temps si le portage est long (camion loin, absence d’ascenseur).",
          ],
        },
        {
          title: "Comment obtenir un tarif juste",
          paragraphs: [
            "Pour une aide à la carte, le coût dépend surtout du temps sur place et des accès.",
            "La clé : description précise (étages, ascenseur, distance camion → porte) + volume réaliste.",
          ],
          bullets: [
            "Listez les objets lourds et les meubles à démonter.",
            "Précisez si vous avez besoin d’un camion ou seulement de porteurs.",
            "Anticipez le stationnement : moins d’allers-retours = moins d’heures facturées.",
          ],
        },
        {
          title: "Comparer des devis sans spam",
          paragraphs: [
            "Même pour une aide partielle, comparer plusieurs devis aide à trouver le bon compromis prix/fiabilité.",
            "Moverz standardise votre demande et vous permet de recevoir des propositions sur une base identique.",
          ],
          bullets: [
            "Un seul dossier, plusieurs offres.",
            "Devis comparables (mêmes infos, mêmes accès).",
            "Vous gardez le contrôle : pas de pression commerciale.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Puis-je demander uniquement des porteurs (sans camion) ?",
          answer:
            "Oui, selon le prestataire. Indiquez si vous avez déjà un véhicule ou si vous avez besoin uniquement de main d’œuvre.",
        },
        {
          question: "Combien de personnes faut-il ?",
          answer:
            "Ça dépend du volume et des objets lourds. Pour un petit volume, 2 personnes suffisent souvent. Avec des étages ou des meubles lourds, 3–4 peuvent être plus efficaces (moins de temps).",
        },
        {
          question: "Le monte-meuble est-il obligatoire ?",
          answer:
            "Non. Il devient pertinent quand l’escalier ou les accès intérieurs créent un risque ou une perte de temps majeure.",
        },
        {
          question: "Comment réduire le coût ?",
          answer:
            "Préparez tout (cartons fermés, meubles démontés si possible, couloirs dégagés) et anticipez le stationnement. Le temps sur place est souvent le principal facteur.",
        },
        {
          question: "Est-ce que l’aide inclut l’assurance ?",
          answer:
            "Ça dépend de la prestation. Vérifiez au devis ce qui est couvert (casse, responsabilité) et les conditions.",
        },
        {
          question: "Puis-je comparer plusieurs devis gratuitement ?",
          answer:
            "Oui. Avec Moverz, vous pouvez recevoir 3 à 5 devis standardisés et décider ensuite, sans engagement.",
        },
      ]}
    />
  );
}


