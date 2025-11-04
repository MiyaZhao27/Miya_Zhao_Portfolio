import ClubCard from "../components/ClubCard.jsx";

export default function EventPlanning() {
  return (
    <div style={{ background: "#222", color: "#fff", minHeight: "100vh", padding: "3rem 2rem" }}>
      <h1 className="ep-header">Events & Culture</h1>
      <p className="ep-sub" style={{ marginBottom: "2rem" }}>
        Clubs and organizations that shaped my college experience.
      </p>

      <ClubCard
        name="Yale Chinese American Students Association (CASA)"
        badge="Culture & Community"
        description="Promoting Chinese-American culture, leadership, and connection through campus-wide cultural showcases, mentorship, and social initiatives."
        url="https://www.yalecasa.org/"
        primaryLabel="Visit CASA ↗"
      />

      <ClubCard
        name="Asian American Cultural Center Undergraduate Staff Coordinator "
        badge="Culture & Community"
        description="Coordinating cultural events and community initiatives to promote Asian-American heritage and student engagement on campus."
        url="https://aacc.yale.edu/"
        primaryLabel="Visit AACC ↗"
      />
    </div>
  );
}
