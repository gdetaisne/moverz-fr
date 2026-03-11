import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Label Moverz : Score /100 — Vérifiez la fiabilité de votre déménageur";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          background: "linear-gradient(135deg, #F0FDFD 0%, #FFFFFF 50%, #F0FDFD 100%)",
          fontFamily: "system-ui, sans-serif",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Fond décoratif */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(14,165,166,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(14,165,166,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "rgba(14,165,166,0.12)",
            border: "1px solid rgba(14,165,166,0.3)",
            borderRadius: 999,
            padding: "8px 20px",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#0EA5A6",
            }}
          />
          <span
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: "#0EA5A6",
              letterSpacing: "0.02em",
            }}
          >
            Label Moverz
          </span>
        </div>

        {/* Titre principal */}
        <div
          style={{
            fontSize: 58,
            fontWeight: 800,
            color: "#0B0F19",
            textAlign: "center",
            lineHeight: 1.15,
            marginBottom: 24,
            maxWidth: 900,
          }}
        >
          Vérifiez si votre déménageur est fiable
        </div>

        {/* Sous-titre */}
        <div
          style={{
            fontSize: 24,
            color: "#6B7280",
            textAlign: "center",
            marginBottom: 48,
            maxWidth: 740,
            lineHeight: 1.4,
          }}
        >
          Score /100 automatique · 3 dimensions · Santé financière + Avis clients + Alertes
        </div>

        {/* 3 stats */}
        <div
          style={{
            display: "flex",
            gap: 24,
          }}
        >
          {[
            { value: "3 000+", label: "déménageurs vérifiés" },
            { value: "0",      label: "faillite depuis jan. 2026" },
            { value: "18%",    label: "exclus (score < 50/100)" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "white",
                border: "1px solid #E5E7EB",
                borderRadius: 16,
                padding: "20px 32px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              }}
            >
              <span
                style={{
                  fontSize: 38,
                  fontWeight: 800,
                  color: "#0EA5A6",
                }}
              >
                {s.value}
              </span>
              <span
                style={{
                  fontSize: 15,
                  color: "#6B7280",
                  marginTop: 4,
                  whiteSpace: "nowrap",
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            right: 48,
            fontSize: 16,
            color: "#9CA3AF",
            fontWeight: 500,
          }}
        >
          moverz.fr/label-moverz
        </div>
      </div>
    ),
    { ...size },
  );
}
