import DogOutlineGuide from "../components/DogOutlineGuide.jsx";
import ShinyEmbed from "../components/ShinyEmbed.jsx";

export default function DataAnalytics() {
  const paper1 = `${import.meta.env.BASE_URL}Analysis of World Happiness Trends.pdf`;
  const paper2 = `${import.meta.env.BASE_URL}COVID-19 Steady State Modeling.pdf`;

  const outlineSections = [
    {
      title: "Data Visualization Tools",
      items: [
        "Finding Home: Visualizing Property Values Along the Metro-North Line",
        "L-Asparaginase Feature Analysis Dashboard",
        "EV Charging Station Explorer",
      ]
    },
    {
      title: "Data Analytics Papers",
      items: [
        "Analysis of World Happiness Trends",
        "COVID-19 Steady State Modeling",
      ]
    }
  ];

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

  const containerStyle = {
    background: "#222",
    color: "#fff",
    minHeight: "100vh",
    padding: "clamp(2rem, 6vw, 4rem) clamp(1rem, 8vw, 100px) clamp(1rem, 4vw, 2rem) clamp(1rem, 8vw, 100px)",
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
      name: "Finding Home: Visualizing Property Values Along the Metro-North Line",
      url: "https://mz27.shinyapps.io/pset5-Property-Values-Interactions-Splines-Shiny-Plotly/",
      desc:
        "This project was a homework assignment birthed from my data science instructor's search for a home with his fiancée after their wedding. They needed to find a place between New York City and New Haven along the Metro-North line, balancing factors such as commute time, housing price, neighborhood diversity, and accessibility. Using an interactive R Shiny dashboard with Plotly visualizations, the project enabled dynamic exploration of housing features and how they varied across the region. A Leaflet map highlighted top candidate neighborhoods based on the couple's priorities, providing a clear and engaging way to compare potential locations.",
      height: 820,
    },
    {
      name: "L-Asparaginase Feature Analysis Dashboard",
      url: "https://mz27.shinyapps.io/aspgfeatures/",
      desc:
        "A feature analysis dashboard designed for L-asparaginase datasets, providing interactive filtering, model-ready exports, and visual summaries for residue-level properties. Structural and biochemical information was imported directly from the Protein Data Bank (PDB), enabling accurate exploration of residue-specific features. The dashboard directly supported the logistic regression model in our iGEM protein functionalization pipeline, helping refine site selection for later lipid functionalization. The built-in feature one-hot converter streamlined data preparation by allowing users to select residues by feature and export one-hot encoded values for use in machine learning models.",
      height: 820,
    },
    {
      name: "EV Charging Station Explorer",
      url: "https://mz27.shinyapps.io/EVshinyapp/",
      desc:
        "This project is an interactive Shiny app designed to help users explore EV charging stations across the United States. Users can filter stations by state, network, opening date, charging level, and availability, and view results on an interactive Leaflet map with clear visual markers. The project was completed as a homework assignment but felt particularly relevant given the growing support for electric vehicles and government subsidies encouraging their adoption. The app allows for easy identification of convenient, accessible charging locations, helping users plan routes and evaluate infrastructure availability.",
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
            typing 2s steps(25, end),
            blink-caret 0.75s step-end infinite,
            remove-caret 0.01s 2s forwards;
        }
      `}</style>
    <div style={containerStyle} className="project-outline-container">
      <DogOutlineGuide sections={outlineSections} />
      <div style={contentStyle} className="project-content">
      <h1 className="ep-header"><span className="typewriter-title">Data Analytics Projects</span></h1>
      <p className="ep-sub" style={{ marginBottom: "3rem" }}>
        A showcase of projects applying statistical modeling, visualization, and predictive
        analysis to uncover insights from real-world datasets. Each project integrates data
        storytelling with technical rigor to communicate impactful findings.
      </p>

      {/* ===== Shiny apps (stacked) ===== */}
      <h2 style={{ textAlign: "left", margin: "1rem 0 2rem", fontSize: "2rem", borderBottom: "2px solid #d64545", paddingBottom: "0.5rem" }}>Data Visualization Tools</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "3rem", marginBottom: "4rem" }}>
        {apps.map((a, i) => {
          const sectionId = a.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
          return (
          <div key={i} id={sectionId} style={{ width: "100%", margin: "0 auto" }}>
            <h3 style={{ textAlign: "left", marginBottom: "0.5rem" }}>{a.name}</h3>
            <p className="ep-sub" style={{ textAlign: "left", marginBottom: "1rem" }}>{a.desc}</p>
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

            <h2 style={{ textAlign: "left", margin: "1rem 0 2rem", fontSize: "2rem", borderBottom: "2px solid #d64545", paddingBottom: "0.5rem" }}>Data Analytics Projects</h2>

      {/* --- Paper 1 --- */}
      <div id="analysis-of-world-happiness-trends" style={{ marginBottom: "3rem" }}>
        <div style={{ marginBottom: "1.5rem", textAlign: "left" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "0.75rem", textAlign: "left" }}>Analysis of World Happiness Trends</h3>
          <p style={{ color: "#ddd", lineHeight: "1.6", fontSize: "1.05rem", textAlign: "left" }}>
            This analytics report explores global happiness survey data over multiple years to identify key socioeconomic factors driving well-being. Using regression modeling and correlation analysis, it highlights that social support, healthy life expectancy, perceptions of corruption, and emotional well-being are the strongest predictors of life satisfaction, while factors like generosity show little impact. The study also reveals regional differences, emphasizing how location and living conditions shape happiness. Visualizations were created using R packages like ggplot2.
          </p>
        </div>
        <div style={{ width: "100%" }}>
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
      </div>

      {/* --- Paper 2 --- */}
      <div id="covid-19-steady-state-modeling" style={{ marginBottom: "3rem" }}>
        <div style={{ marginBottom: "1.5rem", textAlign: "left" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "0.75rem", textAlign: "left" }}>COVID-19 Steady State Modeling</h3>
          <p style={{ color: "#ddd", lineHeight: "1.6", fontSize: "1.05rem", textAlign: "left" }}>
            In 2020, the COVID-19 pandemic irreversibly changed global health, economies, and daily life. Four years later, shifts from
            rapid response to immediate outbreaks to dealing with the virus’s long-term effects led to new important questions: Will
            COVID-19 infection rates settle down over time, and what factors will influence their long-term behavior? Additionally,
            can we use sporadic updates to predict daily new cases in order to more accurately track the progression of cumulative
            cases of COVID through a population? Answering these questions is crucial for future public health strategies and the
            ever growing impact of airborne infections. This project uses linear algebra methods, specifically Markov chains with
            steady-state analysis and least-square approximation, to study and predict how COVID-19 infection rates might change
            over given time periods. Markov chains model the chances of moving between different stages of infection, allowing us to
            find steady states of infection rates and make important assumptions. Additionally, these matrices allow for individualized
            probability predictions after a certain time frame (transitions). On the other hand, least-square approximation provides a
            way to determine COVID-19 cases more accurately in broader data sets, which is useful when COVID-19 data is tracked
            at larger time intervals. By combining these mathematical tools, this study aims to determine the future of COVID-19
            in our population.
          </p>
        </div>
        <div style={{ width: "100%" }}>
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
      </div>
      </div>
    </div>
    </>
  );
}
