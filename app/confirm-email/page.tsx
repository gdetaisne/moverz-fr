import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import ConfirmEmailClient from "./ConfirmEmailClient";

export const metadata: Metadata = {
  title: "Confirmation d’email | Moverz",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function ConfirmEmailPage() {
  return (
    <main className="bg-hero min-h-screen">
      <div className="halo" />
      <Suspense
        fallback={
          <section className="section section-light">
            <div className="container max-w-xl">
              <div className="py-10 md:py-16">
                <div className="relative overflow-hidden rounded-3xl border border-[#E3E5E8] bg-white/90 backdrop-blur-xl p-8 md:p-10 shadow-[0_18px_70px_rgba(15,23,42,0.10)] text-center">
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#6BCFCF]/60 via-[#4f46e5]/40 to-[#22c55e]/50" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6BCFCF]/10 via-transparent to-transparent pointer-events-none" />

                  <div className="relative space-y-6">
                    <div className="mx-auto w-fit inline-flex items-center gap-3">
                      <Image
                        src="/logo.png"
                        alt="Moverz"
                        width={40}
                        height={40}
                        className="h-10 w-10"
                        priority
                      />
                      <span className="text-xl font-bold text-[#0F172A]">Moverz</span>
                    </div>

                    <div className="space-y-4">
                      <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F172A]/5 border border-[#E3E5E8]">
                        <div className="h-6 w-6 rounded-full border-2 border-[#6BCFCF] border-t-transparent animate-spin" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-xl md:text-2xl font-bold text-[#0F172A]">Confirmation en cours…</p>
                        <p className="text-sm md:text-[15px] text-[#4b5c6b]">
                          Ne fermez pas cette page, cela peut prendre quelques secondes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        }
      >
        <ConfirmEmailClient />
      </Suspense>
    </main>
  );
}


