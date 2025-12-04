# BACKLOG - moverz.fr (Hub + Migration)

> Système inspiré de `moverz_main/.cursor`, adapté au hub unique `moverz.fr`.

---

## 📊 STATS RAPIDES (à mettre à jour à la main)

- **P0 (critique)** : 0 tâches  
- **P1 (important)** : 6 tâches  
- **P2 (normal)** : 3 tâches  
- **Total** : 9 tâches

---

## 🔴 [P1] Blog & Contenu (Migration)

### [P1]-TASK-BLOG-EXPORT-ARTICLES — Export brut des ~1 000 articles

- **Statut** : 📋 À faire  
- **Objectif** :  
  Exporter tous les articles des anciens sites (`moverz_main`) dans un CSV unique `BLOG-EXPORT-RAW.csv`
  avec au minimum : `source_domain`, `old_url`, `title`, `published_at`, `word_count`.
- **Doc** : `BLOG-MIGRATION-EXPORT.md` (format cible)

### [P1]-TASK-BLOG-MAPPING-SEO — Définir slugs & URLs finales

- **Statut** : 📋 À faire  
- **Objectif** :  
  Compléter dans le fichier d’export les colonnes SEO (`new_slug`, `new_url`, `category`, `city_slug`,
  `keep_as_is`, `merge_into_slug`) pour chaque article.

### [P1]-TASK-BLOG-IMPORT-MOVERZ — Import dans `/blog/`

- **Statut** : 📋 À faire  
- **Objectif** :  
  Brancher l’export traité dans le code `moverz.fr` (source JSON/TS ou autre) pour générer les pages
  `/blog/[slug]/` avec metadata et maillage interne minimal.

### [P1]-TASK-BLOG-REDIRECTS — 301 article → article

- **Statut** : 📋 À faire  
- **Objectif** :  
  Implémenter les 301 `old_url` → `new_url` pour les articles migrés, en s’appuyant sur le fichier
  d’export (pas encore brancher dans `next.config.mjs`).

---

## 🔴 [P1] Migration Domaines → Pages Villes

### [P1]-TASK-DOMAINS-MAPPING — Source de vérité domaines

- **Statut** : ✅ FAIT (voir `lib/domain-redirects.ts`)  
- **Objectif** :  
  Centraliser le mapping domaines historiques → pages villes `moverz.fr/demenagement/{ville}/`.

### [P1]-TASK-DOMAINS-VAGUE1 — Vague 1 301 domaines → pages villes

- **Statut** : 📋 À faire  
- **Objectif** :  
  Définir les domaines de Vague 1 (sites les plus faibles) et préparer la config de 301 à appliquer
  côté infra/Next, en s’appuyant sur `lib/domain-redirects.ts`.

### [P1]-TASK-DOMAINS-MONITORING — Suivi GSC & indexation

- **Statut** : 📋 À faire  
- **Objectif** :  
  Définir les indicateurs (impressions, clics, pages indexées, erreurs de couverture) et le plan de
  monitoring après chaque vague de 301.

---

## 🟡 [P2] Produit & Marque Blanche

### [P2]-TASK-FORM-MULTI-TENANT — App formulaire `devis.moverz.fr` multi-tenant

- **Statut** : 📋 À faire  
- **Objectif** :  
  Concevoir l’architecture multi-tenant de l’app formulaire `devis.moverz.fr` (PartnerConfig,
  routes `/[partnerId]`, SEO noindex, intégration iframe/domaine custom) pour préparer une offre
  marque blanche.

### [P2]-TASK-FORM-FALLBACK — Page fallback `/devis/` sur moverz.fr

- **Statut** : 📋 À faire  
- **Objectif** :  
  Créer une page `/devis/` avec un formulaire de secours (UX propre, explication “fallback”) qui
  peut recevoir les leads si `devis.moverz.fr` est indisponible.

---

## 🟡 [P2] Finitions Pages Villes

### [P2]-TASK-VILLES-CONTENU-FINITION — Ajustements contenu & maillage

- **Statut** : 📋 À faire  
- **Objectif** :  
  Passer sur toutes les pages `/demenagement/{ville}/` pour affiner : wording, liens internes
  vers le blog, cohérence des prix, cohérence des quartiers/communes listés.

---

## 🟠 ROADMAP OPTIMISATION 4 SEMAINES (150 contenus)

### [P1]-TASK-201-SEO-301-FINALISATION — Import + vérification 301

