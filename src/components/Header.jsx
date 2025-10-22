import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();

  const link = (to, label) => (
    <Link
      to={to}
      style={{
        padding: "0.5rem 1rem",
        borderRadius: "0.4rem",
        textDecoration: "none",
        color: pathname === to ? "#fff" : "#ccc",
        background: pathname === to ? "#3c3c3c" : "transparent",
        transition: "background 0.2s",
      }}
    >
      {label}
    </Link>
  );

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "64px",
        background: "#1e1e1e",
        borderBottom: "1px solid #2c2c2c",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2rem",
        boxSizing: "border-box",
        zIndex: 1000,
      }}
    >
      {/* Logo or site title */}
      <h2 style={{ color: "#fff", margin: 0 }}>Miya’s Portfolio</h2>

      {/* Navigation Links */}
      <nav style={{ display: "flex", gap: "1rem" }}>
        {link("/", "Home")}
        {link("/data-analytics", "Data Analytics")}
        {link("/biology-research", "Biology Research")}
        {link("/event-planning", "Event Planning")}
        {link("/art", "Art")}
      </nav>

      {/* CTA button */}
      <button
        style={{
          background: "#e63946",
          color: "#fff",
          border: "none",
          borderRadius: "0.5rem",
          padding: "0.5rem 1rem",
          cursor: "pointer",
          fontWeight: 600,
        }}
      >
        Let’s Talk
      </button>
    </header>
  );
}
