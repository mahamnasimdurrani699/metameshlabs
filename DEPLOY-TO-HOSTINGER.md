# 🚀 Quick Guide: Deploy to Hostinger NOW

**Backend:** Stays on Render ✅  
**Frontend:** Deploy to Hostinger ✅

---

## ⚡ **STEP 1: Build Frontend (2 minutes)**

Open terminal in your project folder:

```bash
cd frontend
npm run build
```

**Wait for:** `✓ built in Xs` message

This creates `frontend/dist` folder with all production files.

---

## 📤 **STEP 2: Upload to Hostinger (5 minutes)**

### **Method 1: File Manager (Easiest)**

1. **Login:** https://hpanel.hostinger.com
2. **Click:** "File Manager"
3. **Navigate to:** `public_html` folder
4. **Delete:** All existing files (backup first if needed)
5. **Upload:** ALL files from `frontend/dist` folder:
   - Select `index.html`
   - Select `assets` folder (entire folder)
   - Upload everything
6. **Upload .htaccess:**
   - Copy `frontend/.htaccess` file
   - Upload to `public_html` root
   - Make sure it's named `.htaccess` (not `.htaccess.txt`)

### **Method 2: FTP (Faster)**

1. **Get FTP credentials** from hPanel → FTP Accounts
2. **Connect** with FileZilla/WinSCP
3. **Upload** all files from `frontend/dist` to `public_html`
4. **Upload** `frontend/.htaccess` to `public_html`

---

## ✅ **STEP 3: Test (1 minute)**

1. **Visit:** `https://yourdomain.com`
2. **Check:**
   - Website loads ✅
   - Images display ✅
   - Contact form works ✅

---

## 🔒 **STEP 4: Enable SSL (2 minutes)**

1. **In hPanel:** Go to "SSL" section
2. **Click:** "Install SSL" or "Let's Encrypt"
3. **Select:** Your domain
4. **Click:** "Install"
5. **Wait:** 5-10 minutes

---

## 🎉 **DONE!**

Your website is live on Hostinger!

**Frontend:** `https://yourdomain.com`  
**Backend:** `https://metameshlabs-backend.onrender.com`

---

## 🔄 **Updating Later**

When you make changes:

```bash
cd frontend
npm run build
```

Then upload new `dist` folder to Hostinger.

---

**Need detailed guide?** See `frontend/HOSTINGER-DEPLOY.md`

