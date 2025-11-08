import ShinyEmbed from "../components/ShinyEmbed.jsx";

export default function DataAnalytics() {
  const paper1 = `${import.meta.env.BASE_URL}Analysis of World Happiness Trends.pdf`;
  const paper2 = `${import.meta.env.BASE_URL}COVID-19 Steady State Modeling.pdf`;

  const projects = [
    "Property Values (Interactions & Splines, Plotly)",
    "L-Asparaginase Features Explorer",
    "EV Charging Station Visualization",
    "Analysis of World Happiness Trends",
    "COVID-19 Steady State Modeling",
  ];

  const scrollToSection = (title) => {
    let id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    // Match specific IDs
    if (title.includes("Property Values")) {
      id = "property-values-interactions-splines-plotly";
    } else if (title.includes("L-Asparaginase")) {
      id = "l-asparaginase-features-explorer";
    } else if (title.includes("EV Charging")) {
      id = "ev-charging-station-visualization";
    } else if (title.includes("World Happiness")) {
      id = "analysis-of-world-happiness-trends";
    } else if (title.includes("COVID-19")) {
      id = "covid-19-steady-state-modeling";
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
    height: "clamp(400px, 50vw, 500px)",
    minHeight: "400px",
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

  const apps = [
    {
      name: "Property Values (Interactions & Splines, Plotly)",
      url: "https://mz27.shinyapps.io/pset5-Property-Values-Interactions-Splines-Shiny-Plotly/",
      desc:
        "Interactive exploration of housing price features with interaction terms and spline fits, using live Plotly visualizations built in R Shiny.",
      height: 820,
    },
    {
      name: "L-Asparaginase Features Explorer",
      url: "https://mz27.shinyapps.io/aspgfeatures/",
      desc:
        "Feature analysis dashboard for L-asparaginase datasets with interactive filtering, model-ready exports, and visual summaries for residue-level properties.",
      height: 820,
    },
    {
      name: "EV Charging Station Visualization",
      url: "https://mz27.shinyapps.io/EVshinyapp/",
      desc:
        "Interactive visualization of electric vehicle charging stations, including location mapping, usage statistics, and accessibility analysis.",
      height: 820,
    },
  ];

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
      <h1 className="ep-header">Data Analytics Projects</h1>
      <p className="ep-sub" style={{ marginBottom: "3rem" }}>
        A showcase of projects applying statistical modeling, visualization, and predictive
        analysis to uncover insights from real-world datasets. Each project integrates data
        storytelling with technical rigor to communicate impactful findings.
      </p>

      {/* ===== Shiny apps (stacked) ===== */}
      <h2 style={{ textAlign: "left", margin: "1rem 0 2rem" }}>Data Visualization Tools</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "3rem", marginBottom: "4rem" }}>
        {apps.map((a, i) => {
          const sectionId = a.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
          return (
          <div key={i} id={sectionId} style={{ width: "100%", margin: "0 auto" }}>
            <h3 style={{ textAlign: "center", marginBottom: "0.5rem" }}>{a.name}</h3>
            <p className="ep-sub" style={{ textAlign: "center", marginBottom: "1rem" }}>{a.desc}</p>
            <ShinyEmbed url={a.url} title={a.name} height={a.height} />
            <div style={{ textAlign: "center", marginTop: ".75rem" }}>
              <a
                href={a.url}
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
                Open in new tab ↗
              </a>
            </div>
          </div>
          );
        })}
      </div>

            <h2 style={{ textAlign: "left", margin: "1rem 0 2rem" }}>Data Analytics Projects</h2>

      {/* --- Paper 1 (PDF left, text right aligned) --- */}
      <div id="analysis-of-world-happiness-trends" style={sectionStyle} className="section-responsive">
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
          <h2>Analysis of World Happiness Trends</h2>
          <p>
            This analytics report explores global happiness survey data over multiple years to
            identify key socioeconomic factors driving well-being. Using regression modeling and
            correlation heatmaps, it reveals patterns in income, freedom, and health indicators
            across nations. Visualizations were created using R packages like ggplot2.
          </p>
        </div>
      </div>

      {/* --- Paper 2 (PDF right, text left aligned) --- */}
      <div id="covid-19-steady-state-modeling" style={{ ...sectionStyle, flexDirection: "row-reverse" }} className="section-responsive">
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
          <h2>COVID-19 Steady State Modeling</h2>
          <p>
            This project uses time-series data and epidemiological modeling to analyze COVID-19
            transmission dynamics. A steady-state model was implemented to predict equilibrium case
            levels at different points of the pandemic.
          </p>
        </div>
      </div>
      </div>
    </div>
    </>
  );
}
