import { useState } from "react";

export default function ShinyEmbed({ url, title, height = 800 }) {
  const [loaded, setLoaded] = useState(false);
  const baseHeight = typeof height === 'number' ? height : 800;
  const responsiveHeight = `clamp(400px, ${baseHeight * 0.6}px, ${baseHeight}px)`;

  const wrap = {
    position: "relative",
    width: "100%",
    maxWidth: "100%",
    margin: "0 auto",
    borderRadius: 12,
    overflow: "hidden",
    background: "#111",
    border: "1px solid #333",
    boxShadow: "0 8px 24px rgba(0,0,0,.45)",
  };

  return (
    <div style={wrap}>
      {!loaded && (
        <div style={{ height: responsiveHeight, minHeight: "400px", display: "flex", alignItems: "center", justifyContent: "center", color: "#ccc", fontSize: "clamp(0.9rem, 2.5vw, 1rem)" }}>
          Loading {title}…
        </div>
      )}
      <iframe
        src={url}
        title={title}
        style={{ width: "100%", height: responsiveHeight, minHeight: "400px", border: 0, display: loaded ? "block" : "none" }}
        onLoad={() => setLoaded(true)}
        allow="fullscreen; clipboard-read; clipboard-write"
      />
    </div>
  );
}
