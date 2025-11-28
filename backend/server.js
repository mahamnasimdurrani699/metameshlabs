import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app = express();

// CORS configuration - Allow all origins (quick fix)
app.use(cors());

app.use(express.json());

// Configuration
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || "info@metameshlabs.com";

console.log("✅ MetaMesh Labs API Server initialized");
console.log(`📬 Contact form queries will be sent to: ${RECIPIENT_EMAIL}`);

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

    try {
        console.log(`📨 New query received:`);
        console.log(`   Name: ${name}`);
        console.log(`   Email: ${email}`);
        console.log(`   Message: ${message}`);
        console.log(`   Timestamp: ${new Date().toISOString()}`);
        
        // Log query data (ready for your custom email solution)
        const queryData = {
            name,
            email,
            message,
            timestamp: new Date().toISOString(),
            recipient: RECIPIENT_EMAIL
        };
        
        // TODO: Add your custom email sending solution here
        // You can access queryData.name, queryData.email, queryData.message, queryData.recipient
        
        // For now, return success - you can implement your email solution
        res.json({ 
            success: true, 
            message: "Query received successfully",
            data: {
                name,
                email,
                message: message.substring(0, 50) + "...", // Preview only
                timestamp: new Date().toISOString()
            }
        });
    } catch (error) {
        console.error("❌ Error processing query:", error);
        res.status(500).json({ 
            success: false, 
            error: "Failed to process query. Please try again later."
        });
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
