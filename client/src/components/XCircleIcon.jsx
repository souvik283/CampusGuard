import React from 'react'

const XCircleIcon = ({ size = 22 }) => {
  return (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="#ef4444"
      fillOpacity="0.15"
      stroke="#ef4444"
      strokeWidth="1.5"
    />
    <path
      d="M15 9l-6 6M9 9l6 6"
      stroke="#ef4444"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
  )
}

export default XCircleIcon
