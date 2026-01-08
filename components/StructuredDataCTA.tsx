"use client";

type StructuredDataCTAProps = {
  title: string;
  description: string;
  url: string;
  actionType?: "OrderAction" | "ViewAction";
};

export default function StructuredDataCTA({
  title,
  description,
  url,
  actionType = "OrderAction",
}: StructuredDataCTAProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "potentialAction": {
      "@type": actionType,
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": url,
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/IOSPlatform",
          "http://schema.org/AndroidPlatform"
        ]
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

