import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "Moverz – Comparateur de déménagement gratuit";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  // Charger les fontes
  const interFont = await readFile(
    join(process.cwd(), "public/fonts/inter-latin.woff2")
  );
  const soraFont = await readFile(
    join(process.cwd(), "public/fonts/sora-latin.woff2")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#FAFAFA",
          fontFamily: "Inter",
          position: "relative",
          overflow: "hidden",
          padding: "80px",
        }}
      >
        {/* Gradient hero background - exact comme le site */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, #a8e8e8 0%, #eafafa 42%, #ffffff 100%)",
            zIndex: 0,
          }}
        />
        
        {/* Radial gradient top-left */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "10%",
            width: "750px",
            height: "350px",
            background: "radial-gradient(ellipse 750px 350px, rgba(107, 207, 207, 0.28) 0%, transparent 60%)",
            zIndex: 1,
          }}
        />
        
        {/* Radial gradient top-right */}
        <div
          style={{
            position: "absolute",
            top: "5%",
            right: "5%",
            width: "600px",
            height: "300px",
            background: "radial-gradient(ellipse 600px 300px, rgba(168, 232, 232, 0.65) 0%, transparent 62%)",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            zIndex: 10,
            maxWidth: 1000,
          }}
        >
          {/* Logo stylisé en texte - pas d'image */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 0,
              marginBottom: 48,
            }}
          >
            {/* Logo carré turquoise avec "S" stylisé */}
            <div
              style={{
                width: 64,
                height: 64,
                background: "#0EA5A6",
                borderRadius: 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 16,
                boxShadow: "0 4px 12px rgba(14, 165, 166, 0.25)",
              }}
            >
              <span
                style={{
                  fontSize: 42,
                  fontWeight: 900,
                  color: "white",
                  fontFamily: "Sora",
                  letterSpacing: -2,
                }}
              >
                S
              </span>
            </div>
            <span
              style={{
                fontSize: 52,
                fontWeight: 800,
                color: "#0B0F19",
                letterSpacing: -1.5,
                fontFamily: "Sora",
              }}
            >
              Moverz
            </span>
          </div>

          {/* Tagline compact */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "white",
              padding: "8px 18px",
              borderRadius: 50,
              border: "1px solid rgba(14, 165, 166, 0.2)",
              marginBottom: 40,
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            <span
              style={{
                color: "#0EA5A6",
                fontSize: 15,
                fontWeight: 600,
                fontFamily: "Inter",
              }}
            >
              Comparateur de déménagement · Gratuit · Sans démarchage
            </span>
          </div>

          {/* Titre principal - aligné à gauche, moderne */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 72,
              fontWeight: 900,
              lineHeight: 1.05,
              marginBottom: 48,
              fontFamily: "Sora",
              letterSpacing: -2.5,
            }}
          >
            <span style={{ color: "#0B0F19" }}>
              Comparez des devis
            </span>
            <span
              style={{
                background: "linear-gradient(135deg, #0EA5A6 0%, #6BCFCF 100%)",
                backgroundClip: "text",
                color: "transparent",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              de déménageurs contrôlés
            </span>
          </div>

          {/* Benefits en ligne */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {[
              { icon: "✓", label: "100% gratuit" },
              { icon: "✓", label: "Sans démarchage" },
              { icon: "✓", label: "Pros vérifiés" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  background: "white",
                  padding: "12px 20px",
                  borderRadius: 50,
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    width: 24,
                    height: 24,
                    background: "#0EA5A6",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: 700,
                    fontSize: 14,
                    fontFamily: "Inter",
                  }}
                >
                  {item.icon}
                </div>
                <span
                  style={{
                    color: "#0B0F19",
                    fontSize: 18,
                    fontWeight: 600,
                    fontFamily: "Inter",
                  }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interFont,
          style: "normal",
          weight: 600,
        },
        {
          name: "Sora",
          data: soraFont,
          style: "normal",
          weight: 800,
        },
        {
          name: "Sora",
          data: soraFont,
          style: "normal",
          weight: 900,
        },
      ],
    }
  );
}
