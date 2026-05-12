import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ShieldIcon from "./components/ShieldIcon";
import ArrowRight from "./components/ArrowRight";
import BackIcon from "./components/BackIcon";
import GoogleIcon from "./components/GoogleIcon";
import MailIcon from "./components/MailIcon";
import LockIcon from "./components/LockIcon";
import UserIcon from "./components/UserIcon";
import Shield3D from "./components/Shield3D";
import CheckCircleSm from "./components/CheckCircleSm";
import XCircleIcon from "./components/XCircleIcon";


import ResultDisplay from "./components/ResultDisplay";
import Navbar from "./components/Navbar";

const API_BASE = "https://campusguard-backend.onrender.com";

const LANDING_FEATURES = [
  {
    emoji: "🔗",
    title: "Link Authenticity Checker",
    desc: "Analyze job URLs for typosquatting, suspicious TLDs, and domain legitimacy.",
    checks: ["Domain verification", "SSL check", "Scam pattern detection"],
    color: "#ef4444",
  },
  {
    emoji: "💬",
    title: "Message Scam Detection",
    desc: "AI identifies pressure tactics, fee requests, and red flags in any message.",
    checks: [
      "Urgency tactic detection",
      "Fee request analysis",
      "Grammar check",
    ],
    color: "#f97316",
  },
  {
    emoji: "📄",
    title: "Document & OCR Verify",
    desc: "Upload offer letters. AI verifies authenticity and flags suspicious clauses.",
    checks: ["Letterhead analysis", "Terms verification", "Contact validation"],
    color: "#8b5cf6",
  },
];

function FCard({ emoji, title, desc, checks, color, delay }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div
      style={{
        flex: "1 1 270px",
        maxWidth: 340,
        background: "white",
        border: "1px solid #e5e7eb",
        borderRadius: 18,
        overflow: "hidden",
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(32px)",
        transition: "opacity .55s ease, transform .55s ease",
        boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
      }}
    >
      <div style={{ height: 7, background: color }} />
      <div style={{ padding: "26px 24px 30px" }}>
        <div style={{ fontSize: 30, marginBottom: 14 }}>{emoji}</div>
        <h3
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: "#111",
            marginBottom: 10,
            fontFamily: "'Syne',sans-serif",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: 13,
            color: "#6b7280",
            lineHeight: 1.7,
            marginBottom: 18,
          }}
        >
          {desc}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {checks.map((c) => (
            <div
              key={c}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                fontSize: 12.5,
                color: "#374151",
              }}
            >
              <CheckCircleSm />
              {c}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LandingPage() {

  const [vis, setVis] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVis(true), 60);
    return () => clearTimeout(t);
  }, []);


  return (
    <div
      style={{
        fontFamily: "'DM Sans',sans-serif",
        background: "white",
        minHeight: "100vh",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <Navbar/>

      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "76px 48px 84px",
          maxWidth: 1140,
          margin: "0 auto",
          gap: 48,
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            flex: "1 1 440px",
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(24px)",
            transition: "opacity .6s ease, transform .6s ease",
          }}
        >
          <span
            style={{
              display: "inline-block",
              border: "1px solid #d1d5db",
              borderRadius: 20,
              padding: "5px 14px",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: ".08em",
              color: "#555",
              textTransform: "uppercase",
              marginBottom: 26,
            }}
          >
            Verify Anything. Trust Nothing
          </span>
          <h1
            style={{
              fontSize: 65,
              fontWeight: 800,
              lineHeight: 1.27,
              color: "#111",
              margin: 0,
              fontFamily: "ui-sans-serif",
            }}
          >
            Catch Scams Before They Catch You
          </h1>
          <h1
            style={{
              fontSize: 54,
              fontWeight: 800,
              lineHeight: 1.07,
              color: "#2563EB",
              marginTop: "17px",
              marginBottom: "18px",
              fontFamily: "sans-serif",
            }}
          >
            Protect Your Future.
          </h1>
          <p
            style={{
              fontSize: 20,
              color: "#6b7280",
              lineHeight: 1.7,
              marginBottom: 36,
              maxWidth: 490,
            }}
          >
            AI-powered scam detection protecting Indian students from fraudulent
            placement offers. Verify URLs, messages, emails, LinkedIn profiles,
            and documents instantly.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              marginBottom: 52,
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={()=>{

              }}
              style={{
                background: "#2563EB",
                color: "white",
                border: "none",
                padding: "14px 28px",
                borderRadius: 9,
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "'DM Sans',sans-serif",
              }}
              
            >
              Start Verifying Free <ArrowRight />
            </button>
            <button
              style={{
                background: "white",
                color: "#111",
                border: "1.5px solid #d1d5db",
                padding: "14px 28px",
                borderRadius: 9,
                fontSize: 15,
                fontWeight: 500,
                cursor: "pointer",
                fontFamily: "'DM Sans',sans-serif",
              }}
            >
              Browse Verified Jobs
            </button>
          </div>
        </div>
        <div
          style={{
            flex: "0 0 auto",
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(24px)",
            transition: "opacity .7s ease .15s, transform .7s ease .15s",
          }}
        >
          <div
            style={{
              width: 340,
              height: 340,
              background: "linear-gradient(135deg,#eff6ff,#dbeafe)",
              borderRadius: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Shield3D />
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage


