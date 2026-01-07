"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Check, Copy, Mail, MessageCircle } from "lucide-react";

type QuoteBridgeCardProps = {
  quoteUrl: string;
  title?: string;
  subtitle?: string;
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
  const subject = "Moverz — lien pour obtenir 3 à 5 devis (et ajouter mes photos)";
  const body =
    `Bonjour,\\n\\n` +
    `Voici mon lien Moverz : ${quoteUrl}\\n\\n` +
    `Je peux ajouter 4 photos (entrée/escaliers, salon, meuble le plus volumineux, accès camion) pour des devis plus précis.\\n\\n` +
    `Merci !`;
  return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function QuoteBridgeCard({
  quoteUrl,
  title = "Ajoutez 4 photos pour des devis plus précis",
  subtitle = "Sur ordinateur ? Ouvrez le lien sur votre téléphone (WhatsApp ou email). C’est là que vos photos sont déjà prêtes.",
}: QuoteBridgeCardProps) {
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
    <div className="rounded-3xl bg-white p-6 md:p-7 shadow-[0_10px_40px_rgba(15,23,42,0.08)] border border-[#E6EEF2] space-y-5">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 border border-[#6BCFCF]/25 px-3 py-1 text-xs font-semibold text-[#0F172A] w-fit">
          <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
          Photos = devis plus justes
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-[#0F172A]">{title}</h3>
        <p className="text-sm text-[#64748B] leading-relaxed">{subtitle}</p>
      </div>

      <div className="rounded-2xl border border-[#E6EEF2] bg-[rgba(107,207,207,0.06)] p-4">
        <p className="text-xs font-semibold text-[#0F172A] mb-2">Les 4 photos qui font gagner du temps</p>
        <div className="grid grid-cols-2 gap-2 text-xs text-[#334155]">
          {[
            "Entrée / escaliers",
            "Salon (vue large)",
            "Meuble volumineux",
            "Accès camion / rue",
          ].map((label) => (
            <div key={label} className="rounded-xl bg-white border border-[#E6EEF2] px-3 py-2 flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#6BCFCF]/15 text-[#2B7A78]">
                <Check className="h-3.5 w-3.5" />
              </span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <a
          href={whatsappUrl}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0F172A] px-5 py-3.5 text-sm font-semibold text-white hover:bg-[#1E293B] transition-colors"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/10">
            <MessageCircle className="h-4.5 w-4.5" />
          </span>
          <span className="flex items-center gap-2">
            WhatsApp <span className="text-[11px] font-bold rounded-full bg-white/10 px-2 py-0.5">Recommandé</span>
          </span>
          <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href={mailtoUrl}
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#E6EEF2] bg-white px-5 py-3.5 text-sm font-semibold text-[#0F172A] hover:bg-[#FAFAFA] transition-colors"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#0F172A]/5">
            <Mail className="h-4.5 w-4.5 text-[#0F172A]" />
          </span>
          Envoyer par email
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={onCopy}
          className="inline-flex items-center gap-2 rounded-xl border border-[#E6EEF2] bg-white px-4 py-2.5 text-xs font-semibold text-[#0F172A] hover:bg-[#FAFAFA] transition-colors"
        >
          <Copy className="h-4 w-4" />
          {copied ? "Lien copié" : "Copier le lien"}
        </button>
        <a href={quoteUrl} className="text-xs font-semibold text-[#2B7A78] hover:underline inline-flex items-center gap-1">
          Continuer sur cet appareil <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}


