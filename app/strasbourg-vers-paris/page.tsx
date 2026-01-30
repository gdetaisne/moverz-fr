import { CorridorPage, generateCorridorMetadata } from "@/components/templates/CorridorPage";

export const metadata = generateCorridorMetadata('strasbourg', 'Strasbourg', 'Paris');

export default function Page() {
  return (
    <CorridorPage
      originCitySlug="strasbourg"
      originCityName="Strasbourg"
      destination="Paris"
    />
  );
}
