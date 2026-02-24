import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "Moverz – Comparateur de déménagement gratuit";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  // Charger le VRAI logo
  const logoData = await readFile(join(process.cwd(), "public/logo.png"));
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

  // Charger Inter Bold (format TTF supporté par ImageResponse)
  const fontData = await readFile(join(process.cwd(), "public/fonts/inter.ttf"));

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
          background: "linear-gradient(to bottom, #F0FDFA 0%, #E0F2FE 50%, #F9FAFB 100%)",
          fontFamily: "Inter, sans-serif",
          position: "relative",
          overflow: "hidden",
          padding: "80px",
        }}
      >
        {/* Grain texture - Premium feel comme le site */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.015,
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
            zIndex: 0,
          }}
        />

        {/* Vignette sur les bords */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.03) 100%)",
            zIndex: 1,
          }}
        />
        
        {/* Halo teal gauche */}
        <div
          style={{
            position: "absolute",
            left: "25%",
            top: 0,
            width: "800px",
            height: "600px",
            borderRadius: "50%",
            filter: "blur(160px)",
            opacity: 0.2,
            background: "radial-gradient(circle, rgba(14,165,166,0.3), transparent 70%)",
            zIndex: 1,
          }}
        />
        
        {/* Halo orange droite */}
        <div
          style={{
            position: "absolute",
            right: "25%",
            top: "33%",
            width: "700px",
            height: "500px",
            borderRadius: "50%",
            filter: "blur(140px)",
            opacity: 0.15,
            background: "radial-gradient(circle, rgba(245,158,11,0.25), transparent 70%)",
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
            maxWidth: 1040,
          }}
        >
          {/* Logo VRAI + nom comme sur le site */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 48,
            }}
          >
            {/* VRAI Logo du site */}
            <img
              src={logoBase64}
              width={64}
              height={64}
              style={{
                borderRadius: 0,
              }}
            />
            <span
              style={{
                fontSize: 52,
                fontWeight: 800,
                color: "#0B0F19",
                letterSpacing: -1.2,
                fontFamily: "Inter, sans-serif",
              }}
            >
              Moverz
            </span>
          </div>

          {/* Tagline badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "rgba(255, 255, 255, 0.9)",
              padding: "10px 22px",
              borderRadius: 50,
              border: "1px solid rgba(0, 0, 0, 0.06)",
              marginBottom: 48,
              boxShadow: "0 1px 2px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.02)",
            }}
          >
            <span
              style={{
                color: "#4B5563",
                fontSize: 17,
                fontWeight: 600,
                fontFamily: "Inter, sans-serif",
              }}
            >
              Comparateur de déménagement · Gratuit · Sans démarchage
            </span>
          </div>

          {/* Titre EXACT du hero desktop */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            fontSize: 80,
            fontWeight: 700,
            lineHeight: 0.95,
            marginBottom: 56,
            fontFamily: "Inter, sans-serif",
            letterSpacing: -3,
            }}
          >
            <span style={{ color: "#111827", marginBottom: 8 }}>
              Vous déménagez ?
            </span>
            <span
              style={{
                color: "#0EA5A6",
              }}
            >
              On sélectionne le top 3 pour vous.
            </span>
          </div>

          {/* Trust badges - sans emojis, avec icônes checkmark */}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            {[
              { label: "Prix contrôlés", color: "#F59E0B" },
              { label: "Fiabilité vérifiée", color: "#0EA5A6" },
              { label: "Numéro masqué", color: "#0EA5A6" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  background: "rgba(255, 255, 255, 0.85)",
                  padding: "13px 22px",
                  borderRadius: 50,
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 2px 6px rgba(0,0,0,0.03)",
                }}
              >
                {/* Checkmark circle */}
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: item.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: 14,
                    fontWeight: 700,
                  }}
                >
                  ✓
                </div>
                <span
                  style={{
                    color: "#1F2937",
                    fontSize: 17,
                    fontWeight: 600,
                    fontFamily: "Inter, sans-serif",
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
      // Charger Inter pour un rendu propre
      fonts: [
        {
          name: 'Inter',
          data: fontData,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  );
}
