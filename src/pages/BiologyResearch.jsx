export default function BiologyResearch() {
  const paper1 = `${import.meta.env.BASE_URL}Identification of Non-standard Amino Acid Incorporation Sites for Half-life Extension of chemotherapeutic L-asparaginase .docx.pdf`;
  const paper2 = `${import.meta.env.BASE_URL}Isolation and Identification of Plastic-Degrading and Oil-Degrading Bacteria In a Soil Sample.pdf`;
  const paper3 = `${import.meta.env.BASE_URL}LPApaper.pdf`;

  const projects = [
    "2025 iGEM Yale Wiki",
    "Identification of Non-standard Amino Acid Incorporation Sites for Half-life Extension of Chemotherapeutic L-asparaginase",
    "Isolation and Identification of Plastic-Degrading and Oil-Degrading Bacteria In a Soil Sample",
    "LPA Paper",
  ];

  const scrollToSection = (title) => {
    let id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    // Match specific IDs
    if (title === "2025 iGEM Yale Wiki") {
      id = "2025-igem-yale-wiki";
    } else if (title.includes("Identification of Non-standard")) {
      id = "identification-of-non-standard-amino-acid-incorporation-sites-for-half-life-extension-of-chemotherapeutic-l-asparaginase";
    } else if (title.includes("Isolation and Identification")) {
      id = "isolation-and-identification-of-plastic-degrading-and-oil-degrading-bacteria-in-a-soil-sample";
    } else if (title.includes("LPA")) {
      id = "lpa-paper";
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const frameStyle = {
    border: "none",
    outline: "none",
    background: "#111",
    borderRadius: "12px",
    boxShadow: "0 0 20px rgba(0,0,0,0.5)",
    width: "100%",
    height: "500px",
  };

  const sectionStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "clamp(1rem, 4vw, 2rem)",
    flexWrap: "wrap",
    marginBottom: "clamp(2rem, 6vw, 4rem)",
  };

  const textStyle = {
    flex: "1 1 300px",
    color: "#ddd",
    lineHeight: "1.6",
    fontSize: "1.05rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const pdfContainer = {
    flex: "1 1 600px",
    maxWidth: "100%",
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
          .section-responsive {
            flex-direction: column !important;
          }
          .pdf-container-responsive {
            width: 100% !important;
            max-width: 100% !important;
            flex: 1 1 100% !important;
          }
          .text-responsive {
            text-align: left !important;
            align-items: flex-start !important;
            width: 100% !important;
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
      <h1 className="ep-header">Biology Research</h1>
      <p
        className="ep-sub"
        style={{
          marginBottom: "3rem",
        }}
      >
        A collection of biology research projects exploring synthetic biology,
        environmental microbiology, and neurobiology. 
      </p>

      {/* --- iGEM Wiki Embed --- */}
      <div id="2025-igem-yale-wiki" style={{ width: "100%", margin: "0 auto 4rem" }}>
        <h2 style={{ textAlign: "left", marginBottom: "0.5rem" }}>
          2025 iGEM Yale Wiki
        </h2>
        <p className="ep-sub" style={{ textAlign: "left", marginBottom: "1rem" }}>
          Largely in college, I explored creating a more systematic approach to the functionalization of enzymatic proteins through non-standard amino acid integration.
          This project was executed by a team of 10 throughout two years and was awarded a gold medal (Yale's first in 15 years!) at the 2025 iGEM Jamboree in Paris. 
          Explore the Yale iGEM 2025 Wiki for more details on project ideation, implementations, and human practices.
        </p>
        <iframe
          src="https://2025.igem.wiki/yale/"
          title="2025 iGEM Yale Team Wiki"
          style={{
            width: "100%",
            height: "clamp(400px, 50vw, 800px)",
            minHeight: "400px",
            border: "none",
            borderRadius: "12px",
            background: "#111",
            boxShadow: "0 0 20px rgba(0,0,0,0.5)",
          }}
        />
        <div style={{ textAlign: "center", marginTop: ".75rem" }}>
          <a
            href="https://2025.igem.wiki/yale/"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              padding: ".6rem .9rem",
              borderRadius: "999px",
              border: "1px solid #444",
              background: "#222",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Open full wiki ↗
          </a>
        </div>
      </div>

      {/* --- Paper 1 (PDF left, text right) --- */}
      <div id="identification-of-non-standard-amino-acid-incorporation-sites-for-half-life-extension-of-chemotherapeutic-l-asparaginase" style={sectionStyle} className="section-responsive">
        <div style={pdfContainer} className="pdf-container-responsive">
          <object data={paper1} type="application/pdf" style={frameStyle}>
            <p>
              Unable to display PDF.{" "}
              <a href={paper1} target="_blank" rel="noreferrer" style={{ color: "#9bd" }}>
                Click here to open it
              </a>
              .
            </p>
          </object>
        </div>

        <div style={{ ...textStyle, textAlign: "right", alignItems: "flex-end" }} className="text-responsive">
          <h2>
            Identification of Non-standard Amino Acid Incorporation Sites for
            Half-life Extension of Chemotherapeutic L-asparaginase
          </h2>
          <p>
            This project focused on engineering L-asparaginase through the
            incorporation of non-standard amino acids to improve its therapeutic
            half-life. Using bioinformatics, site prediction algorithms, and
            protein modeling, potential modification sites were identified to
            optimize pharmacokinetic stability for cancer therapy applications.
          </p>
        </div>
      </div>

      {/* --- Paper 2 (PDF right, text left) --- */}
      <div id="isolation-and-identification-of-plastic-degrading-and-oil-degrading-bacteria-in-a-soil-sample" style={{ ...sectionStyle, flexDirection: "row-reverse" }} className="section-responsive">
        <div style={pdfContainer} className="pdf-container-responsive">
          <object data={paper2} type="application/pdf" style={frameStyle}>
            <p>
              Unable to display PDF.{" "}
              <a href={paper2} target="_blank" rel="noreferrer" style={{ color: "#9bd" }}>
                Click here to open it
              </a>
              .
            </p>
          </object>
        </div>

        <div style={{ ...textStyle, textAlign: "left", alignItems: "flex-start" }} className="text-responsive">
          <h2>
            Isolation and Identification of Plastic-Degrading and Oil-Degrading
            Bacteria in a Soil Sample
          </h2>
          <p>
            This environmental microbiology study involved isolating bacterial
            strains capable of degrading polyethylene and hydrocarbon residues
            from soil samples. The goal was to identify microorganisms with
            potential applications in bioremediation and waste management.
          </p>
        </div>
      </div>

      {/* --- Paper 3 (PDF left, text right) --- */}
      <div id="lpa-paper" style={sectionStyle} className="section-responsive">
        <div style={pdfContainer} className="pdf-container-responsive">
          <object data={paper3} type="application/pdf" style={frameStyle}>
            <p>
              Unable to display PDF.{" "}
              <a href={paper3} target="_blank" rel="noreferrer" style={{ color: "#9bd" }}>
                Click here to open it
              </a>
              .
            </p>
          </object>
        </div>

        <div style={{ ...textStyle, textAlign: "right", alignItems: "flex-end" }} className="text-responsive">
          <h2>LPA Paper</h2>
          <p>
            This paper explores the role of LPA in regulating cell migration and neurodevelopment.
          </p>
        </div>
      </div>
      </div>
    </div>
    </>
  );
}
