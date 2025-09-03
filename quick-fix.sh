#!/bin/bash

echo "🔧 Quick Fix for React Webteck Setup"
echo "=================================="

# Check Node version
echo "📋 Checking Node.js version..."
node --version

# Clean up
echo "🧹 Cleaning up old files..."
rm -rf node_modules package-lock.json

# Use the simpler package.json
echo "📦 Using simpler package.json..."
cp package-simple.json package.json

# Set environment variables
echo "⚙️  Setting environment variables..."
export SKIP_PREFLIGHT_CHECK=true
export GENERATE_SOURCEMAP=false

# Try different installation methods
echo "📥 Attempting installation..."

if command -v yarn &> /dev/null; then
    echo "Using Yarn..."
    yarn install
elif npm install --legacy-peer-deps; then
    echo "✅ NPM installation successful!"
else
    echo "❌ Installation failed. Please try manually:"
    echo "1. npm cache clean --force"
    echo "2. npm install --legacy-peer-deps"
    echo "3. Or use Node.js version 16"
fi

echo "🚀 Try running: npm start"