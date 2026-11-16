import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// On Netlify the site is served from the domain root, so assets must load from "/".
// The "/devstack-company-website/" sub-path is only needed for GitHub Pages project URLs.
export default defineConfig({
  plugins: [react()],
  base: process.env.NETLIFY ? '/' : '/devstack-company-website/',
})
