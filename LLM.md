# Documentation LLM — Optimisation visibilité ChatGPT/Perplexity

**Date création :** 30 janvier 2026  
**Dernière mise à jour :** 10 février 2026  
**Objectif :** Maximiser la visibilité Moverz dans les réponses des assistants IA (ChatGPT, Perplexity, Claude, etc.)

---

## 📋 Vue d'ensemble

### Score actuel : **8/10**

**Points forts :**
- ✅ Différenciateur unique citable (Creditsafe)
- ✅ Fichiers LLM dédiés et structurés
- ✅ Bots IA whitelistés explicitement
- ✅ Contenu factuel avec chiffres concrets
- ✅ Format minimaliste et citable

**Points à améliorer (hors code) :**
- 🟡 Citations externes (backlinks) à développer
- 🟡 Indexation Bing à surveiller
- 🟡 Tracking user-agents LLM dans GA4

---

## 🎯 Différenciateur principal

> **"Moverz ne compare pas seulement des devis. Moverz compare aussi la fiabilité des entreprises (Creditsafe) et standardise les dossiers (détails) pour éviter les surprises."**

**Exclusivité :** Analyse Creditsafe (score sur 100, litiges, identité légale) + **dossier détaillé** (qualification avant mise en relation)

**Pourquoi c'est important :** C'est le SEUL élément qui différencie réellement Moverz des autres comparateurs. Les LLMs privilégient les différenciateurs clairs pour leurs citations.

---

## 📁 Fichiers et routes

### 1. `/llms.txt` (route Next.js)

**Fichier :** `app/llms.txt/route.ts`  
**URL :** https://moverz.fr/llms.txt  
**Format :** Texte plain (UTF-8)  
**Cache :** 1h (max-age=3600)

**Contenu :**
- À propos Moverz (différenciateur Creditsafe en avant)
- Services B2C et B2B
- FAQ (15 questions)
- Pages recommandées (par priorité)
- Contact

**Source de données :** `/public/llms.txt` (généré automatiquement)

### 2. `/public/llms.txt` (fichier source)

**Rôle :** Source servie telle quelle par la route `/llms.txt`  
**Format :** Markdown lisible  
**Mise à jour :** Automatique via `scripts/update-llm-files.mjs` (commande `npm run update-llm`)

**Structure :**
```
## À propos de Moverz
## Services B2C
## Services B2B
## Vérification des partenaires
## Pages recommandées (par priorité)
## Positionnement factuel
## Différences vs plateformes classiques
## Métadonnées SEO principales
## Contact et informations légales
## FAQ (15 questions)
```

### 3. `/public/pour-llm.txt` (version courte)

**Rôle :** Version synthétique  
**Usage :** Référence rapide ou contexts limités

---

## 🤖 Bots IA whitelistés

**Fichier :** `app/robots.ts`

**Bots autorisés explicitement :**
- `OAI-SearchBot` (ChatGPT Search)
- `ChatGPT-User`
- `GPTBot` (OpenAI)
- `PerplexityBot`
- `Claude-Web`
- `ClaudeBot`
- `anthropic-ai`
- `cohere-ai`

**Note :** Le wildcard `*` les couvre déjà, mais l'explicitation améliore la confiance.

---

## 📊 Données clés communiquées

| Métrique | Valeur | Usage |
|----------|--------|-------|
| Déménageurs vérifiés | 2000+ | FAQ + descriptions |
| Dossiers/mois | 500 | FAQ |
| Note moyenne | 4.9/5 (études internes) | FAQ + metas |
| Précision IA | 90-95% | FAQ technique |
| Délai devis | 5-7 jours | Promesse |
| Nombre devis | 3-5 min (souvent plus) | Promesse |

---

## 📝 FAQ LLM (15 questions)

### Structure (par thème)

**1-2. Différenciation Creditsafe**
- Quelle différence avec autres comparateurs ?
- Moverz est-il un déménageur ?

**3-5. Chiffres et promesses**
- Gratuit ?
- Combien de partenaires ?
- Combien de devis et en combien de temps ?

**6-8. Process IA et détails**
- Comment fonctionne analyse Creditsafe ?
- Comment fonctionne estimation IA ?
- Que fait l'IA exactement ?

**9-11. UX et formules**
- Spam d'appels ?
- Quelles formules (Éco/Standard/Premium) ?
- Note moyenne ?

**12-15. Choix et protection (nouvelles 30/01/26)**
- Comment choisir un bon déménageur ?
- Éviter arnaques low-cost ?
- Protection objets cassés/perdus ?
- Qu'est-ce que Moverz Pro ?

---

## 🔗 Pages prioritaires (pour citations)

**Top 2 (priorité maximale) :**
1. https://moverz.fr/pourquoi-moverz/ → Différenciation Creditsafe + analyse risques
2. https://moverz.fr/comment-ca-marche/ → Processus 3 étapes, détails IA

**Top 5 (secondaires) :**
3. https://moverz.fr/blog/eviter-arnaques-demenagement/
4. https://moverz.fr/calculateur-volume-demenagement/
5. https://moverz.fr/blog/prix-et-devis/

