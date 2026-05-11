import { useState, useEffect } from "react";


const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .auth-root {
    min-height: 100vh;
    background: #060b14;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'DM Sans', sans-serif;
    position: relative;
    overflow: hidden;
    padding: 24px;
  }

  /* Animated background grid */
  .auth-root::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(30,80,200,0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(30,80,200,0.07) 1px, transparent 1px);
    background-size: 48px 48px;
    mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
  }

  /* Blue glow orbs */
  .glow-1 {
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(29,78,216,0.18) 0%, transparent 65%);
    top: -100px;
    right: -80px;
    pointer-events: none;
    animation: pulseGlow 6s ease-in-out infinite;
  }
  .glow-2 {
    position: absolute;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 65%);
    bottom: -80px;
    left: -60px;
    pointer-events: none;
    animation: pulseGlow 8s ease-in-out infinite reverse;
  }

  @keyframes pulseGlow {
    0%, 100% { opacity: 0.7; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.08); }
  }

  /* Card */
  .auth-card {
    position: relative;
    z-index: 10;
    width: 100%;
    max-width: 440px;
    background: rgba(8,15,30,0.85);
    border: 1px solid rgba(30,80,200,0.25);
    border-radius: 20px;
    padding: 44px 40px;
    backdrop-filter: blur(20px);
    box-shadow:
      0 0 0 1px rgba(255,255,255,0.04) inset,
      0 32px 80px rgba(0,0,0,0.6),
      0 0 60px rgba(29,78,216,0.08);
    animation: cardIn 0.6s cubic-bezier(0.22,1,0.36,1) both;
  }

  @keyframes cardIn {
    from { opacity: 0; transform: translateY(28px) scale(0.97); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  /* Logo */
  .logo-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 32px;
    justify-content: center;
  }
  .logo-text {
    font-family: 'Syne', sans-serif;
    font-size: 22px;
    font-weight: 800;
    color: #fff;
    letter-spacing: -0.02em;
  }

  /* Tab switcher */
  .tab-row {
    display: flex;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 10px;
    padding: 4px;
    margin-bottom: 32px;
    gap: 4px;
  }
  .tab-btn {
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 8px;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.25s ease;
    letter-spacing: 0.01em;
  }
  .tab-btn.active {
    background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
    color: #fff;
    box-shadow: 0 4px 16px rgba(29,78,216,0.4);
  }
  .tab-btn.inactive {
    background: transparent;
    color: #64748b;
  }
  .tab-btn.inactive:hover { color: #94a3b8; }

  /* Heading */
  .auth-heading {
    font-family: 'Syne', sans-serif;
    font-size: 26px;
    font-weight: 800;
    color: #fff;
    letter-spacing: -0.02em;
    margin-bottom: 6px;
  }
  .auth-sub {
    font-size: 13.5px;
    color: #4a6080;
    margin-bottom: 28px;
    line-height: 1.6;
  }

  /* Form */
  .field {
    margin-bottom: 18px;
    animation: fieldIn 0.4s ease both;
  }
  @keyframes fieldIn {
    from { opacity: 0; transform: translateX(-8px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  .field label {
    display: block;
    font-size: 12.5px;
    font-weight: 600;
    color: #7a92b4;
    margin-bottom: 7px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
  .field-wrap {
    position: relative;
  }
  .field-wrap .icon {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: #3b5a8a;
    pointer-events: none;
  }
  .field input {
    width: 100%;
    padding: 13px 14px 13px 42px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 10px;
    color: #e2e8f0;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  }
  .field input::placeholder { color: #2d4a6a; }
  .field input:focus {
    border-color: rgba(29,78,216,0.6);
    background: rgba(29,78,216,0.06);
    box-shadow: 0 0 0 3px rgba(29,78,216,0.12);
  }

  /* Forgot */
  .forgot-row {
    text-align: right;
    margin-top: -10px;
    margin-bottom: 18px;
  }
  .forgot-row a {
    font-size: 12.5px;
    color: #3b82f6;
    text-decoration: none;
    transition: color 0.2s;
  }
  .forgot-row a:hover { color: #60a5fa; }

  /* Submit */
  .submit-btn {
    width: 100%;
    padding: 15px;
    background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
    color: #fff;
    border: none;
    border-radius: 10px;
    font-family: 'Syne', sans-serif;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    letter-spacing: 0.02em;
    transition: all 0.2s ease;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 24px rgba(29,78,216,0.35);
    margin-top: 4px;
  }
  .submit-btn::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.2s;
  }
  .submit-btn:hover { transform: translateY(-1px); box-shadow: 0 8px 32px rgba(29,78,216,0.5); }
  .submit-btn:hover::after { opacity: 1; }
  .submit-btn:active { transform: translateY(0); }

  /* Divider */
  .divider {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 22px 0;
    color: #1e3050;
    font-size: 12px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  .divider::before, .divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(255,255,255,0.06);
  }

  /* Social buttons */
  .social-row { display: flex; gap: 10px; }
  .social-btn {
    flex: 1;
    padding: 11px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 10px;
    color: #94a3b8;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.2s ease;
  }
  .social-btn:hover {
    background: rgba(255,255,255,0.07);
    border-color: rgba(255,255,255,0.12);
    color: #e2e8f0;
  }

  /* Terms */
  .terms {
    font-size: 11.5px;
    color: #2d4a6a;
    text-align: center;
    margin-top: 20px;
    line-height: 1.6;
  }
  .terms a { color: #3b82f6; text-decoration: none; }
  .terms a:hover { text-decoration: underline; }

  /* Shield glow effect */
  .shield-icon path { filter: drop-shadow(0 0 6px rgba(99,148,255,0.5)); }
`;

const ShieldIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="shield-icon">
    <path d="M12 2L3 6V12C3 16.418 7.03 20.618 12 22C16.97 20.618 21 16.418 21 12V6L12 2Z"
      stroke="#3b82f6" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(29,78,216,0.15)" />
    <path d="M9 12l2 2 4-4" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/>
  </svg>
);
const LockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);
const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
  </svg>
);
const GoogleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

export default function AuthPage() {
  const [tab, setTab] = useState("login");
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    alert(tab === "login" ? `Welcome back, ${form.email}!` : `Account created for ${form.name}!`);
  };

  // Re-animate fields on tab switch
  const [key, setKey] = useState(0);
  const switchTab = (t) => { setTab(t); setKey(k => k + 1); };

  return (
    <>
      <style>{styles}</style>
      <div className="auth-root">
        <div className="glow-1" />
        <div className="glow-2" />

        <div className="auth-card">
          {/* Logo */}
          <div className="logo-row">
            <ShieldIcon size={28} />
            <span className="logo-text">SusScan</span>
          </div>

          {/* Tabs */}
          <div className="tab-row">
            <button className={`tab-btn ${tab === "login" ? "active" : "inactive"}`} onClick={() => switchTab("login")}>
              Sign In
            </button>
            <button className={`tab-btn ${tab === "register" ? "active" : "inactive"}`} onClick={() => switchTab("register")}>
              Create Account
            </button>
          </div>

          {/* Heading */}
          <div className="auth-heading">
            {tab === "login" ? "Welcome back" : "Join TruOffer"}
          </div>
          <div className="auth-sub">
            {tab === "login"
              ? "Verify your placement offers. Stay protected."
              : "Start protecting your future from placement scams."}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} key={key}>
            {tab === "register" && (
              <div className="field" style={{ animationDelay: "0s" }}>
                <label>Full Name</label>
                <div className="field-wrap">
                  <span className="icon"><UserIcon /></span>
                  <input name="name" type="text" placeholder="John Doe" value={form.name} onChange={handleChange} required />
                </div>
              </div>
            )}

            <div className="field" style={{ animationDelay: tab === "register" ? "0.06s" : "0s" }}>
              <label>Email Address</label>
              <div className="field-wrap">
                <span className="icon"><MailIcon /></span>
                <input name="email" type="email" placeholder="you@university.edu" value={form.email} onChange={handleChange} required />
              </div>
            </div>

            <div className="field" style={{ animationDelay: tab === "register" ? "0.12s" : "0.06s" }}>
              <label>Password</label>
              <div className="field-wrap">
                <span className="icon"><LockIcon /></span>
                <input name="password" type="password" placeholder="••••••••" value={form.password} onChange={handleChange} required />
              </div>
            </div>

            {tab === "register" && (
              <div className="field" style={{ animationDelay: "0.18s" }}>
                <label>Confirm Password</label>
                <div className="field-wrap">
                  <span className="icon"><LockIcon /></span>
                  <input name="confirm" type="password" placeholder="••••••••" value={form.confirm} onChange={handleChange} required />
                </div>
              </div>
            )}

            {tab === "login" && (
              <div className="forgot-row">
                <a href="#">Forgot password?</a>
              </div>
            )}

            <button type="submit" className="submit-btn">
              {tab === "login" ? "Sign In →" : "Create Account →"}
            </button>
          </form>

          {/* Divider */}
          <div className="divider">or continue with</div>

          {/* Social */}
          <div className="social-row">
            <button className="social-btn" type="button">
              <GoogleIcon /> Google
            </button>
            <button className="social-btn" type="button">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#94a3b8">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </button>
          </div>

          {/* Terms (register only) */}
          {tab === "register" && (
            <p className="terms">
              By creating an account you agree to our{" "}
              <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
