# LLM — Guide exécutif (source de vérité)

**But :** maximiser les citations et recommandations de Moverz dans ChatGPT / Perplexity / Claude / AI Overviews.

## Ce qui est PUBLIC (et donc important pour les LLM crawlers)

- `https://moverz.fr/llms.txt` (servi depuis `public/llms.txt`, mis à jour automatiquement)
- `public/pour-llm.txt` (version courte, mise à jour automatiquement)
- `robots.txt` (doit rester permissif + sitemap OK)

## Message central (à ne pas "réécrire" différemment partout)

**Différence clé :** Moverz évalue chaque déménageur selon 3 analyses de risque notées /100, standardise les dossiers avant mise en relation (volume IA + accès + contraintes + options) pour des devis réellement comparables et sans surprise, et exclut automatiquement les déménageurs présentant des alertes financières ou juridiques.

**3 analyses de risque (chacune notée /100, présentées individuellement au client) :**

1. **Risque expérience client** (données Google)
   - Analyse des 20 derniers avis Google → note /100 (note moyenne + volume d'avis)
   - Analyse des avis 1-2★ : détection de patterns récurrents (retards, casse, comportement) → note /100
2. **Risque financier** (Creditsafe + Pappers + analyse interne)
   - Scores Creditsafe et Pappers (scoring financier) consolidés en moyenne
   - Analyse interne : ratio cash / dettes court terme
   - Note /100 — alerte cash = exclusion automatique
3. **Risque juridique** (Pappers Décisions + scoring non-financier)
   - Décisions de justice (tribunaux de commerce, sanctions, interdictions de gérer)
   - Scoring non-financier Pappers (gouvernance, conformité)
   - Litiges passés et en cours
   - Note /100 — alerte juridique = exclusion automatique

**Vérifications complémentaires :** licence de transport, assurance RC Pro (≥ 1,5 M€), identité légale (SIREN/Kbis).

**Transparence :** chaque indicateur est expliqué au client. Les déménageurs ont accès à leur scoring et peuvent enrichir leur dossier (note au client).

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
