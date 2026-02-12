"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { CheckCircle2, Mail, XCircle } from "lucide-react";

type UiState =
  | { kind: "error"; title: string; message?: string }
  | { kind: "loading" }
  | { kind: "success" };

export default function ConfirmEmailClient() {
  const searchParams = useSearchParams();
  const rawToken = searchParams.get("token");
  const token = useMemo(() => (rawToken ? rawToken.trim() : ""), [rawToken]);

  const [ui, setUi] = useState<UiState>(() => {
    if (!token) return { kind: "error", title: "Lien invalide", message: "Le lien de confirmation est incomplet." };
    return { kind: "loading" };
  });

  const lastTokenRef = useRef<string>("");

  useEffect(() => {
    if (!token) {
      setUi({ kind: "error", title: "Lien invalide", message: "Le lien de confirmation est incomplet." });
      return;
    }

    // Avoid re-firing for the same token (dev strict mode can mount twice)
    if (lastTokenRef.current === token) return;
    lastTokenRef.current = token;

    const controller = new AbortController();
    setUi({ kind: "loading" });

    (async () => {
      try {
        const res = await fetch(`/api/confirm-email?token=${encodeURIComponent(token)}`, {
          method: "GET",
          signal: controller.signal,
        });

        if (res.ok) {
          setUi({ kind: "success" });
          return;
        }

        let message: string | undefined;
        try {
          const contentType = res.headers.get("content-type") || "";
          if (contentType.includes("application/json")) {
            const json = (await res.json().catch(() => undefined)) as any;
            if (typeof json?.message === "string") message = json.message;
          } else {
            const text = await res.text().catch(() => "");
            message = text?.trim() || undefined;
          }
        } catch {
          // ignore
        }

        setUi({
          kind: "error",
          title: "Impossible de confirmer l’adresse email",
          message: message || "Une erreur est survenue. Merci de réessayer plus tard.",
        });
      } catch (e) {
        if ((e as any)?.name === "AbortError") return;
        setUi({
          kind: "error",
          title: "Impossible de confirmer l’adresse email",
          message: "Une erreur réseau est survenue. Merci de réessayer plus tard.",
        });
      }
    })();

    return () => controller.abort();
  }, [token]);

  return (
    <section className="section section-light">
      <div className="container max-w-xl">
        <div className="py-10 md:py-16">
          <div className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white/90 backdrop-blur-xl p-8 md:p-10 shadow-[0_18px_70px_rgba(15,23,42,0.10)] text-center">
            {/* Filament premium */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-brand-turquoise/60 via-[#4f46e5]/40 to-[#22c55e]/50" />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-turquoise/10 via-transparent to-transparent pointer-events-none" />

            <div className="relative space-y-6">
              <div className="mx-auto w-fit inline-flex items-center gap-3">
                <Image src="/logo.png" alt="Moverz" width={40} height={40} className="h-10 w-10" priority />
                <span className="text-xl font-bold text-[var(--color-text)]">Moverz</span>
              </div>

              {ui.kind === "loading" ? (
                <div className="space-y-4">
                  <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-bg-dark)]/5 border border-[var(--color-border)]">
                    <div className="h-6 w-6 rounded-full border-2 border-[var(--color-accent)] border-t-transparent animate-spin" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xl md:text-2xl font-bold text-[var(--color-text)]">Confirmation en cours…</p>
                    <p className="text-sm md:text-[15px] text-[var(--color-text-secondary)]">
                      Ne fermez pas cette page, cela peut prendre quelques secondes.
                    </p>
                  </div>
                </div>
              ) : ui.kind === "success" ? (
                <div className="space-y-4">
                  <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/25">
                    <CheckCircle2 className="h-7 w-7 text-[#2B7A78]" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xl md:text-2xl font-bold text-[var(--color-text)]">Adresse email confirmée</p>
                    <p className="text-sm md:text-[15px] text-[var(--color-text-secondary)]">Merci. Vous pouvez fermer cet onglet.</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 border border-red-200">
                    {ui.title === "Lien invalide" ? (
                      <Mail className="h-7 w-7 text-red-600" />
                    ) : (
                      <XCircle className="h-7 w-7 text-red-600" />
                    )}
                  </div>
                  <div className="space-y-2">
                    <p className="text-xl md:text-2xl font-bold text-[var(--color-text)]">{ui.title}</p>
                    {ui.message ? (
                      <p className="text-sm md:text-[15px] text-[var(--color-text-secondary)]">{ui.message}</p>
                    ) : null}
                  </div>
                </div>
              )}

              <p className="text-[11px] text-[#94A3B8] pt-2">
                Si le problème persiste, copiez/collez le lien de confirmation complet depuis votre email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


