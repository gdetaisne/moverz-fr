import { PremiumCorridorPage, generatePremiumCorridorMetadata } from "@/components/templates/PremiumCorridorPage";

export const metadata = generatePremiumCorridorMetadata('clermont-ferrand', 'lyon');

export default function Page() {
  return <PremiumCorridorPage originSlug="clermont-ferrand" destinationSlug="lyon" />;
}
