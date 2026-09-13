import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

/**
 * GitHub Pages base path — change ONLY this value when deploying:
 * - User site (USERNAME.github.io):           '/'
 * - Project site (USERNAME.github.io/REPO):   '/REPO/'
 */
const GITHUB_PAGES_BASE = '/Deepak-Portfolio/'

export default defineConfig({
  base: GITHUB_PAGES_BASE,
  plugins: [react(), tailwindcss()],
})
