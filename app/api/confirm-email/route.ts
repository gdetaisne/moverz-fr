import { NextResponse } from "next/server";
import { normalizeBackofficeBaseUrl } from "@/lib/backoffice";

export const dynamic = "force-dynamic";

function toErrorMessage(payload: unknown): string | undefined {
  if (!payload || typeof payload !== "object") return undefined;
  const r = payload as Record<string, unknown>;

  const candidates = [
    r.message,
    r.error,
    r.detail,
    // common nested shapes
    (r as any)?.data?.message,
    (r as any)?.data?.error,
  ];

  for (const c of candidates) {
    if (typeof c === "string" && c.trim()) return c.trim();
  }
  return undefined;
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token")?.trim();

  const noStoreHeaders = {
    "Cache-Control": "no-store, max-age=0",
  };

  if (!token) {
    return NextResponse.json(
      { ok: false, message: "Lien invalide." },
      { status: 400, headers: noStoreHeaders }
    );
  }

  const base = normalizeBackofficeBaseUrl(process.env.NEXT_PUBLIC_BACKOFFICE_URL || "");
  if (!base) {
    return NextResponse.json(
      { ok: false, message: "Configuration manquante." },
      { status: 500, headers: noStoreHeaders }
    );
  }

  const target = `${base}/public/leads/confirm?token=${encodeURIComponent(token)}`;

  let res: Response;
  try {
    res = await fetch(target, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
      cache: "no-store",
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Impossible de contacter le serveur de confirmation." },
      { status: 502, headers: noStoreHeaders }
    );
  }

  if (res.ok) {
    return NextResponse.json({ ok: true }, { status: 200, headers: noStoreHeaders });
  }

  let message: string | undefined;
  try {
    const contentType = res.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const json = await res.json().catch(() => undefined);
      message = toErrorMessage(json);
    } else {
      const text = await res.text().catch(() => "");
      message = text?.trim() || undefined;
    }
  } catch {
    // ignore
  }

  if (!message) {
    message = `Erreur lors de la confirmation. (${res.status})`;
  }

  return NextResponse.json(
    { ok: false, message },
    { status: res.status || 500, headers: noStoreHeaders }
  );
}


