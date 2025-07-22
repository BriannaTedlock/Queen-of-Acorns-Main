import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// You need to parse FormData on the server! (not req.json)
export async function POST(req: Request) {
  try {
    // Parse form data
    const formData = await req.formData()
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const position = formData.get('position') as string
    const message = formData.get('message') as string
    const resumeFile = formData.get('resume') as File

    // Read the resume file
    let resumeAttachment: { filename: string; content: Buffer } | undefined = undefined
    if (resumeFile && typeof resumeFile.arrayBuffer === 'function') {
      const buffer = Buffer.from(await resumeFile.arrayBuffer())
      resumeAttachment = {
        filename: resumeFile.name,
        content: buffer,
      }
    }

    // Set up nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Send to admin (you)
    await transporter.sendMail({
      from: `"Queen of Acorns Careers" <${process.env.EMAIL_USER}>`,
      to: 'queenofacorns@yahoo.com, briannatedlock02@gmail.com', // your team
      subject: `New Team Application from ${name}`,
      html: `
        <h2>New Application Received</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Position:</b> ${position}</p>
        <p><b>Message:</b> ${message}</p>
      `,
      attachments: resumeAttachment ? [resumeAttachment] : [],
    })

    // Confirmation email to applicant
    await transporter.sendMail({
      from: `"Queen of Acorns Careers" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank you for applying to Queen of Acorns!`,
      html: `
        <h2>Thank you, ${name}!</h2>
        <p>Your application for the <b>${position}</b> position has been received.</p>
        <p>We'll review your info and reach out if you're a good fit. Cheers!<br><br>
        Queen of Acorns Team</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Join form error:', error)
    return NextResponse.json({ error: 'Failed to submit application.' }, { status: 500 })
  }
}
