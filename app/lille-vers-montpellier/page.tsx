import { PremiumCorridorPage, generatePremiumCorridorMetadata } from "@/components/templates/PremiumCorridorPage";

export const metadata = generatePremiumCorridorMetadata('lille', 'montpellier');

export default function Page() {
  return <PremiumCorridorPage originSlug="lille" destinationSlug="montpellier" />;
}
