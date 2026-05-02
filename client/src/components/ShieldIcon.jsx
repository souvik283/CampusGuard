import React from 'react'

const ShieldIcon = ({ size = 24 }) => {
  return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2L3 6V12C3 16.418 7.03 20.618 12 22C16.97 20.618 21 16.418 21 12V6L12 2Z"
      stroke="#3b82f6"
      strokeWidth="1.8"
      strokeLinejoin="round"
      fill="rgba(29,78,216,0.15)"
    />
    <path
      d="M9 12l2 2 4-4"
      stroke="#60a5fa"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  )
}

export default ShieldIcon
