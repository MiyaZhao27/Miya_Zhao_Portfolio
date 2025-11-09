import { Link, useParams } from "react-router-dom";

// Event data - you can expand this later
const eventData = {
  "cultural-show-2024": {
    title: "2024 Annual Cultural Show",
    date: "April 2024",
    club: "CASA Cultural Chair",
    coverImage: `${import.meta.env.BASE_URL}cultshow2.png`,
    images: [
      `${import.meta.env.BASE_URL}cultshow2.png`,
      `${import.meta.env.BASE_URL}cultshow1.png`,
      `${import.meta.env.BASE_URL}cultshow3.png`,
      `${import.meta.env.BASE_URL}cultshow4.png`,
      `${import.meta.env.BASE_URL}cultshow5.png`,
      `${import.meta.env.BASE_URL}cultshow6.png`,
    ],
    contentSections: [
      {
        text: `For as long as we could remember, CASA has hosted a Cultural Show. A vibrant display of the community's talent and give back to the community with game show style raffles. Think Chinese New Years Game Shows! 2024's theme, "Wings of Harmony," celebrated the Year of the Dragon and the unity of our campus in increasingly divisive times.`,
        images: [
          `${import.meta.env.BASE_URL}cultshow2.png`,
        ]
      },
      {
        text: `Puiyee and I spent months on the planning, recruitment, and logistics to make sure everything ran smoothly and it was all so worth it. Over 200 guests showed up! The lineup featured everything from Wushu and dance to instrumental pieces and a reveal of the classic First Year skit. We had a lot of fun emceeing the event and making the audience get engaged with our games (Heart Rate challenge was a hit). People got really into the raffle. Prizes included plushies, a hot pot set, and a karaoke mic.`,
        images: [
          `${import.meta.env.BASE_URL}cultshow1.png`,
          `${import.meta.env.BASE_URL}cultshow3.png`,
        ]
      },
      {
        text: `Food tables were stacked with Chinese snacks and dishes and were all gone by the end. The Cultural Show continues to be one of CASA's most fun traditions. Through all trials and tribulations it stays lively and full of personality. "Wings of Harmony" definitely lived up to the name.`,
        images: [
          `${import.meta.env.BASE_URL}cultshow4.png`,
          `${import.meta.env.BASE_URL}cultshow5.png`,
          `${import.meta.env.BASE_URL}cultshow6.png`,
        ]
      }
    ],
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
    title: "YuanXiao Jie Celebration",
    date: "Janurary 2025",
    club: "CASA Cultural Chair",
    coverImage: `${import.meta.env.BASE_URL}cultshow3.png`,
    images: [],
    content: `Add your full event description here. You can write multiple paragraphs about the event.

Include details about what happened, who was involved, and what made this event special.

This is where you can tell the full story of your event with as much detail as you'd like.`,
  },
  
"event-10": {
    title: "2025 FALL YHHAP FAST",
    date: "November 2025",
    club: "YHHAP FAST Designer",
    coverImage: `${import.meta.env.BASE_URL}cultshow3.png`,
    images: [],
    content: `Add your full event description here. You can write multiple paragraphs about the event.

Include details about what happened, who was involved, and what made this event special.

This is where you can tell the full story of your event with as much detail as you'd like.`,
  },

"event-11": {
    title: "ECAASU Conference 2025",
    date: "November 2024",
    club: "AASA Digital Team",
    coverImage: `${import.meta.env.BASE_URL}cultshow3.png`,
    images: [],
    content: `Add your full event description here. You can write multiple paragraphs about the event.

Include details about what happened, who was involved, and what made this event special.

This is where you can tell the full story of your event with as much detail as you'd like.`,
  },

  "event-4": {
    title: "Mid-Autumn Festival Celebration",
    date: "Janurary 2025",
    club: "CASA Cultural Chair",
    coverImage: `${import.meta.env.BASE_URL}cultshow1.png`,
    images: [],
    content: `Add your full event description here. You can write multiple paragraphs about the event.

Include details about what happened, who was involved, and what made this event special.

This is where you can tell the full story of your event with as much detail as you'd like.`,
  },
  "event-5": {
    title: "Hot Pot Night",
    date: "Janurary 2025",
    club: "CASA Cultural Chair",
    coverImage: `${import.meta.env.BASE_URL}cultshow2.png`,
    images: [],
    content: `Add your full event description here. You can write multiple paragraphs about the event.

Include details about what happened, who was involved, and what made this event special.

This is where you can tell the full story of your event with as much detail as you'd like.`,
  },
  "event-6": {
    title: "Singles Night",
    date: "Janurary 2025",
    club: "CASA Cultural Chair",
    coverImage: `${import.meta.env.BASE_URL}cultshow3.png`,
    images: [],
    content: `Add your full event description here. You can write multiple paragraphs about the event.

Include details about what happened, who was involved, and what made this event special.

This is where you can tell the full story of your event with as much detail as you'd like.`,
  },
  "event-7": {
    title: "asiarchitecture!",
    date: "Month Year",
    club: "AACC HACR Team",
    coverImage: `${import.meta.env.BASE_URL}cultshow1.png`,
    images: [],
    content: `Add your full event description here. You can write multiple paragraphs about the event.

Include details about what happened, who was involved, and what made this event special.

This is where you can tell the full story of your event with as much detail as you'd like.`,
  },
  "event-8": {
    title: "Lunar Ball",
    date: "Month Year",
    club: "CASA Co-President",
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
  "event-12": {
    title: "Love Served Fresh",
    date: "Month Year",
    club: "Organization Name",
    coverImage: `${import.meta.env.BASE_URL}cultshow1.png`,
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
    display: "flex",
    flexDirection: "column",
    gap: "0",
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

        {/* Content Sections with Interspersed Images */}
        {event.contentSections ? (
          event.contentSections.map((section, sectionIdx) => (
            <div key={sectionIdx} style={{ marginBottom: "3rem" }}>
              {/* Text */}
              <p
                style={{
                  color: "#ddd",
                  lineHeight: "1.8",
                  fontSize: "1.1rem",
                  textAlign: "left",
                  marginBottom: "1.5rem",
                }}
              >
                {section.text}
              </p>
              
              {/* Images for this section */}
              {section.images && section.images.length > 0 && (
                <div style={imageGridStyle}>
                  {section.images.map((img, imgIdx) => (
                    <img
                      key={imgIdx}
                      src={img}
                      alt={`${event.title} section ${sectionIdx + 1} image ${imgIdx + 1}`}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                        borderRadius: "8px",
                        border: "1px solid #404040",
                        background: "#1a1a1a",
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          /* Fallback for old content format */
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
        )}
      </div>
    </div>
  );
}