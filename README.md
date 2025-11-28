# MetaMesh Labs Website

A modern, responsive website for MetaMesh Labs showcasing AI integration, digital transformation, and blockchain consultancy services.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm

### Local Development

**Backend:**
```bash
cd backend
npm install
npm start
```
Backend runs on: `http://localhost:5000`

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on: `http://localhost:5173`

## 📁 Project Structure

```
meta-main/
├── backend/          # Express API server
├── frontend/         # React + Vite application
│   └── api/         # Vercel serverless functions
└── README.md
```

## ✨ Features

- Modern responsive design
- Contact form with email notifications
- Services showcase
- AI & Blockchain consultancy information
- WhatsApp and social media integration

## 🛠️ Tech Stack

**Frontend:**
- React 19
- Vite 7
- Tailwind CSS 4
- Framer Motion

**Backend:**
- Node.js
- Express 5
- Vercel Serverless Functions

## 📧 Email Configuration

The contact form uses Vercel serverless functions with Hostinger SMTP.

**Environment Variables (Vercel):**
- `SMTP_HOST` - smtp.hostinger.com
- `SMTP_PORT` - 465
- `SMTP_USER` - info@metameshlabs.com
- `SMTP_PASS` - Your Hostinger email password
- `RECIPIENT_EMAIL` - info@metameshlabs.com

## 🚀 Deployment

- **Frontend**: Deployed on Vercel
- **Backend**: Deployed on Render
- **Domain**: metameshlabs.com

## 📞 Contact

- **Email**: info@metameshlabs.com
- **Phone**: +971 56 655 0121
- **Website**: https://metameshlabs.com

---

© 2025 MetaMesh Labs. All rights reserved.
