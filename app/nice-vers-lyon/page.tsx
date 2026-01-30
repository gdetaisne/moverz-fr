import { CorridorPage, generateCorridorMetadata } from "@/components/templates/CorridorPage";

export const metadata = generateCorridorMetadata('nice', 'Nice', 'Lyon');

export default function Page() {
  return (
    <CorridorPage
      originCitySlug="nice"
      originCityName="Nice"
      destination="Lyon"
    />
  );
}
