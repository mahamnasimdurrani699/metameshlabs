# 🚀 Deploy Now - Step by Step

Follow these exact steps to deploy your MetaMesh Labs website.

---

## ⚡ STEP 1: Push to GitHub (5 minutes)

### 1.1 Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `metameshlabs` (or your choice)
3. Make it **Public** or **Private**
4. **DO NOT** initialize with README (we already have files)
5. Click "Create repository"

### 1.2 Push Your Code
Copy the commands from GitHub (they'll look like this):

```bash
git remote add origin https://github.com/YOUR-USERNAME/metameshlabs.git
git branch -M main
git add .
git commit -m "Initial commit - Ready for deployment"
git push -u origin main
```

---

## 🔧 STEP 2: Deploy Backend to Render (5 minutes)

### 2.1 Create Render Account
1. Go to https://render.com
2. Sign up with GitHub
3. Authorize Render to access your repositories

### 2.2 Create Web Service
1. Click "New +" → "Web Service"
2. Connect your GitHub repository
3. Select your `metameshlabs` repository

### 2.3 Configure Service
Fill in these settings:

**Basic Settings:**
- **Name**: `metameshlabs-backend` (or your choice)
- **Region**: Choose closest to you (e.g., Oregon, Frankfurt)
- **Branch**: `main`
- **Root Directory**: `backend`
- **Runtime**: `Node`

**Build Settings:**
- **Build Command**: `npm install`
- **Start Command**: `npm start`

**Plan:**
- Select **Free** (for testing) or **Starter** ($7/month for production)

### 2.4 Add Environment Variables
Click "Advanced" → Add these environment variables:

```
NODE_ENV = production
PORT = 5000
EMAIL_USER = your-email@yourdomain.com
EMAIL_PASS = your-email-password
FRONTEND_URL = (leave empty for now, we'll update this)
```

**IMPORTANT:** Replace with your actual email credentials!

### 2.5 Deploy!
1. Click "Create Web Service"
2. Wait 2-3 minutes for deployment
3. You'll see build logs
4. Once done, copy your backend URL: `https://metameshlabs-backend.onrender.com`

### 2.6 Test Backend
Open in browser: `https://your-backend-url.onrender.com/`

Should see:
```json
{"status":"ok","message":"MetaMesh Labs API is running"}
```

✅ Backend deployed!

---

## 🎨 STEP 3: Deploy Frontend to Vercel (3 minutes)

### Option A: Using Vercel Dashboard (Easier)

### 3.1 Create Vercel Account
1. Go to https://vercel.com/signup
2. Sign up with GitHub
3. Authorize Vercel

### 3.2 Import Project
1. Click "Add New..." → "Project"
2. Import your GitHub repository
3. Select `metameshlabs`

### 3.3 Configure Project
**Framework Preset:** Vite (should auto-detect)

**Root Directory:** `frontend` ← IMPORTANT!

**Build Settings:**
- Build Command: `npm run build` (auto-filled)
- Output Directory: `dist` (auto-filled)
- Install Command: `npm install` (auto-filled)

### 3.4 Add Environment Variable
Click "Environment Variables" tab:

```
Name: VITE_API_URL
Value: https://your-backend-url.onrender.com
```

Replace with YOUR actual Render backend URL!

Apply to: **All** (Production, Preview, Development)

### 3.5 Deploy!
1. Click "Deploy"
2. Wait 2-3 minutes
3. Once done, copy your frontend URL: `https://metameshlabs.vercel.app`

✅ Frontend deployed!

---

## 🔄 STEP 4: Update Backend CORS (1 minute)

### 4.1 Go Back to Render
1. Go to https://dashboard.render.com
2. Click on your backend service
3. Go to "Environment" tab

### 4.2 Update FRONTEND_URL
1. Find `FRONTEND_URL` variable
2. Edit it to your Vercel URL: `https://metameshlabs.vercel.app`
3. Click "Save Changes"
4. Service will automatically redeploy (takes 1-2 minutes)

✅ CORS configured!

---

## ✅ STEP 5: Test Everything (5 minutes)

### 5.1 Visit Your Website
Open your Vercel URL: `https://metameshlabs.vercel.app`

### 5.2 Test Checklist
- [ ] Website loads completely
- [ ] All images display
- [ ] Video background plays
- [ ] Navigation scrolls smoothly
- [ ] Click "Send a Query" button
- [ ] Fill in contact form with YOUR email
- [ ] Submit form
- [ ] Check for success message
- [ ] Check your email inbox (owner and user emails)

### 5.3 Test on Mobile
- [ ] Open on phone
- [ ] Test form submission
- [ ] Check responsiveness

---

## 🎉 SUCCESS!

If all tests pass, your website is LIVE! 🚀

**Your URLs:**
- 🌐 Website: `https://metameshlabs.vercel.app`
- ⚙️ API: `https://metameshlabs-backend.onrender.com`

---

## 🐛 Troubleshooting

### Problem: Contact form doesn't work

**Solution 1:** Check backend logs in Render
1. Go to Render Dashboard
2. Click your service
3. Click "Logs" tab
4. Look for errors

**Solution 2:** Verify environment variables
1. In Render: Check `EMAIL_USER`, `EMAIL_PASS`, `FRONTEND_URL`
2. In Vercel: Check `VITE_API_URL`
3. Make sure URLs match exactly (no trailing slashes)

**Solution 3:** Wait for backend to wake up
- Render free tier sleeps after 15 minutes
- First request takes 30-60 seconds to wake up
- Try again after waiting

### Problem: Images not loading

**Solution:** Redeploy frontend
1. Go to Vercel Dashboard
2. Click your project
3. Go to "Deployments"
4. Click "..." → "Redeploy"

### Problem: CORS errors

**Solution:** Check FRONTEND_URL
1. Go to Render Dashboard
2. Check `FRONTEND_URL` matches your Vercel URL exactly
3. Format: `https://yoursite.vercel.app` (no trailing /)
4. Save and wait for redeploy

---

## 🔄 Future Updates

### Update Frontend:
```bash
git add .
git commit -m "Update frontend"
git push origin main
```
Vercel auto-deploys in 1-2 minutes ✨

### Update Backend:
```bash
git add .
git commit -m "Update backend"
git push origin main
```
Render auto-deploys in 2-3 minutes ✨

---

## 📞 Need Help?

Refer to detailed guides:
- Full deployment guide: [DEPLOYMENT.md](./DEPLOYMENT.md)
- Pre-deployment checklist: [PRE-DEPLOYMENT-CHECKLIST.md](./PRE-DEPLOYMENT-CHECKLIST.md)
- Quick reference: [QUICK-START.md](./QUICK-START.md)

---

**Ready? Let's do this! 🚀**

