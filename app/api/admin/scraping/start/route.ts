import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function POST() {
  try {
    console.log('[SCRAPING] Starting competitor scraping...');
    
    // Lance le script de scraping en arrière-plan
    execAsync('tsx scripts/scrape-competitors.ts')
      .then(() => {
        console.log('[SCRAPING] Scraping completed successfully');
      })
      .catch((error) => {
        console.error('[SCRAPING] Error:', error);
      });

    return NextResponse.json({
      success: true,
      message: 'Scraping lancé en arrière-plan. Cela peut prendre 30-60 minutes.',
    });
  } catch (error) {
    console.error('[SCRAPING API] Error:', error);
    return NextResponse.json(
      { error: 'Erreur lors du lancement du scraping' },
      { status: 500 }
    );
  }
}
