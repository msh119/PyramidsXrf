import React, { useState } from 'react';
import { generateStandaloneHtml } from '../utils/generateStandaloneHtml';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const htmlContent = generateStandaloneHtml();

  const handleDownload = () => {
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'pyramids-gold-calculator.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(htmlContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-xl bg-[#0f1118] border border-[#d4af37]/45 rounded-2xl shadow-2xl p-6 text-white max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#d4af37]/20 text-[#f5d36e] flex items-center justify-center text-sm">
              <i className="fa-solid fa-file-code"></i>
            </span>
            <h3 className="text-base font-black text-white">
              تطبيق الويب كملف HTML مستقل كامل (Single File)
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm transition-colors"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Description */}
        <p className="text-xs text-white/70 leading-relaxed mb-4">
          يحتوي هذا الملف على هيكلية HTML وتنسيقات CSS المظلمة الفاخرة، واللوجو والأيقونات، ومنطق جافاسكريبت بالكامل في ملف واحد مدمج. يمكنك فتحه على أي جهاز هاتف أو حاسوب دون الحاجة لاتصال بالإنترنت!
        </p>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <button
            onClick={handleDownload}
            className="py-3 px-4 rounded-xl text-xs font-bold gold-gradient-btn flex items-center justify-center gap-2 shadow-lg"
          >
            <i className="fa-solid fa-download text-sm"></i>
            <span>تنزيل pyramids-gold-calculator.html</span>
          </button>

          <a
            href="/standalone.html"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-4 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/15 text-white border border-white/20 flex items-center justify-center gap-2 transition-colors text-center"
          >
            <i className="fa-solid fa-arrow-up-right-from-square text-sm text-[#d4af37]"></i>
            <span>فتح في نافذة مستقلة</span>
          </a>
        </div>

        {/* Code Preview & Copy */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-white/70">معاينة الكود المصدري للملف:</span>
          <button
            onClick={handleCopy}
            className="text-xs font-bold text-[#f5d36e] hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <i className={`fa-solid ${copied ? 'fa-check text-green-400' : 'fa-copy'}`}></i>
            <span>{copied ? 'تم نسخ الكود بنجاح!' : 'نسخ كود HTML بالكامل'}</span>
          </button>
        </div>

        <div className="flex-1 min-h-[160px] max-h-[220px] bg-black/60 rounded-xl p-3 border border-white/10 overflow-y-auto text-left font-mono text-[11px] text-gray-300">
          <pre dir="ltr" className="whitespace-pre-wrap">{htmlContent.slice(0, 1200)}...</pre>
        </div>

        <div className="mt-4 pt-3 border-t border-white/5 text-center text-[11px] text-white/40">
          ملف متوافق تماماً مع جميع متصفحات الاندرويد والآيفون والأجهزة المكتبية.
        </div>
      </div>
    </div>
  );
};
