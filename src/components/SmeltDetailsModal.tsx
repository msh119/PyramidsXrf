import React from 'react';
import { CalculationResults, GoldItem } from '../types/gold';
import { PyramidsLogo } from './PyramidsLogo';

interface SmeltDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  results: CalculationResults;
  items: GoldItem[];
  onOpenReport: () => void;
}

export const SmeltDetailsModal: React.FC<SmeltDetailsModalProps> = ({
  isOpen,
  onClose,
  results,
  items,
  onOpenReport,
}) => {
  if (!isOpen) return null;

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
  } = results;

  const fineToUse = netFineGold24 > 0 ? netFineGold24 : fineGold24;
  const equiv21 = fineToUse / 0.875;
  const equiv18 = fineToUse / 0.750;
  const equiv22 = fineToUse / (916.67 / 1000);
  const purityPercent = grossWeight > 0 ? (mixPurity / 10) : 0;
  const alloyPercent = grossWeight > 0 ? (alloyWeight / grossWeight) * 100 : 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl my-auto bg-[#0f111a] border border-[#d4af37]/45 rounded-2xl shadow-2xl p-4 sm:p-6 text-white max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-white/10">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#f5d36e] flex items-center justify-center text-sm sm:text-base shadow-sm shrink-0">
              <i className="fa-solid fa-gem"></i>
            </span>
            <div>
              <h3 className="text-sm sm:text-lg font-black text-white">
                تفاصيل السبيكة والتحليل الفني للسبك
              </h3>
              <p className="text-[10px] sm:text-[11px] text-[#f5d36e]">
                معمل التحليل الطيفي XRF - شركة بيراميدز جولد فرع دراو
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 active:bg-white/30 text-white flex items-center justify-center text-sm transition-colors border border-white/10"
            title="إغلاق"
            aria-label="إغلاق"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Highlight Banner: 21K Equivalence */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-[#211a0c] via-[#151722] to-[#0c0d14] border border-[#d4af37]/40 mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3">
          <div>
            <span className="text-xs text-[#f5d36e] font-bold block mb-0.5">
              الصافي المحيف على عيار 21 (875/1000):
            </span>
            <div className="text-2xl sm:text-3xl font-black text-white font-mono tabular-nums">
              <span className="gold-gradient-text">{equiv21.toFixed(3)}</span>
              <span className="text-xs sm:text-sm font-bold text-[#d4af37] mr-1.5">جرام عيار 21</span>
            </div>
          </div>

          <div className="text-right sm:text-left text-xs text-white/70 border-t sm:border-t-0 pt-1.5 sm:pt-0 border-white/10 w-full sm:w-auto">
            <div>الذهب الخالص: <strong className="text-white font-mono">{fineToUse.toFixed(3)} جم</strong></div>
            <div>الشوائب/النحاس: <strong className="text-white font-mono">{alloyWeight.toFixed(3)} جم</strong></div>
          </div>
        </div>

        {/* Detailed Breakdown Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 mb-4 sm:mb-5 text-center text-xs">
          <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[10px] sm:text-xs text-white/60 block mb-1">الوزن القائم</span>
            <span className="font-mono font-black text-sm sm:text-base text-white tabular-nums">
              {grossWeight.toFixed(3)} جم
            </span>
          </div>

          <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[10px] sm:text-xs text-white/60 block mb-1">التزنكة (‰)</span>
            <span className="font-mono font-black text-sm sm:text-base text-[#f5d36e] tabular-nums">
              {mixPurity.toFixed(2)} ‰
            </span>
          </div>

          <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[10px] sm:text-xs text-white/60 block mb-1">العيار المقدر</span>
            <span className="font-mono font-black text-sm sm:text-base text-white tabular-nums">
              {expectedKarat.toFixed(2)} K
            </span>
          </div>

          <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[10px] sm:text-xs text-white/60 block mb-1">نسبة الذهب النقي</span>
            <span className="font-mono font-black text-sm sm:text-base text-[#f5d36e] tabular-nums">
              %{purityPercent.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Karat Equivalency Table */}
        <div className="mb-4 sm:mb-5">
          <h4 className="text-xs font-bold text-white/90 mb-2 flex items-center gap-1.5">
            <i className="fa-solid fa-arrows-spin text-[#d4af37]"></i>
            <span>أوزان السبيكة المعادلة لمختلف العيارات القياسية:</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5 text-xs">
            <div className="p-2.5 sm:p-3 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-between sm:block">
              <span className="text-white/70 block mb-0.5 sm:mb-1">مكافئ عيار 18 (750‰):</span>
              <span className="text-base font-black font-mono text-[#f5d36e] tabular-nums">
                {equiv18.toFixed(3)} جم
              </span>
            </div>

            <div className="p-2.5 sm:p-3 rounded-xl bg-[#d4af37]/20 border border-[#d4af37]/50 shadow-sm flex items-center justify-between sm:block">
              <span className="text-[#f5d36e] font-bold block mb-0.5 sm:mb-1">مكافئ عيار 21 (875‰):</span>
              <span className="text-base sm:text-lg font-black font-mono text-white tabular-nums">
                {equiv21.toFixed(3)} جم
              </span>
            </div>

            <div className="p-2.5 sm:p-3 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-between sm:block">
              <span className="text-white/70 block mb-0.5 sm:mb-1">مكافئ عيار 22 (916.6‰):</span>
              <span className="text-base font-black font-mono text-[#f5d36e] tabular-nums">
                {equiv22.toFixed(3)} جم
              </span>
            </div>
          </div>
        </div>

        {/* Items Breakdown Table */}
        <div className="mb-4 sm:mb-5">
          <h4 className="text-xs font-bold text-white/90 mb-2 flex items-center gap-1.5">
            <i className="fa-solid fa-table-list text-[#d4af37]"></i>
            <span>بيان تفصيلي بقطع السبيكة المكونة ({items.length} قطع):</span>
          </h4>
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/40">
            <table className="w-full text-xs text-right border-collapse min-w-[340px]">
              <thead>
                <tr className="bg-white/5 border-b border-white/10 text-white/70">
                  <th className="py-2 px-2.5">#</th>
                  <th className="py-2 px-2.5">البيان</th>
                  <th className="py-2 px-2.5">الوزن القائم</th>
                  <th className="py-2 px-2.5">التزنكة</th>
                  <th className="py-2 px-2.5">الذهب الخالص 24</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {items.map((item, idx) => {
                  const w = typeof item.weight === 'number' ? item.weight : 0;
                  const f = typeof item.fineness === 'number' ? item.fineness : 0;
                  const fine = (w * f) / 1000;
                  return (
                    <tr key={item.id} className="hover:bg-white/[0.02]">
                      <td className="py-2 px-2.5 text-white/40 font-mono">{idx + 1}</td>
                      <td className="py-2 px-2.5 font-bold text-white">{item.label || `قطعة ${idx + 1}`}</td>
                      <td className="py-2 px-2.5 font-mono tabular-nums">{w.toFixed(3)} جم</td>
                      <td className="py-2 px-2.5 font-mono tabular-nums text-[#f5d36e]">{f.toFixed(1)}‰</td>
                      <td className="py-2 px-2.5 font-mono tabular-nums font-bold text-white">{fine.toFixed(3)} جم</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Actions Footer */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-3 border-t border-white/10">
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenReport();
            }}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold gold-gradient-btn flex items-center justify-center gap-1.5 shadow-md"
          >
            <i className="fa-solid fa-file-invoice"></i>
            <span>طباعة شهادة تحليل معتمدة (PDF)</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 active:bg-white/25 text-white transition-colors text-center"
          >
            إغلاق التفاصيل
          </button>
        </div>
      </div>
    </div>
  );
};
