/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { GoldItem, CalculationResults } from './types/gold';
import { Header } from './components/Header';
import { Slideshow } from './components/Slideshow';
import { GoldItemCard } from './components/GoldItemCard';
import { ResultsDashboard } from './components/ResultsDashboard';
import { StandardizingSection } from './components/StandardizingSection';
import { Footer } from './components/Footer';
import { AssayReportModal } from './components/AssayReportModal';
import { QuickKaratGuide } from './components/QuickKaratGuide';
import { ResultFloatingAnnouncementModal } from './components/ResultFloatingAnnouncementModal';
import { SmeltDetailsModal } from './components/SmeltDetailsModal';
import { AboutUsPage } from './components/AboutUsPage';

const INITIAL_ITEMS: GoldItem[] = [
  { id: '1', label: 'كسر عيار 21', weight: 125.5, fineness: 875 },
  { id: '2', label: 'كسر عيار 18', weight: 64.2, fineness: 750 },
  { id: '3', label: 'سبيكة تعدين دراو', weight: 88.0, fineness: 910 },
];

export default function App() {
  const [currentView, setCurrentView] = useState<'calculator' | 'about'>('calculator');
  const [items, setItems] = useState<GoldItem[]>(INITIAL_ITEMS);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [isFloatingAnnouncementOpen, setIsFloatingAnnouncementOpen] = useState(false);
  const [isSmeltDetailsOpen, setIsSmeltDetailsOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // Real-time calculation of overall totals
  const results: CalculationResults = useMemo(() => {
    let grossWeight = 0;
    let fineGold24 = 0;

    items.forEach((item) => {
      const w = typeof item.weight === 'number' && item.weight > 0 ? item.weight : 0;
      const f = typeof item.fineness === 'number' && item.fineness > 0 && item.fineness <= 1000 ? item.fineness : 0;

      if (w > 0 && f > 0) {
        grossWeight += w;
        fineGold24 += (w * f) / 1000;
      }
    });

    const alloyWeight = Math.max(0, grossWeight - fineGold24);
    const actualMixPurity = grossWeight > 0 ? (fineGold24 / grossWeight) * 1000 : 0;
    // Deduct exactly 5 from whatever the mix purity is (مع تنزيل 5 أسهم للتزنكة المعتمدة)
    const purityDeduction = actualMixPurity > 0 ? 5 : 0;
    const mixPurity = Math.max(0, actualMixPurity - purityDeduction);
    const netFineGold24 = grossWeight > 0 ? (grossWeight * mixPurity) / 1000 : 0;
    const expectedKarat = grossWeight > 0 ? (mixPurity / 1000) * 24 : 0;
    const actualExpectedKarat = grossWeight > 0 ? (actualMixPurity / 1000) * 24 : 0;

    return {
      grossWeight,
      fineGold24,
      netFineGold24,
      actualMixPurity,
      mixPurity,
      purityDeduction,
      expectedKarat,
      actualExpectedKarat,
      alloyWeight,
      itemsCount: items.length,
    };
  }, [items]);

  // Handlers for Gold Items
  const handleAddItem = () => {
    const newItem: GoldItem = {
      id: Date.now().toString(),
      label: `قطعة ${items.length + 1}`,
      weight: '',
      fineness: 875,
    };
    setItems((prev) => [...prev, newItem]);
  };

  const handleUpdateItem = (id: string, updates: Partial<GoldItem>) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updates } : item))
    );
  };

  const handleDeleteItem = (id: string) => {
    if (items.length <= 1) return;
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleDuplicateItem = (id: string) => {
    const target = items.find((it) => it.id === id);
    if (!target) return;
    const duplicate: GoldItem = {
      ...target,
      id: Date.now().toString(),
      label: `${target.label || 'قطعة'} (نسخة)`,
    };
    setItems((prev) => [...prev, duplicate]);
  };

  const handleReset = () => {
    setItems([
      { id: Date.now().toString(), label: 'قطعة 1', weight: '', fineness: 875 },
    ]);
    setShowResetConfirm(false);
  };

  const handleCopyResults = () => {
    const textReport = `
=============================================
تقرير سبك وتحييف الذهب - بيراميدز جولد للمعادن
فرع دراو - أسوان (شارع الصاغة) | التاريخ: ${new Date().toLocaleDateString('ar-EG')}
=============================================
• عدد القطع المدخلة: ${items.length} قطعة
• إجمالي الوزن القائم: ${results.grossWeight.toFixed(3)} جرام
• إجمالي الذهب الخالص (24): ${results.netFineGold24.toFixed(3)} جرام
• درجة نقاء الخليط (التزنكة): ${results.mixPurity.toFixed(2)} سهم بالألف (‰)
• العيار المقدر للخليط: ${results.expectedKarat.toFixed(2)} قيراط
• الصافي المحيف على عيار 21 (875‰): ${(results.netFineGold24 / 0.875).toFixed(3)} جرام
• إجمالي الشوائب والنحاس: ${results.alloyWeight.toFixed(3)} جرام
=============================================
شركة بيراميدز جولد للمعادن والتطوير
فرع دراو - شارع الصاغة | هاتف وواتساب: +201111612026
    `.trim();

    navigator.clipboard.writeText(textReport);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#08090d] text-[#f4eedb]">
      {/* Top Header */}
      <Header
        currentView={currentView}
        onNavigate={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-2.5 sm:px-6 py-4 sm:py-8 space-y-4 sm:space-y-8">
        {currentView === 'about' ? (
          /* About Us Dedicated Page */
          <AboutUsPage onBackToCalculator={() => setCurrentView('calculator')} />
        ) : (
          /* Calculator Main View */
          <>
            {/* Slideshow Banner */}
            <Slideshow />

            {/* Section 1: Gold Items Input Area */}
            <section aria-labelledby="input-section-title" className="glass-panel rounded-2xl p-3.5 sm:p-7 border border-[#d4af37]/30 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-[#d4af37]/20">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#f5d36e] flex items-center justify-center text-sm shadow-sm shrink-0">
                      <i className="fa-solid fa-layer-group"></i>
                    </span>
                    <h2 id="input-section-title" className="text-base sm:text-xl font-black text-white">
                      إدخال بيانات القطع الذهبية للسبك
                    </h2>
                  </div>
                  <p className="text-[11px] sm:text-xs text-white/60 mt-1">
                    أدخل وزن كل قطعة وتزنكتها أو استخدم أزرار العيارات السريعة للتعبئة الفورية
                  </p>
                </div>

                {/* Quick Actions (Reset & Add Piece) */}
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setShowResetConfirm(true)}
                    className="flex-1 sm:flex-none px-3 py-2 sm:py-1.5 rounded-xl text-xs font-semibold bg-red-950/20 hover:bg-red-900/30 text-red-300 border border-red-500/20 transition-all flex items-center justify-center gap-1.5"
                  >
                    <i className="fa-solid fa-rotate-left"></i>
                    <span>تصفير الحاسبة</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleAddItem}
                    className="flex-1 sm:flex-none px-3.5 py-2 sm:py-1.5 rounded-xl text-xs font-bold gold-gradient-btn flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <i className="fa-solid fa-plus"></i>
                    <span>إضافة قطعة</span>
                  </button>
                </div>
              </div>

              {/* Items Cards List */}
              <div className="space-y-3.5">
                {items.map((item, index) => (
                  <GoldItemCard
                    key={item.id}
                    item={item}
                    index={index}
                    totalItems={items.length}
                    onUpdate={handleUpdateItem}
                    onDelete={handleDeleteItem}
                    onDuplicate={handleDuplicateItem}
                  />
                ))}
              </div>

              {/* Add Item Bottom Trigger */}
              <div className="mt-5">
                <button
                  type="button"
                  onClick={handleAddItem}
                  className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold bg-[#141722]/80 hover:bg-[#1a1e2d] text-[#f5d36e] border border-dashed border-[#d4af37]/40 hover:border-[#d4af37] transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <i className="fa-solid fa-circle-plus text-base text-[#d4af37]"></i>
                  <span>إضافة قطعة ذهب جديدة للقائمة (+)</span>
                </button>
              </div>
            </section>

            {/* Section 2: Results Dashboard */}
            <ResultsDashboard
              results={results}
              onOpenReport={() => setIsReportOpen(true)}
              onCopyResults={handleCopyResults}
              copySuccess={copySuccess}
              onCalculate={() => setIsFloatingAnnouncementOpen(true)}
            />

            {/* Section 3: Equivalent Karat Standardization */}
            <StandardizingSection results={results} />

            {/* Section 4: Quick Karat Composition Guide */}
            <QuickKaratGuide
              fineGold24={results.fineGold24}
              onCalculate={() => setIsFloatingAnnouncementOpen(true)}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigateToAbout={() => {
        setCurrentView('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />

      {/* Floating Announcement Result Modal */}
      <ResultFloatingAnnouncementModal
        isOpen={isFloatingAnnouncementOpen}
        onClose={() => setIsFloatingAnnouncementOpen(false)}
        results={results}
        items={items}
        onShowFullDetails={() => setIsSmeltDetailsOpen(true)}
      />

      {/* Detailed Smelt Modal */}
      <SmeltDetailsModal
        isOpen={isSmeltDetailsOpen}
        onClose={() => setIsSmeltDetailsOpen(false)}
        results={results}
        items={items}
        onOpenReport={() => setIsReportOpen(true)}
      />

      {/* Official Assay Certificate Modal */}
      <AssayReportModal
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
        items={items}
        results={results}
      />

      {/* Reset Confirmation Dialog */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="bg-[#12141c] border border-red-500/30 rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-red-500/15 text-red-400 flex items-center justify-center text-xl mx-auto mb-3">
              <i className="fa-solid fa-triangle-exclamation"></i>
            </div>
            <h3 className="text-base font-bold text-white mb-2">تأكيد تصفير البيانات</h3>
            <p className="text-xs text-white/70 mb-5 leading-relaxed">
              هل أنت متأكد من رغبتك في حذف جميع القطع المدخلة والبدء بحاسبة فارغة؟
            </p>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setShowResetConfirm(false)}
                className="py-2.5 rounded-xl text-xs font-semibold bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                إلغاء
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="py-2.5 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-500 text-white transition-colors"
              >
                نعم، تصفير
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
