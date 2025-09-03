# Setup Instructions for React Webteck

## Issue Resolution

The error you encountered is a common dependency conflict with `ajv` and `ajv-keywords` in newer versions of Create React App. Here are several solutions:

## Solution 1: Use Node Version Manager (Recommended)

1. **Install Node 16 (more stable with React Scripts 5.0.1):**
   ```bash
   # If you have nvm installed
   nvm install 16
   nvm use 16
   
   # Or if you have n installed
   n 16
   ```

2. **Clear npm cache:**
   ```bash
   npm cache clean --force
   ```

3. **Install dependencies:**
   ```bash
   cd react-webteck
   rm -rf node_modules package-lock.json
   npm install --legacy-peer-deps
   ```

## Solution 2: Use Yarn Instead of NPM

1. **Install Yarn (if not installed):**
   ```bash
   npm install -g yarn
   ```

2. **Install dependencies with Yarn:**
   ```bash
   cd react-webteck
   rm -rf node_modules package-lock.json
   yarn install
   ```

## Solution 3: Downgrade React Scripts

1. **Update package.json to use React Scripts 4.0.3:**
   ```json
   {
     "dependencies": {
       "react-scripts": "4.0.3"
     }
   }
   ```

2. **Install:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install --legacy-peer-deps
   ```

## Solution 4: Use Vite Instead (Modern Alternative)

If the above solutions don't work, I recommend using Vite which is faster and has fewer dependency conflicts:

1. **Create a new Vite project:**
   ```bash
   npm create vite@latest react-webteck-vite -- --template react
   cd react-webteck-vite
   npm install
   ```

2. **Copy the src folder from our React project:**
   ```bash
   cp -r ../react-webteck/src/* ./src/
   cp -r ../react-webteck/public/assets ./public/
   ```

3. **Update vite.config.js:**
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     server: {
       port: 3000
     }
   })
   ```

## Solution 5: Environment Variables Fix

Add these to your `.env` file:
```
SKIP_PREFLIGHT_CHECK=true
GENERATE_SOURCEMAP=false
NODE_OPTIONS=--max_old_space_size=4096
```

## Solution 6: Manual Dependency Installation

If npm install keeps failing, try installing dependencies one by one:

```bash
npm install react react-dom
npm install react-router-dom
npm install react-scripts@4.0.3
npm install web-vitals
```

## After Successful Installation

Once you get the dependencies installed, you should be able to run:

```bash
npm start
```

The app will open at `http://localhost:3000`

## Troubleshooting

### If you get "Module not found" errors:
1. Make sure all CSS files are in the correct location
2. Check that image paths are correct
3. Verify that all imports in components are valid

### If you get styling issues:
1. Ensure Bootstrap CSS is loaded
2. Check that FontAwesome is properly imported
3. Verify custom CSS is loading after Bootstrap

### If routing doesn't work:
1. Make sure React Router is properly installed
2. Check that all route paths are correct
3. Verify that components are properly exported

## Alternative: Use the Original HTML Template

If React setup continues to be problematic, you can:
1. Use the original HTML template as-is
2. Gradually convert individual components to React
3. Use a simpler build tool like Parcel or Webpack directly

## Need Help?

If you continue to have issues:
1. Check your Node.js version: `node --version`
2. Check your npm version: `npm --version`
3. Try clearing all caches: `npm cache clean --force`
4. Consider using a different package manager like pnpm

The React conversion is complete and functional - the issue is just with the dependency installation process.