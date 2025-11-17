import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();


    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }


    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'shuklamanya99@gmail.com',
      subject: 'New Newsletter Subscription',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .subscriber-info { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea; }
              .stats { background: #667eea; color: white; padding: 15px; border-radius: 8px; text-align: center; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🎉 New Newsletter Subscriber!</h1>
                <p>Someone just subscribed to your CODYSSEY newsletter</p>
              </div>
              <div class="content">
                <div class="subscriber-info">
                  <h3>Subscriber Details:</h3>
                  <p><strong>Email Address:</strong> ${email}</p>
                  <p><strong>Subscription Date:</strong> ${new Date().toLocaleDateString()}</p>
                  <p><strong>Subscription Time:</strong> ${new Date().toLocaleTimeString()}</p>
                </div>
                
                <div class="stats">
                  <h3>Welcome to the CODYSSEY Community! 🚀</h3>
                  <p>This subscriber will now receive your latest updates on web development, design trends, and digital innovation.</p>
                </div>

                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
                  <p><strong>Next Steps:</strong></p>
                  <ul>
                    <li>Add this subscriber to your mailing list</li>
                    <li>Prepare your next newsletter edition</li>
                    <li>Engage with valuable content regularly</li>
                  </ul>
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
      subject: 'Welcome to CODYSSEY Newsletter! 🚀',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .welcome-message { font-size: 24px; color: #667eea; text-align: center; margin-bottom: 20px; }
              .benefits { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea; }
              .benefit-item { display: flex; align-items: center; margin-bottom: 15px; }
              .benefit-icon { font-size: 20px; margin-right: 15px; }
              .cta { background: #667eea; color: white; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Welcome to CODYSSEY! 🎉</h1>
                <p>Thank you for subscribing to our newsletter</p>
              </div>
              <div class="content">
                <div class="welcome-message">
                  Hello Future Innovator!
                </div>
                
                <p>We're thrilled to welcome you to the <strong>CODYSSEY</strong> community! You've just taken the first step toward staying updated with the latest in web development, design trends, and digital innovation.</p>

                <div class="benefits">
                  <h3>What You'll Receive: ✨</h3>
                  <div class="benefit-item">
                    <span class="benefit-icon">🚀</span>
                    <span><strong>Latest Tech Insights:</strong> Stay ahead with cutting-edge web technologies</span>
                  </div>
                  <div class="benefit-item">
                    <span class="benefit-icon">💡</span>
                    <span><strong>Design Trends:</strong> Discover the latest UI/UX design patterns</span>
                  </div>
                  <div class="benefit-item">
                    <span class="benefit-icon">📈</span>
                    <span><strong>Growth Strategies:</strong> Learn how to scale your digital presence</span>
                  </div>
                  <div class="benefit-item">
                    <span class="benefit-icon">🎯</span>
                    <span><strong>Exclusive Tips:</strong> Get insider knowledge from our experts</span>
                  </div>
                  <div class="benefit-item">
                    <span class="benefit-icon">📅</span>
                    <span><strong>Project Updates:</strong> Be the first to know about our latest work</span>
                  </div>
                </div>

                <div class="cta">
                  <h3>Ready to Transform Your Digital Presence?</h3>
                  <p>While you wait for our first newsletter, check out our recent case studies and discover how we can help bring your ideas to life!</p>
                  <p>
                    <a href="https://yourdomain.com/case-studies" style="color: white; text-decoration: underline; font-weight: bold;">View Our Work →</a>
                  </p>
                </div>

                <p><strong>What to Expect:</strong></p>
                <ul>
                  <li>Monthly newsletter with curated content</li>
                  <li>No spam - we respect your inbox</li>
                  <li>Valuable insights you can actually use</li>
                  <li>Exclusive offers for subscribers only</li>
                </ul>

                <p>If you ever change your mind, you can unsubscribe at any time using the link in our emails.</p>

                <p>Best regards,<br>
                <strong>The CODYSSEY Team</strong></p>

                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #666; font-size: 12px;">
                  <p>CODYSSEY - Creative Journey Through Code<br>
                  Email: info@codyssey.services<br>
                  <a href="https://codyssey.services" style="color: #667eea;">www.codyssey.services</a></p>
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
      { message: 'Subscription successful' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing newsletter subscription:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    );
  }
}
