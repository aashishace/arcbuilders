import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost } from "./types";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"));

  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    return {
      id: data.slug as string,
      title: data.title as string,
      slug: data.slug as string,
      excerpt: data.excerpt as string,
      metaDescription: data.metaDescription as string | undefined,
      targetKeyword: data.targetKeyword as string | undefined,
      suburbIntent: (data.suburbIntent as string[]) || [],
      content,
      category: data.category as string,
      author: data.author as string,
      date: data.date as string,
      readTime: data.readTime as string,
      heroImage: data.heroImage as string,
      tags: (data.tags as string[]) || [],
    } satisfies BlogPost;
  });

  // Sort by date descending (newest first)
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return undefined;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    id: data.slug as string,
    title: data.title as string,
    slug: data.slug as string,
    excerpt: data.excerpt as string,
    metaDescription: data.metaDescription as string | undefined,
    targetKeyword: data.targetKeyword as string | undefined,
    suburbIntent: (data.suburbIntent as string[]) || [],
    content,
    category: data.category as string,
    author: data.author as string,
    date: data.date as string,
    readTime: data.readTime as string,
    heroImage: data.heroImage as string,
    tags: (data.tags as string[]) || [],
  } satisfies BlogPost;
}
