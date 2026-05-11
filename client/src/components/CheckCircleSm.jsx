import React from 'react'

const CheckCircleSm = () => {
  return (
  <svg width="210" height="210" viewBox="0 0 210 210" fill="none">
    <defs>
      <radialGradient id="sg" cx="38%" cy="28%" r="72%">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="60%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#1e3a8a" />
      </radialGradient>
      <filter id="sf">
        <feDropShadow
          dx="0"
          dy="12"
          stdDeviation="18"
          floodColor="#1d4ed8"
          floodOpacity="0.45"
        />
      </filter>
    </defs>
    <path
      d="M105 16L28 52V106C28 150 65 180 105 194C145 180 182 150 182 106V52L105 16Z"
      fill="url(#sg)"
      filter="url(#sf)"
    />
    <path
      d="M105 16L28 52V106C28 150 65 180 105 194C145 180 182 150 182 106V52L105 16Z"
      fill="none"
      stroke="rgba(255,255,255,0.22)"
      strokeWidth="1.5"
    />
    <path
      d="M80 106L96 121L132 87"
      stroke="white"
      strokeWidth="7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  )
}

export default CheckCircleSm
