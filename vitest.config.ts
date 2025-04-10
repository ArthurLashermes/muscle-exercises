import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'], // uniquement tes tests
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'], // exclude explicite
  },
})
