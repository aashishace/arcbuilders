import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/\r/g, " ")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokens(text) {
  return normalize(text)
    .split(" ")
    .filter((word) => word.length > 2);
}

function buildNgrams(words, n) {
  const grams = new Set();
  if (words.length < n) return grams;

  for (let i = 0; i <= words.length - n; i += 1) {
    grams.add(words.slice(i, i + n).join(" "));
  }

  return grams;
}

function jaccard(a, b) {
  if (a.size === 0 || b.size === 0) return 0;

  let intersection = 0;
  for (const item of a) {
    if (b.has(item)) intersection += 1;
  }

  const union = a.size + b.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".md"));

const posts = files.map((file) => {
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
  const { data, content } = matter(raw);
  const wordList = tokens(content);

  return {
    file,
    slug: data.slug || file.replace(/\.md$/, ""),
    title: data.title || file,
    ngram5: buildNgrams(wordList, 5),
    ngram8: buildNgrams(wordList, 8),
  };
});

const rows = [];

for (let i = 0; i < posts.length; i += 1) {
  for (let j = i + 1; j < posts.length; j += 1) {
    const postA = posts[i];
    const postB = posts[j];
    const sim5 = jaccard(postA.ngram5, postB.ngram5);
    const sim8 = jaccard(postA.ngram8, postB.ngram8);

    rows.push({
      slugA: postA.slug,
      slugB: postB.slug,
      sim5,
      sim8,
    });
  }
}

rows.sort((a, b) => b.sim5 - a.sim5);

const top = rows.slice(0, 15).map((row) => ({
  pair: `${row.slugA} <-> ${row.slugB}`,
  sim5: Number((row.sim5 * 100).toFixed(2)),
  sim8: Number((row.sim8 * 100).toFixed(2)),
}));

const riskPairs = rows.filter((row) => row.sim5 >= 0.2 || row.sim8 >= 0.08).map((row) => ({
  pair: `${row.slugA} <-> ${row.slugB}`,
  sim5: Number((row.sim5 * 100).toFixed(2)),
  sim8: Number((row.sim8 * 100).toFixed(2)),
}));

const maxByPost = posts.map((post) => {
  const related = rows.filter((row) => row.slugA === post.slug || row.slugB === post.slug);

  if (related.length === 0) {
    return {
      slug: post.slug,
      maxSim5: 0,
      maxSim8: 0,
    };
  }

  const maxSim5 = Math.max(...related.map((row) => row.sim5));
  const maxSim8 = Math.max(...related.map((row) => row.sim8));

  return {
    slug: post.slug,
    maxSim5: Number((maxSim5 * 100).toFixed(2)),
    maxSim8: Number((maxSim8 * 100).toFixed(2)),
  };
});

const report = {
  generatedAt: new Date().toISOString(),
  totalPosts: posts.length,
  thresholds: {
    sim5WarningPercent: 20,
    sim8WarningPercent: 8,
  },
  highestSimilarityPairs: top,
  riskPairs,
  maxSimilarityByPost: maxByPost,
};

console.log(JSON.stringify(report, null, 2));
