# 🔀 RÉCAP COMPLET : Redirections 301 - Sites Ville → Moverz.fr

**Date** : 9 janvier 2026  
**Statut actuel** : ⚠️ **PROBLÈME : 404 sur tous les domaines**

---

## 📊 Vue d'ensemble

### Domaines concernés (11 au total)

**Groupe 1 : 7 villes déjà configurées dans le code**
1. `devis-demenageur-marseille.fr`
2. `devis-demenageur-lyon.fr`
3. `bordeaux-demenageur.fr` (+ variante `www.bordeaux-demenageur.fr`)
4. `devis-demenageur-lille.fr`
5. `devis-demenageur-nice.fr`
6. `devis-demenageur-toulousain.fr`
7. `devis-demenageur-strasbourg.fr`

**Groupe 2 : 4 villes "secondaires" configurées dans le code**
8. `devis-demenageur-nantes.fr`
9. `devis-demenageur-rennes.fr`
10. `devis-demenageur-rouen.fr`
11. `devis-demenageur-montpellier.fr`

**Volume total de redirections** : ~170 URLs (home, quartiers, corridors, hub)

---

## ✅ Ce qui a été fait (CÔTÉ CODE)

### 1. Application Next.js de redirection (`redirect-app/`)

**Localisation** : `/redirect-app/`

**Architecture** :
```
redirect-app/
├── app/
│   ├── page.tsx         ← Fallback page (redirige vers moverz.fr)
│   └── layout.tsx       ← Layout minimal
├── next.config.mjs      ← ⭐ TOUTES les redirections 301 (475 lignes)
├── package.json
├── tsconfig.json
├── Dockerfile           ← Pour build CapRover
├── captain-definition   ← Config CapRover
└── README.md
```

**Fonctionnalités** :
- ✅ **Une seule app** pour gérer les 11 domaines
- ✅ **Détection du domaine d'origine** via Next.js `has: [{ type: 'host', value: '...' }]`
- ✅ **Redirections 301 natives** (SEO-friendly)
- ✅ **Fallback intelligent** : toute URL non reconnue → `moverz.fr`
- ✅ **Dockerfile optimisé** : build multi-stage avec Next.js standalone

**Redirections configurées par ville** (dans `next.config.mjs`) :

| Ville | Domaine source | Redirections configurées |
|-------|----------------|--------------------------|
| Marseille | `devis-demenageur-marseille.fr` | 15 redirections (home, 5 quartiers, 5 corridors, hub, blog) |
| Lyon | `devis-demenageur-lyon.fr` | 13 redirections |
| Bordeaux | `bordeaux-demenageur.fr` + `www.` | 14 redirections (avec variantes www) |
| Lille | `devis-demenageur-lille.fr` | 13 redirections |
| Nice | `devis-demenageur-nice.fr` | 13 redirections |
| Toulouse | `devis-demenageur-toulousain.fr` | 13 redirections |
| Strasbourg | `devis-demenageur-strasbourg.fr` | 13 redirections |
| Nantes | `devis-demenageur-nantes.fr` | 13 redirections |
| Rennes | `devis-demenageur-rennes.fr` | 13 redirections |
| Rouen | `devis-demenageur-rouen.fr` | 13 redirections |
| Montpellier | `devis-demenageur-montpellier.fr` | 11 redirections |

**Exemple de redirection (Nice)** :
```javascript
{
  source: '/',
  destination: 'https://moverz.fr/demenagement/nice/',
  permanent: true,
  has: [{ type: 'host', value: 'devis-demenageur-nice.fr' }],
}
```

---

### 2. Source de vérité métier (`lib/domain-redirects.ts`)

**Fichier** : `/lib/domain-redirects.ts`

**Contenu** : Mapping de **tous les domaines** vers leurs pages de destination sur `moverz.fr`.

**Exemple** :
```typescript
{
  from: "https://devis-demenageur-marseille.fr/",
  to: "https://moverz.fr/demenagement/marseille/",
}
```

**Usage** : Ce fichier sert de référence pour générer les configs nginx, Cloudflare, etc.

---

### 3. Fichiers de config alternatifs (générés)

Dans le dossier `/redirects/`, plusieurs formats de config ont été générés :

