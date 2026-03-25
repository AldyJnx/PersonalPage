export const SITE_CONFIG = {
  name: "Aldy Jnx",
  title: "Aldy Jnx - Full Stack Developer",
  description: "Full Stack Developer specializing in modern web technologies. Building scalable applications with Next.js, React, and TypeScript.",
  url: "https://aldyjnx.com",
  author: {
    name: "Aldy Jnx",
    email: "aldy@example.com",
    role: "Full Stack Developer",
    bio: "Passionate full-stack developer with expertise in building modern web applications. Focused on creating elegant solutions to complex problems.",
  },
  links: {
    github: "https://github.com/aldyjnx",
    linkedin: "https://linkedin.com/in/aldyjnx",
    twitter: "https://twitter.com/aldyjnx",
    email: "mailto:aldy@example.com",
  },
};

export const TECH_STACK = [
  { name: "Next.js", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "TailwindCSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "Docker", category: "devops" },
  { name: "Git", category: "devops" },
];

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const PROJECTS_CATEGORIES = [
  "All",
  "Web",
  "Mobile",
  "Full-stack",
  "UI/UX",
] as const;

export const BLOG_CATEGORIES = [
  "All",
  "Tutorial",
  "Tech",
  "Career",
  "Opinion",
] as const;
