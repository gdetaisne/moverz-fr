import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function sendGa4Event(payload: unknown) {
  const measurementId = process.env.GA4_MEASUREMENT_ID;
  const apiSecret = process.env.GA4_API_SECRET;
  if (!measurementId || !apiSecret) {
    return { ok: false as const, reason: "missing_env" as const };
  }

  const res = await fetch(
    `https://www.google-analytics.com/mp/collect?measurement_id=${encodeURIComponent(
      measurementId,
    )}&api_secret=${encodeURIComponent(apiSecret)}`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    },
  );

  return { ok: res.ok as const, status: res.status, statusText: res.statusText };
}

function makeGa4ClientId(): string {
  const a = Math.floor(Math.random() * 1e10);
  const b = Math.floor(Math.random() * 1e10);
  return `${a}.${b}`;
}

export async function GET(req: Request) {
  // Safety: never expose a GA4 event trigger endpoint publicly unless explicitly enabled.
  // - If GA4_DEBUG_TOKEN is not set, behave as "not found".
  // - If set, require ?token=... to match.
  const debugToken = process.env.GA4_DEBUG_TOKEN;
  if (!debugToken) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const url = new URL(req.url);
  const token = (url.searchParams.get("token") || "").slice(0, 256);
  if (token !== debugToken) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const name = (url.searchParams.get("name") || "mw_debug").slice(0, 40);
  const value = (url.searchParams.get("value") || "1").slice(0, 64);

  const payload = {
    client_id: makeGa4ClientId(),
    events: [
      {
        name,
        params: {
          value,
          path: url.pathname,
          host: url.host,
        },
      },
    ],
  };

  const out = await sendGa4Event(payload);
  return NextResponse.json(
    {
      sent: out.ok,
      ga4: out,
      event: { name, value },
    },
    { headers: { "cache-control": "no-store" } },
  );
}

