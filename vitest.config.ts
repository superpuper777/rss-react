import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup',
    testTimeout: 60000,
  },
});
