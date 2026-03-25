# Quick Start Guide

Get your portfolio up and running in 5 minutes!

## Prerequisites

- Node.js 18.17 or later installed
- A code editor (VS Code recommended)
- Basic knowledge of React/Next.js

## Step 1: Install Dependencies

```bash
npm install
```

This installs all required packages including Next.js, React, TypeScript, and TailwindCSS.

## Step 2: Customize Your Information

### Update Site Config

Edit `lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: "Your Name",                    // Your full name
  title: "Your Name - Developer",       // Browser tab title
  description: "Your description...",   // Meta description
  author: {
    name: "Your Name",
    email: "your@email.com",
    role: "Full Stack Developer",       // Your job title
    bio: "Your bio...",                 // Short bio
  },
  links: {
    github: "https://github.com/yourname",
    linkedin: "https://linkedin.com/in/yourname",
    twitter: "https://twitter.com/yourname",
    email: "mailto:your@email.com",
  },
};
```

### Update Tech Stack

In the same file, update your technologies:

```typescript
export const TECH_STACK = [
  { name: "Next.js", category: "frontend" },
  { name: "React", category: "frontend" },
  // Add your technologies here
];
```

## Step 3: Add Your Projects

Edit `content/projects/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "Your Project",
    description: "Short description",
    image: "/images/projects/project.jpg",  // Add your image
    tags: ["Next.js", "TypeScript"],
    category: "Web",
    status: "Completed",
    demoUrl: "https://demo.com",
    githubUrl: "https://github.com/user/repo",
    date: "2024-01",
    featured: true,
  },
  // Add more projects
];
```

## Step 4: Write Your First Blog Post

Create `content/blog/my-first-post.md`:

```markdown
---
title: "My First Blog Post"
description: "This is my first blog post"
date: "2024-01-01"
author: "Your Name"
category: "Tutorial"
tags: ["React", "Web Development"]
published: true
---

# My First Post

Your content here...
```

## Step 5: Add Images (Optional)

Place images in:
- `public/images/projects/` - Project screenshots
- `public/images/blog/` - Blog post images

Reference them as:
```typescript
image: "/images/projects/my-project.jpg"
```

## Step 6: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Step 7: Test Your Site

Check all pages:
- Home: http://localhost:3000
- Projects: http://localhost:3000/projects
- Blog: http://localhost:3000/blog
- Contact: http://localhost:3000/contact

Test features:
- Dark mode toggle
- Navigation
- Mobile menu
- Contact form
- Project filters
- Blog filters

## Step 8: Build for Production

```bash
npm run build
npm start
```

This creates an optimized production build.

## Next Steps

### Customize Design

1. **Colors**: Edit `app/globals.css`
2. **Fonts**: Update `app/layout.tsx`
3. **Spacing**: Modify components as needed

### Add More Content

1. Write 2-3 more blog posts
2. Add 3-5 projects
3. Add real images

### Deploy

Follow the [DEPLOYMENT.md](./DEPLOYMENT.md) guide to deploy to Vercel.

## Common Commands

```bash
npm run dev          # Development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Check code style
npm run type-check   # Check TypeScript
```

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000 (Windows)
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

### Module Not Found

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

### Build Errors

```bash
# Check for TypeScript errors
npm run type-check

# Check for linting errors
npm run lint
```

## File Structure Quick Reference

```
├── app/
│   ├── page.tsx              # Home page - Edit hero, about sections
│   ├── projects/page.tsx     # Projects list
│   ├── blog/page.tsx         # Blog list
│   └── contact/page.tsx      # Contact form
├── components/
│   ├── layout/
│   │   ├── Header.tsx        # Top navigation
│   │   └── Footer.tsx        # Footer links
│   └── sections/             # Home page sections
├── content/
│   ├── blog/                 # Your blog posts (.md files)
│   └── projects/projects.ts  # Your projects data
├── lib/
│   └── constants.ts          # Your personal info
└── public/images/            # Your images
```

## Essential Customizations Checklist

- [ ] Update `SITE_CONFIG` with your info
- [ ] Update `TECH_STACK` with your technologies
- [ ] Add your projects to `projects.ts`
- [ ] Write 2-3 blog posts
- [ ] Update social media links
- [ ] Add your images
- [ ] Test on mobile
- [ ] Test dark mode
- [ ] Run production build

## Getting Help

- **Documentation**: Check [README.md](./README.md)
- **Deployment**: See [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Contributing**: Read [CONTRIBUTING.md](./CONTRIBUTING.md)

## What's Next?

1. Personalize content and design
2. Add more projects and blog posts
3. Optimize images
4. Set up analytics
5. Deploy to production
6. Share with the world!

---

You're all set! Start building your amazing portfolio.
