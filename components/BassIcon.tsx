import React from 'react';
import Image from 'next/image';

interface BassIconProps {
  className?: string;
}

export const BassIcon: React.FC<BassIconProps> = ({ className = "h-6 w-6" }) => {
  return (
    <Image
      src="/images/branding/bass-icon.png"
      alt="Bass fish icon"
      width={32}
      height={32}
      className={className}
    />
  );
};
