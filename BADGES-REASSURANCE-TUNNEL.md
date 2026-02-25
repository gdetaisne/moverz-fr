# Badges de réassurance pour le tunnel devis.moverz.fr

Date : 2026-02-25
Objectif : Maximiser la conversion en rassurant à chaque étape

---

## TOP 5 BADGES DE RÉASSURANCE PRIORITAIRES

### Étape 1 du tunnel (accueil/début)

**Les 4 badges essentiels** :
- [x] 100% gratuit
- [x] Zéro harcèlement
- [x] 3 minutes chrono
- [x] Sans engagement

**Pourquoi ces 4** :
- "Zéro harcèlement" = Notre nouveau différenciateur clé
- "100% gratuit" = Rassure sur l'absence de frais cachés
- "3 minutes" = Réduit la friction ("c'est rapide")
- "Sans engagement" = Pas de piège, pas d'acompte

---

### Étape 2-3 (formulaire en cours)

**Les 4 badges de crédibilité** :
- [x] Dossier 100% anonyme
- [x] Pros vérifiés (Creditsafe)
- [x] Devis sous 5-7 jours
- [x] 3 à 5 devis comparables

**Pourquoi ces 4** :
- "Dossier 100% anonyme" = Renforce l'argument "zéro harcèlement"
- "Pros vérifiés" = Crédibilité (mention Creditsafe = gage de sérieux)
- "Devis sous 5-7 jours" = Gestion des attentes (évite la frustration)
- "3 à 5 devis" = Nombre précis = transparence

---

### Étape finale (confirmation/merci)

**Les 4 badges de réassurance post-validation** :
- [x] Votre dossier est sécurisé
- [x] Vous choisissez qui contacter
- [x] Support email disponible
- [x] 4.5/5 sur Google (1200+ avis)

