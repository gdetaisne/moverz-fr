# Environment variables (moverz.fr)

Create a `.env.local` (not committed) with:

```
SITE_URL=https://moverz.fr
NEXT_PUBLIC_BACKOFFICE_URL=https://moverz-backoffice.gslv.cloud
```

Notes:
- `NEXT_PUBLIC_BACKOFFICE_URL` is normalized (trim + optional trailing `/api` or `/public` removed).
- Required for `/confirm-email`.

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


