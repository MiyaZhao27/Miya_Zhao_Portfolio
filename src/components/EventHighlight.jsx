export default function EventHighlight({ title, date, club, images, description }) {
  return (
    <div style={{
      background: "#1a1a1a",
      border: "1px solid #404040",
      borderRadius: "12px",
      padding: "2rem",
      marginBottom: "3rem",
      boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    }}>
      {/* Title */}
      <h2 style={{
        color: "#e8e8e8",
        fontSize: "1.75rem",
        marginBottom: "0.75rem",
        fontWeight: "600",
      }}>
        {title}
      </h2>

      {/* Date and Club Tag */}
      <div style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        marginBottom: "1.5rem",
        flexWrap: "wrap",
      }}>
        <span style={{
          color: "#999",
          fontSize: "0.95rem",
        }}>
          {date}
        </span>
        {club && (
          <span style={{
            background: "#d64545",
            color: "#fff",
            padding: "0.25rem 0.75rem",
            borderRadius: "999px",
            fontSize: "0.85rem",
            fontWeight: "600",
          }}>
            {club}
          </span>
        )}
      </div>

      {/* Images */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "1rem",
        marginBottom: "1.5rem",
      }}>
        {images && images.length > 0 ? (
          images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${title} ${i + 1}`}
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: "16/9",
                objectFit: "cover",
                borderRadius: "8px",
                border: "1px solid #404040",
              }}
            />
          ))
        ) : (
          // Placeholder boxes when no images
          <>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  width: "100%",
                  height: "300px",
                  background: "#242424",
                  borderRadius: "8px",
                  border: "1px dashed #404040",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#666",
                  fontSize: "0.9rem",
                }}
              >
                Photo {i}
              </div>
            ))}
          </>
        )}
      </div>

      {/* Description */}
      <p style={{
        color: "#ddd",
        lineHeight: "1.7",
        fontSize: "1.05rem",
        margin: 0,
        textAlign: "left",
      }}>
        {description}
      </p>
    </div>
  );
}
