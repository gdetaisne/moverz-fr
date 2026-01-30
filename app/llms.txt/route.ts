import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

/**
 * Sert le fichier llms.txt à la racine du site (accessible via /llms.txt)
 * 
 * Format standardisé pour les crawlers LLM (ChatGPT, Perplexity, Claude, etc.)
 * 
 * @see https://moverz.fr/llms.txt
 * @see Source: /public/llms.txt
 */
export async function GET() {
  try {
    const llmsTxtPath = path.join(process.cwd(), 'public/llms.txt');
    const llmsTxt = fs.readFileSync(llmsTxtPath, 'utf-8');
    
    return new NextResponse(llmsTxt, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
        'X-Robots-Tag': 'all',
      },
    });
  } catch (error) {
    console.error('Error serving /llms.txt:', error);
    return new NextResponse('File not found', { status: 404 });
  }
}
