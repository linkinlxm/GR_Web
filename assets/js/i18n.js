// GR Link — i18n (English / Chinese)

const translations = {
  en: {
    // Nav
    'nav.features': 'Features',
    'nav.gallery': 'Gallery',
    'nav.recipes': 'Recipes',
    'nav.download': 'Download',

    // Hero
    'hero.title.1': 'Your GR Camera,',
    'hero.title.2': 'Perfected.',
    'hero.subtitle': 'The ultimate iOS companion for Ricoh GR III, GR IIIx, and GR IV. Remote control, recipes, gallery, and more — all from your iPhone.',
    'hero.cta.testflight': 'Join TestFlight Beta',
    'hero.cta.features': 'See Features',

    // Features
    'features.title': 'Everything Your GR Needs',
    'features.subtitle': 'Powerful features designed specifically for Ricoh GR photographers.',
    'features.remote.title': 'Remote Control',
    'features.remote.desc': 'Full WiFi LiveView with real-time shutter, aperture, ISO, and EV controls from your iPhone.',
    'features.gallery.title': 'Photo Gallery',
    'features.gallery.desc': 'Browse, preview, and batch download photos directly from your camera to your iPhone.',
    'features.recipes.title': 'Recipes',
    'features.recipes.desc': "Import and apply custom image recipes. Fine-tune your GR's look with one tap.",
    'features.ble.title': 'BLE Shutter',
    'features.ble.desc': 'Snap photos wirelessly via Bluetooth Low Energy — no WiFi connection needed.',
    'features.multi.title': 'Multi-Camera',
    'features.multi.desc': 'Manage multiple GR cameras. Switch between your GR III, GR IIIx, and GR IV seamlessly.',

    // Gallery
    'gallery.title': 'See It in Action',
    'gallery.subtitle': 'A closer look at what GR Link can do for your photography workflow.',
    'gallery.badge': 'Works with GR III, GR IIIx, and GR IV — GR II experimental',

    // Recipes download
    'recipes.title': 'Community Recipes',
    'recipes.subtitle': '20 curated image recipes ready to import into GR Link. One file, all the looks.',
    'recipes.cta': 'Download Recipes (.grrecipe)',
    'recipes.hint': 'Open the file with GR Link to import all 20 recipes.',

    // Download CTA
    'download.title': 'Ready to Connect?',
    'download.subtitle': 'Download GR Link and unlock the full potential of your Ricoh GR camera.',
    'download.cta': 'Join TestFlight Beta',
    'download.hint': 'Free beta via TestFlight. Requires iOS 17 or later.',

    // Footer
    'footer.copyright': '© 2026 GR Link. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.disclaimer': 'GR Link is not affiliated with or endorsed by Ricoh Imaging Company, Ltd.',
  },

  zh: {
    // Nav
    'nav.features': '功能',
    'nav.gallery': '截图',
    'nav.recipes': '配方',
    'nav.download': '下载',

    // Hero
    'hero.title.1': '你的 GR 相机，',
    'hero.title.2': '更进一步。',
    'hero.subtitle': '专为 Ricoh GR III、GR IIIx 和 GR IV 打造的 iOS 伴侣应用。远程控制、配方、相册等功能，尽在 iPhone。',
    'hero.cta.testflight': '加入 TestFlight 测试',
    'hero.cta.features': '查看功能',

    // Features
    'features.title': '你的 GR 所需的一切',
    'features.subtitle': '专为 Ricoh GR 摄影师设计的强大功能。',
    'features.remote.title': '远程控制',
    'features.remote.desc': '通过 WiFi 实时取景，在 iPhone 上控制快门、光圈、ISO 和曝光补偿。',
    'features.gallery.title': '照片画廊',
    'features.gallery.desc': '浏览、预览并批量下载相机中的照片到 iPhone。',
    'features.recipes.title': '配方',
    'features.recipes.desc': '导入并应用自定义图像配方，一键调整你的 GR 风格。',
    'features.ble.title': 'BLE 快门',
    'features.ble.desc': '通过蓝牙低功耗无线拍照 — 无需 WiFi 连接。',
    'features.multi.title': '多机管理',
    'features.multi.desc': '管理多台 GR 相机，在 GR III、GR IIIx 和 GR IV 之间无缝切换。',

    // Gallery
    'gallery.title': '实际效果',
    'gallery.subtitle': '深入了解 GR Link 如何提升你的摄影工作流。',
    'gallery.badge': '支持 GR III、GR IIIx 和 GR IV — GR II 实验性支持',

    // Recipes download
    'recipes.title': '社区配方',
    'recipes.subtitle': '20 个精选图像配方，可直接导入 GR Link。一个文件，所有风格。',
    'recipes.cta': '下载配方 (.grrecipe)',
    'recipes.hint': '用 GR Link 打开文件即可导入全部 20 个配方。',

    // Download CTA
    'download.title': '准备好连接了吗？',
    'download.subtitle': '下载 GR Link，释放你 Ricoh GR 相机的全部潜力。',
    'download.cta': '加入 TestFlight 测试',
    'download.hint': '免费测试版，通过 TestFlight 分发。需要 iOS 17 或更高版本。',

    // Footer
    'footer.copyright': '© 2026 GR Link. 保留所有权利。',
    'footer.privacy': '隐私政策',
    'footer.disclaimer': 'GR Link 与 Ricoh Imaging Company, Ltd. 无关，也未获其认可。',
  }
};

let currentLang = localStorage.getItem('gr-link-lang') || (navigator.language.startsWith('zh') ? 'zh' : 'en');

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('gr-link-lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update all toggle button labels
  document.querySelectorAll('[id^="lang-toggle"]').forEach(btn => {
    btn.textContent = lang === 'en' ? '中文' : 'EN';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[id^="lang-toggle"]').forEach(btn => {
    btn.addEventListener('click', () => {
      applyLanguage(currentLang === 'en' ? 'zh' : 'en');
    });
  });
  applyLanguage(currentLang);
});
