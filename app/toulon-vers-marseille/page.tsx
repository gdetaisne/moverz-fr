import { PremiumCorridorPage, generatePremiumCorridorMetadata } from "@/components/templates/PremiumCorridorPage";

export const metadata = generatePremiumCorridorMetadata('toulon', 'marseille');

export default function Page() {
  return <PremiumCorridorPage originSlug="toulon" destinationSlug="marseille" />;
}
