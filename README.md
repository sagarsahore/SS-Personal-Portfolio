<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Sagar Sahore - Personal Portfolio

A modern, interactive portfolio built with React, Three.js, and Framer Motion, featuring proper Tailwind CSS integration.

View your app in AI Studio: https://ai.studio/apps/drive/1C_5kGm2lPZFlEiki8O3PFb8aCcaX-iHb

## 🚀 Quick Start

### Development Mode (Local)

**Prerequisites:** Node.js (v14 or higher)

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Production Build

```bash
# Build the application
npm run build

# Preview the production build locally
npm run preview

# Open http://localhost:4173 in your browser
```

## 📦 Deployment

### GitHub Pages (Automatic)

This repository is configured with GitHub Actions for automatic deployment to GitHub Pages.

1. Go to your repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to the `main` branch
4. The site will automatically build and deploy

Your site will be available at: `https://sagarsahore.github.io/SS-Personal-Portfolio/`

### Manual Deployment to Other Platforms

**Vercel:**
```bash
npm install -g vercel
vercel
```

**Netlify:**
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

## ✨ What's Fixed

- ✅ **Tailwind CSS** now installed locally (no CDN dependency)
- ✅ **Proper build configuration** for production
- ✅ **GitHub Pages support** with automatic deployment
- ✅ **Works offline** after build (no external dependencies for styles)
- ✅ **Fast and reliable** styling that loads instantly

## 📁 Project Structure

```
SS-Personal-Portfolio/
├── src/
│   └── index.css          # Tailwind CSS with custom styles
├── components/            # React components
├── index.jsx             # Main entry point
├── App.jsx               # App component
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
├── vite.config.ts        # Vite configuration
└── .github/workflows/    # GitHub Actions for deployment
```

## 🛠️ Technical Stack

- **React 18.2** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework (locally installed)
- **Three.js** - 3D graphics
- **Framer Motion** - Animations
- **React Router** - Client-side routing

## 🐛 Troubleshooting

**Black screen when opening?**
- Don't open `index.html` directly - use `npm run dev`
- Make sure all dependencies are installed with `npm install`
- Check that port 3000 is not being used by another application

**Build errors?**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Try `npm run build` again

## 📄 License

© 2025 Sagar Sahore. All rights reserved.
