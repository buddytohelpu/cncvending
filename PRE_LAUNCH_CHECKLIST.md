# Pre-Launch Checklist for CNC Vending Website

## ✅ Completed Items

- [x] All pages created and functional
- [x] Email functionality integrated (SMTP2Go)
- [x] Google Analytics configured
- [x] SEO optimization (meta descriptions, keywords, sitemap, robots.txt)
- [x] Mobile responsiveness verified
- [x] Accessibility fixes (WCAG compliant)
- [x] Performance optimizations
- [x] All forms configured to send emails
- [x] Service area updated (60-mile radius from Brookfield, MA)
- [x] Footer and branding updated
- [x] All images optimized and in place

## 🔴 Critical: Before Going Live

### 1. Environment Variables in Vercel
**MUST SET THESE IN VERCEL PROJECT SETTINGS:**

Go to: Vercel Dashboard → Your Project → Settings → Environment Variables

Add these variables:
```
SMTP_HOST=mail.smtp2go.com
SMTP_PORT=2525
SMTP_USER=cc-cncvending
SMTP_PASS=vbl9O3aQe8Caskh6
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-WPZQ7C306K
NEXT_PUBLIC_SITE_URL=https://cnc-vending.com
```

**Important:** Set these for **Production**, **Preview**, and **Development** environments.

### 2. Test Email Functionality
- [ ] Test Quote Modal form submission
- [ ] Test Contact Form submission
- [ ] Test Final CTA form submission
- [ ] Verify emails arrive at team@cnc-vending.com
- [ ] Check spam folder if emails don't arrive

### 3. Test Google Analytics
- [ ] Verify GA4 tracking is working
- [ ] Check real-time reports in Google Analytics
- [ ] Test page view tracking
- [ ] Test event tracking (form submissions, phone clicks)

### 4. Domain & DNS
- [ ] Point domain (cnc-vending.com) to Vercel
- [ ] Verify SSL certificate is active
- [ ] Test site loads on production domain
- [ ] Check all internal links work

### 5. Final Content Review
- [ ] Review all page content for accuracy
- [ ] Verify phone number: (508) 713-1874
- [ ] Verify email: Team@cnc-vending.com
- [ ] Check service area cities are correct
- [ ] Review testimonials (if using real ones)

### 6. Performance Check
- [ ] Run Lighthouse audit (target: 90+ on all metrics)
- [ ] Test page load speed
- [ ] Verify images are optimized
- [ ] Check mobile performance

### 7. Browser Testing
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on mobile browsers (iOS Safari, Chrome Mobile)
- [ ] Test on tablets

### 8. Security
- [ ] Verify HTTPS is enforced
- [ ] Check for any exposed credentials (none should be in code)
- [ ] Verify honeypot spam protection works
- [ ] Test form validation

## 📝 Optional Enhancements (Post-Launch)

- [ ] Set up Google Search Console
- [ ] Submit sitemap to Google Search Console
- [ ] Set up email notifications for form submissions (optional)
- [ ] Add social media links (if applicable)
- [ ] Consider adding live chat widget
- [ ] Set up error monitoring (Sentry, etc.)

## 🚀 Deployment Steps

1. Push final code to GitHub (main branch)
2. Vercel will auto-deploy
3. Add environment variables in Vercel dashboard
4. Redeploy if needed after adding env vars
5. Test all forms and functionality
6. Monitor for any errors
7. Submit to Google Search Console

## 📞 Support Contacts

- **Phone:** (508) 713-1874
- **Email:** Team@cnc-vending.com
- **Service Area:** 60 miles from Brookfield, MA

---

**Status:** Ready for launch after environment variables are configured in Vercel.

