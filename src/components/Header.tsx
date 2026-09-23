import React from 'react';
import { PyramidsLogo } from './PyramidsLogo';

interface HeaderProps {
  currentView: 'calculator' | 'about';
  onNavigate: (view: 'calculator' | 'about') => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#090b10]/90 backdrop-blur-md border-b border-[#d4af37]/25 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Brand Section with Pyramid + P Logo */}
        <div
          onClick={() => onNavigate('calculator')}
          className="flex items-center gap-3 cursor-pointer select-none"
        >
          <PyramidsLogo size="md" />
        </div>

        {/* Center / App Title Tagline */}
        <div className="hidden md:flex flex-col text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-black text-white">حاسبة سبك وتحييف الذهب</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse"></span>
          </div>
          <span className="text-[11px] text-[#f5d36e]/90 font-medium">
            برعاية شركة بيراميدز جولد للمعادن والتطوير - فرع دراو أسوان
          </span>
        </div>

        {/* Navigation Tabs: Calculator & About Us */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onNavigate('calculator')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              currentView === 'calculator'
                ? 'gold-gradient-btn shadow-md scale-102'
                : 'bg-white/5 hover:bg-white/10 text-white/90 border border-white/10 hover:border-[#d4af37]/40'
            }`}
          >
            <i className="fa-solid fa-calculator"></i>
            <span>الحاسبة</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('about')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              currentView === 'about'
                ? 'gold-gradient-btn shadow-md scale-102'
                : 'bg-white/5 hover:bg-white/10 text-white/90 border border-white/10 hover:border-[#d4af37]/40'
            }`}
          >
            <i className="fa-solid fa-building"></i>
            <span>من نحن</span>
          </button>

          {/* Quick Direct Call Button */}
          <a
            href="tel:+201111612026"
            title="اتصال مباشر بفرع دراو"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-[#d4af37]/15 hover:bg-[#d4af37]/25 text-[#f5d36e] border border-[#d4af37]/40 transition-all dir-ltr"
          >
            <i className="fa-solid fa-phone text-[11px]"></i>
            <span className="font-mono">01111612026</span>
          </a>
        </div>
      </div>

      {/* Mobile Title Sub-bar */}
      <div className="md:hidden py-1.5 px-4 bg-[#12141c]/60 border-t border-white/5 text-center flex items-center justify-between text-xs">
        <span className="font-bold text-white text-[11px]">حاسبة سبك وتحييف الذهب</span>
        <a
          href="tel:+201111612026"
          className="text-[#f5d36e] font-mono text-[11px] font-bold flex items-center gap-1"
        >
          <i className="fa-solid fa-phone text-[10px]"></i>
          <span>01111612026</span>
        </a>
      </div>
    </header>
  );
};
