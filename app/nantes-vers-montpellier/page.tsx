import { PremiumCorridorPage, generatePremiumCorridorMetadata } from "@/components/templates/PremiumCorridorPage";

export const metadata = generatePremiumCorridorMetadata('nantes', 'montpellier');

export default function Page() {
  return <PremiumCorridorPage originSlug="nantes" destinationSlug="montpellier" />;
}
