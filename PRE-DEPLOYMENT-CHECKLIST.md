# ✅ Pre-Deployment Checklist

Use this checklist to ensure your MetaMesh Labs project is ready for deployment.

## 📋 Before You Start

- [ ] Git repository created and code pushed
- [ ] Render account created
- [ ] Vercel account created
- [ ] Email SMTP credentials ready (Hostinger or Gmail)

---

## 🔧 Backend Checklist

### Environment Setup
- [ ] Created `.env` file in `backend/` folder
- [ ] Added `EMAIL_USER` with valid email address
- [ ] Added `EMAIL_PASS` with email password
- [ ] Added `PORT=5000`
- [ ] `.env` file is in `.gitignore` (already done)

### Local Testing
- [ ] Run `npm install` in backend folder
- [ ] Run `npm start` successfully
- [ ] Backend runs on `http://localhost:5000`
- [ ] Visit `http://localhost:5000/` - Returns JSON: `{"status":"ok"}`
- [ ] Visit `http://localhost:5000/health` - Returns health status

### Email Testing
- [ ] Test email by sending a request to `/send-query` endpoint
- [ ] Verify owner email is received
- [ ] Verify user confirmation email is received

### Deployment Files
- [ ] `render.yaml` exists in backend folder ✅
- [ ] `package.json` has correct start script ✅
- [ ] `.gitignore` excludes `.env` and `node_modules` ✅

---

## 🎨 Frontend Checklist

### Environment Setup
- [ ] Created `.env` file in `frontend/` folder
- [ ] Added `VITE_API_URL=http://localhost:5000` for local dev
- [ ] `.env` file is in `.gitignore` (already done)

### Assets Check
- [ ] All images present in `src/assets/` folder
- [ ] `hero background.mp4` video file exists
- [ ] All image imports use correct paths ✅
- [ ] No hardcoded `src/assets/` paths in JSX ✅

### Local Testing
- [ ] Run `npm install` in frontend folder
- [ ] Run `npm run dev` successfully
- [ ] Frontend opens at `http://localhost:5173`
- [ ] All sections load properly:
  - [ ] Hero with video background
  - [ ] About Us section
  - [ ] Services carousel
  - [ ] Why Choose Us section
  - [ ] AI Marketing cards
  - [ ] Testimonials
  - [ ] Call to Action
  - [ ] Contact Section

### Functionality Testing
- [ ] Navigation scrolls to sections smoothly
- [ ] All animations work properly
- [ ] Services carousel swipes correctly
- [ ] Contact form opens
- [ ] Contact form validates fields
- [ ] Contact form submits successfully
- [ ] Success/error messages display
- [ ] WhatsApp button works
- [ ] Instagram link works
- [ ] Email link works
- [ ] Phone link works

### Build Testing
- [ ] Run `npm run build` successfully
- [ ] No build errors
- [ ] Check `dist/` folder created
- [ ] Run `npm run preview` to test production build

### Deployment Files
- [ ] `vercel.json` exists in frontend folder ✅
- [ ] `vite.config.js` optimized for production ✅
- [ ] `.gitignore` excludes `.env`, `node_modules`, and `dist` ✅

---

## 🚀 Deployment Steps

### 1. Deploy Backend to Render

- [ ] Push code to Git repository
- [ ] Create Web Service on Render
- [ ] Connect Git repository
- [ ] Set Root Directory to `backend`
- [ ] Set Build Command to `npm install`
- [ ] Set Start Command to `npm start`
- [ ] Add environment variables in Render:
  - [ ] `NODE_ENV=production`
  - [ ] `PORT=5000`
  - [ ] `EMAIL_USER=<your-email>`
  - [ ] `EMAIL_PASS=<your-password>`
  - [ ] `FRONTEND_URL=` (leave empty for now)
- [ ] Deploy backend
- [ ] Wait for deployment to complete
- [ ] Copy backend URL (e.g., `https://metameshlabs-backend.onrender.com`)
- [ ] Test endpoints:
  - [ ] `https://your-backend.onrender.com/` - Returns status OK
  - [ ] `https://your-backend.onrender.com/health` - Returns healthy

### 2. Deploy Frontend to Vercel

- [ ] Ensure code is pushed to Git
- [ ] Import project on Vercel
- [ ] Set Framework to Vite
- [ ] Set Root Directory to `frontend`
- [ ] Add environment variable:
  - [ ] `VITE_API_URL=https://your-backend.onrender.com`
- [ ] Deploy frontend
- [ ] Wait for deployment to complete
- [ ] Copy frontend URL (e.g., `https://metameshlabs.vercel.app`)

### 3. Update Backend CORS

- [ ] Go to Render Dashboard
- [ ] Find backend service
- [ ] Go to Environment variables
- [ ] Update `FRONTEND_URL` to your Vercel URL
- [ ] Wait for automatic redeploy

---

## 🧪 Post-Deployment Testing

### Frontend Tests
- [ ] Visit your Vercel URL
- [ ] Check all sections load correctly
- [ ] Verify all images display properly
- [ ] Test navigation between sections
- [ ] Check mobile responsiveness
- [ ] Test on different browsers (Chrome, Firefox, Safari)

### Contact Form Tests
- [ ] Open contact form
- [ ] Fill in all fields
- [ ] Submit form
- [ ] Verify success message appears
- [ ] Check owner email inbox
- [ ] Check user email inbox (use your own email for testing)

### Cross-Browser Testing
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on Edge

### Mobile Testing
- [ ] Test on mobile phone
- [ ] Check responsive design
- [ ] Test form submission on mobile
- [ ] Check all touch interactions

### Performance Testing
- [ ] Run Lighthouse audit
- [ ] Check page load speed
- [ ] Verify images load correctly
- [ ] Check for console errors

---

## 🐛 Troubleshooting

If contact form doesn't work:
1. Check browser console for errors
2. Verify `VITE_API_URL` is correct in Vercel
3. Verify email credentials in Render
4. Check `FRONTEND_URL` matches Vercel URL exactly
5. Review backend logs in Render

If images don't load:
1. Check all images are in `src/assets/`
2. Verify imports are correct
3. Clear browser cache
4. Rebuild and redeploy

If CORS errors appear:
1. Ensure `FRONTEND_URL` in Render is correct
2. Include `https://` protocol
3. No trailing slash
4. Redeploy backend after changes

---

## 📊 Final Verification

- [ ] All functionalities working
- [ ] No console errors
- [ ] No server errors in logs
- [ ] Images load properly
- [ ] Animations smooth
- [ ] Forms submit successfully
- [ ] Emails received correctly
- [ ] Mobile responsive
- [ ] Fast page load
- [ ] SEO optimized

---

## 🎉 Ready for Production!

Once all items are checked, your MetaMesh Labs website is ready to go live!

**Share your URLs:**
- Frontend: `https://_____.vercel.app`
- Backend: `https://_____.onrender.com`

For ongoing maintenance, see [DEPLOYMENT.md](./DEPLOYMENT.md) for update procedures.

---

## 📞 Need Help?

Refer to:
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Detailed deployment guide
- [backend/ENV_SETUP.md](./backend/ENV_SETUP.md) - Backend environment setup
- [frontend/ENV_SETUP.md](./frontend/ENV_SETUP.md) - Frontend environment setup
- [README.md](./README.md) - Project overview and local development

Good luck with your deployment! 🚀

