"use client";
import { useEffect, useState } from "react";

export default function HeroMockup() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div 
      className="relative w-full max-w-[340px] mx-auto"
      style={{
        animation: mounted ? 'float 4s ease-in-out infinite' : 'none',
      }}
    >
      {/* iPhone frame minimal */}
      <div className="relative bg-white rounded-[48px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-3 border-[12px] border-[#1F2937]">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1F2937] rounded-b-3xl z-10" />

        {/* Screen content */}
        <div className="relative bg-[#E5DDD5] rounded-[36px] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
          {/* WhatsApp header */}
          <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-semibold text-sm">
              M
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Moverz</p>
              <p className="text-white/70 text-xs">en ligne</p>
            </div>
          </div>

          {/* Conversation */}
          <div className="p-4 space-y-3 pt-6">
            {/* Message from Moverz */}
            <div className="flex justify-start">
              <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%] shadow-sm">
                <p className="text-[#1F2937] text-sm leading-relaxed">
                  Bonjour ! Envoyez-moi <strong>3 à 4 photos</strong> (pièces + accès) pour recevoir des devis précis 📸
                </p>
                <p className="text-[#667085] text-xs mt-1">10:24</p>
              </div>
            </div>

            {/* User's photos (4 thumbnails in 2x2 grid) */}
            <div className="flex justify-end">
              <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-sm px-3 py-3 max-w-[85%] shadow-sm">
                <div className="grid grid-cols-2 gap-2">
                  <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg" />
                  <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg" />
                  <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg" />
                  <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg" />
                </div>
                <p className="text-[#667085] text-xs mt-2 text-right">10:26</p>
              </div>
            </div>

            {/* Confirmation from Moverz */}
            <div className="flex justify-start">
              <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%] shadow-sm">
                <p className="text-[#1F2937] text-sm leading-relaxed">
                  Parfait ! Vous recevrez <strong>3 à 5 devis</strong> dans les prochains jours.
                </p>
                <p className="text-[#667085] text-xs mt-1">10:27</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-[48px] bg-gradient-to-b from-[#6BCFCF]/10 to-transparent blur-2xl -z-10" />

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}} />
    </div>
  );
}
