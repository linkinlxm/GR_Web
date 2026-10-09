import { createHash } from 'node:crypto';
import { access, readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const product = JSON.parse(await readFile(join(root, 'data/product.json'), 'utf8'));

const requiredFiles = [
  'index.html',
  'index.md',
  'llms.txt',
  'llms-full.txt',
  'robots.txt',
  'sitemap.xml',
  'support.md',
  'compatible-cameras/index.html',
  'compatible-cameras/index.md',
  'zh/index.html',
  'zh/index.md',
  'zh/compatible-cameras/index.html',
  'zh/compatible-cameras/index.md',
  'ja/index.html',
  'ja/index.md',
  'ja/compatible-cameras/index.html',
  'ja/compatible-cameras/index.md',
  'ko/index.html',
  'ko/index.md',
  'ko/compatible-cameras/index.html',
  'ko/compatible-cameras/index.md',
  'features/photo-transfer.md',
  'features/remote-control.md',
  'features/recipes.md'
];

const errors = [];

for (const file of requiredFiles) {
  try {
    await access(join(root, file));
  } catch {
    errors.push(`Missing required GEO file: ${file}`);
  }
}

const indexedHtml = [
  ['index.html', 'https://gr-link.liljackson.org/'],
  ['support.html', 'https://gr-link.liljackson.org/support.html'],
  ['privacy.html', 'https://gr-link.liljackson.org/privacy.html'],
  ['tour.html', 'https://gr-link.liljackson.org/tour.html'],
  ['compatible-cameras/index.html', 'https://gr-link.liljackson.org/compatible-cameras/'],
  ['zh/index.html', 'https://gr-link.liljackson.org/zh/'],
  ['zh/compatible-cameras/index.html', 'https://gr-link.liljackson.org/zh/compatible-cameras/'],
  ['ja/index.html', 'https://gr-link.liljackson.org/ja/'],
  ['ja/compatible-cameras/index.html', 'https://gr-link.liljackson.org/ja/compatible-cameras/'],
  ['ko/index.html', 'https://gr-link.liljackson.org/ko/'],
  ['ko/compatible-cameras/index.html', 'https://gr-link.liljackson.org/ko/compatible-cameras/']
];

for (const [file, canonical] of indexedHtml) {
  const html = await readFile(join(root, file), 'utf8');
  if (!html.includes(`<link rel="canonical" href="${canonical}">`)) errors.push(`${file}: missing canonical ${canonical}`);
  if (!/<meta name="description" content="[^"]+">/.test(html)) errors.push(`${file}: missing meta description`);
  if (!/<h1[\s>]/.test(html)) errors.push(`${file}: missing h1`);

  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const reference = match[1];
    if (reference.startsWith('#') || /^(?:mailto:|data:|javascript:)/.test(reference)) continue;
    const url = new URL(reference, canonical);
    if (url.hostname !== 'gr-link.liljackson.org') continue;
    let localPath = decodeURIComponent(url.pathname).replace(/^\//, '');
    if (!localPath || localPath.endsWith('/')) localPath += 'index.html';
    try {
      await access(join(root, localPath));
    } catch {
      errors.push(`${file}: broken local reference ${reference} -> ${localPath}`);
    }
  }
}

const localeRoutes = new Map([
  ['en', ''],
  ['zh-Hans', 'zh/'],
  ['ja', 'ja/'],
  ['ko', 'ko/']
]);

for (const [lang, prefix] of localeRoutes) {
  for (const family of ['', 'compatible-cameras/']) {
    const file = `${prefix}${family}index.html`;
    const html = await readFile(join(root, file), 'utf8');
    if (!html.includes(`<html lang="${lang}">`)) errors.push(`${file}: incorrect document language`);
    for (const [targetLang, targetPrefix] of localeRoutes) {
      const target = `https://gr-link.liljackson.org/${targetPrefix}${family}`;
      if (!html.includes(`<link rel="alternate" hreflang="${targetLang}" href="${target}">`)) {
        errors.push(`${file}: missing reciprocal hreflang ${targetLang}`);
      }
      if (!html.includes(`href="/${targetPrefix}${family}" lang="${targetLang}" hreflang="${targetLang}"`)) {
        errors.push(`${file}: missing usable language link ${targetLang}`);
      }
    }
    if (!html.includes(`<link rel="alternate" hreflang="x-default" href="https://gr-link.liljackson.org/${family}">`)) {
      errors.push(`${file}: missing x-default hreflang`);
    }
    for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      const data = JSON.parse(match[1]);
      const hash = createHash('sha256').update(match[1]).digest('base64');
      if (!html.includes(`'sha256-${hash}'`)) errors.push(`${file}: JSON-LD CSP hash mismatch`);
      if (data.softwareVersion !== product.currentDocumentedVersion) errors.push(`${file}: software version differs from canonical product data`);
      if (data.url !== `https://gr-link.liljackson.org/${prefix}`) errors.push(`${file}: JSON-LD URL differs from canonical`);
    }
    if (!html.includes('class="language-menu notranslate" translate="no"')) errors.push(`${file}: language names may be translated`);
    if (!family) {
      const imageLocale = lang === 'zh-Hans' ? 'zh' : lang;
      const assetBase = `assets/images/appstore${imageLocale === 'en' ? '' : `-${imageLocale}`}`;
      for (const name of ['01_hero', '02_transfer', '03_viewfinder', '04_sort', '05_collage', '06_recipes', '07_privacy', '08_location']) {
        if (!html.includes(`${assetBase}/${name}.webp`)) errors.push(`${file}: missing localized marketing image ${name}`);
        for (const extension of ['webp']) {
          try { await access(join(root, `${assetBase}/${name}.${extension}`)); }
          catch { errors.push(`${file}: missing marketing asset ${name}.${extension}`); }
        }
      }
      if (!html.includes(`assets/images/hero/liveview-portrait-${imageLocale}.webp`)) errors.push(`${file}: missing localized live-view hero`);
      if (html.includes('screenshot-language-note')) errors.push(`${file}: stale English screenshot notice`);
    }
    if (lang === 'ja' || lang === 'ko') {
      if (!html.includes('17.2')) errors.push(`${file}: missing minimum iOS version`);
      if (html.includes('i18n.js')) errors.push(`${file}: static locale must not load client translation`);
      const store = lang === 'ja' ? 'jp' : 'kr';
      if (!html.includes(`https://apps.apple.com/${store}/app/gr-link/id6757835191`)) errors.push(`${file}: incorrect App Store region`);
      if (!family) {
        const markdownFile = `${prefix}index.md`;
        const markdown = await readFile(join(root, markdownFile), 'utf8');
        if (/掲載画像は英語版の画面です|표시된 스크린샷은 영어 인터페이스입니다/.test(markdown)) {
          errors.push(`${markdownFile}: stale English screenshot notice`);
        }
        if (!html.includes('https://testflight.apple.com/join/vruef1Bd')) errors.push(`${file}: missing beta link`);
        if (!html.includes('/assets/downloads/GR_Link_Recipes.grrecipe')) errors.push(`${file}: missing recipe download`);
        for (const camera of product.supportedCameras) {
          if (!html.includes(camera)) errors.push(`${file}: missing supported camera ${camera}`);
        }
      }
    }
  }
}

