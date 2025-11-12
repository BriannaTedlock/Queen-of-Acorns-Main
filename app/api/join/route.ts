import { NextResponse } from "next/server";
import { createMailer } from "@/lib/mailer";

export const runtime = "nodejs"; // required for Buffer, streams, SMTP

function escapeHtml(s: string) {
  return s.toString().replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]!));
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name     = (formData.get("name")     || "").toString().trim();
    const email    = (formData.get("email")    || "").toString().trim();
    const phone    = (formData.get("phone")    || "").toString().trim();
    const position = (formData.get("position") || "").toString().trim();
    const message  = (formData.get("message")  || "").toString().trim();
    const resume   = formData.get("resume") as File | null;

    if (!email) return NextResponse.json({ error: "Email is required" }, { status: 400 });

    const attachments: Array<{ filename: string; content: Buffer }> = [];
if (resume && typeof resume.arrayBuffer === "function") {
  const buf = Buffer.from(await resume.arrayBuffer());
  attachments.push({ filename: resume.name || "resume.pdf", content: buf });
}

    const transporter = createMailer();
    await transporter.verify().catch(e => console.error("SMTP verify failed:", e));

    // 1) Send to your inbox
    await transporter.sendMail({
      from: `"Queen of Acorns Careers" <${process.env.EMAIL_USER}>`,
      to: ["queenofacorns@yahoo.com", "briannatedlock02@gmail.com"],
      replyTo: email,
      subject: `New Team Application from ${name || "No Name"}`,
      text:
`Name: ${name}
Email: ${email}
Phone: ${phone}
Position: ${position}

${message}`,
      html: `
        <h2>New Application Received</h2>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Phone:</b> ${escapeHtml(phone)}</p>
        <p><b>Position:</b> ${escapeHtml(position)}</p>
        <p><b>Message:</b> ${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
      attachments,
    });

    // 2) Confirmation to applicant (no attachment needed)
    await transporter.sendMail({
      from: `"Queen of Acorns Careers" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank you for applying to Queen of Acorns!`,
      html: `
        <h2>Thank you, ${escapeHtml(name) || "there"}!</h2>
        <p>Your application for the <b>${escapeHtml(position) || "a role"}</b> position has been received.</p>
        <p>We'll review your info and reach out if you're a good fit.<br/><br/>
        — Queen of Acorns Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  }  catch (err: unknown) {
  const msg = err instanceof Error ? err.message : String(err);
  console.error("Join form error:", err);
  return NextResponse.json({ error: "Failed to submit application.", detail: msg }, { status: 500 });
}
}
