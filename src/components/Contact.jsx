import { useEffect } from "react";

export default function Contact({ open, onClose, contact }) {
  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [onClose]);

  if (!open) return null;

  const {
    name = "Miya Zhao",
    email = "",
    phone = "",
    location = "",
    avatarSrc = `${import.meta.env.BASE_URL}headshot.png`,
    links = [],
  } = contact ?? {};

  const overlay = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1100,
  };

  const card = {
    width: "min(520px, 92vw)",
    background: "#111",
    color: "#fff",
    border: "1px solid #2c2c2c",
    borderRadius: "12px",
    padding: "1.25rem",
    boxShadow: "0 20px 60px rgba(0,0,0,.5)",
  };

  const header = { display: "flex", gap: "1rem", alignItems: "center" };
  const avatar = {
    width: 72,
    height: 72,
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid #444",
  };
  const nameStyle = { fontSize: "1.25rem", fontWeight: 700, margin: 0 };

  const contactRow = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
    marginTop: ".75rem",
    lineHeight: 1.5,
    color: "#ddd",
  };

  const pill = {
    padding: ".4rem .9rem",
    border: "1px solid #444",
    borderRadius: "999px",
    textDecoration: "none",
    color: "#fff",
    background: "#222",
    transition: "all 0.25s ease",
  };
  const pillHover = {
    ...pill,
    background: "#e63946",
    borderColor: "#e63946",
    color: "#fff",
  };

  const actions = {
    display: "flex",
    gap: ".5rem",
    justifyContent: "flex-end",
    marginTop: "1rem",
  };
  const btn = {
    padding: ".6rem .9rem",
    borderRadius: "8px",
    border: "1px solid #444",
    background: "#222",
    color: "#fff",
    cursor: "pointer",
  };
  const primary = { ...btn, background: "#e63946", border: "none" };

  const copyEmail = async () => {
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email);
      alert("Email copied!");
    } catch (err) {
      console.warn("Clipboard copy failed", err);
    }
  };

  return (
    <div style={overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div style={card} onClick={(e) => e.stopPropagation()}>
        <div style={header}>
          <img src={avatarSrc} alt={`${name} avatar`} style={avatar} />
          <div>
            <h3 style={nameStyle}>{name}</h3>
            {location && <div style={{ color: "#aaa" }}>{location}</div>}
          </div>
        </div>

        <div style={contactRow}>
          <div style={{ flex: "1 1 auto" }}>
            {email && (
              <div>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${email}`} style={{ color: "#9bd" }}>
                  {email}
                </a>
              </div>
            )}
            {phone && (
              <div>
                <strong>Phone:</strong> {phone}
              </div>
            )}
          </div>

          {Array.isArray(links) && links.length > 0 && (
            <div
              style={{
                display: "flex",
                gap: ".5rem",
                flexWrap: "wrap",
                justifyContent: "flex-end",
              }}
            >
              {links.map((l, i) => (
                <a
                  key={i}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  style={pill}
                  onMouseEnter={(e) => Object.assign(e.target.style, pillHover)}
                  onMouseLeave={(e) => Object.assign(e.target.style, pill)}
                >
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <div style={actions}>
          {email && (
            <button onClick={copyEmail} style={primary}>
              Copy Email
            </button>
          )}
          <button onClick={onClose} style={btn}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
