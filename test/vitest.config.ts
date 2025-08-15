import { defineConfig } from 'vitest/config';
import * as path from 'node:path';

export default defineConfig({
  resolve: {
    alias: {
      '@triptease/html-jsx': path.resolve(__dirname, '../src'),
    },
  },
  test: {
    setupFiles: [path.resolve(__dirname, './setup.ts')],
  },
});
