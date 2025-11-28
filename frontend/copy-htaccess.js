// Copy .htaccess to dist folder after build
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

