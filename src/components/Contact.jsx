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
    background: "#1a1a1a",
    color: "#e8e8e8",
    border: "1px solid #404040",
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
    border: "2px solid #666",
    flexShrink: 0,
  };
  const nameStyle = { fontSize: "clamp(1.1rem, 4vw, 1.25rem)", fontWeight: 700, margin: 0 };

  const contactRow = {
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
    marginTop: ".75rem",
    lineHeight: 1.8,
    color: "#ddd",
    alignItems: "flex-start",
  };

  const contactInfo = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    flex: 1,
    textAlign: "left",
  };

  const contactItem = {
    marginBottom: "0.75rem",
    fontSize: "clamp(0.9rem, 3vw, 1rem)",
    textAlign: "left",
    lineHeight: "1.3",
  };

  const linksColumn = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    alignItems: "stretch",
    minWidth: "120px",
  };

  const pill = {
    padding: ".4rem .9rem",
    border: "1px solid #666",
    borderRadius: "999px",
    textDecoration: "none",
    color: "#e8e8e8",
    background: "#242424",
    transition: "all 0.25s ease",
    textAlign: "center",
    display: "block",
  };
  const pillHover = {
    ...pill,
    background: "#d64545",
    borderColor: "#d64545",
    color: "#ffffff",
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
    border: "1px solid #666",
    background: "#242424",
    color: "#e8e8e8",
    cursor: "pointer",
    fontSize: "clamp(0.875rem, 3vw, 1rem)",
    flex: "1 1 auto",
    minWidth: "100px",
  };
  const primary = { ...btn, background: "#d64545", border: "none", color: "#ffffff" };

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
        @media (max-width: 640px) {
          .contact-row-responsive {
            flex-direction: column !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
      <div style={overlay} onClick={onClose} role="dialog" aria-modal="true">
        <div style={card} onClick={(e) => e.stopPropagation()}>
          <div style={header}>
            <img src={avatarSrc} alt={`${name} avatar`} style={avatar} />
            <div>
              <h3 style={nameStyle}>{name}</h3>
              {location && <div style={{ color: "#c4c4c4", fontSize: "clamp(0.85rem, 3vw, 0.95rem)" }}>{location}</div>}
            </div>
          </div>

          <div style={{...contactRow}} className="contact-row-responsive">
            <div style={{...contactInfo}} className="contact-info-responsive">
              {email && (
                <div style={contactItem}>
                  <div style={{ marginBottom: "0.15rem" }}><strong>Email:</strong></div>
                  <a href={`mailto:${email}`} style={{ color: "#d64545", textDecoration: "underline", display: "block" }}>
                    {email}
                  </a>
                </div>
              )}
              {phone && (
                <div style={contactItem}>
                  <div style={{ marginBottom: "0.15rem" }}><strong>Phone:</strong></div>
                  <div>{phone}</div>
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
