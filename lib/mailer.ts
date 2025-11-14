// lib/mailer.ts
import nodemailer from "nodemailer";

const isProd = process.env.NODE_ENV === "production";

export function createMailer() {
  return nodemailer.createTransport({
    // Yahoo SMTP
    host: process.env.EMAIL_HOST || "smtp.gmail.com",
    port: Number(process.env.EMAIL_PORT || 465),
    secure: true, // Yahoo: SSL on 465

    auth: {
      user: process.env.EMAIL_USER!,    
      pass: process.env.EMAIL_PASS!,     
    },

    // Dev-only escape hatch for TLS interception on some machines
    ...(process.env.ALLOW_INSECURE_TLS_DEV === "true" && !isProd
      ? { tls: { rejectUnauthorized: false } }
      : {}),
  });
}
