# Moverz Design System 2026 🎨

Bienvenue dans le design system de Moverz. Ce dossier contient tous les tokens, composants et guidelines pour maintenir une cohérence visuelle parfaite sur tout le site.

## 📁 Structure

```
/design
├── tokens/           → Variables de design (couleurs, typo, ombres, etc.)
├── components/       → Composants React du design system
├── guidelines.md     → Règles d'usage et Do/Don't
└── migrations.md     → Plan de migration vers le nouveau design
```

## 🎯 Principes fondamentaux

1. **Clarté > Créativité** : Une idée = un composant
2. **Cohérence absolue** : Même composant = même style partout
3. **Hiérarchie évidente** : Un seul CTA principal par zone

## 🎨 Palette 2026

| Couleur | Hex | Usage |
|---------|-----|-------|
| **Deep Teal** | `#042F34` | Titres, liens, sections dark |
| **Charcoal Teal** | `#16232B` | Texte body |
| **Mint** | `#B5F2DB` | Accents, success |
| **Warm Yellow** | `#FFC933` | CTA primaire UNIQUEMENT |
| **Pale Blue Gray** | `#E4EEF0` | Backgrounds alternés |

## 🚀 Quick Start

### Utiliser les tokens

```typescript
import { colors } from '@/design/tokens/colors';
import { typography } from '@/design/tokens/typography';
import { shadows } from '@/design/tokens/shadows';
```

### Utiliser les composants

```tsx
import { Button } from '@/design/components/Button';
import { Card } from '@/design/components/Card';
import { Pill } from '@/design/components/Pill';

// Bouton primaire (Warm Yellow)
<Button.Primary onClick={handleClick}>
  Obtenir mes devis
</Button.Primary>

// Card avec hover
<Card.Hoverable>
  <h3>Titre de la card</h3>
  <p>Contenu...</p>
</Card.Hoverable>

// Pill success
<Pill.Success>✓ Vérifié</Pill.Success>
```

### Utiliser les classes CSS

```tsx
// Dans vos composants
<button className="btn-primary">
  Obtenir mes devis
</button>

<div className="card-hoverable">
  Contenu de la card
</div>

<span className="pill-success">
  ✓ Vérifié
</span>
```

## 📚 Documentation complète

- **[guidelines.md](./guidelines.md)** : Règles d'usage, Do/Don't, exemples
- **[migrations.md](./migrations.md)** : Plan de migration composant par composant

## ✅ Quick Wins prioritaires

1. ✅ CTA hero en Warm Yellow (contraste fort)
2. ✅ Pills uniformes (même style partout)
3. ✅ Fix sticky CTA (ne plus masquer contenu)
4. ✅ Réduire whitespace sections (-30%)
5. ✅ Unifier libellés CTA ("Obtenir mes devis")

## 🔗 Liens utiles

- [Tailwind Config](../tailwind.config.ts)
- [Global CSS](../app/globals.css)
- [Composants existants](../components/)

---

**Maintenu par :** Équipe Moverz  
**Dernière mise à jour :** Février 2026
