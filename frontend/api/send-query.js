import nodemailer from "nodemailer";

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== "POST") {
        return res.status(405).json({ success: false, error: "Method not allowed" });
    }

    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, error: "All fields are required" });
    }

    // Get environment variables
    const SMTP_HOST = process.env.SMTP_HOST || "smtp.hostinger.com";
    const SMTP_PORT = parseInt(process.env.SMTP_PORT || "465");
    const SMTP_USER = process.env.SMTP_USER; // info@metameshlabs.com
    const SMTP_PASS = process.env.SMTP_PASS; // Your Hostinger email password
    const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || SMTP_USER || "info@metameshlabs.com";

    // Validate SMTP configuration
    if (!SMTP_USER || !SMTP_PASS) {
        console.error("SMTP credentials not configured!");
        return res.status(500).json({ 
            success: false, 
            error: "Email service is not configured. Please contact administrator."
        });
    }

    try {
        console.log(`📨 Processing query from: ${name} (${email})`);
        
        // Create transporter with Hostinger SMTP
        const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: SMTP_PORT,
            secure: SMTP_PORT === 465, // true for SSL (465), false for STARTTLS (587)
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // Send owner email to info@metameshlabs.com
        const ownerResult = await transporter.sendMail({
            from: `"MetaMesh Labs Website" <${SMTP_USER}>`,
            to: RECIPIENT_EMAIL,
            replyTo: email,
            subject: `New Query from Website - ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #2563eb;">New Query Received</h2>
                    <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                        <p><strong>Message:</strong></p>
                        <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px;">${message.replace(/\n/g, '<br>')}</p>
                    </div>
                    <p style="color: #6b7280; font-size: 12px;">This email was sent from the MetaMesh Labs contact form.</p>
                </div>
            `,
            text: `
New Query Received

Name: ${name}
Email: ${email}

Message:
${message}
            `
        });

        console.log(`✅ Owner email sent successfully. Message ID: ${ownerResult.messageId}`);

        // Send user confirmation email
        const confirmationResult = await transporter.sendMail({
            from: `"MetaMesh Labs" <${SMTP_USER}>`,
            to: email,
            subject: "We Received Your Query - MetaMesh Labs",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h3 style="color: #2563eb;">Hi ${name},</h3>
                    <p>Thank you for contacting MetaMesh Labs.</p>
                    <p>We have received your message and will get back to you soon.</p>
                    <br>
                    <p>Best regards,<br><strong>MetaMesh Labs Team</strong></p>
                    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
                    <p style="color: #6b7280; font-size: 12px;">
                        This is an automated confirmation. Please do not reply to this email.<br>
                        If you have any urgent questions, please contact us at info@metameshlabs.com
                    </p>
                </div>
            `,
            text: `
Hi ${name},

Thank you for contacting MetaMesh Labs.

We have received your message and will get back to you soon.

Best regards,
MetaMesh Labs Team
            `
        });

        console.log(`✅ Confirmation email sent successfully. Message ID: ${confirmationResult.messageId}`);

        return res.status(200).json({ 
            success: true, 
            messageId: ownerResult.messageId,
            message: "Query sent successfully"
        });
    } catch (error) {
        console.error("❌ Email error details:", {
            message: error.message,
            code: error.code,
            response: error.response
        });
        
        // Provide helpful error messages
        let errorMessage = "Failed to send email. Please try again later.";
        if (error.code === "EAUTH") {
            errorMessage = "Email authentication failed. Please check SMTP credentials.";
        } else if (error.code === "ECONNECTION") {
            errorMessage = "Could not connect to email server. Please check SMTP settings.";
        } else if (error.responseCode === 535) {
            errorMessage = "Email authentication failed. Invalid username or password.";
        }
        
        return res.status(500).json({ 
            success: false, 
            error: errorMessage
        });
    }
}

