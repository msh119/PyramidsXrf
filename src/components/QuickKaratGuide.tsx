import React from 'react';

interface KaratComposition {
  karat: string;
  fineness: string; // o/oo
  purityPercent: number;
  alloyPercent: number;
  typicalMetals: string;
  color: string;
  badge: string;
  notes: string;
}

const KARAT_DATA: KaratComposition[] = [
  {
    karat: 'عيار 24 (24K)',
    fineness: '999.9 ‰',
    purityPercent: 99.99,
    alloyPercent: 0.01,
    typicalMetals: 'ذهب خالص 100% (أعلى نقاء)',
    color: '#eab308',
    badge: 'سبائك واستثمار',
    notes: 'ذهب نقي للغاية، شديد الليونة، يستخدم للسبائك والجنيهات الاستثمارية وتكرير الذهب.',
  },
  {
    karat: 'عيار 22 (22K)',
    fineness: '916.6 ‰',
    purityPercent: 91.67,
    alloyPercent: 8.33,
    typicalMetals: 'نحاس (Cu) + فضة (Ag)',
    color: '#f59e0b',
    badge: 'صاغة الخليج والهند',
    notes: 'شائع في المصوغات التراثية والخليجية والهندية، لون ذهبي عميق ومتماسك.',
  },
  {
    karat: 'عيار 21 (21K)',
    fineness: '875.0 ‰',
    purityPercent: 87.50,
    alloyPercent: 12.50,
    typicalMetals: 'نحاس أحمر/أصفر + فضة نقية',
    color: '#d4af37',
    badge: 'الأكثر شعبية في مصر والشرق الأوسط',
    notes: 'العيار القياسي المعتمد في مصر لتصنيع المصوغات الشعبية والجنيهات البلدية والتحييف.',
  },
  {
    karat: 'عيار 18 (18K)',
    fineness: '750.0 ‰',
    purityPercent: 75.00,
    alloyPercent: 25.00,
    typicalMetals: 'فضة + نحاس + زنك (أو نيكل/بلاديوم للذهب الأبيض)',
    color: '#fbbf24',
    badge: 'المجوهرات الحديثة والألماس',
    notes: 'صلابة ممتازة لتثبيت الأحجار الكريمة، مثالي للمصوغات الإيطالية والذهب الأبيض والوردي.',
  },
  {
    karat: 'عيار 14 (14K)',
    fineness: '585.0 ‰',
    purityPercent: 58.50,
    alloyPercent: 41.50,
    typicalMetals: 'نحاس وفضة وزنك',
    color: '#d97706',
    badge: 'صلابة عالية وأسعار اقتصادية',
    notes: 'مقاوم للخدش بشكل كبير ومستخدم بكثرة في السوقين الأوروبي والأمريكي.',
  },
  {
    karat: 'عيار 9 (9K)',
    fineness: '375.0 ‰',
    purityPercent: 37.50,
    alloyPercent: 62.50,
    typicalMetals: 'نحاس وفضة وحديد وزنك',
    color: '#b45309',
    badge: 'الحد الأدنى التجاري للذهب',
    notes: 'يحتوي على شوائب ونحاس أكثر من الذهب، صلب جداً وخفيف السعر.',
  },
];

interface QuickKaratGuideProps {
  onCalculate?: () => void;
  fineGold24?: number;
}

