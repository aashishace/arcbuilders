import sharp from "sharp";
import { copyFile, mkdir, readdir, rm } from "fs/promises";
import { join, extname } from "path";

const EXTRACTED_ROOT = "D:\\Downloaded Data\\ARC STUFF\\_extracted";
const LOCAL_OUTPUT_DIRNAME = "converted-webp";
const BUNDLE_ROOT = join(EXTRACTED_ROOT, LOCAL_OUTPUT_DIRNAME);
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".heic", ".webp"]);
const WEBP_QUALITY = 82;
const MAX_WIDTH = 2200;

const PROJECTS = [
  {
    slug: "14-verona-st-pallara",
    sourceDir: join(EXTRACTED_ROOT, "14 Verona St, Pallara QLD 4110", "14 Verona St, Pallara QLD 4110"),
  },
  {
    slug: "25-langford-st",
    sourceDir: join(
      EXTRACTED_ROOT,
      "25 Langford St-20260306T065702Z-3-001",
      "25 Langford St",
      "Photos",
      "25 Langford St",
      "Eight Mile Plains - Double Story"
    ),
  },
  {
    slug: "3-brooklyn-st-spring-mountain",
    sourceDir: join(
      EXTRACTED_ROOT,
      "3 Brooklyn street Spring Mountain-20260306T065822Z-3-001",
      "3 Brooklyn street Spring Mountain",
      "HI def"
    ),
  },
  {
    slug: "3-dart-ave-kingston",
    sourceDir: join(EXTRACTED_ROOT, "3 Dart Ave, Kingston QLD 4114", "3 Dart Ave, Kingston QLD 4114"),
  },
  {
    slug: "3-stanley-st-mount-gravatt",
    sourceDir: join(
      EXTRACTED_ROOT,
      "3 Stanley Street MG-20260306T075741Z-1-001",
      "3 Stanley Street MG",
      "STILLS",
      "3 Santley St",
      "Hi Res"
    ),
  },
  {
    slug: "35-ayesha-place-calamvale",
    sourceDir: join(
      EXTRACTED_ROOT,
      "35 Ayesha Place Calamvale-20260306T075751Z-3-001",
      "35 Ayesha Place Calamvale",
      "Photos"
    ),
  },
  {
    slug: "49-herbert-st",
    sourceDir: join(EXTRACTED_ROOT, "49 Herbert St", "Photos", "Hi Res"),
  },
  {
    slug: "8-vineyard-drive-greenbank",
    sourceDir: join(
      EXTRACTED_ROOT,
      "8 Vineyard Drive Greenbank _ Photos-20260306T075743Z-3-001",
      "8 Vineyard Drive Greenbank _ Photos"
    ),
  },
  {
    slug: "spring-mountain-hi-def",
    sourceDir: join(EXTRACTED_ROOT, "Spring Mountain", "Hi Def"),
  },
];

function naturalSort(left, right) {
  return left.localeCompare(right, undefined, { numeric: true, sensitivity: "base" });
}

async function getDirectImageFiles(sourceDir) {
  const entries = await readdir(sourceDir, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile())
    .filter((entry) => IMAGE_EXTENSIONS.has(extname(entry.name).toLowerCase()))
    .map((entry) => entry.name)
    .sort(naturalSort);
}

async function ensureCleanDirectory(dirPath) {
  await rm(dirPath, { recursive: true, force: true });
  await mkdir(dirPath, { recursive: true });
}

async function convertProject(project) {
  const localOutputDir = join(project.sourceDir, LOCAL_OUTPUT_DIRNAME);
  const bundleProjectDir = join(BUNDLE_ROOT, project.slug);
  const files = await getDirectImageFiles(project.sourceDir);

  if (files.length === 0) {
    throw new Error(`No direct image files found in ${project.sourceDir}`);
  }

  await ensureCleanDirectory(localOutputDir);
  await ensureCleanDirectory(bundleProjectDir);

  for (const [index, fileName] of files.entries()) {
    const serial = String(index + 1).padStart(2, "0");
    const outputName = `${project.slug}-${serial}.webp`;
    const inputPath = join(project.sourceDir, fileName);
    const localOutputPath = join(localOutputDir, outputName);
    const bundleOutputPath = join(bundleProjectDir, outputName);

    await sharp(inputPath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true, fit: "inside" })
      .webp({ quality: WEBP_QUALITY })
      .toFile(localOutputPath);

    await copyFile(localOutputPath, bundleOutputPath);
  }

  return {
    slug: project.slug,
    sourceDir: project.sourceDir,
    localOutputDir,
    bundleProjectDir,
    count: files.length,
  };
}

async function main() {
  await ensureCleanDirectory(BUNDLE_ROOT);

  const results = [];
  for (const project of PROJECTS) {
    results.push(await convertProject(project));
  }

  console.log(`Created bundle root: ${BUNDLE_ROOT}`);
  for (const result of results) {
    console.log(`${result.slug}|count=${result.count}|local=${result.localOutputDir}|bundle=${result.bundleProjectDir}`);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});