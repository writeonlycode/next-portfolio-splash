import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { generateEmail, generateEmailConfirmation } from "@/utils/email";

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  try {
    await sendEmail({
      to: process.env.SMTP_TO_EMAIL || "email@example.com",
      subject: `You've received a message from ${name?.toString() || ""}!`,
      html: generateEmail({ name, email, message }),
    });
  } catch (error) {
    console.log("Error: ", error);
    return NextResponse.json({ error }, { status: 500 });
  }

  try {
    await sendEmail({
      to: email || "email@example.com",
      subject: `Thanks for the message!`,
      html: generateEmailConfirmation({ name, email, message }),
    });
  } catch (error) {
    console.log("Error: ", error);
    return NextResponse.json({ error }, { status: 500 });
  }

  console.log("Email sent!");
  return NextResponse.json({ status: 200 });
}

type EmailPayload = {
  to: string;
  subject: string;
  html: string;
};

const smtpOptions = {
  host: process.env.SMTP_HOST || "",
  port: parseInt(process.env.SMTP_PORT || ""),
  secure: true,
  tls: {
    rejectUnauthorized: false,
    ciphers: "SSLv3",
  },
  auth: {
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASSWORD || "",
  },
};

const sendEmail = async (data: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  });

  return await transporter.sendMail({
    from: {
      name: process.env.SMTP_FROM_NAME || "",
      address: process.env.SMTP_FROM_EMAIL || "",
    },
    ...data,
  });
};
