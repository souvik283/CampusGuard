import HeroSection from "./HeroSection";
import AIProtectionSection from "./AIProtectionSection";

const EmergentIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="6" stroke="white" strokeWidth="1" />
    <path d="M4 7L6.5 9.5L10 5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export default function App() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "white", minHeight: "100vh", position: "relative" }}>
      {/* Google Font */}
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&display=swap" rel="stylesheet" />

      {/* Section 1 — Navbar + Hero */}
      <HeroSection />

      {/* Section 2 — AI Protection Feature Cards */}
      <AIProtectionSection />

      {/* Fixed badge */}
      <div style={{
        position: "fixed", bottom: 24, right: 24,
        background: "#111", color: "white",
        borderRadius: 24, padding: "8px 16px",
        fontSize: 12, display: "flex", alignItems: "center", gap: 6,
        fontWeight: 500, zIndex: 999,
      }}>
        <EmergentIcon /> Made with Emergent
      </div>
    </div>
  );
}