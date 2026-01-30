import { CorridorPage, generateCorridorMetadata } from "@/components/templates/CorridorPage";

export const metadata = generateCorridorMetadata('rouen', 'Rouen', 'Amiens');

export default function Page() {
  return (
    <CorridorPage
      originCitySlug="rouen"
      originCityName="Rouen"
      destination="Amiens"
    />
  );
}
