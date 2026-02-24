#!/bin/bash

# Script de migration des inline styles avec couleurs hardcodées
# Phase 2 : Styles inline

echo "🎨 Migration des inline styles..."

# Pour les inline styles, on doit être plus prudent
# On va chercher les patterns spécifiques

echo "📦 Recherche des inline styles avec couleurs hardcodées..."

# Compter les occurrences restantes
echo ""
echo "📊 Occurrences restantes de couleurs hardcodées :"
echo "  #6BCFCF : $(grep -r '#6BCFCF' app components --include="*.tsx" 2>/dev/null | wc -l | tr -d ' ')"
echo "  #0EA5A6 : $(grep -r '#0EA5A6' app components --include="*.tsx" 2>/dev/null | wc -l | tr -d ' ')"
echo "  #2B7A78 : $(grep -r '#2B7A78' app components --include="*.tsx" 2>/dev/null | wc -l | tr -d ' ')"
echo "  #0F172A : $(grep -r '#0F172A' app components --include="*.tsx" 2>/dev/null | wc -l | tr -d ' ')"
echo "  #04163a : $(grep -r '#04163a' app components --include="*.tsx" 2>/dev/null | wc -l | tr -d ' ')"
echo "  #0B0F14 : $(grep -r '#0B0F14' app components --include="*.tsx" 2>/dev/null | wc -l | tr -d ' ')"
echo "  #6B7280 : $(grep -r '#6B7280' app components --include="*.tsx" 2>/dev/null | wc -l | tr -d ' ')"
echo "  #E5E7EB : $(grep -r '#E5E7EB' app components --include="*.tsx" 2>/dev/null | wc -l | tr -d ' ')"
echo "  #E3E5E8 : $(grep -r '#E3E5E8' app components --include="*.tsx" 2>/dev/null | wc -l | tr -d ' ')"

echo ""
echo "✅ Analyse terminée"
echo ""