- **Statut** : 📋 À faire  
- **Objectif** :  
  Importer le fichier complet des 301 (articles + domaines), vérifier un échantillon (30 URLs),
  corriger les erreurs de correspondance de slug et stabiliser la couche redirections.

### [P1]-TASK-202-SEO-CANON-DUPLICATES — Canonisation des doublons (125 groupes)

- **Statut** : 📋 À faire  
- **Objectif** :  
  Pour chaque groupe de doublons : garder 1 seule version par `new_slug`, archiver les titres
  faibles, relier toutes les anciennes URLs via 301, tagger l’état dans l’outil de suivi
  (fusionné / à réécrire / OK).

### [P1]-TASK-203-SEO-PRIX-TOP20 — Optimisation immédiate 20 articles Prix

- **Statut** : 📋 À faire  
- **Objectif** :  
  Réécrire/optimiser en priorité 20 articles “Prix” stratégiques (T2, 10/20/30 m³, Paris,
  Marseille, Lyon, Nice, longue distance, lecture de devis) selon le template Moverz
  (meta, Hn, tableaux, maillage interne).

### [P1]-TASK-204-SEO-LONGFORM-40 — Optimisation 40 articles >1000 mots

- **Statut** : 📋 À faire  
- **Objectif** :  
  Optimiser 40 articles longs à fort potentiel (guides complets, comparatifs, tutoriels),
  en ajoutant 3–6 liens internes, CTA vers Moverz, harmonisation des slugs et métas.

### [P1]-TASK-205-SEO-THIN-ANALYSE — Audit contenus <350 mots

- **Statut** : 📋 À faire  
- **Objectif** :  
  Classer les ~288 contenus <350 mots en trois catégories (supprimer+301, fusionner,
  réécrire) et définir la liste courte des ~30 articles à réécrire entièrement.

### [P1]-TASK-206-SEO-MIDRANGE-OPTIM — Optimisation 25–30 articles 350–700 mots

- **Statut** : 📋 À faire  
- **Objectif** :  
  Sélectionner puis optimiser 25–30 contenus 350–700 mots avec bon potentiel (prix, villes,
  evergreen) en appliquant le template Moverz (structure, maillage, métas).

### [P1]-TASK-207-SEO-PAGES-VILLES-20 — Réécriture / optimisation 20 pages villes

- **Statut** : 📋 À faire  
- **Objectif** :  
  Réécrire 20 pages `/demenagement/{ville}/` prioritaires (Marseille, Lyon, Nice, Bordeaux,
  Toulouse, etc.) avec structure complète : quartiers, prix, volumes types, conseils locaux,
  CTA + maillage vers le blog et les villes voisines.

### [P1]-TASK-208-SEO-MAILLAGE-VILLES — Maillage final blog ↔ pages villes

- **Statut** : 📋 À faire  
- **Objectif** :  
  Pour chaque page ville, ajouter un bloc “articles recommandés” et relier systématiquement
  blog ↔ ville : prix [VILLE], guide déménager à [VILLE], articles conseils pertinents.

### [P1]-TASK-209-SEO-SITEMAP-REINDEX — Sitemaps + reindexation Search Console

- **Statut** : 📋 À faire  
- **Objectif** :  
  Regénérer/pousser les sitemaps XML, vérifier leur prise en compte dans GSC, utiliser
  l’inspection d’URL pour re-soumettre les pages critiques (pages villes + top articles).

### [P2]-TASK-210-SEO-GUIDE-NATIONAL — Guide National du Déménagement 2025

- **Statut** : 📋 À faire  
- **Objectif** :  
  Créer un “Guide national du déménagement 2025” comme page pilier, reliée à l’ensemble des
  fiches prix, checklists et guides thématiques.

### [P2]-TASK-211-SEO-PROBLEMES-CLIENTS — 10 pages problématiques clients

- **Statut** : 📋 À faire  
- **Objectif** :  
  Créer ~10 pages ciblant les grandes situations clients (bébé, famille, studio, étudiants,
  expatriation, seniors, handicap, etc.) pour renforcer l’E-E-A-T et l’autorité de Moverz.

---

## 📌 Notes

- Ce backlog est volontairement **plus léger** que celui de `moverz_main` (pas de multi-sites,
  pas de scripts de sync).  
- Pour la doc détaillée par tâche, utiliser `.cursor/tasks/` (1 task = 1 dossier, voir README).


