# 📚 Index Documentation : Fix 404 Redirections & Corridors

**Date** : 9 janvier 2026  
**Sujet** : Analyse des commits de fix des 404 (redirections + corridors)

---

## 🎯 Par où commencer ?

### Si tu veux un résumé ultra-rapide (2 min)
👉 **Lire** : `TL-DR-FIX-404-CORRIDORS.md`  
Ou afficher dans le terminal : `cat RESUME-FIX-404-CORRIDORS.txt`

### Si tu veux comprendre les effets de bord (10 min)
👉 **Lire** : `ANALYSE-FIX-404-CORRIDORS.md`

### Si tu veux réparer les redirections des 11 domaines ville (20 min)
👉 **Lire** : `ACTION-IMMEDIATE-REDIRECTIONS.md`

### Si tu veux voir tous les domaines et redirections (référence)
👉 **Lire** : `TABLEAU-DOMAINES-REDIRECTIONS.md`

---

## 📄 Tous les documents créés

### Sur les Corridors (404 fix)

#### 1. `TL-DR-FIX-404-CORRIDORS.md` ⚡
**Taille** : 2 pages  
**Temps de lecture** : 2 minutes  
**Contenu** :
- Résumé en 1 phrase
- Ce que tu as résolu (partie visible)
- 5 effets de bord potentiels
- Matrice des risques
- Actions immédiates (3 priorités)
- Checklist rapide
- Verdict

**Quand le lire** : Avant ou après le déploiement, pour avoir une vue rapide

---

#### 2. `ANALYSE-FIX-404-CORRIDORS.md` 📊
**Taille** : 15 pages  
**Temps de lecture** : 10-15 minutes  
**Contenu** :
- Résumé exécutif
- Changements techniques détaillés (5 fichiers)
- 7 effets de bord potentiels (avec solutions)
- Matrice des risques détaillée
- Ce qui est déjà bien fait (5 points)
- Actions recommandées (4 priorités)
- Checklist de validation

**Quand le lire** : Pour comprendre en profondeur tous les effets de bord

---

#### 3. `RESUME-FIX-404-CORRIDORS.txt` 🖥️
**Format** : Terminal ASCII art  
**Temps de lecture** : 2 minutes  
**Contenu** : Résumé visuel dans le terminal
- Ce que tu as résolu
- 5 effets de bord
- Matrice des risques (tableau)
- Actions immédiates
- Checklist rapide
- Verdict

**Quand le lire** : Pour un coup d'œil rapide dans le terminal

---

### Sur les Redirections 301 (11 domaines ville)

#### 4. `RECAP-COMPLET-REDIRECTIONS-301.md` 📋
**Taille** : 15 pages  
**Temps de lecture** : 20 minutes  
**Contenu** :
- Vue d'ensemble des 11 domaines
- Ce qui a été fait (côté code)
- Ce qui manque (côté infra)
- Diagnostic complet des 404
- 3 options pour réparer (CapRover, Cloudflare, nginx)

**Quand le lire** : Pour comprendre pourquoi les redirections ne fonctionnent pas

---

#### 5. `ACTION-IMMEDIATE-REDIRECTIONS.md` 🚨
**Taille** : 8 pages  
**Temps de lecture** : 10 minutes  
**Contenu** :
- 5 étapes concrètes pour déployer (40-60 min)
- Commandes à copier-coller
- Troubleshooting pour chaque problème
- Checklist finale
- Alternative Cloudflare

**Quand le lire** : Pour déployer l'app de redirections sur CapRover

---

#### 6. `TABLEAU-DOMAINES-REDIRECTIONS.md` 📊
**Taille** : 12 pages  
**Temps de lecture** : 10 minutes  
**Contenu** :
- Liste des 11 domaines
- Détail des ~170 redirections par ville
- Patterns de redirection
- Commandes de test
- Statistiques

**Quand le lire** : Pour avoir une référence complète des redirections

---

## 🗂️ Organisation par thème

### Thème : Fix 404 Corridors (Commit a278843)

| Document | Niveau de détail | Temps |
|----------|------------------|-------|
| `TL-DR-FIX-404-CORRIDORS.md` | ⭐ Résumé | 2 min |
| `RESUME-FIX-404-CORRIDORS.txt` | ⭐ Terminal | 2 min |
| `ANALYSE-FIX-404-CORRIDORS.md` | ⭐⭐⭐ Complet | 15 min |

**Total** : 3 documents, ~20 pages

---

### Thème : Redirections 301 (11 domaines ville)

| Document | Niveau de détail | Temps |
|----------|------------------|-------|
| `ACTION-IMMEDIATE-REDIRECTIONS.md` | ⭐⭐ Actionnable | 10 min |
| `TABLEAU-DOMAINES-REDIRECTIONS.md` | ⭐⭐ Référence | 10 min |
| `RECAP-COMPLET-REDIRECTIONS-301.md` | ⭐⭐⭐ Complet | 20 min |

**Total** : 3 documents, ~35 pages

---

## 🎯 Parcours recommandés

### Parcours 1 : "Je veux comprendre le fix des 404 corridors"
1. Lire `TL-DR-FIX-404-CORRIDORS.md` (2 min)
2. Appliquer les 2 actions prioritaires (7 min)
   - Ajouter facteur ×1.2 pour distances
   - Ajouter redirect 301 Saint-Étienne
3. Surveiller GSC pendant 7 jours

**Temps total** : 10 minutes + surveillance

---

