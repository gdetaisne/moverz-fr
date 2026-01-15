"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroMockup() {
  const [mounted, setMounted] = useState(false);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Show typing indicator after photos appear
    const typingTimer = setTimeout(() => setShowTyping(true), 3000);
    // Hide typing after 2 seconds
    const hideTypingTimer = setTimeout(() => setShowTyping(false), 5000);
    
    return () => {
      clearTimeout(typingTimer);
      clearTimeout(hideTypingTimer);
    };
  }, []);

  return (
    <div 
      className="relative w-full max-w-[340px] mx-auto group"
      style={{
        animation: mounted ? 'float 4s ease-in-out infinite' : 'none',
        willChange: 'transform',
      }}
    >
      {/* iPhone frame minimal */}
      <div className="relative bg-white rounded-[48px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] group-hover:shadow-[0_25px_80px_rgba(0,0,0,0.18)] p-3 border-[12px] border-[#1F2937] transition-shadow duration-500">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1F2937] rounded-b-3xl z-10" />

        {/* Screen content */}
        <div className="relative bg-[#E5DDD5] rounded-[36px] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
          {/* WhatsApp header */}
          <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden">
              <Image
                src="/logo.png"
                alt="Moverz"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Moverz</p>
              <p className="text-white/70 text-xs">en ligne</p>
            </div>
          </div>

          {/* Conversation */}
          <div className="p-4 space-y-3 pt-6">
            {/* Message from Moverz */}
            <div className="flex justify-start animate-[slideInLeft_0.5s_ease-out]">
              <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%] shadow-sm hover:shadow-md transition-shadow duration-200">
                <p className="text-[#1F2937] text-sm leading-relaxed">
                  Bonjour ! Envoyez-moi <strong>3 à 4 photos</strong> (pièces + accès) pour recevoir des devis précis 📸
                </p>
                <p className="text-[#667085] text-xs mt-1">10:24</p>
              </div>
            </div>

            {/* User's photos (4 thumbnails in 2x2 grid) */}
            <div className="flex justify-end animate-[slideInRight_0.5s_ease-out_0.2s_both]">
              <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-sm px-3 py-3 max-w-[85%] shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="grid grid-cols-2 gap-2">
                  {/* Photo 1: Living room */}
                  <div className="relative aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200 cursor-pointer">
                    <Image
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop&q=80"
                      alt="Salon"
                      fill
                      className="object-cover"
                      sizes="100px"
                    />
                  </div>
                  {/* Photo 2: Bedroom */}
                  <div className="relative aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200 cursor-pointer">
                    <Image
                      src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=200&h=200&fit=crop&q=80"
                      alt="Chambre"
                      fill
                      className="object-cover"
                      sizes="100px"
                    />
                  </div>
                  {/* Photo 3: Kitchen */}
                  <div className="relative aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200 cursor-pointer">
                    <Image
                      src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=200&h=200&fit=crop&q=80"
                      alt="Cuisine"
                      fill
                      className="object-cover"
                      sizes="100px"
                    />
                  </div>
                  {/* Photo 4: Boxes/moving */}
                  <div className="relative aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200 cursor-pointer">
                    <Image
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200&h=200&fit=crop&q=80"
                      alt="Cartons"
                      fill
                      className="object-cover"
                      sizes="100px"
                    />
                  </div>
                </div>
                <p className="text-[#667085] text-xs mt-2 text-right">10:26</p>
              </div>
            </div>

            {/* Typing indicator */}
            {showTyping && (
              <div className="flex justify-start animate-[fadeIn_0.3s_ease-out]">
                <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#667085] animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 rounded-full bg-[#667085] animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full bg-[#667085] animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            {/* Confirmation from Moverz */}
            {!showTyping && (
              <div className="flex justify-start animate-[slideInLeft_0.5s_ease-out_0.4s_both]">
                <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%] shadow-sm hover:shadow-md transition-shadow duration-200">
                  <p className="text-[#1F2937] text-sm leading-relaxed">
                    Parfait ! Vous recevrez <strong>3 devis minimum</strong> dans les prochains jours.
                  </p>
                  <p className="text-[#667085] text-xs mt-1">10:27</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-[48px] bg-gradient-to-b from-[#6BCFCF]/10 to-transparent group-hover:from-[#6BCFCF]/20 blur-2xl -z-10 transition-all duration-500" />

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}} />
    </div>
  );
}
