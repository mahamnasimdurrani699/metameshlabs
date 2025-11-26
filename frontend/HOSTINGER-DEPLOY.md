# 🚀 Deploy Frontend to Hostinger - Step by Step

Your backend stays on Render, frontend goes to Hostinger domain.

---

## ✅ **Pre-Deployment Checklist**

- [x] Project configured for Hostinger
- [x] .htaccess file created
- [x] API URL configured
- [ ] Build frontend
- [ ] Upload to Hostinger

---

## 📦 **Step 1: Build Frontend**

Open terminal in your project folder and run:

```bash
cd frontend
npm run build
```

This creates a `dist` folder with all production files.

**Wait for:** "✓ built in Xs" message

---

## 📤 **Step 2: Upload to Hostinger**

### **Option A: Using File Manager (Easier)**

1. **Login to Hostinger hPanel**
   - Go to: https://hpanel.hostinger.com
   - Login with your credentials

2. **Open File Manager**
   - Click **"File Manager"** in hPanel
   - Navigate to **`public_html`** folder
   - **OR** navigate to your domain folder (e.g., `public_html/yourdomain.com`)

3. **Clear Existing Files** (if any)
   - Select all files in `public_html`
   - Click **"Delete"** (backup first if needed)

4. **Upload Build Files**
   - Click **"Upload"** button
   - Select **ALL files** from `frontend/dist` folder:
     - `index.html`
     - `assets` folder (entire folder)
     - Any other files/folders
   - Wait for upload to complete

5. **Upload .htaccess**
   - Upload `frontend/.htaccess` file to `public_html` root
   - Make sure it's named exactly `.htaccess` (not `.htaccess.txt`)

### **Option B: Using FTP (Faster for Large Files)**

1. **Get FTP Credentials**
   - In hPanel → **"FTP Accounts"**
   - Note: Host, Username, Password

2. **Use FTP Client** (FileZilla, WinSCP, etc.)
   - Connect to your Hostinger FTP
   - Navigate to `public_html`
   - Upload all files from `frontend/dist`
   - Upload `.htaccess` file

---

## ⚙️ **Step 3: Verify API URL**

Before building, make sure `frontend/.env` has:

```env
VITE_API_URL=https://metameshlabs-backend.onrender.com
```

**If you changed it, rebuild:**
```bash
cd frontend
npm run build
```

Then upload the new `dist` folder again.

---

## ✅ **Step 4: Test Your Website**

1. **Visit your domain:** `https://yourdomain.com`
2. **Check:**
   - [ ] Website loads
   - [ ] All images display
   - [ ] Navigation works
   - [ ] Contact form opens
   - [ ] Contact form submits successfully

---

## 🔧 **Step 5: Configure Domain (If Not Done)**

If your domain isn't pointing to Hostinger yet:

1. **In Hostinger hPanel:**
   - Go to **"Domains"**
   - Click **"Manage"** on your domain
   - Check **"Nameservers"** are set to Hostinger

2. **Or Update DNS:**
   - Point A record to Hostinger IP
   - Point CNAME www to your domain

---

## 🔒 **Step 6: Enable SSL (HTTPS)**

1. **In Hostinger hPanel:**
   - Go to **"SSL"** section
   - Click **"Install SSL"** or **"Let's Encrypt"**
   - Select your domain
   - Click **"Install"**

Wait 5-10 minutes for SSL to activate.

---

## 🐛 **Troubleshooting**

### **Issue: Website shows blank page**
- Check if `index.html` is in `public_html` root
- Check browser console for errors (F12)
- Verify `.htaccess` file is uploaded

### **Issue: 404 errors on page refresh**
- Make sure `.htaccess` file is uploaded correctly
- Check File Manager → Show hidden files
- Verify `.htaccess` is in root, not in subfolder

### **Issue: Images not loading**
- Check `assets` folder is uploaded completely
- Verify file paths in browser console
- Check file permissions (should be 644)

### **Issue: Contact form not working**
- Check browser console (F12) for API errors
- Verify `VITE_API_URL` in `.env` is correct
- Rebuild frontend if you changed API URL

### **Issue: Styles not loading**
- Clear browser cache: `Ctrl + Shift + R`
- Check `assets` folder uploaded correctly
- Verify CSS files in `assets` folder

---

## 🔄 **Updating Your Website**

When you make changes:

1. **Update code locally**
2. **Rebuild:**
   ```bash
   cd frontend
   npm run build
   ```
3. **Upload new `dist` folder** to Hostinger
4. **Clear browser cache** and test

---

## 📝 **File Structure on Hostinger**

Your `public_html` should look like:

```
public_html/
├── index.html
├── .htaccess
└── assets/
    ├── index-[hash].js
    ├── index-[hash].css
    └── [other asset files]
```

---

## ✅ **Final Checklist**

- [ ] Frontend built successfully
- [ ] All files uploaded to `public_html`
- [ ] `.htaccess` file uploaded
- [ ] Website loads on your domain
- [ ] SSL certificate installed
- [ ] Contact form works
- [ ] All images display
- [ ] Navigation works

---

## 🎉 **You're Done!**

Your website is now live on Hostinger!

**Frontend:** `https://yourdomain.com`
**Backend:** `https://metameshlabs-backend.onrender.com`

---

**Need help?** Check the troubleshooting section or contact Hostinger support!

