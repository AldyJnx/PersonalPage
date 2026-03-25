# Deployment Guide

Complete guide for deploying your portfolio to production.

## Table of Contents

1. [Pre-deployment Checklist](#pre-deployment-checklist)
2. [Vercel Deployment](#vercel-deployment)
3. [Netlify Deployment](#netlify-deployment)
4. [Custom Domain Setup](#custom-domain-setup)
5. [Environment Variables](#environment-variables)
6. [Post-deployment](#post-deployment)

## Pre-deployment Checklist

Before deploying, ensure you have:

- [ ] Updated all personal information in `lib/constants.ts`
- [ ] Added your projects to `content/projects/projects.ts`
- [ ] Written at least 2-3 blog posts in `content/blog/`
- [ ] Replaced placeholder images with real images
- [ ] Updated social media links
- [ ] Tested the site locally (`npm run build` and `npm start`)
- [ ] Verified all links work correctly
- [ ] Checked responsive design on multiple devices
- [ ] Run `npm run lint` and fixed any issues
- [ ] Run `npm run type-check` and fixed any type errors
- [ ] Created a GitHub repository for your code

## Vercel Deployment

Vercel is the recommended platform for Next.js applications.

### Step 1: Prepare Your Repository

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in with your GitHub account
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: .next (default)
   - **Install Command**: `npm install`

6. Add environment variables (if needed):
   - Click "Environment Variables"
   - Add `NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app`

7. Click "Deploy"

### Step 3: Wait for Deployment

- Vercel will build and deploy your site
- This usually takes 2-5 minutes
- You'll get a URL like: `your-project.vercel.app`

### Step 4: Automatic Deployments

Every push to `main` branch will trigger a new deployment:
```bash
git add .
git commit -m "Update content"
git push
```

Preview deployments are created for pull requests automatically.

## Netlify Deployment

Alternative deployment option.

### Step 1: Prepare netlify.toml

Create `netlify.toml` in your project root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Step 2: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Functions directory**: (leave empty)

5. Add environment variables:
   - `NEXT_PUBLIC_SITE_URL=https://your-site.netlify.app`

6. Click "Deploy site"

### Step 3: Install Next.js Plugin

The `@netlify/plugin-nextjs` plugin will be automatically installed based on your `netlify.toml`.

## Custom Domain Setup

### Vercel

1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Click "Add Domain"
4. Enter your domain (e.g., `aldypastor.com`)
5. Follow the instructions to configure DNS:

**Option A: Using Vercel nameservers**
- Update nameservers at your domain registrar to:
  - `ns1.vercel-dns.com`
  - `ns2.vercel-dns.com`

**Option B: Using CNAME record**
- Add a CNAME record:
  - Name: `www`
  - Value: `cname.vercel-dns.com`
- Add an A record for root domain:
  - Name: `@`
  - Value: `76.76.21.21`

6. Wait for DNS propagation (can take up to 48 hours, usually 1-2 hours)

### Netlify

1. Go to "Domain settings" in your Netlify site
2. Click "Add custom domain"
3. Enter your domain
4. Configure DNS:

**Option A: Netlify DNS**
- Use Netlify's nameservers
- All DNS records managed by Netlify

**Option B: External DNS**
- Add A record pointing to Netlify's load balancer IP
- Add CNAME for `www` pointing to your Netlify subdomain

5. Enable HTTPS (automatic with Let's Encrypt)

## Environment Variables

### Required Variables

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Optional Variables

For email functionality (using Resend):
```env
RESEND_API_KEY=re_xxxxxxxxxxxx
```

For analytics:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Setting Environment Variables

**Vercel:**
1. Project Settings → Environment Variables
2. Add each variable
3. Select environments (Production, Preview, Development)
4. Redeploy for changes to take effect

**Netlify:**
1. Site settings → Build & deploy → Environment
2. Add each variable
3. Redeploy for changes to take effect

## Post-deployment

### 1. Verify Deployment

- [ ] Visit your deployed URL
- [ ] Test all pages (Home, Projects, Blog, Contact)
- [ ] Test navigation
- [ ] Test dark mode toggle
- [ ] Test contact form
- [ ] Test on mobile devices
- [ ] Check all images load correctly

### 2. Performance Check

Run Lighthouse audit:
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Generate report
4. Aim for scores > 90 in all categories

Alternatively, use:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)

### 3. SEO Setup

**Google Search Console:**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property (domain or URL prefix)
3. Verify ownership
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

**Submit to Search Engines:**
- [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [Yandex Webmaster](https://webmaster.yandex.com/)

### 4. Analytics Setup

**Google Analytics:**
1. Create GA4 property
2. Get measurement ID
3. Add to environment variables:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

**Vercel Analytics:**
- Available in project settings
- Provides Web Vitals data
- No configuration needed

### 5. Monitoring

**Error Tracking (Optional):**
Consider adding Sentry for error tracking:

```bash
npm install @sentry/nextjs
```

**Uptime Monitoring:**
- [UptimeRobot](https://uptimerobot.com/) (free)
- [Better Uptime](https://betteruptime.com/) (free tier)

## Continuous Deployment Workflow

### Git Workflow

```bash
# Create a feature branch
git checkout -b feature/new-blog-post

# Make changes
# Add new blog post, update content, etc.

# Commit changes
git add .
git commit -m "Add new blog post about TypeScript"

# Push to GitHub
git push origin feature/new-blog-post

# Create Pull Request on GitHub
# Vercel will create a preview deployment

# After review, merge to main
# This triggers production deployment
```

### Branch Strategy

- `main`: Production branch (auto-deploys)
- `develop`: Development branch (preview deployments)
- `feature/*`: Feature branches (preview deployments)

### Deployment Best Practices

1. **Always test locally first**
   ```bash
   npm run build
   npm start
   ```

2. **Use preview deployments**
   - Test changes before merging to main
   - Share preview links with others for feedback

3. **Keep dependencies updated**
   ```bash
   npm outdated
   npm update
   ```

4. **Monitor deployment logs**
   - Check Vercel/Netlify dashboard for build logs
   - Fix any warnings or errors

## Troubleshooting

### Build Fails

**Problem**: Build fails with error
**Solution**:
1. Check build logs for specific error
2. Test build locally: `npm run build`
3. Ensure all dependencies are in `package.json`
4. Check Node.js version (use 18.17+)

### Images Not Loading

**Problem**: Images return 404
**Solution**:
1. Ensure images are in `public/` directory
2. Use correct paths starting with `/`
3. Check image formats are supported
4. Verify image files are committed to git

### Environment Variables Not Working

**Problem**: Environment variables are undefined
**Solution**:
1. Ensure variables are prefixed with `NEXT_PUBLIC_` for client-side access
2. Redeploy after adding new variables
3. Check variable names match exactly (case-sensitive)

### Custom Domain Not Working

**Problem**: Domain doesn't resolve
**Solution**:
1. Wait for DNS propagation (up to 48 hours)
2. Verify DNS records are correct
3. Use [DNS Checker](https://dnschecker.org/) to verify propagation
4. Check for HTTPS redirect issues

### Slow Performance

**Problem**: Site loads slowly
**Solution**:
1. Optimize images (use WebP format)
2. Enable image optimization
3. Check bundle size: `npm run build`
4. Use dynamic imports for large components
5. Enable caching headers

## Rollback Procedure

If something goes wrong:

**Vercel:**
1. Go to Deployments
2. Find previous working deployment
3. Click "..." → "Promote to Production"

**Netlify:**
1. Go to Deploys
2. Find previous working deployment
3. Click "Publish deploy"

## Additional Resources

- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [DNS Propagation Checker](https://www.whatsmydns.net/)

## Support

If you encounter issues:
1. Check deployment logs
2. Review this guide
3. Consult platform-specific documentation
4. Open an issue on GitHub

---

Happy deploying!
