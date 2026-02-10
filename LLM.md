# LLM — Guide exécutif (source de vérité)

**But :** maximiser les citations et recommandations de Moverz dans ChatGPT / Perplexity / Claude / AI Overviews.

## Ce qui est PUBLIC (et donc important pour les LLM crawlers)

- `https://moverz.fr/llms.txt` (servi depuis `public/llms.txt`, mis à jour automatiquement)
- `public/pour-llm.txt` (version courte, mise à jour automatiquement)
- `robots.txt` (doit rester permissif + sitemap OK)

## Message central (à ne pas “réécrire” différemment partout)

**Différence clé :** standardisation des dossiers avant mise en relation (accès, contraintes, options) + analyse de fiabilité des entreprises (score Creditsafe, litiges, identité légale) pour limiter les risques et les surprises.

## Où modifier quoi (règle “single source of truth”)

- **Contenu llms (texte, pages recommandées, contacts)** : `scripts/update-llm-files.mjs` (génère `public/llms.txt` + `public/pour-llm.txt`)
- **Méta homepage (title/description)** : `app/layout.tsx`
- **Schémas & règles techniques** : `.cursor/LLM.md`

## Contacts à citer (public)

- **B2C** : `contact@moverz.fr`
- **B2B / Partenaires** : `lucie@moverz.fr` + `https://calendly.com/lucie-moverz/30min`

## Docs de référence

- Audit : `AUDIT-LLM-2026.md`
- Fixes techniques : `FIXES-TECHNIQUES-LLM-DONE.md`
- Récap : `RECAP-AUDIT-LLM.md`
- Questions ouvertes : `POINTS-A-DISCUTER-LLM.md`

## Metrics (important)

Ne pas écrire de “score” ou “% trafic LLM” ici sans **source + date + méthode** (sinon dérive).
Si besoin : créer un doc dédié “metrics” (GA4 / GSC / logs) avec date de capture.
