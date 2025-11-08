import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Contact from "./Contact.jsx";

export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const link = (to, label) => (
    <Link
      to={to}
      onClick={() => setMenuOpen(false)}
      style={{
        padding: "0.5rem 1rem",
        borderRadius: "0.4rem",
        textDecoration: "none",
        color: pathname === to ? "#ffffff" : "#c4c4c4",
        background: pathname === to ? "#d64545" : "transparent",
        transition: "background 0.2s",
        display: "block",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </Link>
  );

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .header-nav {
            position: fixed;
            top: 64px;
            left: 0;
            right: 0;
            background: #242424;
            border-bottom: 1px solid #404040;
            flex-direction: column;
            align-items: stretch;
            padding: 1rem;
            gap: 0.5rem;
            transform: translateY(${menuOpen ? '0' : '-100%'});
            opacity: ${menuOpen ? '1' : '0'};
            visibility: ${menuOpen ? 'visible' : 'hidden'};
            transition: all 0.3s ease;
            z-index: 999;
            box-shadow: 0 4px 6px rgba(0,0,0,0.3);
          }
          .header-nav a {
            width: 100%;
            text-align: center;
          }
          .menu-toggle {
            display: block !important;
          }
        }
        @media (min-width: 769px) {
          .header-nav {
            display: flex !important;
          }
          .menu-toggle {
            display: none !important;
          }
        }
      `}</style>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "64px",
          background: "#242424",
          borderBottom: "2px solid #404040",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 1rem",
          boxSizing: "border-box",
          zIndex: 1000,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "transparent",
              border: "1px solid #666",
              color: "#e8e8e8",
              borderRadius: "0.25rem",
              padding: "0.5rem",
              cursor: "pointer",
              display: "none",
            }}
            aria-label="Toggle menu"
          >
            ☰
          </button>
          <h2 style={{ color: "#f5f5f5", margin: 0, fontSize: "clamp(1rem, 4vw, 1.25rem)" }}>Miya Zhao</h2>
        </div>

        <nav className="header-nav" style={{ display: "flex", gap: "1rem" }}>
          {link("/", "Home")}
          {link("/data-analytics", "Data Analytics")}
          {link("/biology-research", "Research")}
          {link("/event-planning", "Events and Culture")}
          {link("/art", "Art Gallery")}
        </nav>

        <button
          onClick={() => setOpen(true)}
          style={{
            background: "#d64545",
            color: "#ffffff",
            border: "none",
            borderRadius: "0.5rem",
            padding: "clamp(0.4rem, 2vw, 0.5rem) clamp(0.8rem, 3vw, 1rem)",
            cursor: "pointer",
            fontWeight: 600,
            fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
            whiteSpace: "nowrap",
          }}
        >
          Contact Me
        </button>
      </header>

      <Contact
        open={open}
        onClose={() => setOpen(false)}
        contact={{
          name: "Miya Zhao",
          email: "miya.zhao@yale.edu", 
          phone: "(803) 448-5626",            
          location: "New Haven, CT",        
          avatarSrc: `${import.meta.env.BASE_URL}headshot.png`,
          links: [
            { label: "LinkedIn", href: "https://www.linkedin.com/in/miya-zhao-99869a211" },
            { label: "Resume", href: `${import.meta.env.BASE_URL}Miya_Zhao_Resume.pdf` },
          ],
        }}
      />
    </>
  );
}
