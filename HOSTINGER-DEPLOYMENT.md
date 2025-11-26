# 🚀 Deploy to Hostinger Domain - Complete Guide

Deploy your MetaMesh Labs website to your Hostinger domain.

---

## 📋 Prerequisites

- Hostinger account with domain
- Access to Hostinger hPanel (or cPanel)
- FTP credentials (if using shared hosting)
- SSH access (if using VPS)

---

## 🎯 Option 1: Hostinger Shared Hosting (Easier - Frontend Only)

**Best for:** Static React frontend only
**Limitation:** Backend must stay on Render (or use Hostinger VPS)

### **Step 1: Build Frontend**

```bash
cd frontend
npm run build
```

This creates a `dist` folder with production files.

### **Step 2: Upload to Hostinger**

1. **Login to Hostinger hPanel**
2. Go to **File Manager**
3. Navigate to **public_html** folder (or your domain folder)
4. **Delete** all existing files (or backup first)
5. **Upload** all files from `frontend/dist` folder:
   - Upload `index.html`
   - Upload `assets` folder
   - Upload all other files

### **Step 3: Update API URL**

Before building, update `frontend/.env`:

```env
VITE_API_URL=https://metameshlabs-backend.onrender.com
```

Then rebuild:
```bash
cd frontend
npm run build
```

### **Step 4: Configure .htaccess (for React Router)**

Create `public_html/.htaccess` file:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Result:** Frontend on Hostinger domain, backend stays on Render ✅

---

## 🎯 Option 2: Hostinger VPS (Full Stack - Recommended)

**Best for:** Both frontend and backend on your domain
**Requires:** VPS hosting plan

### **Step 1: Set Up VPS**

1. **Login to Hostinger hPanel**
2. Go to **VPS** section
3. Note your **IP address** and **SSH credentials**

### **Step 2: Connect via SSH**

```bash
ssh root@your-vps-ip
```

### **Step 3: Install Node.js**

```bash
# Update system
apt update && apt upgrade -y

# Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Verify installation
node --version
npm --version
```

### **Step 4: Install PM2 (Process Manager)**

```bash
npm install -g pm2
```

### **Step 5: Clone Your Repository**

```bash
# Install Git
apt install -y git

# Clone repository
cd /var/www
git clone https://github.com/mahamnasimdurrani699/metameshlabs.git
cd metameshlabs
```

### **Step 6: Set Up Backend**

```bash
cd backend
npm install

# Create .env file
nano .env
```

Add to `.env`:
```env
PORT=5000
EMAIL_USER=info@metameshlabs.com
EMAIL_PASS=MetaMesh@Lab01
FRONTEND_URL=https://yourdomain.com
NODE_ENV=production
```

Save: `Ctrl + X`, then `Y`, then `Enter`

### **Step 7: Start Backend with PM2**

```bash
pm2 start server.js --name metameshlabs-backend
pm2 save
pm2 startup
```

### **Step 8: Build and Set Up Frontend**

```bash
cd ../frontend
npm install

# Update .env
nano .env
```

Add:
```env
VITE_API_URL=https://yourdomain.com/api
```

Build:
```bash
npm run build
```

### **Step 9: Set Up Nginx (Reverse Proxy)**

```bash
# Install Nginx
apt install -y nginx

# Create Nginx config
nano /etc/nginx/sites-available/metameshlabs
```

Add this configuration:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    # Frontend (React app)
    location / {
        root /var/www/metameshlabs/frontend/dist;
        try_files $uri $uri/ /index.html;
        index index.html;
    }

    # Backend API
    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable site:
```bash
ln -s /etc/nginx/sites-available/metameshlabs /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
```

### **Step 10: Update Backend Routes**

Update `backend/server.js` to use `/api` prefix:

```javascript
// Change all routes to /api/*
app.post("/api/send-query", ...)
app.get("/api/health", ...)
```

### **Step 11: Install SSL Certificate (Let's Encrypt)**

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

Follow prompts to get free SSL certificate.

---

## 🎯 Option 3: Hostinger Cloud Hosting with Node.js

**Best for:** Easier Node.js setup without VPS management

