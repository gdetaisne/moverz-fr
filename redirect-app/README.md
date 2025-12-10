# 🔀 Moverz Redirect Router

Mini-app Next.js qui gère **toutes les redirections 301** des 11 anciens domaines ville vers `moverz.fr`.

## 🎯 Principe

Cette app détecte le **domaine d'entrée** (Nice, Marseille, Lyon, Bordeaux, Lille, Toulouse, Strasbourg, Nantes, Rennes, Rouen, Montpellier) et redirige automatiquement vers la bonne page sur `moverz.fr`.

**Avantages** :
- ✅ **Code, pas de config nginx** : tout est géré par Next.js
- ✅ **Une seule app** pour tous les domaines
- ✅ **Facile à maintenir** : éditer `next.config.mjs`
- ✅ **301 natifs** : parfait pour le SEO

---

## 🚀 Déploiement sur CapRover

### Étape 1 : Créer l'app sur CapRover

1. **CapRover Dashboard** → **Apps** → **Create New App**
2. **App Name** : `moverz-redirect-router`
3. **Has Persistent Data** : NON
4. **Create New App**

---

### Étape 2 : Déployer le code

#### Option A : GitHub (recommandé)

1. **Push ce dossier** `redirect-app/` dans un repo GitHub
2. Dans CapRover → **Deployment** → **Method Three: Deploy from Github/Bitbucket**
3. Connecter ton repo GitHub
4. Sélectionner la branche `main`
5. **Repository** : `ton-username/moverz-redirect-router`
6. **Branch** : `main`
7. **Deploy**

#### Option B : CLI

```bash
cd redirect-app
npm install -g caprover
caprover login
caprover deploy
```

---

### Étape 3 : Configurer TOUS les domaines ville

Dans l'app `moverz-redirect-router` :

1. **HTTP Settings** → **Enable HTTPS** : ✅
2. **Connect New Domain** pour chaque domaine (11 au total) :
   - `devis-demenageur-marseille.fr`
   - `devis-demenageur-lyon.fr`
   - `bordeaux-demenageur.fr` + `www.bordeaux-demenageur.fr`
   - `devis-demenageur-lille.fr`
   - `devis-demenageur-nice.fr`
   - `devis-demenageur-toulousain.fr`
   - `devis-demenageur-strasbourg.fr`
   - `devis-demenageur-nantes.fr`
   - `devis-demenageur-rennes.fr`
   - `devis-demenageur-rouen.fr`
   - `devis-demenageur-montpellier.fr`

3. **Force HTTPS** : ✅

**Important** : Chaque domaine pointe vers la **même app**. Next.js détecte automatiquement le domaine et redirige en conséquence grâce à la clause `has: [{ type: 'host', value: '...' }]`.

---

## 🧪 Test

```bash
# Nice
curl -I https://devis-demenageur-nice.fr/
# → 301 vers https://moverz.fr/demenagement/nice/

curl -I https://devis-demenageur-nice.fr/vieux-nice
# → 301 vers https://moverz.fr/nice/vieux-nice/

# Toulouse
curl -I https://devis-demenageur-toulousain.fr/
# → 301 vers https://moverz.fr/demenagement/toulouse/
```

---

## 📝 Maintenance

Pour ajouter ou modifier des redirections :

1. Éditer `next.config.mjs`
2. Commit + Push
3. CapRover rebuild automatiquement (si GitHub connecté)

---

## 🏗️ Structure

```
redirect-app/
├── app/
│   ├── page.tsx       # Fallback page (si jamais une URL n'est pas redirigée)
│   └── layout.tsx     # Layout minimal
├── next.config.mjs    # ⭐ TOUTES les redirections 301 ici
├── package.json
├── tsconfig.json
├── Dockerfile         # Pour build CapRover
├── captain-definition
└── README.md
```

---

## ✅ Checklist déploiement

- [ ] App `moverz-redirect-router` créée sur CapRover
- [ ] Code déployé (via GitHub ou CLI)
- [ ] 7 domaines connectés à l'app
- [ ] HTTPS activé pour tous
- [ ] Tests curl passent pour chaque domaine
- [ ] Vérification browser (Nice, Toulouse, Strasbourg minimum)

---

## 💡 Pourquoi cette approche ?

**Avant** : 7 apps CapRover + 7 configs nginx à maintenir  
**Maintenant** : 1 app Next.js + 1 fichier `next.config.mjs` pour tout gérer

**Temps de déploiement** : ~20 min pour les 11 villes !


