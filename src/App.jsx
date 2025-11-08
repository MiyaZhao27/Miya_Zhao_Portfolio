import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import Art from "./pages/Art.jsx";
import BiologyResearch from "./pages/BiologyResearch.jsx";
import DataAnalytics from "./pages/DataAnalytics.jsx";
import EventPlanning from "./pages/EventPlanning.jsx";

export default function App() {
  return (
    <div>
      <Header />
      <main
        style={{
          paddingTop: "80px",
          padding: "clamp(1rem, 4vw, 2rem)",
          minHeight: "100vh",
          background: "#222",
          color: "#fff",
        }}
      >
        <Routes>
          <Route
  path="/"
  element={
    <div className="hero-container">
      <img
      src={`${import.meta.env.BASE_URL}headshot.png`}
      alt="Miya Zhao headshot"
      className="hero-image"
    />
      <div className="hero-text">
        <h1 className="ep-header">Welcome to Miya’s Portfolio</h1>
        <p className="ep-sub">
          I’m Miya Zhao! I'm interested in exploring the world of Product Management as the intersection of creative thought
          and technical implementation. This portfolio showcases my favorite projects and creative work.
        </p>
      </div>
    </div>
  }
/>
          <Route path="/data-analytics" element={<DataAnalytics />} />
          <Route path="/biology-research" element={<BiologyResearch />} />
          <Route path="/event-planning" element={<EventPlanning />} />
          <Route path="/art" element={<Art />} />
        </Routes>
      </main>
    </div>
  );
}
