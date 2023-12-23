import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@splinetool/react-spline': './path/to/your/src/@splinetool/react-spline',
    },
  },
  optimizeDeps: {
    include: ['src/components/Hero.jsx'],
  },
});
