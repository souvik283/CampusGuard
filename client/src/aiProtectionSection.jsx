import { useState, useEffect } from "react";

/* ─── Icons ─────────────────────────────────────────────── */

const CheckCircle = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="8" cy="8" r="7" stroke="#2563EB" strokeWidth="1.2" />
    <path d="M5 8L7 10L11 6" stroke="#2563EB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LinkIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect width="22" height="22" rx="5" fill="#EFF6FF" />
    <path d="M9 13L13 9M8 10.5L6.5 12C5.67 12.83 5.67 14.17 6.5 15C7.33 15.83 8.67 15.83 9.5 15L11 13.5M14 11.5L15.5 10C16.33 9.17 16.33 7.83 15.5 7C14.67 6.17 13.33 6.17 12.5 7L11 8.5" stroke="#2563EB" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const MsgIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect width="22" height="22" rx="5" fill="#EFF6FF" />
    <path d="M5 7C5 6.45 5.45 6 6 6H16C16.55 6 17 6.45 17 7V13C17 13.55 16.55 14 16 14H12L9 17V14H6C5.45 14 5 13.55 5 13V7Z" stroke="#2563EB" strokeWidth="1.3" strokeLinejoin="round" />
  </svg>
);

const DocIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect width="22" height="22" rx="5" fill="#EFF6FF" />
    <path d="M7 5H13L17 9V17C17 17.55 16.55 18 16 18H7C6.45 18 6 17.55 6 17V6C6 5.45 6.45 5 7 5Z" stroke="#2563EB" strokeWidth="1.3" strokeLinejoin="round" />
    <path d="M13 5V9H17" stroke="#2563EB" strokeWidth="1.3" strokeLinejoin="round" />
    <path d="M9 13H14M9 11H14" stroke="#2563EB" strokeWidth="1.1" strokeLinecap="round" />
  </svg>
);

/* ─── Illustrations ──────────────────────────────────────── */

const NetworkIllustration = ({ highlightColor = "#ef4444" }) => (
  <svg width="100%" height="180" viewBox="0 0 340 180" fill="none" style={{ display: "block" }}>
    <rect width="340" height="180" fill="#e2e8f0" />
    {[
      [170,90,80,50],[170,90,60,110],[170,90,120,155],[170,90,230,155],
      [170,90,280,110],[170,90,260,50],[170,90,100,20],[170,90,240,20],
      [80,50,40,30],[80,50,120,20],[60,110,30,140],[60,110,100,155],
      [280,110,310,140],[280,110,240,155],[260,50,300,30],[260,50,220,20],
    ].map(([x1,y1,x2,y2], i) => (
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#3b82f6" strokeWidth="1.2" strokeOpacity="0.5" />
    ))}
    {[
      [80,50],[60,110],[120,155],[230,155],[280,110],[260,50],
      [100,20],[240,20],[40,30],[30,140],[310,140],[300,30],[220,20],[120,20],
    ].map(([cx,cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="7" fill="#3b82f6" />
    ))}
    <circle cx="170" cy="90" r="26" fill={highlightColor} fillOpacity="0.15" />
    <circle cx="170" cy="90" r="15" fill={highlightColor} fillOpacity="0.3" />
    <circle cx="170" cy="90" r="8" fill={highlightColor} />
  </svg>
);

const PdfIllustration = () => (
  <svg width="100%" height="180" viewBox="0 0 340 180" fill="none" style={{ display: "block" }}>
    <rect width="340" height="180" fill="#cbd5e1" />
    <rect x="55" y="22" width="230" height="148" rx="12" fill="#1e293b" />
    <rect x="68" y="34" width="204" height="124" rx="7" fill="#0f172a" />
    {[52,66,80,94,108,122].map((y, i) => (
      <rect key={i} x="82" y={y} width={i % 3 === 0 ? 130 : i % 3 === 1 ? 90 : 110} height="6" rx="3" fill="#1d4ed8" fillOpacity="0.55" />
    ))}
    <line x1="20" y1="55" x2="320" y2="148" stroke="#60a5fa" strokeWidth="2.5" strokeOpacity="0.75" />
    <line x1="20" y1="55" x2="320" y2="148" stroke="white" strokeWidth="0.8" strokeOpacity="0.4" />
    <path d="M234 50 L216 58 L216 72 C216 81 223 89 234 92 C245 89 252 81 252 72 L252 58 Z" fill="none" stroke="#60a5fa" strokeWidth="1.8" strokeOpacity="0.8" />
    <path d="M227 71 L231 75 L241 66" stroke="#60a5fa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.95" />
  </svg>
);

/* ─── Feature data ───────────────────────────────────────── */

const features = [
  {
    icon: <LinkIcon />,
    title: "Link Authenticity Checker",
    desc: "Analyze job URLs for typosquatting, suspicious TLDs, and domain legitimacy. Get instant risk assessment.",
    checks: ["Domain verification", "SSL certificate check", "Scam pattern detection"],
    visual: <NetworkIllustration highlightColor="#ef4444" />,
  },
  {
    icon: <MsgIcon />,
    title: "Message Scam Detection",
    desc: "Paste recruitment emails or WhatsApp messages. AI identifies pressure tactics, fee requests, and red flags.",
    checks: ["Urgency tactic detection", "Fee request analysis", "Grammar & legitimacy check"],
    visual: <NetworkIllustration highlightColor="#f97316" />,
  },
  {
    icon: <DocIcon />,
    title: "PDF Document Verification",
    desc: "Upload offer letters and agreements. AI verifies authenticity, checks terms, and flags suspicious clauses.",
    checks: ["Letterhead analysis", "Terms verification", "Contact info validation"],
    visual: <PdfIllustration />,
  },
];

/* ─── Feature Card ───────────────────────────────────────── */

function FeatureCard({ icon, title, desc, checks, visual, delay }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div style={{
      flex: "1 1 280px",
      maxWidth: 380,
      background: "white",
      border: "1px solid #e5e7eb",
      borderRadius: 16,
      overflow: "hidden",
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(28px)",
      transition: "opacity 0.6s ease, transform 0.6s ease",
    }}>
      <div>{visual}</div>
      <div style={{ padding: "24px 24px 28px" }}>
        <div style={{ marginBottom: 14 }}>{icon}</div>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: "#111", marginBottom: 10 }}>{title}</h3>
        <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.65, marginBottom: 18 }}>{desc}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {checks.map((c) => (
            <div key={c} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#374151" }}>
              <CheckCircle />{c}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── AIProtectionSection ────────────────────────────────── */

export default function AIProtectionSection() {
  return (
    <section style={{ background: "#f8fafc", padding: "80px 48px 96px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2 style={{ fontSize: 38, fontWeight: 800, color: "#111", marginBottom: 12 }}>
            AI-Powered Protection
          </h2>
          <p style={{ fontSize: 16, color: "#6b7280" }}>
            Three powerful tools to verify any placement opportunity
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} delay={200 + i * 130} />
          ))}
        </div>
      </div>
    </section>
  );
}