"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Check, Copy, Mail } from "lucide-react";

type QuoteBridgeCardProps = {
  quoteUrl: string;
};

function getMailtoUrl(quoteUrl: string) {
  const subject = "Moverz — lien pour obtenir des devis";
  const body =
    `Bonjour,\\n\\n` +
    `Voici mon lien Moverz : ${quoteUrl}\\n\\n` +
    `Infos utiles (si besoin) : départ/arrivée, date, type de logement, contraintes d'accès.\\n\\n` +
    `Merci !`;
  return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function QuoteBridgeCard({ quoteUrl }: QuoteBridgeCardProps) {
  const [copied, setCopied] = useState(false);

  const mailtoUrl = useMemo(() => getMailtoUrl(quoteUrl), [quoteUrl]);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(quoteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // noop: clipboard may be blocked
    }
  };

  return (
    <div className="rounded-3xl bg-white border border-[#E6EEF2] shadow-[0_14px_50px_rgba(15,23,42,0.06)] p-6 md:p-7 space-y-5">
      {/* Header (clean, SaaS FR) */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/25 px-3 py-1 text-xs font-semibold text-[var(--color-text)] w-fit">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
          Service gratuit · Déménageurs vérifiés
        </div>

        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--color-text)]">
          Comparez des devis maintenant
        </h3>
        <p className="text-sm md:text-[15px] text-[var(--color-text-secondary)] leading-relaxed">
          Téléphone masqué, sans démarchage.
        </p>
      </div>

      {/* Choice (2 cards, not big buttons) */}
      <div className="space-y-3">
        <p className="text-sm font-semibold text-[var(--color-text)]">
          Envoyez-vous le lien par email (le plus simple)
        </p>

        <a
          href={mailtoUrl}
          className="group block rounded-2xl border border-[#DDE7ED] bg-white p-4 hover:border-[var(--color-accent)]/45 hover:shadow-sm transition-all"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-bg-dark)]/5 text-[var(--color-text)]">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-[var(--color-text)]">Email</p>
                <p className="text-xs text-[var(--color-text-secondary)]">Votre lien en 1 clic (pour continuer sur mobile)</p>
              </div>
            </div>
            <span className="rounded-full bg-[var(--color-accent)]/12 border border-[var(--color-accent)]/25 px-2.5 py-1 text-xs font-bold text-[var(--color-text)]">
              Recommandé
            </span>
          </div>

          <div className="mt-3 flex items-center justify-end text-xs font-semibold text-[var(--color-text)]/70 group-hover:text-[var(--color-text)]">
            Ouvrir votre app email <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </a>
      </div>

      {/* Checklist (light, not heavy UI) */}
      <div className="rounded-2xl border border-[#E6EEF2] bg-[#F8FBFC] p-4">
        <p className="text-xs font-semibold text-[var(--color-text)] mb-2">Les 4 infos indispensables</p>
        <div className="grid grid-cols-2 gap-2 text-xs text-[var(--color-text-secondary)]">
          {[
            "Ville de départ",
            "Ville d'arrivée",
            "Date souhaitée",
            "Type de logement / accès",
          ].map((label) => (
            <div key={label} className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-accent)]/12 text-[var(--color-accent)]">
                <Check className="h-3.5 w-3.5" />
              </span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle links (no big buttons) */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={onCopy}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-text)]/70 hover:text-[var(--color-text)] transition-colors"
        >
          <Copy className="h-4 w-4" />
          {copied ? "Lien copié" : "Copier le lien"}
        </button>
        <a
          href={quoteUrl}
          className="text-xs font-semibold text-[var(--color-accent)] hover:underline inline-flex items-center gap-1"
        >
          Continuer sur cet appareil <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}


