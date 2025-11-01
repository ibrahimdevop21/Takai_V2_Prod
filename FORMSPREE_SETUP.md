# 📧 Formspree Setup Guide for TAKAI Contact Form

## Quick Setup (5 minutes)

### Step 1: Create Formspree Account
1. Go to https://formspree.io/
2. Click "Get Started" or "Sign Up"
3. Sign up with your email (free plan: 50 submissions/month)

### Step 2: Create Your Form
1. After logging in, click "New Form"
2. Name it: "TAKAI Contact Form"
3. You'll get a form endpoint like: `https://formspree.io/f/xyzabc123`

### Step 3: Update the Code
1. Open: `src/components/widgets/TakaiContactForm.astro`
2. Find line 30: `<form action="https://formspree.io/f/YOUR_FORM_ID"`
3. Replace `YOUR_FORM_ID` with your actual form ID (e.g., `xyzabc123`)

Example:
```html
<!-- Before -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">

<!-- After -->
<form action="https://formspree.io/f/xyzabc123" method="POST">
```

### Step 4: Configure Email Notifications
In Formspree dashboard:
1. Click on your form
2. Go to "Settings" → "Email Notifications"
3. Add email: `info@takaifilms.jp`
4. You'll receive all form submissions here

### Step 5: Deploy to Vercel
```bash
git add .
git commit -m "Add Formspree contact form"
git push
```

Vercel will auto-deploy!

---

## ✅ What You Get

### Form Submissions Include:
- First Name
- Last Name
- Email Address
- Company (if provided)
- Inquiry Type
- Message
- Urgent flag (if checked)
- Timestamp

### Email Notifications:
- Instant email to `info@takaifilms.jp`
- Professional formatting
- All form data included

### Formspree Dashboard:
- View all submissions
- Export to CSV
- Spam filtering
- Archive old submissions

---

## 🎯 Free Plan Limits

- **50 submissions/month** (free)
- Upgrade to Gold ($10/month) for 1,000 submissions
- Upgrade to Platinum ($40/month) for unlimited

For most businesses, 50/month is plenty to start!

---

## 🔒 Security Features

✅ **Spam Protection**: Honeypot field (`_gotcha`)
✅ **reCAPTCHA**: Can be enabled in Formspree settings
✅ **Email Verification**: Formspree verifies sender emails
✅ **HTTPS**: All submissions encrypted

---

## 🚀 Testing

1. After updating the form ID, test locally:
   ```bash
   npm run dev
   ```

2. Go to http://localhost:4321/contact
3. Fill out the form and submit
4. Check your Formspree dashboard for the submission
5. Check your email for notification

---

## 📊 Alternative: Formspree + Slack/Discord

Want instant notifications in Slack or Discord?

1. In Formspree dashboard → "Integrations"
2. Connect Slack or Discord webhook
3. Get real-time notifications when someone submits

---

## ❓ Troubleshooting

**Form not submitting?**
- Check that you replaced `YOUR_FORM_ID` with actual ID
- Check browser console for errors
- Verify Formspree form is active

**Not receiving emails?**
- Check spam folder
- Verify email in Formspree settings
- Check Formspree dashboard for submissions

**Need help?**
- Formspree docs: https://help.formspree.io/
- Support: support@formspree.io
