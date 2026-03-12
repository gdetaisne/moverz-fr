# TODO SEO — moverz.fr
**Dernière mise à jour : 11 mars 2026**  
**Analyse source : `SEO_11032026_ANALYSE.md`**  
**Baseline : ~85 clics/sem | CTR 0.7% | Pos moy 29.4**  
**Objectif 60j : ~170 clics/sem (×2)**

> Ce fichier est la **source de vérité** du plan d'action SEO en cours.  
> Mettre à jour les cases à chaque tâche complétée. Régénérer ce fichier à chaque nouvelle analyse GSC.

---

## P0 — Cette semaine (impact J+7 à J+14)

- [ ] **#1** Mettre à jour dates "2025"→"2026" dans les titles de 3 articles + remplacer "CreditSafe"→"Pappers"
  - `/blog/prix-demenageur-rouen-2025/` → "Prix Déménageur Rouen 2026 : Tarifs & Devis Gratuit"
  - `/blog/prix-garde-meuble-montpellier-2025/` → "Prix Garde-Meuble Montpellier 2026 : Comparatif Tarifs"
  - `/blog/meilleur-demenageur-rennes-2025/` → "Meilleur Déménageur Rennes 2026 : Top 5 Vérifiés"
  - Fichier : `lib/blog-extra.ts`

- [ ] **#2** Réécrire titles/meta des 8 pages à 0% CTR (100+ impressions)
  - `/blog/shurgard-lyon-sites-tarifs/` → "Shurgard Lyon : Prix, Adresses et Alternatives Moins Chères"
  - `/blog/meilleurs-demenageurs-lyon/` → "Top 7 Déménageurs Lyon Vérifiés Pappers (2026)"
  - `/blog/comparatif-formules-economiques-demenagement-nantes/` → "Déménagement Nantes Pas Cher : Comparatif Prix 2026"
  - `/blog/comparer-plateformes-devis-demenagement-2026/` → "Comparateur Déménagement : Quel Site Choisir en 2026 ?"
  - Améliorer aussi les meta descriptions (template : bénéfice → différenciateur → CTA)
  - Fichier : `lib/blog-extra.ts`

- [ ] **#3** Créer 4 articles "comparatif déménageurs [ville] 2026"
  - `/blog/comparatif-demenageurs-rennes-2026/` (81 impr, pos 7.6, 0 clic)
  - `/blog/comparatif-demenageurs-marseille-2026/` (40 impr, pos 8.8, 0 clic)
  - `/blog/comparatif-demenageurs-bordeaux-2026/` (40 impr, pos 8.7, 0 clic)
  - `/blog/comparatif-demenageurs-lyon-2026/` (64 impr, pos 10.6, 0 clic)
  - Format : tableau comparatif 5 déménageurs, 800–1200 mots, FAQ schema, attribution Lucie

- [ ] **#4** Enrichir `/comparateur-demenageurs/` (pos 23–29, 64–117 impr, 0 clic)
  - H1 exact : "Comparateur de Déménageurs"
  - Tableau comparatif visible above the fold
  - FAQ schema "comparateur déménagement"

- [ ] **#5** `/label-moverz/` — indexation GSC + réécrire H1/title
  - GSC → Inspection d'URL → "Demander l'indexation"
  - Title : "Vérifier un Déménageur : Score Fiabilité /100 Gratuit | Moverz"
  - H1 : "Vérifiez la fiabilité de votre déménageur en 30 secondes"
  - Meta : "Score /100 gratuit : santé financière (Pappers), alertes BODACC, avis 12 mois. 3 000+ déménageurs. 0 faillite."
  - Fichier : `app/label-moverz/page.tsx`

- [x] **#6** Ajouter photos sur toutes les pages ville (landmark + alt optimisé)
  - ✅ Composant `CityPhoto.tsx` créé et intégré dans `app/demenagement/[slug]/page.tsx`
  - 13 villes mappées avec photos Unsplash + fallback

---

