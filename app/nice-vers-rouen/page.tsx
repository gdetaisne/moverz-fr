import { PremiumCorridorPage, generatePremiumCorridorMetadata } from "@/components/templates/PremiumCorridorPage";

export const metadata = generatePremiumCorridorMetadata('nice', 'rouen');

export default function Page() {
  return <PremiumCorridorPage originSlug="nice" destinationSlug="rouen" />;
}
