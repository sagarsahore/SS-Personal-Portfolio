# How to Run This Portfolio

This React application requires a development server or proper build process to run.

## Development Mode (Recommended)

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to `http://localhost:3000`

## Production Build

1. Build the application:
   ```bash
   npm run build
   ```

2. Preview the build:
   ```bash
   npm run preview
   ```

3. Open your browser to `http://localhost:4173`

## Important Notes

- **DO NOT** open `index.html` directly in a browser - it will not work
- The application uses ES modules and JSX which require a build process
- For deployment, use the `dist` folder created by `npm run build`
- Deploy the `dist` folder to services like Vercel, Netlify, or GitHub Pages

## Deployment Options

### GitHub Pages
```bash
npm run build
# Then deploy the dist folder to GitHub Pages
```

### Vercel/Netlify
- Connect your repository
- Set build command: `npm run build`
- Set output directory: `dist`
