export interface Project {
  id: string;
  title: string;
  slug: string;
  location: string;
  type: "custom-home" | "renovation" | "extension" | "commercial" | "duplex" | "townhouse";
  year: string;
  architect?: string;
  scope?: string;
  description: string;
  heroImage: string;
  images: string[];
  featured: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image?: string;
  projectSlug?: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  heroImage: string;
  tags: string[];
}
