import { NextResponse } from 'next/server';
import { existsSync, readFileSync, statSync } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    const dataPath = join(process.cwd(), 'data', 'gsc-report.json');
    
    if (!existsSync(dataPath)) {
      return NextResponse.json({
        hasData: false,
        lastSync: null,
      });
    }

    const stats = statSync(dataPath);
    const data = JSON.parse(readFileSync(dataPath, 'utf-8'));

    return NextResponse.json({
      hasData: true,
      lastSync: stats.mtime,
      totals: data.totals,
      period: data.period,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la lecture du status GSC' },
      { status: 500 }
    );
  }
}
