# Export Blog Multi-sites → moverz.fr/blog (Référence)

Ce fichier définit **le format d’export unique** pour les ~1 000 articles des anciens sites
(`moverz_main`) vers le blog central `moverz.fr/blog`.

Il sert de support pour construire un Google Sheet / CSV que l’on pourra ensuite consommer
dans le code.

---

## Colonnes obligatoires (export)

| Colonne             | Exemple                                           | Rôle |
|---------------------|---------------------------------------------------|------|
| `source_domain`     | `https://devis-demenageur-marseille.fr`          | D’où vient l’article (utile pour les 301 et analyses) |
| `old_url`           | `https://devis-demenageur-marseille.fr/blog/prix-demenagement-t3/` | URL exacte actuelle à rediriger |
| `status_code`       | `200`                                            | Statut HTTP actuel (optionnel mais utile pour debug) |
| `new_slug`          | `prix-demenagement-t3-marseille`                 | Slug cible sous `/blog/` (sans `/blog/` devant) |
| `new_url`           | `https://moverz.fr/blog/prix-demenagement-t3-marseille/` | URL finale attendue sur moverz.fr |
| `title`             | `Prix d’un déménagement de T3 à Marseille`       | `<title>` et H1 article |
| `meta_description`  | `Fourchettes de prix pour un T3 à Marseille selon volume et accès.` | Meta description SEO (optionnelle, peut être générée) |
| `category`          | `Prix`                                           | Catégorie fonctionnelle (Prix / Organisation / Administratif / Checklists / Autre) |
| `tags`              | `marseille;prix;t3`                              | Tags libres, séparés par `;` (facultatif) |
| `city_slug`         | `marseille` ou `""`                              | Slug de ville si l’article est très local, vide sinon |
| `is_evergreen`      | `TRUE` / `FALSE`                                 | Permet de distinguer evergreen vs actu/news |
| `published_at`      | `2024-03-15`                                     | Date de publication d’origine (si connue) |
| `updated_at`        | `2024-10-01`                                     | Date de dernière MAJ (facultative) |
| `word_count`        | `1450`                                           | Taille approximative (pour prioriser) |
| `keep_as_is`        | `TRUE` / `FALSE`                                 | TRUE = contenu migré quasi tel quel ; FALSE = nécessite réécriture / fusion |
| `merge_into_slug`   | `prix-demenagement-marseille`                    | Si fusion, slug de l’article cible (sinon laisser vide) |

---

## Règles de mapping SEO

- **1 article source = 1 URL finale** sous `/blog/`  
  - Pas de duplication : si 2 articles traitent exactement le même sujet, les fusionner
    et noter le slug cible dans `merge_into_slug`.
- **Les 301 article → article** seront dérivées du couple `old_url` → `new_url`.
- `city_slug` permet plus tard :
  - de **lier automatiquement** l’article à la/aux page(s) ville(s) concernée(s),
  - de filtrer les articles locaux par ville.

---

## Exemple de lignes

```text
source_domain,old_url,status_code,new_slug,new_url,title,meta_description,category,tags,city_slug,is_evergreen,published_at,updated_at,word_count,keep_as_is,merge_into_slug
https://devis-demenageur-marseille.fr,https://devis-demenageur-marseille.fr/blog/prix-demenagement-t3/,200,prix-demenagement-t3-marseille,https://moverz.fr/blog/prix-demenagement-t3-marseille/,"Prix d’un déménagement de T3 à Marseille","Fourchettes de prix pour un déménagement de T3 à Marseille.",Prix,"marseille;prix;t3",marseille,TRUE,2023-05-10,2024-01-15,1450,TRUE,
https://devis-demenageur-nice.fr,https://devis-demenageur-nice.fr/blog/checklist-demenagement/,200,checklist-demenagement-complete,https://moverz.fr/blog/checklist-demenagement-complete/,"Checklist déménagement : la liste complète","Liste des tâches à faire avant, pendant et après un déménagement.",Organisation,"checklist;organisation","",TRUE,2022-09-01,,1800,FALSE,checklist-demenagement-generale
```

---

## Étapes pratiques

1. **Exporter** depuis `moverz_main` tous les articles avec au minimum : `source_domain`, `old_url`, `title`, `published_at`.  
2. **Compléter** progressivement les colonnes SEO (`new_slug`, `new_url`, `category`, `city_slug`, `keep_as_is`, `merge_into_slug`).  
3. Une fois le fichier prêt, on pourra :
   - générer les objets `BLOG_POSTS` (ou une source JSON) côté `moverz.fr`,  
   - implémenter les 301 article → article en s’appuyant sur ce mapping.


