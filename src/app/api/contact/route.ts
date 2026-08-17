import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Nodemailer requires the Node.js runtime.
export const runtime = "nodejs";

interface ContactPayload {
  name: string;
  business: string;
  website?: string;
  email: string;
  challenge: string;
}

// Email validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Escape user input before inserting it into HTML email
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Validate contact form payload
function isValidPayload(body: unknown): body is ContactPayload {
  if (typeof body !== "object" || body === null) {
    return false;
  }

  const b = body as Record<string, unknown>;

  return (
    typeof b.name === "string" &&
    b.name.trim().length > 0 &&
    typeof b.business === "string" &&
    b.business.trim().length > 0 &&
    typeof b.email === "string" &&
    EMAIL_REGEX.test(b.email.trim()) &&
    typeof b.challenge === "string" &&
    b.challenge.trim().length > 0 &&
    (b.website === undefined || typeof b.website === "string")
  );
}

export async function POST(request: Request) {
  let body: unknown;

  // ---------------------------------------------------------
  // 1. Read request body
  // ---------------------------------------------------------
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  // ---------------------------------------------------------
  // 2. Validate form data
  // ---------------------------------------------------------
  if (!isValidPayload(body)) {
    return NextResponse.json(
      {
        error:
          "Please fill in all required fields with valid values.",
      },
      { status: 400 }
    );
  }

  const {
    name,
    business,
    website,
    email,
    challenge,
  } = body;

  // ---------------------------------------------------------
  // 3. Read SMTP environment variables
  // ---------------------------------------------------------
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    CONTACT_EMAIL,
  } = process.env;

  if (
    !SMTP_HOST ||
    !SMTP_PORT ||
    !SMTP_USER ||
    !SMTP_PASS ||
    !CONTACT_EMAIL
  ) {
    console.error(
      "Contact form: missing one or more required SMTP environment variables."
    );

    return NextResponse.json(
      {
        error:
          "The contact form isn't configured yet. Please try again later.",
      },
      { status: 500 }
    );
  }

  // ---------------------------------------------------------
  // 4. Create SMTP transporter
  // ---------------------------------------------------------
  try {
    const smtpPort = Number(SMTP_PORT);

    if (Number.isNaN(smtpPort)) {
      console.error(
        "Contact form: SMTP_PORT is not a valid number."
      );

      return NextResponse.json(
        {
          error:
            "Email service configuration is invalid.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: smtpPort,

      // Gmail:
      // 587 -> false
      // 465 -> true
      secure: smtpPort === 465,

      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // -------------------------------------------------------
    // 5. Verify SMTP connection
    // -------------------------------------------------------
    await transporter.verify();

    console.log("Contact form: SMTP connection successful.");

    // -------------------------------------------------------
    // 6. Sanitize form values
    // -------------------------------------------------------
    const safeName = escapeHtml(name.trim());
    const safeBusiness = escapeHtml(business.trim());
    const safeEmail = escapeHtml(email.trim());

    const safeWebsite = website?.trim()
      ? escapeHtml(website.trim())
      : "Not provided";

    const safeChallenge = escapeHtml(
      challenge.trim()
    ).replace(/\n/g, "<br />");

    // -------------------------------------------------------
    // 7. Send email
    // -------------------------------------------------------
    const mailInfo = await transporter.sendMail({
      from: `"VYNORA — Website" <${SMTP_USER}>`,

      to: CONTACT_EMAIL,

      replyTo: email.trim(),

      subject: `New Website Audit Request — ${business.trim()}`,

      html: `
        <div
          style="
            font-family:
              'Helvetica Neue',
              Arial,
              sans-serif;
            max-width: 560px;
            margin: 0 auto;
            color: #1a1a1a;
          "
        >

          <h2
            style="
              color: #123a72;
              margin-bottom: 4px;
            "
          >
            New Website Audit Request
          </h2>

          <p
            style="
              color: #5a6779;
              margin-top: 0;
            "
          >
            Submitted via VYNORA
          </p>

          <table
            style="
              width: 100%;
              border-collapse: collapse;
              margin-top: 20px;
            "
          >

            <tr>
              <td
                style="
                  padding: 8px 0;
                  font-weight: 600;
                  width: 160px;
                  vertical-align: top;
                "
              >
                Name
              </td>

              <td style="padding: 8px 0;">
                ${safeName}
              </td>
            </tr>

            <tr>
              <td
                style="
                  padding: 8px 0;
                  font-weight: 600;
                  vertical-align: top;
                "
              >
                Business
              </td>

              <td style="padding: 8px 0;">
                ${safeBusiness}
              </td>
            </tr>

            <tr>
              <td
                style="
                  padding: 8px 0;
                  font-weight: 600;
                  vertical-align: top;
                "
              >
                Website
              </td>

              <td style="padding: 8px 0;">
                ${safeWebsite}
              </td>
            </tr>

            <tr>
              <td
                style="
                  padding: 8px 0;
                  font-weight: 600;
                  vertical-align: top;
                "
              >
                Email
              </td>

              <td style="padding: 8px 0;">
                ${safeEmail}
              </td>
            </tr>

            <tr>
              <td
                style="
                  padding: 8px 0;
                  font-weight: 600;
                  vertical-align: top;
                "
              >
                Biggest Challenge
              </td>

              <td style="padding: 8px 0;">
                ${safeChallenge}
              </td>
            </tr>

          </table>

          <hr
            style="
              margin-top: 30px;
              border: none;
              border-top: 1px solid #ddd;
            "
          />

          <p
            style="
              font-size: 12px;
              color: #777;
            "
          >
            This message was automatically generated
            from the VYNORA website contact form.
          </p>

        </div>
      `,
    });

    console.log(
      "Contact form: email sent successfully.",
      mailInfo.messageId
    );

    // -------------------------------------------------------
    // 8. Success response
    // -------------------------------------------------------
    return NextResponse.json(
      {
        success: true,
        message: "Your request has been sent successfully.",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    // -------------------------------------------------------
    // 9. Detailed server-side error logging
    // -------------------------------------------------------

    console.error(
      "Contact form: failed to send email."
    );

    if (error instanceof Error) {
      console.error("Error name:", error.name);
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    } else {
      console.error("Unknown error:", error);
    }

    return NextResponse.json(
      {
        error:
          "We couldn't send your request right now. Please try again shortly.",
      },
      { status: 502 }
    );
  }
}