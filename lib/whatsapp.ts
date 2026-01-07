// WhatsApp integration helpers for Moverz

/**
 * Generate pre-filled WhatsApp message (premium concierge tone)
 */
export function generateWhatsAppMessage(source: string = "home"): string {
  const message = `Bonjour, je voudrais obtenir 3 à 5 devis comparables pour mon déménagement.

📍 Ville de départ :
📍 Ville d'arrivée :
📅 Date souhaitée :

Je vais envoyer 6 photos (recommandé) :
✓ Salon (meubles + volumes)
✓ Cuisine (électroménager)
✓ Chambres (lits + armoires)
✓ Entrée immeuble (accès)
✓ Escaliers / Ascenseur
✓ Parking / Stationnement

⚡ 1 message/jour max • Stop quand vous voulez • 0 spam`;

  return message;
}

/**
 * Generate WhatsApp web link (desktop + mobile web)
 */
export function generateWhatsAppLink(
  phoneNumber: string = "33699999999", // TODO: Replace with real WhatsApp Business number
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
  phoneNumber: string = "33699999999",
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
  // TODO: Add to .env: NEXT_PUBLIC_WHATSAPP_NUMBER
  return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "33699999999";
}

