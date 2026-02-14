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
   css:{
    preprocessorOptions:{
      scss:{
        // Auto-import your settings and tools into every Vue component
        additionalData:
        `
        @use "sass:map";
        @use "sass:math";
        @use "@/styles/settings" as *;
        @use "@/styles/tools" as *;
        `
      }
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
