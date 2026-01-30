import { CorridorPage, generateCorridorMetadata } from "@/components/templates/CorridorPage";

export const metadata = generateCorridorMetadata('rennes', 'Rennes', 'Saint-Malo');

export default function Page() {
  return (
    <CorridorPage
      originCitySlug="rennes"
      originCityName="Rennes"
      destination="Saint-Malo"
    />
  );
}
