import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Helper function to generate a beautiful HTML Email Template
const generateEmailTemplate = (name: string, email: string, message: string) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #0a0a0a;
      color: #e5e7eb;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #111111;
      border: 1px solid #1f2937;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 10px 25px rgba(0,0,0,0.5);
    }
    .header {
      background: linear-gradient(135deg, #9333ea 0%, #06b6d4 100%);
      padding: 30px 20px;
      text-align: center;
    }
    .header h2 {
      margin: 0;
      color: #ffffff;
      font-size: 24px;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    .content {
      padding: 30px;
    }
    .info-row {
      margin-bottom: 20px;
      border-bottom: 1px solid #1f2937;
      padding-bottom: 10px;
    }
    .label {
      font-size: 12px;
      color: #9ca3af;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 5px;
      display: block;
    }
    .value {
      font-size: 16px;
      color: #ffffff;
      font-weight: 500;
    }
    .message-box {
      background-color: #1a1a1a;
      border-left: 4px solid #06b6d4;
      padding: 20px;
      margin-top: 10px;
      border-radius: 0 8px 8px 0;
      color: #d1d5db;
      line-height: 1.6;
      white-space: pre-wrap;
    }
    .footer {
      background-color: #0a0a0a;
      padding: 20px;
      text-align: center;
      font-size: 12px;
      color: #6b7280;
      border-top: 1px solid #1f2937;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Portfolio Inquiry</h2>
    </div>
    <div class="content">
      <div class="info-row">
        <span class="label">Sender Name</span>
        <span class="value">${name}</span>
      </div>
      <div class="info-row">
        <span class="label">Contact Email</span>
        <span class="value"><a href="mailto:${email}" style="color: #06b6d4; text-decoration: none;">${email}</a></span>
      </div>
      
      <span class="label" style="margin-top: 30px;">Message Content</span>
      <div class="message-box">
${message}
      </div>
    </div>
    <div class="footer">
      This email was securely sent from your personal developer portfolio. <br>
      © ${new Date().getFullYear()} Aamir Javed AI Engineer.
    </div>
  </div>
</body>
</html>
`;

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // 1. Validation (Same secure regex as before)
    const nameRegex = /^[a-zA-Z\s]{2,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }
    if (!nameRegex.test(name.trim())) {
      return NextResponse.json({ error: "Invalid name format." }, { status: 400 });
    }
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ error: "Invalid email format." }, { status: 400 });
    }
    if (message.trim().length < 10) {
      return NextResponse.json({ error: "Message is too short." }, { status: 400 });
    }

    // 2. Nodemailer Setup (Using Dummy Email Logic)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    // 3. Setup Email Options with HTML
    const mailOptions = {
      from: `"Portfolio Web" <${process.env.EMAIL_USER}>`, 
      to: process.env.RECEIVER_EMAIL, 
      replyTo: email, 
      subject: `[New Lead] Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`, // Fallback text
      html: generateEmailTemplate(name, email, message), // Yahan HTML template lagaya hai
    };

    // 4. Send Email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}