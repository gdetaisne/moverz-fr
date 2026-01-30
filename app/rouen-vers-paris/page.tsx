import { CorridorPage, generateCorridorMetadata } from "@/components/templates/CorridorPage";

export const metadata = generateCorridorMetadata('rouen', 'Rouen', 'Paris');

export default function Page() {
  return (
    <CorridorPage
      originCitySlug="rouen"
      originCityName="Rouen"
      destination="Paris"
    />
  );
}
