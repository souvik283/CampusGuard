import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';

import ShieldIcon from '../components/ShieldIcon';
import BackIcon from '../components/BackIcon';
import ResultDisplay from '../components/ResultDisplay';
import Navbar from '../components/Navbar';


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
  {
    id: "url",
    emoji: "🔗",
    label: "Verify URL",
    endpoint: "/verify-url",
    field: "url",
    type: "url",
    placeholder: "https://jobs.company.com/apply",
    hint: "Paste any job posting or URL to check for scam signals",
  },
  {
    id: "text",
    emoji: "💬",
    label: "Analyze Text",
    endpoint: "/analyze-text",
    field: "text",
    type: "textarea",
    placeholder:
      "Paste the recruitment message, email body, or WhatsApp message here...",
    hint: "Paste any suspicious recruitment message or email content",
  },
  {
    id: "ocr",
    emoji: "🖼️",
    label: "Scan Document",
    endpoint: "/ocr-analyze",
    field: "file",
    type: "file",
    hint: "Upload an offer letter, appointment letter, or any document image (JPG, PNG, PDF)",
  },
  {
    id: "email",
    emoji: "📧",
    label: "Verify Email",
    endpoint: "/verify-email",
    field: "email",
    type: "email",
    placeholder: "hr@company.com",
    hint: "Check if a recruiter's email address belongs to a legitimate company",
  },
  {
    id: "li-url",
    emoji: "🌐",
    label: "Check Profile",
    endpoint: "/verify-linkedin-url",
    field: "url",
    type: "url",
    placeholder: "https://linkedin.com/company/companyname",
    hint: "Verify a company's LinkedIn page is legitimate",
  },
];






function DashBoard() {
  const [activeTool, setActiveTool] = useState(TOOLS[0]);
  const [inputVal, setInputVal] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [drag, setDrag] = useState(false);
  const fileRef = useRef();

  const switchTool = (t) => {
    setActiveTool(t);
    setInputVal("");
    setFile(null);
    setResult(null);
    setError(null);
  };

  const API_BASE = "https://campusguard-backend.onrender.com";

  const handleSubmit = async () => {
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      let response;
      if (activeTool.type === "file") {
        if (!file) {
          setError("Please select a file to upload.");
          setLoading(false);
          return;
        }
        const fd = new FormData();
        fd.append("file", file);
        response = await fetch(
          `${API_BASE}${activeTool.endpoint}`,
          { method: "POST", body: fd },
        );
      } else {
        if (!inputVal.trim()) {
          setError("Please fill in the field before verifying.");
          setLoading(false);
          return;
        }
        response = await fetch(
          `${"https://campusguard-backend.onrender.com"}${activeTool.endpoint}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ [activeTool.field]: inputVal.trim() }),
          },
        );
      }
      if(!response){
        console.log("hiiii")
      }
      if (!response.ok)
        throw new Error(
       `Server error ${response.status}: ${response.statusText}`,
        );
      const data = await response.json();
      setResult(data);
    } catch (e) {
      setError(
        e.message ||
          "Something went wrong. Make sure your API server is running at " +
            API_BASE,
      );
    } finally {
      setLoading(false);
    }
  };

  const navigate = useNavigate()


  return (
    <>
      <style>{dashCSS}</style>
      <div className="dash-root">
        
        <Navbar/>

        <div className="dash-body">
          <div style={{ animation: "fadeUp .5s ease both" }}>
            <div className="dash-title">Think It's Legit? Check First</div>
            <div className="dash-sub">
              Select a tool below and fill in the details — at least one input
              is required to run a check.
            </div>
          </div>

          {/* Tool selector */}
          <div className="tools-grid">
            {TOOLS.map((t) => (
              <button
                key={t.id}
                className={`tool-tab ${activeTool.id === t.id ? "active" : ""}`}
                onClick={() => switchTool(t)}
              >
                <span className="t-emoji">{t.emoji}</span>
                <span className="t-label">{t.label}</span>
              </button>
            ))}
          </div>

          {/* Form */}
          <div className="form-card">
            <h2>
              {activeTool.emoji} {activeTool.label}
            </h2>
            <div className="fc-sub">{activeTool.hint}</div>

            {activeTool.type === "file" ? (
              <div
                className={`upload-zone ${drag ? "drag" : ""} ${file ? "has-file" : ""}`}
                onClick={() => fileRef.current.click()}
                onDragOver={(e) => {
                  e.preventDefault();
                  setDrag(true);
                }}
                onDragLeave={() => setDrag(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDrag(false);
                  const f = e.dataTransfer.files[0];
                  if (f) setFile(f);
                }}
              >
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*,.pdf"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <div className="uz-icon">{file ? "✅" : "📁"}</div>
                <div className="uz-text">
                  {file
                    ? file.name
                    : "Drop your document here, or click to browse"}
                </div>
                <div className="uz-hint">
                  {file
                    ? `${(file.size / 1024).toFixed(1)} KB — ready to upload`
                    : "Supports JPG, PNG, PDF · Max 10 MB"}
                </div>
              </div>
            ) : (
              <div className="inp-wrap">
                <label className="inp-label">
                  {activeTool.id === "text"
                    ? "Message / Email Content"
                    : activeTool.id === "email"
                      ? "Email Address"
                      : "URL / Link"}
                </label>
                {activeTool.type === "textarea" ? (
                  <textarea
                    placeholder={activeTool.placeholder}
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    rows={6}
                  />
                ) : (
                  <input
                    type={activeTool.type === "email" ? "email" : "text"}
                    placeholder={activeTool.placeholder}
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                  />
                )}
              </div>
            )}

            <button
              className="verify-btn"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg
                    className="spin-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>{" "}
                  Analyzing...
                </>
              ) : (
                <>{activeTool.emoji} Run Verification</>
              )}
            </button>

            {error && (
              <div className="err-box">
                <XCircleIcon size={18} /> {error}
              </div>
            )}
            <ResultDisplay result={result} />
          </div>

          <div className="info-strip">
            {[
              ["🔒", "Your data is never stored"],
              ["⚡", "Results in under 5 seconds"],
              ["🤖", "Powered by Gemini AI"],
            ].map(([e, t]) => (
              <div key={t} className="info-badge">
                <span>{e}</span>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard