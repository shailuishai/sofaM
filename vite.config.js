import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Современные браузеры для меньшего веса бандла
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Выносим тяжелый Framer Motion в отдельный файл
            if (id.includes('framer-motion')) {
              return 'framer-motion';
            }
            // Выносим React и остальные зависимости в отдельный файл
            return 'vendor';
          }
        }
      }
    }
  }
})