import { PremiumCorridorPage, generatePremiumCorridorMetadata } from "@/components/templates/PremiumCorridorPage";

export const metadata = generatePremiumCorridorMetadata('toulouse', 'paris');

export default function Page() {
  return <PremiumCorridorPage originSlug="toulouse" destinationSlug="paris" />;
}
