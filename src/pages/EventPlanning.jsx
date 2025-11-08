import DogOutlineGuide from "../components/DogOutlineGuide.jsx";
import EventCard from "../components/EventCard.jsx";

export default function EventPlanning() {
  // Event data for the gallery
  const events = [
    {
      id: "cultural-show-2024",
      title: "2024 Annual Cultural Show",
      date: "April 2024",
      club: "CASA Cultural Chair",
      coverImage: `${import.meta.env.BASE_URL}cultshow1.png`,
      preview: "Add your event description here. This is a preview that will show on the gallery card.",
    },
    {
      id: "sok-song-origami",
      title: "Sok Song Origami",
      date: "February 2024",
      club: "AACC HACR Team",
      coverImage: `${import.meta.env.BASE_URL}cultshow2.png`,
      preview: "Add your event description here. This is a preview that will show on the gallery card.", 
    },
    {
      id: "event-3",
      title: "Event Title 3",
      date: "Month Year",
      club: "Organization Name",
      coverImage: `${import.meta.env.BASE_URL}cultshow3.png`,
      preview: "Add your event description here. This is a preview that will show on the gallery card.",
    },
    {
      id: "event-4",
      title: "Event Title 4",
      date: "Month Year",
      club: "Organization Name",
      coverImage: `${import.meta.env.BASE_URL}cultshow1.png`,
      preview: "Add your event description here. This is a preview that will show on the gallery card.",
    },
    {
      id: "event-5",
      title: "Event Title 5",
      date: "Month Year",
      club: "Organization Name",
      coverImage: `${import.meta.env.BASE_URL}cultshow2.png`,
      preview: "Add your event description here. This is a preview that will show on the gallery card.",
    },
    {
      id: "event-6",
      title: "Event Title 6",
      date: "Month Year",
      club: "Organization Name",
      coverImage: `${import.meta.env.BASE_URL}cultshow3.png`,
      preview: "Add your event description here. This is a preview that will show on the gallery card.",
    },
    {
      id: "event-7",
      title: "Event Title 7",
      date: "Month Year",
      club: "Organization Name",
      coverImage: `${import.meta.env.BASE_URL}cultshow1.png`,
      preview: "Add your event description here. This is a preview that will show on the gallery card.",
    },
    {
      id: "event-8",
      title: "Event Title 8",
      date: "Month Year",
      club: "Organization Name",
      coverImage: `${import.meta.env.BASE_URL}cultshow2.png`,
      preview: "Add your event description here. This is a preview that will show on the gallery card.",
    },
    {
      id: "event-9",
      title: "Event Title 9",
      date: "Month Year",
      club: "Organization Name",
      coverImage: `${import.meta.env.BASE_URL}cultshow3.png`,
      preview: "Add your event description here. This is a preview that will show on the gallery card.",
    },
  ];

  const outlineSections = [
    {
      title: "Event Gallery",
      items: events.map(e => e.title)
    }
  ];

  const containerStyle = {
    background: "#222",
    color: "#fff",
    minHeight: "100vh",
    padding: "clamp(2rem, 6vw, 4rem) clamp(2rem, 6vw, 120px) clamp(1rem, 4vw, 2rem) clamp(2rem, 6vw, 120px)",
    width: "100%",
    boxSizing: "border-box",
    overflowX: "hidden",
  };

  const contentStyle = {
    width: "100%",
    maxWidth: "none",
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }
        body {
          overflow-x: hidden;
        }
        @media (max-width: 1024px) {
          .project-outline-sidebar {
            position: relative !important;
            left: 0 !important;
            width: 100% !important;
            margin-bottom: 2rem !important;
            max-height: none !important;
            border-radius: 12px !important;
            border-right: none !important;
            top: 0 !important;
          }
          .project-outline-container {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
            padding-top: 1rem !important;
          }
        }
        @media (max-width: 1200px) {
          .event-gallery {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .project-outline-container {
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          h1 {
            font-size: clamp(1.5rem, 6vw, 2rem) !important;
          }
          h2 {
            font-size: clamp(1.25rem, 5vw, 1.75rem) !important;
          }
          .event-gallery {
            grid-template-columns: 1fr !important;
          }
        }
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: #d64545; }
        }
        
        @keyframes remove-caret {
          to { border-color: transparent; }
        }
        
        .typewriter-title {
          overflow: hidden;
          border-right: 3px solid #d64545;
          white-space: nowrap;
          display: inline-block;
          animation: 
            typing 2s steps(36, end),
            blink-caret 0.75s step-end infinite,
            remove-caret 0.01s 2s forwards;
        }
      `}</style>
    <div style={containerStyle} className="project-outline-container">
      <DogOutlineGuide sections={outlineSections} />
      <div style={contentStyle} className="project-content">
      <h1 className="ep-header"><span className="typewriter-title">Welcome to My Events Blog!</span></h1>
      <p className="ep-sub" style={{ marginBottom: "3rem" }}>
        I wanted to give some big highlights to the clubs and organizations that shaped my college experience.
        Between working at the Asian American Cultural Center and helping run the Chinese American Student Association, event planning became a huge part of my college experience. Here I want to showcase and celebrate culture and community on campus.
      </p>

      {/* Gallery Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2rem",
          marginTop: "2rem",
        }}
        className="event-gallery"
      >
        {events.map((event) => (
          <div key={event.id} id={event.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>
            <EventCard
              id={event.id}
              coverImage={event.coverImage}
              title={event.title}
              date={event.date}
              club={event.club}
              preview={event.preview}
            />
          </div>
        ))}
      </div>
      </div>
    </div>
    </>
  );
}
