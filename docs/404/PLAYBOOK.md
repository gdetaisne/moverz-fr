# 404 — PLAYBOOK (règles + workflow)

Ce playbook est volontairement minimal : il doit permettre de corriger des 404 **vite** sans sur-réagir (notamment avec des redirections en masse).

## 1) Principes

- **Traçabilité obligatoire** : chaque changement lié aux 404 doit être relié à un commit (et noté dans `HISTORIQUE.md`).
- **Best practice avant redirection** :
  - Corriger les **liens internes cassés** (la cause la plus fréquente).
  - Corriger le **sitemap** / la génération d’URLs si c’est la source.
  - Restaurer la page si elle doit exister (intention SEO/produit réelle).
  - Si une page est supprimée définitivement et n’a pas d’équivalent : préférer **410** plutôt qu’une 301 “poubelle”.
  - N’envisager une **301** que si l’équivalence est claire (même intention) et assumée.
- **Pas de “grand lot” direct** : on travaille en incréments, vérifiés.

## 2) Workflow standard (petits lots)

1. **Prendre les données**
   - Utiliser `export.csv?view=links&window=last` (source → target) pour corriger la cause.
   - Utiliser `export.csv?view=targets&window=7d` si on veut prioriser “quoi fait le plus mal”.
2. **Choisir un petit lot**
   - 5–20 liens max (ou une seule “famille” homogène : même pattern d’URL, même gabarit de page).
3. **Corriger**
   - Objectif : faire disparaître les 404 **sans redirection**, en réparant la source (le lien) ou la page (si elle doit exister).
4. **Commit**
   - Message clair (ex: `fix(404): repair internal links to /blog/...`).
5. **Vérifier en ligne 3 URLs**
   - Cursor peut les tester (navigation + statut HTTP).
6. **Documenter**
   - Ajouter une entrée dans `docs/404/HISTORIQUE.md`.
7. **Élargir**
   - Reprendre un lot suivant (ou généraliser seulement après validation).

## 3) Les 3 URLs à tester après chaque lot

À chaque lot, tester exactement 3 URLs :

- **URL A — représentative (corrigée)** : une URL cible du lot qui était 404 et ne l’est plus.
- **URL B — edge-case** : même pattern mais variante (ex : avec/sans trailing slash, majuscules, querystring typique).
- **URL C — contrôle** : une URL non liée au lot (pour vérifier qu’on n’a rien cassé ailleurs).

## 4) Comment décider “quoi faire” (mini grille)

- **Lien interne cassé (source_url ∈ moverz.fr)** : corriger le lien à la source (priorité #1).
- **Erreur de génération d’URL (pattern systématique)** : corriger la génération (et ne généraliser qu’après un lot test).
- **Page supprimée sans équivalent** : 410 (si le site le gère proprement), sinon laisser 404 assumée, mais éliminer les liens internes.
- **Ancienne URL avec équivalent clair** : 301 vers l’équivalent (exception, justifiée).

## 5) Où est la source de vérité “404”

- Opérationnel : `https://data.gslv.cloud/#404`
- Exports CSV :
  - `https://data.gslv.cloud/api/404/export.csv?view=links&window=last`
  - `https://data.gslv.cloud/api/404/export.csv?view=targets&window=last`

