# 🌐 MetaMesh Labs - AI & Blockchain Consultancy

A modern, responsive website for MetaMesh Labs showcasing AI integration, digital transformation, and blockchain consultancy services.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git

### Local Development

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd meta-main
   ```

2. **Backend Setup**:
   ```bash
   cd backend
   npm install
   
   # Copy environment template and configure
   copy env.template .env
   # Edit .env with your email credentials
   
   npm start
   ```
   Backend runs on: `http://localhost:5000`

3. **Frontend Setup** (in a new terminal):
   ```bash
   cd frontend
   npm install
   
   # Copy environment template and configure
   copy env.template .env
   # Edit .env with backend URL
   
   npm run dev
   ```
   Frontend runs on: `http://localhost:5173`

## 📁 Project Structure

```
meta-main/
├── backend/
│   ├── server.js              # Express server with email functionality
│   ├── package.json
│   ├── env.template           # Environment variables template
│   ├── ENV_SETUP.md          # Detailed environment setup guide
│   └── render.yaml           # Render deployment config
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx           # Main app component
│   │   ├── components/       # React components
│   │   │   ├── Nav/
│   │   │   ├── hero/
│   │   │   ├── AboutUs/
│   │   │   ├── Services/
│   │   │   ├── WhyChooseUs/
│   │   │   ├── AiMarketing/
│   │   │   ├── Testimonials/
│   │   │   ├── CallToAction/
│   │   │   └── ContactSection/
│   │   └── assets/           # Images and videos
│   ├── package.json
│   ├── env.template          # Environment variables template
│   ├── ENV_SETUP.md         # Detailed environment setup guide
│   ├── vercel.json          # Vercel deployment config
│   └── vite.config.js       # Vite configuration
│
├── DEPLOYMENT.md             # Complete deployment guide
└── README.md                # This file
```

## ✨ Features

- **🎯 Modern Hero Section** - Video background with smooth animations
- **📊 Services Showcase** - Interactive swiper carousel
- **🤖 AI Marketing Cards** - Highlighting AI automation capabilities
- **💬 Contact Form** - Fully functional with email notifications
- **📱 Responsive Design** - Mobile-first approach
- **⚡ Optimized Performance** - Code splitting, lazy loading, and caching
- **🎨 Smooth Animations** - Framer Motion integration
- **🔗 Social Integration** - WhatsApp and Instagram links

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI framework
- **Vite 7** - Build tool
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animations
- **Swiper** - Carousel component

### Backend
- **Node.js** - Runtime
- **Express 5** - Web framework
- **Nodemailer** - Email functionality
- **CORS** - Cross-origin resource sharing

## 🚀 Deployment

### Backend → Render
See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete step-by-step guide.

Quick steps:
1. Push code to GitHub
2. Create new Web Service on Render
3. Connect repository
4. Configure environment variables
5. Deploy!

### Frontend → Vercel
See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete step-by-step guide.

Quick steps:
1. Push code to GitHub
2. Import project on Vercel
3. Configure environment variables
4. Deploy!

## 📧 Email Configuration

The contact form uses Nodemailer with SMTP. Default configuration is for Hostinger.

**Hostinger Settings**:
- Host: `smtp.hostinger.com`
- Port: `465`
- Secure: `true`

For other providers (Gmail, SendGrid, etc.), see `backend/ENV_SETUP.md`.

## 🔒 Environment Variables

### Backend
```env
PORT=5000
EMAIL_USER=your-email@yourdomain.com
EMAIL_PASS=your-email-password
FRONTEND_URL=https://your-frontend-domain.vercel.app
```

### Frontend
```env
VITE_API_URL=http://localhost:5000
```

⚠️ **Important**: Never commit `.env` files. Use `env.template` files as reference.

## 📝 Available Scripts

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server (if nodemon installed)

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🐛 Common Issues

### Contact Form Not Working
1. Check backend is running
2. Verify `VITE_API_URL` is correct
3. Check email credentials in backend `.env`
4. Verify CORS configuration

### Images Not Loading
1. Ensure images are in `frontend/src/assets/`
2. Check import statements
3. Clear browser cache

### Build Fails
1. Run `npm install` in both folders
2. Check Node.js version (v18+)
3. Clear `node_modules` and reinstall

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is proprietary software owned by MetaMesh Labs.

## 📞 Contact

- **Email**: info@metameshlabs.com
- **Phone**: +971 56 655 0121
- **Instagram**: [@metameshlabs](https://www.instagram.com/metameshlabs)

## 🎉 Acknowledgments

- Built with React and Vite
- Styled with Tailwind CSS
- Animations by Framer Motion
- Hosting by Render and Vercel

---

**Ready to deploy?** Check out [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions!

