# Resend Email Integration Setup Guide

This guide will help you set up Resend.com for the TAKAI contact form.

## 📋 Overview

The contact form now uses **Resend.com** for reliable email delivery with beautiful HTML templates, priority handling for urgent requests, and professional email formatting.

## 🚀 Quick Setup (5 minutes)

### Step 1: Create a Resend Account

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free tier)
3. Verify your email address

### Step 2: Get Your API Key

1. Log in to your Resend dashboard
2. Navigate to **API Keys** section
3. Click **Create API Key**
4. Give it a name (e.g., "TAKAI Production")
5. Copy the API key (starts with `re_`)

### Step 3: Configure Environment Variables

1. Create a `.env` file in the project root:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your credentials:
   ```env
   # Your Resend API Key
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
   
   # Email addresses
   RESEND_FROM_EMAIL=contact@takaifilms.jp
   RESEND_TO_EMAIL=info@takaifilms.jp
   ```

### Step 4: Verify Your Domain (Recommended)

For production use, you should verify your domain:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `takaifilms.jp`)
4. Add the provided DNS records to your domain:
   - **SPF Record** (TXT)
   - **DKIM Record** (TXT)
   - **DMARC Record** (TXT)
5. Wait for verification (usually 5-10 minutes)
6. Once verified, update `RESEND_FROM_EMAIL` to use your domain:
   ```env
   RESEND_FROM_EMAIL=contact@takaifilms.jp
   ```

**Note:** Until domain verification is complete, you can use `onboarding@resend.dev` for testing.

### Step 5: Install Dependencies

```bash
npm install resend
```

### Step 6: Test the Form

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact page
3. Fill out and submit the form
4. Check your email at the `RESEND_TO_EMAIL` address

## ✨ Features

### 🎨 Professional Email Templates
- Beautiful HTML emails with TAKAI branding
- Responsive design that works on all devices
- Color-coded priority indicators
- Clean plain-text fallback

### 🚨 Priority Handling
- **Urgent requests** are flagged with 🚨 emoji
- Subject line includes "URGENT" prefix
- Visual indicators in email body
- 4-6 hour response time for urgent requests
- 24-hour response time for standard requests

### 📧 Email Features
- **Reply-To**: Automatically set to customer's email
- **Tags**: Categorized by inquiry type and urgency
- **Timestamps**: Japan timezone (JST) formatting
- **Rich Formatting**: Professional layout with TAKAI colors

### 🛡️ Security & Validation
- Server-side validation of all fields
- Honeypot spam protection
- Required field validation
- Email format validation
- Privacy consent tracking

## 📊 Email Template Structure

Each submission includes:

1. **Header Section**
   - TAKAI branding with blue gradient
   - Urgency indicator (if marked urgent)

2. **Contact Information**
   - Name, email, company
   - Inquiry type badge
   - Priority level

3. **Message Content**
   - Customer's message with proper formatting
   - Pre-wrapped text for readability

4. **Response Time Info**
   - Expected response timeframe
   - Color-coded based on priority

5. **Footer**
   - Submission timestamp (JST)
   - Source indicator

## 🔧 Configuration Options

### Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `RESEND_API_KEY` | ✅ Yes | - | Your Resend API key |
| `RESEND_FROM_EMAIL` | ⚠️ Recommended | `onboarding@resend.dev` | Sender email address |
| `RESEND_TO_EMAIL` | ⚠️ Recommended | `info@takaifilms.jp` | Recipient email address |

### Inquiry Types

The form supports these inquiry types:
- Exhibition Inquiry
- Product Authenticity Verification
- Product Information
- Installation Services
- Partnership Opportunities
- Media/Press Inquiry
- Technical Support
- Warranty Claims
- Other

### Priority Levels

- **Normal**: 24-hour response time
- **Urgent**: 4-6 hour response time (for warranty claims and technical issues)

## 🧪 Testing

### Development Testing

1. Use `onboarding@resend.dev` as `RESEND_FROM_EMAIL`
2. Set `RESEND_TO_EMAIL` to your test email
3. Submit test forms with different inquiry types
4. Test both urgent and normal priority

### Production Testing

1. Verify your domain first
2. Use your verified domain email as `RESEND_FROM_EMAIL`
3. Test all inquiry types
4. Verify email formatting on different devices
5. Check spam folder if emails don't arrive

## 📈 Monitoring & Analytics

### Resend Dashboard

Monitor your emails in the Resend dashboard:
- **Emails**: View all sent emails
- **Logs**: Detailed delivery logs
- **Analytics**: Open rates, click rates
- **Webhooks**: Set up delivery notifications

### Email Tags

Each email is tagged with:
- `type`: Inquiry type (e.g., "product-info")
- `urgent`: Priority level ("yes" or "no")
- `source`: Always "website-contact-form"

Use these tags to filter and analyze submissions.

## 🚨 Troubleshooting

### Emails Not Sending

1. **Check API Key**: Ensure `RESEND_API_KEY` is correct
2. **Verify Domain**: Use verified domain or `onboarding@resend.dev`
3. **Check Logs**: View browser console for errors
4. **Rate Limits**: Free tier has 100 emails/day limit

### Emails Going to Spam

1. **Verify Domain**: Complete domain verification with all DNS records
2. **SPF/DKIM**: Ensure DNS records are properly configured
3. **DMARC**: Add DMARC policy to your domain
4. **Content**: Avoid spam trigger words

### Form Not Submitting

1. **Check Network**: Open browser DevTools > Network tab
2. **API Endpoint**: Ensure `/api/contact` is accessible
3. **CORS**: Verify same-origin requests
4. **Validation**: Check all required fields are filled

### Environment Variables Not Loading

1. **File Location**: Ensure `.env` is in project root
2. **Restart Server**: Restart dev server after changing `.env`
3. **Syntax**: Check for typos in variable names
4. **Quotes**: Don't use quotes around values in `.env`

## 💰 Pricing

### Free Tier
- **100 emails/day**
- **3,000 emails/month**
- All features included
- Perfect for small businesses

### Paid Plans
- **Pro**: $20/month - 50,000 emails/month
- **Business**: Custom pricing for higher volumes

For most small to medium businesses, the free tier is sufficient.

## 🔒 Security Best Practices

1. **Never commit `.env`**: Already in `.gitignore`
2. **Use environment variables**: Never hardcode API keys
3. **Verify domain**: Prevents email spoofing
4. **Rate limiting**: Consider adding rate limiting for production
5. **Input validation**: Server-side validation is implemented
6. **Honeypot protection**: Already included in form

## 📚 Additional Resources

- [Resend Documentation](https://resend.com/docs)
- [Resend API Reference](https://resend.com/docs/api-reference)
- [Domain Verification Guide](https://resend.com/docs/dashboard/domains/introduction)
- [Email Best Practices](https://resend.com/docs/knowledge-base/email-best-practices)

## 🆘 Support

### Resend Support
- Email: support@resend.com
- Documentation: resend.com/docs
- Discord: resend.com/discord

### TAKAI Technical Support
- Check browser console for errors
- Review API endpoint logs
- Verify environment variables
- Test with different inquiry types

## 🎯 Next Steps

1. ✅ Complete domain verification
2. ✅ Test all inquiry types
3. ✅ Set up email monitoring
4. ✅ Configure webhooks (optional)
5. ✅ Add rate limiting (optional)
6. ✅ Set up email templates in Resend (optional)

---

**Last Updated**: 2025-01-02  
**Version**: 1.0.0  
**Status**: Production Ready ✅
