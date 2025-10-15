import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields." }),
        { status: 400 }
      );
    }

    // ✅ Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // fixed double underscore
      },
    });

    // ✅ Email options
    const mailOptions = {
      from: process.env.GMAIL_USER, // better to use your own email as sender
      replyTo: email, // reply goes to sender
      to: "sc.karkibrothers1@gmail.com",
      subject: `New Contact Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message:
        ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email sending failed:", error);
    const message =
      error instanceof Error ? error.message : JSON.stringify(error);
    return new Response(
      JSON.stringify({ success: false, error: message }),
      { status: 500 }
    );
  }
}
