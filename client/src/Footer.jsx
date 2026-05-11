import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"


const ShieldIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2L3 6V12C3 16.418 7.03 20.618 12 22C16.97 20.618 21 16.418 21 12V6L12 2Z"
      stroke="#6B7FD7"
      strokeWidth="1.8"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function TruOfferFooter() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const navigate = useNavigate()

  return (
    <div style={{ fontFamily: "'Arial', sans-serif", width: "100%" }}>

      {/* CTA Section */}
      <section style={{
        background: "#0f1623",
        padding: "80px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Subtle radial glow */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "300px",
          background: "radial-gradient(ellipse, rgba(99,120,220,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{
          maxWidth: 700,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}>
          {/* Heading */}
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "20px",
              letterSpacing: "-0.02em",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            Don't Let Scammers Steal Your Dreams
          </h2>

          {/* Subtext */}
          <p
            style={{
              fontSize: "15px",
              color: "#8b9bb4",
              lineHeight: 1.7,
              marginBottom: "40px",
              maxWidth: 500,
              margin: "0 auto 40px auto",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
            }}
          >
            Join thousands of students protecting their future with TruOffer. Start verifying placement offers today.
          </p>

          {/* CTA Button */}
        
          <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={()=>{
              navigate("/login")
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: hovered ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.08)",
              color: hovered ? "#0f1623" : "#ffffff",
              border: "1.5px solid rgba(255,255,255,0.55)",
              borderRadius: "10px",
              padding: "15px 32px",
              fontSize: "15px",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.25s ease",
              backdropFilter: "blur(4px)",
              letterSpacing: "0.01em",
              opacity: visible ? 1 : 0,
              transform: visible ? (hovered ? "translateY(-2px)" : "translateY(0)") : "translateY(16px)",
            }}
          >
            Create Free Account
            <ArrowIcon />
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer style={{
        background: "#f0f2f7",
        padding: "36px 24px",
        textAlign: "center",
        position: "relative",
      }}>
        {/* Logo Row */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "12px",
        }}>
          <ShieldIcon />
          <span style={{
            fontSize: "18px",
            fontWeight: 700,
            color: "#1a202c",
            letterSpacing: "-0.01em",
          }}>
            CampusGuard
          </span>
        </div>

        {/* Copyright */}
        <p style={{
          fontSize: "13px",
          color: "#8b9bb4",
          margin: 0,
        }}>
          © 2026 HackStars. Protecting students from placement scams.
        </p>
      </footer>

    </div>
  );
}
