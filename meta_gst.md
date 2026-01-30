# meta_gst.md — Stratégie META “Best-in-class” (Moverz) + audit + plan

## Objectif
Construire un système **cohérent, scalable et mesurable** pour les metas (Title/Description/Canonical/Robots/OG/Twitter + schema) afin de:
- Maximiser **CTR** (SERP), **qualité du trafic** et **indexation**.
- Réduire la **duplication** (titles/descriptions/canonicals).
- Rendre la prod “stable SEO” malgré des milliers de pages (villes/corridors/quartiers).

## Analyse site (grandes lignes)
- **Type**: site SEO-first (Next.js App Router) + beaucoup de pages “programmatic SEO” (villes, corridors, quartiers) + blog + pages conversion.
- **Intent**:
  - **Transactionnel**: comparateur/devis, pages ville “déménagement + ville”, pages corridor (ville → destination).
  - **Informationnel**: blog (guides, anti-arnaque, checklists), hubs (villes/quartiers).
  - **Trust**: partenaires/critères, CGU/CGV, mentions.
- **Risque principal**: à grande échelle, les metas deviennent vite **génériques / duplicatives**, ce qui baisse CTR + dilue la pertinence. Il faut un système de templates strict + variables de contenu (ville, friction, etc.) + garde-fous.

## Stratégie META idéale — BEST IN CLASS

### 1) Principes non négociables
- **1 intention principale par URL** (éviter pages “fourre-tout”).
- **Canonical strict** (1 URL = 1 canonique; trailing slash uniforme).
- **Titles uniques** (au moins la partie avant la marque) + structure stable.
- **Descriptions orientées bénéfices** + preuve (avis, délais, “sans harcèlement”) + différenciation.
- **Robots**: index/follow par défaut, noindex seulement quand justifié (pages transactionnelles temporaires, params, étapes email…).
- **OG/Twitter** cohérents avec le Title/Desc (sinon partage social incohérent).
- **Schema** par type de page (Organization + WebSite global; Article pour blog; FAQPage si contenu; BreadcrumbList; éventuellement LocalBusiness/Service si pertinent).

### 2) Architecture de templates (par type de page)
**Convention**: Title = *[Intent + Mot-clé]* + *[Ville/Destination si applicable]* + “| Moverz”

#### Homepage (marque + proposition de valeur)
- **Title**: `Comparateur de déménagement anti-arnaque | 3 devis contrôlés | Moverz`
- **Meta description** (140–160 chars idéal SERP): bénéfice + preuve + différenciation.
- **OG image**: image dédiée (1200×630) type “brand + proof”.

#### Hubs (ex: /villes/, /quartiers/, /blog/)
- **Title**: `Villes couvertes | Comparateur déménagement | Moverz`
- **Desc**: orientée navigation + couverture + “choisir sa ville”.
- **Robots**: index.
- **Pagination**: Title/Desc doivent inclure `Page N` + canonical vers la page paginée (pas vers page 1).

#### Pages Ville (ex: /demenagement/[ville]/)
- **Title**: `Déménagement à {Ville} | 3 devis contrôlés en 5 jours | Moverz`
- **Desc**: `{Ville}: 3+ devis comparables sous 5 jours… + hook local (parking, accès, maison/centre-ville) + preuve avis`
- **Schema**: BreadcrumbList + Service (si possible) + FAQPage si FAQ.

#### Corridors (ex: /{ville}-vers-{destination}/)
- **Title**: `Déménagement {Ville} → {Destination} | Devis en 5 jours | Moverz`
- **Desc**: spécifique au corridor (distance, contraintes, timing) + valeur.
- **Canonical**: 1 corridor = 1 canonical (attention variantes “vers-paris” vs “paris-vers-…”).

#### Quartiers (ex: /{ville}/{quartier}/)
- **Title**: `Déménagement {Quartier} ({Ville}) | Pros contrôlés | Moverz`
- **Desc**: micro-local + bénéfices + friction (stationnement, immeubles, ascenseurs).
- **Robots**: index uniquement si contenu “réel” et différenciant; sinon “soft-noindex” stratégique (voir plan).

