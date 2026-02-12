import { Container } from "../Container";
import { SectionHeader } from "../SectionHeader";
import { FAQAccordion } from "../FAQAccordion";

export function FAQSection() {
  return (
    <section className="bg-[rgb(var(--surface))] py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Questions fréquentes"
          title="Tout ce que vous devez savoir"
          className="mb-12"
        />
        <div className="mx-auto max-w-3xl">
          <FAQAccordion />
        </div>
      </Container>
    </section>
  );
}
