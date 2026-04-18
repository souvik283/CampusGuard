import { useState, useEffect, useRef } from "react";

const API_BASE = "http://localhost:8000";

/* ══════════════════════════════════════════════
   SHARED ICONS
══════════════════════════════════════════════ */

const ShieldIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 2L3 6V12C3 16.418 7.03 20.618 12 22C16.97 20.618 21 16.418 21 12V6L12 2Z"
      stroke="#3b82f6" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(29,78,216,0.15)" />
    <path d="M9 12l2 2 4-4" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const BackIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
);

const GoogleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const MailIcon = ({ color = "currentColor" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 7l10 7 10-7" />
  </svg>
);
const LockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
const UserIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);

const CheckCircleIcon = ({ size = 22, color = "#22c55e" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.5" />
    <path d="M8 12l3 3 5-5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const XCircleIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#ef4444" fillOpacity="0.15" stroke="#ef4444" strokeWidth="1.5" />
    <path d="M15 9l-6 6M9 9l6 6" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CheckCircleSm = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="8" cy="8" r="7" stroke="#2563EB" strokeWidth="1.2" />
    <path d="M5 8L7 10L11 6" stroke="#2563EB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ══════════════════════════════════════════════
   LANDING PAGE
══════════════════════════════════════════════ */

const Shield3D = () => (
  <svg width="210" height="210" viewBox="0 0 210 210" fill="none">
    <defs>
      <radialGradient id="sg" cx="38%" cy="28%" r="72%">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="60%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#1e3a8a" />
      </radialGradient>
      <filter id="sf"><feDropShadow dx="0" dy="12" stdDeviation="18" floodColor="#1d4ed8" floodOpacity="0.45" /></filter>
    </defs>
    <path d="M105 16L28 52V106C28 150 65 180 105 194C145 180 182 150 182 106V52L105 16Z"
      fill="url(#sg)" filter="url(#sf)" />
    <path d="M105 16L28 52V106C28 150 65 180 105 194C145 180 182 150 182 106V52L105 16Z"
      fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
    <path d="M80 106L96 121L132 87" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LANDING_FEATURES = [
  { emoji: "🔗", title: "Link Authenticity Checker", desc: "Analyze job URLs for typosquatting, suspicious TLDs, and domain legitimacy.", checks: ["Domain verification", "SSL check", "Scam pattern detection"], color: "#ef4444" },
  { emoji: "💬", title: "Message Scam Detection", desc: "AI identifies pressure tactics, fee requests, and red flags in any message.", checks: ["Urgency tactic detection", "Fee request analysis", "Grammar check"], color: "#f97316" },
  { emoji: "📄", title: "Document & OCR Verify", desc: "Upload offer letters. AI verifies authenticity and flags suspicious clauses.", checks: ["Letterhead analysis", "Terms verification", "Contact validation"], color: "#8b5cf6" },
];

function FCard({ emoji, title, desc, checks, color, delay }) {
  const [show, setShow] = useState(false);
  useEffect(() => { const t = setTimeout(() => setShow(true), delay); return () => clearTimeout(t); }, [delay]);
  return (
    <div style={{ flex: "1 1 270px", maxWidth: 340, background: "white", border: "1px solid #e5e7eb", borderRadius: 18, overflow: "hidden", opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(32px)", transition: "opacity .55s ease, transform .55s ease", boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}>
      <div style={{ height: 7, background: color }} />
      <div style={{ padding: "26px 24px 30px" }}>
        <div style={{ fontSize: 30, marginBottom: 14 }}>{emoji}</div>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: "#111", marginBottom: 10, fontFamily: "'Syne',sans-serif" }}>{title}</h3>
        <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.7, marginBottom: 18 }}>{desc}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {checks.map(c => (
            <div key={c} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12.5, color: "#374151" }}>
              <CheckCircleSm />{c}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LandingPage({ onLogin, onGetStarted }) {

      const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);

  const [vis, setVis] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVis(true), 60); return () => clearTimeout(t); }, []);

  return (
    <div style={{ fontFamily: "'DM Sans',sans-serif", background: "white", minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

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

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
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
          onClick={onLogin}
          // onClick={()=> navigate("/auth")}
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
          onMouseLeave={()=> setHover2(false)}
          onClick={onGetStarted}>
            Get Started
          </button>
        </div>
      </nav>

      <section style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "76px 48px 84px", maxWidth: 1140, margin: "0 auto", gap: 48, flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 440px", opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(24px)", transition: "opacity .6s ease, transform .6s ease" }}>
          <span style={{ display: "inline-block", border: "1px solid #d1d5db", borderRadius: 20, padding: "5px 14px", fontSize: 11, fontWeight: 600, letterSpacing: ".08em", color: "#555", textTransform: "uppercase", marginBottom: 26 }}>Stop Placement Scams</span>
          <h1 style={{ fontSize: 54, fontWeight: 800, lineHeight: 1.07, color: "#111", margin: 0, fontFamily: "'Syne',sans-serif" }}>Verify Job Offers.</h1>
          <h1 style={{ fontSize: 54, fontWeight: 800, lineHeight: 1.07, color: "#2563EB", margin: "0 0 18px", fontFamily: "'Syne',sans-serif" }}>Protect Your Future.</h1>
          <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.76, marginBottom: 36, maxWidth: 420 }}>
            AI-powered scam detection protecting Indian students from fraudulent placement offers. Verify URLs, messages, emails, LinkedIn profiles, and documents instantly.
          </p>
          <div style={{ display: "flex", gap: 12, marginBottom: 52, flexWrap: "wrap" }}>
            <button onClick={onGetStarted} style={{ background: "#2563EB", color: "white", border: "none", padding: "14px 28px", borderRadius: 9, fontSize: 15, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, fontFamily: "'DM Sans',sans-serif" }}>
              Start Verifying Free <ArrowRight />
            </button>
            <button style={{ background: "white", color: "#111", border: "1.5px solid #d1d5db", padding: "14px 28px", borderRadius: 9, fontSize: 15, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>Browse Verified Jobs</button>
          </div>
          
        </div>
        <div style={{ flex: "0 0 auto", opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(24px)", transition: "opacity .7s ease .15s, transform .7s ease .15s" }}>
          <div style={{ width: 340, height: 340, background: "linear-gradient(135deg,#eff6ff,#dbeafe)", borderRadius: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Shield3D />
          </div>
        </div>
      </section>



    </div>
  );
}

/* ══════════════════════════════════════════════
   AUTH PAGE
══════════════════════════════════════════════ */

const authCSS = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
.ar{min-height:100vh;background:#060b14;display:flex;align-items:center;justify-content:center;font-family:'DM Sans',sans-serif;position:relative;overflow:hidden;padding:24px}
.ar::before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(30,80,200,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(30,80,200,.07) 1px,transparent 1px);background-size:48px 48px;mask-image:radial-gradient(ellipse 80% 80% at 50% 50%,black 30%,transparent 100%)}
.g1{position:absolute;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(29,78,216,.18) 0%,transparent 65%);top:-100px;right:-80px;pointer-events:none;animation:pg 6s ease-in-out infinite}
.g2{position:absolute;width:350px;height:350px;border-radius:50%;background:radial-gradient(circle,rgba(14,165,233,.1) 0%,transparent 65%);bottom:-80px;left:-60px;pointer-events:none;animation:pg 8s ease-in-out infinite reverse}
@keyframes pg{0%,100%{opacity:.7;transform:scale(1)}50%{opacity:1;transform:scale(1.08)}}
.ac{position:relative;z-index:10;width:100%;max-width:440px;background:rgba(8,15,30,.88);border:1px solid rgba(30,80,200,.28);border-radius:20px;padding:44px 40px;backdrop-filter:blur(20px);box-shadow:0 0 0 1px rgba(255,255,255,.04) inset,0 32px 80px rgba(0,0,0,.6);animation:ci .6s cubic-bezier(.22,1,.36,1) both}
@keyframes ci{from{opacity:0;transform:translateY(28px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}
.bb{position:absolute;top:18px;left:18px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:8px;padding:7px 14px;color:#64748b;font-size:13px;font-family:'DM Sans',sans-serif;cursor:pointer;display:flex;align-items:center;gap:6px;transition:all .2s}
.bb:hover{background:rgba(255,255,255,.09);color:#94a3b8}
.lr{display:flex;align-items:center;gap:10px;margin-bottom:32px;justify-content:center}
.lt{font-family:'Syne',sans-serif;font-size:22px;font-weight:800;color:#fff;letter-spacing:-.02em}
.tr{display:flex;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:10px;padding:4px;margin-bottom:32px;gap:4px}
.tb{flex:1;padding:10px;border:none;border-radius:8px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:600;cursor:pointer;transition:all .25s}
.tb.on{background:linear-gradient(135deg,#1d4ed8,#1e40af);color:#fff;box-shadow:0 4px 16px rgba(29,78,216,.4)}
.tb.off{background:transparent;color:#64748b}
.tb.off:hover{color:#94a3b8}
.ah{font-family:'Syne',sans-serif;font-size:26px;font-weight:800;color:#fff;letter-spacing:-.02em;margin-bottom:6px}
.as{font-size:13.5px;color:#4a6080;margin-bottom:28px;line-height:1.6}
.fl{margin-bottom:18px;animation:fi .4s ease both}
@keyframes fi{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)}}
.fl label{display:block;font-size:12px;font-weight:600;color:#7a92b4;margin-bottom:7px;letter-spacing:.04em;text-transform:uppercase}
.fw{position:relative}
.fw .ic{position:absolute;left:14px;top:50%;transform:translateY(-50%);color:#3b5a8a;pointer-events:none}
.fw input{width:100%;padding:13px 14px 13px 44px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;color:#e2e8f0;font-family:'DM Sans',sans-serif;font-size:14px;outline:none;transition:all .2s}
.fw input::placeholder{color:#2d4a6a}
.fw input:focus{border-color:rgba(29,78,216,.6);background:rgba(29,78,216,.06);box-shadow:0 0 0 3px rgba(29,78,216,.12)}
.fr{text-align:right;margin-top:-10px;margin-bottom:18px}
.fr a{font-size:12.5px;color:#3b82f6;text-decoration:none}
.fr a:hover{color:#60a5fa}
.sb{width:100%;padding:15px;background:linear-gradient(135deg,#1d4ed8,#1e40af);color:#fff;border:none;border-radius:10px;font-family:'Syne',sans-serif;font-size:15px;font-weight:700;cursor:pointer;letter-spacing:.02em;transition:all .2s;box-shadow:0 4px 24px rgba(29,78,216,.35);margin-top:4px}
.sb:hover{transform:translateY(-1px);box-shadow:0 8px 32px rgba(29,78,216,.5)}
.dv{display:flex;align-items:center;gap:12px;margin:22px 0;color:#1e3050;font-size:12px;letter-spacing:.06em;text-transform:uppercase}
.dv::before,.dv::after{content:'';flex:1;height:1px;background:rgba(255,255,255,.06)}
.sr{display:flex;gap:10px}
.soc{flex:1;padding:11px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:10px;color:#94a3b8;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:500;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;transition:all .2s}
.soc:hover{background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.12);color:#e2e8f0}
.tm{font-size:11.5px;color:#2d4a6a;text-align:center;margin-top:20px;line-height:1.6}
.tm a{color:#3b82f6;text-decoration:none}
`;

function AuthPage({ initialTab = "login", onBack }) {
  const [tab, setTab] = useState(initialTab);
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [key, setKey] = useState(0);
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const switchTab = t => { setTab(t); setKey(k => k + 1); };
  const handleSubmit = e => { e.preventDefault(); alert(tab === "login" ? `Welcome back, ${form.email}!` : `Account created for ${form.name}!`); };

  return (
    <>
      <style>{authCSS}</style>
      <div className="ar">
        <div className="g1" /><div className="g2" />
        <button className="bb" onClick={onBack}><BackIcon /> Back</button>
        <div className="ac">
          <div className="lr"><ShieldIcon size={28} /><span className="lt">TruOffer</span></div>
          <div className="tr">
            <button className={`tb ${tab === "login" ? "on" : "off"}`} onClick={() => switchTab("login")}>Sign In</button>
            <button className={`tb ${tab === "register" ? "on" : "off"}`} onClick={() => switchTab("register")}>Create Account</button>
          </div>
          <div className="ah">{tab === "login" ? "Welcome back" : "Join TruOffer"}</div>
          <div className="as">{tab === "login" ? "Verify your placement offers. Stay protected." : "Start protecting your future from placement scams."}</div>
          <form onSubmit={handleSubmit} key={key}>
            {tab === "register" && (
              <div className="fl"><label>Full Name</label>
                <div className="fw"><span className="ic"><UserIcon /></span>
                  <input name="name" type="text" placeholder="John Doe" value={form.name} onChange={handleChange} required />
                </div>
              </div>
            )}
            <div className="fl"><label>Email Address</label>
              <div className="fw"><span className="ic"><MailIcon color="#3b5a8a" /></span>
                <input name="email" type="email" placeholder="you@university.edu" value={form.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="fl"><label>Password</label>
              <div className="fw"><span className="ic"><LockIcon /></span>
                <input name="password" type="password" placeholder="••••••••" value={form.password} onChange={handleChange} required />
              </div>
            </div>
            {tab === "register" && (
              <div className="fl"><label>Confirm Password</label>
                <div className="fw"><span className="ic"><LockIcon /></span>
                  <input name="confirm" type="password" placeholder="••••••••" value={form.confirm} onChange={handleChange} required />
                </div>
              </div>
            )}
            {tab === "login" && <div className="fr"><a href="#">Forgot password?</a></div>}
            <button type="submit" className="sb">{tab === "login" ? "Sign In →" : "Create Account →"}</button>
          </form>
          <div className="dv">or continue with</div>
          <div className="sr">
            <button className="soc" type="button"><GoogleIcon /> Google</button>
            <button className="soc" type="button">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#94a3b8"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              LinkedIn
            </button>
          </div>
          {tab === "register" && <p className="tm">By creating an account you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.</p>}
        </div>
      </div>
    </>
  );
}

/* ══════════════════════════════════════════════
   VERIFY DASHBOARD
══════════════════════════════════════════════ */

const dashCSS = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
.dash-root{min-height:100vh;background:#f1f5f9;font-family:'DM Sans',sans-serif}
.dash-nav{display:flex;align-items:center;justify-content:space-between;padding:15px 40px;background:white;border-bottom:1px solid #e5e7eb;position:sticky;top:0;z-index:50;box-shadow:0 1px 8px rgba(0,0,0,.05)}
.dash-body{max-width:920px;margin:0 auto;padding:38px 24px 80px}
.dash-title{font-family:'Syne',sans-serif;font-size:30px;font-weight:800;color:#0f172a;margin-bottom:5px}
.dash-sub{font-size:14.5px;color:#64748b;margin-bottom:34px}
.tools-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin-bottom:32px}
@media(max-width:680px){.tools-grid{grid-template-columns:repeat(3,1fr)}}
.tool-tab{padding:14px 8px;background:white;border:2px solid #e5e7eb;border-radius:14px;cursor:pointer;text-align:center;transition:all .2s;font-family:'DM Sans',sans-serif}
.tool-tab:hover{border-color:#93c5fd;box-shadow:0 4px 14px rgba(37,99,235,.1);transform:translateY(-2px)}
.tool-tab.active{border-color:#2563EB;background:#eff6ff;box-shadow:0 4px 18px rgba(37,99,235,.18);transform:translateY(-2px)}
.t-emoji{font-size:24px;margin-bottom:7px;display:block}
.t-label{font-size:11px;font-weight:600;color:#374151;line-height:1.3}
.tool-tab.active .t-label{color:#1d4ed8}
.form-card{background:white;border-radius:18px;padding:30px;border:1px solid #e5e7eb;box-shadow:0 2px 16px rgba(0,0,0,.05);animation:fadeUp .4s ease both}
.form-card h2{font-family:'Syne',sans-serif;font-size:19px;font-weight:800;color:#0f172a;margin-bottom:4px}
.fc-sub{font-size:13px;color:#64748b;margin-bottom:26px}
.inp-label{display:block;font-size:11.5px;font-weight:600;color:#475569;margin-bottom:8px;letter-spacing:.04em;text-transform:uppercase}
.inp-wrap{margin-bottom:20px}
.inp-wrap input,.inp-wrap textarea{width:100%;padding:13px 15px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:11px;font-family:'DM Sans',sans-serif;font-size:14px;color:#0f172a;outline:none;transition:all .2s;resize:vertical}
.inp-wrap input:focus,.inp-wrap textarea:focus{border-color:#2563EB;background:white;box-shadow:0 0 0 3px rgba(37,99,235,.1)}
.inp-wrap textarea{min-height:130px}
.inp-wrap input::placeholder,.inp-wrap textarea::placeholder{color:#94a3b8}
.upload-zone{border:2px dashed #cbd5e1;border-radius:14px;padding:38px 24px;text-align:center;cursor:pointer;transition:all .2s;background:#f8fafc;margin-bottom:20px}
.upload-zone:hover,.upload-zone.drag{border-color:#2563EB;background:#eff6ff}
.upload-zone.has-file{border-color:#22c55e;background:#f0fdf4}
.uz-icon{font-size:36px;margin-bottom:9px}
.uz-text{font-size:14px;color:#64748b;font-weight:500}
.uz-hint{font-size:12px;color:#94a3b8;margin-top:4px}
.verify-btn{width:100%;padding:15px;background:linear-gradient(135deg,#2563EB,#1d4ed8);color:white;border:none;border-radius:11px;font-family:'Syne',sans-serif;font-size:15px;font-weight:700;cursor:pointer;transition:all .2s;box-shadow:0 4px 20px rgba(37,99,235,.35);display:flex;align-items:center;justify-content:center;gap:10px}
.verify-btn:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 8px 28px rgba(37,99,235,.45)}
.verify-btn:disabled{opacity:.6;cursor:not-allowed}
.spin-icon{animation:spin 1s linear infinite}
.result-card{margin-top:26px;border-radius:16px;overflow:hidden;border:1.5px solid #e5e7eb;animation:fadeUp .4s ease both}
.rc-header{padding:18px 22px;display:flex;align-items:center;gap:10px}
.rc-header.safe{background:#f0fdf4;border-bottom:1px solid #bbf7d0}
.rc-header.danger{background:#fef2f2;border-bottom:1px solid #fecaca}
.rc-header.warning{background:#fffbeb;border-bottom:1px solid #fde68a}
.rc-title{font-family:'Syne',sans-serif;font-size:16px;font-weight:800}
.rc-title.safe{color:#15803d}.rc-title.danger{color:#dc2626}.rc-title.warning{color:#d97706}
.rc-body{padding:20px 22px;background:white}
.rc-body pre{font-family:'DM Sans',sans-serif;font-size:13.5px;color:#334155;white-space:pre-wrap;line-height:1.78}
.rc-badge{display:inline-flex;align-items:center;gap:5px;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:700;margin-left:auto;flex-shrink:0}
.rc-badge.safe{background:#dcfce7;color:#15803d}.rc-badge.danger{background:#fee2e2;color:#dc2626}.rc-badge.warning{background:#fef9c3;color:#854d0e}
.err-box{margin-top:18px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:12px;padding:14px 18px;color:#dc2626;font-size:13.5px;display:flex;align-items:center;gap:9px}
.info-strip{margin-top:26px;display:flex;gap:12px;flex-wrap:wrap}
.info-badge{display:flex;align-items:center;gap:7px;background:white;border:1px solid #e5e7eb;border-radius:10px;padding:9px 14px;font-size:12.5px;color:#475569;font-weight:500}
`;

const TOOLS = [
  { id: "url", emoji: "🔗", label: "Verify URL", endpoint: "/verify-url", field: "url", type: "url", placeholder: "https://jobs.company.com/apply", hint: "Paste any job posting or company URL to check for scam signals" },
  { id: "text", emoji: "💬", label: "Analyze Text", endpoint: "/analyze-text", field: "text", type: "textarea", placeholder: "Paste the recruitment message, email body, or WhatsApp message here...", hint: "Paste any suspicious recruitment message or email content" },
  { id: "ocr", emoji: "🖼️", label: "Scan Document", endpoint: "/ocr-analyze", field: "file", type: "file", hint: "Upload an offer letter, appointment letter, or any document image (JPG, PNG, PDF)" },
  { id: "email", emoji: "📧", label: "Verify Email", endpoint: "/verify-email", field: "email", type: "email", placeholder: "hr@company.com", hint: "Check if a recruiter's email address belongs to a legitimate company" },
  { id: "linkedin", emoji: "💼", label: "Check Profile", endpoint: "/verify-linkedin", field: "profile_url", type: "url", placeholder: "https://linkedin.com/in/recruiter-name", hint: "Verify a LinkedIn recruiter profile for authenticity" },
  { id: "li-url", emoji: "🌐", label: "Company Page", endpoint: "/verify-linkedin-url", field: "url", type: "url", placeholder: "https://linkedin.com/company/companyname", hint: "Verify a company's LinkedIn page is legitimate" },
];

function ResultDisplay({ result }) {
  if (!result) return null;
  const text = typeof result === "string" ? result : JSON.stringify(result, null, 2);
  const lower = text.toLowerCase();
  const isSafe = lower.includes("legitimate") || lower.includes("safe") || lower.includes("verified") || lower.includes("genuine") || lower.includes("authentic") || lower.includes("real");
  const isDanger = lower.includes("scam") || lower.includes("fraud") || lower.includes("suspicious") || lower.includes("fake") || lower.includes("danger") || lower.includes("malicious") || lower.includes("phishing");
  const status = isDanger ? "danger" : isSafe ? "safe" : "warning";
  const label = isDanger ? "⚠️ Suspicious / High Risk" : isSafe ? "✅ Appears Legitimate" : "🔍 Analysis Complete";

  return (
    <div className="result-card">
      <div className={`rc-header ${status}`}>
        {isDanger ? <XCircleIcon size={22} /> : <CheckCircleIcon size={22} color={isSafe ? "#22c55e" : "#d97706"} />}
        <span className={`rc-title ${status}`}>{label}</span>
        <span className={`rc-badge ${status}`}>{status === "danger" ? "High Risk" : status === "safe" ? "Low Risk" : "Review"}</span>
      </div>
      <div className="rc-body"><pre>{text}</pre></div>
    </div>
  );
}

function VerifyDashboard({ onBack }) {
  const [activeTool, setActiveTool] = useState(TOOLS[0]);
  const [inputVal, setInputVal] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [drag, setDrag] = useState(false);
  const fileRef = useRef();

  const switchTool = t => { setActiveTool(t); setInputVal(""); setFile(null); setResult(null); setError(null); };

  const handleSubmit = async () => {
    setLoading(true); setResult(null); setError(null);
    try {
      let response;
      if (activeTool.type === "file") {
        if (!file) { setError("Please select a file to upload."); setLoading(false); return; }
        const fd = new FormData();
        fd.append("file", file);
        response = await fetch(`${API_BASE}${activeTool.endpoint}`, { method: "POST", body: fd });
      } else {
        if (!inputVal.trim()) { setError("Please fill in the field before verifying."); setLoading(false); return; }
        response = await fetch(`${API_BASE}${activeTool.endpoint}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ [activeTool.field]: inputVal.trim() }),
        });
      }
      if (!response.ok) throw new Error(`Server error ${response.status}: ${response.statusText}`);
      const data = await response.json();
      setResult(data);
    } catch (e) {
      setError(e.message || "Something went wrong. Make sure your API server is running at " + API_BASE);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{dashCSS}</style>
      <div className="dash-root">
        <nav className="dash-nav">
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <ShieldIcon size={24} />
            <span style={{ fontSize: 18, fontWeight: 800, color: "#111", fontFamily: "'Syne',sans-serif" }}>CampusGuard</span>
            <span style={{ marginLeft: 8, background: "#eff6ff", color: "#2563eb", fontSize: 10.5, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>VERIFY DASHBOARD</span>
          </div>
          <button onClick={onBack} style={{ background: "none", border: "1.5px solid #e5e7eb", borderRadius: 9, padding: "7px 16px", cursor: "pointer", fontSize: 13.5, color: "#555", fontFamily: "'DM Sans',sans-serif", display: "flex", alignItems: "center", gap: 6, fontWeight: 500 }}>
            <BackIcon /> Back to Home
          </button>
        </nav>

        <div className="dash-body">
          <div style={{ animation: "fadeUp .5s ease both" }}>
            <div className="dash-title">Verify Your Placement Offer</div>
            <div className="dash-sub">Select a tool below and fill in the details — at least one input is required to run a check.</div>
          </div>

          {/* Tool selector */}
          <div className="tools-grid">
            {TOOLS.map(t => (
              <button key={t.id} className={`tool-tab ${activeTool.id === t.id ? "active" : ""}`} onClick={() => switchTool(t)}>
                <span className="t-emoji">{t.emoji}</span>
                <span className="t-label">{t.label}</span>
              </button>
            ))}
          </div>

          {/* Form */}
          <div className="form-card">
            <h2>{activeTool.emoji} {activeTool.label}</h2>
            <div className="fc-sub">{activeTool.hint}</div>

            {activeTool.type === "file" ? (
              <div
                className={`upload-zone ${drag ? "drag" : ""} ${file ? "has-file" : ""}`}
                onClick={() => fileRef.current.click()}
                onDragOver={e => { e.preventDefault(); setDrag(true); }}
                onDragLeave={() => setDrag(false)}
                onDrop={e => { e.preventDefault(); setDrag(false); const f = e.dataTransfer.files[0]; if (f) setFile(f); }}
              >
                <input ref={fileRef} type="file" accept="image/*,.pdf" style={{ display: "none" }} onChange={e => setFile(e.target.files[0])} />
                <div className="uz-icon">{file ? "✅" : "📁"}</div>
                <div className="uz-text">{file ? file.name : "Drop your document here, or click to browse"}</div>
                <div className="uz-hint">{file ? `${(file.size / 1024).toFixed(1)} KB — ready to upload` : "Supports JPG, PNG, PDF · Max 10 MB"}</div>
              </div>
            ) : (
              <div className="inp-wrap">
                <label className="inp-label">
                  {activeTool.id === "text" ? "Message / Email Content" : activeTool.id === "email" ? "Email Address" : "URL / Link"}
                </label>
                {activeTool.type === "textarea"
                  ? <textarea placeholder={activeTool.placeholder} value={inputVal} onChange={e => setInputVal(e.target.value)} rows={6} />
                  : <input type={activeTool.type === "email" ? "email" : "text"} placeholder={activeTool.placeholder} value={inputVal} onChange={e => setInputVal(e.target.value)} />
                }
              </div>
            )}

            <button className="verify-btn" onClick={handleSubmit} disabled={loading}>
              {loading
                ? <><svg className="spin-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg> Analyzing...</>
                : <>{activeTool.emoji} Run Verification</>
              }
            </button>

            {error && <div className="err-box"><XCircleIcon size={18} /> {error}</div>}
            <ResultDisplay result={result} />
          </div>

          <div className="info-strip">
            {[["🔒", "Your data is never stored"], ["⚡", "Results in under 5 seconds"], ["🤖", "Powered by Gemini AI"]].map(([e, t]) => (
              <div key={t} className="info-badge"><span>{e}</span>{t}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ══════════════════════════════════════════════
   ROOT ROUTER
══════════════════════════════════════════════ */

export default function TruOfferApp() {
  const [page, setPage] = useState("landing");

  if (page === "login" || page === "register") return <AuthPage initialTab={page} onBack={() => setPage("landing")} />;
  if (page === "verify") return <VerifyDashboard onBack={() => setPage("landing")} />;
  return <LandingPage onLogin={() => setPage("login")} onGetStarted={() => setPage("verify")} />;
}