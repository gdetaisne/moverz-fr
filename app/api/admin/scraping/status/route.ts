import { NextResponse } from 'next/server';
import { existsSync, readFileSync, statSync } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    const dataPath = join(process.cwd(), 'data', 'scraped-articles.json');
    
    if (!existsSync(dataPath)) {
      return NextResponse.json({
        hasData: false,
        lastScrape: null,
      });
    }

    const stats = statSync(dataPath);
    const data = JSON.parse(readFileSync(dataPath, 'utf-8'));

    return NextResponse.json({
      hasData: true,
      lastScrape: stats.mtime,
      totalArticles: data.totalArticles || 0,
      totalBlogs: data.totalBlogs || 0,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la lecture du status' },
      { status: 500 }
    );
  }
}
