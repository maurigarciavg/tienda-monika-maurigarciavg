import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Unravelled Corner — Handmade Knitwear & Crochet";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1F2952",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Corner decorations */}
        <div style={{ position: "absolute", top: 40, left: 40, width: 60, height: 60, borderTop: "2px solid #E8829A", borderLeft: "2px solid #E8829A" }} />
        <div style={{ position: "absolute", top: 40, right: 40, width: 60, height: 60, borderTop: "2px solid #E8829A", borderRight: "2px solid #E8829A" }} />
        <div style={{ position: "absolute", bottom: 40, left: 40, width: 60, height: 60, borderBottom: "2px solid #E8829A", borderLeft: "2px solid #E8829A" }} />
        <div style={{ position: "absolute", bottom: 40, right: 40, width: 60, height: 60, borderBottom: "2px solid #E8829A", borderRight: "2px solid #E8829A" }} />

        {/* Yarn wave */}
        <div style={{ marginBottom: 32, display: "flex" }}>
          <svg width="320" height="24" viewBox="0 0 320 24" fill="none">
            <path
              d="M0,12 C16,4 32,4 48,12 C64,20 80,20 96,12 C112,4 128,4 144,12 C160,20 176,20 192,12 C208,4 224,4 240,12 C256,20 272,20 288,12 C304,4 312,4 320,12"
              stroke="#E8829A"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.7"
            />
          </svg>
        </div>

        {/* Brand name */}
        <div
          style={{
            fontSize: 80,
            fontFamily: "serif",
            color: "#FFFEF9",
            letterSpacing: "-1px",
            lineHeight: 1.1,
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          Unravelled Corner
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 26,
            color: "#E8829A",
            letterSpacing: "6px",
            textTransform: "uppercase",
            marginBottom: 40,
          }}
        >
          Handmade Knitwear & Crochet
        </div>

        {/* Bottom wave */}
        <div style={{ display: "flex" }}>
          <svg width="200" height="16" viewBox="0 0 200 16" fill="none">
            <path
              d="M0,8 C12,2 24,2 36,8 C48,14 60,14 72,8 C84,2 96,2 108,8 C120,14 132,14 144,8 C156,2 168,2 180,8 C192,14 196,14 200,8"
              stroke="#FFFEF9"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.3"
            />
          </svg>
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 52,
            fontSize: 18,
            color: "#FFFEF9",
            opacity: 0.4,
            letterSpacing: "2px",
          }}
        >
          unravelledcorner.com
        </div>
      </div>
    ),
    { ...size }
  );
}
