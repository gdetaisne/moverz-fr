"use client";

import { useEffect } from "react";

const SESSION_KEY = "moverzConversionIntent";

function markIntent(reason: string) {
  try {
    sessionStorage.setItem(SESSION_KEY, "true");
    // keep a tiny breadcrumb for debugging
    sessionStorage.setItem(`${SESSION_KEY}:reason`, reason);
  } catch {
    // ignore
  }
}

function isConversionHref(href: string): boolean {
  const h = href.toLowerCase();
  return (
    h.includes("devis.moverz.fr/devis-gratuits") ||
    h.includes("devis.moverz.fr/devis-gratuits-v3") ||
    h.startsWith("whatsapp://") ||
    h.includes("wa.me/") ||
    h.includes("api.whatsapp.com/")
  );
}

export function ConversionIntentTracker() {
  useEffect(() => {
    const onClickCapture = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const a = target.closest("a") as HTMLAnchorElement | null;
      if (a?.href && isConversionHref(a.href)) {
        markIntent("link:" + a.href);
        return;
      }

      // Buttons sometimes trigger window.location (no href). We can still detect likely CTAs by text.
      const button = target.closest("button") as HTMLButtonElement | null;
      if (button) {
        const text = (button.innerText || "").toLowerCase();
        if (text.includes("obtenir") && text.includes("devis")) markIntent("button:obtenir-devis");
        if (text.includes("whatsapp")) markIntent("button:whatsapp");
      }
    };

    document.addEventListener("click", onClickCapture, true);
    return () => document.removeEventListener("click", onClickCapture, true);
  }, []);

  return null;
}