#### Blog (articles)
- **Title**: `{Sujet principal} (guide {AAAA}) | Moverz`
- **Desc**: 1 phrase “promesse” + 1 preuve + 1 angle unique.
- **Schema**: Article + image + dateModified; BreadcrumbList.
- **Canonical**: strict (pas de duplication via tags/params).

### 3) Règles de qualité (garde-fous)
- **Title**:
  - 45–60 caractères cible (tolérance selon mobile).
  - 1–2 mots-clés max, pas de bourrage.
  - Toujours inclure la **marque** en suffixe (sauf home où possible aussi).
- **Description**:
  - 140–160 chars cible; unique; phrase lisible.
  - Ajouter 1–2 “proof points” (ex: `⭐4.9/5`, `3+ devis`, `5 jours`, `sans harcèlement`) sans spam.
- **Images OG**:
  - Toujours absolute URL.
  - Idéal: OG images par type (home, city, blog, corridor).
- **Canonical**:
  - 100% déterministe depuis le path.
  - Trailing slash uniforme.
- **Robots**:
  - Query params: indexation désactivée si elles créent des duplicats (UTM, filtres, pagination “alternative”, etc.).

## Comment c’est paramétré actuellement (audit repo)

### Global
- `app/layout.tsx` définit des metas globales riches:
  - `metadataBase` en dur `https://moverz.fr`
  - `openGraph` & `twitter` avec image `/logo.png`
  - `robots` permissif + googleBot “max preview”
  - `alternates.canonical` en dur `https://moverz.fr/`
- `next.config.mjs`:
  - `trailingSlash: true` (important pour canonicals/sitemaps)
  - headers X-Robots-Tag noindex sur `/confirm-email/*` (bien)

### Helpers de metadata
- `lib/canonical-helper.ts` centralise:
  - `getCanonicalUrl()` basé sur `env.SITE_URL`
  - `getFullMetadata()` renvoie `title/description/alternates/openGraph`
  - `openGraph.images` pointe vers un asset existant (`/logo.png`)
- `lib/seo/metadata.ts` et `lib/metadata.ts` coexistent:
  - tous deux wrapper vers `getFullMetadata()` (duplication)
- Pages programmatic:
  - Villes/services/corridors/quartiers utilisent des generators (`getHubMetadata`, `generateCorridorMetadata`, `generateQuartierMetadata`) → plutôt sain (template-driven).

### Sitemaps / robots
- `app/robots.ts`: allow `/` + sitemap `https://moverz.fr/sitemap.xml`
- `app/sitemap.xml/route.ts`: sitemap index basé sur `env.SITE_URL` + cache CDN (`s-maxage=3600` + `stale-while-revalidate=86400`)

## Gaps / opportunités (priorité SEO)
- **Incohérence OG image**:
  - layout: `/logo.png`
  - helper canonical: `/logo.png` (corrigé)
  - risque: principalement “hygiene” (aperçus de liens), faible impact SEO direct.
- **Double module metadata** (`lib/metadata.ts` vs `lib/seo/metadata.ts`): risque de divergence future.
- **Title template global**: `template: "%s"` (pas de suffixe marque) → la marque peut disparaître sur beaucoup de pages si les pages ne la rajoutent pas.
- **Canonical base URL**:
  - layout hardcode `https://moverz.fr`
  - helpers utilisent `env.SITE_URL`
  - risque: environnements/staging ou changements de domaine moins sûrs.
- **Keywords**: présents globalement (peu utile en SEO moderne). Pas “grave”, mais peut être simplifié pour réduire bruit.
- **Quartiers**: à très grande échelle, le risque de “thin content” + duplication augmente; besoin d’une stratégie index/noindex **pilotée par qualité**.

## Plan ambitieux d’optimisation (P0 → P2)

### P0 (1–2 jours) — Cohérence & sécurité
- **Unifier la source de vérité**:
  - 1 seul module metadata (supprimer le doublon) et 1 seul template de marque.
- **Cohérence OG image**:
  - **constat (avant fix)**: `lib/canonical-helper.ts` référençait `${env.SITE_URL}/og-image.jpg`, mais `public/og-image.jpg` n’existait pas.
  - **décision (session)**: **Option B** → fallback OG vers un asset existant.
  - **implémenté**: `lib/canonical-helper.ts` pointe maintenant vers **`${env.SITE_URL}/logo.png`** (normalisé sans double slash).
