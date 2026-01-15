"use client";
import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { generateWhatsAppLink, getWhatsAppNumber } from "@/lib/whatsapp";
import { trackEvent, TRACKING_EVENTS } from "@/lib/tracking";
import { X, Check, Copy } from "lucide-react";

type WhatsAppModalProps = {
  source: string;
  onClose: () => void;
};

export default function WhatsAppModal({
  source,
  onClose,
}: WhatsAppModalProps) {
  const [qrDataUrl, setQrDataUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const whatsappUrl = generateWhatsAppLink(getWhatsAppNumber(), source);

  useEffect(() => {
    // Generate QR code
    QRCode.toDataURL(whatsappUrl, {
      width: 300,
      margin: 2,
      color: {
        dark: "#0F172A",
        light: "#FFFFFF",
      },
    })
      .then(setQrDataUrl)
      .catch((err) => console.error("QR generation failed:", err));
  }, [whatsappUrl]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(whatsappUrl);
      setCopied(true);
      trackEvent(TRACKING_EVENTS.WHATSAPP_LINK_COPY, { source });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#1E293B]/60 hover:text-[#1E293B] transition-colors"
          aria-label="Fermer"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366]/10 mb-4">
            <svg className="w-8 h-8 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[#0F172A] mb-2">
            Assistant Moverz sur WhatsApp
          </h2>
          <p className="text-[#1E293B]/70 text-sm">
            Scannez le QR code avec votre téléphone pour démarrer
          </p>
        </div>

        {/* QR Code */}
        {qrDataUrl && (
          <div className="bg-gray-50 rounded-2xl p-6 mb-6 flex justify-center">
            <img src={qrDataUrl} alt="QR Code WhatsApp" className="w-64 h-64" />
          </div>
        )}

        {/* Photos checklist */}
        <div className="bg-[#A8E8E8]/20 rounded-xl p-4 mb-6 text-sm space-y-1.5">
          <p className="font-semibold text-[#0F172A] mb-2">📸 Toutes les pièces :</p>
          <p className="text-[#1E293B]/80">✓ Salon • Chambres • Cuisine • Cave/Garage</p>
          <p className="text-[#1E293B]/80">✓ Entrée • Escaliers • Parking</p>
        </div>

        {/* Copy link button */}
        <button
          onClick={handleCopyLink}
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1E293B] transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              <span>Lien copié !</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copier le lien WhatsApp</span>
            </>
          )}
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 my-4">
          <div className="flex-1 h-px bg-[#E3E5E8]" />
          <p className="text-xs text-[#1E293B]/60 font-medium">ou</p>
          <div className="flex-1 h-px bg-[#E3E5E8]" />
        </div>

        {/* Alternative: Continue on this device */}
        <a
          href={`https://devis.moverz.fr/devis-gratuits-v3?source=moverz.fr&from=${source}&devis_range=3-5`}
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#E3E5E8] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] hover:border-[#6BCFCF]/50 hover:bg-[#F8F9FA] transition-colors"
          onClick={onClose}
        >
          <span>Continuer sur cet appareil</span>
        </a>

        {/* Reassurance */}
        <p className="text-xs text-[#1E293B]/60 text-center mt-4">
          1 message/jour max • Stop quand vous voulez • Sans démarchage
        </p>
      </div>
    </div>
  );
}

