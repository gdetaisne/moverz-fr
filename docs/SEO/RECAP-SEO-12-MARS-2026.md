# Récapitulatif SEO — 12 mars 2026

**Session :** Actions P0 #5, #6 + optimisations photos avancées (A, B, C)  
**Référence :** `SEO_11032026_ANALYSE.md` (plan 60 jours)  
**Objectif :** Avancer le plan P0 pour ×2 trafic

---

## Résumé exécutif

Cette session a complété **2 actions P0** du plan SEO Guillaume + **3 optimisations photos** bonus.  
**Impact estimé :** +7-10% CTR pages ville sous J+14, page `/label-moverz/` indexée sous J+3.

---

## ✅ Actions réalisées

### 1. Action #5 — `/label-moverz/` optimisé

| Élément | Avant | Après |
|---------|-------|-------|
| **H1** | "Vérifiez la fiabilité de votre déménageur." | "Vérifiez la fiabilité de votre déménageur **en 30 secondes**" |
| **Title** | Déjà optimal | Conservé : "Vérifier un Déménageur : Score Fiabilité /100 Gratuit \| Moverz" |
| **Indexation GSC** | 0 impression | "Demander l'indexation" exécuté manuellement par Lucie |

**Fichiers modifiés :**
- `components/label-moverz/LabelMoverzHero.tsx` — H1 mis à jour

**Projection :** Page indexée sous J+3, premières impressions J+7-14.

---

### 2. Action #6 — Photos sur toutes les pages ville

| Élément | Avant | Après |
|---------|-------|-------|
| **Nombre de photos** | 1 photo landmark (Unsplash CDN) | 2 photos : landmark + déménageur |
| **Hébergement** | URLs Unsplash variables | 83 photos locales `public/images/cities/` (80 villes + 3 déménageurs) |
| **Nommage** | `photo-123.jpg` | `bordeaux-miroir-eau-quais.jpg`, `demenageur-professionnel-cartons-transport.jpg` |
| **Alt text** | Basique | "Déménagement [Ville] - [description] accessibles pour déménageurs" |
| **Title attribute** | Aucun | "Déménager à [Ville] avec Moverz - Pros vérifiés" |

**Photos téléchargées :**
- **80 landmarks** : Phase 1 (20) + Phase 2 (35) + Phase 3 (25) — Versailles, Boulogne-Billancourt, Antibes, Fréjus, Arles, Sète, Montauban, Tarbes, Niort, Angoulême, Arcachon, Villeneuve-d'Ascq, Arras, Lens, Valenciennes, Thionville, Épinal, Laval, La Roche-sur-Yon, Cholet, Saint-Brieuc, Évreux, Dieppe, Bourges, Châteauroux (Villeurbanne = Lyon)
- 3 déménageurs : cartons, camion+équipe, transport professionnel

**Fichiers modifiés :**
- `components/city/CityPhoto.tsx` — 2 photos, images locales, alt + title
- `scripts/download-city-photos.ts` — Script de téléchargement (créé)

---

### 3. BONUS — Optimisations photos avancées (Actions A, B, C)

| Action | Détail | Impact |
|--------|--------|--------|
| **A. Nommage SEO** | 83 fichiers nommés avec keywords ville/déménagement | +5% CTR Google Images estimé |
| **B. Title attributes** | Ajouté sur toutes les images | Signal SEO secondaire, tooltip UX |
| **C. ImageObject schema** | Structured data pour chaque page ville | Google Images boost, AI Overviews |

**Fichiers créés :**
- `components/schema/ImageObjectSchema.tsx` — Composant schema
- `lib/seo/city-photos.ts` — Helper métadonnées
- `PHOTOS-SEO-IMPLEMENTATION.md` — Documentation détaillée

**Intégration :** `app/demenagement/[slug]/page.tsx` — ImageObjectSchema ajouté

---

## 📊 Impact quantitatif

| Métrique | Avant | Après |
|----------|-------|-------|
| **Pages avec 2 photos** | 0 | 300+ (toutes pages ville) |
| **Photos hébergées localement** | 0 | 83 (80 villes + 3 déménageurs) |
| **Schemas ImageObject** | 0 | 300+ pages ville |
| **Actions P0 complétées** | 0/6 | 2/6 (#5, #6) |

---

## 📁 Fichiers créés/modifiés

### Nouveaux
- `public/images/cities/` — 83 photos JPG (80 villes + 3 déménageurs)
- `scripts/download-city-photos.ts`
- `components/schema/ImageObjectSchema.tsx`
- `lib/seo/city-photos.ts`
- `PHOTOS-SEO-IMPLEMENTATION.md`
- `docs/SEO/RECAP-SEO-12-MARS-2026.md` (ce fichier)

### Modifiés
- `components/label-moverz/LabelMoverzHero.tsx`
- `components/city/CityPhoto.tsx`
- `app/demenagement/[slug]/page.tsx`

---

## 🎯 Prochaines actions P0 (reste 4)

| # | Action | Statut |
|---|--------|--------|
| 1 | Mettre à jour "2025"→"2026" (3 articles) + CreditSafe→Pappers | ✅ **13/03** — Titres + contenu migrés |
| 2 | Réécrire titles/meta 8 pages à 0% CTR | ⬜ |
| 3 | Créer 4 articles "comparatif déménageurs [ville] 2026" | ⬜ |
| 4 | Enrichir `/comparateur-demenageurs/` | ⬜ |
| 5 | Label-moverz H1 + indexation GSC | ✅ **12/03** |
| 6 | Photos pages ville | ✅ **12/03** |

---

## 📈 Monitoring recommandé

**À vérifier dans GSC (semaine du 23 mars) :**
1. Indexation `/label-moverz/` (devrait être OK)
2. Impressions Google Images (baseline vs post-photos)
3. CTR pages ville (objectif : 0.7% → 1.5-2%)

---

## 🚀 Next steps (ordre recommandé)

| Priorité | Action | Fichier | Impact estimé |
|----------|--------|---------|---------------|
| **P0 #1** | Mettre à jour "2025"→"2026" (3 articles) + CreditSafe→Pappers | `lib/blog-extra.ts` | CTR +0.5-1% |
| **P0 #2** | Réécrire titles/meta des 8 pages à 0% CTR (Shurgard Lyon, meilleurs déménageurs Lyon, etc.) | `lib/blog-extra.ts` | +10-25 clics/sem |
| **P0 #3** | Créer 4 articles "comparatif déménageurs [ville] 2026" (Rennes, Marseille, Bordeaux, Lyon) | Nouveaux articles | +15-30 clics/sem |
| **P0 #4** | Enrichir `/comparateur-demenageurs/` (H1, tableau above fold, FAQ schema) | Page comparateur | CTR +2-3% |
| **P1 #7** | Consolider cannibalisation Strasbourg (9 pages → 1 canonique) | Canonicals + enrichissement | Position +5-10 |
| **P1 #8** | Consolider "devis déménagement bordeaux" (canonical blog → ville) | Meta canonical | Position +5 |
| **P1 #9** | Créer 4 articles "devis déménagement [ville] 2026" | Nouveaux articles | +20-40 clics/sem |
| **23 mars** | Re-mesurer GSC pages ville post-refonte + post-photos | `node scripts/gsc-monitor.mjs` | Baseline pour P2 |

**Référence complète :** `docs/SEO/TODO.md`

---

## ⏳ Reporté au 13 mars

- **#1 (suite)** — CreditSafe→Pappers : ✅ fait (lib, blog, corridors, app, content/blog)

---

*Rédigé le 12 mars 2026 — Lucie Stéhelin + Claude Agent*
