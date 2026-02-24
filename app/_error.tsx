'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-4xl font-bold mb-4" style={{ color: "var(--color-text)" }}>
          Une erreur est survenue
        </h1>
        <p className="text-base mb-8" style={{ color: "var(--color-text-secondary)" }}>
          Nous nous excusons pour la gêne occasionnée.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300"
            style={{ background: "var(--color-accent)" }}
          >
            Réessayer
          </button>
          <a
            href="/"
            className="px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            style={{ 
              color: "var(--color-text)",
              border: "1px solid var(--color-border)"
            }}
          >
            Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
}
