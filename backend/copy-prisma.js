const fs = require('fs');
const path = require('path');

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Copy generated Prisma client to dist
const srcDir = path.join(__dirname, 'src', 'generated');
const destDir = path.join(__dirname, 'dist', 'generated');

if (fs.existsSync(srcDir)) {
  copyDir(srcDir, destDir);
  console.log('✓ Copied Prisma generated client to dist/generated');
} else {
  console.warn('⚠ Prisma generated client not found. Run: npm run prisma:generate');
}

