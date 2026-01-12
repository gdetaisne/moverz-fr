# ✅ Checklist post-commit 3fc3086

**Commit** : `3fc3086` - "feat: redesign exit-intent popup - compact & premium"  
**Date** : 9 janvier 2026, 10h33  
**Fichier modifié** : `components/ExitIntentPopup.tsx`

---

## 🎯 Objectif de cette checklist

S'assurer que la nouvelle popup exit-intent :
1. ✅ Fonctionne correctement sur tous les devices
2. ✅ Ne dégrade pas la conversion
3. ✅ N'introduit pas de régressions visuelles

---

## 📱 Phase 1 : Tests manuels (IMMÉDIAT)

### Test 1 : Desktop (5 min)

- [ ] **Ouvrir** `https://moverz.fr` dans Chrome/Firefox/Safari
- [ ] **Déclencher** l'exit-intent (bouger la souris vers le haut pour sortir de la page)
- [ ] **Vérifier** :
  - [ ] La popup s'affiche bien
  - [ ] Le titre est lisible ("Ne partez pas sans vos devis")
  - [ ] Les 4 pills sont visibles (IA analyse, 0 spam, 48h, Gratuit)
  - [ ] Le bouton WhatsApp est cliquable
  - [ ] Le bouton "Continuer sur le site" est cliquable
  - [ ] Le bouton X (fermer) fonctionne
  - [ ] L'overlay (fond noir) est visible
  - [ ] La popup est bien centrée
  - [ ] L'accent line (barre colorée en haut) est visible

**Résultat attendu** : ✅ Tout fonctionne

---

### Test 2 : Mobile (10 min)

#### iPhone SE (375px) - Petit écran
- [ ] **Ouvrir** `https://moverz.fr` sur iPhone SE (ou simulateur)
- [ ] **Déclencher** l'exit-intent (scroll vers le haut rapidement)
- [ ] **Vérifier** :
  - [ ] La popup ne déborde pas de l'écran
  - [ ] Le texte est lisible (pas trop petit)
  - [ ] Les 4 pills tiennent sur 2 lignes max (flex-wrap)
  - [ ] Les boutons sont cliquables (pas trop petits)
  - [ ] Le padding est correct (pas trop serré)

**Résultat attendu** : ✅ Tout tient, tout est lisible

---

#### iPhone 12 (390px) - Écran moyen
- [ ] **Ouvrir** `https://moverz.fr` sur iPhone 12
- [ ] **Déclencher** l'exit-intent
- [ ] **Vérifier** :
  - [ ] La popup est bien proportionnée
  - [ ] Les pills tiennent sur 1-2 lignes
  - [ ] Tout est lisible

**Résultat attendu** : ✅ Optimal

---

#### iPhone 14 Pro Max (430px) - Grand écran
- [ ] **Ouvrir** `https://moverz.fr` sur iPhone 14 Pro Max
- [ ] **Déclencher** l'exit-intent
- [ ] **Vérifier** :
  - [ ] La popup ne paraît pas trop petite
  - [ ] Les pills tiennent sur 1 ligne
  - [ ] Le design est équilibré

**Résultat attendu** : ✅ Bien proportionné

---

### Test 3 : Tablette (5 min)

#### iPad (768px)
- [ ] **Ouvrir** `https://moverz.fr` sur iPad
- [ ] **Déclencher** l'exit-intent
- [ ] **Vérifier** :
  - [ ] La popup est bien centrée
  - [ ] Le design est premium (pas trop petit, pas trop grand)
  - [ ] Tout est lisible

**Résultat attendu** : ✅ Bien centré

---

## 📊 Phase 2 : Métriques Analytics (J+1 à J+7)

### Jour 1 (24h après déploiement)

- [ ] **Aller dans** Google Analytics → Events
- [ ] **Chercher** les events :
  - `exit_intent_shown`
  - `exit_intent_whatsapp_click`
  - `exit_intent_web_click`
  - `exit_intent_closed`