## P1 — Semaines 2–3 (impact J+14 à J+30)

- [ ] **#7** Consolider cannibalisation "demenageur strasbourg tarif" (9 pages, 159 impr, 0 clic)
  - Page canonique : `/blog/prix-demenageur-strasbourg-2026/`
  - Ajouter `canonical` sur les 8 autres pages Strasbourg prix
  - Enrichir la page canonique à 1 500+ mots

- [ ] **#8** Consolider cannibalisation "devis déménagement bordeaux" (3 pages, 310 impr, 0 clic)
  - La page ville pos 22 est la canonique
  - Canonical blog → ville sur les 2 articles blog

- [ ] **#9** Créer 4 articles "devis déménagement [ville] 2026" (~727 impr combinées, 0 clic)
  - `/blog/devis-demenagement-bordeaux-2026/` (296 impr, pos 24.7)
  - `/blog/devis-demenagement-marseille-2026/` (182 impr, pos 51.1)
  - `/blog/devis-demenagement-toulouse-2026/` (134 impr, pos 27.3)
  - `/blog/devis-demenagement-lyon-2026/` (115 impr, pos 49.0)
  - Format : 1200 mots, prix par surface, CTA formulaire, attribution Lucie

- [ ] **#10** `/label-moverz/` — section longform SSR + maillage interne
  - 600–800 mots HTML statique (pas JS) : pourquoi vérifier, comment ça marche, différences certifications
  - Passer de ~2 à 20+ liens internes entrants (depuis blog, pages ville, comparateur)

- [ ] **#11** Créer `/blog/comment-verifier-demenageur-fiable/` (feeder label-moverz)
  - 1500 mots, requête cible "comment vérifier un déménageur" (pos 27, 8 impr)
  - Checklist SIREN, Pappers, avis Google, RC Pro, BODACC
  - CTA → `/label-moverz/`
  - FAQ Schema

- [ ] **#12** Maillage interne : 20 articles top blog → 3 liens contextuels chacun
  - Priorité liens vers `/label-moverz/`, `/comparateur-demenageurs/`, guides ville

- [ ] **#21** Refaire le logo/favicon SERP
  - Favicon fort en contraste à 16×16 (M orange sur fond blanc ou inversé)
  - Format `.ico` + `.png` 32×32 et 192×192
  - Tester via realfavicongenerator.net avant déploiement

---

## P2 — Semaines 3–4 (impact J+21 à J+45)

- [ ] **#13** Re-mesurer GSC pages ville post-refonte Lucie — **à faire le 23 mars**
  - Comparer positions avant/après pour les 8 villes core
  - Décider des actions supplémentaires sur les pages ville

- [ ] **#14** Enrichir `/demenagement/bordeaux/` (296 impr, pos 22 sur "devis déménagement bordeaux")
  - H2 "Obtenir des devis de déménagement à Bordeaux"
  - Section prix moyens 2026 avec tableau T1/T2/T3/maison
  - FAQ "Combien coûte un déménagement à Bordeaux ?"
  - Maillage interne depuis articles blog Bordeaux

- [ ] **#15** Enrichir `/demenagement/marseille/` et `/demenagement/toulouse/`
  - Même structure que Bordeaux

- [ ] **#16** Page dédiée `/moving-company-france/` en anglais 100%
  - "moving company" pos 6.2, 138 impr, 0 clic
  - ~800 mots EN, hreflang="en", CTA → devis.moverz.fr

- [ ] **#17** Consolider cannibalisation Lille, Rouen, Nice
  - Lille : consolider sur `/blog/devis-demenagement-lille-obtenir-comparer/`
  - Rouen : garder blog, noindex page ville
  - Nice : enrichir `/blog/demenagement-objets-fragiles-nice/` à 1200 mots + canonicals

- [ ] **#18** Enrichir hub `/blog/` + créer pages catégories
  - Catégories claires : Prix, Arnaques, Villes, Guides
  - `/blog/prix-demenagement/` + `/blog/par-ville/`

