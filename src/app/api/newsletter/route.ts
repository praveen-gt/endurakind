import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';

// Validation schema
const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = newsletterSchema.parse(body);

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
      secure: process.env.EMAIL_SERVER_PORT === '465',
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    await transporter.verify();

    // Email to company
    const companyEmail = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: '📰 New Newsletter Subscriber',
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p>Subscribed on ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Melbourne' })}</p>
      `,
    };

    // Email to subscriber (optional)
    const thankYouEmail = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Thank you for subscribing!',
      html: `
        <h2>Welcome to Endurakind!</h2>
        <p>Thanks for joining our newsletter. We'll keep you updated with the latest news, tips, and updates.</p>
        <p>Team Endurakind</p>
      `,
    };

    await Promise.all([
      transporter.sendMail(companyEmail),
      transporter.sendMail(thankYouEmail),
    ]);

    console.log('✅ Newsletter signup:', email);
    return NextResponse.json({ success: true, message: 'Thanks for subscribing!' }, { status: 200 });

  } catch (error) {
    console.error('❌ Newsletter error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': process.env.NODE_ENV === 'production' ? 'https://yourdomain.com' : '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
