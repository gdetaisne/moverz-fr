# 📚 Documentation - Site Hub Moverz.fr

**Dépôt GitHub** : https://github.com/gdetaisne/moverz-fr

---

## 🎯 À PROPOS

**Moverz.fr** est le **hub national** qui dirige les utilisateurs vers les **11 sites locaux**.

### Architecture

```
Hub Moverz.fr (moverz-fr)
    ↓
/choisir-ville/
    ↓
11 Sites Locaux (Nice, Lyon, Marseille, etc.)
    ↓
/devis-gratuits/
```

---

## 📋 DOCUMENTS GARDE-FOUS

**À LIRE AVANT TOUTE MODIFICATION** :

| Document | Durée | Priorité | Contenu |
|----------|-------|----------|---------|
| `PRINCIPES-SACRES.md` | 10 min | ⭐⭐⭐ | Règles non négociables |
| `ZONES-DE-RISQUE.md` | 10 min | ⭐⭐⭐ | Zones critiques + bugs fréquents |
| `CHECKLIST-PRE-CODE.md` | 3 min | ⭐⭐⭐ | Workflow avant code |

**Total** : ~23 min lecture (1x)  
**ROI** : -95% bugs récurrents

---

## 🚨 RÈGLES CRITIQUES

### RED FLAGS - STOP Immédiatement

```
🚨 "modifier canonical"
🚨 "changer URL"
🚨 "supprimer page"
🚨 "toucher cityData" (interdit sur hub)
🚨 "CTA vers /devis-gratuits/" (→ /choisir-ville/)
```

---

## 🏗️ STRUCTURE SITE

```
/Users/lucie/moverz-fr/
├── app/                        # Pages Next.js
│   ├── page.tsx               # Homepage hub
│   ├── choisir-ville/         # Sélection ville (CRUCIAL)
│   ├── villes/                # Liste 11 villes
│   ├── faq/                   # FAQ hub
│   ├── contact/               # Contact
│   ├── comment-ca-marche/     # Fonctionnement
│   ├── a-propos/              # À propos
│   ├── mentions-legales/      # Légal
│   ├── politique-confidentialite/
│   ├── cgu/
│   └── cgv/
├── components/                 # Composants React
│   ├── Hero.tsx               # Hero hub (adapté)
│   ├── HowItWorks.tsx         # Processus
│   ├── WhyMoverz.tsx          # Pourquoi Moverz
│   ├── CitiesGrid.tsx         # Grid 11 villes
│   ├── StickyCTA.tsx          # CTA flottant
│   └── ...
├── lib/                        # Utilitaires
│   ├── cities.ts              # 11 villes + URLs (CRUCIAL)
│   ├── canonical-helper.ts    # Canonicals
│   ├── env.ts                 # Env vars
│   └── utils.ts
├── public/
│   └── logo.png              # Logo Moverz
├── .cursor/                   # Documentation (ce dossier)
│   ├── README.md             # Ce fichier
│   ├── PRINCIPES-SACRES.md
│   ├── ZONES-DE-RISQUE.md
│   └── CHECKLIST-PRE-CODE.md
├── next.config.mjs
├── package.json
└── README.md                 # README projet
```

---

## 🔧 DIFFÉRENCES HUB vs SITES LOCAUX

| Aspect | Hub (moverz.fr) | Sites Locaux (ex: Nice) |
|--------|-----------------|-------------------------|
| **Focus** | National (France) | Local (Ville) |
| **cityData** | ❌ Interdit | ✅ Requis |
| **CTAs** | → /choisir-ville/ | → /devis-gratuits/ |
| **Villes** | lib/cities.ts (liste) | cityData (données ville) |
| **Content** | Générique France | Spécifique ville |
| **SEO** | "déménagement France" | "déménagement [Ville]" |

---

## 🎯 COMMANDES UTILES

### Development

```bash
cd /Users/lucie/moverz-fr

# Install
npm install

# Dev server (port 3040)
npm run dev

# Build
npm run build

# Start production
npm start
```

### Validation

```bash
# Vérifier villes hardcodées
grep -r "à Nice\|à Lyon\|à Marseille" app/ components/

# Vérifier CTAs incorrects
grep -r 'href="/devis-gratuits' app/ components/

# Vérifier URLs hardcodées
grep -r "devis-demenageur-" app/ components/ --include="*.tsx" | grep -v "city.url"

# Vérifier imports cityData (interdit)
grep -r "from '@/lib/cityData'" app/ components/
```

---

## 📦 FICHIERS CRITIQUES

### `lib/cities.ts`

**Source de vérité pour les 11 sites locaux**

```typescript
export const CITIES = [
  {
    slug: 'nice',
    nameCapitalized: 'Nice',
    url: 'https://devis-demenageur-nice.fr',
    region: 'Provence-Alpes-Côte d\'Azur',
    // ...
  },
  // ... 10 autres villes
]
```

**⚠️ EXCEPTIONS** :
- Bordeaux : `https://www.bordeaux-demenageur.fr`
- Toulouse : `https://devis-demenageur-toulousain.fr`

### `app/choisir-ville/page.tsx`

**Page CRITIQUE** : Permet la sélection de ville

- Liste les 11 villes par région
- Redirige vers site local `/devis-gratuits/`

### `components/CitiesGrid.tsx`

**Grid des villes** sur homepage

- Affiche les 11 villes
- Links vers sites locaux
- Design compact et moderne

---

## 🚀 WORKFLOW MODIFICATION

```
1. Lire CHECKLIST-PRE-CODE.md
   ↓
2. Coder avec garde-fous en tête
   ↓
3. Vérifier checklist (voir CHECKLIST-PRE-CODE.md)
   ↓
4. Tester localement (npm run dev)
   ↓
5. Vérifier liens vers 11 villes
   ↓
6. Commit avec message clair
   ↓
7. Push vers GitHub
   ↓
8. Deploy automatique (CapRover)
```

---

## 🔗 LIENS UTILES

### Production
- **Hub** : https://moverz.fr
- **Exemple site local** : https://devis-demenageur-nice.fr

### Développement
- **Dépôt GitHub** : https://github.com/gdetaisne/moverz-fr
- **Local** : http://localhost:3040

### Documentation Complète
- **Projet multi-sites** : `/Users/lucie/moverz_main/`
- **START-HERE** : `/Users/lucie/moverz_main/START-HERE.md`
- **Architecture** : `/Users/lucie/moverz_main/docs/architecture/`

---

## ⚡ TL;DR

```
Hub National Moverz.fr :
✅ Focus France (pas ville spécifique)
✅ CTAs → /choisir-ville/
✅ Utiliser lib/cities.ts (pas cityData)
✅ Wording différencié vs sites locaux
✅ Attention Bordeaux & Toulouse (exceptions)

Lecture obligatoire :
1. PRINCIPES-SACRES.md (10 min)
2. ZONES-DE-RISQUE.md (10 min)
3. CHECKLIST-PRE-CODE.md (3 min)

ROI : -95% bugs, code plus propre
```

---

*Créé le : 2025-11-20*  
*Version : 1.0 - Documentation Hub Moverz.fr*

