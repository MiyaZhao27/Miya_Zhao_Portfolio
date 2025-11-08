import DogOutlineGuide from "../components/DogOutlineGuide.jsx";
import EventHighlight from "../components/EventHighlight.jsx";

export default function EventPlanning() {
  const outlineSections = [
    {
      title: "Event Highlights",
      items: [
        "2024 Annual Cultural Show",
        "Sok Song Origami Workshop",
      ]
    }
  ];

  const containerStyle = {
    background: "#222",
    color: "#fff",
    minHeight: "100vh",
    padding: "clamp(1rem, 4vw, 2rem) clamp(1rem, 8vw, 100px) clamp(1rem, 4vw, 2rem) clamp(1rem, 8vw, 100px)",
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
      <h1 className="ep-header"><span className="typewriter-title">Welcome to My Club and Events Blog!</span></h1>
      <p className="ep-sub" style={{ marginBottom: "2rem" }}>
        I wanted to give some big highlights to the clubs and organizations that shaped my college experience.
        Between working at the Asian American Cultural Center and helping run the Chinese American Student Association, event planning became a huge part of my college experience. Here I want to showcase and celebrate culture and community on campus.
      </p>

      <div id="2024-annual-cultural-show">
        <EventHighlight
          title="2024 Annual Cultural Show"
          date="September 2023 - Present"
          club="CASA Cultural Chair"
          images={[]}
          description="Promoting Chinese-American culture, leadership, and connection through campus-wide cultural showcases, mentorship, and social initiatives."
        />
      </div>

      <div id="sok-song-origami-workshop">
        <EventHighlight
          title="Sok Song Origami Workshop"
          date="August 2022 - May 2024"
          club="AACC HACR Team"
          images={[]}
          description="Coordinating cultural events and community initiatives to promote Asian-American heritage and student engagement on campus."
        />
      </div>
      </div>
    </div>
    </>
  );
}
