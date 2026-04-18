import { useState, useEffect } from "react";
import Auth from "./AuthPage";

const ShieldIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14 2L4 7V14C4 19.5 8.5 24.6 14 26C19.5 24.6 24 19.5 24 14V7L14 2Z"
      stroke="#2563EB"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M9 14L12.5 17.5L19 11"
      stroke="#2563EB"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Shield3D = () => (
  <svg width="220" height="240" viewBox="0 0 220 240" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shieldOuter" x1="60" y1="10" x2="180" y2="230" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#d0e8ff" />
        <stop offset="100%" stopColor="#93c5fd" />
      </linearGradient>
      <linearGradient id="shieldInner" x1="70" y1="30" x2="160" y2="200" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#f0f8ff" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.5" />
      </linearGradient>
      <linearGradient id="gloss" x1="80" y1="20" x2="110" y2="90" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="white" stopOpacity="0.6" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
    {/* Outer shield */}
    <path
      d="M110 10 L32 46 L32 122 C32 172 70 214 110 228 C150 214 188 172 188 122 L188 46 Z"
      fill="url(#shieldOuter)"
      stroke="#93c5fd"
      strokeWidth="2"
    />
    {/* White rim */}
    <path
      d="M110 10 L32 46 L32 122 C32 172 70 214 110 228 C150 214 188 172 188 122 L188 46 Z"
      fill="none"
      stroke="white"
      strokeWidth="3"
      strokeOpacity="0.7"
    />
    {/* Inner shield face */}
    <path
      d="M110 26 L46 58 L46 124 C46 166 76 200 110 212 C144 200 174 166 174 124 L174 58 Z"
      fill="url(#shieldInner)"
      stroke="#bfdbfe"
      strokeWidth="1.5"
    />
    {/* Checkmark shadow */}
    <path
      d="M76 118 L97 140 L146 92"
      stroke="#1d4ed8"
      strokeWidth="12"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity="0.2"
    />
    {/* Checkmark main */}
    <path
      d="M76 118 L97 140 L146 92"
      stroke="#2563EB"
      strokeWidth="9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity="0.9"
    />
    {/* Checkmark highlight */}
    <path
      d="M76 118 L97 140 L146 92"
      stroke="#93c5fd"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity="0.6"
    />
    {/* Gloss highlight */}
    <ellipse cx="88" cy="60" rx="18" ry="8" fill="url(#gloss)" transform="rotate(-30 88 60)" />
  </svg>
);

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8H13M9 4L13 8L9 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


export default function HeroSection() {
  const [visible, setVisible] = useState(false);
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "black", minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      {/* Google Font */}
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&display=swap" rel="stylesheet" />

      {/* Navbar */}
      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 48px",
        boxShadow: "10px 2px 10px  #434343",
        background: "#121212",
        position: "static",
        top: 0,
        zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <ShieldIcon />
          <span style={{ fontSize: 18, fontWeight: 700, color: "#e4e3e3" }}>CampusGuard</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button style={{
            border: "none",
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 500,
            cursor: "pointer",
            backgroundColor: hover1 ? "#2563EB" : "#e9eaed",
            color: hover1 ? "White" : "Black",
            padding: hover1 ? "11px 22px": "9px 20px",
            transition: "0.3s",
          }}
          onMouseEnter={()=> setHover1(true)}
          onMouseLeave={()=> setHover1(false)}
          onClick={()=>{
            <Auth/>
          }}
          >
            Register/ Login
          </button>
          <button style={{
            border: "none",
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 500,
            cursor: "pointer",
            backgroundColor: hover2 ? "#e9eaed" : "#2563EB",
            color: hover2 ? "Black" : "white",
            padding: hover2 ? "11px 22px": "9px 20px",
            transition: "0.3s",
          }}
          onMouseEnter={()=> setHover2(true)}
          onMouseLeave={()=> setHover2(false)}>
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "72px 48px 80px",
        maxWidth: 1200,
        margin: "0 auto",
        gap: 48,
        flexWrap: "wrap",
      }}>
        {/* Left */}
        <div style={{
          flex: "1 1 480px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          {/* Badge */}
          <span style={{
            display: "inline-block",
            border: "1px solid #686869",
            borderRadius: 20,
            padding: "5px 14px",
            fontSize: 11,
            fontWeight: 550,
            letterSpacing: "0.08em",
            color: "#cbcaca",
            textTransform: "uppercase",
            marginBottom: 28,
          }}>
            Stop Placement Scams
          </span>

          {/* Headline */}
          <h1 style={{ fontSize: 54, fontWeight: 800, lineHeight: 1.08, color: "#2563EB", marginBottom: 0 }}>
            Verify Job Offers.
          </h1>
          <h1 style={{ fontSize: 54, fontWeight: 800, lineHeight: 1.08, color: "#b8b8ba", marginBottom: 0 }}>
            Protect Your Future.
          </h1>

          {/* Description */}
          <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.7, marginTop: 20, marginBottom: 36, maxWidth: 420 }}>
            AI-powered scam detection protecting Indian students from fraudulent placement offers. Verify links, messages, and documents instantly with Gemini 3 Flash technology.
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 12, marginBottom: 52, flexWrap: "wrap" }}>
            <button style={{
              background: "#2563EB",
              color: "white",
              border: "none",
              padding: "13px 26px",
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 500,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
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
            }}>
              Start Verifying Free <ArrowRight />
            </button>
            <button style={{
              background: "white",
              color: "#111",
              border: "1.5px solid #d1d5db",
              padding: "13px 26px",
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 500,
              cursor: "pointer",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "#f5f5f8";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(76, 77, 78, 0.4)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "#d1d5db";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(231, 232, 235, 0.3)";
            }}>
              Browse Verified Jobs
            </button>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: 48 }}>
            {[
              { value: "5,000+", label: "Scams Detected" },
              { value: "₹2.5Cr+", label: "Saved for Students" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: 26, fontWeight: 800, color: "#2563EB" }}>{s.value}</div>
                <div style={{ fontSize: 13, color: "#9ca3af", marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Shield */}
        <div style={{
          flex: "0 0 auto",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
        }}>
          <div style={{
            width: 360,
            height: 360,
            background: "#f3f4f6",
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "100%",
          }}>
            <Shield3D />
          </div>
        </div>
      </section>

    </div>
  );
}
