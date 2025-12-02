import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1500, // Increase limit to 1500 kB to suppress warning
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code into separate chunks for better caching
          'react-vendor': ['react', 'react-dom'],
          'firebase-vendor': ['firebase/app', 'firebase/auth', 'firebase/firestore'],
        }
      }
    }
  }
})
