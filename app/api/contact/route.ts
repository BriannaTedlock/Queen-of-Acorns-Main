// app/api/contact/route.ts

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
      subject: `New Contact Form Message from ${data.name || 'No Name'}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${data.name || 'N/A'}</p>
        <p><strong>Email:</strong> ${data.email || 'N/A'}</p>
        <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
        <p><strong>Message:</strong><br/>${data.message || 'N/A'}</p>
      `,
    }

    await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true })
  } catch (error) {
    let errorMsg = 'Failed to send email'
    if (error instanceof Error) errorMsg = error.message
    return NextResponse.json({ error: errorMsg }, { status: 500 })
  }
}
