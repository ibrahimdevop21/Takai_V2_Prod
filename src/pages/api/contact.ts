import type { APIRoute } from 'astro';
import { Resend } from 'resend';

// Email configuration
const FROM_EMAIL = import.meta.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
const TO_EMAIL = import.meta.env.RESEND_TO_EMAIL || 'info@takaifilms.jp';

// Initialize Resend only if API key is available (lazy initialization)
let resend: Resend | null = null;

function getResendClient(): Resend {
  if (!resend) {
    const apiKey = import.meta.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error('RESEND_API_KEY is not configured');
    }
    resend = new Resend(apiKey);
  }
  return resend;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse form data
    const formData = await request.formData();
    
    const firstName = formData.get('firstName')?.toString() || '';
    const lastName = formData.get('lastName')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const company = formData.get('company')?.toString() || 'Not provided';
    const inquiryType = formData.get('inquiryType')?.toString() || '';
    const message = formData.get('message')?.toString() || '';
    const urgent = formData.get('urgent')?.toString() === 'yes' ? 'YES' : 'NO';
    
    // Validate required fields
    if (!firstName || !lastName || !email || !inquiryType || !message) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Missing required fields' 
        }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Map inquiry types to readable labels
    const inquiryTypeLabels: Record<string, string> = {
      'exhibition-inquiry': 'Exhibition Inquiry',
      'product-authenticity': 'Product Authenticity Verification',
      'product-info': 'Product Information',
      'installation': 'Installation Services',
      'partnership': 'Partnership Opportunities',
      'media-press': 'Media/Press Inquiry',
      'technical-support': 'Technical Support',
      'warranty': 'Warranty Claims',
      'other': 'Other'
    };

    const inquiryLabel = inquiryTypeLabels[inquiryType] || inquiryType;
    const fullName = `${firstName} ${lastName}`;
    
    // Create email subject with urgency indicator
    const subject = urgent === 'YES' 
      ? `🚨 URGENT: ${inquiryLabel} - ${fullName}`
      : `TAKAI Contact Form: ${inquiryLabel} - ${fullName}`;

    // Create HTML email content
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TAKAI Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; max-width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="padding: 30px; background: linear-gradient(135deg, #01407a 0%, #0a5a9e 100%); border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">
                TAKAI Contact Form Submission
              </h1>
              ${urgent === 'YES' ? '<p style="margin: 10px 0 0 0; color: #ffd700; font-size: 14px; font-weight: 600;">🚨 URGENT REQUEST - Priority Response Required</p>' : ''}
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 30px;">
              
              <!-- Inquiry Type Badge -->
              <div style="margin-bottom: 24px;">
                <span style="display: inline-block; padding: 8px 16px; background-color: ${urgent === 'YES' ? '#bf1e2e' : '#c9a227'}; color: #ffffff; border-radius: 20px; font-size: 14px; font-weight: 600;">
                  ${inquiryLabel}
                </span>
              </div>

              <!-- Contact Information -->
              <div style="margin-bottom: 24px; padding: 20px; background-color: #f8f9fa; border-radius: 6px; border-left: 4px solid #01407a;">
                <h2 style="margin: 0 0 16px 0; color: #01407a; font-size: 18px; font-weight: 600;">Contact Information</h2>
                
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #6c757d; font-size: 14px; font-weight: 600; width: 120px;">Name:</td>
                    <td style="padding: 8px 0; color: #212529; font-size: 14px;">${fullName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6c757d; font-size: 14px; font-weight: 600;">Email:</td>
                    <td style="padding: 8px 0; color: #212529; font-size: 14px;">
                      <a href="mailto:${email}" style="color: #01407a; text-decoration: none;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6c757d; font-size: 14px; font-weight: 600;">Company:</td>
                    <td style="padding: 8px 0; color: #212529; font-size: 14px;">${company}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6c757d; font-size: 14px; font-weight: 600;">Inquiry Type:</td>
                    <td style="padding: 8px 0; color: #212529; font-size: 14px;">${inquiryLabel}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6c757d; font-size: 14px; font-weight: 600;">Priority:</td>
                    <td style="padding: 8px 0; font-size: 14px;">
                      <span style="color: ${urgent === 'YES' ? '#bf1e2e' : '#28a745'}; font-weight: 600;">
                        ${urgent === 'YES' ? '🚨 URGENT' : 'Normal'}
                      </span>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Message -->
              <div style="margin-bottom: 24px;">
                <h2 style="margin: 0 0 12px 0; color: #01407a; font-size: 18px; font-weight: 600;">Message</h2>
                <div style="padding: 16px; background-color: #f8f9fa; border-radius: 6px; border-left: 4px solid #c9a227;">
                  <p style="margin: 0; color: #212529; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                </div>
              </div>

              <!-- Response Time Info -->
              <div style="padding: 16px; background-color: ${urgent === 'YES' ? '#fff3cd' : '#e7f3ff'}; border-radius: 6px; border-left: 4px solid ${urgent === 'YES' ? '#bf1e2e' : '#01407a'};">
                <p style="margin: 0; color: #212529; font-size: 13px; line-height: 1.5;">
                  <strong>Expected Response Time:</strong> ${urgent === 'YES' ? '4-6 hours (Priority)' : '24 hours (Standard)'}
                </p>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 30px; background-color: #f8f9fa; border-radius: 0 0 8px 8px; border-top: 1px solid #dee2e6;">
              <p style="margin: 0; color: #6c757d; font-size: 12px; line-height: 1.5;">
                This email was sent from the TAKAI website contact form.<br>
                Submitted on: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Tokyo', dateStyle: 'full', timeStyle: 'long' })}
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();

    // Create plain text version
    const textContent = `
TAKAI Contact Form Submission
${urgent === 'YES' ? '🚨 URGENT REQUEST - Priority Response Required\n' : ''}
================================

INQUIRY TYPE: ${inquiryLabel}

CONTACT INFORMATION:
-------------------
Name: ${fullName}
Email: ${email}
Company: ${company}
Priority: ${urgent === 'YES' ? '🚨 URGENT' : 'Normal'}

MESSAGE:
--------
${message}

-------------------
Expected Response Time: ${urgent === 'YES' ? '4-6 hours (Priority)' : '24 hours (Standard)'}

This email was sent from the TAKAI website contact form.
Submitted on: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Tokyo', dateStyle: 'full', timeStyle: 'long' })}
    `.trim();

    // Send email using Resend
    const resendClient = getResendClient();
    const { data, error } = await resendClient.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: subject,
      html: htmlContent,
      text: textContent,
      replyTo: email, // Allow direct reply to customer
      tags: [
        { name: 'type', value: inquiryType },
        { name: 'urgent', value: urgent.toLowerCase() },
        { name: 'source', value: 'website-contact-form' }
      ]
    });

    // Check for errors from Resend
    if (error) {
      console.error('Resend API error:', error);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Failed to send email. Please try again or contact us directly at info@takaifilms.jp' 
        }),
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Return success response
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully',
        id: data?.id 
      }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Failed to send email. Please try again or contact us directly at info@takaifilms.jp' 
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};
