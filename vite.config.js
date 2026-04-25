import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext', // современные браузеры (меньше полифиллов)
    minify: 'esbuild', // быстрый минификатор
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Отделяем Framer Motion в отдельный чанк, он тяжелый
            if (id.includes('framer-motion')) {
              return 'framer-motion';
            }
            return 'vendor';
          }
        }
      }
    }
  },
  esbuild: {
    drop: ['console', 'debugger'], // Удаляем логи на проде
  }
})