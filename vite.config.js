import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'fix-three-luminance-format',
      transform(code, id) {
        if (id.includes('three-stdlib')) {
          return code.replace(/LuminanceFormat(?:,\s*|\s+})/g, (m) => m.endsWith('}') ? '}' : '')
        }
        return null
      },
    },
  ],
  optimizeDeps: {
    exclude: ['three-stdlib'],
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning?.message?.includes('direct `eval`') || warning?.includes?.('direct `eval`')) return
        warn(warning)
      },
    },
  },
})