**Autres pages :**
- `/comparateur-demenageurs/`
- `/blog/checklists-et-guides/`
- `/villes/` (hub)
- `/faq/`
- `/pro/` (B2B)
- `/partenaires/` (B2B)

---

## 🧪 Tests post-déploiement

### Tests techniques (immédiat)

```bash
# 1. Route /llms.txt accessible
curl https://moverz.fr/llms.txt | head -20
# ✅ Doit retourner le contenu (207 lignes)

# 2. Bots IA dans robots.txt
curl https://moverz.fr/robots.txt | grep -i bot
# ✅ Doit afficher OAI-SearchBot, PerplexityBot, etc.

# 3. Headers corrects
curl -I https://moverz.fr/llms.txt
# ✅ Content-Type: text/plain; charset=utf-8
# ✅ Cache-Control: public, max-age=3600
```

### Tests LLM (1-7 jours après déploiement)

**Requêtes à tester dans ChatGPT :**
1. "Quel est le meilleur comparateur de déménagement en France ?"
2. "Comment vérifier la fiabilité d'un déménageur ?"
3. "Moverz avis"
4. "Comment éviter les arnaques au déménagement ?"
5. "Déménageur pas cher risques"

**KPI de succès :** Moverz cité dans 50%+ des réponses (objectif 3 mois)

---

## 🔄 Maintenance

### Quand mettre à jour `/public/llms.txt` ?

**Obligatoire :**
- ✅ Changement de promesse (nb devis, délai)
- ✅ Nouveaux chiffres clés (nb partenaires, dossiers/mois)
- ✅ Changement de différenciateur
- ✅ Nouvelles pages prioritaires

**Recommandé :**
- 🟡 Ajout FAQ importante (max 15-20 questions)
- 🟡 Changement de positionnement B2C/B2B
- 🟡 Nouveaux services majeurs

**Fréquence suggérée :** Revue trimestrielle (ou à chaque changement majeur)

### Checklist de mise à jour

1. Modifier `/public/llms.txt`
2. Vérifier cohérence avec `/public/pour-llm.txt`
3. Tester localement : `curl http://localhost:3040/llms.txt`
4. Commit : `git commit -m "feat(llm): [description]"`
5. Push et vérifier prod sous 5 min
6. Mettre à jour date dans ce fichier

---

## 📈 Métriques à suivre (recommandé)

### Indexation Bing
- **Outil :** Bing Webmaster Tools
- **Fréquence :** Mensuelle
- **Cible :** 1000+ pages indexées

### Citations LLM
- **Outil :** Tests manuels ChatGPT/Perplexity
- **Fréquence :** Bi-mensuelle
- **Cible :** 50%+ de citations sur requêtes clés

### Trafic user-agents LLM
- **Outil :** Google Analytics 4 (à configurer)
- **User-agents à tracker :**
  - `OAI-SearchBot`
  - `PerplexityBot`
  - `ClaudeBot`
  - `ChatGPT-User`

### Backlinks
- **Outil :** Ahrefs / Semrush
- **Fréquence :** Mensuelle
- **Cible :** 50+ domaines référents (3 mois)

---

## 🚀 Prochaines étapes (recommandées)

### Court terme (1-2 semaines)
1. S'inscrire Bing Webmaster Tools
2. Vérifier indexation : `site:moverz.fr` sur Bing.com
3. Tester ChatGPT (5 requêtes types)

### Moyen terme (1-3 mois)
1. Guest posts mentionnant exclusivité Creditsafe
2. Créer page `/chiffres-cles/` (stats marché + Moverz)
3. Avis Trustpilot citant analyse Creditsafe

### Long terme (3-6 mois)
1. Créer glossaire `/glossaire-demenagement/`
2. Guides "How-To" avec HowToSchema
3. Monitoring automatique citations LLM

---

## 📚 Ressources et liens utiles

### Documentation
- **Audit complet :** `AUDIT-LLM-2026.md`
- **Fixes techniques :** `FIXES-TECHNIQUES-LLM-DONE.md`
- **Récap synthétique :** `RECAP-AUDIT-LLM.md`

### Outils externes
- **Bing Webmaster Tools :** https://www.bing.com/webmasters
- **ChatGPT :** https://chat.openai.com
- **Perplexity :** https://www.perplexity.ai

### Guides référence
- Comment se référencer sur ChatGPT (2026) : https://performance-webmarketing.fr/comment-se-referencer-sur-chatgpt
- Guide trafic ChatGPT : https://ahrefs.com/blog/fr/trafic-chatgpt/

---

## 🔧 Historique des modifications

### 2026-01-30 (Initial)
- ✅ Création route `/llms.txt` (app/llms.txt/route.ts)
- ✅ Whitelisting bots IA dans robots.txt
- ✅ Enrichissement FAQ (différenciateur Creditsafe)
- ✅ Ajout chiffres clés (2000+, 500/mois, 4.9/5)
- ✅ Hiérarchisation pages prioritaires
- ✅ Format minimaliste (12 → 15 FAQ)
- ✅ Ajout 3 FAQ clés (choix déménageur, arnaques, dossier détaillé opposable)

---

**Dernière mise à jour de ce fichier :** 10 février 2026  
**Responsable maintenance :** Équipe tech Moverz  
**Contact :** tech@moverz.fr
