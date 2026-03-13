import { PremiumCorridorPage, generatePremiumCorridorMetadata } from "@/components/templates/PremiumCorridorPage";

export const metadata = generatePremiumCorridorMetadata('montpellier', 'rennes');

export default function Page() {
  return <PremiumCorridorPage originSlug="montpellier" destinationSlug="rennes" />;
}
