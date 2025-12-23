import Script from "next/script";

type MoverzWidgetEmbedProps = {
  /**
   * Tracking only (the widget script may or may not use these data-attrs).
   * Keep as plain strings for analytics/debug.
   */
  source: string;
  from: string;
  citySlug?: string;
  className?: string;
  /**
   * The widget script mounts into a DOM node by id.
   * Default matches the existing home integration.
   */
  rootId?: string;
};

export default function MoverzWidgetEmbed({
  source,
  from,
  citySlug,
  className = "min-h-[520px] w-full",
  rootId = "moverz-widget-root",
}: MoverzWidgetEmbedProps) {
  return (
    <>
      <Script
        id="moverz-widget-script"
        src="https://devis.moverz.fr/moverz-widget.js"
        strategy="afterInteractive"
      />
      <div
        id={rootId}
        className={className}
        data-source={source}
        data-from={from}
        data-city-slug={citySlug}
      />
    </>
  );
}


