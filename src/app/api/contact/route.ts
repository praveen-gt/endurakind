import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'

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
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(50),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Phone number too short').max(20, 'Phone number too long'),
  subject: z.string().min(5, 'Subject too short').max(100, 'Subject too long'),
  message: z.string().min(10, 'Message too short').max(2000, 'Message too long'),
})

type ContactFormData = z.infer<typeof contactSchema>

// --- Email Templates ---
function generateEmailTemplate(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>New Contact Form Submission</title>
        <style>
          body { font-family: Arial, sans-serif; background: #f4f4f4; color: #333; }
          .container { max-width: 600px; margin: 20px auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 3px 8px rgba(0,0,0,0.1); }
          .header { background: #09778e; color: white; padding: 20px; text-align: center; }
          .content { padding: 25px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: 600; color: #09778e; margin-bottom: 5px; display: block; }
          .footer { background: #f9f9f9; padding: 15px; text-align: center; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Form Submission</h2>
            <p>Endurakind Disability Support Services</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name</div>
              <div>${data.name}</div>
            </div>
            <div class="field">
              <div class="label">Email</div>
              <div><a href="mailto:${data.email}" style="color:#09778e">${data.email}</a></div>
            </div>
            <div class="field">
              <div class="label">Phone</div>
              <div><a href="tel:${data.phone}" style="color:#09778e">${data.phone}</a></div>
            </div>
            <div class="field">
              <div class="label">Subject</div>
              <div>${data.subject}</div>
            </div>
            <div class="field">
              <div class="label">Message</div>
              <div style="white-space: pre-wrap;">${data.message}</div>
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

function generateCustomerEmailTemplate(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Thank You</title>
        <style>
          body { font-family: Arial, sans-serif; background: #f4f4f4; color: #333; }
          .container { max-width: 600px; margin: 20px auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 3px 8px rgba(0,0,0,0.1); }
          .header { background: #09778e; color: white; padding: 25px; text-align: center; }
          .content { padding: 30px; }
          .footer { background: #f9f9f9; padding: 20px; text-align: center; font-size: 13px; color: #666; }
          a { color: #09778e; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Thank You for Contacting Us</h2>
          </div>
          <div class="content">
            <p>Dear ${data.name},</p>
            <p>Thank you for reaching out to us. We’ve received your message and will get back to you as soon as possible.</p>
            <p><strong>Summary of your message:</strong></p>
            <p><em>${data.subject}</em></p>
            <p>${data.message}</p>
            <p>We appreciate your interest and look forward to assisting you.</p>
            <p>Kind regards,<br><strong>The Team at Endurakind</strong></p>
          </div>
          <div class="footer">
            <p>This email was sent from your contact form submission.</p>
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

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in a minute.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const validatedData = contactSchema.parse(body)

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

    // const companyEmail = {
    //   from: process.env.EMAIL_FROM || process.env.EMAIL_SERVER_USER,
    //   to: process.env.EMAIL_TO || 'tewatiapraveen@gmail.com',
    //   subject: `New Contact Message from ${validatedData.name}`,
    //   html: generateEmailTemplate(validatedData),
    //   replyTo: validatedData.email,
    // }

    const companyEmail = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Contact Message from ${validatedData.name}`,
      html: generateEmailTemplate(validatedData),
      replyTo: validatedData.email,
    }


    const customerEmail = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_SERVER_USER,
      to: validatedData.email,
      subject: 'Thank you for contacting us',
      html: generateCustomerEmailTemplate(validatedData),
    }

    await Promise.all([
      transporter.sendMail(companyEmail),
      transporter.sendMail(customerEmail),
    ])

    console.log('✅ Contact form submitted by:', validatedData.email)

    return NextResponse.json(
      { success: true, message: 'Message sent successfully. We’ll respond shortly.' },
      { status: 200 }
    )

  } catch (error) {
    console.error('❌ Contact form error:', error)

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
      { error: 'Failed to send message. Please try again later.' },
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
