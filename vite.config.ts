import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

/**
 * GitHub Pages deployment configuration:
 * For repository https://github.com/LakshmiDeepak27/Portfolio
 */
const BASE_PATH = process.env.VITE_BASE || '/Portfolio/'

export default defineConfig({
  base: BASE_PATH,
  plugins: [react(), tailwindcss()],
})
