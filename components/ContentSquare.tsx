import Script from "next/script";

// ContentSquare tag (provided snippet).
const CONTENTSQUARE_SRC = "https://t.contentsquare.net/uxa/0f0d80335b631.js";

export default function ContentSquare() {
  // Avoid tracking during local dev by default.
  if (process.env.NODE_ENV !== "production") return null;

  return (
    <Script
      id="contentsquare"
      strategy="afterInteractive"
      src={CONTENTSQUARE_SRC}
    />
  );
}

