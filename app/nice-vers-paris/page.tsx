import { PremiumCorridorPage, generatePremiumCorridorMetadata } from "@/components/templates/PremiumCorridorPage";

export const metadata = generatePremiumCorridorMetadata('nice', 'paris');

export default function Page() {
  return <PremiumCorridorPage originSlug="nice" destinationSlug="paris" />;
}
