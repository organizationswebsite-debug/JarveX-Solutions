import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

function buildPlanSignupEmail(body) {
  const { plan, rate, name, company, email, phone, mc, fleetSize, equipment, message } = body;
  return {
    subject: `New ${plan} Signup — ${name}`,
    text: `
New JarveX Solutions plan signup

Plan: ${plan} (${rate})
Name: ${name}
Company: ${company || "N/A"}
Email: ${email}
Phone: ${phone}
MC Number: ${mc || "N/A"}
Fleet Size: ${fleetSize}
Primary Equipment: ${equipment}

Message:
${message || "N/A"}
    `.trim(),
    replyTo: email,
  };
}

function buildSalesContactEmail(body) {
  const {
    plan, company, contactName, title, email, phone, fleetSize,
    loadVolume, currentSolution, requirements, bestTime,
  } = body;
  return {
    subject: `New Enterprise Sales Inquiry — ${company}`,
    text: `
New JarveX Solutions enterprise sales inquiry

Plan Interest: ${plan}
Company: ${company}
Contact Name: ${contactName}
Title: ${title || "N/A"}
Email: ${email}
Phone: ${phone}
Fleet Size: ${fleetSize}
Monthly Load Volume: ${loadVolume || "N/A"}
Current Dispatch Solution: ${currentSolution || "N/A"}
Best Time To Reach: ${bestTime}

Requirements:
${requirements || "N/A"}
    `.trim(),
    replyTo: email,
  };
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { type } = body;

    if (type !== "plan-signup" && type !== "sales-contact") {
      return NextResponse.json({ error: "Invalid form type" }, { status: 400 });
    }

    const requiredFields = type === "plan-signup"
      ? ["name", "email", "phone"]
      : ["company", "contactName", "email", "phone"];

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    const { subject, text, replyTo } = type === "plan-signup"
      ? buildPlanSignupEmail(body)
      : buildSalesContactEmail(body);

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo,
      subject,
      text,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Pricing form error:", err);
    return NextResponse.json({ error: "Failed to submit form" }, { status: 500 });
  }
}
