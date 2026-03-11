import { NextRequest, NextResponse } from 'next/server';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import path from 'path';

// Interface pour la requête de publication
interface PublishArticleRequest {
  content: string; // Contenu markdown avec frontmatter
}

// Fonction pour extraire le slug du frontmatter
function extractSlug(content: string): string | null {
  const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) return null;
  
  const frontmatter = frontmatterMatch[1];
  const slugMatch = frontmatter.match(/slug:\s*["']?([^"'\n]+)["']?/);
  
  if (slugMatch) {
    return slugMatch[1].trim();
  }
  
  // Si pas de slug explicite, chercher dans le title
  const titleMatch = frontmatter.match(/title:\s*["']([^"'\n]+)["']/);
  if (titleMatch) {
    const title = titleMatch[1].trim();
    // Générer un slug à partir du titre
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Supprimer les accents
      .replace(/[^a-z0-9\s-]/g, '') // Garder seulement lettres, chiffres, espaces et tirets
      .replace(/\s+/g, '-') // Remplacer espaces par tirets
      .replace(/-+/g, '-') // Remplacer tirets multiples par un seul
      .replace(/^-|-$/g, ''); // Supprimer tirets au début/fin
  }
  
  return null;
}

// Fonction pour valider le frontmatter
function validateFrontmatter(content: string): { valid: boolean; error?: string } {
  const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) {
    return { valid: false, error: 'Frontmatter manquant (doit commencer par ---)' };
  }
  
  const frontmatter = frontmatterMatch[1];
  
  // Vérifier les champs requis
  const requiredFields = ['title', 'description'];
  const missingFields = requiredFields.filter(field => {
    const regex = new RegExp(`${field}:\\s*[^\\n]+`);
    return !regex.test(frontmatter);
  });
  
  if (missingFields.length > 0) {
    return {
      valid: false,
      error: `Champs requis manquants: ${missingFields.join(', ')}`
    };
  }
  
  return { valid: true };
}

// Fonction pour ajouter/mettre à jour le slug dans le frontmatter
function ensureSlugInFrontmatter(content: string, slug: string): string {
  const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) return content;
  
  let frontmatter = frontmatterMatch[1];
  const restOfContent = content.slice(frontmatterMatch[0].length);
  
  // Vérifier si slug existe déjà
  if (/slug:\s*/.test(frontmatter)) {
    // Remplacer le slug existant
    frontmatter = frontmatter.replace(/slug:\s*["']?[^"'\n]+["']?/, `slug: ${slug}`);
  } else {
    // Ajouter le slug après la première ligne (généralement après title)
    const lines = frontmatter.split('\n');
    lines.splice(1, 0, `slug: ${slug}`);
    frontmatter = lines.join('\n');
  }
  
  return `---\n${frontmatter}\n---${restOfContent}`;
}

export async function POST(request: NextRequest) {
  try {
    const body: PublishArticleRequest = await request.json();
    
    if (!body.content) {
      return NextResponse.json(
        { error: 'Le contenu de l\'article est requis' },
        { status: 400 }
      );
    }
    
    // Valider le frontmatter
    const validation = validateFrontmatter(body.content);
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }
    
    // Extraire le slug
    let slug = extractSlug(body.content);
    if (!slug) {
      return NextResponse.json(
        { error: 'Impossible d\'extraire le slug du frontmatter' },
        { status: 400 }
      );
    }
    
    // Nettoyer le slug
    slug = slug.replace(/\.md$/, ''); // Supprimer .md si présent
    
    // S'assurer que le slug est dans le frontmatter
    const contentWithSlug = ensureSlugInFrontmatter(body.content, slug);
    
    // Définir le chemin du fichier
    const contentDir = path.join(process.cwd(), 'content', 'blog');
    const filePath = path.join(contentDir, `${slug}.md`);
    
    // Vérifier si le fichier existe déjà
    if (existsSync(filePath)) {
      return NextResponse.json(
        {
          error: 'Un article avec ce slug existe déjà',
          slug,
          suggestion: 'Modifiez le titre ou le slug dans le frontmatter'
        },
        { status: 409 }
      );
    }
    
    // Créer le dossier si nécessaire
    if (!existsSync(contentDir)) {
      mkdirSync(contentDir, { recursive: true });
    }
    
    // Écrire le fichier
    writeFileSync(filePath, contentWithSlug, 'utf-8');
    
    return NextResponse.json({
      success: true,
      message: 'Article publié avec succès',
      slug,
      filePath: `/content/blog/${slug}.md`,
      url: `/blog/${slug}`
    });
    
  } catch (error) {
    console.error('Erreur lors de la publication:', error);
    return NextResponse.json(
      {
        error: 'Erreur lors de la publication de l\'article',
        details: error instanceof Error ? error.message : 'Erreur inconnue'
      },
      { status: 500 }
    );
  }
}

// Endpoint pour sauvegarder en brouillon
export async function PUT(request: NextRequest) {
  try {
    const body: PublishArticleRequest & { slug?: string } = await request.json();
    
    if (!body.content) {
      return NextResponse.json(
        { error: 'Le contenu de l\'article est requis' },
        { status: 400 }
      );
    }
    
    // Extraire ou utiliser le slug fourni
    let slug = body.slug || extractSlug(body.content);
    if (!slug) {
      // Générer un slug temporaire avec timestamp
      slug = `brouillon-${Date.now()}`;
    }
    
    // Nettoyer le slug
    slug = slug.replace(/\.md$/, '');
    
    // Définir le chemin du fichier dans un dossier drafts
    const draftsDir = path.join(process.cwd(), 'content', 'blog-drafts');
    const filePath = path.join(draftsDir, `${slug}.md`);
    
    // Créer le dossier si nécessaire
    if (!existsSync(draftsDir)) {
      mkdirSync(draftsDir, { recursive: true });
    }
    
    // Écrire le fichier
    writeFileSync(filePath, body.content, 'utf-8');
    
    return NextResponse.json({
      success: true,
      message: 'Brouillon sauvegardé avec succès',
      slug,
      filePath: `/content/blog-drafts/${slug}.md`
    });
    
  } catch (error) {
    console.error('Erreur lors de la sauvegarde du brouillon:', error);
    return NextResponse.json(
      {
        error: 'Erreur lors de la sauvegarde du brouillon',
        details: error instanceof Error ? error.message : 'Erreur inconnue'
      },
      { status: 500 }
    );
  }
}
