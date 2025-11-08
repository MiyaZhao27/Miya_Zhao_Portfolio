import { Link, useParams } from "react-router-dom";

// Event data - you can expand this later
const eventData = {
  "cultural-show-2024": {
    title: "2024 Annual Cultural Show",
    date: "April 2024",
    club: "CASA Cultural Chair",
    coverImage: `${import.meta.env.BASE_URL}cultshow1.png`,
    images: [
      `${import.meta.env.BASE_URL}cultshow1.png`,
      `${import.meta.env.BASE_URL}cultshow2.png`,
      `${import.meta.env.BASE_URL}cultshow3.png`,
    ],
    content: `The 2024 CASA Annual Cultural Show was a celebration of Chinese-American heritage.`,
  },
  "sok-song-origami": {
    title: "Sok Song Origami Workshop",
    date: "February 2024",
    club: "AACC HACR Team",
    coverImage: `${import.meta.env.BASE_URL}cultshow2.png`,
    images: [],
    content: `The Sok Song Origami Workshop .`,
  },
  "event-3": {
    title: "Event Title 3",
    date: "Month Year",
    club: "Organization Name",
    coverImage: `${import.meta.env.BASE_URL}cultshow3.png`,
    images: [],
    content: `Add your full event description here. You can write multiple paragraphs about the event.

Include details about what happened, who was involved, and what made this event special.

This is where you can tell the full story of your event with as much detail as you'd like.`,
  },
  "event-4": {
    title: "Event Title 4",
    date: "Month Year",
    club: "Organization Name",
    coverImage: `${import.meta.env.BASE_URL}cultshow1.png`,
    images: [],
    content: `Add your full event description here. You can write multiple paragraphs about the event.

Include details about what happened, who was involved, and what made this event special.

This is where you can tell the full story of your event with as much detail as you'd like.`,
  },
  "event-5": {
    title: "Event Title 5",
    date: "Month Year",
    club: "Organization Name",
    coverImage: `${import.meta.env.BASE_URL}cultshow2.png`,
    images: [],
    content: `Add your full event description here. You can write multiple paragraphs about the event.

Include details about what happened, who was involved, and what made this event special.

This is where you can tell the full story of your event with as much detail as you'd like.`,
  },
  "event-6": {
    title: "Event Title 6",
    date: "Month Year",
    club: "Organization Name",
    coverImage: `${import.meta.env.BASE_URL}cultshow3.png`,
    images: [],
    content: `Add your full event description here. You can write multiple paragraphs about the event.

Include details about what happened, who was involved, and what made this event special.

This is where you can tell the full story of your event with as much detail as you'd like.`,
  },
  "event-7": {
    title: "Event Title 7",
    date: "Month Year",
    club: "Organization Name",
    coverImage: `${import.meta.env.BASE_URL}cultshow1.png`,
    images: [],
    content: `Add your full event description here. You can write multiple paragraphs about the event.

Include details about what happened, who was involved, and what made this event special.

This is where you can tell the full story of your event with as much detail as you'd like.`,
  },
  "event-8": {
    title: "Event Title 8",
    date: "Month Year",
    club: "Organization Name",
    coverImage: `${import.meta.env.BASE_URL}cultshow2.png`,
    images: [],
    content: `Add your full event description here. You can write multiple paragraphs about the event.

Include details about what happened, who was involved, and what made this event special.

This is where you can tell the full story of your event with as much detail as you'd like.`,
  },
  "event-9": {
    title: "Event Title 9",
    date: "Month Year",
    club: "Organization Name",
    coverImage: `${import.meta.env.BASE_URL}cultshow3.png`,
    images: [],
    content: `Add your full event description here. You can write multiple paragraphs about the event.

Include details about what happened, who was involved, and what made this event special.

This is where you can tell the full story of your event with as much detail as you'd like.`,
  },
};

export default function EventDetail() {
  const { eventId } = useParams();
  const event = eventData[eventId];

  if (!event) {
    return (
      <div style={{ padding: "2rem", textAlign: "center", color: "#fff" }}>
        <h1>Event not found</h1>
        <Link to="/event-planning" style={{ color: "#d64545" }}>
          Back to Events
        </Link>
      </div>
    );
  }

  const containerStyle = {
    background: "#222",
    color: "#fff",
    minHeight: "100vh",
    padding: "clamp(2rem, 4vw, 4rem) clamp(2rem, 6vw, 120px)",
    width: "100%",
    boxSizing: "border-box",
  };

  const contentStyle = {
    maxWidth: "1200px",
    margin: "0",
  };

  const imageGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1rem",
    marginBottom: "2rem",
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        {/* Back Button */}
        <Link
          to="/event-planning"
          style={{
            display: "inline-flex",
            alignItems: "center",
            color: "#d64545",
            textDecoration: "none",
            fontSize: "0.95rem",
            marginBottom: "2rem",
            transition: "opacity 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          ← Back to Events
        </Link>

        {/* Title and Meta */}
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", textAlign: "left" }}>{event.title}</h1>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            marginBottom: "2rem",
            flexWrap: "wrap",
          }}
        >
          <span style={{ color: "#999", fontSize: "1rem" }}>{event.date}</span>
          {event.club && (
            <span
              style={{
                background: "#d64545",
                color: "#fff",
                padding: "0.3rem 0.8rem",
                borderRadius: "999px",
                fontSize: "0.85rem",
                fontWeight: "600",
              }}
            >
              {event.club}
            </span>
          )}
        </div>

        {/* Images */}
        {event.images && event.images.length > 0 && (
          <div style={imageGridStyle}>
            {event.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${event.title} ${i + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "16/9",
                  objectFit: "cover",
                  borderRadius: "12px",
                  border: "1px solid #404040",
                }}
              />
            ))}
          </div>
        )}

        {/* Content */}
        <div
          style={{
            color: "#ddd",
            lineHeight: "1.8",
            fontSize: "1.1rem",
            whiteSpace: "pre-line",
            textAlign: "left",
          }}
        >
          {event.content}
        </div>
      </div>
    </div>
  );
}
