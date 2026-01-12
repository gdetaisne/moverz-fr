// Minimal client-side tracking (extendable with GA4/Plausible)

/**
 * Track custom event (logs to console in dev, pushes to dataLayer if GTM present)
 */
export function trackEvent(
  eventName: string,
  properties?: Record<string, any>
) {
  // Log in development
  if (process.env.NODE_ENV === "development") {
    console.log("[Track]", eventName, properties);
  }

  // Push to GTM dataLayer if available
  if (typeof window !== "undefined" && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: eventName,
      ...properties,
    });
  }

  // TODO: Add Plausible/analytics integration here if needed
}

/**
 * Standardized tracking event names
 */
export const TRACKING_EVENTS = {
  HOME_CTA_WHATSAPP_CLICK: "home_cta_whatsapp_click",
  HOME_CTA_WEB_CLICK: "home_cta_web_click",
  WHATSAPP_QR_OPEN: "whatsapp_qr_open",
  WHATSAPP_LINK_COPY: "whatsapp_link_copy",
  WHATSAPP_MODAL_CLOSE: "whatsapp_modal_close",
  EXIT_INTENT_SHOWN: "exit_intent_shown",
  EXIT_INTENT_CLOSED: "exit_intent_closed",
  EXIT_INTENT_WHATSAPP_CLICK: "exit_intent_whatsapp_click",
  EXIT_INTENT_WEB_CLICK: "exit_intent_web_click",
} as const;

