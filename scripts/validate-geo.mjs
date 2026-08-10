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
  ['zh/compatible-cameras/index.html', 'https://gr-link.liljackson.org/zh/compatible-cameras/']
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
