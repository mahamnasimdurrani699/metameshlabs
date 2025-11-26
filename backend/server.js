import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app = express();

// CORS configuration - Allow all origins (quick fix)
app.use(cors());

app.use(express.json());

// Nodemailer transporter - Auto-detect Gmail or Hostinger
const isGmail = process.env.EMAIL_USER && process.env.EMAIL_USER.includes('@gmail.com');

const transporter = nodemailer.createTransport(isGmail ? {
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
} : {
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Health check endpoint
app.get("/", (req, res) => {
    res.json({ status: "ok", message: "MetaMesh Labs API is running" });
});

app.get("/health", (req, res) => {
    res.json({ status: "healthy", timestamp: new Date().toISOString() });
});

// API route to handle contact form
app.post("/send-query", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, error: "All fields are required" });
    }

    // Return success immediately - send emails in background
    res.json({ success: true });

    // Send emails in background (don't await - non-blocking)
    transporter.sendMail({
        from: `"MetaMesh Labs" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: "New Query from Website",
        html: `
            <h2>New Query Received</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong><br>${message}</p>
        `
    }).catch(err => console.error("Owner email error:", err));

    transporter.sendMail({
        from: `"MetaMesh Labs" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "We Received Your Query",
        html: `
            <h3>Hi ${name},</h3>
            <p>Thank you for contacting MetaMesh Labs.</p>
            <p>We have received your message and will get back to you soon.</p>
        `
    }).catch(err => console.error("User email error:", err));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
