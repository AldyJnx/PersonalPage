# Project Architecture

Technical documentation for the portfolio project architecture.

## Overview

This portfolio is built as a modern, statically-generated website using Next.js 15 with the App Router, TypeScript for type safety, and TailwindCSS for styling. The architecture follows a component-based approach with clear separation of concerns.

## Technology Stack

### Core Framework
- **Next.js 15**: React framework with App Router for file-based routing
- **React 19**: UI library for building components
- **TypeScript**: Type-safe JavaScript for better developer experience

### Styling
- **TailwindCSS**: Utility-first CSS framework
- **CSS Variables**: For theming (light/dark mode)
- **Framer Motion**: Animation library for smooth transitions

### Content Management
- **MDX/Markdown**: For blog posts with frontmatter
- **gray-matter**: Parse markdown frontmatter
- **remark**: Markdown processor for HTML conversion

### Form Handling
- **React Hook Form**: Form state management
- **Zod**: Schema validation
- **@hookform/resolvers**: Integrates Zod with React Hook Form

### Icons & UI
- **Lucide React**: Icon library
- **Custom Components**: Based on shadcn/ui patterns

## Architecture Patterns

### 1. File-Based Routing (App Router)

```
app/
├── page.tsx                    # Home (/)
├── projects/
│   ├── page.tsx               # Projects list (/projects)
│   └── [id]/page.tsx          # Project detail (/projects/:id)
├── blog/
│   ├── page.tsx               # Blog list (/blog)
│   └── [slug]/page.tsx        # Blog post (/blog/:slug)
└── contact/page.tsx           # Contact (/contact)
```

### 2. Component Architecture

```
components/
├── ui/                        # Reusable UI primitives
│   ├── Button.tsx            # Button component
│   ├── Card.tsx              # Card components
│   ├── Badge.tsx             # Badge component
│   ├── Input.tsx             # Input component
│   └── Textarea.tsx          # Textarea component
├── layout/                    # Layout components
│   ├── Header.tsx            # Site header
│   ├── Footer.tsx            # Site footer
│   └── MobileNav.tsx         # Mobile navigation
├── sections/                  # Page sections (Home)
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── FeaturedProjectsSection.tsx
│   └── ContactCTASection.tsx
├── blog/                      # Blog-specific components
│   ├── BlogCard.tsx
│   └── BlogFilters.tsx
├── projects/                  # Project-specific components
│   ├── ProjectCard.tsx
│   └── ProjectFilters.tsx
├── ContactForm.tsx            # Contact form
├── ThemeProvider.tsx          # Theme provider
└── ThemeToggle.tsx            # Theme toggle button
```

### 3. Data Layer

#### Static Data (Projects)
```typescript
// content/projects/projects.ts
export const projects: Project[] = [
  // Project data
];

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured);
}
```

#### Dynamic Content (Blog)
```typescript
// lib/blog.ts
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // Read markdown files
  // Parse frontmatter
  // Return posts
}
```

### 4. Type System

```typescript
// types/index.ts
export interface Project {
  id: string;
  title: string;
  // ... other fields
}

export interface BlogPost {
  slug: string;
  title: string;
  // ... other fields
}
```

### 5. Utility Layer

```typescript
// lib/utils.ts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date): string {
  // Date formatting
}
```

## Data Flow

### Static Pages (Projects)

```
User Request
    ↓
Next.js Router
    ↓
Page Component (projects/page.tsx)
    ↓
Data Import (content/projects/projects.ts)
    ↓
Filter/Transform
    ↓
Render Components (ProjectCard)
    ↓
HTML Response
```

### Dynamic Blog Posts

```
Build Time:
    ↓
getAllBlogPosts() reads content/blog/
    ↓
Parse markdown with gray-matter
    ↓
Generate static pages with generateStaticParams()
    ↓
Pre-render all blog posts

Runtime:
    ↓
User navigates to /blog/[slug]
    ↓
Serve pre-rendered HTML
    ↓
Hydrate React components
```

### Form Submission

```
User fills form
    ↓
React Hook Form manages state
    ↓
On submit: Zod validates data
    ↓
POST to /api/contact
    ↓
API Route processes request
    ↓
Response to client
    ↓
Show success/error message
```

## Rendering Strategy

### Server Components (Default)
- Layout
- Pages
- Blog post pages
- Project detail pages

**Benefits:**
- Zero client-side JavaScript
- Better SEO
- Faster initial load

### Client Components ("use client")
- Interactive forms
- Theme toggle
- Navigation menu
- Animated sections
- Filter components

