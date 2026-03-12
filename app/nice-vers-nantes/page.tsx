import { PremiumCorridorPage, generatePremiumCorridorMetadata } from "@/components/templates/PremiumCorridorPage";

export const metadata = generatePremiumCorridorMetadata('nice', 'nantes');

export default function Page() {
  return <PremiumCorridorPage originSlug="nice" destinationSlug="nantes" />;
}
