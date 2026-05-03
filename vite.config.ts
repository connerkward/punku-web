import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Repo is served at https://connerkward.github.io/punku-web/
// `base` set in CI via VITE_BASE; defaults to "/" for local dev.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE ?? '/',
})
