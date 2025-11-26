// Copy .htaccess to dist folder after build
const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, '.htaccess');
const dest = path.join(__dirname, 'dist', '.htaccess');

try {
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, dest);
    console.log('✅ .htaccess copied to dist folder');
  } else {
    console.log('⚠️  .htaccess not found in frontend folder');
  }
} catch (error) {
  console.error('❌ Error copying .htaccess:', error.message);
}

