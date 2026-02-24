#!/bin/bash

# Script de migration des couleurs hardcodées vers variables CSS
# Moverz Design System V4

echo "🎨 Migration des couleurs vers le design system V4..."

# Compteurs
TOTAL=0

# Fonction de remplacement
replace_color() {
  local old=$1
  local new=$2
  local desc=$3
  
  echo "  → $desc"
  
  # Remplacer dans app/
  find app -name "*.tsx" -type f -exec sed -i '' "s/$old/$new/g" {} + 2>/dev/null
  TOTAL=$((TOTAL + $(grep -r "$old" app --include="*.tsx" 2>/dev/null | wc -l || echo 0)))
  
  # Remplacer dans components/
  find components -name "*.tsx" -type f -exec sed -i '' "s/$old/$new/g" {} + 2>/dev/null
  TOTAL=$((TOTAL + $(grep -r "$old" components --include="*.tsx" 2>/dev/null | wc -l || echo 0)))
}

echo ""
echo "📦 Remplacement des couleurs accent..."
# Turquoise/Teal → accent
replace_color "text-\[#6BCFCF\]" "text-v4-accent" "text turquoise"
replace_color "text-\[#0EA5A6\]" "text-v4-accent" "text teal"
replace_color "text-\[#2B7A78\]" "text-v4-accent" "text legacy teal"
replace_color "bg-\[#6BCFCF\]" "bg-v4-accent" "bg turquoise"
replace_color "bg-\[#0EA5A6\]" "bg-v4-accent" "bg teal"
replace_color "border-\[#6BCFCF\]" "border-v4-accent" "border turquoise"
replace_color "border-\[#0EA5A6\]" "border-v4-accent" "border teal"

echo ""
echo "📦 Remplacement des couleurs text..."
# Navy/Dark → text
replace_color "text-\[#0F172A\]" "text-v4-text" "text navy dark"
replace_color "text-\[#04163a\]" "text-v4-text" "text navy dark alt"
replace_color "text-\[#0B0F19\]" "text-v4-text" "text brand navy"
replace_color "text-\[#6B7280\]" "text-v4-text-secondary" "text gray"
replace_color "bg-\[#0F172A\]" "bg-v4-text" "bg navy dark"
replace_color "bg-\[#04163a\]" "bg-v4-text" "bg navy alt"
replace_color "bg-\[#0B0F14\]" "bg-v4-bg-dark" "bg dark"

echo ""
echo "📦 Remplacement des bordures..."
# Borders
replace_color "border-\[#E5E7EB\]" "border-v4-border" "border gray"
replace_color "border-\[#E3E5E8\]" "border-v4-border" "border gray alt"

echo ""
echo "✅ Migration terminée !"
echo "   Note: Vérifier manuellement les gradients et les inline styles restants"
echo ""
