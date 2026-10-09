// GR Link — i18n (English / Chinese)

const translations = {
  en: {
    // Nav
    'nav.screenshots': 'Screenshots',
    'nav.features': 'Features',
    'nav.recipes': 'Recipes',
    'nav.download': 'Download',

    // Hero
    'hero.title.1': 'Your GR,',
    'hero.title.2': 'Connected.',
    'hero.subtitle': 'A free, independent iOS companion for Ricoh GR II, GR III, GR IIIx, and GR IV series cameras. Remote control, live view, photo transfer, recipes, and more — all from your iPhone.',
    'hero.cta.appstore': 'Download on the App Store',
    'hero.cta.features': 'See Features',
    'hero.cta.china_note': 'Want early access to new features?',
    'hero.cta.testflight_link': 'Join the TestFlight beta →',

    // Screenshots showcase (replaces former Tour video on homepage; tour.html still hosts the video for App Store reviewers)
    'screenshots.title': 'A Look Inside',
    'screenshots.subtitle': 'Explore camera connection, photo transfer, remote shooting, and recipe management.',
    'screenshots.tour_link': 'Prefer a video walkthrough? Watch the full app tour →',

    // Features
    'features.title': 'More Ways to Use Your GR',
    'features.subtitle': 'Features for Ricoh GR photographers. Availability depends on the camera and firmware; GR II does not support Bluetooth.',
    'features.remote.title': 'Remote Control',
    'features.remote.desc': 'Use Wi-Fi live view and adjust supported shutter, aperture, ISO, and exposure controls from your iPhone.',
    'features.gallery.title': 'Photo Gallery',
    'features.gallery.desc': 'Browse, preview, and batch download photos directly from your camera to your iPhone.',
    'features.recipes.title': 'Recipes',
    'features.recipes.desc': "Import, store, and manage custom image recipes from your photos. Organize your GR looks with ease.",
    'features.ble.title': 'BLE Shutter',
    'features.ble.desc': 'Trigger the shutter over Bluetooth Low Energy on supported cameras, without a Wi-Fi connection.',
    'features.multi.title': 'Multi-Camera',
    'features.multi.desc': 'Manage multiple cameras across the GR II, GR III, GR IIIx, and GR IV families, with features adapted to each model.',

    // Recipes download
    'recipes.title': 'Community Recipes',
    'recipes.subtitle': '20 curated image recipes ready to import into GR Link. One file, all the looks.',
    'recipes.cta': 'Download Recipes (.grrecipe)',
    'recipes.hint': 'Open the file with GR Link to import all 20 recipes.',

    // Download CTA
    'download.title': 'Ready to Connect?',
    'download.subtitle': "GR Link is on the App Store worldwide, including mainland China. Want new features first? Join the TestFlight beta.",
    'download.appstore.title': 'App Store',
    'download.appstore.audience': 'Release version',
    'download.appstore.body': 'Download the release version from the App Store, including in mainland China. Updates are delivered through the App Store.',
    'download.appstore.cta': 'Download on the App Store',
    'download.testflight.title': 'TestFlight Beta',
    'download.testflight.audience': 'Early access — try new features first',
    'download.testflight.body': "Get upcoming features before they reach the App Store. Beta builds are installed through Apple's TestFlight and may be less stable than the release version.",
    'download.testflight.cta': 'Join TestFlight Beta',
    'download.hint': 'Requires iOS 17.2 or later. Free.',

    // Footer
    'footer.copyright': '© 2026 GR Link. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.disclaimer': 'GR Link is not affiliated with or endorsed by Ricoh Imaging Company, Ltd.',

    // Privacy page
    'privacy.back': '← Back to Home',
    'privacy.title': 'Privacy Policy',
    'privacy.effective': 'Effective date: April 26, 2026',
    'privacy.updated': 'Last updated: October 9, 2026',
    'privacy.s1.title': '1. Who we are',
    'privacy.s1.body': '<p>GR Link ("the App", "we") is an independent third-party iOS app developed by liljackson. We are the data controller for any data processed by the App. Contact: <a href="mailto:gr-link@liljackson.org" class="text-neu-accent-dark hover:underline">gr-link@liljackson.org</a>.</p><p class="mt-3">GR Link is not affiliated with, endorsed by, or sponsored by Ricoh Imaging Company, Ltd. or Ricoh Company, Ltd.</p>',
    'privacy.s2.title': '2. What information the App accesses',
    'privacy.s2.body': '<p><strong>GR Link does not collect, store, or transmit any personal data to any server we operate.</strong> The App processes the following information for camera connection, photo management, and optional location and iCloud features:</p><ul class="mt-3 space-y-2 list-disc list-inside"><li><strong>Camera connection data</strong> — Bluetooth identifiers and Wi-Fi SSID/password of your Ricoh GR camera, stored for reconnection. Camera connection records can also sync through iCloud when sync is enabled.</li><li><strong>Photos and metadata</strong> — JPEG/DNG files and EXIF data downloaded from your camera, saved to your iOS Photo Library or App container.</li><li><strong>Location</strong> — When you enable location recording, recent GPS samples are stored on this device. GR Link can send location to a compatible camera and use eligible samples to add location to photos. Estimated locations are marked for review.</li><li><strong>Recipes and preferences</strong> — Image-control recipes, theme, language, and per-camera settings.</li><li><strong>Diagnostic logs</strong> — In-app logs you may choose to email us for support. Not collected automatically.</li></ul>',
    'privacy.s3.title': '3. iOS permissions and why',
    'privacy.s3.body': '<ul class="space-y-2 list-disc list-inside"><li><strong>Bluetooth</strong> — Pair with your camera, send remote shutter, transition to Wi-Fi.</li><li><strong>Local Network</strong> — Direct communication with your camera over its local Wi-Fi network.</li><li><strong>Location (When In Use)</strong> — Used for optional location recording and geotagging, and to access Wi-Fi network information where iOS requires it. An active recording session can continue in the background with the location indicator shown.</li><li><strong>Photo Library (Add)</strong> — Save downloaded photos.</li><li><strong>Photo Library (Read)</strong> — Browse and manage downloaded photos within the App.</li></ul>',
    'privacy.s4.title': '4. iCloud sync',
    'privacy.s4.body': '<p>When you enable iCloud sync and are signed in to iCloud, recipes, camera connection records, and preferences can sync across your Apple devices. This uses Apple services and is governed by your Apple account settings and iCloud privacy terms.</p>',
    'privacy.s5.title': '5. Data retention',
    'privacy.s5.body': '<p>Local app data can be removed by deleting the app or individual items. Location history is kept locally for up to seven days and excluded from device backup. Photos saved to Apple Photos and data synced with iCloud are managed separately through those services; deleting the app or signing out does not necessarily delete those copies.</p>',
    'privacy.s6.title': '6. Data sharing & third parties',
    'privacy.s6.body': '<p>GR Link does not send data to advertising or analytics services. Optional iCloud synchronization uses Apple services, and you may choose to send diagnostic information when contacting support.</p>',
    'privacy.s7.title': '7. Children\'s privacy',
    'privacy.s7.body': '<p>GR Link is not directed at children under 13 (under 14 in mainland China). We do not knowingly collect data from children.</p>',
    'privacy.s8.title': '8. Your rights',
    'privacy.s8.body': '<p>You can manage app data on your device and data synced through your iCloud account: view, edit, export (recipes can be exported as <code>.grrecipe</code> files), and delete via the App or iOS Settings. Under PIPL (China), GDPR (EU), and CCPA (California), you have rights of access, correction, deletion, restriction, portability, and objection. To exercise these rights for any data you previously emailed us (e.g., bug-report logs), write to <a href="mailto:gr-link@liljackson.org" class="text-neu-accent-dark hover:underline">gr-link@liljackson.org</a> and we will respond within 30 days.</p>',
    'privacy.s9.title': '9. Security',
    'privacy.s9.body': '<p>Camera communication uses a direct Bluetooth or local Wi-Fi connection without a GR Link photo relay. Optional iCloud synchronization uses Apple services and is subject to your Apple account and data-protection settings.</p>',
    'privacy.s10.title': '10. Changes to this policy',
    'privacy.s10.body': '<p>We may update this Privacy Policy from time to time. Material changes will be reflected in the App Store description for the next release and on this page with an updated "Last updated" date.</p>',
    'privacy.contact.title': 'Contact',
    'privacy.contact.body': '<p>Questions, requests, or complaints: <a href="mailto:gr-link@liljackson.org" class="text-neu-accent-dark hover:underline">gr-link@liljackson.org</a>.</p>',
    'privacy.footer.home': 'Home',
  },

  zh: {
    // Nav
    'nav.screenshots': '截图',
    'nav.features': '功能',
    'nav.recipes': '配方',
    'nav.download': '下载',

    // Hero
    'hero.title.1': '你的 GR，',
    'hero.title.2': '连上 iPhone。',
    'hero.subtitle': '免费、独立开发的 Ricoh GR II、GR III、GR IIIx 与 GR IV 系列 iOS 伴侣应用。远程控制、实时取景、照片传输、配方等功能，尽在 iPhone。',
    'hero.cta.appstore': '在 App Store 下载',
    'hero.cta.features': '查看功能',
    'hero.cta.china_note': '想抢先体验新功能？',
    'hero.cta.testflight_link': '加入 TestFlight 测试版 →',

    // Screenshots showcase (替换原 Tour 视频；tour.html 仍保留视频供 App Store 审核员访问)
    'screenshots.title': '应用一览',
    'screenshots.subtitle': '了解相机连接、照片传输、遥控拍摄与配方管理。',
    'screenshots.tour_link': '想看视频演示？观看完整应用导览 →',

    // Features
    'features.title': '让 GR 的日常使用更方便',
    'features.subtitle': '为 Ricoh GR 摄影用户设计。功能因相机和固件而异；GR II 不支持蓝牙。',
    'features.remote.title': '远程控制',
    'features.remote.desc': '通过 Wi-Fi 实时取景，在 iPhone 上调整相机支持的快门、光圈、ISO 和曝光补偿。',
    'features.gallery.title': '照片浏览',
    'features.gallery.desc': '浏览、预览并批量下载相机中的照片到 iPhone。',
    'features.recipes.title': '配方',
    'features.recipes.desc': '从照片导入、存储和管理自定义图像配方，轻松整理你的 GR 风格。',
    'features.ble.title': '蓝牙快门',
    'features.ble.desc': '在支持的相机上通过低功耗蓝牙触发快门，无需连接 Wi-Fi。',
    'features.multi.title': '多机管理',
    'features.multi.desc': '管理 GR II、GR III、GR IIIx 和 GR IV 系列的多台相机，并按机型显示可用功能。',

    // Recipes download
    'recipes.title': '社区配方',
    'recipes.subtitle': '20 个精选图像配方，可直接导入 GR Link。一个文件，所有风格。',
    'recipes.cta': '下载配方 (.grrecipe)',
    'recipes.hint': '用 GR Link 打开文件即可导入全部 20 个配方。',

    // Download CTA
    'download.title': '准备好连接了吗？',
    'download.subtitle': 'GR Link 已在全球 App Store 上架，包括中国大陆。想第一时间用上新功能？加入 TestFlight 测试版。',
    'download.appstore.title': 'App Store',
    'download.appstore.audience': '正式版本',
    'download.appstore.body': '通过 App Store 下载正式版，中国大陆也可下载。后续更新通过 App Store 提供。',
    'download.appstore.cta': '在 App Store 下载',
    'download.testflight.title': 'TestFlight 测试版',
    'download.testflight.audience': '抢先体验 —— 第一时间用上新功能',
    'download.testflight.body': '在新功能上架 App Store 之前抢先试用。测试版通过 Apple 官方 TestFlight 安装，稳定性可能不及正式版。',
    'download.testflight.cta': '加入 TestFlight 测试',
    'download.hint': '需要 iOS 17.2 或更高版本。免费。',

    // Footer
    'footer.copyright': '© 2026 GR Link. 保留所有权利。',
    'footer.privacy': '隐私政策',
    'footer.disclaimer': 'GR Link 为独立开发的应用，与理光映像株式会社无隶属或合作关系，也未获其官方认可。',

    // Privacy page
    'privacy.back': '← 返回首页',
    'privacy.title': '隐私政策',
    'privacy.effective': '生效日期：2026 年 4 月 26 日',
    'privacy.updated': '最后更新：2026 年 10 月 9 日',
    'privacy.s1.title': '1. 我们是谁',
    'privacy.s1.body': '<p>GR Link（以下简称"本应用"或"我们"）是由 liljackson 独立开发的第三方 iOS 应用，对本应用处理的任何数据承担个人信息处理者责任。联系方式：<a href="mailto:gr-link@liljackson.org" class="text-neu-accent-dark hover:underline">gr-link@liljackson.org</a>。</p><p class="mt-3">GR Link 与株式会社理光（Ricoh Company, Ltd.）及理光映像株式会社（Ricoh Imaging Company, Ltd.）无任何从属、授权、合作或赞助关系。</p>',
    'privacy.s2.title': '2. 本应用处理的信息',
    'privacy.s2.body': '<p><strong>GR Link 不会向我们运营的任何服务器收集、存储或传输任何个人信息。</strong>本应用为相机连接、照片管理以及可选的位置和 iCloud 功能处理以下信息：</p><ul class="mt-3 space-y-2 list-disc list-inside"><li><strong>相机连接数据</strong> —— 您 Ricoh GR 相机的蓝牙标识与 Wi-Fi SSID/密码，用于重新连接。开启 iCloud 同步后，相机连接记录也可通过 iCloud 同步。</li><li><strong>照片与元数据</strong> —— 从相机下载的 JPEG/DNG 文件及 EXIF 数据，保存于您 iOS 系统相册或应用容器内。</li><li><strong>位置信息</strong> —— 开启位置记录后，近期 GPS 采样会保存在本机。GR Link 可将位置发送至支持的相机，并使用符合条件的记录为照片补充位置；估算位置会显示提示，供您核对。</li><li><strong>配方与偏好</strong> —— 影像控制配方、主题、语言、以及每台相机的个性化设置。</li><li><strong>诊断日志</strong> —— 您可主动通过邮件发送给我们以协助排障的应用内日志。我们不会自动收集。</li></ul>',
    'privacy.s3.title': '3. 系统权限说明',
    'privacy.s3.body': '<ul class="space-y-2 list-disc list-inside"><li><strong>蓝牙</strong> —— 配对相机、远程快门、切换到 Wi-Fi。</li><li><strong>本地网络</strong> —— 通过相机的本地 Wi-Fi 网络直接通信。</li><li><strong>位置（使用期间）</strong> —— 用于可选的位置记录和地理标记，以及在 iOS 要求时读取 Wi-Fi 网络信息。已开启的记录会话可在后台继续运行，并显示位置使用指示。</li><li><strong>相册（添加）</strong> —— 保存下载的照片。</li><li><strong>相册（读取）</strong> —— 在应用内浏览和管理已下载的照片。</li></ul>',
    'privacy.s4.title': '4. iCloud 同步',
    'privacy.s4.body': '<p>登录 iCloud 并开启同步后，配方、相机连接记录和偏好可在您的 Apple 设备之间同步。此功能使用 Apple 服务，受您的 Apple 账户设置及 iCloud 隐私条款约束。</p>',
    'privacy.s5.title': '5. 数据保留',
    'privacy.s5.body': '<p>您可通过删除具体条目或卸载应用移除本地应用数据。位置历史在本地保留最多七天，不纳入设备备份。保存至 Apple 照片或已同步至 iCloud 的数据需通过相应服务单独管理；卸载应用或退出账户不一定会删除这些副本。</p>',
    'privacy.s6.title': '6. 数据共享与第三方',
    'privacy.s6.body': '<p>GR Link 不会向广告或分析服务发送数据。可选的 iCloud 同步使用 Apple 服务；联系支持时，您也可主动发送诊断信息。</p>',
    'privacy.s7.title': '7. 未成年人保护',
    'privacy.s7.body': '<p>GR Link 不面向 13 岁以下儿童（中国大陆为 14 岁以下）。我们不会有意识地收集未成年人的信息。</p>',
    'privacy.s8.title': '8. 您的权利',
    'privacy.s8.body': '<p>您可管理设备上的应用数据和通过本人 iCloud 账户同步的数据，包括查看、编辑、导出（配方可导出为 <code>.grrecipe</code> 文件）和删除。依据《个人信息保护法》（PIPL）、《通用数据保护条例》（GDPR）及《加州消费者隐私法》（CCPA），您享有访问、更正、删除、限制处理、可携带及拒绝处理的权利。如需对您此前邮件发送给我们的数据（如诊断日志）行使上述权利，请联系 <a href="mailto:gr-link@liljackson.org" class="text-neu-accent-dark hover:underline">gr-link@liljackson.org</a>，我们将在 30 日内回复。</p>',
    'privacy.s9.title': '9. 安全',
    'privacy.s9.body': '<p>与相机的通信通过蓝牙或本地 Wi-Fi 直连，不经过 GR Link 照片中转服务。可选的 iCloud 同步使用 Apple 服务，受您的 Apple 账户与数据保护设置约束。</p>',
    'privacy.s10.title': '10. 政策变更',
    'privacy.s10.body': '<p>我们可能不定期更新本隐私政策。重要变更将在下一版本的 App Store 应用描述中体现，并在本页更新"最后更新"日期。</p>',
    'privacy.contact.title': '联系方式',
    'privacy.contact.body': '<p>如有疑问、请求或投诉：<a href="mailto:gr-link@liljackson.org" class="text-neu-accent-dark hover:underline">gr-link@liljackson.org</a>。</p>',
    'privacy.footer.home': '首页',
  }
};

