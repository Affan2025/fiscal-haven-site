import React from 'react';

export const Logo = ({ className = "", size = 40 }: { className?: string; size?: number }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circle background with gradient */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#33C3F0' }} /> {/* Sky Blue */}
          <stop offset="100%" style={{ stopColor: '#1EAEDB' }} /> {/* Bright Blue */}
        </linearGradient>
      </defs>
      
      {/* Main circle */}
      <circle cx="100" cy="100" r="98" fill="white" stroke="#8E9196" strokeWidth="2" />
      
      {/* World map silhouette */}
      <path
        d="M30 80 Q50 70 70 75 Q90 80 110 70 Q130 60 150 70 Q170 80 180 90 L170 120 Q150 130 130 125 Q110 120 90 130 Q70 140 50 130 L30 80Z"
        fill="#F2FCE2" // Soft Green
        opacity="0.6"
      />
      
      {/* SA Letters */}
      <text
        x="100"
        y="115"
        textAnchor="middle"
        fontSize="60"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
        fill="#0FA0CE" // Bright Blue
      >
        SA
      </text>
    </svg>
  );
};

export default Logo;