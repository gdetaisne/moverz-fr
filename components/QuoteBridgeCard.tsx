"use client";

import { useMemo, useState } from "react";

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
    <div className="rounded-2xl bg-white p-6 shadow-lg border border-[#E3E5E8] space-y-5">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2B7A78]">Photos = devis plus justes</p>
        <h3 className="text-xl md:text-2xl font-bold text-[#0F172A]">{title}</h3>
        <p className="text-sm text-[#64748B] leading-relaxed">{subtitle}</p>
      </div>

      <div className="rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] p-4">
        <p className="text-xs font-semibold text-[#0F172A] mb-2">Les 4 photos qui font gagner du temps</p>
        <div className="grid grid-cols-2 gap-2 text-xs text-[#334155]">
          <div className="rounded-lg bg-white border border-[#E5E7EB] px-3 py-2">Entrée / escaliers</div>
          <div className="rounded-lg bg-white border border-[#E5E7EB] px-3 py-2">Salon (vue large)</div>
          <div className="rounded-lg bg-white border border-[#E5E7EB] px-3 py-2">Meuble volumineux</div>
          <div className="rounded-lg bg-white border border-[#E5E7EB] px-3 py-2">Accès camion / rue</div>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <a
          href={whatsappUrl}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F172A] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1E293B] transition-colors"
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">●</span>
          WhatsApp
          <span className="text-base leading-none">→</span>
        </a>
        <a
          href={mailtoUrl}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-5 py-3 text-sm font-semibold text-[#0F172A] hover:bg-[#FAFAFA] transition-colors"
        >
          Envoyer par email
          <span className="text-base leading-none">→</span>
        </a>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={onCopy}
          className="inline-flex items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-4 py-2 text-xs font-semibold text-[#0F172A] hover:bg-[#FAFAFA] transition-colors"
        >
          {copied ? "Lien copié" : "Copier le lien"}
        </button>
        <a href={quoteUrl} className="text-xs font-semibold text-[#2B7A78] hover:underline">
          Continuer sur cet appareil →
        </a>
      </div>
    </div>
  );
}


