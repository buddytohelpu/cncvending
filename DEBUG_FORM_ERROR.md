# Debugging Form Submission Error

## If Variables Are Set But Still Getting Errors

### 1. Check Vercel Function Logs
1. Go to Vercel Dashboard → Your Project
2. Click **Deployments** tab
3. Click on your **latest deployment**
4. Click **Functions** tab
5. Look for any errors related to `/api/send-email`

### 2. Check Browser Console
1. Open your site in browser
2. Open Developer Tools (F12)
3. Go to **Console** tab
4. Submit a form
5. Look for any error messages

### 3. Common Issues

#### Issue: Variables Not Applied to Deployment
**Solution:** 
- Variables were added AFTER the deployment
- You MUST redeploy after adding variables
- Go to Deployments → Click "..." → Redeploy

#### Issue: Wrong Variable Names
**Solution:**
- Variable names are case-sensitive
- Must be EXACTLY:
  - `SMTP_HOST` (not `smtp_host` or `Smtp_Host`)
  - `SMTP_PORT` (not `smtp_port`)
  - `SMTP_USER` (not `smtp_user`)
  - `SMTP_PASS` (not `smtp_pass`)

#### Issue: SMTP Connection Failing
**Possible causes:**
- SMTP2Go service might be down
- Firewall blocking port 2525
- Credentials might be incorrect

**Check:** Visit `https://cncvending.vercel.app/api/check-env` to verify variables are loaded

#### Issue: Timeout
**Solution:**
- SMTP connection might be timing out
- Check Vercel function logs for timeout errors
- Consider adding timeout handling

### 4. Test the API Directly

You can test the email endpoint directly using curl or Postman:

```bash
curl -X POST https://cncvending.vercel.app/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "formType": "Test",
    "name": "Test User",
    "email": "test@example.com",
    "message": "Test message"
  }'
```

### 5. Verify SMTP Credentials

Make sure these are correct:
- **SMTP_USER:** `cc-cncvending`
- **SMTP_PASS:** `vbl9O3aQe8Caskh6`
- **SMTP_HOST:** `mail.smtp2go.com`
- **SMTP_PORT:** `2525`

### 6. Check SMTP2Go Status

- Visit: https://status.smtp2go.com
- Verify service is operational

---

**Next Steps:**
1. Check Vercel function logs first
2. Check browser console for detailed error
3. Verify all variable names are correct
4. Try redeploying if variables were added recently

