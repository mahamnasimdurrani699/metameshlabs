# ⚡ Quick Start Guide

The fastest way to get MetaMesh Labs running locally and deployed.

## 🏃‍♂️ Local Setup (5 minutes)

### Backend Setup
```bash
cd backend
npm install

# Create .env file
copy env.template .env
# Edit .env with your email credentials

# Start backend
npm start
```
✅ Backend running on http://localhost:5000

### Frontend Setup
```bash
cd frontend
npm install

# Create .env file
copy env.template .env
# Edit .env: VITE_API_URL=http://localhost:5000

# Start frontend
npm run dev
```
✅ Frontend running on http://localhost:5173

---

## 🚀 Deploy to Production (10 minutes)

### Step 1: Backend to Render

1. Push code to GitHub:
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. Go to [Render Dashboard](https://dashboard.render.com/)
3. Click "New +" → "Web Service"
4. Connect your repository
5. Configure:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
6. Add Environment Variables:
   - `NODE_ENV` = `production`
   - `PORT` = `5000`
   - `EMAIL_USER` = `your-email@domain.com`
   - `EMAIL_PASS` = `your-password`
   - `FRONTEND_URL` = (leave empty)
7. Click "Create Web Service"
8. Copy your backend URL: `https://_____.onrender.com`

### Step 2: Frontend to Vercel

#### Using Vercel CLI (Fastest):
```bash
cd frontend

# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod

# Add environment variable when prompted:
# VITE_API_URL = https://your-backend.onrender.com
```

#### Using Vercel Dashboard:
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Import your repository
4. Configure:
   - **Framework**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Add Environment Variable:
   - `VITE_API_URL` = `https://your-backend.onrender.com`
6. Click "Deploy"
7. Copy your frontend URL: `https://_____.vercel.app`

### Step 3: Update Backend CORS

1. Go back to Render Dashboard
2. Find your backend service → Environment
3. Update `FRONTEND_URL` = `https://your-frontend.vercel.app`
4. Save (auto-redeploys)

---

## ✅ Test Everything

Visit your frontend URL and test:

- [ ] All sections load
- [ ] Images display correctly
- [ ] Contact form works
- [ ] Emails are received
- [ ] WhatsApp button works
- [ ] Mobile responsive

---

## 🔄 Update Your Deployment

### Update Frontend:
```bash
cd frontend
git add .
git commit -m "Update frontend"
git push origin main
```
Vercel auto-deploys! ✨

### Update Backend:
```bash
cd backend
git add .
git commit -m "Update backend"
git push origin main
```
Render auto-deploys! ✨

---

## 🆘 Common Issues

**Issue**: Contact form not working
```bash
# Check backend logs in Render Dashboard
# Verify environment variables are correct
# Test backend endpoint: https://your-backend.onrender.com/health
```

**Issue**: Images not loading
```bash
# Check imports in components
# Rebuild frontend: npm run build
# Redeploy on Vercel
```

**Issue**: CORS errors
```bash
# Ensure FRONTEND_URL in Render matches Vercel URL exactly
# Format: https://yoursite.vercel.app (no trailing slash)
# Redeploy backend after updating
```

---

## 📚 More Information

- **Full Deployment Guide**: [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Deployment Checklist**: [PRE-DEPLOYMENT-CHECKLIST.md](./PRE-DEPLOYMENT-CHECKLIST.md)
- **Project Documentation**: [README.md](./README.md)

---

## 🎯 Environment Variables Quick Reference

### Backend (.env)
```env
PORT=5000
EMAIL_USER=info@metameshlabs.com
EMAIL_PASS=your-secure-password
FRONTEND_URL=https://metameshlabs.vercel.app
```

### Frontend (.env)
```env
# Local
VITE_API_URL=http://localhost:5000

# Production (Vercel)
VITE_API_URL=https://metameshlabs-backend.onrender.com
```

---

## 🎉 You're Done!

Your MetaMesh Labs website is now live! 🚀

**Your URLs:**
- 🌐 Frontend: https://_____.vercel.app
- ⚙️ Backend: https://_____.onrender.com

Share your website and start getting inquiries! 💼

