import React, { useState } from 'react';
import { COMMON_KARATS, CalculationResults, TargetKaratOption } from '../types/gold';

interface StandardizingSectionProps {
  results: CalculationResults;
}

export const StandardizingSection: React.FC<StandardizingSectionProps> = ({ results }) => {
  const [selectedKaratId, setSelectedKaratId] = useState<string>('21k');
  const [customFineness, setCustomFineness] = useState<number | ''>('');
  const [isCustom, setIsCustom] = useState(false);

  const { fineGold24, netFineGold24, grossWeight, mixPurity, actualMixPurity, purityDeduction } = results;
  const fineToUse = netFineGold24 > 0 ? netFineGold24 : fineGold24;

  // Determine target fineness and ratio
  let targetOption: TargetKaratOption | undefined = COMMON_KARATS.find((k) => k.id === selectedKaratId);
  let targetRatio = 0.875;
  let targetFineness = 875;
  let targetName = 'عيار 21 (875)';

  if (isCustom && typeof customFineness === 'number' && customFineness > 0 && customFineness <= 1000) {
    targetFineness = customFineness;
    targetRatio = customFineness / 1000;
    targetName = `تزنكة مخصصة (${customFineness})`;
  } else if (targetOption) {
    targetRatio = targetOption.ratio;
    targetFineness = targetOption.fineness;
    targetName = targetOption.name;
  }

  // Equivalent standardized weight: (إجمالي الذهب الخالص المعتمد / نقاوة العيار الهدف)
  const equivalentWeight = targetRatio > 0 && fineToUse > 0 ? fineToUse / targetRatio : 0;
  const rawEquivalentWeight = targetRatio > 0 && fineGold24 > 0 ? fineGold24 / targetRatio : 0;

  // Adjustment calculation:
  // Case A: Mix purity > target purity -> Needs alloy/copper addition to lower to target karat
  // Case B: Mix purity < target purity -> Needs 24K pure gold addition to raise to target karat
  const currentRatio = grossWeight > 0 ? mixPurity / 1000 : 0;
  let adjustmentType: 'none' | 'add_alloy' | 'add_pure' = 'none';
  let adjustmentAmount = 0;

  if (grossWeight > 0 && fineToUse > 0) {
    const diff = currentRatio - targetRatio;
    if (Math.abs(diff) < 0.0005) {
      adjustmentType = 'none';
    } else if (diff > 0) {
      adjustmentType = 'add_alloy';
      // Adding copper/silver to lower fineness to target
      adjustmentAmount = Math.max(0, equivalentWeight - grossWeight);
    } else {
      adjustmentType = 'add_pure';
      // Adding pure gold (ratio = 1.0 or 0.9999) to raise fineness to target
      // (fineGold + x) / (grossWeight + x) = targetRatio => x = (targetRatio*gross - fineGold)/(1 - targetRatio)
      if (targetRatio < 1) {
        adjustmentAmount = Math.max(0, (targetRatio * grossWeight - fineToUse) / (1 - targetRatio));
      }
    }
  }

  return (
    <div className="glass-panel rounded-2xl p-5 sm:p-6 border border-[#d4af37]/35 shadow-xl relative overflow-hidden">
      {/* Title & Description */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-[#d4af37]/20">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#f5d36e] flex items-center justify-center text-sm shadow-sm">
              <i className="fa-solid fa-arrows-split-up-and-left"></i>
            </span>
            <h3 className="text-lg sm:text-xl font-black text-white">
              قسم التحييف على عيار محدد (Equivalent Weight Calculator)
            </h3>
          </div>
          <p className="text-xs text-white/60 mt-1 max-w-2xl">
            تحويل إجمالي كمية الذهب الخالص في السبيكة إلى وزن معادل ومكافئ لأي عيار مطلوب (عيار 21، 18، 22، 24) بدقة متناهية.
          </p>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#f5d36e]">
          <i className="fa-solid fa-calculator text-[10px]"></i>
          <span>حساب التحييف المعياري</span>
        </div>
      </div>

      {/* Target Karat Selector */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Dropdown Selector */}
        <div className="md:col-span-1">
          <label className="block text-xs font-bold text-white/80 mb-2">
            اختر العيار الهدف للتحييف عليه:
          </label>
          <div className="relative">
            <select
              value={isCustom ? 'custom' : selectedKaratId}
              onChange={(e) => {
                const val = e.target.value;
                if (val === 'custom') {
                  setIsCustom(true);
                } else {
                  setIsCustom(false);
                  setSelectedKaratId(val);
                }
              }}
              className="w-full h-11 px-3.5 pr-9 rounded-xl text-sm font-bold glass-input text-white appearance-none cursor-pointer"
            >
              {COMMON_KARATS.map((karat) => (
                <option key={karat.id} value={karat.id} className="bg-[#12141c] text-white">
                  {karat.name}
                </option>
              ))}
              <option value="custom" className="bg-[#12141c] text-[#f5d36e]">
                عيار أو تزنكة مخصصة...
              </option>
            </select>
            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/60 text-xs">
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </div>
        </div>

        {/* Quick Karat Buttons */}
        <div className="md:col-span-2">
          <label className="block text-xs font-bold text-white/80 mb-2">
            العيارات الشائعة (اختيار سريع):
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {COMMON_KARATS.map((karat) => {
              const isActive = !isCustom && selectedKaratId === karat.id;
              return (
                <button
                  key={karat.id}
                  type="button"
                  onClick={() => {
                    setIsCustom(false);
                    setSelectedKaratId(karat.id);
                  }}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all text-center border flex flex-col items-center justify-center ${
                    isActive
                      ? 'bg-[#d4af37] text-black border-[#d4af37] shadow-[0_0_12px_rgba(212,175,55,0.4)]'
                      : 'bg-white/5 hover:bg-white/10 text-white/80 border-white/10 hover:border-[#d4af37]/40'
                  }`}
                >
                  <span className="font-extrabold">{karat.name.split(' ')[0]} {karat.name.split(' ')[1]}</span>
                  <span className={`text-[10px] ${isActive ? 'text-black/80 font-mono' : 'text-white/50 font-mono'}`}>
                    نقاوة {karat.fineness}‰
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Custom Fineness Input if selected */}
      {isCustom && (
        <div className="mb-5 p-3.5 rounded-xl bg-white/5 border border-[#d4af37]/30 flex flex-wrap items-center gap-3">
          <label className="text-xs font-bold text-[#f5d36e]">
            أدخل التزنكة المخصصة بالألف (o/oo):
          </label>
          <input
            type="number"
            step="any"
            min="1"
            max="1000"
            value={customFineness}
            onChange={(e) => setCustomFineness(e.target.value === '' ? '' : parseFloat(e.target.value))}
            placeholder="مثال: 800 أو 900"
            className="w-36 h-9 px-3 rounded-lg text-sm font-bold glass-input text-white tabular-nums"
          />
          <span className="text-xs text-white/50">
            (النقاوة الحالية: {targetFineness} في الألف)
          </span>
        </div>
      )}

      {/* Primary Result Box: الصافي المحيف */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Main Equivalent Result */}
        <div className="p-5 rounded-xl bg-gradient-to-br from-[#1a170d] via-[#14151e] to-[#0c0d12] border-2 border-[#d4af37]/50 shadow-[0_0_25px_rgba(212,175,55,0.15)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="text-[#f5d36e] font-extrabold flex items-center gap-1.5">
                <i className="fa-solid fa-coins text-[#d4af37]"></i>
                <span>الصافي المحيف على {targetName}:</span>
              </span>
              <span className="text-[10px] text-white/50 bg-black/40 px-2 py-0.5 rounded border border-white/10 font-mono">
                Formula: Fine ÷ ({targetFineness}/1000)
              </span>
            </div>

            <div className="my-2">
              <div className="text-3xl sm:text-4xl font-black text-white tabular-nums font-mono tracking-tight flex items-baseline gap-2">
                <span className="gold-gradient-text">{equivalentWeight.toFixed(3)}</span>
                <span className="text-sm font-bold text-[#d4af37]">جرام محيف</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 text-xs text-white/70">
            هذا هو وزن الذهب الصافي المحيف الذي يعادل كمية الذهب الخالص لديك (<span className="text-[#f5d36e] font-mono font-bold">{fineGold24.toFixed(3)} جم</span>) عند تحويلها بالكامل لعيار {targetName}.
          </div>
        </div>

        {/* Metallurgical Adjustment Guidance (معادلة ضبط العيار) */}
        <div className="p-5 rounded-xl bg-[#0e1017]/80 border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs mb-3">
              <span className="text-white/80 font-bold flex items-center gap-1.5">
                <i className="fa-solid fa-wand-magic-sparkles text-[#d4af37]"></i>
                <span>إرشادات ضبط وسبك العيار (Alloy / Karat Tuning):</span>
              </span>
            </div>

            {grossWeight <= 0 ? (
              <p className="text-xs text-white/40 leading-relaxed py-2">
                يرجى إدخال أوزان وتزنكة القطع لحساب المقادير الفنية لضبط الخليط.
              </p>
            ) : adjustmentType === 'add_alloy' ? (
              <div className="space-y-2">
                <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-xs">
                  <div className="font-bold mb-1 flex items-center gap-1.5">
                    <i className="fa-solid fa-arrow-down text-emerald-400"></i>
                    <span>تزنكة الخليط ({mixPurity.toFixed(1)}‰) أعلى من العيار الهدف ({targetFineness}‰)</span>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    للنزول بالخليط بالضبط لعيار {targetName}، أضف:
                    <strong className="text-emerald-400 font-mono text-sm mx-1">
                      +{adjustmentAmount.toFixed(3)} جم
                    </strong>
                    من سبيكة النحاس/الفضة (العيار المخفض).
                  </p>
                </div>
                <div className="text-[11px] text-white/50">
                  الوزن الإجمالي النهائي بعد الخلط سيكون: <span className="font-mono text-white font-bold">{equivalentWeight.toFixed(3)} جم</span>
                </div>
              </div>
            ) : adjustmentType === 'add_pure' ? (
              <div className="space-y-2">
                <div className="p-3 rounded-lg bg-amber-950/30 border border-amber-500/30 text-amber-300 text-xs">
                  <div className="font-bold mb-1 flex items-center gap-1.5">
                    <i className="fa-solid fa-arrow-up text-[#d4af37]"></i>
                    <span>تزنكة الخليط ({mixPurity.toFixed(1)}‰) أقل من العيار الهدف ({targetFineness}‰)</span>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    لرفع الخليط بالضبط لعيار {targetName}، أضف:
                    <strong className="text-[#f5d36e] font-mono text-sm mx-1">
                      +{adjustmentAmount.toFixed(3)} جم
                    </strong>
                    من الذهب الخالص (عيار 24 بنقاوة 999.9).
                  </p>
                </div>
                <div className="text-[11px] text-white/50">
                  الوزن الإجمالي النهائي بعد رفع العيار سيكون: <span className="font-mono text-white font-bold">{(grossWeight + adjustmentAmount).toFixed(3)} جم</span>
                </div>
              </div>
            ) : (
              <div className="p-3 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#f5d36e] text-xs">
                <i className="fa-solid fa-circle-check ml-1.5"></i>
                <span>الخليط الحالي مطابق تماماً للعيار الهدف! لا حاجة لإضافة شوائب أو ذهب خالص.</span>
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-white/5 text-[11px] text-white/40 flex items-center justify-between">
            <span>معدل الدقة: 0.001 جرام</span>
            <span>بإشراف مهندسي بيراميدز جولد</span>
          </div>
        </div>
      </div>
    </div>
  );
};
