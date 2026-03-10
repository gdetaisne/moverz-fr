# 🚀 Quick Start Guide - Moverz Admin Dashboard

## Accès Rapide

### 1. Démarrer le serveur
```bash
npm run dev
```

### 2. Se connecter
Ouvrez votre navigateur : **http://localhost:3000/admin/login**

**Mot de passe** : `EzH`

### 3. Explorer les dashboards

Une fois connecté, vous avez accès à :

| Dashboard | URL | Description |
|-----------|-----|-------------|
| 🏠 Accueil | `/admin/` | Vue d'ensemble du système |
| 📝 Blog | `/admin/blog/` | Monitoring des articles publiés |
| 🔍 Veille | `/admin/veille/` | Analyse concurrentielle |
| 📅 Éditorial | `/admin/editorial/` | Calendrier Kanban |
| 🔗 Linking | `/admin/linking/` | Suggestions de liens internes |
| ✨ AI Studio | `/admin/studio/` | Génération d'articles IA |

## Premiers Pas

### Option A : Utiliser les données de démonstration
Les dashboards fonctionnent immédiatement avec des données de démonstration.

### Option B : Scraper les vrais blogs concurrents

```bash
# Lancer le scraping (prend 20-40 min)
npx tsx scripts/scrape-competitors.ts

# Analyser les gaps de contenu
npx tsx scripts/analyze-gaps.ts
```

Les données seront sauvegardées dans `data/` et automatiquement chargées par les dashboards.

## Générer votre premier article

1. Allez sur **http://localhost:3000/admin/studio/**
2. Entrez une requête long-tail, exemple :
   ```
   prix déménagement 3 pièces Lyon
   ```
3. Cliquez sur **"Générer l'article"**
4. L'article sera généré avec le ton Moverz (authentique, SEO-optimisé, E-E-A-T compliant)
5. Actions disponibles : **Publier**, **Sauvegarder brouillon**, **Régénérer**

## Fonctionnalités Clés

### 🔐 Sécurité NoIndex
✅ Toutes les pages `/admin/*` sont **automatiquement protégées** :
- Headers HTTP : `X-Robots-Tag: noindex`
- Metadata Next.js : `robots: { index: false }`
- Robots.txt : `Disallow: /admin/`

### 🔗 Internal Linking Automatique
Le dashboard **Linking** génère automatiquement des suggestions de liens internes basées sur :
- Pertinence thématique
- Proximité géographique
- Articles piliers
- Services complémentaires

### 🧠 Gap Analysis Intelligent
Le système compare votre contenu avec 50 blogs concurrents et identifie :
- Les sujets sur lesquels vous êtes absent
- Les opportunités SEO prioritaires (score 0-100)
- Les recommandations de structure (H2, word count, éléments)

### ✨ Moverz Voice
Le prompt IA est conçu pour générer du contenu :
- **Authentique** : ton conversationnel, pas robotique
- **E-E-A-T compliant** : expertise, sources, données chiffrées
- **SEO-optimisé** : title, meta, H2/H3, FAQ, schema.org
- **Sur-mesure Moverz** : USP intégrés, zones prioritaires

## Support & Aide

### Problème de connexion ?
- Vérifiez que `.env.local` existe et contient `ADMIN_PASSWORD="EzH"`
- Redémarrez le serveur : `npm run dev`

### Pas de données scrapées ?
- Lancez : `npx tsx scripts/scrape-competitors.ts`
- Les données apparaîtront dans `/admin/veille/`

### Session expire trop vite ?
- Éditez `lib/admin/auth.ts`
- Modifiez `SESSION_DURATION` (défaut: 7 jours)

### Besoin d'aide ?
- Consultez `ADMIN-DASHBOARD-README.md` pour la documentation complète
- Utilisez Cursor AI en mode Agent pour assistance

---

**Prêt à dominer le SEO du déménagement ?** 🚀

Créé avec ❤️ par Cursor AI pour Moverz - Mars 2026
