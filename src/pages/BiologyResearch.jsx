export default function BiologyResearch() {
  const paper1 = `${import.meta.env.BASE_URL}Identification of Non-standard Amino Acid Incorporation Sites for Half-life Extension of chemotherapeutic L-asparaginase .docx.pdf`;
  const paper2 = `${import.meta.env.BASE_URL}Isolation and Identification of Plastic-Degrading and Oil-Degrading Bacteria In a Soil Sample.pdf`;
  const paper3 = `${import.meta.env.BASE_URL}Abstract_ PRG2’s Effect on LPA Reception in Neurons.pdf`;

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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
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
      <div style={{ width: "100%", maxWidth: "1300px", margin: "0 auto 4rem" }}>
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
            height: "800px",
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
      <div style={sectionStyle}>
        <div style={pdfContainer}>
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

        <div style={{ ...textStyle, textAlign: "right", alignItems: "flex-end" }}>
          <h2>PRG2’s Effect on LPA Reception in Neurons</h2>
          <p>
            This neuroscience abstract explores the modulatory role of PRG2 in
            regulating lysophosphatidic acid (LPA) receptor activity within
            neuronal cells. The findings suggest PRG2 influences neuronal
            signaling pathways linked to cell migration and neurodevelopment.
          </p>
        </div>
      </div>
    </div>
  );
}
