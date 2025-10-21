import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();
  const link = (to, label) => (
    <Link
      to={to}
      style={{
        display: "block",
        padding: "0.65rem 0.9rem",
        borderRadius: "0.5rem",
        textDecoration: "none",
        color: pathname === to ? "#fff" : "#bbb",
        background: pathname === to ? "#3c3c3c" : "transparent",
        marginBottom: "0.35rem",
      }}
    >
      {label}
    </Link>
  );

  return (
    <nav
      style={{
        position: "fixed",
        inset: "0 auto 0 0",
        width: 240,
        background: "#1e1e1e",
        borderRight: "1px solid #2c2c2c",
        padding: "1rem",
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ color: "#fff", margin: "0 0 1rem" }}>Miya’s Portfolio</h2>
      {link("/", "Home")}
      {link("/data-analytics", "Data Analytics")}
      {link("/biology-research", "Biology Research")}
      {link("/art", "Art")}
    </nav>
  );
}

