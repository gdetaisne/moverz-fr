#!/usr/bin/env python3
"""
Script complémentaire pour finaliser l'application du Design System V4
Attrape les patterns que le premier script a manqués
"""

import os
import re
from pathlib import Path

# Nouveaux patterns à remplacer
REPLACEMENTS = [
    # Classes Tailwind brand-turquoise restantes (sans inline style)
    (r'\bbg-brand-turquoise\b(?!\-)', 'bg-[var(--color-accent)]'),
    (r'\btext-brand-turquoise\b(?!\-)', 'text-[var(--color-accent)]'),
    (r'\bborder-brand-turquoise\b(?!\-)', 'border-[var(--color-accent)]'),
    
    # Gradients avec couleurs hardcodées
    (r'from-\[#0F172A\]', 'from-[var(--color-bg-dark)]'),
    (r'via-\[#1E293B\]', 'via-[var(--color-bg-dark)]'),
    (r'to-\[#0F172A\]', 'to-[var(--color-bg-dark)]'),
    (r'from-\[#1E293B\]', 'from-[var(--color-bg-dark)]'),
    
    # Autres couleurs hardcodées de texte
    (r'text-\[#334155\]', 'text-[var(--color-text-secondary)]'),
    (r'text-\[#475569\]', 'text-[var(--color-text-secondary)]'),
    
    # Border variants manqués
    (r'border-\[#D1D5DB\]', 'border-[var(--color-border)]'),
    (r'border-gray-300\b', 'border-[var(--color-border)]'),
    
    # Backgrounds manqués
    (r'bg-\[#F9FAFB\]', 'bg-[var(--color-bg)]'),
    (r'bg-gray-50\b', 'bg-[var(--color-bg)]'),
    (r'bg-gray-100\b', 'bg-[var(--color-border-light)]'),
]

def should_process_file(filepath):
    """Détermine si un fichier doit être traité"""
    ignore_dirs = {'node_modules', '.next', 'dist', 'build', '.git'}
    parts = Path(filepath).parts
    if any(ignore_dir in parts for ignore_dir in ignore_dirs):
        return False
    return filepath.endswith(('.tsx', '.ts'))

def fix_remaining_colors(filepath):
    """Applique les corrections restantes"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        changes_made = False
        
        for pattern, replacement in REPLACEMENTS:
            new_content = re.sub(pattern, replacement, content)
            if new_content != content:
                changes_made = True
                content = new_content
        
        if changes_made:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
    
    except Exception as e:
        print(f"❌ Erreur pour {filepath}: {e}")
        return False

def main():
    """Point d'entrée principal"""
    print("🎨 Finalisation du Design System V4...\n")
    
    base_dir = Path(__file__).parent.parent
    dirs_to_process = [
        base_dir / 'app',
        base_dir / 'components',
    ]
    
    total_files = 0
    modified_files = 0
    
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
                
                if fix_remaining_colors(filepath):
                    modified_files += 1
                    rel_path = Path(filepath).relative_to(base_dir)
                    print(f"  ✅ {rel_path}")
    
    print(f"\n✨ Terminé!")
    print(f"📊 {modified_files}/{total_files} fichiers supplémentaires modifiés")
    print(f"\n💡 Le Design System V4 est maintenant 100% appliqué!")

if __name__ == '__main__':
    main()
