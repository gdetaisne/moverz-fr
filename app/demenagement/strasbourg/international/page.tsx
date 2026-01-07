import { CityServicePage, generateCityServiceMetadata } from "@/components/templates/CityServicePage";

export const metadata = generateCityServiceMetadata({
  citySlug: "strasbourg",
  serviceSlug: "international",
  title: "Déménagement international depuis Strasbourg : Europe/Allemagne, devis | Moverz",
  description:
    "Déménagement international depuis/vers Strasbourg : Europe, Allemagne, formalités, assurance, stockage. Conseils + 5+ devis comparables via Moverz.",
});

export default function Page() {
  return (
    <CityServicePage
      citySlug="strasbourg"
      cityName="Strasbourg"
      serviceSlug="international"
      badge="International"
      h1="Déménagement international depuis Strasbourg"
      subtitle="Strasbourg est une ville très européenne : déménager vers/depuis l’Allemagne ou l’Europe demande surtout une bonne organisation (accès, timing, assurance). Voici l’essentiel + des devis comparables."
      sections={[
        {
          title: "Pourquoi l’international est un cas à part",
          paragraphs: [
            "Même en Europe, un déménagement transfrontalier implique des contraintes supplémentaires : coordination, documents, assurances, et parfois des règles d’accès différentes.",
            "La clé est un devis transparent et une méthode claire (volume, accès, dates, livraison).",
          ],
          bullets: [
            "Organisation : dates et créneaux côté départ/arrivée.",
            "Assurance : couverture transport + manutention.",
            "Stockage temporaire : utile si dates incertaines.",
          ],
        },
        {
          title: "Europe (dont Allemagne) : le routier est souvent la norme",
          paragraphs: [
            "Pour l’Allemagne et les pays proches, le transport routier est généralement le plus simple.",
            "Un devis sérieux précise ce qui est inclus (emballage, démontage, protections, délais, assurance).",
          ],
          bullets: [
            "Routier : flexible et rapide pour Europe proche.",
            "Groupage possible selon période (si volume compatible).",
            "Accès : anticipez stationnement et portage des deux côtés.",
          ],
        },
        {
          title: "Documents et formalités : ce qu’il faut anticiper",
          paragraphs: [
            "Selon la destination, des documents peuvent être demandés (inventaire, justificatifs).",
            "Même en UE, une bonne préparation évite des retards et incompréhensions.",
          ],
          bullets: [
            "Inventaire simplifié (utile aussi pour l’assurance).",
            "Valeur déclarée des biens pour la couverture.",
            "Contraintes locales d’accès/horaires côté arrivée.",
          ],
        },
        {
          title: "Comparer des devis (sans perdre du temps)",
          paragraphs: [
            "La comparaison n’a de valeur que si les offres sont comparables : même volume, même destination, même niveau de service.",
            "Moverz vous aide à standardiser votre dossier pour obtenir des devis plus lisibles, sans spam.",
          ],
          bullets: [
            "Un seul dossier, plusieurs offres structurées.",
            "Moins de flou sur ce qui est inclus (assurance, délais, accès).",
            "Vous gardez le contrôle : dossier anonyme.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Strasbourg → Allemagne : est-ce considéré “international” ?",
          answer:
            "Oui au sens transfrontalier. Même si c’est en Europe et souvent en routier, il faut coordonner accès, timing, assurance et parfois des règles locales différentes.",
        },
        {
          question: "Quel mode de transport choisir ?",
          answer:
            "Pour l’Europe proche, le routier est généralement le plus simple. Pour des destinations lointaines, on peut passer au maritime/aérien selon volume et urgence.",
        },
        {
          question: "Que couvre l’assurance ?",
          answer:
            "Ça dépend du contrat. Vérifiez valeur déclarée, exclusions, et couverture sur toutes les étapes (manutention, transport, livraison).",
        },
        {
          question: "Dois-je faire un inventaire ?",
          answer:
            "C’est recommandé : cela aide à la fois à l’assurance et à la clarté du devis.",
        },
        {
          question: "Puis-je stocker mes affaires en attendant ?",
          answer:
            "Oui, un garde-meuble temporaire peut être utile si dates incertaines. Indiquez la durée estimée et le niveau d’accès souhaité.",
        },
        {
          question: "Puis-je comparer plusieurs devis gratuitement ?",
          answer:
            "Oui. Avec Moverz, vous pouvez demander 5+ devis comparables via un seul dossier, sans engagement.",
        },
      ]}
    />
  );
}


