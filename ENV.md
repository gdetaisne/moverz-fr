# Environment variables (moverz.fr)

Create a `.env.local` (not committed) with:

```
SITE_URL=https://moverz.fr
NEXT_PUBLIC_BACKOFFICE_URL=https://moverz-backoffice.gslv.cloud
```

Notes:
- `NEXT_PUBLIC_BACKOFFICE_URL` is normalized (trim + optional trailing `/api` or `/public` removed).
- Required for `/confirm-email`.

## Tracking bots IA (optionnel)

Le middleware détecte certains user-agents (ChatGPT/Perplexity/Claude, etc.) et peut envoyer :
- un événement GA4 `llm_bot_hit` (hits bots)
- un événement GA4 `ai_referral_hit` (trafic humain venant de ChatGPT/Perplexity/Claude/Copilot via le header `Referer`)

Pour activer l’envoi GA4 (server-side Measurement Protocol), ajouter :

```
GA4_MEASUREMENT_ID=G-XXXXXXXXXX
GA4_API_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Debug (optionnel) :
- Endpoint : `/api/ga4-debug?name=mw_debug&value=1` (retourne un JSON et envoie un event GA4)

## Email (Contact + Pro)

Les formulaires `/contact` et `/pro/#contact` envoient des emails via SMTP (API routes Next.js).

### Variables SMTP (au choix)

Option la plus simple (recommandée) :

```
SMTP_URL=smtps://USER:PASS@smtp.provider.tld:465
```

Option “host/port” :

```
SMTP_HOST=smtp.provider.tld
SMTP_PORT=465
SMTP_USER=USER
SMTP_PASS=PASS
```

Optionnel (mais recommandé pour éviter des soucis d’alignement/DMARC) :

```
SMTP_FROM=no-reply@moverz.fr
```

### Destinataires / From

```
CONTACT_TO=contact@moverz.fr
CONTACT_FROM=no-reply@moverz.fr

PRO_CONTACT_TO=lucie@moverz.fr
PRO_CONTACT_FROM=no-reply@moverz.fr
```

Notes:
- `*_FROM` est utilisé comme **From**. Le formulaire met toujours l’email du prospect en `Reply-To`.
- En prod (CapRover), ces variables doivent être configurées dans l’UI CapRover (Environment Variables).


