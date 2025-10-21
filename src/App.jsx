// src/App.jsx
export default function App() {
  return (
    <main
      style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "4rem 1.5rem",
        color: "white",
        fontFamily:
          "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", lineHeight: 1.2, margin: 0 }}>
        Welcome to Miya’s Portfolio
      </h1>
      <p style={{ marginTop: "1rem", fontSize: "1.125rem", opacity: 0.85 }}>
        Designed and built with ❤️ using React + Vite
      </p>
    </main>
  );
}
