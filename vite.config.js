import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/e-plantShopping",
  // base: "/YOUR_REPO_NAME",
  plugins: [react()],
})

// https://github.com/poppychss/e-plantShopping.gi