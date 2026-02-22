
import React from 'react';

const WaterIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 16a5 5 0 01-.962-9.854A5 5 0 0112 6a5 5 0 014.962 4.146A5 5 0 0117 16H7z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 20h8"
    />
     <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 16v4"
    />
  </svg>
);

export default WaterIcon;
