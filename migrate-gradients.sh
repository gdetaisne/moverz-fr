#!/bin/bash

# Script de migration des gradients et cas restants
# Phase 3 : Gradients et inline complexes

echo "🎨 Migration des gradients et inline styles..."

# Remplacer les gradients (sauf dans opengraph-image.tsx)
find app components -name "*.tsx" ! -name "opengraph-image.tsx" -type f -exec sed -i '' \
  -e 's/from-\[#6BCFCF\]/from-brand-turquoise/g' \
  -e 's/to-\[#6BCFCF\]/to-brand-turquoise/g' \
  -e 's/from-\[#0EA5A6\]/from-brand-turquoise/g' \
  -e 's/to-\[#0EA5A6\]/to-brand-turquoise/g' \
  -e 's/from-\[#2B7A78\]/from-brand-turquoise/g' \
  -e 's/to-\[#2B7A78\]/to-brand-turquoise/g' \
  -e 's/from-\[#0F172A\]/from-v4-text/g' \
  -e 's/to-\[#0F172A\]/to-v4-text/g' \
  -e 's/from-\[#04163a\]/from-v4-text/g' \
  -e 's/to-\[#04163a\]/to-v4-text/g' \
  -e 's/bg-\[#2B7A78\]/bg-brand-turquoise/g' \
  -e 's/text-\[#2B7A78\]/text-brand-turquoise/g' \
  {} + 2>/dev/null

echo "✅ Gradients migrés"

# Remplacer les hover: versions restantes
find app components -name "*.tsx" ! -name "opengraph-image.tsx" -type f -exec sed -i '' \
  -e 's/hover:bg-\[#1E293B\]/hover:opacity-90/g' \
  -e 's/hover:border-\[#6BCFCF\]/hover:border-brand-turquoise/g' \
  -e 's/hover:border-\[#0EA5A6\]/hover:border-brand-turquoise/g' \
  -e 's/hover:text-\[#2B7A78\]/hover:text-brand-turquoise/g' \
  -e 's/hover:bg-\[#F8FAFC\]/hover:bg-v4-bg/g' \
  {} + 2>/dev/null

echo "✅ Hover states migrés"

# Remplacer les opacities avec couleurs
find app components -name "*.tsx" ! -name "opengraph-image.tsx" -type f -exec sed -i '' \
  -e 's/border-v4-accent\/30/border-brand-turquoise-300/g' \
  -e 's/border-v4-accent\/20/border-brand-turquoise-200/g' \
  -e 's/border-v4-accent\/50/border-brand-turquoise\/50/g' \
  {} + 2>/dev/null

echo "✅ Opacities migrées"

echo ""
echo "📊 Occurrences restantes :"
echo "  #6BCFCF : $(grep -r '#6BCFCF' app components --include="*.tsx" --exclude="opengraph-image.tsx" --exclude="manifest.ts" 2>/dev/null | wc -l | tr -d ' ')"
echo "  #0EA5A6 : $(grep -r '#0EA5A6' app components --include="*.tsx" --exclude="opengraph-image.tsx" 2>/dev/null | wc -l | tr -d ' ')"
echo "  #2B7A78 : $(grep -r '#2B7A78' app components --include="*.tsx" --exclude="opengraph-image.tsx" 2>/dev/null | wc -l | tr -d ' ')"
echo "  #0F172A : $(grep -r '#0F172A' app components --include="*.tsx" --exclude="opengraph-image.tsx" --exclude="manifest.ts" --exclude="layout.tsx" 2>/dev/null | wc -l | tr -d ' ')"
echo "  #04163a : $(grep -r '#04163a' app components --include="*.tsx" --exclude="manifest.ts" 2>/dev/null | wc -l | tr -d ' ')"
echo ""
