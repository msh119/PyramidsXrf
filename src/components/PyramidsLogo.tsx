import React from 'react';

interface PyramidsLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const PyramidsLogo: React.FC<PyramidsLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
  };

  const textSizes = {
    sm: { title: 'text-base', sub: 'text-[10px]' },
    md: { title: 'text-lg md:text-xl', sub: 'text-xs' },
    lg: { title: 'text-2xl md:text-3xl', sub: 'text-sm' },
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Golden Pyramid + Interlocking P Emblem */}
      <div className={`relative shrink-0 ${iconSizes[size]} drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)]`}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="goldGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff2be" />
              <stop offset="50%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#8a6914" />
            </linearGradient>
            <linearGradient id="goldGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fde892" />
              <stop offset="60%" stopColor="#bfa035" />
              <stop offset="100%" stopColor="#634c0e" />
            </linearGradient>
            <linearGradient id="goldGrad3" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffe994" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#d4af37" floodOpacity="0.5" />
            </filter>
          </defs>

          {/* Background Pyramid Base facet */}
          <polygon points="50,12 88,85 12,85" stroke="url(#goldGrad1)" strokeWidth="3" fill="#13141a" opacity="0.9" />

          {/* Golden Pyramid internal facet cuts */}
          <polygon points="50,12 50,85 88,85" fill="url(#goldGrad2)" opacity="0.3" />
          <polygon points="50,12 12,85 50,85" fill="url(#goldGrad1)" opacity="0.15" />

          {/* Interlocking 'P' Motif within the Pyramid geometry */}
          {/* Vertical stem of P */}
          <path
            d="M32 36 L32 78"
            stroke="url(#goldGrad1)"
            strokeWidth="5.5"
            strokeLinecap="round"
          />

          {/* Loop of P conforming with pyramid slope */}
          <path
            d="M32 36 L52 36 C64 36 67 44 65 52 C63 59 56 63 46 63 L32 63"
            stroke="url(#goldGrad3)"
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Pyramid Top Capstone Spark */}
          <polygon points="50,8 55,20 45,20" fill="url(#goldGrad1)" />
          <circle cx="50" cy="11" r="2" fill="#fff" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-black tracking-wider uppercase font-['Tajawal'] text-white ${textSizes[size].title}`}>
            <span className="gold-gradient-text">PYRAMIDS</span> GOLD
          </span>
        </div>
        {showSubtitle && (
          <span className={`text-[#d4af37]/80 font-medium tracking-normal ${textSizes[size].sub}`}>
            بيراميدز جولد للمعادن والتطوير
          </span>
        )}
      </div>
    </div>
  );
};