**Pourquoi ces 4** :
- "Dossier sécurisé" = Rassure post-validation
- "Vous choisissez" = Rappelle le contrôle (zéro harcèlement)
- "Support email" = Aide disponible (réduit l'anxiété)
- "4.5/5 sur Google" = Preuve sociale forte

---

## DESIGN RECOMMANDÉ

### Version Pills (badges pilules) avec icônes Lucide

```tsx
import { CheckCircle, Lock, Clock, Shield } from "lucide-react";

<div className="flex flex-wrap gap-2 justify-center">
  {/* Badge 1 : Gratuit */}
  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-800 text-xs font-medium">
    <CheckCircle className="w-3.5 h-3.5" />
    100% gratuit
  </span>
  
  {/* Badge 2 : Zéro harcèlement */}
  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-medium">
    <Lock className="w-3.5 h-3.5" />
    Zéro harcèlement
  </span>
  
  {/* Badge 3 : Rapidité */}
  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs font-medium">
    <Clock className="w-3.5 h-3.5" />
    3 minutes
  </span>
  
  {/* Badge 4 : Sans engagement */}
  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-gray-800 text-xs font-medium">
    <Shield className="w-3.5 h-3.5" />
    Sans engagement
  </span>
</div>
```

### Version Liste compacte (sous le bouton CTA)

```tsx
import { CheckCircle } from "lucide-react";

<p className="text-xs text-gray-500 mt-2 flex items-center justify-center gap-1">
  <CheckCircle className="w-3 h-3 text-green-600" />
  <span>Gratuit · Zéro harcèlement · 3 min · Sans engagement</span>
</p>
```

### Version minimaliste (texte seul avec bullets)

```tsx
<p className="text-xs text-gray-600 mt-2">
  • Gratuit • Zéro harcèlement • 3 minutes • Sans engagement
</p>
```

---

## EMPLACEMENT STRATÉGIQUE

### 1. Au-dessus du formulaire (Hero)

```
[Logo Moverz]

Comparez jusqu'à 5 devis de déménageurs vérifiés

[Badges Pills]
100% gratuit | Zéro harcèlement | 3 minutes | Sans engagement

[Formulaire commence ici]
```

### 2. En sticky footer (mobile)

```
[Sticky bottom bar mobile]
Gratuit · Anonyme · 3 min
[Bouton CTA : Continuer →]
```

### 3. À chaque étape (progress bar)

```
Étape 2/4

[Icône Lock] Dossier 100% anonyme · [Icône Shield] Pros vérifiés · [Icône FileCheck] Devis comparables

[Formulaire étape 2]
```

---

## HIÉRARCHIE DES MESSAGES

### Ordre d'importance (priorité visuelle) :

1. **Zéro harcèlement** ← NOUVEAU, DIFFÉRENCIATEUR CLÉ
2. **100% gratuit** ← ÉVIDENT mais nécessaire
3. **3 minutes** ← RÉDUIT LA FRICTION
4. **Sans engagement** ← RASSURE sur l'absence de piège
5. **Pros vérifiés** ← CRÉDIBILITÉ
6. **Devis comparables** ← VALEUR AJOUTÉE

---

## TEXTES ALTERNATIFS (A/B Test)

### "Zéro harcèlement" (variantes à tester) :

- [x] "Zéro harcèlement" (direct, clair)
- [x] "Anonyme jusqu'à votre choix" (bénéfice)
- [x] "Vous choisissez qui contacter" (contrôle)
- [x] "0 appel non sollicité" (négatif = impact fort)
- [x] "Dossier 100% anonyme" (sécurité)

### "100% gratuit" (variantes) :

- [x] "100% gratuit" (classique)
- [x] "Gratuit et sans frais cachés" (explicite)
- [x] "0€ de frais" (chiffre = impact)

### "3 minutes" (variantes) :

- [x] "3 minutes chrono" (gamification)
- [x] "En moins de 3 min" (défi)
- [x] "Rapide : 3 min" (bénéfice)

---

## RECOMMANDATION FINALE

### Hero (étape 1 - page d'accueil tunnel)

```tsx
import { Lock, CheckCircle, Clock, Shield } from "lucide-react";

<div className="text-center space-y-6">
  <h1 className="text-4xl font-bold text-gray-900">
    Comparez 5 devis sans harcèlement
  </h1>
  
  {/* Badges Pills */}
  <div className="flex flex-wrap gap-2 justify-center">
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-medium">
      <Lock className="w-3.5 h-3.5" />
      Zéro harcèlement
    </span>
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-800 text-xs font-medium">
      <CheckCircle className="w-3.5 h-3.5" />
      100% gratuit
    </span>
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs font-medium">
      <Clock className="w-3.5 h-3.5" />
      3 minutes
    </span>
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-gray-800 text-xs font-medium">
      <Shield className="w-3.5 h-3.5" />
      Sans engagement
    </span>
  </div>
  
  {/* CTA */}
  <button className="px-6 py-3 bg-[#0EA5A6] text-white rounded-lg font-semibold hover:opacity-90">
    Commencer mon dossier →
  </button>
</div>
```

### Sticky footer mobile

```tsx
import { CheckCircle, Lock, Clock } from "lucide-react";

<div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg md:hidden">
  <p className="text-xs text-gray-600 text-center mb-2 flex items-center justify-center gap-1">
    <CheckCircle className="w-3 h-3 text-green-600" />
    Gratuit · 
    <Lock className="w-3 h-3 text-blue-600" />
    Anonyme · 
    <Clock className="w-3 h-3 text-purple-600" />
    3 min
  </p>
  <button className="w-full px-4 py-3 bg-[#0EA5A6] text-white rounded-lg font-semibold">
    Continuer →
  </button>
</div>
```

### Étape intermédiaire (formulaire en cours)

```tsx
import { Lock, Shield, FileCheck } from "lucide-react";

<div className="text-center mb-6">
  <div className="inline-flex items-center gap-4 text-xs text-gray-600">
    <span className="flex items-center gap-1">
      <Lock className="w-3.5 h-3.5 text-blue-600" />
      Dossier 100% anonyme
    </span>
    <span className="text-gray-300">·</span>
    <span className="flex items-center gap-1">
      <Shield className="w-3.5 h-3.5 text-green-600" />
      Pros vérifiés
    </span>
    <span className="text-gray-300">·</span>
    <span className="flex items-center gap-1">
      <FileCheck className="w-3.5 h-3.5 text-purple-600" />
      Devis comparables
    </span>
  </div>
</div>
```

### Page de confirmation (merci)

```tsx
import { CheckCircle, Lock, Mail, Star } from "lucide-react";

<div className="max-w-2xl mx-auto text-center space-y-6">
  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 mb-4">
    <CheckCircle className="w-8 h-8 text-green-600" />
  </div>
  
  <h1 className="text-3xl font-bold text-gray-900">
    C'est fait ! Votre dossier est sécurisé
  </h1>
  
  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-4 text-left">
    <div className="flex items-start gap-3">
      <Lock className="w-5 h-5 text-blue-600 mt-0.5" />
      <div>
        <p className="font-semibold text-gray-900">Nous centralisons tous les échanges</p>
        <p className="text-sm text-gray-600">Votre téléphone reste masqué jusqu'à ce que vous choisissiez un déménageur</p>
      </div>
    </div>
    
    <div className="flex items-start gap-3">
      <Mail className="w-5 h-5 text-green-600 mt-0.5" />
      <div>
        <p className="font-semibold text-gray-900">Vous recevrez vos devis par email sous 5-7 jours</p>
        <p className="text-sm text-gray-600">Chaque devis sera détaillé et comparable</p>
      </div>
    </div>
    
    <div className="flex items-start gap-3">
      <Mail className="w-5 h-5 text-purple-600 mt-0.5" />
      <div>
        <p className="font-semibold text-gray-900">Besoin d'aide ?</p>
        <p className="text-sm text-gray-600">contact@moverz.fr</p>
      </div>
    </div>
  </div>
  
  <div className="flex items-center justify-center gap-1 text-sm text-gray-600">
    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
    <span className="font-semibold">4.5/5</span>
    <span>sur Google</span>
    <span className="text-gray-400">(1200+ avis)</span>
  </div>
</div>
```

---

## CODES COULEURS (Turquoise Moverz)

### Palette principale :
- **Turquoise Moverz** : `#0EA5A6` ou `#6BCFCF` (version claire)
- **Vert validation** : `#10B981` (green-500)
- **Bleu sécurité** : `#3B82F6` (blue-500)
- **Gris neutre** : `#6B7280` (gray-500)

### Badges backgrounds :
- Vert (gratuit) : `bg-green-50 border-green-200 text-green-800`
- Bleu (anonymat) : `bg-blue-50 border-blue-200 text-blue-800`
- Violet (rapidité) : `bg-purple-50 border-purple-200 text-purple-800`
- Gris (sans engagement) : `bg-gray-50 border-gray-200 text-gray-800`

---

## ICÔNES LUCIDE RECOMMANDÉES

```tsx
import {
  CheckCircle,    // Validation, gratuit, succès
  Lock,           // Anonymat, sécurité, zéro harcèlement
  Clock,          // Rapidité, 3 minutes
  Shield,         // Sans engagement, protection, vérification
  Star,           // Avis Google, rating
  Mail,           // Email, contact, support
  FileCheck,      // Devis comparables
  Users,          // Pros vérifiés
  Award,          // Qualité, certification
} from "lucide-react";
```

---

## IMPACT ATTENDU

### Conversion :
- **Étape 1** : Badges réduisent l'anxiété → +15-20% de remplissage formulaire
- **Étape 2-3** : Rappels rassurants → -10% d'abandon en cours
- **Confirmation** : Réassurance post-action → -30% de désistement avant réception devis

### Message clé répété :
> "Pas de stress, pas de spam, c'est rapide et gratuit. Vous gardez le contrôle."

---

## A/B TESTS RECOMMANDÉS

### Test 1 : Ordre des badges
- **Version A** : Zéro harcèlement | Gratuit | 3 min | Sans engagement
- **Version B** : Gratuit | Zéro harcèlement | Sans engagement | 3 min

### Test 2 : Formulation "Zéro harcèlement"
- **Version A** : "Zéro harcèlement"
- **Version B** : "Dossier 100% anonyme"
- **Version C** : "Vous choisissez qui contacter"

### Test 3 : Design badges
- **Version A** : Pills colorés (comme ci-dessus)
- **Version B** : Liste texte simple avec bullets
- **Version C** : Cards avec icônes + description

---

## CHECKLIST D'IMPLÉMENTATION

- [ ] Ajouter badges Hero (étape 1)
- [ ] Ajouter sticky footer mobile
- [ ] Ajouter badges à chaque étape du formulaire
- [ ] Ajouter réassurance page confirmation
- [ ] Vérifier responsive mobile
- [ ] Tester contraste accessibilité (WCAG AA)
- [ ] Setup A/B tests (Posthog, Google Optimize, ou Vercel Edge)
- [ ] Mesurer impact sur taux de conversion

---

**Note** : Ce document est prêt à être partagé avec l'équipe technique qui gère le tunnel devis.moverz.fr.
