import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    sourcemap: false,
    cssCodeSplit: true,
    esbuild: {
      drop: ['console', 'debugger'],
    },
    rollupOptions: {
      output: {
        // deterministic hashing for long-term caching
        chunkFileNames: 'assets/chunk-[name]-[hash].js',
        entryFileNames: 'assets/entry-[name]-[hash].js',
        assetFileNames: 'assets/asset-[name]-[hash][extname]',
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-icons')) return 'icons';
            if (id.includes('lucide-react')) return 'icons';
            if (id.includes('react')) return 'react-vendor';
            return 'vendor';
          }
        },
      },
    },
    target: 'es2019',
    minify: 'esbuild',
  },
})
