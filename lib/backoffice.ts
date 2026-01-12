export function normalizeBackofficeBaseUrl(input: string): string {
  const trimmed = String(input || "").trim();
  if (!trimmed) return "";

  // Remove trailing slashes
  let base = trimmed.replace(/\/+$/, "");

  // Remove optional trailing "/api" or "/public" suffixes (per spec)
  base = base.replace(/\/(api|public)$/i, "");

  // Remove trailing slashes again in case suffix removal left one
  base = base.replace(/\/+$/, "");

  return base;
}


