import { CorridorPage, generateCorridorMetadata } from "@/components/templates/CorridorPage";

export const metadata = generateCorridorMetadata('toulouse', 'Toulouse', 'Paris');

export default function Page() {
  return (
    <CorridorPage
      originCitySlug="toulouse"
      originCityName="Toulouse"
      destination="Paris"
    />
  );
}
