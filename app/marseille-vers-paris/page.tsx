import { PremiumCorridorPage, generatePremiumCorridorMetadata } from "@/components/templates/PremiumCorridorPage";

export const metadata = generatePremiumCorridorMetadata('marseille', 'paris');

export default function Page() {
  return <PremiumCorridorPage originSlug="marseille" destinationSlug="paris" />;
}
