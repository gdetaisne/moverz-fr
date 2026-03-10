# Ressources LLM (ChatGPT / Perplexity / Claude)

- **Doc interne** : `LLM.md`
- **Fichier standard crawlers IA (site)** : `/llms.txt` (servi depuis `app/llms.txt/route.ts`, contenu généré dans `public/llms.txt` via `npm run update-llm`)

# Moverz Hub (moverz.fr)

This is the main Moverz website, serving as a hub for our 11 local moving comparison sites.

**📚 Important**: Before making any code changes, please read the [documentation garde-fous](.cursor/INDEX.md) (28 min, prevents 95% of bugs).

## Project Structure

- **`app/`**: Next.js App Router pages (homepage, /villes, /choisir-ville, /comment-ca-marche, /notre-offre, /faq, /contact, /a-propos, legal pages).
- **`components/`**: Reusable React components, adapted from local sites.
- **`lib/`**: Utility functions and data (e.g., `cities.ts` for local site links, `env.ts`, `canonical-helper.ts`, `reviews.ts`).
- **`public/`**: Static assets (images, favicons).
- **`public/fonts/`**: Fonts self-hosted (e.g. Inter) to avoid network dependencies during build.
- **`next.config.mjs`**: Next.js configuration, including redirects.
- **`tailwind.config.ts`**: Tailwind CSS configuration.
- **`postcss.config.cjs`**: PostCSS configuration.
- **`tsconfig.json`**: TypeScript configuration.
- **`package.json`**: Project dependencies and scripts.
- **`Dockerfile`**: Docker configuration for deployment.
- **`captain-definition`**: CapRover deployment configuration.

## Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```
2.  **Configure environment variables**:
    Create a `.env.local` file with:
    ```
    SITE_URL=https://moverz.fr
    NEXT_PUBLIC_BACKOFFICE_URL=https://moverz-backoffice.gslv.cloud
    ```
    See `ENV.md` for details.
3.  **Run in development mode**:
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:3040`.

4.  **Build for production**:
    ```bash
    npm run build
    ```

Note: the site self-hosts Inter via `next/font/local` (see `app/layout.tsx`) to avoid flaky builds caused by fetching Google Fonts.
5.  **Start production server**:
    ```bash
    npm start
    ```

## Key Features

-   **Central Hub**: Links to 11 local moving comparison sites.
-   **Verified comparison**: 3 risk analyses /100 (customer experience, financial, legal) for reliable movers.
-   **Vetted Movers**: Only verified movers (solvency, no legal alerts, experience).
-   **User-centric**: 100% free, anonymous quotes, no phone harassment.
-   **SEO Optimized**: Specific metadata and canonicals for national targeting.

## 🛡️ Documentation Garde-Fous

**IMPORTANT**: This project has comprehensive documentation to prevent common bugs.

### Quick Start (28 min reading = -95% bugs)

1. **[INDEX](.cursor/INDEX.md)** - Start here, documentation overview
2. **[PRINCIPES-SACRES](.cursor/PRINCIPES-SACRES.md)** (10 min) - Non-negotiable rules
3. **[ZONES-DE-RISQUE](.cursor/ZONES-DE-RISQUE.md)** (10 min) - Critical areas & common bugs
4. **[CHECKLIST-PRE-CODE](.cursor/CHECKLIST-PRE-CODE.md)** (3 min) - Workflow before/during/after coding

### Critical Rules

**Never do without understanding impact**:
- ❌ Modify canonical/URL/metadata
- ❌ Use cityData (hub is national, not local)
- ❌ Hardcode specific city
- ❌ Point CTAs to `/devis-gratuits/` (→ use `/choisir-ville/` instead)
- ❌ Hardcode local site URLs (→ use `lib/cities.ts`)

**Always do**:
- ✅ Keep national focus (not city-specific)
- ✅ CTAs → `/choisir-ville/`
- ✅ Use `lib/cities.ts` for local site links
- ✅ Check Bordeaux & Toulouse URL exceptions
- ✅ Maintain design consistency with local sites

### Key Differences: Hub vs Local Sites

| Aspect | Hub (moverz.fr) | Local Sites (e.g., Nice) |
|--------|-----------------|--------------------------|
| **Focus** | National (France) | Local (City) |
| **cityData** | ❌ Forbidden | ✅ Required |
| **CTAs** | → /choisir-ville/ | → /devis-gratuits/ |
| **Cities** | lib/cities.ts (list) | cityData (city data) |
| **Content** | Generic France | City-specific |
| **SEO** | "moving France" | "moving [City]" |

## Deployment

This project is designed for deployment on CapRover using the provided `Dockerfile` and `captain-definition`.
