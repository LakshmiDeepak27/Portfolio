import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

/**
 * Base path configuration:
 * - If using a custom domain (e.g., deepak.me or via Vercel): '/'
 * - If using default GitHub Pages repository URL (https://LakshmiDeepak27.github.io/Portfolio/): '/Portfolio/'
 */
const BASE_PATH = process.env.VITE_BASE || '/Portfolio/'

export default defineConfig({
  base: BASE_PATH,
  plugins: [react(), tailwindcss()],
})