- **Standard “Brand suffix”**:
  - mettre `title.template = "%s | Moverz"` globalement (et ajuster les pages qui incluent déjà “Moverz”).
- **Canonical & base URL**:
  - utiliser `env.SITE_URL` partout (layout inclus), trailing slash garanti.
- **Checklist QA (automatisable)**:
  - vérifier: title/desc/canonical/og:url/og:image sur 10 pages de chaque type.

### P1 (1–2 semaines) — CTR & couverture sémantique
- **Templates par type** (ville/corridor/quartier/blog) avec variables “local friction”.
- **OG images par type**:
  - au minimum: home / villes / corridors / blog.
  - idéal: city OG générée (même statique) avec `{Ville}`.
- **Schema**:
  - BreadcrumbList sur pages profondes.
  - Article (blog) complet.
  - FAQPage là où vous avez des FAQ (sans spam).
- **Pagination propre**:
  - metadata paginée `Page N` (title/desc) + canonical vers page N.

### P2 (1–2 mois) — “Quality-driven indexation” (scalable)
- **Pilotage index/noindex quartiers**:
  - définir des critères (longueur, originalité, liens internes, FAQ, images, etc.)
  - n’indexer que les quartiers qui passent le seuil qualité.
- **Observabilité SEO**:
  - exporter un “metadata map” (CSV) build-time pour audit (title/desc/canonical/og).
  - dashboards GSC: CTR par template + pages en duplication.

## Données structurées (JSON-LD) — Même approche “BEST IN CLASS”

### Objectif
Construire un **Knowledge Graph cohérent** (Organization/WebSite/WebPage + types page) qui:
- améliore l’éligibilité aux rich results (FAQ/Article/Breadcrumbs),
- augmente la confiance (entity consolidation),
- évite les pénalités/ignores Google liées au **spam** ou aux **données contradictoires**.

### Principes “Best-in-class” (non négociables)
- **Une seule source de vérité** pour chaque entité (ex: Organization) → jamais 2 versions contradictoires.
- **URLs & IDs stables**:
  - chaque entité a un `@id` stable (ex: `https://moverz.fr/#organization`),
  - toutes les URLs sont **canoniques** (trailing slash uniforme).
- **Toujours aligné au visible**:
  - FAQPage uniquement si les Q/R sont visibles,
  - BreadcrumbList doit refléter le breadcrumb affiché,
  - pas de “fake reviews/ratings”.
- **Minimal mais complet**:
  - peu de types, mais bien remplis (éviter d’empiler 10 schemas partiels).
- **1 script JSON-LD par page (idéal)** avec `@graph` (optionnel), sinon scripts séparés mais sans duplication.

### Blueprint recommandé (par type de page)

#### Global (site-wide, dans `app/layout.tsx`)
- **Organization** (`@id: …/#organization`) + logo + contact + areaServed.
- **WebSite** (`@id: …/#website`) + `name` + `url`.
  - **SearchAction** uniquement si une recherche interne existe réellement (sinon ne pas inventer).

#### Toutes les pages indexables
- **WebPage** (`@id: canonical`) avec `url`, `name/headline`, `description`, `isPartOf: #website`, `about`.
- **BreadcrumbList** si breadcrumb présent (pages profondes).

#### Blog (`/blog/[slug]/`)
- **BlogPosting/Article**:
  - `@id`, `mainEntityOfPage`, `headline`, `description`, `datePublished`, `dateModified`
  - `image` (ImageObject) si une image hero existe
  - `author` (Person ou Organization) + `publisher` (Organization)

#### Pages “Ville / Service / Corridor / Quartier”
- **Service** (optionnel): utile si vous voulez expliciter l’offre (comparateur + devis), mais sans sur-promettre.
- **FAQPage** seulement si FAQ structurée sur la page (et réponse texte).

### État actuel (audit repo)
- **Base technique saine**:
  - `components/schema/JsonLd.tsx` (Script JSON-LD propre, serialisation ok)
  - `components/schema/FAQSchema.tsx` + test `tests/jsonld-faq.test.ts`
  - `components/schema/ArticleSchema.tsx` (BlogPosting)
  - BreadcrumbList présent via:
    - `components/Breadcrumbs.tsx` (injecte un `<script>` JSON-LD)
    - `app/demenagement/[slug]/page.tsx` (injecte aussi un `<script>` BreadcrumbList) → **duplication**
