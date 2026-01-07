import { CityServicePage, generateCityServiceMetadata } from "@/components/templates/CityServicePage";

export const metadata = generateCityServiceMetadata({
  citySlug: "rennes",
  serviceSlug: "international",
  title: "Déménagement international depuis Rennes : Europe/monde, devis | Moverz",
  description:
    "Déménagement international depuis/vers Rennes : modes de transport, formalités, assurance, stockage. Conseils + 3 à 5 devis comparables via Moverz.",
});

export default function Page() {
  return (
    <CityServicePage
      citySlug="rennes"
      cityName="Rennes"
      serviceSlug="international"
      badge="International"
      h1="Déménagement international depuis Rennes"
      subtitle="Un déménagement international demande une bonne organisation (transport, documents, assurance). Voici l’essentiel pour partir/arriver sereinement depuis Rennes."
      sections={[
        {
          title: "Pourquoi l’international est un cas à part",
          paragraphs: [
            "Un déménagement international implique souvent plus de coordination : délais, documentation, assurance, et parfois du stockage temporaire.",
            "La clé est un devis transparent et une méthode claire (volume, accès, dates, livraison).",
          ],
          bullets: [
            "Organisation : dates et créneaux côté départ/arrivée.",
            "Assurance : couverture transport + manutention.",
            "Stockage temporaire : utile si dates incertaines.",
          ],
        },
        {
          title: "Modes de transport : routier, maritime, aérien",
          paragraphs: [
            "Le choix dépend de la destination, du volume et de l’urgence. Pour l’Europe, le routier est souvent le plus simple.",
            "Pour des destinations lointaines, on peut passer par du maritime ou de l’aérien selon les contraintes.",
          ],
          bullets: [
            "Routier : flexible pour Europe proche.",
            "Maritime : adapté aux gros volumes sur longue distance.",
            "Aérien : rapide pour petits volumes/urgence, mais plus coûteux.",
          ],
        },
        {
          title: "Documents et formalités : ce qu’il faut anticiper",
          paragraphs: [
            "Selon la destination, des documents peuvent être demandés (inventaire, justificatifs).",
            "Une bonne préparation évite des retards et incompréhensions.",
          ],
          bullets: [
            "Inventaire (utile aussi pour l’assurance).",
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
          question: "Combien de temps à l’avance faut-il prévoir ?",
          answer:
            "Plus vous anticipez, plus vous avez de choix sur les dates et les prix. Pour l’international, prévoir plusieurs semaines est généralement plus confortable.",
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
            "Oui. Avec Moverz, vous pouvez demander 3 à 5 devis comparables via un seul dossier, sans engagement.",
        },
        {
          question: "Quel mode de transport choisir ?",
          answer:
            "Pour l’Europe, le routier est souvent le plus simple. Pour plus loin, maritime/aérien selon volume, délais et budget.",
        },
      ]}
    />
  );
}


