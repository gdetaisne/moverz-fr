import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Moverz – Comparateur de déménagement gratuit";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
          background: "linear-gradient(135deg, #04163a 0%, #2b7a78 50%, #04163a 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Halo top-right */}
        <div
          style={{
            position: "absolute",
            top: -150,
            right: -150,
            width: 500,
            height: 500,
            background: "radial-gradient(circle, rgba(107,207,207,0.3) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Halo bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: -100,
            width: 400,
            height: 400,
            background: "radial-gradient(circle, rgba(79,184,184,0.2) 0%, transparent 70%)",
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
            <div
              style={{
                width: 80,
                height: 80,
                background: "white",
                borderRadius: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 50,
                fontWeight: 800,
                color: "#04163a",
              }}
            >
              M
            </div>
            <span
              style={{
                fontSize: 64,
                fontWeight: 800,
                color: "white",
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
              background: "rgba(255,255,255,0.1)",
              padding: "12px 24px",
              borderRadius: 50,
              border: "1px solid rgba(255,255,255,0.2)",
              marginBottom: 30,
            }}
          >
            <span style={{ color: "white", fontSize: 20, fontWeight: 600 }}>
              Comparateur de déménagement
            </span>
            <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 18 }}>
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
            <span style={{ color: "white" }}>Comparez des devis</span>
            <span style={{ color: "#6BCFCF" }}>de déménageurs contrôlés</span>
          </div>

          {/* Benefits */}
          <div style={{ display: "flex", gap: 40 }}>
            {["0 €", "Sans démarchage", "Pros vérifiés"].map((label) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: "rgba(255,255,255,0.08)",
                  padding: "16px 28px",
                  borderRadius: 16,
                  border: "1px solid rgba(107,207,207,0.2)",
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    background: "linear-gradient(135deg, #6BCFCF 0%, #4FB8B8 100%)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#04163a",
                    fontWeight: 700,
                    fontSize: 20,
                  }}
                >
                  ✓
                </div>
                <span style={{ color: "white", fontSize: 22, fontWeight: 600 }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
