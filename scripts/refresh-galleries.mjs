import { copyFileSync, readdirSync, unlinkSync, mkdirSync, existsSync } from 'fs';
import { join, resolve } from 'path';

const CONVERTED_BASE = resolve('D:/Downloaded Data/ARC STUFF/_extracted/converted-webp');
const PUBLIC_PROJECTS = resolve('D:/26WEBProject/ARCBUILDER/public/projects');

const mappings = [
  {
    slug: '3-brooklyn-st-spring-mountain',
    sourceFolder: '3-brooklyn-st-spring-mountain',
    heroSource: 17,
    gallery: [2, 5, 6, 11, 12, 16],
  },
  {
    slug: '3-dart-ave-kingston',
    sourceFolder: '3-dart-ave-kingston',
    heroSource: null,
    gallery: [2, 3, 4, 9, 14, 16, 17],
  },
  {
    slug: '3-stanley-st-mount-gravatt',
    sourceFolder: '3-stanley-st-mount-gravatt',
    heroSource: null,
    gallery: [2, 3, 4, 5, 6, 7, 9, 10, 12, 14, 15, 16, 18],
  },
  {
    slug: '8-vineyard-drive-greenbank',
    sourceFolder: '8-vineyard-drive-greenbank',
    heroSource: 14,
    gallery: [14, 12, 13, 10, 3, 2, 1],
  },
  {
    slug: '14-verona-st-pallara',
    sourceFolder: '14-verona-st-pallara',
    heroSource: null,
    gallery: [2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 14],
  },
  {
    slug: '25-langford-st',
    sourceFolder: '25-langford-st',
    heroSource: null,
    gallery: [2, 3, 5, 6, 8, 10, 12, 13, 14, 15, 24, 23, 32],
  },
  {
    slug: '35-ayesha-place-calamvale',
    sourceFolder: '35-ayesha-place-calamvale',
    heroSource: null,
    gallery: [2, 3, 4, 8, 9, 14, 16, 17, 18, 20],
  },
  {
    slug: '49-herbert-st',
    sourceFolder: '49-herbert-st',
    heroSource: null,
    gallery: [32, 31, 30, 27, 26, 24, 23, 22, 20, 18, 17, 16, 14, 12, 10],
  },
  {
    slug: 'hi-def-project',
    sourceFolder: 'spring-mountain-hi-def',
    heroSource: null,
    gallery: [3, 6, 8, 10, 11, 13, 17, 18, 19],
  },
];

for (const m of mappings) {
  const destDir = join(PUBLIC_PROJECTS, m.slug);
  const sourceDir = join(CONVERTED_BASE, m.sourceFolder);

  if (!existsSync(destDir)) mkdirSync(destDir, { recursive: true });
  if (!existsSync(sourceDir)) {
    console.error(`  ❌ Source folder not found: ${sourceDir}`);
    continue;
  }

  console.log(`\n📁 ${m.slug}`);

  // 1. Remove old gallery-*.webp files
  const oldGallery = readdirSync(destDir).filter(f => /^gallery-\d+\.webp$/.test(f));
  for (const f of oldGallery) {
    unlinkSync(join(destDir, f));
  }
  console.log(`  Removed ${oldGallery.length} old gallery images`);

  // 2. Copy new hero if specified
  if (m.heroSource !== null) {
    const heroSrc = join(sourceDir, `${m.sourceFolder}-${String(m.heroSource).padStart(2, '0')}.webp`);
    const heroDest = join(destDir, 'hero.webp');
    if (existsSync(heroSrc)) {
      copyFileSync(heroSrc, heroDest);
      console.log(`  ✅ Hero updated from image ${m.heroSource}`);
    } else {
      console.error(`  ❌ Hero source not found: ${heroSrc}`);
    }
  } else {
    console.log(`  Hero: keeping current`);
  }

  // 3. Copy gallery images in specified order
  for (let i = 0; i < m.gallery.length; i++) {
    const num = m.gallery[i];
    const srcFile = join(sourceDir, `${m.sourceFolder}-${String(num).padStart(2, '0')}.webp`);
    const destFile = join(destDir, `gallery-${String(i + 1).padStart(2, '0')}.webp`);
    if (existsSync(srcFile)) {
      copyFileSync(srcFile, destFile);
    } else {
      console.error(`  ❌ Missing: ${m.sourceFolder}-${String(num).padStart(2, '0')}.webp`);
    }
  }
  console.log(`  ✅ ${m.gallery.length} gallery images copied`);
}

console.log('\n✅ All galleries refreshed!');
