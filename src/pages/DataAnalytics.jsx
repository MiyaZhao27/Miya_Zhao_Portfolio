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
    alignItems: "center",
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
  };

  const pdfContainer = {
    flex: "1 1 600px",
    maxWidth: "700px",
  };

  return (
    <div
      style={{
        background: "#222",
        color: "#fff",
        minHeight: "100vh",
        padding: "3rem 2rem",
      }}
    >
      <h1 className="ep-header">Data Analytics Projects</h1>
      <p
        className="ep-sub"
        style={{
          marginBottom: "3rem",
        }}
      >
        A showcase of projects applying statistical modeling, visualization, and predictive
        analysis to uncover insights from real-world datasets. Each project integrates data
        storytelling with technical rigor to communicate impactful findings.
      </p>

      {/* --- Paper 1 (PDF left, description right) --- */}
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

        <div style={textStyle}>
          <h2>Analysis of World Happiness Trends</h2>
          <p>
            This analytics report explores global happiness survey data over multiple years to
            identify key socioeconomic factors driving well-being. Using regression modeling and
            correlation heatmaps, it reveals patterns in income, freedom, and health indicators
            across nations. Visualizations were created using R packages like ggplot2.
          </p>
        </div>
      </div>

      {/* --- Paper 2 (PDF right, description left) --- */}
      <div
        style={{
          ...sectionStyle,
          flexDirection: "row-reverse",
        }}
      >
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

        <div style={textStyle}>
          <h2>COVID-19 Steady State Modeling</h2>
          <p>
            This project uses time-series data and epidemiological modeling to analyze COVID-19
            transmission dynamics. A steady-state model was implemented to predict equilibrium
            case levels at different points of the pandemic.
          </p>
        </div>
      </div>
    </div>
  );
}
