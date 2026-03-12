import { google } from 'googleapis';

function getGA4Client() {
  const credentialsJson = process.env.GSC_CREDENTIALS_JSON;
  if (!credentialsJson) throw new Error('GSC_CREDENTIALS_JSON manquant');

  const credentials = JSON.parse(credentialsJson);
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
  });
  return google.analyticsdata({ version: 'v1beta', auth });
}

function getPropertyId(): string {
  const id = process.env.GA4_PROPERTY_ID;
  if (!id) throw new Error('GA4_PROPERTY_ID manquant');
  // Accepte "properties/123" ou "123"
  return id.startsWith('properties/') ? id : `properties/${id}`;
}

function dateRange(days: number): { startDate: string; endDate: string } {
  return { startDate: `${days}daysAgo`, endDate: 'yesterday' };
}

export interface ConversionRow {
  dimension: string;
  sessions: number;
  leadClicks: number;
  conversionRate: number;
}

async function runReport(
  dimensionName: string,
  days: number
): Promise<ConversionRow[]> {
  const ga4 = getGA4Client();
  const property = getPropertyId();
  const { startDate, endDate } = dateRange(days);

  const [sessionsRes, eventsRes] = await Promise.all([
    ga4.properties.runReport({
      property,
      requestBody: {
        dateRanges: [{ startDate, endDate }],
        dimensions: [{ name: dimensionName }],
        metrics: [{ name: 'sessions' }],
        limit: 50,
        orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
      },
    }),
    ga4.properties.runReport({
      property,
      requestBody: {
        dateRanges: [{ startDate, endDate }],
        dimensions: [{ name: dimensionName }],
        metrics: [{ name: 'eventCount' }],
        dimensionFilter: {
          filter: {
            fieldName: 'eventName',
            stringFilter: { matchType: 'EXACT', value: 'lead_click' },
          },
        },
        limit: 50,
        orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }],
      },
    }),
  ]);

  // Merge par dimension
  const sessionMap = new Map<string, number>();
  for (const row of sessionsRes.data.rows ?? []) {
    const dim = row.dimensionValues?.[0]?.value ?? '(other)';
    sessionMap.set(dim, Number(row.metricValues?.[0]?.value ?? 0));
  }

  const leadMap = new Map<string, number>();
  for (const row of eventsRes.data.rows ?? []) {
    const dim = row.dimensionValues?.[0]?.value ?? '(other)';
    leadMap.set(dim, Number(row.metricValues?.[0]?.value ?? 0));
  }

  // Union des deux sets de dimensions, triées par sessions desc
  const allDims = new Set([...sessionMap.keys(), ...leadMap.keys()]);
  const rows: ConversionRow[] = [];
  for (const dim of allDims) {
    const sessions = sessionMap.get(dim) ?? 0;
    const leadClicks = leadMap.get(dim) ?? 0;
    rows.push({
      dimension: dim,
      sessions,
      leadClicks,
      conversionRate: sessions > 0 ? (leadClicks / sessions) * 100 : 0,
    });
  }

  return rows.sort((a, b) => b.sessions - a.sessions).slice(0, 30);
}

export async function getConversionByCountry(days = 28): Promise<ConversionRow[]> {
  return runReport('country', days);
}

export async function getConversionBySource(days = 28): Promise<ConversionRow[]> {
  return runReport('sessionSourceMedium', days);
}

export async function getConversionByLandingPage(days = 28): Promise<ConversionRow[]> {
  return runReport('landingPage', days);
}
