import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "next-portfolio-splash@writeonlycode.io",
      subject: `Contact from ${name} thought Your Next Portfolio Splash`,
      text: `${name} has sent you a message:\n\n${message}\n\nReply to them directly to their email: ${email}.`,
    });

    console.log("Success: ", data);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error: ", error);
    return NextResponse.json(error, { status: 500 });
  }
}
