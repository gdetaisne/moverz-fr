"use client";

import { motion } from "framer-motion";

type HeroMockupProps = {
  scrollY?: number;
};

export default function HeroMockup({ scrollY = 0 }: HeroMockupProps) {
  const parallax = Math.max(-18, Math.min(18, scrollY * 0.03));

  return (
    <div className="relative">
      {/* soft background blob */}
      <div className="absolute -inset-6 rounded-[40px] bg-white/40 backdrop-blur-sm border border-white/60 shadow-[0_20px_70px_rgba(15,23,42,0.06)]" />

      <div className="relative rounded-[34px] border border-[#E6EEF2] bg-white/85 backdrop-blur-sm p-6 md:p-7 shadow-[0_18px_60px_rgba(15,23,42,0.08)] overflow-hidden">
        {/* subtle decorative circles */}
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#6BCFCF]/18 blur-2xl" />
        <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-[#A8E8E8]/60 blur-2xl" />

        <div className="relative grid gap-6 lg:grid-cols-[1fr_240px] items-center">
          {/* Left: "screen" preview */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 border border-[#6BCFCF]/25 px-3 py-1 text-xs font-semibold text-[#0F172A]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
              Aperçu
            </div>

            <div className="rounded-2xl border border-[#E6EEF2] bg-white p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[#0F172A]">Conversation WhatsApp</p>
                <span className="text-xs font-semibold text-[#2B7A78]">Photos → devis</span>
              </div>

              {/* photo stack */}
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="aspect-[4/3] rounded-xl border border-[#E6EEF2] bg-gradient-to-br from-[#F1F5F9] to-[#E2E8F0] relative overflow-hidden"
                  >
                    <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_30%_30%,rgba(107,207,207,0.35),transparent_55%)]" />
                    <div className="absolute bottom-2 left-2 right-2 h-2 rounded-full bg-white/70 border border-white/70" />
                  </div>
                ))}
              </div>

              {/* messages */}
              <div className="mt-4 space-y-2">
                <div className="ml-auto w-[82%] rounded-2xl rounded-tr-sm bg-[#0F172A] px-3 py-2 text-xs text-white">
                  Voici 4 photos (salon, escaliers, meuble volumineux, accès camion).
                </div>
                <div className="w-[86%] rounded-2xl rounded-tl-sm bg-[#6BCFCF]/15 border border-[#6BCFCF]/25 px-3 py-2 text-xs text-[#0F172A]">
                  Merci ! Je reviens avec <span className="font-semibold">3 à 5 devis</span> comparables.
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Téléphone masqué", "0 spam", "3 à 5 devis"].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full bg-white border border-[#E6EEF2] px-3 py-1 text-xs font-semibold text-[#0F172A]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: phone frame (light) */}
          <motion.div
            className="hidden lg:block justify-self-end"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transform: `translateY(${parallax}px)` }}
          >
            <div className="relative w-[240px]">
              <div className="rounded-[34px] border border-[#0F172A]/20 bg-[#0F172A] p-2 shadow-[0_18px_60px_rgba(15,23,42,0.25)]">
                <div className="rounded-[28px] bg-white overflow-hidden">
                  <div className="h-10 bg-[#0F172A] flex items-center justify-center text-white text-xs font-semibold">
                    Moverz
                  </div>
                  <div className="p-3 space-y-2">
                    <div className="h-16 rounded-2xl bg-[#F1F5F9] border border-[#E6EEF2]" />
                    <div className="h-10 rounded-2xl bg-[#6BCFCF]/10 border border-[#6BCFCF]/25" />
                    <div className="h-10 rounded-2xl bg-[#0F172A] text-white flex items-center justify-center text-xs font-semibold">
                      3 à 5 devis
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


