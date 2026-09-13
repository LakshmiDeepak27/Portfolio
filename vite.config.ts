import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

/**
 * Custom Domain Configuration for lakshmideepak.tech:
 * Custom domains are hosted at root ('/').
 */
const BASE_PATH = process.env.VITE_BASE || '/'

export default defineConfig({
  base: BASE_PATH,
  plugins: [react(), tailwindcss()],
})
