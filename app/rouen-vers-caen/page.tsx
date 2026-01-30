import { CorridorPage, generateCorridorMetadata } from "@/components/templates/CorridorPage";

export const metadata = generateCorridorMetadata('rouen', 'Rouen', 'Caen');

export default function Page() {
  return (
    <CorridorPage
      originCitySlug="rouen"
      originCityName="Rouen"
      destination="Caen"
    />
  );
}
