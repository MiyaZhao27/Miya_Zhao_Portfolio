import { useState } from "react";

export default function ShinyEmbed({ url, title, height = 800 }) {
  const [loaded, setLoaded] = useState(false);

  const wrap = {
    position: "relative",
    width: "100%",
    maxWidth: 1200,
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
        <div style={{ height, display: "flex", alignItems: "center", justifyContent: "center", color: "#ccc" }}>
          Loading {title}…
        </div>
      )}
      <iframe
        src={url}
        title={title}
        style={{ width: "100%", height, border: 0, display: loaded ? "block" : "none" }}
        onLoad={() => setLoaded(true)}
        allow="fullscreen; clipboard-read; clipboard-write"
      />
    </div>
  );
}
