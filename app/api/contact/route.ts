import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
export async function POST(request: NextRequest) {
  try {
    const { name, email, company, budget, timeline, projectType, description } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });


    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@codyssey.services',
      subject: `New Project Inquiry from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #667eea; }
              .value { color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Project Inquiry</h1>
                <p>You have received a new project inquiry through your website</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${email}</div>
                </div>
                <div class="field">
                  <div class="label">Company:</div>
                  <div class="value">${company || 'Not provided'}</div>
                </div>
                <div class="field">
                  <div class="label">Project Type:</div>
                  <div class="value">${projectType}</div>
                </div>
                <div class="field">
                  <div class="label">Budget:</div>
                  <div class="value">${budget}</div>
                </div>
                <div class="field">
                  <div class="label">Timeline:</div>
                  <div class="value">${timeline}</div>
                </div>
                <div class="field">
                  <div class="label">Project Description:</div>
                  <div class="value">${description}</div>
                </div>
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
                  <p><strong>Action Required:</strong> Please respond to this inquiry within 24 hours.</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    };
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank You for Contacting CODYSSEY',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .thank-you { font-size: 24px; color: #667eea; text-align: center; margin-bottom: 20px; }
              .next-steps { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Thank You for Reaching Out!</h1>
                <p>We're excited to help bring your project to life</p>
              </div>
              <div class="content">
                <div class="thank-you">Hello ${name},</div>
                <p>Thank you for contacting <strong>CODYSSEY</strong>. We have received your project details and our team will review your requirements carefully.</p>
                
                <div class="next-steps">
                  <h3>What Happens Next?</h3>
                  <ul>
                    <li>Our team will review your project requirements</li>
                    <li>We'll contact you within 24 hours to discuss next steps</li>
                    <li>We'll provide a detailed project proposal</li>
                    <li>Schedule a kickoff meeting to start your journey</li>
                  </ul>
                </div>

                <p><strong>Project Summary:</strong></p>
                <ul>
                  <li><strong>Project Type:</strong> ${projectType}</li>
                  <li><strong>Budget Range:</strong> ${budget}</li>
                  <li><strong>Timeline:</strong> ${timeline}</li>
                </ul>

                <p>If you have any immediate questions, feel free to reply to this email or contact us directly at <a href="mailto:shuklamanya99@gmail.com">shuklamanya99@gmail.com</a>.</p>

                <p>Best regards,<br>
                <strong>The CODYSSEY Team</strong></p>

                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #666; font-size: 12px;">
                  <p>CODYSSEY - Creative Journey Through Code<br>
                  Email: shuklamanya99@gmail.com</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    };


    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
