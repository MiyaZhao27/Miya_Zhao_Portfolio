import { Link } from "react-router-dom";

export default function EventCard({ id, coverImage, title, date, club, preview }) {
  return (
    <Link
      to={`/event/${id}`}
      style={{
        textDecoration: "none",
        color: "inherit",
        display: "block",
      }}
    >
      <div
        style={{
          background: "#1a1a1a",
          border: "1px solid #404040",
          borderRadius: "12px",
          overflow: "hidden",
          cursor: "pointer",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          height: "500px",
          display: "flex",
          flexDirection: "column",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
        }}
      >
        {/* Cover Image */}
        <div
          style={{
            width: "100%",
            height: "200px",
            overflow: "hidden",
            background: "#242424",
          }}
        >
          <img
            src={coverImage}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Content */}
        <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
          <h3
            style={{
              color: "#e8e8e8",
              fontSize: "1.25rem",
              marginBottom: "0.15rem",
              fontWeight: "600",
              textAlign: "center",
              whiteSpace: "pre-line",
              minHeight: "3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {title}
          </h3>

          {/* Date - Centered */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "0.15rem",
            }}
          >
            <span
              style={{
                color: "#999",
                fontSize: "0.85rem",
              }}
            >
              {date}
            </span>
          </div>

          {/* Club Tag - Centered */}
          {club && (
            <div
              style={{
                textAlign: "center",
                marginBottom: "1rem",
              }}
            >
              <span
                style={{
                  background: "#d64545",
                  color: "#fff",
                  padding: "0.2rem 0.6rem",
                  borderRadius: "999px",
                  fontSize: "0.75rem",
                  fontWeight: "600",
                  display: "inline-block",
                }}
              >
                {club}
              </span>
            </div>
          )}

          <p
            style={{
              color: "#c4c4c4",
              lineHeight: "1.6",
              fontSize: "0.95rem",
              margin: 0,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {preview}
          </p>
        </div>
      </div>
    </Link>
  );
}