- **Point critique**: **schemas contradictoires possibles**
  - `app/layout.tsx` injecte déjà un schema Organization (avec `AggregateRating`).
  - `app/page.tsx` injecte **à nouveau** un Organization + AggregateRating (valeurs différentes) → risque que Google ignore ou considère incohérent.
- **Hardcodes domaine**: plusieurs schemas utilisent `https://moverz.fr` en dur (BlogPosting/Breadcrumbs), au lieu de la canonical/env (risque si staging/domain change).

### Plan d’optimisation Données structurées (P0 → P2)

#### P0 (1–2 jours) — Déduplication + cohérence (gros ROI / faible risque)
- **Définir 1 seule “Organization truth”**:
  - une seule source pour `AggregateRating` (et alignée avec la preuve/avis réellement affichés).
- **Unifier l’injection JSON-LD**:
  - utiliser `JsonLd` partout (éviter `<script dangerouslySetInnerHTML>` dispersés).
- **Supprimer les duplications** (BreadcrumbList / Organization).
- **Centraliser base URL**:
  - générer toutes les URLs via la canonical (`env.SITE_URL` + helper) au lieu de hardcode.

#### P1 (1–2 semaines) — Couverture “rich results” propre
- **BreadcrumbList** systématique sur pages profondes (ville/corridor/quartier/blog) mais **une seule fois**.
- **Améliorer BlogPosting**:
  - ajouter `image` si dispo, `@id`, cohérence author/publisher.
- **QA & tests**:
  - ajouter tests unitaires JSON-LD (breadcrumb/article) sur le modèle de `jsonld-faq.test.ts`.

#### P2 (1–2 mois) — Graph qualité + gouvernance
- **Règles anti-spam** (gating):
  - FAQPage seulement si ≥ N Q/R et réponses utiles,
  - pas d’AggregateRating si la preuve n’est pas solide/traçable.
- **Observabilité**:
  - exporter un “schema inventory” build-time (liste des types/ids par URL) pour audits rapides.

## KPI / critères de succès
- **CTR**: +X% sur pages villes/corridors (mesuré via GSC, par groupe d’URL).
- **Duplication**: baisse du % de “Duplicate title/description” (crawl/GSC).
- **Indexation**: ratio “Valid indexed” ↑, “Crawled - currently not indexed” ↓ (surtout quartiers).

## Notes d’exécution (pragmatiques)
- Tout changement de template doit être:
  - **diffusé** (home → villes → corridors → quartiers → blog),
  - **mesuré** (annotation GSC / date de déploiement),
  - **réversible** (changement purement meta, sans casser routes).

## Roadmap exhaustive (Meta + Données structurées) — Hiérarchie logique + dépendances

> Objectif: terminer avec un système **best-in-class** en restant strictement aligné sur l’existant du repo.  
> Chaque étape ci-dessous inclut: **constat vérifié** → **action** → **dépendances** → **validation**.

### Décisions actées (session)
- **Organization schema**: **Global only** (source unique dans `app/layout.tsx`) → supprimer les duplications page-level (ex: home).
- **Module metadata**: standardiser sur **`lib/seo/metadata.ts`** comme point d’entrée (migration imports + suppression/alias contrôlé du doublon).

### Granularité des metas (SERP) — comment on définit le message par type de page

#### Niveau 0 — Fallback global (sécurité)
- **Rôle**: garantir qu’une page a toujours des metas minimales même si elle n’en fournit pas.
- **Source actuelle**: `app/layout.tsx` (metadata global).
- **Règle “best-in-class”**:
  - le global doit être **neutre** (marque + proposition de valeur),
  - le global ne doit **pas** “écraser” les pages spécifiques (ville/blog/corridor).

#### Niveau 1 — Templates “par type d’intent”
On définit des templates stables (Title + Description) par grandes familles d’URL.

