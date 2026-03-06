import sharp from "sharp";
import { readdir, mkdir, stat } from "fs/promises";
import { join, extname, basename } from "path";

const EXTRACTED = "D:\\Downloaded Data\\ARC STUFF\\_extracted";
const OUTPUT = "D:\\26WEBProject\\ARCBUILDER\\public\\projects";

// Max images per project for the website (hero + gallery)
const MAX_IMAGES = 12;
const HERO_WIDTH = 1920;
const GALLERY_WIDTH = 1200;
const WEBP_QUALITY = 80; // Good balance of quality/size

// Project mapping: folder name -> slug and preferred image subfolder
const PROJECTS = [
  {
    slug: "14-verona-st-pallara",
    folder: "14 Verona St, Pallara QLD 4110",
    subfolders: null, // use root recursively
  },
  {
    slug: "25-langford-st",
    folder: "25 Langford St-20260306T065702Z-3-001",
    subfolders: null,
  },
  {
    slug: "49-herbert-st",
    folder: "25-10-20260306T065714Z-3-001",
    subfolders: ["25-10/49 Herbert St"],
  },
  {
    slug: "3-brooklyn-st-spring-mountain",
    folder: "3 Brooklyn street Spring Mountain-20260306T065822Z-3-001",
    subfolders: null,
  },
  {
    slug: "3-dart-ave-kingston",
    folder: "3 Dart Ave, Kingston QLD 4114",
    subfolders: null,
  },
  {
    slug: "3-stanley-st-mount-gravatt",
    folder: "3 Stanley Street MG-20260306T075741Z-1-001",
    subfolders: ["3 Stanley Street MG/STILLS/3 Santley St/Hi Res"],
  },
  {
    slug: "35-ayesha-place-calamvale",
    folder: "35 Ayesha Place Calamvale-20260306T075751Z-3-001",
    subfolders: null,
  },
  {
    slug: "8-vineyard-drive-greenbank",
    folder: "8 Vineyard Drive Greenbank _ Photos-20260306T075743Z-3-001",
    subfolders: null,
  },
  {
    slug: "hi-def-project",
    folder: "Hi Def-20260306T065553Z-3-001",
    subfolders: null,
  },
];

const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".heic"]);

async function getImageFiles(dir) {
  const results = [];
  async function walk(d) {
    const entries = await readdir(d, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(d, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath);
      } else if (IMAGE_EXTS.has(extname(entry.name).toLowerCase())) {
        const s = await stat(fullPath);
        results.push({ path: fullPath, size: s.size, name: entry.name });
      }
    }
  }
  await walk(dir);
  return results;
}

async function convertImage(inputPath, outputPath, width) {
  try {
    await sharp(inputPath)
      .resize(width, null, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY })
      .toFile(outputPath);
    const s = await stat(outputPath);
    return s.size;
  } catch (err) {
    console.error(`  ERROR: ${basename(inputPath)} - ${err.message}`);
    return 0;
  }
}

async function processProject(project) {
  console.log(`\n=== ${project.slug} ===`);

  let searchDirs;
  if (project.subfolders) {
    searchDirs = project.subfolders.map((sf) =>
      join(EXTRACTED, project.folder, sf)
    );
  } else {
    searchDirs = [join(EXTRACTED, project.folder)];
  }

  let allImages = [];
  for (const dir of searchDirs) {
    const imgs = await getImageFiles(dir);
    allImages.push(...imgs);
  }

  // Filter out very small files (thumbnails) and headshot/settlement folders
  allImages = allImages.filter((img) => {
    const lower = img.path.toLowerCase();
    if (lower.includes("headshot") || lower.includes("settlement"))
      return false;
    if (img.size < 50000) return false; // skip tiny files
    return true;
  });

  // Sort by size descending (larger = higher quality) and take top MAX_IMAGES
  allImages.sort((a, b) => b.size - a.size);
  const selected = allImages.slice(0, MAX_IMAGES);

  console.log(
    `  Found ${allImages.length} images, selected ${selected.length}`
  );

  const outDir = join(OUTPUT, project.slug);
  await mkdir(outDir, { recursive: true });

  // Convert hero (first image, largest)
  if (selected.length > 0) {
    const heroOut = join(outDir, "hero.webp");
    const heroSize = await convertImage(selected[0].path, heroOut, HERO_WIDTH);
    console.log(
      `  Hero: ${basename(selected[0].name)} -> hero.webp (${(heroSize / 1024).toFixed(0)} KB)`
    );
  }

  // Convert gallery images
  for (let i = 0; i < selected.length; i++) {
    const galleryOut = join(outDir, `gallery-${String(i + 1).padStart(2, "0")}.webp`);
    const galSize = await convertImage(
      selected[i].path,
      galleryOut,
      GALLERY_WIDTH
    );
    console.log(
      `  ${String(i + 1).padStart(2, "0")}: ${basename(selected[i].name)} -> gallery-${String(i + 1).padStart(2, "0")}.webp (${(galSize / 1024).toFixed(0)} KB)`
    );
  }

  return selected.length;
}

async function main() {
  console.log("ARC Builders Image Converter");
  console.log("============================");
  console.log(`Output: ${OUTPUT}`);
  console.log(`Hero: ${HERO_WIDTH}px | Gallery: ${GALLERY_WIDTH}px | Quality: ${WEBP_QUALITY}`);

  await mkdir(OUTPUT, { recursive: true });

  let totalImages = 0;
  for (const project of PROJECTS) {
    const count = await processProject(project);
    totalImages += count;
  }

  console.log(`\n============================`);
  console.log(`Total: ${totalImages} images converted across ${PROJECTS.length} projects`);
}

main().catch(console.error);
