import React from 'react';

interface BassIconProps {
  className?: string;
}

export const BassIcon: React.FC<BassIconProps> = ({ className = "h-6 w-6" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bass fish body */}
      <path d="M85 35c5 8 7 18 5 28-2 12-10 22-22 28l-3 8c-1 2-4 2-5 0l-2-6c-8 2-16 1-24-2l-4 5-8-5 6-4c-8-6-14-15-16-26l-10 3-2-12 12-2c2-10 8-18 16-24 10-7 22-9 34-6 14 4 25 14 23 15z"/>
      {/* Eye */}
      <circle cx="72" cy="38" r="5" fill="white"/>
      <circle cx="73" cy="37" r="2"/>
      {/* Gill lines */}
      <path d="M55 42c-4 6-5 12-4 18M60 44c-3 5-4 10-3 15" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      {/* Fin details */}
      <path d="M45 62l-3 8M50 64l-2 7" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
};
