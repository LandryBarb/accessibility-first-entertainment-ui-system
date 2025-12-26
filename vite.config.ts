import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },


  test: {
    environment: 'jsdom',
 // ✅ Only run OUR tests
    include: ['tests/unit/**/*.{test,spec}.ts'],

    // ✅ Never touch these
    exclude: [
      'node_modules',
      'tests/e2e/**'
    ],

    // ✅ Vitest-only setup
    setupFiles: './src/test/setup.ts',

    globals: true
  }
})
