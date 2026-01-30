import { CorridorPage, generateCorridorMetadata } from "@/components/templates/CorridorPage";

export const metadata = generateCorridorMetadata('nice', 'Nice', 'Monaco');

export default function Page() {
  return (
    <CorridorPage
      originCitySlug="nice"
      originCityName="Nice"
      destination="Monaco"
    />
  );
}
