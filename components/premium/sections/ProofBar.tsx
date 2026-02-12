import { Shield, PhoneOff, FileCheck } from "lucide-react";
import { Container } from "../Container";

const proofs = [
  {
    icon: PhoneOff,
    text: "Numéro masqué",
  },
  {
    icon: PhoneOff,
    text: "Aucun appel",
  },
  {
    icon: Shield,
    text: "Entreprises vérifiées (assurance + licence + solvabilité)",
  },
];

export function ProofBar() {
  return (
    <section className="border-y border-[rgb(var(--border))] bg-[rgb(var(--surface))] py-6">
      <Container>
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-12">
          {proofs.map((proof, index) => (
            <div key={index} className="flex items-center gap-3 text-sm text-[rgb(var(--text-2))]">
              <proof.icon className="h-5 w-5 shrink-0 text-[rgb(var(--accent-2))]" />
              <span className="font-medium">{proof.text}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
