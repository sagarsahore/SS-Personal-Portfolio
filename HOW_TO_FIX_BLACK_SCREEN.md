# Fixing the Black Screen Issue

## Why You See a Black Screen

If you're seeing a black screen when trying to view your portfolio, it's because:

1. **You opened `index.html` directly in your browser** (double-clicked the file)
   - This doesn't work because the application uses ES modules and JSX
   - Modern browsers don't allow ES modules to run from `file://` protocol for security reasons

2. **Required external resources aren't loading**
   - The application needs Tailwind CSS from CDN
   - Without CSS, the page appears black (the background is intentionally black)

## The Solution

### Step 1: Install Dependencies (One Time Only)
Open your terminal/command prompt in the project folder and run:
```bash
npm install
```

### Step 2: Start the Development Server
Run this command:
```bash
npm run dev
```

### Step 3: Open in Browser
You should see output like:
```
➜  Local:   http://localhost:3000/
```

Open **http://localhost:3000/** in your browser (not the file directly!)

## For Production/Deployment

If you want to deploy the site to a hosting service:

```bash
# Build the production version
npm run build

# Test the production build locally
npm run preview
```

Then upload the `dist` folder to your hosting service (Vercel, Netlify, GitHub Pages, etc.)

## Still Having Issues?

Make sure:
- ✅ Node.js is installed (check with `node --version`)
- ✅ You ran `npm install` first
- ✅ Port 3000 is not being used by another application
- ✅ You're opening http://localhost:3000 in the browser, NOT opening index.html directly
- ✅ Your internet connection is working (for CDN resources)

## Quick Test

Run these commands in order:
```bash
npm install
npm run dev
```

If you see "VITE ready" message, open http://localhost:3000 in your browser. You should see the portfolio!
