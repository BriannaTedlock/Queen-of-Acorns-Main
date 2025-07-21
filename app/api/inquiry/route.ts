import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: `"Queen of Acorns" <${process.env.EMAIL_USER}>`,
      to: 'queenofacorns@yahoo.com, briannatedlock02@gmail.com',
      subject: `New Inquiry from ${data.name || "No Name"}`,
      html: `
        <h2>New Inquiry Received</h2>
        ${Object.entries(data).map(([key, value]) => {
          const displayValue = Array.isArray(value)
            ? value.join(", ")
            : value
          return `<p><strong>${key.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())}:</strong> ${displayValue}</p>`
        }).join("")}
      `,
    }

    await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true })
  } catch (error) {
    let errorMsg = 'Failed to send email'
    if (error instanceof Error) {
      errorMsg = error.message
    } else if (typeof error === 'string') {
      errorMsg = error
    }
    return NextResponse.json({ error: errorMsg }, { status: 500 })
  }
}
