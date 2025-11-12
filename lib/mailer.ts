import nodemailer from "nodemailer";

const isProd = process.env.NODE_ENV === "production";

export function createMailer() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "smtp.gmail.com",
    port: Number(process.env.EMAIL_PORT || 465),
    secure: (process.env.EMAIL_PORT || "465") === "465", // 465=true, 587=false
    auth: {
      user: process.env.EMAIL_USER!,     // your Gmail
      pass: process.env.EMAIL_PASS!,     // 16-char App Password
    },
    // Dev-only escape hatch for TLS interception on some machines
    ...(process.env.ALLOW_INSECURE_TLS_DEV === "true" && !isProd
      ? { tls: { rejectUnauthorized: false } }
      : {}),
  });
}
