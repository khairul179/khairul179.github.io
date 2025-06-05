import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from './src/emailjs.config.js';

export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_APP_EMAILJS_SERVICE_ID': JSON.stringify(EMAILJS_SERVICE_ID),
    'import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID': JSON.stringify(EMAILJS_TEMPLATE_ID),
    'import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY': JSON.stringify(EMAILJS_PUBLIC_KEY),
  },
  base: './',
});
