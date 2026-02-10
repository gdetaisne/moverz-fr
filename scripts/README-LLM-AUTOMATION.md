# 🤖 Automatisation des fichiers LLM

Ce système met à jour automatiquement les fichiers `public/llms.txt` et `public/pour-llm.txt` avec les dernières informations du site.

## 📋 Ce qui est automatisé

✅ **Toujours à jour automatiquement :**
- Date de mise à jour
- Métadonnées SEO (title, description) depuis `app/layout.tsx`
- Format des titles pour pages villes depuis `lib/seo/metadata.ts`
- Contact (depuis configuration dans le script)

✅ **Maintenu manuellement dans le script :**
- Services B2C/B2B (changent rarement)
- Positionnement (stratégique)
- Différences vs concurrents
- Liste des pages importantes

## 🚀 Utilisation

### Mise à jour manuelle

```bash
npm run update-llm
```

### Mise à jour automatique (recommandé)

Ajouter un pre-commit hook avec `husky` (optionnel) :

```bash
# Installation (si pas déjà fait)
npm install -D husky

# Initialiser husky
npx husky init

# Ajouter le hook
echo "npm run update-llm" > .husky/pre-commit
```

→ Les fichiers LLM seront automatiquement mis à jour avant chaque commit !

## 📁 Fichiers générés

- **`public/llms.txt`** : Version complète avec toutes les infos (B2C + B2B)
- **`public/pour-llm.txt`** : Version simplifiée (info essentielles)

## 🔧 Configuration

Pour mettre à jour les informations de contact, modifier la constante `CONTACT_INFO` dans le script :

```javascript
const CONTACT_INFO = {
  email: 'contact@moverz.fr',
  emailPro: 'lucie@moverz.fr',
  calendly: 'https://calendly.com/lucie-moverz/30min',
};
```

Pour ajouter/modifier les pages importantes, modifier `IMPORTANT_PAGES` :

```javascript
const IMPORTANT_PAGES = {
  b2c: [
    { title: 'Nouvelle page', url: '/nouvelle-page/' },
    // ...
  ],
  // ...
};
```

## 🎯 Quand lancer le script ?

**Automatiquement (recommandé) :**
- À chaque commit (via pre-commit hook)

**Manuellement :**
- Après changement des métas SEO
- Après ajout d'une nouvelle page importante
- Après modification du pricing/contact
- Une fois par trimestre pour vérifier

## ✅ Avantages

- 🔥 **Toujours synchronisé** : Les LLMs ont les bonnes infos
- 🔥 **Zéro maintenance** : Extraction automatique depuis le code
- 🔥 **Pas d'erreurs** : Source unique de vérité (le code)
- 🔥 **Gain de temps** : 1 commande vs édition manuelle

## 🐛 Dépannage

**Le script ne trouve pas les métas :**
```bash
# Vérifier que les fichiers existent
ls app/layout.tsx lib/seo/metadata.ts

# Lancer en mode verbose
node scripts/update-llm-files.mjs
```

**Erreur de permissions :**
```bash
chmod +x scripts/update-llm-files.mjs
```

## 📚 Ressources

- Script : `scripts/update-llm-files.mjs`
- Output : `public/llms.txt`, `public/pour-llm.txt`
- Commande npm : `npm run update-llm`