**When to use:**
- Need React hooks (useState, useEffect)
- Event handlers
- Browser APIs
- Third-party libraries requiring client

## State Management

### Server State
- Blog posts: File system (markdown files)
- Projects: Static data (TypeScript file)
- No database required

### Client State
- Theme: next-themes (localStorage + context)
- Form state: React Hook Form
- UI state: useState hooks

### Why No Global State Manager?
- Simple app with minimal shared state
- Server components handle most data
- Client state is localized to components

## Styling Architecture

### CSS Variables (Theming)
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... more variables */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... dark theme overrides */
}
```

### TailwindCSS
- Utility classes for rapid development
- Custom colors via CSS variables
- Responsive design with breakpoints
- Dark mode with class strategy

### Component Styling Pattern
```typescript
<div className={cn(
  "base-styles",
  variant === "primary" && "primary-styles",
  size === "lg" && "large-styles",
  className
)}>
```

## Performance Optimizations

### Image Optimization
- next/image for automatic optimization
- WebP/AVIF format support
- Responsive images with srcset
- Lazy loading by default

### Code Splitting
- Automatic route-based splitting
- Dynamic imports for heavy components
- Separate bundles per page

### Caching Strategy
- Static pages cached at CDN
- API routes can implement caching headers
- Browser caching for static assets

### Bundle Size
- Tree shaking removes unused code
- Production builds are minified
- External dependencies analyzed

## SEO Implementation

### Metadata
```typescript
export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description",
  openGraph: { /* ... */ },
  twitter: { /* ... */ },
};
```

### Structured Data
- Semantic HTML
- JSON-LD support (can be added)
- Proper heading hierarchy

### Sitemap
- Auto-generated for all routes
- Submitted to search engines

## Security Considerations

### Input Validation
- Zod schema validation
- Server-side validation in API routes
- XSS prevention via React

### Environment Variables
- Sensitive data in .env files
- Public variables prefixed with NEXT_PUBLIC_
- Never committed to git

### API Routes
- Rate limiting (can be added)
- CORS headers (configured as needed)
- Input sanitization

## Deployment Architecture

### Static Generation
```
Build Time:
    ↓
Next.js builds all pages
    ↓
Generates static HTML
    ↓
Optimizes assets
    ↓
Creates production bundle

Runtime (Vercel):
    ↓
CDN serves static files
    ↓
Edge network for low latency
    ↓
API routes run on serverless functions
```

### Edge Network Benefits
- Global CDN distribution
- Automatic HTTPS
- Instant cache invalidation
- Zero downtime deployments

## Scalability

### Current Scale
- Suitable for personal portfolios
- Handles 100s of blog posts
- 100s of projects
- 1000s of concurrent users

### Growth Path
1. Add database (PostgreSQL/MongoDB)
2. Implement ISR (Incremental Static Regeneration)
3. Add CMS (Contentful, Sanity)
4. Implement search (Algolia)
5. Add analytics (Vercel Analytics, GA4)

## Testing Strategy

### Current
- Type checking with TypeScript
- Linting with ESLint
- Manual testing

### Recommended Additions
- Unit tests (Jest + React Testing Library)
- E2E tests (Playwright)
- Visual regression tests (Chromatic)
- Performance monitoring (Lighthouse CI)

## Development Workflow

```
Developer writes code
    ↓
Save file
    ↓
Fast Refresh updates browser
    ↓
TypeScript checks types in IDE
    ↓
ESLint shows warnings
    ↓
Fix issues
    ↓
Commit with conventional commits
    ↓
Push to GitHub
    ↓
Vercel auto-deploys preview
    ↓
Review preview
    ↓
Merge to main
    ↓
Production deployment
```

## Future Enhancements

### Planned Features
1. **CMS Integration**: Headless CMS for easier content management
2. **Search**: Full-text search for blog posts
3. **Comments**: Giscus or similar for blog comments
4. **Newsletter**: Email subscription
5. **Analytics**: Detailed visitor analytics
6. **A/B Testing**: Test different designs
7. **i18n**: Multiple language support

### Performance
- Service Worker for offline support
- More aggressive caching
- Image CDN (Cloudinary)
- Bundle analysis and optimization

### Developer Experience
- Automated tests
- CI/CD pipeline
- Code coverage reporting
- Component documentation (Storybook)

## Conclusion

This architecture provides:
- Fast, SEO-friendly pages
- Easy content management
- Type safety
- Modern developer experience
- Scalable foundation

The modular design allows for easy customization and extension as needs grow.

---

For questions about the architecture, open an issue or refer to the code documentation.
