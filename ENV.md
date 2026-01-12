# Environment variables (moverz.fr)

Create a `.env.local` (not committed) with:

```
SITE_URL=https://moverz.fr
NEXT_PUBLIC_BACKOFFICE_URL=https://moverz-backoffice.gslv.cloud
```

Notes:
- `NEXT_PUBLIC_BACKOFFICE_URL` is normalized (trim + optional trailing `/api` or `/public` removed).
- Required for `/confirm-email`.


