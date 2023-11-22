import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import '@fontsource/roboto';

export default defineConfig({
  base: './',
  plugins: [react()],
  css: {
    fontFamily: 'Roboto',
  },
});
