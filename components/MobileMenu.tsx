"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/pourquoi-moverz/", label: "Pourquoi Moverz" },
  { href: "/comment-ca-marche/", label: "Comment ça marche" },
  { href: "/faq/", label: "FAQ" },
  { href: "/blog/", label: "Blog" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Fermer le menu au changement de route
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Empêcher le scroll quand le menu est ouvert
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border transition-colors"
        style={{ color: "var(--color-text)", borderColor: "var(--color-border)" }}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Overlay + Menu panel */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            style={{ top: "56px" }}
          />
          <div
            className="fixed left-0 right-0 z-50 border-b shadow-lg"
            style={{
              top: "56px",
              background: "rgba(250, 250, 250, 0.98)",
              borderColor: "var(--color-border)",
            }}
          >
            <nav className="flex flex-col px-5 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors"
                  style={{
                    color:
                      pathname === link.href
                        ? "var(--color-accent)"
                        : "var(--color-text)",
                  }}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t" style={{ borderColor: "var(--color-border)" }}>
                <a
                  href="https://devis.moverz.fr/devis-gratuits-v3?source=moverz.fr&from=header-mobile"
                  rel="nofollow"
                  className="block w-full text-center rounded-[var(--radius-sm)] px-4 py-3 text-[14px] font-semibold text-white transition-all active:scale-[0.98]"
                  style={{ background: "var(--color-text)" }}
                >
                  Obtenir des devis
                </a>
              </div>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
