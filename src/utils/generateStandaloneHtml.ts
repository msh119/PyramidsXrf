/**
 * Generates a complete, pristine, standalone single-file HTML application (HTML + CSS + JS)
 * for Pyramids Gold Smelting & Standardizing Calculator with About Us page and Drau phone number.
 */
export function generateStandaloneHtml(): string {
  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>حاسبة سبك وتحييف الذهب - شركة بيراميدز جولد للمعادن والتطوير</title>
  <meta name="description" content="حاسبة سبك وتحييف الذهب المتقدمة لشركة بيراميدز جولد للمعادن والتطوير - فرع دراو أسوان، فحص وتحليل العيارات والتزنكة بدقة متناهية. هاتف: 201111612026">
  <!-- Google Fonts: Tajawal -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap" rel="stylesheet">
  <!-- FontAwesome 6 CDN -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <style>
    :root {
      --gold-primary: #d4af37;
      --gold-light: #fbe089;
      --gold-dark: #91721b;
      --gold-glow: rgba(212, 175, 55, 0.28);
      --bg-dark: #090a0f;
      --surface-glass: rgba(18, 20, 29, 0.75);
      --border-gold: rgba(212, 175, 55, 0.25);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Tajawal', -apple-system, sans-serif;
    }

    body {
      background-color: var(--bg-dark);
      background-image: 
        radial-gradient(ellipse 80% 50% at 50% -20%, rgba(212, 175, 55, 0.14), transparent),
        radial-gradient(circle at 100% 80%, rgba(212, 175, 55, 0.06), transparent 40%),
        radial-gradient(circle at 0% 50%, rgba(184, 134, 11, 0.05), transparent 30%);
      background-attachment: fixed;
      color: #f5f2eb;
      line-height: 1.6;
      padding-bottom: 50px;
    }

    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 16px;
    }

    /* Glassmorphism Styles */
    .glass-card {
      background: var(--surface-glass);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border: 1px solid var(--border-gold);
      border-radius: 18px;
      padding: 22px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      margin-bottom: 24px;
      position: relative;
      overflow: hidden;
    }

    .gold-gradient-text {
      background: linear-gradient(135deg, #fff2c4 0%, #d4af37 55%, #aa820a 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .btn-gold {
      background: linear-gradient(135deg, #e4be50 0%, #c89e24 60%, #9a7610 100%);
      color: #121008;
      font-weight: 800;
      border: none;
      border-radius: 12px;
      padding: 10px 18px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      transition: all 0.25s ease;
      box-shadow: 0 4px 14px rgba(212, 175, 55, 0.25);
    }
    .btn-gold:hover {
      background: linear-gradient(135deg, #f5d36e 0%, #dbb132 60%, #b38b19 100%);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
    }

    .btn-outline {
      background: rgba(255, 255, 255, 0.05);
      color: #fff;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 12px;
      padding: 9px 16px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      font-weight: 700;
      transition: all 0.2s ease;
    }
    .btn-outline:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: var(--gold-primary);
      color: var(--gold-light);
    }

    /* Header */
    header {
      padding: 16px 0;
      border-bottom: 1px solid rgba(212, 175, 55, 0.18);
      margin-bottom: 24px;
      background: rgba(9, 11, 16, 0.9);
      position: sticky;
      top: 0;
      z-index: 50;
      backdrop-filter: blur(10px);
    }
    .header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 14px;
    }
    .logo-wrap {
      display: flex;
      align-items: center;
      gap: 12px;
      cursor: pointer;
    }
    .logo-svg {
      width: 44px;
      height: 44px;
      filter: drop-shadow(0 2px 10px rgba(212, 175, 55, 0.4));
    }
    .brand-title {
      font-size: 19px;
      font-weight: 900;
      letter-spacing: 0.5px;
    }
    .brand-sub {
      font-size: 11px;
      color: rgba(212, 175, 55, 0.85);
    }
    .nav-tabs {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .nav-btn {
      padding: 8px 16px;
      border-radius: 12px;
      font-size: 13px;
      font-weight: 800;
      cursor: pointer;
      border: 1px solid transparent;
      transition: all 0.2s;
    }
    .nav-btn.active {
      background: linear-gradient(135deg, #e4be50 0%, #c89e24 60%, #9a7610 100%);
      color: #121008;
      box-shadow: 0 2px 12px rgba(212, 175, 55, 0.3);
    }
    .nav-btn:not(.active) {
      background: rgba(255, 255, 255, 0.05);
      color: #fff;
      border-color: rgba(255, 255, 255, 0.1);
    }
    .nav-btn:not(.active):hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: var(--gold-primary);
      color: var(--gold-light);
    }

    /* Slideshow Carousel */
    .carousel-box {
      position: relative;
      border-radius: 18px;
      overflow: hidden;
      border: 1px solid var(--border-gold);
      margin-bottom: 24px;
      min-height: 200px;
      background: #11131a;
      box-shadow: 0 10px 25px rgba(0,0,0,0.6);
    }
    .slide-item {
      display: none;
      padding: 30px 24px;
      position: relative;
      z-index: 2;
      background: linear-gradient(90deg, rgba(9,10,15,0.95) 0%, rgba(9,10,15,0.7) 60%, rgba(9,10,15,0.3) 100%);
      min-height: 200px;
      justify-content: center;
      flex-direction: column;
    }
    .slide-item.active {
      display: flex;
      animation: fadeIn 0.6s ease;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateX(10px); }
      to { opacity: 1; transform: translateX(0); }
    }
    .slide-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 10px;
      border-radius: 20px;
      font-size: 11px;
      font-weight: 700;
      background: rgba(212, 175, 55, 0.15);
      border: 1px solid rgba(212, 175, 55, 0.35);
      color: var(--gold-light);
      margin-bottom: 8px;
      width: fit-content;
    }
    .slide-title {
      font-size: 20px;
      font-weight: 900;
      color: #fff;
      margin-bottom: 6px;
    }
    .slide-desc {
      font-size: 13px;
      color: rgba(255, 255, 255, 0.8);
      max-width: 600px;
    }
    .carousel-controls {
      position: absolute;
      bottom: 12px;
      left: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
      z-index: 10;
    }
    .carousel-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      cursor: pointer;
      transition: all 0.25s;
    }
    .carousel-dot.active {
      width: 24px;
      border-radius: 6px;
      background: var(--gold-primary);
      box-shadow: 0 0 8px var(--gold-primary);
    }

    /* Calculation Area */
    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 18px;
      padding-bottom: 12px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }
    .section-title {
      font-size: 18px;
      font-weight: 800;
      color: #fff;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    /* Pieces List */
    .item-card {
      background: rgba(14, 16, 24, 0.8);
      border: 1px solid rgba(212, 175, 55, 0.2);
      border-radius: 14px;
      padding: 16px;
      margin-bottom: 14px;
      transition: border 0.2s;
    }
    .item-card:hover {
      border-color: rgba(212, 175, 55, 0.45);
    }
    .item-card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
    .item-number {
      background: rgba(212, 175, 55, 0.15);
      border: 1px solid rgba(212, 175, 55, 0.3);
      color: var(--gold-light);
      padding: 2px 8px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 800;
    }
    .item-title-input {
      background: transparent;
      border: none;
      color: #fff;
      font-weight: 700;
      font-size: 13px;
      margin-right: 8px;
      outline: none;
    }
    .btn-delete {
      background: transparent;
      border: none;
      color: #ff6b6b;
      cursor: pointer;
      font-size: 13px;
      padding: 4px;
      border-radius: 6px;
    }
    .btn-delete:hover {
      background: rgba(255, 107, 107, 0.1);
    }

    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-bottom: 10px;
    }
    @media (max-width: 580px) {
      .form-grid {
        grid-template-columns: 1fr;
      }
    }
    .field-group label {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 6px;
      font-weight: 600;
    }
    .input-wrap {
      position: relative;
    }
    .glass-input {
      width: 100%;
      height: 42px;
      background: rgba(8, 10, 15, 0.9);
      border: 1px solid rgba(212, 175, 55, 0.25);
      border-radius: 10px;
      padding: 0 12px;
      color: #fff;
      font-size: 15px;
      font-weight: 700;
      outline: none;
      transition: all 0.2s;
    }
    .glass-input:focus {
      border-color: var(--gold-primary);
      box-shadow: 0 0 10px rgba(212, 175, 55, 0.35);
    }
    .input-suffix {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 11px;
      color: rgba(255, 255, 255, 0.4);
      font-weight: 600;
      pointer-events-none;
    }

    /* Quick Preset Buttons */
    .presets-row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 6px;
      margin: 8px 0;
    }
    .btn-preset {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #ddd;
      border-radius: 8px;
      padding: 6px 4px;
      font-size: 11px;
      font-weight: 700;
      cursor: pointer;
      text-align: center;
      transition: all 0.2s;
    }
    .btn-preset:hover {
      background: rgba(212, 175, 55, 0.2);
      border-color: var(--gold-primary);
      color: #fff;
    }

    /* Subtotal strip */
    .subtotal-strip {
      padding-top: 8px;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: rgba(255, 255, 255, 0.6);
      flex-wrap: wrap;
      gap: 6px;
    }
    .subtotal-strip strong {
      color: var(--gold-light);
    }

    /* Results Dashboard Grid */
    .results-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
      margin-bottom: 16px;
    }
    .metric-card {
      background: rgba(12, 14, 20, 0.85);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 14px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .metric-card.gold-featured {
      background: linear-gradient(135deg, #1f1b11 0%, #13141c 100%);
      border-color: rgba(212, 175, 55, 0.45);
      box-shadow: 0 0 20px rgba(212, 175, 55, 0.12);
    }
    .metric-label {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.7);
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
    }
    .metric-val {
      font-size: 26px;
      font-weight: 900;
      color: #fff;
      font-family: monospace;
    }
    .metric-card.gold-featured .metric-val {
      color: var(--gold-light);
    }
    .metric-unit {
      font-size: 11px;
      color: var(--gold-primary);
      font-weight: 700;
      margin-top: 4px;
    }

    /* 21K Dedicated Highlight Box */
    .highlight-21k-box {
      background: linear-gradient(135deg, #241c0b 0%, #161824 50%, #0c0d14 100%);
      border: 2px solid rgba(212, 175, 55, 0.65);
      border-radius: 16px;
      padding: 16px 20px;
      margin-bottom: 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 14px;
      box-shadow: 0 0 25px rgba(212, 175, 55, 0.18);
    }

    /* Quick Karat Guide Table */
    .guide-table-wrap {
      overflow-x: auto;
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(10, 11, 17, 0.7);
      margin-top: 12px;
    }
    .guide-table {
      width: 100%;
      border-collapse: collapse;
      text-align: right;
      font-size: 13px;
      min-width: 580px;
    }
    .guide-table th {
      background: rgba(255, 255, 255, 0.05);
      padding: 10px 12px;
      font-weight: 700;
      border-bottom: 1px solid rgba(212, 175, 55, 0.3);
      color: rgba(255, 255, 255, 0.85);
    }
    .guide-table td {
      padding: 10px 12px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    /* Floating Modal Announcement */
    .modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.82);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      z-index: 9999;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 16px;
    }
    .modal-overlay.active {
      display: flex;
    }
    .floating-card {
      background: linear-gradient(135deg, #181a26 0%, #10121a 60%, #0a0b10 100%);
      border: 2px solid var(--gold-primary);
      border-radius: 24px;
      padding: 24px;
      max-width: 500px;
      width: 100%;
      box-shadow: 0 0 50px rgba(212, 175, 55, 0.4);
      position: relative;
      text-align: center;
      animation: scalePop 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    @keyframes scalePop {
      from { transform: scale(0.9) translateY(20px); opacity: 0; }
      to { transform: scale(1) translateY(0); opacity: 1; }
    }
    .sparkle-dot {
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #fde047;
      animation: pulseSparkle 1.5s infinite;
    }
    @keyframes pulseSparkle {
      0% { transform: scale(0.6); opacity: 0.3; }
      50% { transform: scale(1.4); opacity: 1; box-shadow: 0 0 10px #fde047; }
      100% { transform: scale(0.6); opacity: 0.3; }
    }

    /* Details Modal Box */
    .details-modal-box {
      background: #0f111a;
      border: 1px solid rgba(212, 175, 55, 0.5);
      border-radius: 20px;
      padding: 22px;
      max-width: 650px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
      text-align: right;
    }

    /* Standardizing Box */
    .standard-box {
      background: linear-gradient(135deg, rgba(26, 23, 13, 0.7) 0%, rgba(16, 18, 26, 0.85) 100%);
      border: 1px solid rgba(212, 175, 55, 0.4);
      border-radius: 14px;
      padding: 18px;
      margin-top: 14px;
    }

    /* Views */
    .view-container {
      display: block;
    }
    .view-container.hidden {
      display: none;
    }

    /* Footer */
    footer {
      border-top: 1px solid rgba(212, 175, 55, 0.15);
      padding: 24px 0;
      margin-top: 30px;
      text-align: center;
      font-size: 12px;
      color: rgba(255, 255, 255, 0.6);
    }
    .footer-brand {
      color: var(--gold-light);
      font-weight: 800;
      margin-bottom: 6px;
    }

    /* Print styling */
    @media print {
      body { background: #fff !important; color: #000 !important; }
      .no-print { display: none !important; }
      .glass-card { background: #fff !important; border: 1px solid #999 !important; box-shadow: none !important; }
      .gold-gradient-text { -webkit-text-fill-color: initial !important; color: #8a6914 !important; }
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header with View Switcher -->
    <header>
      <div class="header-content">
        <div class="logo-wrap" onclick="switchView('calculator')">
          <svg class="logo-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="pgGold1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#fff2be" />
                <stop offset="50%" stop-color="#d4af37" />
                <stop offset="100%" stop-color="#8a6914" />
              </linearGradient>
            </defs>
            <polygon points="50,12 88,85 12,85" stroke="url(#pgGold1)" stroke-width="4" fill="#13141a" />
            <polygon points="50,12 50,85 88,85" fill="url(#pgGold1)" opacity="0.3" />
            <path d="M32 36 L32 78" stroke="url(#pgGold1)" stroke-width="6" stroke-linecap="round" />
            <path d="M32 36 L52 36 C64 36 67 44 65 52 C63 59 56 63 46 63 L32 63" stroke="url(#pgGold1)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
            <circle cx="50" cy="11" r="2.5" fill="#fff" />
          </svg>
          <div>
            <div class="brand-title"><span class="gold-gradient-text">PYRAMIDS</span> GOLD</div>
            <div class="brand-sub">بيراميدز جولد للمعادن والتطوير</div>
          </div>
        </div>

        <div class="nav-tabs">
          <button class="nav-btn active" id="tabCalculator" onclick="switchView('calculator')">
            <i class="fa-solid fa-calculator"></i>
            <span>الحاسبة</span>
          </button>
          <button class="nav-btn" id="tabAbout" onclick="switchView('about')">
            <i class="fa-solid fa-building"></i>
            <span>من نحن</span>
          </button>
          <a href="tel:+201111612026" class="btn-outline" style="border-color: rgba(212,175,55,0.4); color: var(--gold-light);">
            <i class="fa-solid fa-phone"></i>
            <span style="font-family: monospace;">01111612026</span>
          </a>
        </div>
      </div>
    </header>

    <!-- VIEW 1: CALCULATOR -->
    <div id="calculatorView" class="view-container">
      <!-- Slideshow Carousel -->
      <div class="carousel-box no-print" id="carouselBox">
        <div class="slide-item active" id="slide0">
          <div class="slide-badge">
            <i class="fa-solid fa-fire-burner"></i>
            <span>خدمات السبك والتكرير</span>
          </div>
          <h2 class="slide-title">بيراميدز جولد: حلول متكاملة للتعدين والتكرير والمصاغ</h2>
          <p class="slide-desc">
            أحدث أفران صهر وسبك الذهب، تكرير المعادن الثمينة واستخلاص عيار 24 بنقاوة تصل إلى 999.9 في الألف بمعايير دولية.
          </p>
        </div>

        <div class="slide-item" id="slide1">
          <div class="slide-badge">
            <i class="fa-solid fa-microscope"></i>
            <span>معمل أسوان المتخصص</span>
          </div>
          <h2 class="slide-title">فرع دراو - أسوان: فحص وتحليل المعادن بأحدث أجهزة XRF بدقة متناهية</h2>
          <p class="slide-desc">
            تحليل طيفي سريع ودقيق لعينات الذهب والمناجم وتحديد العيارات بالألف (o/oo) خلال لحظات لخدمة تجار ومعدني الصعيد.
          </p>
        </div>

        <div class="carousel-controls">
          <div class="carousel-dot active" onclick="setSlide(0)"></div>
          <div class="carousel-dot" onclick="setSlide(1)"></div>
        </div>
      </div>

      <!-- Main Calculation Area -->
      <main>
        <div class="glass-card">
          <div class="section-header">
            <div class="section-title">
              <i class="fa-solid fa-calculator" style="color: var(--gold-primary);"></i>
              <span>إدخال بيانات القطع الذهبية للسبك</span>
            </div>

            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <button class="btn-outline" onclick="resetCalculator()" style="color: #ff8888;">
                <i class="fa-solid fa-rotate-left"></i>
                <span>تصفير الحاسبة</span>
              </button>
              <button class="btn-gold" onclick="addNewItem()">
                <i class="fa-solid fa-plus"></i>
                <span>إضافة قطعة</span>
              </button>
            </div>
          </div>

          <!-- Dynamic Items Container -->
          <div id="itemsContainer"></div>

          <div style="margin-top: 14px; text-align: center;">
            <button class="btn-gold" onclick="addNewItem()" style="width: 100%; justify-content: center; height: 44px;">
              <i class="fa-solid fa-plus"></i>
              <span>إضافة قطعة ذهب جديدة (+)</span>
            </button>
          </div>
        </div>

        <!-- Final Results Dashboard -->
        <div class="glass-card">
          <div class="section-header">
            <div class="section-title">
              <i class="fa-solid fa-chart-pie" style="color: var(--gold-primary);"></i>
              <span>النتائج الإجمالية لعملية السبك (Real-time Results)</span>
            </div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <button class="btn-gold" onclick="triggerFloatingAnnouncement()" style="box-shadow: 0 0 15px rgba(212,175,55,0.4);">
                <i class="fa-solid fa-calculator"></i>
                <span>احسب النتيجة</span>
              </button>
              <button class="btn-outline" onclick="window.print()">
                <i class="fa-solid fa-print"></i>
                <span>طباعة تقرير</span>
              </button>
            </div>
          </div>

          <div class="results-grid">
            <div class="metric-card">
              <div class="metric-label">
                <span>إجمالي الوزن القائم</span>
                <i class="fa-solid fa-scale-balanced" style="color: var(--gold-primary);"></i>
              </div>
              <div class="metric-val" id="resGrossWeight">0.000</div>
              <div class="metric-unit">جرام (Gross Weight)</div>
            </div>

            <div class="metric-card gold-featured">
              <div class="metric-label">
                <span style="color: var(--gold-light); font-weight: 800;">إجمالي الذهب الخالص (24)</span>
                <i class="fa-solid fa-crown" style="color: var(--gold-primary);"></i>
              </div>
              <div class="metric-val" id="resFineGold">0.000</div>
              <div class="metric-unit">جرام عيار 24 صافي</div>
            </div>

            <div class="metric-card">
              <div class="metric-label">
                <span>درجة النقاء المتوقعة (التزنكة)</span>
                <i class="fa-solid fa-flask-vial" style="color: var(--gold-primary);"></i>
              </div>
              <div class="metric-val" id="resMixPurity">0.00</div>
              <div class="metric-unit">سهم بالألف (‰ o/oo)</div>
            </div>

            <div class="metric-card">
              <div class="metric-label">
                <span>العيار المتوقع للخليط</span>
                <i class="fa-solid fa-gem" style="color: var(--gold-primary);"></i>
              </div>
              <div class="metric-val" id="resExpectedKarat" style="color: var(--gold-light);">0.00</div>
              <div class="metric-unit">قيراط من 24 (Karat)</div>
            </div>
          </div>

          <!-- Dedicated Highlight for 21K Standardized Equivalent -->
          <div class="highlight-21k-box">
            <div>
              <div style="display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 800; color: var(--gold-light);">
                <i class="fa-solid fa-coins" style="color: var(--gold-primary);"></i>
                <span>الصافي المحيف على عيار 21 (875):</span>
              </div>
              <div style="font-size: 32px; font-weight: 900; color: #fff; font-family: monospace; margin: 4px 0;" id="resEquiv21k">
                0.000 جم
              </div>
              <div style="font-size: 11px; color: rgba(255,255,255,0.65);">
                وزن الذهب المعادل لعيار 21 (Fine Gold ÷ 0.875)
              </div>
            </div>

            <button class="btn-gold" onclick="triggerFloatingAnnouncement()">
              <i class="fa-solid fa-wand-magic-sparkles"></i>
              <span>احسب واعرض تفاصيل السبكة</span>
            </button>
          </div>

          <div style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px; font-size: 12px; color: rgba(255,255,255,0.7); background: rgba(255,255,255,0.03); padding: 10px 14px; border-radius: 10px;">
            <span>إجمالي الشوائب والنحاس: <strong id="resAlloyWeight" style="color:#fff;">0.000 جم</strong></span>
            <span>نسبة الذهب النقي: <strong id="resPercentPure" style="color: var(--gold-light);">0.0%</strong></span>
            <span>دقة الحساب: 0.001 جرام</span>
          </div>
        </div>

        <!-- Quick Karat Guide Section -->
        <div class="glass-card">
          <div class="section-header">
            <div class="section-title">
              <i class="fa-solid fa-book-open" style="color: var(--gold-primary);"></i>
              <span>دليل العيارات الذهبية ونسب السبك (Quick Karat Composition Guide)</span>
            </div>
            <button class="btn-gold" onclick="triggerFloatingAnnouncement()">
              <i class="fa-solid fa-calculator"></i>
              <span>احسب النتيجة</span>
            </button>
          </div>

          <div class="guide-table-wrap">
            <table class="guide-table">
              <thead>
                <tr>
                  <th>العيار</th>
                  <th>التزنكة بالألف (‰)</th>
                  <th>نسبة الذهب النقي</th>
                  <th>نسبة المعادن المخلوطة</th>
                  <th>المعادن المضافة</th>
                  <th>الاستخدام الشائع</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="font-weight: 800; color: #fde047;">عيار 24 (24K)</td>
                  <td style="font-family: monospace; color: var(--gold-light);">999.9 ‰</td>
                  <td>%99.99</td>
                  <td>%0.01</td>
                  <td>ذهب خالص 100%</td>
                  <td>سبائك واستثمار</td>
                </tr>
                <tr>
                  <td style="font-weight: 800; color: #fbbf24;">عيار 22 (22K)</td>
                  <td style="font-family: monospace; color: var(--gold-light);">916.6 ‰</td>
                  <td>%91.67</td>
                  <td>%8.33</td>
                  <td>نحاس + فضة</td>
                  <td>صاغة الخليج والهند</td>
                </tr>
                <tr style="background: rgba(212,175,55,0.15);">
                  <td style="font-weight: 900; color: #fff;"><i class="fa-solid fa-star" style="color: var(--gold-primary); font-size: 10px;"></i> عيار 21 (21K)</td>
                  <td style="font-family: monospace; color: var(--gold-light); font-weight: 800;">875.0 ‰</td>
                  <td style="font-weight: 800; color: #fff;">%87.50</td>
                  <td>%12.50</td>
                  <td>نحاس أحمر/أصفر + فضة</td>
                  <td>الأكثر شعبية بمصر والشرق الأوسط</td>
                </tr>
                <tr>
                  <td style="font-weight: 800; color: #f59e0b;">عيار 18 (18K)</td>
                  <td style="font-family: monospace; color: var(--gold-light);">750.0 ‰</td>
                  <td>%75.00</td>
                  <td>%25.00</td>
                  <td>فضة + نحاس + زنك</td>
                  <td>المجوهرات الحديثة والألماس</td>
                </tr>
                <tr>
                  <td style="font-weight: 800; color: #d97706;">عيار 14 (14K)</td>
                  <td style="font-family: monospace; color: var(--gold-light);">585.0 ‰</td>
                  <td>%58.50</td>
                  <td>%41.50</td>
                  <td>نحاس وفضة وزنك</td>
                  <td>صلابة عالية وتصدير</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Equivalent Standardization Section -->
        <div class="glass-card">
          <div class="section-header">
            <div class="section-title">
              <i class="fa-solid fa-arrows-split-up-and-left" style="color: var(--gold-primary);"></i>
              <span>قسم التحييف على عيار محدد (Equivalent Weight Calculator)</span>
            </div>
          </div>

          <div style="margin-bottom: 16px;">
            <label style="display: block; font-size: 13px; font-weight: 700; margin-bottom: 8px;">
              اختر العيار الهدف للتحييف:
            </label>
            <select id="targetKaratSelect" onchange="calculateAll()" class="glass-input" style="max-width: 260px; height: 44px; cursor: pointer;">
              <option value="875" selected>عيار 21 (875 بالألف)</option>
              <option value="750">عيار 18 (750 بالألف)</option>
              <option value="916.67">عيار 22 (916.6 بالألف)</option>
              <option value="999.9">عيار 24 (999.9 بالألف)</option>
            </select>
          </div>

          <div class="standard-box">
            <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 10px;">
              <div>
                <span style="font-size: 13px; color: var(--gold-light); font-weight: 800;">
                  الصافي المحيف (وزن الذهب المكافئ للعيار الهدف):
                </span>
                <div style="font-size: 32px; font-weight: 900; color: #fff; font-family: monospace; margin: 4px 0;" id="resEquivalentWeight">
                  0.000 جم
                </div>
              </div>
              <div style="font-size: 12px; color: rgba(255,255,255,0.7); max-width: 400px;" id="tuningAdvice">
                المعادلة: إجمالي الذهب الخالص ÷ نقاوة العيار الهدف
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- VIEW 2: ABOUT US (من نحن) -->
    <div id="aboutView" class="view-container hidden">
      <div class="glass-card" style="text-align: center; padding: 36px 20px;">
        <svg class="logo-svg" style="width: 70px; height: 70px; margin: 0 auto 12px;" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,12 88,85 12,85" stroke="url(#pgGold1)" stroke-width="4" fill="#13141a" />
          <polygon points="50,12 50,85 88,85" fill="url(#pgGold1)" opacity="0.3" />
          <path d="M32 36 L32 78" stroke="url(#pgGold1)" stroke-width="6" stroke-linecap="round" />
          <path d="M32 36 L52 36 C64 36 67 44 65 52 C63 59 56 63 46 63 L32 63" stroke="url(#pgGold1)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
          <circle cx="50" cy="11" r="2.5" fill="#fff" />
        </svg>

        <h1 style="font-size: 26px; font-weight: 900; color: #fff; margin-bottom: 6px;">
          من نحن - <span class="gold-gradient-text">شركة بيراميدز جولد</span> لمعالجة المعادن والتطوير
        </h1>
        <p style="max-width: 650px; margin: 0 auto 20px; font-size: 14px; color: rgba(255,255,255,0.8); line-height: 1.7;">
          شركة مصرية رائدة في قطاع التعدين واستخلاص وتكرير خامات الذهب. نقدم أدق الفحوصات المخبرية بالأشعة السينية (XRF) وأفران سبك متطورة، نخدم تجار الذهب والمعدنين في محافظة أسوان ومثلث الذهب وكافة ربوع مصر.
        </p>

        <!-- Direct Action Buttons -->
        <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
          <a href="tel:+201111612026" class="btn-gold" style="padding: 12px 24px; font-size: 15px;">
            <i class="fa-solid fa-phone-volume"></i>
            <span>اتصال مباشر: 01111612026</span>
          </a>
          <a href="https://wa.me/201111612026?text=السلام%20عليكم%20استفسار%20بخصوص%20خدمات%20بيراميدز%20جولد%20فرع%20دراو" target="_blank" class="btn-outline" style="padding: 12px 24px; font-size: 15px; border-color: #25D366; color: #25D366;">
            <i class="fa-brands fa-whatsapp" style="font-size: 18px;"></i>
            <span>واتساب فرع دراو: 201111612026</span>
          </a>
        </div>
      </div>

      <!-- Contact Info Section -->
      <div class="glass-card">
        <div class="section-header">
          <div class="section-title">
            <i class="fa-solid fa-address-book" style="color: var(--gold-primary);"></i>
            <span>بيانات التواصل ومقر فرع دراو - أسوان</span>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px;">
          <div style="background: rgba(10,12,18,0.8); border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; padding: 18px;">
            <div style="font-size: 12px; color: rgba(255,255,255,0.6); margin-bottom: 4px;">الهاتف والاتصال المباشر</div>
            <a href="tel:+201111612026" style="font-size: 20px; font-weight: 900; color: #fff; font-family: monospace; display: block; text-decoration: none; margin-bottom: 6px;">
              +20 11 1161 2026
            </a>
            <p style="font-size: 11px; color: var(--gold-light);">متاح طوال ساعات العمل لاستقبال اتصالاتكم</p>
          </div>

          <div style="background: rgba(10,12,18,0.8); border: 1px solid rgba(37,211,102,0.3); border-radius: 14px; padding: 18px;">
            <div style="font-size: 12px; color: rgba(255,255,255,0.6); margin-bottom: 4px;">المحادثات الفورية (WhatsApp)</div>
            <a href="https://wa.me/201111612026" target="_blank" style="font-size: 20px; font-weight: 900; color: #25D366; font-family: monospace; display: block; text-decoration: none; margin-bottom: 6px;">
              201111612026
            </a>
            <p style="font-size: 11px; color: rgba(255,255,255,0.6);">رد سريع ومتابعة لنتائج فحص وتعيير الذهب</p>
          </div>

          <div style="background: rgba(10,12,18,0.8); border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; padding: 18px;">
            <div style="font-size: 12px; color: rgba(255,255,255,0.6); margin-bottom: 4px;">العنوان والمقر</div>
            <div style="font-size: 15px; font-weight: 800; color: #fff; margin-bottom: 4px;">
              مركز دراو - طريق مصر أسوان الزراعي
            </div>
            <p style="font-size: 11px; color: rgba(255,255,255,0.6);">محافظة أسوان | يومياً 9:00 ص - 9:00 م</p>
          </div>
        </div>

        <div style="margin-top: 14px; padding: 12px; border-radius: 10px; background: rgba(255,255,255,0.03); font-size: 12px; color: rgba(255,255,255,0.7); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
          <span>البريد الإلكتروني: <strong style="color: var(--gold-light);">Alassioutymining@gmail.com</strong></span>
          <span>معمل فحص طيفي XRF معتمد ومجهز بالكامل</span>
        </div>
      </div>

      <!-- Services Section inside About Us -->
      <div class="glass-card">
        <div class="section-header">
          <div class="section-title">
            <i class="fa-solid fa-award" style="color: var(--gold-primary);"></i>
            <span>خدماتنا المتخصصة</span>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px;">
          <div style="background: rgba(12,14,20,0.8); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 16px;">
            <div style="font-size: 14px; font-weight: 800; color: #fff; margin-bottom: 6px;"><i class="fa-solid fa-microscope" style="color: var(--gold-primary);"></i> فحص وتحليل بأحدث أجهزة XRF</div>
            <div style="font-size: 12px; color: rgba(255,255,255,0.65); line-height: 1.5;">تحليل مطيافي متقدم لتحديد التزنكة ونسب المعادن بدقة فورية فائقة.</div>
          </div>

          <div style="background: rgba(12,14,20,0.8); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 16px;">
            <div style="font-size: 14px; font-weight: 800; color: #fff; margin-bottom: 6px;"><i class="fa-solid fa-fire-burner" style="color: var(--gold-primary);"></i> صهر وسبك وتكرير الذهب</div>
            <div style="font-size: 12px; color: rgba(255,255,255,0.65); line-height: 1.5;">أفران حرارية لصب السبائك القياسية واستخلاص الذهب الخالص عيار 24.</div>
          </div>

          <div style="background: rgba(12,14,20,0.8); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 16px;">
            <div style="font-size: 14px; font-weight: 800; color: #fff; margin-bottom: 6px;"><i class="fa-solid fa-mountain" style="color: var(--gold-primary);"></i> استشارات تعدينية في أسوان</div>
            <div style="font-size: 12px; color: rgba(255,255,255,0.65); line-height: 1.5;">فحص عينات المناجم ومثلث الذهب والصحراء الشرقية بإشراف جيولوجيين.</div>
          </div>

          <div style="background: rgba(12,14,20,0.8); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 16px;">
            <div style="font-size: 14px; font-weight: 800; color: #fff; margin-bottom: 6px;"><i class="fa-solid fa-scale-balanced" style="color: var(--gold-primary);"></i> تحييف وضبط العيارات للصاغة</div>
            <div style="font-size: 12px; color: rgba(255,255,255,0.65); line-height: 1.5;">حسابات دقيقة لموازنة العيارات وتقليل هادر المعادن لمصانع الصاغة.</div>
          </div>
        </div>

        <div style="text-align: center; margin-top: 20px;">
          <button class="btn-gold" onclick="switchView('calculator')">
            <i class="fa-solid fa-calculator"></i>
            <span>الرجوع إلى حاسبة سبك وتحييف الذهب</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer>
      <div class="footer-brand">شركة بيراميدز جولد لمعالجة المعادن والتطوير</div>
      <p>فرع دراو / محافظة أسوان - مصر | هاتف وواتساب: 01111612026</p>
      <div style="margin-top: 8px; display: flex; justify-content: center; gap: 12px;">
        <span onclick="switchView('calculator')" style="cursor: pointer; color: var(--gold-light);">الحاسبة</span>
        <span>·</span>
        <span onclick="switchView('about')" style="cursor: pointer; color: var(--gold-light);">من نحن</span>
        <span>·</span>
        <a href="tel:+201111612026" style="color: #fff; text-decoration: none;">01111612026</a>
      </div>
    </footer>
  </div>

  <!-- Modal 1: Floating Announcement Card with Effects -->
  <div class="modal-overlay" id="floatingAnnouncementModal">
    <div class="floating-card">
      <div class="sparkle-dot" style="top: 20px; left: 30px;"></div>
      <div class="sparkle-dot" style="top: 40px; right: 25px; animation-delay: 0.5s;"></div>
      <div class="sparkle-dot" style="bottom: 30px; left: 40px; animation-delay: 1s;"></div>

      <div style="font-size: 11px; font-weight: 800; background: rgba(212,175,55,0.2); border: 1px solid var(--gold-primary); color: var(--gold-light); display: inline-block; padding: 4px 12px; border-radius: 20px; margin-bottom: 12px;">
        <i class="fa-solid fa-bell"></i> إعلان فوري - نتائج معمل التحليل
      </div>

      <h3 style="font-size: 22px; font-weight: 900; color: #fff; margin-bottom: 4px;">
        تم احتساب نتيجة السبك بنجاح!
      </h3>
      <p style="font-size: 12px; color: var(--gold-light); margin-bottom: 16px;">
        شركة بيراميدز جولد للمعادن والتطوير - فرع دراو أسوان (هاتف: 01111612026)
      </p>

      <!-- Golden Box for 21K Equivalence -->
      <div style="background: linear-gradient(135deg, #2a220e 0%, #151722 100%); border: 1px solid var(--gold-light); border-radius: 16px; padding: 16px; margin-bottom: 18px;">
        <div style="font-size: 13px; font-weight: 800; color: rgba(255,255,255,0.85); margin-bottom: 4px;">
          الصافي المحيف على عيار 21 (875):
        </div>
        <div style="font-size: 36px; font-weight: 900; color: var(--gold-light); font-family: monospace;" id="modalEquiv21">
          0.000 جم
        </div>
        <div style="font-size: 11px; color: rgba(255,255,255,0.6);" id="modalFine24">
          (معادل لذهب خالص 0.000 جم عيار 24)
        </div>
      </div>

      <!-- Quick Metrics Strip -->
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 18px; font-size: 12px;">
        <div style="background: rgba(255,255,255,0.05); padding: 8px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.1);">
          <span style="display: block; font-size: 10px; color: rgba(255,255,255,0.5);">الوزن القائم</span>
          <strong style="color: #fff; font-family: monospace;" id="modalGross">0.000</strong> جم
        </div>
        <div style="background: rgba(255,255,255,0.05); padding: 8px; border-radius: 10px; border: 1px solid var(--gold-primary);">
          <span style="display: block; font-size: 10px; color: rgba(255,255,255,0.5);">الذهب الخالص</span>
          <strong style="color: var(--gold-light); font-family: monospace;" id="modalFine">0.000</strong> جم
        </div>
        <div style="background: rgba(255,255,255,0.05); padding: 8px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.1);">
          <span style="display: block; font-size: 10px; color: rgba(255,255,255,0.5);">العيار المقدر</span>
          <strong style="color: #fff; font-family: monospace;" id="modalKarat">0.00</strong> K
        </div>
      </div>

      <!-- Action Buttons -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
        <button class="btn-gold" onclick="openDetailsModal()" style="justify-content: center;">
          <i class="fa-solid fa-list-check"></i>
          <span>اعرض تفاصيل السبكه</span>
        </button>
        <button class="btn-outline" onclick="closeFloatingAnnouncement()" style="justify-content: center;">
          <i class="fa-solid fa-check"></i>
          <span>تم / استمرار</span>
        </button>
      </div>
    </div>
  </div>

  <!-- Modal 2: Detailed Smelt Composition Modal -->
  <div class="modal-overlay" id="smeltDetailsModal">
    <div class="details-modal-box">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px; margin-bottom: 16px;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <div style="width: 36px; height: 36px; border-radius: 8px; background: rgba(212,175,55,0.2); color: var(--gold-light); display: flex; align-items: center; justify-content: center;">
            <i class="fa-solid fa-gem"></i>
          </div>
          <div>
            <h3 style="font-size: 16px; font-weight: 800; color: #fff;">تفاصيل السبيكة والتحليل الفني</h3>
            <span style="font-size: 11px; color: var(--gold-light);">بيراميدز جولد - معمل XRF فرع دراو</span>
          </div>
        </div>
        <button class="btn-outline" onclick="closeDetailsModal()" style="padding: 6px 12px;">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div style="background: linear-gradient(135deg, #241c0b 0%, #151722 100%); border: 1px solid var(--gold-primary); border-radius: 12px; padding: 14px; margin-bottom: 16px;">
        <span style="font-size: 12px; color: var(--gold-light); font-weight: 800; display: block; margin-bottom: 2px;">
          الصافي المحيف المعتمد على عيار 21 (875/1000):
        </span>
        <div style="font-size: 28px; font-weight: 900; color: #fff; font-family: monospace;" id="detailEquiv21">
          0.000 جم عيار 21
        </div>
      </div>

      <div style="margin-bottom: 16px;">
        <h4 style="font-size: 13px; font-weight: 800; color: #fff; margin-bottom: 8px;">
          بيان تفصيلي بقطع السبيكة:
        </h4>
        <div class="guide-table-wrap">
          <table class="guide-table" id="detailsTable">
            <thead>
              <tr>
                <th>#</th>
                <th>اسم القطعة</th>
                <th>الوزن القائم</th>
                <th>التزنكة</th>
                <th>الذهب الخالص 24</th>
              </tr>
            </thead>
            <tbody id="detailsTableBody">
            </tbody>
          </table>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; pt-3; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 12px;">
        <button class="btn-gold" onclick="window.print()">
          <i class="fa-solid fa-print"></i>
          <span>طباعة تقرير معتمد</span>
        </button>
        <button class="btn-outline" onclick="closeDetailsModal()">
          إغلاق التفاصيل
        </button>
      </div>
    </div>
  </div>

  <!-- JavaScript Logic -->
  <script>
    // Navigation
    function switchView(viewName) {
      const calcView = document.getElementById('calculatorView');
      const aboutView = document.getElementById('aboutView');
      const tabCalc = document.getElementById('tabCalculator');
      const tabAbout = document.getElementById('tabAbout');

      if (viewName === 'about') {
        calcView.classList.add('hidden');
        aboutView.classList.remove('hidden');
        tabCalc.classList.remove('active');
        tabAbout.classList.add('active');
      } else {
        aboutView.classList.add('hidden');
        calcView.classList.remove('hidden');
        tabAbout.classList.remove('active');
        tabCalc.classList.add('active');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // State of Items
    let items = [
      { id: '1', label: 'كسر عيار 21', weight: 125.5, fineness: 875 },
      { id: '2', label: 'كسر عيار 18', weight: 64.2, fineness: 750 },
      { id: '3', label: 'سبيكة تعدين دراو', weight: 88.0, fineness: 910 }
    ];

    // Carousel script
    let currentSlide = 0;
    function setSlide(index) {
      currentSlide = index;
      document.querySelectorAll('.slide-item').forEach((el, idx) => {
        el.classList.toggle('active', idx === index);
      });
      document.querySelectorAll('.carousel-dot').forEach((el, idx) => {
        el.classList.toggle('active', idx === index);
      });
    }

    setInterval(() => {
      currentSlide = (currentSlide + 1) % 2;
      setSlide(currentSlide);
    }, 5000);

    // Render Items
    function renderItems() {
      const container = document.getElementById('itemsContainer');
      container.innerHTML = '';

      items.forEach((item, index) => {
        const w = parseFloat(item.weight) || 0;
        const f = parseFloat(item.fineness) || 0;
        const fine = (w * f) / 1000;
        const alloy = Math.max(0, w - fine);

        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = \`
          <div class="item-card-header">
            <div style="display: flex; align-items: center;">
              <span class="item-number">\${index + 1}</span>
              <input type="text" class="item-title-input" value="\${item.label}" onchange="updateItemTitle('\${item.id}', this.value)" placeholder="اسم القطعة" />
            </div>
            \${items.length > 1 ? \`<button class="btn-delete" onclick="deleteItem('\${item.id}')" title="حذف القطعة"><i class="fa-solid fa-trash-can"></i></button>\` : ''}
          </div>

          <div class="form-grid">
            <div class="field-group">
              <label>
                <span>الوزن القائم (جرام):</span>
                <span>(جم)</span>
              </label>
              <div class="input-wrap">
                <input type="number" step="any" min="0" value="\${item.weight !== '' ? item.weight : ''}" placeholder="0.00" class="glass-input" oninput="updateItemField('\${item.id}', 'weight', this.value)" />
                <span class="input-suffix">جرام</span>
              </div>
            </div>

            <div class="field-group">
              <label>
                <span>التزنكة / النقاء بالألف:</span>
                <span style="color: var(--gold-light);">(‰ o/oo)</span>
              </label>
              <div class="input-wrap">
                <input type="number" step="any" min="0" max="1000" value="\${item.fineness !== '' ? item.fineness : ''}" placeholder="مثال: 875" class="glass-input" oninput="updateItemField('\${item.id}', 'fineness', this.value)" />
                <span class="input-suffix">‰</span>
              </div>
            </div>
          </div>

          <div class="presets-row">
            <button class="btn-preset" onclick="setPreset('\${item.id}', 750)">18K (750)</button>
            <button class="btn-preset" onclick="setPreset('\${item.id}', 875)">21K (875)</button>
            <button class="btn-preset" onclick="setPreset('\${item.id}', 916.67)">22K (916.6)</button>
            <button class="btn-preset" onclick="setPreset('\${item.id}', 999.9)">24K (999.9)</button>
          </div>

          <div class="subtotal-strip">
            <span>الذهب الخالص عيار 24: <strong>\${fine.toFixed(3)} جم</strong></span>
            <span>الشوائب: <strong>\${alloy.toFixed(3)} جم</strong></span>
          </div>
        \`;
        container.appendChild(card);
      });

      calculateAll();
    }

    function addNewItem() {
      const nextId = Date.now().toString();
      items.push({
        id: nextId,
        label: 'قطعة ' + (items.length + 1),
        weight: '',
        fineness: 875
      });
      renderItems();
    }

    function deleteItem(id) {
      if (items.length <= 1) return;
      items = items.filter(it => it.id !== id);
      renderItems();
    }

    function updateItemTitle(id, val) {
      const it = items.find(x => x.id === id);
      if (it) it.label = val;
    }

    function updateItemField(id, field, val) {
      const it = items.find(x => x.id === id);
      if (it) {
        it[field] = val === '' ? '' : parseFloat(val);
        calculateAll();
        // Update subtotal strip directly
        const w = parseFloat(it.weight) || 0;
        const f = parseFloat(it.fineness) || 0;
        const fine = (w * f) / 1000;
        const alloy = Math.max(0, w - fine);
        const card = document.querySelectorAll('.item-card')[items.indexOf(it)];
        if (card) {
          const strip = card.querySelector('.subtotal-strip');
          if (strip) {
            strip.innerHTML = \`
              <span>الذهب الخالص عيار 24: <strong>\${fine.toFixed(3)} جم</strong></span>
              <span>الشوائب: <strong>\${alloy.toFixed(3)} جم</strong></span>
            \`;
          }
        }
      }
    }

    function setPreset(id, finenessVal) {
      const it = items.find(x => x.id === id);
      if (it) {
        it.fineness = finenessVal;
        renderItems();
      }
    }

    function resetCalculator() {
      if (confirm('هل أنت متأكد من تصفير كافة المدخلات؟')) {
        items = [
          { id: '1', label: 'قطعة 1', weight: '', fineness: 875 }
        ];
        renderItems();
      }
    }

    function calculateAll() {
      let totalGross = 0;
      let totalFine24 = 0;

      items.forEach(it => {
        const w = parseFloat(it.weight) || 0;
        const f = parseFloat(it.fineness) || 0;
        if (w > 0 && f > 0) {
          totalGross += w;
          totalFine24 += (w * f) / 1000;
        }
      });

      const totalAlloy = Math.max(0, totalGross - totalFine24);
      const mixPurity = totalGross > 0 ? (totalFine24 / totalGross) * 1000 : 0;
      const expectedKarat = totalGross > 0 ? (mixPurity / 1000) * 24 : 0;
      const percentPure = totalGross > 0 ? (totalFine24 / totalGross) * 100 : 0;
      const equiv21 = totalFine24 > 0 ? (totalFine24 / 0.875) : 0;

      // Update UI elements
      document.getElementById('resGrossWeight').innerText = totalGross.toFixed(3);
      document.getElementById('resFineGold').innerText = totalFine24.toFixed(3);
      document.getElementById('resMixPurity').innerText = mixPurity.toFixed(2);
      document.getElementById('resExpectedKarat').innerText = expectedKarat.toFixed(2);
      document.getElementById('resAlloyWeight').innerText = totalAlloy.toFixed(3) + ' جم';
      document.getElementById('resPercentPure').innerText = '%' + percentPure.toFixed(2);
      document.getElementById('resEquiv21k').innerText = equiv21.toFixed(3) + ' جم';

      // Equivalent Weight Calculator
      const targetPurity = parseFloat(document.getElementById('targetKaratSelect').value) || 875;
      const targetRatio = targetPurity / 1000;
      const eqWeight = totalFine24 > 0 ? (totalFine24 / targetRatio) : 0;

      document.getElementById('resEquivalentWeight').innerText = eqWeight.toFixed(3) + ' جم';

      // Advice on Karat Tuning
      const adviceEl = document.getElementById('tuningAdvice');
      if (totalGross > 0) {
        if (mixPurity > targetPurity) {
          const neededAlloy = eqWeight - totalGross;
          adviceEl.innerHTML = \`<span style="color:#6ee7b7;"><i class="fa-solid fa-arrow-down"></i> تزنكة السبيكة (\${mixPurity.toFixed(1)}‰) أعلى من الهدف (\${targetPurity}‰). يلزم إضافة <strong>+\${neededAlloy.toFixed(3)} جم</strong> نحاس/سبائك لإنزال العيار.</span>\`;
        } else if (mixPurity < targetPurity) {
          const neededPure = (targetRatio * totalGross - totalFine24) / (1 - targetRatio);
          adviceEl.innerHTML = \`<span style="color:#fde047;"><i class="fa-solid fa-arrow-up"></i> تزنكة السبيكة (\${mixPurity.toFixed(1)}‰) أقل من الهدف (\${targetPurity}‰). يلزم إضافة <strong>+\${neededPure.toFixed(3)} جم</strong> ذهب عيار 24 خالص لرفع العيار.</span>\`;
        } else {
          adviceEl.innerHTML = \`<span style="color:#d4af37;"><i class="fa-solid fa-check"></i> السبيكة مطابقة تماماً للعيار الهدف!</span>\`;
        }
      } else {
        adviceEl.innerText = 'المعادلة: إجمالي الذهب الخالص ÷ نقاوة العيار الهدف';
      }

      // Update Floating Announcement details
      document.getElementById('modalEquiv21').innerText = equiv21.toFixed(3) + ' جم';
      document.getElementById('modalFine24').innerText = \`(معادل لذهب خالص \${totalFine24.toFixed(3)} جم عيار 24)\`;
      document.getElementById('modalGross').innerText = totalGross.toFixed(3);
      document.getElementById('modalFine').innerText = totalFine24.toFixed(3);
      document.getElementById('modalKarat').innerText = expectedKarat.toFixed(2);
      document.getElementById('detailEquiv21').innerText = equiv21.toFixed(3) + ' جم عيار 21';
    }

    // Modal Triggers
    function triggerFloatingAnnouncement() {
      calculateAll();
      document.getElementById('floatingAnnouncementModal').classList.add('active');
    }

    function closeFloatingAnnouncement() {
      document.getElementById('floatingAnnouncementModal').classList.remove('active');
    }

    function openDetailsModal() {
      closeFloatingAnnouncement();
      // Render detail items table
      const tbody = document.getElementById('detailsTableBody');
      tbody.innerHTML = '';
      items.forEach((it, idx) => {
        const w = parseFloat(it.weight) || 0;
        const f = parseFloat(it.fineness) || 0;
        const fine = (w * f) / 1000;
        const tr = document.createElement('tr');
        tr.innerHTML = \`
          <td>\${idx + 1}</td>
          <td>\${it.label || 'قطعة ' + (idx + 1)}</td>
          <td>\${w.toFixed(3)} جم</td>
          <td>\${f.toFixed(1)} ‰</td>
          <td style="font-weight: 800; color: var(--gold-light);">\${fine.toFixed(3)} جم</td>
        \`;
        tbody.appendChild(tr);
      });
      document.getElementById('smeltDetailsModal').classList.add('active');
    }

    function closeDetailsModal() {
      document.getElementById('smeltDetailsModal').classList.remove('active');
    }

    // Initialize
    window.addEventListener('DOMContentLoaded', () => {
      renderItems();
    });
  </script>
</body>
</html>`;
}
