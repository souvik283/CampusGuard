import React from 'react'
import XCircleIcon from './XCircleIcon'
import CheckCircleIcon from './CheckCircleIcon'

const ResultDisplay = ({result}) => {

    
if (!result) return null;

  const text =
    typeof result === "string" ? result : JSON.stringify(result, null, 2);

//   console.log(result);

  const score = result.score;
//   console.log(score);
  const lower = text.toLowerCase();
  const isSafe =
    score >= 80 ||
    lower.includes("safe") ||
    lower.includes("verified") ||
    lower.includes("genuine") ||
    lower.includes("authentic") ||
    lower.includes("real");
  const isDanger =
    lower.includes("scam") ||
    lower.includes("fraud") ||
    lower.includes("suspicious") ||
    lower.includes("fake") ||
    lower.includes("danger") ||
    lower.includes("malicious") ||
    lower.includes("phishing");
  const status = isDanger ? "danger" : isSafe ? "safe" : "warning";
  const label = isDanger
    ? "⚠️ Suspicious / High Risk"
    : isSafe
      ? "✅ Appears Legitimate"
      : "🔍 Analysis Complete";

  const reasons = result.reasons || result.ai_flags || result.rule_flags || [];

  return (
    <div className="result-card">
      <div className={`rc-header ${status}`}>
        {isDanger ? (
          <XCircleIcon size={22} />
        ) : (
          <CheckCircleIcon size={22} color={isSafe ? "#22c55e" : "#d97706"} />
        )}
        <span className={`rc-title ${status}`}>{label}</span>
        <span className={`rc-badge ${status}`}>
          {status === "danger"
            ? "High Risk"
            : status === "safe"
              ? "Low Risk"
              : "Review"}
        </span>
      </div>

      {/* editing start */}

      <div className="rc-body">
        <pre>
          {/* Content */}
          <div className="p-4 text-gray-700 space-y-2">
            {/* Dynamic Fields */}
            {result.email && (
              <p>
                <strong>Email:</strong> {result.email}
              </p>
            )}

            {result.url && (
              <p>
                <strong>URL:</strong> {result.url}
              </p>
            )}

            {result.domain && (
              <p>
                <strong>Domain:</strong> {result.domain}
              </p>
            )}

            {result.linkedin_url && (
              <p>
                <strong>LinkedIn:</strong> {result.linkedin_url}
              </p>
            )}

            {result.score !== undefined && (
              <p>
                <strong>Score:</strong>{" "}
                <span className="font-semibold">{result.score}</span>
              </p>
            )}

            {result.status && (
              <p>
                <strong>Status:</strong>{" "}
                <span className={isSafe ? "text-green-600" : "text-red-600"}>
                  {result.status}
                </span>
              </p>
            )}

            {/* Reasons / Flags */}
            {reasons.length > 0 && (
              <div>
                <strong>Reasons:</strong>
                <ul className="list-disc ml-5 mt-1 space-y-1">
                  {reasons.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Summary */}
            {result.summary && (
              <div className="mt-2 p-3 bg-gray-50 rounded-md text-sm">
                <strong>Summary:</strong> {result.summary}
              </div>
            )}
          </div>
        </pre>
      </div>
    </div>
  );
}

export default ResultDisplay
