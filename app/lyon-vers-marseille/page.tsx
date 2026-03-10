import { PremiumCorridorPage, generatePremiumCorridorMetadata } from "@/components/templates/PremiumCorridorPage";

export const metadata = generatePremiumCorridorMetadata('lyon', 'marseille');

export default function Page() {
  return <PremiumCorridorPage originSlug="lyon" destinationSlug="marseille" />;
}
