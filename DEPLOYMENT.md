# 🚀 Deployment Guide - MetaMesh Labs

Complete guide to deploy your MetaMesh Labs project with Backend on Render and Frontend on Vercel.

## 📋 Prerequisites

- [Render Account](https://render.com) (for backend)
- [Vercel Account](https://vercel.com) (for frontend)
- Email account with SMTP access (Hostinger recommended)
- Git repository (GitHub, GitLab, or Bitbucket)

---

## 🔧 Backend Deployment (Render)

### Step 1: Prepare Environment Variables

Create a `.env` file in the `backend` folder with the following variables:

```env
PORT=5000
EMAIL_USER=your-email@yourdomain.com
EMAIL_PASS=your-email-password
FRONTEND_URL=https://your-frontend-domain.vercel.app
```

⚠️ **Important**: 
- `EMAIL_USER`: Your email address (must be from Hostinger or update SMTP settings)
- `EMAIL_PASS`: Your email password or app-specific password
- `FRONTEND_URL`: Will be updated after deploying frontend

### Step 2: Deploy to Render

1. **Push your code to Git**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Create a New Web Service on Render**:
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click "New +" → "Web Service"
   - Connect your Git repository
   - Select the repository and branch

3. **Configure Build Settings**:
   - **Name**: `metameshlabs-backend`
   - **Region**: Choose closest to your users
   - **Branch**: `main`
   - **Root Directory**: `backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

4. **Add Environment Variables**:
   In the "Environment" section, add:
   - `NODE_ENV` = `production`
   - `PORT` = `5000`
   - `EMAIL_USER` = `your-email@yourdomain.com`
   - `EMAIL_PASS` = `your-email-password`
   - `FRONTEND_URL` = (leave empty for now, will update after frontend deployment)

5. **Deploy**:
   - Click "Create Web Service"
   - Wait for deployment to complete
   - Copy your backend URL (e.g., `https://metameshlabs-backend.onrender.com`)

### Step 3: Test Backend

Visit your backend URL to check if it's working:
- `https://your-backend-url.onrender.com/` → Should return: `{"status":"ok","message":"MetaMesh Labs API is running"}`
- `https://your-backend-url.onrender.com/health` → Should return: `{"status":"healthy","timestamp":"..."}`

---

## 🎨 Frontend Deployment (Vercel)

### Step 1: Prepare Environment Variables

Create a `.env` file in the `frontend` folder:

```env
VITE_API_URL=https://your-backend-url.onrender.com
```

Replace `your-backend-url.onrender.com` with your actual Render backend URL from the previous step.

### Step 2: Deploy to Vercel

#### Option A: Using Vercel CLI (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Navigate to frontend folder**:
   ```bash
   cd frontend
   ```

3. **Login to Vercel**:
   ```bash
   vercel login
   ```

4. **Deploy**:
   ```bash
   vercel --prod
   ```

5. **Add Environment Variable**:
   - When prompted or in Vercel Dashboard
   - Add: `VITE_API_URL` = `https://your-backend-url.onrender.com`

#### Option B: Using Vercel Dashboard

1. **Push your code to Git** (if not already done)

2. **Import Project**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New..." → "Project"
   - Import your Git repository
   - Select your repository

3. **Configure Project**:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

4. **Add Environment Variables**:
   - Click "Environment Variables"
   - Add: `VITE_API_URL` = `https://your-backend-url.onrender.com`
   - Apply to: Production, Preview, Development

5. **Deploy**:
   - Click "Deploy"
   - Wait for deployment to complete
   - Copy your frontend URL (e.g., `https://metameshlabs.vercel.app`)

### Step 3: Update Backend CORS

1. Go back to Render Dashboard
2. Find your backend service
3. Go to "Environment" section
4. Update `FRONTEND_URL` to your Vercel frontend URL
5. Save changes (service will auto-redeploy)

---

## ✅ Post-Deployment Checklist

### Test All Functionalities:

1. **Homepage**:
   - [ ] Hero section loads with video background
   - [ ] Navigation works smoothly
   - [ ] All sections are visible

2. **About Section**:
   - [ ] Image loads correctly
   - [ ] Animations work properly

3. **Services Section**:
   - [ ] All service cards display correctly
   - [ ] Images load properly

4. **Contact Form**:
   - [ ] Form opens when clicking "Send a Query"
   - [ ] All fields are required
   - [ ] Form submits successfully
   - [ ] Success/error messages display
   - [ ] Emails are received (check both owner and user emails)

5. **WhatsApp Integration**:
   - [ ] WhatsApp button redirects correctly

6. **Social Media Links**:
   - [ ] Instagram link works

7. **Mobile Responsiveness**:
   - [ ] Test on mobile devices
   - [ ] All images scale properly
   - [ ] Navigation works on mobile

---

## 🐛 Common Issues & Solutions

### Issue 1: Contact Form Not Working

**Problem**: Form submission fails or emails not received

**Solutions**:
1. Check backend logs in Render Dashboard
2. Verify `VITE_API_URL` in Vercel environment variables
3. Verify `EMAIL_USER` and `EMAIL_PASS` in Render
4. Check CORS settings - ensure `FRONTEND_URL` matches your Vercel URL exactly
5. Test backend endpoint directly: `POST https://your-backend.onrender.com/send-query`

### Issue 2: Images Not Loading

**Problem**: Assets/images show as broken

**Solutions**:
1. Verify all images are in `frontend/src/assets/` folder
2. Check import statements use correct paths
3. Clear browser cache
4. Rebuild and redeploy: `npm run build` then push

### Issue 3: CORS Errors

**Problem**: Browser console shows CORS errors

**Solutions**:
1. Ensure `FRONTEND_URL` in Render matches your Vercel URL exactly
2. Include protocol: `https://your-site.vercel.app` (no trailing slash)
3. Redeploy backend after updating environment variable

### Issue 4: Build Fails on Vercel

**Problem**: Deployment fails during build

**Solutions**:
1. Check build logs in Vercel
2. Run `npm run build` locally to test
3. Ensure all dependencies are in `package.json`
4. Check Node.js version compatibility

### Issue 5: Render Service Sleeping

**Problem**: Backend slow to respond on first request

**Solutions**:
1. Render free tier services sleep after inactivity
2. First request may take 30-60 seconds
3. Consider upgrading to paid plan for always-on service
4. Or implement a ping service to keep it awake

---

## 🔄 Updating Your Deployment

### Update Frontend:
```bash
cd frontend
git add .
git commit -m "Update frontend"
git push origin main
```
Vercel will auto-deploy on push.

### Update Backend:
```bash
cd backend
git add .
git commit -m "Update backend"
git push origin main
```
Render will auto-deploy on push.

### Manual Deployment:
- **Vercel**: Dashboard → Your Project → Deployments → Redeploy
- **Render**: Dashboard → Your Service → Manual Deploy → Deploy latest commit

---

## 📊 Environment Variables Reference

### Backend (.env)
```env
PORT=5000
EMAIL_USER=info@metameshlabs.com
EMAIL_PASS=your-secure-password
FRONTEND_URL=https://metameshlabs.vercel.app
NODE_ENV=production
```

### Frontend (.env)
```env
VITE_API_URL=https://metameshlabs-backend.onrender.com
```

---

## 🔒 Security Best Practices

1. **Never commit `.env` files** - They're in `.gitignore`
2. **Use strong passwords** for email
3. **Enable 2FA** on Render and Vercel accounts
4. **Rotate secrets** periodically
5. **Monitor logs** for suspicious activity
6. **Keep dependencies updated**: `npm audit fix`

---

## 📈 Performance Optimization

### Already Implemented:
- ✅ Code splitting with lazy loading
- ✅ Image optimization
- ✅ Asset caching headers
- ✅ Minification and compression
- ✅ React memoization

### Additional Recommendations:
- Consider using a CDN for assets
- Enable Vercel Analytics
- Monitor Core Web Vitals
- Compress images further if needed
- Use WebP format for images

---

## 📞 Support

If you encounter issues:
1. Check the console logs (browser & server)
2. Review this deployment guide
3. Check Render and Vercel status pages
4. Review the Common Issues section above

---

## 🎉 Deployment Complete!

Your MetaMesh Labs website is now live! Share your URLs:
- **Frontend**: `https://your-site.vercel.app`
- **Backend**: `https://your-backend.onrender.com`

Remember to test all features thoroughly before sharing with clients!

