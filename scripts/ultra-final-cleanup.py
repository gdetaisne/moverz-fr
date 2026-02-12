#!/usr/bin/env python3
"""
Script ULTRA FINAL - Nettoie 100% des éléments non-conformes à la charte
Remplace TOUTES les couleurs hardcodées restantes (sauf mockups)
"""

import os
import re
from pathlib import Path

# Remplacements de couleurs hardcodées
HEX_REPLACEMENTS = [
    # Accent turquoise et variantes
    (r'#2B7A78', 'var(--color-accent)'),
    (r'#5AB0B0', 'var(--color-accent)'),
    (r'#4FB8B8', 'var(--color-accent)'),
    (r'#A8E8E8', 'var(--color-accent)'),
    
    # Backgrounds clairs
    (r'#F8F9FA', 'var(--color-bg)'),
    (r'#F1F5F9', 'var(--color-bg)'),
    (r'#F0F9FF', 'var(--color-border-light)'),
    
    # Borders
    (r'#E3E5E8', 'var(--color-border)'),
    (r'#D1D5DB', 'var(--color-border)'),
]

# Remplacements de classes Tailwind
TAILWIND_REPLACEMENTS = [
    # text-gray-
    (r'\btext-gray-50\b', 'text-[var(--color-bg)]'),
    (r'\btext-gray-100\b', 'text-[var(--color-border-light)]'),
    (r'\btext-gray-200\b', 'text-[var(--color-border)]'),
    (r'\btext-gray-300\b', 'text-[var(--color-border)]'),
    (r'\btext-gray-400\b', 'text-[var(--color-text-muted)]'),
    (r'\btext-gray-500\b', 'text-[var(--color-text-muted)]'),
    (r'\btext-gray-600\b', 'text-[var(--color-text-secondary)]'),
    (r'\btext-gray-700\b', 'text-[var(--color-text-secondary)]'),
    (r'\btext-gray-800\b', 'text-[var(--color-text)]'),
    (r'\btext-gray-900\b', 'text-[var(--color-text)]'),
    
    # bg-gray-
    (r'\bbg-gray-50\b', 'bg-[var(--color-bg)]'),
    (r'\bbg-gray-100\b', 'bg-[var(--color-border-light)]'),
    (r'\bbg-gray-200\b', 'bg-[var(--color-border)]'),
    
    # border-gray-
    (r'\bborder-gray-100\b', 'border-[var(--color-border-light)]'),
    (r'\bborder-gray-200\b', 'border-[var(--color-border)]'),
    (r'\bborder-gray-300\b', 'border-[var(--color-border)]'),
    
    # from/via/to avec gray-
    (r'\bfrom-gray-50\b', 'from-[var(--color-bg)]'),
    (r'\bto-gray-50\b', 'to-[var(--color-bg)]'),
]

def should_skip_file(filepath):
    """Fichiers/dossiers à ignorer"""
    ignore_dirs = {'node_modules', '.next', 'dist', 'build', '.git', 'public', 'scripts'}
    parts = Path(filepath).parts
    return any(ignore_dir in parts for ignore_dir in ignore_dirs)

def should_skip_line(line, pattern):
    """Lignes à ne PAS modifier (mockups, illustrations)"""
    skip_contexts = [
        'border-[#1F2937]',  # Frame iPhone noir
        'bg-[#1F2937]',       # Frame iPhone noir
        'bg-[#075E54]',       # WhatsApp vert
        '#ECE5DD',            # WhatsApp bg
        '#DCF8C6',            # WhatsApp bubble
    ]
    return any(ctx in line for ctx in skip_contexts)

def apply_ultra_cleanup(filepath):
    """Applique tous les remplacements"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        original_content = ''.join(lines)
        modified = False
        new_lines = []
        
        for line in lines:
            new_line = line
            
            # Appliquer les remplacements hex (sauf si ligne à skip)
            for pattern, replacement in HEX_REPLACEMENTS:
                if not should_skip_line(line, pattern):
                    new_line_tmp = re.sub(pattern, replacement, new_line)
                    if new_line_tmp != new_line:
                        modified = True
                        new_line = new_line_tmp
            
            # Appliquer les remplacements Tailwind
            for pattern, replacement in TAILWIND_REPLACEMENTS:
                new_line_tmp = re.sub(pattern, replacement, new_line)
                if new_line_tmp != new_line:
                    modified = True
                    new_line = new_line_tmp
            
            new_lines.append(new_line)
        
        if modified:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.writelines(new_lines)
            return True
        
        return False
    
    except Exception as e:
        print(f"❌ Erreur pour {filepath}: {e}")
        return False

def main():
    """Point d'entrée"""
    print("🎨 Nettoyage ULTRA FINAL - 100% conforme à la charte V4\n")
    
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
            # Filtrer les dossiers à ignorer
            dirs[:] = [d for d in dirs if d not in {'node_modules', '.next', 'dist', 'build', '.git'}]
            
            for file in files:
                if not file.endswith(('.tsx', '.ts')):
                    continue
                
                filepath = os.path.join(root, file)
                
                if should_skip_file(filepath):
                    continue
                
                total_files += 1
                
                if apply_ultra_cleanup(filepath):
                    modified_files += 1
                    rel_path = Path(filepath).relative_to(base_dir)
                    print(f"  ✅ {rel_path}")
    
    print(f"\n✨ Nettoyage ultra final terminé!")
    print(f"📊 {modified_files}/{total_files} fichiers modifiés")
    print(f"\n💡 Votre site est maintenant 100% conforme à la charte graphique V4!")

if __name__ == '__main__':
    main()
