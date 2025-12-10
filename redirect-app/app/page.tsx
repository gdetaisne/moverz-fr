export default function RedirectFallback() {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="refresh" content="0;url=https://moverz.fr/" />
        <title>Redirection vers Moverz.fr</title>
      </head>
      <body style={{ 
        margin: 0, 
        padding: 0, 
        fontFamily: 'system-ui, sans-serif',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f4f8'
      }}>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h1 style={{ fontSize: '2rem', color: '#04163a', marginBottom: '1rem' }}>
            Redirection en cours...
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#4b5c6b', marginBottom: '1.5rem' }}>
            Vous allez être redirigé vers <strong>Moverz.fr</strong>
          </p>
          <a 
            href="https://moverz.fr/" 
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#2B7A78',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '0.5rem',
              fontWeight: '600',
              fontSize: '1rem'
            }}
          >
            Cliquez ici si la redirection ne fonctionne pas
          </a>
        </div>
      </body>
    </html>
  );
}