- **Guideline copy (anti-fausse promesse, CTR + lead_click)** *(décidé)*
  - **SLA (vérités à respecter)**:
    - **Support Moverz**: réponse email sous 24h.
    - **Partenaires**: recommandation d’envoyer les devis sous 48h (non garanti côté client).
    - **Client**: **engagement** d’envoi de devis comparables sous **5 à 7 jours**.
  - **Home + pages money** (description):
    - `Recevez 5+ devis comparés sous 5 à 7 jours. Dossier anonyme, 0 harcèlement. Déménageurs contrôlés et assurés. 100% gratuit.`
  - **Pages villes** (description):
    - `Recevez 5+ devis comparés sous 5 à 7 jours pour votre projet depuis [VILLE]. Dossier anonyme, 0 harcèlement. Déménageurs contrôlés et assurés. 100% gratuit.`
  - **Règle**: on évite les promesses “temps réel” non garanties (ex: `48h` pour les devis) dans les metas. `5–7 jours` est OK car c’est un engagement Moverz.

- **Home (`/`)** (transactionnel marque)
  - **Title**: promesse principale + preuve + marque
  - **Description**: 1 promesse + 1–2 preuves (délais, “sans harcèlement”, avis) + “service gratuit”
  - **Source actuelle**: `app/page.tsx` + global dans `app/layout.tsx`

- **Pages Ville (`/demenagement/[ville]/`)** (transactionnel local)
  - **Title**: “Déménagement à {Ville} … | Moverz”
  - **Description**: promesse + preuve + **hook local** (déjà partiellement présent via `getCitySeoVars()` dans `lib/seo/metadata.ts`)
  - **Source actuelle**: `lib/seo/metadata.ts` → `getCityPageMetadata()` → `getFullMetadata()`

- **Services Ville (`/demenagement/[ville]/[service]/`)** (transactionnel segmenté)
  - **Title/Desc**: dérivés de `SERVICE_DEFINITIONS` (déjà en place), + preuve Moverz en suffixe cohérent
  - **Source actuelle**: `lib/seo/metadata.ts` → `getCityServiceMetadata()`

- **Corridors (`/[from]-vers-[to]/` et variantes)** (transactionnel corridor)
  - **Title**: “Déménagement {From} → {To} … | Moverz”
  - **Description**: devis/prix + différenciation Moverz
  - **Source actuelle**: `components/templates/CorridorPage.tsx` (`generateCorridorMetadata`) et `app/corridor/[from]/[to]/page.tsx` (qui fait déjà `getFullMetadata`)

- **Quartiers (`/[ville]/[quartier]/`)** (transactionnel micro-local)
  - **Title**: “Déménagement {Quartier} ({Ville}) … | Moverz”
  - **Description**: micro-local + preuves
  - **Source actuelle**: `components/templates/QuartierPage.tsx` (`generateQuartierMetadata`)

- **Blog (`/blog/[slug]/`)** (informationnel)
  - **Title**: titre article + contexte (“Blog déménagement Moverz” / “Moverz Pro”) → déjà présent dans `app/blog/[slug]/page.tsx`
  - **Description**: `post.description` (déjà en place)
  - **Limite actuelle vérifiée**: `BlogPostMeta` ne contient pas de champ image → on n’invente pas d’OG image spécifique article tant qu’on n’a pas une source fiable.

#### Niveau 2 — Variantes “entity-driven” (sans explosion combinatoire)
- **Règle**: on n’écrit pas 200 titles à la main; on injecte uniquement des variables **déjà disponibles et fiables**.
- **Exemple existant et fiable**: `getCitySeoVars()` (friction accès, profil urbain) utilisé dans `lib/seo/metadata.ts` pour enrichir la description ville.

#### Niveau 3 — Exceptions contrôlées (page-by-page)
- **Règle**: uniquement pour quelques pages “pilier” (home, hubs majeurs, pages légales sensibles).
- **Garde-fou**: une exception doit être documentée (raison + KPI).

### 0) Pré-requis “qualité” (à faire avant toute modif)
- **0.1 Inventaire des points d’entrée metadata**
  - **constat**: le repo contient ~200 exports `metadata` / `generateMetadata` dans `app/` (pages statiques + dynamiques).
  - **action**: lister les “templates” réels utilisés:
    - `app/layout.tsx` (global metadata + Organization JSON-LD)
    - `lib/canonical-helper.ts` (`getFullMetadata`)
    - `lib/seo/metadata.ts` (villes/services/hubs)
    - `components/templates/*` (corridors/quartiers/services…)
  - **validation**: tableau (URL type → generator → fichiers).