### Parcours 2 : "Je veux réparer les redirections des 11 domaines"
1. Lire `RECAP-COMPLET-REDIRECTIONS-301.md` (20 min)
2. Suivre `ACTION-IMMEDIATE-REDIRECTIONS.md` (40-60 min)
3. Tester avec le script `./redirect-app/test-redirections.sh`

**Temps total** : 60-80 minutes

---

### Parcours 3 : "Je veux tout comprendre en profondeur"
1. Lire `ANALYSE-FIX-404-CORRIDORS.md` (15 min)
2. Lire `RECAP-COMPLET-REDIRECTIONS-301.md` (20 min)
3. Lire `TABLEAU-DOMAINES-REDIRECTIONS.md` (10 min)
4. Appliquer toutes les actions recommandées

**Temps total** : 50 minutes + actions

---

## 📊 Statistiques de la documentation

| Métrique | Valeur |
|----------|--------|
| **Nombre de documents** | 6 (+1 index) |
| **Pages totales** | ~55 pages |
| **Temps de lecture total** | ~1h30 |
| **Mots totaux** | ~20 000 mots |
| **Commits analysés** | 2 (`a278843` corridors, `b7b5e5a` redirects) |
| **Domaines couverts** | 11 domaines ville |
| **Redirections documentées** | ~170 redirections |
| **Villes avec corridors** | 20 villes |
| **Combinaisons corridor** | 380 (20 × 19) |

---

## 🔍 Recherche rapide

### Je cherche...

**"Pourquoi j'ai des 404 sur /paris-vers-marseille/ ?"**  
→ `TL-DR-FIX-404-CORRIDORS.md` → Section "Ce que tu as résolu"

**"Quels sont les effets de bord du fix corridors ?"**  
→ `ANALYSE-FIX-404-CORRIDORS.md` → Section "Effets de bord potentiels"

**"Comment corriger les distances sous-estimées ?"**  
→ `TL-DR-FIX-404-CORRIDORS.md` → Section "Actions immédiates" → Priorité 1

**"Pourquoi les redirections des 11 domaines ne fonctionnent pas ?"**  
→ `RECAP-COMPLET-REDIRECTIONS-301.md` → Section "Ce qui manque"

**"Comment déployer l'app de redirections sur CapRover ?"**  
→ `ACTION-IMMEDIATE-REDIRECTIONS.md` → Étapes 1-5

**"Quels domaines doivent être redirigés ?"**  
→ `TABLEAU-DOMAINES-REDIRECTIONS.md` → Section "Les 11 domaines"

---

## 💡 Synthèse : Deux problèmes distincts

### Problème 1 : 404 Corridors (RÉSOLU) ✅

**Commit** : `a278843` (17 décembre 2025)

**Problème** : `/paris-vers-marseille/` → 404

**Cause** : Route `/_corridor/` (privée)

**Solution** : Renommage vers `/corridor/` (publique)

**Effets de bord** :
1. 🟡 Distances sous-estimées → Ajouter facteur ×1.2
2. 🟡 Saint-Étienne accent → Redirect 301
3. 🟢 Duplication contenu → Canonical OK ✅
4. 🟢 Performance SSG → ISR OK ✅
5. 🟢 Maillage interne → 6 liens OK ✅

**Status** : ✅ **Résolu, quelques ajustements recommandés**

---

### Problème 2 : 404 Redirections 11 domaines (NON RÉSOLU) ❌

**Domaines** : `devis-demenageur-marseille.fr`, `devis-demenageur-lyon.fr`, etc.

**Problème** : Tous les domaines → 404

**Cause** : App de redirections **pas déployée** sur CapRover

**Solution** : Déployer `redirect-app/` sur CapRover + configurer les 11 domaines

**Ce qui a été fait** :
- ✅ App Next.js complète (`redirect-app/`)
- ✅ 170 redirections configurées
- ✅ Dockerfile CapRover prêt

**Ce qui manque** :
- ❌ App pas déployée sur CapRover
- ❌ Domaines pas connectés à l'app
- ❌ DNS peut-être pas configuré

**Status** : ❌ **Non résolu, déploiement requis**

---

## 🚀 Prochaines étapes

### Immédiat : Fix Corridors (10 min)
- [ ] Ajouter facteur ×1.2 dans `lib/corridors.ts`
- [ ] Ajouter redirect 301 Saint-Étienne dans `next.config.mjs`
- [ ] Commit + deploy

### Court terme : Redirections (60 min)
- [ ] Lire `ACTION-IMMEDIATE-REDIRECTIONS.md`
- [ ] Déployer `redirect-app/` sur CapRover
- [ ] Configurer les 11 domaines
- [ ] Tester avec le script

### Moyen terme : Surveillance (7-30 jours)
- [ ] Google Search Console : surveiller `/corridor/`
- [ ] Vérifier les distances affichées vs Google Maps
- [ ] Tester les redirections des 11 domaines

---

## 📞 Besoin d'aide ?

### Sur les Corridors
- **Pourquoi 404 ?** → `TL-DR-FIX-404-CORRIDORS.md`
- **Effets de bord ?** → `ANALYSE-FIX-404-CORRIDORS.md`
- **Comment corriger ?** → Section "Actions immédiates"

### Sur les Redirections
- **Pourquoi 404 ?** → `RECAP-COMPLET-REDIRECTIONS-301.md`
- **Comment réparer ?** → `ACTION-IMMEDIATE-REDIRECTIONS.md`
- **Quels domaines ?** → `TABLEAU-DOMAINES-REDIRECTIONS.md`

Ou reviens vers moi avec ta question spécifique ! 💪

---

**Dernière mise à jour** : 9 janvier 2026  
**Auteur** : Documentation automatisée  
**Version** : 1.0

