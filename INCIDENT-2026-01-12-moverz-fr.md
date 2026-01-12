# Incident 2026-01-12 — moverz.fr (CPU 100% + 504) & plan de revert (Option 1)

## Résumé exécutable (TL;DR)

- **Symptôme**: `moverz.fr` répond en **504** via Nginx, et même depuis le conteneur Next (`wget http://<ip>:3000/`) ça **timeout**.
- **Signal clé**: CPU `moverz-fr` à ~**100%** pendant la panne.
- **Cause la plus probable** (corrélée au fix en prod): **route Next `/_next/image` (image optimizer)** sous charge bots/crawl → saturation CPU → Next ne répond plus.
- **Mitigation immédiate appliquée** (serveur): blocage Nginx de `/_next/image` → `home` repasse en **200** mais images (logo/hero) cassées.
- **Correctif durable** côté code: **désactiver l’optimizer** via `next.config.mjs` (`images.unoptimized = true`) = commit `e312587`.

Ce document décrit **Option 1**: **revert uniquement les 4 commits de Lucie** pour revenir au comportement d’avant ses features/SEO, tout en **gardant le fix de stabilité** `e312587`.

---

## Contexte / Chronologie (résumé)

- Un déploiement récent (image `:302`) était clairement défaillant (non responsive).
- Retour en arrière sur image `:299` a remis le site up temporairement, mais sous trafic bots le conteneur sature encore.
- Le blocage Nginx de `/_next/image` a rétabli les réponses HTTP sur `/` quasi instantanément.

---

## Périmètre du revert (Option 1)

### Commits à **revert** (Lucie)

1) `9123466` — `chore: smarter exit-intent gating + auto-dismiss`
- Fichiers:
  - `app/layout.tsx`
  - `components/ConversionIntentTracker.tsx` (ajout)
  - `components/ExitIntentPopup.tsx`

2) `54eb12e` — `feat: add confirm-email page`
- Fichiers:
  - `ENV.md` (ajout)
  - `README.md`
  - `app/api/confirm-email/route.ts` (ajout)
  - `app/confirm-email/ConfirmEmailClient.tsx` (ajout)
  - `app/confirm-email/page.tsx` (ajout)
  - `app/demenagement/[slug]/guide/page.tsx`
  - `app/public/leads/confirm/route.ts` (ajout)
  - `lib/backoffice.ts` (ajout)
  - `next.config.mjs`

3) `97369c9` — `feat: premium non-blocking exit-intent popup`
- Fichiers:
  - `components/ExitIntentPopup.tsx`
  - `lib/tracking.ts`

4) `3163fbc` — `SEO: reduce duplicate URLs (nofollow CTAs, legacy redirect, corridor canonical)`
- Très large, touche notamment:
  - `middleware.ts`
  - `next.config.mjs`
  - `lib/city-longform.ts`, `lib/city-longform-overrides.ts`
  - pages `app/demenagement/...` et `app/blog/...`
  - composants SEO / templates
  - + beaucoup de docs ajoutées

### Commits à **NE PAS revert** (stabilité)

- `e312587` — `chore: disable next image optimizer to reduce 504 risk`
  - Objectif: **désactiver `/_next/image`** en prod de façon durable.
  - Ce commit doit rester, sinon on retombe dans la cause principale (CPU spike sur optimizer).

---

## Pourquoi ce revert (hypothèse + objectifs)

Objectifs:
- **Revenir** à un état produit plus stable/éprouvé **avant** les features Lucie (popup/confirm-email/SEO).
- **Conserver** le fix de stabilité `e312587` (désactivation optimizer).
- **Retirer** la mitigation Nginx (blocage `/_next/image`) une fois la nouvelle image déployée, pour récupérer le logo/hero.

Hypothèse:
- Les changements Lucie peuvent avoir augmenté la charge SSR/SEO/dynamique, mais la panne observée est surtout corrélée à `/_next/image`.
- Le revert Option 1 réduit le “blast radius” fonctionnel tout en conservant la mitigation principale.

---

## Plan de ré-application pour Lucie (après incident)

### Étape 1 — Réintroduire 1 feature à la fois derrière un canary

Recommandé: réintroduire dans cet ordre, en vérifiant CPU/latence après chaque:
1) `confirm-email` (routes transactionnelles) — attention à `dynamic = "force-dynamic"` si présent.
2) Exit-intent (tracking + popup).
3) SEO large (middleware/canonicals/longforms).

### Étape 2 — Tests à faire à chaque réintroduction

- Vérifier `/_next/image`:
  - doit **renvoyer 404** ou **ne plus être utilisé** si `images.unoptimized=true`.
- Vérifier pages lourdes:
  - `/`
  - `/comment-ca-marche/`
  - `/demenagement/<ville>/`
  - `/demenagement/<ville>/guide/`
- Observer Nginx:
  - taux de `504`, `502`, `upstream timed out`

### Étape 3 — Si on veut garder de l’optimisation image

Option alternative (plus tard):
- servir des images optimisées **au build** ou via CDN dédié,
- ou limiter l’optimizer (cache, rate-limit, headers, etc.).

---

## Actions serveur temporaires (à nettoyer)

Pendant l’incident, une règle a été injectée dans `/etc/nginx/conf.d/captain.conf`:

- `location ^~ /_next/image/ { return 404; }`

Cette modification:
- **restaure la dispo**
- **casse le logo/hero** si le front attend l’optimizer.

À retirer **après** déploiement d’une image contenant `e312587` (unoptimized) et vérification que les pages rendent correctement.

