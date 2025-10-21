import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Art from "./pages/Art.jsx";
import BiologyResearch from "./pages/BiologyResearch.jsx";
import DataAnalytics from "./pages/DataAnalytics.jsx";

export default function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main
        style={{
          marginLeft: 240,
          padding: "2rem",
          minHeight: "100vh",
          width: "100%",
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
                <p>Designed and built with ❤️ using React + Vite</p>
              </>
            }
          />
          <Route path="/data-analytics" element={<DataAnalytics />} />
          <Route path="/biology-research" element={<BiologyResearch />} />
          <Route path="/art" element={<Art />} />
        </Routes>
      </main>
    </div>
  );
}