- **0.2 Inventaire des JSON-LD**
  - **constat**: JSON-LD est injecté via:
    - `components/schema/JsonLd.tsx` (propre)
    - `components/schema/FAQSchema.tsx`, `components/schema/ArticleSchema.tsx`
    - `components/Breadcrumbs.tsx` (script inline)
    - pages avec `<script type="application/ld+json">` direct (`app/page.tsx`, `app/demenagement/[slug]/page.tsx`, etc.)
  - **validation**: liste des pages qui injectent: Organization / FAQPage / BlogPosting / BreadcrumbList / WebPage (CTA).

### 1) P0 — Correctifs “risque immédiat / cohérence” (doit passer en premier)

#### 1.1 Corriger le fallback OG image cassé (impact large)
- **constat (avant fix)**: `lib/canonical-helper.ts` utilisait `${env.SITE_URL}/og-image.jpg`, mais l’asset n’existait pas dans `public/`.
- **action (décidée & appliquée)**:
  - **Option B (code)**: `getOpenGraphMetadata()` utilise désormais un asset existant (**`/logo.png`**) afin d’éviter tout 404.
- **dépendances**: aucune.
- **validation**:
  - sur une page qui appelle `getFullMetadata()` (ex: blog/corridor/quartier), vérifier que `og:image` pointe vers une ressource qui existe dans `public/`.

#### 1.2 Dédupliquer `BreadcrumbList` (éviter JSON-LD doublon)
- **constat**:
  - `components/Breadcrumbs.tsx` injecte déjà un `BreadcrumbList`.
  - `app/demenagement/[slug]/page.tsx` injecte aussi un `BreadcrumbList` en plus (et utilise `Breadcrumbs`).
- **action**: choisir **une seule** source (recommandé: `Breadcrumbs` + `JsonLd`).
- **dépendances**: 1.4 si on centralise base URL.
- **validation**: une page “ville” ne doit avoir qu’**un** `BreadcrumbList` dans le HTML.

#### 1.3 Dédupliquer `Organization + AggregateRating` (éviter contradiction)
- **constat**:
  - `app/layout.tsx` injecte Organization + AggregateRating (via `JsonLd`).
  - `app/page.tsx` injecte aussi Organization + AggregateRating (valeurs différentes).
- **action (décision requise)**:
  - **Option A (global only)**: garder Organization uniquement dans `app/layout.tsx`, supprimer celui de `app/page.tsx`.
  - **Option B (home only)**: déplacer Organization vers home uniquement (et retirer du layout) — implique que toutes les pages n’auront plus l’entité.
- **dépendances**: aucune.
- **validation**: une seule définition `Organization` rendue à l’échelle du site + rating cohérent.

#### 1.4 Centraliser la base URL dans schema + metadata
- **constat**:
  - metadata: `app/layout.tsx` hardcode `https://moverz.fr`, `lib/canonical-helper.ts` utilise `env.SITE_URL`.
  - schema: BlogPosting/Breadcrumbs/Organization utilisent `https://moverz.fr` en dur à plusieurs endroits.
- **action**:
  - faire converger vers **une seule source** (`env.SITE_URL` + helpers canoniques) pour toutes les URLs.
- **dépendances**: 1.2 (breadcrumbs), 1.3 (org), 2.x (standardisation).
- **validation**: en changeant `SITE_URL`, canonicals + JSON-LD URL se mettent à jour de façon déterministe.

### 2) P1 — Standardiser “best-in-class” les metas (sans changer l’architecture globale)

#### 2.1 Standard “Brand suffix” global
- **constat**: `app/layout.tsx` a `title.template = "%s"` → la marque peut disparaître.
- **action (implémentée)**: `title.template = "%s | Moverz"` + suppression des suffixes “| Moverz” dans les titres page-level/générateurs.
- **garde-fou (implémenté)**: sur les pages services “par ville” qui passent un title legacy à `generateCityServiceMetadata`, on normalise le suffixe pour éviter `… | Moverz | Moverz`.
- **dépendances**: aucune.
- **validation**: sur 10 pages types, Title finit toujours par “| Moverz” (sauf exceptions décidées).

