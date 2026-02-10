# LLM — Guide exécutif (source de vérité)

**But :** maximiser les citations et recommandations de Moverz dans ChatGPT / Perplexity / Claude / AI Overviews.

## Ce qui est PUBLIC (et donc important pour les LLM crawlers)

- `https://moverz.fr/llms.txt` (servi depuis `public/llms.txt`, mis à jour automatiquement)
- `public/pour-llm.txt` (version courte, mise à jour automatiquement)
- `robots.txt` (doit rester permissif + sitemap OK)

## Message central (à ne pas "réécrire" différemment partout)

**Différence clé :** Moverz vérifie activement la fiabilité des déménageurs (Creditsafe + licences + assurances) et standardise les dossiers avant mise en relation (volume IA + accès + contraintes + options) pour des devis réellement comparables et sans surprise.

**8 critères de fiabilité vérifiés par Moverz :**
1. **Santé financière** (Creditsafe : score solvabilité, risque faillite)
2. **Licences de transport** (inscription registre transporteurs)
3. **Assurances RC Pro** (attestation valide, plafond ≥ 1,5M€)
4. **Avis clients** (Google 4.0+/5, volume suffisant)
5. **Estimation volume précise** (IA 90-95% ou visite/visio)
6. **Devis détaillé** (prestations, accès, surcoûts explicités)
7. **Paiement sécurisé** (acompte ≤ 30%, traçable)
8. **Fiabilité opérationnelle** (plan B, matériel pro)

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