export const QuickKaratGuide: React.FC<QuickKaratGuideProps> = ({ onCalculate, fineGold24 = 0 }) => {
  const equiv21 = fineGold24 > 0 ? (fineGold24 / 0.875).toFixed(3) : '0.000';

  return (
    <section className="glass-panel rounded-2xl p-3.5 sm:p-7 border border-[#d4af37]/35 shadow-xl relative overflow-hidden">
      {/* Decorative Golden Ambient Accent */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mt-20" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-[#d4af37]/20 relative z-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#f5d36e] flex items-center justify-center text-sm shadow-sm shrink-0">
              <i className="fa-solid fa-book-open"></i>
            </span>
            <h3 className="text-base sm:text-xl font-black text-white">
              دليل العيارات الذهبية ونسب السبك
            </h3>
          </div>
          <p className="text-[11px] sm:text-xs text-white/60 mt-1 max-w-2xl">
            جدول إرشادي يوضح التركيب الكيميائي ونسب الذهب الخالص والمعادن الأخرى لكل عيار بالألف والنسب المئوية.
          </p>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          {onCalculate && (
            <button
              type="button"
              onClick={onCalculate}
              className="flex-1 sm:flex-none px-4 py-2.5 sm:py-2 rounded-xl text-xs font-black gold-gradient-btn flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95 transition-transform"
            >
              <i className="fa-solid fa-calculator text-sm"></i>
              <span>احسب النتيجة</span>
            </button>
          )}

          <div className="inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:py-1 rounded-xl sm:rounded-full text-[11px] sm:text-xs font-semibold bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#f5d36e]">
            <i className="fa-solid fa-flask-vial text-[11px]"></i>
            <span>معايير الدمغ والموازين</span>
          </div>
        </div>
      </div>

      {/* Interactive 21K Standardized Banner with Calculate Action */}
      <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-[#241c0b] via-[#161824] to-[#0c0d14] border-2 border-[#d4af37]/60 shadow-[0_0_20px_rgba(212,175,55,0.2)] flex flex-wrap items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#f5d36e] flex items-center justify-center text-lg shrink-0">
            <i className="fa-solid fa-scale-balanced"></i>
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#f5d36e]">
              <span>الصافي المحيف على عيار 21 (875):</span>
              <span className="text-[10px] bg-black/40 px-2 py-0.5 rounded border border-white/10 font-mono text-white/60">
                875 ‰ (العيار القياسي)
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-white font-mono tabular-nums tracking-tight mt-0.5">
              <span className="gold-gradient-text">{equiv21}</span>
              <span className="text-xs font-bold text-[#d4af37] mr-1.5">جرام عيار 21</span>
            </div>
          </div>
        </div>

        {onCalculate && (
          <button
            type="button"
            onClick={onCalculate}
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black gold-gradient-btn flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95 transition-all"
          >
            <i className="fa-solid fa-wand-magic-sparkles text-sm"></i>
            <span>احسب النتيجة واعرض كارت الإعلان</span>
          </button>
        )}
      </div>

      {/* Responsive Table for Karats Composition */}
      <div className="overflow-x-auto relative z-10 rounded-xl border border-white/10 bg-[#0c0d14]/70">
        <table className="w-full text-right text-xs sm:text-sm border-collapse min-w-[620px]">
          <thead>
            <tr className="bg-white/5 border-b border-[#d4af37]/30 text-white/80">
              <th className="py-3 px-3.5 font-bold">العيار</th>
              <th className="py-3 px-3 font-bold">التزنكة بالألف (‰)</th>
              <th className="py-3 px-3 font-bold">نسبة الذهب النقي</th>
              <th className="py-3 px-3 font-bold">نسبة المعادن المخلوطة</th>
              <th className="py-3 px-3 font-bold">المعادن المضافة النموذجية</th>
              <th className="py-3 px-3.5 font-bold">الاستخدام الشائع</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {KARAT_DATA.map((item) => (
              <tr key={item.karat} className="hover:bg-white/[0.03] transition-colors">
                {/* Karat */}
                <td className="py-3 px-3.5 font-bold text-white whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0 shadow-sm"
                      style={{ backgroundColor: item.color }}
                    />
                    <span>{item.karat}</span>
                  </div>
                </td>

                {/* Fineness */}
                <td className="py-3 px-3 font-mono font-bold text-[#f5d36e] whitespace-nowrap">
                  {item.fineness}
                </td>

                {/* Pure Gold % */}
                <td className="py-3 px-3 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 rounded-full bg-white/10 overflow-hidden hidden sm:block">
                      <div
                        className="h-full bg-gradient-to-r from-[#d4af37] to-[#fde047]"
                        style={{ width: `${item.purityPercent}%` }}
                      />
                    </div>
                    <span className="font-mono font-bold text-white">%{item.purityPercent.toFixed(1)}</span>
                  </div>
                </td>

                {/* Alloy % */}
                <td className="py-3 px-3 whitespace-nowrap">
                  <span className="font-mono text-white/70">%{item.alloyPercent.toFixed(1)}</span>
                </td>

                {/* Typical Metals */}
                <td className="py-3 px-3 text-white/80 text-xs">
                  {item.typicalMetals}
                </td>

                {/* Badge / Application */}
                <td className="py-3 px-3.5 whitespace-nowrap">
                  <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/5 border border-white/10 text-white/90">
                    {item.badge}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Metallurgical Tip Footer */}
      <div className="mt-4 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs text-white/70 relative z-10">
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-circle-info text-[#d4af37]"></i>
          <span>
            <strong>معلومة صاغة:</strong> عيار 21 هو المعيار المفضل في السوق المصري بنسبة 87.5% ذهب نقي، حيث يجمع بين لمعة الذهب الطبيعية والصلوبة المثالية للارتداء اليومي.
          </span>
        </div>
        <div className="text-[#f5d36e] font-semibold flex items-center gap-1.5 shrink-0">
          <i className="fa-solid fa-check text-[10px]"></i>
          <span>معمل فحص XRF - فرع دراو أسوان</span>
        </div>
      </div>
    </section>
  );
};
