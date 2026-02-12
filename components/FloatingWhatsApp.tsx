"use client";
import { useState, useEffect } from "react";
import { trackEvent, TRACKING_EVENTS } from "@/lib/tracking";
import { generateWhatsAppDeepLink, getWhatsAppNumber } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hideForSticky, setHideForSticky] = useState(false);

  useEffect(() => {
    // Show after 2 seconds
    const timer = setTimeout(() => setVisible(true), 2000);
    
    // Hide when sticky CTA appears (40% scroll)
    const handleScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setHideForSticky(scrolled > 0.4);
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    trackEvent(TRACKING_EVENTS.HOME_CTA_WHATSAPP_CLICK, {
      source: "floating-button",
      position: "bottom-right",
    });
    window.location.href = generateWhatsAppDeepLink(getWhatsAppNumber(), "floating-button");
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ${
        visible && !hideForSticky ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      }`}
      style={{
        willChange: "transform, opacity",
      }}
      aria-label="Contacter sur WhatsApp"
    >
      {/* Pulsing ring effect */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      
      {/* Main button */}
      <div className={`relative flex items-center gap-3 rounded-full bg-[#25D366] shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all duration-300 ${
        isHovered ? "pr-4 shadow-[0_12px_40px_rgba(37,211,102,0.5)]" : "pr-0"
      }`}>
        {/* WhatsApp icon */}
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366]">
          <svg
            className="w-7 h-7 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </div>

        {/* Expand text on hover */}
        <span
          className={`whitespace-nowrap text-sm font-semibold text-white transition-all duration-300 ${
            isHovered ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"
          }`}
        >
          Démarrer sur WhatsApp
        </span>
      </div>

      {/* Tooltip on first appearance */}
      {visible && (
        <div className="absolute bottom-full right-0 mb-2 animate-[fadeInUp_0.5s_ease-out]">
          <div className="rounded-lg shadow-lg px-4 py-2 text-sm font-medium whitespace-nowrap" style={{ background: "var(--color-surface)", color: "var(--color-text)" }}>
            💬 Besoin d'aide ? Écrivez-nous !
            {/* Arrow */}
            <div className="absolute -bottom-1 right-6 w-2 h-2 rotate-45" style={{ background: "var(--color-surface)" }} />
          </div>
        </div>
      )}
    </button>
  );
}

