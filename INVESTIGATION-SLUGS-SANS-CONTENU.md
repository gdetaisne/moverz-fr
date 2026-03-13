# Enquête : Slugs sans contenu canonique

**Date** : 12 mars 2026  
**Script** : `scripts/investigate-slugs-sans-contenu.mjs`

---

## Ce que signifie "slug sans contenu canonique"

Un slug est **dans blog-data.ts** (métadonnées : titre, description, date) **mais pas** dans une source de contenu canonique (body markdown).

### Sources de contenu canonique

| Fichier | Rôle |
|---------|------|
| `lib/blog-canonique.ts` | Articles piliers validés |
| `lib/blog-nouveaux-2026.ts` | Nouveaux articles 2026 |
| `lib/blog-markdown-posts.ts` | Articles au format markdown intégré |
| `lib/blog-longtail.ts` | Articles long-tail |
| `lib/blog-longtail-pack2.ts` | Pack 2 long-tail |
| `lib/blog-arnaques.ts` | Article arnaques |
| `lib/blog-pro-canonique.ts` | Blog Pro |
| `content/blog/*.md` | Articles au format fichier markdown |

### Conséquence

- **Sans contenu canonique** → `getPublishedPostBySlug(slug)` retourne `undefined` → **404 (notFound)**
- Ces slugs apparaissent dans le catalogue (ex : sitemap si généré depuis BLOG_DATA) mais la page `/blog/[slug]` n’existe pas

---

## Résultats de l’enquête (12 mars 2026)

| Métrique | Valeur |
|----------|--------|
| Slugs dans BLOG_DATA | 1 014 |
| Slugs avec contenu canonique | 936 |
| **Slugs SANS contenu canonique** | **256** |
| Dont avec trafic Bing AI (rapport 3/12) | **0** |

### Conclusion

Les **256 slugs sans contenu** viennent surtout du CSV auto-généré (`moverz_clean_articles.csv`).  
Aucun de ces slugs n’est dans la liste des URLs à fort trafic Bing AI du rapport du 12 mars.  
Les 11 articles prioritaires ont soit déjà du contenu, soit reçu du contenu lors de l’optimisation.

---

## Exemples de slugs sans contenu (20 premiers)

1. `aide-demenagement-amis-famille-nantes`
2. `articles-pilier-06-batch`
3. `assurance-garde-meuble-nantes`
4. `autorisation-stationnement-strasbourg`
5. `basse-saison-demenagement-nantes`
6. `comparatif-formules-economiques-nantes`
7. `dem%c3%a9nageur-specialise-piano-rennes` *(slug encodé)*
8. `demenagement-%c3%a9clair-24h-toulouse`
9. `demenagement-%c3%a9clair-toulouse`
10. `demenagement-imm%c3%a9diat-24h-toulouse`
11. `demenagement-imm%c3%a9diat-toulouse`
12. `demenagement-instantan%c3%a9-24h-toulouse`
13. `demenagement-instantan%c3%a9-toulouse`
14. `demenagement-piano-thabor-sans-ascenseur`
15. `demenagement-semaine-vs-weekend-nantes`
16. `demenagement-vern-sur-seiche`
17. `demenageur-rouen-guide-complet`
18. `demenageur-rouen-pas-cher-guide`
19. `duree-minimum-garde-meuble-lille`
20. `garde-meuble-court-terme-long-terme-lille`

*(… et 236 autres)*

---

## Actions possibles

### 1. Laisser tel quel (recommandé pour l’instant)

- Ces 256 slugs ne reçoivent pas de trafic Bing AI significatif d’après le rapport.
- Ils peuvent rester en 404 tant qu’ils ne génèrent pas de trafic.
- Si besoin, ajouter une redirection 301 vers une page pertinente (ex. hub ville).

### 2. Créer du contenu

- Pour les slugs utiles : ajouter un `body` dans `lib/blog-nouveaux-2026.ts` ou `lib/blog-canonique.ts`.
- Prioriser selon le trafic réel (Search Console, Bing AI).

### 3. Nettoyer BLOG_DATA

- Retirer du CSV / générateur les slugs qui ne seront jamais utilisés.
- Cela évite d’avoir des entrées “fantômes” dans le catalogue.

### 4. Redirections

- Pour certains slugs (ex. doublons, anciennes variantes) : ajouter une 301 dans `redirects/blog-missing-301.mjs` vers la bonne version ou une page hub.

---

## Relancer l’enquête

```bash
node scripts/investigate-slugs-sans-contenu.mjs
```
