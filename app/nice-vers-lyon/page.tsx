import { PremiumCorridorPage, generatePremiumCorridorMetadata } from "@/components/templates/PremiumCorridorPage";

export const metadata = generatePremiumCorridorMetadata('nice', 'lyon');

export default function Page() {
  return <PremiumCorridorPage originSlug="nice" destinationSlug="lyon" />;
}
