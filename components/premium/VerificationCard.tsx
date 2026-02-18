import { Shield, CheckCircle, Info } from "lucide-react";
import { Card } from "./Card";
import { Badge } from "./Badge";

const checks = [
  { label: "Score financier (Creditsafe + Pappers)", verified: true },
  { label: "Score juridique (Pappers Décisions)", verified: true },
  { label: "Score avis clients (Google Reviews)", verified: true },
  { label: "Licences & Assurances", verified: true },
];

export function VerificationCard() {
  return (
    <Card shadow className="p-6">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgb(var(--success))]/10">
            <Shield className="h-5 w-5 text-[rgb(var(--success))]" />
          </div>
          <div>
            <div className="text-2xl font-bold text-[rgb(var(--text))]">85/100</div>
            <div className="text-xs text-[rgb(var(--text-2))]">Score moyen</div>
          </div>
        </div>
        <Badge variant="verified">Vérifié</Badge>
      </div>

      <div className="mb-5 space-y-3">
        {checks.map((check, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <CheckCircle className="h-4 w-4 shrink-0 text-[rgb(var(--success))]" />
            <span className="text-[rgb(var(--text))]">{check.label}</span>
          </div>
        ))}
      </div>

      <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-4 py-2.5 text-sm font-medium text-[rgb(var(--text-2))] transition-colors hover:bg-[rgb(var(--border))]">
        <Info className="h-4 w-4" />
        Méthode de vérification
      </button>
    </Card>
  );
}
