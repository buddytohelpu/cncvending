# Git Push Instructions

## Step 1: Stage All Changes

```bash
cd website
git add .
```

## Step 2: Commit Changes

```bash
git commit -m "Complete CNC Vending website redesign

- Premium enterprise-grade design with larger navbar and logo
- Full SEO optimization (sitemap, robots.txt, metadata, structured data)
- Multi-page site with Home, Solutions, Service Area, About, Contact
- Lead capture forms with quote modals
- Mobile-responsive design
- All images and assets included
- Ready for production deployment"
```

## Step 3: Create GitHub Repository (if not exists)

1. Go to [GitHub](https://github.com/new)
2. Create a new repository named `cnc-vending` (or your preferred name)
3. **DO NOT** initialize with README, .gitignore, or license (we already have these)

## Step 4: Add Remote and Push

```bash
# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/cnc-vending.git

# Or if using SSH:
# git remote add origin git@github.com:YOUR_USERNAME/cnc-vending.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 5: Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Vercel will auto-detect Next.js
4. Click "Deploy"
5. Your site will be live at: `https://cnc-vending.vercel.app`

### Custom Domain Setup (Optional)

1. In Vercel dashboard, go to Project Settings → Domains
2. Add your domain: `cnc-vending.com`
3. Follow DNS configuration instructions
4. Update `siteConfig.url` in `src/config/site.ts` to match your domain

## Troubleshooting

If you get authentication errors:
- Use GitHub Personal Access Token instead of password
- Or set up SSH keys for GitHub

If you need to update the remote URL:
```bash
git remote set-url origin https://github.com/YOUR_USERNAME/cnc-vending.git
```

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Test forms submit successfully (connect to your backend/email service)
- [ ] Verify sitemap.xml is accessible: `yoursite.com/sitemap.xml`
- [ ] Verify robots.txt is accessible: `yoursite.com/robots.txt`
- [ ] Submit sitemap to Google Search Console
- [ ] Test mobile responsiveness
- [ ] Verify all images load correctly
- [ ] Test quote modal functionality
- [ ] Check contact forms work
- [ ] Verify phone click-to-call works on mobile

