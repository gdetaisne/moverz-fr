import Script from "next/script";

// ID de mesure GA4 pour moverz.fr
const GA_ID = "G-YZJRJPKHWV";

export default function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
              // Cross-domain: conserver la session quand on part vers devis.moverz.fr
              allow_linker: true,
              linker: {
                domains: ['devis.moverz.fr']
              },
            });

            // Tracking clics (sans toucher tous les boutons)
            // - lead_click: clic vers devis.moverz.fr
            // - partenaires_click: clic vers /partenaires
            // - contact_click: clic tel: / mailto:
            // Utilise transport beacon pour survivre à la navigation.
            if (!window.__moverz_click_tracking_installed) {
              window.__moverz_click_tracking_installed = true;

              function safeText(el) {
                if (!el) return '';
                const t = (el.getAttribute && el.getAttribute('aria-label')) || el.textContent || '';
                return (t || '').trim().slice(0, 120);
              }

              function getQueryParam(url, key) {
                try {
                  return new URL(url, window.location.origin).searchParams.get(key) || '';
                } catch (e) {
                  return '';
                }
              }

              function getCookie(name) {
                try {
                  const m = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()\\[\\]\\\\\\/\\+^])/g, '\\\\$1') + '=([^;]*)'));
                  return m ? decodeURIComponent(m[1]) : '';
                } catch (e) {
                  return '';
                }
              }

              function track(eventName, params) {
                try {
                  if (typeof window.gtag !== 'function') return;
                  window.gtag('event', eventName, Object.assign({
                    transport_type: 'beacon',
                    page_location: window.location.href,
                    page_path: window.location.pathname,
                  }, params || {}));
                } catch (e) {}
              }

              document.addEventListener('click', function (e) {
                try {
                  const target = e.target;
                  if (!target) return;
                  const a = target.closest ? target.closest('a') : null;
                  if (!a) return;

                  const href = a.getAttribute('href') || '';
                  if (!href) return;

                  // éviter double-track si un composant track déjà
                  if (a.dataset && a.dataset.gaTracked === '1') return;

                  const isMail = href.startsWith('mailto:');
                  const isTel = href.startsWith('tel:');
                  const isPartenaires = href.startsWith('/partenaires') || href.startsWith('https://moverz.fr/partenaires');
                  const isDevis = href.includes('devis.moverz.fr');

                  if (!isMail && !isTel && !isPartenaires && !isDevis) return;

                  const fromParam = getQueryParam(href, 'from') || '';
                  const sourceParam = getQueryParam(href, 'source') || '';
                  const abPromise = getQueryParam(href, 'ab_promise') || getCookie('ab_promise') || '';

                  if (isDevis) {
                    track('lead_click', {
                      link_url: href,
                      link_text: safeText(a),
                      placement: fromParam || '',
                      source: sourceParam || '',
                      ab_promise: abPromise,
                    });
                    return;
                  }

                  if (isPartenaires) {
                    track('partenaires_click', {
                      link_url: href,
                      link_text: safeText(a),
                    });
                    return;
                  }

                  if (isMail || isTel) {
                    track('contact_click', {
                      link_url: href,
                      link_text: safeText(a),
                      contact_type: isMail ? 'email' : 'phone',
                    });
                    return;
                  }
                } catch (err) {
                  // no-op
                }
              }, { capture: true });
            }
          `,
        }}
      />
    </>
  );
}