- [ ] **#19** Enrichir 20 guides ville premium → 2 500–3 000 mots (objectif Lucie)
  - Priorité : Lyon (2539 mots déjà), Paris, Marseille

---

## P3 — Mois 2 (impact J+45 à J+60)

- [ ] **#20** Netlinking 500€/mois
  - Cibles : pages ville core (Bordeaux, Lyon, Marseille)
  - `/comparateur-demenageurs/`
  - `/label-moverz/` (asset le plus linkable)
  - Ancres : "comparateur déménagement", "déménageur [ville] vérifié"

---

## Corrections techniques build (hors SEO contenu)

- [x] **TECH-1** ISR → SSG blog
  - ✅ **Non applicable** — ISR intentionnel pour éviter timeout build VPS
  - **Solution retenue : Cloudflare CDN Free** + script prewarm
  - Script créé : `scripts/prewarm-cache.mjs` (`npm run prewarm`)
  - ✅ **Cloudflare configuré le 11/03/2026** — nameservers propagés, 2 Cache Rules actives :
    - `Cache HTML pages` (hostname `moverz.fr`, Edge TTL 1 jour)
    - `Bypass API` (URI `/api/*`, cache bypassé)
  - `devis.moverz.fr` → DNS only (nuage gris) — tunnel non caché
  - Prewarm exécuté : 26/39 URLs OK, TTFB moyen 770ms (premier hit)

- [x] **TECH-2 + TECH-4** Supprimer `export const runtime = "edge"` dans `app/label-moverz/opengraph-image.tsx`
  - ✅ **Fait** — 1 ligne supprimée. Edge runtime causait `Failed to load dynamic font Status: 400` en build Docker (fetch réseau interdit sur VPS).
  - Corrige aussi TECH-4 (c'était le seul fichier avec `runtime = "edge"`).
  - ⚠️ **Logs build 12/03 01:33 :** erreur encore présente — c'est le build *avant* notre commit. Prochain build : erreur disparue.

- [x] **TECH-3** Mettre à jour `.dockerignore`
  - ✅ **Déjà fait** — `docs/` et `*.csv` exclus (lignes 35-36)

- [x] **TECH-5** Investiguer `lib/blog-canonique.ts` (8.3 MB)
  - ✅ **Dead code confirmé** — import commenté dans `blog.ts` depuis longtemps (template literals non fermés)
  - ✅ **Fix appliqué** — type `CanonicalBlogPost` exporté depuis `blog.ts`, import dans `blog-nouveaux-2026.ts` redirigé vers `blog.ts`
  - `blog-canonique.ts` n'est plus référencé dans aucun `.ts`/`.tsx`

- [x] **TECH-6** Exclure `lib/blog-canonique.ts` du contexte Docker
  - ✅ **Fait** — ajouté dans `.dockerignore`
  - **Gain : -8.3 MB sur le contexte Docker + TypeScript ne parse plus ce fichier au build**
  - **Contrôle build :** `blog-canonique.ts` ne doit plus apparaître dans le `ls -la lib/` du Step 23

---

## Monitoring — chaque lundi

```bash
node scripts/gsc-monitor.mjs
```

| KPI | Baseline (11/03) | Objectif J+60 |
|-----|-----------------|---------------|
| Clics/semaine | ~85 | ~170 |
| CTR global | 0.7% | 2%+ |
| Position moyenne | 29.4 | < 20 |
| Impressions `/label-moverz/` | 0 | 50+/sem |
| CTR `/comparateur-demenageurs/` | ~0% | 3%+ |
| Impressions guides ville (post-refonte) | ? | 500+/sem |

**Check spécifique 23 mars :** positions pages ville post-refonte Lucie.

Note Guillaume IMPORTANT : A chaque analyse SEO il faut proposer a l'opérateur (Lucie ou moi) d'importer les logs de build caprover pour vérification. Les problèmes technique étant rapides à corriger, sont tuoujours en P0. S'il ont un impact SEO ils sont en P0 SEO 
