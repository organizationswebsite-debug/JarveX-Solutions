import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const role = formData.get("role");
    const portfolio = formData.get("portfolio");
    const message = formData.get("message");
    const resume = formData.get("resume");

    if (!name || !email || !phone || !resume) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 5MB max
    if (resume.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "Resume file too large" }, { status: 400 });
    }

    const resumeBuffer = Buffer.from(await resume.arrayBuffer());

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Job Application — ${role} — ${name}`,
      text: `
New JarveX Solutions career application

Name: ${name}
Email: ${email}
Phone: ${phone}
Role Applying For: ${role}
Portfolio / LinkedIn: ${portfolio || "N/A"}

Message:
${message || "N/A"}
      `.trim(),
      attachments: [
        {
          filename: resume.name,
          content: resumeBuffer,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Career application error:", err);
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
  }
}
