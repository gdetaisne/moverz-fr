import { HubQuartiersPage, generateHubQuartiersMetadata } from "@/components/templates/HubQuartiersPage";
import { cityData } from "@/lib/cityData";

const city = cityData['rouen'];

export const metadata = generateHubQuartiersMetadata('rouen', 'Rouen');

export default function QuartiersPage() {
  return (
    <HubQuartiersPage
      citySlug="rouen"
      cityName="Rouen"
      neighborhoods={city.neighborhoods}
    />
  );
}
