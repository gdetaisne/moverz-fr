# Outage 2026-01-08 (prod) — Revert `86efc7a`

## Contexte

Après les commits du **2026-01-08**, plusieurs sites sur le même VPS ont commencé à renvoyer **504** (Nginx: *upstream timed out*). Sur `moverz.fr`, même un `curl` direct vers le container (port 3000) **timeout** ⇒ suspicion forte d’un **process Node saturé / event loop bloquée** (CPU sync ou pression mémoire/GC).

## Action effectuée

- **Revert appliqué**: `86efc7a` (*feat: replace all emojis with Lucide React icons (premium tech)*)
- **Commit de revert**: `742b95e` (ce commit annule `86efc7a`)
- **Note technique**: pendant le revert, `lib/city-longform-overrides.ts` a été **conservé** (conflit “modify/delete”) car d’autres commits plus récents l’étendent (ex: `e03c6ad`).

## Pourquoi `86efc7a` était risqué (root cause plausible)

`86efc7a` a ajouté dans `lib/city-longform.ts` :

- un import d’un gros module de contenu: `CITY_LONGFORM_OVERRIDES`
- surtout une logique de “padding” à **2000 mots** via une boucle :
  - `while (wordCount < MIN_WORDS) { ... wordCount = countWordsInGuide(mutable); }`
  - `countWordsInGuide()` fait du travail **synchrone** (regex + split + reduce) sur **tous les paragraphes** du guide

Même si la boucle a un “safety break”, elle peut faire **beaucoup** d’itérations et refaire le calcul complet à chaque tour ⇒ **CPU sync**, **blocage de l’event loop**, puis timeouts / 504.

## Ce qu’on a perdu en revertant `86efc7a`

### 1) Icônes Lucide → retour emojis / symboles

- `app/blog/page.tsx`: catégories utilisent de nouveau `icon: "📚"`, etc. au lieu de composants Lucide.
- `components/pro/ProDashboardPreview.tsx`: les tabs réaffichent `📋/📊/🔔` au lieu des icônes Lucide.
- `components/templates/CorridorPage.tsx` + `components/templates/HubQuartiersPage.tsx`: retour `📍`, `✓`, `📊` au lieu de Lucide.

### 2) SEO “guide long-form” : overrides + remplissage min words

- `lib/city-longform.ts`: suppression de :
  - l’application des overrides (`CITY_LONGFORM_OVERRIDES`)
  - la logique de remplissage min 2000 mots (annexe + filler)

### 3) Suppression de pages/teasers introduits par `86efc7a`

- suppression de `app/demenagement/[slug]/guide/page.tsx` (route dédiée `/demenagement/:slug/guide`)
- suppression de `components/city/CityGuideTeaser.tsx` (teaser vers la page guide)

### 4) Changement de contenu/structure sur `app/demenagement/[slug]/page.tsx`

- retrait du bloc `WidgetActionSection` (conversion) + du teaser “guide” (car ils étaient introduits par `86efc7a`)
- la section long-form reste **désactivée** (elle l’était déjà via `a4d17bf`)

## Où reprendre ensuite (plan sûr)

Si on veut réintroduire le contenu long-form + overrides **sans** risquer un blocage CPU :

- **Ne pas** recalculer `countWordsInGuide()` dans une boucle.
- Option A (simple): calculer `wordCount` **une seule fois**, accepter si < 2000 (ne pas “forcer”).
- Option B (meilleure): si on force 2000 mots :
  - pré-calculer le wordCount des paragraphes “filler” (une fois), et maintenir un compteur incrémental
  - éviter de reconstruire tout `mutable` + re-parcourir tous les paragraphes à chaque itération
  - limiter strictement le nombre d’itérations (ex: max 20), et “padder” par blocs (pas par phrase)
- **Ne pas importer** de gros modules de contenu dans un chemin hot si ce n’est pas nécessaire :
  - privilégier un chargement à la demande (ex: `dynamic import`) + cache mémoire
  - ou scinder le contenu (JSON) et charger uniquement l’entrée du `citySlug`

Si l’objectif “premium tech” est seulement visuel :

- réintroduire Lucide **sans toucher** à `lib/city-longform.ts` (séparer le refacto UI des changements serveur/SEO).