const index = await readFile(join(root, 'index.html'), 'utf8');
for (const fact of [product.minimumOS, ...product.supportedCameras]) {
  if (!index.includes(fact)) errors.push(`index.html: canonical fact is missing: ${fact}`);
}

const ogImage = index.match(/<meta property="og:image" content="https:\/\/gr-link\.liljackson\.org\/([^\"]+)">/)?.[1];
if (!ogImage) {
  errors.push('index.html: missing same-origin Open Graph image');
} else {
  try {
    await access(join(root, ogImage));
  } catch {
    errors.push(`index.html: Open Graph image does not exist: ${ogImage}`);
  }
}

const robots = await readFile(join(root, 'robots.txt'), 'utf8');
for (const agent of ['OAI-SearchBot', 'ChatGPT-User', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot']) {
  if (!robots.includes(`User-agent: ${agent}`)) errors.push(`robots.txt: missing ${agent}`);
}

const sitemap = await readFile(join(root, 'sitemap.xml'), 'utf8');
for (const [, canonical] of indexedHtml) {
  if (!sitemap.includes(`<loc>${canonical}</loc>`)) errors.push(`sitemap.xml: missing ${canonical}`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`GEO validation passed: ${requiredFiles.length} knowledge files and ${indexedHtml.length} canonical pages checked.`);
}
