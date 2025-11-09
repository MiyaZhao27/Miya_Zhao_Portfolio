import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import Art from "./pages/Art.jsx";
import BiologyResearch from "./pages/BiologyResearch.jsx";
import DataAnalytics from "./pages/DataAnalytics.jsx";
import EventDetail from "./pages/EventDetail.jsx";
import EventPlanning from "./pages/EventPlanning.jsx";

export default function App() {
  return (
    <div>
      <Header />
      <main
        style={{
          paddingTop: "20px",
          padding: "clamp(1rem, 4vw, 2rem)",
          minHeight: "100vh",
          background: "#1a1a1a",
          color: "#e8e8e8",
        }}
      >
        <Routes>
          <Route
  path="/"
  element={
    <div className="home-page">
      <h1 className="hero-title"> Hiya! I'm Miya </h1>
      <div className="hero-container">
        <img
          src={`${import.meta.env.BASE_URL}headshot.png`}
          alt="Miya Zhao headshot"
          className="hero-image"
        />
        <div className="hero-text">
          <p className="ep-sub">
            Welcome to my Portfolio! I'm a third-year pursuing my Bachelors of Science in Statistics and Data Science at Yale University.
          </p>
          <p className="ep-sub">
            I believe true magic happens at the intersection of <strong>creative ideation and informed technical delivery</strong>. I'm particularly interested in the challenge of juggling all the moving parts of a project, from the initial spark of an idea all the way through to final implementation. I believe <strong>the best results emerge when we connect disparate ideas into a unified vision</strong>.
          </p>
          <p className="ep-sub">
            My diverse experience in research development, the visual arts, education, and event planning has been instrumental in shaping my skill set and passion for <strong>end-to-end execution</strong>. The core principles that guide me and the roles I take on include <strong>creativity, a people-first mindset, and sustainability</strong>. This commitment to turning vision into reality <strong>with intentionality</strong> is what drives my interest in Product Management, particularly within Biotech or App Development.
          </p>
          <p className="ep-sub">
            This portfolio is a documentation of the work I'm most proud of, showcasing how abstract concepts are translated into <strong>tangible products and initiatives designed to thrive</strong>.
          </p>
        </div>
      </div>
    </div>
  }
/>
          <Route path="/data-analytics" element={<DataAnalytics />} />
          <Route path="/biology-research" element={<BiologyResearch />} />
          <Route path="/event-planning" element={<EventPlanning />} />
          <Route path="/event/:eventId" element={<EventDetail />} />
          <Route path="/art" element={<Art />} />
        </Routes>
      </main>
    </div>
  );
}
