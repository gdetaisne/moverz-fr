import { NextResponse } from "next/server";

export function GET(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token")?.trim();

  const dest = new URL("/confirm-email/", url);
  if (token) dest.searchParams.set("token", token);

  return NextResponse.redirect(dest, 302);
}


