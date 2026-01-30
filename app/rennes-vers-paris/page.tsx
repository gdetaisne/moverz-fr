import { CorridorPage, generateCorridorMetadata } from "@/components/templates/CorridorPage";

export const metadata = generateCorridorMetadata('rennes', 'Rennes', 'Paris');

export default function Page() {
  return (
    <CorridorPage
      originCitySlug="rennes"
      originCityName="Rennes"
      destination="Paris"
    />
  );
}