let currentLang = localStorage.getItem('gr-link-lang') || (navigator.language.startsWith('zh') ? 'zh' : 'en');

// SECURITY INVARIANT — `translations` is the only source for `setTranslation` below.
// Every value in `translations` MUST be a hardcoded string literal authored by us.
// NEVER read translation values from URL, query string, localStorage, postMessage,
// fetch response, or any other runtime input. If that rule ever needs to bend
// (e.g. user-generated locale packs), the `setTranslation` function below must be
// rewritten to render markup via a sanitizer (DOMPurify) or, better, eliminated
// in favor of text-only translation keys + skeleton markup in the HTML files.
function setTranslation(el, val) {
  if (val.includes('<')) {
    // innerHTML is safe ONLY because `val` is provenance-guaranteed (see invariant).
    el.innerHTML = val;
  } else {
    el.textContent = val;
  }
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('gr-link-lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      setTranslation(el, translations[lang][key]);
    }
  });

  // Update all toggle button labels
  document.querySelectorAll('[id^="lang-toggle"]').forEach(btn => {
    btn.textContent = lang === 'en' ? '中文' : 'English';
  });

  // Swap localized screenshot images (and their WebP <source> siblings)
  document.querySelectorAll('[data-src-en][data-src-zh]').forEach(img => {
    img.src = img.getAttribute('data-src-' + lang);
  });
  document.querySelectorAll('source[data-srcset-en][data-srcset-zh]').forEach(source => {
    source.srcset = source.getAttribute('data-srcset-' + lang);
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
