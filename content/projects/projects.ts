import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with payment integration and admin dashboard.",
    longDescription: "Built a complete e-commerce solution with Next.js, featuring product management, shopping cart, checkout process, and payment integration with Stripe. Includes an admin dashboard for managing products, orders, and customers.",
    image: "/placeholder.svg",
    tags: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
    category: "Full-stack",
    status: "Completed",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example/ecommerce",
    features: [
      "Product catalog with search and filters",
      "Shopping cart and checkout",
      "Stripe payment integration",
      "Admin dashboard",
      "Order management",
    ],
    challenges: [
      "Implementing secure payment processing",
      "Optimizing database queries for large product catalogs",
      "Building responsive admin interface",
    ],
    date: "2024-03",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates.",
    longDescription: "A modern task management application built with React and Firebase. Features real-time collaboration, drag-and-drop task organization, and team management capabilities.",
    image: "/placeholder.svg",
    tags: ["React", "Firebase", "TypeScript", "Material-UI"],
    category: "Web",
    status: "Completed",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example/taskapp",
    features: [
      "Real-time collaboration",
      "Drag-and-drop interface",
      "Team management",
      "Task assignments and deadlines",
      "Activity tracking",
    ],
    challenges: [
      "Implementing real-time synchronization",
      "Handling offline capabilities",
      "Optimizing performance with large task lists",
    ],
    date: "2024-01",
    featured: true,
  },
  {
    id: "3",
    title: "Portfolio Website",
    description: "Modern portfolio website with blog and project showcase.",
    longDescription: "A sleek portfolio website built with Next.js featuring a blog system powered by MDX, project showcase, and contact form. Optimized for SEO and performance.",
    image: "/placeholder.svg",
    tags: ["Next.js", "MDX", "Tailwind", "Framer Motion"],
    category: "Web",
    status: "Completed",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example/portfolio",
    features: [
      "MDX-powered blog",
      "Project showcase with filtering",
      "Contact form with validation",
      "Dark mode support",
      "SEO optimized",
    ],
    challenges: [
      "Setting up MDX with Next.js",
      "Implementing smooth animations",
      "Achieving perfect Lighthouse scores",
    ],
    date: "2024-06",
    featured: true,
  },
  {
    id: "4",
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with forecasts and historical data.",
    longDescription: "A comprehensive weather dashboard that displays current conditions, forecasts, and historical weather data. Built with React and integrates with multiple weather APIs.",
    image: "/placeholder.svg",
    tags: ["React", "API", "Charts.js", "CSS"],
    category: "Web",
    status: "Completed",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example/weather",
    date: "2023-11",
    featured: false,
  },
  {
    id: "5",
    title: "Social Media Dashboard",
    description: "Analytics dashboard for managing multiple social media accounts.",
    longDescription: "A centralized dashboard for managing and analyzing multiple social media accounts. Provides insights, scheduling capabilities, and performance metrics.",
    image: "/placeholder.svg",
    tags: ["Next.js", "PostgreSQL", "Charts", "API"],
    category: "Full-stack",
    status: "In Progress",
    githubUrl: "https://github.com/example/social",
    date: "2024-08",
    featured: false,
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "All") return projects;
  return projects.filter((project) => project.category === category);
}
