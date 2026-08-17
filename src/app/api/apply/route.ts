import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const link = formData.get("link") as string;
    const coverLetter = formData.get("coverLetter") as string;
    const roleTitle = formData.get("roleTitle") as string;
    const resume = formData.get("resume") as File;

    if (!name || !email || !resume || !roleTitle) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Read the resume file as a Buffer to attach it
    const bytes = await resume.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Setup Nodemailer transporter using existing env config
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`, // Send via the authenticated email
      replyTo: email, // Allow user to directly reply to the candidate
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // The admin email defined in .env
      subject: `New Application: ${roleTitle} - ${name}`,
      text: `
You have received a new application for the ${roleTitle} role.

Candidate Name: ${name}
Email Address: ${email}
Portfolio/LinkedIn: ${link}

Cover Letter / Why they are a fit:
----------------------------------
${coverLetter}
----------------------------------

Resume is attached.
      `,
      attachments: [
        {
          filename: resume.name,
          content: buffer,
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending application email:", error);
    return NextResponse.json({ error: "Failed to send application. Please check your SMTP configuration." }, { status: 500 });
  }
}
