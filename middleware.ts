import type { NextRequest } from "next/server";
import type { NextFetchEvent } from "next/server";
import { NextResponse } from "next/server";
import { CITIES } from "@/lib/cities";
import { QUARTIER_HUB_SLUGS } from "@/lib/quartiers";

// NOTE: exclude "ile-de-france" from corridors because it's a region, not a city-to-city route.
const CITY_SLUGS = new Set(CITIES.map((c) => c.slug).filter((s) => s !== "ile-de-france"));
const QUARTIERS_SLUGS = new Set<string>(QUARTIER_HUB_SLUGS as unknown as string[]);

// Pages quartiers "riches" (liées aux pages /{ville}/{quartier}/) déjà implémentées en dur.
// IMPORTANT: ne pas les écraser via rewrite, sinon on perd le maillage interne.
const DEDICATED_QUARTIERS_HUB_CITIES = new Set([
  "nice",
  "toulouse",
  "strasbourg",
  "nantes",
  "rennes",
  "rouen",
  "montpellier",
]);

function detectLlmBot(userAgent: string | null): string | null {
  if (!userAgent) return null;
  const ua = userAgent.toLowerCase();

  // Keep aligned with app/robots.ts
  if (ua.includes("oai-searchbot")) return "OAI-SearchBot";
  if (ua.includes("chatgpt-user")) return "ChatGPT-User";
  if (ua.includes("gptbot")) return "GPTBot";
  if (ua.includes("perplexitybot")) return "PerplexityBot";
  if (ua.includes("claude-web")) return "Claude-Web";
  if (ua.includes("claudebot")) return "ClaudeBot";
  if (ua.includes("anthropic-ai")) return "anthropic-ai";
  if (ua.includes("cohere-ai")) return "cohere-ai";

  return null;
}

function detectAiReferrerHost(referer: string | null): string | null {
  if (!referer) return null;
  try {
    const host = new URL(referer).hostname.toLowerCase();
    // Common AI surfaces that can send human traffic
    const known = new Set([
      "chatgpt.com",
      "chat.openai.com",
      "openai.com",
      "www.perplexity.ai",
      "perplexity.ai",
      "claude.ai",
      "www.claude.ai",
      "copilot.microsoft.com",
    ]);
    return known.has(host) ? host : null;
  } catch {
    return null;
  }
}

async function sendGa4Event(payload: unknown) {
  const measurementId = process.env.GA4_MEASUREMENT_ID;
  const apiSecret = process.env.GA4_API_SECRET;
  if (!measurementId || !apiSecret) return;

  try {
    await fetch(
      `https://www.google-analytics.com/mp/collect?measurement_id=${encodeURIComponent(
        measurementId,
      )}&api_secret=${encodeURIComponent(apiSecret)}`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      },
    );
  } catch {
    // Best effort: never break requests for tracking
  }
}

function makeGa4ClientId(): string {
  // GA4 Measurement Protocol client_id format is typically "1234567890.1234567890"
  // Use numeric-only to maximize acceptance across GA4 validations.
  const a = Math.floor(Math.random() * 1e10);
  const b = Math.floor(Math.random() * 1e10);
  return `${a}.${b}`;
}

export function middleware(req: NextRequest, event: NextFetchEvent) {
  const { pathname } = req.nextUrl;
  const mwDebug = req.nextUrl.searchParams.get("mwdebug");
  const bot = detectLlmBot(req.headers.get("user-agent"));
  const aiRefHost = detectAiReferrerHost(req.headers.get("referer"));

  const track = (res: NextResponse) => {
    if (mwDebug) {
      res.headers.set("x-mw-debug", "1");
      // Triggerable test event to validate GA4 Measurement Protocol wiring end-to-end.
      event.waitUntil(
        sendGa4Event({
          client_id: makeGa4ClientId(),
          events: [
            {
              name: "mw_debug",
              params: {
                path: pathname,
                value: String(mwDebug).slice(0, 64),
              },
            },
          ],
        }),
      );
    }

    if (aiRefHost) {
      // Track AI-driven human referrals independently from GA4 "traffic source" classification
      event.waitUntil(
        sendGa4Event({
          client_id: makeGa4ClientId(),
          events: [
            {
              name: "ai_referral_hit",
              params: {
                ref_host: aiRefHost,
                path: pathname,
                host: req.headers.get("host") ?? "",
              },
            },
          ],
        }),
      );
    }

    if (bot) {
      // Debug-friendly header (optional)
      res.headers.set("x-llm-bot", bot);

      // GA4 (optional). Enable by setting GA4_MEASUREMENT_ID + GA4_API_SECRET in prod env.
      event.waitUntil(
        sendGa4Event({
          client_id: makeGa4ClientId(),
          events: [
            {
              name: "llm_bot_hit",
              params: {
                bot,
                path: pathname,
                host: req.headers.get("host") ?? "",
              },
            },
          ],
        }),
      );
    }
    return res;
  };

  // Incident hardening (2026-01-12):
  // The Next.js image optimizer endpoint (`/_next/image`) can become CPU-heavy under crawl/bot traffic
  // and was observed to correlate with 504s + CPU saturation in production.
  // We disable it at the edge to prevent direct hits even if a client tries to call it explicitly.
  if (pathname.startsWith("/_next/image")) {
    return track(new NextResponse(null, { status: 404 }));
  }

  // Quartiers hubs: serve "/quartiers-<slug>/" via a dynamic route "/quartiers/<slug>/" (implementation detail).
  // This prevents 404s while keeping the public URL stable (SEO) and avoids adding 20+ nearly-identical files.
  const quartiersHub = pathname.match(/^\/quartiers-([a-z0-9-]+)\/?$/);
  if (quartiersHub) {
    const citySlug = quartiersHub[1];
    if (QUARTIERS_SLUGS.has(citySlug) && !DEDICATED_QUARTIERS_HUB_CITIES.has(citySlug)) {
      const url = req.nextUrl.clone();
      url.pathname = `/quartiers/${citySlug}`;
      return track(NextResponse.rewrite(url));
    }
  }

  // SEO: reduce duplicate URLs for corridor pages.
  // The internal corridor detail URL (/corridor/{from}/{to}) is an implementation detail used by middleware rewrites.
  // If someone hits it directly, permanently redirect to the public "{from}-vers-{to}" URL.
  const corridorDetail = pathname.match(/^\/corridor\/([a-z0-9-]+)\/([a-z0-9-]+)\/?$/);
  if (corridorDetail) {
    const from = corridorDetail[1];
    const to = corridorDetail[2];

    if (CITY_SLUGS.has(from) && CITY_SLUGS.has(to) && from !== to) {
      const url = req.nextUrl.clone();
      url.pathname = `/${from}-vers-${to}/`;
      return track(NextResponse.redirect(url, 308));
    }
  }

  // Fast path: only care about "-vers-"
  if (!pathname.includes("-vers-")) return track(NextResponse.next());

  // Match "/from-vers-to" with optional trailing slash
  const match = pathname.match(/^\/([a-z0-9-]+)-vers-([a-z0-9-]+)\/?$/);
  if (!match) return track(NextResponse.next());

  const from = match[1];
  const to = match[2];

  if (!CITY_SLUGS.has(from) || !CITY_SLUGS.has(to) || from === to) {
    return track(NextResponse.next());
  }

  const url = req.nextUrl.clone();
  url.pathname = `/corridor/${from}/${to}`;
  return track(NextResponse.rewrite(url));
}

export const config = {
  matcher: ["/:path*"],
};


