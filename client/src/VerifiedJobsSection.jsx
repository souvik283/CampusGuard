import { useState, useEffect } from "react";

/* ─── Icons ─────────────────────────────────────────────── */

const CheckCircle = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="8" cy="8" r="7" stroke="#374151" strokeWidth="1.2" />
    <path d="M5 8L7 10L11 6" stroke="#374151" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect width="22" height="22" rx="6" fill="#EFF6FF" />
    <rect x="7" y="9" width="8" height="6" rx="1" stroke="#2563EB" strokeWidth="1.3" />
    <path d="M9 9V8C9 7.45 9.45 7 10 7H12C12.55 7 13 7.45 13 8V9" stroke="#2563EB" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M7 12H15" stroke="#2563EB" strokeWidth="1.1" strokeLinecap="round" />
  </svg>
);

const VerifiedBadge = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="8" cy="8" r="7" fill="#2563EB" />
    <path d="M5 8L7 10L11 6" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8H13M9 4L13 8L9 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── Job Card ───────────────────────────────────────────── */

const jobListings = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "Microsoft India",
    location: "Bangalore",
    description: "Work on cloud infrastructure projects. ₹40,000/month stipend. No registration fees.",
    tags: ["Verified", "Remote"],
  },
  {
    id: 2,
    title: "Data Analyst Intern",
    company: "Infosys",
    location: "Hyderabad",
    description: "Analyze business data and build dashboards. ₹25,000/month stipend. No upfront costs.",
    tags: ["Verified", "On-site"],
  },
  {
    id: 3,
    title: "Product Design Intern",
    company: "Razorpay",
    location: "Mumbai",
    description: "Design user experiences for fintech products. ₹35,000/month. Fully verified listing.",
    tags: ["Verified", "Hybrid"],
  },
];

function JobCard({ title, company, location, description, tags, delay }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div style={{
      background: "white",
      border: "1px solid #e5e7eb",
      borderRadius: 14,
      padding: "20px 22px",
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(20px)",
      transition: "opacity 0.5s ease, transform 0.5s ease",
    }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
        <div style={{ flexShrink: 0, marginTop: 2 }}>
          <BriefcaseIcon />
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: "#111" }}>{title}</span>
            <VerifiedBadge />
          </div>
          <div style={{ fontSize: 13, color: "#6b7280", marginTop: 2 }}>
            {company} • {location}
          </div>
        </div>
      </div>

      {/* Description */}
      <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.6, marginBottom: 14 }}>
        {description}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {tags.map((tag) => (
          <span key={tag} style={{
            display: "inline-block",
            border: "1px solid #d1d5db",
            borderRadius: 6,
            padding: "3px 10px",
            fontSize: 12,
            color: "#374151",
            fontWeight: 500,
          }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── VerifiedJobsSection ────────────────────────────────── */

export default function VerifiedJobsSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section style={{ background: "#f1f5f9", padding: "80px 48px 96px" }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        alignItems: "flex-start",
        gap: 72,
        flexWrap: "wrap",
      }}>

        {/* ── Left: Text Content ── */}
        <div style={{
          flex: "1 1 360px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          {/* Badge */}
          <span style={{
            display: "inline-block",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.1em",
            color: "#374151",
            textTransform: "uppercase",
            marginBottom: 18,
          }}>
            Verified Opportunities
          </span>

          {/* Heading */}
          <h2 style={{
            fontSize: 36,
            fontWeight: 800,
            color: "#111",
            lineHeight: 1.15,
            marginBottom: 16,
            maxWidth: 400,
          }}>
            Browse Admin-Verified Job Listings
          </h2>

          {/* Sub-description */}
          <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, marginBottom: 28, maxWidth: 380 }}>
            Access a curated database of legitimate job openings and internships. Every listing is
            manually verified by our admin team before publication.
          </p>

          {/* Checklist */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
            {[
              "Company authenticity confirmed",
              "No hidden fees or charges",
              "Regular database updates",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#374151" }}>
                <CheckCircle />
                {item}
              </div>
            ))}
          </div>

          {/* CTA Button */}
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
          }}>
            Explore Verified Jobs <ArrowRight />
          </button>
        </div>

        {/* ── Right: Job Cards ── */}
        <div style={{
          flex: "1 1 320px",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}>
          {jobListings.map((job, i) => (
            <JobCard key={job.id} {...job} delay={200 + i * 120} />
          ))}
        </div>

      </div>
    </section>
  );
}
