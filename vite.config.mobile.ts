import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',
  publicDir: 'public',
  build: {
    rollupOptions: {
      input: {
        mobile: 'mobile.html'
      }
    }
  },
  server: {
    port: 3003,
    open: '/mobile.html'
  }
}) 