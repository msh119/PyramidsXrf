import React from 'react';
import { PyramidsLogo } from './PyramidsLogo';

interface AboutUsPageProps {
  onBackToCalculator: () => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onBackToCalculator }) => {
  const phoneNumber = '+201111612026';
  const phoneClean = '201111612026';
  const whatsappUrl = `https://wa.me/${phoneClean}?text=${encodeURIComponent('السلام عليكم، استفسار بخصوص خدمات فحص وسبك الذهب - شركة بيراميدز جولد فرع دراو')}`;

  const services = [
    {
      id: 'xrf',
      icon: 'fa-solid fa-microscope',
      title: 'فحص وتحليل المعادن بأحدث أجهزة XRF',
      desc: 'فحص طيفي فوري ودقيق لنسب المعادن والذهب وعناصر الشوائب بدقة تصل إلى أجزاء من المليون (ppm) وتحديد التزنكة بالألف (‰) خلال ثوانٍ معدودة.',
      badge: 'دقة فائقة في ثوانٍ',
    },
    {
      id: 'smelting',
      icon: 'fa-solid fa-fire-burner',
      title: 'صهر وسبك وتكرير خامات الذهب',
      desc: 'أفران سبك حرارية متطورة لصب السبائك القياسية واستخلاص الذهب الخالص عيار 24 بنقاوة 999.9 من مختلف خامات المناجم وكسر الذهب والمصاغ.',
      badge: 'نقاوة 999.9‰',
    },
    {
      id: 'consulting',
      icon: 'fa-solid fa-mountain',
      title: 'استشارات تعدينية وجيولوجية في أسوان',
      desc: 'فريق من الخبراء والمهندسين الجيولوجيين لتقييم عينات التعدين ودراسات الجدوى التعدينية في الصحراء الشرقية ومثلث الذهب ومحافظة أسوان.',
      badge: 'خبراء جيولوجيون',
    },
    {
      id: 'standardizing',
      icon: 'fa-solid fa-scale-balanced',
      title: 'تحييف وضبط العيارات لمصانع وتجار الصاغة',
      desc: 'حسابات هندسية دقيقة لضبط العيارات (21K, 18K, 24K) وموازنة نسب النحاس والفضة لتوفير أعلى كفاءة تصنيعية وتقليل هادر المعادن الثمينة.',
      badge: 'ضبط عيارات دقيق',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-2.5 sm:px-6 py-4 sm:py-8 space-y-6 sm:space-y-8 animate-fadeIn">
      {/* Navigation Breadcrumb / Back button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 sm:pb-4 border-b border-white/10">
        <button
          type="button"
          onClick={onBackToCalculator}
          className="w-full sm:w-auto px-4 py-2.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/15 text-white border border-white/15 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
        >
          <i className="fa-solid fa-arrow-right text-[#d4af37]"></i>
          <span>العودة إلى حاسبة السبك والتحييف</span>
        </button>

        <span className="text-xs font-semibold text-[#f5d36e] text-center sm:text-right">
          شركة بيراميدز جولد للمعادن والتطوير
        </span>
      </div>

      {/* Hero Presentation Banner */}
      <div className="glass-panel rounded-2xl sm:rounded-3xl p-5 sm:p-10 border border-[#d4af37]/35 shadow-2xl relative overflow-hidden text-center">
        {/* Decorative Golden Light Halo */}
        <div className="absolute top-0 right-1/2 translate-x-1/2 -mt-20 w-80 h-40 bg-[#d4af37]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          <PyramidsLogo size="lg" className="mb-4" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold bg-[#d4af37]/15 border border-[#d4af37]/35 text-[#f5d36e] mb-4">
            <i className="fa-solid fa-shield-halved text-[#d4af37]"></i>
            <span>الريادة في فحص وتكرير المعادن الثمينة بصعيد مصر</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white mb-3 tracking-wide">
            من نحن - <span className="gold-gradient-text">بيراميدز جولد</span>
          </h1>

          <p className="text-xs sm:text-base text-white/80 max-w-2xl leading-relaxed mb-6">
            شركة متخصصة ورائدة في قطاع التعدين، معالجة وتكرير خامات الذهب، والفحوصات الطيفية المتقدمة. نلتزم بأعلى معايير الدقة والشفافية لخدمة تجار الذهب والمعدنين في محافظة أسوان والصعيد وكافة أنحاء الجمهورية.
          </p>

          {/* Quick Direct Actions: Call & WhatsApp */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:${phoneNumber}`}
              className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs sm:text-sm font-bold gold-gradient-btn flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:scale-105 active:scale-95 transition-all"
            >
              <i className="fa-solid fa-phone-volume"></i>
              <span>اتصال مباشر: 01111612026</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-[#25D366]/20 hover:bg-[#25D366]/30 text-emerald-300 border border-[#25D366]/40 flex items-center justify-center gap-2 shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <i className="fa-brands fa-whatsapp text-lg text-[#25D366]"></i>
              <span>واتساب فرع دراو: 201111612026</span>
            </a>
          </div>
        </div>
      </div>

      {/* Direct Contact Card for Drau Branch */}
      <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-[#d4af37]/30 shadow-xl">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#d4af37]/20">
          <span className="w-10 h-10 rounded-xl bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#f5d36e] flex items-center justify-center text-lg shadow-sm">
            <i className="fa-solid fa-building-columns"></i>
          </span>
          <div>
            <h2 className="text-lg sm:text-xl font-black text-white">
              بيانات التواصل مع فرع ومعمل دراو - محافظة أسوان
            </h2>
            <p className="text-xs text-[#f5d36e]">
              معمل الفحص والتحليل الطيفي XRF وأفران السبك
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: Phone / Call */}
          <div className="p-5 rounded-2xl bg-[#0e1017]/90 border border-white/10 hover:border-[#d4af37]/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#d4af37]/15 text-[#f5d36e] flex items-center justify-center text-base mb-3">
                <i className="fa-solid fa-phone"></i>
              </div>
              <span className="text-xs text-white/60 block mb-1">الهاتف الموحد / الاتصال</span>
              <a
                href={`tel:${phoneNumber}`}
                className="text-lg sm:text-xl font-mono font-bold text-white hover:text-[#f5d36e] transition-colors dir-ltr block tabular-nums"
              >
                +20 11 1161 2026
              </a>
              <p className="text-[11px] text-white/50 mt-1">
                متاح لاستقبال اتصالاتكم واستفساراتكم
              </p>
            </div>

            <a
              href={`tel:${phoneNumber}`}
              className="mt-4 pt-3 border-t border-white/10 text-xs font-bold text-[#d4af37] flex items-center justify-between"
            >
              <span>إجراء مكالمة الآن</span>
              <i className="fa-solid fa-arrow-left text-[10px]"></i>
            </a>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="p-5 rounded-2xl bg-[#0e1017]/90 border border-[#25D366]/30 hover:border-[#25D366]/60 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center text-lg mb-3">
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <span className="text-xs text-white/60 block mb-1">خدمة عملاء واتساب (فرع دراو)</span>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-xl font-mono font-bold text-emerald-400 hover:text-emerald-300 transition-colors dir-ltr block tabular-nums"
              >
                201111612026
              </a>
              <p className="text-[11px] text-white/50 mt-1">
                رد فوري ومتابعة لنتائج الفحص والتحليل
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 pt-3 border-t border-white/10 text-xs font-bold text-emerald-400 flex items-center justify-between"
            >
              <span>بدء محادثة واتساب</span>
              <i className="fa-solid fa-arrow-left text-[10px]"></i>
            </a>
          </div>

          {/* Card 3: Location */}
          <div className="p-5 rounded-2xl bg-[#0e1017]/90 border border-white/10 hover:border-[#d4af37]/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#d4af37]/15 text-[#f5d36e] flex items-center justify-center text-base mb-3">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <span className="text-xs text-white/60 block mb-1">العنوان والمقر</span>
              <div className="text-sm font-bold text-white leading-snug">
                فرع دراو - شارع الصاغة
              </div>
              <p className="text-[11px] text-white/50 mt-1">
                مركز دراو، محافظة أسوان، جمهورية مصر العربية
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 text-xs text-white/60 flex items-center gap-1.5">
              <i className="fa-solid fa-clock text-[#d4af37]"></i>
              <span>يومياً: 9:00 ص - 9:00 م</span>
            </div>
          </div>
        </div>

        {/* Email note */}
        <div className="mt-5 p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-white/80">
            <i className="fa-regular fa-envelope text-[#d4af37]"></i>
            <span>البريد الإلكتروني الرسمي:</span>
            <a href="mailto:Alassioutymining@gmail.com" className="font-mono text-[#f5d36e] font-bold">
              Alassioutymining@gmail.com
            </a>
          </div>

          <span className="text-[11px] text-white/50">
            نرحب بطلبات الفحص والتحليل والمناقصات والتوريد
          </span>
        </div>
      </div>

      {/* Services Overview */}
      <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-[#d4af37]/30 shadow-xl">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-xl sm:text-2xl font-black text-white mb-2">
            خدمات شركة <span className="gold-gradient-text">بيراميدز جولد</span>
          </h2>
          <p className="text-xs sm:text-sm text-white/70">
            حلول متكاملة تغطي كافة مراحل سلاسل إمداد الذهب والمعادن الثمينة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-5 rounded-2xl bg-[#0e1017]/80 border border-white/10 hover:border-[#d4af37]/45 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2a2414] to-[#12141c] border border-[#d4af37]/30 text-[#f5d36e] flex items-center justify-center text-lg shadow-sm">
                    <i className={service.icon}></i>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {service.title}
                </h3>

                <p className="text-xs text-white/65 leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-white/50">
                <span className="flex items-center gap-1.5">
                  <i className="fa-solid fa-check text-green-400 text-[10px]"></i>
                  متاحة بفرع دراو
                </span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d4af37] hover:text-[#f5d36e] font-semibold flex items-center gap-1 transition-colors"
                >
                  <span>استفسر الآن</span>
                  <i className="fa-solid fa-arrow-left text-[9px]"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back Button Bottom */}
      <div className="text-center pt-4">
        <button
          type="button"
          onClick={onBackToCalculator}
          className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold gold-gradient-btn inline-flex items-center gap-2 shadow-lg hover:scale-105 active:scale-95 transition-all"
        >
          <i className="fa-solid fa-calculator"></i>
          <span>الرجوع إلى حاسبة سبك وتحييف الذهب</span>
        </button>
      </div>
    </div>
  );
};
