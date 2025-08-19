import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: If you deploy to GitHub Pages under a project repo (e.g. username.github.io/REPO_NAME),
// set the `base` to '/REPO_NAME/' before building & deploying.
export default defineConfig({
  plugins: [react()],
  // base: '/REPO_NAME/',
})
