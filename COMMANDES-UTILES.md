# 🔧 Commandes Utiles - Moverz Admin Dashboard

## 🚀 Démarrage

### Lancer le serveur de développement
```bash
npm run dev
```
→ Accès : http://localhost:3000/admin/login  
→ Mot de passe : `EzH`

### Build production
```bash
npm run build
npm start
```

---

## 📊 Scripts de Données

### Scraping des blogs concurrents
```bash
# Scraper les 50 blogs (prend 20-40 min, rate-limited 1.5-2s)
npx tsx scripts/scrape-competitors.ts

# Résultat : data/scraped-articles.json (~1800 articles)
```

### Analyse des gaps de contenu
```bash
# Comparer Moverz vs concurrents, identifier opportunités
npx tsx scripts/analyze-gaps.ts

# Résultat : data/content-gaps.json (100+ gaps avec scoring)
```

### Lancer les deux en séquence
```bash
npx tsx scripts/scrape-competitors.ts && npx tsx scripts/analyze-gaps.ts
```

---

## 🔐 Gestion de l'authentification

### Changer le mot de passe admin
Éditez `.env.local` :
```bash
ADMIN_PASSWORD="votre_nouveau_mot_de_passe"
```

Puis redémarrez :
```bash
npm run dev
```

### Vérifier la session actuelle
```bash
# Cookie "admin_session" dans les DevTools du navigateur
# Expire après 7 jours (configurable dans lib/admin/auth.ts)
```

---

## 📁 Gestion des données

### Voir les données scrapées
```bash
# Afficher le résumé
cat data/scraped-articles.json | jq '.globalAnalysis'

# Compter les articles
cat data/scraped-articles.json | jq '.totalArticles'

# Top 5 thèmes
cat data/scraped-articles.json | jq '.globalAnalysis.topThemes[:5]'
```

### Voir les gaps identifiés
```bash
# Top 10 opportunités
cat data/content-gaps.json | jq '.gaps[:10] | .[] | {topic, opportunityScore, moverzStatus}'

# Gaps high priority uniquement
cat data/content-gaps.json | jq '.gaps[] | select(.priority == "high") | {topic, opportunityScore}'
```

### Historique des scraping
```bash
ls -lh data/scrape-history/
# Voir le dernier scraping
cat data/scrape-history/scrape-$(date +%Y-%m-%d).json | jq '.summary'
```

### Nettoyer les données (reset)
```bash
rm -rf data/*.json
rm -rf data/scrape-history/*.json
# Garder le fichier de config
# data/competitor-blogs.json est conservé
```

---

## 🐛 Débogage

### Vérifier les logs du serveur
```bash
# Logs en temps réel
npm run dev

# Voir les requêtes HTTP
# DevTools > Network > Filter: /admin/
```

### Tester l'authentification
```bash
# Tester le login via cURL
curl -X POST http://localhost:3000/api/admin/auth/login \
  -H "Content-Type: application/json" \
  -d '{"password":"EzH"}'

# Réponse attendue : {"success":true,"message":"Connexion réussie"}
```

### Vérifier les headers NoIndex
```bash
# Tester les headers sur /admin/
curl -I http://localhost:3000/admin/login | grep -i "x-robots-tag"

# Réponse attendue : X-Robots-Tag: noindex, nofollow, noarchive
```

### Tester robots.txt
```bash
curl http://localhost:3000/robots.txt | grep -A 2 "admin"

# Réponse attendue : Disallow: /admin/
```

---

## 📊 Monitoring & Stats

### Compter les articles Moverz
```bash
# Via Node REPL
node -e "import('./lib/blog.js').then(m => console.log(m.getBlogPostsMeta().length))"
```

### Stats du scraping
```bash
# Nombre total d'articles scrapés
cat data/scraped-articles.json | jq '.totalArticles'

# Blogs avec le plus d'articles
cat data/scraped-articles.json | jq '.blogs | sort_by(.totalArticles) | reverse | .[:5] | .[] | {name, totalArticles}'

# Moyenne de mots par blog
cat data/scraped-articles.json | jq '.blogs[] | {name, avgWordCount: (.articles | add | . / length)}'
```

### Stats des gaps
```bash
# Total gaps identifiés
cat data/content-gaps.json | jq '.totalGaps'

# High priority
cat data/content-gaps.json | jq '.highPriorityGaps'

# Distribution par thème
cat data/content-gaps.json | jq '.themeDistribution'
```

---

## 🔄 Automatisation (Cron Jobs)

### Scraping hebdomadaire automatique
Ajoutez à votre crontab (`crontab -e`) :

```bash
# Tous les lundis à 8h
0 8 * * 1 cd /Users/luciestehelindetaisne/moverz-fr-2 && /usr/local/bin/npx tsx scripts/scrape-competitors.ts >> logs/scraping.log 2>&1

# Analyse des gaps après scraping (lundis à 9h)
0 9 * * 1 cd /Users/luciestehelindetaisne/moverz-fr-2 && /usr/local/bin/npx tsx scripts/analyze-gaps.ts >> logs/gaps.log 2>&1
```

### Créer le dossier logs
```bash
mkdir -p logs
```

---

## 🧹 Maintenance

### Mettre à jour les dépendances
```bash
npm update
npm audit fix
```

### Vérifier les erreurs TypeScript
```bash
npx tsc --noEmit
```

### Linter le code
```bash
npm run lint
# ou
npx next lint
```

### Nettoyer le build
```bash
rm -rf .next
npm run build
```

---

## 📦 Backup & Export

### Sauvegarder toutes les données
```bash
# Créer une archive
tar -czf moverz-admin-data-$(date +%Y%m%d).tar.gz data/

# Exporter vers un autre serveur
scp moverz-admin-data-*.tar.gz user@server:/backup/
```

### Restaurer depuis un backup
```bash
tar -xzf moverz-admin-data-20260310.tar.gz
```

---

## 🚀 Déploiement Production

### Build optimisé
```bash
npm run build
```

### Variables d'environnement production
Créez `.env.production` :
```bash
ADMIN_PASSWORD="mot_de_passe_ultra_fort_production"
SESSION_SECRET="clé_secrète_différente_prod"
GSC_CREDENTIALS_JSON='...'
NODE_ENV=production
```

### Démarrer en production
```bash
npm start
# ou avec PM2 pour auto-restart
pm2 start npm --name "moverz-admin" -- start
```

---

## 💡 Astuces Rapides

### Générer un mot de passe fort
```bash
openssl rand -base64 32
```

### Vérifier l'espace disque (données)
```bash
du -sh data/
```

### Top 10 articles les plus longs scrapés
```bash
cat data/scraped-articles.json | jq '.allArticles | sort_by(.wordCount) | reverse | .[:10] | .[] | {title, wordCount, sourceName}'
```

### Exporter les gaps en CSV
```bash
cat data/content-gaps.json | jq -r '.gaps[] | [.topic, .opportunityScore, .moverzStatus, .competitorCoverage.totalArticles] | @csv' > gaps-export.csv
```

---

**Besoin d'aide ?**  
Consultez `ADMIN-DASHBOARD-README.md` pour la doc complète ! 📚
