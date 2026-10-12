import { ImageResponse } from "next/og";
import { profile } from "@/lib/data/profile";

export const runtime = "edge";
export const alt = "Jatin Chaurasia — Full-Stack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0b",
          color: "#ededec",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 2, color: "#a1a1a6" }}>JATIN.</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 700, lineHeight: 1.1, maxWidth: 900 }}>
            {profile.hero.headline}
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#a1a1a6" }}>{profile.title}</div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#6b6b70" }}>{profile.hero.stack.join("  →  ")}</div>
      </div>
    ),
    { ...size }
  );
}
