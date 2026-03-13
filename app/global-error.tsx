'use client';

/**
 * Gestion des erreurs au niveau du root layout (500, erreurs fatales).
 * Remplace le layout principal en cas d'erreur - doit inclure html et body.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="fr">
      <body>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          <div style={{ maxWidth: '28rem', textAlign: 'center' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
              Une erreur est survenue
            </h1>
            <p style={{ marginBottom: '1.5rem', color: '#666' }}>
              Nous nous excusons pour la gêne occasionnée.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => reset()}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  fontWeight: 600,
                  color: 'white',
                  background: '#0ea5e9',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Réessayer
              </button>
              <a
                href="/"
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  fontWeight: 600,
                  color: '#333',
                  border: '1px solid #ddd',
                  textDecoration: 'none',
                }}
              >
                Retour à l&apos;accueil
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
