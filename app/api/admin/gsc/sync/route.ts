import { NextResponse } from 'next/server';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { fetchGSCMetrics } from '@/lib/admin/gsc';

export const maxDuration = 60;

export async function POST() {
  try {
    console.log('[GSC SYNC] Starting Google Search Console sync...');
    
    const report = await fetchGSCMetrics(28);
    
    const dataDir = join(process.cwd(), 'data');
    if (!existsSync(dataDir)) {
      mkdirSync(dataDir, { recursive: true });
    }
    
    const outputPath = join(dataDir, 'gsc-report.json');
    writeFileSync(outputPath, JSON.stringify(report, null, 2));
    
    console.log('[GSC SYNC] ✅ Completed successfully');

    return NextResponse.json({
      success: true,
      message: `Synchronisation GSC réussie`,
      data: {
        clicks: report.totals.clicks,
        impressions: report.totals.impressions,
        ctr: (report.totals.ctr * 100).toFixed(2) + '%',
        position: report.totals.position.toFixed(1),
        period: report.period,
      },
    });
  } catch (error) {
    console.error('[GSC SYNC] Error:', error);
    return NextResponse.json(
      { 
        error: 'Erreur lors de la synchronisation GSC',
        details: (error as Error).message 
      },
      { status: 500 }
    );
  }
}
