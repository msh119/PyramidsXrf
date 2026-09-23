import React from 'react';
import { GoldItem } from '../types/gold';

interface GoldItemCardProps {
  item: GoldItem;
  index: number;
  totalItems: number;
  onUpdate: (id: string, updates: Partial<GoldItem>) => void;
  onDelete: (id: string) => void;
  onDuplicate: (id: string) => void;
}

export const GoldItemCard: React.FC<GoldItemCardProps> = ({
  item,
  index,
  totalItems,
  onUpdate,
  onDelete,
  onDuplicate,
}) => {
  const weightNum = typeof item.weight === 'number' ? item.weight : 0;
  const finenessNum = typeof item.fineness === 'number' ? item.fineness : 0;

  // Real-time calculation for this single item
  const itemFineGold = weightNum > 0 && finenessNum > 0 ? (weightNum * finenessNum) / 1000 : 0;
  const itemAlloy = weightNum > 0 && finenessNum > 0 ? Math.max(0, weightNum - itemFineGold) : 0;
  const itemKarat = finenessNum > 0 ? (finenessNum / 1000) * 24 : 0;

  // Validation
  const hasFinenessError = finenessNum > 1000 || finenessNum < 0;
  const hasWeightError = weightNum < 0;

  const quickPresets = [
    { label: '18K (750)', value: 750 },
    { label: '21K (875)', value: 875 },
    { label: '22K (916.6)', value: 916.67 },
    { label: '24K (999.9)', value: 999.9 },
  ];

  return (
    <div className={`p-4 sm:p-5 rounded-xl border transition-all duration-200 ${
      hasFinenessError || hasWeightError
        ? 'bg-red-950/20 border-red-500/40 shadow-[0_0_15px_rgba(239,68,68,0.15)]'
        : 'bg-[#12141c]/80 border-[#d4af37]/25 hover:border-[#d4af37]/50 shadow-md'
    }`}>
      {/* Top Header of Card */}
      <div className="flex items-center justify-between gap-2 mb-3.5 pb-2.5 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#f5d36e] font-bold text-xs flex items-center justify-center">
            {index + 1}
          </span>
          <input
            type="text"
            value={item.label}
            onChange={(e) => onUpdate(item.id, { label: e.target.value })}
            placeholder={`قطعة ذهب ${index + 1}`}
            className="bg-transparent text-sm font-semibold text-white/90 placeholder-white/40 focus:outline-none focus:border-b border-[#d4af37] px-1 py-0.5 max-w-[140px] sm:max-w-[200px]"
          />
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => onDuplicate(item.id)}
            title="تكرار هذه القطعة"
            aria-label="تكرار القطعة"
            className="w-8 h-8 rounded-lg text-white/70 hover:text-[#f5d36e] hover:bg-white/5 flex items-center justify-center transition-colors"
          >
            <i className="fa-regular fa-copy text-xs"></i>
          </button>
          {totalItems > 1 && (
            <button
              type="button"
              onClick={() => onDelete(item.id)}
              title="حذف هذه القطعة"
              aria-label="حذف القطعة"
              className="w-8 h-8 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-500/10 flex items-center justify-center transition-colors"
            >
              <i className="fa-regular fa-trash-can text-xs"></i>
            </button>
          )}
        </div>
      </div>

      {/* Inputs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3">
        {/* Weight Input */}
        <div>
          <label className="block text-xs font-medium text-white/80 mb-1.5 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <i className="fa-solid fa-scale-balanced text-[#d4af37] text-[11px]"></i>
              <span>الوزن القائم (جرام):</span>
            </span>
            <span className="text-[10px] text-white/50">جم (g)</span>
          </label>
          <div className="relative">
            <input
              type="number"
              step="any"
              min="0"
              value={item.weight}
              onChange={(e) => {
                const val = e.target.value === '' ? '' : parseFloat(e.target.value);
                onUpdate(item.id, { weight: val });
              }}
              placeholder="0.00"
              className={`w-full h-11 px-3.5 rounded-lg text-base font-bold tabular-nums glass-input ${
                hasWeightError ? 'border-red-500 text-red-400' : 'text-white'
              }`}
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-white/40 pointer-events-none">
              جرام
            </span>
          </div>
          {hasWeightError && (
            <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
              <i className="fa-solid fa-circle-exclamation text-[10px]"></i>
              لا يمكن إدخال وزن بالسالب
            </p>
          )}
        </div>

        {/* Fineness Input */}
        <div>
          <label className="block text-xs font-medium text-white/80 mb-1.5 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <i className="fa-solid fa-gem text-[#d4af37] text-[11px]"></i>
              <span>التزنكة / النقاء بالألف:</span>
            </span>
            <span className="text-[10px] text-[#f5d36e] font-mono">(o/oo)</span>
          </label>
          <div className="relative">
            <input
              type="number"
              step="any"
              min="0"
              max="1000"
              value={item.fineness}
              onChange={(e) => {
                const val = e.target.value === '' ? '' : parseFloat(e.target.value);
                onUpdate(item.id, { fineness: val });
              }}
              placeholder="مثال: 875 أو 754"
              className={`w-full h-11 px-3.5 rounded-lg text-base font-bold tabular-nums glass-input ${
                hasFinenessError ? 'border-red-500 text-red-400' : 'text-white'
              }`}
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#d4af37]/80 pointer-events-none font-mono">
              ‰
            </span>
          </div>
          {hasFinenessError && (
            <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
              <i className="fa-solid fa-circle-exclamation text-[10px]"></i>
              درجة النقاء يجب أن تكون بين 1 و 1000 بالألف
            </p>
          )}
        </div>
      </div>

      {/* Quick Fineness Presets */}
      <div className="mb-3">
        <div className="text-[11px] text-white/60 mb-1.5 flex items-center gap-1">
          <i className="fa-solid fa-bolt text-[#d4af37] text-[10px]"></i>
          <span>العيارات السريعة (تعبئة فورية للتزنكة):</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
          {quickPresets.map((preset) => {
            const isSelected = Math.abs(finenessNum - preset.value) < 0.1;
            return (
              <button
                key={preset.label}
                type="button"
                onClick={() => onUpdate(item.id, { fineness: preset.value })}
                className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all text-center border ${
                  isSelected
                    ? 'bg-[#d4af37] text-black border-[#d4af37] shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                    : 'bg-white/5 hover:bg-white/10 text-white/80 border-white/10 hover:border-[#d4af37]/50'
                }`}
              >
                {preset.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Real-time Subtotal Preview for this piece */}
      <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-white/60">الذهب الخالص (24):</span>
          <span className="font-bold text-[#f5d36e] tabular-nums font-mono">
            {itemFineGold.toFixed(3)} جم
          </span>
        </div>

        <div className="flex items-center gap-3 text-white/50 text-[11px]">
          <span>الشوائب/النحاس: <strong className="text-white/70 font-mono">{itemAlloy.toFixed(3)} جم</strong></span>
          {itemKarat > 0 && (
            <span>العيار: <strong className="text-[#f5d36e] font-mono">{itemKarat.toFixed(2)} K</strong></span>
          )}
        </div>
      </div>
    </div>
  );
};
