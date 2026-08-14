import React from "react";

interface EkataMotorsLogoProps {
  className?: string;
  variant?: "dark" | "light"; // 'dark' = navbar/dark bg, 'light' = white/light bg
  height?: number;
}

export const EkataMotorsLogo: React.FC<EkataMotorsLogoProps> = ({
  className = "",
  variant = "dark",
  height = 42,
}) => {
  // On dark backgrounds (navbar), dark navy parts become bright blue/light slate for crisp contrast
  const colorE = variant === "dark" ? "#38BDF8" : "#001A52";
  const colorK = variant === "dark" ? "#0284C7" : "#0047BA";
  const colorT = variant === "dark" ? "#06B6D4" : "#00A3A6";
  const colorA2 = variant === "dark" ? "#34D399" : "#10B981";
  const colorMotors = variant === "dark" ? "#F1F5F9" : "#001A52";
  const lineLeftColor = variant === "dark" ? "#0284C7" : "#0038A8";
  const lineRightColor = variant === "dark" ? "#34D399" : "#10B981";

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        height={height}
        viewBox="0 0 310 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-full"
        style={{ display: "block" }}
      >
        <defs>
          {/* Gradient for Emblem Left Wedge */}
          <linearGradient
            id="emblemLeftGrad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor={variant === "dark" ? "#38BDF8" : "#0052CC"}
            />
            <stop
              offset="100%"
              stopColor={variant === "dark" ? "#0284C7" : "#0077E6"}
            />
          </linearGradient>

          {/* Gradient for Emblem Right Wedge */}
          <linearGradient
            id="emblemRightGrad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor={variant === "dark" ? "#06B6D4" : "#00A3B4"}
            />
            <stop
              offset="100%"
              stopColor={variant === "dark" ? "#34D399" : "#10B981"}
            />
          </linearGradient>

          {/* Gradient for Emblem Bottom Wedge */}
          <linearGradient
            id="emblemBottomGrad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              stopColor={variant === "dark" ? "#0284C7" : "#0066E0"}
            />
            <stop
              offset="50%"
              stopColor={variant === "dark" ? "#0891B2" : "#00A0B0"}
            />
            <stop
              offset="100%"
              stopColor={variant === "dark" ? "#34D399" : "#10B981"}
            />
          </linearGradient>
        </defs>

        {/* ==================== 1. STYLIZED 'E' ==================== */}
        {/* 3 floating horizontal bars with chamfered/angled edges */}
        <g fill={colorE}>
          {/* Top bar: top-left angled cut */}
          <path d="M 22 10 L 62 10 C 63.5 10 64 11 64 12.5 L 64 16.5 C 64 18 63 18 62 18 L 10 18 Z" />
          {/* Middle bar: flat horizontal */}
          <path d="M 10 27 L 54 27 C 55.5 27 56 28 56 29.5 L 56 33.5 C 56 35 55 35 54 35 L 10 35 Z" />
          {/* Bottom bar: bottom-left angled cut */}
          <path d="M 10 44 L 62 44 C 63 44 64 44 64 45.5 L 64 49.5 C 64 51 63.5 52 62 52 L 22 52 Z" />
        </g>

        {/* ==================== 2. STYLIZED 'K' ==================== */}
        <g fill={colorK}>
          {/* Vertical Stem */}
          <rect x="74" y="10" width="8" height="42" rx="1.5" />
          {/* Upper & Lower Diagonal Arms */}
          <path d="M 82 28 L 109 11.5 C 111 10 113 11.5 111.5 13.5 L 93 29 L 112 48.5 C 113.5 50.5 111.5 52 109.5 50.5 L 82 33 Z" />
        </g>

        {/* ==================== 3. CENTRAL EMBLEM 'A' ==================== */}
        {/* 3-piece triangular emblem with Y-channel negative space */}
        <g>
          {/* Left Wedge (Blue) */}
          <path
            d="M 141 12 C 141.5 11 142.5 11 143 12 L 123 47 C 122.5 48 122 48.5 121 48 L 121 48 C 120.5 47.5 120.5 46.5 121 45.5 L 138 15 Z"
            fill="url(#emblemLeftGrad)"
          />
          <path
            d="M 143 13 L 124 47 L 142 34.5 Z"
            fill="url(#emblemLeftGrad)"
          />

          {/* Right Wedge (Green) */}
          <path
            d="M 145 13 L 164 47 L 146 34.5 Z"
            fill="url(#emblemRightGrad)"
          />

          {/* Bottom Wedge (Cyan/Green Gradient) */}
          <path
            d="M 126 50.5 L 162 50.5 L 144 38 Z"
            fill="url(#emblemBottomGrad)"
          />
        </g>

        {/* ==================== 4. STYLIZED 'T' ==================== */}
        <g fill={colorT}>
          {/* Top Horizontal Bar */}
          <rect x="174" y="10" width="38" height="7.5" rx="1" />
          {/* Vertical Stem */}
          <rect x="189" y="10" width="8" height="42" rx="1" />
        </g>

        {/* ==================== 5. STYLIZED CHEVRON 'A' ==================== */}
        {/* Inverted V with no crossbar */}
        <g fill={colorA2}>
          <path d="M 239 10 C 240.5 10 241.5 11 242 12.5 L 263 49.5 C 263.5 51 262 52 260 52 C 258.5 52 257.5 51 257 49.5 L 240 19 L 223 49.5 C 222.5 51 221.5 52 220 52 C 218 52 216.5 51 217 49.5 L 238 12.5 C 238.5 11 239.5 10 239 10 Z" />
        </g>

        {/* ==================== 6. SUBTITLE & LINES ==================== */}
        {/* Left Accent Line */}
        <line
          x1="10"
          y1="67"
          x2="88"
          y2="67"
          stroke={lineLeftColor}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* M O T O R S Text */}
        <text
          x="136"
          y="71"
          fill={colorMotors}
          fontSize="13"
          fontWeight="900"
          fontFamily="Inter, system-ui, -apple-system, sans-serif"
          letterSpacing="7"
        >
          MOTORS
        </text>

        {/* Right Accent Line */}
        <line
          x1="228"
          y1="67"
          x2="300"
          y2="67"
          stroke={lineRightColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
