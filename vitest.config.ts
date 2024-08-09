
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    // Import the setup file (runs before tests)
    // This way we don't need to import the custom matchers in every test file
    setupFiles: 'tests/setup.ts'
  }
});
