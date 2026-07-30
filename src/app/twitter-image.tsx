import { ImageResponse } from "next/og";
import { personalInfo } from "@/lib/constants";

export const alt = `${personalInfo.name} — ${personalInfo.shortRole}`;
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
          justifyContent: "center",
          padding: "80px",
          background: "#0c0c0c",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(244,90,42,0.25), transparent 45%), radial-gradient(circle at 85% 85%, rgba(244,90,42,0.12), transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#f45a2a",
            }}
          />
          <span style={{ color: "#a8a396", fontSize: 28, letterSpacing: 4 }}>
            KERALA, INDIA
          </span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 900,
            color: "#e7e2d5",
            letterSpacing: -2,
            lineHeight: 1.05,
          }}
        >
          {personalInfo.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 36,
            fontWeight: 600,
            marginTop: 24,
            color: "#f45a2a",
          }}
        >
          {personalInfo.shortRole}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#a8a396",
            marginTop: 28,
            maxWidth: 900,
          }}
        >
          {personalInfo.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
