import { ImageResponse } from "next/og";

export const alt = "Plakio — Software simple para parqueaderos";
export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0ea5e9 0%, #7c3aed 100%)",
        padding: "60px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "32px",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "20px",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "48px",
            fontWeight: 700,
            color: "#0ea5e9",
          }}
        >
          P
        </div>
      </div>
      <h1
        style={{
          fontSize: "64px",
          fontWeight: 800,
          color: "#fff",
          margin: 0,
          textAlign: "center",
          lineHeight: 1.1,
        }}
      >
        Plakio
      </h1>
      <p
        style={{
          fontSize: "32px",
          fontWeight: 400,
          color: "rgba(255,255,255,0.9)",
          marginTop: "16px",
          textAlign: "center",
        }}
      >
        Software simple para parqueaderos
      </p>
      <div
        style={{
          marginTop: "40px",
          padding: "16px 32px",
          borderRadius: "12px",
          background: "rgba(255,255,255,0.15)",
          fontSize: "20px",
          color: "#fff",
          fontWeight: 500,
        }}
      >
        Check-in digital · Tickets · Cobro automático · Prueba gratis 30 días
      </div>
    </div>,
    { ...size },
  );
}
