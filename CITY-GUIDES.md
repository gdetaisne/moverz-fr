# City guides (Bloc 6) — génération offline (Option A)

Objectif: servir des guides ville **2000+ mots** sans recalcul runtime (stabilité perf). Le site ne fait que servir du contenu déjà prêt.

## Source de contenu

- Source principale: `lib/city-longform.ts` (structure + texte générique)
- Overrides “full” (version la plus complète): `scripts/data/city-longform-overrides.full.ts`
- Générateur: `scripts/generate-city-guides.ts`
- Output (non commité): `public/data/city-guides/*.json` (ignoré via `.gitignore`)

## Génération

### Génération complète (recommandé sur ta machine / en build Docker)

```bash
npm run -s prebuild
```

### Génération par lots (utile si timeout / ressources limitées)

Le générateur accepte:
- `CITY_GUIDES_OFFSET` (départ)
- `CITY_GUIDES_LIMIT` (taille du lot)

Exemple: lots de 3

```bash
CITY_GUIDES_OFFSET=0 CITY_GUIDES_LIMIT=3 npm run -s prebuild
CITY_GUIDES_OFFSET=3 CITY_GUIDES_LIMIT=3 npm run -s prebuild
CITY_GUIDES_OFFSET=6 CITY_GUIDES_LIMIT=3 npm run -s prebuild
# ...
```

Boucle shell (macOS / linux):

```bash
for offset in $(seq 0 3 297); do
  CITY_GUIDES_OFFSET=$offset CITY_GUIDES_LIMIT=3 npm run -s prebuild
done
```

## Rendu côté site

- Page guide: `/demenagement/:slug/guide/`
  - Lit `public/data/city-guides/:slug.json`
  - Si le JSON manque: 404 (on évite tout recalcul runtime)

- Page ville: `/demenagement/:slug/`
  - Teaser + lien interne vers la page guide

## Notes

- Les JSON sont générés au build (Option A) et **ne doivent pas être commités**.
- Si tu mets à jour les overrides “full”, relance `npm run -s prebuild`.
