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

  // Charger le logo
  const logoData = await readFile(
    join(process.cwd(), "public/logo.png")
  );
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#FAFAFA",
          fontFamily: "Inter",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gradient hero multi-couches comme sur le site */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, #a8e8e8 0%, #eafafa 42%, #ffffff 100%)",
          }}
        />
        
        {/* Radial gradient top-left */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "-5%",
            width: "900px",
            height: "420px",
            background: "radial-gradient(ellipse 900px 420px, rgba(107, 207, 207, 0.26) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        
        {/* Radial gradient top-right */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-10%",
            width: "700px",
            height: "380px",
            background: "radial-gradient(ellipse 700px 380px, rgba(168, 232, 232, 0.60) 0%, transparent 62%)",
            pointerEvents: "none",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 10,
            padding: "60px",
            maxWidth: 1000,
          }}
        >
          {/* Logo + brand */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              marginBottom: 32,
            }}
          >
            <img
              src={logoBase64}
              width={72}
              height={72}
              style={{
                borderRadius: 16,
                background: "white",
                padding: 6,
                boxShadow: "0 2px 8px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)",
              }}
            />
            <span
              style={{
                fontSize: 56,
                fontWeight: 800,
                color: "#0B0F19",
                letterSpacing: -1.5,
                fontFamily: "Sora",
              }}
            >
              MOVERZ
            </span>
          </div>

          {/* Tagline */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "white",
              padding: "10px 22px",
              borderRadius: 50,
              border: "1px solid #E5E7EB",
              marginBottom: 36,
              boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 2px 6px rgba(0,0,0,0.03)",
            }}
          >
            <span style={{ color: "#6B7280", fontSize: 18, fontWeight: 600, fontFamily: "Inter" }}>
              Comparateur de déménagement
            </span>
            <span style={{ color: "#9CA3AF", fontSize: 16, fontFamily: "Inter" }}>
              · Gratuit · Sans démarchage
            </span>
          </div>

          {/* Title */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: 62,
              fontWeight: 900,
              lineHeight: 1.08,
              marginBottom: 36,
              textAlign: "center",
              fontFamily: "Sora",
              letterSpacing: -1.8,
            }}
          >
            <span style={{ color: "#0B0F19" }}>Comparez des devis</span>
            <span style={{ color: "#0EA5A6" }}>de déménageurs contrôlés</span>
          </div>

          {/* Benefits */}
          <div style={{ display: "flex", gap: 20 }}>
            {["0 €", "Sans démarchage", "Pros vérifiés"].map((label) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 11,
                  background: "white",
                  padding: "14px 22px",
                  borderRadius: 12,
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 2px 6px rgba(0,0,0,0.03)",
                }}
              >
                <div
                  style={{
                    width: 30,
                    height: 30,
                    background: "#0EA5A6",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: 700,
                    fontSize: 18,
                    fontFamily: "Inter",
                  }}
                >
                  ✓
                </div>
                <span style={{ color: "#0B0F19", fontSize: 20, fontWeight: 600, fontFamily: "Inter" }}>
                  {label}
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
          weight: 400,
        },
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
