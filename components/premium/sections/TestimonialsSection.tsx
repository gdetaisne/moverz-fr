import { Container } from "../Container";
import { SectionHeader } from "../SectionHeader";
import { TestimonialsBlock } from "../TestimonialsBlock";

export function TestimonialsSection() {
  return (
    <section className="bg-[rgb(var(--bg))] py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Témoignages"
          title="Ils ont déménagé avec Moverz"
          description="Des milliers de déménagements réussis, sans stress."
          className="mb-12"
        />
        <TestimonialsBlock />
      </Container>
    </section>
  );
}
