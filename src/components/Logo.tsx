import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  whiteText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', whiteText = false }) => {
  const iconSize = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-14 h-14' : 'w-10 h-10';
  const titleSize = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl';
  const subSize = size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-xs' : 'text-[10px]';

  return (
    <div className="flex items-center gap-2.5 select-none group cursor-pointer">
      {/* Stylized Architectural House + Eco Leaves SVG Logo */}
      <div className={`relative ${iconSize} flex-shrink-0 flex items-center justify-center transition-transform group-hover:scale-105 duration-200`}>
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          {/* House Roof & Blueprint Framing */}
          <path
            d="M32 6L6 26H14V56H50V26H58L32 6Z"
            fill="#15803D"
            fillOpacity="0.08"
          />
          <path
            d="M32 6L6 26H14V56H50V26H58L32 6Z"
            stroke="#15803D"
            strokeWidth="3.2"
            strokeLinejoin="round"
          />
          {/* Inner Architectural Window Grids / Blueprint Lines */}
          <rect x="22" y="26" width="20" height="16" rx="2" stroke="#15803D" strokeWidth="2.4" />
          <line x1="32" y1="26" x2="32" y2="42" stroke="#15803D" strokeWidth="2.2" />
          <line x1="22" y1="34" x2="42" y2="34" stroke="#15803D" strokeWidth="2.2" />
          {/* Organic Green Foliage Leaves Growing from Roof Peak */}
          <path
            d="M32 10C35 4 44 6 44 14C38 14 34 12 32 10Z"
            fill="#22C55E"
          />
          <path
            d="M32 10C29 4 20 6 20 14C26 14 30 12 32 10Z"
            fill="#16A34A"
          />
          <circle cx="32" cy="11" r="2.5" fill="#4ADE80" />
        </svg>
      </div>

      <div className="flex flex-col leading-tight">
        <div className={`font-extrabold tracking-tight ${titleSize} flex items-center gap-1`}>
          <span className="text-emerald-700 font-black">Green</span>
          <span className={whiteText ? 'text-white' : 'text-slate-800'}>Architect</span>
        </div>
        <span className={`tracking-wider font-semibold uppercase text-emerald-800/80 ${subSize}`}>
          Building Design &amp; Construction
        </span>
      </div>
    </div>
  );
};
