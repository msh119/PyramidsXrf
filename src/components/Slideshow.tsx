import React, { useState, useEffect } from 'react';
import refineryImg from '../assets/images/pyramids_gold_refinery_1790175111351.jpg';
import xrfImg from '../assets/images/xrf_gold_analyzer_lab_1790175124660.jpg';
import adSpaceImg from '../assets/images/advertising_space_banner_1790176777060.jpg';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  badge: string;
  icon: string;
  image: string;
  ctaText?: string;
  ctaTarget?: string;
  isExternalLink?: boolean;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'بيراميدز جولد: حلول متكاملة للتعدين والتكرير والمصاغ',
    subtitle: 'أعلى درجات الدقة في سبك الذهب واستخلاص المعادن الثمينة وتكرير السبائك بأحدث التقنيات الصناعية الصديقة للبيئة.',
    badge: 'خدمات التعدين والسبك',
    icon: 'fa-solid fa-fire-flame-curved',
    image: refineryImg,
    ctaText: 'استكشف خدمات التكرير',
    ctaTarget: '#services',
  },
  {
    id: 2,
    title: 'فرع دراو - أسوان: فحص وتحليل المعادن بأحدث أجهزة XRF بدقة متناهية',
    subtitle: 'معمل متخصص في شارع الصاغة بدراو، مجهز بأحدث أجهزة مطيافية الأشعة السينية (XRF) لتحديد نقاوة الذهب والعيارات في ثوانٍ.',
    badge: 'معمل التحليل الطيفي - أسوان',
    icon: 'fa-solid fa-microscope',
    image: xrfImg,
    ctaText: 'تعرف على فرع دراو',
    ctaTarget: '#contact',
  },
  {
    id: 3,
    title: 'مساحة إعلانية متميزة: أعلن معنا ووصّل علامتك التجارية لتجار وصاغة الذهب',
    subtitle: 'فرصة حصرية للشركات، الموردين، ومقدمي خدمات الذهب والتعدين للظهور أمام مئات الزوار والمتعاملين يومياً في هذه المساحة الإعلانية.',
    badge: 'مساحة إعلانية متاحة',
    icon: 'fa-solid fa-bullhorn',
    image: adSpaceImg,
    ctaText: 'احجز مساحتك الإعلانية عبر واتساب (01111612026)',
    ctaTarget: 'https://wa.me/201111612026?text=' + encodeURIComponent('مرحباً، أود الاستفسار عن تفاصيل وحجز مساحة إعلانية في منصة بيراميدز جولد.'),
    isExternalLink: true,
  },
];

export const Slideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section 
      aria-label="بانرات إعلانية وتوعوية"
      className="relative w-full rounded-2xl overflow-hidden glass-panel border border-[#d4af37]/30 shadow-2xl transition-all"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Container */}
      <div className="relative min-h-[260px] sm:min-h-[270px] md:min-h-[300px] w-full flex items-stretch">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex flex-col justify-end ${
                isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Background Image with Luxury Dark Scrim */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-[#0a0c10]/80 to-[#0a0c10]/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c10]/90 via-[#0a0c10]/50 to-transparent" />
              </div>

              {/* Slide Content */}
              <div className="relative z-10 p-4 sm:p-7 md:p-8 flex flex-col justify-end max-w-3xl pb-8 sm:pb-7">
                <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                  <span className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#f5d36e] shadow-sm">
                    <i className={`${slide.icon} text-[#d4af37]`}></i>
                    <span>{slide.badge}</span>
                  </span>
                </div>

                <h2 className="text-base sm:text-xl md:text-2xl font-black text-white leading-snug drop-shadow-md mb-1 sm:mb-2">
                  {slide.title}
                </h2>

                <p className="text-[11px] sm:text-sm text-gray-200/90 leading-relaxed max-w-2xl line-clamp-2 sm:line-clamp-none">
                  {slide.subtitle}
                </p>

                {slide.ctaTarget && (
                  <div className="mt-2.5 sm:mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
                    <a
                      href={slide.ctaTarget}
                      target={slide.isExternalLink ? "_blank" : undefined}
                      rel={slide.isExternalLink ? "noopener noreferrer" : undefined}
                      className={`inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold px-3 py-1.5 rounded-lg transition-all ${
                        slide.isExternalLink
                          ? 'bg-[#25D366] hover:bg-[#20ba59] text-white shadow-md shadow-emerald-950/40 border border-emerald-400/40'
                          : 'bg-[#d4af37]/20 hover:bg-[#d4af37]/30 text-[#f5d36e] hover:text-white border border-[#d4af37]/40'
                      }`}
                    >
                      {slide.isExternalLink && <i className="fa-brands fa-whatsapp text-xs sm:text-sm text-white"></i>}
                      <span>{slide.ctaText}</span>
                      <i className={`fa-solid ${slide.isExternalLink ? 'fa-arrow-up-right-from-square' : 'fa-arrow-left'} text-[9px] sm:text-[10px]`}></i>
                    </a>

                    {slide.id === 3 && (
                      <a
                        href="tel:+201111612026"
                        className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
                      >
                        <i className="fa-solid fa-phone text-[#d4af37] text-[10px]"></i>
                        <span>اتصال: 01111612026</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="الإعلان السابق"
        className="absolute top-1/2 -translate-y-1/2 right-3 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-[#d4af37] text-white hover:text-black border border-white/10 hover:border-[#d4af37] flex items-center justify-center transition-all duration-200 backdrop-blur-sm shadow-md"
      >
        <i className="fa-solid fa-chevron-right text-xs"></i>
      </button>

      <button
        onClick={nextSlide}
        aria-label="الإعلان التالي"
        className="absolute top-1/2 -translate-y-1/2 left-3 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-[#d4af37] text-white hover:text-black border border-white/10 hover:border-[#d4af37] flex items-center justify-center transition-all duration-200 backdrop-blur-sm shadow-md"
      >
        <i className="fa-solid fa-chevron-left text-xs"></i>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`الانتقال إلى الإعلان ${idx + 1}`}
            className={`transition-all duration-300 rounded-full ${
              idx === currentSlide
                ? 'w-7 h-2 bg-[#d4af37] shadow-[0_0_8px_#d4af37]'
                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
