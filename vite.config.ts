import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

const p = (src: string) => resolve(__dirname, src);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    devTarget: 'es2015',
  })],
  resolve: {
    alias: [
      { find: '@src', replacement: p('./src') },
      { find: '@assets', replacement: p('./src/assets') },
      { find: '@components', replacement: p('./src/components') },
      { find: '@hooks', replacement: p('./src/hooks') },
      { find: '@pages', replacement: p('./src/pages') },
      { find: '@stores', replacement: p('./src/stores') },
      { find: '@styles', replacement: p('./src/styles') },
      { find: '@utils', replacement: p('./src/utils') },
    ],
  },
  preview: {
    open: true,
    port: 3000,
  },
  build: {
    outDir: 'dist',
    target: 'es2015',
  },
});
