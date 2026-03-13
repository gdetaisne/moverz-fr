"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function LabelMoverzError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[label-moverz]", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-md text-center">
        <h1 className="font-heading text-2xl font-bold mb-3" style={{ color: "var(--color-text)" }}>
          Oups, une erreur est survenue
        </h1>
        <p className="text-base mb-8" style={{ color: "var(--color-text-secondary)" }}>
          La page Label Moverz n&apos;a pas pu s&apos;afficher. Cela peut être temporaire (connexion,
          scripts tiers). Réessayez ou revenez plus tard.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white"
            style={{ background: "var(--color-accent)" }}
          >
            Réessayer
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold"
            style={{
              background: "white",
              color: "var(--color-text)",
              border: "1px solid var(--color-border)",
            }}
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
