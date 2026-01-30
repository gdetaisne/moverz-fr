"use client";

import { JsonLd } from "@/components/schema/JsonLd";

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
  const hashString = (value: string) => {
    let hash = 5381;
    for (let i = 0; i < value.length; i++) {
      hash = (hash * 33) ^ value.charCodeAt(i);
    }
    return (hash >>> 0).toString(16);
  };
  const id = `cta-schema-${hashString(url)}`;

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

  return <JsonLd id={id} data={structuredData} />;
}

