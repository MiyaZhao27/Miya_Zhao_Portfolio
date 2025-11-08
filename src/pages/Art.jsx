export default function Art() {
  // Explicit list for mixed file extensions and skipped numbers
  const artworks = [
    "mzgallery1.png",
    "mzgallery2.png",
    "mzgallery3.png",
    "mzgallery4.png",
    "mzgallery5.png",
    "mzgallery6.png",
    "mzgallery7.png",
    "mzgallery8.JPG",
    "mzgallery9.JPG",
    "mzgallery10.JPG",
    "mzgallery12.png",
  ].map((file, i) => ({
    src: `${import.meta.env.BASE_URL}${file}`,
  }));

  const projects = [];

  const scrollToSection = (title) => {
    const id = title.toLowerCase().replace(/\s+/g, "-");
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
        @media (max-width: 900px) {
          .project-outline-container {
            flex-direction: column !important;
          }
          .project-outline-sidebar {
            position: relative !important;
            width: 100% !important;
            margin-right: 0 !important;
            margin-bottom: 2rem !important;
            max-height: none !important;
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
      <style>{`
        .masonry {
          column-count: 4;
          column-gap: 1.5rem;
          padding: 140px 1rem 2rem; 
        }
        @media (max-width: 1200px) { .masonry { column-count: 3; } }
        @media (max-width: 900px)  { .masonry { column-count: 2; } }
        @media (max-width: 600px)  { .masonry { column-count: 1; } }

        .masonry-item {
          break-inside: avoid;
          margin: 0 0 1.5rem;
          overflow: hidden;
          border-radius: 1rem;
          box-shadow: 0 4px 10px rgba(0,0,0,.4);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: #111;
        }

        .masonry-item img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 1rem;
          transition: transform 0.3s ease;
        }

        .masonry-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0,0,0,.6);
        }

        .masonry-item:hover img {
          transform: scale(1.05);
        }

        .art-header {
          text-align: center;
          margin-top: 50px;
          margin-bottom: 1.5rem;
        }
        .art-sub {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 2rem;
          color: #ddd;
        }
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
          .masonry {
            padding-top: 80px !important;
          }
        }
      `}</style>

      <h1 className="art-header">Welcome to My Art Gallery!</h1>
      <p className="art-sub">A collection of my digital pieces and creative sketches.</p>

      <div className="masonry">
        {artworks.map((art, i) => (
          <div key={i} className="masonry-item">
            <img src={art.src} alt={`Artwork ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
      </div>
    </div>
    </>
  );
}

