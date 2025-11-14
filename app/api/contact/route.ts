// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // Nodemailer requires Node

const isProd = process.env.NODE_ENV === "production";

function required(name: string, val?: string) {
  if (!val) throw new Error(`Missing env: ${name}`);
  return val;
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,                 // use 587 + secure:false if needed
  secure: true,              // 465 => true
  auth: {
    user: required("EMAIL_USER", process.env.EMAIL_USER),
    pass: required("EMAIL_PASS", process.env.EMAIL_PASS), // App Password
  },
  // Dev-only: helps when antivirus/VPN injects a self-signed cert locally
  ...(process.env.ALLOW_INSECURE_TLS_DEV === "true" && !isProd
    ? { tls: { rejectUnauthorized: false } }
    : {}),
});

function escapeHtml(s: string) {
  return s.toString().replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]!));
}

export async function POST(req: Request) {
  try {
    // Optional: reveal precise SMTP problems in logs
    await transporter.verify().catch(e => console.error("SMTP verify failed:", e));

    const data = await req.json();
    const name = (data.name ?? "").toString().trim();
    const email = (data.email ?? "").toString().trim();
    const phone = (data.phone ?? "").toString().trim();
    const message = (data.message ?? "").toString().trim();

    if (!email || !message) {
      return NextResponse.json({ error: "Email and message are required" }, { status: 400 });
    }

    const html = `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${escapeHtml(name) || "N/A"}</p>
      <p><strong>Email:</strong> ${escapeHtml(email) || "N/A"}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone) || "N/A"}</p>
      <p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>") || "N/A"}</p>
    `;


 const info = await transporter.sendMail({
  from: `"Queen of Acorns" <${process.env.EMAIL_USER}>`, 
  to: [
    "queenofacorns@yahoo.com",
    "brokenbone01@gmail.com",
  ],
  replyTo: email,
  subject: `New Contact Form Message from ${name || "No Name"}`,
  text: `${name}\n${email}\n${phone}\n\n${message}`,
  html,
});




    return NextResponse.json({ success: true, id: info.messageId });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("Email error:", err);
    return NextResponse.json(
      { error: "Failed to send email", detail: msg },
      { status: 500 }
    );
  }
}
