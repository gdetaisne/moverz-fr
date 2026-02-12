"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";

const navLinks = [
  { href: "/pourquoi-moverz/", label: "Pourquoi" },
  { href: "/comment-ca-marche/", label: "Comment ça marche" },
  { href: "/faq/", label: "FAQ" },
  { href: "/blog/", label: "Blog" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleCTAClick = () => {
    const form = document.getElementById("tunnel-entry-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur-md transition-all duration-200 ${
        isScrolled
          ? "border-black/10 bg-white/70 shadow-sm"
          : "border-black/5 bg-white/70"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <Image src="/logo.png" alt="Moverz" width={40} height={40} className="h-10 w-10" priority />
          <span className="font-heading text-2xl font-bold text-[rgb(var(--text))]">Moverz</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-[rgb(var(--text))]"
                  : "text-[rgb(var(--text-2))] hover:text-[rgb(var(--text))]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Menu */}
        <div className="flex items-center gap-4">
          <Button size="md" onClick={handleCTAClick} className="hidden sm:inline-flex">
            Obtenir des devis
          </Button>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[rgb(var(--border))] text-[rgb(var(--text))] transition-colors hover:bg-[rgb(var(--bg))] md:hidden"
            aria-label="Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-black/5 bg-white/95 backdrop-blur-md md:hidden"
          >
            <nav className="mx-auto max-w-[1200px] space-y-1 px-5 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-[rgb(var(--accent))]/10 text-[rgb(var(--text))]"
                      : "text-[rgb(var(--text-2))] hover:bg-[rgb(var(--bg))]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <Button size="md" onClick={handleCTAClick} className="w-full">
                  Obtenir des devis
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
