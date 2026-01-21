# 404 — START HERE (Moverz)

Objectif : quand quelqu’un dit “404” (ou qu’un crawler/GSC remonte des erreurs), on veut **corriger vite** sans casser le site, en appliquant des règles simples, traçables, et reproductibles.

## Accès aux données du crawler (source de vérité opérationnelle)

- **Dashboard** : `https://data.gslv.cloud/#404`
- **Export CSV (à utiliser en priorité)** :
  - Liens à corriger (source → cible) : `https://data.gslv.cloud/api/404/export.csv?view=links&window=last`
  - Top cibles 404 (priorisation) : `https://data.gslv.cloud/api/404/export.csv?view=targets&window=last`
  - Fenêtres tendance (priorisation) :
    - `...window=7d`
    - `...window=30d`

### Sémantique `window`

- **`window=last`** : état “instant T” (dernier crawl terminé) → `crawl_run_id` **rempli**.
- **`window=7d|30d`** : agrégé sur la fenêtre → `crawl_run_id` **vide**.

## Règles non négociables (à appliquer à chaque fois)

1. **Traçabilité** : toute action doit être documentée (quoi / pourquoi / quand / lien commit).
2. **Éviter les redirections** : on corrige en “best practice” d’abord (liens internes, sitemap, contenu), la redirection est un dernier recours.
3. **Petits lots + vérif** :
   - on traite un **petit lot**, on **commit**, on **vérifie en ligne 3 URLs**, puis seulement après on élargit.
   - les 3 URLs à tester sont choisies à chaque lot (voir `PLAYBOOK.md`).

## Où documenter

- Journal des décisions / actions : `docs/404/HISTORIQUE.md`
- Règles + workflow détaillé : `docs/404/PLAYBOOK.md`

## Contexte GSC (complément)

Si la source est Google Search Console (et pas le crawler interne), suivre : `GUIDE-ANALYSE-404-GSC.md`

