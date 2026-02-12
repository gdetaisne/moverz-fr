#!/usr/bin/env python3
"""
Script FINAL pour appliquer la charte graphique V4 à 100%
Nettoie TOUTES les couleurs hardcodées, ajoute font-heading partout
"""

import os
import re
from pathlib import Path

# Tous les remplacements possibles
COLOR_REPLACEMENTS = [
    # Textes - toutes les variations possibles
    (r'text-\[#0F172A\]', 'text-[var(--color-text)]'),
    (r'text-\[#0B0F19\]', 'text-[var(--color-text)]'),
    (r'text-\[#04163a\]', 'text-[var(--color-text)]'),
    (r'text-\[#1F2937\]', 'text-[var(--color-text)]'),
    (r'text-\[#111827\]', 'text-[var(--color-text)]'),
    (r'text-\[#1E293B\]', 'text-[var(--color-text-secondary)]'),
    (r'text-\[#334155\]', 'text-[var(--color-text-secondary)]'),
    (r'text-\[#475569\]', 'text-[var(--color-text-secondary)]'),
    (r'text-\[#6B7280\]', 'text-[var(--color-text-secondary)]'),
    (r'text-\[#64748B\]', 'text-[var(--color-text-secondary)]'),
    (r'text-\[#4b5c6b\]', 'text-[var(--color-text-secondary)]'),
    (r'text-\[#9CA3AF\]', 'text-[var(--color-text-muted)]'),
    (r'text-\[#A1A1AA\]', 'text-[var(--color-text-muted)]'),
    (r'text-\[#71717A\]', 'text-[var(--color-text-secondary)]'),
    
    # Backgrounds
    (r'bg-\[#FAFAFA\]', 'bg-[var(--color-bg)]'),
    (r'bg-\[#F9FAFB\]', 'bg-[var(--color-bg)]'),
    (r'bg-\[#F8FAFC\]', 'bg-[var(--color-bg)]'),
    (r'bg-\[#FFFFFF\]', 'bg-[var(--color-surface)]'),
    (r'bg-\[#0F172A\]', 'bg-[var(--color-bg-dark)]'),
    (r'bg-\[#1E293B\]', 'bg-[var(--color-bg-dark)]'),
    (r'bg-\[#0B0F14\]', 'bg-[var(--color-bg-dark)]'),
    (r'bg-\[#020617\]', 'bg-[var(--color-bg-dark)]'),
    
    # Borders
    (r'border-\[#E5E7EB\]', 'border-[var(--color-border)]'),
    (r'border-\[#E3E5E8\]', 'border-[var(--color-border)]'),
    (r'border-\[#D1D5DB\]', 'border-[var(--color-border)]'),
    (r'border-\[#E2E8F0\]', 'border-[var(--color-border)]'),
    (r'border-\[#F3F4F6\]', 'border-[var(--color-border-light)]'),
    (r'border-\[#F1F5F9\]', 'border-[var(--color-border-light)]'),
    
    # Gradients avec couleurs hardcodées
    (r'from-\[#0F172A\]', 'from-[var(--color-bg-dark)]'),
    (r'via-\[#1E293B\]', 'via-[var(--color-bg-dark)]'),
    (r'to-\[#0F172A\]', 'to-[var(--color-bg-dark)]'),
    (r'from-\[#1E293B\]', 'from-[var(--color-bg-dark)]'),
    (r'to-\[#1E293B\]', 'to-[var(--color-bg-dark)]'),
    
    # Classes Tailwind à remplacer
    (r'\btext-gray-900\b', 'text-[var(--color-text)]'),
    (r'\btext-gray-800\b', 'text-[var(--color-text)]'),
    (r'\btext-gray-700\b', 'text-[var(--color-text-secondary)]'),
    (r'\btext-gray-600\b', 'text-[var(--color-text-secondary)]'),
    (r'\btext-gray-500\b', 'text-[var(--color-text-muted)]'),
    (r'\btext-gray-400\b', 'text-[var(--color-text-muted)]'),
    
    (r'\bbg-gray-50\b', 'bg-[var(--color-bg)]'),
    (r'\bbg-gray-100\b', 'bg-[var(--color-border-light)]'),
    
    (r'\bborder-gray-300\b', 'border-[var(--color-border)]'),
    (r'\bborder-gray-200\b', 'border-[var(--color-border)]'),
    (r'\bborder-gray-100\b', 'border-[var(--color-border-light)]'),
    
    # Classes brand restantes (sans variantes)
    (r'\bbg-brand\b(?!-)', 'bg-[var(--color-accent)]'),
    (r'\btext-brand\b(?!-)', 'text-[var(--color-accent)]'),
    (r'\bborder-brand\b(?!-)', 'border-[var(--color-accent)]'),
]

