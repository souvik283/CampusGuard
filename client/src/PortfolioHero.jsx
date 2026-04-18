import { useState, useEffect } from "react";

const features = [
  { text: "Quick setup in under 5 minutes" },
  { text: "Professional templates included" },
  { text: "Shareable public link" },
];

const BoltIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L4.5 13.5H11L10 22L20 10H13.5L13 2Z" fill="#3B82F6" stroke="#3B82F6" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const MockPortfolioScreen = () => (
  <div style={{
    width: "100%",
    height: "100%",
    background: "#fff",
    borderRadius: "4px",
    overflow: "hidden",
    fontFamily: "sans-serif",
    fontSize: "6px",
  }}>
    {/* Nav */}
    <div style={{ background: "#f8f8f8", padding: "6px 10px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #eee" }}>
      <div style={{ width: 30, height: 5, background: "#ddd", borderRadius: 2 }} />
      <div style={{ display: "flex", gap: 6 }}>
        {[1, 2, 3].map(i => <div key={i} style={{ width: 20, height: 4, background: "#ddd", borderRadius: 2 }} />)}
      </div>
    </div>
    {/* Hero */}
    <div style={{ padding: "10px", display: "flex", gap: "8px" }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: "7px", fontWeight: 700, color: "#111", lineHeight: 1.3, marginBottom: 3 }}>
          JOHN DOE —<br />WEB DEVELOPER
        </div>
        <div style={{ width: "60%", height: 10, background: "#FF6B35", borderRadius: 2, marginBottom: 6 }} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
          {[1, 2, 3, 4].map(i => (
            <div key={i} style={{ height: 22, background: "#f0f0f0", borderRadius: 2, overflow: "hidden" }}>
              <div style={{ height: "60%", background: i % 2 === 0 ? "#e8e8e8" : "#ddd" }} />
            </div>
          ))}
        </div>
      </div>
      <div style={{ width: 40, display: "flex", flexDirection: "column", gap: 3 }}>
        <div style={{ width: "100%", height: 30, background: "#f0f0f0", borderRadius: 2 }} />
        <div style={{ width: "100%", height: 20, background: "#e8e8e8", borderRadius: 2 }} />
      </div>
    </div>
  </div>
);

export default function PortfolioHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#ffffff",
      padding: "40px 20px",
      fontFamily: "'Georgia', 'Times New Roman', serif",
    }}>
      <div style={{
        maxWidth: 1100,
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "64px",
        alignItems: "center",
      }}>

        {/* LEFT — Laptop Mockup */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div style={{
            position: "relative",
            background: "linear-gradient(135deg, #f5f5f7 0%, #e8e8ed 100%)",
            borderRadius: "16px",
            padding: "40px 30px 16px 30px",
            boxShadow: "0 32px 80px rgba(0,0,0,0.14), 0 8px 24px rgba(0,0,0,0.08)",
          }}>
            {/* Laptop top bar */}
            <div style={{
              position: "absolute",
              top: 14,
              left: "50%",
              transform: "translateX(-50%)",
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#d1d1d6",
            }} />

            {/* Screen */}
            <div style={{
              background: "#fff",
              borderRadius: "8px",
              overflow: "hidden",
              height: 240,
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
              border: "1px solid #e0e0e5",
            }}>
              <MockPortfolioScreen />
            </div>

            {/* Keyboard base */}
            <div style={{
              marginTop: 12,
              height: 10,
              background: "linear-gradient(180deg, #d8d8dc 0%, #c8c8cd 100%)",
              borderRadius: "4px",
            }} />
          </div>

          {/* Laptop shadow */}
          <div style={{
            height: 16,
            background: "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, transparent 100%)",
            borderRadius: "0 0 50% 50%",
            margin: "0 20px",
            filter: "blur(6px)",
          }} />
        </div>

        {/* RIGHT — Content */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
          }}
        >
          {/* Badge */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "6px 16px",
            border: "1.5px solid #d0d7e3",
            borderRadius: "999px",
            marginBottom: "24px",
          }}>
            <span style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#4a5568",
              fontFamily: "'Arial', sans-serif",
              textTransform: "uppercase",
            }}>
              Stand Out
            </span>
          </div>

          {/* Heading */}
          <h1 style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 800,
            color: "#0f1923",
            lineHeight: 1.15,
            marginBottom: "20px",
            letterSpacing: "-0.02em",
          }}>
            Create Your Professional Portfolio
          </h1>

          {/* Subtext */}
          <p style={{
            fontSize: "15px",
            color: "#64748b",
            lineHeight: 1.7,
            marginBottom: "32px",
            fontFamily: "'Arial', sans-serif",
            fontWeight: 400,
            maxWidth: 420,
          }}>
            Build a clean, template-based portfolio showcasing your education, skills, projects, and experience. Share with recruiters instantly.
          </p>

          {/* Feature list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "40px" }}>
            {features.map((f, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-10px)",
                  transition: `opacity 0.5s ease ${0.4 + i * 0.1}s, transform 0.5s ease ${0.4 + i * 0.1}s`,
                }}
              >
                <div style={{
                  width: 28,
                  height: 28,
                  borderRadius: "6px",
                  background: "#eff6ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <BoltIcon />
                </div>
                <span style={{
                  fontSize: "14px",
                  color: "#374151",
                  fontFamily: "'Arial', sans-serif",
                }}>
                  {f.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#2563EB",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              padding: "16px 28px",
              fontSize: "15px",
              fontWeight: 700,
              fontFamily: "'Arial', sans-serif",
              cursor: "pointer",
              transition: "background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease",
              boxShadow: "0 4px 16px rgba(37, 99, 235, 0.3)",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "#1d4ed8";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(37, 99, 235, 0.4)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "#2563EB";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(37, 99, 235, 0.3)";
            }}
          >
           Submit
          </button>
        </div>
      </div>
    </div>
  );
}