- [ ] **Noter** les métriques baseline (avant le commit) :
  - Taux d'affichage : _______ %
  - Taux de clic WhatsApp : _______ %
  - Taux de clic Web : _______ %
  - Taux de fermeture immédiate : _______ %

- [ ] **Comparer** avec les métriques actuelles (après le commit)

**Red flag** : Baisse > 20% du taux de clic WhatsApp

---

### Jour 3 (72h après déploiement)

- [ ] **Vérifier** les métriques sur 3 jours
- [ ] **Calculer** :
  - Variation taux de clic WhatsApp : _______ %
  - Variation taux de clic Web : _______ %

**Questions** :
- Les utilisateurs cliquent-ils moins sur WhatsApp ?
- Les utilisateurs ferment-ils la popup plus rapidement ?

---

### Jour 7 (1 semaine après déploiement)

- [ ] **Analyse finale** sur 7 jours
- [ ] **Décision** :
  - [ ] ✅ Tout va bien → Garder le nouveau design
  - [ ] ⚠️ Baisse légère (5-15%) → Surveiller encore 7 jours
  - [ ] ❌ Baisse importante (>20%) → Ajuster le design

**Si baisse importante, actions possibles** :
1. Remonter la taille du titre (`text-2xl` → `text-3xl`)
2. Réintroduire un mini mockup WhatsApp (optimisé)
3. Agrandir les boutons CTAs
4. Ajouter plus de contraste visuel

---

## 🔍 Phase 3 : Vérifications techniques (J+1)

### Vérification 1 : Bundle size

- [ ] **Build** le projet :
  ```bash
  cd /Users/lucie/moverz-fr-1
  npm run build
  ```

- [ ] **Vérifier** la taille du bundle :
  ```bash
  # Chercher ExitIntentPopup dans les chunks
  ls -lh .next/static/chunks/ | grep -i exit
  ```

- [ ] **Comparer** avec avant (si tu as les logs)

**Résultat attendu** : ⬇️ Taille réduite (mockup supprimé)

---

### Vérification 2 : Lighthouse

- [ ] **Lancer** Lighthouse sur la homepage :
  ```bash
  npx lighthouse https://moverz.fr --view
  ```

- [ ] **Noter** les scores :
  - Performance : _______ /100
  - Accessibility : _______ /100
  - Best Practices : _______ /100
  - SEO : _______ /100

- [ ] **Comparer** avec les scores avant (si tu les as)

**Résultat attendu** : ⬆️ Légère amélioration (moins de DOM nodes)

---

### Vérification 3 : Console errors

- [ ] **Ouvrir** DevTools (F12)
- [ ] **Aller** sur `https://moverz.fr`
- [ ] **Déclencher** l'exit-intent
- [ ] **Vérifier** qu'il n'y a pas d'erreurs dans la console

**Résultat attendu** : ✅ Aucune erreur

---

## 🧹 Phase 4 : Nettoyage (optionnel, J+7)

### Action 1 : Supprimer le fichier orphelin

**Contexte** : Le fichier `lib/city-longform-overrides.ts` (1725 lignes) n'est plus importé nulle part depuis le revert.

- [ ] **Vérifier** qu'il n'est vraiment pas utilisé :
  ```bash
  grep -r "city-longform-overrides" /Users/lucie/moverz-fr-1/ --exclude-dir=node_modules
  ```

- [ ] **Si aucun résultat** (sauf dans les docs), supprimer :
  ```bash
  git rm lib/city-longform-overrides.ts
  git commit -m "chore: remove unused city-longform-overrides.ts"
  ```

**Résultat** : ⬇️ Moins de code inutile

---

### Action 2 : Ajouter redirect 301 pour /guide

**Contexte** : Les pages `/demenagement/:slug/guide` ont été supprimées lors du revert. Si elles étaient indexées, il faut rediriger.

- [ ] **Vérifier** dans Google Search Console :
  - Aller dans GSC → Pages
  - Chercher `/demenagement/*/guide`

