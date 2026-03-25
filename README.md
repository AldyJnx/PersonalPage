# Developer Portfolio

A modern, elegant, and minimalist portfolio website built with Next.js 15, TypeScript, and TailwindCSS. Features a blog system, project showcase, and contact form.

## Features

- **Modern Stack**: Built with Next.js 15, TypeScript, and TailwindCSS
- **Dark Mode**: Toggle between light and dark themes with system preference detection
- **Blog System**: MDX-powered blog with syntax highlighting and reading time
- **Project Showcase**: Filterable project gallery with detailed project pages
- **Contact Form**: Validated contact form with React Hook Form and Zod
- **Responsive Design**: Mobile-first design that works on all devices
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Animations**: Smooth animations with Framer Motion
- **Performance**: Optimized images, code splitting, and lazy loading

## Tech Stack

### Frontend
- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **TailwindCSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **next-themes**: Dark mode support

### Content Management
- **MDX**: Markdown with JSX for blog posts
- **gray-matter**: Parse frontmatter in markdown files
- **remark**: Markdown processor

### Form Handling
- **React Hook Form**: Form state management
- **Zod**: Schema validation
- **@hookform/resolvers**: Zod integration with React Hook Form

### UI Components
- Custom components inspired by shadcn/ui
- Lucide React icons
- Responsive navigation with mobile menu

## Project Structure

```
├── app/                      # Next.js App Router pages
│   ├── api/                 # API routes
│   │   ├── blog/           # Blog API endpoints
│   │   └── contact/        # Contact form endpoint
│   ├── blog/               # Blog pages
│   │   ├── [slug]/        # Individual blog post
│   │   └── page.tsx       # Blog index
│   ├── contact/           # Contact page
│   ├── projects/          # Projects pages
│   │   ├── [id]/         # Individual project
│   │   └── page.tsx      # Projects index
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/            # React components
│   ├── blog/            # Blog-specific components
│   ├── layout/          # Layout components (Header, Footer)
│   ├── projects/        # Project-specific components
│   ├── sections/        # Home page sections
│   └── ui/              # Reusable UI components
├── content/              # Content files
│   ├── blog/           # Blog posts (MDX)
│   └── projects/       # Project data
├── lib/                  # Utility functions
│   ├── blog.ts         # Blog helper functions
│   ├── constants.ts    # Site configuration
│   ├── utils.ts        # General utilities
│   └── validations.ts  # Zod schemas
├── public/              # Static assets
│   └── images/         # Images
└── types/               # TypeScript types
    └── index.ts
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd PagPersonal
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Configuration

### Site Configuration

Edit `lib/constants.ts` to update your personal information:

```typescript
export const SITE_CONFIG = {
  name: "Your Name",
  title: "Your Title",
  description: "Your description",
  url: "https://yoursite.com",
  author: {
    name: "Your Name",
    email: "your@email.com",
    role: "Your Role",
    bio: "Your bio",
  },
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    email: "mailto:your@email.com",
  },
};
```

### Adding Content

#### Blog Posts

Create a new `.md` or `.mdx` file in `content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Post description"
date: "2024-01-01"
author: "Your Name"
category: "Tutorial"
tags: ["Next.js", "React"]
image: "/images/blog/post.jpg"
published: true
---

# Your content here
```

#### Projects

Edit `content/projects/projects.ts` to add new projects:

```typescript
{
  id: "unique-id",
  title: "Project Title",
  description: "Short description",
  longDescription: "Detailed description",
  image: "/images/projects/project.jpg",
  tags: ["Next.js", "TypeScript"],
  category: "Web",
  status: "Completed",
  demoUrl: "https://demo.com",
  githubUrl: "https://github.com/user/repo",
  date: "2024-01",
  featured: true,
}
```

### Customizing Theme

Update colors in `tailwind.config.ts` and CSS variables in `app/globals.css`.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Configure environment variables if needed
4. Deploy

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- **Netlify**: Use the Next.js build plugin
- **AWS Amplify**: Configure build settings for Next.js
- **Docker**: Use the included Dockerfile (create one if needed)

## Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For email functionality (optional):
```env
RESEND_API_KEY=your_api_key
```

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm start`: Start production server
- `npm run lint`: Run ESLint
- `npm run type-check`: Check TypeScript types

## Adding Images

Place images in `public/images/`:

- `public/images/projects/`: Project images
- `public/images/blog/`: Blog post images

Reference them with `/images/...` in your code.

## Performance Optimization

The project includes several optimizations:

- Image optimization with `next/image`
- Code splitting with dynamic imports
- Font optimization
- CSS optimization
- Bundle analysis available with `@next/bundle-analyzer`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for your own portfolio.

## Customization Tips

1. **Colors**: Modify the color scheme in `tailwind.config.ts`
2. **Fonts**: Update fonts in `app/layout.tsx`
3. **Sections**: Add/remove sections in `app/page.tsx`
4. **Navigation**: Update links in `lib/constants.ts`

## Troubleshooting

### Build Errors

If you encounter build errors:

1. Delete `.next` folder: `rm -rf .next`
2. Clear cache: `npm cache clean --force`
3. Reinstall dependencies: `rm -rf node_modules && npm install`

### Image Errors

If images don't load:

1. Ensure images are in `public/images/`
2. Use correct paths starting with `/`
3. Check image formats are supported (JPEG, PNG, WebP, AVIF)

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## Support

If you have questions or need help, please open an issue on GitHub.

## Acknowledgments

- Design inspired by modern portfolio websites
- UI components based on shadcn/ui patterns
- Built with the Next.js community's best practices

---

Built with care by Aldy Pastor
"# PersonalPage" 
