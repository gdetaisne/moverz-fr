"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ConversionIntentTracker = dynamic(
  () => import("@/components/ConversionIntentTracker").then((m) => m.ConversionIntentTracker),
  { ssr: false }
);
const ScrollDepthTracker = dynamic(
  () => import("@/components/ScrollDepthTracker").then((m) => m.ScrollDepthTracker),
  { ssr: false }
);
const ExitIntentPopup = dynamic(
  () => import("@/components/ExitIntentPopup"),
  { ssr: false }
);

export default function DeferredClientFeatures() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const run = () => setEnabled(true);
    const idle = (window as any).requestIdleCallback as
      | ((cb: () => void, opts?: { timeout: number }) => number)
      | undefined;

    if (typeof idle === "function") {
      const id = idle(run, { timeout: 3000 });
      return () => {
        if (typeof (window as any).cancelIdleCallback === "function") {
          (window as any).cancelIdleCallback(id);
        }
      };
    }

    const timeout = window.setTimeout(run, 2000);
    return () => window.clearTimeout(timeout);
  }, []);

  if (!enabled) return null;

  return (
    <>
      <ConversionIntentTracker />
      <ScrollDepthTracker />
      <ExitIntentPopup />
    </>
  );
}
