export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  images?: string[];
  tags: string[];
  category: "Web" | "Mobile" | "Full-stack" | "UI/UX";
  status: "Completed" | "In Progress" | "Archived";
  demoUrl?: string;
  githubUrl?: string;
  features?: string[];
  challenges?: string[];
  date: string;
  featured?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image?: string;
  tags: string[];
  category: "Tutorial" | "Tech" | "Career" | "Opinion";
  content: string;
  readingTime?: number;
  published?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}