#### 2.2 Harmoniser OpenGraph/Twitter entre global et helpers
- **constat**:
  - layout: OG/Twitter utilisent `/logo.png`
  - helpers: OG utilise désormais `/logo.png` (aligné layout) et ne définit pas explicitement Twitter.
- **action**:
  - décider un “default OG image” unique + l’appliquer aux deux niveaux,
  - décider si `getFullMetadata()` doit aussi définir `twitter` (pour éviter des pages sans Twitter explicite).
- **dépendances**: 1.1 (OG image), 2.1 (titles).
- **validation**: sur pages qui utilisent `getFullMetadata()`, OG + Twitter sont cohérents (titre, desc, image).

#### 2.3 Canonical/languages/robots: rendre explicite ce qui doit l’être
- **constat**:
  - `app/layout.tsx` définit `alternates.languages` uniquement pour `fr-FR` sur la home.
  - `getFullMetadata()` définit `alternates.canonical` mais pas les languages.
- **action (factuel, sans supposer du multi-lang)**:
  - conserver `fr-FR` si c’est bien l’unique langue,
  - documenter clairement où sont définis `robots` (global vs pages particulières comme `/confirm-email`).
- **dépendances**: 2.1/2.2.
- **validation**: canonical unique, robots cohérents, pas d’URL alternatives fantômes.

### 3) P1 — Best-in-class JSON-LD (sans inventer de features)

#### 3.1 Unifier la mécanique d’injection JSON-LD
- **constat**: coexistence de `JsonLd` et de `<script dangerouslySetInnerHTML>` (Breadcrumbs, Home, City page).
- **action**:
  - standardiser: **utiliser `JsonLd` partout** (même pour Breadcrumbs/CTA) pour réduire les divergences.
- **dépendances**: 1.2/1.3/1.4.
- **validation**: plus aucun `<script type="application/ld+json">` “manuel” hors `JsonLd` (sauf exception documentée).

#### 3.2 BlogPosting: rendre 100% canonique et cohérent
- **constat**: `components/schema/ArticleSchema.tsx` hardcode `https://moverz.fr` et ne peut pas inclure d’image (le modèle `BlogPostMeta` n’a pas de champ image).
- **action**:
  - baser `url`/`@id` sur canonical/env,
  - ne pas ajouter `image` tant qu’on n’a pas de source 100% fiable dans le modèle.
- **dépendances**: 1.4.
- **validation**: JSON-LD BlogPosting parseable, URLs canoniques, pas de champs inventés.

#### 3.3 FAQPage: garder le “single source” et éviter le spam
- **constat**: test existant `tests/jsonld-faq.test.ts` garantit l’alignement FAQ visible ↔ schema pour un composant.
- **action**:
  - réutiliser `FAQSchema`/`buildFAQSchema` partout où une FAQ est visible,
  - éviter d’ajouter FAQPage sur des pages sans bloc FAQ visible.
- **dépendances**: 3.1.
- **validation**: FAQ rich result: uniquement où FAQ visible; JSON-LD sans HTML.

### 4) P2 — Gouvernance & scalabilité (quand P0/P1 sont stables)

#### 4.1 Supprimer la duplication de modules metadata (risque de divergence future)
- **constat**: `lib/metadata.ts` et `lib/seo/metadata.ts` font (en partie) le même rôle (wrappers vers `getFullMetadata`).
- **action (décision requise)**:
  - **Option A**: garder uniquement `lib/seo/metadata.ts` et migrer les imports.
  - **Option B**: garder `lib/metadata.ts` mais le transformer en alias/documentation, sans logique propre.
- **dépendances**: 2.x.
- **validation**: un seul point d’entrée “metadata” documenté; aucun import résiduel du module supprimé.

#### 4.2 Mettre en place une checklist d’audit automatisable
- **constat**: il existe déjà un test JSON-LD FAQ; pas (encore) de tests breadcrumb/article.
- **action**:
  - ajouter tests (article/breadcrumb) + un script d’audit “metadata inventory” (CSV) build-time.
- **dépendances**: 2.x + 3.x.
- **validation**: CI/Tests attrapent: OG image manquante, doubles schemas, canonicals incorrectes.

