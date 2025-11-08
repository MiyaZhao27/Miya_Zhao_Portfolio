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
    maxWidth: "90vw",
    background: "#111",
    color: "#fff",
    border: "1px solid #2c2c2c",
    borderRadius: "12px",
    padding: "clamp(1rem, 4vw, 1.25rem)",
    boxShadow: "0 20px 60px rgba(0,0,0,.5)",
    margin: "1rem",
    maxHeight: "90vh",
    overflowY: "auto",
  };

  const header = { display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" };
  const avatar = {
    width: "clamp(60px, 15vw, 72px)",
    height: "clamp(60px, 15vw, 72px)",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid #444",
    flexShrink: 0,
  };
  const nameStyle = { fontSize: "clamp(1.1rem, 4vw, 1.25rem)", fontWeight: 700, margin: 0 };

  const contactRow = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    marginTop: ".75rem",
    lineHeight: 1.8,
    color: "#ddd",
  };

  const contactInfo = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    width: "100%",
  };

  const contactItem = {
    display: "flex",
    alignItems: "baseline",
    gap: "0.5rem",
    flexWrap: "wrap",
    fontSize: "clamp(0.9rem, 3vw, 1rem)",
  };

  const linksColumn = {
    display: "flex",
    flexDirection: "row",
    gap: "0.5rem",
    alignItems: "flex-start",
    flexWrap: "wrap",
    width: "100%",
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
    flexWrap: "wrap",
  };
  const btn = {
    padding: "clamp(0.5rem, 2vw, 0.6rem) clamp(0.8rem, 3vw, 0.9rem)",
    borderRadius: "8px",
    border: "1px solid #444",
    background: "#222",
    color: "#fff",
    cursor: "pointer",
    fontSize: "clamp(0.875rem, 3vw, 1rem)",
    flex: "1 1 auto",
    minWidth: "100px",
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
    <>
      <style>{`
        @media (min-width: 640px) {
          .contact-row-responsive {
            flex-direction: row !important;
          }
          .contact-info-responsive {
            flex: 1;
          }
        }
      `}</style>
      <div style={overlay} onClick={onClose} role="dialog" aria-modal="true">
        <div style={card} onClick={(e) => e.stopPropagation()}>
          <div style={header}>
            <img src={avatarSrc} alt={`${name} avatar`} style={avatar} />
            <div>
              <h3 style={nameStyle}>{name}</h3>
              {location && <div style={{ color: "#aaa", fontSize: "clamp(0.85rem, 3vw, 0.95rem)" }}>{location}</div>}
            </div>
          </div>

          <div style={{...contactRow}} className="contact-row-responsive">
            <div style={{...contactInfo}} className="contact-info-responsive">
              {email && (
                <div style={contactItem}>
                  <strong style={{ minWidth: "60px", textAlign: "left", fontSize: "inherit" }}>Email:</strong>
                  <a href={`mailto:${email}`} style={{ color: "#9bd", textDecoration: "underline", wordBreak: "break-all" }}>
                    {email}
                  </a>
                </div>
              )}
              {phone && (
                <div style={contactItem}>
                  <strong style={{ minWidth: "60px", textAlign: "left", fontSize: "inherit" }}>Phone:</strong>
                  <span>{phone}</span>
                </div>
              )}
            </div>

            {Array.isArray(links) && links.length > 0 && (
              <div style={linksColumn}>
                {links.map((l, i) => (
                  <a
                    key={i}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{...pill, fontSize: "clamp(0.85rem, 3vw, 1rem)", padding: "clamp(0.35rem, 2vw, 0.4rem) clamp(0.7rem, 3vw, 0.9rem)"}}
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
    </>
  );
}
