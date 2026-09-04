import tailwindcss from '@tailwindcss/postcss';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/silver-state-home-services/',
  css: { postcss: { plugins: [tailwindcss()] } },
  plugins: [react()],
});
