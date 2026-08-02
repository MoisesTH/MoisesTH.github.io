import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  // Configuración flexible de base path para GitHub Pages
  // Si existe VITE_BASE_PATH en GitHub Actions se usará; de lo contrario se usa './' para enlaces relativos
  const base = process.env.VITE_BASE_PATH || (mode === 'production' ? './' : '/');

  return {
    base: base,
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
