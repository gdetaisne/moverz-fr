# 📊 Moverz Content Intelligence Platform

Système complet de gestion et d'intelligence du contenu SEO pour Moverz.

## 🚀 Fonctionnalités

### 1. 🔐 Authentification Sécurisée
- Connexion par mot de passe (défini dans `.env.local`)
- Sessions sécurisées avec cookies httpOnly
- Protection middleware sur toutes les routes `/admin/*`
- **NoIndex garanti** sur toutes les pages admin (headers + robots.txt + metadata)

### 2. 📝 Dashboard Blog
- Monitoring des articles publiés
- Statistiques globales (nombre d'articles, mots moyens, publications mensuelles)
- Vue des articles récents avec détails
- Prêt pour intégration Google Search Console (clicks, impressions, CTR, position)

### 3. 🔍 Veille Concurrentielle
- Scraping de 50 blogs concurrents (respectueux robots.txt, rate-limited 1.5-2s)
- Analyse sémantique automatique (thèmes, villes, services, intent)
- Statistiques globales : top thèmes, top villes, avg word count
- Détection de contenu "pré-IA" (focus qualité humaine)

### 4. 🧠 Gap Analysis
- Comparaison automatique : concurrents vs Moverz
- Scoring d'opportunités (0-100) basé sur :
  - Couverture concurrentielle
  - Qualité du contenu (word count, schema, structure)
  - Status Moverz (absent/weak/exists)
  - Thématiques stratégiques
- Recommandations de structure (H2, word count, éléments obligatoires)
- Export JSON pour intégration avec calendrier éditorial

### 5. 📅 Calendrier Éditorial
- Vue Kanban : Backlog → En cours → Review → Publié
- Gestion des priorités (high/medium/low)
- Target word count et deadlines
- Intégration automatique des gaps identifiés

### 6. 🔗 Internal Linking Intelligence
- Génération automatique de suggestions de liens internes
- Scoring de pertinence (thématique, géographique, pillar content)
- Identification de clusters de contenu
- Détection d'articles orphelins
- Statistiques : avg liens/article, top linked articles

### 7. ✨ AI Content Studio
- Génération d'articles depuis requête long-tail
- **Moverz Voice Prompt Engineering** : ton authentique, personnel, anti-robotique
- Respect strict E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
- SEO on-page automatique (title, meta, H2/H3, FAQ, schema.org)
- Preview + scoring (SEO, E-E-A-T, Tone)
- Actions : Publier, Sauvegarder brouillon, Régénérer

## 📂 Architecture

```
/app/admin/
├── layout.tsx          # Layout commun (nav + noindex metadata)
├── page.tsx            # Dashboard d'accueil
├── login/page.tsx      # Page de connexion
├── blog/page.tsx       # Dashboard blog (monitoring)
├── veille/page.tsx     # Veille concurrentielle
├── editorial/page.tsx  # Calendrier éditorial Kanban
├── linking/page.tsx    # Internal linking
└── studio/page.tsx     # AI Content Studio

/lib/admin/
├── auth.ts                 # Authentification (hash, sessions)
├── scraper.ts              # Scraping engine (cheerio)
├── content-analyzer.ts     # Analyse sémantique (thèmes, villes, intent)
├── gap-analyzer.ts         # Comparaison Moverz vs concurrents
├── internal-linking.ts     # Suggestions de liens internes
└── moverz-voice-prompt.ts  # Prompt engineering pour IA

/scripts/
├── scrape-competitors.ts   # Script de scraping des 50 blogs
└── analyze-gaps.ts         # Script d'analyse des gaps

/data/
├── competitor-blogs.json   # Liste des 50 blogs à scraper
├── scraped-articles.json   # Résultats du scraping
├── content-gaps.json       # Résultats du gap analysis
└── scrape-history/         # Historique hebdomadaire
```

## 🛠️ Installation & Configuration

### 1. Variables d'environnement

Créez `.env.local` à la racine :

```bash
# Admin Authentication
ADMIN_PASSWORD="EzH"
SESSION_SECRET="moverz-secure-session-key-2026-7f9d8e6c5b4a3210"

# Google Search Console API
GSC_CREDENTIALS_JSON='{"type":"service_account",...}'
GSC_SITE_URL="sc-domain:moverz.fr"
```

### 2. Dépendances

```bash
npm install cheerio @types/cheerio tsx --save-dev
```

### 3. Lancer le scraping

```bash
# Scraper les 50 blogs concurrents (prend ~30-60 min selon rate limiting)
npx tsx scripts/scrape-competitors.ts

# Analyser les gaps
npx tsx scripts/analyze-gaps.ts
```

### 4. Accéder au dashboard

```bash
# Démarrer le serveur Next.js
npm run dev

# Accéder au dashboard
open http://localhost:3000/admin/login
# Mot de passe : EzH
```

## 🔒 Sécurité & NoIndex

### Protection Authentification
- Middleware vérifie session sur toutes routes `/admin/*` (sauf `/admin/login`)
- Redirection automatique vers `/admin/login` si non authentifié
- Sessions signées avec HMAC-SHA256

### NoIndex Garanti
✅ **Triple protection** :
1. **Headers HTTP** : `X-Robots-Tag: noindex, nofollow, noarchive` (middleware)
2. **Metadata Next.js** : `robots: { index: false, follow: false }` (layout)
3. **robots.txt** : `Disallow: /admin/` pour tous les user-agents

## 📊 Workflow Recommandé

### Semaine Type

**Lundi** : Veille concurrentielle
1. Lancer scraping si pas fait récemment : `npx tsx scripts/scrape-competitors.ts`
2. Analyser gaps : `npx tsx scripts/analyze-gaps.ts`
3. Consulter `/admin/veille/` pour insights

**Mardi-Mercredi** : Planification éditoriale
1. Consulter `/admin/veille/` pour identifier top opportunities
2. Dans `/admin/editorial/`, ajouter articles prioritaires au Backlog
3. Déplacer articles en "En cours"

**Jeudi-Vendredi** : Production de contenu
1. Dans `/admin/studio/`, générer brouillons depuis requêtes long-tail
2. Éditer/enrichir avec expertise Moverz
3. Consulter `/admin/linking/` pour ajouter liens internes pertinents
4. Publier

**En continu** :
- Surveiller `/admin/blog/` pour métriques de performance
- Ajuster stratégie éditoriale selon données GSC (quand intégré)

## 🎯 Moverz Voice - Principes Clés

Le système utilise un prompt engineering spécifique pour générer du contenu **authentique et non-robotique**.

### ✅ À FAIRE
- Ton conversationnel ("vous", "nous")
- Questions rhétoriques naturelles
- Transitions fluides, pas mécaniques
- Exemples concrets et chiffrés
- Émotions et empathie

### ❌ À ÉVITER
- Phrases robotiques ("Il est important de noter que...")
- Superlatifs excessifs ("absolument parfait")
- Jargon marketing creux ("solution innovante")
- Ton impersonnel et distant

### 📐 Structure Type
- **Intro** : Hook émotionnel + contexte (150-200 mots)
- **Corps** : 4-6 H2 avec exemples concrets (300-500 mots/section)
- **FAQ** : 3-5 Q/R en fin d'article
- **Conclusion** : Récap + CTA Moverz (100-150 mots)

## 🚀 Prochaines Étapes

### Phase 1 : MVP Opérationnel ✅ (FAIT)
- [x] Auth system + NoIndex
- [x] Scraping engine
- [x] Gap analysis
- [x] Internal linking
- [x] 5 dashboards
- [x] AI Studio avec Moverz Voice

### Phase 2 : Intégrations & Automatisation
- [ ] Google Search Console API (métriques trafic réel)
- [ ] Auto-publish vers `/content/blog/` (création fichiers Markdown)
- [ ] Webhook Slack/Discord pour notifications
- [ ] Cron jobs pour scraping hebdomadaire automatique

### Phase 3 : Intelligence Avancée
- [ ] NLP avancé (TF-IDF, embeddings) pour gap analysis
- [ ] A/B testing de titres/meta descriptions
- [ ] Prédiction de performance SEO avant publication
- [ ] Dashboard analytics avec visualisations (charts, heatmaps)

## 📞 Support & Maintenance

### Dépannage Courant

**Erreur "Failed to fetch blog homepage"**
→ Blog concurrent bloque le scraping. Vérifier robots.txt et User-Agent.

**Session expire trop vite**
→ Modifier `SESSION_DURATION` dans `lib/admin/auth.ts` (défaut: 7 jours)

**Données scraping vides**
→ Certains blogs ont structure HTML non-standard. Améliorer sélecteurs dans `scraper.ts`.

**NoIndex pas respecté**
→ Vérifier les 3 couches : middleware, layout metadata, robots.txt

### Contact
Pour questions techniques : utiliser Cursor AI en mode Agent 🤖

---

**Construit avec ❤️ par Cursor AI pour Moverz**
Version 1.0 - Mars 2026
