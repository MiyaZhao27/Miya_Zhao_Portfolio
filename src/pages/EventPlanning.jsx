import ClubCard from "../components/ClubCard.jsx";
import DogOutlineGuide from "../components/DogOutlineGuide.jsx";

export default function EventPlanning() {
  const outlineSections = [
    {
      title: "Events & Leadership",
      items: [
        "Yale Chinese American Students Association (CASA)",
        "Asian American Cultural Center Undergraduate Staff Coordinator",
      ]
    }
  ];

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
      <DogOutlineGuide sections={outlineSections} />
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
