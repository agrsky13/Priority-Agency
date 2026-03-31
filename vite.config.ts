import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'mobile-url',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          const url = req.url ?? ''
          if (url === '/mobile' || url.startsWith('/mobile?')) {
            req.url =
              url === '/mobile' ? '/mobile.html' : '/mobile.html' + url.slice('/mobile'.length)
          }
          next()
        })
      }
    }
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        mobile: 'mobile.html'
      }
    }
  }
}) 