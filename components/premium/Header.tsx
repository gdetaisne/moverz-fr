"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
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
          ? "border-black/10 bg-white/85 shadow-sm"
          : "border-black/5 bg-white/50"
      }`}
    >
      <div className="mx-auto flex h-14 md:h-16 max-w-[1200px] items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 md:gap-3 transition-opacity hover:opacity-80">
          <Image src="/logo.png" alt="Moverz" width={40} height={40} className="h-8 w-8 md:h-10 md:w-10" priority />
          <span className="font-heading text-xl md:text-2xl font-bold text-[rgb(var(--text))]">Moverz</span>
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

        {/* CTA + Phone + Mobile Menu */}
        <div className="flex items-center gap-2 md:gap-3">
          <Button 
            size="md" 
            onClick={handleCTAClick} 
            className="text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2"
          >
            <span className="hidden sm:inline">Obtenir mes devis</span>
            <span className="inline sm:hidden">Devis</span>
          </Button>
          
          {/* Phone button - Desktop */}
          <a
            href="tel:+33664779434"
            className="hidden md:inline-flex h-10 items-center gap-2 rounded-lg border border-[rgb(var(--border))] px-3 text-[rgb(var(--text))] transition-all hover:bg-[rgb(var(--accent))]/5 hover:border-[rgb(var(--accent))]/30 hover:text-[rgb(var(--accent))]"
            aria-label="Appeler Moverz"
            title="Appeler : 06 64 77 94 34"
          >
            <Phone className="h-4 w-4" />
            <span className="text-sm font-medium">06 64 77 94 34</span>
          </a>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-lg border border-[rgb(var(--border))] text-[rgb(var(--text))] transition-colors hover:bg-[rgb(var(--bg))] md:hidden"
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
            className="overflow-hidden border-t border-black/5 bg-white/90 backdrop-blur-md md:hidden"
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
              <div className="pt-2 space-y-2">
                <Button size="md" onClick={handleCTAClick} className="w-full">
                  Obtenir mes devis
                </Button>
                <a
                  href="tel:+33664779434"
                  className="flex items-center justify-center gap-2 w-full rounded-lg border border-[rgb(var(--border))] px-4 py-3 text-sm font-medium text-[rgb(var(--text))] transition-all hover:bg-[rgb(var(--accent))]/5 hover:border-[rgb(var(--accent))]/30 hover:text-[rgb(var(--accent))]"
                >
                  <Phone className="h-4 w-4" />
                  <span>Appeler : 06 64 77 94 34</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