#### A. `nginx-301-redirects.conf`
- **Format** : Configuration nginx
- **Usage** : Copier-coller dans nginx si on veut faire les redirections côté serveur
- **Avantage** : Performances natives nginx
- **Statut** : ⚠️ Pas déployé (on a choisi l'approche Next.js)

#### B. `cloudflare-bulk-redirects.csv`
- **Format** : CSV pour Cloudflare Bulk Redirects
- **Usage** : Import en masse dans Cloudflare Dashboard
- **Avantage** : Gestion centralisée, pas de serveur
- **Statut** : ⚠️ Pas déployé (on a choisi l'approche Next.js)

#### C. Documentation complète
- `README-REDIRECTIONS.md` : Guide complet sur les patterns de redirection
- `CAPROVER-DEPLOYMENT-GUIDE.md` : Guide détaillé pour déployer sur CapRover

---

## ❌ Ce qui N'A PAS été fait (diagnostic du problème 404)

### 🚨 Problème principal : L'app n'est pas déployée

**Constat** : Les 404 sur tous les domaines indiquent que l'app de redirection n'est **PAS déployée** ou **PAS accessible**.

### Checklist des étapes manquantes

#### 1. Déploiement CapRover
- [ ] **App CapRover créée** : Une app nommée `moverz-redirect-router` ou similaire
- [ ] **Code déployé** : Le dossier `redirect-app/` a été build et déployé via CapRover
- [ ] **Build réussi** : Les logs CapRover montrent un build Next.js réussi
- [ ] **Container running** : L'app tourne bien sur le port 3000

**Comment vérifier** :
```bash
# Se connecter au dashboard CapRover
https://captain.votredomaine.com

# Chercher une app nommée "moverz-redirect-router" ou similaire
# Vérifier les logs
```

---

#### 2. Configuration DNS
- [ ] **DNS A/CNAME** : Chaque domaine pointe vers le serveur CapRover

**Pour chaque domaine** (11 au total), le DNS doit pointer vers l'IP du serveur CapRover.

**Exemple pour Nice** :
```
devis-demenageur-nice.fr → A record → [IP_SERVEUR_CAPROVER]
```

**Comment vérifier** :
```bash
# Tester le DNS
dig devis-demenageur-marseille.fr
dig devis-demenageur-lyon.fr
# ... etc pour les 11 domaines

# Doit retourner l'IP du serveur CapRover
```

---

#### 3. Domaines connectés dans CapRover
- [ ] **11 domaines ajoutés** : Dans l'app CapRover, les 11 domaines doivent être configurés

**Dans CapRover → App → HTTP Settings → Connect New Domain** :
1. `devis-demenageur-marseille.fr`
2. `devis-demenageur-lyon.fr`
3. `bordeaux-demenageur.fr`
4. `www.bordeaux-demenageur.fr`
5. `devis-demenageur-lille.fr`
6. `devis-demenageur-nice.fr`
7. `devis-demenageur-toulousain.fr`
8. `devis-demenageur-strasbourg.fr`
9. `devis-demenageur-nantes.fr`
10. `devis-demenageur-rennes.fr`
11. `devis-demenageur-rouen.fr`
12. `devis-demenageur-montpellier.fr`

**+ Options** :
- ✅ Enable HTTPS
- ✅ Force HTTPS by redirecting

---

#### 4. Certificats SSL
- [ ] **Let's Encrypt activé** : CapRover génère automatiquement les certificats SSL

**Comment vérifier** :
```bash
curl -I https://devis-demenageur-marseille.fr/
# Doit retourner un certificat SSL valide (pas d'erreur)
```

---

## 🎯 Plan d'action : Comment réparer les 404

### Option 1 : Déployer l'app Next.js sur CapRover (RECOMMANDÉ)

**Avantages** :
- ✅ Une seule app pour tous les domaines
- ✅ Facile à maintenir (éditer `next.config.mjs`)
- ✅ Pas de config nginx complexe
- ✅ Hot reload possible

**Étapes** :

#### Étape 1 : Créer l'app CapRover
1. Se connecter au dashboard CapRover
2. **Apps** → **Create New App**
3. App Name : `moverz-redirect-router`
4. Has Persistent Data : **NON**
5. **Create New App**

#### Étape 2 : Déployer le code

**Option A : Via GitHub (recommandé)**
1. Push le dossier `redirect-app/` dans un repo GitHub
2. CapRover → **Deployment** → **Method Three: Deploy from Github/Bitbucket**
3. Connecter le repo
4. Sélectionner la branche `main`
5. **Deploy**

**Option B : Via CLI**
```bash
cd redirect-app
npm install -g caprover
caprover login
caprover deploy
```

#### Étape 3 : Configurer les 11 domaines
1. Dans l'app `moverz-redirect-router`
2. **HTTP Settings** → **Enable HTTPS** : ✅
3. **Connect New Domain** pour chaque domaine (liste ci-dessus)
4. **Force HTTPS** : ✅

#### Étape 4 : Tester
```bash
# Tester Nice
curl -I https://devis-demenageur-nice.fr/
# Doit retourner : HTTP/2 301 + Location: https://moverz.fr/demenagement/nice/

# Tester Marseille
curl -I https://devis-demenageur-marseille.fr/
# Doit retourner : HTTP/2 301 + Location: https://moverz.fr/demenagement/marseille/
```

---

### Option 2 : Utiliser les Bulk Redirects Cloudflare

**Si les domaines sont sur Cloudflare** (plus simple mais moins flexible).

**Avantages** :
- ✅ Pas de serveur nécessaire
- ✅ Gestion centralisée
- ✅ Import en masse

**Étapes** :
1. Se connecter à Cloudflare Dashboard
2. Sélectionner le domaine (ex: `devis-demenageur-nice.fr`)
3. **Rules** → **Bulk Redirects**
4. Importer le fichier `/redirects/cloudflare-bulk-redirects.csv`
5. Activer les règles
6. Répéter pour les 11 domaines

**⚠️ Limite** : Cloudflare Free = 5 domaines. Pour 11 domaines, il faut un plan payant.

---

### Option 3 : Config nginx directe (si serveur nginx existant)

**Si les domaines pointent vers un serveur nginx** (pas CapRover).

**Étapes** :
1. Éditer la config nginx : `sudo nano /etc/nginx/sites-available/redirects-moverz`
2. Copier le contenu de `/redirects/nginx-301-redirects.conf`
3. Activer : `sudo ln -s /etc/nginx/sites-available/redirects-moverz /etc/nginx/sites-enabled/`
4. Tester : `sudo nginx -t`
5. Recharger : `sudo systemctl reload nginx`

---

## 🔍 Diagnostic rapide : Où en est-on ?

### Test 1 : DNS
```bash
dig devis-demenageur-marseille.fr
```
**Question** : Le DNS pointe-t-il vers le bon serveur ?

---

### Test 2 : Serveur répond
```bash
curl -I https://devis-demenageur-marseille.fr/
```
**Résultat actuel** : ❌ **404**

**Diagnostic** :
- Si **timeout ou connexion refusée** → Problème DNS ou serveur down
- Si **404** → Serveur répond mais app pas déployée ou pas de config
- Si **301** → ✅ Tout fonctionne !

---

### Test 3 : CapRover app existe
1. Se connecter au dashboard CapRover
2. Chercher une app nommée `moverz-redirect-router`

**Question** : L'app existe-t-elle dans CapRover ?

---

## 📝 Checklist complète de validation

### Phase 1 : Déploiement
- [ ] App CapRover créée (`moverz-redirect-router`)
- [ ] Code du dossier `redirect-app/` déployé
- [ ] Build réussi (vérifier logs CapRover)
- [ ] Container running (port 3000)

### Phase 2 : DNS
- [ ] DNS A record configuré pour les 11 domaines
- [ ] DNS pointe vers l'IP du serveur CapRover
- [ ] Propagation DNS terminée (peut prendre 24-48h)

### Phase 3 : CapRover
- [ ] 11 domaines connectés à l'app
- [ ] HTTPS activé pour tous
- [ ] Force HTTPS activé
- [ ] Certificats SSL générés (Let's Encrypt)

### Phase 4 : Tests
- [ ] Test `curl -I` pour chaque domaine (11 au total)
- [ ] Vérifier le status code 301 (pas 302 ou 307)
- [ ] Vérifier la destination (ex: `https://moverz.fr/demenagement/nice/`)
- [ ] Test dans le navigateur (vérifier la redirection visuelle)

### Phase 5 : Monitoring
- [ ] Google Search Console : surveiller les erreurs 404
- [ ] Google Analytics : vérifier que le trafic arrive sur moverz.fr
- [ ] Logs CapRover : vérifier qu'il n'y a pas d'erreurs

---

## 🎓 Synthèse : Ce qui a été fait vs ce qui manque

### ✅ FAIT (Côté code)
1. **App Next.js complète** avec toutes les redirections
2. **Dockerfile optimisé** pour CapRover
3. **Config alternative** (nginx, Cloudflare) générée
4. **Documentation complète** (guides déploiement)
5. **Source de vérité métier** (`lib/domain-redirects.ts`)

### ❌ MANQUE (Côté infra)
1. **App pas déployée** sur CapRover
2. **Domaines pas connectés** à l'app
3. **DNS pas configuré** (ou pas correctement)
4. **Certificats SSL** pas générés

---

## 💡 Recommandation finale

**Action immédiate** :
1. ✅ Déployer l'app `redirect-app/` sur CapRover (Option 1)
2. ✅ Connecter les 11 domaines dans l'app
3. ✅ Vérifier le DNS de chaque domaine
4. ✅ Tester avec `curl -I` pour chaque domaine

**Temps estimé** : 30-45 min pour le déploiement complet.

---

## 📞 Questions à te poser maintenant

1. **As-tu accès au dashboard CapRover ?**
   - Si oui, check si l'app `moverz-redirect-router` existe
   - Si non, on peut te guider pour créer l'app

2. **Les domaines sont-ils sur Cloudflare ou un autre DNS ?**
   - Si Cloudflare, on peut utiliser les Bulk Redirects (plus simple)
   - Si autre DNS (OVH, Gandi, etc.), il faut configurer les A records

3. **Préfères-tu :**
   - **Option A** : Déployer l'app Next.js sur CapRover (flexible, maintenable)
   - **Option B** : Utiliser Cloudflare Bulk Redirects (simple, mais limite 5 domaines en free)
   - **Option C** : Config nginx directe (si tu as déjà un serveur nginx)

---

## 🚀 Prochaines étapes

Une fois que tu me confirmes :
- L'état actuel de CapRover
- Où sont hébergés les domaines (DNS)
- Quelle option tu préfères

Je peux te guider **étape par étape** pour tout déployer et faire marcher les redirections ! 💪

---

**Dernière mise à jour** : 9 janvier 2026  
**Auteur** : Diagnostic automatisé

