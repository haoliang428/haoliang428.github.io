// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://haoliang428.github.io',
  base: '/personal-website',
  vite: {
    plugins: [tailwindcss()]
  }
});
