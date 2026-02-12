#!/usr/bin/env python3
"""
Script pour ajouter font-heading à tous les titres principaux
Assure la cohérence typographique avec la home V4 (Sora pour les titres)
"""

import os
import re
from pathlib import Path

def should_process_file(filepath):
    """Détermine si un fichier doit être traité"""
    ignore_dirs = {'node_modules', '.next', 'dist', 'build', '.git'}
    parts = Path(filepath).parts
    if any(ignore_dir in parts for ignore_dir in ignore_dirs):
        return False
    return filepath.endswith('.tsx')

def add_font_heading(filepath):
    """Ajoute font-heading aux titres principaux"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        changes_made = False
        
        # Pattern pour H1 et H2 principaux sans font-heading
        patterns = [
            # H1 avec text-4xl ou plus, sans font-heading
            (r'<h1 className="([^"]*)(text-4xl|text-5xl|text-6xl|text-7xl)([^"]*?)(?<!font-heading)([^"]*?)"',
             r'<h1 className="\1\2\3 font-heading\4"'),
            
            # H2 avec text-3xl ou plus, sans font-heading
            (r'<h2 className="([^"]*)(text-3xl|text-4xl|text-5xl)([^"]*?)(?<!font-heading)([^"]*?)"',
             r'<h2 className="\1\2\3 font-heading\4"'),
        ]
        
        original_content = content
        
        for pattern, replacement in patterns:
            # Vérifier si le pattern match et ne contient pas déjà font-heading
            matches = re.finditer(pattern, content)
            for match in matches:
                if 'font-heading' not in match.group(0):
                    content = re.sub(pattern, replacement, content)
                    changes_made = True
        
        # Nettoyer les doubles espaces
        if changes_made:
            content = re.sub(r'\s{2,}', ' ', content)
            content = re.sub(r' font-heading font-heading', ' font-heading', content)
        
        if changes_made and content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
    
    except Exception as e:
        print(f"❌ Erreur pour {filepath}: {e}")
        return False

def main():
    """Point d'entrée principal"""
    print("✍️  Ajout de font-heading aux titres principaux...\n")
    
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
                
                if add_font_heading(filepath):
                    modified_files += 1
                    rel_path = Path(filepath).relative_to(base_dir)
                    print(f"  ✅ {rel_path}")
    
    print(f"\n✨ Terminé!")
    print(f"📊 {modified_files}/{total_files} fichiers modifiés")
    print(f"\n💡 Tous les titres utilisent maintenant Sora (font-heading)")

if __name__ == '__main__':
    main()
