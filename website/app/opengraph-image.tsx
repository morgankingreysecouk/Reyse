import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Reyse — AI live chat for the property industry";

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
          background: "#faf8f2",
          color: "#1c1a17",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
          <div style={{ display: "flex", position: "relative", width: 64, height: 64 }}>
            <div
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                width: 42,
                height: 42,
                borderRadius: "50%",
                background: "#a6ad3e",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 10,
                top: 26,
                width: 30,
                height: 30,
                borderRadius: "50%",
                background: "#a6ad3e",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 40,
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: "#a6ad3e",
              }}
            />
          </div>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>
            Reyse
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: -2,
            lineHeight: 1.15,
            maxWidth: 920,
          }}
        >
          Never miss another inquiry.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 28,
            color: "rgba(28,26,23,0.65)",
            maxWidth: 780,
          }}
        >
          AI live chat for the property industry — answering leads, tenants and
          guests instantly, day or night.
        </div>
      </div>
    ),
    { ...size },
  );
}
