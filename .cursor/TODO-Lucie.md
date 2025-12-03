# TODO ACTIF - Lucie (moverz.fr)

> Version simplifiée du système `moverz_main/.cursor`, adaptée au hub unique.

---

## 🔥 EN PRIORITÉ (P1)

### [P1]-TASK-BLOG-EXPORT-ARTICLES — Export brut des articles

- **Statut** : 📋 À faire  
- **Pourquoi maintenant ?** : Prépare la migration SEO la plus sensible (blog) avant les 301 domaines.  
- **Prochain step** :  
  - Utiliser `moverz_main` pour générer `BLOG-EXPORT-RAW.csv` selon `BLOG-MIGRATION-EXPORT.md`.

### [P1]-TASK-BLOG-MAPPING-SEO — Mapping slugs & URLs finales

- **Statut** : 📋 À faire  
- **Pourquoi maintenant ?** : Condition nécessaire pour créer les vraies URLs `/blog/[slug]/` et planifier les 301 article → article.  
- **Prochain step** :  
  - Définir une première série de `new_slug` / `new_url` pour les articles les plus importants (prix, guides majeurs).

### [P1]-TASK-BLOG-IMPORT-MOVERZ — Import contenu dans `/blog/`

- **Statut** : 📋 À faire  
- **Pourquoi maintenant ?** : Une fois l’export/mapping fait, permet de consolider tout le contenu sur `moverz.fr`.  
- **Prochain step** :  
  - Concevoir la source (JSON/TS) et le code d’import basé sur l’export.

### [P1]-TASK-SEO-301-FINALISATION — Stabiliser les 301

- **Statut** : 📋 À faire  
- **Pourquoi maintenant ?** : Assurer une migration propre avant les grosses optimisations de contenu.  
- **Prochain step** :  
  - Importer le fichier complet des 301, tester 30 URLs en échantillon, corriger les slugs douteux.

### [P1]-TASK-SEO-PRIX-TOP20 — Booster en priorité les articles Prix

- **Statut** : 📋 À faire  
- **Pourquoi maintenant ?** : Ce sont les contenus les plus monétisables (intention forte).  
- **Prochain step** :  
  - Lister les 20 articles Prix cibles (T2, volumes, Paris/Marseille/Lyon/Nice, longue distance, lecture de devis) et lancer les réécritures au format Moverz.

### [P1]-TASK-SEO-LONGFORM-40 — Optimiser 40 gros articles à fort potentiel

- **Statut** : 📋 À faire  
- **Pourquoi maintenant ?** : Tes longs guides peuvent devenir de vraies “money pages” si on les structure et les maillage bien.  
- **Prochain step** :  
  - Choisir 40 articles dans `moverz_articles_fort_potentiel.csv` et les passer un par un au template (Hn, maillage, CTA).

---

## 🟠 MIGRATION DOMAINES (P1)

### [P1]-TASK-DOMAINS-VAGUE1 — Plan de Vague 1 domaines → pages villes

- **Statut** : 📋 À faire  
- **Pourquoi ?** : Première vague maîtrisée pour limiter le risque SEO.  
- **Prochain step** :  
  - Choisir les domaines les plus faibles (trafic/backlinks) et les marquer comme Vague 1 à partir de `lib/domain-redirects.ts`.

### [P1]-TASK-DOMAINS-MONITORING — Plan de suivi GSC

- **Statut** : 📋 À faire  
- **Pourquoi ?** : Pouvoir mesurer proprement l’impact de chaque vague.  
- **Prochain step** :  
  - Lister les KPIs et les rapports GSC à suivre (impressions, clics, erreurs, couverture).

---

## 🟡 P2 - Produit & Finitions

### [P2]-TASK-FORM-MULTI-TENANT — App formulaire marque blanche

- **Statut** : 📋 À faire  
- **Pourquoi ?** : Prépare une offre B2B white-label autour de `devis.moverz.fr`.  
- **Prochain step** :  
  - Définir le type `PartnerConfig` (brand, couleurs, URLs, webhooks).

### [P2]-TASK-FORM-FALLBACK — Page `/devis/` sur moverz.fr

- **Statut** : 📋 À faire  
- **Pourquoi ?** : Garantir un fallback propre si `devis.moverz.fr` tombe, sans casser l’expérience utilisateur.  
- **Prochain step** :  
  - Créer `app/devis/page.tsx` avec un hero + `FallbackQuoteForm`.

### [P2]-TASK-VILLES-CONTENU-FINITION — Finitions pages villes

- **Statut** : 📋 À faire  
- **Pourquoi ?** : Passer du “très bon” à “excellent” sur les LPs principales.  
- **Prochain step** :  
  - Lister les petits ajustements par ville (prix, quartiers, liens blog) et les traiter en batch.

---

## 💡 Notes de Lucie

- Ce fichier sert de **vue courte** sur ce qui compte pour moi sur `moverz.fr`.  
- Pour la doc détaillée, utiliser `.cursor/tasks/` si besoin de creuser une tâche en profondeur.


