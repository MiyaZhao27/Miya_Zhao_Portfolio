import ShinyEmbed from "../components/ShinyEmbed.jsx";

export default function DataAnalytics() {
  const paper1 = `${import.meta.env.BASE_URL}Analysis of World Happiness Trends.pdf`;
  const paper2 = `${import.meta.env.BASE_URL}COVID-19 Steady State Modeling.pdf`;

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
    alignItems: "center",          // vertical center with the PDF
    justifyContent: "space-between",
    gap: "2rem",
    flexWrap: "wrap",
    marginBottom: "4rem",
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
    maxWidth: "700px",
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
    <div style={{ background: "#222", color: "#fff", minHeight: "100vh", padding: "3rem 2rem" }}>
      <h1 className="ep-header">Data Analytics Projects</h1>
      <p className="ep-sub" style={{ marginBottom: "3rem" }}>
        A showcase of projects applying statistical modeling, visualization, and predictive
        analysis to uncover insights from real-world datasets. Each project integrates data
        storytelling with technical rigor to communicate impactful findings.
      </p>

      {/* ===== Shiny apps (stacked) ===== */}
      <h2 style={{ textAlign: "left", margin: "1rem 0 2rem" }}>Data Visualization Tools</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "3rem", marginBottom: "4rem" }}>
        {apps.map((a, i) => (
          <div key={i} style={{ width: "100%", maxWidth: "1300px", margin: "0 auto" }}>
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
        ))}
      </div>

            <h2 style={{ textAlign: "left", margin: "1rem 0 2rem" }}>Data Analytics Projects</h2>

      {/* --- Paper 1 (PDF left, text right aligned) --- */}
      <div style={sectionStyle}>
        <div style={pdfContainer}>
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

        <div style={{ ...textStyle, textAlign: "right", alignItems: "flex-end" }}>
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
      <div style={{ ...sectionStyle, flexDirection: "row-reverse" }}>
        <div style={pdfContainer}>
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

        <div style={{ ...textStyle, textAlign: "left", alignItems: "flex-start" }}>
          <h2>COVID-19 Steady State Modeling</h2>
          <p>
            This project uses time-series data and epidemiological modeling to analyze COVID-19
            transmission dynamics. A steady-state model was implemented to predict equilibrium case
            levels at different points of the pandemic.
          </p>
        </div>
      </div>
    </div>
  );
}
