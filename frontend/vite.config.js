import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),   // so you can use "@/components/Button"
    },
  },
  server: {
    port: 5173,   // you can change the dev server port if needed
    open: true,   // auto-open browser on dev start
  },
  build: {
    sourcemap: false,  // disable sourcemaps for production
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'animations': ['framer-motion'],
          'swiper': ['swiper']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    minify: 'esbuild',  // Use esbuild instead of terser (faster)
    // Copy .htaccess to dist folder
    copyPublicDir: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion']
  },
})


