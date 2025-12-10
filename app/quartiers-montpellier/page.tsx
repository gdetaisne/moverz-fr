import { HubQuartiersPage, generateHubQuartiersMetadata } from "@/components/templates/HubQuartiersPage";
import { cityData } from "@/lib/cityData";

const city = cityData['montpellier'];

export const metadata = generateHubQuartiersMetadata('montpellier', 'Montpellier');

export default function QuartiersPage() {
  return (
    <HubQuartiersPage
      citySlug="montpellier"
      cityName="Montpellier"
      neighborhoods={city.neighborhoods}
    />
  );
}
