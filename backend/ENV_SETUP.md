# Backend Environment Variables Setup

Create a `.env` file in the `backend` folder with these variables:

```env
# Server Configuration
PORT=5000

# Email Configuration (Hostinger SMTP)
# Replace with your actual email credentials
EMAIL_USER=your-email@yourdomain.com
EMAIL_PASS=your-email-password

# Frontend URL (for CORS)
# Update this after deploying frontend to Vercel
FRONTEND_URL=https://your-frontend-domain.vercel.app
```

## How to get Email Credentials:

### If using Hostinger:
1. Log into your Hostinger account
2. Go to Email section
3. Create or use existing email account
4. Use these SMTP settings:
   - Host: smtp.hostinger.com
   - Port: 465
   - Secure: true

### If using Gmail:
Update `server.js` with these settings:
```javascript
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS  // Use App Password, not regular password
    }
});
```

Then use:
- EMAIL_USER: your-gmail@gmail.com
- EMAIL_PASS: your-16-char-app-password (from Google Account settings)

### If using other email providers:
Update the SMTP configuration in `server.js` accordingly.

## Testing Locally:

1. Create `.env` file with your credentials
2. Run: `npm install`
3. Run: `npm start`
4. Visit: http://localhost:5000
5. Should see: `{"status":"ok","message":"MetaMesh Labs API is running"}`

