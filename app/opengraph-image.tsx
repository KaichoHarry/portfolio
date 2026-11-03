import { ImageResponse } from "next/og";

export const alt = "Haruka Nanko | Software Engineer Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// 日本語フォントを読み込まずに済むよう、OGP画像は英語表記のみで構成する
const HIGHLIGHTS = [
  "RAKSUL Internship Award",
  "Geek Camp 2025 Award",
  "Vietnam Internship",
  "AI Agent Development",
];

export default function OpengraphImage() {
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
          background: "#05070c",
          color: "#e6edf3",
          fontFamily: "monospace",
        }}
      >
        <div style={{ fontSize: 32, color: "#188eff", marginBottom: 24 }}>&gt; hello_world()</div>
        <div style={{ fontSize: 76, fontWeight: 800, marginBottom: 16 }}>Haruka Nanko</div>
        <div style={{ fontSize: 36, color: "#8b949e", marginBottom: 48 }}>
          Software Engineer / PM — from requirements to delivery
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          {HIGHLIGHTS.map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                fontSize: 26,
                color: "#188eff",
                border: "2px solid #188eff",
                borderRadius: 999,
                padding: "8px 24px",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
