import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid request payload. Please provide valid JSON." },
        { status: 400 }
      );
    }

    const { name, email, message, website } = body;

    // 1. Honeypot anti-spam check: bots fill hidden fields like 'website'
    if (website && typeof website === "string" && website.trim().length > 0) {
      // Silently return success to avoid tipping off bots
      return NextResponse.json(
        { success: true, message: "Message sent successfully." },
        { status: 200 }
      );
    }

    // 2. Server-side validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }

    if (name.trim().length < 2) {
      return NextResponse.json(
        { error: "Name must be at least 2 characters." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || email.trim().length === 0) {
      return NextResponse.json(
        { error: "Email address is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters." },
        { status: 400 }
      );
    }

    // 3. Resend API Key check
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error(
        "[API/Contact] Missing RESEND_API_KEY environment variable. Please configure it in .env.local / Vercel."
      );
      return NextResponse.json(
        {
          error:
            "Email service is currently unavailable. Please reach out directly to moizhanif.dev@gmail.com.",
        },
        { status: 500 }
      );
    }

    // 4. Initialize Resend client and send email
    const resend = new Resend(apiKey);
    const sanitizedName = name.trim();
    const sanitizedEmail = email.trim();
    const sanitizedMessage = message.trim();

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Portfolio Inquiry</title>
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #18181b; background-color: #f4f4f5; margin: 0; padding: 24px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.06); border: 1px solid #e4e4e7;">
            <tr>
              <td style="background-color: #121316; padding: 24px 32px; border-bottom: 2px solid #d4a054;">
                <h2 style="margin: 0; color: #f5f5f4; font-size: 20px; font-weight: 700;">New Portfolio Inquiry</h2>
                <p style="margin: 4px 0 0 0; color: #d4a054; font-size: 13px; font-family: monospace;">moizhanif.dev Contact Form</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 32px;">
                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                  <tr>
                    <td style="padding-bottom: 12px; width: 80px; color: #71717a; font-size: 13px; font-weight: 600; text-transform: uppercase;">From:</td>
                    <td style="padding-bottom: 12px; color: #18181b; font-size: 15px; font-weight: 600;">${sanitizedName}</td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 12px; color: #71717a; font-size: 13px; font-weight: 600; text-transform: uppercase;">Email:</td>
                    <td style="padding-bottom: 12px; color: #0284c7; font-size: 15px;"><a href="mailto:${sanitizedEmail}" style="color: #0284c7; text-decoration: none;">${sanitizedEmail}</a></td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 12px; color: #71717a; font-size: 13px; font-weight: 600; text-transform: uppercase;">Date:</td>
                    <td style="padding-bottom: 12px; color: #52525b; font-size: 14px;">${new Date().toUTCString()}</td>
                  </tr>
                </table>

                <div style="background-color: #f8fafc; border-left: 4px solid #d4a054; padding: 20px; border-radius: 4px; margin-bottom: 28px;">
                  <h4 style="margin: 0 0 10px 0; color: #334155; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message:</h4>
                  <p style="margin: 0; color: #0f172a; font-size: 15px; white-space: pre-wrap; word-break: break-word;">${sanitizedMessage}</p>
                </div>

                <div style="text-align: center; padding-top: 8px;">
                  <a href="mailto:${sanitizedEmail}?subject=Re:%20Portfolio%20Inquiry" style="display: inline-block; background-color: #d4a054; color: #0a0a0b; font-weight: 600; font-size: 14px; padding: 12px 28px; border-radius: 9999px; text-decoration: none;">Reply to ${sanitizedName}</a>
                </div>
              </td>
            </tr>
            <tr>
              <td style="background-color: #fafafa; padding: 16px 32px; border-top: 1px solid #f1f5f9; text-align: center; color: #a1a1aa; font-size: 12px;">
                Sent via Abdul Moiz Hanif Portfolio Contact API
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "moizhanif.dev@gmail.com",
      replyTo: sanitizedEmail,
      subject: `New portfolio inquiry from ${sanitizedName}`,
      html: emailHtml,
      text: `New portfolio inquiry from ${sanitizedName} (${sanitizedEmail}):\n\n${sanitizedMessage}\n\nSubmitted at: ${new Date().toUTCString()}`,
    });

    if (error) {
      console.error("[API/Contact] Resend API Error:", error);
      return NextResponse.json(
        {
          error:
            "Failed to send your message. Please try again or email moizhanif.dev@gmail.com directly.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully.",
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("[API/Contact] Unexpected server error:", err);
    return NextResponse.json(
      {
        error:
          "Something went wrong processing your request. Please email moizhanif.dev@gmail.com directly.",
      },
      { status: 500 }
    );
  }
}
