import React from 'react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 'xrf',
      icon: 'fa-solid fa-microscope',
      title: 'فحص وتحليل المعادن بأحدث أجهزة XRF',
      desc: 'فحص فوري ودقيق لنسب المعادن والذهب وعناصر الشوائب بدقة تصل إلى أجزاء من المليون بواسطة أحدث أجهزة مطيافية الأشعة السينية المحمولة والمخبرية.',
      highlight: 'دقة فائقة في ثوانٍ',
    },
    {
      id: 'smelting',
      icon: 'fa-solid fa-fire-burner',
      title: 'صهر وسبك وتكرير خامات الذهب',
      desc: 'أفران سبك حرارية متطورة لصب السبائك القياسية واستخلاص الذهب الخالص عيار 24 بنقاوة 999.9 من مختلف خامات المناجم وكسر الذهب والمصاغ.',
      highlight: 'نقاوة تصل إلى 999.9‰',
    },
    {
      id: 'consulting',
      icon: 'fa-solid fa-mountain',
      title: 'استشارات تعدينية وجيولوجية في أسوان',
      desc: 'فريق من الخبراء والمهندسين الجيولوجيين لتقييم عينات التعدين، دراسات الجدوى التعدينية في الصحراء الشرقية ومثلث الذهب ومحافظة أسوان.',
      highlight: 'خبرة ميدانية موثقة',
    },
    {
      id: 'standardizing',
      icon: 'fa-solid fa-scale-balanced',
      title: 'تحييف وضبط العيارات لمصانع وتجار الصاغة',
      desc: 'حسابات هندسية دقيقة لضبط العيارات (21K, 18K, 24K) وموازنة نسب النحاس والفضة لتوفير أعلى كفاءة تصنيعية وتقليل هادر المعادن الثمينة.',
      highlight: 'حلول احترافية للصاغة',
    },
  ];

  return (
    <section id="services" className="glass-panel rounded-2xl p-6 sm:p-8 border border-[#d4af37]/30 shadow-xl relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none -ml-24" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#d4af37]/15 border border-[#d4af37]/35 text-[#f5d36e] mb-3">
          <i className="fa-solid fa-award text-[#d4af37]"></i>
          <span>خدمات التعدين والمعادن المتقدمة</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
          شركة <span className="gold-gradient-text">بيراميدز جولد</span> للمعادن والتطوير
        </h2>
        <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
          ريادة مصرية بمعايير عالمية في قطاع التعدين وصناعة الذهب، نقدم أحدث التقنيات لخدمة المستثمرين والتجار والصاغة بمحافظة أسوان وكافة ربوع مصر.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-5 rounded-xl bg-[#0d0f16]/80 border border-white/10 hover:border-[#d4af37]/50 transition-all duration-200 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2a2414] to-[#12141c] border border-[#d4af37]/30 text-[#f5d36e] flex items-center justify-center text-lg shadow-sm group-hover:scale-105 group-hover:border-[#d4af37] transition-all">
                  <i className={service.icon}></i>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20">
                  {service.highlight}
                </span>
              </div>

              <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#f5d36e] transition-colors">
                {service.title}
              </h3>

              <p className="text-xs text-white/65 leading-relaxed">
                {service.desc}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-white/50">
              <span className="flex items-center gap-1.5">
                <i className="fa-solid fa-check text-green-400 text-[10px]"></i>
                خدمة معتمدة بفرع دراو
              </span>
              <a
                href="#contact"
                className="text-[#d4af37] hover:text-[#f5d36e] font-semibold flex items-center gap-1 transition-colors"
              >
                <span>طلب الخدمة</span>
                <i className="fa-solid fa-arrow-left text-[9px]"></i>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Branch Spotlight Banner */}
      <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-[#17140b] via-[#10121a] to-[#17140b] border border-[#d4af37]/40 flex flex-wrap items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#d4af37]/20 text-[#f5d36e] flex items-center justify-center text-base shrink-0">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div>
            <div className="font-extrabold text-white text-sm">
              فرع دراو - محافظة أسوان
            </div>
            <div className="text-white/60 text-xs">
              موقع استراتيجي لتسهيل فحص وتثمين عينات المناجم والذهب الخام لشركائنا في الصعيد
            </div>
          </div>
        </div>

        <a
          href="https://wa.me/201000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg gold-gradient-btn text-xs font-bold flex items-center gap-2 whitespace-nowrap"
        >
          <i className="fa-brands fa-whatsapp text-sm"></i>
          <span>تواصل مع فرع أسوان</span>
        </a>
      </div>
    </section>
  );
};
