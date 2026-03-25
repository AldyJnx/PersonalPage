# Contributing Guide

Thank you for your interest in contributing to this portfolio project! This guide will help you understand the project structure and how to make changes.

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. Make your changes

6. Test your changes:
   ```bash
   npm run dev      # Development server
   npm run build    # Production build
   npm run lint     # Check code style
   npm run type-check  # Check TypeScript
   ```

7. Commit your changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

8. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

9. Create a Pull Request

## Project Structure Overview

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── projects/          # Projects pages
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── blog/             # Blog components
│   ├── layout/           # Layout components
│   ├── projects/         # Project components
│   ├── sections/         # Page sections
│   └── ui/               # UI components
├── content/              # Content (blog posts, projects)
├── lib/                  # Utilities and helpers
├── public/               # Static assets
└── types/                # TypeScript types
```

## Code Style Guide

### TypeScript

- Use TypeScript for all new files
- Define interfaces for component props
- Avoid using `any` type
- Use type inference where possible

Example:
```typescript
interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  // Component code
}
```

### React Components

- Use functional components with hooks
- Use "use client" directive for client components
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks

Example:
```typescript
"use client";

import { useState } from "react";

export function MyComponent() {
  const [state, setState] = useState(false);

  return <div>{/* JSX */}</div>;
}
```

### CSS/Styling

- Use TailwindCSS utility classes
- Use `cn()` helper for conditional classes
- Follow mobile-first approach
- Maintain consistent spacing using Tailwind scale

Example:
```typescript
import { cn } from "@/lib/utils";

<div className={cn(
  "base-classes",
  condition && "conditional-classes",
  className
)}>
  Content
</div>
```

### File Naming

- Components: PascalCase (e.g., `ProjectCard.tsx`)
- Utilities: camelCase (e.g., `utils.ts`)
- Constants: camelCase (e.g., `constants.ts`)
- Types: PascalCase (e.g., `types/index.ts`)

## Adding New Features

### Adding a New Page

1. Create page file in `app/`:
   ```typescript
   // app/new-page/page.tsx
   import { Header } from "@/components/layout/Header";
   import { Footer } from "@/components/layout/Footer";

   export default function NewPage() {
     return (
       <div className="flex min-h-screen flex-col">
         <Header />
         <main className="flex-1">
           {/* Page content */}
         </main>
         <Footer />
       </div>
     );
   }
   ```

2. Add navigation link in `lib/constants.ts`:
   ```typescript
   export const NAV_LINKS = [
     // existing links
     { href: "/new-page", label: "New Page" },
   ];
   ```

### Adding a New UI Component

1. Create component in `components/ui/`:
   ```typescript
   // components/ui/NewComponent.tsx
   import { HTMLAttributes, forwardRef } from "react";
   import { cn } from "@/lib/utils";

   export interface NewComponentProps extends HTMLAttributes<HTMLDivElement> {
     variant?: "default" | "secondary";
   }

   const NewComponent = forwardRef<HTMLDivElement, NewComponentProps>(
     ({ className, variant = "default", ...props }, ref) => {
       return (
         <div
           ref={ref}
           className={cn(
             "base-styles",
             variant === "secondary" && "secondary-styles",
             className
           )}
           {...props}
         />
       );
     }
   );

   NewComponent.displayName = "NewComponent";

   export { NewComponent };
   ```

2. Use the component:
   ```typescript
   import { NewComponent } from "@/components/ui/NewComponent";

   <NewComponent variant="secondary">Content</NewComponent>
   ```

### Adding Content

#### Blog Post

1. Create markdown file in `content/blog/`:
   ```markdown
   ---
   title: "Post Title"
   description: "Description"
   date: "2024-01-01"
   author: "Your Name"
   category: "Tutorial"
   tags: ["Tag1", "Tag2"]
   published: true
   ---

   # Content here
   ```

#### Project

1. Add to `content/projects/projects.ts`:
   ```typescript
   {
     id: "unique-id",
     title: "Project Title",
     description: "Short description",
     image: "/images/projects/image.jpg",
     tags: ["Tech1", "Tech2"],
     category: "Web",
     status: "Completed",
     date: "2024-01",
     featured: true,
   }
   ```

## Testing Guidelines

### Manual Testing

Before submitting a PR:

1. Test in different browsers (Chrome, Firefox, Safari)
2. Test on mobile devices
3. Test dark mode
4. Test all navigation links
5. Test form submissions
6. Verify images load correctly

### Build Testing

```bash
npm run build
npm start
```

Navigate to http://localhost:3000 and test the production build.

## Common Tasks

### Updating Colors

Edit `app/globals.css`:
```css
:root {
  --primary: 222.2 47.4% 11.2%;
  /* Update other colors */
}
```

### Adding New Technology Badge

Update `lib/constants.ts`:
```typescript
export const TECH_STACK = [
  // existing items
  { name: "New Tech", category: "frontend" },
];
```

### Changing Animation Duration

Framer Motion animations:
```typescript
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}  // Change this
>
```

## Pull Request Process

1. Update documentation if needed
2. Test all changes thoroughly
3. Write a clear PR description
4. Reference any related issues
5. Ensure CI passes (if configured)
6. Wait for review

### PR Title Format

- `feat: Add new feature`
- `fix: Fix bug`
- `docs: Update documentation`
- `style: Code style changes`
- `refactor: Code refactoring`
- `perf: Performance improvement`
- `test: Add tests`

## Code of Conduct

- Be respectful and constructive
- Welcome newcomers
- Focus on the code, not the person
- Help others learn

## Questions?

If you have questions:
- Check existing documentation
- Look at similar code in the project
- Open an issue for discussion
- Ask in the PR comments

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT).

---

Thank you for contributing!
