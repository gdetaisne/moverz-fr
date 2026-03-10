import { google } from 'googleapis';

interface GSCCredentials {
  type: string;
  project_id: string;
  private_key_id: string;
  private_key: string;
  client_email: string;
  client_id: string;
  auth_uri: string;
  token_uri: string;
  auth_provider_x509_cert_url: string;
  client_x509_cert_url: string;
}

export interface GSCMetrics {
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

export interface GSCPageMetrics extends GSCMetrics {
  page: string;
}

export interface GSCQueryMetrics extends GSCMetrics {
  query: string;
}

export interface GSCReport {
  totals: GSCMetrics;
  topPages: GSCPageMetrics[];
  topQueries: GSCQueryMetrics[];
  period: {
    startDate: string;
    endDate: string;
  };
  fetchedAt: string;
}

/**
 * Crée un client authentifié pour l'API Google Search Console
 */
export async function getGSCClient() {
  const credentialsJson = process.env.GSC_CREDENTIALS_JSON;
  if (!credentialsJson) {
    throw new Error('GSC_CREDENTIALS_JSON non configuré dans les variables d\'environnement');
  }

  let credentials: GSCCredentials;
  try {
    credentials = JSON.parse(credentialsJson);
  } catch (error) {
    throw new Error('GSC_CREDENTIALS_JSON invalide (JSON malformé)');
  }

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
  });

  const searchconsole = google.searchconsole({ version: 'v1', auth });
  return searchconsole;
}

/**
 * Récupère les métriques GSC pour une période donnée
 */
export async function fetchGSCMetrics(
  days: number = 28
): Promise<GSCReport> {
  const siteUrl = process.env.GSC_SITE_URL || 'sc-domain:moverz.fr';
  const searchconsole = await getGSCClient();

  // GSC data has ~3 day lag
  const today = new Date();
  const endDate = new Date(today);
  endDate.setDate(endDate.getDate() - 3);
  
  const startDate = new Date(endDate);
  startDate.setDate(startDate.getDate() - days);

  const formatDate = (d: Date) => d.toISOString().slice(0, 10);

  const startDateStr = formatDate(startDate);
  const endDateStr = formatDate(endDate);

  console.log(`[GSC] Fetching data for ${siteUrl} from ${startDateStr} to ${endDateStr}`);

  // Fetch totals
  const totalsResponse = await searchconsole.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate: startDateStr,
      endDate: endDateStr,
      dimensions: [],
      rowLimit: 1,
    },
  });

  const totalsRow = totalsResponse.data.rows?.[0] || { clicks: 0, impressions: 0, ctr: 0, position: 0 };
  
  const totals: GSCMetrics = {
    clicks: totalsRow.clicks || 0,
    impressions: totalsRow.impressions || 0,
    ctr: totalsRow.ctr || 0,
    position: totalsRow.position || 0,
  };

  // Fetch top pages
  const pagesResponse = await searchconsole.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate: startDateStr,
      endDate: endDateStr,
      dimensions: ['page'],
      rowLimit: 20,
    },
  });

  const topPages: GSCPageMetrics[] = (pagesResponse.data.rows || []).map((row: any) => ({
    page: row.keys[0],
    clicks: row.clicks || 0,
    impressions: row.impressions || 0,
    ctr: row.ctr || 0,
    position: row.position || 0,
  }));

  // Fetch top queries
  const queriesResponse = await searchconsole.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate: startDateStr,
      endDate: endDateStr,
      dimensions: ['query'],
      rowLimit: 20,
    },
  });

  const topQueries: GSCQueryMetrics[] = (queriesResponse.data.rows || []).map((row: any) => ({
    query: row.keys[0],
    clicks: row.clicks || 0,
    impressions: row.impressions || 0,
    ctr: row.ctr || 0,
    position: row.position || 0,
  }));

  console.log(`[GSC] ✅ Fetched: ${totals.clicks} clicks, ${topPages.length} pages, ${topQueries.length} queries`);

  return {
    totals,
    topPages,
    topQueries,
    period: {
      startDate: startDateStr,
      endDate: endDateStr,
    },
    fetchedAt: new Date().toISOString(),
  };
}

/**
 * Récupère les métriques spécifiques pour les articles de blog
 */
export async function fetchBlogArticlesMetrics(): Promise<GSCPageMetrics[]> {
  const siteUrl = process.env.GSC_SITE_URL || 'sc-domain:moverz.fr';
  const searchconsole = await getGSCClient();

  const today = new Date();
  const endDate = new Date(today);
  endDate.setDate(endDate.getDate() - 3);
  
  const startDate = new Date(endDate);
  startDate.setDate(startDate.getDate() - 28);

  const formatDate = (d: Date) => d.toISOString().slice(0, 10);

  const response = await searchconsole.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
      dimensions: ['page'],
      dimensionFilterGroups: [
        {
          filters: [
            {
              dimension: 'page',
              operator: 'contains',
              expression: '/blog/',
            },
          ],
        },
      ],
      rowLimit: 100,
    },
  });

  return (response.data.rows || []).map((row: any) => ({
    page: row.keys[0],
    clicks: row.clicks || 0,
    impressions: row.impressions || 0,
    ctr: row.ctr || 0,
    position: row.position || 0,
  }));
}
