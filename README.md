# DevisDemenagement.fr

Site web professionnel pour la génération de devis de déménagement par intelligence artificielle.

## 🎯 Concept

**DevisDemenagement.fr** révolutionne l'estimation de déménagement en utilisant l'IA pour analyser des photos et fournir des devis précis sans visite technique.

### Double cible :
- **Particuliers** : Devis gratuits et rapides en 5 minutes
- **Professionnels** : Outil SaaS d'estimation pour déménageurs

## 🏗️ Architecture du site

### Pages principales
- **/** - Page d'accueil avec double CTA
- **/clients.html** - Landing page particuliers
- **/pro.html** - Landing page professionnels
- **/blog.html** - Blog SEO avec articles

### Pages villes (SEO local)
- **/paris-devis-demenagement.html** - Paris
- **/lyon-devis-demenagement.html** - Lyon
- *(Modèles pour toutes les grandes villes françaises)*

### Blog & contenu
- **/blog/prix-moyen-demenagement-france-2025.html** - Article pilier
- *(Structure prête pour d'autres articles)*

### Pages légales
- **/a-propos.html** - Histoire Lucie & Will
- **/contact.html** - Formulaire + Calendly
- **/mentions-legales.html** - Mentions légales
- **/rgpd.html** - Politique RGPD

## 🎨 Design System

### Palette couleurs
- **Bleu nuit** (#1E3A8A) - Confiance
- **Bleu clair** (#3B82F6) - Innovation  
- **Gris clair** (#F3F4F6) - Fond
- **Blanc** (#FFFFFF) - Contraste

### Typography
- **Police** : Inter (Google Fonts)
- **Fallback** : sans-serif

### Framework
- **CSS** : Tailwind CSS (CDN)
- **Responsive** : Mobile-first
- **Icons** : Emojis pour simplicité

## 🔍 SEO & Performance

### Optimisations SEO
- ✅ Balises title/meta optimisées
- ✅ Structure Hn cohérente
- ✅ URLs parlantes
- ✅ Contenu riche et original
- ✅ Maillage interne
- ✅ Pages villes pour SEO local

### Performance
- ✅ Tailwind CSS via CDN
- ✅ Google Fonts optimisées
- ✅ Images placeholder (à remplacer)
- ✅ Code léger et optimisé

## 📱 Responsivité

Le site est entièrement responsive avec :
- **Mobile** : Design mobile-first
- **Tablet** : Adaptation md:
- **Desktop** : Mise en page lg:

Tous les composants s'adaptent automatiquement.

## 🚀 Déploiement

### Options recommandées
1. **Vercel** (recommandé) - Déploiement instantané
2. **Netlify** - Alternative robuste  
3. **OVH** - Hébergement français

### Étapes de mise en ligne
1. Pousser le code sur Git (GitHub/GitLab)
2. Connecter le repository à Vercel/Netlify
3. Configuration domaine : devisdemenagement.fr
4. SSL automatique activé

## 🔧 Personnalisations nécessaires

### Avant mise en production

#### 1. Informations légales
- [ ] Compléter mentions légales (SIRET, adresse...)
- [ ] Finaliser politique RGPD
- [ ] Ajouter numéros de téléphone

#### 2. Intégrations
- [ ] Formulaires → Backend/CRM
- [ ] Calendly → Compte réel
- [ ] Analytics (Google Analytics 4)
- [ ] Pixel Meta/Google Ads

#### 3. Contenu
- [ ] Photos professionnelles (hero, équipe)
- [ ] Mockups IA réalistes
- [ ] Témoignages clients réels
- [ ] Logo professionnel

#### 4. Fonctionnalités
- [ ] Upload photos fonctionnel
- [ ] Estimation IA (MVP)
- [ ] Base déménageurs partenaires
- [ ] Système de leads

## 📈 Évolutions prévues

### Phase 1 (MVP) - 3 mois
- [ ] Collecte leads fonctionnelle
- [ ] 5-10 déménageurs partenaires
- [ ] IA basique d'estimation
- [ ] Blog alimenté (1 article/semaine)

### Phase 2 (Growth) - 6 mois  
- [ ] IA avancée (95% précision)
- [ ] 50+ déménageurs partenaires
- [ ] Outil SaaS pour pros
- [ ] 15 pages villes principales

### Phase 3 (Scale) - 12 mois
- [ ] Couverture nationale
- [ ] API pour partenaires
- [ ] App mobile
- [ ] Expansion européenne

## 👥 Équipe

- **Lucie** - CEO & Product (HEC Paris, 8 ans conseil)
- **Will** - CTO & IA (Polytechnique, expert computer vision)

## 📞 Contact

- **Email** : contact@devisdemenagement.fr
- **Site** : https://devisdemenagement.fr

---

## 🛠️ Guide technique

### Structure des fichiers
```
/
├── index.html              # Page d'accueil
├── clients.html            # Landing particuliers  
├── pro.html               # Landing professionnels
├── blog.html              # Accueil blog
├── blog/
│   └── prix-moyen-demenagement-france-2025.html
├── paris-devis-demenagement.html
├── lyon-devis-demenagement.html
├── a-propos.html
├── contact.html
├── mentions-legales.html
├── rgpd.html
└── README.md
```

### Composants réutilisables

#### Header
Navigation sticky avec :
- Logo DevisDemenagement.fr
- Menu principal
- CTA "Devis Gratuit"
- Mobile responsive (hamburger)

#### Footer  
- Liens organisés par catégorie
- Contact et réseaux sociaux
- Copyright et légal

#### Formulaire Lead
Réutilisé sur :
- /clients.html
- Pages villes
- Adapté au contexte

### Classes Tailwind principales
```css
/* Couleurs custom */
blue-night: #1E3A8A
blue-light: #3B82F6  
gray-light: #F3F4F6

/* Components patterns */
.btn-primary: bg-blue-light text-white px-8 py-4 rounded-xl
.section-padding: py-20
.container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
```

### SEO Meta Template
```html
<title>Titre | DevisDemenagement.fr</title>
<meta name="description" content="Description 155 caractères max">
<meta property="og:title" content="Titre réseaux sociaux">
<meta property="og:description" content="Description réseaux sociaux">
```

---

*Site développé avec passion pour révolutionner l'industrie du déménagement* 🚚✨
