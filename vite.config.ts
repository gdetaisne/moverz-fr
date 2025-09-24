import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig(() => {
  const base = process.env.VITE_BASE || '/';
  return {
    base,
    plugins: [react()],
    resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
    server: {
      port: 5173,
      host: true,
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
    },
  };
});
