import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import cors from 'cors';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },

    // @ts-expect-error
    middlewares: [
      cors(), // Добавляем middleware для обработки CORS
    ],
  },
});
