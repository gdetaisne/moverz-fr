import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "Moverz – Comparateur de déménagement gratuit";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  // Charger la fonte Inter
  const interFont = await readFile(
    join(process.cwd(), "public/fonts/inter-latin.woff2")
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
          background: "linear-gradient(180deg, #a8e8e8 0%, #eafafa 42%, #ffffff 100%)",
          fontFamily: "Inter",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Halos turquoise clairs - style site */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: 100,
            width: 600,
            height: 400,
            background: "radial-gradient(circle, rgba(168, 232, 232, 0.6) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -100,
            width: 500,
            height: 350,
            background: "radial-gradient(circle, rgba(107, 207, 207, 0.4) 0%, transparent 70%)",
            filter: "blur(60px)",
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
              width={80}
              height={80}
              style={{
                borderRadius: 16,
                background: "white",
                padding: 8,
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              }}
            />
            <span
              style={{
                fontSize: 64,
                fontWeight: 800,
                color: "#0B0F19",
                letterSpacing: -1,
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
              gap: 12,
              background: "white",
              padding: "12px 24px",
              borderRadius: 50,
              border: "1px solid #E5E7EB",
              marginBottom: 30,
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            <span style={{ color: "#6B7280", fontSize: 20, fontWeight: 600 }}>
              Comparateur de déménagement
            </span>
            <span style={{ color: "#9CA3AF", fontSize: 18 }}>
              · Gratuit · Sans démarchage
            </span>
          </div>

          {/* Title */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: 68,
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: 30,
              textAlign: "center",
            }}
          >
            <span style={{ color: "#0B0F19" }}>Comparez des devis</span>
            <span style={{ color: "#0EA5A6" }}>de déménageurs contrôlés</span>
          </div>

          {/* Benefits */}
          <div style={{ display: "flex", gap: 24 }}>
            {["0 €", "Sans démarchage", "Pros vérifiés"].map((label) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: "white",
                  padding: "16px 24px",
                  borderRadius: 12,
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    background: "#0EA5A6",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: 700,
                    fontSize: 20,
                  }}
                >
                  ✓
                </div>
                <span style={{ color: "#0B0F19", fontSize: 22, fontWeight: 600 }}>
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
          name: "Inter",
          data: interFont,
          style: "normal",
          weight: 800,
        },
        {
          name: "Inter",
          data: interFont,
          style: "normal",
          weight: 900,
        },
      ],
    }
  );
}
