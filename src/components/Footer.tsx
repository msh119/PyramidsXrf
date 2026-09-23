import React from 'react';
import { PyramidsLogo } from './PyramidsLogo';

interface FooterProps {
  onNavigateToAbout?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToAbout }) => {
  const phoneFormatted = '+20 11 1161 2026';
  const phoneCall = 'tel:+201111612026';
  const phoneWhatsApp = 'https://wa.me/201111612026?text=' + encodeURIComponent('السلام عليكم، استفسار لفرع دراو أسوان - شركة بيراميدز جولد');

  return (
    <footer id="contact" className="mt-16 border-t border-[#d4af37]/20 bg-[#07080c] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-96 h-32 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-white/5">
          {/* Column 1: Brand Info */}
          <div>
            <PyramidsLogo size="md" className="mb-3" />
            <p className="text-xs text-white/60 leading-relaxed max-w-sm mt-3">
              رائدة في قطاع التعدين واستخلاص وتكرير المعادن الثمينة بمصر. نوفر أدق الحلول الحسابية والفحوصات المخبرية بالأشعة السينية (XRF) لخدمة الصاغة والمعدنين.
            </p>
            {onNavigateToAbout && (
              <button
                type="button"
                onClick={onNavigateToAbout}
                className="mt-3 text-xs font-bold text-[#d4af37] hover:text-[#f5d36e] flex items-center gap-1.5 transition-colors"
              >
                <span>تعرف علينا أكثر في صفحة (من نحن)</span>
                <i className="fa-solid fa-arrow-left text-[10px]"></i>
              </button>
            )}
          </div>

          {/* Column 2: Branch & Services */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <i className="fa-solid fa-location-dot text-[#d4af37]"></i>
              <span>مقر ومعمل أسوان</span>
            </h4>
            <div className="space-y-2 text-xs text-white/70">
              <p>📍 مركز دراو - شارع الصاغة، محافظة أسوان</p>
              <p>🔬 معمل مجهز بأحدث وحدات XRF وأفران صهر وسبك الذهب</p>
              <p>⏱️ مواعيد العمل: يومياً من 9:00 صباحاً حتى 9:00 مساءً</p>
            </div>
          </div>

          {/* Column 3: Contact Us & Direct Phone */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <i className="fa-solid fa-headset text-[#d4af37]"></i>
              <span>اتصل بنا واستشر خبراءنا</span>
            </h4>
            <div className="space-y-2.5 text-xs text-white/70">
              {/* Direct Phone / Call */}
              <a
                href={phoneCall}
                className="flex items-center gap-2 hover:text-[#f5d36e] transition-colors"
              >
                <i className="fa-solid fa-phone text-[#d4af37]"></i>
                <span className="font-mono font-bold text-white text-sm dir-ltr">
                  {phoneFormatted}
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#d4af37]/15 text-[#f5d36e]">
                  اتصال
                </span>
              </a>

              {/* Direct WhatsApp */}
              <a
                href={phoneWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#25D366]/15 border border-[#25D366]/30 text-emerald-300 hover:bg-[#25D366]/25 transition-all text-xs font-semibold"
              >
                <i className="fa-brands fa-whatsapp text-sm text-[#25D366]"></i>
                <span>واتساب فرع دراو: 201111612026</span>
              </a>

              {/* Official Email */}
              <a
                href="mailto:Alassioutymining@gmail.com"
                className="flex items-center gap-2 hover:text-[#f5d36e] transition-colors pt-1"
              >
                <i className="fa-regular fa-envelope text-[#d4af37]"></i>
                <span className="font-mono text-white/80">Alassioutymining@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-white/50">
          <div>
            جميع الحقوق محفوظة © {new Date().getFullYear()} <strong className="text-white font-semibold">شركة بيراميدز جولد لمعالجة المعادن والتطوير</strong>
          </div>

          <div className="flex items-center gap-4">
            {onNavigateToAbout && (
              <button
                type="button"
                onClick={onNavigateToAbout}
                className="hover:text-[#f5d36e] transition-colors font-medium"
              >
                من نحن
              </button>
            )}
            <span>·</span>
            <a href="tel:+201111612026" className="hover:text-[#f5d36e] transition-colors dir-ltr font-mono font-bold text-[#d4af37]">
              01111612026
            </a>
            <span>·</span>
            <span className="text-[#d4af37] font-medium">فرع دراو - أسوان</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
