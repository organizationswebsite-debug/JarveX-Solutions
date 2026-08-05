import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, phone, email, mc, equipment, preferredContact, bestTime, message } = await request.json();

    if (!name || !phone || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Carrier Inquiry — ${name}`,
      text: `
New JarveX Solutions contact form submission

Name: ${name}
Phone: ${phone}
Email: ${email}
MC Number: ${mc || "N/A"}
Equipment: ${equipment}
Preferred Contact Method: ${preferredContact || "N/A"}
Best Time To Reach: ${bestTime || "N/A"}

Message:
${message || "N/A"}
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
