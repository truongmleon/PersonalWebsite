import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        works: 'works.html',
        blog: 'blog.html',
        contact: 'contact.html'
      },
    },
  },
  publicDir: 'public'
})
