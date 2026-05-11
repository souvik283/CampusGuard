import React from 'react'

const CheckCircleIcon = ({ size = 22, color = "#22c55e" }) => {
  return (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle
      cx="12"
      cy="12"
      r="10"
      fill={color}
      fillOpacity="0.15"
      stroke={color}
      strokeWidth="1.5"
    />
    <path
      d="M8 12l3 3 5-5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  )
};

export default CheckCircleIcon
