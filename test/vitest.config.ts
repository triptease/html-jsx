import { defineConfig } from 'vitest/config';
import * as path from 'node:path';

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@triptease/html-jsx/jsx-dev-runtime',
        replacement: path.resolve(__dirname, '../src/jsx-dev-runtime.js'),
      },
      { find: '@triptease/html-jsx/jsx-runtime', replacement: path.resolve(__dirname, '../src/jsx-runtime.js') },
      { find: '@triptease/html-jsx', replacement: path.resolve(__dirname, '../src/index.js') },
    ],
  },
  test: {
    setupFiles: [path.resolve(__dirname, './setup.ts')],
  },
});
