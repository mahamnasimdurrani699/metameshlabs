# Frontend Environment Variables Setup

Create a `.env` file in the `frontend` folder with this variable:

```env
# Backend API URL
VITE_API_URL=http://localhost:5000
```

## For Different Environments:

### Local Development:
```env
VITE_API_URL=http://localhost:5000
```

### Production (After deploying backend to Render):
```env
VITE_API_URL=https://your-backend-name.onrender.com
```

## How to Use:

1. **For Local Development**:
   - Create `.env` file with localhost URL
   - Run: `npm install`
   - Run: `npm run dev`
   - App will run on http://localhost:5173

2. **For Production Deployment**:
   - Add environment variable in Vercel Dashboard
   - Go to: Project Settings → Environment Variables
   - Add: `VITE_API_URL` with your Render backend URL
   - Redeploy if needed

## Important Notes:

- ⚠️ NEVER commit `.env` file to Git
- ✅ `.env` is already in `.gitignore`
- 🔄 After changing `.env`, restart dev server
- 📦 Vite automatically loads variables starting with `VITE_`
- 🔒 Only expose variables needed by the browser

