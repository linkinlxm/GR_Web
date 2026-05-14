// GR Link — i18n (English / Chinese)

const translations = {
  en: {
    // Nav
    'nav.tour': 'Tour',
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

    // Tour (video walkthrough)
    'tour.title': 'Quick Tour',
    'tour.subtitle': 'A 3-minute step-by-step walkthrough of GR Link — from pairing your camera to managing recipes.',
    'tour.caption': 'Recorded on iPhone — no Ricoh camera required to evaluate the app\'s Recipes, Settings, and pairing flow.',

    // Features
    'features.title': 'Everything Your GR Needs',
    'features.subtitle': 'Powerful features designed specifically for Ricoh GR photographers.',
    'features.remote.title': 'Remote Control',
    'features.remote.desc': 'Full WiFi LiveView with real-time shutter, aperture, ISO, and EV controls from your iPhone.',
    'features.gallery.title': 'Photo Gallery',
    'features.gallery.desc': 'Browse, preview, and batch download photos directly from your camera to your iPhone.',
    'features.recipes.title': 'Recipes',
    'features.recipes.desc': "Import, store, and manage custom image recipes from your photos. Organize your GR looks with ease.",
    'features.ble.title': 'BLE Shutter',
    'features.ble.desc': 'Snap photos wirelessly via Bluetooth Low Energy — no WiFi connection needed.',
    'features.multi.title': 'Multi-Camera',
    'features.multi.desc': 'Manage multiple GR cameras. Switch between your GR III, GR IIIx, and GR IV seamlessly.',

    // Gallery
    'gallery.title': 'See It in Action',
    'gallery.subtitle': 'A closer look at what GR Link can do for your photography workflow.',
    'gallery.s1.title': 'Your GR,<br><span class="text-neu-accent-dark">Perfected.</span>',
    'gallery.s1.desc': 'The ultimate iOS companion',
    'gallery.s2.accent': 'Connect',
    'gallery.s2.rest': 'in Seconds',
    'gallery.s2.desc': 'BLE auto-discovery, one tap',
    'gallery.s3.title': 'Full<br><span class="text-neu-accent-dark">Live View</span>',
    'gallery.s3.desc': 'Shutter, aperture, ISO, EV',
    'gallery.s4.title': 'Browse &<br><span class="text-neu-accent-dark">Download</span>',
    'gallery.s4.desc': 'Batch import to your iPhone',
    'gallery.s5.accent': 'Select',
    'gallery.s5.rest': '& Share',
    'gallery.s5.desc': 'Original size or XS, your call',
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

    // Privacy page
    'privacy.back': '← Back to Home',
    'privacy.title': 'Privacy Policy',
    'privacy.effective': 'Effective date: April 26, 2026',
    'privacy.updated': 'Last updated: April 26, 2026',
    'privacy.s1.title': '1. Who we are',
    'privacy.s1.body': '<p>GR Link ("the App", "we") is an independent third-party iOS app developed by liljackson. We are the data controller for any data processed by the App. Contact: <a href="mailto:gr-link@liljackson.org" class="text-neu-accent-dark hover:underline">gr-link@liljackson.org</a>.</p><p class="mt-3">GR Link is not affiliated with, endorsed by, or sponsored by Ricoh Imaging Company, Ltd. or Ricoh Company, Ltd.</p>',
    'privacy.s2.title': '2. What information the App accesses',
    'privacy.s2.body': '<p><strong>GR Link does not collect, store, or transmit any personal data to any server we operate.</strong> The App processes the following on your device only:</p><ul class="mt-3 space-y-2 list-disc list-inside"><li><strong>Camera connection data</strong> — Bluetooth identifiers and Wi-Fi SSID/password of your Ricoh GR camera, stored locally to reconnect.</li><li><strong>Photos and metadata</strong> — JPEG/DNG files and EXIF data downloaded from your camera, saved to your iOS Photo Library or App container.</li><li><strong>Location</strong> — Used only to attach geotags to newly captured frames (camera-permitting) and to satisfy iOS\'s Wi-Fi configuration permission requirement. Location is never transmitted off-device.</li><li><strong>Recipes and preferences</strong> — Image-control recipes, theme, language, and per-camera settings.</li><li><strong>Diagnostic logs</strong> — In-app logs you may choose to email us for support. Not collected automatically.</li></ul>',
    'privacy.s3.title': '3. iOS permissions and why',
    'privacy.s3.body': '<ul class="space-y-2 list-disc list-inside"><li><strong>Bluetooth</strong> — Pair with your camera, send remote shutter, transition to Wi-Fi.</li><li><strong>Local Network</strong> — HTTP communication with your camera at 192.168.0.1 over Wi-Fi.</li><li><strong>Location (When In Use)</strong> — Required by iOS to read Wi-Fi network info and configure hotspot connections; also used for optional geotagging.</li><li><strong>Photo Library (Add)</strong> — Save downloaded photos.</li><li><strong>Photo Library (Read)</strong> — Browse and manage downloaded photos within the App.</li></ul>',
    'privacy.s4.title': '4. iCloud sync',
    'privacy.s4.body': '<p>If you have iCloud Drive enabled and signed in, your recipes, camera settings, and preferences sync across your own Apple devices via your private iCloud container. We do not have access to this data — it is governed by Apple\'s iCloud privacy terms.</p>',
    'privacy.s5.title': '5. Data retention',
    'privacy.s5.body': '<p>All data is retained locally on your device until you delete it (uninstall the app, sign out of iCloud, or remove specific items). We do not retain any data on our servers because we do not operate any.</p>',
    'privacy.s6.title': '6. Data sharing & third parties',
    'privacy.s6.body': '<p>GR Link does not share data with any third party. There are no analytics SDKs, no advertising SDKs, no crash-reporting SDKs, and no third-party tracking. The App\'s PrivacyInfo manifest declares <code>NSPrivacyTracking = false</code>.</p>',
    'privacy.s7.title': '7. Children\'s privacy',
    'privacy.s7.body': '<p>GR Link is not directed at children under 13 (under 14 in mainland China). We do not knowingly collect data from children.</p>',
    'privacy.s8.title': '8. Your rights',
    'privacy.s8.body': '<p>Because all data is on your device or in your private iCloud, you control it directly: view, edit, export (recipes can be exported as <code>.grrecipe</code> files), and delete via the App or iOS Settings. Under PIPL (China), GDPR (EU), and CCPA (California), you have rights of access, correction, deletion, restriction, portability, and objection. To exercise these rights for any data you previously emailed us (e.g., bug-report logs), write to <a href="mailto:gr-link@liljackson.org" class="text-neu-accent-dark hover:underline">gr-link@liljackson.org</a> and we will respond within 30 days.</p>',
    'privacy.s9.title': '9. Security',
    'privacy.s9.body': '<p>Communication with your camera occurs over the camera\'s local network only (no internet relay). iCloud sync uses Apple\'s end-to-end encrypted CloudKit infrastructure. We hold no credentials and operate no servers, so there is no remote attack surface for your data.</p>',
    'privacy.s10.title': '10. Changes to this policy',
    'privacy.s10.body': '<p>We may update this Privacy Policy from time to time. Material changes will be reflected in the App Store description for the next release and on this page with an updated "Last updated" date.</p>',
    'privacy.contact.title': 'Contact',
    'privacy.contact.body': '<p>Questions, requests, or complaints: <a href="mailto:gr-link@liljackson.org" class="text-neu-accent-dark hover:underline">gr-link@liljackson.org</a>.</p>',
    'privacy.footer.home': 'Home',
  },

  zh: {
    // Nav
    'nav.tour': '导览',
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

    // Tour (video walkthrough)
    'tour.title': '快速导览',
    'tour.subtitle': '3 分钟分步演示视频 — 从配对相机到管理配方。',
    'tour.caption': '使用 iPhone 录制 — 无需 Ricoh 相机即可评估配方、设置以及配对流程。',

    // Features
    'features.title': '你的 GR 所需的一切',
    'features.subtitle': '专为 Ricoh GR 摄影师设计的强大功能。',
    'features.remote.title': '远程控制',
    'features.remote.desc': '通过 WiFi 实时取景，在 iPhone 上控制快门、光圈、ISO 和曝光补偿。',
    'features.gallery.title': '照片画廊',
    'features.gallery.desc': '浏览、预览并批量下载相机中的照片到 iPhone。',
    'features.recipes.title': '配方',
    'features.recipes.desc': '从照片导入、存储和管理自定义图像配方，轻松整理你的 GR 风格。',
    'features.ble.title': 'BLE 快门',
    'features.ble.desc': '通过蓝牙低功耗无线拍照 — 无需 WiFi 连接。',
    'features.multi.title': '多机管理',
    'features.multi.desc': '管理多台 GR 相机，在 GR III、GR IIIx 和 GR IV 之间无缝切换。',

    // Gallery
    'gallery.title': '实际效果',
    'gallery.subtitle': '深入了解 GR Link 如何提升你的摄影工作流。',
    'gallery.s1.title': '你的 GR，<br><span class="text-neu-accent-dark">更进一步。</span>',
    'gallery.s1.desc': '专为 Ricoh GR 打造的 iOS 伴侣',
    'gallery.s2.accent': '秒速',
    'gallery.s2.rest': '连接',
    'gallery.s2.desc': 'BLE 自动发现，一键配对',
    'gallery.s3.title': '实时<br><span class="text-neu-accent-dark">取景</span>',
    'gallery.s3.desc': '快门、光圈、ISO、曝光补偿',
    'gallery.s4.title': '浏览 &<br><span class="text-neu-accent-dark">下载</span>',
    'gallery.s4.desc': '批量导入到你的 iPhone',
    'gallery.s5.accent': '选择',
    'gallery.s5.rest': '& 分享',
    'gallery.s5.desc': '原始尺寸或 XS，你来决定',
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

    // Privacy page
    'privacy.back': '← 返回首页',
    'privacy.title': '隐私政策',
    'privacy.effective': '生效日期：2026 年 4 月 26 日',
    'privacy.updated': '最后更新：2026 年 4 月 26 日',
    'privacy.s1.title': '1. 我们是谁',
    'privacy.s1.body': '<p>GR Link（以下简称"本应用"或"我们"）是由 liljackson 独立开发的第三方 iOS 应用，对本应用处理的任何数据承担个人信息处理者责任。联系方式：<a href="mailto:gr-link@liljackson.org" class="text-neu-accent-dark hover:underline">gr-link@liljackson.org</a>。</p><p class="mt-3">GR Link 与株式会社理光（Ricoh Company, Ltd.）及理光映像有限公司（Ricoh Imaging Company, Ltd.）无任何从属、授权、合作或赞助关系。</p>',
    'privacy.s2.title': '2. 本应用处理的信息',
    'privacy.s2.body': '<p><strong>GR Link 不会向我们运营的任何服务器收集、存储或传输任何个人信息。</strong>本应用仅在您的设备上处理以下内容：</p><ul class="mt-3 space-y-2 list-disc list-inside"><li><strong>相机连接数据</strong> —— 您 Ricoh GR 相机的蓝牙标识与 Wi-Fi SSID/密码，仅本地保存以便重连。</li><li><strong>照片与元数据</strong> —— 从相机下载的 JPEG/DNG 文件及 EXIF 数据，保存于您 iOS 系统相册或应用容器内。</li><li><strong>位置信息</strong> —— 仅用于在新拍照片中写入地理标签（取决于相机支持），以及满足 iOS 配置 Wi-Fi 时对位置权限的强制要求。位置信息绝不离开您的设备。</li><li><strong>配方与偏好</strong> —— 影像控制配方、主题、语言、以及每台相机的个性化设置。</li><li><strong>诊断日志</strong> —— 您可主动通过邮件发送给我们以协助排障的应用内日志。我们不会自动收集。</li></ul>',
    'privacy.s3.title': '3. 系统权限说明',
    'privacy.s3.body': '<ul class="space-y-2 list-disc list-inside"><li><strong>蓝牙</strong> —— 配对相机、远程快门、切换到 Wi-Fi。</li><li><strong>本地网络</strong> —— 通过 Wi-Fi 与相机（192.168.0.1）的 HTTP 通信。</li><li><strong>位置（使用期间）</strong> —— iOS 系统要求获取位置权限才能读取 Wi-Fi 网络信息及配置热点连接，亦用于可选的地理标记。</li><li><strong>相册（添加）</strong> —— 保存下载的照片。</li><li><strong>相册（读取）</strong> —— 在应用内浏览和管理已下载的照片。</li></ul>',
    'privacy.s4.title': '4. iCloud 同步',
    'privacy.s4.body': '<p>若您启用并登录了 iCloud Drive，您的配方、相机设置和偏好将通过您私人的 iCloud 容器在您本人的 Apple 设备之间同步。我们无法访问这些数据 —— 同步过程受 Apple iCloud 隐私条款约束。</p>',
    'privacy.s5.title': '5. 数据保留',
    'privacy.s5.body': '<p>所有数据均本地保留在您的设备上，直至您删除（卸载应用、登出 iCloud 或删除具体条目）。我们不在任何服务器上保留任何数据，因为我们不运营任何服务器。</p>',
    'privacy.s6.title': '6. 数据共享与第三方',
    'privacy.s6.body': '<p>GR Link 不与任何第三方共享数据。本应用未集成任何分析 SDK、广告 SDK、崩溃上报 SDK 或第三方追踪服务。应用的 PrivacyInfo 清单声明 <code>NSPrivacyTracking = false</code>。</p>',
    'privacy.s7.title': '7. 未成年人保护',
    'privacy.s7.body': '<p>GR Link 不面向 13 岁以下儿童（中国大陆为 14 岁以下）。我们不会有意识地收集未成年人的信息。</p>',
    'privacy.s8.title': '8. 您的权利',
    'privacy.s8.body': '<p>由于所有数据均存于您的设备或您本人 iCloud 容器中，您可直接查看、编辑、导出（配方可导出为 <code>.grrecipe</code> 文件）和删除。依据《个人信息保护法》（PIPL）、《通用数据保护条例》（GDPR）及《加州消费者隐私法》（CCPA），您享有访问、更正、删除、限制处理、可携带及拒绝处理的权利。如需对您此前邮件发送给我们的数据（如诊断日志）行使上述权利，请联系 <a href="mailto:gr-link@liljackson.org" class="text-neu-accent-dark hover:underline">gr-link@liljackson.org</a>，我们将在 30 日内回复。</p>',
    'privacy.s9.title': '9. 安全',
    'privacy.s9.body': '<p>与相机的通信仅在相机本地网络内进行（不经过互联网中继）。iCloud 同步使用 Apple 端到端加密的 CloudKit 基础设施。我们不持有任何凭证、不运营任何服务器，因此不存在针对您数据的远程攻击面。</p>',
    'privacy.s10.title': '10. 政策变更',
    'privacy.s10.body': '<p>我们可能不定期更新本隐私政策。重要变更将在下一版本的 App Store 应用描述中体现，并在本页更新"最后更新"日期。</p>',
    'privacy.contact.title': '联系方式',
    'privacy.contact.body': '<p>如有疑问、请求或投诉：<a href="mailto:gr-link@liljackson.org" class="text-neu-accent-dark hover:underline">gr-link@liljackson.org</a>。</p>',
    'privacy.footer.home': '首页',
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
      const val = translations[lang][key];
      if (val.includes('<')) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    }
  });

  // Update all toggle button labels
  document.querySelectorAll('[id^="lang-toggle"]').forEach(btn => {
    btn.textContent = lang === 'en' ? '中文' : 'EN';
  });

  // Swap localized screenshot images
  document.querySelectorAll('[data-src-en][data-src-zh]').forEach(img => {
    img.src = img.getAttribute('data-src-' + lang);
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
