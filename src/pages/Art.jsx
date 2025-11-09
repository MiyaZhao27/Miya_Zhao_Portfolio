import DogOutlineGuide from "../components/DogOutlineGuide.jsx";

export default function Art() {
  // Explicit list for mixed file extensions and skipped numbers
  const artworks = [
    "mzgallery1.png",
    "mzgallery2.png",
    "mzgallery3.png",
    "mzgallery4.png",
    "mzgallery6.png",
    "mzgallery7.png",
    "mzgallery8.JPG",
    "mzgallery9.JPG",
    "gallery10.png",
    "mzgallery12.png",
  ].map((file) => ({
    src: `${import.meta.env.BASE_URL}${file}`,
  }));

  // Art page doesn't have sections to navigate to, so empty sections
  const outlineSections = [];

  const containerStyle = {
    background: "#222",
    color: "#fff",
    minHeight: "100vh",
    padding: "clamp(1rem, 4vw, 2rem) clamp(0.5rem, 1vw, 20px) clamp(1rem, 4vw, 2rem) clamp(0.5rem, 1vw, 20px)",
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
      {outlineSections.length > 0 && <DogOutlineGuide sections={outlineSections} />}
      <div style={contentStyle} className="project-content">
      <style>{`
        .masonry {
          column-count: 3;
          column-gap: 1.5rem;
          padding: 70px 1rem 2rem; 
        }
        @media (max-width: 1200px) { .masonry { column-count: 2; } }
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
          margin-bottom: 0.5rem;
        }
        .art-sub {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 0;
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
            padding-top: 40px !important;
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
            typing 2s steps(29, end),
            blink-caret 0.75s step-end infinite,
            remove-caret 0.01s 2s forwards;
        }
      `}</style>

      <h1 className="art-header"><span className="typewriter-title">Welcome to My Art Gallery!</span></h1>
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

