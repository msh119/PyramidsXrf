import React from 'react';
import { CalculationResults } from '../types/gold';

interface ResultsDashboardProps {
  results: CalculationResults;
  onOpenReport: () => void;
  onCopyResults: () => void;
  copySuccess: boolean;
  onCalculate?: () => void;
}

export const ResultsDashboard: React.FC<ResultsDashboardProps> = ({
  results,
  onOpenReport,
  onCopyResults,
  copySuccess,
  onCalculate,
}) => {
  const {
    grossWeight,
    fineGold24,
    netFineGold24,
    actualMixPurity,
    mixPurity,
    purityDeduction,
    expectedKarat,
    actualExpectedKarat,
    alloyWeight,
    itemsCount,
  } = results;

  const purityPercent = grossWeight > 0 ? (mixPurity / 10) : 0;
  const actualPurityPercent = grossWeight > 0 ? (actualMixPurity / 10) : 0;
  const equiv21 = netFineGold24 > 0 ? netFineGold24 / 0.875 : 0;
  const equiv21Actual = fineGold24 > 0 ? fineGold24 / 0.875 : 0;

  return (
    <div className="glass-panel rounded-2xl p-5 sm:p-6 border border-[#d4af37]/35 shadow-xl relative overflow-hidden">
      {/* Decorative Golden Ambient Accent */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none -ml-16 -mb-16" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10 pb-4 border-b border-[#d4af37]/20">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#f5d36e] flex items-center justify-center text-sm shadow-sm">
              <i className="fa-solid fa-chart-pie"></i>
            </span>
            <h2 className="text-lg sm:text-xl font-black text-white">
              نتائج سبك الخليط الإجمالية
            </h2>
          </div>
          <p className="text-xs text-white/60 mt-1">
            الحساب فوري ومحدث آلياً لعدد <span className="font-bold text-[#f5d36e] font-mono">{itemsCount}</span> قطع مدخلة
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 w-full sm:w-auto">
          {onCalculate && (
            <button
              type="button"
              onClick={onCalculate}
              className="col-span-2 sm:col-span-1 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black gold-gradient-btn flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:scale-[1.02] active:scale-98 transition-all"
              title="احسب النتيجة واعرض كارت الإعلان العائم"
            >
              <i className="fa-solid fa-calculator text-sm"></i>
              <span>احسب النتيجة</span>
            </button>
          )}

          <button
            type="button"
            onClick={onCopyResults}
            className="px-3 sm:px-3.5 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-all flex items-center justify-center gap-1.5"
            title="نسخ تقرير النتائج"
          >
            <i className={`fa-solid ${copySuccess ? 'fa-check text-green-400' : 'fa-copy text-[#d4af37]'}`}></i>
            <span>{copySuccess ? 'تم النسخ!' : 'نسخ النتائج'}</span>
          </button>

          <button
            type="button"
            onClick={onOpenReport}
            className="px-3 sm:px-4 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/15 text-white border border-[#d4af37]/40 flex items-center justify-center gap-1.5"
            title="عرض وطباعة التقرير الفني"
          >
            <i className="fa-solid fa-print text-[#d4af37]"></i>
            <span>تقرير رسمي</span>
          </button>
        </div>
      </div>

      {/* Primary Highlights Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 relative z-10 mb-4 sm:mb-5">
        {/* Metric 1: Total Gross Weight */}
        <div className="p-3 sm:p-4 rounded-xl bg-[#0e1017]/80 border border-white/10 hover:border-[#d4af37]/40 transition-all flex flex-col justify-between">
          <div className="flex items-center justify-between text-white/70 text-[11px] sm:text-xs mb-1.5 sm:mb-2">
            <span>الوزن القائم</span>
            <i className="fa-solid fa-scale-unbalanced text-[#d4af37]"></i>
          </div>
          <div>
            <div className="text-xl sm:text-3xl font-black text-white tabular-nums font-mono tracking-tight">
              {grossWeight.toFixed(3)}
            </div>
            <div className="text-[10px] sm:text-xs text-[#d4af37] font-semibold mt-1">
              جرام (Gross)
            </div>
          </div>
        </div>

        {/* Metric 2: Total Pure Gold (24K) */}
        <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-[#1b1912] to-[#12131a] border border-[#d4af37]/45 shadow-[0_0_20px_rgba(212,175,55,0.1)] transition-all flex flex-col justify-between">
          <div className="flex items-center justify-between text-white/70 text-[11px] sm:text-xs mb-1.5 sm:mb-2">
            <span className="text-[#f5d36e] font-bold">الذهب الخالص (24)</span>
            <i className="fa-solid fa-crown text-[#d4af37]"></i>
          </div>
          <div>
            <div className="text-xl sm:text-3xl font-black text-[#f5d36e] tabular-nums font-mono tracking-tight">
              {netFineGold24.toFixed(3)}
            </div>
            <div className="text-[10px] sm:text-xs text-white/70 font-semibold mt-1 flex items-center justify-between">
              <span>جرام صافي</span>
              <span className="font-mono text-[10px] sm:text-[11px] text-[#d4af37]">({purityPercent.toFixed(1)}%)</span>
            </div>
          </div>
        </div>

        {/* Metric 3: Mix Fineness (درجة النقاء بالألف) */}
        <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-[#1e190e] to-[#0e1017] border-2 border-[#d4af37]/60 hover:border-[#d4af37] transition-all flex flex-col justify-between shadow-[0_0_15px_rgba(212,175,55,0.1)]">
          <div className="flex items-center justify-between text-white/70 text-[11px] sm:text-xs mb-1.5 sm:mb-2">
            <span className="font-bold text-white">درجة النقاء (التزنكة)</span>
            <i className="fa-solid fa-flask-vial text-[#d4af37]"></i>
          </div>
          <div>
            <div className="text-xl sm:text-3xl font-black text-[#f5d36e] tabular-nums font-mono tracking-tight">
              {mixPurity.toFixed(2)}
            </div>
            <div className="text-[10px] sm:text-xs text-[#d4af37] font-semibold mt-1">
              سهم في الألف (‰)
            </div>
          </div>
        </div>

        {/* Metric 4: Expected Karat */}
        <div className="p-3 sm:p-4 rounded-xl bg-[#0e1017]/80 border border-white/10 hover:border-[#d4af37]/40 transition-all flex flex-col justify-between">
          <div className="flex items-center justify-between text-white/70 text-[11px] sm:text-xs mb-1.5 sm:mb-2">
            <span>العيار المقدر للخليط</span>
            <i className="fa-solid fa-gem text-[#d4af37]"></i>
          </div>
          <div>
            <div className="text-xl sm:text-3xl font-black text-[#f5d36e] tabular-nums font-mono tracking-tight">
              {expectedKarat.toFixed(2)}
            </div>
            <div className="text-[10px] sm:text-xs text-white/70 font-semibold mt-1">
              قيراط (Karat) من 24
            </div>
          </div>
        </div>
      </div>

      {/* Dedicated Highlight for 21K Equivalent Weight */}
      <div className="p-3.5 sm:p-5 rounded-2xl bg-gradient-to-r from-[#231b0c] via-[#161824] to-[#0c0d14] border-2 border-[#d4af37]/60 shadow-[0_0_25px_rgba(212,175,55,0.18)] mb-4 sm:mb-5 relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping"></span>
            <span className="text-xs sm:text-sm font-extrabold text-[#f5d36e]">
              الصافي المحيف على عيار 21 (875):
            </span>
            <span className="text-[10px] text-white/50 bg-black/40 px-2 py-0.5 rounded border border-white/10 font-mono">
              Fine ÷ 0.875
            </span>
          </div>
          <div className="text-2xl sm:text-4xl font-black text-white font-mono tabular-nums tracking-tight flex items-baseline gap-2">
            <span className="gold-gradient-text">{equiv21.toFixed(3)}</span>
            <span className="text-xs sm:text-base font-bold text-[#d4af37]">جرام عيار 21</span>
          </div>
        </div>

        <div className="flex items-center">
          {onCalculate && (
            <button
              type="button"
              onClick={onCalculate}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black gold-gradient-btn flex items-center justify-center gap-2 shadow-lg hover:scale-105 active:scale-95 transition-transform"
            >
              <i className="fa-solid fa-calculator text-sm"></i>
              <span>احسب النتيجة وتفاصيل السبك</span>
            </button>
          )}
        </div>
      </div>

      {/* Supplementary Metric Strip */}
      <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs relative z-10">
        <div className="flex items-center gap-2 text-white/80">
          <i className="fa-solid fa-cubes-stacked text-white/50"></i>
          <span>إجمالي الشوائب والنحاس المضاف:</span>
          <strong className="text-white font-mono font-bold text-sm tabular-nums">
            {alloyWeight.toFixed(3)} جم
          </strong>
        </div>

        <div className="flex items-center gap-2 text-white/80">
          <i className="fa-solid fa-coins text-[#d4af37]"></i>
          <span>نسبة الذهب النقي في السبيكة:</span>
          <strong className="text-[#f5d36e] font-mono font-bold text-sm tabular-nums">
            %{purityPercent.toFixed(2)}
          </strong>
        </div>

        <div className="text-white/50 text-[11px] flex items-center gap-1.5">
          <i className="fa-solid fa-shield-halved text-[#d4af37]"></i>
          <span>معادلات سبك قياسية معتمدة من معامل التعدين والتكرير</span>
        </div>
      </div>
    </div>
  );
};