def should_process_file(filepath):
    """Détermine si un fichier doit être traité"""
    ignore_dirs = {'node_modules', '.next', 'dist', 'build', '.git', 'public'}
    parts = Path(filepath).parts
    if any(ignore_dir in parts for ignore_dir in ignore_dirs):
        return False
    return filepath.endswith(('.tsx', '.ts'))

def add_font_heading_to_titles(content):
    """Ajoute font-heading aux titres H1, H2 qui n'en ont pas"""
    changed = False
    
    # H1 avec text-4xl ou plus, sans font-heading
    pattern_h1 = r'<h1\s+className="([^"]*)(text-(?:4xl|5xl|6xl|7xl))([^"]*?)"'
    matches = list(re.finditer(pattern_h1, content))
    
    for match in reversed(matches):
        full_class = match.group(1) + match.group(2) + match.group(3)
        if 'font-heading' not in full_class:
            # Insérer font-heading après le text-Xxl
            new_class = match.group(1) + match.group(2) + ' font-heading' + match.group(3)
            new_class = ' '.join(new_class.split())  # Nettoyer espaces
            old_tag = match.group(0)
            new_tag = f'<h1 className="{new_class}"'
            content = content[:match.start()] + new_tag + content[match.end():]
            changed = True
    
    # H2 avec text-3xl ou plus, sans font-heading
    pattern_h2 = r'<h2\s+className="([^"]*)(text-(?:3xl|4xl|5xl))([^"]*?)"'
    matches = list(re.finditer(pattern_h2, content))
    
    for match in reversed(matches):
        full_class = match.group(1) + match.group(2) + match.group(3)
        if 'font-heading' not in full_class:
            new_class = match.group(1) + match.group(2) + ' font-heading' + match.group(3)
            new_class = ' '.join(new_class.split())
            old_tag = match.group(0)
            new_tag = f'<h2 className="{new_class}"'
            content = content[:match.start()] + new_tag + content[match.end():]
            changed = True
    
    return content, changed

def apply_final_cleanup(filepath):
    """Applique tous les nettoyages"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        colors_changed = False
        fonts_changed = False
        
        # 1. Remplacer toutes les couleurs
        for pattern, replacement in COLOR_REPLACEMENTS:
            new_content = re.sub(pattern, replacement, content)
            if new_content != content:
                colors_changed = True
                content = new_content
        
        # 2. Ajouter font-heading
        content, fonts_changed = add_font_heading_to_titles(content)
        
        # 3. Nettoyer doubles espaces dans className
        content = re.sub(r'className="([^"]*?)\s{2,}([^"]*?)"', r'className="\1 \2"', content)
        
        # Sauvegarder si changements
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True, colors_changed, fonts_changed
        
        return False, False, False
    
    except Exception as e:
        print(f"❌ Erreur pour {filepath}: {e}")
        return False, False, False

def main():
    """Point d'entrée principal"""
    print("🎨 Nettoyage final - Application charte graphique V4 à 100%\n")
    
    base_dir = Path(__file__).parent.parent
    dirs_to_process = [
        base_dir / 'app',
        base_dir / 'components',
    ]
    
    total_files = 0
    modified_files = 0
    colors_fixed = 0
    fonts_fixed = 0
    
    for directory in dirs_to_process:
        if not directory.exists():
            continue
            
        print(f"📁 Traitement de {directory.name}/...")
        
        for root, dirs, files in os.walk(directory):
            for file in files:
                filepath = os.path.join(root, file)
                
                if not should_process_file(filepath):
                    continue
                
                total_files += 1
                
                changed, colors_changed, fonts_changed = apply_final_cleanup(filepath)
                
                if changed:
                    modified_files += 1
                    rel_path = Path(filepath).relative_to(base_dir)
                    
                    fixes = []
                    if colors_changed:
                        fixes.append("couleurs")
                        colors_fixed += 1
                    if fonts_changed:
                        fixes.append("fonts")
                        fonts_fixed += 1
                    
                    print(f"  ✅ {rel_path} ({', '.join(fixes)})")
    
    print(f"\n✨ Nettoyage terminé!")
    print(f"📊 {modified_files}/{total_files} fichiers modifiés")
    print(f"  - 🎨 {colors_fixed} fichiers avec corrections de couleurs")
    print(f"  - ✍️ {fonts_fixed} fichiers avec ajout de font-heading")
    print(f"\n💡 La charte graphique V4 est maintenant appliquée à 100%!")

if __name__ == '__main__':
    main()
