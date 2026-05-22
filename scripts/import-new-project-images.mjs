import sharp from "sharp";
import { mkdir, readdir } from "fs/promises";
import { extname, join } from "path";

const ROOT = "D:\\26WEBProject\\ARCBUILDER";
const OUTPUT_ROOT = join(ROOT, "public", "projects");
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const HERO_WIDTH = 1920;
const GALLERY_WIDTH = 1200;
const WEBP_QUALITY = 80;

const PROJECTS = [
  {
    slug: "17-ormskirk-st-calamvale",
    sourceDir: join(
      ROOT,
      "Data",
      "17 Ormskirk St Calamvale-20260520T013109Z-3-001",
      "17 Ormskirk St Calamvale"
    ),
    heroFile: "Outdoor 17 Ormskirk St Calamvale-16_HDR.jpg",
  },
  {
    slug: "25-binnalong-st-rochedale-south",
    sourceDir: join(
      ROOT,
      "Data",
      "25 Binnalong St Rochedale South-20260520T013059Z-3-001",
      "25 Binnalong St Rochedale South"
    ),
    heroFile: "Out - 25 Binnalong St Rochedale South-6_HDR.jpg",
  },
  {
    slug: "18-skye-court-bahrs-scrub",
    sourceDir: join(ROOT, "Data", "All-20260520T013102Z-3-001", "All"),
    heroFile: "SNY05569_HDR_1.jpg",
  },
];

function naturalSort(left, right) {
  return left.localeCompare(right, undefined, { numeric: true, sensitivity: "base" });
}

async function getImageFiles(sourceDir) {
  const entries = await readdir(sourceDir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => IMAGE_EXTENSIONS.has(extname(name).toLowerCase()))
    .sort(naturalSort);
}

async function convert(inputPath, outputPath, width) {
  await sharp(inputPath)
    .resize({ width, withoutEnlargement: true, fit: "inside" })
    .webp({ quality: WEBP_QUALITY })
    .toFile(outputPath);
}

async function importProject(project) {
  const files = await getImageFiles(project.sourceDir);
  if (!files.includes(project.heroFile)) {
    throw new Error(`Hero file not found for ${project.slug}: ${project.heroFile}`);
  }

  const orderedFiles = [
    project.heroFile,
    ...files.filter((fileName) => fileName !== project.heroFile),
  ];

  const outputDir = join(OUTPUT_ROOT, project.slug);
  await mkdir(outputDir, { recursive: true });

  await convert(join(project.sourceDir, project.heroFile), join(outputDir, "hero.webp"), HERO_WIDTH);

  for (const [index, fileName] of orderedFiles.entries()) {
    const galleryName = `gallery-${String(index + 1).padStart(2, "0")}.webp`;
    await convert(join(project.sourceDir, fileName), join(outputDir, galleryName), GALLERY_WIDTH);
  }

  console.log(`${project.slug}: hero.webp + ${orderedFiles.length} gallery images`);
}

for (const project of PROJECTS) {
  await importProject(project);
}
