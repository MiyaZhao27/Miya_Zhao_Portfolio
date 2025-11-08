import DogOutlineGuide from "../components/DogOutlineGuide.jsx";

export default function BiologyResearch() {
  const paper1 = `${import.meta.env.BASE_URL}Identification of Non-standard Amino Acid Incorporation Sites for Half-life Extension of chemotherapeutic L-asparaginase .docx.pdf`;
  const paper2 = `${import.meta.env.BASE_URL}Increasing Bioavailability of Anthocyanin in Daucus carota (V. Imperator & Deep Purple) Through CRISPR_Cas12-Mediated Editing (1).pdf`;
  const paper3 = `${import.meta.env.BASE_URL}Isolation and Identification of Plastic-Degrading and Oil-Degrading Bacteria In a Soil Sample.pdf`;
  const paper4 = `${import.meta.env.BASE_URL}PRG2’s Effect on LPA Reception in Neurons (2).pdf`;
  const maasJournal = `${import.meta.env.BASE_URL}maas-journal.pdf`;

  const outlineSections = [
    {
      title: "iGEM Project",
      items: [
        "Yale iGEM Wiki",
        "Summer 2023 Wet Lab Findings",
        "MAAS Journal Publication",
      ]
    },
    {
      title: "Increasing Bioavailability of Anthocyanin in Daucus carota",
      items: [
        "How Does One Make a Carrot as Nutritious as a Blueberry?",
      ]
    },
    {
      title: "Isolation of Plastic Degrading Bacteria",
      items: [
        "Does Gas Station Soil Contain Plastic-Degrading Bacteria?",
      ]
    },
    {
      title: "PRG's Effect on LPA Reception in Neurons",
      items: [
        "How Do Axons Know Where to Go?",
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
            typing 2s steps(17, end),
            blink-caret 0.75s step-end infinite,
            remove-caret 0.01s 2s forwards;
        }
      `}</style>
    <div style={containerStyle} className="project-outline-container">
      <DogOutlineGuide sections={outlineSections} />
      <div style={contentStyle} className="project-content">
      <h1 className="ep-header"><span className="typewriter-title">Biology Research</span></h1>
      <p
        className="ep-sub"
        style={{
          marginBottom: "3rem",
        }}
      >
        A collection of research projects exploring synthetic biology,
        environmental microbiology, and neurobiology. 
      </p>

      {/* ========== iGEM PROJECT SECTION ========== */}
      <div style={{ marginBottom: "5rem" }}>
        <h3 style={{ textAlign: "left", marginBottom: "2rem", fontSize: "2rem", borderBottom: "2px solid #d64545", paddingBottom: "0.5rem" }}>
          2023-2025 iGEM Project: Click. Customize. Catalyze. 
        </h3>  
        <h4 style={{ textAlign: "left", marginBottom: "2rem", fontSize: "1.5rem" }}>
          A Systematic Approach to Site Specific Enzyme Functionalization
        </h4>

        {/* --- iGEM Wiki Subsection --- */}
        <div id="yale-igem-wiki" style={{ width: "100%", margin: "0 auto 4rem" }}>
        
        <div className="ep-sub" style={{ textAlign: "left", marginBottom: "1rem", lineHeight: "1.7" }}>
          <p style={{ marginBottom: "1rem" }}>
            In 2025, I competed with the Yale iGEM Team, which earned Yale's first gold medal at the International Genetically Engineered Machine (iGEM) competition since the university's debut in 2011.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            The iGEM Jamboree is the world's leading undergraduate synthetic biology competition, bringing together over 400 teams from 45 countries to tackle global challenges in sustainability, healthcare, and food security. Our team, mentored by Dr. Maria Moreno and the Farren Isaacs Lab, presented a novel pipeline for systematic protein functionalization through targeted non-standard amino acid incorporation.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            We demonstrated this pipeline through the case study of L-asparaginase, a chemotherapeutic enzyme limited by short half-life and immunogenicity. By site-specifically incorporating non-standard amino acids as chemical "hooks," we explored ways to extend its half-life using palmitic acid conjugation. Alongside the wet lab work, I helped develop a machine learning model integrating molecular dynamics simulations and experimental results to predict promising edit sites and identify structural patterns in protein engineering.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            Beyond the bench, I also contributed to our team's human practices and outreach initiatives:
          </p>
          <ul style={{ marginLeft: "1.5rem", marginBottom: "1rem" }}>
            <li><strong>You Are What You Fund (YAWF)</strong>: a global survey exploring how public perceptions of biotech shape funding priorities.</li>
            <li><strong>60 Second Scientist</strong>: a series of short animated explainers on molecular biology techniques.</li>
            <li><strong>Build-A-Protein Workshop</strong>: a hands-on educational program that engaged over 150 New Haven students in synthetic biology.</li>
          </ul>
          <p>
            Through my two yeares in iGEM, I combined research, design, and community engagement to better understand scientific communication, interdisciplinary collaboration, and project execution.
          </p>
        </div>
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

        {/* --- Summer 2023 Wet Lab Findings --- */}
        <div id="summer-2023-wet-lab-findings" style={sectionStyle} className="section-responsive">
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

          <div style={{ ...textStyle, textAlign: "left", alignItems: "flex-start" }} className="text-responsive">
            <h3 style={{ fontSize: "1.5rem" }}>
              Summer 2023 Wet Lab Findings
            </h3>
            <p>
              My initial wet lab research from summer 2023 focused on identifying non-standard amino acid incorporation sites for half-life extension of chemotherapeutic L-asparaginase. We conducted initial research in site-selection through a series of mutation techniques, cloning, and expression optimization for bioactivity testing, laying the groundwork for our iGEM project.
            </p>
          </div>
        </div>

        {/* --- MAAS Journal Publication --- */}
        <div id="maas-journal-publication" style={{ ...sectionStyle, flexDirection: "row-reverse" }} className="section-responsive">
          <div style={pdfContainer} className="pdf-container-responsive">
            <object data={maasJournal} type="application/pdf" style={frameStyle}>
              <p>
                Unable to display PDF.{" "}
                <a href={maasJournal} target="_blank" rel="noreferrer" style={{ color: "#9bd" }}>
                  Click here to open it
                </a>
                .
              </p>
            </object>
          </div>

          <div style={{ ...textStyle, textAlign: "left", alignItems: "flex-start" }} className="text-responsive">
            <h3 style={{ fontSize: "1.5rem" }}>
              MAAS Journal Publication
            </h3>
            <p>
              Our team's research pipeline for systematic protein functionalization through non-standard amino acid incorporation was published in the MAAS Journal. This publication details our complete methodology, experimental results, and the machine learning model we developed to predict promising edit sites for protein engineering applications.
            </p>
          </div>
        </div>
      </div>

      {/* ========== INCREASING BIOAVAILABILITY OF ANTHOCYANIN SECTION ========== */}
      <div style={{ marginBottom: "5rem" }}>
        <h2 style={{ textAlign: "left", marginBottom: "2rem", fontSize: "2rem", borderBottom: "2px solid #d64545", paddingBottom: "0.5rem" }}>
          Increasing Bioavailability of Anthocyanin in Daucus carota
        </h2>

      {/* --- Research Paper --- */}
      <div id="how-does-one-make-a-carrot-as-nutritious-as-a-blueberry" style={{ marginBottom: "3rem" }}>
        <div style={{ marginBottom: "1.5rem", textAlign: "left" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "0.75rem", textAlign: "left" }}>
            How Does One Make a Carrot as Nutritious as a Blueberry?
          </h3>
          <p style={{ color: "#ddd", lineHeight: "1.6", fontSize: "1.05rem", textAlign: "left" }}>
              In order to create more
              bioavailable commercial carrots, scientists want to remove the acylation chemical modification
              characteristic on anthocyanin, a nutrient found in berry-colored fruits and vegetables. The
              attachment of this acyl group makes anthocyanin more stable and structured within plants;
              however, it also makes it difficult for humans to break down anthocyanin for its multiple health
              benefits like increased cardiac health and better sugar metabolism. Previous research suggests
              that the DcSCPL1 gene plays a crucial role in acylating carrot anthocyanin. Thus, our goal is to
              induce early termination in a conserved region in DcSCPL1 through a gRNA-mediated deletion.
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

      {/* ========== ISOLATION OF PLASTIC DEGRADING BACTERIA SECTION ========== */}
      <div style={{ marginBottom: "5rem" }}>
        <h2 style={{ textAlign: "left", marginBottom: "2rem", fontSize: "2rem", borderBottom: "2px solid #d64545", paddingBottom: "0.5rem" }}>
          Isolation of Plastic Degrading Bacteria
        </h2>

      {/* --- Research Paper --- */}
      <div id="does-gas-station-soil-contain-plastic-degrading-bacteria" style={{ marginBottom: "3rem" }}>
        <div style={{ marginBottom: "1.5rem", textAlign: "left" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "0.75rem", textAlign: "left" }}>
            Does Gas Station Soil Contain Plastic-Degrading Bacteria?
          </h3>
          <p style={{ color: "#ddd", lineHeight: "1.6", fontSize: "1.05rem", textAlign: "left" }}>
            With the rise of climate change and pollution, there is a growing need to find sustainable ways to remove contaminants and restore ecological balance. My project explored the potential of bioremediation, a process that uses natural organisms such as microbes and plants to detoxify the environment.
            According to ScienceDirect, bioremediation technologies have the potential to clear ecosystems of both man-made and natural contaminants, improving public and environmental health. Beyond plastic degradation, this approach could provide cost-effective and sustainable solutions for treating hazardous waste, restoring soil quality, and even cleaning oil spills or wastewater through microbial or enzymatic activity.
            The goal of my research was to isolate and culture oil-degrading and potentially plastic-degrading bacteria from a soil sample collected at a local gas station. By identifying and characterizing these bacteria, this work contributes to a broader vision of using biology to address some of the planet’s most pressing environmental challenges.
          </p>
        </div>
        <div style={{ width: "100%" }}>
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
      </div>
      </div>

      {/* ========== PRG'S EFFECT ON LPA RECEPTION IN NEURONS SECTION ========== */}
      <div style={{ marginBottom: "5rem" }}>
        <h2 style={{ textAlign: "left", marginBottom: "2rem", fontSize: "2rem", borderBottom: "2px solid #d64545", paddingBottom: "0.5rem" }}>
          PRG's Effect on LPA Reception in Neurons
        </h2>

      {/* --- Research Paper --- */}
      <div id="how-do-axons-know-where-to-go" style={{ marginBottom: "3rem" }}>
        <div style={{ marginBottom: "1.5rem", textAlign: "left" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "0.75rem", textAlign: "left" }}>How Do Axons Know Where to Go?</h3>
          <p style={{ color: "#ddd", lineHeight: "1.6", fontSize: "1.05rem", marginBottom: "1rem", textAlign: "left" }}>
            <em>Presented at the South Carolina Junior Academy of Sciences</em>
          </p>
          <p style={{ color: "#ddd", lineHeight: "1.6", fontSize: "1.05rem", marginBottom: "1rem", textAlign: "left" }}>
            During early brain development, neurons must extend axons that navigate complex environments to find their correct targets. My research explored the potential interaction between plasticity-related genes (PRGs), known for their role in memory and learning, and lysophosphatidic acids (LPAs), lipid molecules integral to synaptic signaling and neuropathic pain.
          </p>
          <p style={{ color: "#ddd", lineHeight: "1.6", fontSize: "1.05rem", marginBottom: "1rem", textAlign: "left" }}>
            Previous studies suggest that PRG2 may regulate LPA receptor activity by inhibiting its responsiveness. To test this, I performed a neurite retraction assay using rat neuroblastoma (B103) cells, comparing wild-type and PRG2-overexpressing cells, both with and without LPA receptors (B103-LPA2 and B103-LPA4). Cells were treated with varying LPA concentrations, and changes in rounding behavior were analyzed. Complementary RT-PCR results confirmed that PRG2 was already expressed in the base cell line, indicating that our experiment examined overexpression effects rather than simple presence or absence.
          </p>
          <p style={{ color: "#ddd", lineHeight: "1.6", fontSize: "1.05rem", marginBottom: "1rem", textAlign: "left" }}>
            While literature suggests PRG2 should suppress the LPA-induced RhoA/ROCK signaling pathway and reduce neurite retraction, our preliminary findings showed that PRG2-overexpressing cells were just as likely to round in response to LPA treatment. These results point toward a more complex relationship between PRG2 and LPA signaling than previously assumed.
          </p>
          <p style={{ color: "#ddd", lineHeight: "1.6", fontSize: "1.05rem", textAlign: "left" }}>
            This project, which I presented at the South Carolina Junior Academy of Sciences, reflects my broader interest in how molecular interactions shape neuronal development and how these mechanisms might inform treatments for neuropathic pain and neurodegenerative disorders such as multiple sclerosis.
          </p>
        </div>
        <div style={{ width: "100%" }}>
          <object data={paper4} type="application/pdf" style={frameStyle}>
            <p>
              Unable to display PDF.{" "}
              <a href={paper4} target="_blank" rel="noreferrer" style={{ color: "#9bd" }}>
                Click here to open it
              </a>
              .
            </p>
          </object>
        </div>
      </div>
      </div>
      </div>
    </div>
    </>
  );
}
