// WhatsApp integration helpers for Moverz

/**
 * Generate pre-filled WhatsApp message (premium concierge tone)
 */
export function generateWhatsAppMessage(source: string = "home"): string {
  const message = `Bonjour, je voudrais obtenir 3 devis minimum comparables pour mon déménagement.

📍 Ville de départ :
📍 Ville d'arrivée :
📅 Date souhaitée :

📸 Je vais envoyer des photos de TOUTES mes pièces :
✓ Salon, chambres, cuisine
✓ Cave, garage, grenier (si concerné)
✓ Entrée immeuble + escaliers/ascenseur
✓ Parking / Stationnement
✓ Chaque meuble volumineux

⚡ 1 message/jour max • Stop quand vous voulez • Sans démarchage`;

  return message;
}

/**
 * Generate WhatsApp web link (desktop + mobile web)
 */
export function generateWhatsAppLink(
  phoneNumber: string = "33752986581",
  source: string = "home"
): string {
  const message = generateWhatsAppMessage(source);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

/**
 * Generate WhatsApp deep link (mobile app)
 */
export function generateWhatsAppDeepLink(
  phoneNumber: string = "33752986581",
  source: string = "home"
): string {
  const message = generateWhatsAppMessage(source);
  const encodedMessage = encodeURIComponent(message);
  return `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
}

/**
 * Get WhatsApp Business phone number from env (with fallback)
 */
export function getWhatsAppNumber(): string {
  return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "33752986581";
}

