# CNC Vending Website

Premium, enterprise-grade marketing website for CNC Vending - Modern vending solutions for New England businesses.

## Features

- ✅ **Modern Next.js 16** with App Router and TypeScript
- ✅ **Fully Responsive** design optimized for all devices
- ✅ **SEO Optimized** with metadata, sitemap, robots.txt, and structured data
- ✅ **Lead Capture** forms with quote modals and contact forms
- ✅ **Conversion-Focused** with multiple CTAs and tracking hooks
- ✅ **Fast Performance** with optimized images and static generation

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
website/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   │   ├── layout/      # Navbar, Footer
│   │   ├── sections/    # Page sections
│   │   ├── forms/       # Form components
│   │   └── ui/          # Reusable UI components
│   ├── config/          # Site configuration
│   └── lib/             # Utilities and helpers
├── public/
│   └── images/          # Static images
└── package.json
```

## Configuration

Edit `src/config/site.ts` to update:
- Company information
- Contact details
- Service areas
- Navigation items
- Content copy

## SEO

The site includes:
- ✅ Dynamic metadata for all pages
- ✅ OpenGraph and Twitter cards
- ✅ JSON-LD structured data (LocalBusiness schema)
- ✅ Sitemap.xml (auto-generated)
- ✅ Robots.txt (auto-generated)
- ✅ Canonical URLs
- ✅ Optimized image alt text

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and deploy

### Environment Variables (Optional)

Create `.env.local` for optional features:
- Google Analytics tracking ID
- Google Search Console verification

## Analytics & Tracking

Tracking hooks are set up in `src/lib/tracking.ts`. Replace with your analytics service:

```typescript
// Example: Google Analytics 4
if (typeof window !== 'undefined' && window.gtag) {
  window.gtag('event', event, properties);
}
```

## License

© 2024 CNC Vending. All rights reserved.
