export default function Art() {
  const artworks = [
    { title: "Piece 1" },
    { title: "Piece 2" },
    { title: "Piece 3" },
    { title: "Piece 4" },
    { title: "Piece 5" },
    { title: "Piece 6" },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Art Portfolio</h1>
      <p style={{ maxWidth: "600px", margin: "0 auto 2rem" }}>
        A collection of my artworks. Each piece explores different concepts and
        styles.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
          justifyItems: "center",
        }}
      >
        {artworks.map((art, index) => (
          <div
            key={index}
            style={{
              background: "#1e90ff",
              borderRadius: "1rem",
              height: "220px",
              width: "100%",
              maxWidth: "350px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1.2rem",
              transition: "transform 0.2s",
            }}
          >
            {art.title}
          </div>
        ))}
      </div>
    </div>
  );
}
