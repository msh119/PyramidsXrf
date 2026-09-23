import React, { useEffect, useState } from 'react';
import { CalculationResults, GoldItem } from '../types/gold';
import { PyramidsLogo } from './PyramidsLogo';

interface ResultFloatingAnnouncementModalProps {
  isOpen: boolean;
  onClose: () => void;
  results: CalculationResults;
  items: GoldItem[];
  onShowFullDetails: () => void;
}

export const ResultFloatingAnnouncementModal: React.FC<ResultFloatingAnnouncementModalProps> = ({
  isOpen,
  onClose,
  results,
  items,
  onShowFullDetails,
}) => {
  const [showSparkles, setShowSparkles] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowSparkles(true);
      const timer = setTimeout(() => setShowSparkles(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Calcs
  const equiv21 = (results.netFineGold24 > 0 ? results.netFineGold24 / 0.875 : results.fineGold24 / 0.875).toFixed(3);
  const purityPercent = results.grossWeight > 0 ? (results.mixPurity / 10) : 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md transition-all duration-300 animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      {/* Sparkles / Confetti Effects Container */}
      {showSparkles && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-[#fde047] animate-ping" />
          <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-white animate-bounce" />
          <div className="absolute top-1/2 right-1/3 w-2.5 h-2.5 rounded-full bg-[#f5d36e] animate-ping" />
        </div>
      )}

      {/* Floating Announcement Card */}
      <div
        className="relative w-full max-w-md sm:max-w-lg my-auto bg-gradient-to-b from-[#181a27] via-[#10121a] to-[#0a0b10] border-2 border-[#d4af37] rounded-2xl sm:rounded-3xl shadow-[0_0_50px_rgba(212,175,55,0.45)] p-4 sm:p-7 text-white z-10 overflow-hidden transform transition-all scale-100 animate-scaleUp max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glowing Ambient Halo */}
        <div className="absolute top-0 right-1/2 translate-x-1/2 -mt-16 w-64 h-32 bg-[#d4af37]/25 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button Top-Corner */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-3 left-3 sm:top-4 sm:left-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-white flex items-center justify-center transition-all z-20 border border-white/20 shadow-md"
          title="إغلاق النافذة"
          aria-label="إغلاق النافذة"
        >
          <i className="fa-solid fa-xmark text-base"></i>
        </button>

        {/* Brand Banner / Announcement Header */}
        <div className="flex flex-col items-center text-center pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-[#d4af37]/25 pt-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-[#d4af37]/20 border border-[#d4af37]/50 text-[#f5d36e] mb-2.5 animate-pulse">
            <i className="fa-solid fa-bell text-xs"></i>
            <span>إعلان رسمي - معمل فحص وتحليل الذهب</span>
          </div>

          <PyramidsLogo size="sm" showSubtitle={false} className="mb-2" />
          
          <h3 className="text-lg sm:text-2xl font-black text-white tracking-wide">
            تم احتساب نتيجة السبك بنجاح!
          </h3>
          <p className="text-[11px] sm:text-xs text-[#d4af37] font-semibold mt-1">
            شركة بيراميدز جولد للمعادن والتطوير - فرع دراو أسوان
          </p>
        </div>

        {/* Golden Hero Result Highlight: الصافي المحيف عيار 21 */}
        <div className="p-3.5 sm:p-5 rounded-2xl bg-gradient-to-br from-[#2a220e] via-[#1a1710] to-[#12131b] border border-[#f5d36e]/60 shadow-[0_0_25px_rgba(212,175,55,0.25)] text-center mb-3 sm:mb-4 relative">
          <div className="text-xs sm:text-sm text-white/80 font-bold mb-1 flex items-center justify-center gap-1.5">
            <i className="fa-solid fa-coins text-[#d4af37]"></i>
            <span>الصافي المحيف على عيار 21 (875):</span>
          </div>

          <div className="text-3xl sm:text-4xl font-black text-[#f5d36e] font-mono tabular-nums tracking-tight my-1 sm:my-2 drop-shadow-md">
            {equiv21}
            <span className="text-sm sm:text-base font-bold text-white mr-1.5">جرام</span>
          </div>

          <div className="text-[11px] sm:text-xs text-[#fbe089]/90 font-medium">
            (معادل لذهب خالص {results.netFineGold24.toFixed(3)} جم عيار 24)
          </div>
        </div>

        {/* Quick 3-Metric Summary Strip */}
        <div className="grid grid-cols-3 gap-2 sm:gap-2.5 mb-4 text-center">
          {/* Gross */}
          <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[9px] sm:text-[10px] text-white/60 block mb-0.5">الوزن القائم</span>
            <span className="text-xs sm:text-base font-mono font-bold text-white tabular-nums">
              {results.grossWeight.toFixed(3)}
            </span>
            <span className="text-[9px] sm:text-[10px] text-white/40 block">جم</span>
          </div>

          {/* Pure 24K */}
          <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-[#d4af37]/30">
            <span className="text-[9px] sm:text-[10px] text-white/60 block mb-0.5">الذهب الخالص 24</span>
            <span className="text-xs sm:text-base font-mono font-bold text-[#f5d36e] tabular-nums">
              {results.netFineGold24.toFixed(3)}
            </span>
            <span className="text-[9px] sm:text-[10px] text-white/40 block">جم ({purityPercent.toFixed(1)}%)</span>
          </div>

          {/* Purity / Karat */}
          <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[9px] sm:text-[10px] text-white/60 block mb-0.5">التزنكة / العيار</span>
            <span className="text-xs sm:text-base font-mono font-bold text-white tabular-nums">
              {results.mixPurity.toFixed(2)} ‰
            </span>
            <span className="text-[9px] sm:text-[10px] text-[#d4af37] block font-mono">{results.expectedKarat.toFixed(2)} K</span>
          </div>
        </div>

        {/* Interactive Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1">
          {/* Button 1: Details Modal */}
          <button
            type="button"
            onClick={() => {
              onClose();
              onShowFullDetails();
            }}
            className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold gold-gradient-btn flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] active:scale-98 transition-all"
          >
            <i className="fa-solid fa-list-check"></i>
            <span>اعرض تفاصيل السبيكة</span>
          </button>

          {/* Button 2: Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/20 active:bg-white/25 text-white border border-white/20 flex items-center justify-center gap-2 transition-colors"
          >
            <i className="fa-solid fa-xmark"></i>
            <span>إغلاق الكارت</span>
          </button>
        </div>

        {/* Footer Note */}
        <div className="mt-3 pt-2.5 border-t border-white/10 text-center text-[10px] sm:text-[11px] text-white/40 flex items-center justify-center gap-1.5">
          <i className="fa-solid fa-microscope text-[#d4af37]"></i>
          <span>تم الحساب وفق مواصفات معمل بيراميدز جولد فرع دراو</span>
        </div>
      </div>
    </div>
  );
};
