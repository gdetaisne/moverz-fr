import { PremiumCorridorPage, generatePremiumCorridorMetadata } from "@/components/templates/PremiumCorridorPage";

export const metadata = generatePremiumCorridorMetadata('grenoble', 'toulouse');

export default function Page() {
  return <PremiumCorridorPage originSlug="grenoble" destinationSlug="toulouse" />;
}