- [ ] **Si des URLs sont indexées**, ajouter une redirection dans `next.config.mjs` :
  ```javascript
  async redirects() {
    return [
      // ... autres redirects
      {
        source: '/demenagement/:slug/guide',
        destination: '/demenagement/:slug',
        permanent: true,
      },
    ];
  },
  ```

- [ ] **Commit** :
  ```bash
  git add next.config.mjs
  git commit -m "fix: add 301 redirect for removed /guide pages"
  ```

**Résultat** : ✅ Pas de 404 SEO

---

### Action 3 : Réintroduire Lucide icons (optionnel)

**Contexte** : Le revert a remis des emojis à la place des icônes Lucide. Si tu veux un design 100% premium tech, tu peux les réintroduire.

**⚠️ IMPORTANT** : Ne touche **QUE** les composants UI, **PAS** `lib/city-longform.ts` (c'était la cause de l'outage).

- [ ] **Fichiers à modifier** :
  - [ ] `app/blog/page.tsx` : Remplacer `📚`, `💰`, `✅`, etc. par Lucide
  - [ ] `components/pro/ProDashboardPreview.tsx` : Remplacer `📋`, `📊`, `🔔` par Lucide
  - [ ] `components/templates/CorridorPage.tsx` : Remplacer `📍`, `✓` par Lucide
  - [ ] `components/templates/HubQuartiersPage.tsx` : Remplacer `✓`, `📊` par Lucide

- [ ] **Commit** :
  ```bash
  git add app/blog/page.tsx components/pro/ProDashboardPreview.tsx components/templates/*.tsx
  git commit -m "feat: reintroduce Lucide icons (UI only, safe)"
  ```

**Résultat** : ✅ Cohérence visuelle premium tech

---

## 📝 Rapport final (J+7)

### Résumé des tests

| Test | Statut | Notes |
|------|--------|-------|
| Desktop (Chrome/Firefox/Safari) | ⬜ | |
| Mobile (iPhone SE) | ⬜ | |
| Mobile (iPhone 12) | ⬜ | |
| Mobile (iPhone 14 Pro Max) | ⬜ | |
| Tablette (iPad) | ⬜ | |

### Résumé des métriques

| Métrique | Avant | Après | Variation |
|----------|-------|-------|-----------|
| Taux d'affichage | | | |
| Taux de clic WhatsApp | | | |
| Taux de clic Web | | | |
| Taux de fermeture immédiate | | | |

### Décision finale

- [ ] ✅ **Tout va bien** → Commit validé, on garde le nouveau design
- [ ] ⚠️ **Ajustements nécessaires** → Voir actions ci-dessous
- [ ] ❌ **Rollback nécessaire** → Revenir à l'ancien design

**Actions si ajustements nécessaires** :
1. _______________________________________________
2. _______________________________________________
3. _______________________________________________

---

## 🚀 Conclusion

### ✅ Si tout est OK

**Bravo !** 🎉 Tu as réussi à :
- Réduire la taille de la popup de 42%
- Simplifier le code de 66%
- Améliorer le design (plus premium)
- Sans dégrader la conversion

**Prochaines étapes** :
- Monitorer les métriques en continu
- Réintroduire Lucide icons (optionnel)
- Nettoyer le code orphelin

---

### ⚠️ Si ajustements nécessaires

**Pas de panique !** C'est normal d'itérer. Voici les leviers possibles :
1. **Taille du texte** : Remonter de `text-2xl` à `text-3xl`
2. **Mockup** : Réintroduire un mini mockup optimisé
3. **Boutons** : Agrandir les CTAs
4. **Contraste** : Ajouter plus de couleur

**Process** :
1. Faire un commit avec l'ajustement
2. Redéployer
3. Surveiller les métriques pendant 7 jours
4. Itérer si besoin

---

**Fichiers de référence** :
- Analyse complète : `ANALYSE-COMMITS-RECENTS-EFFETS-DE-BORD.md`
- Résumé visuel : `RESUME-VISUEL-COMMITS.md`
- Outage documentation : `OUTAGE-2026-01-08-revert-86efc7a.md`

