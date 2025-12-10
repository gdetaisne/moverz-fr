import { HubQuartiersPage, generateHubQuartiersMetadata } from "@/components/templates/HubQuartiersPage";
import { cityData } from "@/lib/cityData";

const city = cityData['strasbourg'];

export const metadata = generateHubQuartiersMetadata('strasbourg', 'Strasbourg');

export default function QuartiersPage() {
  return (
    <HubQuartiersPage
      citySlug="strasbourg"
      cityName="Strasbourg"
      neighborhoods={city.neighborhoods}
    />
  );
}
