# ⚠️ URGENT: Form Submission Error Fix

## The Error You're Seeing
"There was an error submitting your request. Please try again or call us directly."

## Root Cause
**Environment variables are NOT set in Vercel**, so the email API route cannot send emails.

## 🔴 IMMEDIATE FIX REQUIRED

### Step 1: Go to Vercel Dashboard
1. Visit: https://vercel.com/dashboard
2. Find and click on your **cncvending** project

### Step 2: Add Environment Variables
1. Click **Settings** (top menu)
2. Click **Environment Variables** (left sidebar)
3. Add these 6 variables one by one:

#### Variable 1:
- **Name:** `SMTP_HOST`
- **Value:** `mail.smtp2go.com`
- ✅ Check: Production, Preview, Development

#### Variable 2:
- **Name:** `SMTP_PORT`
- **Value:** `2525`
- ✅ Check: Production, Preview, Development

#### Variable 3:
- **Name:** `SMTP_USER`
- **Value:** `cc-cncvending`
- ✅ Check: Production, Preview, Development

#### Variable 4:
- **Name:** `SMTP_PASS`
- **Value:** `vbl9O3aQe8Caskh6`
- ✅ Check: Production, Preview, Development

#### Variable 5:
- **Name:** `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- **Value:** `G-WPZQ7C306K`
- ✅ Check: Production, Preview, Development

#### Variable 6:
- **Name:** `NEXT_PUBLIC_SITE_URL`
- **Value:** `https://cnc-vending.com`
- ✅ Check: Production, Preview, Development

### Step 3: Redeploy
**CRITICAL:** After adding all variables:

1. Go to **Deployments** tab
2. Find your latest deployment
3. Click the **three dots (⋯)** on the right
4. Click **Redeploy**
5. Make sure **"Use existing Build Cache"** is UNCHECKED
6. Click **Redeploy**

### Step 4: Verify It Works
1. After redeploy completes (wait 1-2 minutes)
2. Fill out a form on your live site
3. Check if you receive email at `team@cnc-vending.com`
4. The error should be gone!

## 🔍 Check Environment Variables Status

After redeploying, you can verify variables are set by visiting:
```
https://cncvending.vercel.app/api/check-env
```

This will show you which variables are set and which are missing.

## ⚡ Quick Checklist

- [ ] All 6 environment variables added in Vercel
- [ ] All 3 environments selected (Production, Preview, Development)
- [ ] Redeployed after adding variables
- [ ] Tested form submission
- [ ] Received email at team@cnc-vending.com

## 📞 Need Help?

If the error persists after adding variables and redeploying:
1. Check Vercel deployment logs: Deployments → Latest → Functions tab
2. Look for any error messages related to SMTP
3. Verify all variable names are EXACT (case-sensitive!)

---

**Without these environment variables, forms will NOT work!**

