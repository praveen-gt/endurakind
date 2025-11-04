import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'
import { SITE_CONFIG } from '@/lib/constants';

// --- Simple Rate Limiting ---
const rateLimit = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(identifier: string, maxRequests: number = 5, windowMs: number = 60000): boolean {
  const now = Date.now()
  const userLimit = rateLimit.get(identifier)

  if (!userLimit || now > userLimit.resetTime) {
    rateLimit.set(identifier, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (userLimit.count >= maxRequests) {
    return false
  }

  userLimit.count++
  return true
}

// --- Validation Schema ---
const referralSchema = z.object({
  // Referrer Information
  referrerName: z.string().min(1, 'Referrer name is required').max(100),
  referrerEmail: z.string().email('Invalid referrer email'),
  referrerPhone: z.string().min(10, 'Phone number too short').max(20),
  referrerOrganization: z.string().max(100).optional(),
  referrerRelationship: z.string().max(50).optional(),

  // Participant Information
  participantFirstName: z.string().min(1, 'First name is required').max(50),
  participantLastName: z.string().min(1, 'Last name is required').max(50),
  participantEmail: z.string().email('Invalid email').optional().or(z.literal('')),
  participantPhone: z.string().max(20).optional(),
  participantDOB: z.string().optional(),
  participantAddress: z.string().max(200).optional(),

  // Support Needs
  servicesRequired: z.array(z.string()).min(1, 'At least one service is required'),
  supportNeeds: z.string().max(2000).optional(),
  urgency: z.string().max(50).optional(),

  // Additional Information
  additionalInfo: z.string().max(2000).optional(),
  consentGiven: z.boolean().refine(val => val === true, {
    message: 'Consent is required',
  }),
})

type ReferralFormData = z.infer<typeof referralSchema>

// --- Email Templates ---
function generateReferralEmailTemplate(data: ReferralFormData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>New Referral Submission</title>
        <style>
          body { font-family: Arial, sans-serif; background: #f4f4f4; color: #333; line-height: 1.6; }
          .container { max-width: 700px; margin: 20px auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 3px 8px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #09778e 0%, #016938 100%); color: white; padding: 25px; text-align: center; }
          .section { padding: 25px; border-bottom: 1px solid #e5e5e5; }
          .section:last-child { border-bottom: none; }
          .section-title { font-size: 18px; font-weight: 700; color: #09778e; margin-bottom: 15px; padding-bottom: 8px; border-bottom: 2px solid #09778e; }
          .field { margin-bottom: 12px; }
          .label { font-weight: 600; color: #555; margin-bottom: 3px; display: block; font-size: 13px; }
          .value { color: #333; font-size: 14px; }
          .services-list { list-style: none; padding: 0; }
          .services-list li { padding: 6px 0; padding-left: 20px; position: relative; }
          .services-list li:before { content: "✓"; position: absolute; left: 0; color: #09778e; font-weight: bold; }
          .urgency-badge { display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
          .urgency-urgent { background: #fee; color: #c00; }
          .urgency-high { background: #ffeaa7; color: #d63031; }
          .urgency-medium { background: #dfe6e9; color: #0984e3; }
          .urgency-low { background: #d1f2eb; color: #00b894; }
          .footer { background: #f9f9f9; padding: 20px; text-align: center; font-size: 12px; color: #666; }
          .consent-notice { background: #d1f2eb; padding: 12px; border-radius: 6px; margin-top: 15px; font-size: 13px; color: #00b894; font-weight: 600; }
          a { color: #09778e; text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0 0 8px 0;">New Referral Submission</h2>
            <p style="margin: 0; opacity: 0.9;">Endurakind Disability Support Services</p>
          </div>

          <div class="section">
            <div class="section-title">Referrer Information</div>
            <div class="field">
              <div class="label">Name</div>
              <div class="value">${data.referrerName}</div>
            </div>
            <div class="field">
              <div class="label">Email</div>
              <div class="value"><a href="mailto:${data.referrerEmail}">${data.referrerEmail}</a></div>
            </div>
            <div class="field">
              <div class="label">Phone</div>
              <div class="value"><a href="tel:${data.referrerPhone}">${data.referrerPhone}</a></div>
            </div>
            ${data.referrerOrganization ? `
            <div class="field">
              <div class="label">Organization</div>
              <div class="value">${data.referrerOrganization}</div>
            </div>
            ` : ''}
            ${data.referrerRelationship ? `
            <div class="field">
              <div class="label">Relationship to Participant</div>
              <div class="value">${data.referrerRelationship}</div>
            </div>
            ` : ''}
          </div>

          <div class="section">
            <div class="section-title">Participant Information</div>
            <div class="field">
              <div class="label">Name</div>
              <div class="value">${data.participantFirstName} ${data.participantLastName}</div>
            </div>
            ${data.participantEmail ? `
            <div class="field">
              <div class="label">Email</div>
              <div class="value"><a href="mailto:${data.participantEmail}">${data.participantEmail}</a></div>
            </div>
            ` : ''}
            ${data.participantPhone ? `
            <div class="field">
              <div class="label">Phone</div>
              <div class="value"><a href="tel:${data.participantPhone}">${data.participantPhone}</a></div>
            </div>
            ` : ''}
            ${data.participantDOB ? `
            <div class="field">
              <div class="label">Date of Birth</div>
              <div class="value">${data.participantDOB}</div>
            </div>
            ` : ''}
            ${data.participantAddress ? `
            <div class="field">
              <div class="label">Address</div>
              <div class="value">${data.participantAddress}</div>
            </div>
            ` : ''}
          </div>

          <div class="section">
            <div class="section-title">Services Required</div>
            <ul class="services-list">
              ${data.servicesRequired.map(service => `<li>${service}</li>`).join('')}
            </ul>
          </div>

          <div class="section">
            <div class="section-title">Support Details</div>
            ${data.urgency ? `
            <div class="field">
              <div class="label">Urgency Level</div>
              <div class="value">
                <span class="urgency-badge urgency-${data.urgency}">${data.urgency.toUpperCase()}</span>
              </div>
            </div>
            ` : ''}
            ${data.supportNeeds ? `
            <div class="field">
              <div class="label">Support Needs Description</div>
              <div class="value" style="white-space: pre-wrap;">${data.supportNeeds}</div>
            </div>
            ` : ''}
            ${data.additionalInfo ? `
            <div class="field">
              <div class="label">Additional Information</div>
              <div class="value" style="white-space: pre-wrap;">${data.additionalInfo}</div>
            </div>
            ` : ''}
            <div class="consent-notice">
              ✓ Consent obtained for information sharing
            </div>
          </div>

          <div class="footer">
            Submitted on ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Melbourne' })}
          </div>
        </div>
      </body>
    </html>
  `
}

function generateReferrerConfirmationEmail(data: ReferralFormData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Referral Confirmation</title>
        <style>
          body { font-family: Arial, sans-serif; background: #f4f4f4; color: #333; line-height: 1.6; }
          .container { max-width: 600px; margin: 20px auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 3px 8px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #09778e 0%, #016938 100%); color: white; padding: 30px; text-align: center; }
          .content { padding: 30px; }
          .checkmark { width: 60px; height: 60px; background: #00b894; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; }
          .checkmark:before { content: "✓"; color: white; font-size: 36px; font-weight: bold; }
          .info-box { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #09778e; }
          .footer { background: #f9f9f9; padding: 20px; text-align: center; font-size: 13px; color: #666; }
          a { color: #09778e; }
          .participant-name { font-weight: 600; color: #09778e; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="checkmark"></div>
            <h2 style="margin: 0;">Referral Received</h2>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Thank you for your referral</p>
          </div>
          <div class="content">
            <p>Dear ${data.referrerName},</p>
            <p>Thank you for referring <span class="participant-name">${data.participantFirstName} ${data.participantLastName}</span> to Endurakind Disability Support Services.</p>
            
            <div class="info-box">
              <strong>What happens next?</strong>
              <ul style="margin: 10px 0 0 0; padding-left: 20px;">
                <li>Our team will review the referral within 24-48 hours</li>
                <li>We'll contact the participant directly to discuss their needs</li>
                <li>You'll receive updates on the referral progress</li>
              </ul>
            </div>

            <p><strong>Referral Summary:</strong></p>
            <ul style="list-style: none; padding: 0;">
              <li><strong>Participant:</strong> ${data.participantFirstName} ${data.participantLastName}</li>
              <li><strong>Services:</strong> ${data.servicesRequired.join(', ')}</li>
              ${data.urgency ? `<li><strong>Urgency:</strong> ${data.urgency}</li>` : ''}
            </ul>

            <p>If you have any questions or need to provide additional information, please don't hesitate to contact us.</p>
            
            <p>Thank you for helping us connect individuals with the support they need.</p>
            
            <p>Warm regards,<br><strong>The Team at Endurakind</strong></p>
          </div>
          <div class="footer">
            <p>If you did not make this referral, please contact us immediately.</p>
            <p style="margin-top: 10px;">
             <a href="mailto:${SITE_CONFIG.email}">${SITE_CONFIG.email}</a> | 
              <a href="tel:${SITE_CONFIG.phone}">${SITE_CONFIG.phone}</a>
            </p>
          </div>
        </div>
      </body>
    </html>
  `
}

// --- POST Handler ---
export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      'unknown'

    if (!checkRateLimit(ip, 3, 60000)) { // 3 requests per minute for referrals
      return NextResponse.json(
        { error: 'Too many referral submissions. Please try again in a minute.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const validatedData = referralSchema.parse(body)

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
      secure: process.env.EMAIL_SERVER_PORT === '465',
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    })

    await transporter.verify()

    // Email to company
    const companyEmail = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Referral: ${validatedData.participantFirstName} ${validatedData.participantLastName}`,
      html: generateReferralEmailTemplate(validatedData),
      replyTo: validatedData.referrerEmail,
    }

    // Confirmation email to referrer
    const referrerEmail = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_SERVER_USER,
      to: validatedData.referrerEmail,
      subject: 'Referral Confirmation - Endurakind',
      html: generateReferrerConfirmationEmail(validatedData),
    }

    await Promise.all([
      transporter.sendMail(companyEmail),
      transporter.sendMail(referrerEmail),
    ])

    console.log('✅ Referral submitted by:', validatedData.referrerEmail, 'for:', validatedData.participantFirstName, validatedData.participantLastName)

    return NextResponse.json(
      { success: true, message: 'Referral submitted successfully. Confirmation email sent.' },
      { status: 200 }
    )

  } catch (error) {
    console.error('❌ Referral form error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Invalid input',
          details: error.issues.map(issue => ({
            field: issue.path.join('.'),
            message: issue.message
          }))
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to submit referral. Please try again later.' },
      { status: 500 }
    )
  }
}

// --- CORS Handler ---
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin':
        process.env.NODE_ENV === 'production'
          ? 'https://yourdomain.com'
          : '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400',
    },
  })
}