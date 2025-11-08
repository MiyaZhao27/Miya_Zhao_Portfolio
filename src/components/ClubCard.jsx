export default function ClubCard({ 
  name, 
  url, 
  badge = "Organization", 
  description, 
  primaryLabel = "Visit ↗", 
  secondaryLabel 
}) {
  const card = {
    display: "block",
    width: "100%",
    maxWidth: "1100px",
    margin: "0 auto clamp(1rem, 4vw, 2rem)",
    padding: "clamp(1rem, 3vw, 1.25rem)",
    borderRadius: "14px",
    background: "#111",
    border: "1px solid #2c2c2c",
    textDecoration: "none",
    color: "#fff",
    boxShadow: "0 20px 50px rgba(0,0,0,.35)",
    transition: "transform .15s ease, box-shadow .2s ease, border-color .2s ease",
  };

  const cardHover = {
    transform: "translateY(-2px)",
    boxShadow: "0 24px 60px rgba(0,0,0,.45)",
    borderColor: "#3a3a3a",
  };

  const badgeStyle = {
    fontSize: ".75rem",
    letterSpacing: ".08em",
    textTransform: "uppercase",
    padding: ".25rem .55rem",
    borderRadius: "999px",
    border: "1px solid #444",
    color: "#ddd",
  };

  const title = { margin: 0, fontSize: "clamp(1.1rem, 3.5vw, 1.35rem)", fontWeight: 700, lineHeight: 1.25 };
  const desc  = { margin: ".35rem 0 0", color: "#cfcfcf", lineHeight: 1.6, fontSize: "clamp(0.95rem, 2.5vw, 1rem)" };

  const actions = { display: "flex", gap: ".6rem", marginTop: ".9rem", flexWrap: "wrap" };
  const btn = {
    display: "inline-block",
    padding: ".6rem .9rem",
    borderRadius: "10px",
    border: "1px solid #444",
    background: "#222",
    color: "#fff",
    textDecoration: "none",
    fontWeight: 600,
    transition: "background .2s ease, border-color .2s ease",
  };
  const primary = { ...btn, background: "#e63946", border: "none" };

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      style={card}
      onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHover)}
      onMouseLeave={(e) => Object.assign(e.currentTarget.style, card)}
    >
      <div>
        <div style={badgeStyle}>{badge}</div>
        <h2 style={title}>{name}</h2>
        <p style={desc}>{description}</p>
        <div style={actions}>
          <span style={primary}>{primaryLabel}</span>
          {secondaryLabel && <span style={btn}>{secondaryLabel}</span>}
        </div>
      </div>
    </a>
  );
}
