import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
    },
    include: ['src/**/*.test.jsx'],
  },
});