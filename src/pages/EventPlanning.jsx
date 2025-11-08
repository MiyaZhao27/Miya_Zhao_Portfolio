import ClubCard from "../components/ClubCard.jsx";

export default function EventPlanning() {
  const projects = [
    "Yale Chinese American Students Association (CASA)",
    "Asian American Cultural Center Undergraduate Staff Coordinator",
  ];

  const scrollToSection = (title) => {
    let id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    // Match specific IDs
    if (title.includes("CASA")) {
      id = "yale-chinese-american-students-association-casa";
    } else if (title.includes("AACC")) {
      id = "asian-american-cultural-center-undergraduate-staff-coordinator";
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const sidebarStyle = {
    position: "fixed",
    top: "100px",
    left: "0",
    width: "clamp(200px, 15vw, 240px)",
    maxHeight: "calc(100vh - 120px)",
    overflowY: "auto",
    padding: "clamp(1rem, 2vw, 1.5rem)",
    background: "#1a1a1a",
    borderRadius: "0 12px 12px 0",
    border: "none",
    borderRight: "1px solid #333",
    zIndex: 10,
  };

  const outlineItemStyle = {
    display: "block",
    padding: "clamp(0.5rem, 1.5vw, 0.75rem) clamp(0.4rem, 1.2vw, 0.5rem)",
    color: "#ddd",
    textDecoration: "none",
    fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
    lineHeight: "1.4",
    cursor: "pointer",
    borderRadius: "6px",
    transition: "all 0.2s ease",
    marginBottom: "0.25rem",
  };

  const containerStyle = {
    background: "#222",
    color: "#fff",
    minHeight: "100vh",
    padding: "clamp(1rem, 4vw, 2rem) clamp(0.5rem, 3vw, 50px) clamp(1rem, 4vw, 2rem) clamp(1rem, 8vw, 100px)",
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
      `}</style>
    <div style={containerStyle} className="project-outline-container">
      <aside style={sidebarStyle} className="project-outline-sidebar">
        <h3 style={{ marginTop: 0, marginBottom: "1rem", fontSize: "1.1rem", color: "#fff" }}>
          Projects
        </h3>
        {projects.map((project, idx) => (
          <a
            key={idx}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(project);
            }}
            style={outlineItemStyle}
            onMouseEnter={(e) => {
              e.target.style.background = "#333";
              e.target.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "#ddd";
            }}
          >
            {project}
          </a>
        ))}
      </aside>
      <div style={contentStyle} className="project-content">
      <h1 className="ep-header">Events & Culture</h1>
      <p className="ep-sub" style={{ marginBottom: "2rem" }}>
        Clubs and organizations that shaped my college experience.
      </p>

      <div id="yale-chinese-american-students-association-casa">
        <ClubCard
          name="Yale Chinese American Students Association (CASA)"
          badge="Culture & Community"
          description="Promoting Chinese-American culture, leadership, and connection through campus-wide cultural showcases, mentorship, and social initiatives."
          url="https://www.yalecasa.org/"
          primaryLabel="Visit CASA ↗"
        />
      </div>

      <div id="asian-american-cultural-center-undergraduate-staff-coordinator">
        <ClubCard
          name="Asian American Cultural Center Undergraduate Staff Coordinator "
          badge="Culture & Community"
          description="Coordinating cultural events and community initiatives to promote Asian-American heritage and student engagement on campus."
          url="https://aacc.yale.edu/"
          primaryLabel="Visit AACC ↗"
        />
      </div>
      </div>
    </div>
    </>
  );
}