### **Step 1: Enable Node.js in hPanel**

1. Login to **Hostinger hPanel**
2. Go to **Advanced** → **Node.js**
3. Click **"Create Node.js App"**
4. Select your domain
5. Choose Node.js version (20.x recommended)
6. Set **Application Root**: `/backend`
7. Set **Application URL**: `/api` (or subdomain like `api.yourdomain.com`)
8. Set **Application Startup File**: `server.js`

### **Step 2: Upload Backend Files**

1. Use **File Manager** or **FTP**
2. Upload all files from `backend` folder to your domain's root
3. Create `.env` file with your credentials

### **Step 3: Install Dependencies**

In hPanel Node.js section:
- Click **"Run NPM Install"**
- Or use SSH/terminal to run: `npm install`

### **Step 4: Deploy Frontend**

1. Build frontend: `npm run build` (locally)
2. Upload `dist` folder contents to `public_html`
3. Create `.htaccess` for React Router (see Option 1)

---

## 🔧 Quick Setup Script (VPS Option)

Save this as `setup.sh` and run on your VPS:

```bash
#!/bin/bash

# Update system
apt update && apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs git nginx

# Install PM2
npm install -g pm2

# Clone repo
cd /var/www
git clone https://github.com/mahamnasimdurrani699/metameshlabs.git
cd metameshlabs

# Setup backend
cd backend
npm install
pm2 start server.js --name backend
pm2 save
pm2 startup

# Setup frontend
cd ../frontend
npm install
npm run build

echo "Setup complete! Now configure Nginx and SSL."
```

---

## 📝 Environment Variables for Hostinger

### **Backend (.env):**

```env
PORT=5000
EMAIL_USER=info@metameshlabs.com
EMAIL_PASS=MetaMesh@Lab01
FRONTEND_URL=https://yourdomain.com
NODE_ENV=production
```

### **Frontend (.env):**

```env
VITE_API_URL=https://yourdomain.com/api
```

---

## ✅ Post-Deployment Checklist

- [ ] Frontend loads on your domain
- [ ] All images display correctly
- [ ] Contact form works
- [ ] Emails are received
- [ ] SSL certificate installed (HTTPS)
- [ ] Backend API responds
- [ ] CORS configured correctly

---

## 🔄 Updating Your Site

### **Frontend Updates:**
```bash
cd frontend
npm run build
# Upload dist folder to Hostinger
```

### **Backend Updates:**
```bash
cd backend
git pull
npm install
pm2 restart backend
```

---

## 🆘 Troubleshooting

### **Issue: 502 Bad Gateway**
- Check if backend is running: `pm2 status`
- Check Nginx config: `nginx -t`
- Check backend logs: `pm2 logs backend`

### **Issue: Frontend not loading**
- Check file permissions: `chmod -R 755 /var/www/metameshlabs`
- Check Nginx error logs: `tail -f /var/log/nginx/error.log`

### **Issue: API not working**
- Verify backend is running on port 5000
- Check CORS settings in backend
- Verify Nginx proxy_pass configuration

### **Issue: Emails not sending**
- Verify EMAIL_USER and EMAIL_PASS in .env
- Check backend logs: `pm2 logs backend`
- Test SMTP connection

---

## 📞 Recommended Setup

**For Best Performance:**
- ✅ **Frontend**: Hostinger Shared Hosting (fast, cheap)
- ✅ **Backend**: Keep on Render (free, reliable)
- ✅ **Domain**: Point to Hostinger

**For Full Control:**
- ✅ **Everything**: Hostinger VPS (more setup, full control)

---

## 🎯 Quick Decision Guide

**Choose Option 1 if:**
- You want easiest setup
- Backend can stay on Render
- Just need frontend on your domain

**Choose Option 2 if:**
- You want everything on your domain
- You have VPS hosting
- You're comfortable with SSH/command line

**Choose Option 3 if:**
- You have Hostinger Cloud hosting
- You want Node.js without VPS management
- You prefer GUI over command line

---

**Which option do you want to use?** Let me know and I'll provide detailed step-by-step instructions! 🚀

