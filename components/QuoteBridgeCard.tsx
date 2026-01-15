"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Check, Copy, Mail, MessageCircle } from "lucide-react";

type QuoteBridgeCardProps = {
  quoteUrl: string;
};

function getWhatsappUrl(quoteUrl: string) {
  const whatsappPhone = (
    process.env.NEXT_PUBLIC_WHATSAPP_PHONE_E164 ||
    "33752986581" // +33 7 52 98 65 81 (WhatsApp Business Moverz)
  ).replace(/\D/g, "");

  const text =
    `Bonjour ! Voici mon lien Moverz pour obtenir des devis : ${quoteUrl}\\n\\n` +
    `Je peux envoyer 4 photos (entrée/escaliers, salon, meuble le plus volumineux, accès camion) pour des devis plus précis.`;

  return whatsappPhone ? `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(text)}` : quoteUrl;
}

function getMailtoUrl(quoteUrl: string) {
  const subject = "Moverz — lien pour obtenir 3 devis minimum (et ajouter mes photos)";
  const body =
    `Bonjour,\\n\\n` +
    `Voici mon lien Moverz : ${quoteUrl}\\n\\n` +
    `Je peux ajouter 4 photos (entrée/escaliers, salon, meuble le plus volumineux, accès camion) pour des devis plus précis.\\n\\n` +
    `Merci !`;
  return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function QuoteBridgeCard({ quoteUrl }: QuoteBridgeCardProps) {
  const [copied, setCopied] = useState(false);

  const whatsappUrl = useMemo(() => getWhatsappUrl(quoteUrl), [quoteUrl]);
  const mailtoUrl = useMemo(() => getMailtoUrl(quoteUrl), [quoteUrl]);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(quoteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // noop: clipboard may be blocked
    }
  };

  return (
    <div className="rounded-3xl bg-white border border-[#E6EEF2] shadow-[0_14px_50px_rgba(15,23,42,0.06)] p-6 md:p-7 space-y-5">
      {/* Header (clean, SaaS FR) */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 border border-[#6BCFCF]/25 px-3 py-1 text-xs font-semibold text-[#0F172A] w-fit">
          <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
          Service gratuit · Déménageurs vérifiés
        </div>

        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0F172A]">
          Comparez 3 devis minimum maintenant
        </h3>
        <p className="text-sm md:text-[15px] text-[#334155] leading-relaxed">
          Photos = devis plus précis. Téléphone masqué, sans démarchage.
        </p>
      </div>

      {/* Choice (2 cards, not big buttons) */}
      <div className="space-y-3">
        <p className="text-sm font-semibold text-[#0F172A]">
          Comment souhaitez-vous envoyer vos photos ?
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <a
            href={whatsappUrl}
            className="group rounded-2xl border border-[#DDE7ED] bg-white p-4 hover:border-[#6BCFCF]/45 hover:shadow-sm transition-all"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#128C7E]">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#0F172A]">WhatsApp</p>
                  <p className="text-xs text-[#64748B]">Devis plus rapides</p>
                </div>
              </div>
              <span className="rounded-full bg-[#6BCFCF]/12 border border-[#6BCFCF]/25 px-2.5 py-1 text-[11px] font-bold text-[#0F172A]">
                Rapide
              </span>
            </div>

            <div className="mt-3 flex items-center justify-end text-xs font-semibold text-[#0F172A]/70 group-hover:text-[#0F172A]">
              Ouvrir <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          </a>

          <a
            href={mailtoUrl}
            className="group rounded-2xl border border-[#DDE7ED] bg-white p-4 hover:border-[#6BCFCF]/45 hover:shadow-sm transition-all"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F172A]/5 text-[#0F172A]">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#0F172A]">Email</p>
                  <p className="text-xs text-[#64748B]">Envoyer depuis votre téléphone</p>
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-end text-xs font-semibold text-[#0F172A]/70 group-hover:text-[#0F172A]">
              Envoyer <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          </a>
        </div>
      </div>

      {/* Checklist (light, not heavy UI) */}
      <div className="rounded-2xl border border-[#E6EEF2] bg-[#F8FBFC] p-4">
        <p className="text-xs font-semibold text-[#0F172A] mb-2">Les 4 photos indispensables</p>
        <div className="grid grid-cols-2 gap-2 text-xs text-[#334155]">
          {[
            "Entrée / escaliers",
            "Salon (vue large)",
            "Meuble volumineux",
            "Accès camion / rue",
          ].map((label) => (
            <div key={label} className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#6BCFCF]/12 text-[#2B7A78]">
                <Check className="h-3.5 w-3.5" />
              </span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle links (no big buttons) */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={onCopy}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#0F172A]/70 hover:text-[#0F172A] transition-colors"
        >
          <Copy className="h-4 w-4" />
          {copied ? "Lien copié" : "Copier le lien"}
        </button>
        <a
          href={quoteUrl}
          className="text-xs font-semibold text-[#2B7A78] hover:underline inline-flex items-center gap-1"
        >
          Continuer sur cet appareil <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}


