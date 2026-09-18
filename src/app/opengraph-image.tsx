import { ImageResponse } from "next/og";

export const alt = "BL Swell — Presença digital que vira conversa.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          gap: 28,
          background: "#0e0e0e",
        }}
      >
        <svg width="180" height="98" viewBox="-8 6 150 82" fill="none">
          <path
            d="M0 78 C 14 78, 16 62, 28 62 C 40 62, 42 78, 54 78 C 66 78, 68 46, 80 46 C 92 46, 94 78, 106 78 C 118 78, 120 18, 132 18"
            stroke="#FF4F17"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <circle cx="132" cy="18" r="7" fill="#FF4F17" />
        </svg>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            letterSpacing: -1,
            color: "#f5f5f5",
          }}
        >
          <span style={{ fontWeight: 700 }}>BL</span>
          <span style={{ fontWeight: 400 }}>Swell</span>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#a6a6a6" }}>
          Presença digital que vira conversa.
        </div>
      </div>
    ),
    { ...size }
  );
}
