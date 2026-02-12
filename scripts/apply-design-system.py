#!/usr/bin/env python3
"""
Script pour appliquer le Design System V4 à tous les composants Moverz
Remplace les couleurs hardcodées par les variables CSS
"""

import os
import re
from pathlib import Path

# Patterns de remplacement (ordre important!)
REPLACEMENTS = [
    # Brand turquoise variants
    (r'\bbrand-turquoise-600\b', 'brand-turquoise'),  # Normaliser d'abord
    (r'\bbrand-turquoise-500\b', 'brand-turquoise'),
    (r'\bbrand-turquoise-400\b', 'brand-turquoise'),
    (r'\bbrand-turquoise-300\b', 'brand-turquoise'),
    
    # Brand accent variants
    (r'\bbrand-accent-600\b', 'brand-accent'),
    (r'\bbrand-accent-500\b', 'brand-accent'),
    (r'\bbrand-accent-400\b', 'brand-accent'),
    (r'\bbrand-accent-300\b', 'brand-accent'),
    
    # Maintenant remplacer les classes Tailwind par inline styles
    # Textes
    (r'text-\[#0F172A\]', 'text-[var(--color-text)]'),
    (r'text-\[#0B0F19\]', 'text-[var(--color-text)]'),
    (r'text-\[#04163a\]', 'text-[var(--color-text)]'),
    (r'text-\[#1F2937\]', 'text-[var(--color-text)]'),
    (r'text-\[#1E293B\]', 'text-[var(--color-text-secondary)]'),
    (r'text-\[#6B7280\]', 'text-[var(--color-text-secondary)]'),
    (r'text-\[#64748B\]', 'text-[var(--color-text-secondary)]'),
    (r'text-\[#4b5c6b\]', 'text-[var(--color-text-secondary)]'),
    (r'text-\[#9CA3AF\]', 'text-[var(--color-text-muted)]'),
    (r'text-gray-600\b', 'text-[var(--color-text-secondary)]'),
    (r'text-gray-500\b', 'text-[var(--color-text-muted)]'),
    (r'text-gray-700\b', 'text-[var(--color-text-secondary)]'),
    
    # Backgrounds
    (r'bg-\[#FAFAFA\]', 'bg-[var(--color-bg)]'),
    (r'bg-\[#FFFFFF\]', 'bg-[var(--color-surface)]'),
    (r'bg-\[#0F172A\]', 'bg-[var(--color-bg-dark)]'),
    (r'bg-\[#1E293B\]', 'bg-[var(--color-bg-dark)]'),
    
    # Borders
    (r'border-\[#E5E7EB\]', 'border-[var(--color-border)]'),
    (r'border-\[#E3E5E8\]', 'border-[var(--color-border)]'),
    (r'border-\[#F3F4F6\]', 'border-[var(--color-border-light)]'),
    (r'border-gray-200\b', 'border-[var(--color-border)]'),
]

def should_process_file(filepath):
    """Détermine si un fichier doit être traité"""
    # Ignorer les fichiers de node_modules, .next, etc.
    ignore_dirs = {'node_modules', '.next', 'dist', 'build', '.git'}
    
    parts = Path(filepath).parts
    if any(ignore_dir in parts for ignore_dir in ignore_dirs):
        return False
    
    # Seulement les fichiers TSX et CSS
    return filepath.endswith(('.tsx', '.ts', '.css'))

def apply_design_system(filepath):
    """Applique le design system à un fichier"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        changes_made = False
        
        # Appliquer tous les remplacements
        for pattern, replacement in REPLACEMENTS:
            new_content = re.sub(pattern, replacement, content)
            if new_content != content:
                changes_made = True
                content = new_content
        
        # Sauvegarder seulement si des changements ont été faits
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
    print("🎨 Application du Design System V4 Moverz...\n")
    
    # Répertoires à traiter
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
                
                if apply_design_system(filepath):
                    modified_files += 1
                    rel_path = Path(filepath).relative_to(base_dir)
                    print(f"  ✅ {rel_path}")
    
    print(f"\n✨ Terminé!")
    print(f"📊 {modified_files}/{total_files} fichiers modifiés")
    print(f"\n💡 Les couleurs hardcodées ont été remplacées par les variables CSS du Design System V4")

if __name__ == '__main__':
    main()
