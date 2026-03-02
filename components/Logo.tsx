'use client'

interface LogoProps {
  size?: number
  color?: string
}

export default function Logo({ size = 40, color = 'var(--accent)' }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Siddhesh Nampurkar logo mark"
    >
      {/* Orbital ring */}
      <circle
        cx="50"
        cy="50"
        r="46"
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray="2 4"
        opacity="0.5"
      />

      {/* Gold node dot at top of ring */}
      <circle cx="50" cy="4" r="3" fill={color} />

      {/* Hair — swept silhouette */}
      <path
        d="M28 42 C28 28 35 18 50 16 C65 18 72 28 72 42"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M28 38 C26 30 30 20 38 16"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M72 38 C74 30 70 21 62 16"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />

      {/* Face outline */}
      <path
        d="M30 48 C30 36 38 30 50 30 C62 30 70 36 70 48 L70 58 C70 68 62 76 50 76 C38 76 30 68 30 58 Z"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />

      {/* Left glasses lens */}
      <rect
        x="32"
        y="48"
        width="14"
        height="10"
        rx="5"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />

      {/* Right glasses lens */}
      <rect
        x="54"
        y="48"
        width="14"
        height="10"
        rx="5"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />

      {/* Bridge of glasses */}
      <line
        x1="46"
        y1="53"
        x2="54"
        y2="53"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Subtle smile */}
      <path
        d="M43 67 C46 70 54 70 57 67"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Ears */}
      <path
        d="M30 54 C27 54 25 57 27 60 C28 62 30 62 30 60"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M70 54 C73 54 75 57 73 60 C72 62 70 62 70 60"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
