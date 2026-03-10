import { PremiumCorridorPage, generatePremiumCorridorMetadata } from "@/components/templates/PremiumCorridorPage";

export const metadata = generatePremiumCorridorMetadata('paris', 'toulouse');

export default function Page() {
  return <PremiumCorridorPage originSlug="paris" destinationSlug="toulouse" />;
}
