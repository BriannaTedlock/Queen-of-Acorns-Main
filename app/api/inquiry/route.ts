import { NextResponse } from "next/server";
import { createMailer } from "@/lib/mailer";

export const runtime = "nodejs";

function escapeHtml(s: string) {
  return s.toString().replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]!));
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Stronger guardrails
    const email = (data.email ?? "").toString().trim();
    const name  = (data.name  ?? "").toString().trim();
    if (!email) return NextResponse.json({ error: "Email is required" }, { status: 400 });

    const transporter = createMailer();
    await transporter.verify().catch(e => console.error("SMTP verify failed:", e));

    // Build HTML safely
    const htmlPairs = Object.entries(data).map(([key, value]) => {
      const cleanKey = key.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase());
      const val = Array.isArray(value) ? value.map(v => escapeHtml(String(v))).join(", ") : escapeHtml(String(value ?? "N/A"));
      return `<p><strong>${escapeHtml(cleanKey)}:</strong> ${val}</p>`;
    }).join("");

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,           // exactly the Yahoo login
      to: process.env.EMAIL_USER,             // send ONLY to yourself for now
      replyTo: email,
      subject: `New Inquiry from ${name || "No Name"}`,
      text: `New Inquiry from ${name || "No Name"} <${email}>`,
      html: `<h2>New Inquiry Received</h2>${htmlPairs}`,
    });


    return NextResponse.json({ success: true, id: info.messageId });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("Inquiry error:", err);
    return NextResponse.json({ error: "Failed to send inquiry", detail: msg }, { status: 500 });
  }
}
