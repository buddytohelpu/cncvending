# Vercel Environment Variables Setup

## ⚠️ URGENT: Required for Forms to Work

The form submission error you're seeing is because environment variables are not set in Vercel.

## Quick Setup Steps:

1. **Go to Vercel Dashboard**
   - Navigate to: https://vercel.com/dashboard
   - Select your project: `cncvending`

2. **Go to Settings → Environment Variables**

3. **Add These Variables:**

   ```
   SMTP_HOST
   Value: mail.smtp2go.com
   
   SMTP_PORT
   Value: 2525
   
   SMTP_USER
   Value: cc-cncvending
   
   SMTP_PASS
   Value: vbl9O3aQe8Caskh6
   
   NEXT_PUBLIC_GA_MEASUREMENT_ID
   Value: G-WPZQ7C306K
   
   NEXT_PUBLIC_SITE_URL
   Value: https://cnc-vending.com
   ```

4. **Important:** Select all three environments:
   - ✅ Production
   - ✅ Preview  
   - ✅ Development

5. **After Adding Variables:**
   - Go to Deployments tab
   - Click the "..." menu on the latest deployment
   - Click "Redeploy" (this applies the new env vars)

## How to Verify It's Working:

1. Fill out a form on the live site
2. Check that you receive an email at team@cnc-vending.com
3. If you still get an error, check Vercel logs:
   - Go to Deployments → Click on latest deployment → Functions tab
   - Check for any error messages

## Testing Locally:

The `.env.local` file already has these values, so local testing should work fine.

---

**Without these environment variables, form submissions will fail!**

