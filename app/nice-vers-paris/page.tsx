import { CorridorPage, generateCorridorMetadata } from "@/components/templates/CorridorPage";

export const metadata = generateCorridorMetadata('nice', 'Nice', 'Paris');

export default function Page() {
  return (
    <CorridorPage
      originCitySlug="nice"
      originCityName="Nice"
      destination="Paris"
    />
  );
}
