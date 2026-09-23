import React from 'react';
import { GoldItem, CalculationResults } from '../types/gold';
import { PyramidsLogo } from './PyramidsLogo';

interface AssayReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: GoldItem[];
  results: CalculationResults;
}

export const AssayReportModal: React.FC<AssayReportModalProps> = ({
  isOpen,
  onClose,
  items,
  results,
}) => {
  if (!isOpen) return null;

  const reportDate = new Date().toLocaleDateString('ar-EG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const reportId = `PG-${Date.now().toString().slice(-6)}`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#0e1017] border border-[#d4af37]/50 rounded-2xl shadow-2xl p-5 sm:p-8 text-white max-h-[92vh] overflow-y-auto">
        {/* Modal Controls (Hidden during print) */}
        <div className="no-print flex items-center justify-between pb-4 mb-4 border-b border-white/10">
          <div className="flex items-center gap-2 text-sm font-bold text-[#f5d36e]">
            <i className="fa-solid fa-file-invoice"></i>
            <span>تقرير فني معتمد لسبك وتحييف الذهب</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg text-xs font-bold gold-gradient-btn flex items-center gap-1.5 shadow-md"
            >
              <i className="fa-solid fa-print"></i>
              <span>طباعة / حفظ PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm transition-colors"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>

        {/* Printable Official Document Content */}
        <div className="p-4 sm:p-6 bg-white/[0.02] border border-[#d4af37]/30 rounded-xl relative">
          {/* Certificate Watermark Stamp */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
            <i className="fa-solid fa-gem text-[220px]"></i>
          </div>

          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#d4af37]/30">
            <PyramidsLogo size="md" />

            <div className="text-left text-xs text-white/70 space-y-1">
              <div><strong className="text-[#f5d36e]">رقم التقرير:</strong> <span className="font-mono">{reportId}</span></div>
              <div><strong className="text-white">التاريخ:</strong> {reportDate}</div>
              <div><strong className="text-white">الموقع:</strong> فرع دراو - شارع الصاغة، محافظة أسوان</div>
            </div>
          </div>

          {/* Title */}
          <div className="text-center py-4">
            <h3 className="text-lg sm:text-xl font-black text-white">
              شهادة تحليل وسبك العيارات الذهبية
            </h3>
            <p className="text-xs text-[#d4af37] font-semibold mt-1">
              معمل الفحص والتحليل الطيفي XRF - شركة بيراميدز جولد للمعادن والتطوير
            </p>
          </div>

          {/* Summary Box */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 sm:p-3.5 rounded-xl bg-black/40 border border-[#d4af37]/20 mb-4 text-center">
            <div className="p-2 bg-white/[0.02] rounded-lg sm:bg-transparent">
              <span className="text-[10px] text-white/60 block mb-1">الوزن القائم الكلي</span>
              <span className="text-sm sm:text-lg font-black font-mono text-white tabular-nums">
                {results.grossWeight.toFixed(3)} جم
              </span>
            </div>

            <div className="p-2 bg-white/[0.02] rounded-lg sm:bg-transparent sm:border-r sm:border-white/10">
              <span className="text-[10px] text-white/60 block mb-1">الذهب الخالص (24)</span>
              <span className="text-sm sm:text-lg font-black font-mono text-[#f5d36e] tabular-nums">
                {results.netFineGold24.toFixed(3)} جم
              </span>
            </div>

            <div className="p-2 bg-white/[0.02] rounded-lg sm:bg-transparent sm:border-r sm:border-white/10">
              <span className="text-[10px] text-white/60 block mb-1">درجة النقاء (التزنكة)</span>
              <span className="text-sm sm:text-lg font-black font-mono text-white tabular-nums">
                {results.mixPurity.toFixed(2)} ‰
              </span>
            </div>

            <div className="p-2 bg-white/[0.02] rounded-lg sm:bg-transparent sm:border-r sm:border-white/10">
              <span className="text-[10px] text-white/60 block mb-1">العيار المقدر</span>
              <span className="text-sm sm:text-lg font-black font-mono text-[#f5d36e] tabular-nums">
                {results.expectedKarat.toFixed(2)} K
              </span>
            </div>
          </div>

          {/* Items Breakdown Table */}
          <div className="overflow-x-auto mb-5 rounded-xl border border-white/10">
            <table className="w-full text-xs text-right border-collapse min-w-[420px]">
              <thead>
                <tr className="border-b border-[#d4af37]/30 text-white/70 bg-white/5">
                  <th className="py-2 px-2 font-bold">#</th>
                  <th className="py-2 px-2 font-bold">البيان</th>
                  <th className="py-2 px-2 font-bold">الوزن القائم (جم)</th>
                  <th className="py-2 px-2 font-bold">التزنكة (‰)</th>
                  <th className="py-2 px-2 font-bold">الذهب الخالص 24 (جم)</th>
                  <th className="py-2 px-2 font-bold">الشوائب والنحاس (جم)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {items.map((item, idx) => {
                  const w = typeof item.weight === 'number' ? item.weight : 0;
                  const f = typeof item.fineness === 'number' ? item.fineness : 0;
                  const fine = (w * f) / 1000;
                  const alloy = Math.max(0, w - fine);

                  return (
                    <tr key={item.id} className="hover:bg-white/[0.02]">
                      <td className="py-2 px-2 font-mono text-white/50">{idx + 1}</td>
                      <td className="py-2 px-2 font-semibold text-white">{item.label || `قطعة ${idx + 1}`}</td>
                      <td className="py-2 px-2 font-mono tabular-nums">{w.toFixed(3)}</td>
                      <td className="py-2 px-2 font-mono tabular-nums text-[#f5d36e]">{f.toFixed(1)}</td>
                      <td className="py-2 px-2 font-mono tabular-nums font-bold text-white">{fine.toFixed(3)}</td>
                      <td className="py-2 px-2 font-mono tabular-nums text-white/60">{alloy.toFixed(3)}</td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-[#d4af37]/40 bg-white/[0.04] font-bold text-white">
                  <td colSpan={2} className="py-2 px-2 text-right">الإجمالي العام:</td>
                  <td className="py-2 px-2 font-mono text-[#f5d36e]">{results.grossWeight.toFixed(3)}</td>
                  <td className="py-2 px-2 font-mono text-[#f5d36e]">{results.mixPurity.toFixed(2)} ‰</td>
                  <td className="py-2 px-2 font-mono text-[#f5d36e]">{results.netFineGold24.toFixed(3)}</td>
                  <td className="py-2 px-2 font-mono text-white/70">{results.alloyWeight.toFixed(3)}</td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Equivalent Standard 21K Preview */}
          <div className="p-3 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 flex flex-wrap items-center justify-between text-xs mb-6 gap-2">
            <div>
              <span className="font-bold text-[#f5d36e]">
                الصافي المحيف على عيار 21 (875/1000):
              </span>
            </div>
            <span className="font-mono font-black text-sm text-white tabular-nums">
              {(results.netFineGold24 / 0.875).toFixed(3)} جرام عيار 21
            </span>
          </div>

          {/* Signatures & Seal */}
          <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10 text-xs text-center">
            <div>
              <div className="text-white/60 mb-8">مسؤول معمل الفحص والتحليل (XRF)</div>
              <div className="font-bold text-white/80">مهندس التعدين والمطيافية</div>
            </div>
            <div>
              <div className="text-white/60 mb-8">اعتماد شركة بيراميدز جولد للمعادن</div>
              <div className="font-bold text-[#f5d36e]">خاتم وضمان الجودة - فرع دراو</div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="no-print mt-4 text-center text-xs text-white/40">
          يمكنك طباعة التقرير أو حفظه كملف PDF معتمد للاستخدام في المعاملات التجارية وتوثيق السباكة.
        </div>
      </div>
    </div>
  );
};
