import { Route, Routes } from "react-router-dom";
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
          padding: "2rem",
          minHeight: "100vh",
          background: "#222",
          color: "#fff",
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Welcome to Miya’s Portfolio</h1>
                <p
                  style={{
                    maxWidth: "600px",
                    lineHeight: "1.6",
                    fontSize: "1.05rem",
                  }}
                >
                  I’m Miya Zhao! I'm interested in exploring the intersections of
                  data analytics, biology research, event planning, and art. This
                  portfolio showcases my favorite projects and creative work.
                </p>
              </>
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
