import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      outDir: 'dist',
      input: {
        main: 'index.html',
        projects: 'projects.html',
        minecraft: 'minecraft.html'
      },
    },
  },
  publicDir: 'public'
})
