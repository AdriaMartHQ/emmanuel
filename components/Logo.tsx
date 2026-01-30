
import React from 'react';

interface LogoProps {
  className?: string;
  isHero?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", isHero = false }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* 圆形徽标 */}
      <div className={`${isHero ? 'w-24 h-24 mb-8' : 'w-10 h-10'} relative flex-shrink-0`}>
        <div className="absolute inset-0 bg-amber-600 rounded-full opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className={`${isHero ? 'w-12 h-12' : 'w-6 h-6'} text-amber-500`} fill="currentColor">
            <path d="M12 2L2 19.77h20L12 2zm0 3.5l7.15 12.77H4.85L12 5.5z"/>
          </svg>
        </div>
      </div>

      {!isHero && (
        <div className="flex flex-col">
          <span className="text-white font-bold text-lg tracking-tighter leading-none">
            EMMANUEL
          </span>
          <span className="text-amber-600 text-[8px] font-bold tracking-[0.3em] uppercase mt-1">
            Global Consulting
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
