import { PremiumCorridorPage, generatePremiumCorridorMetadata } from "@/components/templates/PremiumCorridorPage";

export const metadata = generatePremiumCorridorMetadata('toulouse', 'lyon');

export default function Page() {
  return <PremiumCorridorPage originSlug="toulouse" destinationSlug="lyon" />;
}
